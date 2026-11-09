import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays, ChevronRight, GraduationCap, MapPin, Sparkles, Zap } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SiteShell } from "@/components/site-shell";
import { campus, programs, quickLinks, stats } from "@/lib/site-data";

const tracks = [
  { code: "01", title: "Энергетика", text: "Сети, станции и автоматизация энергосистем", href: "/education/programs/electroenergetics", color: "sun" },
  { code: "02", title: "Строительство", text: "Гидротехнические и инфраструктурные проекты", href: "/education/programs/construction", color: "blue" },
  { code: "03", title: "Транспорт", text: "Безопасность дорожного движения и процессы", href: "/education/programs/transport-processes", color: "lime" },
  { code: "04", title: "Физика и математика", text: "Фундамент для науки и технического мышления", href: "/education/programs/physics-math", color: "ink" },
];

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        <section className="campus-hero">
          <div className="campus-hero__grid" />
          <div className="campus-hero__orbit campus-hero__orbit--one" />
          <div className="campus-hero__orbit campus-hero__orbit--two" />
          <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="mb-12 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-100/80">
              <span>КГТУ · Кара-Куль</span>
              <span className="hidden sm:block">Инженерное образование с 1963 года</span>
            </div>
            <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_.85fr]">
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur"><Sparkles className="h-4 w-4 text-lime-300" /> Цифровой кампус</div>
                <h1 className="max-w-4xl text-5xl font-black leading-[.92] tracking-[-.07em] text-white sm:text-7xl lg:text-[6.8rem]">ПРОЕКТИРУЕМ<br /><span className="text-lime-300">БУДУЩЕЕ.</span></h1>
                <p className="mt-8 max-w-xl text-lg leading-8 text-blue-50/85 sm:text-xl">Кара-Кульский технический институт КГТУ имени И. Раззакова — место, где инженерные знания становятся реальными решениями для региона.</p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/education" className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3.5 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-lime-200">Выбрать направление <ArrowRight className="h-4 w-4" /></Link>
                  <Link href="/admission" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 font-bold text-white transition hover:bg-white/20">Поступить <ArrowUpRight className="h-4 w-4" /></Link>
                </div>
              </div>
              <div className="relative z-10 ml-auto w-full max-w-md">
                <div className="hero-panel">
                  <div className="flex items-start justify-between"><span className="text-xs font-bold uppercase tracking-[.24em] text-blue-100/70">KARA-KUL / 01</span><Zap className="h-6 w-6 text-lime-300" /></div>
                  <div className="hero-panel__ring"><div className="hero-panel__core">K</div></div>
                  <div className="mt-8 flex items-end justify-between gap-4"><div><p className="text-4xl font-black text-white">1963</p><p className="mt-1 text-sm text-blue-100/70">год основания</p></div><p className="max-w-[155px] text-right text-xs leading-5 text-blue-100/70">Энергетика · Строительство · Транспорт · Наука</p></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8"><div className="hero-ticker"><span>01</span><span>Кара-Кульский технический институт</span><span className="ml-auto hidden sm:inline">Смотреть программы ↓</span></div></div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div><p className="eyebrow-modern">О институте</p><h2 className="display-heading">Сильная база.<br /><span>Большие задачи.</span></h2></div>
            <div><p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">История института началась с подготовки инженерных кадров для строительства Токтогульской ГЭС. Сегодня мы сохраняем эту связь с энергетикой, строительством и практикой.</p><div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">{stats.map((stat) => <div key={stat.label} className="metric-card"><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div><Link href="/about/history" className="mt-8 inline-flex items-center gap-2 font-bold text-blue-700 dark:text-lime-300">Посмотреть историю <ArrowRight className="h-4 w-4" /></Link></div>
          </div>
        </section>

        <section className="tracks-section"><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="eyebrow-modern">Образование</p><h2 className="display-heading">Найди своё <span>направление.</span></h2></div><Link href="/education" className="inline-flex items-center gap-2 font-bold text-blue-700 dark:text-lime-300">Все программы <ArrowUpRight className="h-4 w-4" /></Link></div><div className="mt-12 grid gap-4 md:grid-cols-2">{tracks.map((track) => <Link key={track.code} href={track.href} className={`track-card track-card--${track.color}`}><span className="track-card__code">{track.code}</span><div><h3>{track.title}</h3><p>{track.text}</p></div><ChevronRight className="track-card__arrow" /></Link>)}</div></div></section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"><div className="grid gap-5 lg:grid-cols-[1.25fr_.75fr]"><div className="story-card"><div><p className="eyebrow-modern text-lime-300">История и энергия</p><h2 className="max-w-2xl text-4xl font-black tracking-[-.05em] text-white sm:text-6xl">Инженерия — это способ менять мир.</h2><p className="mt-6 max-w-xl leading-7 text-blue-100/75">Мы готовим специалистов, которые умеют видеть систему целиком: от энергии и инфраструктуры до безопасного движения и научного поиска.</p></div><Link href="/about/history" className="mt-12 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-bold text-white hover:bg-white/10">Читать историю <ArrowRight className="h-4 w-4" /></Link></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1"><div className="info-tile"><CalendarDays className="h-6 w-6 text-blue-600" /><div><b>Поступление</b><p>Понятный маршрут для абитуриента</p></div><Link href="/admission"><ArrowUpRight className="h-5 w-5" /></Link></div><div className="info-tile"><GraduationCap className="h-6 w-6 text-blue-600" /><div><b>Личный кабинет</b><p>Регистрация и доступ к сервисам</p></div><Link href="/account"><ArrowUpRight className="h-5 w-5" /></Link></div><div className="info-tile"><MapPin className="h-6 w-6 text-blue-600" /><div><b>Мы рядом</b><p>Кара-Куль · улица Сабирова, 2</p></div><Link href="/contacts"><ArrowUpRight className="h-5 w-5" /></Link></div></div></div></section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28"><div className="contact-band"><div><p className="eyebrow-modern">Есть вопрос?</p><h2 className="text-3xl font-black tracking-[-.04em] sm:text-5xl">Давайте разберёмся вместе.</h2><p className="mt-4 max-w-lg text-slate-600 dark:text-slate-300">Напишите нам по вопросам поступления, программ и документов. Форма проверяет данные и готова к подключению официального канала приёма.</p></div><ContactForm /></div></section>

        <section className="bg-slate-950"><div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"><div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-lime-300">Быстрый доступ</p><p className="mt-2 text-xl font-bold text-white">Всё нужное — в одном месте.</p></div><div className="flex flex-wrap gap-2">{quickLinks.map((link) => <Link key={link.href} href={link.href} className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 hover:border-lime-300 hover:text-lime-300">{link.label}</Link>)}</div></div></div></section>
      </main>
    </SiteShell>
  );
}
