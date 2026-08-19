import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/organiser-and-venue-portals/" },
  title: "Organiser & Venue Portals | Hyperlink Tech Solutions",
  description: "We engineer secure B2B portals where promoters can manage guest lists, access marketing assets, and communicate with venue operations teams in real-time.",
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
                    <strong>B2B Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">B2B Portals</div>
                        <p className="eyebrow">B2B Operations</p>
                        <h1 id="service-title">Empower event organizers and promoters.</h1>
                        <p className="hero-lead">We engineer secure B2B portals where promoters can manage guest lists, access marketing assets, and communicate with venue operations teams in real-time.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Self-serve portals for external promoters to view live ticket sales and demographic data</li>
                            <li>Secure digital asset management (DAM) for sharing authorized brand assets and venue specs</li>
                            <li>Digital run-sheet and technical rider management replacing messy email threads</li>
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
                            <small>01 · Smoother Operations</small>
                            <strong>Keep venue staff and external promoters on the exact same page digitally.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Settlements</small>
                            <strong>Give promoters live access to their sales data to speed up post-event financials.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Brand Protection</small>
                            <strong>Ensure promoters are only using authorized, up-to-date marketing assets.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Reduced Email</small>
                            <strong>Replace chaotic 50-reply email chains with a centralized, structured portal.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When B2B communication is messy</p>
                        <p>Managing a 10,000-person event via email attachments is a disaster waiting to happen.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Disorganized operations cause event-day chaos.</h2>
                        <p>Running a venue involves coordinating with dozens of external promoters, artists, and technical crews. When technical riders are lost in spam folders, or a promoter is begging your finance team for a live ticket count every two hours, your internal team is drowning in admin instead of running the venue.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Information Black Holes</h3>
                                <p>The technical crew doesn't get the updated lighting rider because it was emailed to the wrong person.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Reporting Burden</h3>
                                <p>Your ticketing manager spends hours manually exporting sales spreadsheets for impatient promoters.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Marketing Mismatches</h3>
                                <p>External organizers use low-res logos or outdated photos of your venue to promote their event.</p>
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
                                <h2>Centralized event operations.</h2>
                            </div>
                            <p>We build secure B2B environments that professionalize the relationship between venues and organizers.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Promoter Dashboards</h3>
                                <p>API integrations pulling live data from the ticketing system, allowing promoters to view their sales pacing and VIP allocations.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>Dashboards</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Brand Asset Vaults</h3>
                                <p>Secure, gated directories within the portal where organizers can download localized marketing guidelines and high-res venue imagery.</p>
                                <div className="deliverable-tags"><small>DAM</small><small>Assets</small><small>Brand</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Digital Rider Management</h3>
                                <p>Custom forms and document management systems ensuring that technical requirements are securely collected and distributed.</p>
                                <div className="deliverable-tags"><small>Forms</small><small>Operations</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Identity Management (CIAM)</h3>
                                <p>Secure, centralized login flows using Auth0 to ensure only authorized promoter staff can access sensitive event data.</p>
                                <div className="deliverable-tags"><small>Security</small><small>Auth</small><small>B2B</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Events Platform</p>
                            <h2>Transforming the live experience.</h2>
                        </div>
                        <p>See how we helped a major music festival and venue operator migrate to a serverless architecture that handled 150,000 concurrent users during ticket drops without a single minute of downtime.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Events Tech</span>
                                <span>Ticketing & Scale</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/events-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Surviving the ticket drop.</h2>
                                <p>We developed a custom frontend leveraging Next.js static site generation (SSG) and an edge-based digital queue system, ensuring the brand experience remained flawlessly fast while users waited to access the ticketing backend.</p>
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
                        <h2 id="faq-title">Common questions about events tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you prevent the website crashing when tickets go on sale?</summary>
                            <p>We build Event sites using headless architecture and static site generation (SSG), deploying them on global edge networks (like Vercel). We decouple the heavy visual frontend from the transactional ticketing backend, and implement edge-based queueing systems to manage traffic spikes gracefully.</p>
                        </details>
                        <details>
                            <summary>Do you build custom ticketing systems?</summary>
                            <p>Rarely. Building a ticketing system from scratch is risky and expensive. Instead, we build beautiful, high-performing frontends that integrate seamlessly via API with industry-leading ticketing platforms like Ticketmaster, Eventbrite, or specialized white-label providers.</p>
                        </details>
                        <details>
                            <summary>Can you build interactive venue maps?</summary>
                            <p>Yes. We build custom WebGL or SVG-based interactive maps where users can view 360-degree seat previews, locate amenities, or click on specific corporate suites to initiate a booking enquiry.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other event capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/event-and-venue-discovery/"><div><small>Discovery</small><h3>Event Hubs</h3><p>Showcase experiences.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/tickets-enquiries-and-booking/"><div><small>Conversion</small><h3>Ticketing & Booking</h3><p>Frictionless sales.</p></div><b>Explore ticketing ↗</b></a>
                        <a className="related-card" href="/services/organiser-and-venue-portals/"><div><small>B2B Operations</small><h3>Organiser Portals</h3><p>Empower promoters.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/attendee-experience/"><div><small>Digital Service</small><h3>Attendee Apps</h3><p>Elevate the live event.</p></div><b>Explore attendee apps ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your events <br />and venue operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From unbreakable architectures that survive massive ticket drops to interactive attendee apps and venue management portals, we build software that drives the live experience.</p>
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
