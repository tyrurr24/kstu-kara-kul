import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { PageHeader, SiteShell } from "@/components/site-shell";
import { programs } from "@/lib/site-data";

export default function ProgramPage({ params }: { params: { slug: string } }) {
  const program = programs.find((item) => item.slug === params.slug);

  if (!program) {
    notFound();
  }

  return (
    <SiteShell>
      <PageHeader title={program.title} description={`${program.code} • ${program.level}`} />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/education" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          <ArrowLeft className="h-4 w-4" /> Назад к программам
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs uppercase tracking-[0.24em] text-amber-600 dark:text-amber-300">{program.code}</p>
            <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white">{program.title}</h2>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">{program.description}</p>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Профили</h3>
              <ul className="mt-4 space-y-3 text-slate-700 dark:text-slate-200">
                {program.profiles.map((profile) => (
                  <li key={profile} className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-500" /> {profile}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-slate-200 bg-slate-100 p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Рекомендуемые сведения</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li>Описание образовательной программы</li>
              <li>Условия поступления</li>
              <li>Требования к профессиональным компетенциям</li>
              <li>Контакты для консультации</li>
            </ul>
          </aside>
        </div>
      </div>
    </SiteShell>
  );
}
