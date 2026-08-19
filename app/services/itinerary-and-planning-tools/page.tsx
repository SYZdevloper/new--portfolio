import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/itinerary-and-planning-tools/" },
  title: "Itinerary & Planning Tools | Hyperlink Tech Solutions",
  description: "We develop interactive planning tools where users can drag-and-drop activities, select room types, and build custom itineraries that generate precise quotes instantly.",
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
                    <strong>Trip Customization</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Planning Tools</div>
                        <p className="eyebrow">Trip Customization</p>
                        <h1 id="service-title">Empower travelers to build their perfect trip.</h1>
                        <p className="hero-lead">We develop interactive planning tools where users can drag-and-drop activities, select room types, and build custom itineraries that generate precise quotes instantly.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Interactive drag-and-drop itinerary builders for Fully Independent Travel (FIT) packages</li>
                            <li>Dynamic pricing calculators that update the total cost in real-time as users add days or upgrades</li>
                            <li>Automated PDF quote generation for complex multi-leg journeys</li>
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
                            <small>01 · Higher Engagement</small>
                            <strong>Users spend significantly more time on site when they can visually build their trip.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Sales Cycles</small>
                            <strong>Reduce the back-and-forth emails between your travel agents and the customer.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Increased AOV</small>
                            <strong>Travelers are more likely to upgrade when they can instantly see the incremental cost.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Lead Generation</small>
                            <strong>Capture high-intent leads by requiring an email to save or download the custom itinerary.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When customization is manual</p>
                        <p>Your sales team shouldn't spend hours typing up quotes in Word documents.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Manual quoting creates an expensive bottleneck.</h2>
                        <p>Modern travelers want bespoke experiences, but if they have to wait 48 hours for a travel agent to email them a PDF quote for a custom trip, they lose interest. When customization is purely manual, your sales team is bogged down in admin work instead of actually selling.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Slow Response Times</h3>
                                <p>Customers request a custom trip, but your team takes two days to calculate the pricing across five different suppliers.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Visual Disconnect</h3>
                                <p>The quote sent to the customer is a dense text email or a boring spreadsheet, lacking the inspirational imagery that sells the trip.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Inflexible Changes</h3>
                                <p>If the customer wants to change one hotel, the agent has to recalculate the entire trip manually.</p>
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
                                <h2>Digital trip building.</h2>
                            </div>
                            <p>We build platforms that turn complex travel planning into an engaging, visual, and instantaneous experience.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Interactive Trip Builders</h3>
                                <p>React-based interfaces where users can select starting dates, add destinations, and choose accommodation tiers visually.</p>
                                <div className="deliverable-tags"><small>UX</small><small>React</small><small>Logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Real-time Quoting Engines</h3>
                                <p>Logic layers that instantly calculate total package costs based on the specific combination of components selected.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Pricing</small><small>APIs</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Dynamic PDF Generators</h3>
                                <p>Engines that take the selected itinerary and automatically generate a stunning, image-rich PDF quote ready for the customer.</p>
                                <div className="deliverable-tags"><small>Reporting</small><small>PDFs</small><small>Automation</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Agent Co-Browsing</h3>
                                <p>Features allowing your sales team to log in 'as the customer' to build or modify the itinerary collaboratively.</p>
                                <div className="deliverable-tags"><small>Auth</small><small>Sales</small><small>Support</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Travel Platform</p>
                            <h2>Modernizing global tour operations.</h2>
                        </div>
                        <p>See how we helped a global luxury tour operator migrate from an outdated legacy reservation system to a modern headless architecture, resulting in a 40% increase in direct consumer bookings and massive efficiency gains for their travel agents.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Travel Tech</span>
                                <span>Reservation Systems</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/travel-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From discovery to departure.</h2>
                                <p>We developed a custom frontend that integrates directly with their Tour Operator Software (TourCMS). By removing the friction of a clunky booking widget and building a dynamic itinerary planner, we transformed how customers buy complex travel.</p>
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
                        <h2 id="faq-title">Common questions about travel tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with our Tour Operator Software or GDS?</summary>
                            <p>We build secure API middleware to connect your headless frontend directly to platforms like TourCMS, Rezdy, or major GDS (Global Distribution Systems) like Amadeus. This ensures live availability, dynamic pricing, and seamless reservation injection.</p>
                        </details>
                        <details>
                            <summary>Can you build custom multi-day booking engines?</summary>
                            <p>Yes. Off-the-shelf booking tools often fail when a trip involves multiple hotels, flights, and activities over 14 days. We build fully custom React-based booking flows that handle complex, multi-leg itineraries intuitively.</p>
                        </details>
                        <details>
                            <summary>How do you handle dynamic pricing and multiple currencies?</summary>
                            <p>Our custom booking engines calculate live pricing based on your backend rules (seasonality, capacity) and use geolocation to display the correct currency. We integrate with gateways like Stripe to process payments natively without redirects.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other travel capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/destination-and-trip-discovery/"><div><small>Discovery</small><h3>Destination Hubs</h3><p>Ignite the desire to travel.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/availability-and-booking-journeys/"><div><small>Revenue</small><h3>Booking Journeys</h3><p>Streamline complex bookings.</p></div><b>Explore booking ↗</b></a>
                        <a className="related-card" href="/services/itinerary-and-planning-tools/"><div><small>Customization</small><h3>Planning Tools</h3><p>Build the perfect trip.</p></div><b>Explore tools ↗</b></a>
                        <a className="related-card" href="/services/traveller-portals/"><div><small>Service</small><h3>Traveller Portals</h3><p>A digital companion.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your travel <br />and tour operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From visually stunning destination hubs to custom multi-leg booking engines and digital traveller portals, we build software that drives direct bookings and elevates the journey.</p>
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
