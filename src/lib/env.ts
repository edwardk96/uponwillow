import "server-only";

/**
 * Server-only env access. Importing this module from a Client Component
 * (or anything upstream of one) will fail at build time — that's the point.
 *
 * Coding rules: Tier 2.3 (server-only secrets stay server-only).
 */

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

export const serverEnv = {
  resendApiKey: required("RESEND_API_KEY"),
  // The "from" address Resend sends from. Must be a verified domain on Resend.
  resendFromEmail: required("RESEND_FROM_EMAIL"),
  // Where one-pager request notifications get cc'd internally.
  internalNotifyEmail: required("INTERNAL_NOTIFY_EMAIL"),
};
