import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/memberships-packs-and-payments/" },
  title: "Memberships, Packs & Payments | Hyperlink Tech Solutions",
  description: "We build robust payment integrations supporting tiered memberships, class packs, and drop-in rates, seamlessly connected to Stripe and your core management system.",
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
                    <strong>Revenue</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Fitness E-commerce</div>
                        <p className="eyebrow">Revenue</p>
                        <h1 id="service-title">Optimize your recurring revenue.</h1>
                        <p className="hero-lead">We build robust payment integrations supporting tiered memberships, class packs, and drop-in rates, seamlessly connected to Stripe and your core management system.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Frictionless checkout flows for purchasing digital class packs and recurring monthly memberships</li>
                            <li>Seamless API integrations connecting web purchases directly to the client's profile in the studio software</li>
                            <li>Digital wallets supporting Apple Pay and Google Pay for one-click introductory offer purchases</li>
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
                            <small>01 · Increased Sales</small>
                            <strong>Make it incredibly easy for a new client to buy the '2-Week Unlimited Intro' package on their phone.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Reduced Admin</small>
                            <strong>Stop your front desk staff from having to manually swipe credit cards or fix failed payments.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Accurate Auto-Pay</small>
                            <strong>Ensure that recurring memberships are billed accurately and on schedule.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Flexible Pricing</small>
                            <strong>Easily run flash sales or targeted promo codes directly through the custom frontend.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When buying is hard</p>
                        <p>If it takes 5 steps to buy a class pack, the client will change their mind.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Friction at checkout costs you members.</h2>
                        <p>The moment a client decides to commit to a membership or a 10-pack, the process must be flawless. If they have to create a clunky account on a third-party site, enter their credit card multiple times, or encounter errors with a promo code, the impulse to buy is lost.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>High Cart Abandonment</h3>
                                <p>Clients quit the checkout process because the legacy system requires too many unnecessary data fields.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Failed Recurring Billing</h3>
                                <p>You lose revenue because the current system doesn't have an elegant way to handle expired credit cards or retries.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Promo Code Chaos</h3>
                                <p>Marketing runs an Instagram campaign, but the off-the-shelf booking system cannot apply the discount correctly.</p>
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
                                <h2>Automated fitness commerce.</h2>
                            </div>
                            <p>We engineer e-commerce experiences designed specifically for the unique pricing models of boutique fitness.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Custom Checkout Frontends</h3>
                                <p>React-based interfaces where users can select a membership tier, apply a promo code, and checkout in seconds.</p>
                                <div className="deliverable-tags"><small>UX</small><small>Commerce</small><small>Conversion</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Studio System Syncing</h3>
                                <p>API integrations ensuring that when a pack is bought on the website, it instantly appears in the client's account in Mindbody or Mariana Tek.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>APIs</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Subscription Management</h3>
                                <p>Implementing Stripe Billing to handle complex recurring payments, failed card dunning, and prorations.</p>
                                <div className="deliverable-tags"><small>Payments</small><small>Fintech</small><small>Automation</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Digital Gift Cards</h3>
                                <p>Custom workflows allowing users to purchase, schedule, and email digital gift cards for class packs to friends.</p>
                                <div className="deliverable-tags"><small>E-commerce</small><small>Logic</small><small>UX</small></div>
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
