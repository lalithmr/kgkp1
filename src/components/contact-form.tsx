"use client";

import { FormEvent, useState } from "react";

import { siteConfig } from "@/data/site";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Consultation Request from ${form.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Service Needed: ${form.service}`,
        "",
        "Message:",
        form.message,
      ].join("\n"),
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="premium-card space-y-5">
      <div>
        <h2 className="font-heading text-3xl text-brand-text">Contact Form</h2>
        <p className="mt-3 text-sm leading-7 text-brand-body">
          Share a few details and your preferred email client will open with a
          pre-filled consultation request.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-brand-text">Full Name</span>
          <input
            required
            type="text"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="form-input"
            placeholder="Your name"
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
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-brand-text">Phone Number</span>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="form-input"
            placeholder="6360646164"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-brand-text">Service</span>
          <input
            required
            type="text"
            value={form.service}
            onChange={(event) => updateField("service", event.target.value)}
            className="form-input"
            placeholder="Taxation, Audit, Registration..."
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
        />
      </label>

      <button type="submit" className="primary-button w-full justify-center sm:w-auto">
        Send Consultation Request
      </button>
    </form>
  );
}

