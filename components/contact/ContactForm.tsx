"use client";

import { useState, type FormEvent } from "react";

/**
 * On-brand contact form (NOT an iframe). Client-side validation only.
 * No backend this phase — on success it shows a stub message and resets.
 * Error highlighting uses the brand accent (the design system has no red token).
 */
interface Errors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const fieldBase =
  "w-full rounded-[var(--radius-card)] border bg-bg px-4 py-3 text-sm outline-none transition-colors focus:border-accent-strong";

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(form: HTMLFormElement): Errors {
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    const e: Errors = {};
    if (!name) e.name = "Please enter your name.";
    if (!phone) e.phone = "Please enter your phone number.";
    else if (!/^[0-9+\-\s()]{7,}$/.test(phone))
      e.phone = "Please enter a valid phone number.";
    if (!email) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Please enter a valid email address.";
    if (!message) e.message = "Please enter a message.";
    return e;
  }

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      // TODO: wire Google Form formResponse endpoint + entry.XXXX field IDs
      setSubmitted(true);
      form.reset();
    }
  }

  const borderFor = (key: keyof Errors) =>
    errors[key] ? "border-accent-strong" : "border-border";

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      // TODO: wire Google Form formResponse endpoint + entry.XXXX field IDs
      action="#"
      method="post"
      className="space-y-5"
    >
      {submitted && (
        <p
          role="status"
          className="rounded-[var(--radius-card)] border border-accent-strong bg-accent/30 px-4 py-3 text-sm font-medium text-text"
        >
          Thank you — your message has been sent.
        </p>
      )}

      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          aria-invalid={!!errors.name}
          className={`mt-1.5 ${fieldBase} ${borderFor("name")}`}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-accent-strong">{errors.name}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            className={`mt-1.5 ${fieldBase} ${borderFor("phone")}`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-accent-strong">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            className={`mt-1.5 ${fieldBase} ${borderFor("email")}`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-accent-strong">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={!!errors.message}
          className={`mt-1.5 resize-y ${fieldBase} ${borderFor("message")}`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-accent-strong">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-[var(--radius-card)] bg-accent px-6 py-3 text-sm font-medium text-text transition-colors duration-200 hover:bg-accent-strong"
      >
        Send
      </button>
    </form>
  );
}
