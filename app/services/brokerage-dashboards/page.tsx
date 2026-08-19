import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/brokerage-dashboards/" },
  title: "Brokerage Dashboards | Hyperlink Tech Solutions",
  description: "We build executive dashboards that aggregate agent commissions, office GCI (Gross Commission Income), and market share data into actionable insights.",
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
                    <strong>Real Estate Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Brokerage Analytics</div>
                        <p className="eyebrow">Real Estate Operations</p>
                        <h1 id="service-title">Complete visibility over your brokerage's performance.</h1>
                        <p className="hero-lead">We build executive dashboards that aggregate agent commissions, office GCI (Gross Commission Income), and market share data into actionable insights.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Real-time tracking of GCI, split payouts, and office profitability</li>
                            <li>Leaderboards highlighting top-performing agents and branches</li>
                            <li>Market share analytics tracking competitor listings and sales volume</li>
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
                            <small>01 · Live GCI Tracking</small>
                            <strong>Monitor Gross Commission Income against quarterly targets.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Agent Retention</small>
                            <strong>Identify struggling agents early to offer targeted coaching.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Split Automation</small>
                            <strong>Visualize complex commission tiers and team splits clearly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Market Share</small>
                            <strong>Pull MLS data to see exactly how your office stacks up locally.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When executives fly blind</p>
                        <p>You can't grow a brokerage on gut feeling.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Brokerages run on thin margins and high volume.</h2>
                        <p>Managing the profitability of a multi-office brokerage is impossible if the accounting data, the CRM data, and the MLS data live in completely different systems.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Fragmented Data</h3>
                                <p>The Managing Broker has to export three different CSVs just to calculate the month's net revenue.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Surprise Departures</h3>
                                <p>Top agents leave for competitors because leadership didn't notice their closing volume was dropping.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Manual Splits</h3>
                                <p>Office admins waste days manually calculating complex team commission splits in Excel.</p>
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
                                <h2>Business intelligence for real estate.</h2>
                            </div>
                            <p>We engineer data aggregation platforms that give managing brokers the exact metrics they need to drive profitability.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Executive Scorecards</h3>
                                <p>High-level visualizations of active pipeline, closed volume, and net revenue across all branch locations.</p>
                                <div className="deliverable-tags"><small>BI</small><small>Dashboards</small><small>Metrics</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Agent Analytics</h3>
                                <p>Individual performance views tracking an agent's conversion rates, average days on market, and commission caps.</p>
                                <div className="deliverable-tags"><small>Analytics</small><small>Performance</small><small>Tracking</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Commission Visualizers</h3>
                                <p>Tools that connect to accounting systems to visually map out cap resets and split tiers.</p>
                                <div className="deliverable-tags"><small>Finance</small><small>Logic</small><small>Visuals</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Market Share Tracking</h3>
                                <p>Automated ingestion of MLS data to chart the brokerage's performance against local competitors.</p>
                                <div className="deliverable-tags"><small>Data pipelines</small><small>Scraping</small><small>Graphs</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Agency Build</p>
                            <h2>Empowering agents with digital precision.</h2>
                        </div>
                        <p>See how we helped a national real estate brokerage replace fragmented tools with a unified platform for listings, lead routing, and agent productivity.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Real Estate Software</span>
                                <span>Data Sync + Workflow Automation</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/agency-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Connecting the property lifecycle.</h2>
                                <p>We developed a custom ecosystem that ingests massive listing data feeds, dynamically routes buyer inquiries to top-performing agents, and provides branch managers with total revenue visibility.</p>
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
                        <h2 id="faq-title">Common questions about our PropTech software.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate directly with MLS and RETS feeds?</summary>
                            <p>Yes. We have deep experience building automated ingestion pipelines that pull, normalize, and update massive property data feeds (via RESO Web API, RETS, or direct portal APIs) to ensure your listings are always perfectly synced.</p>
                        </details>
                        <details>
                            <summary>How do you handle complex lead routing algorithms?</summary>
                            <p>We build custom rules engines that route buyer inquiries based on highly specific criteria, such as the property's ZIP code, the agent's current availability, historical conversion rates, and language preferences.</p>
                        </details>
                        <details>
                            <summary>Can you connect our custom portal to Salesforce or Follow Up Boss?</summary>
                            <p>Absolutely. We regularly build robust bidirectional syncs with leading real estate CRMs to ensure that agents never have to manually enter a lead's contact information or property viewing history.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other brokerage capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/listings-and-property-search/"><div><small>Discovery</small><h3>Property Search</h3><p>Connect buyers with their dream homes, faster.</p></div><b>Explore search ↗</b></a>
                        <a className="related-card" href="/services/agent-and-office-experiences/"><div><small>Productivity</small><h3>Agent Experiences</h3><p>Empower your agents to close more deals.</p></div><b>Explore tools ↗</b></a>
                        <a className="related-card" href="/services/owner-and-landlord-portals/"><div><small>Management</small><h3>Landlord Portals</h3><p>Transparent oversight for property owners.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/brokerage-dashboards/"><div><small>Operations</small><h3>Brokerage Dashboards</h3><p>Complete visibility over your brokerage's performance.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Accelerate your real estate <br />brokerage operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build platforms that attract buyers, empower agents, and provide total operational oversight? Let's discuss your roadmap.</p>
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
