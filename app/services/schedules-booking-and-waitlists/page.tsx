import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/schedules-booking-and-waitlists/" },
  title: "Schedules, Booking & Waitlists | Hyperlink Tech Solutions",
  description: "We engineer custom booking flows that connect directly to your studio management software, ensuring clients can easily secure a spot or join a waitlist without leaving your brand experience.",
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
                        <div className="hero-status">Booking & Waitlists</div>
                        <p className="eyebrow">Conversion</p>
                        <h1 id="service-title">Frictionless class and service booking.</h1>
                        <p className="hero-lead">We engineer custom booking flows that connect directly to your studio management software, ensuring clients can easily secure a spot or join a waitlist without leaving your brand experience.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom React-based booking flows that eliminate the need for clunky third-party widgets (e.g., Mindbody iframe)</li>
                            <li>Live API integrations with major reservation platforms (Mindbody, Mariana Tek, Zenoti)</li>
                            <li>Interactive spot-selection tools allowing clients to choose a specific bike or reformer bed</li>
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
                            <small>01 · Higher Conversion</small>
                            <strong>Remove the friction of being redirected to an ugly, separate booking domain.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Flawless Mobile</small>
                            <strong>Ensure that booking a 6 AM class on an iPhone is a smooth, 10-second process.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Dynamic Spot Selection</small>
                            <strong>Charge a premium for the 'front row' bikes directly in the flow.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Smoother Waitlists</small>
                            <strong>Automatically move waitlisted clients into the class when a cancellation occurs via API.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When booking is difficult</p>
                        <p>If a user is ready to book a class, don't make them fight a broken widget.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Clunky booking widgets destroy class utilization.</h2>
                        <p>Studios spend thousands on marketing only to send users to an out-of-the-box booking widget that looks terrible on mobile. When the schedule is slow to load, visually disconnected from the brand, or requires creating a confusing third-party account, the client abandons the reservation.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The Redirect Drop-off</h3>
                                <p>Users abandon the booking when they are suddenly redirected to a different URL (like Mindbody Online) to checkout.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Mobile Checkout Failures</h3>
                                <p>The legacy booking widget is not responsive, making it impossible to select a time slot or bike on an iPhone.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Loss of Brand Control</h3>
                                <p>The third-party booking platform controls the email confirmation and user account, diluting your brand.</p>
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
                                <h2>Custom reservation architecture.</h2>
                            </div>
                            <p>We engineer booking flows that handle the heavy lifting of capacity logic while remaining beautiful and frictionless.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Custom Booking Frontends</h3>
                                <p>Building bespoke React booking flows that keep the user on your domain from class selection to confirmation.</p>
                                <div className="deliverable-tags"><small>UX</small><small>React</small><small>Conversion</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Studio API Middleware</h3>
                                <p>Developing secure Node.js layers that translate availability requests between the modern frontend and legacy studio databases.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Integration</small><small>Logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Spot Selection UI</h3>
                                <p>Building interactive, SVG-based room maps where users can pick their exact reformer or treadmill.</p>
                                <div className="deliverable-tags"><small>React</small><small>SVG</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Waitlist Automation</h3>
                                <p>Implementing logic to seamlessly handle waitlist joins and push notifications when a spot opens up.</p>
                                <div className="deliverable-tags"><small>Operations</small><small>Logic</small><small>Service</small></div>
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
