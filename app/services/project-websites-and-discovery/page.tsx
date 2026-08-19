import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/project-websites-and-discovery/" },
  title: "Real Estate Project Websites & Discovery | Hyperlink Tech Solutions",
  description: "We design high-end project websites that bring off-plan real estate to life through interactive masterplans, 3D tours, and seamless lead capture.",
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
                    <strong>Real Estate Marketing</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Property Discovery Platforms</div>
                        <p className="eyebrow">Real Estate Marketing</p>
                        <h1 id="service-title">Immersive digital experiences for new developments.</h1>
                        <p className="hero-lead">We design high-end project websites that bring off-plan real estate to life through interactive masterplans, 3D tours, and seamless lead capture.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Award-winning web design that matches luxury property aesthetics</li>
                            <li>Interactive location maps and neighborhood amenity guides</li>
                            <li>High-conversion lead capture flows integrated directly with CRM</li>
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
                            <small>01 · Premium Aesthetics</small>
                            <strong>Design that reflects the true value of the development.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Interactive Maps</small>
                            <strong>Showcase local amenities, transit, and lifestyle visually.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Smart Lead Capture</small>
                            <strong>Pre-qualify buyers through intelligent, conversational forms.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Blazing Fast</small>
                            <strong>Next.js architecture ensures massive image galleries load instantly.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When design falls flat</p>
                        <p>You can't sell a $2M penthouse with a $200 template.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>First impressions are everything in off-plan sales.</h2>
                        <p>Buyers are being asked to invest millions based purely on a vision. If a project website is slow, generic, or difficult to navigate, it immediately erodes trust in the developer's ability to deliver.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Generic Templates</h3>
                                <p>Luxury properties presented on clunky, slow-loading WordPress themes that look like everyone else.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Lost Leads</h3>
                                <p>Contact forms that break on mobile or fail to send data to the sales team's CRM.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Static Collateral</h3>
                                <p>Forcing buyers to download massive PDFs instead of letting them explore the vision interactively.</p>
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
                                <h2>Digital showrooms.</h2>
                            </div>
                            <p>We build bespoke marketing websites that captivate buyers and generate high-intent leads.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Bespoke UI/UX</h3>
                                <p>High-end, customized web design utilizing smooth scroll animations and premium typography.</p>
                                <div className="deliverable-tags"><small>Design</small><small>Animations</small><small>Luxury</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Interactive Maps</h3>
                                <p>Custom Mapbox integrations highlighting nearby schools, transit hubs, and lifestyle amenities.</p>
                                <div className="deliverable-tags"><small>Mapbox</small><small>Location</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>CRM Integration</h3>
                                <p>Direct API connections to Salesforce or HubSpot to ensure leads are instantly routed to sales agents.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Salesforce</small><small>Routing</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Performance Media</h3>
                                <p>Optimized video and image pipelines ensuring high-res renders load instantly without buffering.</p>
                                <div className="deliverable-tags"><small>Next.js</small><small>CDNs</small><small>Speed</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Real Estate Build</p>
                            <h2>Selling off-plan with digital precision.</h2>
                        </div>
                        <p>See how we helped a master developer accelerate pre-sales by replacing static PDFs with a fully interactive, CRM-connected inventory platform.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Property Tech Platform</span>
                                <span>3D Visualization + CRM Sync</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/realestate-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Interactive inventory, instant reservations.</h2>
                                <p>We developed a custom portal that allows buyers and brokers to explore units in 3D, view live pricing, and place deposits directly through a seamless Stripe integration.</p>
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
                        <h2 id="faq-title">Common questions about our PropTech software.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate with Salesforce or Hubspot?</summary>
                            <p>Yes. We build robust API integrations with leading real estate CRMs (Salesforce, HubSpot, Propertybase) to ensure leads, availability statuses, and reservations sync in real-time between the website and the sales team.</p>
                        </details>
                        <details>
                            <summary>How do you handle 3D models and interactive masterplans?</summary>
                            <p>We utilize WebGL, Three.js, and specialized tiling methods to render high-fidelity architectural models and interactive maps directly in the browser, without requiring the user to download heavy plugins.</p>
                        </details>
                        <details>
                            <summary>Can buyers place deposits online?</summary>
                            <p>Absolutely. We integrate secure payment gateways (like Stripe or regional equivalents) to allow buyers to place holds or pay EOI (Expression of Interest) fees directly through the unit journey flow.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other real estate capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/project-websites-and-discovery/"><div><small>Marketing</small><h3>Project Websites</h3><p>Immersive digital experiences for new developments.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/inventory-and-unit-journeys/"><div><small>Sales</small><h3>Unit Journeys</h3><p>Help buyers find their perfect space, instantly.</p></div><b>Explore inventory ↗</b></a>
                        <a className="related-card" href="/services/broker-and-channel-portals/"><div><small>Partners</small><h3>Broker Portals</h3><p>Empower your broker network to sell faster.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/sales-and-project-dashboards/"><div><small>Operations</small><h3>Project Dashboards</h3><p>Total visibility over project sales and revenue.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Accelerate your property <br />sales and operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build platforms that wow buyers, empower brokers, and provide total operational oversight? Let's discuss your project.</p>
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
