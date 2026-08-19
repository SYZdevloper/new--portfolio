import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/brand-service-and-location-websites/" },
  title: "Brand, Service & Location Websites | Hyperlink Tech Solutions",
  description: "We design visually stunning, high-performance websites for boutique fitness studios, gyms, and wellness clinics that drive foot traffic and membership signups.",
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
                    <strong>Brand Discovery</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Fitness Websites</div>
                        <p className="eyebrow">Brand Discovery</p>
                        <h1 id="service-title">Digitally showcase your wellness brand.</h1>
                        <p className="hero-lead">We design visually stunning, high-performance websites for boutique fitness studios, gyms, and wellness clinics that drive foot traffic and membership signups.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Visually rich storytelling utilizing ambient video and high-resolution studio photography</li>
                            <li>Dynamic, location-aware schedules that update instantly based on the nearest physical studio</li>
                            <li>Headless CMS setups allowing marketing to launch new instructor profiles or challenges instantly</li>
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
                            <strong>Digital experiences that match the premium aesthetic of your physical studio.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Unbreakable Speed</small>
                            <strong>Sub-second load times even with massive video headers on mobile devices.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Local SEO</small>
                            <strong>Structure that ensures your specific locations rank #1 in local map searches.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Marketing Agility</small>
                            <strong>Empower your team to update pricing and intro-offers without developer help.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When digital fails physical</p>
                        <p>If a potential client can't feel the vibe of your studio online, they won't buy a pass.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Poor digital experiences kill introductory signups.</h2>
                        <p>Fitness is an emotional, aesthetic-driven purchase. If a prospective member lands on a sluggish website with broken images and a confusing layout, the inspiration vanishes. They will bounce and book an intro class with a competitor whose digital presence feels more modern and trustworthy.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Vague Aesthetics</h3>
                                <p>The website looks like a generic template and completely fails to capture the energy of your specific classes.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Location Confusion</h3>
                                <p>A client tries to view the schedule for the downtown studio but accidentally looks at the suburban location because the site navigation is poor.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Developer Bottlenecks</h3>
                                <p>Marketing is unable to add the new 'Summer Shred Challenge' to the homepage without waiting weeks for IT support.</p>
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
                                <h2>Digital flagships for boutique fitness.</h2>
                            </div>
                            <p>We build decoupled frontend experiences that prioritize visual energy without sacrificing speed.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Headless Architecture</h3>
                                <p>Next.js frontends connected to Sanity or Contentful, separating the visual experience from the backend booking data.</p>
                                <div className="deliverable-tags"><small>React</small><small>Headless</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Dynamic Studio Pages</h3>
                                <p>Building location-specific pages that pull live schedules and pricing for that exact studio, ensuring perfect local SEO.</p>
                                <div className="deliverable-tags"><small>SEO</small><small>UX</small><small>Mobile</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Geolocation & Routing</h3>
                                <p>Implementing logic that detects the user's location and automatically serves the schedule for the nearest gym.</p>
                                <div className="deliverable-tags"><small>Maps</small><small>Logic</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Global Edge Hosting</h3>
                                <p>Deployment on Vercel to ensure your site loads instantly, capturing highly motivated users on their phones.</p>
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
                            <p className="eyebrow">Featured Wellness Platform</p>
                            <h2>Owning the boutique studio experience.</h2>
                        </div>
                        <p>See how we helped a rapidly expanding pilates franchise ditch their clunky off-the-shelf booking widget and build a custom React frontend integrated directly with Mariana Tek, resulting in a 40% increase in web conversions.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Fitness Tech</span>
                                <span>Booking Integrations</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/wellness-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Frictionless booking, premium brand.</h2>
                                <p>We developed a secure booking engine connected directly to their studio management system. Clients can now filter classes by instructor, book a specific reformer bed, and securely pay for a membership package without ever leaving the brand's domain.</p>
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
                        <h2 id="faq-title">Common questions about fitness tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with systems like Mindbody or Mariana Tek?</summary>
                            <p>We build API middleware that connects your custom web frontend directly to your core studio software. This allows us to pull live schedules, availability, and pricing without relying on ugly, iframe-based widgets.</p>
                        </details>
                        <details>
                            <summary>Can you build custom apps for our studio?</summary>
                            <p>Yes. We use React Native to build high-performance iOS and Android apps for your members. These apps provide push notifications, easy class booking, and digital check-in (QR codes) at the front desk.</p>
                        </details>
                        <details>
                            <summary>Do you handle multi-location schedules?</summary>
                            <p>Yes. For franchise or multi-unit operators, we build geolocation logic that automatically detects where the user is and displays the schedule for the nearest studio, while still allowing them to filter across the whole network.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other wellness capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/brand-service-and-location-websites/"><div><small>Discovery</small><h3>Brand Websites</h3><p>Showcase the experience.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/schedules-booking-and-waitlists/"><div><small>Conversion</small><h3>Class Booking</h3><p>Frictionless reservations.</p></div><b>Explore booking ↗</b></a>
                        <a className="related-card" href="/services/memberships-packs-and-payments/"><div><small>Revenue</small><h3>Memberships</h3><p>Optimize recurring revenue.</p></div><b>Explore memberships ↗</b></a>
                        <a className="related-card" href="/services/client-and-program-portals/"><div><small>Service</small><h3>Client Portals</h3><p>Self-serve management.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your fitness <br />and wellness operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From seamless API-driven class booking flows to digital membership portals and multi-location analytics dashboards, we build software that drives studio growth.</p>
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
