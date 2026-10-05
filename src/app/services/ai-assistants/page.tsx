"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Bot, 
  Cpu, 
  Workflow, 
  Sparkles, 
  ShieldCheck, 
  Network, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ChevronRight,
  TrendingUp,
  Sliders,
  Terminal,
  Server,
  Lock,
  Boxes
} from "lucide-react";
import { CalendlyButton } from "@/components/shared/calendly-button";
import { ServiceDemoButton } from "@/components/shared/service-demo-button";
import { serviceDemos } from "@/lib/data/demos";
import { aiAssistantsPillars } from "@/lib/data/services";

export default function AiAssistantsPage() {
  const [activeTab, setActiveTab] = React.useState<string>(aiAssistantsPillars[0].id);

  // Scroll spy to update active tab
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const pillar of aiAssistantsPillars) {
        const element = document.getElementById(pillar.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(pillar.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPillar = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0a0502] text-white selection:bg-orange-500/20 selection:text-orange-200">
      
      {/* ── 1. HERO SECTION ── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-white/[0.06]">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-orange-500/10 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-medium text-stone-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
            <span className="text-orange-400 font-semibold">AI & Assistants</span>
          </div>

          <div className="max-w-4xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Bot className="w-3.5 h-3.5" />
              <span>Flagship Enterprise Service</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              AI & Autonomous <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
                Assistants
              </span>
            </h1>

            {/* Subhead Description */}
            <p className="text-lg md:text-xl text-stone-300 font-normal leading-relaxed mb-10 max-w-3xl">
              Architecting next-generation autonomous agents, generative intelligence, and cognitive enterprise automation that eliminate manual drag, multiply workforce leverage, and transform traditional business processes into autonomous execution engines.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <CalendlyButton text="Schedule Enterprise AI Audit" className="shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] transition-all" />
              <ServiceDemoButton config={serviceDemos["ai-assistants"]} />
              <button 
                onClick={() => scrollToPillar(aiAssistantsPillars[0].id)}
                className="px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-sm font-medium text-stone-300 hover:text-white transition-all flex items-center gap-2"
              >
                <span>Explore All 10 Pillars</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </button>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08]">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">99.4%</div>
              <div className="text-xs text-stone-400 uppercase tracking-wider font-medium">Execution Accuracy</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1">10x - 15x</div>
              <div className="text-xs text-stone-400 uppercase tracking-wider font-medium">Operational Velocity</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">40% - 60%</div>
              <div className="text-xs text-stone-400 uppercase tracking-wider font-medium">OpEx Cost Reduction</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1">24/7/365</div>
              <div className="text-xs text-stone-400 uppercase tracking-wider font-medium">Autonomous Uptime</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. STICKY PILLAR NAVIGATION BAR ── */}
      <div className="sticky top-16 md:top-20 z-40 bg-[#0a0502]/95 backdrop-blur-xl border-y border-white/[0.08] shadow-2xl overflow-x-auto py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 min-w-max">
          <span className="text-xs uppercase font-bold tracking-widest text-orange-500 mr-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            Pillars:
          </span>
          {aiAssistantsPillars.map((p) => {
            const isActive = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => scrollToPillar(p.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? "bg-orange-500/20 text-orange-400 border border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.15)] font-semibold"
                    : "text-stone-400 hover:text-white hover:bg-white/[0.05] border border-transparent"
                }`}
              >
                <span className="opacity-60 text-[10px]">{p.number}</span>
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── 3. DETAILED 10 PILLARS SHOWCASE ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-28 md:space-y-36">
        {aiAssistantsPillars.map((pillar, index) => {
          const isEven = index % 2 === 0;

          return (
            <section 
              key={pillar.id} 
              id={pillar.id}
              className="scroll-mt-36 relative"
            >
              {/* Subtle Section Divider Glow */}
              <div className="absolute -top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

              {/* Header Info */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-bold tracking-wider">
                    PILLAR {pillar.number} / 10
                  </span>
                  <div className="h-px flex-1 bg-white/[0.06]" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                  {pillar.title}
                </h2>
                <p className="text-base sm:text-lg text-orange-300/90 font-medium max-w-4xl leading-relaxed">
                  {pillar.subtitle}
                </p>
              </div>

              {/* Main Visual & Overview Grid */}
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12`}>
                
                {/* Visual Image Card (6 cols) */}
                <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative group rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0e0703] shadow-[0_0_50px_rgba(0,0,0,0.8)] aspect-[16/9] w-full">
                    {/* Glowing Accent Border On Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                    
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index < 2}
                    />

                    {/* Gradient Overlay for Cinematic Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0502] via-[#0a0502]/20 to-transparent z-10" />

                    {/* Bottom Status Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between backdrop-blur-md bg-black/60 border border-white/[0.1] px-4 py-2.5 rounded-xl">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-mono font-medium text-stone-200">PRODUCTION SYSTEM</span>
                      </div>
                      <span className="text-[11px] font-mono text-orange-400 uppercase tracking-wider">SIAIEIN ACTIVE ENGINE</span>
                    </div>
                  </div>

                  {/* Metrics Row Below Image */}
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    {pillar.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                        <div className="text-lg sm:text-xl font-bold text-orange-400">{m.value}</div>
                        <div className="text-[10px] text-stone-400 uppercase font-medium tracking-wider">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-4 flex flex-wrap items-center gap-1.5">
                    <span className="text-xs text-stone-500 mr-2 font-mono">Tech Stack:</span>
                    {pillar.techStack.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-stone-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Narrative Overview & Architecture (6 cols) */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  
                  {/* Detailed Description Paragraphs */}
                  <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed">
                    {pillar.overview.map((para, pIdx) => (
                      <p key={pIdx} className="text-stone-300/90 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Implementation Architecture Flow */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
                    <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-orange-400 mb-2">
                      <Workflow className="w-4 h-4" />
                      <span>Enterprise Execution Architecture</span>
                    </div>
                    <div className="space-y-2.5">
                      {pillar.architecturalFlow.map((step, sIdx) => {
                        const [head, ...rest] = step.split(":");
                        return (
                          <div key={sIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                            <span className="w-5 h-5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {sIdx + 1}
                            </span>
                            <div className="text-stone-300">
                              <strong className="text-white font-medium">{head}:</strong> {rest.join(":")}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>

              </div>

              {/* Core Capabilities Cards Grid */}
              <div className="mb-10">
                <h3 className="text-sm uppercase tracking-wider font-bold text-stone-400 mb-4 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-orange-400" />
                  <span>Key Enterprise Capabilities</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {pillar.capabilities.map((cap, cIdx) => (
                    <div 
                      key={cIdx} 
                      className="p-5 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-3 group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors">
                          {cap.title}
                        </h4>
                        <p className="text-xs text-stone-400 leading-relaxed">
                          {cap.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real World Impact Case Studies */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pillar.useCases.map((uc, uIdx) => (
                  <div 
                    key={uIdx} 
                    className="p-5 rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 text-orange-400">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="text-sm font-bold text-white">{uc.title}</h4>
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-orange-500/15 text-orange-400 shrink-0">
                          {uc.metric}
                        </span>
                      </div>
                      <p className="text-xs text-stone-400 leading-relaxed">
                        {uc.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </section>
          );
        })}
      </div>

      {/* ── 4. ENTERPRISE METHODOLOGY & WHY CHOOSE US ── */}
      <section className="py-20 md:py-28 bg-[#070301] border-t border-white/[0.06] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label mb-3 inline-block">The SIAIEIN Standard</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Engineered for Mission-Critical Reliability
            </h2>
            <p className="text-stone-400 text-base sm:text-lg leading-relaxed">
              We do not build toy demos. Our AI & Autonomous Assistant frameworks operate within resilient private cloud perimeters, satisfying the most stringent enterprise security and compliance audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card-surface p-8">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Zero-Data-Retention & Privacy</h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-4">
                Enterprise contracts with model providers ensuring your proprietary customer data, source code, and internal IP is never used for foundation model training.
              </p>
              <ul className="space-y-2 text-xs text-stone-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                  <span>Private VPC & Air-Gapped Options</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                  <span>Automated PII Scrubbing Layer</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                  <span>SOC2 Type II & HIPAA Aligned</span>
                </li>
              </ul>
            </div>

            <div className="card-surface p-8">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sub-Second Deterministic Execution</h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-4">
                Structured JSON schema enforcement, Redis semantic caching, and dynamic model routing ensure high-throughput execution with predictable latency.
              </p>
              <ul className="space-y-2 text-xs text-stone-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                  <span>Strict JSON Schema Validation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                  <span>Semantic Vector Caching</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                  <span>Graceful Provider Failover</span>
                </li>
              </ul>
            </div>

            <div className="card-surface p-8">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6">
                <Boxes className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Deep Tool & API Interoperability</h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-4">
                Our assistants plug directly into your internal databases, REST/GraphQL APIs, Salesforce, SAP, Jira, Slack, and cloud storage without painful rewrites.
              </p>
              <ul className="space-y-2 text-xs text-stone-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                  <span>200+ Pre-Built Connectors</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                  <span>Custom Webhook & Event Listeners</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                  <span>Human-in-the-Loop Sign-off Gates</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Simulation Callout */}
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-r from-orange-950/40 via-[#0e0703] to-amber-950/30 border border-orange-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-orange-400 uppercase tracking-widest mb-2">
                <Terminal className="w-4 h-4" />
                <span>Interactive Agent Terminal</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Watch Our AI & Assistants in Real-Time Action
              </h3>
              <p className="text-stone-400 text-sm max-w-xl">
                Experience how our multi-agent orchestrator coordinates tasks, calls enterprise APIs, parses unstructured documents, and delivers verified results.
              </p>
            </div>
            <div className="shrink-0">
              <ServiceDemoButton config={serviceDemos["ai-assistants"]} />
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. FINAL ENTERPRISE AUDIT CTA ── */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-500/10 blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-3xl mx-auto relative z-10">
          <span className="section-label mb-4 inline-block">Deploy Your Autonomous Workforce</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Build Your Enterprise AI & Assistant Infrastructure?
          </h2>
          <p className="text-stone-400 text-base sm:text-lg mb-10 leading-relaxed">
            Book a complimentary 30-minute architectural audit. Our AI systems engineers will review your workflows and map out a custom autonomous roadmap with guaranteed ROI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CalendlyButton text="Book Free AI Audit" className="w-full sm:w-auto shadow-[0_0_30px_rgba(249,115,22,0.3)]" />
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-sm font-semibold text-stone-200 hover:text-white transition-all text-center"
            >
              Contact Engineering Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
