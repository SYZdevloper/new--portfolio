import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/customer-and-corporate-portals/" },
  title: "Customer & Corporate Portals | Hyperlink Tech Solutions",
  description: "We build secure portals where daily commuters can manage their digital passes and corporate clients can manage bulk bookings and employee transit accounts.",
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
                    <strong>Service & B2B</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Passenger Portals</div>
                        <p className="eyebrow">Service & B2B</p>
                        <h1 id="service-title">Self-serve management for all passengers.</h1>
                        <p className="hero-lead">We build secure portals where daily commuters can manage their digital passes and corporate clients can manage bulk bookings and employee transit accounts.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Self-serve dashboards allowing commuters to view active tickets, renew monthly passes, and update payment methods</li>
                            <li>Corporate B2B portals where HR teams can manage transit benefits for hundreds of employees</li>
                            <li>Digital document vaults for retrieving tax invoices and historical travel receipts</li>
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
                            <small>01 · Reduced Support Calls</small>
                            <strong>Passengers can cancel or change their own tickets online without calling your call center.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Sticky B2B Relationships</small>
                            <strong>Corporate clients will love the ease of managing bulk transit passes through a modern portal.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Faster Boarding</small>
                            <strong>Digital passes and QR codes in the portal mean faster scanning at the terminal.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Unified Identity</small>
                            <strong>Stop treating the same daily commuter as a new customer every time they buy a ticket.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When service is analog</p>
                        <p>Your call center shouldn't be overwhelmed by people asking to change a 9 AM ticket to a 10 AM ticket.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Lack of self-service frustrates modern commuters.</h2>
                        <p>Daily commuters and corporate clients expect absolute control. If a passenger has to call your office to change a departure time, or a corporate client has to email a spreadsheet to buy 50 monthly passes, your operations team is drowning in unnecessary admin work.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>High Support Costs</h3>
                                <p>Your customer service team spends all day processing simple ticket changes or issuing refunds manually.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>B2B Billing Chaos</h3>
                                <p>Corporate accounts are managed via messy email threads and manual invoice generation.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Login Friction</h3>
                                <p>Users abandon their accounts because the password reset process is broken or they can't easily find their digital ticket.</p>
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
                                <h2>Centralized passenger operations.</h2>
                            </div>
                            <p>We engineer secure dashboards that give your customers complete control over their travel.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Passenger Dashboards</h3>
                                <p>API integrations pulling live booking data, allowing clients to view their upcoming trips and active passes.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>Dashboards</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Self-Serve Ticket Changes</h3>
                                <p>Logic engines that allow users to change a booking time and automatically calculate/charge the fare difference via API.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>APIs</small><small>Service</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>B2B Corporate Portals</h3>
                                <p>Custom interfaces where corporate admins can save company credit cards, provision employee passes, and download tax invoices.</p>
                                <div className="deliverable-tags"><small>B2B</small><small>Commerce</small><small>Portals</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Identity Management (CIAM)</h3>
                                <p>Secure, centralized login flows using Auth0 to ensure a seamless experience across web and mobile apps.</p>
                                <div className="deliverable-tags"><small>Security</small><small>Auth</small><small>Data</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Transport Platform</p>
                            <h2>Modernizing passenger transport.</h2>
                        </div>
                        <p>See how we helped a regional bus and ferry operator replace their legacy booking widget with a custom React frontend, increasing online ticket sales by 35% and drastically reducing lines at the physical terminal.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Transport Tech</span>
                                <span>Booking & Ticketing</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/transport-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Frictionless digital ticketing.</h2>
                                <p>We developed a secure booking engine connected directly to their proprietary inventory system. Passengers can now book multi-leg journeys on their phone in seconds, receiving Apple Wallet passes instead of paper tickets.</p>
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
                        <h2 id="faq-title">Common questions about transport tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with our legacy ticketing or reservation system?</summary>
                            <p>We build secure API middleware to connect your headless frontend directly to complex transport management systems. This allows us to pull live timetables, seat availability, and pricing without exposing the core database.</p>
                        </details>
                        <details>
                            <summary>Can you build custom routing and timetable planners?</summary>
                            <p>Yes. We build interactive trip planners where users can input their origin and destination, and our logic engine calculates the optimal route, showing live ETAs and connection times based on your schedules.</p>
                        </details>
                        <details>
                            <summary>Do you build digital tickets like Apple Wallet passes?</summary>
                            <p>Yes. Upon successful checkout, we can automatically generate dynamic QR codes and native Apple Wallet/Google Pay passes that your drivers or terminal staff can scan easily.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other transport capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/transport-service-websites/"><div><small>Discovery</small><h3>Transport Websites</h3><p>Showcase your network.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/reservations-and-trip-booking/"><div><small>Revenue</small><h3>Trip Booking</h3><p>Frictionless ticketing.</p></div><b>Explore booking ↗</b></a>
                        <a className="related-card" href="/services/customer-and-corporate-portals/"><div><small>Service</small><h3>Passenger Portals</h3><p>Self-serve management.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/fleet-driver-and-maintenance/"><div><small>Operations</small><h3>Fleet & Driver Ops</h3><p>Keep the network moving.</p></div><b>Explore operations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your passenger <br />transport operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From automated ticketing engines to real-time timetable planners and digital maintenance workflows, we build software that drives efficiency across the transport network.</p>
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
