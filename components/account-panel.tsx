"use client";

import { FormEvent, useEffect, useState } from "react";

const STORAGE_KEY = "kstu-demo-account";
type Account = { name: string; email: string; passwordHash: string };

async function hash(value: string) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function AccountPanel() {
  const [mode, setMode] = useState<"login" | "register">("register");
  const [account, setAccount] = useState<Account | null>(null);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) setAccount(JSON.parse(saved));
  }, []);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setMessage("");
    const email = form.email.trim().toLowerCase();
    if (!email.includes("@")) return setMessage("Введите корректный email.");
    if (form.password.length < 8) return setMessage("Пароль должен содержать минимум 8 символов.");
    const passwordHash = await hash(form.password);
    const saved: Account | null = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "null");
    if (mode === "register") {
      if (form.name.trim().length < 2) return setMessage("Введите имя.");
      const next = { name: form.name.trim(), email, passwordHash };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setAccount(next);
      setMessage("Аккаунт создан на этом устройстве.");
    } else if (!saved || saved.email !== email || saved.passwordHash !== passwordHash) {
      setMessage("Email или пароль не совпадают.");
    } else {
      setAccount(saved);
      setMessage(`С возвращением, ${saved.name}!`);
    }
  };

  if (account) return <div className="account-success"><div className="account-avatar">{account.name.slice(0, 1).toUpperCase()}</div><p className="eyebrow-modern">Личный кабинет</p><h2 className="text-3xl font-black tracking-[-.04em]">Здравствуйте, {account.name}.</h2><p className="mt-3 text-slate-600 dark:text-slate-300">Ваш локальный демонстрационный профиль сохранён на этом устройстве.</p><button type="button" onClick={() => { window.localStorage.removeItem(STORAGE_KEY); setAccount(null); setForm({ name: "", email: "", password: "" }); setMessage(""); }} className="mt-7 rounded-full border border-slate-300 px-5 py-3 font-bold hover:border-blue-600 dark:border-slate-700">Выйти</button></div>;

  return <div className="account-card"><div className="mb-7 flex gap-2 rounded-full bg-slate-100 p-1 dark:bg-slate-800"><button type="button" onClick={() => { setMode("register"); setMessage(""); }} className={`flex-1 rounded-full px-4 py-2 text-sm font-bold ${mode === "register" ? "bg-white shadow-sm dark:bg-slate-700" : "text-slate-500"}`}>Регистрация</button><button type="button" onClick={() => { setMode("login"); setMessage(""); }} className={`flex-1 rounded-full px-4 py-2 text-sm font-bold ${mode === "login" ? "bg-white shadow-sm dark:bg-slate-700" : "text-slate-500"}`}>Войти</button></div><form onSubmit={submit} className="space-y-4">{mode === "register" && <label className="block text-sm font-semibold">Имя<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="account-input" placeholder="Ваше имя" /></label>}<label className="block text-sm font-semibold">Email<input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="account-input" type="email" placeholder="you@example.com" /></label><label className="block text-sm font-semibold">Пароль<input value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="account-input" type="password" placeholder="Минимум 8 символов" /></label><button className="w-full rounded-full bg-blue-700 px-5 py-3.5 font-bold text-white transition hover:bg-blue-800" type="submit">{mode === "register" ? "Создать аккаунт" : "Войти"}</button></form>{message && <p className="mt-4 rounded-2xl bg-blue-50 px-4 py-3 text-sm text-blue-800 dark:bg-blue-950/40 dark:text-blue-200">{message}</p>}<p className="mt-5 text-xs leading-5 text-slate-500">Сейчас это демонстрационный режим: данные хранятся только в браузере. Перед реальным запуском для студентов подключим безопасную серверную авторизацию и базу данных.</p></div>;
}
