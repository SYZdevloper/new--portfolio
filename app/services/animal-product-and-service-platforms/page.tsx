import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/animal-product-and-service-platforms/" },
  title: "Animal Product & Service Platforms | Hyperlink Tech Solutions",
  description: "We design high-performance websites for animal health companies, feed manufacturers, and genetics providers to clearly communicate efficacy and product catalogs.",
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
                    <strong>Animal Agriculture</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Livestock Product Platforms</div>
                        <p className="eyebrow">Animal Agriculture</p>
                        <h1 id="service-title">Connect livestock solutions with producers.</h1>
                        <p className="hero-lead">We design high-performance websites for animal health companies, feed manufacturers, and genetics providers to clearly communicate efficacy and product catalogs.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Dynamic product catalogues integrated with inventory for vaccines, feed, and genetics</li>
                            <li>Interactive dosage calculators based on animal weight and species</li>
                            <li>High-performance architecture ensuring fast load times on rural internet connections</li>
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
                            <small>01 · Technical Clarity</small>
                            <strong>Easily display complex SDS, withholding periods, and dosage data.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Genetic Trust</small>
                            <strong>Showcase EBVs (Estimated Breeding Values) and trial data clearly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Find a Stockist</small>
                            <strong>Interactive mapping tools to connect producers with local vets and stores.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Low Bandwidth</small>
                            <strong>Optimized media delivery for fast loading in rural areas.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When technical data is buried</p>
                        <p>Producers shouldn't have to download a PDF just to check a withholding period.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Hard-to-find information loses sales.</h2>
                        <p>Animal health and nutrition products are highly technical. Whether it's a new drench or a custom feed ration, producers and vets need instant access to dosage rates, active ingredients, and safety data. If your website is slow or difficult to navigate on a phone in the yards, they will choose a competitor.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Outdated Labels</h3>
                                <p>A producer accesses an old version of a product label, leading to incorrect dosage or withholding periods.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Poor Mobile UX</h3>
                                <p>Vets struggle to use your dosage calculator on their phones while standing in the crush.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Slow Rural Loads</h3>
                                <p>Heavy video backgrounds cause your site to time out on 3G connections.</p>
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
                                <h2>Digital foundations for animal health.</h2>
                            </div>
                            <p>We build platforms that put critical livestock information at the fingertips of the industry.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Dynamic Product Catalogues</h3>
                                <p>Headless CMS implementations allowing your team to update labels, EBVs, and SDS documents instantly.</p>
                                <div className="deliverable-tags"><small>CMS</small><small>Data</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Dosage & Feed Calculators</h3>
                                <p>Custom React tools that drive engagement and provide instant value based on herd size and weight.</p>
                                <div className="deliverable-tags"><small>React</small><small>Logic</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Stockist Locators</h3>
                                <p>Mapbox integrations that route producers to the nearest rural retail store carrying your specific product line.</p>
                                <div className="deliverable-tags"><small>Maps</small><small>Routing</small><small>Sales</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Low-Bandwidth Optimization</h3>
                                <p>Aggressive edge-caching and automated media compression ensuring fast load times globally.</p>
                                <div className="deliverable-tags"><small>Vercel</small><small>CDN</small><small>Performance</small></div>
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
