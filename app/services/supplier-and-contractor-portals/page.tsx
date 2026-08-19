import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/supplier-and-contractor-portals/" },
  title: "Supplier & Contractor Portals | Hyperlink Tech Solutions",
  description: "We engineer secure web portals that automate vendor registration, prequalification, and tender management across massive resource projects.",
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
                    <strong>Procurement Tech</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Vendor Portals</div>
                        <p className="eyebrow">Procurement Tech</p>
                        <h1 id="service-title">Secure digital onboarding for the supply chain.</h1>
                        <p className="hero-lead">We engineer secure web portals that automate vendor registration, prequalification, and tender management across massive resource projects.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Automated vendor prequalification and KYC/AML compliance workflows</li>
                            <li>Dynamic document collection for insurances, SWMS, and plant certifications</li>
                            <li>Secure bid submission vaults with strict timestamp auditing</li>
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
                            <small>01 · Faster Onboarding</small>
                            <strong>Reduce contractor approval time from weeks to days.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Compliance Alerts</small>
                            <strong>Automated warnings when a contractor's insurance or ticket is about to expire.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Audit Trails</small>
                            <strong>Immutable records of every bid submission and document upload.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · ERP Sync</small>
                            <strong>Push approved vendors directly into SAP, Pronto, or Mincom.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When procurement is a bottleneck</p>
                        <p>Managing 1,000 contractors via email is a compliance disaster.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Risk mitigation starts at the gate.</h2>
                        <p>A typical mining operation relies on hundreds of specialized subcontractors. Managing their prequalification, safety documentation, and insurances through spreadsheets and email attachments creates massive compliance liabilities and slows down mobilization.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Document Chaos</h3>
                                <p>Procurement managers waste hours digging through emails to find a crane operator's high-risk work license.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Compliance Blindspots</h3>
                                <p>A contractor is mobilized to site despite their public liability insurance having expired last week.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Clunky Tendering</h3>
                                <p>Distributing massive drawing packages and tender documents via expiring Dropbox links frustrates bidders.</p>
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
                                <h2>Secure supply chain gateways.</h2>
                            </div>
                            <p>We engineer procurement platforms that enforce compliance and streamline vendor collaboration.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Vendor KYC Workflows</h3>
                                <p>Step-by-step digital forms for subcontractors to submit company details, financial stability data, and safety records.</p>
                                <div className="deliverable-tags"><small>Forms</small><small>KYC</small><small>Onboarding</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Document Expiry Engines</h3>
                                <p>Automated systems that track expiry dates on uploaded certificates and send warning emails 30 days prior.</p>
                                <div className="deliverable-tags"><small>Alerts</small><small>Cron</small><small>Logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Secure Data Rooms</h3>
                                <p>Encrypted storage vaults where subcontractors can securely download heavy tender packages and CAD models.</p>
                                <div className="deliverable-tags"><small>AWS</small><small>Security</small><small>Storage</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>ERP Middleware</h3>
                                <p>Integration layers that take fully approved vendor data and inject it cleanly into your central financial system.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>SAP</small><small>Integration</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Mining Platform</p>
                            <h2>Digitizing remote operations.</h2>
                        </div>
                        <p>See how we helped a Tier 1 mining contractor replace hundreds of paper forms with an offline-first inspection app, syncing directly to their centralized HSE and operations dashboard.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Resources Tech</span>
                                <span>Field Mobility & Telemetry</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/mining-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Connectivity without connection.</h2>
                                <p>We developed an offline-capable React Native application for operators in the Pilbara, allowing them to log pre-start checks and hazards instantly, restoring critical data flows to the Perth head office.</p>
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
                        <h2 id="faq-title">Common questions about mining & resources tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do field apps work when the mine site has zero cellular coverage?</summary>
                            <p>We build our mobile applications with 'Offline-First' architecture (using technologies like IndexedDB or SQLite). Workers can capture data, annotate photos, and sign forms completely offline. The app stores the encrypted payload locally and automatically syncs to the server the moment the device hits camp Wi-Fi or a cellular network.</p>
                        </details>
                        <details>
                            <summary>Can you integrate web dashboards with SAP, Maximo, or Pronto?</summary>
                            <p>Yes. We frequently develop secure middleware layers that pull operational data from heavy ERP and asset management systems, translating it into lightweight, high-performance web dashboards for executive viewing, without risking the core database.</p>
                        </details>
                        <details>
                            <summary>How secure are your contractor and joint-venture portals?</summary>
                            <p>Security is paramount for resources projects. We implement SOC2 compliant architectures on AWS/Azure, utilizing strict Role-Based Access Control (RBAC) via Auth0/Okta, ensuring external contractors or JV partners can only access the exact documentation cleared for their role.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other resources capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/corporate-and-capability-platforms/"><div><small>Marketing</small><h3>Capability Platforms</h3><p>Project scale, safety, and operational excellence.</p></div><b>Explore platforms ↗</b></a>
                        <a className="related-card" href="/services/supplier-and-contractor-portals/"><div><small>Procurement</small><h3>Contractor Portals</h3><p>Secure digital onboarding for the supply chain.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/asset-inspection-and-maintenance/"><div><small>Site Operations</small><h3>Field Inspections</h3><p>Digitize the pit, the plant, and the port.</p></div><b>Explore field tools ↗</b></a>
                        <a className="related-card" href="/services/operations-and-hse-dashboards/"><div><small>Executive</small><h3>HSE Dashboards</h3><p>Command center visibility for remote sites.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize operations across <br />your resource portfolio. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From digitizing safety checks at the coal face to giving executives live visibility in Perth, we build the software that keeps the resources sector moving.</p>
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
