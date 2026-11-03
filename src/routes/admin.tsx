import { createFileRoute, redirect } from "@tanstack/react-router";
import { AGENCY_PLATFORM_URL } from "@/agency.config";

export const Route = createFileRoute("/admin")({
  beforeLoad: () => { throw redirect({ href: AGENCY_PLATFORM_URL + "/admin" }); },
});
