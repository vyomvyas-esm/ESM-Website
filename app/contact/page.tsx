import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
export const metadata = pageMetadata({
  title: "Define an Outcome",
  description: "",
  path: "/contact/",
});
export default function ContactPage() {
  return (
    <main className="page" id="page-contact">
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[46px] pb-[80px]">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Define an Outcome" }]} />
          <div className="mt-8 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col rv">
              <h1 className="font-display text-[clamp(1.75rem,3.1vw,2.5rem)] font-semibold leading-[1.15] tracking-[-.025em] max-w-[22ch]">
                Define the outcome, and we will engineer it
              </h1>
              <div className="ct-soc mt-5 flex items-center gap-3" aria-label="Contact Es Magico">
                <a
                  href="mailto:connect@esmagico.com"
                  className="soc"
                  aria-label="Email connect@esmagico.com"
                  title="connect@esmagico.com"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
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
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6.6 3.5c.5-.3 1.2-.2 1.6.3l2 2.6c.4.5.3 1.2-.2 1.6l-1.3 1c-.3.2-.4.6-.2.9a12 12 0 0 0 4.6 4.6c.3.2.7.1.9-.2l1-1.3c.4-.5 1.1-.6 1.6-.2l2.6 2c.5.4.6 1.1.3 1.6l-1.2 1.9c-.5.8-1.5 1.2-2.4 1A16.8 16.8 0 0 1 4.4 7.2c-.2-.9.2-1.9 1-2.4Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
              <div className="mt-8 border-t border-hair pt-6">
                <p className="eyebrow" style={{ textAlign: "left" }}>
                  In their words
                </p>
                <div
                  className="ft-card ft-tst ct-open rv"
                  aria-roledescription="carousel"
                  aria-label="Client testimonials"
                >
                  <span className="ct-qm" aria-hidden="true">
                    “
                  </span>
                  <div className="ft-rot">
                    <div className="ft-slide is-on" data-i="0">
                      <p className="ft-k">RBI Innovation Hub</p>
                      <blockquote className="ft-t ft-q">
                        Es Magico engineered a grievance protocol that any regulated bank could adopt, one as
                        accountable as the institutions using it. It is now live across multiple banks, and a
                        complaint takes about two minutes to register, in eleven Indic languages. Most
                        importantly, every grievance is logged and independently trackable.
                      </blockquote>
                      <span className="ct-rule" aria-hidden="true"></span>
                      <div className="ct-by">
                        <span
                          className="clogo logow-rbi ct-logo"
                          role="img"
                          aria-label="RBI Innovation Hub"
                        ></span>
                        <p className="ft-by">
                          <span className="ft-name">Ranjeet Rane</span>
                          <span className="ft-role">Head of Research, RBI Innovation Hub</span>
                        </p>
                      </div>
                    </div>
                    <div className="ft-slide" data-i="1" aria-hidden="true">
                      <p className="ft-k">Cipla</p>
                      <blockquote className="ft-t ft-q">
                        Es Magico has transformed how we deliver manufacturing and quality training globally.
                        Their AI-native multilingual learning, instant query resolution, and role-play
                        capabilities have significantly enhanced learner engagement and knowledge retention.
                      </blockquote>
                      <span className="ct-rule" aria-hidden="true"></span>
                      <div className="ct-by">
                        <span className="clogo logow-cipla ct-logo" role="img" aria-label="Cipla"></span>
                        <p className="ft-by">
                          <span className="ft-name">Shivam Vig</span>
                          <span className="ft-role">Senior Director HR, Cipla</span>
                        </p>
                      </div>
                    </div>
                    <div className="ft-slide" data-i="2" aria-hidden="true">
                      <p className="ft-k">Quality Council of India</p>
                      <blockquote className="ft-t ft-q">
                        Es Magico’s PYZO suite has improved the efficiency of our 1,500+ employees driving
                        quality standards across education, healthcare, and manufacturing. Working with a
                        single partner capable of delivering meaningful transformation across business
                        functions has accelerated outcomes.
                      </blockquote>
                      <span className="ct-rule" aria-hidden="true"></span>
                      <div className="ct-by">
                        <span
                          className="clogo logow-qci ct-logo"
                          role="img"
                          aria-label="Quality Council of India"
                        ></span>
                        <p className="ft-by">
                          <span className="ft-name">Aditya Laxman</span>
                          <span className="ft-role">Assistant Secretary General, QCI</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ft-dots">
                    <button
                      type="button"
                      className="ft-dot is-on"
                      data-i="0"
                      aria-label="Show testimonial from RBI Innovation Hub"
                    ></button>
                    <button
                      type="button"
                      className="ft-dot"
                      data-i="1"
                      aria-label="Show testimonial from Cipla"
                    ></button>
                    <button
                      type="button"
                      className="ft-dot"
                      data-i="2"
                      aria-label="Show testimonial from Quality Council of India"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex rv" data-d="120">
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="ct-band">
          <div className="brand-band relative rv">
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
                    <span
                      className="clogo logow-up"
                      role="img"
                      aria-label="Government of Uttar Pradesh"
                    ></span>
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
                    <span
                      className="clogo logow-isb"
                      role="img"
                      aria-label="Indian School of Business"
                    ></span>
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
        </div>
      </section>
    </main>
  );
}
