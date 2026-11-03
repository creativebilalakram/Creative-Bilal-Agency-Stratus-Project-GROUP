import { describe, expect, it } from "vitest";
import { AGENCY_FORM_FIELDS, type AgencyFormFieldKeyLike } from "@/components/agency-form-fields";
import type { AgencyFormField } from "@/components/AgencyForm";

function field(key: string): AgencyFormField {
  const found = AGENCY_FORM_FIELDS.find((f) => f.key === key);
  if (!found) throw new Error(`missing field: ${key}`);
  return found;
}

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
    expect(field("name").required).toBe(true);
    expect(field("phone").required).toBe(true);
    expect(field("email").required).toBe(true);
    expect(field("message").required).toBe(true);
    expect(field("service").required).toBe(false);
  });

  it("uses the site's field types and the six service options", () => {
    expect(field("phone").type).toBe("tel");
    expect(field("email").type).toBe("email");
    expect(field("service").type).toBe("select");
    expect(field("message").type).toBe("textarea");
    expect(field("service").options).toHaveLength(6);
  });
});
