import { PrototypeForm } from "./PrototypeForm";

export function ContactForm() {
  return (
    <PrototypeForm
      submitLabel="Submit"
      doneTitle="Thanks, an operator will be in touch."
      fields={[
        { kind: "input", id: "contact-name", label: "Your name", type: "text", placeholder: "Jane Doe", autoComplete: "name" },
        { kind: "input", id: "contact-email", label: "Work email", type: "email", placeholder: "jane@company.com", autoComplete: "email" },
        { kind: "input", id: "contact-org", label: "Organisation", type: "text", placeholder: "Company name", autoComplete: "organization" },
        {
          kind: "select",
          id: "contact-sector",
          label: "Industry",
          placeholder: "Select an industry",
          options: [
            "Banking & Financial Services",
            "Healthcare & Life Sciences",
            "Public Sector & Governance",
            "Consumer & Retail",
            "Other",
          ],
        },
        {
          kind: "textarea",
          id: "contact-outcome",
          label: "The outcome you need to move",
          placeholder: "e.g. halve grievance turnaround, without failing our own audit.",
        },
      ]}
    />
  );
}
