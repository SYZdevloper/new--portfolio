import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/tracking-and-exception-visibility/" },
  title: "Tracking & Exception Visibility | Hyperlink Tech Solutions",
  description: "We integrate with global carrier APIs and AIS vessel tracking to provide your customers with live map visibility and automated alerts for rollovers, customs holds, or delays.",
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
                    <strong>Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Tracking Portals</div>
                        <p className="eyebrow">Operations</p>
                        <h1 id="service-title">Real-time visibility across the ocean and air.</h1>
                        <p className="hero-lead">We integrate with global carrier APIs and AIS vessel tracking to provide your customers with live map visibility and automated alerts for rollovers, customs holds, or delays.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Visual track-and-trace dashboards integrating AIS and API data for real-time vessel/flight locations</li>
                            <li>Automated milestone notifications (Gated In, Departed, Customs Cleared) via email or SMS</li>
                            <li>Exception management dashboards highlighting containers at risk of demurrage or detention</li>
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
                            <small>01 · Reduced Support Calls</small>
                            <strong>Customers can see exactly where their container is without emailing your team.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Proactive Problem Solving</small>
                            <strong>Identify customs holds immediately before they result in massive storage fees.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Higher Retention</small>
                            <strong>Shippers demand the same tracking visibility from forwarders that they get from UPS.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Centralized Data</small>
                            <strong>A single source of truth for all historical ETAs, ATDs, and delivery proofs.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When visibility is analog</p>
                        <p>Your operations team shouldn't be a human tracking number.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Lack of visibility frustrates modern importers.</h2>
                        <p>Enterprise supply chains require absolute precision. If an importer has to call your office to find out if a critical container was rolled, or wait for a daily Excel spreadsheet update, they view your operation as outdated and risky.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Tracking Blind Spots</h3>
                                <p>Customers are angry because they receive no updates between a vessel departing China and arriving in LA.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Demurrage Surprises</h3>
                                <p>A container sits at the port for five days because nobody realized customs had flagged it, resulting in massive fees.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Update Fatigue</h3>
                                <p>Your tracking team wastes hours every day manually checking carrier websites and emailing status updates to clients.</p>
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
                                <h2>Comprehensive tracking portals.</h2>
                            </div>
                            <p>We engineer secure dashboards that give your customers complete control over their supply chain data.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Visual Tracking Maps</h3>
                                <p>Integrating with visibility providers (like Project44, FourKites) or direct AIS to show a live map pin of the vessel.</p>
                                <div className="deliverable-tags"><small>Maps</small><small>APIs</small><small>Tracking</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Exception Alerting</h3>
                                <p>Logic engines that scan milestones and flag shipments that have missed their ETA or have been placed on customs hold.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Data</small><small>Operations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Automated Notifications</h3>
                                <p>Transactional email and webhook triggers for key shipment milestones or unavoidable delays.</p>
                                <div className="deliverable-tags"><small>Comms</small><small>Automation</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Supplier Milestones</h3>
                                <p>Interfaces allowing overseas factories to update 'Cargo Ready Dates', providing visibility before the freight even reaches the port.</p>
                                <div className="deliverable-tags"><small>B2B</small><small>Integration</small><small>UX</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Freight Platform</p>
                            <h2>Digitizing the global supply chain.</h2>
                        </div>
                        <p>See how we helped a global freight forwarder build a custom customer portal connected directly to CargoWise, drastically reducing 'Where is my container?' phone calls and automating their multi-modal quoting process.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Freight Forwarding</span>
                                <span>CargoWise Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/freight-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Complete visibility, zero phone calls.</h2>
                                <p>We developed a secure portal where shippers can log in, view live AIS tracking of their ocean freight, submit customs documents, and pay invoices via Stripe—all syncing bidirectionally with the legacy freight management system.</p>
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
                        <h2 id="faq-title">Common questions about freight tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with CargoWise or other legacy forwarding systems?</summary>
                            <p>We build secure API middleware to connect your headless frontend directly to complex Freight Management Systems (FMS). This allows us to pull live tracking data, shipment statuses, and invoices without exposing the core database.</p>
                        </details>
                        <details>
                            <summary>Can you automate ocean and air quoting?</summary>
                            <p>Yes. Global quoting is incredibly complex due to fluctuating bunker adjustments, peak season surcharges, and local drayage. We build custom calculation engines that pull these variables to generate instant, accurate web quotes for shippers.</p>
                        </details>
                        <details>
                            <summary>Do you provide live map tracking for ocean freight?</summary>
                            <p>Yes. We integrate with visibility providers like Project44, FourKites, or direct AIS data streams to plot containers on an interactive global map within the customer portal.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other freight capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/freight-service-websites/"><div><small>Discovery</small><h3>Freight Websites</h3><p>Showcase global reach.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/rate-and-quotation-workflows/"><div><small>Revenue</small><h3>Quoting Workflows</h3><p>Automate complex pricing.</p></div><b>Explore quoting ↗</b></a>
                        <a className="related-card" href="/services/customer-booking-portals/"><div><small>Service</small><h3>Booking Portals</h3><p>Frictionless freight management.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/tracking-and-exception-visibility/"><div><small>Operations</small><h3>Exception Tracking</h3><p>Visibility across ocean & air.</p></div><b>Explore tracking ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your global <br />freight forwarding operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From automated multi-modal quoting engines to real-time ocean tracking portals and CargoWise integrations, we build software that drives efficiency across international borders.</p>
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
