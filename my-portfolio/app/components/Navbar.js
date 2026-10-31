"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  const handleNavigation = (href) => {
    closeMenu();

    if (pathname !== "/") {
      window.location.href = `/ ${ href } `;
      return;
    }

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-[#0b1120]/85 px-5 py-4 shadow-xl shadow-black/10 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400 text-sm font-black text-slate-950 transition-transform duration-300 group-hover:rotate-6">
              <img src="/myImage.jpeg" alt="my image" />
            </span>

            <span className="text-lg font-bold tracking-tight text-white">
              Om<span className="text-cyan-400">.</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.href)}
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition-all duration-200 hover:bg-white/5 hover:text-cyan-400"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Contact button */}
          <button
            onClick={() => handleNavigation("#contact")}
            className="hidden items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 md:flex"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="rounded-lg border border-white/10 p-2 text-white transition-colors hover:bg-white/10 md:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          className={`grid transition - all duration - 300 ease -in -out md:hidden ${
    isOpen
        ? "mt-4 grid-rows-[1fr] opacity-100"
        : "grid-rows-[0fr] opacity-0"
} `}
        >
          <div className="overflow-hidden">
            <div className="space-y-1 border-t border-white/10 pt-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.href)}
                  className="block w-full rounded-lg px-3 py-3 text-left text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-cyan-400"
                >
                  {link.name}
                </button>
              ))}

              <button
                onClick={() => handleNavigation("#contact")}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
              >
                Let's Talk
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}