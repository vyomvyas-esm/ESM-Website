import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Privacy Policy - Es Magico",
};
export default function PrivacyPage() {
  return (
    <main className="page" id="page-privacy">
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[88px]">
          <nav className="crumb rv" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">·</span>
            <span className="text-white/45">Trust</span>
            <span className="sep">·</span>
            <span aria-current="page">Privacy Policy</span>
          </nav>
          <h1 className="h-hero mt-6 max-w-[16ch] rv" data-d="60">
            Privacy Policy.
          </h1>
          <p className="lede mt-5 max-w-[660px] rv" data-d="120">
            How Es Magico Experiences Private Limited collects, uses and protects personal data, both on this
            website and inside the systems we operate for clients.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 rv" data-d="180">
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
      </section>
      <section className="relative overflow-hidden bg-ink pb-[110px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="lg-grid">
            <aside className="lg-toc">
              <p className="lg-toc-h">Table of contents</p>
              <ol>
                <li>
                  <a className="lg-toc-link" data-toc="privacy-1" href="#privacy-1">
                    <span className="lg-toc-n">01</span>
                    <span>What information do we collect?</span>
                  </a>
                </li>
                <li>
                  <a className="lg-toc-link" data-toc="privacy-2" href="#privacy-2">
                    <span className="lg-toc-n">02</span>
                    <span>How do we process your information?</span>
                  </a>
                </li>
                <li>
                  <a className="lg-toc-link" data-toc="privacy-3" href="#privacy-3">
                    <span className="lg-toc-n">03</span>
                    <span>When and with whom do we share your information?</span>
                  </a>
                </li>
                <li>
                  <a className="lg-toc-link" data-toc="privacy-4" href="#privacy-4">
                    <span className="lg-toc-n">04</span>
                    <span>Do we use cookies or tracking technologies?</span>
                  </a>
                </li>
                <li>
                  <a className="lg-toc-link" data-toc="privacy-5" href="#privacy-5">
                    <span className="lg-toc-n">05</span>
                    <span>How long do we keep your information?</span>
                  </a>
                </li>
                <li>
                  <a className="lg-toc-link" data-toc="privacy-6" href="#privacy-6">
                    <span className="lg-toc-n">06</span>
                    <span>How do we keep your information safe?</span>
                  </a>
                </li>
                <li>
                  <a className="lg-toc-link" data-toc="privacy-7" href="#privacy-7">
                    <span className="lg-toc-n">07</span>
                    <span>What happens to data inside the systems we operate?</span>
                  </a>
                </li>
                <li>
                  <a className="lg-toc-link" data-toc="privacy-8" href="#privacy-8">
                    <span className="lg-toc-n">08</span>
                    <span>Do we collect information from minors?</span>
                  </a>
                </li>
                <li>
                  <a className="lg-toc-link" data-toc="privacy-9" href="#privacy-9">
                    <span className="lg-toc-n">09</span>
                    <span>What are your privacy rights?</span>
                  </a>
                </li>
                <li>
                  <a className="lg-toc-link" data-toc="privacy-10" href="#privacy-10">
                    <span className="lg-toc-n">10</span>
                    <span>Do we make updates to this notice?</span>
                  </a>
                </li>
                <li>
                  <a className="lg-toc-link" data-toc="privacy-11" href="#privacy-11">
                    <span className="lg-toc-n">11</span>
                    <span>How can you contact us about this notice?</span>
                  </a>
                </li>
              </ol>
            </aside>
            <div className="lg-doc">
              <p className="lg-stamp">Last updated 10 August 2026</p>
              <p className="lg-intro">
                This notice applies to esmagico.com and to the personal data we handle as a business. Where we
                engineer and operate AI systems inside a client’s environment, that client is the data
                fiduciary and we act on their documented instructions as a data processor. This notice covers
                our own processing; the client’s own notice governs theirs. If you do not agree with it,
                please do not use the site or send us your information.
              </p>
              <section className="lg-sec" id="privacy-1">
                <h2 className="lg-h2">
                  <span className="lg-num">1.</span>What information do we collect?
                </h2>
                <p className="lg-short">
                  <span>In short:</span> We collect what you choose to give us, plus standard technical
                  information from your browser.
                </p>
                <h3 className="lg-h3">Information you give us</h3>
                <p className="lg-p">
                  We collect personal information that you provide voluntarily when you contact us, apply for
                  a role, or subscribe to the newsletter. What we hold depends on which of those you use:
                </p>
                <ul className="lg-ul">
                  <li>Name and work email address</li>
                  <li>Organisation and the industry you selected</li>
                  <li>The outcome you described in the contact form</li>
                  <li>Links you share, such as LinkedIn, GitHub or a portfolio</li>
                  <li>Anything written in your introduction if you apply for a role</li>
                </ul>
                <h3 className="lg-h3">Information collected automatically</h3>
                <p className="lg-p">
                  Our servers record standard technical information with every request, including IP address,
                  browser type and the pages you opened. This is used for security and to understand which
                  material is read. We do not use it to identify you.
                </p>
              </section>
              <section className="lg-sec" id="privacy-2">
                <h2 className="lg-h2">
                  <span className="lg-num">2.</span>How do we process your information?
                </h2>
                <p className="lg-short">
                  <span>In short:</span> To answer you, to assess an application, to send what you asked for,
                  and to keep the site secure.
                </p>
                <p className="lg-p">
                  We process personal information for a limited set of purposes, and we do not repurpose it
                  later:
                </p>
                <ul className="lg-ul">
                  <li>To answer an enquiry and continue a conversation you started</li>
                  <li>To assess an application and reply to the applicant</li>
                  <li>To send the newsletter, where you asked us to</li>
                  <li>To keep the site secure, available and free of abuse</li>
                  <li>To meet obligations that apply to us under Indian law</li>
                </ul>
                <p className="lg-p">
                  If you subscribe, every issue carries an unsubscribe link, and we stop when you use it.
                </p>
              </section>
              <section className="lg-sec" id="privacy-3">
                <h2 className="lg-h2">
                  <span className="lg-num">3.</span>When and with whom do we share your information?
                </h2>
                <p className="lg-short">
                  <span>In short:</span> With a small number of service providers, and with nobody else unless
                  the law requires it.
                </p>
                <p className="lg-p">
                  A small number of providers help us operate the business: hosting, email delivery and
                  applicant tracking. They act only on our instructions and are bound by contract to do so.
                </p>
                <p className="lg-p">
                  We do not sell personal data. We do not share it with advertising networks. We do not run
                  advertising on this site. We disclose personal information to anyone else only where a law
                  or a lawful order requires it.
                </p>
              </section>
              <section className="lg-sec" id="privacy-4">
                <h2 className="lg-h2">
                  <span className="lg-num">4.</span>Do we use cookies or tracking technologies?
                </h2>
                <p className="lg-short">
                  <span>In short:</span> One local preference for light or dark appearance. No third-party
                  tracking cookies.
                </p>
                <p className="lg-p">
                  This site stores a single preference in your browser to remember whether you chose the light
                  or the dark appearance. It stays on your device, it is never sent to us, and clearing your
                  browser storage removes it.
                </p>
                <p className="lg-p">
                  We do not use third-party tracking cookies, advertising pixels or cross-site profiling of
                  any kind.
                </p>
              </section>
              <section className="lg-sec" id="privacy-5">
                <h2 className="lg-h2">
                  <span className="lg-num">5.</span>How long do we keep your information?
                </h2>
                <p className="lg-short">
                  <span>In short:</span> For as long as the reason we collected it lasts, and no longer.
                </p>
                <ul className="lg-ul">
                  <li>
                    Enquiries are held while the conversation is live and for a reasonable period afterwards,
                    then deleted
                  </li>
                  <li>
                    Applications are held for the hiring cycle and a short period afterwards, unless you ask
                    us to keep them on file
                  </li>
                  <li>Newsletter subscriptions are held until you unsubscribe</li>
                  <li>Technical logs are held for a short operational window</li>
                </ul>
                <p className="lg-p">
                  Data we process on behalf of a client follows that client’s retention schedule.
                </p>
              </section>
              <section className="lg-sec" id="privacy-6">
                <h2 className="lg-h2">
                  <span className="lg-num">6.</span>How do we keep your information safe?
                </h2>
                <p className="lg-short">
                  <span>In short:</span> Encryption, isolated hosting, least-privilege access, and an ISO
                  27001 certified management system.
                </p>
                <p className="lg-p">
                  We hold ISO/IEC 27001:2022 certification. Data is encrypted in transit and at rest, hosting
                  is isolated, and access is granted on the least a person needs to do their job.
                </p>
                <p className="lg-p">
                  No system is beyond compromise, so we also plan for the day one is. If a breach affects your
                  personal data we will tell you and the relevant authority, within the time the law allows.
                </p>
              </section>
              <section className="lg-sec" id="privacy-7">
                <h2 className="lg-h2">
                  <span className="lg-num">7.</span>What happens to data inside the systems we operate?
                </h2>
                <p className="lg-short">
                  <span>In short:</span> It stays in the client’s environment, under the client’s policy, and
                  every decision is logged.
                </p>
                <p className="lg-p">
                  Systems we deploy operate inside the client’s own environment. Data residency, retention and
                  access follow that client’s policy and the contract we hold with them, and we act on their
                  instructions.
                </p>
                <p className="lg-p">
                  Where a use case calls for it, personal data is masked or redacted before a model sees it.
                  Access is role-based and inherited from the client’s existing entitlements, so a person sees
                  only what they were already cleared to see. Every decision the system makes is logged with
                  its inputs, so a specific case can be reconstructed months later.
                </p>
              </section>
              <section className="lg-sec" id="privacy-8">
                <h2 className="lg-h2">
                  <span className="lg-num">8.</span>Do we collect information from minors?
                </h2>
                <p className="lg-short">
                  <span>In short:</span> No. This site and our services are intended for business use by
                  adults.
                </p>
                <p className="lg-p">
                  We do not knowingly collect personal data from anyone under 18, and nothing on this site is
                  directed at children. If you believe a minor has given us personal information, write to
                  connect@esmagico.com and we will delete it.
                </p>
              </section>
              <section className="lg-sec" id="privacy-9">
                <h2 className="lg-h2">
                  <span className="lg-num">9.</span>What are your privacy rights?
                </h2>
                <p className="lg-short">
                  <span>In short:</span> Access, correction, erasure, withdrawal of consent, and the right to
                  nominate someone to act for you.
                </p>
                <p className="lg-p">Under the Digital Personal Data Protection Act, 2023 you may:</p>
                <ul className="lg-ul">
                  <li>Ask what personal data we hold about you</li>
                  <li>Ask us to correct or complete it</li>
                  <li>Ask us to erase it, where we have no reason to keep it</li>
                  <li>Withdraw a consent you previously gave</li>
                  <li>Nominate someone to exercise these rights on your behalf</li>
                </ul>
                <p className="lg-p">
                  Write to connect@esmagico.com and we will respond within the period the law allows. If your
                  data is processed by us on behalf of a client, please raise the request with that client and
                  we will support them in answering it.
                </p>
                <p className="lg-p">
                  If you are unhappy with our response, you may complain to the Data Protection Board of
                  India.
                </p>
              </section>
              <section className="lg-sec" id="privacy-10">
                <h2 className="lg-h2">
                  <span className="lg-num">10.</span>Do we make updates to this notice?
                </h2>
                <p className="lg-short">
                  <span>In short:</span> Yes, when our practice changes. The date at the top records the last
                  change.
                </p>
                <p className="lg-p">
                  We revise this notice when what we do changes. The version published here is the one that
                  applies, and the date at the top tells you when it last changed. Where a change is material,
                  we will say so.
                </p>
              </section>
              <section className="lg-sec" id="privacy-11">
                <h2 className="lg-h2">
                  <span className="lg-num">11.</span>How can you contact us about this notice?
                </h2>
                <p className="lg-short">
                  <span>In short:</span> Write to connect@esmagico.com.
                </p>
                <p className="lg-p">
                  Es Magico Experiences Private Limited, with offices in Mumbai and Bengaluru. For anything in
                  this notice, including a request to access, correct or erase your data, write to
                  connect@esmagico.com.
                </p>
              </section>
            </div>
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
                  Tell us the number you need to <span className="text-teal">move.</span>
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
