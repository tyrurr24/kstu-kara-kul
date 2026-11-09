import { PageHeader, SiteShell } from "@/components/site-shell";

export default function BachelorPage() {
  return (
    <SiteShell>
      <PageHeader title="Бакалавриат" description="Профили и направления подготовки бакалавров в Кара-Кульском филиале КГТУ имени И. Раззакова." />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            "Электроэнергетика и электротехника",
            "Строительство",
            "Технология транспортных процессов",
            "Физико-математическое образование",
          ].map((program) => (
            <div key={program} className="rounded-[2rem] border border-slate-200 bg-white p-6 text-lg font-semibold text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-white">{program}</div>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
