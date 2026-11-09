import { PageHeader, SiteShell } from "@/components/site-shell";

export default function AdmissionDocumentsPage() {
  return (
    <SiteShell>
      <PageHeader title="Документы для поступления" description="Перечень документов и необходимых справок, уточняемых через официальную приёмную комиссию." />
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <ul className="space-y-4 text-lg text-slate-700 dark:text-slate-200">
          <li>• Документ об образовании</li>
          <li>• Паспорт или иной документ, удостоверяющий личность</li>
          <li>• Медицинские справки по установленной процедуре</li>
          <li>• Дополнительные документы, запрашиваемые приёмной комиссией</li>
        </ul>
      </div>
    </SiteShell>
  );
}
