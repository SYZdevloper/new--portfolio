import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/herd-production-and-quality-records/" },
  title: "Herd, Production & Quality Records | Hyperlink Tech Solutions",
  description: "We engineer applications that track individual animal health records, integrate with EID (Electronic Identification) tags, and manage quality assurance data.",
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
                    <strong>Data Management</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Herd Management</div>
                        <p className="eyebrow">Data Management</p>
                        <h1 id="service-title">Digitize livestock traceability and performance.</h1>
                        <p className="hero-lead">We engineer applications that track individual animal health records, integrate with EID (Electronic Identification) tags, and manage quality assurance data.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Individual animal tracking using EID/RFID integration for precise data capture</li>
                            <li>Automated compliance reporting for national traceability systems and QA programs</li>
                            <li>Analysis of feed conversion, daily weight gain, and genetic performance</li>
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
                            <small>01 · Lifetime Traceability</small>
                            <strong>Track every treatment, movement, and weight from birth to processing.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Automated Compliance</small>
                            <strong>Generate NVDs (National Vendor Declarations) or QA certificates digitally.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Performance Tracking</small>
                            <strong>Identify your most profitable genetic lines based on real abattoir feedback.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Error Reduction</small>
                            <strong>Eliminate transcription errors by syncing directly with hardware scales.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When records are manual</p>
                        <p>You can't optimize herd genetics with a mud-stained notebook.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Manual data entry limits herd profitability.</h2>
                        <p>Tracking the performance of thousands of animals requires precise data. If you are writing down tag numbers and weights in a notebook, then typing them into Excel later, you are introducing errors, losing time, and missing the insights needed to cull underperforming animals.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Transcription Errors</h3>
                                <p>A 16-digit EID number is written down incorrectly, breaking the traceability chain for that animal.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Delayed Insights</h3>
                                <p>It takes weeks to manually match abattoir kill sheets back to the original sire data.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Audit Panic</h3>
                                <p>When a QA audit occurs, staff spend days frantically organizing paper treatment records.</p>
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
                                <h2>Precision livestock management.</h2>
                            </div>
                            <p>We build data systems that turn individual animal metrics into herd-level profitability.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Hardware Integration (IoT)</h3>
                                <p>Bluetooth middleware that connects web and mobile apps directly to EID wands and digital scale heads.</p>
                                <div className="deliverable-tags"><small>IoT</small><small>BLE</small><small>Integration</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Traceability Engines</h3>
                                <p>Secure databases that maintain immutable histories of animal movements, linking to national databases via API.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Database</small><small>Compliance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Performance Analytics</h3>
                                <p>Visual tools to chart Average Daily Gain (ADG) and compare performance across different mobs, feeds, or genetics.</p>
                                <div className="deliverable-tags"><small>DataViz</small><small>Analytics</small><small>React</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Digital Vendor Declarations</h3>
                                <p>Systems that automatically generate legally compliant movement documents based on the selected animals.</p>
                                <div className="deliverable-tags"><small>Automation</small><small>PDFs</small><small>Legal</small></div>
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
