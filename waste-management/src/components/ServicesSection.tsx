import {
  BarChart2,
  Building2,
  Factory,
  Leaf,
  Recycle,
  Truck,
} from "lucide-react";

const services = [
  {
    title: "Smart recycling infrastructure",
    description:
      "Site-specific recycling blueprints with sorting stations, material recovery partners, and behavior nudges.",
    icon: Recycle,
  },
  {
    title: "Organics & composting programs",
    description:
      "Aerated static piles, bio-digesters, and retail food rescue to keep organic waste out of landfill.",
    icon: Leaf,
  },
  {
    title: "Commercial hauling & fleet",
    description:
      "Electric and RNG-powered collection fleets with dynamic routing, contamination detection, and fill sensors.",
    icon: Truck,
  },
  {
    title: "EcoCycle Insight platform",
    description:
      "IoT monitoring, predictive analytics, and automated compliance reporting across all waste streams.",
    icon: BarChart2,
  },
  {
    title: "Industrial resource recovery",
    description:
      "By-product exchanges, metals recovery, and construction debris diversion for heavy industry.",
    icon: Factory,
  },
  {
    title: "Policy & compliance advisory",
    description:
      "Extended producer responsibility, waste audits, ESG reporting, and stakeholder engagement strategy.",
    icon: Building2,
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white/80 shadow-inner shadow-emerald-100/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Engineered services for every stream.
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Modular offerings to reduce contamination, lower hauling costs, and
            improve diversion performance across municipal, commercial, and
            industrial operations.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-100 opacity-0 transition group-hover:opacity-70" />
              <div className="relative flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="relative mt-4 text-sm text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
