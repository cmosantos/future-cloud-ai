import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Bot,
  Clock3,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Github,
  Headphones,
  Languages,
  Linkedin,
  Mail,
  Monitor,
  Server,
  Shield,
  Sparkles,
  Workflow,
  Wrench,
  X,
} from "lucide-react";
import logoUrl from "@/assets/cloud-ai-ascent-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

type Language = "pt" | "en";
type ProjectStatus = "done" | "building" | "soon";

const copy = {
  pt: {
    nav: {
      about: "Sobre",
      skills: "Competências",
      certifications: "Certificações",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
      action: "Fale comigo",
    },
    hero: {
      availability: "Disponível para oportunidades em Suporte, Workplace, Cloud e IA",
      role: "Analista de Suporte Júnior | Microsoft 365 | Cloud e Automação com IA",
      description:
        "Experiência prática em suporte a usuários, Microsoft 365, identidade, monitoramento e operações — evoluindo com projetos em cloud, automação e inteligência artificial.",
      projects: "Ver projetos",
      contact: "Entrar em contato",
      highlights: ["Microsoft 365 & Workplace", "Entra ID & Active Directory", "Zabbix & OpMon", "Azure, AWS & IA"],
    },
    about: {
      eyebrow: "Sobre mim",
      title: "Suporte sólido, evolução para cloud e automação",
      paragraphs: [
        "Sou Analista de Suporte Júnior e profissional de Workplace, com experiência no atendimento a usuários corporativos por e-mail, telefone, chat, suporte remoto e presencial, sempre com foco em SLA, continuidade operacional e boa experiência do usuário.",
        "Atuo com Microsoft 365, Exchange Online, Teams, SharePoint, OneDrive, Microsoft Entra ID, Active Directory, Microsoft Defender, permissões, licenciamento, onboarding, MFA e suporte a endpoints Windows.",
        "Também possuo experiência em monitoramento de infraestrutura com Zabbix e OpMon em ambiente de NOC. Hoje amplio essa base com estudos e projetos em Azure, AWS, automação, APIs, Python básico e agentes de IA.",
      ],
    },
    skills: {
      eyebrow: "Competências",
      title: "Conhecimentos técnicos",
      description: "Tecnologias que utilizo no suporte e áreas em que continuo desenvolvendo experiência prática.",
    },
    certifications: {
      eyebrow: "Certificações",
      title: "Credenciais Microsoft",
      description: "Certificações fundamentais que apoiam minha evolução em cloud computing e inteligência artificial.",
      view: "Visualizar certificado",
    },
    projects: {
      eyebrow: "Projetos",
      title: "Projetos práticos e estudos aplicados",
      description: "Projetos conectados à minha experiência em suporte, operações, automação, cloud e inteligência artificial.",
      github: "Ver no GitHub",
      soon: "Detalhes em breve",
      statuses: {
        done: "Concluído",
        building: "Em desenvolvimento",
        soon: "Em breve",
      },
    },
    experience: {
      eyebrow: "Experiência",
      title: "Atuação profissional",
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos conversar",
      description:
        "Estou aberto a oportunidades em suporte técnico, workplace, Microsoft 365, operações de TI e posições de entrada em cloud e automação.",
      email: "Enviar e-mail",
    },
    footer: "Desenvolvido com React, TanStack Start e Tailwind CSS.",
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      certifications: "Certifications",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      action: "Contact me",
    },
    hero: {
      availability: "Available for IT Support, Workplace, Cloud and AI opportunities",
      role: "Junior IT Support Analyst | Microsoft 365 | Cloud and AI Automation",
      description:
        "Hands-on experience in end-user support, Microsoft 365, identity, monitoring and IT operations — expanding into cloud, automation and artificial intelligence projects.",
      projects: "View projects",
      contact: "Contact me",
      highlights: ["Microsoft 365 & Workplace", "Entra ID & Active Directory", "Zabbix & OpMon", "Azure, AWS & AI"],
    },
    about: {
      eyebrow: "About me",
      title: "Strong support experience, growing into cloud and automation",
      paragraphs: [
        "I am a Junior IT Support Analyst and Workplace professional with experience assisting corporate users through email, phone, chat, remote support and on-site service, always focused on SLA compliance, operational continuity and a positive user experience.",
        "I work with Microsoft 365, Exchange Online, Teams, SharePoint, OneDrive, Microsoft Entra ID, Active Directory, Microsoft Defender, permissions, licensing, onboarding, MFA and Windows endpoint support.",
        "I also have infrastructure monitoring experience with Zabbix and OpMon in a NOC environment. I am currently expanding this foundation through studies and practical projects involving Azure, AWS, automation, APIs, basic Python and AI agents.",
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Technical knowledge",
      description: "Technologies I use in support and areas where I continue building practical experience.",
    },
    certifications: {
      eyebrow: "Certifications",
      title: "Microsoft credentials",
      description: "Fundamental certifications supporting my growth in cloud computing and artificial intelligence.",
      view: "View certificate",
    },
    projects: {
      eyebrow: "Projects",
      title: "Practical projects and applied learning",
      description: "Projects connected to my experience in support, operations, automation, cloud and artificial intelligence.",
      github: "View on GitHub",
      soon: "Details coming soon",
      statuses: {
        done: "Completed",
        building: "In development",
        soon: "Coming soon",
      },
    },
    experience: {
      eyebrow: "Experience",
      title: "Professional background",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's connect",
      description:
        "I am open to opportunities in technical support, workplace, Microsoft 365, IT operations and entry-level cloud and automation roles.",
      email: "Email me",
    },
    footer: "Built with React, TanStack Start and Tailwind CSS.",
  },
} as const;

function getSkills(language: Language) {
  return language === "pt"
    ? [
        {
          icon: Headphones,
          title: "Suporte & Workplace",
          items: ["Suporte N1 e N2", "Microsoft 365", "Exchange Online", "Teams, SharePoint e OneDrive", "Windows e periféricos"],
        },
        {
          icon: Shield,
          title: "Identidade & Segurança",
          items: ["Active Directory", "Microsoft Entra ID", "MFA e permissões", "Microsoft Defender", "Usuários, grupos e licenças"],
        },
        {
          icon: Monitor,
          title: "Monitoramento & Operações",
          items: ["Zabbix", "OpMon", "Jira e SLA", "NOC e escalonamento", "Documentação técnica"],
        },
        {
          icon: Wrench,
          title: "Cloud & Automação",
          items: ["Microsoft Azure", "AWS", "n8n e Power Automate", "APIs e integrações", "Python básico e agentes de IA"],
        },
      ]
    : [
        {
          icon: Headphones,
          title: "Support & Workplace",
          items: ["Tier 1 and Tier 2 support", "Microsoft 365", "Exchange Online", "Teams, SharePoint and OneDrive", "Windows and peripherals"],
        },
        {
          icon: Shield,
          title: "Identity & Security",
          items: ["Active Directory", "Microsoft Entra ID", "MFA and permissions", "Microsoft Defender", "Users, groups and licensing"],
        },
        {
          icon: Monitor,
          title: "Monitoring & Operations",
          items: ["Zabbix", "OpMon", "Jira and SLA", "NOC and escalation", "Technical documentation"],
        },
        {
          icon: Wrench,
          title: "Cloud & Automation",
          items: ["Microsoft Azure", "AWS", "n8n and Power Automate", "APIs and integrations", "Basic Python and AI agents"],
        },
      ];
}

function getProjects(language: Language) {
  return language === "pt"
    ? [
        {
          icon: Workflow,
          title: "Agente de Triagem Rápida com IA",
          description:
            "Workflow funcional criado no n8n para receber solicitações de suporte, classificar categoria e prioridade, avaliar risco, sugerir ações técnicas, registrar o chamado no Google Sheets e enviar um resumo por e-mail.",
          tech: ["n8n", "OpenAI", "Google Sheets", "Gmail", "JavaScript", "SLA"],
          href: "https://github.com/cmosantos/ai-rapid-triage-agent-n8n",
          status: "done" as ProjectStatus,
        },
        {
          icon: Bot,
          title: "Agente de IA para Geração de Artigos",
          description:
            "API em Python com FastAPI, LangChain e Azure OpenAI que recebe um tema e produz um pacote estruturado com artigo, resumo, SEO, tags, publicação para LinkedIn e notas de pesquisa.",
          tech: ["Python", "FastAPI", "LangChain", "Azure OpenAI", "APIs"],
          href: "https://github.com/cmosantos/ai-agent-article-generation",
          status: "done" as ProjectStatus,
        },
        {
          icon: Database,
          title: "ETL de Incidentes de Service Desk",
          description:
            "Pipeline em Python para extrair, tratar e consolidar dados de incidentes, gerar métricas de categorias, prioridades e violações de SLA, além de salvar resultados em CSV, SQLite e relatório.",
          tech: ["Python", "ETL", "CSV", "SQLite", "Service Desk", "SLA"],
          href: "https://github.com/cmosantos/etl-service-desk-incidents",
          status: "done" as ProjectStatus,
        },
        {
          icon: BookOpen,
          title: "Aplicação RAG com Azure AI Search",
          description:
            "Protótipo em evolução para consultar documentos privados com embeddings, busca vetorial e respostas fundamentadas usando Azure OpenAI e Azure AI Search.",
          tech: ["Azure AI Search", "Azure OpenAI", "RAG", "Embeddings", "Python"],
          href: "https://github.com/cmosantos/rag-application-azure-ai-search",
          status: "building" as ProjectStatus,
        },
        {
          icon: Cloud,
          title: "Automação de Onboarding no Microsoft 365",
          description:
            "Projeto planejado para automatizar criação de usuários, grupos, licenças, permissões e notificações de onboarding com Power Automate, Microsoft Graph e Entra ID.",
          tech: ["Microsoft 365", "Power Automate", "Microsoft Graph", "Entra ID"],
          status: "soon" as ProjectStatus,
        },
      ]
    : [
        {
          icon: Workflow,
          title: "AI Rapid Triage Agent",
          description:
            "Functional n8n workflow that receives support requests, classifies category and priority, evaluates risk, suggests technical actions, registers the ticket in Google Sheets and sends an email summary.",
          tech: ["n8n", "OpenAI", "Google Sheets", "Gmail", "JavaScript", "SLA"],
          href: "https://github.com/cmosantos/ai-rapid-triage-agent-n8n",
          status: "done" as ProjectStatus,
        },
        {
          icon: Bot,
          title: "AI Agent for Article Generation",
          description:
            "Python API using FastAPI, LangChain and Azure OpenAI that receives a topic and produces a structured package containing an article, summary, SEO data, tags, a LinkedIn post and research notes.",
          tech: ["Python", "FastAPI", "LangChain", "Azure OpenAI", "APIs"],
          href: "https://github.com/cmosantos/ai-agent-article-generation",
          status: "done" as ProjectStatus,
        },
        {
          icon: Database,
          title: "Service Desk Incidents ETL",
          description:
            "Python pipeline that extracts, cleans and consolidates incident data, calculates category, priority and SLA breach metrics, and saves results to CSV, SQLite and a report.",
          tech: ["Python", "ETL", "CSV", "SQLite", "Service Desk", "SLA"],
          href: "https://github.com/cmosantos/etl-service-desk-incidents",
          status: "done" as ProjectStatus,
        },
        {
          icon: BookOpen,
          title: "RAG Application with Azure AI Search",
          description:
            "An evolving prototype for querying private documents with embeddings, vector search and grounded responses using Azure OpenAI and Azure AI Search.",
          tech: ["Azure AI Search", "Azure OpenAI", "RAG", "Embeddings", "Python"],
          href: "https://github.com/cmosantos/rag-application-azure-ai-search",
          status: "building" as ProjectStatus,
        },
        {
          icon: Cloud,
          title: "Microsoft 365 Onboarding Automation",
          description:
            "Planned project to automate user creation, groups, licensing, permissions and onboarding notifications with Power Automate, Microsoft Graph and Entra ID.",
          tech: ["Microsoft 365", "Power Automate", "Microsoft Graph", "Entra ID"],
          status: "soon" as ProjectStatus,
        },
      ];
}

function getExperience(language: Language) {
  return language === "pt"
    ? [
        {
          icon: Server,
          title: "Analista de Suporte Júnior / Workplace",
          label: "Atuação atual",
          description:
            "Atendimento a usuários corporativos, administração de serviços Microsoft e suporte a identidades, acessos, endpoints e colaboração.",
          items: [
            "Suporte N1/N2 por e-mail, telefone, chat, remoto e presencial",
            "Microsoft 365, Exchange Online, Teams, SharePoint e OneDrive",
            "Active Directory, Entra ID, MFA, usuários, grupos e permissões",
            "Jira, SLA, onboarding, documentação e suporte a Windows",
          ],
        },
        {
          icon: Monitor,
          title: "Monitoramento e Operações de NOC",
          label: "Experiência complementar",
          description:
            "Monitoramento de ambientes e serviços, tratamento inicial de alertas, registro de incidentes e acionamento de equipes responsáveis.",
          items: [
            "Monitoramento com Zabbix e OpMon",
            "Abertura, atualização e escalonamento de chamados",
            "Checklists operacionais e acompanhamento de disponibilidade",
            "Acionamento de operadoras e equipes técnicas",
          ],
        },
      ]
    : [
        {
          icon: Server,
          title: "Junior IT Support Analyst / Workplace",
          label: "Current role",
          description:
            "Supporting corporate users, administering Microsoft services and assisting with identity, access, endpoints and collaboration tools.",
          items: [
            "Tier 1/2 support by email, phone, chat, remote and on-site assistance",
            "Microsoft 365, Exchange Online, Teams, SharePoint and OneDrive",
            "Active Directory, Entra ID, MFA, users, groups and permissions",
            "Jira, SLA, onboarding, documentation and Windows support",
          ],
        },
        {
          icon: Monitor,
          title: "NOC Monitoring and Operations",
          label: "Additional experience",
          description:
            "Monitoring environments and services, handling initial alerts, registering incidents and escalating to the responsible teams.",
          items: [
            "Monitoring with Zabbix and OpMon",
            "Ticket creation, updates and escalation",
            "Operational checklists and availability tracking",
            "Carrier and technical team escalation",
          ],
        },
      ];
}

function Index() {
  const [language, setLanguage] = useState<Language>("pt");
  const [showLanguagePrompt, setShowLanguagePrompt] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-language");

    if (stored === "pt" || stored === "en") {
      setLanguage(stored);
      return;
    }

    if (!window.navigator.language.toLowerCase().startsWith("pt")) {
      setShowLanguagePrompt(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    setShowLanguagePrompt(false);
    window.localStorage.setItem("portfolio-language", nextLanguage);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav language={language} onLanguageChange={changeLanguage} />
      {showLanguagePrompt && (
        <LanguagePrompt
          onAccept={() => changeLanguage("en")}
          onDismiss={() => setShowLanguagePrompt(false)}
        />
      )}
      <Hero language={language} />
      <About language={language} />
      <Skills language={language} />
      <Certifications language={language} />
      <Projects language={language} />
      <Experience language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

function LanguagePrompt({ onAccept, onDismiss }: { onAccept: () => void; onDismiss: () => void }) {
  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-xl rounded-2xl border border-primary/30 bg-card/95 backdrop-blur-xl px-4 py-3 shadow-card">
      <div className="flex items-center gap-3">
        <Languages className="h-5 w-5 shrink-0 text-primary" />
        <p className="flex-1 text-sm text-muted-foreground">
          We noticed your browser is in English. Would you like to view this portfolio in English?
        </p>
        <button
          type="button"
          onClick={onAccept}
          className="shrink-0 rounded-lg bg-gradient-brand px-3 py-2 text-xs font-semibold text-primary-foreground hover:opacity-90 transition-smooth"
        >
          View in English
        </button>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss language suggestion"
          className="rounded-md p-1 text-muted-foreground hover:text-foreground transition-smooth"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function Nav({ language, onLanguageChange }: { language: Language; onLanguageChange: (language: Language) => void }) {
  const t = copy[language].nav;
  const links = [
    { href: "#about", label: t.about },
    { href: "#skills", label: t.skills },
    { href: "#certifications", label: t.certifications },
    { href: "#projects", label: t.projects },
    { href: "#experience", label: t.experience },
    { href: "#contact", label: t.contact },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <nav className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 font-semibold shrink-0">
          <span className="h-8 w-8 md:h-9 md:w-9 rounded-lg bg-background border border-border grid place-items-center overflow-hidden shadow-glow">
            <img src={logoUrl} alt="Cláudio Santos" className="h-full w-full object-contain" />
          </span>
          <span className="hidden sm:inline text-gradient">Cláudio Santos</span>
        </a>

        <ul className="hidden lg:flex items-center gap-5 text-sm text-muted-foreground">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-foreground transition-smooth">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-lg border border-border bg-card/60 p-1 text-xs font-semibold">
            <button
              type="button"
              onClick={() => onLanguageChange("pt")}
              className={`rounded-md px-2.5 py-1.5 transition-smooth ${language === "pt" ? "bg-gradient-brand text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange("en")}
              className={`rounded-md px-2.5 py-1.5 transition-smooth ${language === "en" ? "bg-gradient-brand text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              EN
            </button>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-gradient-brand text-primary-foreground hover:opacity-90 transition-smooth shadow-glow"
          >
            {t.action} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero({ language }: { language: Language }) {
  const t = copy[language].hero;
  const icons = [Headphones, Shield, Monitor, Sparkles];

  return (
    <section id="top" className="relative pt-40 pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative max-w-6xl mx-auto px-6 text-center animate-fade-up">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-border bg-card/60 backdrop-blur text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          {t.availability}
        </span>
        <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight">
          <span className="text-foreground">Cláudio </span>
          <span className="text-gradient">Santos</span>
        </h1>
        <p className="mt-5 text-lg md:text-xl text-muted-foreground font-medium">{t.role}</p>
        <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">{t.description}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-brand text-primary-foreground font-medium shadow-glow hover:opacity-90 transition-smooth"
          >
            {t.projects} <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card/60 backdrop-blur text-foreground font-medium hover:bg-card transition-smooth"
          >
            {t.contact} <Mail className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {t.highlights.map((label, index) => {
            const Icon = icons[index];
            return (
              <div
                key={label}
                className="flex items-center gap-2 justify-center px-4 py-3 rounded-xl border border-border bg-card/40 backdrop-blur text-sm text-muted-foreground"
              >
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </div>
            );
          })}
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

function About({ language }: { language: Language }) {
  const t = copy[language].about;

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <SectionHeader eyebrow={t.eyebrow} title={t.title} />
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          {t.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills({ language }: { language: Language }) {
  const t = copy[language].skills;
  const skills = getSkills(language);

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader eyebrow={t.eyebrow} title={t.title} desc={t.description} />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group p-6 rounded-2xl border border-border bg-card/60 backdrop-blur hover:border-primary/50 transition-smooth shadow-card hover:-translate-y-1"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-brand grid place-items-center shadow-glow">
                <skill.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{skill.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {item}
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

function Certifications({ language }: { language: Language }) {
  const t = copy[language].certifications;
  const certifications = [
    {
      code: "AZ-900",
      title: "Microsoft Certified: Azure Fundamentals",
      date: language === "pt" ? "Obtida em novembro de 2025" : "Earned in November 2025",
      href: "https://github.com/cmosantos/cmosantos/blob/main/certificados/certificacao-claudio-az900.pdf",
    },
    {
      code: "AI-900",
      title: "Microsoft Certified: Azure AI Fundamentals",
      date: language === "pt" ? "Obtida em janeiro de 2026" : "Earned in January 2026",
      href: "https://github.com/cmosantos/cmosantos/blob/main/certificados/certificado-claudio-ai900.pdf",
    },
  ];

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow={t.eyebrow} title={t.title} desc={t.description} />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {certifications.map((certification) => (
            <a
              key={certification.code}
              href={certification.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 rounded-2xl border border-border bg-card/60 backdrop-blur hover:border-primary/50 transition-smooth shadow-card hover:-translate-y-1"
            >
              <div className="h-14 w-14 shrink-0 rounded-2xl bg-gradient-brand grid place-items-center shadow-glow">
                <BadgeCheck className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                  Microsoft Certified · {certification.code}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{certification.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{certification.date}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                  {t.view} <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects({ language }: { language: Language }) {
  const t = copy[language].projects;
  const projects = getProjects(language);
  const statusStyles: Record<ProjectStatus, string> = {
    done: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    building: "border-amber-500/30 bg-amber-500/10 text-amber-200",
    soon: "border-border bg-secondary text-muted-foreground",
  };

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader eyebrow={t.eyebrow} title={t.title} desc={t.description} />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group p-7 rounded-2xl border border-border bg-card/60 backdrop-blur hover:border-primary/50 transition-smooth shadow-card hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-brand grid place-items-center shadow-glow">
                  <project.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${statusStyles[project.status]}`}>
                  {t.statuses[project.status]}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
                >
                  {t.github} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : (
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                  <Clock3 className="h-3.5 w-3.5" /> {t.soon}
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience({ language }: { language: Language }) {
  const t = copy[language].experience;
  const experiences = getExperience(language);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow={t.eyebrow} title={t.title} />
        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          {experiences.map((experience) => (
            <div key={experience.title} className="p-7 md:p-8 rounded-2xl border border-border bg-card/60 backdrop-blur shadow-card">
              <div className="flex items-start gap-5">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-brand grid place-items-center shadow-glow">
                  <experience.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold">{experience.title}</h3>
                    <span className="text-sm text-muted-foreground">{experience.label}</span>
                  </div>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{experience.description}</p>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {experience.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ language }: { language: Language }) {
  const t = copy[language].contact;
  const items = [
    { icon: Mail, label: t.email, href: "mailto:cmosantos@gmail.com", external: false },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/claudio--santos/", external: true },
    { icon: Github, label: "GitHub", href: "https://github.com/cmosantos", external: true },
    { icon: BookOpen, label: "Hashnode", href: "https://claudiosantos.hashnode.dev", external: true },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="text-sm font-semibold text-primary uppercase tracking-wider">{t.eyebrow}</div>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">{t.title}</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.description}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card/60 backdrop-blur text-foreground font-medium hover:border-primary/50 hover:-translate-y-0.5 transition-smooth shadow-card"
            >
              <item.icon className="h-4 w-4 text-primary" />
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ language }: { language: Language }) {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-md bg-gradient-brand grid place-items-center">
            <Code2 className="h-3 w-3 text-primary-foreground" />
          </span>
          <span>© {new Date().getFullYear()} Cláudio Santos</span>
        </div>
        <div>{copy[language].footer}</div>
      </div>
    </footer>
  );
}
