import { Button } from "@/components/ui/button";
import { CalendlyButton } from "@/components/shared/calendly-button";
import { Bot, Sparkles, ArrowRight, CheckCircle2, Layers } from "lucide-react";
import * as React from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import Image from "next/image";
import { aiAssistantsPillars } from "@/lib/data/services";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0a0502] pt-24 text-white">

      {/* ── HERO ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <ScrollReveal delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SIAIEIN Enterprise Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Intelligent Systems That <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
              Scale Your Enterprise
            </span>
          </h1>
          <p className="text-stone-300 text-lg md:text-xl max-w-3xl mx-auto text-balance leading-relaxed mb-10">
            We architect and deploy autonomous AI systems, custom foundation models, and cognitive workflow automation that eliminate operational drag and multiply business capacity.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CalendlyButton text="Schedule Strategic AI Audit" className="shadow-[0_0_30px_rgba(249,115,22,0.3)]" />
            <Link
              href="/services/ai-assistants"
              className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] flex items-center gap-2"
            >
              <span>Explore AI & Assistants Webpage</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── FEATURED FLAGSHIP SERVICE BANNER ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pb-16">
        <ScrollReveal delay={0.15}>
          <div className="relative rounded-3xl overflow-hidden border border-orange-500/30 bg-gradient-to-b from-[#140a04] via-[#0e0703] to-[#0a0502] p-8 md:p-12 shadow-[0_0_80px_rgba(249,115,22,0.15)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider">
                  Flagship Service Webpage
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                  AI & Autonomous Assistants
                </h2>
                <p className="text-stone-300 text-base md:text-lg leading-relaxed">
                  A comprehensive, end-to-end suite encompassing custom AI solutions, generative AI development, executive consulting, intelligent process automation, multi-agent swarms, and enterprise-grade OpenAI integrations.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <div className="text-xl font-bold text-orange-400">10 Pillars</div>
                    <div className="text-[11px] text-stone-400 uppercase font-medium">Core Capabilities</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <div className="text-xl font-bold text-white">99.4%</div>
                    <div className="text-[11px] text-stone-400 uppercase font-medium">Model Precision</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <div className="text-xl font-bold text-amber-400">24/7/365</div>
                    <div className="text-[11px] text-stone-400 uppercase font-medium">Autonomous Uptime</div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/services/ai-assistants"
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-sm transition-all shadow-[0_0_30px_rgba(249,115,22,0.4)] group"
                  >
                    <span>View AI & Assistants Dedicated Webpage</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl">
                  <Image
                    src="/images/services/ai_solutions.jpg"
                    alt="AI & Assistants Core Engine"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0502] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/[0.1] flex items-center justify-between">
                    <span className="text-xs font-mono text-orange-400 font-semibold">COGNITIVE ENGINE v4.2</span>
                    <span className="text-[11px] font-mono text-emerald-400">ONLINE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── 10 PILLARS GRID ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-white/[0.06]">
        <ScrollReveal delay={0.1}>
          <div className="text-center mb-12">
            <span className="section-label mb-2 inline-block">Comprehensive Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Explore the 10 Core Pillars of AI & Assistants
            </h2>
            <p className="text-stone-400 text-base max-w-2xl mx-auto">
              Dive into each specialized domain covered within our new AI & Assistants flagship architecture.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiAssistantsPillars.map((pillar, i) => (
            <ScrollReveal key={pillar.id} delay={0.05 * (i % 3)} direction="up">
              <Link 
                href={`/services/ai-assistants#${pillar.id}`}
                className="block h-full group"
              >
                <div className="card-surface p-5 h-full flex flex-col transition-all duration-300 hover:border-orange-500/40 hover:bg-white/[0.05]">
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-5 border border-white/[0.08]">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-mono font-bold text-orange-400 border border-white/[0.1]">
                      PILLAR {pillar.number}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-stone-400 line-clamp-3 leading-relaxed mb-6 flex-1">
                    {pillar.overview[0]}
                  </p>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-orange-400">
                    <span>Read Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 text-center border-t border-white/[0.06] mt-10">
        <ScrollReveal delay={0.1}>
          <div className="max-w-2xl mx-auto">
            <span className="section-label mb-3 inline-block">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI & Assistants?
            </h2>
            <p className="text-stone-400 mb-10 text-balance leading-relaxed">
              Book a complimentary 30-minute architectural audit and our engineers will map out the highest-ROI automation vectors for your enterprise.
            </p>
            <CalendlyButton text="Book Free AI Audit" className="" />
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
