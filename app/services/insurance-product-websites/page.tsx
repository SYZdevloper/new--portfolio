import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/insurance-product-websites/" },
  title: "Insurance Product Websites | Hyperlink Tech Solutions",
  description: "We design high-trust, high-performance websites for insurers and MGAs that clearly communicate coverage options and drive prospects into the quoting funnel.",
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
                    <strong>Product Discovery</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Insurance Websites</div>
                        <p className="eyebrow">Product Discovery</p>
                        <h1 id="service-title">Digitally showcase your insurance products.</h1>
                        <p className="hero-lead">We design high-trust, high-performance websites for insurers and MGAs that clearly communicate coverage options and drive prospects into the quoting funnel.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Dynamic coverage comparison tables built natively in React to help users choose the right policy</li>
                            <li>Enterprise-grade security and accessibility (WCAG) compliance built into the foundation</li>
                            <li>Headless CMS setups allowing marketing and compliance teams to update PDS/FSG documents instantly</li>
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
                            <small>01 · Brand Trust</small>
                            <strong>Digital experiences that convey institutional stability alongside modern insurtech agility.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Complex Clarity</small>
                            <strong>Translate dense Product Disclosure Statements into easily digestible visual marketing.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Higher Conversions</small>
                            <strong>Structure that guides the user seamlessly from a product page directly into the quote engine.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Compliance Agility</small>
                            <strong>Empower your team to update mandatory legal disclaimers globally without developer help.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When digital fails insurance</p>
                        <p>If a customer can't easily understand what is excluded from a policy, they won't buy it.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Poor digital presentation loses trust and premiums.</h2>
                        <p>Insurance is an invisible product built on trust. If a prospective policyholder lands on an outdated website where finding the coverage limits requires downloading a 40-page PDF, they will assume your claims process is equally archaic. They need immediate confidence in your cover and technology.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Information Hide-and-Seek</h3>
                                <p>Customers bounce because they cannot easily compare 'Basic' versus 'Comprehensive' cover on a mobile screen.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Slow Performance</h3>
                                <p>Your website feels outdated and sluggish, undermining trust in your institution's technical capability to pay a claim.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Compliance Bottlenecks</h3>
                                <p>Marketing is unable to update a legally required PDS link without waiting weeks for IT support.</p>
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
                                <h2>Digital flagships for modern insurance.</h2>
                            </div>
                            <p>We build decoupled frontend experiences that prioritize trust, clarity, and uncompromising speed.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Headless Architecture</h3>
                                <p>Next.js frontends connected to Sanity or Contentful, ensuring the site is lightning fast and highly secure.</p>
                                <div className="deliverable-tags"><small>React</small><small>Headless</small><small>Security</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Interactive Coverage Tools</h3>
                                <p>Building bespoke React components that allow users to toggle coverage options and instantly see the benefits without page reloads.</p>
                                <div className="deliverable-tags"><small>UX</small><small>React</small><small>Conversion</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Compliance Management</h3>
                                <p>Structuring the CMS so legal teams can easily manage global disclaimers, Target Market Determinations (TMDs), and PDS versions.</p>
                                <div className="deliverable-tags"><small>CMS</small><small>Compliance</small><small>Operations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Global Edge Hosting</h3>
                                <p>Deployment on Vercel to ensure your site loads instantly, capturing highly motivated users on their phones.</p>
                                <div className="deliverable-tags"><small>DevOps</small><small>Performance</small><small>Scale</small></div>
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
