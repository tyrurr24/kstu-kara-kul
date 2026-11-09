import Image from "next/image";
import { PageHeader, SiteShell } from "@/components/site-shell";
import { gallery } from "@/lib/site-data";

export default function GalleryPage() {
  return (
    <SiteShell>
      <PageHeader title="Фотогалерея" description="Фотоархив учебного процесса, инфраструктуры и событий филиала." />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
              <div className="relative h-72">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-5 font-semibold text-slate-900 dark:text-white">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
