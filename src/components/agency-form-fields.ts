import type { AgencyFormField } from "@/components/AgencyForm";

/**
 * The site's own contact questions, kept as before (Name, Phone, Email,
 * Service, Message). Passed to the AgencyForm as fallbackFields so the
 * platform config can never drop them.
 */
export const AGENCY_FORM_FIELDS: AgencyFormField[] = [
  { key: "name", label: "Full Name", placeholder: "Your name", type: "text", required: true, options: [] },
  { key: "phone", label: "Phone", placeholder: "Best number to reach you", type: "tel", required: true, options: [] },
  { key: "email", label: "Email", placeholder: "you@example.com", type: "email", required: true, options: [] },
  {
    key: "service",
    label: "Service Needed",
    placeholder: "What do you need help with?",
    type: "select",
    required: false,
    options: [
      "Feasibility Study",
      "Design & Documentation",
      "Development Approvals (DA & CDC)",
      "Engineering & Compliance Setup",
      "Construction & Project Management",
      "Building Inspections",
    ],
  },
  { key: "message", label: "Project Details", placeholder: "Tell us a little about your project…", type: "textarea", required: true, options: [] },
];
