import { createFileRoute } from "@tanstack/react-router";
import {
  Cloud, Sparkles, Shield, Workflow, Github, Linkedin, Mail,
  ArrowRight, Bot, Database, Code2, Server, Cpu, Wrench, ExternalLink,
} from "lucide-react";
import logoUrl from "@/assets/cloud-ai-ascent-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const skills = [
  {
    icon: Cloud,
    title: "Cloud",
    items: ["Microsoft Azure", "Amazon Web Services", "Cloud Architecture", "IaaS / PaaS"],
  },
  {
    icon: Shield,
    title: "Identity & Security",
    items: ["Active Directory", "Microsoft Entra ID", "AWS IAM", "Conditional Access"],
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    items: ["Azure OpenAI", "RAG Pipelines", "AI Agents", "REST APIs"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["GitHub", "Microsoft 365", "Exchange Online", "Monitoring Tools"],
  },
];

const projects = [
  {
    icon: Bot,
    title: "AI Agent for Article Generation",
    description:
      "Autonomous agent that researches topics and produces structured articles, leveraging tool-use and prompt orchestration.",
    tech: ["Azure OpenAI", "Python", "LangChain", "APIs"],
  },
  {
    icon: Database,
    title: "RAG Application with Azure AI Search",
    description:
      "A Python-based Retrieval-Augmented Generation application that uses Azure OpenAI to generate embeddings and grounded answers, while Azure AI Search stores document chunks and performs vector-based retrieval. The project demonstrates how private documents can be used as trusted context before generating LLM responses.",
    tech: ["Azure AI Search", "Azure OpenAI", "Embeddings", "Vector Search", "Semantic Ranking", "Python"],
    href: "https://github.com/cmosantos/rag-application-azure-ai-search",
  },
  {
    icon: Workflow,
    title: "Automation Workflows",
    description:
      "API integrations that connect M365, ticketing and identity tools to automate provisioning and repetitive support tasks.",
    tech: ["Microsoft Graph", "REST APIs", "Power Automate", "Python"],
  },
  {
    icon: Cpu,
    title: "Cloud Identity Lab",
    description:
      "Hands-on lab integrating Active Directory with Entra ID and AWS IAM — exploring SSO, federation and least-privilege design.",
    tech: ["Entra ID", "AWS IAM", "AD DS", "SAML / OIDC"],
  },
  {
    icon: Workflow,
    title: "AI Rapid Triage Agent",
    description:
      "AI agent built with n8n to automate IT helpdesk triage, classify support requests, evaluate priority and security risk, register tickets in Google Sheets, and send Gmail notifications.",
    tech: ["n8n", "OpenAI", "Google Sheets", "Gmail", "JavaScript", "AI Agent", "Workflow Automation"],
    href: "https://github.com/cmosantos/ai-rapid-triage-agent-n8n",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <span className="h-8 w-8 rounded-lg bg-gradient-brand grid place-items-center shadow-glow">
            <Code2 className="h-4 w-4 text-primary-foreground" />
          </span>
          <span className="text-gradient">Claudio Santos</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-smooth">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-gradient-brand text-primary-foreground hover:opacity-90 transition-smooth shadow-glow"
        >
          Hire me <ArrowRight className="h-4 w-4" />
        </a>
      </nav>
    </header>
    <img
      src={logoUrl}
      alt="Cloud AI Ascent logo"
      width={150}
      height={150}
      className="fixed top-4 right-4 md:top-6 md:right-6 z-[60] w-[100px] md:w-[150px] h-auto object-contain pointer-events-none drop-shadow-[0_0_20px_rgba(99,102,241,0.35)]"
    />
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative max-w-6xl mx-auto px-6 text-center animate-fade-up">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-border bg-card/60 backdrop-blur text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Available for Cloud & AI opportunities
        </span>
        <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight">
          <span className="text-foreground">Claudio </span>
          <span className="text-gradient">Santos</span>
        </h1>
        <p className="mt-5 text-lg md:text-xl text-muted-foreground font-medium">
          IT Support Analyst <span className="text-primary">|</span> Cloud & AI Enthusiast
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
          Building AI agents, RAG applications and cloud-native automation —
          bridging hands-on IT support with the next generation of intelligent infrastructure.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-brand text-primary-foreground font-medium shadow-glow hover:opacity-90 transition-smooth"
          >
            View Projects <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card/60 backdrop-blur text-foreground font-medium hover:bg-card transition-smooth"
          >
            Contact Me <Mail className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { icon: Cloud, label: "Azure & AWS" },
            { icon: Sparkles, label: "Azure OpenAI" },
            { icon: Shield, label: "Entra ID & IAM" },
            { icon: Workflow, label: "Automation" },
          ].map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 justify-center px-4 py-3 rounded-xl border border-border bg-card/40 backdrop-blur text-sm text-muted-foreground"
            >
              <b.icon className="h-4 w-4 text-primary" />
              {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-sm font-semibold text-primary uppercase tracking-wider">{eyebrow}</div>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {desc && <p className="mt-3 text-muted-foreground leading-relaxed">{desc}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <SectionHeader
          eyebrow="About me"
          title="From IT Support to Cloud & AI Engineering"
        />
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            I'm a Junior IT Support Analyst with hands-on experience across
            <span className="text-foreground"> Microsoft 365, Exchange Online, Active Directory, Entra ID</span>
            {" "}and<span className="text-foreground"> AWS IAM</span> — keeping users productive and systems reliable.
          </p>
          <p>
            Today I'm channeling that operations mindset into the next layer:
            <span className="text-foreground"> Cloud architecture on Azure and AWS</span>, and
            <span className="text-foreground"> AI engineering</span> with Azure OpenAI, RAG pipelines and autonomous agents.
          </p>
          <p>
            I learn by building — labs, side projects and automations — and I'm looking
            for the right team to grow as a Cloud & AI Engineer.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Skills"
          title="Technical toolkit"
          desc="The stack I work with day-to-day and the technologies I'm actively building expertise in."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((s) => (
            <div
              key={s.title}
              className="group p-6 rounded-2xl border border-border bg-card/60 backdrop-blur hover:border-primary/50 transition-smooth shadow-card hover:-translate-y-1"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-brand grid place-items-center shadow-glow">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Projects"
          title="Things I'm building"
          desc="Selected projects exploring AI agents, retrieval-augmented generation and cloud automation."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group p-7 rounded-2xl border border-border bg-card/60 backdrop-blur hover:border-primary/50 transition-smooth shadow-card hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded-xl bg-gradient-brand grid place-items-center shadow-glow">
                  <p.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <a
                  href={p.href ?? "#"}
                  target={p.href ? "_blank" : undefined}
                  rel={p.href ? "noopener noreferrer" : undefined}
                  aria-label={`GitHub repo for ${p.title}`}
                  className="text-muted-foreground hover:text-foreground transition-smooth"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.href ?? "#"}
                target={p.href ? "_blank" : undefined}
                rel={p.href ? "noopener noreferrer" : undefined}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
              >
                View on GitHub <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader eyebrow="Experience" title="Where I'm working" />
        <div className="mt-10 p-7 md:p-9 rounded-2xl border border-border bg-card/60 backdrop-blur shadow-card">
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-brand grid place-items-center shadow-glow">
              <Server className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">IT Support Analyst</h3>
                <span className="text-sm text-muted-foreground">Current role</span>
              </div>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Delivering end-user support and ensuring system reliability across
                Microsoft 365, Exchange Online and identity platforms. Day-to-day
                work spans incident troubleshooting, account & access management
                in Active Directory and Entra ID, and improving operational
                workflows through scripting and automation.
              </p>
              <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                {[
                  "Tier 1–2 troubleshooting & root-cause analysis",
                  "Identity & access management (AD / Entra ID)",
                  "M365 & Exchange Online administration",
                  "Process automation & documentation",
                ].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const items = [
    { icon: Mail, label: "Email me", href: "mailto:cmosantos@gmail.com", external: false },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/claudio--santos/", external: true },
    { icon: Github, label: "GitHub", href: "https://github.com/cmosantos", external: true },
  ];
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-sm font-semibold text-primary uppercase tracking-wider">Contact</div>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">Let's build something</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I am open to Cloud & AI roles, collaborations, technical projects, and meaningful
          conversations about automation, cloud computing, AI agents, and modern support operations.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {items.map((i) => (
            <a
              key={i.label}
              href={i.href}
              target={i.external ? "_blank" : undefined}
              rel={i.external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card/60 backdrop-blur text-foreground font-medium hover:border-primary/50 hover:-translate-y-0.5 transition-smooth shadow-card"
            >
              <i.icon className="h-4 w-4 text-primary" />
              {i.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-md bg-gradient-brand grid place-items-center">
            <Code2 className="h-3 w-3 text-primary-foreground" />
          </span>
          <span>© {new Date().getFullYear()} Claudio Santos</span>
        </div>
        <div>Built with React, TanStack Start & Tailwind CSS.</div>
      </div>
    </footer>
  );
}
