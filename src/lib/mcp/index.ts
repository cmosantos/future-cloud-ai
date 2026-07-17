import { defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import listProjectsTool from "./tools/list-projects";
import getContactTool from "./tools/get-contact";

export default defineMcp({
  name: "cloud-ai-ascent-mcp",
  title: "Cláudio Santos Portfolio",
  version: "0.1.0",
  instructions:
    "Public tools for Cláudio Santos' portfolio. Use `get_profile` for the professional summary, `list_projects` (optionally filtered by keyword) for portfolio projects, and `get_contact` for public contact links.",
  tools: [getProfileTool, listProjectsTool, getContactTool],
});