import { PageHeader, SiteShell } from "@/components/site-shell";

export default function TeachersPage() {
  return (
    <SiteShell>
      <PageHeader title="Преподаватели" description="Профильный состав филиала и информация о преподавательском составе, которая должна подтверждаться официальными источниками." />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Список преподавателей будет добавлен после проверки официальных данных</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">На сайте предусмотрена отдельная страница с поиском, фильтрами и профилями, но содержимое не создаётся без подтверждения источников.</p>
        </div>
      </div>
    </SiteShell>
  );
}
