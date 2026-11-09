"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, Moon, Search, Sun, X } from "lucide-react";
import Lenis from "lenis";
import { useEffect, useMemo, useState } from "react";
import { campus, navItems } from "@/lib/site-data";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const next = saved === "light" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      lerp: 0.08,
    });

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);
    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 transition-colors dark:bg-[#08131f] dark:text-slate-100">
      <Header theme={theme} onToggleTheme={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Header({ theme, onToggleTheme }: { theme: string; onToggleTheme: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const localeLinks = useMemo(
    () => [
      { label: "RU", href: "/ru" },
      { label: "KG", href: "/kg" },
      { label: "EN", href: "/en" },
    ],
    [],
  );

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "bg-slate-950/80 shadow-lg shadow-slate-950/10 backdrop-blur-xl" : "bg-slate-950/60 backdrop-blur-md"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Перейти на главную страницу">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/60 bg-amber-500/10 font-black text-amber-300">K</div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">KGTU</div>
            <div className="text-xs text-slate-400">Kara-Kul branch</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Основное меню">
          {navItems.map((item) => (
            <div key={item.href} className="group relative">
              <Link href={item.href} className="flex items-center gap-1 text-sm font-medium text-slate-200 transition hover:text-amber-300">
                {item.label}
                {item.children ? <ChevronDown className="h-4 w-4" /> : null}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-0 top-full mt-4 w-64 rounded-2xl border border-slate-800 bg-slate-950/95 p-3 opacity-0 shadow-2xl shadow-slate-950/30 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <ul className="space-y-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="block rounded-xl px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800 hover:text-amber-300">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <div className="flex rounded-full border border-slate-700 bg-slate-900/60 p-1">
            {localeLinks.map((locale) => (
              <Link
                key={locale.href}
                href={locale.href}
                className={`rounded-full px-2.5 py-1 text-xs font-medium transition ${pathname.startsWith(locale.href) ? "bg-amber-400 text-slate-950" : "text-slate-200"}`}
              >
                {locale.label}
              </Link>
            ))}
          </div>
          <button type="button" onClick={onToggleTheme} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-200 transition hover:text-amber-300" aria-label="Переключить тему">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link href="/search" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-200 transition hover:text-amber-300" aria-label="Поиск по сайту">
            <Search className="h-4 w-4" />
          </Link>
          <Link href="/admission/application" className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
            Подать заявку <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <button type="button" onClick={onToggleTheme} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-200" aria-label="Переключить тему">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button type="button" onClick={() => setOpen((prev) => !prev)} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-200" aria-label="Открыть меню">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-800 bg-slate-950/95 px-4 py-5 xl:hidden">
          <div className="space-y-4">
            {navItems.map((item) => (
              <div key={item.href} className="border-b border-slate-800 pb-3 last:border-b-0 last:pb-0">
                <Link href={item.href} className="block text-base font-medium text-slate-100" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="mt-2 space-y-2 pl-3">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="block text-sm text-slate-300" onClick={() => setOpen(false)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="flex items-center justify-between pt-3">
              <div className="flex gap-2">
                {localeLinks.map((locale) => (
                  <Link key={locale.href} href={locale.href} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-200" onClick={() => setOpen(false)}>
                    {locale.label}
                  </Link>
                ))}
              </div>
              <Link href="/admission/application" className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950" onClick={() => setOpen(false)}>
                Подать заявку
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow ? <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-amber-600 dark:text-amber-300">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p> : null}
    </div>
  );
}

export function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.25),transparent_35%)]" />
      <div className="relative mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-amber-300">{campus.shortName}</p>
        <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">{title}</h1>
        {description ? <p className="mt-5 max-w-2xl text-lg text-slate-300">{description}</p> : null}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-5">
          <div className="xl:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/60 bg-amber-500/10 font-black text-amber-300">K</div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">KGTU</div>
                <div className="text-sm text-slate-300">Кара-Кульский филиал</div>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-400">{campus.name}</p>
          </div>

          {[
            [
              { label: "Университет", href: "/about" },
              { label: "История", href: "/about/history" },
              { label: "Руководство", href: "/about/leadership" },
              { label: "Документы", href: "/about/documents" },
            ],
            [
              { label: "Образование", href: "/education" },
              { label: "Бакалавриат", href: "/education/bachelor" },
              { label: "Колледж", href: "/education/college" },
              { label: "Поступление", href: "/admission" },
            ],
            [
              { label: "Студентам", href: "/students" },
              { label: "Расписание", href: "/students/schedule" },
              { label: "Объявления", href: "/students/announcements" },
              { label: "Контакты", href: "/contacts" },
            ],
          ].map((group, index) => (
            <div key={index}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{index === 0 ? "Университет" : index === 1 ? "Образование" : "Студентам"}</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {group.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition hover:text-amber-300">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-sm text-slate-400">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} КГТУ им. И. Раззакова — Кара-Кульский филиал</p>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/privacy" className="transition hover:text-amber-300">Политика конфиденциальности</Link>
              <Link href="/accessibility" className="transition hover:text-amber-300">Доступность</Link>
              <a href={campus.officialSite} target="_blank" rel="noreferrer" className="transition hover:text-amber-300">Основной университет</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900/80 ${className}`}>{children}</div>;
}

export function MotionReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
