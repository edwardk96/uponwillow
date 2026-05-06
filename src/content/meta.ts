/**
 * Site-wide configuration. Single source of truth for shared values
 * referenced across multiple components.
 */
export const siteMeta = {
  name: "Upon × Willow",
  domain: "uponwillow.com",
  url: "https://uponwillow.com",
  description:
    "Two products, one continuous service for financial advisers. A secure vault during your client's life, and a bereavement platform when the time comes.",
  contactEmail: "hello@uponwillow.com",
  // Replace with your real Cal.com booking URL once set up.
  calcomUrl: "https://cal.com/uponwillow/discovery",
  // Standalone product sites — used in the nav logo links.
  uponUrl: "https://uponvault.com",
  willowUrl: "https://withwillow.co.uk",
} as const;

export const navLinks = [
  { label: "How it works", href: "#journey" },
  { label: "For your clients", href: "#control" },
  { label: "Pricing", href: "#pricing" },
  { label: "Team", href: "#team" },
] as const;
