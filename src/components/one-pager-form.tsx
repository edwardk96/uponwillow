"use client";

import { useState, useTransition } from "react";
import { requestOnePager } from "@/lib/actions/request-one-pager";
import { Button } from "@/components/ui/button";

type Props = {
  triggerLabel: string;
};

type FormState =
  | { status: "idle" }
  | { status: "open" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; fieldErrors: Record<string, string[]> };

export function OnePagerForm({ triggerLabel }: Props) {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [, startTransition] = useTransition();

  if (state.status === "idle") {
    return (
      <Button variant="secondary" onClick={() => setState({ status: "open" })}>
        {triggerLabel}
      </Button>
    );
  }

  if (state.status === "success") {
    return (
      <p className="text-sm text-secondary">
        Sent. Check your inbox in a moment.
      </p>
    );
  }

  const fieldErrors =
    state.status === "error"
      ? state.fieldErrors
      : ({} as Record<string, string[]>);

  return (
    <form
      className="flex flex-wrap items-start gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        setState({ status: "submitting" });
        startTransition(async () => {
          const result = await requestOnePager(formData);
          if (result.ok) {
            setState({ status: "success" });
          } else {
            setState({ status: "error", fieldErrors: result.fieldErrors });
          }
        });
      }}
    >
      <div className="flex flex-col">
        <input
          type="email"
          name="email"
          placeholder="you@firm.co.uk"
          required
          className="h-9 px-3 text-sm bg-card border-[0.5px] border-divider-strong rounded-md focus:outline-none focus:border-primary"
        />
        {fieldErrors.email?.[0] && (
          <p className="text-xs text-tertiary mt-1">{fieldErrors.email[0]}</p>
        )}
      </div>
      <div className="flex flex-col">
        <input
          type="text"
          name="firmName"
          placeholder="Firm name"
          required
          className="h-9 px-3 text-sm bg-card border-[0.5px] border-divider-strong rounded-md focus:outline-none focus:border-primary"
        />
        {fieldErrors.firmName?.[0] && (
          <p className="text-xs text-tertiary mt-1">
            {fieldErrors.firmName[0]}
          </p>
        )}
      </div>
      <Button variant="primary" disabled={state.status === "submitting"}>
        {state.status === "submitting" ? "Sending…" : "Send it"}
      </Button>
    </form>
  );
}
