import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/financial-product-websites/" },
  title: "Financial Product Websites | Hyperlink Tech Solutions",
  description: "We design high-trust, high-performance websites for banks, credit unions, and fintechs that clearly communicate complex financial products and drive application conversions.",
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
                        <div className="hero-status">Finance Websites</div>
                        <p className="eyebrow">Product Discovery</p>
                        <h1 id="service-title">Digitally showcase your financial products.</h1>
                        <p className="hero-lead">We design high-trust, high-performance websites for banks, credit unions, and fintechs that clearly communicate complex financial products and drive application conversions.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Dynamic rate tables and interactive calculators (mortgage, savings) built natively in React</li>
                            <li>Enterprise-grade security and accessibility (WCAG) compliance built into the foundation</li>
                            <li>Headless CMS setups allowing marketing and compliance teams to update rates and disclaimers instantly</li>
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
                            <strong>Digital experiences that convey institutional stability alongside modern fintech agility.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Complex Clarity</small>
                            <strong>Translate dense financial product terms into easily digestible visual marketing.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Higher Conversions</small>
                            <strong>Structure that guides the user seamlessly from a product page directly into the digital application.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Marketing Agility</small>
                            <strong>Empower your team to update interest rates in minutes without developer help.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When digital fails finance</p>
                        <p>If a customer can't easily calculate their loan repayment, they will go to a bank that makes it simple.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Poor digital presentation loses trust and deposits.</h2>
                        <p>Finance is built on trust and clarity. If a prospective customer lands on an outdated bank website where finding the current mortgage rate requires downloading a PDF, they will assume your digital banking experience is equally archaic. They need immediate confidence in your products and technology.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Information Hide-and-Seek</h3>
                                <p>Customers bounce because they cannot easily compare the features of three different credit cards on a mobile screen.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Slow Performance</h3>
                                <p>Your website feels outdated and sluggish, undermining trust in your institution's technical capability to secure their money.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Compliance Bottlenecks</h3>
                                <p>Marketing is unable to update a legally required disclaimer without waiting weeks for IT support.</p>
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
                                <h2>Digital flagships for modern finance.</h2>
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
                                <h3>Interactive Calculators</h3>
                                <p>Building bespoke React components that allow users to instantly model loan repayments or compound interest without page reloads.</p>
                                <div className="deliverable-tags"><small>UX</small><small>React</small><small>Conversion</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Compliance Management</h3>
                                <p>Structuring the CMS so legal teams can easily manage global disclaimers and rate changes from a single dashboard.</p>
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
                            <p className="eyebrow">Featured Finance Platform</p>
                            <h2>Transforming digital lending.</h2>
                        </div>
                        <p>See how we helped a mid-tier credit union replace their PDF application forms with a custom React onboarding flow integrated with digital identity verification, reducing loan abandonment rates by 55%.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Fintech</span>
                                <span>Digital Onboarding</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/finance-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Frictionless, compliant growth.</h2>
                                <p>We developed a secure application portal that dynamically adjusts based on the loan type, automatically validates identity via third-party APIs (eKYC), and pushes the clean data directly into their Loan Origination System (LOS).</p>
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
                        <h2 id="faq-title">Common questions about financial tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you ensure data security and compliance (e.g., GDPR, PCI)?</summary>
                            <p>We build with compliance at the core. We utilize enterprise-grade Identity and Access Management (like Auth0), ensure data is encrypted at rest and in transit, and architect the frontend so sensitive data (like card numbers) bypasses our servers completely via secure tokens.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with core banking or legacy origination systems?</summary>
                            <p>Yes. We specialize in building secure API middleware that connects modern web and mobile frontends to legacy systems (like Fiserv, Jack Henry, or proprietary LOS platforms), allowing for real-time data exchange without exposing the core.</p>
                        </details>
                        <details>
                            <summary>Do you build tools for branch staff or just the customer?</summary>
                            <p>Both. While we build self-serve customer portals, we also build secure internal dashboards (B2E) that allow branch staff and advisers to view the same customer data, assisting them with complex applications or document collection in real-time.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other finance capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/financial-product-websites/"><div><small>Discovery</small><h3>Product Websites</h3><p>Showcase financial products.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/digital-onboarding-and-applications/"><div><small>Conversion</small><h3>Digital Onboarding</h3><p>Frictionless applications.</p></div><b>Explore onboarding ↗</b></a>
                        <a className="related-card" href="/services/customer-account-portals/"><div><small>Service</small><h3>Account Portals</h3><p>Self-serve customer management.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/branch-adviser-and-service-workflows/"><div><small>Operations</small><h3>Branch Workflows</h3><p>Empower frontline staff.</p></div><b>Explore operations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your banking <br />and financial operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From compliant digital onboarding flows to secure customer portals and core banking API integrations, we build software that drives growth and reduces operational risk.</p>
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
