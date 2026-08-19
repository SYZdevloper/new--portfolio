import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/service-and-workshop-experiences/" },
  title: "Service & Workshop Portals | Hyperlink Tech Solutions",
  description: "We create transparent service booking portals, repair tracking dashboards, and digital vehicle health reports that build trust and drive retention.",
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
                    <strong>Aftersales & Maintenance</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Aftersales Digital Experiences</div>
                        <p className="eyebrow">Aftersales & Maintenance</p>
                        <h1 id="service-title">Digitize the vehicle service journey.</h1>
                        <p className="hero-lead">We create transparent service booking portals, repair tracking dashboards, and digital vehicle health reports that build trust and drive retention.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Self-serve service scheduling and loaner vehicle requests</li>
                            <li>Digital approvals for additional repair work</li>
                            <li>Transparent tracking from drop-off to pickup</li>
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
                            <small>01 · Higher Retention</small>
                            <strong>Convenient digital service booking keeps customers coming back.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Approvals</small>
                            <strong>SMS links for instant approval on video-backed repair quotes.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Reduced Calls</small>
                            <strong>Status trackers eliminate 'Is my car ready yet?' phone calls.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Loaner Management</small>
                            <strong>Seamlessly assign and track courtesy vehicles.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When service causes stress</p>
                        <p>Lack of transparency breeds mistrust in the workshop.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Aftersales is the key to dealership profitability.</h2>
                        <p>A clunky service experience drives customers to independent mechanics. Dealerships must offer a digital, transparent, and frictionless maintenance journey.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Phone Tag</h3>
                                <p>Service advisors waste hours calling customers for approval on brake pads or tires.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Black Box Anxiety</h3>
                                <p>Customers drop off their car and have no visibility into its status until the end of the day.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Inconvenient Booking</h3>
                                <p>Forcing customers to call during business hours to schedule routine maintenance.</p>
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
                                <h2>Transparent aftersales tools.</h2>
                            </div>
                            <p>We build portals that connect your service bay directly to the customer's smartphone.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Service Scheduling</h3>
                                <p>Smart booking flows that understand standard repair times and workshop bay availability.</p>
                                <div className="deliverable-tags"><small>Booking</small><small>Workshop</small><small>Logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Digital Health Checks</h3>
                                <p>Mobile-friendly interfaces displaying mechanic videos, photos, and itemized quotes for instant approval.</p>
                                <div className="deliverable-tags"><small>VHC</small><small>Video</small><small>Approvals</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Status Tracking</h3>
                                <p>Pizza-tracker style progress bars showing exactly what stage of service the vehicle is in.</p>
                                <div className="deliverable-tags"><small>WebSockets</small><small>Tracking</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Online Payments</h3>
                                <p>Secure checkout links sent via SMS allowing customers to pay their invoice before they even arrive.</p>
                                <div className="deliverable-tags"><small>SMS</small><small>Stripe</small><small>Payments</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Automotive Build</p>
                            <h2>Transforming the digital automotive journey.</h2>
                        </div>
                        <p>See how we modernized a leading network's digital presence to increase conversion rates and operational efficiency.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Digital Automotive Platform</span>
                                <span>UX/UI + Custom Engineering</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/automotive-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From friction to fast lanes.</h2>
                                <p>We completely re-architected the customer journey and backend operational software, resulting in a cohesive experience that bridges the gap between digital discovery and physical fulfillment.</p>
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
                        <h2 id="faq-title">Common questions about our automotive platforms.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Do you integrate with existing Dealer Management Systems (DMS)?</summary>
                            <p>Yes. We have extensive experience integrating with leading DMS and CRM platforms like CDK Global, Reynolds and Reynolds, Salesforce, and custom legacy systems.</p>
                        </details>
                        <details>
                            <summary>How long does a typical build take?</summary>
                            <p>Most enterprise automotive projects range from 3 to 6 months, depending on the complexity of legacy integrations and custom workflow requirements.</p>
                        </details>
                        <details>
                            <summary>Can you handle inventory data feeds from multiple branches?</summary>
                            <p>Absolutely. We build robust data ingestion pipelines that aggregate, sanitize, and normalize inventory data across multiple physical locations into a single, unified search experience.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other automotive capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/leads-appointments-and-sales/"><div><small>Sales</small><h3>Leads & Appointments</h3><p>Turn browsing into test drives and closed deals.</p></div><b>Explore sales ↗</b></a>
                        <a className="related-card" href="/services/rental-subscription-and-booking/"><div><small>Mobility</small><h3>Rental & Booking</h3><p>Powering flexible mobility and subscription software.</p></div><b>Explore booking ↗</b></a>
                        <a className="related-card" href="/services/service-and-workshop-experiences/"><div><small>Aftersales</small><h3>Service Portals</h3><p>Digitize the vehicle service and maintenance journey.</p></div><b>Explore service ↗</b></a>
                        <a className="related-card" href="/services/branch-fleet-and-operations/"><div><small>Operations</small><h3>Branch & Fleet</h3><p>Run your automotive operations from one dashboard.</p></div><b>Explore operations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Accelerate your digital <br />automotive journey. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build platforms that drive sales, streamline operations, and modernize the customer experience? Let's discuss your roadmap.</p>
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
