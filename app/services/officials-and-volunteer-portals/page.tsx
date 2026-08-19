import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/officials-and-volunteer-portals/" },
  title: "Officials & Volunteer Portals | Hyperlink Tech Solutions",
  description: "We develop secure portals where referees, coaches, and volunteers can submit match reports, upload compliance documents, and manage their schedules.",
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
                    <strong>Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Official Portals</div>
                        <p className="eyebrow">Operations</p>
                        <h1 id="service-title">Empower the people who run the game.</h1>
                        <p className="hero-lead">We develop secure portals where referees, coaches, and volunteers can submit match reports, upload compliance documents, and manage their schedules.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Self-serve dashboards allowing referees to view upcoming assignments and accept or decline matches</li>
                            <li>Digital document vaults for uploading and validating Working With Children Checks and coaching accreditations</li>
                            <li>Mobile-first match reporting forms allowing officials to submit scores and incident reports instantly</li>
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
                            <strong>Automate the tracking of expired accreditations to ensure every official is legally compliant.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Results</small>
                            <strong>Mobile match reporting means ladders are updated on Saturday afternoon, not Tuesday morning.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Reduced Attrition</small>
                            <strong>Volunteers stay longer when they are supported by modern, easy-to-use digital tools.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Centralized Data</small>
                            <strong>Stop relying on a single staff member's spreadsheet to know who is qualified to referee a final.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When operations are analog</p>
                        <p>You cannot manage a 500-referee network using paper forms and WhatsApp.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Analog tools cripple volunteer efficiency.</h2>
                        <p>Grassroots and state-level sports run on volunteers and officials. If a referee has to fill out a paper incident report and mail it to the office, or if a coach's mandatory background check expires without anyone noticing, the association faces massive operational and legal risks.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Compliance Disasters</h3>
                                <p>A volunteer coaches a team despite their mandatory child-safety check having expired two months ago.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Data Delays</h3>
                                <p>The league ladder is incorrect all weekend because a referee forgot to text the final score to the administrator.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Scheduling Chaos</h3>
                                <p>Assigning referees is a nightmare of phone calls, emails, and last-minute cancellations handled on an Excel sheet.</p>
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
                                <h2>The digital official companion.</h2>
                            </div>
                            <p>We engineer mobile-first tools that turn volunteers into highly efficient operational nodes.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Official Dashboards</h3>
                                <p>Building secure web apps where referees log in to view their specific roster, integrated with the master competition draw.</p>
                                <div className="deliverable-tags"><small>Portals</small><small>Integration</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Digital Match Reporting</h3>
                                <p>Custom form logic allowing officials to input scores, red cards, and injuries on their phone before they leave the field.</p>
                                <div className="deliverable-tags"><small>Forms</small><small>Operations</small><small>Mobile</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Accreditation Vaults</h3>
                                <p>Secure upload portals where coaches attach certificates, coupled with logic that flags profiles 30 days before expiry.</p>
                                <div className="deliverable-tags"><small>Compliance</small><small>Data</small><small>Security</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Identity Management (CIAM)</h3>
                                <p>Secure login flows ensuring only active, compliant officials can access sensitive participant data.</p>
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
