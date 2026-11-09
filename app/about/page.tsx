import Link from "next/link";
import { ArrowRight, Briefcase, FileText, Landmark, Users } from "lucide-react";
import { PageHeader, SiteShell } from "@/components/site-shell";

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHeader title="Об университете" description="История, управление, структура и документы Кара-Кульского филиала КГТУ имени И. Раззакова." />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: "История", text: "С 1963 года филиал является важной частью инженерного образования в регионе.", href: "/about/history", icon: <Landmark className="h-5 w-5" /> },
            { title: "Руководство", text: "Административная структура и официальные функции руководства филиала.", href: "/about/leadership", icon: <Users className="h-5 w-5" /> },
            { title: "Документы", text: "Правовые, учебные и административные материалы, доступные для сотрудников и абитуриентов.", href: "/about/documents", icon: <FileText className="h-5 w-5" /> },
            { title: "Достижения", text: "Научная и образовательная деятельность, отражающая достижения филиала.", href: "/about/achievements", icon: <Briefcase className="h-5 w-5" /> },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-600 dark:text-amber-300">{item.icon}</div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.text}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">Подробнее <ArrowRight className="h-4 w-4" /></div>
            </Link>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
