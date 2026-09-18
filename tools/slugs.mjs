// The approved URL map (SEO Phase 1). Shared by convert.mjs and url-map.mjs so the
// generated pages, data and the proposal document can never disagree.

export const SITE_URL = "https://esmagico.com";

/** prototype page id -> public path (with trailing slash) */
export const ROUTES = {
  home: "/",
  pyzo: "/pyzo/",
  "pyzo-atlas": "/pyzo/atlas/",
  "pyzo-compass": "/pyzo/compass/",
  "pyzo-evio": "/pyzo/evio/",
  "pyzo-forge": "/pyzo/forge/",
  "pyzo-loupe": "/pyzo/loupe/",
  "pyzo-prism": "/pyzo/prism/",
  "svc-agentic": "/engineering/agentic-ai/",
  "svc-governance": "/engineering/ai-governance/",
  "svc-modernisation": "/engineering/enterprise-ai/",
  "ind-bfsi": "/industries/bfsi/",
  "ind-healthcare": "/industries/healthcare/",
  "ind-public": "/industries/public-sector/",
  "ind-retail": "/industries/retail/",
  blogs: "/blog/",
  "case-studies": "/case-studies/",
  reports: "/reports/",
  "who-we-are": "/about/",
  people: "/about/",
  careers: "/careers/",
  "careers-apply": "/careers/apply/",
  contact: "/contact/",
  stack: "/technology/",
  privacy: "/privacy/",
  terms: "/terms/",
};

/** prototype case-study id -> client-name slug */
export const CASE_STUDY_SLUGS = {
  rbi: "rbi-innovation-hub",
  cipla: "cipla-global-training-academy",
  koita: "koita-foundation",
  isb: "indian-school-of-business",
  indusind: "indusind-bank",
  samagra: "samagra",
  indiamart: "indiamart",
  tataneu: "tata-neu",
  epic: "epic-global",
};
/** prototype blog slug -> repaired slug; anything not listed is unchanged */
export const BLOG_SLUG_REPAIRS = {
  // truncated at 58 characters by the prototype
  "why-accountable-ai-will-outlast-generative-ai-as-the-phras": "why-accountable-ai-will-outlast-generative-ai",
  "migrating-between-foundation-models-without-rewriting-your": "migrating-between-foundation-models-without-rewriting-your-stack",
  "how-a-regulated-lender-cleared-audit-on-first-pass-with-gu": "how-a-regulated-lender-cleared-audit-on-first-pass",
  "myth-a-more-powerful-model-solves-the-enterprise-ai-proble": "myth-a-more-powerful-model-solves-the-enterprise-ai-problem",
  "claude-opus-4-5-cheaper-frontier-coding-and-what-the-price": "claude-opus-4-5-cheaper-frontier-coding",
  "what-a-production-ready-agent-actually-requires-most-demos": "what-a-production-ready-agent-actually-requires",
  "building-an-ai-operating-model-your-risk-committee-will-ap": "ai-operating-model-your-risk-committee-will-approve",
  "claude-haiku-4-5-and-the-economics-of-small-fast-models-in": "claude-haiku-4-5-economics-of-small-fast-models",
  "credit-model-monitoring-and-drift-detection-through-the-ec": "credit-model-monitoring-and-drift-detection-through-the-economic-cycle",
  "demand-and-inventory-intelligence-that-performs-under-real": "demand-and-inventory-intelligence-under-real-margins",
  "preserving-institutional-knowledge-in-government-with-agen": "preserving-institutional-knowledge-in-government-with-agentic-ai",
  "are-frontier-models-becoming-commodities-an-operator-s-vie": "are-frontier-models-becoming-commodities",
  "ai-in-the-ehr-reducing-click-burden-without-compromising-t": "ai-in-the-ehr-reducing-click-burden",
  "llama-4-against-qwen-3-for-private-and-sovereign-enterpris": "llama-4-against-qwen-3-for-sovereign-enterprise-deployment",
  "automating-loan-document-checks-without-breaking-your-audi": "automating-loan-document-checks-without-breaking-your-audit-trail",
  "why-benchmark-scores-don-t-survive-contact-with-production": "why-benchmark-scores-dont-survive-contact-with-production",
  "is-open-source-catching-up-deepseek-against-gpt-and-claude": "is-open-source-catching-up-deepseek-against-gpt-and-claude",
  "gemini-2-0-flash-and-the-economics-of-an-agentic-multimoda": "gemini-2-0-flash-agentic-multimodal-default",
  "what-hardened-means-in-enterprise-ai-and-how-reusable-bloc": "what-hardened-means-in-enterprise-ai",
  "building-an-llm-evaluation-framework-your-team-will-actual": "llm-evaluation-framework-your-team-will-actually-use",
  "the-operating-principles-behind-every-es-magico-engagement": "operating-principles-behind-every-es-magico-engagement",
  "open-or-closed-a-practitioner-s-framework-for-choosing-fou": "open-or-closed-framework-for-choosing-foundation-models",
  "why-enterprises-choose-es-magico-to-run-ai-in-regulated-en": "why-enterprises-choose-es-magico-in-regulated-environments",
  "agentic-rag-when-retrieval-becomes-a-decision-not-a-lookup": "agentic-rag-when-retrieval-becomes-a-decision",
  "why-most-enterprise-ai-stalls-after-the-pilot-and-what-ope": "why-most-enterprise-ai-stalls-after-the-pilot",
  "llama-3-1-405b-and-the-case-for-open-weight-models-in-regu": "llama-3-1-405b-and-the-case-for-open-weight-models",
  "what-is-an-ai-operator-the-category-built-for-the-work-aft": "what-is-an-ai-operator",
  // apostrophes rendered as "-s-" / "-t"
  "notion-s-workspace-agents": "notions-workspace-agents",
  "why-ai-benchmarks-don-t-predict-production-performance": "why-ai-benchmarks-dont-predict-production-performance",
  "genspark-s-multi-agent-approach": "gensparks-multi-agent-approach",
  "computer-use-is-here-but-agentic-readiness-isn-t": "computer-use-is-here-but-agentic-readiness-isnt",
};

export const blogSlug = (slug) => BLOG_SLUG_REPAIRS[slug] || slug;
export const caseStudySlug = (id) => {
  if (!CASE_STUDY_SLUGS[id]) throw new Error(`no approved slug for case study ${id}`);
  return CASE_STUDY_SLUGS[id];
};
