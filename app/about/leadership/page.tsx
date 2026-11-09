import { PageHeader, SiteShell } from "@/components/site-shell";

export default function LeadershipPage() {
  return (
    <SiteShell>
      <PageHeader title="Руководство" description="Официальная информация о руководителях и административной структуре филиала." />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            { name: "Озубекова Раиса Акжоловна", role: "Директор филиала", note: "К.х.н., доцент." },
            { name: "Абдурахманов Сайтбек Кожомбердиевич", role: "Ранее директор", note: "К.т.н., доцент." },
            { name: "Ниязов Нуридин Тажибаевич", role: "Ранее директор", note: "К.т.н., доцент." },
          ].map((person) => (
            <div key={person.name} className="rounded-[2rem] border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 h-40 rounded-[1.5rem] bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.3),_rgba(15,23,42,0.9))]" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">{person.name}</h2>
              <p className="mt-2 text-amber-600 dark:text-amber-300">{person.role}</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{person.note}</p>
            </div>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
