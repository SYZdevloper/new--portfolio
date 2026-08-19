import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/client-and-program-portals/" },
  title: "Client & Program Portals | Hyperlink Tech Solutions",
  description: "We develop secure portals where members can manage their subscriptions, track their attendance, access digital wellness programs, and update their payment methods.",
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
                        <div className="hero-status">Member Portals</div>
                        <p className="eyebrow">Digital Service</p>
                        <h1 id="service-title">Self-serve management for your clients.</h1>
                        <p className="hero-lead">We develop secure portals where members can manage their subscriptions, track their attendance, access digital wellness programs, and update their payment methods.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Self-serve dashboards allowing clients to view upcoming bookings, cancel classes, and track their 'remaining credits'</li>
                            <li>Digital content vaults for studios offering hybrid models (e.g., On-Demand video libraries or nutrition PDFs)</li>
                            <li>Automated waitlist management allowing users to see their queue position and confirm/decline spots</li>
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
                            <strong>Clients can cancel a class or update an expired credit card without calling the front desk.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Increased Engagement</small>
                            <strong>Gamify the experience by showing clients their 'classes attended' milestones directly in the portal.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Hybrid Revenue</small>
                            <strong>Monetize digital content by gating video libraries behind a specific membership tier.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Seamless Check-in</small>
                            <strong>Provide a digital barcode or QR code in the portal for fast scanning at the studio entrance.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When service is analog</p>
                        <p>Your front desk shouldn't be overwhelmed by people asking 'how many classes do I have left?'</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Lack of self-service frustrates modern members.</h2>
                        <p>Boutique fitness clients expect a premium digital experience to match the premium physical experience. If they have to call the studio to cancel a booking, or if they are penalized with a late-cancel fee because the app crashed, they become frustrated and eventually churn.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>High Admin Burden</h3>
                                <p>Your front desk team spends all day answering basic account questions instead of selling memberships to walk-ins.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Opaque Balances</h3>
                                <p>Clients don't know when their class pack expires, leading to angry emails when they lose unused credits.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Login Friction</h3>
                                <p>Users abandon their accounts because the password reset process is broken or relies on a confusing third-party email.</p>
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
                                <h2>Centralized member operations.</h2>
                            </div>
                            <p>We engineer secure dashboards that give your clients complete control over their wellness journey.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Member Dashboards</h3>
                                <p>API integrations pulling live data from the studio software, allowing clients to view their active packs, upcoming bookings, and attendance history.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>Dashboards</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Self-Serve Account Actions</h3>
                                <p>Logic engines that allow users to safely pause a membership, update a credit card, or cancel a class within the studio's policy window.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>APIs</small><small>Service</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Digital Content Delivery</h3>
                                <p>Custom interfaces for streaming gated VOD (Video on Demand) content or downloading specialized nutrition programs based on their subscription tier.</p>
                                <div className="deliverable-tags"><small>Media</small><small>Auth</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Identity Management (CIAM)</h3>
                                <p>Secure, centralized login flows using Auth0 to ensure a seamless experience across web and native mobile apps.</p>
                                <div className="deliverable-tags"><small>Security</small><small>Auth</small><small>Data</small></div>
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
