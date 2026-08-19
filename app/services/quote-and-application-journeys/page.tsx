import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/quote-and-application-journeys/" },
  title: "Quote & Application Journeys | Hyperlink Tech Solutions",
  description: "We engineer dynamic quoting engines that integrate with complex rating APIs, allowing customers to build customized policies and purchase cover instantly.",
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
                    <strong>Conversion & Pricing</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Quoting Engines</div>
                        <p className="eyebrow">Conversion & Pricing</p>
                        <h1 id="service-title">Frictionless quoting and underwriting.</h1>
                        <p className="hero-lead">We engineer dynamic quoting engines that integrate with complex rating APIs, allowing customers to build customized policies and purchase cover instantly.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom React-based application flows that eliminate the need for downloading and printing PDF proposal forms</li>
                            <li>Dynamic logic that adapts the question set based on the specific risk or the applicant's previous answers</li>
                            <li>Live API integrations with your rating engine to instantly calculate premiums based on real-time data lookups (e.g., property data)</li>
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
                            <small>01 · Higher Completion</small>
                            <strong>Turn a frustrating 50-question form into a smooth, 5-minute mobile flow by only asking relevant questions.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Binding</small>
                            <strong>Push clean, validated data directly into your policy administration system, allowing instant credit card payment.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Reduced Fraud</small>
                            <strong>Integrate third-party data lookups (like vehicle registration APIs) to automatically verify risk details.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Omnichannel Resumption</small>
                            <strong>Allow a customer to start a quote on their phone and finish it later on a desktop.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When quoting is painful</p>
                        <p>If a customer has to print a form to get a business insurance quote, they will just use a broker.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Clunky quoting destroys direct acquisition.</h2>
                        <p>Insurers spend thousands on marketing only to force users into a quoting engine that looks like a digitized tax return. When the form is slow, asks irrelevant questions (like asking a tenant about roof materials), or fails to save progress, the customer abandons the process.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The PDF Drop-off</h3>
                                <p>Users abandon the application when they realize they have to download, print, and sign a physical proposal form.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Question Fatigue</h3>
                                <p>The legacy form asks 40 generic questions instead of dynamically filtering based on the risk profile, causing frustration on mobile.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Manual Underwriting Delays</h3>
                                <p>Policies take days to issue because underwriters have to manually review clean risks that should have been straight-through processed.</p>
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
                                <h2>Automated premium conversion.</h2>
                            </div>
                            <p>We engineer quoting flows that handle complex underwriting rules while remaining beautiful and frictionless.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Custom Quoting Frontends</h3>
                                <p>Building bespoke React flows that guide the user step-by-step, validating data and fetching real-time prices.</p>
                                <div className="deliverable-tags"><small>UX</small><small>React</small><small>Conversion</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Rating Engine API Middleware</h3>
                                <p>Developing secure Node.js layers that connect the web frontend directly to complex rating models (like Guidewire or proprietary APIs).</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Underwriting</small><small>Logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Dynamic Question Logic</h3>
                                <p>Building rules engines that skip irrelevant sections (e.g., hiding 'Pool Fencing' if the user selected 'Apartment').</p>
                                <div className="deliverable-tags"><small>Logic</small><small>UX</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Payment & Policy Generation</h3>
                                <p>Integrating Stripe for instant binding and dynamically generating the personalized PDF policy schedule for download.</p>
                                <div className="deliverable-tags"><small>Fintech</small><small>Integration</small><small>Data</small></div>
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
