"use client";

import { FormEvent, useState } from "react";

type FormState = {
  fullName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phoneNumber: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit enquiry");
      }

      setSuccess(true);
      setForm(initialState);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="premium-card space-y-5">
      <div>
        <h2 className="h2 !mb-0 text-brand-text dark:text-brand-heading">Contact Us</h2>
        <p className="mt-3 text-brand-body">
          Share your details below and we will get back to you as soon as possible.
        </p>
      </div>

      {success && (
        <div className="rounded-lg bg-green-50 p-4 text-green-800 dark:bg-green-900/30 dark:text-green-400">
          Your enquiry has been successfully submitted! We will contact you soon.
        </div>
      )}

      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-red-800 dark:bg-red-900/30 dark:text-red-400">
          {error}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-brand-text">Full Name</span>
          <input
            required
            type="text"
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            className="form-input"
            placeholder="Your name"
            disabled={loading}
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-brand-text">Email Address</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="form-input"
            placeholder="you@example.com"
            disabled={loading}
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-brand-text">Phone Number</span>
          <input
            required
            type="tel"
            value={form.phoneNumber}
            onChange={(event) => updateField("phoneNumber", event.target.value)}
            className="form-input"
            placeholder="6360646164"
            disabled={loading}
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-brand-text">Subject</span>
          <input
            required
            type="text"
            value={form.subject}
            onChange={(event) => updateField("subject", event.target.value)}
            className="form-input"
            placeholder="General Enquiry"
            disabled={loading}
          />
        </label>
      </div>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-brand-text">Message</span>
        <textarea
          required
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="form-input min-h-36 resize-y"
          placeholder="Tell us about your requirements"
          disabled={loading}
        />
      </label>

      <button type="submit" className="primary-button w-full justify-center sm:w-auto" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
