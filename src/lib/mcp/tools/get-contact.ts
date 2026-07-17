import { defineTool } from "@lovable.dev/mcp-js";

const contact = {
  name: "Cláudio Santos",
  github: "https://github.com/cmosantos",
  portfolio: "https://future-cloud-ai.lovable.app",
};

export default defineTool({
  name: "get_contact",
  title: "Get contact info",
  description: "Return public contact and social links for Cláudio Santos.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
    structuredContent: contact,
  }),
});