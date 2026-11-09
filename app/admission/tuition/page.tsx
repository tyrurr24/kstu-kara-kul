import { PageHeader, SiteShell } from "@/components/site-shell";

export default function TuitionPage() {
  return (
    <SiteShell>
      <PageHeader title="Стоимость обучения" description="Условия оплаты и стоимость обучения устанавливаются официальным порядком и проверяются приёмной комиссией." />
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Данные о стоимости обучения требуют официального подтверждения</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Не публикуются неподтверждённые цифры и формулировки без согласования с вузом.</p>
        </div>
      </div>
    </SiteShell>
  );
}
