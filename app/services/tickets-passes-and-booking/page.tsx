import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/tickets-passes-and-booking/" },
  title: "Tickets, Passes & Booking | Hyperlink Tech Solutions",
  description: "We engineer custom ticketing flows that handle dynamic pricing, time-slotted entry, and multi-day passes, ensuring guests can secure entry instantly from their phones.",
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
                        <div className="hero-status">Ticketing Engines</div>
                        <p className="eyebrow">Conversion</p>
                        <h1 id="service-title">Frictionless visitor ticketing.</h1>
                        <p className="hero-lead">We engineer custom ticketing flows that handle dynamic pricing, time-slotted entry, and multi-day passes, ensuring guests can secure entry instantly from their phones.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom React-based checkout flows that eliminate clunky, redirected third-party ticketing widgets</li>
                            <li>Live API integrations with your core ticketing system (Gateway, Centaman, Roller) for capacity management</li>
                            <li>Seamless cross-selling of ancillary products (e.g., parking, fast passes, meal deals) during the flow</li>
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
                            <strong>Turn a frustrating 5-step checkout process into a smooth, 1-minute mobile transaction.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Increased Yield</small>
                            <strong>Boost Per-Capita spending by easily upselling VIP experiences or parking before checkout.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Capacity Control</small>
                            <strong>Ensure time-slotted entry limits are perfectly respected to prevent overcrowding.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Smoother Entry</small>
                            <strong>Generate digital tickets that scan instantly at the turnstile, reducing gate queues.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When buying is difficult</p>
                        <p>If it takes 10 minutes to buy a ticket on a phone, families will just show up and cause a line at the gate.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Clunky ticketing widgets destroy online pre-sales.</h2>
                        <p>Attractions spend thousands on marketing only to send users to an out-of-the-box ticketing portal that looks terrible on mobile. When the calendar is slow to load, selecting ticket types is confusing, or the system crashes during payment, the visitor abandons the cart. This forces them to buy at the physical gate, requiring more staff and causing massive queues.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The Redirect Drop-off</h3>
                                <p>Users abandon the purchase when they are suddenly redirected to a different URL (like an iframe widget) that doesn't match your brand.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Mobile Checkout Failures</h3>
                                <p>The legacy booking widget is not responsive, making it impossible to select a specific time-slot on an iPhone.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Missed Ancillary Revenue</h3>
                                <p>The off-the-shelf system makes it too difficult to cleanly offer a 'Buy Parking Now' upsell before the final payment screen.</p>
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
                                <h2>Custom ticketing architecture.</h2>
                            </div>
                            <p>We engineer booking flows that handle complex capacity logic while remaining beautiful and frictionless.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Custom Checkout Frontends</h3>
                                <p>Building bespoke React ticketing flows that keep the user on your domain from date selection to payment.</p>
                                <div className="deliverable-tags"><small>UX</small><small>React</small><small>Conversion</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Ticketing API Middleware</h3>
                                <p>Developing secure Node.js layers that translate availability requests between the modern frontend and legacy POS databases.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Integration</small><small>Logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Dynamic Calendar UIs</h3>
                                <p>Building fast, interactive calendars that visually indicate peak pricing days or sold-out time slots instantly.</p>
                                <div className="deliverable-tags"><small>React</small><small>Pricing</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Digital Wallet Integration</h3>
                                <p>Implementing Stripe/Adyen to support Apple Pay and generating native Apple Wallet passes for the tickets.</p>
                                <div className="deliverable-tags"><small>Payments</small><small>Fintech</small><small>Mobile</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Attractions Platform</p>
                            <h2>Transforming the visitor experience.</h2>
                        </div>
                        <p>See how we helped a major regional zoo replace a clunky legacy ticketing widget with a custom React booking flow, increasing online pre-sales by 40% and drastically reducing queues at the front gate on Saturday mornings.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Visitor Tech</span>
                                <span>Ticketing Integrations</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/attractions-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Frictionless entry, higher revenue.</h2>
                                <p>We developed a secure ticketing engine connected directly to their POS system (like Gateway or Centaman). Families can now purchase time-slotted tickets, add a giraffe-feeding experience to their cart, and checkout with Apple Pay in seconds.</p>
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
                        <h2 id="faq-title">Common questions about attractions tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with complex ticketing systems like Gateway Ticketing or Centaman?</summary>
                            <p>We build API middleware that connects your custom web frontend directly to your core ticketing software. This allows us to pull live capacity, dynamic pricing, and pass validations without exposing the core database.</p>
                        </details>
                        <details>
                            <summary>Can you handle time-slotted or capacity-limited entry?</summary>
                            <p>Yes. We build interactive calendar and time-picker UIs that query the ticketing system in real-time. If a 10:00 AM slot reaches its 50-person limit, our frontend immediately grays it out to prevent overselling.</p>
                        </details>
                        <details>
                            <summary>Do you build digital tickets for Apple Wallet or Google Pay?</summary>
                            <p>Yes. Upon successful checkout, we can automatically generate dynamic QR codes and native Apple Wallet/Google Pay passes that your turnstiles or gate staff can scan instantly.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other attraction capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/attraction-and-activity-websites/"><div><small>Discovery</small><h3>Attraction Websites</h3><p>Showcase the experience.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/tickets-passes-and-booking/"><div><small>Revenue</small><h3>Ticketing & Passes</h3><p>Frictionless gate entry.</p></div><b>Explore ticketing ↗</b></a>
                        <a className="related-card" href="/services/membership-and-visitor-accounts/"><div><small>Loyalty</small><h3>Member Portals</h3><p>Self-serve passholders.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/groups-events-and-education/"><div><small>B2B Operations</small><h3>Group Bookings</h3><p>Streamline large groups.</p></div><b>Explore B2B ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your attraction <br />and visitor operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From custom ticketing engines to digital passholder wallets and live attendance dashboards, we build software that drives revenue and reduces gate friction.</p>
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
