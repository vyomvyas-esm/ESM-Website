import type { Metadata } from "next";
import Link from "next/link";
import { Waveform } from "@/components/Waveform";
export const metadata: Metadata = {
  title: "Es Magico - The Operator for AI-native Transformation",
  description:
    "Es Magico is the Operator for AI-native Transformation. We deploy AI into production inside regulated enterprises and stand behind what it produces to auditors, regulators and boards.",
};
export default function HomePage() {
  return (
    <main className="page" id="page-home">
      <section className="home-hero relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
        </div>
        <div className="relative mx-auto flex w-full max-w-shell flex-1 flex-col px-6 lg:px-8">
          <div className="hero-mid flex flex-1 flex-col items-center justify-center text-center">
            <span className="eyebrow rv">Operator for AI-native Transformation</span>
            <h1 className="h-hero mt-7 max-w-[940px] rv" data-d="80">
              We engineer AI ambition
              <br className="hidden md:block" /> into enterprise value.
            </h1>
            <p className="lede hero-lede mt-5 max-w-[640px] rv" data-d="160">
              We deploy enterprise AI into your environment, take responsibility for what it does in
              production, and answer for the numbers it moves.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 rv" data-d="240">
              <Link className="btn btn-light group" href="/contact">
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
                See the Proof
              </a>
            </div>
          </div>
          <p className="hero-caption eyebrow mb-3 text-center rv" data-d="320">
            Operating inside leading enterprises
          </p>
        </div>
        <div
          className="brand-band relative overflow-hidden py-[18px] rv"
          data-d="360"
          style={{
            maskImage: "linear-gradient(90deg,transparent 0,#000 7%,#000 93%,transparent 100%)",
            WebkitMaskImage: "linear-gradient(90deg,transparent 0,#000 7%,#000 93%,transparent 100%)",
          }}
        >
          <div className="marquee">
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-rbi" role="img" aria-label="Reserve Bank Innovation Hub"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-indusind" role="img" aria-label="IndusInd Bank"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-hdfc" role="img" aria-label="HDFC Capital"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-tatadigital" role="img" aria-label="Tata Digital"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span
                className="clogo logow-tataconsumer"
                role="img"
                aria-label="Tata Consumer Products"
              ></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-cipla" role="img" aria-label="Cipla"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-koita" role="img" aria-label="Koita Foundation"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-isb" role="img" aria-label="Indian School of Business"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-indiamart" role="img" aria-label="IndiaMART"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-samagra" role="img" aria-label="Samagra"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-msrdc" role="img" aria-label="MSRDC"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-abfrl" role="img" aria-label="ABFRL"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-bookmyshow" role="img" aria-label="BookMyShow"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-plum" role="img" aria-label="Plum"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-epic" role="img" aria-label="Epic Global"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-rbi" role="img" aria-label="Reserve Bank Innovation Hub"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-indusind" role="img" aria-label="IndusInd Bank"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-hdfc" role="img" aria-label="HDFC Capital"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-tatadigital" role="img" aria-label="Tata Digital"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span
                className="clogo logow-tataconsumer"
                role="img"
                aria-label="Tata Consumer Products"
              ></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-cipla" role="img" aria-label="Cipla"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-koita" role="img" aria-label="Koita Foundation"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-isb" role="img" aria-label="Indian School of Business"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-indiamart" role="img" aria-label="IndiaMART"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-samagra" role="img" aria-label="Samagra"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-msrdc" role="img" aria-label="MSRDC"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-abfrl" role="img" aria-label="ABFRL"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-bookmyshow" role="img" aria-label="BookMyShow"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-plum" role="img" aria-label="Plum"></span>
            </span>
            <span className="bm-item flex items-center px-[clamp(1.2rem,2.8vw,2.6rem)]">
              <span className="clogo logow-epic" role="img" aria-label="Epic Global"></span>
            </span>
          </div>
        </div>
      </section>
      <section id="proof" className="relative overflow-hidden bg-ink pb-[104px]">
        <div className="proof-photo" aria-hidden="true"></div>
        <div className="proof-scrim" aria-hidden="true"></div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <p className="cert-strip eyebrow pt-[22px] text-center">
            ISO/IEC 27001:2022 · SOC 2 Type II · PII masking · AES-256 encryption · isolated hosting ·
            role-based access
          </p>
          <div className="cs-head mt-[96px] grid gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
            <div className="rv">
              <span className="eyebrow rv">Proof in production</span>
              <h2 className="h-sec h-sec-sm mt-5 whitespace-nowrap">
                Outcomes you <span className="text-white/40">can measure.</span>
              </h2>
            </div>
            <div className="rv" data-d="120">
              <Link className="btn btn-light group" href="/case-studies">
                See all case studies
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
                <span className="clogo ca-logo logow-rbi"></span>
                <span className="ca-head">Grievance redressal that survives its own audit.</span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="ca-figs">
                    <div className="ca-fig">
                      <div className="n tally">~80%</div>
                      <div className="l">lower grievance turnaround</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">~2 min</div>
                      <div className="l">to register a grievance</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">12+</div>
                      <div className="l">Indic languages, voice or text</div>
                    </div>
                  </div>
                  <p className="ca-copy">
                    A multilingual, voice-first grievance protocol any regulated bank can adopt.
                  </p>
                  <Link className="ca-link group" href="/case-studies/rbi">
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
                    See the case study
                  </Link>
                </div>
                <div className="ca-shot">
                  <img src="/img/c10ede5058.webp" alt="" loading="lazy" decoding="async" />
                </div>
              </div>
            </details>
            <details className="ca-row rv" data-d="50">
              <summary>
                <span className="ca-ic">
                  <span className="ca-x"></span>
                </span>
                <span className="clogo ca-logo logow-indusind"></span>
                <span className="ca-head">Trainer-independent learning for 50,000+ employees.</span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="ca-figs">
                    <div className="ca-fig">
                      <div className="n tally">50,000+</div>
                      <div className="l">employees trained</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">150+</div>
                      <div className="l">AI training videos</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">3,000+</div>
                      <div className="l">man-hours saved</div>
                    </div>
                  </div>
                  <p className="ca-copy">
                    Policy documents turned into 150+ AI video modules, with no trainer dependency.
                  </p>
                  <Link className="ca-link group" href="/case-studies/indusind">
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
                    See the case study
                  </Link>
                </div>
                <div className="ca-shot">
                  <img src="/img/68766e3b91.webp" alt="" loading="lazy" decoding="async" />
                </div>
              </div>
            </details>
            <details className="ca-row rv" data-d="100">
              <summary>
                <span className="ca-ic">
                  <span className="ca-x"></span>
                </span>
                <span className="clogo ca-logo logow-tataneu2"></span>
                <span className="ca-head">A gamified rewards engine that keeps a super-app engaged.</span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="ca-figs">
                    <div className="ca-fig">
                      <div className="n tally">500,000+</div>
                      <div className="l">users engaged</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">700,000+</div>
                      <div className="l">rewards issued</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">200,000+</div>
                      <div className="l">rewards redeemed</div>
                    </div>
                  </div>
                  <p className="ca-copy">
                    A gamified rewards engine with playable mechanics across a multi-vertical app.
                  </p>
                  <Link className="ca-link group" href="/case-studies/tataneu">
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
                    See the case study
                  </Link>
                </div>
                <div className="ca-shot">
                  <img src="/img/116e0c0bba.webp" alt="" loading="lazy" decoding="async" />
                </div>
              </div>
            </details>
            <details className="ca-row rv" data-d="150">
              <summary>
                <span className="ca-ic">
                  <span className="ca-x"></span>
                </span>
                <span className="clogo ca-logo logow-isb"></span>
                <span className="ca-head">
                  Thousands of applications, screened consistently and without bias.
                </span>
              </summary>
              <div className="ca-body">
                <div className="ca-left">
                  <div className="ca-figs">
                    <div className="ca-fig">
                      <div className="n tally">~97%</div>
                      <div className="l">concordance with faculty</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">~80%</div>
                      <div className="l">less evaluation time</div>
                    </div>
                    <div className="ca-fig">
                      <div className="n tally">~5,000</div>
                      <div className="l">man-hours saved a year</div>
                    </div>
                  </div>
                  <p className="ca-copy">
                    A candidate screen that stays consistent, explainable and blind to fluency bias.
                  </p>
                  <Link className="ca-link group" href="/case-studies/isb">
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
                    See the case study
                  </Link>
                </div>
                <div className="ca-shot">
                  <img src="/img/1b4eaeebf1.webp" alt="" loading="lazy" decoding="async" />
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink pt-[86px] pb-[104px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">Our Enterprise Suite</span>
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
            <p className="pz-lede h-sec h-sec-sm rv" data-d="80">
              Agentic AI that survives scrutiny.
            </p>
            <div className="pz-cta rv" data-d="120">
              <Link className="btn btn-light group" href="/pyzo">
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
          <div className="mt-[62px] grid gap-4 lg:grid-cols-3">
            <div className="flex flex-col gap-4">
              <Link className="card card-lit flex h-[336px] flex-col p-5 text-left rv" href="/pyzo/atlas">
                <div className="bento-art">
                  <div className="mock mb-4 overflow-hidden">
                    <div className="art-film on-dark relative h-[86px]">
                      <span className="absolute inset-0 grid place-items-center">
                        <span className="grid h-8 w-8 place-items-center rounded-full bg-white/90 text-ink">
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor">
                            <path d="M3.6 2.2 9.4 6l-5.8 3.8z" />
                          </svg>
                        </span>
                      </span>{" "}
                      <span className="absolute left-2 top-2 rounded bg-black/45 px-1.5 py-0.5 text-[7px] tracking-[.12em] text-white/70">
                        SOP 04 · AI TRAINER
                      </span>{" "}
                      <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
                        <span className="block h-full w-[62%] bg-teal"></span>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-2">
                      <span className="lang">EN</span>
                      <span className="lang">HI</span>
                      <span className="lang">TA</span>{" "}
                      <span className="ml-auto text-[7.5px] text-white/35">Assessment 8/10</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-[15px] font-medium">
                  <span className="pzlogo pz-card-logo pzlogo-atlas" role="img" aria-label="Atlas"></span>
                </h3>
                <p className="mt-[3px] text-[11.5px] text-teal/85">Training Coach</p>
                <p className="mt-3 text-[11.5px] leading-[1.65] text-white/45">
                  Turns SOPs into on-demand multilingual training, delivered by an AI avatar of your best
                  trainer.
                </p>
              </Link>{" "}
              <Link className="card flex h-[300px] flex-col p-5 text-left rv" href="/pyzo/forge">
                <div className="bento-art">
                  <div className="mock mb-5 p-3">
                    <div className="flex items-center">
                      <span className="node">CRM</span>
                      <span className="hop"></span> <span className="node">ERP</span>
                      <span className="hop"></span> <span className="node">Portal</span>
                    </div>
                    <div className="mt-3 space-y-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="tick ok"></span>
                        <span className="text-[7.5px] text-white/45">Extract claim, 214 rows</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="tick warn"></span>
                        <span className="text-[7.5px] text-white/45">Field moved, selector repaired</span>
                        <span className="ml-auto text-[7px] text-teal">self-healed</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="tick ok"></span>
                        <span className="text-[7.5px] text-white/45">Posted to queue</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-[15px] font-medium">
                  <span className="pzlogo pz-card-logo pzlogo-forge" role="img" aria-label="Forge"></span>
                </h3>
                <p className="mt-[3px] text-[11.5px] text-teal/85">Workflow Executor</p>
                <p className="mt-3 text-[11.5px] leading-[1.65] text-white/45">
                  Automates workflows across desktop and browser applications, and repairs its own broken
                  steps.
                </p>
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link className="card flex h-[300px] flex-col p-5 text-left rv" href="/pyzo/evio">
                <div className="bento-art">
                  <div className="art-media relative mb-5 h-[118px] overflow-hidden rounded-[8px]">
                    <Waveform
                      n={40}
                      className="absolute inset-0 flex items-center justify-center gap-[3px]"
                    />
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="grid h-10 w-10 place-items-center rounded-full art-dot">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6.6 3.5c.5-.3 1.2-.2 1.6.3l2 2.6c.4.5.3 1.2-.2 1.6l-1.3 1c-.3.2-.4.6-.2.9a12 12 0 0 0 4.6 4.6c.3.2.7.1.9-.2l1-1.3c.4-.5 1.1-.6 1.6-.2l2.6 2c.5.4.6 1.1.3 1.6l-1.2 1.9c-.5.8-1.5 1.2-2.4 1A16.8 16.8 0 0 1 4.4 7.2c-.2-.9.2-1.9 1-2.4Z" />
                        </svg>
                      </span>
                    </div>
                    <span className="art-pill absolute left-2 top-2">LIVE · 15 LANGUAGES</span>
                    <span className="art-pill art-pill-accent absolute bottom-2 right-2">
                      Transfer to human
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-[15px] font-medium">
                  <span className="pzlogo pz-card-logo pzlogo-evio" role="img" aria-label="Evio"></span>
                </h3>
                <p className="mt-[3px] text-[11.5px] text-teal/85">Call Operator</p>
                <p className="mt-3 text-[11.5px] leading-[1.65] text-white/45">
                  Handles inbound and outbound calls in 15+ languages, and transfers to a human when needed.
                </p>
              </Link>{" "}
              <Link className="card flex h-[336px] flex-col p-5 text-left rv" href="/pyzo/loupe">
                <div className="bento-art">
                  <div className="mock mb-5 p-3">
                    <div className="space-y-1.5">
                      <div className="frow">
                        <span className="flab">PAN</span>
                        <span className="fval">ABCDE1234F</span>
                        <span className="tick ok"></span>
                      </div>
                      <div className="frow">
                        <span className="flab">Turnover</span>
                        <span className="fval">₹4.2 Cr</span>
                        <span className="tick ok"></span>
                      </div>
                      <div className="frow is-flagged">
                        <span className="flab">GST cert</span>
                        <span className="fval">expired 03/24</span>
                        <span className="tick warn"></span>
                      </div>
                    </div>
                    <div className="mt-2.5 flex items-center gap-1.5 border-t border-white/10 pt-2">
                      <span className="text-[7px] text-white/35">12 of 14 fields complete</span>{" "}
                      <span className="ml-auto text-[7px] text-teal">2 to fix before submit</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-[15px] font-medium">
                  <span className="pzlogo pz-card-logo pzlogo-loupe" role="img" aria-label="Loupe"></span>
                </h3>
                <p className="mt-[3px] text-[11.5px] text-teal/85">Application Assistant</p>
                <p className="mt-3 text-[11.5px] leading-[1.65] text-white/45">
                  Guides and validates complex applications field by field, for applicant and reviewer alike.
                </p>
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link className="card card-lit flex h-[354px] flex-col p-5 text-left rv" href="/pyzo/compass">
                <div className="bento-art">
                  <div className="mock mb-4 p-2.5">
                    <div className="flex items-center gap-1.5 rounded-[6px] border border-white/10 bg-white/[.04] px-2 py-1.5">
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="shrink-0 text-teal"
                      >
                        <circle cx="7" cy="7" r="4.6" stroke="currentColor" strokeWidth="1.4" />
                        <path
                          d="m10.6 10.6 3 3"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>{" "}
                      <span className="text-[7.5px] text-white/60">
                        Which branches missed SLA last quarter?
                      </span>
                    </div>
                    <div className="mt-3 flex items-end gap-1.5">
                      <span className="cbar" style={{ height: "14px" }}></span>
                      <span className="cbar" style={{ height: "22px" }}></span>
                      <span className="cbar" style={{ height: "11px" }}></span>
                      <span className="cbar" style={{ height: "27px" }}></span>
                      <span className="cbar" style={{ height: "18px" }}></span>
                      <span className="cbar" style={{ height: "31px" }}></span>
                    </div>
                    <div className="mt-3 flex items-center gap-1.5">
                      <span className="src">Policy v4.2</span>
                      <span className="src">Ops ledger</span>{" "}
                      <span className="ml-auto text-[7px] text-teal/80">3 sources cited</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-[15px] font-medium">
                  <span className="pzlogo pz-card-logo pzlogo-compass" role="img" aria-label="Compass"></span>
                </h3>
                <p className="mt-[3px] text-[11.5px] text-teal/85">Business Analyst</p>
                <p className="mt-3 text-[11.5px] leading-[1.65] text-white/45">
                  Retrieves institutional knowledge and leverages it to execute customisable actions across
                  functions.
                </p>
              </Link>{" "}
              <Link className="card flex h-[282px] flex-col p-5 text-left rv" href="/pyzo/prism">
                <div className="bento-art">
                  <div className="mock mb-5 p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] tracking-[.12em] text-white/40">RUBRIC v3</span>{" "}
                      <span className="rounded-full border border-teal/40 bg-teal/10 px-2 py-0.5 text-[8px] text-teal">
                        Score 79
                      </span>
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-[64px] shrink-0 text-[7.5px] text-white/45">Evidence quality</span>
                        <span className="bar flex-1">
                          <span
                            className="block h-full rounded-[2px] bg-teal/70"
                            style={{ width: "82%" }}
                          ></span>
                        </span>
                        <span className="w-[16px] text-right text-[7.5px] text-white/60">82</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-[64px] shrink-0 text-[7.5px] text-white/45">Policy fit</span>
                        <span className="bar flex-1">
                          <span
                            className="block h-full rounded-[2px] bg-teal/70"
                            style={{ width: "64%" }}
                          ></span>
                        </span>
                        <span className="w-[16px] text-right text-[7.5px] text-white/60">64</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-[64px] shrink-0 text-[7.5px] text-white/45">Risk flags</span>
                        <span className="bar flex-1">
                          <span
                            className="block h-full rounded-[2px] bg-teal/70"
                            style={{ width: "91%" }}
                          ></span>
                        </span>
                        <span className="w-[16px] text-right text-[7.5px] text-white/60">91</span>
                      </div>
                    </div>
                    <p className="mt-3 text-[7px] leading-[1.5] text-white/30">
                      Scored against the rubric you defined, with the reasoning kept.
                    </p>
                  </div>
                </div>
                <h3 className="font-display text-[15px] font-medium">
                  <span className="pzlogo pz-card-logo pzlogo-prism" role="img" aria-label="Prism"></span>
                </h3>
                <p className="mt-[3px] text-[11.5px] text-teal/85">Evaluation Consultant</p>
                <p className="mt-3 text-[11.5px] leading-[1.65] text-white/45">
                  Scores any file against a rubric you define, with judgement you can defend afterwards.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink py-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">What we engineer</span>
          <h2 className="h-sec rv" data-d="60">
            Engineering AI that fits the enterprise.
          </h2>
          <p className="lede mt-5 max-w-[620px] rv" data-d="100">
            We engineer custom AI systems around your workflows, data and controls, deploy them inside your
            environment, and answer for what they produce.
          </p>
          <div className="mt-[54px] grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link
              className="card group flex flex-col p-4 text-left rv"
              data-d="0"
              href="/services/agentic-ai"
            >
              <div className="relative h-[168px] w-full overflow-hidden rounded-[10px]">
                <div className="pimg pimg-agentic"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#000306]/60 via-transparent to-[#000306]/20"></div>
              </div>
              <h3 className="mt-5 font-display text-[14.5px] font-medium">Agentic AI Systems</h3>
              <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                AI agents that execute multi-step workflows, use enterprise tools and data, and make decisions
                within defined boundaries, bringing people in when human judgement is needed.
              </p>
              <span className="mt-5 inline-flex text-teal transition-transform duration-300 group-hover:translate-x-1">
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
            <Link
              className="card group flex flex-col p-4 text-left rv"
              data-d="70"
              href="/services/ai-governance"
            >
              <div className="relative h-[168px] w-full overflow-hidden rounded-[10px]">
                <div className="pimg pimg-governance"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#000306]/60 via-transparent to-[#000306]/20"></div>
              </div>
              <h3 className="mt-5 font-display text-[14.5px] font-medium">AI Governance</h3>
              <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                Governance engineered into the system from the start with traceability, permissions, human
                oversight and controls designed for regulated and high-stakes environments.
              </p>
              <span className="mt-5 inline-flex text-teal transition-transform duration-300 group-hover:translate-x-1">
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
            <Link
              className="card group flex flex-col p-4 text-left rv"
              data-d="140"
              href="/services/enterprise-ai"
            >
              <div className="relative h-[168px] w-full overflow-hidden rounded-[10px]">
                <div className="pimg pimg-enterprise"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#000306]/60 via-transparent to-[#000306]/20"></div>
              </div>
              <h3 className="mt-5 font-display text-[14.5px] font-medium">Enterprise AI</h3>
              <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                AI foundations engineered around your existing enterprise stack, connecting models, data and
                legacy systems into secure, scalable systems your organisation can operate and extend.
              </p>
              <span className="mt-5 inline-flex text-teal transition-transform duration-300 group-hover:translate-x-1">
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
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink py-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="glow-top" aria-hidden="true"></div>
          <span className="eyebrow rv">More than AI</span>
          <h2 className="h-sec rv" data-d="60">
            Why enterprises trust us in production.
          </h2>
          <p className="lede mt-5 max-w-[660px] rv" data-d="100">
            We engineer and operate AI systems inside real enterprise environments, engineered for
            reliability, governance, and measurable outcomes.
          </p>
          <div className="wy-list mt-[46px]">
            <div className="wy-row rv" data-d="0">
              <div className="wy-art">
                <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true">
                  <g className="ink" stroke="currentColor" fill="none" strokeWidth="1.4">
                    <path d="M60 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M100 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M140 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M180 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M220 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M260 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M300 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M340 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M380 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 60H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 100H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 140H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 180H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 220H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 260H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 300H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 340H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 380H380" strokeWidth=".5" opacity=".18" />
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
                  <span className="wy-n">01</span>
                  <h3>We operate it in production</h3>
                </div>
                <p>
                  The working system is the deliverable. We deploy it into your estate, operate it there, and
                  stay accountable for its behaviour after the engagement ends.
                </p>
              </div>
            </div>
            <div className="wy-row rv flip" data-d="70">
              <div className="wy-art">
                <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true">
                  <g className="ink" stroke="currentColor" fill="none" strokeWidth="1.4">
                    <path d="M60 40V380" strokeWidth=".5" opacity=".16" />
                    <path d="M100 40V380" strokeWidth=".5" opacity=".16" />
                    <path d="M140 40V380" strokeWidth=".5" opacity=".16" />
                    <path d="M180 40V380" strokeWidth=".5" opacity=".16" />
                    <path d="M220 40V380" strokeWidth=".5" opacity=".16" />
                    <path d="M260 40V380" strokeWidth=".5" opacity=".16" />
                    <path d="M300 40V380" strokeWidth=".5" opacity=".16" />
                    <path d="M340 40V380" strokeWidth=".5" opacity=".16" />
                    <path d="M380 40V380" strokeWidth=".5" opacity=".16" />
                    <path d="M40 60H380" strokeWidth=".5" opacity=".16" />
                    <path d="M40 100H380" strokeWidth=".5" opacity=".16" />
                    <path d="M40 140H380" strokeWidth=".5" opacity=".16" />
                    <path d="M40 180H380" strokeWidth=".5" opacity=".16" />
                    <path d="M40 220H380" strokeWidth=".5" opacity=".16" />
                    <path d="M40 260H380" strokeWidth=".5" opacity=".16" />
                    <path d="M40 300H380" strokeWidth=".5" opacity=".16" />
                    <path d="M40 340H380" strokeWidth=".5" opacity=".16" />
                    <path d="M40 380H380" strokeWidth=".5" opacity=".16" />
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
                  <span className="wy-n">02</span>
                  <h3>Agentic foundation</h3>
                </div>
                <p>
                  Six capabilities on one shared foundation of reusable blocks. Every deployment hardens the
                  layer beneath, so the next use case starts further along than the last one did.
                </p>
              </div>
            </div>
            <div className="wy-row rv" data-d="140">
              <div className="wy-art">
                <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true">
                  <g className="ink" stroke="currentColor" fill="none" strokeWidth="1.4">
                    <path d="M60 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M100 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M140 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M180 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M220 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M260 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M300 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M340 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M380 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 60H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 100H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 140H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 180H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 220H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 260H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 300H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 340H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 380H380" strokeWidth=".5" opacity=".18" />
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
                  <span className="wy-n">03</span>
                  <h3>Engineered for scrutiny</h3>
                </div>
                <p>
                  Every decision is logged with its inputs at the moment it happens, so a specific case can be
                  reconstructed months later, for a risk committee, an auditor or a regulator.
                </p>
              </div>
            </div>
            <div className="wy-row rv flip" data-d="210">
              <div className="wy-art">
                <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true">
                  <g className="ink" stroke="currentColor" fill="none" strokeWidth="1.4">
                    <path d="M60 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M100 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M140 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M180 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M220 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M260 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M300 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M340 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M380 40V380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 60H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 100H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 140H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 180H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 220H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 260H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 300H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 340H380" strokeWidth=".5" opacity=".18" />
                    <path d="M40 380H380" strokeWidth=".5" opacity=".18" />
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
                  <span className="wy-n">04</span>
                  <h3>Measurable outcomes</h3>
                </div>
                <p>
                  The measure is set with you before any code is written, and reported the same way
                  afterwards. A figure that moves only because the definition changed is not an outcome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="sectors" className="relative overflow-hidden bg-ink py-[96px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <span className="eyebrow rv">Industries</span>
          <h2 className="h-sec rv">Fluent in your industry.</h2>
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
                Underwriting, servicing, compliance and grievance, engineered to be questioned because here it
                will be.
              </p>
              <Link className="iq-go group" href="/industries/bfsi">
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
                AI systems for clinical, operational and patient-facing workflows, designed around privacy,
                governance and human oversight.
              </p>
              <Link className="iq-go group" href="/industries/healthcare">
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
                AI systems for citizen services, accreditation and institutional knowledge, auditable by
                design and held to a public standard.
              </p>
              <Link className="iq-go group" href="/industries/public-sector">
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
                AI systems for customer experience, demand and inventory, engineered to hold at the volume a
                peak week produces.
              </p>
              <Link className="iq-go group" href="/industries/retail">
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
            Ideas, evidence and outcomes.
          </h2>
          <div className="mt-[54px] grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link className="card group flex flex-col p-4 text-left rv" data-d="0" href="/blog">
              <div className="relative h-[168px] w-full overflow-hidden rounded-[10px]">
                <div className="pimg pimg-team"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#000306]/60 via-transparent to-[#000306]/20"></div>
              </div>
              <h3 className="mt-5 font-display text-[14.5px] font-medium">Blog</h3>
              <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                Practical thinking on AI, enterprise systems and what it takes to move from ideas to
                production.
              </p>
              <span className="mt-5 inline-flex text-teal transition-transform duration-300 group-hover:translate-x-1">
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
            <Link className="card group flex flex-col p-4 text-left rv" data-d="80" href="/reports">
              <div className="relative h-[168px] w-full overflow-hidden rounded-[10px]">
                <div className="pimg pimg-scrutiny"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#000306]/60 via-transparent to-[#000306]/20"></div>
              </div>
              <h3 className="mt-5 font-display text-[14.5px] font-medium">Reports</h3>
              <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                Deeper research on enterprise AI, with the data, methodology and thinking behind the findings.
              </p>
              <span className="mt-5 inline-flex text-teal transition-transform duration-300 group-hover:translate-x-1">
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
            <Link className="card group flex flex-col p-4 text-left rv" data-d="160" href="/case-studies">
              <div className="relative h-[168px] w-full overflow-hidden rounded-[10px]">
                <div className="pimg pimg-systems"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#000306]/60 via-transparent to-[#000306]/20"></div>
              </div>
              <h3 className="mt-5 font-display text-[14.5px] font-medium">Case Studies</h3>
              <p className="mt-2 text-[11.5px] leading-[1.7] text-white/45">
                Real engagements, measurable outcomes and what it took to put AI to work in complex
                environments.
              </p>
              <span className="mt-5 inline-flex text-teal transition-transform duration-300 group-hover:translate-x-1">
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
                <h2 className="h-cta max-w-[24ch] lg:max-w-none">
                  We are AI-native operators
                  <br className="hidden sm:block" /> who make enterprises{" "}
                  <span className="text-teal">AI-first.</span>
                </h2>
                <p className="cta-sig mt-7">…outcomes that survive scrutiny.</p>
              </div>
              <div className="flex flex-col items-start lg:pt-2">
                <Link className="btn btn-light group" href="/contact">
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
