import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const footerLinks = [
  { label: "Solutions", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Impact", href: "#impact" },
  { label: "Resources", href: "#resources" },
];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com", label: "X" },
  { icon: Facebook, href: "https://www.facebook.com", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/90">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
              <span className="rounded-full bg-emerald-500/15 p-2 text-emerald-600">
                ♻️
              </span>
              EcoCycle
            </div>
            <p className="text-sm text-slate-500">
              Future-proof waste management for resilient communities and
              circular economies.
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-3 py-1 transition hover:bg-emerald-50 hover:text-emerald-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-6 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} EcoCycle Waste Management. Certified
            B-Corp. All rights reserved.
          </p>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-emerald-200 hover:text-emerald-600"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
