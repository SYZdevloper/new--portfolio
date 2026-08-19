import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/traveller-portals/" },
  title: "Traveller Portals | Hyperlink Tech Solutions",
  description: "We build secure portals where travelers can manage their bookings, download digital tickets, view daily itineraries, and receive live updates while on the road.",
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
                    <strong>Post-Booking Service</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Traveller Portals</div>
                        <p className="eyebrow">Post-Booking Service</p>
                        <h1 id="service-title">A digital companion for the entire journey.</h1>
                        <p className="hero-lead">We build secure portals where travelers can manage their bookings, download digital tickets, view daily itineraries, and receive live updates while on the road.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Mobile-first Progressive Web Apps (PWAs) allowing travelers to access their itinerary without downloading an app</li>
                            <li>Secure digital vaults for storing passports, visas, and electronic flight tickets</li>
                            <li>Automated pre-trip checklists and payment reminders for upcoming balances</li>
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
                            <strong>Travelers can find their own answers (e.g., meeting times, hotel addresses) without calling your team.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Payments</small>
                            <strong>Automated reminders and a one-click payment portal ensure final balances are paid on time.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Seamless Communication</small>
                            <strong>Push real-time updates (e.g., 'The bus is 10 minutes late') directly to the traveler's phone.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Operational Efficiency</small>
                            <strong>Digitize the collection of dietary requirements and waiver signatures.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When service is analog</p>
                        <p>Mailing physical welcome packs or relying on PDF attachments is outdated.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Fragmented communication causes anxiety.</h2>
                        <p>Once a traveler books, the anxiety sets in. Do they have the right visa? When is the final payment due? Where do they meet the guide? If your company relies on a dozen different email threads to manage this process, critical information gets lost, leading to stressed travelers and overwhelmed support staff.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Lost Information</h3>
                                <p>Travelers can't find the email with their hotel voucher when they are standing at the check-in desk in a foreign country.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Payment Chasing</h3>
                                <p>Your finance team spends hours calling customers to collect final balance payments 60 days before departure.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Manual Data Collection</h3>
                                <p>Staff manually copy and paste passport numbers and dietary requirements from emails into the reservation system.</p>
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
                                <h2>The digital travel companion.</h2>
                            </div>
                            <p>We engineer mobile-first tools that put the entire trip details securely in the traveler's pocket.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Traveller Web Apps (PWAs)</h3>
                                <p>Building fast, app-like portals accessible via a magic link in an email—no App Store download required.</p>
                                <div className="deliverable-tags"><small>PWA</small><small>Mobile</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Digital Itineraries</h3>
                                <p>Creating interactive daily schedules complete with maps, guide contact details, and weather forecasts.</p>
                                <div className="deliverable-tags"><small>UX</small><small>Maps</small><small>Integration</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Secure Data Collection</h3>
                                <p>Encrypted digital forms allowing guests to submit passport details, dietary requirements, and digital waivers.</p>
                                <div className="deliverable-tags"><small>Forms</small><small>Security</small><small>Compliance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Self-Serve Payment Gateways</h3>
                                <p>Integrating Stripe to allow travelers to view their outstanding balance and pay via credit card or ACH securely.</p>
                                <div className="deliverable-tags"><small>Payments</small><small>Finance</small><small>APIs</small></div>
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
