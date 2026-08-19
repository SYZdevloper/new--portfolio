import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/maintenance-and-asset-workflows/" },
  title: "Maintenance & Asset Workflows for Aviation | Hyperlink Tech Solutions",
  description: "We build secure, compliant workflow platforms that manage maintenance schedules, parts inventory, and digital logbooks for MROs and airlines.",
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
                    <strong>Aviation MRO Software</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">MRO & Asset Workflows</div>
                        <p className="eyebrow">Aviation MRO Software</p>
                        <h1 id="service-title">Streamline aircraft maintenance and asset tracking.</h1>
                        <p className="hero-lead">We build secure, compliant workflow platforms that manage maintenance schedules, parts inventory, and digital logbooks for MROs and airlines.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Digitize paper-heavy aircraft maintenance logs (TechLogs)</li>
                            <li>Automate AOG (Aircraft On Ground) alerts and parts routing</li>
                            <li>Provide technicians with mobile-friendly task cards</li>
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
                            <small>01 · Paperless MRO</small>
                            <strong>Replace clipboards with ruggedized tablet workflows.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · AOG Resolution</small>
                            <strong>Instantly locate and route critical parts to grounded aircraft.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Audit Readiness</small>
                            <strong>Maintain immutable digital records for regulatory audits.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · API Integration</small>
                            <strong>Connect seamlessly with legacy systems like AMOS.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When maintenance stalls</p>
                        <p>Paperwork delays cost airlines thousands per minute.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Aviation maintenance runs on compliance and speed.</h2>
                        <p>MRO (Maintenance, Repair, and Overhaul) facilities are often bogged down by legacy software, manual data entry, and physical paper trails, leading to increased turnaround times and costly AOG situations.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Paper Trails</h3>
                                <p>Mechanics waste hours physically signing off on paper task cards and searching for manuals.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Inventory Blind Spots</h3>
                                <p>Critical rotables are lost in transit or incorrectly tagged, delaying repairs.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Clunky Legacy Software</h3>
                                <p>Technicians avoid using outdated ERP systems because the UX is incredibly frustrating.</p>
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
                                <h2>Modern MRO workflow applications.</h2>
                            </div>
                            <p>We engineer intuitive software that mechanics actually want to use, while maintaining the strict data integrity required by regulators.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Electronic TechLogs</h3>
                                <p>Secure, offline-capable mobile apps for pilots and mechanics to log and sign off on defects.</p>
                                <div className="deliverable-tags"><small>Mobile</small><small>Offline</small><small>E-Sign</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Digital Task Cards</h3>
                                <p>Interactive maintenance instructions with embedded photos, torque specs, and digital sign-offs.</p>
                                <div className="deliverable-tags"><small>Workflows</small><small>UX/UI</small><small>Tablet</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Inventory Tracking</h3>
                                <p>Barcode and RFID integration to track rotables and consumables through the repair lifecycle.</p>
                                <div className="deliverable-tags"><small>RFID</small><small>Scanning</small><small>Logistics</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Legacy Middleware</h3>
                                <p>Custom API layers that bridge modern mobile apps with aging backend systems like AMOS or SAP.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Integration</small><small>Middleware</small></div>
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
