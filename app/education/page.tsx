import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader, SiteShell } from "@/components/site-shell";
import { programs } from "@/lib/site-data";

export default function EducationPage() {
  return (
    <SiteShell>
      <PageHeader title="Образование" description="Основные направления подготовки, уровни образования и образовательные программы филиала." />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {programs.map((program) => (
            <Link key={program.slug} href={`/education/programs/${program.slug}`} className="rounded-[2rem] border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <div className="text-xs uppercase tracking-[0.22em] text-amber-600">{program.code}</div>
              <h2 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">{program.title}</h2>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{program.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">Подробнее <ArrowRight className="h-4 w-4" /></div>
            </Link>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
