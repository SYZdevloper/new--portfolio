import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/offers-dining-and-events/" },
  title: "Offers, Dining & Events | Hyperlink Tech Solutions",
  description: "We engineer integrated platforms for booking restaurant tables, spa treatments, and event spaces, ensuring guests spend more time and money on-property.",
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
                    <strong>Revenue Expansion</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Ancillary Revenue</div>
                        <p className="eyebrow">Revenue Expansion</p>
                        <h1 id="service-title">Drive ancillary revenue across the property.</h1>
                        <p className="hero-lead">We engineer integrated platforms for booking restaurant tables, spa treatments, and event spaces, ensuring guests spend more time and money on-property.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom dining reservation systems integrated with platforms like SevenRooms or OpenTable</li>
                            <li>Interactive event space viewers and digital RFP (Request for Proposal) generators for corporate bookings</li>
                            <li>Dynamic offer engines that bundle rooms, dining, and experiences into bookable packages</li>
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
                            <small>01 · Higher RevPAR</small>
                            <strong>Increase total revenue per available room by making ancillary services easy to book.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Streamlined Events</small>
                            <strong>Automate the corporate and wedding RFP process to qualify leads faster.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Captured F&B</small>
                            <strong>Ensure hotel guests book your restaurants rather than leaving the property.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Centralized Management</small>
                            <strong>Update all dining menus and spa prices from a single headless CMS.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When amenities are hidden</p>
                        <p>If a guest doesn't know the spa is open, they won't book a massage.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Disconnected services leave money on the table.</h2>
                        <p>Many hotels treat their restaurants, spas, and event spaces as separate businesses digitally. If a guest has to navigate three different websites or call three different phone numbers to organize their stay, they will simply spend their money off-property.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Missed Dining Revenue</h3>
                                <p>Guests eat off-property because they couldn't easily view the menu or book a table from their phone in the room.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Manual Event Quotes</h3>
                                <p>Your events team wastes hours manually typing up quotes for weddings because there is no digital RFP tool.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Inflexible Packaging</h3>
                                <p>Marketing wants to launch a 'Stay & Dine' package, but the legacy booking engine can't handle bundled pricing.</p>
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
                                <h2>Holistic property commerce.</h2>
                            </div>
                            <p>We build digital platforms that cross-sell your entire physical footprint seamlessly.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>F&B Integrations</h3>
                                <p>Connecting the website frontend to restaurant management systems to allow real-time table availability and menu syncing.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>APIs</small><small>Dining</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Interactive Venue Planners</h3>
                                <p>Building tools where event planners can view floor plans, select catering options, and generate a live estimated quote.</p>
                                <div className="deliverable-tags"><small>React</small><small>Logic</small><small>Events</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Dynamic Package Engines</h3>
                                <p>Developing logic that allows marketing teams to bundle specific room types with specific ancillary services in the CMS.</p>
                                <div className="deliverable-tags"><small>CMS</small><small>Logic</small><small>Marketing</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Spa & Activity Booking</h3>
                                <p>Custom interfaces for reserving timed services, integrating with specialized wellness management software.</p>
                                <div className="deliverable-tags"><small>Scheduling</small><small>UX</small><small>Wellness</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Hospitality Platform</p>
                            <h2>Elevating the digital guest journey.</h2>
                        </div>
                        <p>See how we helped a luxury hotel group redesign their entire digital footprint, migrating to a headless architecture that seamlessly blended immersive property storytelling with a lightning-fast custom booking engine.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Hospitality Tech</span>
                                <span>Direct Bookings</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/hospitality-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Reducing reliance on OTAs.</h2>
                                <p>We developed a custom frontend that integrates directly with their Property Management System (PMS). By removing the friction of a clunky legacy booking widget and replacing it with a tailored React experience, direct bookings increased by 42%.</p>
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
                        <h2 id="faq-title">Common questions about hospitality tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with our Property Management System (PMS)?</summary>
                            <p>We build secure API middleware to connect your headless frontend directly to industry-standard PMS platforms like Opera (Oracle), Cloudbeds, or Mews. This ensures live availability, real-time pricing, and seamless reservation injection.</p>
                        </details>
                        <details>
                            <summary>Can you build custom booking engines instead of using widgets?</summary>
                            <p>Yes. Legacy booking widgets often break the brand experience and hurt conversions. We build fully custom React-based booking flows that look and feel like part of your website, while pulling data from your backend systems via API.</p>
                        </details>
                        <details>
                            <summary>How do you ensure the website is fast despite heavy imagery and video?</summary>
                            <p>We use Next.js and advanced media optimization techniques (lazy loading, next-gen formats, edge caching). This allows us to build visually immersive, video-heavy hotel sites that still load in under a second and rank highly on Google.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other hospitality capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/property-and-experience-websites/"><div><small>Discovery</small><h3>Property Websites</h3><p>Immersive digital destinations.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/availability-and-direct-booking/"><div><small>Revenue</small><h3>Direct Booking</h3><p>Maximize high-margin reservations.</p></div><b>Explore booking ↗</b></a>
                        <a className="related-card" href="/services/guest-and-concierge-portals/"><div><small>Service</small><h3>Guest Portals</h3><p>Elevate the on-property experience.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/offers-dining-and-events/"><div><small>Ancillary</small><h3>Dining & Events</h3><p>Drive revenue across the property.</p></div><b>Explore ancillary ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your hospitality <br />and tourism operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From stunning headless property websites to custom PMS-integrated booking engines and digital concierge portals, we build software that drives direct revenue and elevates the guest experience.</p>
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
