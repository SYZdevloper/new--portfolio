import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/mission-collaboration-portals/" },
  title: "Space Mission Collaboration Portals | Hyperlink Tech Solutions",
  description: "We develop highly secure, ITAR-compliant portals that allow international space agencies, prime contractors, and scientific teams to coordinate on joint mission deliverables.",
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
                    <strong>Joint Mission Workflows</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Mission Collaboration Tools</div>
                        <p className="eyebrow">Joint Mission Workflows</p>
                        <h1 id="service-title">Secure collaboration for complex space missions.</h1>
                        <p className="hero-lead">We develop highly secure, ITAR-compliant portals that allow international space agencies, prime contractors, and scientific teams to coordinate on joint mission deliverables.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Zero-trust architecture for secure sharing of sensitive specs</li>
                            <li>Granular Role-Based Access Control (RBAC) across organizations</li>
                            <li>Centralized tracking of mission milestones and engineering reviews</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Mission <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        
                        <div className="proof-item">
                            <small>01 · Zero-Trust Security</small>
                            <strong>Strict data segregation between international partners.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Engineering Reviews</small>
                            <strong>Streamline the Preliminary and Critical Design Review (PDR/CDR) process.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · ITAR Compliance</small>
                            <strong>Ensure export-controlled data never leaves authorized geographic bounds.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Unified Timelines</small>
                            <strong>Keep hundreds of contractors aligned on one central mission schedule.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When partners disconnect</p>
                        <p>Space missions are international. Security is national.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Collaboration without compromising compliance.</h2>
                        <p>Joint space missions involve thousands of engineers across different countries and organizations. Sharing sensitive CAD files, design reviews, and schedules over email creates massive security risks and delays.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Data Spillage</h3>
                                <p>Unsecured email threads containing ITAR-restricted technical data lead to massive compliance breaches.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Version Confusion</h3>
                                <p>Contractors manufacture components using outdated specs because they missed a revision update.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Siloed Schedules</h3>
                                <p>The Prime contractor lacks visibility into the progress of secondary payload developers, threatening the launch date.</p>
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
                                <h2>Fortified mission collaboration.</h2>
                            </div>
                            <p>We build secure web applications that act as the single source of truth for complex, multi-organizational space programs.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Secure Data Rooms</h3>
                                <p>Encrypted document vaults with granular access controls and strict download tracking for CAD and specs.</p>
                                <div className="deliverable-tags"><small>Encryption</small><small>Vaults</small><small>Security</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Design Review Workflows</h3>
                                <p>Structured digital pipelines for submitting, reviewing, and approving engineering data for PDRs and CDRs.</p>
                                <div className="deliverable-tags"><small>Workflows</small><small>Approvals</small><small>Audit</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Identity Management</h3>
                                <p>Integration with federated identity providers to seamlessly authenticate engineers from partner agencies.</p>
                                <div className="deliverable-tags"><small>SSO</small><small>IAM</small><small>Auth</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Mission Dashboards</h3>
                                <p>Aggregated Gantt charts showing the status of every deliverable tied to the launch manifest.</p>
                                <div className="deliverable-tags"><small>Dashboards</small><small>Metrics</small><small>Tracking</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured SpaceTech Build</p>
                            <h2>Bridging the gap between orbit and earth.</h2>
                        </div>
                        <p>See how we helped an Earth Observation satellite operator commercialize their raw telemetry data through a lightning-fast digital storefront.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>SpaceTech Software Platform</span>
                                <span>Big Data + Mission Security</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/spacetech-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Scaling commercial space operations.</h2>
                                <p>We re-architected the customer interface and data ingestion pipelines, turning a complex, manual sales cycle into a frictionless, automated digital product delivery system.</p>
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
                        <h2 id="faq-title">Common questions about our SpaceTech software.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Do you handle ITAR and EAR compliance for space projects?</summary>
                            <p>Yes. We have extensive experience designing secure architecture for the space and defense sectors. We utilize strict zero-trust principles, AWS GovCloud, and granular RBAC to ensure your platforms meet regulatory export control requirements.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with existing ground segment APIs?</summary>
                            <p>Absolutely. We build robust middleware that seamlessly connects modern frontend dashboards with legacy ground station APIs, antenna scheduling systems, and satellite telemetry feeds without causing disruption.</p>
                        </details>
                        <details>
                            <summary>How do you manage massive spatial datasets (Earth Observation)?</summary>
                            <p>We leverage cloud-native big data pipelines, efficient tile-servers, and specialized geospatial databases (like PostGIS) to ensure that massive terabyte-scale satellite imagery can be queried, previewed, and delivered to end-users with minimal latency.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other SpaceTech capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/mission-and-service-platforms/"><div><small>Commercial</small><h3>Service Platforms</h3><p>Commercialize your space capabilities.</p></div><b>Explore platforms ↗</b></a>
                        <a className="related-card" href="/services/data-product-portals/"><div><small>Data</small><h3>Data Product Portals</h3><p>Turn raw telemetry into actionable data products.</p></div><b>Explore data ↗</b></a>
                        <a className="related-card" href="/services/mission-collaboration-portals/"><div><small>Collaboration</small><h3>Collaboration Portals</h3><p>Secure collaboration for complex space missions.</p></div><b>Explore collaboration ↗</b></a>
                        <a className="related-card" href="/services/mission-operations-dashboards/"><div><small>Operations</small><h3>Mission Dashboards</h3><p>Total visibility over your constellation in orbit.</p></div><b>Explore operations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Launch your digital <br />operations to the next level. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build highly secure, high-performance software that commercializes your space capabilities and streamlines mission operations? Let's discuss your trajectory.</p>
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
