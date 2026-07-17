import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

type Project = {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
};

const projects: Project[] = [
  {
    name: "AI Rapid Triage Agent",
    category: "AI Automation / IT Support Automation",
    description:
      "AI agent built with n8n to automate IT helpdesk triage: classifies support requests, evaluates priority and security risk, registers tickets in Google Sheets and sends Gmail notifications.",
    technologies: [
      "n8n",
      "OpenAI",
      "Google Sheets",
      "Gmail",
      "JavaScript",
      "AI Agent",
      "Workflow Automation",
      "IT Support Automation",
    ],
    githubUrl: "https://github.com/cmosantos/ai-rapid-triage-agent-n8n",
  },
  {
    name: "AI Agent for Article Generation",
    category: "AI Automation",
    description:
      "Autonomous AI agent built with Python, LangChain, Azure OpenAI, FastAPI, APIs, and n8n integration to generate structured technical articles from a user-provided topic.",
    technologies: ["Azure OpenAI", "Python", "LangChain", "APIs", "FastAPI", "n8n"],
    githubUrl: "https://github.com/cmosantos/ai-agent-article-generation",
  },
];

export default defineTool({
  name: "list_projects",
  title: "List portfolio projects",
  description:
    "List Cláudio Santos' portfolio projects with descriptions, technologies and GitHub links. Optionally filter by keyword or category.",
  inputSchema: {
    query: z
      .string()
      .optional()
      .describe("Optional keyword to filter by name, description, category or technology."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.trim().toLowerCase();
    const results = q
      ? projects.filter((p) =>
          [p.name, p.description, p.category, ...p.technologies]
            .join(" ")
            .toLowerCase()
            .includes(q),
        )
      : projects;
    return {
      content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
      structuredContent: { projects: results },
    };
  },
});