import { AccountPanel } from "@/components/account-panel";
import { PageHeader, SiteShell } from "@/components/site-shell";

export default function AccountPage() {
  return <SiteShell><PageHeader title="Личный кабинет" description="Регистрация и доступ к студенческим сервисам кампуса." /><section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><p className="eyebrow-modern">Student space</p><h2 className="mt-4 text-4xl font-black tracking-[-.05em]">Один вход для важных сервисов.</h2><p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">Сохраняйте выбранные программы, следите за заявками и получайте доступ к материалам кампуса.</p></div><AccountPanel /></div></section></SiteShell>;
}
