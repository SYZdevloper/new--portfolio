import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/event-and-venue-discovery/" },
  title: "Event & Venue Discovery | Hyperlink Tech Solutions",
  description: "We design visually immersive digital hubs for events, festivals, and physical venues, capturing the energy of the live experience while making it easy for attendees to explore line-ups and schedules.",
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
                    <strong>Inspiration & Discovery</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Event Websites</div>
                        <p className="eyebrow">Inspiration & Discovery</p>
                        <h1 id="service-title">Showcase unforgettable experiences.</h1>
                        <p className="hero-lead">We design visually immersive digital hubs for events, festivals, and physical venues, capturing the energy of the live experience while making it easy for attendees to explore line-ups and schedules.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Visually rich storytelling utilizing ambient video and heavy media optimization</li>
                            <li>Dynamic, filterable line-ups and schedules pulling live data from a headless CMS</li>
                            <li>Interactive 3D or SVG venue maps for spatial orientation before the event</li>
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
                            <small>01 · Brand Energy</small>
                            <strong>Digital experiences that capture the exact vibe of your festival or venue.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Unbreakable Speed</small>
                            <strong>Sub-second load times even with massive hero videos and high-res galleries.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · SEO Optimized</small>
                            <strong>Structure that ranks higher for artist and event-specific searches.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Marketing Agility</small>
                            <strong>Empower your team to update line-ups and set times without developer help.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When digital lacks energy</p>
                        <p>You can't sell a high-energy live experience with a boring, static website.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Poor digital experiences kill event hype.</h2>
                        <p>Live events are emotional purchases driven by anticipation. If a prospective attendee lands on a sluggish website with broken image galleries and dense, unreadable schedules, the excitement vanishes. They will bounce before clicking the 'Buy Tickets' button.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Slow Rich Media</h3>
                                <p>High-production after-movie videos cause the website to freeze and crash on mobile devices.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Frustrating Schedules</h3>
                                <p>Users cannot easily filter a 100-artist line-up by day or stage on their phone.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Developer Bottlenecks</h3>
                                <p>Marketing is unable to announce a surprise headline act instantly without waiting for IT support.</p>
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
                                <h2>Digital hubs for live events.</h2>
                            </div>
                            <p>We build decoupled frontend experiences that prioritize immersive storytelling and speed.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Headless Architecture</h3>
                                <p>Next.js frontends connected to Sanity or Contentful, separating the visual experience from the backend ticketing data.</p>
                                <div className="deliverable-tags"><small>React</small><small>Headless</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Dynamic Line-Up Grids</h3>
                                <p>Building complex, filterable interfaces that allow users to sort artists by genre, day, or venue stage instantly.</p>
                                <div className="deliverable-tags"><small>UX</small><small>React</small><small>Mobile</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Immersive Visuals</h3>
                                <p>Custom CSS and WebGL animations to visually guide users through the event vibe and ticketing tiers.</p>
                                <div className="deliverable-tags"><small>WebGL</small><small>UX</small><small>Storytelling</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Global Edge Hosting</h3>
                                <p>Deployment on Vercel to ensure your site loads instantly, even when thousands of users hit it at the exact same moment.</p>
                                <div className="deliverable-tags"><small>DevOps</small><small>Performance</small><small>Scale</small></div>
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
