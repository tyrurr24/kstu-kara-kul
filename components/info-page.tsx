import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader, SiteShell } from "@/components/site-shell";

export function InfoPage({ title, description, items }: { title: string; description: string; items: { title: string; text: string; href?: string }[] }) {
  return <SiteShell><PageHeader title={title} description={description} /><section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"><div className="grid gap-5 md:grid-cols-2">{items.map((item) => <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900"><h2 className="text-2xl font-black text-slate-900 dark:text-white">{item.title}</h2><p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>{item.href && <Link href={item.href} className="mt-6 inline-flex items-center gap-2 font-bold text-blue-700 dark:text-lime-300">Открыть раздел <ArrowRight className="h-4 w-4" /></Link>}</article>)}</div></section></SiteShell>;
}
