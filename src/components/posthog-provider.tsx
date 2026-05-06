"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

type Props = {
  apiKey: string;
  apiHost: string;
};

/**
 * PostHog initialisation. Mounted once in the root layout.
 * Uses the reverse-proxy host to bypass ad-blockers (same pattern as Willow).
 */
export function PostHogProvider({ apiKey, apiHost }: Props) {
  useEffect(() => {
    if (!apiKey) return;
    if (posthog.__loaded) return;
    posthog.init(apiKey, {
      api_host: apiHost,
      capture_pageview: "history_change",
      capture_pageleave: true,
      person_profiles: "identified_only",
    });
  }, [apiKey, apiHost]);

  return null;
}
