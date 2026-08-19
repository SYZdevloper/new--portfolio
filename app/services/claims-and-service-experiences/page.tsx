import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/claims-and-service-experiences/" },
  title: "Claims & Service Experiences | Hyperlink Tech Solutions",
  description: "We develop digital first-notice-of-loss (FNOL) workflows that allow customers to upload photos and track their claim status in real-time, reducing call center volume.",
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
                    <strong>Customer Support</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Digital Claims</div>
                        <p className="eyebrow">Customer Support</p>
                        <h1 id="service-title">Compassionate, digital claims management.</h1>
                        <p className="hero-lead">We develop digital first-notice-of-loss (FNOL) workflows that allow customers to upload photos and track their claim status in real-time, reducing call center volume.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom React-based FNOL (First Notice of Loss) flows allowing customers to lodge a claim from their mobile phone at the scene of an incident</li>
                            <li>Seamless photo and video upload capabilities connected directly to the core claims management system</li>
                            <li>Live tracking dashboards where customers can see the exact status of their claim (e.g., 'Assessor Appointed', 'Awaiting Repair Quote')</li>
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
                            <small>01 · Faster Triage</small>
                            <strong>Receive structured data and photos instantly, allowing claims handlers to fast-track simple repairs.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Reduced Anxiety</small>
                            <strong>Stop customers from calling every day by providing a live 'Domino's Pizza-style' tracker for their claim status.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Lower Loss Ratios</small>
                            <strong>By capturing data at the scene immediately, you reduce the risk of fraudulent details being added later.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Compassionate UX</small>
                            <strong>Design an interface that is calming, clear, and easy to use for someone who has just experienced a stressful event.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When claims are painful</p>
                        <p>A customer who has just crashed their car doesn't want to navigate a 15-page PDF form.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Analog claims processes destroy customer loyalty.</h2>
                        <p>The claim is the moment of truth for an insurer. If a customer has suffered a loss and is forced to wait on hold for 45 minutes, only to be emailed a massive PDF form they have to print and scan, the relationship is broken. An opaque claims process creates massive anxiety and guarantees they will not renew.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The FNOL Bottleneck</h3>
                                <p>Customers abandon the digital claim and call the center because the web form crashed when they tried to upload a photo of the damage.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Status Black Holes</h3>
                                <p>Customers call your team three times a week because they have absolutely no idea if their repair quote was approved.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Data Re-keying</h3>
                                <p>Your claims team spends hours manually re-typing incident descriptions from an email into the core claims system.</p>
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
                                <h2>The digital claims companion.</h2>
                            </div>
                            <p>We engineer empathetic, highly functional workflows that turn the worst day of a customer's life into a seamless service experience.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Mobile-First FNOL Flows</h3>
                                <p>Building bespoke React flows that guide the user through incident reporting, using their phone's camera and GPS for accurate data.</p>
                                <div className="deliverable-tags"><small>UX</small><small>Mobile</small><small>Compassion</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Claims API Middleware</h3>
                                <p>Developing secure Node.js layers that push the structured claim data and media directly into systems like Guidewire ClaimCenter.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Integration</small><small>Logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Live Status Trackers</h3>
                                <p>Building dashboards that pull status updates from the core system, visually showing the customer exactly where they are in the process.</p>
                                <div className="deliverable-tags"><small>UX</small><small>Transparency</small><small>Service</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Communications</h3>
                                <p>Integrating with Twilio or SendGrid to trigger an SMS the moment an assessor is dispatched or a payment is approved.</p>
                                <div className="deliverable-tags"><small>Comms</small><small>Operations</small><small>Automation</small></div>
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
