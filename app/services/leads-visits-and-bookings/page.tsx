import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/leads-visits-and-bookings/" },
  title: "Leads, Visits & Bookings | Hyperlink Tech Solutions",
  description: "We engineer lead capture flows, digital appointment scheduling, and secure online reservation systems that accelerate the property sales cycle.",
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
                    <strong>Property Sales Tech</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Property Booking Engines</div>
                        <p className="eyebrow">Property Sales Tech</p>
                        <h1 id="service-title">Turn digital interest into physical site visits.</h1>
                        <p className="hero-lead">We engineer lead capture flows, digital appointment scheduling, and secure online reservation systems that accelerate the property sales cycle.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Smart scheduling for physical site tours and display suites</li>
                            <li>Secure online payment gateways for Expression of Interest (EOI) fees</li>
                            <li>Digital KYC and document uploads for initial sales contracts</li>
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
                            <small>01 · Higher Conversion</small>
                            <strong>Remove friction from booking a site visit or virtual tour.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Online Reservations</small>
                            <strong>Allow buyers to lock in a unit with a secure digital deposit.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · KYC Automation</small>
                            <strong>Collect ID documents securely before the contract stage.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Sales Routing</small>
                            <strong>Instantly assign leads to the correct agent based on territory.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When booking creates friction</p>
                        <p>Phone tag is the fastest way to lose a buyer.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>The reservation process should be frictionless.</h2>
                        <p>When a buyer is ready to visit a display suite or put down a deposit, forcing them to wait for an email reply or a phone call gives them time to reconsider or look at a competitor.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Scheduling Chaos</h3>
                                <p>Agents waste hours emailing back and forth just to find a time for a site visit.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Manual Deposits</h3>
                                <p>Waiting for wire transfers or physical checks delays the reservation process unnecessarily.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Data Entry Errors</h3>
                                <p>Sales admins manually typing buyer details from a web form into the CRM.</p>
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
                                <h2>Digital sales workflows.</h2>
                            </div>
                            <p>We build the interactive tools that move a buyer from 'browsing' to 'reserved'.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Smart Scheduling</h3>
                                <p>Integration with tools like Calendly or custom calendar logic to book tours based on agent availability.</p>
                                <div className="deliverable-tags"><small>Calendars</small><small>Booking</small><small>Reminders</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Digital Checkout</h3>
                                <p>Secure payment flows utilizing Stripe to process holding deposits or EOI fees instantly.</p>
                                <div className="deliverable-tags"><small>Stripe</small><small>Payments</small><small>Security</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Document Uploads</h3>
                                <p>Encrypted portals for buyers to securely upload passports, bank statements, and KYC documents.</p>
                                <div className="deliverable-tags"><small>Encryption</small><small>KYC</small><small>Forms</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>E-Sign Integration</h3>
                                <p>Workflows that automatically generate reservation agreements and send them via DocuSign or HelloSign.</p>
                                <div className="deliverable-tags"><small>E-Sign</small><small>APIs</small><small>Contracts</small></div>
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
