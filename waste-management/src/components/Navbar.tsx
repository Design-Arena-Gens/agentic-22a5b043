"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#impact", label: "Impact" },
  { href: "#resources", label: "Resources" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#top" className="group inline-flex items-center gap-2">
          <span className="rounded-full bg-emerald-500/15 p-2 text-emerald-600 transition group-hover:bg-emerald-500/25">
            ♻️
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            EcoCycle
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 transition hover:bg-emerald-50 hover:text-emerald-600"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-full bg-emerald-500 px-4 py-2 text-white shadow-sm transition hover:bg-emerald-600"
          >
            Request Pickup
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-emerald-200 hover:text-emerald-600 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {isOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 pb-6 pt-2 shadow-sm md:hidden">
          <div className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 transition hover:bg-emerald-50 hover:text-emerald-600"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="rounded-lg bg-emerald-500 px-3 py-2 text-center text-white shadow-sm transition hover:bg-emerald-600"
              onClick={() => setIsOpen(false)}
            >
              Request Pickup
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
