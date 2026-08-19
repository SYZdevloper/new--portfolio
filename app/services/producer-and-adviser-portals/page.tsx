import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/producer-and-adviser-portals/" },
  title: "Producer & Adviser Portals | Hyperlink Tech Solutions",
  description: "We build secure portals where livestock producers and their veterinary advisers can collaborate on health protocols, feed rations, and historical production data.",
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
                        <div className="hero-status">Producer Portals</div>
                        <p className="eyebrow">Customer Collaboration</p>
                        <h1 id="service-title">Digital hubs for herd health and management.</h1>
                        <p className="hero-lead">We build secure portals where livestock producers and their veterinary advisers can collaborate on health protocols, feed rations, and historical production data.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Secure, unified dashboards replacing fragmented email chains and spreadsheets</li>
                            <li>Digital delivery and approval of veterinary prescriptions and feed recommendations</li>
                            <li>Historical data vault for lab results, abattoir feedback, and genetic data</li>
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
                            <strong>Make it impossible for customers to leave by housing all their historical herd data.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Approvals</small>
                            <strong>Producers can click 'Approve' on a custom feed ration instantly via SMS.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Less Admin</small>
                            <strong>Stop re-sending lab results and invoices; producers can self-serve 24/7.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Centralized Comms</small>
                            <strong>Keep the vet, the nutritionist, and the producer in total sync.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When advice is scattered</p>
                        <p>Managing a 5,000-head feedlot via WhatsApp and email is a liability.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Disjointed communication risks herd health.</h2>
                        <p>Intensive livestock farming requires intense collaboration between the producer, the vet, and the nutritionist. When feed rations are texted, lab results are emailed as PDFs, and prescriptions arrive by mail, the producer is left to piece the puzzle together, increasing the risk of expensive mistakes.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Lost Recommendations</h3>
                                <p>A producer loses a text message about a treatment protocol and under-doses a mob of cattle.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Data Silos</h3>
                                <p>Historical blood test data is trapped on the hard drive of a vet who left the practice.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Compliance Nightmares</h3>
                                <p>Without a central digital record of antibiotic applications, QA audits become a massive administrative headache.</p>
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
                            <p>We engineer secure portals that act as the central source of truth for livestock operations.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Unified Dashboards</h3>
                                <p>React-based interfaces where users can view upcoming tasks, recent vet advice, and market prices in one glance.</p>
                                <div className="deliverable-tags"><small>UX</small><small>React</small><small>Dashboards</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Digital Prescriptions</h3>
                                <p>Workflows that allow a vet to write a script and instantly push it to the producer's portal and the local pharmacy.</p>
                                <div className="deliverable-tags"><small>Workflows</small><small>Logic</small><small>Sync</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Data Vaults</h3>
                                <p>Secure AWS S3 storage for all herd data (lab results, kill sheets) tied directly to the customer's account.</p>
                                <div className="deliverable-tags"><small>AWS</small><small>Storage</small><small>Security</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Role-Based Access (RBAC)</h3>
                                <p>Strict permission models ensuring farm hands can see task lists, but only the owner can see financial data.</p>
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
                            <p className="eyebrow">Featured Livestock Platform</p>
                            <h2>Digitizing the drafting yard.</h2>
                        </div>
                        <p>See how we helped a national veterinary network build an offline-first mobile app that allows vets to scan RFID tags, log pregnancy ultrasound results, and issue digital prescriptions seamlessly.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Livestock Tech</span>
                                <span>IoT Integration & Field Mobility</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/livestock-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From paddock to portal.</h2>
                                <p>We developed a custom ecosystem that connects EID wand scanners via Bluetooth to a ruggedized iPad app, eliminating paper records and syncing directly with the producer's management dashboard.</p>
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
                        <h2 id="faq-title">Common questions about animal agriculture tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate mobile apps with Bluetooth EID (Electronic ID) scanners?</summary>
                            <p>Yes. We regularly build React Native applications that connect via Bluetooth Low Energy (BLE) to industry-standard hardware like Gallagher or Tru-Test EID wands and scale heads, automatically pulling tag numbers into the app.</p>
                        </details>
                        <details>
                            <summary>How do field apps work when vets are out of cellular range?</summary>
                            <p>We build our mobile applications with 'Offline-First' architecture using local databases. A vet can scan a thousand cows, log their condition scores, and issue treatments offline. The app securely caches the data and syncs automatically when a connection is restored.</p>
                        </details>
                        <details>
                            <summary>How do you handle complex traceability and compliance reporting?</summary>
                            <p>We engineer secure data pipelines that track individual animal histories (treatments, movements, feed). This data can be automatically formatted and transmitted to national traceability databases (like NLIS in Australia) or used to generate QA certificates for processors.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other livestock capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/animal-product-and-service-platforms/"><div><small>Marketing</small><h3>Product Platforms</h3><p>Connect livestock solutions with producers.</p></div><b>Explore platforms ↗</b></a>
                        <a className="related-card" href="/services/producer-and-adviser-portals/"><div><small>Collaboration</small><h3>Producer Portals</h3><p>Digital hubs for herd health and management.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/herd-production-and-quality-records/"><div><small>Data</small><h3>Production Records</h3><p>Digitize livestock traceability and performance.</p></div><b>Explore records ↗</b></a>
                        <a className="related-card" href="/services/laboratory-and-field-services/"><div><small>Vets & Techs</small><h3>Field Services</h3><p>Offline data capture for vets and technicians.</p></div><b>Explore field tools ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your livestock <br />and animal health operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From offline EID scanning apps for vets in the drafting yard to executive dashboards tracking feed conversion, we build software that drives animal agriculture.</p>
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
