import { PrototypeForm } from "./PrototypeForm";

export function CareersApplyForm() {
  return (
    <PrototypeForm
      submitLabel="Send your introduction"
      doneTitle="Thanks, we have it."
      doneText="If there is a fit, someone from the team will write back. We read every one of these."
      fields={[
        { kind: "input", id: "careers-apply-name", label: "Your name", type: "text", placeholder: "Jane Doe", autoComplete: "name" },
        { kind: "input", id: "careers-apply-email", label: "Email", type: "email", placeholder: "jane@email.com", autoComplete: "email" },
        { kind: "input", id: "careers-apply-phone", label: "Phone (optional)", type: "tel", placeholder: "+91 00000 00000", autoComplete: "tel" },
        {
          kind: "select",
          id: "careers-apply-area",
          label: "Where you would operate",
          placeholder: "Select an area",
          options: [
            "Product Manager (open role)",
            "Human Resources Manager (open role)",
            "AI & machine learning",
            "Backend & platform engineering",
            "Frontend & product engineering",
            "Data engineering",
            "Product & design",
            "Delivery & operations",
            "People & talent",
            "Business & partnerships",
          ],
        },
        { kind: "input", id: "careers-apply-links", label: "LinkedIn, GitHub or portfolio", type: "url", placeholder: "https://", autoComplete: "off" },
        {
          kind: "textarea",
          id: "careers-apply-note",
          label: "What have you shipped, and what did you own?",
          placeholder: "One system you took to production, the constraint that made it hard, and the part that was yours.",
        },
      ]}
    />
  );
}
