import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/branch-fleet-and-operations/" },
  title: "Branch, Fleet & Operations Dashboards | Hyperlink Tech Solutions",
  description: "We build custom operational software to manage branch logistics, fleet movements, inventory intake, and staff coordination.",
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
                    <strong>Dealership & Rental Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Automotive Operations Software</div>
                        <p className="eyebrow">Dealership & Rental Operations</p>
                        <h1 id="service-title">Run your automotive operations from one dashboard.</h1>
                        <p className="hero-lead">We build custom operational software to manage branch logistics, fleet movements, inventory intake, and staff coordination.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Centralized fleet movement and logistics tracking</li>
                            <li>Automated vehicle intake and reconditioning workflows</li>
                            <li>Cross-branch performance analytics and KPI tracking</li>
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
                            <small>01 · Logistics Control</small>
                            <strong>Track the exact location and status of every asset across branches.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Recon</small>
                            <strong>Digitize the reconditioning process to get cars on the lot faster.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Staff Efficiency</small>
                            <strong>Eliminate clipboards, spreadsheets, and manual data entry.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Unified Data</small>
                            <strong>Bring DMS, CRM, and accounting data into one operational view.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When operations scale</p>
                        <p>Spreadsheets cannot manage a multi-branch network.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Hidden inefficiencies cost millions.</h2>
                        <p>As dealer groups and rental networks grow, operational complexity skyrockets. Relying on disconnected legacy tools and manual tracking leads to lost assets and wasted time.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Slow Reconditioning</h3>
                                <p>Vehicles sit idle for days because the service bay, detailer, and photographer aren't communicating.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Lost Inventory</h3>
                                <p>Constant confusion over which branch holds a specific vehicle or loaner car.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Data Silos</h3>
                                <p>General Managers have to pull reports from five different systems to understand daily performance.</p>
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
                                <h2>Custom back-office platforms.</h2>
                            </div>
                            <p>We architect secure, scalable internal tools that streamline workflows and provide total operational visibility.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Fleet Tracking</h3>
                                <p>Interactive map and list interfaces tracking vehicle statuses, locations, and scheduled movements.</p>
                                <div className="deliverable-tags"><small>Logistics</small><small>Maps</small><small>Status</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Workflow Automation</h3>
                                <p>Digital Kanban boards for the reconditioning pipeline, automatically notifying the next department.</p>
                                <div className="deliverable-tags"><small>Kanban</small><small>Alerts</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Role-based Dashboards</h3>
                                <p>Tailored analytics views for GMs, Sales Managers, and Service Directors based on their specific KPIs.</p>
                                <div className="deliverable-tags"><small>RBAC</small><small>Analytics</small><small>Dashboards</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>System Integration</h3>
                                <p>Custom middleware connecting your DMS, accounting software, and HR tools into a single pane of glass.</p>
                                <div className="deliverable-tags"><small>Middleware</small><small>APIs</small><small>Integration</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Automotive Build</p>
                            <h2>Transforming the digital automotive journey.</h2>
                        </div>
                        <p>See how we modernized a leading network's digital presence to increase conversion rates and operational efficiency.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Digital Automotive Platform</span>
                                <span>UX/UI + Custom Engineering</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/automotive-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From friction to fast lanes.</h2>
                                <p>We completely re-architected the customer journey and backend operational software, resulting in a cohesive experience that bridges the gap between digital discovery and physical fulfillment.</p>
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
                        <h2 id="faq-title">Common questions about our automotive platforms.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Do you integrate with existing Dealer Management Systems (DMS)?</summary>
                            <p>Yes. We have extensive experience integrating with leading DMS and CRM platforms like CDK Global, Reynolds and Reynolds, Salesforce, and custom legacy systems.</p>
                        </details>
                        <details>
                            <summary>How long does a typical build take?</summary>
                            <p>Most enterprise automotive projects range from 3 to 6 months, depending on the complexity of legacy integrations and custom workflow requirements.</p>
                        </details>
                        <details>
                            <summary>Can you handle inventory data feeds from multiple branches?</summary>
                            <p>Absolutely. We build robust data ingestion pipelines that aggregate, sanitize, and normalize inventory data across multiple physical locations into a single, unified search experience.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other automotive capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/leads-appointments-and-sales/"><div><small>Sales</small><h3>Leads & Appointments</h3><p>Turn browsing into test drives and closed deals.</p></div><b>Explore sales ↗</b></a>
                        <a className="related-card" href="/services/rental-subscription-and-booking/"><div><small>Mobility</small><h3>Rental & Booking</h3><p>Powering flexible mobility and subscription software.</p></div><b>Explore booking ↗</b></a>
                        <a className="related-card" href="/services/service-and-workshop-experiences/"><div><small>Aftersales</small><h3>Service Portals</h3><p>Digitize the vehicle service and maintenance journey.</p></div><b>Explore service ↗</b></a>
                        <a className="related-card" href="/services/branch-fleet-and-operations/"><div><small>Operations</small><h3>Branch & Fleet</h3><p>Run your automotive operations from one dashboard.</p></div><b>Explore operations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Accelerate your digital <br />automotive journey. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build platforms that drive sales, streamline operations, and modernize the customer experience? Let's discuss your roadmap.</p>
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
