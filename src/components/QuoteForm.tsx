"use client";

import { useState, type FormEvent } from "react";
import { QUOTE_FORM_ENDPOINT, services } from "@/lib/site-config";

type FormStatus = "idle" | "submitting" | "success" | "error";

type FormErrors = Partial<
  Record<"fullName" | "email" | "phone" | "service" | "address" | "message", string>
>;

export function QuoteForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(data: FormData): FormErrors {
    const next: FormErrors = {};
    const fullName = String(data.get("fullName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "").trim();
    const address = String(data.get("address") || "").trim();

    if (fullName.length < 2) next.fullName = "Enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (!/^[+\d][\d\s()-]{6,}$/.test(phone)) next.phone = "Enter a valid phone number.";
    if (!service) next.service = "Select a service.";
    if (address.length < 4) next.address = "Enter the property address or postcode.";

    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const validationErrors = validate(data);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");

    try {
      // PLACEHOLDER — QUOTE_FORM_ENDPOINT in src/lib/site-config.ts can be
      // pointed at any backend (Formspree, Getform, a custom API route,
      // etc). Swap this fetch call out if the target service expects a
      // different request shape.
      const response = await fetch(QUOTE_FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-espresso-900/15 bg-paper px-4 py-3 text-sm text-espresso-900 placeholder:text-espresso-800/40 transition-colors focus:border-bronze-500 focus:outline-none focus:ring-2 focus:ring-bronze-500/20";
  const labelClass = "mb-1.5 block text-sm font-medium text-espresso-800";
  const errorClass = "mt-1.5 text-xs font-medium text-red-700";

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-bronze-500/25 bg-tan-400/10 p-8 text-center">
        <h3 className="font-display text-xl font-semibold text-espresso-900">
          Thanks — your request is in.
        </h3>
        <p className="mt-2 text-sm text-espresso-800/75">
          We&apos;ll come back to you with a quote shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-bronze-600 hover:text-bronze-500"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            className={inputClass}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
          {errors.fullName && (
            <p id="fullName-error" className={errorClass}>
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className={errorClass}>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className={errorClass}>
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="service">
            Service Required
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className={inputClass}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.key} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Multiple services">Multiple services</option>
          </select>
          {errors.service && (
            <p id="service-error" className={errorClass}>
              {errors.service}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="address">
          Property Address
        </label>
        <input
          id="address"
          name="address"
          type="text"
          placeholder="Street address or postcode"
          className={inputClass}
          aria-invalid={Boolean(errors.address)}
          aria-describedby={errors.address ? "address-error" : undefined}
        />
        {errors.address && (
          <p id="address-error" className={errorClass}>
            {errors.address}
          </p>
        )}
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us a little about the property and what you need"
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-red-700">
          Something went wrong sending your request. Please try again, or
          call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-espresso-900 px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-bronze-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request My Quote"}
      </button>
    </form>
  );
}
