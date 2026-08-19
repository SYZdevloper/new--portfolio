import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/safety-and-technical-resources/" },
  title: "Safety & Technical Resources | Hyperlink Tech Solutions",
  description: "We build secure, searchable repositories for Safety Data Sheets (SDS), Certificates of Analysis (CoA), and technical bulletins, ensuring regulatory compliance and easy customer access.",
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
                    <strong>Compliance</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Resource Centers</div>
                        <p className="eyebrow">Compliance</p>
                        <h1 id="service-title">Digital hubs for SDS and technical data.</h1>
                        <p className="hero-lead">We build secure, searchable repositories for Safety Data Sheets (SDS), Certificates of Analysis (CoA), and technical bulletins, ensuring regulatory compliance and easy customer access.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Automated document generation and retrieval systems for critical compliance paperwork</li>
                            <li>Regional filtering to ensure customers access the correct SDS for their specific jurisdiction (REACH, OSHA)</li>
                            <li>Secure portals for downloading batch-specific Certificates of Analysis (CoA)</li>
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
                            <small>01 · Regulatory Compliance</small>
                            <strong>Ensure customers always have the latest legally required safety data.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Reduced Admin</small>
                            <strong>Stop customer service from spending hours emailing CoAs to clients.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Version Control</small>
                            <strong>Automatically archive old SDS versions while keeping the current one live.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Batch Traceability</small>
                            <strong>Allow customers to enter a lot number and instantly download its CoA.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When compliance is manual</p>
                        <p>Emailing safety documents manually is a massive legal and operational liability.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Document friction slows down the supply chain.</h2>
                        <p>The chemical industry runs on documentation. If a truck arrives at a customer site but the Safety Data Sheet is missing, the load gets rejected. If your customer service team is manually pulling CoAs from a shared drive and emailing them, you are wasting resources and risking compliance failures.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Outdated SDS Usage</h3>
                                <p>A customer relies on an old SDS downloaded two years ago, unaware that the hazard classification recently changed.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>CoA Bottlenecks</h3>
                                <p>Customers cannot receive their shipments because the QA department is backlogged processing manual CoA requests.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Regional Confusion</h3>
                                <p>A European buyer accidentally downloads a US-formatted SDS, leading to compliance issues at their facility.</p>
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
                                <h2>Automated compliance delivery.</h2>
                            </div>
                            <p>We engineer systems that make critical safety and quality documents instantly accessible.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Document Repositories</h3>
                                <p>Searchable, version-controlled databases specifically built to handle thousands of technical PDFs.</p>
                                <div className="deliverable-tags"><small>Database</small><small>Search</small><small>Archiving</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>ERP / LIMS Integration</h3>
                                <p>Middleware that automatically pulls CoAs directly from the Lab Information Management System as soon as a batch is released.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>APIs</small><small>LIMS</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Lot Number Search</h3>
                                <p>Custom interfaces where customers can type in a batch number and retrieve the exact QA documentation for that specific run.</p>
                                <div className="deliverable-tags"><small>UX</small><small>Search</small><small>Compliance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Regional Logic Rules</h3>
                                <p>Systems that detect a user's location or account settings to automatically serve the correct jurisdictional document (e.g., GHS vs. CLP).</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Routing</small><small>Legal</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Chemical Platform</p>
                            <h2>Digitizing bulk formulations.</h2>
                        </div>
                        <p>See how we helped a global specialty chemicals manufacturer build a headless product platform that automatically matches specific polymer formulations to regional SDS compliance requirements.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Chemical Tech</span>
                                <span>B2B Commerce & Compliance</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/chemical-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From laboratory to logistics.</h2>
                                <p>We developed a custom B2B portal that allows distributors to order bulk IBCs, track hazardous freight via IoT integrations, and instantly download batch-specific Certificates of Analysis (CoA) without calling customer service.</p>
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
                        <h2 id="faq-title">Common questions about chemical industry tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle complex regulatory and compliance data?</summary>
                            <p>We build structured databases (often via headless CMS like Sanity) that link products to specific regional regulations (REACH, EPA). This ensures that a technical buyer in Europe automatically sees the correct SDS and compliance documents for their jurisdiction.</p>
                        </details>
                        <details>
                            <summary>Can you integrate B2B ordering portals with legacy ERPs like SAP?</summary>
                            <p>Yes. Chemical supply chains run on complex legacy ERPs. We build secure API middleware layers that sit between your modern distributor portal and your ERP, translating modern web requests into the specific formats your backend system requires for order entry and inventory.</p>
                        </details>
                        <details>
                            <summary>How do you handle hazardous freight calculations?</summary>
                            <p>We build custom logic engines into the checkout process. The platform automatically checks UN numbers, packing groups, and dangerous goods classes, calculating specific hazmat freight surcharges and preventing incompatible chemicals from being placed on the same pallet.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other chemical capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/technical-product-catalogues/"><div><small>Discovery</small><h3>Technical Catalogues</h3><p>Structure complex chemical formulations.</p></div><b>Explore catalogues ↗</b></a>
                        <a className="related-card" href="/services/safety-and-technical-resources/"><div><small>Compliance</small><h3>Safety Resources</h3><p>Digital hubs for SDS and technical data.</p></div><b>Explore resources ↗</b></a>
                        <a className="related-card" href="/services/samples-and-technical-sales/"><div><small>Sales</small><h3>Sample Workflows</h3><p>Accelerate the technical sales cycle.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/distributor-and-customer-portals/"><div><small>Commerce</small><h3>Distributor Portals</h3><p>Digitize bulk chemical ordering.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your chemical <br />and manufacturing operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From complex technical catalogues to B2B hazardous ordering portals, we build software that drives efficiency across the chemical supply chain.</p>
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
