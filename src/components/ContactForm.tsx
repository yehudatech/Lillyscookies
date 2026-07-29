"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Demo only — wire to your email tool or API later.
    setStatus("done");
    e.currentTarget.reset();
  }

  return (
    <div>
      <form
        className="flex flex-col gap-3 sm:flex-row sm:items-end"
        onSubmit={handleSubmit}
      >
        <label className="flex-1 text-sm font-medium text-cocoa">
          Email
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="mt-1.5 w-full rounded-2xl border border-cocoa/15 bg-sugar px-4 py-3 text-base text-cocoa outline-none ring-caramel/40 transition placeholder:text-cocoa-soft/50 focus:border-caramel focus:ring-2"
          />
        </label>
        <button
          type="submit"
          className="rounded-2xl bg-caramel px-6 py-3 text-sm font-semibold text-sugar transition hover:bg-cocoa"
        >
          Join the list
        </button>
      </form>
      {status === "done" && (
        <p className="mt-3 text-sm font-medium text-mint">
          Thanks! You&apos;re on the list.
        </p>
      )}
    </div>
  );
}
