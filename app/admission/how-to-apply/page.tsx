import { PageHeader, SiteShell } from "@/components/site-shell";

export default function HowToApplyPage() {
  return (
    <SiteShell>
      <PageHeader title="Как поступить" description="Пошаговая инструкция по выбору программы, подготовке документов и началу приёмного процесса." />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {[
            "Выберите программу, которая соответствует вашему интересу и будущей инженерной специальности.",
            "Проверьте актуальные требования: документы, форматы обучения и дополнительные условия приёмной комиссии.",
            "Подготовьте необходимые документы и сверьте их с требованиями официальной процедуры поступления.",
            "Подайте заявление через официальный канал приёмной комиссии или указанный университетом контактный способ.",
            "Получите актуальную информацию о результатах и дальнейшем порядке действий после проверки документов.",
          ].map((step, index) => (
            <div key={step} className="flex gap-5 rounded-[2rem] border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-lg font-black text-amber-600 dark:text-amber-300">{index + 1}</div>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
