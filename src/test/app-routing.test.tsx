import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

  const sitePages = [
    "/",
    "/services",
    "/services/architecture-design",
    "/contact-us",
    "/faqs",
    "/about-us",
    "/feasibility-study",
    "/development-approvals-da-cdc",
    "/engineering-compliance-setup",
    "/construction-project-management",
    "/building-inspections",
    "/privacy-policy",
    "/thank-you",
  ];

  it.each(sitePages)("matches a page for %s instead of falling back to not found", (path) => {
    const matches = router.matchRoutes(path);
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("falls back to not found for an unknown path", () => {
    const matches = router.matchRoutes("/this-page-does-not-exist");
    expect(matches.at(-1)?.routeId).toBe(rootRouteId);
  });
});
