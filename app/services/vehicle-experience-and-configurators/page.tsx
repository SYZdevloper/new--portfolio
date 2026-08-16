import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/vehicle-experience-and-configurators/" },
  title: "3D Vehicle Configurators & Showrooms | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
  description: "Build high-fidelity 3D car configurators and immersive digital showrooms for automotive OEMs and mobility startups.",
};

export default function VehicleExperienceAndConfigurators() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/vehicle-experience-and-configurators/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/vehicle-experience-and-configurators/",
          "name": "3D Vehicle Configurators & Showrooms | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
          "description": "Build high-fidelity 3D car configurators and immersive digital showrooms for automotive OEMs and mobility startups.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/vehicle-experience-and-configurators/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/vehicle-experience-and-configurators/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/vehicle-experience-and-configurators/#service",
          "name": "Vehicle Experience & Configurators",
          "serviceType": "Automotive Engineering",
          "url": "https://hyperlinktechsolutions.com/services/vehicle-experience-and-configurators/",
          "description": "Build high-fidelity 3D car configurators and immersive digital showrooms for automotive OEMs and mobility startups.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Automotive OEMs, Dealership Networks, and Mobility Startups"
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
                    <strong>Vehicle Configurators</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Engineering the digital showroom</div>
                        <p className="eyebrow">Vehicle Experience & Configurators</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Let buyers configure their dream car <em class="accent-text">in stunning 3D.</em>' }}></h1>
                        <p className="hero-lead">We engineer high-fidelity, WebGL-powered vehicle configurators that bring the dealership experience into the browser. Let your customers customize paint, wheels, and interiors in real-time, backed by bulletproof manufacturing logic.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Build interactive 3D (Three.js) or highly-optimized 2D layered visualizers</li>
                            <li>Enforce complex engineering constraints (preventing impossible builds)</li>
                            <li>Deliver sub-second load times for massive visual assets</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a Configurator Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        <div className="proof-item">
                            <small>01 · Stunning Visuals</small>
                            <strong>Photorealistic WebGL rendering directly in the browser.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Instant Load Times</small>
                            <strong>Optimized 3D models ensure the experience never lags.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Flawless Logic</small>
                            <strong>Constraint engines prevent users from building unavailable specs.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Mobile First</small>
                            <strong>Smooth, touch-optimized rotation and zooming on phones.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When a digital showroom matters</p>
                        <p>If your car looks like a cheap video game on your website, buyers won't pay $80k for it in real life.</p>
                        <a className="btn" href="#contact">Discuss Your Configurator <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Slow, clunky configurators destroy brand prestige.</h2>
                        <p>Automotive buyers expect a premium digital experience (like Tesla or Porsche). If your configurator takes 10 seconds to load, stutters on mobile, or allows them to build a car that you can't actually manufacture, you lose the sale.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Terrible Mobile Performance</h3>
                                <p>The 3D model is too heavy, causing the browser to crash or the phone to overheat when users try to spin the vehicle.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Manufacturing Disconnect</h3>
                                <p>Users select the "Sport Package" but the configurator lets them keep the standard wheels, resulting in an impossible order sent to the dealer.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Bland Visuals</h3>
                                <p>The rendering engine lacks proper lighting and reflection maps, making a luxury vehicle's paint look flat and unappealing.</p>
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
                                <h2>High-performance interactive rendering.</h2>
                            </div>
                            <p>We combine stunning WebGL graphics with rigorous backend logic to ensure the car looks perfect and the order data is flawless.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Graphics</span>
                                <h3>WebGL / Three.js Rendering</h3>
                                <p>Implementing high-fidelity 3D engines in the browser, complete with HDR lighting, reflections, and smooth camera controls.</p>
                                <div className="deliverable-tags"><small>WebGL</small><small>Three.js</small><small>3D</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Logic</span>
                                <h3>Constraint Engine Architecture</h3>
                                <p>Writing the backend algorithms that enforce manufacturing rules (e.g., "If you select the V8 engine, you must upgrade the brakes").</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Rules</small><small>Constraints</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Performance</span>
                                <h3>Asset Optimization pipelines</h3>
                                <p>Compressing massive CAD files into highly optimized glTF models so the configurator loads instantly on a 4G cellular connection.</p>
                                <div className="deliverable-tags"><small>glTF</small><small>Compression</small><small>Performance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Data</span>
                                <h3>CRM & Dealer Handoff</h3>
                                <p>Generating a unique "Build Code" and pushing the exact, structured JSON of the configured vehicle directly into Salesforce or the dealer management system.</p>
                                <div className="deliverable-tags"><small>CRM</small><small>APIs</small><small>Handoff</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Automotive Build</p>
                            <h2>Building an interactive 3D configurator that increased online reservations by 40%.</h2>
                        </div>
                        <p>See how we built a lightning-fast WebGL showroom for a new EV startup, directly driving their pre-order campaign.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>3D Web Engineering</span>
                                <span>Next.js + Three.js</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Luxury EV Digital Showroom</p>
                                <h2>Bringing the concept car to life.</h2>
                                <p>A luxury EV startup needed to take pre-orders for a vehicle that hadn't entered mass production yet. Their existing configurator was a slow, third-party plugin that crashed on mobile.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The CAD files from the engineering team were massive (2GB+), making them impossible to load in a web browser, and the lighting looked terrible on mobile screens.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We decimated the CAD files into highly optimized 10MB glTF models. We built a custom React/Three.js configurator with baked lighting maps, ensuring photorealistic reflections that ran at 60fps on iPhones.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>The configurator loaded in under 2 seconds. The immersive experience drove a 40% increase in users completing the flow and placing a $500 reservation.</strong></div>
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
                        <h2 id="faq-title">Common questions about Vehicle Configurators.</h2>
                        <p>Answers covering 3D vs 2D, CAD optimization, and logic engines.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Should we build a true 3D (WebGL) configurator or use 2D images?</summary>
                            <p>True 3D allows the user to pan the camera anywhere, which is incredibly immersive. However, it requires highly optimized 3D models. If you have 50 different wheel options and want absolute photorealism instantly, a "layered 2D" approach (stacking hundreds of pre-rendered PNGs dynamically) is often faster and cheaper.</p>
                        </details>
                        <details>
                            <summary>How do you prevent a user from building an impossible car?</summary>
                            <p>We build a "constraint engine" in the database. We map out all your engineering rules. If a user selects the "Off-Road Package", the frontend instantly disables the "Low-Profile Tires" option, preventing any manufacturing errors.</p>
                        </details>
                        <details>
                            <summary>Can you use the CAD files from our engineering team?</summary>
                            <p>Yes, but not directly. Raw CAD files (STEP, IGES) are designed for manufacturing and are far too heavy for a web browser. We run a process called "decimation" to strip out the internal engine components and optimize the exterior geometry into a lightweight web format (glTF/usdz).</p>
                        </details>
                        <details>
                            <summary>How is the final price calculated?</summary>
                            <p>The frontend app calculates the price dynamically as options are selected, pulling base prices and option costs either from a hardcoded CMS or directly via API from your ERP/Pricing engine.</p>
                        </details>
                        <details>
                            <summary>What happens when the user clicks "Save Build"?</summary>
                            <p>We generate a unique hash (a "Build Code") and save the exact JSON configuration to the database. The user gets a URL they can share with their spouse or take to a dealership, which instantly reloads their exact car.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Complete your automotive digital infrastructure.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/vehicle-experience-and-configurators/"><div><small>Discovery</small><h3>Vehicle Configurators</h3><p>Build high-fidelity 3D car configurators and immersive digital showrooms.</p></div><b>Explore configurators ↗</b></a>
                        <a className="related-card" href="/services/leads-test-drives-and-reservations/"><div><small>Sales</small><h3>Test Drives & Leads</h3><p>Engineer frictionless reservation flows and test-drive logistics.</p></div><b>Explore reservations ↗</b></a>
                        <a className="related-card" href="/services/owner-and-service-portals/"><div><small>After-Sales</small><h3>Owner Portals</h3><p>Develop connected car portals with live telematics and service scheduling.</p></div><b>Explore owner portals ↗</b></a>
                        <a className="related-card" href="/services/manufacturing-and-quality-dashboards/"><div><small>Operations</small><h3>Quality Dashboards</h3><p>Build internal operations portals for OEMs to track assembly metrics.</p></div><b>Explore manufacturing ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Bring your vehicles to <br />life in the browser. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build a digital showroom that rivals Tesla and Porsche? Let's discuss your 3D assets and logic.</p>
                        <a className="btn" href="#contact">Get a Configurator Proposal <span className="arrow">↗</span></a>
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
