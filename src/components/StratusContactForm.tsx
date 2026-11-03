import { AGENCY_PLATFORM_URL } from "@/agency.config";
import { useAgencyKey } from "@/hooks/useAgencyKey";
import { AgencyForm, AgencyFormStyles } from "@/components/AgencyForm";
import { DemoContactForm } from "@/components/DemoContactForm";
import { AGENCY_FORM_FIELDS } from "@/components/agency-form-fields";

/**
 * The site's contact form: submits to the Agency Platform once the site key
 * is active; until then the demo form shows the same look and sends nothing.
 */
export function StratusContactForm() {
  const siteKey = useAgencyKey();
  return (
    <>
      {siteKey ? (
        <AgencyForm formKey={siteKey} platformUrl={AGENCY_PLATFORM_URL} fallbackFields={AGENCY_FORM_FIELDS} />
      ) : (
        <DemoContactForm fields={AGENCY_FORM_FIELDS} />
      )}
      <AgencyFormStyles />
    </>
  );
}

export default StratusContactForm;
