import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/events-tickets-and-programs/" },
  title: "Events, Tickets & Programs | Hyperlink Tech Solutions",
  description: "We build custom ticketing engines and program booking portals for holiday camps, coaching clinics, and major association events.",
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
                        <div className="hero-status">Booking Portals</div>
                        <p className="eyebrow">Revenue</p>
                        <h1 id="service-title">Maximize event and program participation.</h1>
                        <p className="hero-lead">We build custom ticketing engines and program booking portals for holiday camps, coaching clinics, and major association events.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom booking interfaces for multi-day clinics, allowing parents to select specific days or full weeks</li>
                            <li>Digital ticketing for gala dinners, presentation nights, and major association tournaments</li>
                            <li>Capacity management systems automatically closing registrations when a clinic or event is full</li>
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
                            <small>01 · Increased Revenue</small>
                            <strong>Make it incredibly easy for members to discover and book ancillary programs like holiday camps.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Reduced Admin</small>
                            <strong>Eliminate the need for staff to manually track clinic numbers on an Excel spreadsheet.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Accurate Medical Data</small>
                            <strong>Ensure dietary requirements and medical conditions are captured during the ticket purchase.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Smoother Check-in</small>
                            <strong>Generate digital QR tickets for fast, scanning-based entry at events.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When booking is messy</p>
                        <p>Managing a 100-kid holiday clinic via email and bank transfers is a disaster.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Disorganized operations cause event chaos.</h2>
                        <p>Associations generate massive revenue from ancillary programs, but managing them is often an administrative nightmare. If a parent has to email the office to book their child into a Tuesday/Thursday clinic, and then manually transfer funds, errors occur. When capacity is managed manually, overbooking leads to safety risks.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The Spreadsheet Nightmare</h3>
                                <p>Your staff spends hours manually cross-referencing bank deposits with a list of kids attending a coaching clinic.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Lost Medical Info</h3>
                                <p>A coach runs a camp but doesn't have the allergy information because it was buried in a parent's email.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Clunky Ticketing</h3>
                                <p>Selling tickets for the annual presentation night through a generic third-party site looks unprofessional and costs high fees.</p>
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
                                <h2>Centralized program commerce.</h2>
                            </div>
                            <p>We engineer secure portals that professionalize how you sell and manage events.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Program Booking Engines</h3>
                                <p>React-based interfaces where users can select specific dates, add merchandise, and checkout in one seamless transaction.</p>
                                <div className="deliverable-tags"><small>UX</small><small>Commerce</small><small>Conversion</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Capacity & Inventory Logic</h3>
                                <p>Backend systems that instantly lock out dates when a coach-to-player ratio limit is reached.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Operations</small><small>Safety</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Digital Data Collection</h3>
                                <p>Custom forms built into the checkout flow that mandate the capture of emergency contacts and medical conditions.</p>
                                <div className="deliverable-tags"><small>Forms</small><small>Compliance</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Ticketing & Scanners</h3>
                                <p>Generating dynamic QR codes for event entry and building simple web-apps for staff to scan attendees at the door.</p>
                                <div className="deliverable-tags"><small>Mobile</small><small>Integration</small><small>Operations</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Sports Platform</p>
                            <h2>Transforming national participation.</h2>
                        </div>
                        <p>See how we helped a national sporting body replace a fragile legacy registration system with a custom React portal, reducing member onboarding time by 60% while securely handling millions in subscription revenue.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Sports Tech</span>
                                <span>Member Portals</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/sports-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>A frictionless season start.</h2>
                                <p>We developed a secure, scalable membership platform that integrates directly with Stripe for complex family billing and auto-validates working-with-children checks via third-party APIs, eliminating manual admin for club volunteers.</p>
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
                        <h2 id="faq-title">Common questions about sports tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle complex family registration discounts?</summary>
                            <p>Off-the-shelf tools fail at sports math. We build custom logic engines that automatically calculate 'third-child' discounts, prorated mid-season fees, and state-level government sports vouchers dynamically during checkout.</p>
                        </details>
                        <details>
                            <summary>Can you integrate live competition data (ladders and fixtures)?</summary>
                            <p>Yes. We build custom API middleware that connects the website frontend directly to competition management systems (like PlayHQ, GameDay, or Opta), displaying live scores and ladders without slowing down the site.</p>
                        </details>
                        <details>
                            <summary>Do you build portals for coaches and referees?</summary>
                            <p>Yes. We build secure B2B-style portals where officials can submit match reports digitally, view their assignments, and upload mandatory compliance documents (like background checks) securely.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other sports capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/club-team-and-competition-websites/"><div><small>Community</small><h3>Sports Websites</h3><p>The digital home of the sport.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/membership-and-registration/"><div><small>Growth</small><h3>Member Onboarding</h3><p>Frictionless registrations.</p></div><b>Explore registration ↗</b></a>
                        <a className="related-card" href="/services/officials-and-volunteer-portals/"><div><small>Operations</small><h3>Officials Portals</h3><p>Empower the volunteers.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/membership-and-participation-dashboards/"><div><small>Analytics</small><h3>Participation BI</h3><p>Visibility into sport health.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your sports <br />and association operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From complex membership billing engines to live competition dashboards and secure official portals, we build software that drives participation and reduces administrative burden.</p>
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
