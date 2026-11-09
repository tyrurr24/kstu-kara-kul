import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import { PageHeader, SiteShell } from "@/components/site-shell";

export default function DocumentsPage() {
  return (
    <SiteShell>
      <PageHeader title="Документы" description="Каталог общественно доступных документов и материалов, требующих подтверждения до публикации официальных версий." />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {[
            "Положение о приёме",
            "Правила внутреннего распорядка",
            "Список образовательных программ",
            "Нормативные документы",
          ].map((item) => (
            <Link key={item} href="/about" className="flex items-center justify-between rounded-[1.5rem] border border-slate-200 bg-white p-5 text-slate-900 transition hover:border-amber-400 dark:border-slate-800 dark:bg-slate-900 dark:text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-600 dark:text-amber-300"><FileText className="h-5 w-5" /></div>
                <span className="font-semibold">{item}</span>
              </div>
              <ArrowRight className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
