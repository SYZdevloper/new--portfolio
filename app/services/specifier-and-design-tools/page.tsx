import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/specifier-and-design-tools/" },
  title: "Specifier & Design Tools | Hyperlink Tech Solutions",
  description: "Build interactive specifier tools, visual configurators, and ROI calculators to help architects and engineers specify your building materials and industrial products.",
};

export default function SpecifierAndDesignTools() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/specifier-and-design-tools/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/specifier-and-design-tools/",
          "name": "Specifier & Design Tools | Hyperlink Tech Solutions",
          "description": "Build interactive specifier tools, visual configurators, and ROI calculators to help architects and engineers specify your building materials and industrial products.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/specifier-and-design-tools/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/specifier-and-design-tools/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/specifier-and-design-tools/#service",
          "name": "Specifier & Design Tools",
          "serviceType": "Interactive Configurators & Calculators",
          "url": "https://hyperlinktechsolutions.com/services/specifier-and-design-tools/",
          "description": "Build interactive specifier tools, visual configurators, and ROI calculators to help architects and engineers specify your building materials and industrial products.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Manufacturers, A&D Brands, and Engineering Suppliers"
          }
        }
      ]
    }
    ` }} />
      
    <ServiceInteractions />
      <div className="service-page-wrapper">
        <SiteHeader />

        <main id="top">
            <section className="hero service-hero" aria-labelledby="service-title">
                <nav className="service-breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services/">Services</Link><span>›</span>
                    <strong>Specifier & Design Tools</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Interactive B2B Sales Engines</div>
                        <p className="eyebrow">Specifier & Design Tools</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Make it effortlessly easy to <em class="accent-text">specify your product.</em>' }}></h1>
                        <p className="hero-lead">We build custom visual configurators, room visualizers, and technical calculators. Give architects and engineers the digital tools they need to prove your product fits their project.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Web-based 2D and 3D product configurators</li>
                            <li>Acoustic, thermal, and ROI calculators with PDF exports</li>
                            <li>Automated generation of CSI formatted specs</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss a Custom Tool <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Specifier tool benefits">
                        <div className="proof-item">
                            <small>01 · Increased Win Rate</small>
                            <strong>If your product is the easiest to specify, it wins the bid.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Lead Generation</small>
                            <strong>Capture highly qualified leads in exchange for PDF exports.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Sales Enablement</small>
                            <strong>Reps use these tools live on calls to prove product value.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Error Reduction</small>
                            <strong>Prevent orders with incompatible custom parts.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When Specifier Tools are necessary</p>
                        <p>When buyers say "I like your product, but I'm not sure how it fits into my specific assembly."</p>
                        <a className="btn" href="#contact">Build a Configurator <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Relying on brochures to sell complex assemblies loses deals.</h2>
                        <p>Architects and engineers don't want to read a 50-page technical manual to figure out if your acoustical ceiling panel will meet their specific room requirements. If a competitor offers a digital tool that does the math for them, the competitor gets specified.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The "Too Hard to Specify" Trap</h3>
                                <p>Firms default to older, inferior materials simply because they already have the CAD files and know the calculations by heart.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Sales Bottlenecks</h3>
                                <p>Your engineering team spends hours doing custom math for potential clients, bottlenecking your pre-sales process.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Incompatible Orders</h3>
                                <p>Customers manually specify custom dimensions that your factory physically cannot manufacture, causing costly revisions.</p>
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
                                <h2>Custom Interactive Applications.</h2>
                            </div>
                            <p>We build logic-driven React applications that live directly on your website, turning complex engineering math into intuitive, visual user experiences.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Visualizers</span>
                                <h3>Product Configurators</h3>
                                <p>Interactive 2D/3D web tools allowing users to change materials, dimensions, and finishes in real-time, enforcing manufacturing constraints.</p>
                                <div className="deliverable-tags"><small>WebGL</small><small>React</small><small>Configurators</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Math</span>
                                <h3>Engineering Calculators</h3>
                                <p>Translating your internal spreadsheets into web tools that calculate yield, thermal resistance, acoustics, or long-term ROI instantly.</p>
                                <div className="deliverable-tags"><small>Calculators</small><small>Logic</small><small>Algorithms</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Exports</span>
                                <h3>Automated Spec Generation</h3>
                                <p>Dynamically generating formatted PDF spec sheets, CSI documents, and BIM files based exactly on the user's custom inputs.</p>
                                <div className="deliverable-tags"><small>PDFs</small><small>CSI</small><small>Automation</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Integration</span>
                                <h3>CRM Lead Capture</h3>
                                <p>Piping the configured data and the user's contact information directly into Salesforce or HubSpot for your sales team to follow up on.</p>
                                <div className="deliverable-tags"><small>CRM</small><small>Leads</small><small>Salesforce</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Tool Build</p>
                            <h2>Digitizing a complex acoustic calculation.</h2>
                        </div>
                        <p>See how we turned an internal engineering spreadsheet into a lead-generating web application.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Custom Calculators</span>
                                <span>React Logic</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#1a1a1a', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ color: '#666', fontSize: '1.2rem', fontWeight: 500 }}>Interactive Calculator Interface</div>
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Architectural Acoustics Manufacturer</p>
                                <h2>Automating the pre-sales engineering.</h2>
                                <p>An acoustics manufacturer required architects to email them room dimensions so their internal team could manually calculate how many sound-baffling panels were needed to hit specific decibel reduction targets.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The manual process took 48 hours. By the time the reps replied with the calculations, the architect had often moved on to a faster competitor.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We built a React-based "Reverberation Calculator". Architects input room sizes and surfaces; the app instantly visualizes the required panel coverage to hit the target.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>The tool generates 300+ qualified leads per month. Internal engineering time spent on pre-sales math dropped by 90%, freeing them up for R&D.</strong></div>
                            </div>
                            <a className="btn primary" href="/contact">Start Your Project <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">Common questions about Specifier Tools.</h2>
                        <p>Answers covering 3D tech, complex math, and maintenance.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you recreate our complex engineering math in the browser?</summary>
                            <p>You provide us with your internal Excel spreadsheets or formulas. Our software engineers translate those formulas into secure JavaScript/React logic that runs instantly in the user's browser, without exposing your proprietary math to competitors.</p>
                        </details>
                        <details>
                            <summary>Can these tools generate visual 3D renders?</summary>
                            <p>Yes. Using WebGL libraries like Three.js, we can build configurators that allow users to rotate, zoom, and visually customize complex assemblies (like modular furniture or machinery) directly in the browser without plugins.</p>
                        </details>
                        <details>
                            <summary>How do you prevent users from designing products we can't manufacture?</summary>
                            <p>We program your specific manufacturing constraints into the tool's logic. If a user selects a material that is incompatible with a specific dimension, the tool will disable that option and display a tooltip explaining why.</p>
                        </details>
                        <details>
                            <summary>Can the tool generate a price quote?</summary>
                            <p>Absolutely. The tool can reference a pricing database (or your ERP) to generate live MSRP estimates, or, if you prefer to hide pricing, it can generate a detailed "Request for Quote" (RFQ) summarizing the exact configuration for your sales team.</p>
                        </details>
                        <details>
                            <summary>Where do these tools live?</summary>
                            <p>They are embedded directly into your existing website (whether it's Next.js, WordPress, or Shopify) using modern component architecture, ensuring a seamless brand experience.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Complete your digital infrastructure.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/samples-quotes-and-projects/"><div><small>Sales</small><h3>Samples & Quotes</h3><p>Digitize the process of ordering samples for the configured products.</p></div><b>Explore quotes ↗</b></a>
                        <a className="related-card" href="/services/product-and-material-catalogues/"><div><small>Discovery</small><h3>Material Catalogues</h3><p>Organize the raw data that feeds your custom configurators.</p></div><b>Explore catalogues ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Empower specifiers. <br />Accelerate sales. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to turn your complex product data into an interactive sales tool? Let's discuss your next configurator.</p>
                        <a className="btn" href="#contact">Get a Tool Proposal <span className="arrow">↗</span></a>
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
