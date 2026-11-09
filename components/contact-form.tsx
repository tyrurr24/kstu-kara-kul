"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Введите имя"),
  email: z.string().email("Введите корректный email"),
  subject: z.string().min(2, "Укажите тему"),
  message: z.string().min(10, "Сообщение должно содержать минимум 10 символов"),
  consent: z.boolean().refine((val) => val, "Подтвердите согласие"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      consent: false,
    },
  });
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = async (values: FormValues) => {
    // Demo mode: the site is ready for a server action or API route.
    await new Promise((resolve) => setTimeout(resolve, 400));
    setStatus(`Форма проверена локально. Подключите серверный обработчик для отправки данных: ${values.subject}`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm">
          <span className="text-slate-700 dark:text-slate-200">Имя</span>
          <input {...register("name")} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white" placeholder="Ваше имя" />
          {errors.name ? <span className="text-sm text-red-500">{errors.name.message}</span> : null}
        </label>
        <label className="space-y-2 text-sm">
          <span className="text-slate-700 dark:text-slate-200">Email или телефон</span>
          <input {...register("email")} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white" placeholder="example@mail.com" />
          {errors.email ? <span className="text-sm text-red-500">{errors.email.message}</span> : null}
        </label>
      </div>

      <label className="block space-y-2 text-sm">
        <span className="text-slate-700 dark:text-slate-200">Тема обращения</span>
        <input {...register("subject")} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white" placeholder="Поступление, программа, консультация" />
        {errors.subject ? <span className="text-sm text-red-500">{errors.subject.message}</span> : null}
      </label>

      <label className="block space-y-2 text-sm">
        <span className="text-slate-700 dark:text-slate-200">Сообщение</span>
        <textarea {...register("message")} rows={5} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white" placeholder="Опишите ваш вопрос" />
        {errors.message ? <span className="text-sm text-red-500">{errors.message.message}</span> : null}
      </label>

      <label className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200">
        <input type="checkbox" {...register("consent")} className="mt-1 h-4 w-4 accent-amber-500" />
        <span>Согласен на обработку персональных данных в соответствии с политикой конфиденциальности.</span>
      </label>
      {errors.consent ? <p className="text-sm text-red-500">{errors.consent.message}</p> : null}

      <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50">
        {isSubmitting ? "Проверка..." : "Отправить запрос"}
      </button>

      {status ? <p className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300">{status}</p> : null}
    </form>
  );
}
