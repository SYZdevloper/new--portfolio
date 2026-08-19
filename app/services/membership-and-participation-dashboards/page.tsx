import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/membership-and-participation-dashboards/" },
  title: "Membership & Participation Dashboards | Hyperlink Tech Solutions",
  description: "We aggregate data from registration systems and CRM platforms into executive dashboards tracking year-on-year retention, demographic growth, and geographic participation.",
};

export default function Page() {
  return (
    <>
      <ServiceInteractions />
      <div className="service-page-wrapper">
        <SiteHeader />

        <main id="top">
            <section className="hero service-hero" aria-labelledby="service-title">
                <nav className="service-breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services/">Services</Link><span>›</span>
                    <strong>Executive Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Participation Analytics</div>
                        <p className="eyebrow">Executive Operations</p>
                        <h1 id="service-title">Visibility into the health of your sport.</h1>
                        <p className="hero-lead">We aggregate data from registration systems and CRM platforms into executive dashboards tracking year-on-year retention, demographic growth, and geographic participation.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Unified BI dashboards tracking core metrics (Conversion, Churn, Revenue per Member) across all clubs and regions</li>
                            <li>Geospatial mapping to identify 'cold spots' where participation is dropping to target marketing spend</li>
                            <li>Real-time tracking of diversity metrics (e.g., female participation growth) to report to government funding bodies</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Project <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        
                        <div className="proof-item">
                            <small>01 · Strategic Decision Making</small>
                            <strong>Deploy development officers to specific regions based on real-time registration dips.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Funding Justification</small>
                            <strong>Instantly generate the exact demographic reports required to secure government sports grants.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Retention Visibility</small>
                            <strong>Identify which specific age groups are dropping out of the sport and design programs to retain them.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Automated Reporting</small>
                            <strong>Eliminate the weeks spent manually merging data from 50 different clubs at the end of the season.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When sports data is siloed</p>
                        <p>You can't grow a national sport looking at fragmented club spreadsheets.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Data silos hide true participation trends.</h2>
                        <p>Sports executives are forced to make strategic decisions with fragmented data. If registration data is locked in a legacy system, program attendance is in a spreadsheet, and financials are in an ERP, calculating the true retention rate of a 12-year-old participant across five years is nearly impossible.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Hidden Churn</h3>
                                <p>Management doesn't realize that while total numbers are up, female participation in a specific region dropped by 20%.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Grant Reporting Nightmares</h3>
                                <p>Staff spend weeks manually trying to prove to the government that a specific diversity initiative actually worked.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Blind Marketing</h3>
                                <p>You spend thousands on digital ads but can't accurately trace if they resulted in actual paid club registrations.</p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section soft" id="included">
                <div className="container">
                    <div className="solution-shell">
                        <div className="solution-head">
                            <div>
                                <p className="eyebrow" style={{color: "#d8c2ff"}}>The deliverables</p>
                                <h2>Command centers for sports executives.</h2>
                            </div>
                            <p>We engineer data aggregation platforms that give leadership the real-time insights needed to grow the game.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Executive Scorecards</h3>
                                <p>High-level visual dashboards tracking KPIs like Total Members, Year-on-Year Growth, and Churn Rate.</p>
                                <div className="deliverable-tags"><small>BI</small><small>Dashboards</small><small>Metrics</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Data Warehousing</h3>
                                <p>Pipelines that extract data from disparate sports systems (PlayHQ, Salesforce) and normalize it in a cloud data warehouse.</p>
                                <div className="deliverable-tags"><small>ETL</small><small>Cloud</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Demographic & Geospatial Analytics</h3>
                                <p>Visual tools to track participation across age, gender, and postcodes, mapping it against population census data.</p>
                                <div className="deliverable-tags"><small>Analytics</small><small>Data</small><small>Maps</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Board Reporting</h3>
                                <p>Dynamic engines to instantly generate branded PDF or email summaries for board members and government stakeholders.</p>
                                <div className="deliverable-tags"><small>Reporting</small><small>PDFs</small><small>Automation</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Sports Platform</p>
                            <h2>Transforming national participation.</h2>
                        </div>
                        <p>See how we helped a national sporting body replace a fragile legacy registration system with a custom React portal, reducing member onboarding time by 60% while securely handling millions in subscription revenue.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Sports Tech</span>
                                <span>Member Portals</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/sports-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>A frictionless season start.</h2>
                                <p>We developed a secure, scalable membership platform that integrates directly with Stripe for complex family billing and auto-validates working-with-children checks via third-party APIs, eliminating manual admin for club volunteers.</p>
                            </div>
                            <a className="btn primary" href="/work/">View All Projects <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">Common questions about sports tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle complex family registration discounts?</summary>
                            <p>Off-the-shelf tools fail at sports math. We build custom logic engines that automatically calculate 'third-child' discounts, prorated mid-season fees, and state-level government sports vouchers dynamically during checkout.</p>
                        </details>
                        <details>
                            <summary>Can you integrate live competition data (ladders and fixtures)?</summary>
                            <p>Yes. We build custom API middleware that connects the website frontend directly to competition management systems (like PlayHQ, GameDay, or Opta), displaying live scores and ladders without slowing down the site.</p>
                        </details>
                        <details>
                            <summary>Do you build portals for coaches and referees?</summary>
                            <p>Yes. We build secure B2B-style portals where officials can submit match reports digitally, view their assignments, and upload mandatory compliance documents (like background checks) securely.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other sports capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/club-team-and-competition-websites/"><div><small>Community</small><h3>Sports Websites</h3><p>The digital home of the sport.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/membership-and-registration/"><div><small>Growth</small><h3>Member Onboarding</h3><p>Frictionless registrations.</p></div><b>Explore registration ↗</b></a>
                        <a className="related-card" href="/services/officials-and-volunteer-portals/"><div><small>Operations</small><h3>Officials Portals</h3><p>Empower the volunteers.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/membership-and-participation-dashboards/"><div><small>Analytics</small><h3>Participation BI</h3><p>Visibility into sport health.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your sports <br />and association operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From complex membership billing engines to live competition dashboards and secure official portals, we build software that drives participation and reduces administrative burden.</p>
                        <a className="btn" href="#contact">Get a Proposal <span className="arrow">↗</span></a>
                    </div>
                </div>
            </section>
        </main>

        <SiteFooter />
    </div>
    <a className="floating-cta" href="#contact">Get Proposal ↗</a>
    <div className="mobile-bottom" aria-label="Quick contact actions">
        <a href="mailto:hello@hyperlinktechsolutions.com">Email Us</a>
        <a href="#contact">Get Proposal</a>
    </div>
    </>
  );
}
