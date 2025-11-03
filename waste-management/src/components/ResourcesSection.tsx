import Link from "next/link";
import { ArrowUpRight, FileSpreadsheet, FileVideo, Newspaper } from "lucide-react";

const resources = [
  {
    title: "Circular Cities Playbook",
    description:
      "Step-by-step guide for municipalities to build scalable recycling and organics programs with community champions.",
    icon: Newspaper,
    href: "#",
    type: "Guide",
  },
  {
    title: "Zero-Waste Budget Calculator",
    description:
      "Interactive spreadsheet to model diversion ROI, hauling fees, emissions reductions, and grant eligibility.",
    icon: FileSpreadsheet,
    href: "#",
    type: "Tool",
  },
  {
    title: "Waste Innovation Summit 2024",
    description:
      "On-demand sessions covering AI vision sorting, EV fleet routing, and policy updates for extended producer responsibility.",
    icon: FileVideo,
    href: "#",
    type: "Webinar",
  },
];

export function ResourcesSection() {
  return (
    <section
      id="resources"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-600">
          Knowledge hub
        </span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Resources to accelerate your zero-waste roadmap.
        </h2>
        <p className="mt-4 text-base text-slate-600">
          Download playbooks, financial models, and on-demand trainings to help
          your teams plan, launch, and sustain high-performing diversion
          programs.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {resources.map(({ title, description, icon: Icon, href, type }) => (
          <Link
            key={title}
            href={href}
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
          >
            <div className="absolute -right-10 -top-14 h-28 w-28 rounded-full bg-emerald-100 opacity-0 transition group-hover:opacity-70" />
            <div className="relative space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-600">
                <Icon className="h-4 w-4" />
                {type}
              </span>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="text-sm text-slate-600">{description}</p>
            </div>
            <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-600">
              Access resource
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
