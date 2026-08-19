import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/guest-and-concierge-portals/" },
  title: "Guest & Concierge Portals | Hyperlink Tech Solutions",
  description: "We develop secure guest portals where visitors can manage reservations, request room service, access digital keys, and chat directly with the concierge.",
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
                        <div className="hero-status">Guest Experience</div>
                        <p className="eyebrow">Digital Service</p>
                        <h1 id="service-title">Elevate the on-property experience.</h1>
                        <p className="hero-lead">We develop secure guest portals where visitors can manage reservations, request room service, access digital keys, and chat directly with the concierge.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Mobile-first Progressive Web Apps (PWAs) allowing guests to access services without downloading an app</li>
                            <li>Digital room service ordering integrated directly with the F&B point-of-sale system</li>
                            <li>Automated pre-arrival check-in flows to bypass the front desk queue</li>
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
                            <small>01 · Seamless Check-in</small>
                            <strong>Reduce lobby queues by allowing guests to complete registration on their phone.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Higher Room Service</small>
                            <strong>Visual, digital menus dramatically increase in-room dining order values.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Instant Communication</small>
                            <strong>Allow guests to request more towels via chat instead of calling the front desk.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Operational Efficiency</small>
                            <strong>Route guest requests automatically to housekeeping or maintenance.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When service is analog</p>
                        <p>Modern travelers expect to manage their stay from their phone.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Analog service creates operational bottlenecks.</h2>
                        <p>If a guest has to pick up a physical phone to order a burger, or wait in a 20-minute line just to confirm their passport details, the luxury experience is broken. Relying on printed compendiums and phone calls strains your staff and frustrates your guests.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Front Desk Friction</h3>
                                <p>Massive queues form at 3:00 PM because every guest has to manually sign registration cards.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Lost Room Service Revenue</h3>
                                <p>Guests skip in-room dining because the printed menu in the drawer is outdated and unappealing.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Missed Communications</h3>
                                <p>Housekeeping misses a request for extra pillows because the front desk was too busy to log the phone call.</p>
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
                                <h2>The digital concierge.</h2>
                            </div>
                            <p>We engineer mobile-first tools that put the entire hotel's services in the guest's pocket.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Guest Web Apps (PWAs)</h3>
                                <p>Building fast, app-like portals accessible via a QR code in the room—no App Store download required.</p>
                                <div className="deliverable-tags"><small>PWA</small><small>Mobile</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Digital F&B Ordering</h3>
                                <p>Creating visual menus with 'add to cart' functionality, routing orders directly to the kitchen display system (KDS).</p>
                                <div className="deliverable-tags"><small>Commerce</small><small>Integration</small><small>Dining</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Pre-Arrival Workflows</h3>
                                <p>Secure digital forms allowing guests to submit ID, provide credit card pre-auth, and state preferences before they land.</p>
                                <div className="deliverable-tags"><small>Forms</small><small>Security</small><small>Operations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Service Ticketing Middleware</h3>
                                <p>Connecting guest portal requests directly into internal hotel task management systems (like HotSOS or ALICE).</p>
                                <div className="deliverable-tags"><small>Integration</small><small>APIs</small><small>Operations</small></div>
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
