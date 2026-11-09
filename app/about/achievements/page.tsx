import { PageHeader, SiteShell } from "@/components/site-shell";

export default function AchievementsPage() {
  return (
    <SiteShell>
      <PageHeader title="Достижения" description="Научная и образовательная деятельность филиала, проверяемая соответствующими официальными источниками." />
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Информация о достижениях требует официального подтверждения</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Публикация конкретных наград и показателей проводится только после проверки достоверности данных.</p>
        </div>
      </div>
    </SiteShell>
  );
}
