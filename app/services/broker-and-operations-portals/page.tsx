import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/broker-and-operations-portals/" },
  title: "Broker & Operations Portals | Hyperlink Tech Solutions",
  description: "We build specialized B2B portals for insurance brokers to generate bulk quotes, manage client portfolios, and interact directly with underwriting teams.",
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
                    <strong>B2B & Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Broker Portals</div>
                        <p className="eyebrow">B2B & Operations</p>
                        <h1 id="service-title">Empower your distribution network.</h1>
                        <p className="hero-lead">We build specialized B2B portals for insurance brokers to generate bulk quotes, manage client portfolios, and interact directly with underwriting teams.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom B2B portals allowing brokers to quote, bind, and issue policies on behalf of their clients instantly</li>
                            <li>Portfolio management dashboards where brokers can see all upcoming renewals and outstanding premium payments across their client base</li>
                            <li>Secure communication channels for brokers to refer complex risks directly to underwriters with attached documentation</li>
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
                            <small>01 · Increased Broker Loyalty</small>
                            <strong>Brokers will place more business with you if your digital quoting system is the fastest and easiest to use.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Reduced Underwriting Admin</small>
                            <strong>Stop your underwriters from spending half their day responding to basic quote requests via email.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Faster Renewals</small>
                            <strong>Allow brokers to bulk-renew dozens of simple policies with a single click in the portal.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Centralized B2B Identity</small>
                            <strong>Ensure broker principals can manage access levels for their junior staff within your system securely.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When B2B is messy</p>
                        <p>If a broker has to wait 3 days for an email quote, they will place the business with a competitor whose portal gives them a price in 3 minutes.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Clunky broker tools cost you market share.</h2>
                        <p>Brokers are your primary distribution channel for commercial lines. If they are forced to use a clunky, legacy portal that constantly times out, or if they have to rely on email to get a simple quote, they will actively avoid placing business with you. Speed and ease of use are the ultimate competitive advantages in B2B insurance.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The Email Grind</h3>
                                <p>Your underwriters are drowning in email quote requests for simple risks that should have been straight-through processed by a portal.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Lost Renewals</h3>
                                <p>Brokers miss renewal dates because your system doesn't provide them with a clear, consolidated dashboard of their upcoming expiring policies.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>System Frustration</h3>
                                <p>Brokers stop using your portal because it requires them to re-enter data they already have in their own Broker Management System (BMS).</p>
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
                                <h2>Command centers for broker distribution.</h2>
                            </div>
                            <p>We engineer B2B portals that give your distribution partners the speed and autonomy they demand.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Broker Quoting Engines</h3>
                                <p>React-based interfaces designed for speed, allowing expert users to bypass marketing copy and generate quotes in seconds.</p>
                                <div className="deliverable-tags"><small>UX</small><small>Speed</small><small>B2B</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Portfolio Dashboards</h3>
                                <p>API integrations pulling live data from the PAS, giving brokers a 360-degree view of all their active clients, claims, and renewals.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>Dashboards</small><small>Operations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Referral Workflows</h3>
                                <p>Custom logic that automatically stops a quote if it breaches underwriting guidelines, securely routing the data and documents to a human underwriter.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Workflow</small><small>Risk</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>B2B Identity Management</h3>
                                <p>Secure login flows (Auth0) with delegated administration, allowing a brokerage manager to onboard their own staff to your portal.</p>
                                <div className="deliverable-tags"><small>Security</small><small>Auth</small><small>Scale</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Insurtech Platform</p>
                            <h2>Transforming the quote journey.</h2>
                        </div>
                        <p>See how we helped a specialty MGA replace their massive PDF application with a dynamic React quoting engine, cutting the time to bind a policy from 3 days to 4 minutes and increasing direct-to-consumer sales by 60%.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Insurtech</span>
                                <span>Quoting Engines</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/insurance-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Frictionless digital binding.</h2>
                                <p>We developed a secure quoting flow that asks dynamic questions based on previous answers, pings a third-party rating API in real-time, and generates a bindable quote and digital policy document instantly upon credit card payment.</p>
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
                        <h2 id="faq-title">Common questions about insurtech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with complex rating or underwriting engines?</summary>
                            <p>We build API middleware that connects the frontend quoting flow directly to your rating engine (like Duck Creek, Guidewire, or proprietary Excel-based APIs), pulling live premiums without exposing the underlying logic to the web.</p>
                        </details>
                        <details>
                            <summary>Can you handle dynamic question sets?</summary>
                            <p>Yes. We build intelligent forms using React state management. If a user selects 'Yes' to owning a swimming pool, the form instantly expands to ask about fencing and diving boards, keeping the initial interface clean and uncluttered.</p>
                        </details>
                        <details>
                            <summary>Do you build broker portals as well as direct-to-consumer?</summary>
                            <p>Absolutely. We build specialized B2B portals where brokers can manage a portfolio of clients, clone past quotes for faster renewals, and securely upload complex risk assessment documents directly to the underwriter.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other insurance capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/insurance-product-websites/"><div><small>Discovery</small><h3>Product Websites</h3><p>Showcase coverages.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/quote-and-application-journeys/"><div><small>Conversion</small><h3>Quoting Engines</h3><p>Frictionless binding.</p></div><b>Explore quoting ↗</b></a>
                        <a className="related-card" href="/services/policyholder-portals/"><div><small>Service</small><h3>Policyholder Portals</h3><p>Self-serve management.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/claims-and-service-experiences/"><div><small>Support</small><h3>Claims Workflows</h3><p>Digital FNOL.</p></div><b>Explore claims ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your insurance <br />and underwriting operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From dynamic quoting engines to seamless digital claims workflows and secure broker portals, we build software that drives premium growth and reduces operational costs.</p>
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
