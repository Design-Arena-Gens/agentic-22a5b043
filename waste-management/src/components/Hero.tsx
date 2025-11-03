import Link from "next/link";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-sky-50"
    >
      <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="absolute -right-24 -bottom-12 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-28">
        <div className="max-w-xl space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1 text-sm font-medium text-emerald-600 shadow-sm backdrop-blur">
            Full-service zero-waste programs
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Smart waste management for cleaner, climate-resilient cities.
          </h1>
          <p className="text-lg text-slate-600 sm:text-xl">
            EcoCycle designs data-driven recycling, composting, and waste
            diversion systems that cut costs, increase compliance, and keep
            communities thriving.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-600"
            >
              Schedule a consultation
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-600"
            >
              Explore services
            </Link>
          </div>

          <dl className="grid gap-4 text-sm text-slate-600 sm:grid-cols-3 sm:text-center lg:text-left">
            <div className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-sm backdrop-blur">
              <dt className="text-xs uppercase tracking-wide text-emerald-500">
                Waste diverted
              </dt>
              <dd className="text-2xl font-semibold text-slate-900">
                2.1M tons
              </dd>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-sm backdrop-blur">
              <dt className="text-xs uppercase tracking-wide text-emerald-500">
                Customer savings
              </dt>
              <dd className="text-2xl font-semibold text-slate-900">$48M</dd>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-sm backdrop-blur">
              <dt className="text-xs uppercase tracking-wide text-emerald-500">
                Landfill reduction
              </dt>
              <dd className="text-2xl font-semibold text-slate-900">62%</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-200 via-sky-100 to-white blur-2xl" />
          <div className="relative rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur">
            <div className="grid gap-5 text-sm text-slate-700">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wide text-emerald-500">
                  Sensors online
                </p>
                <p className="mt-1 text-3xl font-semibold text-slate-900">
                  1,248
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Live fill-level monitoring across fleet containers.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-900 p-4 text-slate-100">
                <p className="text-xs uppercase tracking-wide text-emerald-300">
                  AI contamination alerts
                </p>
                <p className="mt-1 text-3xl font-semibold">98.7%</p>
                <p className="mt-2 text-xs text-slate-400">
                  Early warning accuracy using vision-powered sorting.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-wide text-emerald-500">
                  Regional impact
                </p>
                <ul className="mt-2 space-y-1 text-xs text-slate-500">
                  <li>• 47 cities launched</li>
                  <li>• 680 corporate campuses</li>
                  <li>• 840K households served</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
