import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/destination-and-trip-discovery/" },
  title: "Destination & Trip Discovery | Hyperlink Tech Solutions",
  description: "We build visually rich, fast-loading destination hubs and tour catalogues that inspire travelers and funnel high-intent traffic into your booking engine.",
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
                        <div className="hero-status">Destination Discovery</div>
                        <p className="eyebrow">Inspiration & Discovery</p>
                        <h1 id="service-title">Ignite the desire to travel.</h1>
                        <p className="hero-lead">We build visually rich, fast-loading destination hubs and tour catalogues that inspire travelers and funnel high-intent traffic into your booking engine.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Visually rich storytelling utilizing ambient video and interactive maps</li>
                            <li>Advanced faceted search allowing users to filter trips by region, activity level, or theme</li>
                            <li>Headless CMS setups allowing marketing teams to launch seasonal campaigns instantly</li>
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
                            <small>01 · Brand Elevation</small>
                            <strong>Digital experiences that match the awe of the physical destination.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Unbreakable Speed</small>
                            <strong>Sub-second load times even with massive hero videos and high-res galleries.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · SEO Optimized</small>
                            <strong>Structure that ranks higher for destination and experience-specific searches.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Marketing Agility</small>
                            <strong>Empower your team to update itineraries and media without developer help.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When digital fails to inspire</p>
                        <p>Selling a $10,000 African safari on a slow, template-based website is almost impossible.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Poor digital experiences kill travel conversions.</h2>
                        <p>Travel is an emotional purchase driven by visuals. If a prospective traveler lands on a sluggish website with broken image galleries and dense, unreadable text blocks, the inspiration vanishes. They will simply bounce and book with a competitor whose digital presence feels more trustworthy.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Slow Rich Media</h3>
                                <p>High-production drone videos cause the website to freeze and crash on mobile devices.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Frustrating Search</h3>
                                <p>Users cannot easily filter your 500+ tours to find the exact dates, physical rating, and destination they want.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Developer Bottlenecks</h3>
                                <p>Marketing is unable to launch a 'Summer Sale' landing page without waiting weeks for IT support.</p>
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
                                <h2>Digital flagships for travel brands.</h2>
                            </div>
                            <p>We build decoupled frontend experiences that prioritize immersive storytelling without sacrificing speed.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Headless Architecture</h3>
                                <p>Next.js frontends connected to Sanity or Contentful, separating the visual experience from the backend reservation data.</p>
                                <div className="deliverable-tags"><small>React</small><small>Headless</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Advanced Search Integration</h3>
                                <p>Implementing Algolia or Typesense to allow instant, typo-tolerant filtering of complex travel catalogues.</p>
                                <div className="deliverable-tags"><small>Search</small><small>UX</small><small>Discovery</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Immersive Visuals</h3>
                                <p>Custom CSS and WebGL animations to visually guide users through itineraries, route maps, and local experiences.</p>
                                <div className="deliverable-tags"><small>WebGL</small><small>Maps</small><small>Storytelling</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Global Edge Hosting</h3>
                                <p>Deployment on Vercel to ensure your site loads instantly whether the user is in London or Sydney.</p>
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
