import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/project-and-capability-websites/" },
  title: "Project & Capability Websites | Hyperlink Tech Solutions",
  description: "We design high-performance websites for renewable energy developers, utility providers, and infrastructure funds to communicate scale, ESG commitments, and technical expertise.",
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
                    <strong>Energy & Infrastructure</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Corporate Energy Websites</div>
                        <p className="eyebrow">Energy & Infrastructure</p>
                        <h1 id="service-title">Build public trust and showcase energy capabilities.</h1>
                        <p className="hero-lead">We design high-performance websites for renewable energy developers, utility providers, and infrastructure funds to communicate scale, ESG commitments, and technical expertise.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Authoritative web design tailored for government, enterprise, and community stakeholders</li>
                            <li>Interactive asset maps showing live projects, grid connections, and generation stats</li>
                            <li>Dedicated community consultation portals for major infrastructure developments</li>
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
                            <small>01 · Community Trust</small>
                            <strong>Communicate project impact clearly during the planning phase.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Investor Appeal</small>
                            <strong>Showcase your portfolio of operational and pipeline assets.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · ESG Clarity</small>
                            <strong>Highlight your commitment to net-zero and sustainability metrics.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · High Performance</small>
                            <strong>Fast-loading architecture that handles 4K drone footage seamlessly.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When public perception lags</p>
                        <p>You are building the future of the grid, but your website looks like it's from 2010.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Major infrastructure requires major digital authority.</h2>
                        <p>Renewable energy and infrastructure projects face immense scrutiny from local communities, government regulators, and institutional investors. A fragmented, outdated website breeds distrust and fails to communicate the technical sophistication of your operations.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Community Pushback</h3>
                                <p>NIMBY groups control the narrative because your project information is buried in unreadable PDFs.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Hidden Scale</h3>
                                <p>Investors can't easily visualize the geographical spread and total MW capacity of your portfolio.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Rigid CMS</h3>
                                <p>Your communications team has to hire a developer just to publish a press release or update an ESG metric.</p>
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
                                <h2>Digital foundations for energy leaders.</h2>
                            </div>
                            <p>We build corporate platforms that project stability, scale, and technical excellence.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Interactive Asset Maps</h3>
                                <p>Custom Mapbox integrations that allow users to explore your solar, wind, and battery assets globally.</p>
                                <div className="deliverable-tags"><small>Mapbox</small><small>DataViz</small><small>React</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Community Consultation Hubs</h3>
                                <p>Dedicated micro-sites for specific wind or solar farm developments, complete with feedback forms and timelines.</p>
                                <div className="deliverable-tags"><small>Hubs</small><small>Forms</small><small>Trust</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Dynamic ESG Reporting</h3>
                                <p>Visual blocks that pull live data (e.g., CO2 offset, MW generated) directly into your website.</p>
                                <div className="deliverable-tags"><small>ESG</small><small>APIs</small><small>Metrics</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Headless CMS Architecture</h3>
                                <p>Lightning-fast Next.js builds paired with Sanity or Contentful, empowering your comms team to publish instantly.</p>
                                <div className="deliverable-tags"><small>Next.js</small><small>Sanity</small><small>Speed</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Energy Platform</p>
                            <h2>Powering the transition.</h2>
                        </div>
                        <p>See how we helped a national renewable energy developer digitize their site assessment workflows and build investor-facing ESG dashboards, accelerating capital deployment.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Energy Tech</span>
                                <span>SCADA Integration & Dashboards</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/energy-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Data-driven infrastructure.</h2>
                                <p>We developed a custom web application that ingests live generation data from solar farms, calculates real-time ESG metrics, and presents them in a secure portal for institutional investors.</p>
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
                        <h2 id="faq-title">Common questions about energy & utility tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate with our existing SCADA or BMS systems?</summary>
                            <p>Yes. We regularly build middleware (using Node.js or Python) that securely extracts telemetry data from legacy SCADA systems, normalizes it, and pipes it into modern cloud data warehouses like AWS Redshift or Snowflake for visualization.</p>
                        </details>
                        <details>
                            <summary>Do your field apps work for technicians in remote wind farms?</summary>
                            <p>Absolutely. We specialize in Offline-First Progressive Web Apps (PWAs) and React Native mobile apps. Technicians can log maintenance data, capture photos, and run diagnostic checklists offline; the app will automatically sync payloads once a connection is re-established.</p>
                        </details>
                        <details>
                            <summary>How do you ensure data security for investor portals?</summary>
                            <p>We implement enterprise-grade security protocols, including SOC2 compliant AWS architecture, strict Role-Based Access Control (RBAC) via Auth0 or Okta, and end-to-end encryption to ensure sensitive financial and PPA data is totally secure.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other energy capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/project-and-capability-websites/"><div><small>Marketing</small><h3>Capability Websites</h3><p>Build public trust and showcase energy capabilities.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/assessments-and-proposal-workflows/"><div><small>Sales</small><h3>Proposal Workflows</h3><p>Digitize feasibility studies and solar proposals.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/customer-and-investor-portals/"><div><small>Stakeholders</small><h3>Investor Portals</h3><p>Secure environments for off-takers and investors.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/asset-and-maintenance-workflows/"><div><small>Operations</small><h3>Maintenance Apps</h3><p>Keep critical infrastructure online and compliant.</p></div><b>Explore apps ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Digitize your energy <br />infrastructure and operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From automating field maintenance to providing investors with live generation data, we build software that powers the transition.</p>
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
