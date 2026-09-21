import Link from "next/link";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="dark-band relative isolate overflow-hidden border-t border-hair pt-[64px]">
      <div className="foot-photo" aria-hidden="true"></div>

      <div className="relative">
        <div className="mx-auto max-w-shell px-6 lg:px-8">
          <div className="foot-top">
            <div>
              <span className="esm-mark lg flush text-white"></span>
              <p className="mt-3 text-[12px] text-white/45">The Operator for AI-native Transformation.</p>

              <ul className="foot-offices mt-7" aria-label="Offices">
                <li>
                  <span className="fo-city">Mumbai</span>
                  <span className="fo-addr">
                    Lodha Supremus, 1307, Saki Vihar Road, Tunga Village, Chandivali, Powai, Mumbai,
                    Maharashtra 400072
                  </span>
                </li>

                <li>
                  <span className="fo-city">Bengaluru</span>
                  <span className="fo-addr">
                    Unicorn Club 113, 3rd Floor, 19th Main, Sector 4, HSR Layout, Bengaluru, Karnataka 560102
                  </span>
                </li>

                <li>
                  <span className="fo-city">New Jersey</span>
                  <span className="fo-addr">
                    2 University Plaza Drive, Suite 100, Hackensack, NJ 07601, USA
                  </span>
                </li>
              </ul>
            </div>

            <div className="foot-news">
              <div className="fn-copy">
                <p className="fn-h">Join our newsletter</p>

                <p className="fn-sub">
                  Operator notes on production AI, when there is something worth reading.
                </p>
              </div>

              <NewsletterForm />
            </div>
          </div>

          <div className="foot-nav grid gap-8">
            <div className="fn-pyzo">
              <h4 className="text-[10.5px] font-semibold uppercase tracking-[.16em] text-white/85">PYZO</h4>

              <ul className="mt-4 space-y-[10px] fn-two">
                <li>
                  <Link className="foot-link" href="/pyzo/atlas/">
                    Atlas
                  </Link>
                </li>

                <li>
                  <Link className="foot-link" href="/pyzo/compass/">
                    Compass
                  </Link>
                </li>

                <li>
                  <Link className="foot-link" href="/pyzo/evio/">
                    Evio
                  </Link>
                </li>

                <li>
                  <Link className="foot-link" href="/pyzo/forge/">
                    Forge
                  </Link>
                </li>

                <li>
                  <Link className="foot-link" href="/pyzo/loupe/">
                    Loupe
                  </Link>
                </li>

                <li>
                  <Link className="foot-link" href="/pyzo/prism/">
                    Prism
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10.5px] font-semibold uppercase tracking-[.16em] text-white/85">
                Engineering
              </h4>

              <ul className="mt-4 space-y-[10px]">
                <li>
                  <Link className="foot-link" href="/engineering/agentic-ai/">
                    Agentic AI
                  </Link>
                </li>

                <li>
                  <Link className="foot-link" href="/engineering/ai-governance/">
                    AI Governance
                  </Link>
                </li>

                <li>
                  <Link className="foot-link" href="/engineering/enterprise-ai/">
                    Enterprise AI
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10.5px] font-semibold uppercase tracking-[.16em] text-white/85">
                Industries
              </h4>

              <ul className="mt-4 space-y-[10px]">
                <li>
                  <Link className="foot-link" href="/industries/bfsi/">
                    BFSI
                  </Link>
                </li>

                <li>
                  <Link className="foot-link" href="/industries/healthcare/">
                    Healthcare
                  </Link>
                </li>

                <li>
                  <Link className="foot-link" href="/industries/public-sector/">
                    Public Sector
                  </Link>
                </li>

                <li>
                  <Link className="foot-link" href="/industries/retail/">
                    Consumer
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10.5px] font-semibold uppercase tracking-[.16em] text-white/85">
                Resources
              </h4>

              <ul className="mt-4 space-y-[10px]">
                <li>
                  <Link className="foot-link" href="/blog/">
                    Blog
                  </Link>
                </li>

                <li>
                  <Link className="foot-link" href="/case-studies/">
                    Case Studies
                  </Link>
                </li>

                <li>
                  <Link className="foot-link" href="/reports/">
                    Reports
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10.5px] font-semibold uppercase tracking-[.16em] text-white/85">
                Company
              </h4>

              <ul className="mt-4 space-y-[10px]">
                <li>
                  <Link className="foot-link" href="/about/">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link className="foot-link" href="/careers/">
                    Careers
                  </Link>
                </li>

                <li>
                  <Link className="foot-link" href="/technology/">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10.5px] font-semibold uppercase tracking-[.16em] text-white/85">Trust</h4>

              <ul className="mt-4 space-y-[10px]">
                <li>
                  <Link className="foot-link" href="/privacy/">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link className="foot-link" href="/terms/">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-[54px] flex flex-col items-center justify-between gap-5 border-t border-hair py-6 sm:flex-row">
            <p className="text-[11px] text-white/35">
              © 2026 Es Magico Experiences Private Limited · ISO/IEC 27001:2022 certified
            </p>

            <div className="flex items-center gap-2">
              <a
                href="mailto:connect@esmagico.com"
                className="soc"
                aria-label="Email connect@esmagico.com"
                title="connect@esmagico.com"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3.6 6.2h16.8v11.6H3.6Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    fill="none"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m3.6 6.8 8.4 6.2 8.4-6.2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="tel:+919407474888"
                className="soc"
                aria-label="Phone +91 94074 74888"
                title="+91 94074 74888"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.6 3.5c.5-.3 1.2-.2 1.6.3l2 2.6c.4.5.3 1.2-.2 1.6l-1.3 1c-.3.2-.4.6-.2.9a12 12 0 0 0 4.6 4.6c.3.2.7.1.9-.2l1-1.3c.4-.5 1.1-.6 1.6-.2l2.6 2c.5.4.6 1.1.3 1.6l-1.2 1.9c-.5.8-1.5 1.2-2.4 1A16.8 16.8 0 0 1 4.4 7.2c-.2-.9.2-1.9 1-2.4Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://x.com/EsMagicoAI"
                target="_blank"
                rel="noopener"
                className="soc"
                aria-label="X"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.6 3h3.3l-7.2 8.2L22 21h-6.6l-4.4-5.6L5.9 21H2.6l7.7-8.8L2.3 3H9l4 5.2Zm-1.2 16h1.8L7.7 4.8H5.8Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/esmagico/"
                target="_blank"
                rel="noopener"
                className="soc"
                aria-label="LinkedIn"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.94 8.5H4.06V20h2.88ZM5.5 3.7A1.7 1.7 0 1 0 5.5 7.1a1.7 1.7 0 0 0 0-3.4M20 13.7c0-3-1.6-4.4-3.74-4.4-1.72 0-2.5.95-2.93 1.62V8.5H10.5V20h2.83v-6.2c0-.34.02-.67.12-.9.27-.66.87-1.34 1.9-1.34 1.33 0 1.86 1 1.86 2.5V20H20Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/esmagicoai"
                target="_blank"
                rel="noopener"
                className="soc"
                aria-label="Instagram"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <rect
                    x="3.4"
                    y="3.4"
                    width="17.2"
                    height="17.2"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <circle cx="16.9" cy="7.1" r="1.1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
