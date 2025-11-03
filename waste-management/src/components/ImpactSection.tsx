const stats = [
  {
    label: "Average diversion rate",
    value: "74%",
    detail: "Across municipal deployments in 2023",
  },
  {
    label: "Carbon avoided",
    value: "182K tCO₂e",
    detail: "Verified reductions via EcoCycle Insight",
  },
  {
    label: "Customer satisfaction",
    value: "4.9 / 5",
    detail: "Net promoter score across 680 campuses",
  },
];

const stories = [
  {
    headline: "City of Cascadia",
    summary:
      "City-wide organics program launched across 420,000 residents with contamination down 37% in the first six months.",
    highlight: "62% landfill diversion within year one.",
  },
  {
    headline: "Northshore Health Network",
    summary:
      "Medical campuses across three states implemented reusable sterilization containers and closed-loop plastics.",
    highlight: "$3.4M annual savings with 95% regulatory compliance.",
  },
  {
    headline: "Ridge Manufacturing",
    summary:
      "Industrial symbiosis program connecting by-products with regional construction partners.",
    highlight: "Zero landfill status achieved for 11 facilities.",
  },
];

export function ImpactSection() {
  return (
    <section
      id="impact"
      className="bg-slate-900 bg-[radial-gradient(circle_at_top,_#1e293b,_#020617)] text-slate-100"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-300">
              Verified impact
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Sustainability returns you can quantify.
            </h2>
            <p className="text-base text-slate-300">
              We marry boots-on-the-ground operations with digital twins and
              emissions accounting. Every program includes dynamic dashboards,
              climate risk indicators, and executive-ready reporting packs.
            </p>
          </div>
          <div className="grid flex-1 gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-lg shadow-emerald-500/10 backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">
                  {stat.label}
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs text-slate-400">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.headline}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-emerald-500/10 backdrop-blur transition hover:border-emerald-200/50 hover:shadow-emerald-400/30"
            >
              <h3 className="text-lg font-semibold text-white">
                {story.headline}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{story.summary}</p>
              <p className="mt-4 text-sm font-medium text-emerald-200">
                {story.highlight}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
