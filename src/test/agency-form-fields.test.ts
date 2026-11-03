import { describe, expect, it } from "vitest";
import { AGENCY_FORM_FIELDS } from "@/components/agency-form-fields";

// The user's rule: the agency form must keep the site's own questions
// (name, phone, email, message) plus the service selector as before.
describe("AGENCY_FORM_FIELDS", () => {
  it("keeps exactly the site's field keys, in order", () => {
    expect(AGENCY_FORM_FIELDS.map((f) => f.key)).toEqual([
      "name",
      "phone",
      "email",
      "service",
      "message",
    ]);
  });

  it("marks name, phone, email and message required and service optional", () => {
    const byKey = Object.fromEntries(AGENCY_FORM_FIELDS.map((f) => [f.key, f]));
    expect(byKey.name.required).toBe(true);
    expect(byKey.phone.required).toBe(true);
    expect(byKey.email.required).toBe(true);
    expect(byKey.message.required).toBe(true);
    expect(byKey.service.required).toBe(false);
  });

  it("uses the site's field types and the six service options", () => {
    const byKey = Object.fromEntries(AGENCY_FORM_FIELDS.map((f) => [f.key, f]));
    expect(byKey.phone.type).toBe("tel");
    expect(byKey.email.type).toBe("email");
    expect(byKey.service.type).toBe("select");
    expect(byKey.message.type).toBe("textarea");
    expect(byKey.service.options).toHaveLength(6);
  });
});
