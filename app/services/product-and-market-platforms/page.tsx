import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/product-and-market-platforms/" },
  title: "Product & Market Platforms | Hyperlink Tech Solutions",
  description: "We design high-performance product platforms for seafood brands, aquaculture producers, and fisheries cooperatives to communicate origin, sustainability certifications, and species data.",
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
                    <strong>Aquaculture & Fisheries</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Seafood Product Platforms</div>
                        <p className="eyebrow">Aquaculture & Fisheries</p>
                        <h1 id="service-title">Showcase provenance and sustainability credentials.</h1>
                        <p className="hero-lead">We design high-performance product platforms for seafood brands, aquaculture producers, and fisheries cooperatives to communicate origin, sustainability certifications, and species data.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Dynamic species catalogues with rich nutritional data, sourcing maps, and sustainability badges</li>
                            <li>Interactive provenance tools allowing consumers to trace a fillet back to the specific farm or vessel</li>
                            <li>High-performance architecture optimized for global B2B buyers and retail consumers</li>
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
                            <small>01 · Premium Positioning</small>
                            <strong>Communicate the quality story that justifies premium pricing.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Sustainability Trust</small>
                            <strong>Clearly display MSC, ASC, or BAP certifications and audit results.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · B2B Discovery</small>
                            <strong>Help importers and chefs find your specific species and pack formats.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Origin Mapping</small>
                            <strong>Interactive maps showing the exact ocean region or farm location.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When provenance is invisible</p>
                        <p>Consumers will pay a premium for verified sustainable seafood, but only if they can see the proof.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Invisible supply chains erode brand value.</h2>
                        <p>The global seafood market is increasingly driven by provenance and sustainability. If your website is a generic corporate brochure that buries your MSC certification and species data in PDFs, you are losing premium shelf space to competitors who tell a better digital story.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Generic Branding</h3>
                                <p>Your hand-harvested, single-origin oysters are presented on a website that looks identical to a commodity frozen fish supplier.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Hidden Certifications</h3>
                                <p>Retail buyers struggle to find your ASC audit reports and sustainability metrics.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Poor B2B Experience</h3>
                                <p>International importers can't easily filter your product range by species, format, or certification.</p>
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
                                <h2>Digital foundations for premium seafood.</h2>
                            </div>
                            <p>We build platforms that turn provenance and sustainability into a competitive advantage.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Species Catalogues</h3>
                                <p>Headless CMS implementations allowing your team to manage rich product pages with nutritional data, cook methods, and certifications.</p>
                                <div className="deliverable-tags"><small>CMS</small><small>Data</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Interactive Origin Maps</h3>
                                <p>Custom Mapbox integrations that visually connect a product SKU to its specific farm, ocean zone, or vessel.</p>
                                <div className="deliverable-tags"><small>Maps</small><small>Provenance</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>B2B Product Finders</h3>
                                <p>Filterable product grids allowing importers to search by species, certification, pack size, and availability.</p>
                                <div className="deliverable-tags"><small>React</small><small>Search</small><small>B2B</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>QR Code Landing Pages</h3>
                                <p>Dynamic micro-sites that are linked from retail packaging, telling the story of a specific batch to the end consumer.</p>
                                <div className="deliverable-tags"><small>QR</small><small>Mobile</small><small>Branding</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Aquaculture Platform</p>
                            <h2>From ocean to plate, digitized.</h2>
                        </div>
                        <p>See how we helped a premium salmon producer build a full-chain traceability platform, connecting IoT pen sensors to a consumer-facing QR code experience that tells the story of every fillet.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Aquaculture Tech</span>
                                <span>IoT Telemetry & Traceability</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/aquaculture-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Transparent provenance.</h2>
                                <p>We developed a custom ecosystem that ingests live water-quality telemetry from ocean pens, tracks every batch through the processing plant, and delivers a scannable QR code on the final retail pack proving origin and sustainability credentials.</p>
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
                        <h2 id="faq-title">Common questions about aquaculture & fisheries tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate with underwater IoT sensors and feeding systems?</summary>
                            <p>Yes. We build secure API middleware that ingests telemetry data from underwater sensors (dissolved oxygen, temperature, salinity) and automated feeding systems, normalizing it into a cloud data warehouse for real-time dashboard visualization and historical analysis.</p>
                        </details>
                        <details>
                            <summary>How do you handle traceability for wild-catch fisheries?</summary>
                            <p>We build chain-of-custody applications that track a catch from the vessel (using e-logbook integrations) through the cold chain, processing, and retail. Each handoff point is digitally timestamped and geotagged, creating an auditable provenance trail for MSC or ASC certification.</p>
                        </details>
                        <details>
                            <summary>Do your field apps work on remote fish farms or vessels at sea?</summary>
                            <p>Absolutely. We specialize in Offline-First Progressive Web Apps and React Native mobile apps. Farm hands or deckhands can log feed quantities, mortality counts, and water quality readings entirely offline; the app will automatically sync once satellite or cellular connectivity is restored.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other aquaculture capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/product-and-market-platforms/"><div><small>Marketing</small><h3>Market Platforms</h3><p>Showcase provenance and sustainability credentials.</p></div><b>Explore platforms ↗</b></a>
                        <a className="related-card" href="/services/farm-and-production-portals/"><div><small>Operations</small><h3>Production Portals</h3><p>Manage pens, cages, and hatcheries digitally.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/traceability-and-quality-workflows/"><div><small>Compliance</small><h3>Traceability Workflows</h3><p>Full-chain provenance from ocean to retail.</p></div><b>Explore traceability ↗</b></a>
                        <a className="related-card" href="/services/supplier-and-service-portals/"><div><small>Supply Chain</small><h3>Supplier Portals</h3><p>Coordinate feed, logistics, and service vendors.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your aquaculture <br />and fisheries operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From IoT pen monitoring to consumer-facing traceability QR codes, we build software that drives transparency and efficiency across the blue economy.</p>
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
