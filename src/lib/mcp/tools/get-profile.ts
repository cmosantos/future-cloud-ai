import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const profile = {
  name: "Cláudio Santos",
  role: "Junior Support Analyst | Microsoft 365 | Cloud & AI Automation",
  summary:
    "Junior IT Support Analyst and Workplace professional with hands-on experience supporting corporate users across email, phone, chat, remote and on-site channels, with strong focus on SLA, operational continuity and user experience. Expanding into Azure, AWS, APIs, Python and AI agents.",
  focusAreas: [
    "Microsoft 365 & Workplace (Exchange Online, Teams, SharePoint, OneDrive)",
    "Identity & security (Microsoft Entra ID, Active Directory, MFA, Defender)",
    "Infrastructure monitoring (Zabbix, OpMon, NOC operations)",
    "Cloud (Azure, AWS)",
    "AI automation & agents (n8n, LangChain, Azure OpenAI, Python)",
  ],
  languages: ["Portuguese", "English"],
  portfolioUrl: "https://future-cloud-ai.lovable.app",
};

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Return Cláudio Santos' professional profile: current role, summary, focus areas and portfolio link.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
    structuredContent: profile,
  }),
});

export { profile };