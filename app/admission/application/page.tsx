import { ContactForm } from "@/components/contact-form";
import { PageHeader, SiteShell } from "@/components/site-shell";
export default function ApplicationPage(){return <SiteShell><PageHeader title="Заявка абитуриента" description="Оставьте вопрос или запрос на консультацию. Финальные условия приёма подтверждаются администрацией."/><section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8"><div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"><ContactForm/></div></section></SiteShell>}
