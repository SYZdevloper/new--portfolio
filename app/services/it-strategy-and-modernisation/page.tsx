import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/it-strategy-and-modernisation/" },
  title: "IT Strategy & Modernisation Services | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
  description: "Align your technology with business goals and replace legacy systems without downtime through our IT strategy services.",
};

export default function ITStrategyAndModernisation() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/it-strategy-and-modernisation/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/it-strategy-and-modernisation/",
          "name": "IT Strategy & Modernisation Services | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
          "description": "Align your technology with business goals and replace legacy systems without downtime through our IT strategy services.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/it-strategy-and-modernisation/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/it-strategy-and-modernisation/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/it-strategy-and-modernisation/#service",
          "name": "IT Strategy & Modernisation",
          "serviceType": "IT Consulting",
          "url": "https://hyperlinktechsolutions.com/services/it-strategy-and-modernisation/",
          "description": "Align your technology with business goals and replace legacy systems without downtime through our IT strategy services.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Growing businesses, enterprises, and engineering teams"
          }
        }
      ]
    }
    ` }} />
      
    <ServiceInteractions />
      <div className="service-page-wrapper">
        <SiteHeader />

        <main id="top">
            <section className="hero service-hero" aria-labelledby="service-title">
                <nav className="service-breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services/">Services</Link><span>›</span>
                    <strong>IT Strategy & Modernisation</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Aligning technology with business growth</div>
                        <p className="eyebrow">IT Strategy & Modernisation</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Stop letting technical debt <em class="accent-text">dictate your growth.</em>' }}></h1>
                        <p className="hero-lead">We design clear, actionable IT roadmaps and execute complex modernisation projects to replace fragile legacy systems with scalable, modern architectures—without interrupting your operations.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Audit existing infrastructure to uncover hidden technical debt</li>
                            <li>Define a clear roadmap for system replacement and integration</li>
                            <li>Execute complex software modernisations with zero downtime</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a Strategy Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Infrastructure benefits">
                        <div className="proof-item">
                            <small>01 · Zero Downtime</small>
                            <strong>Strangler-pattern migrations that keep the business running.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Cost Predictability</small>
                            <strong>Clear roadmaps that align IT spend with actual ROI.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Future-Proofing</small>
                            <strong>Replacing monolithic constraints with flexible microservices.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Objective Guidance</small>
                            <strong>Vendor-agnostic architecture recommendations.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When strategy is necessary</p>
                        <p>You shouldn't have to rebuild the entire company just to add a new feature.</p>
                        <a className="btn" href="#contact">Discuss Your Roadmap <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Your software should enable your business, not hold it hostage.</h2>
                        <p>As companies scale, early technical decisions often turn into massive bottlenecks. We help you untangle the mess, define a clear technical direction, and execute the rebuild safely.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Paralyzing Technical Debt</h3>
                                <p>Developers spend 80% of their time fixing bugs and keeping old servers alive instead of building new features.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Disjointed Systems</h3>
                                <p>Years of quick fixes and isolated software purchases have created a fragile web of integrations that nobody fully understands.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Unclear Technical Direction</h3>
                                <p>Leadership knows the technology needs an overhaul, but lacks a phased, low-risk plan to actually get it done.</p>
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
                                <h2>Clear roadmaps and expert execution.</h2>
                            </div>
                            <p>We provide both the high-level strategic planning and the deep engineering expertise required to actually pull it off.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Analysis</span>
                                <h3>Technology Audits</h3>
                                <p>Deep-dive code and architecture reviews to document existing systems, identify critical vulnerabilities, and map out technical debt.</p>
                                <div className="deliverable-tags"><small>Code Review</small><small>Architecture</small><small>Risk</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Planning</span>
                                <h3>Modernisation Roadmaps</h3>
                                <p>Phased, step-by-step plans that outline exactly how to transition from legacy systems to modern cloud architecture safely.</p>
                                <div className="deliverable-tags"><small>Strategy</small><small>Phases</small><small>Budget</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Design</span>
                                <h3>Architecture Design</h3>
                                <p>Designing the target state infrastructure—whether that is a move to microservices, serverless, or a headless architecture.</p>
                                <div className="deliverable-tags"><small>System Design</small><small>Microservices</small><small>Scale</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Execution</span>
                                <h3>Vendor Selection & Oversight</h3>
                                <p>Helping you select the right SaaS tools and cloud providers, ensuring the final tech stack aligns with long-term business goals.</p>
                                <div className="deliverable-tags"><small>Procurement</small><small>Evaluation</small><small>Oversight</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Modernisation</p>
                            <h2>Replacing a 15-year-old monolith with modern microservices.</h2>
                        </div>
                        <p>See how we helped a national logistics provider transition off a legacy on-premise system without missing a single delivery.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>IT Modernisation</span>
                                <span>Strangler Pattern + Cloud</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Legacy System Modernisation</p>
                                <h2>Untangling a decade of technical debt.</h2>
                                <p>The client was locked into a fragile, bespoke ERP that crashed during peak seasons and was impossible to update. A "rip and replace" was too risky.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The business was entirely dependent on a massive, undocumented monolithic application. Any changes took months and frequently broke unrelated features.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We developed a 12-month modernisation roadmap using the "Strangler Fig" pattern. We slowly built new microservices in AWS, routing traffic away from the old system one feature at a time.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>The company fully transitioned to the new, scalable cloud architecture with exactly zero seconds of unplanned downtime, reducing their feature release cycle from 3 months to 2 weeks.</strong></div>
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
                        <h2 id="faq-title">Common questions about IT modernisation.</h2>
                        <p>Answers covering risk, timelines, and the "rip-and-replace" approach.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Do you recommend a full "rip and replace"?</summary>
                            <p>Almost never. Rebuilding everything from scratch at once is incredibly risky. We heavily favour iterative modernization (like the Strangler Pattern), where we replace legacy components piece by piece while the system remains live.</p>
                        </details>
                        <details>
                            <summary>How long does a strategic audit take?</summary>
                            <p>A comprehensive technology audit and roadmap generation typically takes 3 to 6 weeks, depending on the size of your codebase and the complexity of your current infrastructure.</p>
                        </details>
                        <details>
                            <summary>Do you just provide the strategy, or do you build it too?</summary>
                            <p>Both. We believe strategy without execution is useless. After delivering the modernisation roadmap, our engineering teams can take full ownership of the rebuild and migration.</p>
                        </details>
                        <details>
                            <summary>How do you handle undocumented legacy code?</summary>
                            <p>We use a combination of automated code analysis tools, application performance monitoring (APM) tracing, and direct interviews with your longest-tenured engineers to reverse-engineer the system's true architecture.</p>
                        </details>
                        <details>
                            <summary>Will a modernisation project disrupt our current operations?</summary>
                            <p>Our primary mandate during any modernisation effort is business continuity. By using modern DevOps practices and iterative rollouts, we ensure your team and your customers experience no disruption.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Scale securely with modern infrastructure.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/cloud-architecture-and-migration/"><div><small>Cloud</small><h3>Cloud Architecture</h3><p>Design scalable, secure cloud environments and migrate workloads safely.</p></div><b>Explore cloud migration ↗</b></a>
                        <a className="related-card" href="/services/devops-and-deployment/"><div><small>DevOps</small><h3>DevOps & Deployment</h3><p>Automate infrastructure and establish CI/CD pipelines to ship faster.</p></div><b>Explore DevOps ↗</b></a>
                        <a className="related-card" href="/services/security-assessment-and-hardening/"><div><small>Security</small><h3>Security Hardening</h3><p>Secure applications and infrastructure against modern threats and ensure compliance.</p></div><b>Explore security ↗</b></a>
                        <a className="related-card" href="/services/database-architecture-and-scaling/"><div><small>Data</small><h3>Database Scaling</h3><p>Design highly available database layers that can handle massive traffic.</p></div><b>Explore database architecture ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Stop patching old systems. <br />Start building for the future. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to escape technical debt and define a clear IT strategy? Let's discuss your current infrastructure.</p>
                        <a className="btn" href="#contact">Get a Strategy Proposal <span className="arrow">↗</span></a>
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
