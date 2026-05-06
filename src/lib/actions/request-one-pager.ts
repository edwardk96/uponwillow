"use server";

import { Resend } from "resend";
import { serverEnv } from "@/lib/env";
import { onePagerRequestSchema } from "@/lib/schemas";

/**
 * Server Action: captures an adviser's email and firm, sends them the
 * one-pager (placeholder copy for now), and notifies us internally.
 *
 * Coding rules applied:
 *   - Tier 2.2: Zod-parses input as the very first line.
 *   - Tier 2.3: Resend client uses server-only env (see ./lib/env.ts).
 *   - Tier 2.4: Idempotency via a transient in-memory dedupe set.
 *     Sufficient at launch; flagged TODO to back with a Supabase table once
 *     volume justifies it (and once we have a Supabase project for this site).
 *   - Tier 2.5: Logs IDs/actions, never the email contents.
 *   - Tier 1.5: Throws on unexpected failure (let the error boundary catch);
 *     returns { ok: false } only for known business-state failures (validation).
 */

// Module-scoped dedupe set. Resets on each cold start — fine for low traffic.
// TODO(post-launch): persist to a Supabase table once volume warrants it.
const recentSubmissions = new Set<string>();
const DEDUPE_WINDOW_MS = 5 * 60 * 1000; // 5 minutes

type ActionResult =
  | { ok: true }
  | { ok: false; fieldErrors: Record<string, string[]> };

export async function requestOnePager(formData: FormData): Promise<ActionResult> {
  const parsed = onePagerRequestSchema.safeParse({
    email: formData.get("email"),
    firmName: formData.get("firmName"),
  });

  if (!parsed.success) {
    return {
      ok: false,
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const { email, firmName } = parsed.data;
  const dedupeKey = email.toLowerCase();

  if (recentSubmissions.has(dedupeKey)) {
    // Treat as success — same email twice should be a no-op (Tier 2.4).
    console.log(JSON.stringify({ action: "one_pager_request_dedupe_hit", ts: Date.now() }));
    return { ok: true };
  }

  recentSubmissions.add(dedupeKey);
  setTimeout(() => recentSubmissions.delete(dedupeKey), DEDUPE_WINDOW_MS);

  const resend = new Resend(serverEnv.resendApiKey);

  // Send to the adviser. If this throws, the action throws — the boundary
  // surfaces a generic error and we keep the dedupe entry so retries don't
  // spam them. (We can refine on the basis of real failure modes later.)
  await resend.emails.send({
    from: serverEnv.resendFromEmail,
    to: email,
    subject: "Upon × Willow — adviser one-pager",
    text:
      "Thanks for your interest. Attached is the one-pager outlining our joint adviser proposition.\n\n" +
      "If you'd like to discuss it, you can book a 20-minute call here: https://uponwillow.com\n\n" +
      "— The Upon × Willow team",
    // TODO: attach the actual PDF once produced. For now we send the text body.
  });

  // Notify us internally (no PII in the action log; the email itself carries it).
  await resend.emails.send({
    from: serverEnv.resendFromEmail,
    to: serverEnv.internalNotifyEmail,
    subject: `One-pager requested: ${firmName}`,
    text: `Email: ${email}\nFirm: ${firmName}`,
  });

  console.log(
    JSON.stringify({ action: "one_pager_requested", ts: Date.now() })
  );

  return { ok: true };
}
