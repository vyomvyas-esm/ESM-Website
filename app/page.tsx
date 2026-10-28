import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
export const metadata = pageMetadata({
  title: "Es Magico - The Operator for AI-native Transformation",
  absoluteTitle: true,
  description: "",
  path: "/",
});
export default function HomePage() {
  return (
    <main className="page" id="page-home">
      <section className="hero-tall relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
        </div>
        <div className="relative mx-auto flex w-full max-w-shell flex-1 flex-col px-6 lg:px-8">
          <div className="hero-mid flex flex-1 flex-col items-center justify-center text-center">
            <span className="eyebrow rv">AI-native Operator for Regulated Enterprises</span>
            <h1 className="h-hero hh-h1 mt-7 rv" data-d="80">
              Engineering AI ambition
              <span className="hh-line">
                <svg className="hh-arrow" viewBox="0 0 64 16" fill="none" aria-hidden="true">
                  <path
                    d="M2.4 8h57M50.8 2.7 59.4 8l-8.6 5.3"
                    stroke="currentColor"
                    strokeWidth="4.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="hh-rot" id="heroRot">
                  <span className="hh-opt is-on">
                    <span className="hh-lead">Governed</span> outcomes
                  </span>
                  <span className="hh-opt" aria-hidden="true">
                    <span className="hh-lead">Enterprise</span> value
                  </span>
                </span>
              </span>
            </h1>
            <p className="lede hero-lede mt-5 max-w-[640px] rv" data-d="160">
              We operationalise Agentic AI in your enterprise environment, owning the governance, the
              architecture, and the day-to-day operations, with our Enterprise AI suite, PYZO, to deliver
              proven enterprise value with improved operational efficiency.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 rv" data-d="240">
              <Link className="btn btn-light group" href="/contact/">
                Define an Outcome
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>{" "}
              <a className="btn btn-ghost" href="#proof">
                Check the proof
              </a>
            </div>
          </div>
          <p className="hero-caption eyebrow mb-3 text-center rv" data-d="320">
            Operating inside regulated enterprises
          </p>
        </div>
        <div className="brand-band relative rv" data-d="360">
          <div className="mx-auto max-w-shell px-6 lg:px-8">
            <div className="bm-rail">
              <ul className="bm-track" aria-label="Clients">
                <li className="bm-item">
                  <span
                    className="clogo logow-rbi"
                    role="img"
                    aria-label="Reserve Bank Innovation Hub"
                  ></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-indusind" role="img" aria-label="IndusInd Bank"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-hsbc" role="img" aria-label="HSBC"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-hdfc" role="img" aria-label="HDFC Capital"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-cipla" role="img" aria-label="Cipla"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-nabh" role="img" aria-label="NABH"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-m3" role="img" aria-label="M3 Inc."></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-koita" role="img" aria-label="Koita Foundation"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-up" role="img" aria-label="Government of Uttar Pradesh"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-odisha" role="img" aria-label="Government of Odisha"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-qci" role="img" aria-label="Quality Council of India"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-msrdc" role="img" aria-label="MSRDC"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-dsci" role="img" aria-label="DSCI"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-egov" role="img" aria-label="eGov Foundation"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-samagra" role="img" aria-label="Samagra Governance"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-evalueserve" role="img" aria-label="Evalueserve"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-bookmyshow" role="img" aria-label="BookMyShow"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-tatadigital" role="img" aria-label="Tata Digital"></span>
                </li>
                <li className="bm-item">
                  <span
                    className="clogo logow-tataconsumer"
                    role="img"
                    aria-label="Tata Consumer Products"
                  ></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-isb" role="img" aria-label="Indian School of Business"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-abfrl" role="img" aria-label="ABFRL"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-indiamart" role="img" aria-label="IndiaMART"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-oyo" role="img" aria-label="OYO"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-epic" role="img" aria-label="Epic Global"></span>
                </li>
                <li className="bm-item">
                  <span
                    className="clogo logow-lsc"
                    role="img"
                    aria-label="LSC Freights &amp; Logistics"
                  ></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-rbi" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-indusind" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-hsbc" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-hdfc" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-cipla" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-nabh" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-m3" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-koita" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-up" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-odisha" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-qci" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-msrdc" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-dsci" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-egov" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-samagra" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-evalueserve" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-bookmyshow" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-tatadigital" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-tataconsumer" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-isb" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-abfrl" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-indiamart" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-oyo" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-epic" aria-hidden="true"></span>
                </li>
                <li className="bm-item">
                  <span className="clogo logow-lsc" aria-hidden="true"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="proof" className="relative overflow-hidden bg-ink pb-[108px]">
        <div className="proof-photo" aria-hidden="true"></div>
        <div className="proof-scrim" aria-hidden="true"></div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <p className="eyebrow gov-label pt-[22px] text-center">Enterprise-grade governance</p>
          <ul className="cs-chips" aria-label="Security and compliance posture">
            <li className="cs-chip">
              <svg
                className="cs-ic"
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="8" cy="6.4" r="4.1" />
                <path d="M5.6 10.1 4.6 14.4l3.4-1.7 3.4 1.7-1-4.3" />
              </svg>
              <span>ISO/IEC 27001:2022</span>
            </li>
            <li className="cs-chip">
              <svg
                className="cs-ic"
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 1.9 13.3 4v4c0 3.1-2.1 5.4-5.3 6.3C4.8 13.4 2.7 11.1 2.7 8V4Z" />
                <path d="m5.9 7.9 1.5 1.6 2.9-3.1" />
              </svg>
              <span>SOC 2 Type II</span>
            </li>
            <li className="cs-chip">
              <svg
                className="cs-ic"
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.2 8s2.3-3.9 5.8-3.9S13.8 8 13.8 8s-2.3 3.9-5.8 3.9S2.2 8 2.2 8Z" />
                <circle cx="8" cy="8" r="1.6" />
                <path d="M3.2 3.2l9.6 9.6" />
              </svg>
              <span>PII masking</span>
            </li>
            <li className="cs-chip">
              <svg
                className="cs-ic"
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3.1" y="7.1" width="9.8" height="6.6" rx="1.6" />
                <path d="M5.5 7.1V5.2a2.5 2.5 0 0 1 5 0v1.9" />
                <path d="M8 9.8v1.3" />
              </svg>
              <span>AES-256 encryption</span>
            </li>
            <li className="cs-chip">
              <svg
                className="cs-ic"
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2.4" y="2.6" width="11.2" height="4.3" rx="1.3" />
                <rect x="2.4" y="9.1" width="11.2" height="4.3" rx="1.3" />
                <path d="M4.7 4.75h.01M4.7 11.25h.01" />
              </svg>
              <span>Isolated hosting</span>
            </li>
            <li className="cs-chip">
              <svg
                className="cs-ic"
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2.1" y="2.7" width="11.8" height="10.6" rx="2" />
                <circle cx="8" cy="6.6" r="1.7" />
                <path d="M5.2 11.2c.5-1.4 1.6-2.1 2.8-2.1s2.3.7 2.8 2.1" />
              </svg>
              <span>Role-based access</span>
            </li>
          </ul>
          <div className="cs-head mt-[96px] grid gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
            <div className="rv">
              <span className="eyebrow rv">Proof in production</span>
              <h2 className="h-sec h-sec-sm mt-5">Governed outcomes, proven in production</h2>
            </div>
            <div className="rv" data-d="120">
              <Link className="btn btn-light group" href="/case-studies/">
                Read all case studies
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="cs-acc mt-[46px]">
            <details className="ca-row rv" data-d="0">
              <summary>
                <span className="ca-ic">
                  <span className="ca-x"></span>
                </span>
                <span className="clogo ca-logo logow-rbi" role="img" aria-label="RBI Innovation Hub"></span>
                <span className="ca-head">
                  81% reduction in TAT with a voice-first grievance protocol for banking
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="ca-figs">
                    <div className="ca-fig">
                      <div className="n tally">81%</div>
                      <div className="l">Lower turnaround time</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">2 min</div>
                      <div className="l">Average registration time</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">12+</div>
                      <div className="l">Indic languages</div>
                    </div>
                  </div>
                  <p className="ca-copy">
                    A multilingual, voice-first grievance protocol that ensures audit-ready execution in
                    adherence to complex regulatory mandates for tier-one banking.
                  </p>
                  <Link className="ca-link group" href="/case-studies/rbi-innovation-hub/">
                    <span className="ca-goic">
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Read the case study
                  </Link>
                </div>
              </div>
            </details>
            <details className="ca-row rv" data-d="50">
              <summary>
                <span className="ca-ic">
                  <span className="ca-x"></span>
                </span>
                <span className="clogo ca-logo logow-indusind" role="img" aria-label="IndusInd Bank"></span>
                <span className="ca-head">
                  33% increase in process adherence via trainer-independent learning
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="ca-figs">
                    <div className="ca-fig">
                      <div className="n tally">63%</div>
                      <div className="l">Cost reduction in content creation</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">12,000+</div>
                      <div className="l">Employees trained</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">7,800+</div>
                      <div className="l">Person-hours saved</div>
                    </div>
                  </div>
                  <p className="ca-copy">
                    Process training for the workforce with AI avatar-led, trainer-independent sessions with
                    role-play simulations and instant query resolution.
                  </p>
                  <Link className="ca-link group" href="/case-studies/indusind-bank/">
                    <span className="ca-goic">
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Read the case study
                  </Link>
                </div>
              </div>
            </details>
            <details className="ca-row rv" data-d="100">
              <summary>
                <span className="ca-ic">
                  <span className="ca-x"></span>
                </span>
                <span
                  className="clogo ca-logo logow-qci"
                  role="img"
                  aria-label="Quality Council of India"
                ></span>
                <span className="ca-head">
                  78% reduction in application filing time through guided AI assistance
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="ca-figs">
                    <div className="ca-fig">
                      <div className="n tally">78%</div>
                      <div className="l">Less application filing time</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">63%</div>
                      <div className="l">Less assessor review time</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">910+</div>
                      <div className="l">Requirements automated</div>
                    </div>
                  </div>
                  <p className="ca-copy">
                    AI-powered assistance to evaluate accreditation documents for completeness and
                    correctness, against strict standards to accelerate compliance checks at public scale.
                  </p>
                  <Link className="ca-link group" href="/case-studies/">
                    <span className="ca-goic">
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Read the case study
                  </Link>
                </div>
              </div>
            </details>
            <details className="ca-row rv" data-d="150">
              <summary>
                <span className="ca-ic">
                  <span className="ca-x"></span>
                </span>
                <span className="clogo ca-logo logow-tataneu2" role="img" aria-label="Tata Neu"></span>
                <span className="ca-head">
                  27% increase in customer retention with a gamified rewards engine
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="ca-figs">
                    <div className="ca-fig">
                      <div className="n tally">45%</div>
                      <div className="l">Reward redemption</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">0.75M+</div>
                      <div className="l">Users engaged</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">1.8M+</div>
                      <div className="l">Rewards issued</div>
                    </div>
                  </div>
                  <p className="ca-copy">
                    A gamified rewards engine turns complex app interactions of user cohorts into
                    high-engagement playable mechanics at enterprise scale.
                  </p>
                  <Link className="ca-link group" href="/case-studies/tata-neu/">
                    <span className="ca-goic">
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Read the case study
                  </Link>
                </div>
              </div>
            </details>
            <details className="ca-row rv" data-d="200">
              <summary>
                <span className="ca-ic">
                  <span className="ca-x"></span>
                </span>
                <span
                  className="clogo ca-logo logow-isb"
                  role="img"
                  aria-label="Indian School of Business"
                ></span>
                <span className="ca-head">
                  74% reduction in evaluation time through AI-native candidate screening
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="ca-figs">
                    <div className="ca-fig">
                      <div className="n tally">97%</div>
                      <div className="l">Faculty concordance</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">9,200+</div>
                      <div className="l">Candidates evaluated</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">6,100</div>
                      <div className="l">Person-hours saved a year</div>
                    </div>
                  </div>
                  <p className="ca-copy">
                    A rubric-based evaluation methodology for consistent and explainable candidate screening
                    at scale, free of bias.
                  </p>
                  <Link className="ca-link group" href="/case-studies/indian-school-of-business/">
                    <span className="ca-goic">
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Read the case study
                  </Link>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink pt-[86px] pb-[108px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">The enterprise AI suite</span>
          <div className="pz-split mt-7">
            <div className="pz-mark rv">
              <span className="pyzo-logo xl">
                <svg
                  className="pyzo-mark"
                  preserveAspectRatio="xMinYMid meet"
                  viewBox="0 0 1210 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M533.873 324.022V400H826V328.492H623.629L823.77 75.9776V0H585.745L542.793 69.5569V71.5084H736.243L533.873 324.022Z"
                    fill="var(--teal)"
                  />
                  <path d="M585.745 0H542.793V69.5569L585.745 0Z" fill="var(--teal)" />
                  <path
                    d="M378.356 400H453.618V213.966L542.793 69.5569V0H494.873L417.938 133.52H413.479L333.757 0H244L378.356 213.966V400Z"
                    fill="var(--teal)"
                  />
                  <path
                    d="M0 0V400H75.121V253.073V181.564V71.5084H142.452C155.435 71.5084 166.379 74.1155 175.282 79.3296C184.185 84.5438 190.863 91.2477 195.315 99.4413C199.766 107.635 201.992 116.574 201.992 126.257C201.992 135.94 199.766 145.065 195.315 153.631C190.863 161.825 184.185 168.529 175.282 173.743C166.379 178.957 155.435 181.564 142.452 181.564H75.121V253.073H140.226C165.823 253.073 188.823 247.858 209.226 237.43C229.629 226.629 245.766 211.732 257.637 192.737C269.879 173.371 276 151.21 276 126.257C276 101.304 269.879 79.3296 257.637 60.3352C245.766 41.3408 229.629 26.6294 209.226 16.2011C188.823 5.40037 165.823 0 140.226 0H0Z"
                    fill="var(--cyan)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1010 400C981.479 400 954.92 395.009 930.321 385.027C906.078 374.688 884.866 360.428 866.684 342.246C848.859 323.708 834.955 302.317 824.973 278.075C814.991 253.832 810 227.807 810 200C810 172.192 814.991 146.168 824.973 121.925C834.955 97.6827 848.859 76.4706 866.684 58.2888C884.866 39.7505 906.078 25.4902 930.321 15.508C954.92 5.16935 981.479 0 1010 0C1038.52 0 1064.9 5.16935 1089.14 15.508C1113.39 25.4902 1134.6 39.7505 1152.78 58.2888C1170.96 76.4706 1185.04 97.6827 1195.03 121.925C1205.01 146.168 1210 172.192 1210 200C1210 227.807 1205.01 253.832 1195.03 278.075C1185.04 302.317 1170.96 323.708 1152.78 342.246C1134.6 360.428 1113.39 374.688 1089.14 385.027C1064.9 395.009 1038.52 400 1010 400ZM1074.71 314.973C1055.45 326.025 1033.89 331.551 1010 331.551C986.471 331.551 965.08 326.025 945.829 314.973C926.577 303.922 911.248 288.592 899.84 268.984C888.431 249.02 882.727 226.025 882.727 200C882.727 173.619 888.431 150.624 899.84 131.016C911.248 111.408 926.577 96.0784 945.829 85.0267C965.08 73.975 986.471 68.4492 1010 68.4492C1033.89 68.4492 1055.45 73.975 1074.71 85.0267C1093.96 96.0784 1109.29 111.408 1120.7 131.016C1132.1 150.624 1137.81 173.619 1137.81 200C1137.81 226.025 1132.1 249.02 1120.7 268.984C1109.29 288.592 1093.96 303.922 1074.71 314.973Z"
                    fill="var(--cyan)"
                  />
                </svg>
              </span>
            </div>
            <div className="pz-cta rv" data-d="120">
              <Link className="btn btn-light group" href="/pyzo/">
                Explore PYZO
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="pz-grid mt-[62px]">
            <Link className="card pz-card flex flex-col p-5 text-left rv" href="/pyzo/atlas/">
              <div className="bento-art">
                <div
                  data-pyzo-flow="atlas"
                  data-start="full"
                  data-play="restart"
                  data-trigger=".pz-card"
                ></div>
              </div>
              <div className="pz-card-head">
                <h3 className="pz-card-lock">
                  <span className="pz-card-mark pzlogo-atlas" aria-hidden="true"></span>
                  <span className="pz-card-name">Atlas</span>
                </h3>
                <p className="pz-card-role text-[11.5px] text-teal/85">Training coach</p>
              </div>
              <p className="pz-card-note">
                Converts static SOPs and compliance manuals into 24/7 interactive AI video modules and
                role-play simulations.
              </p>
            </Link>
            <Link className="card pz-card flex flex-col p-5 text-left rv" href="/pyzo/compass/">
              <div className="bento-art">
                <div
                  data-pyzo-flow="compass"
                  data-start="full"
                  data-play="restart"
                  data-trigger=".pz-card"
                ></div>
              </div>
              <div className="pz-card-head">
                <h3 className="pz-card-lock">
                  <span className="pz-card-mark pzlogo-compass" aria-hidden="true"></span>
                  <span className="pz-card-name">Compass</span>
                </h3>
                <p className="pz-card-role text-[11.5px] text-teal/85">Business analyst</p>
              </div>
              <p className="pz-card-note">
                Unlocks enterprise knowledge repositories to execute complex, multi-system queries and actions
                with full source traceability.
              </p>
            </Link>
            <Link className="card pz-card flex flex-col p-5 text-left rv" href="/pyzo/evio/">
              <div className="bento-art">
                <div
                  data-pyzo-flow="evio"
                  data-start="full"
                  data-play="restart"
                  data-trigger=".pz-card"
                ></div>
              </div>
              <div className="pz-card-head">
                <h3 className="pz-card-lock">
                  <span className="pz-card-mark pzlogo-evio" aria-hidden="true"></span>
                  <span className="pz-card-name">Evio</span>
                </h3>
                <p className="pz-card-role text-[11.5px] text-teal/85">Voice operator</p>
              </div>
              <p className="pz-card-note">
                Manages high-volume voice conversations across 15+ languages with automated intent routing and
                seamless human handoff.
              </p>
            </Link>
            <Link className="card pz-card flex flex-col p-5 text-left rv" href="/pyzo/forge/">
              <div className="bento-art">
                <div
                  data-pyzo-flow="forge"
                  data-start="full"
                  data-play="restart"
                  data-trigger=".pz-card"
                ></div>
              </div>
              <div className="pz-card-head">
                <h3 className="pz-card-lock">
                  <span className="pz-card-mark pzlogo-forge" aria-hidden="true"></span>
                  <span className="pz-card-name">Forge</span>
                </h3>
                <p className="pz-card-role text-[11.5px] text-teal/85">Workflow executor</p>
              </div>
              <p className="pz-card-note">
                Executes cross-application workflows across desktop, browser and legacy systems, with
                self-healing process execution.
              </p>
            </Link>
            <Link className="card pz-card flex flex-col p-5 text-left rv" href="/pyzo/loupe/">
              <div className="bento-art">
                <div
                  data-pyzo-flow="loupe"
                  data-start="full"
                  data-play="restart"
                  data-trigger=".pz-card"
                ></div>
              </div>
              <div className="pz-card-head">
                <h3 className="pz-card-lock">
                  <span className="pz-card-mark pzlogo-loupe" aria-hidden="true"></span>
                  <span className="pz-card-name">Loupe</span>
                </h3>
                <p className="pz-card-role text-[11.5px] text-teal/85">Application assistant</p>
              </div>
              <p className="pz-card-note">
                Guides complex form completion field by field, validating inputs in real time for applicants
                and compliance reviewers.
              </p>
            </Link>
            <Link className="card pz-card flex flex-col p-5 text-left rv" href="/pyzo/prism/">
              <div className="bento-art">
                <div
                  data-pyzo-flow="prism"
                  data-start="full"
                  data-play="restart"
                  data-trigger=".pz-card"
                ></div>
              </div>
              <div className="pz-card-head">
                <h3 className="pz-card-lock">
                  <span className="pz-card-mark pzlogo-prism" aria-hidden="true"></span>
                  <span className="pz-card-name">Prism</span>
                </h3>
                <p className="pz-card-role text-[11.5px] text-teal/85">Evaluation consultant</p>
              </div>
              <p className="pz-card-note">
                Evaluates documents and applications against defined rubrics, providing explainable scoring
                ready for audit scrutiny.
              </p>
            </Link>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink py-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">Engineering intelligence</span>
          <h2 className="h-sec rv" data-d="60">
            Enterprise AI engineered to survive scrutiny
          </h2>
          <div className="mt-[54px] grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <article className="card we-card group flex flex-col p-5 text-left rv" data-d="0">
              <div className="ct-top">
                <span className="ct-ic">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="6.6" y="6.6" width="6.8" height="6.8" rx="1.6" />
                    <path d="M10 2.4v4.2M10 13.4v4.2M2.4 10h4.2M13.4 10h4.2" />
                    <circle cx="10" cy="2.2" r="1.1" />
                    <circle cx="10" cy="17.8" r="1.1" />
                    <circle cx="2.2" cy="10" r="1.1" />
                    <circle cx="17.8" cy="10" r="1.1" />
                  </svg>
                </span>
                <h3 className="ct-t font-display text-[14.5px] font-medium">Agentic AI &amp; Automation</h3>
              </div>
              <p className="we-note">
                Autonomous agents engineered to execute multi-step enterprise workflows, connect with legacy
                databases and make decisions within strict, human-in-the-loop boundaries.
              </p>
              <Link className="iq-go we-go group" href="/engineering/agentic-ai/">
                Explore Agentic AI
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </article>
            <article className="card we-card group flex flex-col p-5 text-left rv" data-d="70">
              <div className="ct-top">
                <span className="ct-ic">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 2.3 16.6 4.9v5c0 3.9-2.6 6.7-6.6 7.8C6 16.6 3.4 13.8 3.4 9.9v-5Z" />
                    <path d="m7.4 9.9 1.9 2 3.5-3.9" />
                  </svg>
                </span>
                <h3 className="ct-t font-display text-[14.5px] font-medium">
                  AI Governance &amp; Evaluation
                </h3>
              </div>
              <p className="we-note">
                Governance engineered directly into the system architecture, providing full traceability,
                audit-ready logs, role-based controls and evaluation rubrics tailored for regulated
                environments.
              </p>
              <Link className="iq-go we-go group" href="/engineering/ai-governance/">
                Explore AI Governance
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </article>
            <article className="card we-card group flex flex-col p-5 text-left rv" data-d="140">
              <div className="ct-top">
                <span className="ct-ic">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <ellipse cx="10" cy="5" rx="6.4" ry="2.5" />
                    <path d="M3.6 5v10c0 1.4 2.9 2.5 6.4 2.5s6.4-1.1 6.4-2.5V5" />
                    <path d="M3.6 10c0 1.4 2.9 2.5 6.4 2.5s6.4-1.1 6.4-2.5" />
                  </svg>
                </span>
                <h3 className="ct-t font-display text-[14.5px] font-medium">
                  Data Architecture &amp; Infrastructure
                </h3>
              </div>
              <p className="we-note">
                Data foundations, vector storage and secure enterprise infrastructure engineered to feed
                context to AI agents while maintaining strict isolation and access controls.
              </p>
              <Link className="iq-go we-go group" href="/engineering/enterprise-ai/">
                Explore Data Architecture
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </article>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink py-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="glow-top" aria-hidden="true"></div>
          <span className="eyebrow rv">Operational accountability</span>
          <h2 className="h-sec rv" data-d="60">
            Enterprises trust us in production and beyond
          </h2>
          <div className="wy-list mt-[46px]">
            <div className="wy-row rv" data-d="0">
              <div className="wy-art">
                <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true">
                  <g className="ink" stroke="currentColor" fill="none" strokeWidth="1.4">
                    <rect x="120" y="100" width="180" height="38" rx="5" />
                    <circle cx="140" cy="119" r="4" />
                    <rect x="120" y="152" width="180" height="38" rx="5" />
                    <circle cx="140" cy="171" r="4" />
                    <rect x="120" y="204" width="180" height="38" rx="5" />
                    <circle cx="140" cy="223" r="4" />
                    <rect x="120" y="256" width="180" height="38" rx="5" />
                    <circle cx="140" cy="275" r="4" />
                    <rect x="120" y="308" width="180" height="38" rx="5" />
                    <circle cx="140" cy="327" r="4" />
                    <rect x="104" y="84" width="212" height="270" rx="10" strokeDasharray="6 5" />
                  </g>
                  <g className="acc" stroke="currentColor" fill="none" strokeWidth="2.2">
                    <rect x="120" y="204" width="180" height="38" rx="5" />
                    <circle cx="140" cy="223" r="4" fill="currentColor" />
                    <path d="M316 223h44" strokeDasharray="4 4" />
                  </g>
                </svg>
              </div>
              <div className="wy-txt">
                <div className="wy-head">
                  <h3>We operate it in production</h3>
                </div>
                <p>
                  The working system is the deliverable. We deploy directly into your cloud or on-premise
                  environment, manage operations daily, and remain fully accountable for performance long
                  after launch.
                </p>
              </div>
            </div>
            <div className="wy-row rv flip" data-d="70">
              <div className="wy-art">
                <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true">
                  <g className="ink" stroke="currentColor" fill="none" strokeWidth="1.4">
                    <rect x="86" y="96" width="64" height="56" rx="9" />
                    <rect x="170" y="96" width="64" height="56" rx="9" />
                    <rect x="254" y="96" width="64" height="56" rx="9" />
                    <rect x="86" y="182" width="64" height="56" rx="9" />
                    <rect x="170" y="182" width="64" height="56" rx="9" />
                    <rect x="254" y="182" width="64" height="56" rx="9" />
                  </g>
                  <g className="acc" stroke="currentColor" fill="none" strokeWidth="2">
                    <path d="M118 156V178" strokeLinecap="round" strokeDasharray="0.01 7" />
                    <path d="M202 156V178" strokeLinecap="round" strokeDasharray="0.01 7" />
                    <path d="M286 156V178" strokeLinecap="round" strokeDasharray="0.01 7" />
                    <path
                      d="M118 242V264Q118 274 128 274H192Q202 274 202 284V308"
                      strokeLinecap="round"
                      strokeDasharray="0.01 7"
                    />
                    <path
                      d="M286 242V264Q286 274 276 274H212Q202 274 202 284V308"
                      strokeLinecap="round"
                      strokeDasharray="0.01 7"
                    />
                    <path d="M202 242V308" strokeLinecap="round" strokeDasharray="0.01 7" />
                    <path d="M195 307L202 316L209 307Z" fill="currentColor" stroke="none" />
                    <rect
                      x="64"
                      y="322"
                      width="276"
                      height="42"
                      rx="10"
                      fill="currentColor"
                      fillOpacity=".07"
                    />
                    <rect x="64" y="322" width="276" height="42" rx="10" />
                  </g>
                </svg>
              </div>
              <div className="wy-txt">
                <div className="wy-head">
                  <h3>Agentic foundation</h3>
                </div>
                <p>
                  Six PYZO capabilities on one shared foundation of reusable layers. Every deployment hardens
                  the core, so each subsequent use case launches faster and performs better.
                </p>
              </div>
            </div>
            <div className="wy-row rv" data-d="140">
              <div className="wy-art">
                <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true">
                  <g className="ink" stroke="currentColor" fill="none" strokeWidth="1.4">
                    <rect x="92" y="80" width="196" height="272" rx="8" />
                    <path d="M116 110h84" opacity=".7" />
                    <path d="M116 132h132" opacity=".7" />
                    <path d="M116 154h132" opacity=".7" />
                    <path d="M116 176h84" opacity=".7" />
                    <path d="M116 198h132" opacity=".7" />
                    <path d="M116 220h132" opacity=".7" />
                    <path d="M116 242h84" opacity=".7" />
                    <path d="M116 264h132" opacity=".7" />
                    <path d="M116 286h132" opacity=".7" />
                    <path d="M116 308h84" opacity=".7" />
                    <path d="M116 330h132" opacity=".7" />
                  </g>
                  <g className="acc" stroke="currentColor" fill="none" strokeWidth="2.2">
                    <circle cx="252" cy="238" r="66" />
                    <path d="M300 286l52 52" />
                    <path d="M228 238h48M252 214v48" strokeWidth="1.4" opacity=".55" />
                  </g>
                </svg>
              </div>
              <div className="wy-txt">
                <div className="wy-head">
                  <h3>Engineered for scrutiny</h3>
                </div>
                <p>
                  Every agentic decision is logged with its full source inputs in real time. Any execution can
                  be reconstructed months later for a risk committee, an internal auditor, or a regulatory
                  body.
                </p>
              </div>
            </div>
            <div className="wy-row rv flip" data-d="210">
              <div className="wy-art">
                <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true">
                  <g className="ink" stroke="currentColor" fill="none" strokeWidth="1.4">
                    <path d="M80 340h280M80 90v250" />
                    <rect x="104" y="314" width="20" height="26" />
                    <rect x="144" y="309" width="20" height="31" />
                    <rect x="184" y="304" width="20" height="36" />
                    <rect x="224" y="299" width="20" height="41" />
                    <rect x="264" y="294" width="20" height="46" />
                    <rect x="304" y="289" width="20" height="51" />
                  </g>
                  <g className="acc" stroke="currentColor" fill="none" strokeWidth="2.2">
                    <path d="M92 302C150 292 200 268 248 226 292 188 320 150 344 118" strokeLinecap="round" />
                    <circle cx="344" cy="118" r="9" fill="currentColor" />
                    <path d="M344 118V340" strokeDasharray="4 5" strokeWidth="1.2" opacity=".5" />
                  </g>
                </svg>
              </div>
              <div className="wy-txt">
                <div className="wy-head">
                  <h3>Measurable outcomes</h3>
                </div>
                <p>
                  Target metrics are defined jointly before any code is written and measured strictly against
                  that baseline afterwards. A figure that moves only because the definition changed is not an
                  outcome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="sectors" className="relative overflow-hidden bg-ink py-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">Industry expertise</span>
          <h2 className="h-sec rv">Engineered for your industry constraints</h2>
          <div className="iq-grid mt-[46px]">
            <article className="iq-cell rv" data-d="0">
              <div className="iq-top">
                <span className="iq-ic">
                  <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 2.6 17 6H3Z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 8.4v6M8.3 8.4v6M11.7 8.4v6M15 8.4v6M3 16.4h14"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <h3 className="iq-name">Banking &amp; Financial Services</h3>
              </div>
              <p className="iq-note">
                Agentic workflows for underwriting, servicing, compliance, and grievance, engineered to be
                questioned.
              </p>
              <Link className="iq-go group" href="/industries/bfsi/">
                Explore BFSI
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </article>
            <article className="iq-cell rv" data-d="60">
              <div className="iq-top">
                <span className="iq-ic">
                  <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M2.5 10h3.2l1.6-4 2.6 8.6 2-4.6h5.6"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="iq-name">Healthcare &amp; Life Sciences</h3>
              </div>
              <p className="iq-note">
                Agentic AI systems for clinical, operational, and patient-facing workflows, architected around
                strict privacy and human oversight loops.
              </p>
              <Link className="iq-go group" href="/industries/healthcare/">
                Explore Healthcare
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </article>
            <article className="iq-cell rv" data-d="120">
              <div className="iq-top">
                <span className="iq-ic">
                  <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 3v14M4.6 5.4h10.8M6.2 5.4 3.6 11h5.2ZM13.8 5.4 11.2 11h5.2ZM6.5 17h7"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="iq-name">Public Sector &amp; Governance</h3>
              </div>
              <p className="iq-note">
                AI agents for citizen grievance, accreditation, and institutional workflows, auditable by
                design and engineered to survive public scrutiny.
              </p>
              <Link className="iq-go group" href="/industries/public-sector/">
                Explore Public Sector
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </article>
            <article className="iq-cell rv" data-d="180">
              <div className="iq-top">
                <span className="iq-ic">
                  <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4.6 6.4h10.8l-1 10.2H5.6ZM7.4 6.4V5a2.6 2.6 0 0 1 5.2 0v1.4"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="iq-name">Consumer &amp; Retail</h3>
              </div>
              <p className="iq-note">
                Gamified rewards, intelligent recommendation, and customer engagement engines, engineered to
                operate at peak enterprise scale.
              </p>
              <Link className="iq-go group" href="/industries/retail/">
                Explore Retail
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </article>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink py-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">From the operators</span>
          <h2 className="h-sec rv" data-d="60">
            Practitioner insights, outcomes, and evidence
          </h2>
          <div className="mt-[54px] grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <article className="card we-card group flex flex-col p-5 text-left rv" data-d="0">
              <div className="ct-top">
                <span className="ct-ic">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 3.2h8.4L16.4 7v9.8H4Z" />
                    <path d="M12.4 3.2V7h4" />
                    <path d="M6.8 10h6.4M6.8 13.2h4.6" />
                  </svg>
                </span>
                <h3 className="ct-t font-display text-[14.5px] font-medium">Blog</h3>
              </div>
              <p className="we-note">
                Practical engineering perspectives on enterprise AI and governance architectures, and what it
                takes to move models from pilot to production.
              </p>
              <Link className="iq-go we-go group" href="/blog/">
                Read the Blog
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </article>
            <article className="card we-card group flex flex-col p-5 text-left rv" data-d="70">
              <div className="ct-top">
                <span className="ct-ic">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2.8" y="5.6" width="14.4" height="10.6" rx="1.7" />
                    <path d="M7.4 5.6V4.2a1.4 1.4 0 0 1 1.4-1.4h2.4a1.4 1.4 0 0 1 1.4 1.4v1.4" />
                    <path d="M2.8 10.2h14.4M10 9.1v2.2" />
                  </svg>
                </span>
                <h3 className="ct-t font-display text-[14.5px] font-medium">Case Studies</h3>
              </div>
              <p className="we-note">
                Documented enterprise deployments detailing the exact operational scope, the governance
                frameworks, and the quantified outcomes achieved.
              </p>
              <Link className="iq-go we-go group" href="/case-studies/">
                Read all case studies
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </article>
            <article className="card we-card group flex flex-col p-5 text-left rv" data-d="140">
              <div className="ct-top">
                <span className="ct-ic">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3.4 16.6V8.8M7.8 16.6V4.6M12.2 16.6v-5.4M16.6 16.6V7" />
                  </svg>
                </span>
                <h3 className="ct-t font-display text-[14.5px] font-medium">Reports</h3>
              </div>
              <p className="we-note">
                Data-driven benchmarks and regulatory research evaluating AI reliability, auditability, and
                performance across high-stakes sectors.
              </p>
              <Link className="iq-go we-go group" href="/reports/">
                Read all Reports
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </article>
          </div>
        </div>
      </section>
      <section data-sec="cta" className="bg-ink" id="cta">
        <div className="cta-full">
          <div
            className="dark-band cta-band relative isolate overflow-hidden"
            style={{ background: "linear-gradient(180deg,#01161A 0%,#020C10 55%,#000508 100%)" }}
          >
            <div className="cta-wash" aria-hidden="true"></div>
            <div className="relative mx-auto grid w-full max-w-shell items-start gap-10 px-6 py-[86px] lg:grid-cols-[1fr_auto] lg:gap-16 lg:px-8">
              <div>
                <h2 className="h-cta max-w-[26ch] lg:max-w-none">
                  <span className="text-teal">AI-native operators</span> accountable for
                  <br className="hidden sm:block" /> accelerated outcomes that{" "}
                  <span className="text-teal">survive scrutiny</span>
                </h2>
              </div>
              <div className="flex flex-col items-start lg:pt-2">
                <Link className="btn btn-light group" href="/contact/">
                  Define an Outcome
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.8 8h10.4M9.4 4.2 13.2 8l-3.8 3.8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
