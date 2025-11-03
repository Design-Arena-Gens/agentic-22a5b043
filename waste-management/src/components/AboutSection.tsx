const values = [
  {
    title: "Circular economy design",
    description:
      "We audit waste streams, map vendor networks, and implement closed-loop systems that return materials to production.",
  },
  {
    title: "Community partnerships",
    description:
      "From schools to hospitals, we co-create education programs that keep participation high and contamination low.",
  },
  {
    title: "Transparent reporting",
    description:
      "Live dashboards, compliance reports, and lifecycle analytics powered by our EcoCycle Insight platform.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Turning waste into measurable environmental wins.
          </h2>
          <p className="text-lg text-slate-600">
            EcoCycle is a full-stack waste management partner delivering
            tailored programs for municipalities, universities, and enterprise
            campuses. By combining intelligent routing, circular supply chain
            strategy, and behavior change campaigns, we help our clients hit
            zero-waste targets up to three years faster.
          </p>
          <p className="text-base text-slate-600">
            Our multidisciplinary team spans environmental engineers, data
            scientists, sustainability strategists, and on-the-ground service
            specialists working in sync to design resilient ecosystems.
          </p>
        </div>

        <div className="grid gap-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {value.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
