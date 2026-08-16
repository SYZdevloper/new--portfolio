import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/custom-saas-development/" },
  title: "Custom SaaS Development Services | Hyperlink Tech Solutions",
  description: "Build secure, scalable multi-tenant SaaS applications with role-based access control, billing integrations, and robust architectures.",
};

export default function ServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/custom-saas-development/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/custom-saas-development/",
          "name": "Custom SaaS Development Services | Hyperlink Tech Solutions",
          "description": "Build secure, scalable multi-tenant SaaS applications with role-based access control, billing integrations, and robust architectures.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/custom-saas-development/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/custom-saas-development/#breadcrumb" },
          "inLanguage": "en"
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
                    <strong>Custom SaaS Development</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Complete SaaS services from strategy to launch</div>
                        <p className="eyebrow">Custom SaaS Development</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{__html: `Build a scalable SaaS application around the <em class="accent-text">actual user workflow.</em>` }}></h1>
                        <p className="hero-lead">We develop custom SaaS platforms with secure authentication, multi-tenant architectures, billing integrations, and high-performance React/Next.js frontends.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }} dangerouslySetInnerHTML={{__html: `<li>Multi-tenant architectures designed for scale</li><li>Secure authentication and role-based access control (RBAC)</li><li>Seamless billing integrations (Stripe, Paddle)</li>` }}></ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Service benefits">
                        <div className="proof-item">
                            <small>01 · Scalable Architecture</small>
                            <strong>Built on modern frameworks to handle growing user bases and data volumes.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Secure & Multi-tenant</small>
                            <strong>Strict data separation and secure authentication protocols for B2B platforms.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Connected Integrations</small>
                            <strong>APIs, webhooks, and third-party integrations to connect with existing business tools.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Maintainable Codebase</small>
                            <strong>Clean, documented code that your internal team can eventually take over.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When custom development is necessary</p>
                        <p>The application struggles to scale or integrate with modern tools.</p>
                        <a className="btn" href="#contact">Discuss Your Project <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Your SaaS architecture should enable rapid feature releases—not block them.</h2>
                        <p>We help founders replace tangled, unscalable legacy code with clean, modern architectures built on React, Next.js, and scalable backend databases.</p>

                        <div className="problem-grid" dangerouslySetInnerHTML={{__html: `<article class="problem-card"><span class="problem-card-number">01</span><h3>Slow performance</h3><p>The application takes too long to load data, frustrating users and increasing churn.</p></article><article class="problem-card"><span class="problem-card-number">02</span><h3>Tangled legacy code</h3><p>Adding a single new feature takes weeks because the codebase is a mess of dependencies.</p></article><article class="problem-card"><span class="problem-card-number">03</span><h3>Insecure data separation</h3><p>Multi-tenant data isn't properly isolated, creating massive security and compliance risks.</p></article><article class="problem-card"><span class="problem-card-number">04</span><h3>Broken billing flows</h3><p>Subscription upgrades, downgrades, and prorations are handled manually or frequently fail.</p></article><article class="problem-card"><span class="problem-card-number">05</span><h3>Poor API architecture</h3><p>The system cannot easily integrate with other modern tools your customers rely on.</p></article><article class="problem-card"><span class="problem-card-number">06</span><h3>High technical debt</h3><p>The MVP was built cheaply, and now the entire platform needs to be rewritten to scale.</p></article>` }}></div>
                    </div>
                </div>
            </section>

            <section className="section soft" id="included">
                <div className="container">
                    <div className="solution-shell">
                        <div className="solution-head">
                            <div>
                                <p className="eyebrow" style={{color: "#d8c2ff"}}>Complete SaaS development delivery</p>
                                <h2>Everything required to build and launch a secure SaaS platform.</h2>
                            </div>
                            <p>The final scope depends on your specific requirements. The modules below show what a complete SaaS development engagement can include.</p>
                        </div>

                        <div className="deliverable-grid" dangerouslySetInnerHTML={{__html: `<article class="deliverable-card"><span>01 · Architecture</span><h3>Tech Stack Definition</h3><p>Selecting the right frameworks, databases, and hosting environments for scale.</p><div class="deliverable-tags"><small>Stack</small><small>Planning</small><small>Hosting</small></div></article><article class="deliverable-card"><span>02 · Database</span><h3>Multi-tenant Schema</h3><p>Designing secure database architectures that properly isolate customer data.</p><div class="deliverable-tags"><small>Database</small><small>Security</small><small>Schema</small></div></article><article class="deliverable-card"><span>03 · Backend</span><h3>APIs & Authentication</h3><p>Building robust APIs and implementing secure role-based access control (RBAC).</p><div class="deliverable-tags"><small>APIs</small><small>Auth</small><small>RBAC</small></div></article><article class="deliverable-card"><span>04 · Frontend</span><h3>React/Next.js UI</h3><p>Developing responsive, high-performance user interfaces based on approved designs.</p><div class="deliverable-tags"><small>React</small><small>Next.js</small><small>UI</small></div></article><article class="deliverable-card"><span>05 · Integrations</span><h3>Stripe & CRM</h3><p>Connecting billing, email transactional providers, and marketing integrations.</p><div class="deliverable-tags"><small>Stripe</small><small>Email</small><small>Webhooks</small></div></article><article class="deliverable-card"><span>06 · Launch</span><h3>Testing & Deployment</h3><p>Comprehensive QA, performance testing, and setting up CI/CD pipelines.</p><div class="deliverable-tags"><small>QA</small><small>Deployment</small><small>CI/CD</small></div></article>` }}></div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured SaaS development</p>
                            <h2>Engineering a secure, high-performance financial management platform.</h2>
                        </div>
                        <p>See how we built a scalable architecture for RichPath to process multi-currency transactions and real-time financial reporting.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>RichPath</span>
                                <span>Custom SaaS Development</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="RichPath SaaS Development" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">RichPath</p>
                                <h2>A maintainable codebase built for complex data processing.</h2>
                                <p>We engineered the core application using Next.js and Node.js, focusing heavily on secure multi-tenant data isolation and high-speed API performance.</p>
                            </div>

                            <div className="case-facts" dangerouslySetInnerHTML={{__html: `<div class="case-fact"><small>Challenge</small><strong>RichPath needed to migrate from a fragile MVP to a robust, proprietary platform capable of handling complex financial logic and thousands of concurrent users.</strong></div><div class="case-fact"><small>Build</small><strong>A custom Next.js frontend communicating with a highly-scalable Node.js backend, featuring multi-currency processing and advanced role-based access control (RBAC).</strong></div><div class="case-fact"><small>Impact</small><strong>The new architecture eliminated transaction delays, securely isolated tenant data, and allowed their engineering team to ship new features 3x faster.</strong></div>` }}></div>
                            <a className="btn primary" href="/work/">View All Projects <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">What founders ask before starting SaaS development.</h2>
                        <p>These answers clarify our tech stack, billing integration approach, and code ownership.</p>
                    </div>
                    <div className="faq-list" dangerouslySetInnerHTML={{__html: `<details open><summary>What technology stack do you use?</summary><p>We typically build with React/Next.js for the frontend, Node.js for the backend, and PostgreSQL (or Supabase) for the database, deployed on Vercel or AWS.</p></details><details ><summary>How do you handle subscriptions and billing?</summary><p>We deeply integrate platforms like Stripe or Paddle to handle complex scenarios like upgrades, downgrades, prorations, and metered billing securely.</p></details><details ><summary>Who owns the code?</summary><p>You do. Upon project completion and final payment, full intellectual property rights and the complete codebase are transferred to your company.</p></details>` }}></div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Connect your service with the actual product experience.</h2>
                        </div>
                    </div>

                    <div className="related-grid" dangerouslySetInnerHTML={{__html: `<a class="related-card" href="/services/saas-ui-ux-design/"><div><small>Design</small><h3>SaaS UI/UX Design</h3><p>Product interfaces designed around real users and workflows for better adoption.</p></div><b>Explore product design ↗</b></a><a class="related-card" href="/services/dashboard-design/"><div><small>Interface</small><h3>Dashboard Design</h3><p>Design focused dashboards for metrics, operations, reporting and role-based decisions.</p></div><b>Explore dashboards ↗</b></a><a class="related-card" href="/services/saas-marketing-website/"><div><small>Websites</small><h3>SaaS Marketing Websites</h3><p>High-converting marketing websites focused on driving trials and demos.</p></div><b>Explore marketing sites ↗</b></a><a class="related-card" href="/services/frontend-development/"><div><small>Frontend</small><h3>Frontend Development</h3><p>Implement existing SaaS designs into responsive, reusable interfaces.</p></div><b>Explore frontend ↗</b></a>` }}></div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2 dangerouslySetInnerHTML={{__html: `Build a SaaS application <br />ready for scale. <span class="orb-icon" aria-hidden="true"></span>` }}></h2>
                    <div className="big-cta-row">
                        <p>Ready to upgrade your product? Let’s define the right structure, stack and delivery plan.</p>
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
