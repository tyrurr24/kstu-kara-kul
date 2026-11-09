import Link from "next/link";
import { ArrowRight, BookOpenCheck, BriefcaseBusiness, FileText, ScrollText } from "lucide-react";
import { PageHeader, SiteShell } from "@/components/site-shell";

export default function AdmissionPage() {
  return (
    <SiteShell>
      <PageHeader title="Абитуриентам" description="Информация о поступлении, документах и основных шагах для абитуриентов." />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: "Как поступить", href: "/admission/how-to-apply", icon: <BookOpenCheck className="h-5 w-5" /> },
            { title: "Программы", href: "/admission/programs", icon: <BriefcaseBusiness className="h-5 w-5" /> },
            { title: "Документы", href: "/admission/documents", icon: <FileText className="h-5 w-5" /> },
            { title: "Стоимость", href: "/admission/tuition", icon: <ScrollText className="h-5 w-5" /> },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="rounded-[2rem] border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-600 dark:text-amber-300">{item.icon}</div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h2>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">Подробнее <ArrowRight className="h-4 w-4" /></div>
            </Link>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
