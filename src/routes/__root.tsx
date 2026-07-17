import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-7xl font-bold text-foreground" aria-hidden="true">404</p>
        <h1 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Cláudio Santos — Suporte Técnico | Microsoft 365 | Cloud e IA" },
      {
        name: "description",
        content:
          "Portfólio profissional de Cláudio Santos, Analista de Suporte Júnior com experiência em Microsoft 365, Workplace, identidade, monitoramento, cloud e automação com IA.",
      },
      { name: "author", content: "Cláudio Santos" },
      { property: "og:title", content: "Cláudio Santos — Suporte Técnico | Microsoft 365 | Cloud e IA" },
      {
        property: "og:description",
        content:
          "Experiência em suporte, Microsoft 365, Workplace, Entra ID, Zabbix, OpMon, cloud e projetos de automação com inteligência artificial.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Cláudio Santos — Suporte Técnico | Microsoft 365 | Cloud e IA" },
      {
        name: "twitter:description",
        content:
          "Portfólio profissional com experiência em suporte, Microsoft 365, Workplace, monitoramento, cloud e automação com IA.",
      },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/3146aafe-4adf-4ec6-b777-f5cef7130029",
      },
      {
        name: "twitter:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/3146aafe-4adf-4ec6-b777-f5cef7130029",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
