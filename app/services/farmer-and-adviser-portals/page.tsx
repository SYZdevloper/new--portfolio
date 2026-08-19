import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/farmer-and-adviser-portals/" },
  title: "Farmer & Adviser Portals | Hyperlink Tech Solutions",
  description: "We build secure portals where farmers and agronomists can access soil test results, spray recommendations, and historical purchase data in one unified dashboard.",
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
                    <strong>Customer Collaboration</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Grower Portals</div>
                        <p className="eyebrow">Customer Collaboration</p>
                        <h1 id="service-title">Digital hubs for agronomy and account management.</h1>
                        <p className="hero-lead">We build secure portals where farmers and agronomists can access soil test results, spray recommendations, and historical purchase data in one unified dashboard.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Secure, unified dashboards replacing fragmented email chains and spreadsheets</li>
                            <li>Digital delivery and approval of agronomic recommendations and chemical prescriptions</li>
                            <li>Historical data vault for soil tests, tissue tests, and yield maps</li>
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
                            <small>01 · Sticky Relationships</small>
                            <strong>Make it impossible for customers to leave by housing all their historical data.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Approvals</small>
                            <strong>Farmers can click 'Approve' on a spray recommendation instantly via SMS.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Less Admin</small>
                            <strong>Stop re-sending invoices and soil tests; farmers can self-serve 24/7.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Centralized Comms</small>
                            <strong>Keep the agronomist, the farmer, and the retail store in total sync.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When agronomy is scattered</p>
                        <p>Managing a 10,000-hectare cropping program via WhatsApp and email is a liability.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Disjointed communication risks yield.</h2>
                        <p>Farming requires intense collaboration between the grower, the agronomist, and the retail supplier. When recommendations are texted, soil tests are emailed as PDFs, and invoices arrive by mail, the farmer is left to piece the puzzle together, increasing the risk of expensive mistakes.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Lost Recommendations</h3>
                                <p>A farmer loses a text message about a spray rate, applies the wrong chemical, and damages the crop.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Data Silos</h3>
                                <p>Historical soil test data is trapped on the hard drive of an agronomist who left the company.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Compliance Nightmares</h3>
                                <p>Without a central digital record of chemical applications, QA audits become a massive administrative headache.</p>
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
                                <h2>The digital farm office.</h2>
                            </div>
                            <p>We engineer secure portals that act as the central source of truth for the growing season.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Unified Dashboards</h3>
                                <p>React-based interfaces where users can view current weather, upcoming tasks, and recent agronomic advice in one glance.</p>
                                <div className="deliverable-tags"><small>UX</small><small>React</small><small>Dashboards</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Digital Recommendations</h3>
                                <p>Workflows that allow an agronomist to write a chemical prescription and instantly push it to the farmer's portal for sign-off.</p>
                                <div className="deliverable-tags"><small>Workflows</small><small>Logic</small><small>Sync</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Data Vaults</h3>
                                <p>Secure AWS S3 storage for all farm data (soil tests, yield maps, drone imagery) tied directly to the customer's account.</p>
                                <div className="deliverable-tags"><small>AWS</small><small>Storage</small><small>Security</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Role-Based Access (RBAC)</h3>
                                <p>Strict permission models ensuring farm hands can see task lists, but only the owner can see financial invoices.</p>
                                <div className="deliverable-tags"><small>Auth0</small><small>RBAC</small><small>Security</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured AgTech Platform</p>
                            <h2>Digitizing the growing season.</h2>
                        </div>
                        <p>See how we helped a global crop-protection manufacturer build an offline-first scouting app for their agronomists, instantly syncing paddock data to a centralized dealer ordering portal.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>AgTech</span>
                                <span>B2B Commerce & Field Mobility</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/agtech-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From soil to supply chain.</h2>
                                <p>We developed a custom ecosystem that connects field observations directly to dealer inventory systems, ensuring that farmers get the exact chemical prescriptions they need, exactly when they need them.</p>
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
                        <h2 id="faq-title">Common questions about agriculture tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do field apps work when agronomists are in cellular dead zones?</summary>
                            <p>We build 'Offline-First' applications (using IndexedDB or SQLite for mobile). An agronomist can log weed pressure, take photos, and write a spray recommendation entirely offline. The app stores the data and automatically syncs it to the cloud when they drive back into town.</p>
                        </details>
                        <details>
                            <summary>Can you integrate B2B ordering portals with legacy ERPs like SAP or JD Edwards?</summary>
                            <p>Yes. Agricultural supply chains run on complex legacy ERPs. We build secure API middleware layers that sit between your modern dealer portal and your ERP, translating modern web requests into the specific formats your backend system requires without overloading it.</p>
                        </details>
                        <details>
                            <summary>How do you handle variable pricing for different dealer networks?</summary>
                            <p>We build custom logic engines into our B2B commerce platforms. When a dealer logs in, the platform calls an API to fetch their specific tier pricing, early-order program discounts, and current rebate status, ensuring they only see the pricing rules that apply to them.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other agricultural capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/agricultural-product-platforms/"><div><small>Marketing</small><h3>Product Platforms</h3><p>Connect products with producers.</p></div><b>Explore platforms ↗</b></a>
                        <a className="related-card" href="/services/farmer-and-adviser-portals/"><div><small>Collaboration</small><h3>Grower Portals</h3><p>Digital hubs for agronomy and account management.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/dealer-and-commerce-workflows/"><div><small>Supply Chain</small><h3>Commerce Workflows</h3><p>Digitize the agricultural supply chain.</p></div><b>Explore commerce ↗</b></a>
                        <a className="related-card" href="/services/field-data-and-service-workflows/"><div><small>Agronomy</small><h3>Field Data Workflows</h3><p>Capture data from the paddock, offline.</p></div><b>Explore field tools ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your agribusiness <br />and supply chain. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From offline scouting apps for agronomists to complex B2B dealer portals, we build software that drives efficiency across the agricultural sector.</p>
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
