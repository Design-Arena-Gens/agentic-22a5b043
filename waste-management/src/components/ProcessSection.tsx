import { CalendarCheck, ClipboardList, LineChart, Route } from "lucide-react";

const steps = [
  {
    title: "Waste intelligence audit",
    description:
      "Data capture across facilities, waste composition sampling, stakeholder interviews, and compliance gap analysis.",
    icon: ClipboardList,
  },
  {
    title: "Program blueprint",
    description:
      "Material recovery design, vendor sourcing, educational campaigns, and circular supply chain roadmaps.",
    icon: CalendarCheck,
  },
  {
    title: "Deployment & routing",
    description:
      "Container installation, smart sensor activation, and optimized hauling powered by dynamic routing algorithms.",
    icon: Route,
  },
  {
    title: "Measure & iterate",
    description:
      "Live dashboards, automated reporting, and continuous improvement sprints to keep diversion targets on track.",
    icon: LineChart,
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="space-y-5">
          <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-600">
            Proven methodology
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Integrated rollout from audit to impact.
          </h2>
          <p className="text-base text-slate-600">
            Every EcoCycle program blends engineering, behavioral science, and
            technology to deliver measurable results. Our team guides you
            through a collaborative four-phase journey, ensuring every site is
            optimized for diversion success.
          </p>
        </div>
        <div className="space-y-6">
          {steps.map(({ title, description, icon: Icon }, index) => (
            <div
              key={title}
              className="relative flex gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
                {index + 1}
              </span>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-lg font-semibold text-slate-900">
                    {title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
