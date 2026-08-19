import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/assessments-and-proposal-workflows/" },
  title: "Assessments & Proposal Workflows | Hyperlink Tech Solutions",
  description: "We build custom software that automates site assessments, calculates ROI for commercial solar/battery installations, and generates dynamic digital proposals.",
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
                    <strong>Commercial & Residential Sales</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Proposal Engines</div>
                        <p className="eyebrow">Commercial & Residential Sales</p>
                        <h1 id="service-title">Digitize feasibility studies and solar proposals.</h1>
                        <p className="hero-lead">We build custom software that automates site assessments, calculates ROI for commercial solar/battery installations, and generates dynamic digital proposals.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom algorithms to calculate solar yield, battery storage requirements, and ROI</li>
                            <li>Tablet apps for sales engineers to conduct rapid on-site roof and electrical assessments</li>
                            <li>Automated generation of interactive, web-based commercial proposals</li>
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
                            <small>01 · Faster Quoting</small>
                            <strong>Reduce commercial solar proposal generation from days to minutes.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Accurate Yields</small>
                            <strong>Integrate with API weather and irradiance data for precise ROI.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Digital Sign-offs</small>
                            <strong>Get Power Purchase Agreements (PPAs) signed directly in the browser.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · CRM Sync</small>
                            <strong>Automatically push closed-won deals into Salesforce or HubSpot.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When quoting is a bottleneck</p>
                        <p>Engineering shouldn't be spending hours copying data into Excel.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Manual proposals limit your sales velocity.</h2>
                        <p>Commercial solar, HVAC, and energy efficiency retrofits require complex calculations. If your sales engineers are manually pulling satellite imagery, checking tariff rates, and building Excel models for every quote, your cost of acquisition is far too high.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Human Error</h3>
                                <p>A typo in an Excel formula results in a commercial proposal that underestimates the payback period by two years.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Slow Turnarounds</h3>
                                <p>It takes a week to get a quote to a client, and a competitor wins the deal in the meantime.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Static PDFs</h3>
                                <p>You send a 30-page PDF proposal and have no idea if the CFO ever actually read it.</p>
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
                                <h2>Automated energy sales engines.</h2>
                            </div>
                            <p>We engineer software that turns complex energy calculations into beautiful, instantly generated proposals.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Site Assessment Apps</h3>
                                <p>Tablet-optimized forms for engineers to log switchboard photos, roof pitch, and shading details on site.</p>
                                <div className="deliverable-tags"><small>Mobile</small><small>Forms</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Yield & ROI Calculators</h3>
                                <p>Custom backend logic (Node/Python) that calculates financial payback models based on local grid tariffs.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Algorithms</small><small>Math</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Interactive Digital Proposals</h3>
                                <p>Web-based quotes where clients can toggle between cash-purchase or PPA options and see ROI change in real-time.</p>
                                <div className="deliverable-tags"><small>React</small><small>Dynamic</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Contract Generation</h3>
                                <p>Systems that automatically populate Docusign contracts the moment a client clicks 'Accept'.</p>
                                <div className="deliverable-tags"><small>E-Sign</small><small>APIs</small><small>Legal</small></div>
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
