import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/mission-operations-dashboards/" },
  title: "Space Mission Operations Dashboards | Hyperlink Tech Solutions",
  description: "We build real-time command and control dashboards that aggregate space telemetry, orbital mechanics, and subsystem health for modern mission operations centers.",
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
                    <strong>Flight Dynamics & Telemetry</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Constellation Dashboards</div>
                        <p className="eyebrow">Flight Dynamics & Telemetry</p>
                        <h1 id="service-title">Total visibility over your constellation in orbit.</h1>
                        <p className="hero-lead">We build real-time command and control dashboards that aggregate space telemetry, orbital mechanics, and subsystem health for modern mission operations centers.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Real-time visualization of satellite telemetry and subsystem health</li>
                            <li>Interactive 3D orbital tracking and ground track maps</li>
                            <li>Automated alerting for anomalies and conjunction events</li>
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
                            <small>01 · Telemetry Visualization</small>
                            <strong>Render thousands of data points per second with zero latency.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · 3D Orbital Tracking</small>
                            <strong>Visualize satellite position, attitude, and ground tracks in real-time.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Anomaly Alerting</small>
                            <strong>Automated rules engine to flag out-of-bounds telemetry instantly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Operator Efficiency</small>
                            <strong>Replace clunky legacy software with intuitive, dark-mode interfaces.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When operators are blind</p>
                        <p>A constellation is only as good as the software flying it.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Modern constellations require modern interfaces.</h2>
                        <p>As companies scale from single satellites to mega-constellations, legacy Mission Control software breaks down. Operators are overwhelmed by data and hindered by archaic user interfaces.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Data Overload</h3>
                                <p>Operators have to look at six different monitors of raw text to understand the health of a single satellite.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Legacy Clunkiness</h3>
                                <p>Outdated Java-based client software is slow, prone to crashing, and incredibly difficult to train new operators on.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Alert Fatigue</h3>
                                <p>Poorly configured alarm systems constantly trigger false positives, causing operators to ignore critical warnings.</p>
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
                                <h2>Next-generation Mission Control.</h2>
                            </div>
                            <p>We build web-based command and control interfaces that are fast, intuitive, and designed specifically for the cognitive load of flight operators.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Telemetry Dashboards</h3>
                                <p>High-performance grids and charts utilizing WebSockets to plot live subsystem metrics in real-time.</p>
                                <div className="deliverable-tags"><small>WebSockets</small><small>Charts</small><small>Real-time</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>3D Spatial Visualization</h3>
                                <p>Integration of CesiumJS or Three.js to render live 3D globes with accurate satellite orbits and attitude vectors.</p>
                                <div className="deliverable-tags"><small>CesiumJS</small><small>WebGL</small><small>3D</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Smart Alerting Engine</h3>
                                <p>Configurable logic systems that group, prioritize, and route anomalies to the correct subsystem engineer.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Alerts</small><small>Routing</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Dark-Mode UX/UI</h3>
                                <p>Specialized, high-contrast interface design tailored for dimly lit Mission Operations Centers (MOCs).</p>
                                <div className="deliverable-tags"><small>UX/UI</small><small>Accessibility</small><small>Design</small></div>
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
