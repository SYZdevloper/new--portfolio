import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/data-product-portals/" },
  title: "Earth Observation & Data Product Portals | Hyperlink Tech Solutions",
  description: "We build high-performance data portals that ingest massive Earth observation and satellite telemetry datasets, allowing customers to easily search, purchase, and consume spatial data.",
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
                    <strong>Space Data Monetization</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Space Data Portals</div>
                        <p className="eyebrow">Space Data Monetization</p>
                        <h1 id="service-title">Turn raw telemetry into actionable data products.</h1>
                        <p className="hero-lead">We build high-performance data portals that ingest massive Earth observation and satellite telemetry datasets, allowing customers to easily search, purchase, and consume spatial data.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Geospatial search interfaces for Earth Observation (EO) imagery</li>
                            <li>Cloud-native pipelines capable of handling terabytes of downlink</li>
                            <li>Automated subscription billing for continuous data feeds</li>
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
                            <small>01 · Spatial Search</small>
                            <strong>Find imagery instantly by drawing polygons on a map.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Cloud Native</small>
                            <strong>Process massive geospatial files directly in the browser.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · API Monetization</small>
                            <strong>Allow enterprise clients to ingest your data programmatically.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Rapid Delivery</small>
                            <strong>Reduce the time from satellite downlink to customer delivery.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When data sits idle</p>
                        <p>Raw satellite data is useless if customers can't find it.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Data is the new oil, but only if you can refine it.</h2>
                        <p>Earth Observation and IoT satellite operators generate terabytes of data daily. Without a fast, searchable, and intuitive customer portal, this valuable data remains stranded in cold storage.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Clunky Interfaces</h3>
                                <p>Customers struggle to search through archives using outdated, slow mapping interfaces that crash on large datasets.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Manual Delivery</h3>
                                <p>Data operations teams manually zip and FTP massive imagery files to clients, wasting hours of engineering time.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Complex Billing</h3>
                                <p>Inability to implement flexible, API-based usage billing prevents scaling to enterprise software customers.</p>
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
                                <h2>High-performance Earth data storefronts.</h2>
                            </div>
                            <p>We build lightning-fast geospatial web applications designed specifically to search, visualize, and distribute satellite data.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Geospatial Search</h3>
                                <p>Interactive maps (Mapbox/Cesium) allowing users to search archives by bounding box, cloud cover, and date.</p>
                                <div className="deliverable-tags"><small>WebGL</small><small>PostGIS</small><small>Search</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Data Visualization</h3>
                                <p>In-browser rendering of massive GeoTIFFs or SAR data using optimized tiling servers.</p>
                                <div className="deliverable-tags"><small>Visuals</small><small>Tiling</small><small>Performance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>API Gateways</h3>
                                <p>Secure, rate-limited Developer APIs allowing B2B customers to pull data products directly into their own systems.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Auth</small><small>B2B</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Subscription Billing</h3>
                                <p>Stripe integration for metered usage billing, tier upgrades, and automated monthly invoicing.</p>
                                <div className="deliverable-tags"><small>Stripe</small><small>Billing</small><small>SaaS</small></div>
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
