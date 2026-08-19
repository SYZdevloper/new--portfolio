import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/location-and-guest-dashboards/" },
  title: "Location & Guest Dashboards | Hyperlink Tech Solutions",
  description: "We aggregate data from your POS, reservation system, and delivery platforms into executive dashboards tracking average check size, table turn times, and location profitability.",
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
                        <h1 id="service-title">Visibility across the entire restaurant group.</h1>
                        <p className="hero-lead">We aggregate data from your POS, reservation system, and delivery platforms into executive dashboards tracking average check size, table turn times, and location profitability.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Unified BI dashboards tracking core metrics (RevPASH, Check Average, Ticket Times) across a multi-unit group</li>
                            <li>Consolidated view of first-party direct ordering vs. third-party delivery performance</li>
                            <li>Real-time tracking of labor costs against forecasted sales volume</li>
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
                            <small>01 · Group Visibility</small>
                            <strong>See the performance of every restaurant in the group on a single screen.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Channel Optimization</small>
                            <strong>Instantly understand how much margin you are losing to third-party delivery apps this week.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Menu Engineering</small>
                            <strong>Identify highly profitable items versus 'dogs' to optimize the menu across all locations.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Automated Reporting</small>
                            <strong>Eliminate the days spent manually merging POS exports in Excel.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When restaurant data is siloed</p>
                        <p>You can't manage a 20-unit group looking at fragmented POS reports.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Data silos hide true location profitability.</h2>
                        <p>Restaurant executives are forced to make strategic decisions with fragmented data. If dine-in revenue is in Toast, delivery revenue is in UberEats, and labor costs are in 7shifts, calculating the true profitability of a specific location or menu item is nearly impossible.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Hidden Margin Erosion</h3>
                                <p>Management doesn't realize that a specific location is actually losing money on weekends because labor costs and delivery fees spiked.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Blind Menu Planning</h3>
                                <p>You introduce a new item but can't accurately trace if it cannibalized sales of higher-margin dishes.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Reporting Fatigue</h3>
                                <p>Operations managers spend hours manually extracting and merging data from different regional systems to build the weekly packet.</p>
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
                                <h2>Command centers for restaurant executives.</h2>
                            </div>
                            <p>We engineer data aggregation platforms that give leadership the real-time insights needed to optimize yield and operations.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Executive Scorecards</h3>
                                <p>High-level visual dashboards tracking KPIs like Prime Cost, Sales per Labor Hour, and overall capacity utilization.</p>
                                <div className="deliverable-tags"><small>BI</small><small>Dashboards</small><small>Metrics</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Data Warehousing</h3>
                                <p>Pipelines that extract data from disparate property systems (POS, Labor, Inventory) and normalize it in a cloud data warehouse.</p>
                                <div className="deliverable-tags"><small>ETL</small><small>Cloud</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Delivery Profitability Analytics</h3>
                                <p>Visual tools to track true profitability by subtracting specific third-party commissions from gross channel sales.</p>
                                <div className="deliverable-tags"><small>Analytics</small><small>Data</small><small>Finance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Reporting</h3>
                                <p>Dynamic engines to instantly generate branded PDF or email summaries for regional managers and ownership groups.</p>
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
                            <p className="eyebrow">Featured F&B Platform</p>
                            <h2>Owning the digital dining experience.</h2>
                        </div>
                        <p>See how we helped a national restaurant group migrate off third-party delivery apps by building a custom ordering engine that integrated directly with their Toast POS, increasing direct revenue and saving millions in commissions.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Restaurant Tech</span>
                                <span>POS Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/restaurant-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Direct revenue without the fees.</h2>
                                <p>We developed a custom frontend ordering app that syncs menus, modifiers, and 86'd items live from the POS. When a guest orders, the ticket fires straight to the kitchen display system (KDS) exactly as if they were sitting in the dining room.</p>
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
                        <h2 id="faq-title">Common questions about restaurant tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate online ordering with our POS?</summary>
                            <p>We build API middleware that connects the custom web frontend directly to modern POS systems like Toast, Square, or Lightspeed. This ensures that when an item is marked 'sold out' in the kitchen, it instantly disappears from the website.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with reservation systems like SevenRooms or Resy?</summary>
                            <p>Yes. Instead of using generic widgets that take users off-brand, we can build custom booking forms using the APIs of major reservation platforms. This keeps the user on your domain and improves conversion.</p>
                        </details>
                        <details>
                            <summary>How do you manage menus for a group with 20 different locations?</summary>
                            <p>We implement a headless CMS (like Sanity) connected to a geolocation engine. The system automatically detects the user's nearest restaurant and loads the specific menu and pricing for that location, preventing 'wrong store' orders.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other restaurant capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/brand-menu-and-location-websites/"><div><small>Discovery</small><h3>Brand & Menus</h3><p>Drive foot traffic digitally.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/reservations-and-waitlists/"><div><small>Acquisition</small><h3>Reservations</h3><p>Maximize table utilization.</p></div><b>Explore bookings ↗</b></a>
                        <a className="related-card" href="/services/ordering-and-delivery/"><div><small>Revenue</small><h3>Direct Ordering</h3><p>Own off-premise dining.</p></div><b>Explore ordering ↗</b></a>
                        <a className="related-card" href="/services/accounts-loyalty-and-catering/"><div><small>Retention</small><h3>Loyalty & Catering</h3><p>Turn diners into regulars.</p></div><b>Explore loyalty ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your restaurant <br />and hospitality operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From immersive brand sites to commission-free POS ordering engines and unified loyalty portals, we build software that drives direct revenue for multi-location groups.</p>
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
