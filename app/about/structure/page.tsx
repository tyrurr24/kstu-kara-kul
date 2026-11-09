import { PageHeader, SiteShell } from "@/components/site-shell";

export default function StructurePage() {
  return (
    <SiteShell>
      <PageHeader title="Структура" description="Информационная карта подразделений и организационной модели филиала." />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Директорат",
            "Учебно-методический отдел",
            "Кафедры инженерных направлений",
            "Отдел организации учебного процесса",
            "Научная и методическая работа",
            "Административные службы",
          ].map((item) => (
            <div key={item} className="rounded-[2rem] border border-slate-200 bg-white p-6 text-center text-lg font-semibold text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-white">
              {item}
            </div>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
