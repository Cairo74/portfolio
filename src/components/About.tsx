import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { about, type Lang } from "@/data";
import { cn } from "@/lib/utils";
import {
  User,
  GraduationCap,
  BookOpen,
  Briefcase,
  Languages as LanguagesIcon,
  MapPin,
  Sparkles,
  Globe,
  Code2,
  Building2,
  CheckCircle2,
} from "lucide-react";
import LiquidMetalBlob from "@/components/ui/LiquidMetalBlob";

type TabKey = "geral" | "educacao" | "experiencias" | "idiomas";

export default function About({ lang }: { lang: Lang }) {
  const t = about[lang];
  const [activeTab, setActiveTab] = useState<TabKey>("geral");
  const isPt = lang === "pt";

  const tabs: { id: TabKey; label: string; icon: React.ReactNode }[] = [
    {
      id: "geral",
      label: isPt ? "Geral" : "Overview",
      icon: <User size={14} className="text-cyan-400" />,
    },
    {
      id: "educacao",
      label: isPt ? "Educação" : "Education",
      icon: <GraduationCap size={14} className="text-emerald-400" />,
    },
    {
      id: "experiencias",
      label: isPt ? "Experiências" : "Experience",
      icon: <Briefcase size={14} className="text-purple-400" />,
    },
    {
      id: "idiomas",
      label: isPt ? "Idiomas" : "Languages",
      icon: <LanguagesIcon size={14} className="text-amber-400" />,
    },
  ];

  return (
    <section id="sobre" className="relative overflow-hidden border-b border-white/10 bg-black">
      {/* Ambient background liquid metal blob */}
      <LiquidMetalBlob
        size={540}
        className="right-[-8%] top-[12%]"
        duration={28}
        speed={0.24}
        scale={0.72}
        opacity={0.65}
        distortion={0.12}
        path={{
          x: [0, -120, -50, -180, -30, 0],
          y: [0, 90, 160, 60, -40, 0],
          rotate: [0, 80, 160, 250, 310, 360],
          scale: [1, 1.1, 0.94, 1.06, 0.98, 1],
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            {isPt ? "01 — Sobre Mim" : "01 — About Me"}
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.title}
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1.2fr]">
            <div className="space-y-4 text-base leading-relaxed text-zinc-300">
              {t.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Interactive Information Card */}
            <div>
              <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-white/20">
                <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      {isPt ? "Minhas Informações" : "My Information"}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-600">
                    {isPt ? "interativo" : "interactive"}
                  </span>
                </div>

                {/* Tab buttons */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/10 mb-5 overflow-x-auto scrollbar-none">
                  {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                          "relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 shrink-0",
                          isActive
                            ? "text-white"
                            : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                        )}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeAboutTab"
                            className="absolute inset-0 rounded-lg bg-white/15 border border-white/20 shadow-sm"
                            transition={{ type: "spring", stiffness: 380, damping: 28 }}
                          />
                        )}
                        <span className="relative z-10 flex items-center gap-1.5">
                          {tab.icon}
                          {tab.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab content with animations */}
                <div className="min-h-[220px]">
                  <AnimatePresence mode="wait">
                    {activeTab === "geral" && (
                      <motion.div
                        key="geral"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3.5"
                      >
                        <div className="flex items-start gap-3.5 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-white/15 hover:bg-white/[0.04]">
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10">
                            <User size={16} className="text-cyan-400" />
                          </div>
                          <div className="flex-1">
                            <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                              {isPt ? "Idade" : "Age"}
                            </span>
                            <p className="mt-0.5 text-sm font-semibold text-zinc-100">
                              {isPt ? "19 anos" : "19 years old"}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3.5 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-white/15 hover:bg-white/[0.04]">
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-purple-500/20 bg-purple-500/10">
                            <Briefcase size={16} className="text-purple-400" />
                          </div>
                          <div className="flex-1">
                            <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                              {isPt ? "Atuação Atual" : "Current Role"}
                            </span>
                            <p className="mt-0.5 text-sm font-semibold text-zinc-100">
                              {isPt ? "Aprendiz em Análise de Dados" : "Data Analysis Apprentice"}
                            </p>
                            <p className="text-xs text-zinc-400 mt-0.5">
                              {isPt ? "MRV · Setor bancário & crédito" : "MRV · Banking & credit operations"}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3.5 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-white/15 hover:bg-white/[0.04]">
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-amber-500/20 bg-amber-500/10">
                            <Sparkles size={16} className="text-amber-400" />
                          </div>
                          <div className="flex-1">
                            <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                              {isPt ? "Foco Técnico" : "Core Focus"}
                            </span>
                            <p className="mt-0.5 text-sm font-semibold text-zinc-100">
                              {isPt ? "Engenharia de Software, IA & Dados" : "Software Engineering, AI & Data"}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3.5 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-white/15 hover:bg-white/[0.04]">
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-rose-500/20 bg-rose-500/10">
                            <MapPin size={16} className="text-rose-400" />
                          </div>
                          <div className="flex-1">
                            <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                              {isPt ? "Localização" : "Location"}
                            </span>
                            <p className="mt-0.5 text-sm font-semibold text-zinc-100">
                              {isPt ? "Belo Horizonte e Região, MG" : "Minas Gerais, Brazil"}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "educacao" && (
                      <motion.div
                        key="educacao"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3.5"
                      >
                        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5 transition-colors hover:border-white/15 hover:bg-white/[0.04]">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2.5">
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10">
                                <GraduationCap size={16} className="text-emerald-400" />
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold text-zinc-100">PUC Minas</h4>
                                <span className="inline-block text-[11px] text-emerald-400 font-medium">
                                  {isPt ? "2º período · Em andamento" : "2nd semester · In progress"}
                                </span>
                              </div>
                            </div>
                            <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-mono text-zinc-400 border border-white/10">
                              2025 – 2029
                            </span>
                          </div>
                          <p className="mt-2 text-xs font-medium text-zinc-300">
                            {isPt ? "Bacharelado em Engenharia de Software" : "Bachelor in Software Engineering"}
                          </p>
                          <p className="mt-1 text-[11px] leading-relaxed text-zinc-400">
                            {isPt
                              ? "Foco em arquitetura, algoritmos, modelagem de sistemas e boas práticas."
                              : "Focusing on software architecture, algorithms, and system scalability."}
                          </p>
                        </div>

                        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5 transition-colors hover:border-white/15 hover:bg-white/[0.04]">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2.5">
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10">
                                <BookOpen size={16} className="text-blue-400" />
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold text-zinc-100">Colégio COTEMIG</h4>
                                <span className="inline-block text-[11px] text-blue-400 font-medium">
                                  {isPt ? "Formação Técnica Concluída" : "Technical Degree Completed"}
                                </span>
                              </div>
                            </div>
                            <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-mono text-zinc-400 border border-white/10">
                              2023 – 2025
                            </span>
                          </div>
                          <p className="mt-2 text-xs font-medium text-zinc-300">
                            {isPt ? "Ensino Médio Técnico em TI" : "IT Technical High School"}
                          </p>
                          <p className="mt-1 text-[11px] leading-relaxed text-zinc-400">
                            {isPt
                              ? "Desenvolvimento web, mobile, bancos de dados e lógica aplicada."
                              : "Web & mobile development, databases, and hands-on coding."}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "experiencias" && (
                      <motion.div
                        key="experiencias"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3"
                      >
                        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-white/15 hover:bg-white/[0.04]">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2.5">
                              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-purple-500/20 bg-purple-500/10">
                                <Briefcase size={14} className="text-purple-400" />
                              </div>
                              <div>
                                <h4 className="text-xs font-semibold text-zinc-100">MRV</h4>
                                <p className="text-[11px] font-medium text-purple-300">
                                  {isPt ? "Aprendiz em Análise de Dados" : "Data Analysis Apprentice"}
                                </p>
                              </div>
                            </div>
                            <span className="rounded-full bg-emerald-500/10 text-emerald-400 px-2 py-0.5 text-[10px] font-mono border border-emerald-500/20">
                              {isPt ? "Atual" : "Present"}
                            </span>
                          </div>
                          <p className="mt-1.5 text-[11px] text-zinc-400 leading-relaxed">
                            {isPt
                              ? "Operações analíticas em crédito e suporte a decisões de alto volume."
                              : "Credit analytics operations and data-backed decision support."}
                          </p>
                        </div>

                        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-white/15 hover:bg-white/[0.04]">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2.5">
                              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-sky-500/20 bg-sky-500/10">
                                <Building2 size={14} className="text-sky-400" />
                              </div>
                              <div>
                                <h4 className="text-xs font-semibold text-zinc-100">KXP Tech</h4>
                                <p className="text-[11px] font-medium text-sky-300">
                                  {isPt ? "Estagiário Flutter" : "Flutter Intern"}
                                </p>
                              </div>
                            </div>
                            <span className="text-[10px] font-mono text-zinc-500">
                              2025
                            </span>
                          </div>
                          <p className="mt-1.5 text-[11px] text-zinc-400 leading-relaxed">
                            {isPt
                              ? "Desenvolvimento móvel, Firebase, Supabase e testes de arquitetura."
                              : "Mobile apps with Flutter, Firebase, Supabase, and clean architecture."}
                          </p>
                        </div>

                        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-white/15 hover:bg-white/[0.04]">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2.5">
                              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10">
                                <Code2 size={14} className="text-emerald-400" />
                              </div>
                              <div>
                                <h4 className="text-xs font-semibold text-zinc-100">Freelancer</h4>
                                <p className="text-[11px] font-medium text-emerald-300">
                                  {isPt ? "Desenvolvedor Web" : "Web Developer"}
                                </p>
                              </div>
                            </div>
                            <span className="rounded-full bg-white/5 text-zinc-400 px-2 py-0.5 text-[10px] font-mono border border-white/10">
                              {isPt ? "Ativo" : "Active"}
                            </span>
                          </div>
                          <p className="mt-1.5 text-[11px] text-zinc-400 leading-relaxed">
                            {isPt
                              ? "Criação de aplicações web e landing pages modernas com React e Next.js."
                              : "Tailored modern web applications with React and Next.js."}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "idiomas" && (
                      <motion.div
                        key="idiomas"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3.5"
                      >
                        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5 transition-colors hover:border-white/15 hover:bg-white/[0.04]">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-amber-500/20 bg-amber-500/10">
                                <LanguagesIcon size={16} className="text-amber-400" />
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold text-zinc-100">
                                  {isPt ? "Português" : "Portuguese"}
                                </h4>
                                <span className="text-xs text-amber-400 font-medium">
                                  {isPt ? "Nativo" : "Native"}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                              <CheckCircle2 size={14} />
                              <span>100%</span>
                            </div>
                          </div>
                          <p className="mt-2.5 text-xs text-zinc-400 leading-relaxed">
                            {isPt
                              ? "Comunicação nativa, excelente escrita, elaboração de documentações e alinhamento ágil com equipes."
                              : "Native proficiency, technical documentation, and clear team communication."}
                          </p>
                        </div>

                        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5 transition-colors hover:border-white/15 hover:bg-white/[0.04]">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-teal-500/20 bg-teal-500/10">
                                <Globe size={16} className="text-teal-400" />
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold text-zinc-100">
                                  {isPt ? "Inglês" : "English"}
                                </h4>
                                <span className="text-xs text-teal-400 font-medium">
                                  {isPt ? "Fluente / Avançado" : "Fluent / Advanced"}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                              <CheckCircle2 size={14} />
                              <span>C1 / C2</span>
                            </div>
                          </div>
                          <p className="mt-2.5 text-xs text-zinc-400 leading-relaxed">
                            {isPt
                              ? "Leitura e escrita de documentações avançadas, conversação fluente e consumo diário de conteúdos globais."
                              : "Fluent communication, professional reading & writing, technical research."}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
