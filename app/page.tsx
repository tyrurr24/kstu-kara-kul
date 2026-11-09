import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, ChartNoAxesCombined, Compass, GraduationCap, MapPin, ShieldCheck, Sparkles, Star } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SiteShell, SectionHeading, MotionReveal, Card } from "@/components/site-shell";
import { campus, documents, faqItems, gallery, programs, quickLinks, stats, timeline } from "@/lib/site-data";

export default function HomePage() {
  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
            alt="Современный университетский корпус"
            fill
            priority
            className="object-cover opacity-70"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.2),_rgba(2,6,23,0.87))]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-amber-300">Образование • Инженерия • Будущее</p>
              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">Создаём инженеров будущего</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200/90">
                Филиал КГТУ имени И. Раззакова в Кара-Куле — техническое образование, инженерные знания и возможности для профессионального развития.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/education" className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-amber-300">
                  Выбрать направление <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/admission" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10">
                  Узнать о поступлении
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/40 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center justify-between text-sm text-slate-300">
                <span>Год основания</span>
                <span className="rounded-full border border-amber-400/50 bg-amber-500/10 px-3 py-1 text-amber-200">1963</span>
              </div>
              <div className="space-y-4">
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="border-b border-slate-800 pb-4 last:border-b-0 last:pb-0">
                    <div className="text-3xl font-black text-white">{stat.value}</div>
                    <div className="text-sm text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            eyebrow="О филиале"
            title="Более полувека инженерного образования"
            description="С 1963 года филиал играет важную роль в подготовке инженеров для энергетики, строительства и технического развития региона. История института тесно связана со строительством Токтогульской ГЭС и развитием высококвалифицированных кадров Кыргызстана."
          />
        </MotionReveal>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6 text-base leading-8 text-slate-600 dark:text-slate-300">
            <p>Кара-Кульский технический институт КГТУ им. И. Раззакова был образован как общетехнический факультет Фрунзенского политехнического института и стал важным центром подготовки инженеров для строительства гидроэлектростанций и энергетики южного региона.</p>
            <p>Сегодня филиал сохраняет сильную инженерную традицию и сочетает академическую базу с практико-ориентированным подходом к обучению, обеспечивая будущим специалистам знания, необходимые для современной отрасли.</p>
            <Link href="/about/history" className="inline-flex items-center gap-2 font-semibold text-slate-900 dark:text-white">Наша история <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[1.5rem]">
                <Image
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80"
                  alt="Учебный процесс в филиале"
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
                    alt="Инженерное обучение"
                    width={900}
                    height={900}
                    className="h-52 w-full object-cover"
                  />
                </div>
                <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.28em] text-amber-300">История</p>
                  <div className="mt-3 text-3xl font-black">1963</div>
                  <p className="mt-2 text-sm text-slate-300">Год официального начала инженерного образования в Кара-Куле.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20 dark:bg-[#081b2b]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <SectionHeading eyebrow="Направления" title="Найди своё направление" description="Выбирайте программу, которая соответствует вашему интересу и инженерным амбициям." />
          </MotionReveal>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {programs.map((program) => (
              <Link key={program.slug} href={`/education/programs/${program.slug}`} className="group block overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80"
                    alt={program.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/50" />
                </div>
                <div className="space-y-4 p-6">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
                    <span>{program.code}</span>
                    <span>{program.level}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{program.title}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{program.description}</p>
                  <div className="flex items-center justify-between pt-2 text-sm font-semibold text-slate-900 dark:text-white">
                    <span>Подробнее</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading eyebrow="Почему выбирают нас" title="Инженерная традиция, сильная база и реальные возможности" description="Филиал помогает студентам развивать техническое мышление, практические навыки и уверенность в своей будущей профессии." />
        </MotionReveal>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {[
            { icon: <GraduationCap className="h-6 w-6" />, title: "Инженерные традиции", text: "Сильная история подготовки специалистов для энергетики и строительства." },
            { icon: <Building2 className="h-6 w-6" />, title: "Техническое образование", text: "Практическая база и фундаментальные дисциплины инженерного профиля." },
            { icon: <Compass className="h-6 w-6" />, title: "Связь с регионом", text: "Подготовка специалистов для региона и его крупных инфраструктурных проектов." },
            { icon: <ChartNoAxesCombined className="h-6 w-6" />, title: "Практика", text: "Учебный процесс ориентирован на профессиональные задачи и компетенции." },
            { icon: <ShieldCheck className="h-6 w-6" />, title: "Развитие", text: "Формирование потенциала для дальнейшего профессионального роста." },
          ].map((item) => (
            <Card key={item.title} className="flex h-full flex-col gap-4 border-slate-200 bg-white/90 dark:border-slate-800 dark:bg-slate-900/80">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-600 dark:text-amber-300">{item.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{item.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="История и энергетика" title="Связь с гидроэнергетикой и инженерным развитием" description="Токтогульская ГЭС и инженерные кадры региона остаются одним из ключевых символов ценности технического образования в Кара-Куле." />
          <div className="mt-12 space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="grid gap-4 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 md:grid-cols-[120px_1fr] md:items-start">
                <div className="text-2xl font-black text-amber-300">{item.year}</div>
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <span className="inline-block h-3 w-3 rounded-full bg-amber-400" />
                    <span className="text-xl font-bold">{item.title}</span>
                  </div>
                  <p className="max-w-3xl text-slate-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading eyebrow="Студенческая жизнь" title="Лучшая среда для роста, общения и открытий" description="Научные проекты, мероприятия, спортивные активности и инициативы формируют полноценную университетскую среду." />
        </MotionReveal>
        <div className="grid gap-6 md:grid-cols-3">
          {gallery.slice(0, 3).map((image) => (
            <div key={image.title} className="group overflow-hidden rounded-[2rem]">
              <div className="relative h-80 overflow-hidden">
                <Image src={image.image} alt={image.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-lg font-bold">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-20 dark:bg-slate-950/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <SectionHeading eyebrow="Новости" title="Жизнь нашего университета" description="В этом разделе собраны актуальные новости и события. Если официальных публикаций нет, отображается корректное пустое состояние вместо вымышленных данных." />
          </MotionReveal>
          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white/70 p-10 text-center dark:border-slate-700 dark:bg-slate-900/60">
            <p className="text-lg font-semibold text-slate-900 dark:text-white">Пока нет подтверждённых новостей</p>
            <p className="mt-2 text-slate-600 dark:text-slate-300">На сайте включён безопасный пустой статус до появления официальных публикаций от учебного заведения.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Абитуриентам</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Твоё будущее начинается здесь</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Узнай о направлениях подготовки, условиях поступления и сделай первый шаг к инженерной профессии.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/admission/how-to-apply" className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-950 hover:bg-amber-300">Как поступить <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/admission/faq" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10">Задать вопрос</Link>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-[1.8rem] border border-slate-800 bg-slate-950/80 p-5 text-left transition hover:border-amber-400/80 hover:bg-slate-900">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-300"><Sparkles className="h-5 w-5" /></div>
                  <div className="text-lg font-semibold">{link.label}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading eyebrow="FAQ" title="Частые вопросы" description="Ответы построены на проверенных общественных данных и предназначены для безопасного навигационного сопровождения абитуриента." />
        </MotionReveal>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.q} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.q}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-20 dark:bg-[#091827]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Контакты" title="Свяжитесь с филиалом" description="Мы подготовили контактную информацию, форму обратной связи и быстрые ссылки для консультации." />
              <div className="space-y-5 text-slate-700 dark:text-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-amber-500" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p>{campus.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="mt-1 h-5 w-5 text-amber-500" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    {campus.phones.map((phone) => (
                      <p key={phone}>{phone}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {documents.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] bg-slate-100 p-5 dark:bg-slate-800">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-600 dark:text-amber-300"><BadgeCheck className="h-5 w-5" /></div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.category}</p>
                <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
