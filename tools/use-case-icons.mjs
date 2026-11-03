/*
 * Icons for the "Where AI fits" use cases on the industry pages, keyed by the use case's
 * heading. They replace the product logos the design put before each heading (client
 * request, 3 November 2026): each says what the use case is about rather than which
 * product delivers it. 24x24, 1.5 stroke, round caps, currentColor; the colour is set by
 * .iq-ic in app/globals.css so both themes follow.
 */
export const USE_CASE_ICONS = {
  /* ------------------------------------------------------------------ BFSI */
  // a mortarboard: training
  "Every branch trained to one standard":
    '<path d="M2.5 9 12 4.5 21.5 9 12 13.5Z"/><path d="M6.5 11v4.2c1.6 1.5 3.4 2.3 5.5 2.3s3.9-.8 5.5-2.3V11"/><path d="M21.5 9v5"/>',
  // a clipboard with a tick: audit ready
  "Audit preparation in days":
    '<path d="M9 4.5H7.5A1.5 1.5 0 0 0 6 6v13.5A1.5 1.5 0 0 0 7.5 21h9a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H15"/><rect x="9" y="3" width="6" height="3" rx="1"/><path d="m9 13 2 2 4-4.5"/>',
  // two speech bubbles: the borrower's own language
  "Collections in the borrower’s language":
    '<path d="M3.5 5.5h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8l-3 2.5v-2.5H3.5a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z"/><path d="M17.5 9.5h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H19V20l-3-2.5h-4.5a1 1 0 0 1-1-1V16"/>',
  // a screen with a repair arrow: the step that repairs itself
  "Workflows that survive a screen change":
    '<rect x="2.5" y="4" width="19" height="13" rx="1.5"/><path d="M8.5 21h7M12 17v4"/><path d="M15 10.5a3 3 0 1 1-1-2.2"/><path d="M14.5 6.8v1.8h-1.8"/>',
  // a form with every field ticked
  "Applications complete the first time":
    '<path d="M6 3h8.5L19 7.5V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v5h5"/><path d="m8 12.5 1.3 1.3 2.2-2.4M8 17l1.3 1.3 2.2-2.4M13.5 13h3M13.5 17.5h3"/>',
  // a balance: assessed consistently
  "Claims and loans assessed consistently":
    '<path d="M12 4v16M8 20h8M5 7h14"/><path d="m5 7-2.5 6a2.5 2.5 0 0 0 5 0Z"/><path d="m19 7-2.5 6a2.5 2.5 0 0 0 5 0Z"/>',

  /* ------------------------------------------------------------ Healthcare */
  // a rosette: a certificate an inspector accepts
  "Training an inspector will accept":
    '<circle cx="12" cy="9" r="5.5"/><path d="m9.5 9 1.7 1.7 3.3-3.4"/><path d="M8.6 13.4 7 21l5-2.6 5 2.6-1.6-7.6"/>',
  // a magnifier over a tick: inspection readiness
  "Inspection readiness in less time":
    '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.3 15.3 5.2 5.2"/><path d="m7.8 10.6 1.9 1.9 3.6-3.8"/>',
  // a headset with a clock face: support at any hour
  "Patient support at any hour":
    '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="13.5" width="3.5" height="5.5" rx="1.2"/><rect x="17.5" y="13.5" width="3.5" height="5.5" rx="1.2"/><path d="M19.2 19v.5a2.5 2.5 0 0 1-2.5 2.5H13"/><path d="M12 8.5v3l2 1.2"/>',
  // a vial with a forward arrow: faster release
  "Faster batch release":
    '<path d="M8 3h6M9 3v6.2L4.6 17.5A2.3 2.3 0 0 0 6.6 21h8.8a2.3 2.3 0 0 0 2-3.5L13 9.2V3"/><path d="M6.4 15h9.2"/><path d="M17.5 6.5h4M19.8 4.5l1.7 2-1.7 2"/>',
  // a document sent upward: submitted complete
  "Submissions complete before review":
    '<path d="M6 3h8.5L19 7.5V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v5h5"/><path d="M12 18v-7M9 13.5 12 10.5l3 3"/>',
  // a stack of records, every one ticked
  "Every batch record reviewed in full":
    '<rect x="4" y="3" width="16" height="5" rx="1"/><rect x="4" y="9.5" width="16" height="5" rx="1"/><rect x="4" y="16" width="16" height="5" rx="1"/><path d="m7 5.5.9.9L9.5 4.8M7 12l.9.9 1.6-1.6M7 18.5l.9.9 1.6-1.6M12 5.5h5M12 12h5M12 18.5h5"/>',

  /* --------------------------------------------------------- Public sector */
  // a map pin over a person: staff out in the field
  "Field staff trained to one standard":
    '<path d="M12 21.5s-6.5-6.2-6.5-11.2a6.5 6.5 0 0 1 13 0c0 5-6.5 11.2-6.5 11.2Z"/><circle cx="12" cy="9" r="2"/><path d="M8.8 14.2a4.2 4.2 0 0 1 6.4 0"/>',
  // a record with a question answered: a request on the record
  "Information requests answered on the record":
    '<path d="M4 4.5h11a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1Z"/><path d="M6.5 9h6M6.5 12.5h6M6.5 16h3.5"/><path d="M16 9.5h4.5a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H19v2l-3-2"/>',
  // a globe with a speech mark: heard in every language
  "Grievances heard in every language":
    '<circle cx="10.5" cy="12" r="8"/><path d="M2.5 12h16M10.5 4c2.2 2.2 3.3 4.9 3.3 8s-1.1 5.8-3.3 8c-2.2-2.2-3.3-4.9-3.3-8s1.1-5.8 3.3-8Z"/><path d="M17.5 3.5h4v3.2h-1.6L18.5 8V6.7h-1Z"/>',
  // a calendar with a tick: kept on schedule
  "Processing that keeps its schedule":
    '<rect x="3.5" y="5" width="17" height="15.5" rx="1.5"/><path d="M3.5 9.5h17M8 3v4M16 3v4"/><path d="m9 14.6 2 2 4-4.2"/>',
  // an in-tray with a tick: applications arrive complete
  "Scheme applications that arrive complete":
    '<path d="M3 13.5 5.5 5a1 1 0 0 1 1-.7h11a1 1 0 0 1 1 .7L21 13.5V19a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"/><path d="M3 13.5h5l1.2 2.2h5.6L16 13.5h5"/><path d="m9.5 9 1.7 1.7 3.3-3.4"/>',
  // a gavel: judged consistently
  "Grants and tenders judged consistently":
    '<path d="m13.5 4.5 6 6M11 7l6 6M12.2 5.8l4.8 4.8"/><path d="m14 10-8.5 8.5"/><path d="M3 21h9"/>',

  /* ---------------------------------------------------- Consumer & Retail */
  // a person added: seasonal hiring
  "Seasonal hiring without the service dip":
    '<circle cx="9.5" cy="8" r="3.5"/><path d="M3 20c.6-3.8 3.1-5.8 6.5-5.8s5.9 2 6.5 5.8"/><path d="M18.5 8v6M15.5 11h6"/>',
  // a chart with a pencil: a review drafted
  "Category reviews drafted for you":
    '<path d="M4 20V4M4 20h16"/><path d="M7.5 16v-4M11 16V9M14.5 16v-2.5"/><path d="m15.5 9.5 4.3-4.3a1.2 1.2 0 0 1 1.7 1.7l-4.3 4.3-2.3.6Z"/>',
  // a speech bubble over a peak line: answered through the peak
  "Customers answered through every peak":
    '<path d="M4.5 3.5h15a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H10l-4 3.5V15H4.5a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z"/><path d="m6.5 11.5 2.6-3 2.4 2 2.7-4.3 3.3 5.3"/>',
  // a ledger with balancing arrows: inventory that reconciles
  "Inventory that reconciles itself":
    '<path d="M5 3.5h12a1 1 0 0 1 1 1V12M5 3.5a1.5 1.5 0 0 0-1.5 1.5v14A1.5 1.5 0 0 0 5 20.5h6"/><path d="M7.5 3.5v17M10 8h5M10 11.5h5"/><path d="M14.5 17.5a3.2 3.2 0 0 1 5.6-2.1M21 17.5a3.2 3.2 0 0 1-5.6 2.1"/><path d="M20.4 13.6v1.9h-1.9M15.1 21.4v-1.9H17"/>',
  // a storefront with a tick: sellers onboarded right
  "Sellers onboarded right the first time":
    '<path d="M4 9.5V20a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9.5"/><path d="M3 4h18l1 4.2a2.6 2.6 0 0 1-5 .7 2.6 2.6 0 0 1-5 0 2.6 2.6 0 0 1-5 0 2.6 2.6 0 0 1-5-.7Z"/><path d="m9 15.2 2 2 4-4.2"/>',
  // a full grid of ticks: every vendor and store checked, none sampled
  "Vendor and store audits without sampling":
    '<rect x="3" y="3" width="18" height="18" rx="1.5"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/><path d="m4.7 6.1.8.8 1.3-1.4M10.7 6.1l.8.8 1.3-1.4M16.7 6.1l.8.8 1.3-1.4M4.7 12.1l.8.8 1.3-1.4M10.7 12.1l.8.8 1.3-1.4M16.7 12.1l.8.8 1.3-1.4M4.7 18.1l.8.8 1.3-1.4M10.7 18.1l.8.8 1.3-1.4M16.7 18.1l.8.8 1.3-1.4"/>',
};
