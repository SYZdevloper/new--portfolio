import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/hospitality-dashboards/" },
  title: "Hospitality Dashboards | Hyperlink Tech Solutions",
  description: "We aggregate data from your PMS, point-of-sale systems, and booking engines into executive dashboards tracking RevPAR, occupancy rates, and ancillary spend across all properties.",
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
                        <h1 id="service-title">Visibility across the entire portfolio.</h1>
                        <p className="hero-lead">We aggregate data from your PMS, point-of-sale systems, and booking engines into executive dashboards tracking RevPAR, occupancy rates, and ancillary spend across all properties.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Unified BI dashboards tracking core metrics (RevPAR, ADR, Occupancy) across a multi-property portfolio</li>
                            <li>Consolidated view of direct booking vs. OTA performance to measure marketing ROI</li>
                            <li>Real-time tracking of on-property ancillary spend (F&B, Spa) by guest segment</li>
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
                            <small>01 · Portfolio Visibility</small>
                            <strong>See the performance of every hotel in the group on a single screen.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Channel Optimization</small>
                            <strong>Instantly understand which digital campaigns are actually driving direct bookings.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Revenue Management</small>
                            <strong>Identify pacing trends early to adjust pricing and yield strategies.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Automated Reporting</small>
                            <strong>Eliminate the days spent manually merging PMS exports in Excel.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When hospitality data is siloed</p>
                        <p>You can't manage a hotel group looking at fragmented PMS reports.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Data silos hide true property profitability.</h2>
                        <p>Hotel executives are forced to make strategic decisions with fragmented data. If room revenue is in the PMS, restaurant revenue is in the POS, and marketing spend is in Google Ads, calculating the true profitability of a specific guest segment or property is nearly impossible.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Blind Marketing</h3>
                                <p>You spend thousands on digital ads but can't accurately trace which campaigns resulted in completed stays.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Fragmented Guest Value</h3>
                                <p>Management doesn't know that a guest who booked a cheap room via an OTA actually spent $500 in the restaurant.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Reporting Fatigue</h3>
                                <p>Revenue managers spend weeks manually extracting and merging data from different property systems to build the monthly board pack.</p>
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
                                <h2>Command centers for hotel executives.</h2>
                            </div>
                            <p>We engineer data aggregation platforms that give leadership the real-time insights needed to optimize yield and operations.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Executive Scorecards</h3>
                                <p>High-level visual dashboards tracking KPIs like RevPAR, Gross Operating Profit per Available Room (GOPPAR), and direct booking share.</p>
                                <div className="deliverable-tags"><small>BI</small><small>Dashboards</small><small>Metrics</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Data Warehousing</h3>
                                <p>Pipelines that extract data from disparate property systems (Opera, Symphony POS) and normalize it in a cloud data warehouse.</p>
                                <div className="deliverable-tags"><small>ETL</small><small>Cloud</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Ancillary Spend Analytics</h3>
                                <p>Visual tools to track 'Total Guest Value' by combining room rate data with F&B and spa consumption.</p>
                                <div className="deliverable-tags"><small>Analytics</small><small>Data</small><small>Finance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Reporting</h3>
                                <p>Dynamic engines to instantly generate branded PDF or email summaries for general managers and ownership groups.</p>
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
                            <p className="eyebrow">Featured Hospitality Platform</p>
                            <h2>Elevating the digital guest journey.</h2>
                        </div>
                        <p>See how we helped a luxury hotel group redesign their entire digital footprint, migrating to a headless architecture that seamlessly blended immersive property storytelling with a lightning-fast custom booking engine.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Hospitality Tech</span>
                                <span>Direct Bookings</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/hospitality-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Reducing reliance on OTAs.</h2>
                                <p>We developed a custom frontend that integrates directly with their Property Management System (PMS). By removing the friction of a clunky legacy booking widget and replacing it with a tailored React experience, direct bookings increased by 42%.</p>
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
                        <h2 id="faq-title">Common questions about hospitality tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with our Property Management System (PMS)?</summary>
                            <p>We build secure API middleware to connect your headless frontend directly to industry-standard PMS platforms like Opera (Oracle), Cloudbeds, or Mews. This ensures live availability, real-time pricing, and seamless reservation injection.</p>
                        </details>
                        <details>
                            <summary>Can you build custom booking engines instead of using widgets?</summary>
                            <p>Yes. Legacy booking widgets often break the brand experience and hurt conversions. We build fully custom React-based booking flows that look and feel like part of your website, while pulling data from your backend systems via API.</p>
                        </details>
                        <details>
                            <summary>How do you ensure the website is fast despite heavy imagery and video?</summary>
                            <p>We use Next.js and advanced media optimization techniques (lazy loading, next-gen formats, edge caching). This allows us to build visually immersive, video-heavy hotel sites that still load in under a second and rank highly on Google.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other hospitality capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/property-and-experience-websites/"><div><small>Discovery</small><h3>Property Websites</h3><p>Immersive digital destinations.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/availability-and-direct-booking/"><div><small>Revenue</small><h3>Direct Booking</h3><p>Maximize high-margin reservations.</p></div><b>Explore booking ↗</b></a>
                        <a className="related-card" href="/services/guest-and-concierge-portals/"><div><small>Service</small><h3>Guest Portals</h3><p>Elevate the on-property experience.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/offers-dining-and-events/"><div><small>Ancillary</small><h3>Dining & Events</h3><p>Drive revenue across the property.</p></div><b>Explore ancillary ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your hospitality <br />and tourism operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From stunning headless property websites to custom PMS-integrated booking engines and digital concierge portals, we build software that drives direct revenue and elevates the guest experience.</p>
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
