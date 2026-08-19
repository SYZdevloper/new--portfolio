import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/broker-and-channel-portals/" },
  title: "Broker & Channel Portals | Hyperlink Tech Solutions",
  description: "We develop secure broker portals that provide channel partners with real-time inventory access, marketing collateral, and digital commission tracking.",
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
                    <strong>Channel Partner Software</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Channel Partner Portals</div>
                        <p className="eyebrow">Channel Partner Software</p>
                        <h1 id="service-title">Empower your broker network to sell faster.</h1>
                        <p className="hero-lead">We develop secure broker portals that provide channel partners with real-time inventory access, marketing collateral, and digital commission tracking.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Self-serve access to unbranded marketing materials and floorplans</li>
                            <li>Live inventory availability explicitly for authorized channel partners</li>
                            <li>Automated lead registration to protect broker commissions</li>
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
                            <small>01 · Live Inventory</small>
                            <strong>Brokers never pitch a sold unit to their clients again.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Lead Protection</small>
                            <strong>Digital registration prevents disputes over who sourced the buyer.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Marketing Hub</small>
                            <strong>A single source of truth for all brochures, renders, and videos.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Commission Tracking</small>
                            <strong>Brokers can see the status of their payouts in real-time.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When brokers are blind</p>
                        <p>You can't sell what you can't see.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Your channel partners need real-time data.</h2>
                        <p>External brokers drive massive sales volume for developers, but they are often treated as an afterthought. Forcing them to rely on outdated WhatsApp PDFs and phone calls for availability creates massive friction.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Commission Disputes</h3>
                                <p>Messy email chains lead to arguments over which broker actually registered the client first.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Outdated Collateral</h3>
                                <p>Brokers send clients an old version of the masterplan because they couldn't find the new link.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Sales Bottlenecks</h3>
                                <p>In-house sales teams spend 30% of their day just answering 'Is unit 402 still available?' from brokers.</p>
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
                                <h2>Digital enablement for agents.</h2>
                            </div>
                            <p>We build secure, scalable portals that treat your external broker network like your most valuable asset.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Inventory Access</h3>
                                <p>Gated dashboards showing live availability and specific broker pricing structures.</p>
                                <div className="deliverable-tags"><small>Dashboards</small><small>Sync</small><small>RBAC</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Lead Registration</h3>
                                <p>Secure forms that timestamp and inject broker leads directly into your CRM, locking in their commission.</p>
                                <div className="deliverable-tags"><small>Forms</small><small>CRM</small><small>Timestamp</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Asset Management</h3>
                                <p>A centralized, searchable media library for downloading high-res renders, floorplans, and unbranded brochures.</p>
                                <div className="deliverable-tags"><small>Media</small><small>Search</small><small>Downloads</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Performance Tracking</h3>
                                <p>Analytics views showing brokers their sales velocity, pipeline, and upcoming commission milestones.</p>
                                <div className="deliverable-tags"><small>Analytics</small><small>Metrics</small><small>BI</small></div>
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
