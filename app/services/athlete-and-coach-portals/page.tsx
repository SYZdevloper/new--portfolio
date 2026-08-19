import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/athlete-and-coach-portals/" },
  title: "Athlete & Coach Portals | Hyperlink Tech Solutions",
  description: "We build secure, role-based portals where athletes can log subjective wellness data, view training prescriptions, and coaches can manage entire squad rosters efficiently.",
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
                        <div className="hero-status">Athlete Portals</div>
                        <p className="eyebrow">Digital Service</p>
                        <h1 id="service-title">The central hub for high performance.</h1>
                        <p className="hero-lead">We build secure, role-based portals where athletes can log subjective wellness data, view training prescriptions, and coaches can manage entire squad rosters efficiently.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Role-based dashboards ensuring medical staff, strength coaches, and athletes only see the data relevant to them</li>
                            <li>Mobile-first Athlete Web Apps for logging morning wellness (Sleep, Soreness, RPE) in under 30 seconds</li>
                            <li>Secure messaging and push notifications for last-minute schedule changes or video review sharing</li>
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
                            <small>01 · Higher Compliance</small>
                            <strong>Athletes actually fill out their wellness surveys when the app is fast and easy to use.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Time Savings</small>
                            <strong>Coaches stop chasing players on WhatsApp and manage everything through a centralized hub.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Data Security</small>
                            <strong>Ensure highly sensitive medical and performance data is locked behind enterprise-grade authentication.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Contextual Visibility</small>
                            <strong>A coach can see that a player slept poorly before designing that day's intense training block.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When operations are fragmented</p>
                        <p>You cannot manage an elite sporting team using five different WhatsApp groups.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Fragmented communication creates performance gaps.</h2>
                        <p>Elite teams generate massive amounts of data and scheduling changes daily. If the strength coach sends the gym program via email, the physio asks for injury updates on WhatsApp, and the video analyst uses a separate app, the athlete becomes overwhelmed and compliance drops. Poor communication directly impacts on-field performance.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Low Wellness Compliance</h3>
                                <p>Athletes stop filling out their morning surveys because the legacy app takes two minutes to load and keeps crashing.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Information Black Holes</h3>
                                <p>A player misses a critical video review session because the schedule change was buried in a group chat.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Privacy Risks</h3>
                                <p>Highly sensitive injury data is being discussed on unencrypted, consumer messaging apps.</p>
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
                                <h2>Centralized high-performance operations.</h2>
                            </div>
                            <p>We engineer secure environments that professionalize the relationship between athletes and coaching staff.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Athlete Web Apps (PWAs)</h3>
                                <p>Building fast, mobile-first portals that athletes can save to their home screen for daily data entry.</p>
                                <div className="deliverable-tags"><small>PWA</small><small>Mobile</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Role-Based Dashboards</h3>
                                <p>Custom React interfaces tailored for specific staff roles (e.g., Medical sees injuries, S&C sees load).</p>
                                <div className="deliverable-tags"><small>React</small><small>Logic</small><small>Operations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Digital Program Delivery</h3>
                                <p>Interfaces for strength coaches to push individualized lifting programs directly to the athlete's device.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Data</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Identity Management (CIAM)</h3>
                                <p>Secure login flows using Auth0 to ensure strict data privacy and HIPAA/GDPR compliance where required.</p>
                                <div className="deliverable-tags"><small>Security</small><small>Auth</small><small>Compliance</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured SportsTech Platform</p>
                            <h2>Unifying high-performance data.</h2>
                        </div>
                        <p>See how we helped a professional sports franchise replace five different Excel spreadsheets and three disconnected hardware apps with a single, unified Athlete Management System (AMS), saving the sports science team 15 hours of data entry per week.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>High Performance</span>
                                <span>Data Engineering</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/sportstech-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From silos to scorecards.</h2>
                                <p>We developed a secure cloud infrastructure that automatically ingests GPS data (Catapult), strength metrics (VALD), and subjective wellness surveys into a single dashboard, allowing the High-Performance Manager to identify injury risks instantly.</p>
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
                        <h2 id="faq-title">Common questions about SportsTech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate data from different hardware providers (GPS, Force Plates)?</summary>
                            <p>We build robust ETL (Extract, Transform, Load) pipelines that connect to the APIs of major providers (like STATSports, Catapult, or VALD), normalizing the disparate data into a single, unified data warehouse for your team.</p>
                        </details>
                        <details>
                            <summary>Can you build mobile apps for athletes to log wellness data?</summary>
                            <p>Yes. We build lightweight, secure React Native apps where athletes can quickly log RPE (Rate of Perceived Exertion), sleep quality, and muscle soreness before they even arrive at the training facility.</p>
                        </details>
                        <details>
                            <summary>How do you ensure medical and performance data is secure?</summary>
                            <p>Athlete health data is highly sensitive. We implement enterprise-grade security protocols (like Auth0 for identity management), encrypt data at rest, and ensure role-based access control so a coach only sees what the medical team allows.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other high-performance capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/sportstech-product-websites/"><div><small>Discovery</small><h3>Product Sites</h3><p>Commercialize your tech.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/athlete-and-coach-portals/"><div><small>Service</small><h3>Athlete Portals</h3><p>The high-performance hub.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/testing-and-assessment-workflows/"><div><small>Operations</small><h3>Testing Workflows</h3><p>Digitize sports science.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/device-and-data-integrations/"><div><small>Engineering</small><h3>Device Integrations</h3><p>Connect the ecosystem.</p></div><b>Explore integrations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your high-performance <br />and SportsTech operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From complex hardware API integrations to mobile athlete wellness apps and predictive injury dashboards, we build software that drives elite performance.</p>
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
