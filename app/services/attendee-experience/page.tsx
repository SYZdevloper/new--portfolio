import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/attendee-experience/" },
  title: "Attendee Experience | Hyperlink Tech Solutions",
  description: "We develop mobile-first web apps providing attendees with personalized schedules, interactive wayfinding maps, and digital food & beverage ordering during the event.",
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
                    <strong>Digital Service</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Attendee Apps</div>
                        <p className="eyebrow">Digital Service</p>
                        <h1 id="service-title">Elevate the live event.</h1>
                        <p className="hero-lead">We develop mobile-first web apps providing attendees with personalized schedules, interactive wayfinding maps, and digital food & beverage ordering during the event.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Mobile-first Progressive Web Apps (PWAs) accessible via a QR code—no App Store download required</li>
                            <li>Interactive festival maps with geolocation to help attendees find stages, bars, and bathrooms</li>
                            <li>Digital F&B ordering allowing attendees to skip the bar queue and order from their phone</li>
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
                            <small>01 · Higher F&B Revenue</small>
                            <strong>Guests buy more drinks when they don't have to stand in a 20-minute line.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Less Confusion</small>
                            <strong>Interactive maps reduce the load on your event staff and security for directions.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Personalized Experience</small>
                            <strong>Allow users to 'star' artists and build their own custom daily schedule.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Instant Communication</small>
                            <strong>Push real-time updates (e.g., 'Stage change due to weather') directly to the user's phone.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When the live experience is frustrating</p>
                        <p>If an attendee spends two hours of your festival standing in line, they won't come back next year.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Analog event operations frustrate modern attendees.</h2>
                        <p>Once the ticket is scanned, the real experience begins. If attendees have to carry a crumpled paper map, or miss their favorite artist because they were stuck in a chaotic line for a beer, the event experience is compromised. Relying on outdated analog systems strains your staff and annoys your guests.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The Bar Queue Bottleneck</h3>
                                <p>Massive lines form at the main bar, severely limiting the amount of revenue you can process per hour.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Lost Attendees</h3>
                                <p>Attendees miss crucial activations because the venue layout is confusing and signage is poor.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Missed Communications</h3>
                                <p>A headline act is moved to a different stage, but you have no way to quickly notify 20,000 people.</p>
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
                                <h2>The digital event companion.</h2>
                            </div>
                            <p>We engineer mobile-first tools that put the entire event experience in the attendee's pocket.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Attendee Web Apps (PWAs)</h3>
                                <p>Building fast, app-like portals designed specifically to perform well on congested mobile networks at live events.</p>
                                <div className="deliverable-tags"><small>PWA</small><small>Mobile</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Digital F&B Ordering</h3>
                                <p>Creating visual menus with 'add to cart' functionality, routing orders directly to the bar's point-of-sale system.</p>
                                <div className="deliverable-tags"><small>Commerce</small><small>Integration</small><small>Dining</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Interactive Wayfinding</h3>
                                <p>Custom Mapbox integrations showing the user's live location relative to stages, exits, and amenities.</p>
                                <div className="deliverable-tags"><small>Maps</small><small>Geolocation</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Schedule Builders</h3>
                                <p>React-based interfaces where users can 'heart' artists to generate a conflict-free personal timetable.</p>
                                <div className="deliverable-tags"><small>React</small><small>Logic</small><small>Engagement</small></div>
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
