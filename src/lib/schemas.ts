import { z } from "zod";

/**
 * Single source of truth for input shapes. Used both by client-side form
 * validation and server-side action validation (Tier 1.4 + 2.2).
 */

export const onePagerRequestSchema = z.object({
  email: z.email("Please enter a valid email address").max(254),
  firmName: z.string().min(1, "Firm name is required").max(200),
});

export type OnePagerRequest = z.infer<typeof onePagerRequestSchema>;
