import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/customer-and-account-portals/" },
  title: "Customer & Account Portals | Hyperlink Tech Solutions",
  description: "We build secure, self-service portals allowing commercial and residential customers to pay bills, upgrade bin sizes, and view their diversion rates without calling support.",
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
                    <strong>Customer Experience</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Self-Service Portals</div>
                        <p className="eyebrow">Customer Experience</p>
                        <h1 id="service-title">Frictionless account management for residents and businesses.</h1>
                        <p className="hero-lead">We build secure, self-service portals allowing commercial and residential customers to pay bills, upgrade bin sizes, and view their diversion rates without calling support.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Secure, passwordless login options to reduce friction for residential users</li>
                            <li>Commercial dashboards showing multi-site waste metrics and sustainability reporting</li>
                            <li>Seamless integration with legacy billing engines (SAP, NetSuite, AMCS)</li>
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
                            <small>01 · Lower Cost-to-Serve</small>
                            <strong>Drastically reduce basic billing and account inquiries.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Payment Velocity</small>
                            <strong>Make it incredibly easy for customers to set up direct debits.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Commercial Retention</small>
                            <strong>Provide corporate clients with the ESG data they need for their own reporting.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Secure Access</small>
                            <strong>Enterprise-grade security protecting personal and financial data.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When self-service is painful</p>
                        <p>If upgrading a bin size takes three phone calls, the customer experience is broken.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Friction in the portal creates work for your staff.</h2>
                        <p>Your commercial clients need data for their ESG reports, and your residential clients just want to pay their bill easily. If your account portal is difficult to access, looks terrible on mobile, or provides no insights into waste diversion, self-service adoption will plummet.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Login Friction</h3>
                                <p>Customers forget their passwords, get locked out, and have to call support just to pay a quarterly bill.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Confusing Bills</h3>
                                <p>The portal shows a PDF of the bill but provides no interactive tools to explain excess weight charges.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Disconnected Systems</h3>
                                <p>Updating an address in the web portal doesn't actually update the legacy routing system immediately.</p>
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
                                <h2>Modern account experiences.</h2>
                            </div>
                            <p>We engineer secure portals that make managing waste accounts simple for both residents and enterprises.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Passwordless Authentication</h3>
                                <p>Integrations with Auth0 or native SMS/Email OTPs, allowing customers to log in without remembering complex passwords.</p>
                                <div className="deliverable-tags"><small>Auth</small><small>Security</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Commercial ESG Dashboards</h3>
                                <p>Interactive charts that visualize diversion rates and total tonnage for corporate clients managing multiple sites.</p>
                                <div className="deliverable-tags"><small>DataViz</small><small>React</small><small>Charts</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Billing & Payment Integrations</h3>
                                <p>Secure payment gateways (Stripe, Braintree) and seamless direct-debit setup workflows.</p>
                                <div className="deliverable-tags"><small>Payments</small><small>PCI</small><small>Finance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Legacy API Middleware</h3>
                                <p>Custom Node.js layers that translate slow legacy database queries into fast, modern API responses.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Node.js</small><small>Backend</small></div>
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
