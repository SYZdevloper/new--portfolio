import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/service-and-information-websites/" },
  title: "Service & Information Websites | Hyperlink Tech Solutions",
  description: "We design accessible, high-performance websites for public utilities (water, power, gas, telecom), ensuring citizens can easily find information, pay bills, and report faults.",
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
                    <strong>Utility Services</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Utility Websites</div>
                        <p className="eyebrow">Utility Services</p>
                        <h1 id="service-title">Clear digital pathways for public services.</h1>
                        <p className="hero-lead">We design accessible, high-performance websites for public utilities (water, power, gas, telecom), ensuring citizens can easily find information, pay bills, and report faults.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Strict WCAG 2.1 AA accessibility compliance for all community users</li>
                            <li>Task-oriented UX design that prioritizes paying bills and reporting faults</li>
                            <li>Scalable cloud architecture that stays online during major weather events</li>
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
                            <small>01 · Lower Call Volume</small>
                            <strong>Users can easily find answers and self-serve online.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Accessibility First</small>
                            <strong>Ensure your digital services are usable by all citizens.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Rapid Updates</small>
                            <strong>Publish emergency notices to the homepage in seconds.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · High Uptime</small>
                            <strong>Architecture designed to withstand massive traffic spikes.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When public websites fail</p>
                        <p>Citizens shouldn't need a manual to figure out how to pay their water bill.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Clunky websites overwhelm your call center.</h2>
                        <p>Public utility websites serve a massive, diverse demographic. If your site is cluttered, hard to navigate on a mobile phone, or non-compliant with accessibility standards, frustrated residents will default to calling your support center—driving up operational costs.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Information Overload</h3>
                                <p>Important tasks like 'Report a Leak' are buried under pages of corporate press releases.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Accessibility Failures</h3>
                                <p>Visually impaired users or elderly citizens struggle to navigate the site to pay their bills.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Crash Under Load</h3>
                                <p>During a major storm, the influx of residents checking the homepage causes the server to crash.</p>
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
                                <h2>Digital foundations for utilities.</h2>
                            </div>
                            <p>We build public-facing platforms focused entirely on clarity, speed, and accessibility.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Task-Oriented UX</h3>
                                <p>Homepage designs that put high-frequency actions (Pay Bill, Report Fault, Outages) front and center.</p>
                                <div className="deliverable-tags"><small>UX/UI</small><small>Figma</small><small>Design</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>WCAG Compliant Frontend</h3>
                                <p>Codebases rigorously tested for screen readers, keyboard navigation, and color contrast.</p>
                                <div className="deliverable-tags"><small>A11y</small><small>HTML</small><small>React</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Headless CMS Architecture</h3>
                                <p>Next.js paired with Sanity or Contentful, empowering comms teams to publish emergency banners instantly.</p>
                                <div className="deliverable-tags"><small>Next.js</small><small>Sanity</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Edge Caching</h3>
                                <p>Deployment on Vercel or AWS CloudFront to ensure the site never goes down during traffic spikes.</p>
                                <div className="deliverable-tags"><small>CDN</small><small>AWS</small><small>Uptime</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Utility Platform</p>
                            <h2>Transforming citizen services.</h2>
                        </div>
                        <p>See how we helped a major regional water corporation completely redesign their digital ecosystem, allowing customers to easily track consumption, report faults, and pay bills online—drastically reducing call center load.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Gov & Utility Tech</span>
                                <span>Portals & CRM Integrations</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/utility-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Self-service at scale.</h2>
                                <p>We developed a WCAG-compliant web portal integrated directly with SAP and Salesforce, enabling 500,000+ residents to securely view their smart meter data and self-manage their accounts.</p>
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
                        <h2 id="faq-title">Common questions about utility tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Do you build to WCAG (Web Content Accessibility Guidelines) standards?</summary>
                            <p>Yes. We ensure all utility and government platforms are built to WCAG 2.1 AA (or AAA if required) standards. Public services must be accessible to everyone, meaning proper contrast ratios, screen-reader compatibility, and keyboard navigability are baked into our design systems from day one.</p>
                        </details>
                        <details>
                            <summary>How do you handle massive traffic spikes during an outage?</summary>
                            <p>We architect our frontend applications using Next.js on edge networks (like Vercel or AWS CloudFront) with heavy static caching. This means if a storm knocks out power and 100,000 residents visit your outage map simultaneously, the server won't crash under the load.</p>
                        </details>
                        <details>
                            <summary>Can you integrate web portals with legacy billing systems?</summary>
                            <p>Absolutely. Utilities often run on older, robust billing engines (like SAP IS-U or Oracle). We build secure API middleware layers that sit between your legacy system and the modern web frontend, ensuring fast page loads for the user without exposing your core database to the public internet.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other utility capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/service-and-information-websites/"><div><small>Public Info</small><h3>Service Websites</h3><p>Clear digital pathways for public services.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/customer-account-portals/"><div><small>Self-Service</small><h3>Account Portals</h3><p>Frictionless self-service for ratepayers.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/outage-and-incident-communication/"><div><small>Crisis Comms</small><h3>Outage Communication</h3><p>Keep communities informed during critical events.</p></div><b>Explore tools ↗</b></a>
                        <a className="related-card" href="/services/utility-operations-dashboards/"><div><small>Network</small><h3>Operations Dashboards</h3><p>Operational clarity across the grid.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Digitize your utility <br />and public services. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From reducing call center load via self-service portals to keeping the public informed during outages, we build software that serves the community.</p>
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
