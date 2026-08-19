import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/agricultural-product-platforms/" },
  title: "Agricultural Product Platforms | Hyperlink Tech Solutions",
  description: "We design high-performance product and capability platforms for ag-chem companies, seed breeders, and equipment manufacturers to clearly communicate efficacy and technical data.",
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
                    <strong>Agribusiness</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Ag Product Websites</div>
                        <p className="eyebrow">Agribusiness</p>
                        <h1 id="service-title">Connect products with producers.</h1>
                        <p className="hero-lead">We design high-performance product and capability platforms for ag-chem companies, seed breeders, and equipment manufacturers to clearly communicate efficacy and technical data.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Dynamic product catalogues integrated directly with your PIM (Product Information Management) system</li>
                            <li>Interactive tools like seeding rate calculators and chemical tank-mix guides</li>
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
                            <strong>Easily display complex SDS (Safety Data Sheets) and label information.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Agronomic Trust</small>
                            <strong>Showcase local field trial data and efficacy results clearly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Find a Dealer</small>
                            <strong>Interactive mapping tools to connect farmers with local stockists.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Low Bandwidth</small>
                            <strong>Optimized image delivery for fast loading in rural areas.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When technical data is buried</p>
                        <p>Farmers shouldn't have to download a 10MB PDF just to find an application rate.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Hard-to-find information loses sales.</h2>
                        <p>Agricultural products are highly technical. Whether it's a pre-emergent herbicide or a new wheat variety, farmers and agronomists need instant access to application rates, plant-back periods, and safety data. If your website is slow or difficult to navigate on a phone in the paddock, they will choose a competitor.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Outdated Labels</h3>
                                <p>A farmer accesses an old version of a chemical label because the website wasn't updated, leading to application errors.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Poor Mobile UX</h3>
                                <p>Agronomists struggle to use your tank-mix compatibility guide on their phones while standing at the spray rig.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Slow Rural Loads</h3>
                                <p>Heavy video backgrounds and uncompressed images cause your site to time out on 3G connections.</p>
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
                                <h2>Digital foundations for agribusiness.</h2>
                            </div>
                            <p>We build platforms that put critical agronomic information at the fingertips of the industry.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Dynamic Product Catalogues</h3>
                                <p>Headless CMS implementations (Sanity/Contentful) allowing your team to update labels and SDS documents instantly.</p>
                                <div className="deliverable-tags"><small>CMS</small><small>Data</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Agronomic Calculators</h3>
                                <p>Custom React tools (e.g., seeding rate calculators, ROI estimators) that drive engagement and provide instant value.</p>
                                <div className="deliverable-tags"><small>React</small><small>Logic</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Dealer Locators</h3>
                                <p>Mapbox integrations that route farmers to the nearest retail store carrying your specific product line.</p>
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
