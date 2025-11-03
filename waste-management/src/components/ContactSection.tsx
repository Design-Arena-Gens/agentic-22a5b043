'use client';

import { FormEvent, useState } from "react";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitted");
    event.currentTarget.reset();
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl shadow-emerald-200/30 backdrop-blur sm:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Ready to build your zero-waste roadmap?
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Tell us about your waste streams, timelines, and sustainability
            goals. A program strategist will reach out within one business day.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid gap-6 sm:grid-cols-2"
        >
          <div className="sm:col-span-2">
            <label
              htmlFor="organization"
              className="block text-sm font-semibold text-slate-700"
            >
              Organization
            </label>
            <input
              id="organization"
              name="organization"
              required
              placeholder="City of Cascadia, Ridge Manufacturing, etc."
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner shadow-slate-100 transition focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-200/60"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-slate-700"
            >
              Contact name
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder="Jane Smith"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner shadow-slate-100 transition focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-200/60"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-slate-700"
            >
              Work email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="you@organization.com"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner shadow-slate-100 transition focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-200/60"
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-semibold text-slate-700"
            >
              Primary location
            </label>
            <input
              id="location"
              name="location"
              required
              placeholder="City / State / Region"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner shadow-slate-100 transition focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-200/60"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="services"
              className="block text-sm font-semibold text-slate-700"
            >
              Services of interest
            </label>
            <select
              id="services"
              name="services"
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner shadow-slate-100 transition focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-200/60"
            >
              <option value="">Select an option</option>
              <option value="municipal-programs">Municipal waste program</option>
              <option value="commercial-hauling">
                Commercial hauling & fleet
              </option>
              <option value="organics-composting">Organics & composting</option>
              <option value="analytics-reporting">Analytics & reporting</option>
              <option value="policy-advisory">Policy & compliance advisory</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-slate-700"
            >
              Tell us about your goals
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner shadow-slate-100 transition focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-200/60"
              placeholder="Share timelines, pain points, or diversion targets…"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
            >
              Submit inquiry
            </button>
          </div>
        </form>

        {status === "submitted" && (
          <p className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-sm font-medium text-emerald-700">
            Thank you! A member of the EcoCycle team will be in touch within one
            business day.
          </p>
        )}
      </div>
    </section>
  );
}
