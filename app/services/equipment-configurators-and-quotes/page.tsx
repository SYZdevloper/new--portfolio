import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/equipment-configurators-and-quotes/" },
  title: "Equipment Configurators & CPQ Engines | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
  description: "Build interactive CPQ engines and 3D configurators that allow buyers to customize heavy machinery instantly.",
};

export default function EquipmentConfiguratorsAndQuotes() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/equipment-configurators-and-quotes/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/equipment-configurators-and-quotes/",
          "name": "Equipment Configurators & CPQ Engines | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
          "description": "Build interactive CPQ engines and 3D configurators that allow buyers to customize heavy machinery instantly.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/equipment-configurators-and-quotes/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/equipment-configurators-and-quotes/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/equipment-configurators-and-quotes/#service",
          "name": "Equipment Configurators & Quotes",
          "serviceType": "Manufacturing & B2B Engineering",
          "url": "https://hyperlinktechsolutions.com/services/equipment-configurators-and-quotes/",
          "description": "Build interactive CPQ engines and 3D configurators that allow buyers to customize heavy machinery instantly.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "B2B Manufacturers, heavy equipment dealers, and industrial suppliers"
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
                    <strong>Configurators & CPQ</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Automating complex sales engineering</div>
                        <p className="eyebrow">Equipment Configurators & Quotes</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Turn a 5-day quoting process into a <em class="accent-text">5-minute interactive experience.</em>' }}></h1>
                        <p className="hero-lead">We engineer advanced Configure, Price, Quote (CPQ) engines and interactive visualizers for heavy equipment manufacturers. Let your customers build their exact machine and get an accurate quote instantly.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Encode complex manufacturing rules to prevent impossible builds</li>
                            <li>Build interactive 2D or 3D WebGL visualizers for instant feedback</li>
                            <li>Automate the generation of highly detailed, branded PDF quotes</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a CPQ Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="B2B platform benefits">
                        <div className="proof-item">
                            <small>01 · Zero Errors</small>
                            <strong>Logic rules prevent the selection of incompatible parts.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Sales</small>
                            <strong>Customers get accurate quotes instantly, not next week.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Visual Trust</small>
                            <strong>Buyers see exactly what they are configuring in real-time.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · CRM Sync</small>
                            <strong>Quotes flow directly into Salesforce or HubSpot automatically.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When a CPQ engine is necessary</p>
                        <p>If your sales team relies on a massive, fragile Excel spreadsheet to calculate quotes, you are losing deals to faster competitors.</p>
                        <a className="btn" href="#contact">Discuss Your Configurator <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Manual quoting is slow, error-prone, and loses deals.</h2>
                        <p>Manufacturing sales teams spend hours calculating weights, checking compatibility charts, and updating pricing spreadsheets. By the time the customer gets the quote, they've already bought from a competitor.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Slow Turnaround Times</h3>
                                <p>It takes your sales engineers 5 days to manually verify if a specific custom configuration is actually buildable and calculate the margin.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Costly Build Errors</h3>
                                <p>Because the quoting is manual, a rep occasionally quotes a machine with an incompatible engine and transmission, leading to massive manufacturing headaches.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Poor Buyer Experience</h3>
                                <p>The customer is spending $250,000 on a piece of machinery but has to rely on a text-heavy PDF rather than seeing a visual representation of their build.</p>
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
                                <h2>Interactive, rules-based engineering.</h2>
                            </div>
                            <p>We take the complex logic living in your engineers' heads (or Excel sheets) and encode it into a blazing-fast, visual web application.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Logic</span>
                                <h3>CPQ Engine Architecture</h3>
                                <p>Writing the backend algorithms that enforce manufacturing constraints (e.g., "If you select the heavy-duty chassis, you must select the V8 engine").</p>
                                <div className="deliverable-tags"><small>CPQ</small><small>Algorithms</small><small>Constraints</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Frontend</span>
                                <h3>Interactive Visualizers</h3>
                                <p>Building dynamic 2D layered images or full 3D WebGL (Three.js) models that update in real-time as the user changes colors or attachments.</p>
                                <div className="deliverable-tags"><small>WebGL</small><small>Three.js</small><small>Visualizers</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Pricing</span>
                                <h3>Dynamic Pricing & Margins</h3>
                                <p>Integrating with your ERP to pull live component costs and applying complex markup logic to calculate the final customer price instantly.</p>
                                <div className="deliverable-tags"><small>Pricing</small><small>Margins</small><small>Calculators</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Output</span>
                                <h3>Automated PDF Quotes</h3>
                                <p>Generating professional, branded PDF quotes (complete with the visual render and spec sheet) and pushing the lead directly into your CRM.</p>
                                <div className="deliverable-tags"><small>PDFs</small><small>CRM</small><small>Automation</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured CPQ Build</p>
                            <h2>Reducing quoting time from 5 days to 5 minutes.</h2>
                        </div>
                        <p>See how we built an interactive configurator for a heavy machinery manufacturer that transformed their sales process.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>CPQ Engineering</span>
                                <span>React + WebGL</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Heavy Machinery CPQ</p>
                                <h2>Killing the Excel quoting spreadsheet.</h2>
                                <p>A manufacturer of custom industrial sweepers was bottlenecked by their sales process. Every custom quote required an engineer to manually verify compatibility in a massive Excel file.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The manual process was causing a 5-day delay in getting quotes to buyers. Furthermore, customers couldn't visualize the different brush attachments they were buying.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We extracted the logic from their Excel sheets and built a React-based CPQ engine. We utilized layered 2D PNGs to instantly render the machine as the user selected different attachments.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>Sales reps (and customers) could now configure a valid, perfectly priced machine in 5 minutes. The visualizer increased the attachment upsell rate by 35%.</strong></div>
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
                        <h2 id="faq-title">Common questions about CPQ & Configurators.</h2>
                        <p>Answers covering logic engines, 3D visualization, and ERP integrations.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you prevent a user from building an impossible machine?</summary>
                            <p>We build a "constraint engine." We map out all your engineering rules in the database. If a user selects Option A, the frontend automatically disables Option B if they are incompatible, preventing any manufacturing errors downstream.</p>
                        </details>
                        <details>
                            <summary>Should we use 2D or 3D for the visualizer?</summary>
                            <p>3D (WebGL) is stunning but requires expensive 3D models and optimization. For many B2B applications, we use a layered 2D approach: we take high-res renders of every component and dynamically stack them in the browser. It looks flawless and loads instantly for a fraction of the cost.</p>
                        </details>
                        <details>
                            <summary>Can the configurator pull live pricing from our ERP?</summary>
                            <p>Yes. If steel prices fluctuate, you don't want to manually update the web app. We integrate the CPQ engine with your ERP so the base component costs are always accurate in real-time.</p>
                        </details>
                        <details>
                            <summary>Can the configurator calculate shipping or freight?</summary>
                            <p>Absolutely. We frequently integrate freight APIs into the final step of the quoting engine, calculating exact shipping costs based on the total weight of the configured machine and the delivery zip code.</p>
                        </details>
                        <details>
                            <summary>Does the quote go straight to our CRM?</summary>
                            <p>Yes. When the user finishes configuring and requests the quote, the exact configuration data (not just a PDF) is pushed into Salesforce or HubSpot via API, giving your sales team actionable data.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Complete your industrial B2B infrastructure.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/product-catalogue-and-discovery/"><div><small>Catalogues</small><h3>B2B Discovery</h3><p>Architect massive, complex B2B catalogues with CAD downloads and bulk ordering.</p></div><b>Explore catalogues ↗</b></a>
                        <a className="related-card" href="/services/equipment-configurators-and-quotes/"><div><small>Sales</small><h3>Equipment Configurators</h3><p>Build interactive CPQ engines to customize heavy machinery instantly.</p></div><b>Explore configurators ↗</b></a>
                        <a className="related-card" href="/services/dealer-and-distributor-portals/"><div><small>Wholesale</small><h3>Dealer Portals</h3><p>Empower your distributors with self-serve ordering and inventory access.</p></div><b>Explore dealer portals ↗</b></a>
                        <a className="related-card" href="/services/rental-and-operations-dashboards/"><div><small>Operations</small><h3>Rental Dashboards</h3><p>Build the command center to track fleet utilization and rental telematics.</p></div><b>Explore rental dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Let your customers build <br />their perfect machine. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to replace your manual Excel quotes with a blazing-fast interactive configurator? Let's discuss your engineering logic.</p>
                        <a className="btn" href="#contact">Get a CPQ Proposal <span className="arrow">↗</span></a>
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
