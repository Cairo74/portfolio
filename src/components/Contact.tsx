import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";
import { contact, type Lang } from "@/data";
import MetallicButton from "@/components/ui/metallic-button";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

const WhatsApp = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-1.9 1.3-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.1-.2-1.2-1.6-1.2-3s.8-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.4.6-.4.5c-.1.2-.3.3-.1.6.2.3.7 1.2 1.5 1.9 1 .9 1.9 1.2 2.2 1.3.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.8-.1 1.5Z" />
  </svg>
);
const LinkedIn = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm7 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.700V21h-4V9.500Z" />
  </svg>
);
const GitHub = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
    <path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.2.8-.6v-2c-3.200.7-3.900-1.400-3.900-1.400-.5-1.300-1.300-1.700-1.300-1.700-1-.7.1-.7.1-.7 1.200.1 1.800 1.200 1.800 1.200 1 1.800 2.800 1.300 3.400 1 .1-.8.4-1.300.7-1.600-2.600-.3-5.300-1.300-5.300-5.700 0-1.300.5-2.300 1.200-3.100-.1-.3-.5-1.500.1-3.100 0 0 1-.3 3.200 1.200a11 11 0 0 1 5.800 0c2.200-1.500 3.200-1.200 3.200-1.200.6 1.600.2 2.800.1 3.100.7.800 1.200 1.800 1.200 3.100 0 4.400-2.700 5.400-5.300 5.700.4.400.8 1.100.8 2.200v3.200c0 .4.2.7.8.6A11.500 11.500 0 0 0 12 .5Z" />
  </svg>
);

export default function Contact({ lang }: { lang: Lang }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const t = {
    pt: {
      kicker: "04 — Contato",
      title: "Vamos conversar",
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      send: "Enviar mensagem",
      sending: "Enviando...",
      ok: "Mensagem enviada! Responderei em breve.",
      err: "Não foi possível enviar. Tente novamente ou use o e-mail direto.",
      req: "Campo obrigatório",
      invalid: "E-mail inválido",
      short: "Mínimo de 10 caracteres",
    },
    en: {
      kicker: "04 — Contact",
      title: "Let's talk",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      sending: "Sending...",
      ok: "Message sent! I'll reply soon.",
      err: "Could not send. Please try again or email me directly.",
      req: "Required field",
      invalid: "Invalid email",
      short: "At least 10 characters",
    },
  }[lang];

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      if (!SERVICE || !TEMPLATE || !KEY) throw new Error("EmailJS não configurado");
      await emailjs.send(
        SERVICE,
        TEMPLATE,
        { from_name: data.name, from_email: data.email, message: data.message },
        { publicKey: KEY },
      );
      setStatus("ok");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const icons = [
    { label: "E-mail", href: `mailto:${contact.email}`, icon: <Mail size={22} /> },
    { label: "WhatsApp", href: contact.whatsapp, icon: <WhatsApp /> },
    { label: "LinkedIn", href: contact.linkedin, icon: <LinkedIn /> },
    { label: "GitHub", href: contact.github, icon: <GitHub /> },
  ];

  const field =
    "w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-zinc-600 focus:border-white/50";

  return (
    <section id="contato" className="mx-auto max-w-5xl px-6 py-28">
      <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">{t.kicker}</p>
      <h2 className="chrome-text mt-3 text-4xl font-bold md:text-5xl">{t.title}</h2>

      <div className="mt-10 flex gap-3">
        {icons.map((i) => (
          <a
            key={i.label}
            href={i.href}
            target={i.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={i.label}
            title={i.label}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-200 transition hover:-translate-y-1 hover:border-white/50 hover:text-white"
          >
            {i.icon}
          </a>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-10 max-w-2xl space-y-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-zinc-300">{t.name}</label>
          <input id="name" className={field} {...register("name", { required: t.req, minLength: { value: 2, message: t.req } })} />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-zinc-300">{t.email}</label>
          <input
            id="email"
            type="email"
            className={field}
            {...register("email", { required: t.req, pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t.invalid } })}
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm text-zinc-300">{t.message}</label>
          <textarea
            id="message"
            rows={5}
            className={field}
            {...register("message", { required: t.req, minLength: { value: 10, message: t.short } })}
          />
          {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
        </div>

        <MetallicButton type="submit" label={status === "sending" ? t.sending : t.send} disabled={status === "sending"} />

        {status === "ok" && <p role="status" className="text-sm text-emerald-400">{t.ok}</p>}
        {status === "error" && <p role="alert" className="text-sm text-red-400">{t.err}</p>}
      </form>
    </section>
  );
}

