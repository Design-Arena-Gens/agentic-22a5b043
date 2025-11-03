const testimonials = [
  {
    name: "Lina Porter",
    role: "Chief Sustainability Officer, Cascadia",
    quote:
      "EcoCycle helped us double diversion rates while cutting hauling costs by 24%. Their reporting dashboards keep city council and residents aligned every step of the way.",
  },
  {
    name: "Marcus Chen",
    role: "VP of Operations, Ridge Manufacturing",
    quote:
      "The EcoCycle team bridged our production and procurement teams to create usable by-products. We unlocked new revenue streams and hit our zero landfill pledge ahead of schedule.",
  },
  {
    name: "Monica Gardner",
    role: "Director of Facilities, Northshore Health",
    quote:
      "Training, signage, and contamination monitoring were tailored to our clinical environment. Compliance scores jumped, and our staff finally feels supported.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-br from-emerald-500/10 via-white to-sky-50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Trusted by sustainability leaders.
          </h2>
          <p className="mt-4 text-base text-slate-600">
            We partner with cities, universities, Fortune 500 campuses, and
            emerging climate startups to build thoughtful, data-rich programs
            that deliver lasting results.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
            >
              <blockquote className="text-sm text-slate-600">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-slate-900">
                {testimonial.name}
                <span className="mt-1 block text-xs font-normal uppercase tracking-wide text-emerald-600">
                  {testimonial.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
