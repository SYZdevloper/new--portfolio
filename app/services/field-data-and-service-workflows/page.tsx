import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/field-data-and-service-workflows/" },
  title: "Field Data & Service Workflows | Hyperlink Tech Solutions",
  description: "We develop offline-capable mobile apps for field agronomists and service technicians to log crop scouting data, take soil samples, and manage machinery repairs without a cellular connection.",
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
                    <strong>Field Mobility</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Field Mobility Apps</div>
                        <p className="eyebrow">Field Mobility</p>
                        <h1 id="service-title">Capture data from the paddock, offline.</h1>
                        <p className="hero-lead">We develop offline-capable mobile apps for field agronomists and service technicians to log crop scouting data, take soil samples, and manage machinery repairs without a cellular connection.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>True offline-first mobile architecture utilizing local device storage (IndexedDB/SQLite)</li>
                            <li>Geospatial integration for dropping pins on specific weed outbreaks or machinery breakdowns</li>
                            <li>Instant syncing of field data to central CRMs or dealer portals once connectivity is restored</li>
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
                            <small>01 · Never Lose Data</small>
                            <strong>Agronomists can scout fields all day without relying on a 4G connection.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Eliminate Paper</small>
                            <strong>Stop writing field notes on notepads that have to be re-typed in the office later.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Photographic Proof</small>
                            <strong>Attach geotagged photos of pest damage directly to the scouting report.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Faster Service</small>
                            <strong>Equipment technicians can access parts manuals offline while fixing a tractor.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When the paddock is a black spot</p>
                        <p>If your app requires an internet connection, it's useless on a farm.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Poor connectivity destroys data integrity.</h2>
                        <p>Agriculture happens where cellular networks don't. When agronomists or machinery technicians are forced to use web-based tools that drop out, they revert to writing notes on paper or in the notes app on their phone. This means data is siloed, delayed, and often lost completely.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Double Data Entry</h3>
                                <p>An agronomist spends all day in the field, then spends three hours that night typing their notes into the corporate CRM.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Location Ambiguity</h3>
                                <p>A technician is dispatched to fix a pump, but spends an hour trying to find it because the exact GPS coordinates weren't logged.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>App Frustration</h3>
                                <p>Off-the-shelf CRM apps freeze and crash when transitioning in and out of cellular coverage.</p>
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
                                <h2>Rugged software for the field.</h2>
                            </div>
                            <p>We build progressive web apps (PWAs) and React Native mobile tools explicitly designed for rural conditions.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Offline-First Architecture</h3>
                                <p>Advanced local caching allowing users to create records, take photos, and run complex forms entirely offline.</p>
                                <div className="deliverable-tags"><small>Offline</small><small>PWA</small><small>Sync</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Geospatial Data Capture</h3>
                                <p>Integrations with device GPS allowing users to drop accurate pins for soil sampling sites or machinery breakdowns.</p>
                                <div className="deliverable-tags"><small>Geo</small><small>Maps</small><small>Mobile</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Smart Scouting Forms</h3>
                                <p>Customizable digital checklists for agronomy or equipment inspections, utilizing conditional logic to speed up data entry.</p>
                                <div className="deliverable-tags"><small>Forms</small><small>Logic</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Background Sync Engines</h3>
                                <p>Background processes that detect when cellular service is restored and quietly push all saved data to the central server.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Webhooks</small><small>Integration</small></div>
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
