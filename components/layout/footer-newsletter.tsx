"use client";

import { FormEvent, useState } from "react";

/**
 * Newsletter panel — Heist composition. No backend is configured;
 * submit surfaces an honest pending-integration message.
 */
export function FooterNewsletter() {
  const [status, setStatus] = useState<"idle" | "pending">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("pending");
  }

  return (
    <div className="relative w-full max-w-[34rem] border border-[#11100f] bg-[#e8e2d4] p-6 sm:p-8 md:p-10">
      <h2 className="type-h3 text-[#11100f]">Join Executive Forge.</h2>

      <form className="mt-8" onSubmit={onSubmit} noValidate>
        <label htmlFor="footer-email" className="sr-only">
          Email address
        </label>
        <div className="flex items-end gap-3 border-b border-[#11100f] pb-2">
          <input
            id="footer-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="EMAIL ADDRESS"
            className="footer-legal min-w-0 flex-1 bg-transparent py-1 text-[0.75rem] text-[#11100f] outline-none placeholder:text-[#11100f]/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11100f]"
          />
          <button
            type="submit"
            className="shrink-0 px-1 text-xl leading-none text-[#11100f] transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11100f]"
            aria-label="Submit email for newsletter"
          >
            →
          </button>
        </div>
        <p className="footer-legal mt-3 text-[#11100f]/55">
          {status === "pending"
            ? "Newsletter integration pending — email was not submitted."
            : "Newsletter service not connected yet."}
        </p>
      </form>

      {/* Decorative barcode — graphic detail from Heist reference */}
      <svg
        className="mt-8 h-8 w-full text-[#11100f]"
        viewBox="0 0 320 32"
        preserveAspectRatio="none"
        aria-hidden
      >
        {Array.from({ length: 48 }, (_, i) => {
          const x = i * 6.7;
          const w = [1.2, 2.4, 1.2, 3.6, 1.2, 2.4][i % 6];
          return (
            <rect key={i} x={x} y={4} width={w} height={24} fill="currentColor" />
          );
        })}
      </svg>
    </div>
  );
}
