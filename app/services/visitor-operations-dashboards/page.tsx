import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/visitor-operations-dashboards/" },
  title: "Visitor Operations Dashboards | Hyperlink Tech Solutions",
  description: "We aggregate data from your ticketing system, point-of-sale (POS), and turnstiles into executive dashboards tracking live in-park attendance, per-capita spending, and queue wait times.",
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
                        <div className="hero-status">Operations Analytics</div>
                        <p className="eyebrow">Executive Operations</p>
                        <h1 id="service-title">Visibility across the entire park.</h1>
                        <p className="hero-lead">We aggregate data from your ticketing system, point-of-sale (POS), and turnstiles into executive dashboards tracking live in-park attendance, per-capita spending, and queue wait times.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Unified BI dashboards tracking core metrics (Live Attendance, Food & Beverage Yield, Retail Conversion) in real-time</li>
                            <li>Predictive attendance modeling combining historical ticket data with upcoming weather forecasts to optimize staffing</li>
                            <li>Geospatial mapping of the park showing real-time crowd density based on Wi-Fi tracking or app usage</li>
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
                            <small>01 · Live Decision Making</small>
                            <strong>Identify that the north sector is overcrowded and dispatch a pop-up ice cream cart instantly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Margin Visibility</small>
                            <strong>Instantly see how much profit you made today on general admission versus ancillary spending.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Staff Optimization</small>
                            <strong>Predict low attendance due to rain tomorrow and confidently cancel casual shifts to save payroll.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Automated Reporting</small>
                            <strong>Eliminate the days spent manually merging ticketing and food/beverage exports in Excel.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When park data is siloed</p>
                        <p>You can't manage a 10,000-person theme park looking at yesterday's fragmented spreadsheets.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Data silos hide true operational profitability.</h2>
                        <p>Attraction executives are forced to make strategic decisions with fragmented data. If entry scans are in the ticketing system, burger sales are in a separate POS, and merchandise is in an ERP, calculating the true Per-Capita (Per-Cap) spend of a visitor today is nearly impossible.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Hidden Margin Erosion</h3>
                                <p>Management doesn't realize that while attendance was high, food and beverage yield plummeted because lines were too long.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Staffing Mismatches</h3>
                                <p>You overstaff the park on a Tuesday because management couldn't easily factor the incoming rain into the attendance model.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Reporting Fatigue</h3>
                                <p>Analysts spend hours every morning manually extracting and merging data from different regional systems to build the daily flash report.</p>
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
                                <h2>Command centers for attraction executives.</h2>
                            </div>
                            <p>We engineer data aggregation platforms that give leadership the real-time insights needed to protect margins and optimize the guest experience.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Live Operations Control Towers</h3>
                                <p>High-level visual dashboards tracking live turnstile scans against forecasted attendance.</p>
                                <div className="deliverable-tags"><small>BI</small><small>Dashboards</small><small>Operations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Data Warehousing</h3>
                                <p>Pipelines that extract data from disparate systems (Ticketing POS, F&B POS, Weather APIs) and normalize it in a cloud data warehouse.</p>
                                <div className="deliverable-tags"><small>ETL</small><small>Cloud</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Per-Capita Analytics</h3>
                                <p>Visual tools to track true visitor profitability by merging ticket revenue with in-park spending patterns.</p>
                                <div className="deliverable-tags"><small>Analytics</small><small>Data</small><small>Finance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Flash Reporting</h3>
                                <p>Dynamic engines to instantly generate branded PDF or email summaries for park managers and ownership groups at the close of business.</p>
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
                            <p className="eyebrow">Featured Attractions Platform</p>
                            <h2>Transforming the visitor experience.</h2>
                        </div>
                        <p>See how we helped a major regional zoo replace a clunky legacy ticketing widget with a custom React booking flow, increasing online pre-sales by 40% and drastically reducing queues at the front gate on Saturday mornings.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Visitor Tech</span>
                                <span>Ticketing Integrations</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/attractions-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Frictionless entry, higher revenue.</h2>
                                <p>We developed a secure ticketing engine connected directly to their POS system (like Gateway or Centaman). Families can now purchase time-slotted tickets, add a giraffe-feeding experience to their cart, and checkout with Apple Pay in seconds.</p>
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
                        <h2 id="faq-title">Common questions about attractions tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with complex ticketing systems like Gateway Ticketing or Centaman?</summary>
                            <p>We build API middleware that connects your custom web frontend directly to your core ticketing software. This allows us to pull live capacity, dynamic pricing, and pass validations without exposing the core database.</p>
                        </details>
                        <details>
                            <summary>Can you handle time-slotted or capacity-limited entry?</summary>
                            <p>Yes. We build interactive calendar and time-picker UIs that query the ticketing system in real-time. If a 10:00 AM slot reaches its 50-person limit, our frontend immediately grays it out to prevent overselling.</p>
                        </details>
                        <details>
                            <summary>Do you build digital tickets for Apple Wallet or Google Pay?</summary>
                            <p>Yes. Upon successful checkout, we can automatically generate dynamic QR codes and native Apple Wallet/Google Pay passes that your turnstiles or gate staff can scan instantly.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other attraction capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/attraction-and-activity-websites/"><div><small>Discovery</small><h3>Attraction Websites</h3><p>Showcase the experience.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/tickets-passes-and-booking/"><div><small>Revenue</small><h3>Ticketing & Passes</h3><p>Frictionless gate entry.</p></div><b>Explore ticketing ↗</b></a>
                        <a className="related-card" href="/services/membership-and-visitor-accounts/"><div><small>Loyalty</small><h3>Member Portals</h3><p>Self-serve passholders.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/groups-events-and-education/"><div><small>B2B Operations</small><h3>Group Bookings</h3><p>Streamline large groups.</p></div><b>Explore B2B ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your attraction <br />and visitor operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From custom ticketing engines to digital passholder wallets and live attendance dashboards, we build software that drives revenue and reduces gate friction.</p>
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
