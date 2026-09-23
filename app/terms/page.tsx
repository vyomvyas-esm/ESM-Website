import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { graph, webPage } from "@/lib/jsonld";
import { updated } from "@/data/page-schema";
import Link from "next/link";
export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "The terms on which you may use esmagico.com. Engagements are governed by a separate signed agreement.",
  path: "/terms/",
});
export default function TermsPage() {
  return (
    <main className="page" id="page-terms">
      <JsonLd data={graph(webPage(updated["terms"]))} />
      <section className="relative isolate overflow-hidden pt-[68px]">
        <div className="sky" aria-hidden="true">
          <div className="hero-photo"></div>
          <div className="hero-scrim"></div>
          <div className="sky-fade"></div>
        </div>
        <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-[80px] pb-[88px]">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Trust" }, { label: "Terms & Conditions" }]}
          />
          <h1 className="h-hero mt-6 max-w-[16ch] rv" data-d="60">
            Terms &amp; Conditions.
          </h1>
          <p className="lede mt-5 max-w-[660px] rv" data-d="120">
            The terms on which you may use esmagico.com. Engagements are governed by a separate signed
            agreement.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 rv" data-d="180">
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
      </section>
      <section className="relative overflow-hidden bg-ink pb-[110px]">
        <div className="relative mx-auto max-w-shell px-6 lg:px-8">
          <div className="lg-grid">
            <aside className="lg-toc">
              <p className="lg-toc-h">Table of contents</p>
              <ol>
                <li>
                  <a className="lg-toc-link" data-toc="terms-1" href="#terms-1">
                    <span className="lg-toc-n">01</span>
                    <span>Who are these terms with?</span>
                  </a>
                </li>
                <li>
                  <a className="lg-toc-link" data-toc="terms-2" href="#terms-2">
                    <span className="lg-toc-n">02</span>
                    <span>What may you do on this site?</span>
                  </a>
                </li>
                <li>
                  <a className="lg-toc-link" data-toc="terms-3" href="#terms-3">
                    <span className="lg-toc-n">03</span>
                    <span>What is published here, and what it is not?</span>
                  </a>
                </li>
                <li>
                  <a className="lg-toc-link" data-toc="terms-4" href="#terms-4">
                    <span className="lg-toc-n">04</span>
                    <span>Who owns the content and the marks?</span>
                  </a>
                </li>
                <li>
                  <a className="lg-toc-link" data-toc="terms-5" href="#terms-5">
                    <span className="lg-toc-n">05</span>
                    <span>What about links to other sites?</span>
                  </a>
                </li>
                <li>
                  <a className="lg-toc-link" data-toc="terms-6" href="#terms-6">
                    <span className="lg-toc-n">06</span>
                    <span>What happens to anything you send us?</span>
                  </a>
                </li>
                <li>
                  <a className="lg-toc-link" data-toc="terms-7" href="#terms-7">
                    <span className="lg-toc-n">07</span>
                    <span>What are the limits of our liability?</span>
                  </a>
                </li>
                <li>
                  <a className="lg-toc-link" data-toc="terms-8" href="#terms-8">
                    <span className="lg-toc-n">08</span>
                    <span>Which law governs these terms?</span>
                  </a>
                </li>
                <li>
                  <a className="lg-toc-link" data-toc="terms-9" href="#terms-9">
                    <span className="lg-toc-n">09</span>
                    <span>Do we make updates to these terms?</span>
                  </a>
                </li>
                <li>
                  <a className="lg-toc-link" data-toc="terms-10" href="#terms-10">
                    <span className="lg-toc-n">10</span>
                    <span>How can you contact us?</span>
                  </a>
                </li>
              </ol>
            </aside>
            <div className="lg-doc">
              <p className="lg-stamp">Last updated 10 August 2026</p>
              <p className="lg-intro">
                By using this website you accept these terms. If you do not accept them, please do not use the
                site. Nothing here creates a contract for services. Any engagement with Es Magico is governed
                by a master services agreement and a statement of work signed by both parties, and those
                documents prevail over anything published here.
              </p>
              <section className="lg-sec" id="terms-1">
                <h2 className="lg-h2">
                  <span className="lg-num">1.</span>Who are these terms with?
                </h2>
                <p className="lg-short">
                  <span>In short:</span> Es Magico Experiences Private Limited, an Indian company with offices
                  in Mumbai and Bengaluru.
                </p>
                <p className="lg-p">
                  This site is operated by Es Magico Experiences Private Limited. References to we, us and our
                  mean that company. References to you mean anyone using the site.
                </p>
              </section>
              <section className="lg-sec" id="terms-2">
                <h2 className="lg-h2">
                  <span className="lg-num">2.</span>What may you do on this site?
                </h2>
                <p className="lg-short">
                  <span>In short:</span> Read it, and quote from it with attribution. Do not scrape it, break
                  it, or misuse it.
                </p>
                <p className="lg-p">
                  You may read this site and quote from it with attribution. You may not:
                </p>
                <ul className="lg-ul">
                  <li>Scrape it at a rate that degrades it for other readers</li>
                  <li>Attempt to reach anything that has not been published</li>
                  <li>Interfere with its operation or its security</li>
                  <li>Use it to transmit anything unlawful</li>
                  <li>Reproduce the site, or a substantial part of it, without our written consent</li>
                </ul>
                <p className="lg-p">
                  We may change, suspend or withdraw any part of the site at any time. We aim to keep it
                  available and we do not promise that it always will be.
                </p>
              </section>
              <section className="lg-sec" id="terms-3">
                <h2 className="lg-h2">
                  <span className="lg-num">3.</span>What is published here, and what it is not?
                </h2>
                <p className="lg-short">
                  <span>In short:</span> General information about our work. Not advice for your situation.
                </p>
                <p className="lg-p">
                  Articles, reports and case studies here are published for general information. They describe
                  work we have done and positions we hold. They are not advice for your circumstances.
                </p>
                <p className="lg-p">
                  Decisions about your own systems, your regulatory obligations or your commercial
                  arrangements should be taken with advisers who know your situation.
                </p>
                <h3 className="lg-h3">Figures and claims</h3>
                <ul className="lg-ul">
                  <li>Figures attributed to a named client are published with that client’s agreement</li>
                  <li>Illustrative figures are labelled as illustrative</li>
                  <li>
                    Where a case study is anonymised, the reason is that the client cannot be named, and the
                    work itself is real
                  </li>
                </ul>
                <h3 className="lg-h3">Forward-looking statements</h3>
                <p className="lg-p">
                  Some material describes what we intend to do or expect to happen. Those statements reflect
                  our view when written, they are not promises, and we are under no obligation to update them.
                </p>
              </section>
              <section className="lg-sec" id="terms-4">
                <h2 className="lg-h2">
                  <span className="lg-num">4.</span>Who owns the content and the marks?
                </h2>
                <p className="lg-short">
                  <span>In short:</span> We do, or our licensors do. Client marks belong to those clients.
                </p>
                <p className="lg-p">
                  The content, design, code and marks on this site belong to us or to our licensors. PYZO and
                  the module names Atlas, Compass, Evio, Forge, Loupe and Prism are our marks. Client names
                  and logos belong to those clients and appear with permission.
                </p>
                <p className="lg-p">
                  Ownership of anything we engineer for a client is set out in the signed agreement with that
                  client.
                </p>
              </section>
              <section className="lg-sec" id="terms-5">
                <h2 className="lg-h2">
                  <span className="lg-num">5.</span>What about links to other sites?
                </h2>
                <p className="lg-short">
                  <span>In short:</span> We link because the material is useful. We do not control what those
                  sites publish.
                </p>
                <p className="lg-p">
                  Where we link out, we do so because the material is useful. We do not control those sites
                  and we are not responsible for their content, their availability or their handling of your
                  data.
                </p>
              </section>
              <section className="lg-sec" id="terms-6">
                <h2 className="lg-h2">
                  <span className="lg-num">6.</span>What happens to anything you send us?
                </h2>
                <p className="lg-short">
                  <span>In short:</span> We treat it under the Privacy Policy. Do not send confidential
                  material through this site.
                </p>
                <p className="lg-p">
                  If you send us an enquiry, an application or a newsletter subscription, you confirm the
                  information is accurate and that you are entitled to share it. Personal data in a submission
                  is handled under our Privacy Policy.
                </p>
                <p className="lg-p">
                  Please do not send confidential or proprietary material through this site. Use an agreed
                  channel instead, under an agreement that covers it.
                </p>
              </section>
              <section className="lg-sec" id="terms-7">
                <h2 className="lg-h2">
                  <span className="lg-num">7.</span>What are the limits of our liability?
                </h2>
                <p className="lg-short">
                  <span>In short:</span> The site is provided as it is. Some liabilities cannot lawfully be
                  excluded, and we do not try to.
                </p>
                <p className="lg-p">
                  We provide this site as it is. To the extent the law permits, we exclude liability for loss
                  arising from reliance on the site, from its unavailability, or from anything reached through
                  a link on it.
                </p>
                <p className="lg-p">
                  Nothing in these terms excludes or limits liability that cannot lawfully be excluded,
                  including liability for fraud, or for death or personal injury caused by negligence.
                </p>
              </section>
              <section className="lg-sec" id="terms-8">
                <h2 className="lg-h2">
                  <span className="lg-num">8.</span>Which law governs these terms?
                </h2>
                <p className="lg-short">
                  <span>In short:</span> The laws of India, with exclusive jurisdiction in the courts at
                  Mumbai.
                </p>
                <p className="lg-p">
                  These terms are governed by the laws of India. The courts at Mumbai have exclusive
                  jurisdiction over any dispute arising from them or from your use of this site.
                </p>
              </section>
              <section className="lg-sec" id="terms-9">
                <h2 className="lg-h2">
                  <span className="lg-num">9.</span>Do we make updates to these terms?
                </h2>
                <p className="lg-short">
                  <span>In short:</span> Yes. The version on this page when you use the site is the one that
                  applies.
                </p>
                <p className="lg-p">
                  We may revise these terms. The version published here at the time you use the site is the
                  one that applies, and the date at the top records when it last changed.
                </p>
              </section>
              <section className="lg-sec" id="terms-10">
                <h2 className="lg-h2">
                  <span className="lg-num">10.</span>How can you contact us?
                </h2>
                <p className="lg-short">
                  <span>In short:</span> Write to connect@esmagico.com.
                </p>
                <p className="lg-p">
                  Questions about these terms go to connect@esmagico.com, or to Es Magico Experiences Private
                  Limited at our Mumbai or Bengaluru office.
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
