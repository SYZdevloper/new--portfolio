import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/aviation-operations-dashboards/" },
  title: "Aviation Operations Dashboards | Hyperlink Tech Solutions",
  description: "We develop real-time operations dashboards that aggregate telematics, weather, and scheduling data to keep airlines and ground handlers running efficiently.",
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
                    <strong>Flight & Ground Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Aviation Operations Platforms</div>
                        <p className="eyebrow">Flight & Ground Operations</p>
                        <h1 id="service-title">Total visibility over flight operations and ground handling.</h1>
                        <p className="hero-lead">We develop real-time operations dashboards that aggregate telematics, weather, and scheduling data to keep airlines and ground handlers running efficiently.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Real-time tracking of turnaround (Turn) milestones</li>
                            <li>Integration with ACARS and live weather feeds</li>
                            <li>Mobile tools for baggage handlers and ramp agents</li>
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
                            <small>01 · Live Turn Tracking</small>
                            <strong>Monitor fueling, catering, and cleaning in real-time.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Turnarounds</small>
                            <strong>Identify ground bottlenecks instantly to prevent delays.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Unified Data</small>
                            <strong>Combine radar, weather, and schedule data on one screen.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Ramp Mobility</small>
                            <strong>Equip ground crews with ruggedized dispatch tablets.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When operations lag</p>
                        <p>A 5-minute delay on the ground compounds all day.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Aviation operations require split-second visibility.</h2>
                        <p>When the turnaround process relies on radios and whiteboards, operations centers cannot react to weather disruptions or ground handling delays until it is too late.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Information Silos</h3>
                                <p>The fueler doesn't know the caterer is delayed, leading to ramp congestion and wasted time.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Reactive Dispatch</h3>
                                <p>Operations centers only find out about a delay after the scheduled departure time has passed.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Data Overload</h3>
                                <p>Dispatchers have to look at six different monitors to understand the status of a single flight.</p>
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
                                <h2>Real-time aviation command centers.</h2>
                            </div>
                            <p>We build 'single pane of glass' dashboards that ingest massive amounts of live data to give dispatchers total situational awareness.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Turnaround Dashboards</h3>
                                <p>Gantt-style visualizations tracking every ground handling milestone against the target off-block time.</p>
                                <div className="deliverable-tags"><small>Live Data</small><small>Gantt</small><small>Metrics</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Ramp Apps</h3>
                                <p>High-contrast, large-button mobile interfaces designed for ground crews wearing gloves.</p>
                                <div className="deliverable-tags"><small>Rugged</small><small>Mobile</small><small>UX/UI</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Data Aggregation</h3>
                                <p>Middleware that ingests live ACARS data, radar feeds, and terminal API data into one unified stream.</p>
                                <div className="deliverable-tags"><small>ACARS</small><small>APIs</small><small>Real-time</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Disruption Alerts</h3>
                                <p>Algorithmic alerts that highlight flights at risk of missing their slot due to cascading delays.</p>
                                <div className="deliverable-tags"><small>Algorithms</small><small>Alerts</small><small>Logic</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Aviation Build</p>
                            <h2>Modernizing aerospace digital infrastructure.</h2>
                        </div>
                        <p>See how we helped an aviation leader transition from legacy spreadsheets to a secure, cloud-native operational platform.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Aviation Software Platform</span>
                                <span>Security + Compliance First</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/aviation-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>High stakes, high performance.</h2>
                                <p>We completely re-architected the backend infrastructure to meet strict regulatory standards while delivering an intuitive frontend experience for engineers and operators.</p>
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
                        <h2 id="faq-title">Common questions about our aviation software.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle strict compliance requirements (FAA/EASA)?</summary>
                            <p>Our platforms are designed from day one with compliance in mind. We implement immutable audit logs, strict Role-Based Access Control (RBAC), and SOC 2 compliant infrastructure to ensure all actions are traceable and secure.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with legacy ERPs like SAP or AMOS?</summary>
                            <p>Yes. We build secure middleware layers that connect modern, responsive frontends to deeply entrenched aviation MRO and ERP systems without disrupting core operations.</p>
                        </details>
                        <details>
                            <summary>What is your approach to data security in aerospace?</summary>
                            <p>We utilize enterprise-grade encryption (AES-256 at rest, TLS 1.3 in transit), strict network isolation, and regular third-party penetration testing to protect highly sensitive intellectual property and operational data.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other aviation capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/products-and-capability-platforms/"><div><small>Discovery</small><h3>Capability Platforms</h3><p>Showcase complex aerospace engineering capabilities.</p></div><b>Explore platforms ↗</b></a>
                        <a className="related-card" href="/services/maintenance-and-asset-workflows/"><div><small>MRO</small><h3>Maintenance Workflows</h3><p>Streamline aircraft maintenance and asset tracking.</p></div><b>Explore maintenance ↗</b></a>
                        <a className="related-card" href="/services/training-and-compliance-portals/"><div><small>Compliance</small><h3>Training Portals</h3><p>Digitize aviation training and regulatory compliance.</p></div><b>Explore training ↗</b></a>
                        <a className="related-card" href="/services/aviation-operations-dashboards/"><div><small>Operations</small><h3>Operations Dashboards</h3><p>Total visibility over flight operations and ground handling.</p></div><b>Explore operations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Take your aviation software <br />to new heights. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build platforms that ensure compliance, streamline operations, and modernize the aerospace experience? Let's discuss your roadmap.</p>
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
