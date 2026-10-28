import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { PyzoPanels } from "@/components/PyzoPanels";
export const metadata = pageMetadata({
  title: "PYZO - Six capabilities. One hardened foundation.",
  description: "",
  path: "/pyzo/",
});
export default function PyzoPage() {
  return (
    <main className="page" id="page-pyzo">
      <section className="hero-tall relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
        </div>
        <div className="relative mx-auto flex w-full max-w-shell flex-1 flex-col px-6 lg:px-8">
          <div className="hero-mid flex flex-1 flex-col items-center justify-center text-center">
            <span className="eyebrow rv">Agentic OS for regulated enterprises</span>
            <h1 className="h-hero hh-h1 hh-wide mt-7 rv" data-d="80">
              Transform your operations
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
                AI systems for{" "}
                <span className="hh-rot">
                  <span className="hh-opt is-on">training</span>
                  <span className="hh-opt" aria-hidden="true">
                    analysis
                  </span>
                  <span className="hh-opt" aria-hidden="true">
                    voice
                  </span>
                  <span className="hh-opt" aria-hidden="true">
                    automation
                  </span>
                  <span className="hh-opt" aria-hidden="true">
                    applications
                  </span>
                  <span className="hh-opt" aria-hidden="true">
                    evaluation
                  </span>
                </span>
              </span>
            </h1>
            <p className="lede hero-lede mt-5 max-w-[760px] rv" data-d="160">
              Our enterprise suite, PYZO, has six agentic capabilities, engineered on a shared foundation of
              reusable building blocks, which lets us move from a defined problem to a governed,
              production-grade system without rebuilding the groundwork each time, transforming business
              functions with an AI-first foundation.
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
              <a className="btn btn-ghost" href="#pyzo-proof">
                See the proof
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
      <section className="relative overflow-hidden bg-ink pb-[56px]">
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
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink py-[96px]">
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
      <section className="relative overflow-hidden bg-ink pt-[96px] pb-[24px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="glow-top" aria-hidden="true"></div>
          <span className="eyebrow rv">The shared foundation</span>
          <h2 className="h-sec rv" data-d="60">
            Reusable layers, hardened with every deployment
          </h2>
          <div className="fdx mt-[46px]">
            <div className="fdx-grp rv" data-d="0">
              <div className="fdx-head">
                <span className="fdx-ic">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <ellipse cx="10" cy="5" rx="6.2" ry="2.3" stroke="currentColor" strokeWidth="1.2" />
                    <path
                      d="M3.8 5v10c0 1.3 2.8 2.3 6.2 2.3s6.2-1 6.2-2.3V5M3.8 10c0 1.3 2.8 2.3 6.2 2.3s6.2-1 6.2-2.3"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <h3 className="fdx-name">Understanding your information</h3>
                <p className="fdx-range">Layers 1 to 4</p>
              </div>
              <div className="fdx-items">
                <div className="fdx-item">
                  <span className="fdx-n">1</span>
                  <div>
                    <p className="fdx-t">Data &amp; Ingestion</p>
                    <p className="fdx-sub">
                      Ingestion service · Data enrichment · Encryption &amp; decryption
                    </p>
                  </div>
                </div>
                <div className="fdx-item">
                  <span className="fdx-n">2</span>
                  <div>
                    <p className="fdx-t">Document Processing</p>
                    <p className="fdx-sub">Multi-format parser · OCR engine · Structured extractor</p>
                  </div>
                </div>
                <div className="fdx-item">
                  <span className="fdx-n">3</span>
                  <div>
                    <p className="fdx-t">Knowledge &amp; Retrieval</p>
                    <p className="fdx-sub">Query processing · Knowledge base · Retrieval engine</p>
                  </div>
                </div>
                <div className="fdx-item">
                  <span className="fdx-n">4</span>
                  <div>
                    <p className="fdx-t">Memory &amp; Context</p>
                    <p className="fdx-sub">Conversation history · Session memory · Long-term memory</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fdx-grp rv" data-d="60">
              <div className="fdx-head">
                <span className="fdx-ic">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 2.4c.5 3.8 2.8 6.1 7.4 7.6-4.6 1.3-6.9 3.6-7.4 7.6-.5-4-2.8-6.3-7.4-7.6 4.6-1.5 6.9-3.8 7.4-7.6Z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="fdx-name">Thinking and acting</h3>
                <p className="fdx-range">Layers 5 to 7</p>
              </div>
              <div className="fdx-items">
                <div className="fdx-item">
                  <span className="fdx-n">5</span>
                  <div>
                    <p className="fdx-t">Model Management</p>
                    <p className="fdx-sub">
                      Training &amp; fine-tuning · Registry &amp; versioning · Model hosting
                    </p>
                  </div>
                </div>
                <div className="fdx-item">
                  <span className="fdx-n">6</span>
                  <div>
                    <p className="fdx-t">Workflow Orchestration</p>
                    <p className="fdx-sub">Agent orchestrator · Task routing · Context &amp; state</p>
                  </div>
                </div>
                <div className="fdx-item">
                  <span className="fdx-n">7</span>
                  <div>
                    <p className="fdx-t">Human Oversight &amp; Autonomy</p>
                    <p className="fdx-sub">Approval steps · Escalation policy · Autonomy levels</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fdx-grp rv" data-d="120">
              <div className="fdx-head">
                <span className="fdx-ic">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.2" />
                    <path
                      d="M6.1 6.1a5.5 5.5 0 0 0 0 7.8M13.9 13.9a5.5 5.5 0 0 0 0-7.8M3.4 3.4a9.3 9.3 0 0 0 0 13.2M16.6 16.6a9.3 9.3 0 0 0 0-13.2"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <h3 className="fdx-name">Reaching people</h3>
                <p className="fdx-range">Layers 8 to 10</p>
              </div>
              <div className="fdx-items">
                <div className="fdx-item">
                  <span className="fdx-n">8</span>
                  <div>
                    <p className="fdx-t">Network &amp; Streaming</p>
                    <p className="fdx-sub">API gateway · Event streaming · WebRTC real-time</p>
                  </div>
                </div>
                <div className="fdx-item">
                  <span className="fdx-n">9</span>
                  <div>
                    <p className="fdx-t">Telephony</p>
                    <p className="fdx-sub">
                      SIP trunking · Call session management · Inbound &amp; outbound dialler
                    </p>
                  </div>
                </div>
                <div className="fdx-item">
                  <span className="fdx-n">10</span>
                  <div>
                    <p className="fdx-t">Content &amp; Media</p>
                    <p className="fdx-sub">Avatar rendering · Authoring pipeline · Speech processing</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fdx-grp rv" data-d="180">
              <div className="fdx-head">
                <span className="fdx-ic">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 2.5 16.3 5v4.6c0 3.8-2.7 6.7-6.3 7.9-3.6-1.2-6.3-4.1-6.3-7.9V5Z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.4 9.9 9.2 11.7l3.4-3.6"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="fdx-name">Trust and control</h3>
                <p className="fdx-range">Layers 11 to 16</p>
              </div>
              <div className="fdx-items">
                <div className="fdx-item">
                  <span className="fdx-n">11</span>
                  <div>
                    <p className="fdx-t">Safety &amp; Guardrails</p>
                    <p className="fdx-sub">PII filtering · Toxicity detection · Hallucination checks</p>
                  </div>
                </div>
                <div className="fdx-item">
                  <span className="fdx-n">12</span>
                  <div>
                    <p className="fdx-t">Operations &amp; Governance</p>
                    <p className="fdx-sub">Deployment pipelines · Release registry · Evaluation framework</p>
                  </div>
                </div>
                <div className="fdx-item">
                  <span className="fdx-n">13</span>
                  <div>
                    <p className="fdx-t">Identity &amp; Permissions</p>
                    <p className="fdx-sub">Auth &amp; RBAC · Permission trimming · Credential vault</p>
                  </div>
                </div>
                <div className="fdx-item">
                  <span className="fdx-n">14</span>
                  <div>
                    <p className="fdx-t">Evidence &amp; Audit Trail</p>
                    <p className="fdx-sub">Append-only log · Evidence packs · Trace &amp; span</p>
                  </div>
                </div>
                <div className="fdx-item">
                  <span className="fdx-n">15</span>
                  <div>
                    <p className="fdx-t">Consent &amp; Rights</p>
                    <p className="fdx-sub">Consent capture · Data residency · Retention &amp; deletion</p>
                  </div>
                </div>
                <div className="fdx-item">
                  <span className="fdx-n">16</span>
                  <div>
                    <p className="fdx-t">Enterprise-grade Security</p>
                    <p className="fdx-sub">PII masking · AES-256 · Isolated hosting · Egress control</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pyzo-proof" className="relative overflow-hidden bg-ink pt-[96px] pb-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="cs-head grid gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
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
          <PyzoPanels />
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
                  <span className="text-teal">AI</span> for enterprises with
                  <br className="hidden sm:block" /> every{" "}
                  <span className="text-teal">decision traceable</span> to its source
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
