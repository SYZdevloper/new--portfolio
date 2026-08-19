import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/bookings-and-collection-workflows/" },
  title: "Bookings & Collection Workflows | Hyperlink Tech Solutions",
  description: "We engineer intelligent digital forms and e-commerce workflows that allow customers to easily book on-demand collections and schedule bulky waste pickups.",
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
                    <strong>Digital Workflows</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Booking Engines</div>
                        <p className="eyebrow">Digital Workflows</p>
                        <h1 id="service-title">Digitize hard-rubbish and skip bin bookings.</h1>
                        <p className="hero-lead">We engineer intelligent digital forms and e-commerce workflows that allow customers to easily book on-demand collections and schedule bulky waste pickups.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Dynamic booking forms that adapt based on the user's location and required waste type</li>
                            <li>Integrated payment gateways for upfront processing of skip bin hires</li>
                            <li>Automated routing of confirmed bookings directly into fleet dispatch software</li>
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
                            <small>01 · 24/7 Sales</small>
                            <strong>Customers can book a skip bin on a Sunday night without waiting for office hours.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Accurate Quoting</small>
                            <strong>Automatically calculate distance, weight limits, and permit fees.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Dispatch Automation</small>
                            <strong>Eliminate manual data entry for your dispatchers.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Reduced Disputes</small>
                            <strong>Force customers to agree to prohibited item lists before they can pay.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When bookings require phone calls</p>
                        <p>A static PDF form is a terrible way to run an on-demand business.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Manual bookings throttle your operational growth.</h2>
                        <p>If a customer has to call your office to get a quote for a skip bin or schedule a hard-rubbish collection, you are artificially limiting your revenue. Modern customers expect an Uber-like experience: instant quotes, digital payment, and automated scheduling.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Lost Revenue</h3>
                                <p>Customers abandon the process because they can't get an instant price online.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Data Entry Burden</h3>
                                <p>Dispatchers spend hours manually typing booking details from emails into the routing software.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Disputed Charges</h3>
                                <p>Customers throw prohibited items (like asbestos or tires) into the bin because the terms weren't clearly enforced during booking.</p>
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
                                <h2>Intelligent booking engines.</h2>
                            </div>
                            <p>We build smart e-commerce workflows that capture exact requirements, process payments, and dispatch vehicles.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Dynamic Booking Forms</h3>
                                <p>Multi-step React forms that use conditional logic to adjust pricing based on bin size, waste type, and delivery zone.</p>
                                <div className="deliverable-tags"><small>React</small><small>Logic</small><small>Forms</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Address Validation</h3>
                                <p>Integrations with Google Places API to ensure the delivery address is valid and falls within your service area.</p>
                                <div className="deliverable-tags"><small>Maps</small><small>Geo</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>E-Commerce & Compliance</h3>
                                <p>Integrated Stripe checkout that forces users to digitally acknowledge prohibited item lists before payment is accepted.</p>
                                <div className="deliverable-tags"><small>Payments</small><small>Stripe</small><small>Compliance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Dispatch Webhooks</h3>
                                <p>Direct API integrations that push confirmed jobs into routing software like AMCS, Routeware, or Fleetmatics instantly.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Webhooks</small><small>Sync</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Environmental Platform</p>
                            <h2>Transforming waste management.</h2>
                        </div>
                        <p>See how we helped a major waste management operator digitize their commercial bookings, outfit drivers with offline-first routing apps, and aggregate weighbridge data into a unified executive dashboard.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Environmental Tech</span>
                                <span>Field Mobility & Data Aggregation</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/waste-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>End-to-end operational visibility.</h2>
                                <p>We developed a custom ecosystem that connects customer self-service portals directly to the routing software in the garbage trucks, reducing missed collections by 80% and providing instant EPA compliance reporting.</p>
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
                        <h2 id="faq-title">Common questions about waste & environmental tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate web bookings directly into our routing software?</summary>
                            <p>Yes. We regularly build API middleware that takes a booking from the public website, processes the payment, and injects the job directly into specialized routing platforms like Routeware, AMCS, or Fleetmatics.</p>
                        </details>
                        <details>
                            <summary>How do drivers use the app if they are in remote areas?</summary>
                            <p>We build driver applications with an 'Offline-First' architecture (using PWA or React Native). Drivers can view their route, tick off completed jobs, and upload photos of contaminated bins entirely offline. The app syncs the data back to HQ the moment a cellular connection is restored.</p>
                        </details>
                        <details>
                            <summary>How do you handle EPA and government compliance reporting?</summary>
                            <p>We build automated data pipelines that pull tonnage from weighbridges, asset data from the CRM, and fleet telematics into a centralized cloud database. From there, we generate dynamic dashboards and automated PDF reports that perfectly match regulatory requirements.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other environmental capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/service-and-coverage-websites/"><div><small>Public Info</small><h3>Service Websites</h3><p>Connect communities with environmental services.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/customer-and-account-portals/"><div><small>Self-Service</small><h3>Account Portals</h3><p>Frictionless account management for residents.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/bookings-and-collection-workflows/"><div><small>Operations</small><h3>Booking Workflows</h3><p>Digitize hard-rubbish and skip bin bookings.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/field-route-and-asset-workflows/"><div><small>Field Crews</small><h3>Route Workflows</h3><p>Optimize collection routes and asset tracking.</p></div><b>Explore field tools ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your waste and <br />environmental operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From seamless customer booking portals to offline routing apps for your drivers, we build software that drives operational efficiency.</p>
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
