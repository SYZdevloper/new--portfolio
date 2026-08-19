import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/tickets-enquiries-and-booking/" },
  title: "Tickets, Enquiries & Booking | Hyperlink Tech Solutions",
  description: "We build robust ticketing integrations and interactive venue booking tools that can handle massive traffic spikes during festival pre-sales or manage complex corporate RFP processes.",
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
                    <strong>Conversion</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Ticketing & RFPs</div>
                        <p className="eyebrow">Conversion</p>
                        <h1 id="service-title">Frictionless ticketing and venue booking.</h1>
                        <p className="hero-lead">We build robust ticketing integrations and interactive venue booking tools that can handle massive traffic spikes during festival pre-sales or manage complex corporate RFP processes.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Seamless API integrations with major ticketing platforms (Ticketmaster, Eventbrite, Tixel)</li>
                            <li>Edge-based queueing systems designed to handle massive concurrency without crashing</li>
                            <li>Interactive digital RFP tools for booking corporate boxes, VIP suites, or entire venues</li>
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
                            <small>01 · Zero Downtime</small>
                            <strong>Architecture built specifically to survive the traffic spike of a major ticket drop.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Higher Conversion</small>
                            <strong>Remove the friction of being redirected to an ugly, separate booking domain unnecessarily.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Streamlined Enquiries</small>
                            <strong>Automate the corporate event and VIP suite booking process to qualify leads faster.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Fair Access</small>
                            <strong>Implement digital waiting rooms to manage inventory and prevent bot scalping.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When the drop fails</p>
                        <p>Nothing ruins an event brand faster than the website crashing when tickets go on sale.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Traffic spikes expose weak digital infrastructure.</h2>
                        <p>You secured the headliner, paid for the ads, and generated the hype. At 9:00 AM, tickets go live, millions of users hit the site—and it crashes. Standard monolithic websites simply cannot handle the sudden concurrency of a major event drop, resulting in lost revenue and a PR nightmare on social media.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Server Crashes</h3>
                                <p>The website goes down completely within minutes of the pre-sale email being sent.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>The Redirect Drop-off</h3>
                                <p>Users are suddenly redirected to a completely different, off-brand URL to actually buy the ticket.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Manual VIP Quotes</h3>
                                <p>Your events team wastes hours manually typing up quotes for corporate suites because there is no digital RFP tool.</p>
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
                                <h2>Bulletproof sales architecture.</h2>
                            </div>
                            <p>We engineer booking and ticketing integrations that handle massive scale while remaining beautiful.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Static Site Generation (SSG)</h3>
                                <p>Using Next.js to pre-build the event site, meaning millions of users can hit the homepage without querying a database.</p>
                                <div className="deliverable-tags"><small>SSG</small><small>Scale</small><small>Reliability</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Ticketing API Middleware</h3>
                                <p>Developing secure Node.js layers that fetch live ticket availability without crashing the core ticketing system.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Integration</small><small>Logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Edge Queueing Systems</h3>
                                <p>Implementing digital waiting rooms (like Queue-it) to throttle traffic during a drop, protecting the checkout flow.</p>
                                <div className="deliverable-tags"><small>Scale</small><small>Cloud</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Interactive Venue Planners</h3>
                                <p>Building tools where corporate planners can view floor plans, select catering, and generate a live estimated quote.</p>
                                <div className="deliverable-tags"><small>React</small><small>Logic</small><small>Sales</small></div>
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
