import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/onboarding-experience/" },
  title: "SaaS Onboarding Experience Design | Hyperlink Tech Solutions",
  description: "Design frictionless SaaS onboarding experiences, activation workflows, and empty states that reduce time-to-value and increase user retention.",
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
          "@id": "https://hyperlinktechsolutions.com/services/onboarding-experience/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/onboarding-experience/",
          "name": "SaaS Onboarding Experience Design | Hyperlink Tech Solutions",
          "description": "Design frictionless SaaS onboarding experiences, activation workflows, and empty states that reduce time-to-value and increase user retention.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/onboarding-experience/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/onboarding-experience/#breadcrumb" },
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
                    <strong>SaaS Onboarding Experience Design</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Complete SaaS services from strategy to launch</div>
                        <p className="eyebrow">SaaS Onboarding Experience Design</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{__html: `Help new users reach their first meaningful outcome <em class="accent-text">faster.</em>` }}></h1>
                        <p className="hero-lead">We design SaaS onboarding flows, workspace configurations, and empty states that reduce friction and improve product activation rates.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }} dangerouslySetInnerHTML={{__html: `<li>Reduce time-to-value (TTV) for new signups</li><li>Design clear, step-by-step activation workflows</li><li>Create helpful empty states that guide users</li>` }}></ul>
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
                            <small>01 · Fast Time-to-Value</small>
                            <strong>Journeys organized around getting users to their "aha!" moment quickly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Role-Based Setup</small>
                            <strong>Personalized onboarding paths depending on the user's role and goals.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Contextual Guidance</small>
                            <strong>Tooltips, checklists, and empty states designed to educate contextually.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Frictionless Activation</small>
                            <strong>Removing unnecessary barriers to complete the first core task.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When a redesign is necessary</p>
                        <p>New users abandon the product before seeing its value.</p>
                        <a className="btn" href="#contact">Discuss Your Project <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Your onboarding should guide users—not overwhelm them with setup tasks.</h2>
                        <p>We help SaaS companies replace confusing, unguided empty states with clear, step-by-step activation workflows that drastically improve retention.</p>

                        <div className="problem-grid" dangerouslySetInnerHTML={{__html: `<article class="problem-card"><span class="problem-card-number">01</span><h3>Empty states are confusing</h3><p>When users first log in, they see a blank dashboard with no clear indication of what to do next.</p></article><article class="problem-card"><span class="problem-card-number">02</span><h3>Too many mandatory steps</h3><p>Lengthy signup forms and complex setup requirements cause users to abandon the trial.</p></article><article class="problem-card"><span class="problem-card-number">03</span><h3>No clear "next action"</h3><p>Users complete one task but don't know how to progress through the rest of the product.</p></article><article class="problem-card"><span class="problem-card-number">04</span><h3>Overwhelming interface</h3><p>Throwing all features at a new user at once creates cognitive overload and frustration.</p></article><article class="problem-card"><span class="problem-card-number">05</span><h3>Generic experiences</h3><p>Admins, managers, and contributors are all forced through the exact same irrelevant setup flow.</p></article><article class="problem-card"><span class="problem-card-number">06</span><h3>Poor activation metrics</h3><p>Signups are high, but the percentage of users who actually use the core feature is dangerously low.</p></article>` }}></div>
                    </div>
                </div>
            </section>

            <section className="section soft" id="included">
                <div className="container">
                    <div className="solution-shell">
                        <div className="solution-head">
                            <div>
                                <p className="eyebrow" style={{color: "#d8c2ff"}}>Complete SaaS onboarding delivery</p>
                                <h2>Everything required to turn signups into activated, retained users.</h2>
                            </div>
                            <p>The final scope depends on your product complexity and activation goals. The modules below show what a complete onboarding engagement can include.</p>
                        </div>

                        <div className="deliverable-grid" dangerouslySetInnerHTML={{__html: `<article class="deliverable-card"><span>01 · Discovery</span><h3>Activation Metrics</h3><p>Reviewing drop-off points in your current signup flow and defining the core activation milestone.</p><div class="deliverable-tags"><small>Metrics</small><small>Drop-offs</small><small>Goals</small></div></article><article class="deliverable-card"><span>02 · Architecture</span><h3>Onboarding Flow</h3><p>Structuring the sequence of steps a user must take to realize the product's value.</p><div class="deliverable-tags"><small>Flows</small><small>Steps</small><small>Logic</small></div></article><article class="deliverable-card"><span>03 · UX</span><h3>Setup Wizards</h3><p>Designing step-by-step setup guides that collect necessary info without causing friction.</p><div class="deliverable-tags"><small>Wizards</small><small>Forms</small><small>Setup</small></div></article><article class="deliverable-card"><span>04 · UI</span><h3>Empty States</h3><p>Creating engaging, instructional empty states for dashboards and data tables.</p><div class="deliverable-tags"><small>Empty States</small><small>Visuals</small><small>Instruction</small></div></article><article class="deliverable-card"><span>05 · Guidance</span><h3>Tooltips & Checklists</h3><p>Designing contextual UI elements that guide the user through their first tasks.</p><div class="deliverable-tags"><small>Tooltips</small><small>Checklists</small><small>Help</small></div></article><article class="deliverable-card"><span>06 · Handoff</span><h3>Development Specs</h3><p>Providing clear states, logic, and component specs for your engineering team to implement.</p><div class="deliverable-tags"><small>Specs</small><small>Logic</small><small>Handoff</small></div></article>` }}></div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured SaaS onboarding</p>
                            <h2>Automating resource access for a spiritual content platform.</h2>
                        </div>
                        <p>See how we helped SoulHome eliminate manual fulfillment by designing a seamless, automated onboarding and access experience.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>SoulHome</span>
                                <span>SaaS Onboarding Experience Design</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/7d2de5e8-3b37-4208-958d-a51bc02499e8.webp" alt="SoulHome Onboarding" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">SoulHome</p>
                                <h2>Turning manual verification into instant access.</h2>
                                <p>SoulHome needed a way to deliver paid spiritual and inner-work resources securely, without forcing the creator to manually verify every purchase or requiring users to navigate complex registration.</p>
                            </div>

                            <div className="case-facts" dangerouslySetInnerHTML={{__html: `<div class="case-fact"><small>Challenge</small><strong>Customers faced delays accessing paid content because the verification and delivery process was entirely manual.</strong></div><div class="case-fact"><small>Build</small><strong>An automated onboarding flow using webhooks and secure magic links that granted instant, verified access without passwords.</strong></div><div class="case-fact"><small>Impact</small><strong>Customers receive immediate access upon purchase, eliminating support tickets for lost resources and freeing up the creator's time.</strong></div>` }}></div>
                            <a className="btn primary" href="/work/">View All Projects <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">What founders ask before redesigning onboarding.</h2>
                        <p>These answers clarify the scope, deliverables, and integration with your existing product.</p>
                    </div>
                    <div className="faq-list" dangerouslySetInnerHTML={{__html: `<details open><summary>What is included in onboarding design?</summary><p>We typically map out user flows, design setup wizards, create empty states, and define the logic for in-app checklists or tooltips.</p></details><details ><summary>Do you build the onboarding or just design it?</summary><p>For in-app product onboarding, we typically provide high-fidelity designs, prototypes, and specs for your existing engineering team to implement.</p></details><details ><summary>Can you fix our existing onboarding?</summary><p>Yes, we start by auditing your current flow and analytics to identify exactly where users are dropping off before redesigning the problematic steps.</p></details>` }}></div>
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

                    <div className="related-grid" dangerouslySetInnerHTML={{__html: `<a class="related-card" href="/services/saas-ui-ux-design/"><div><small>Design</small><h3>SaaS UI/UX Design</h3><p>Product interfaces designed around real users and workflows for better adoption.</p></div><b>Explore product design ↗</b></a><a class="related-card" href="/services/dashboard-design/"><div><small>Interface</small><h3>Dashboard Design</h3><p>Design focused dashboards for metrics, operations, reporting and role-based decisions.</p></div><b>Explore dashboards ↗</b></a><a class="related-card" href="/services/saas-marketing-website/"><div><small>Websites</small><h3>SaaS Marketing Websites</h3><p>High-converting marketing websites focused on driving trials and demos.</p></div><b>Explore marketing sites ↗</b></a><a class="related-card" href="/services/custom-web-app-development/"><div><small>Development</small><h3>Custom SaaS Development</h3><p>Turn approved product requirements into functioning, scalable architectures.</p></div><b>Explore development ↗</b></a>` }}></div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2 dangerouslySetInnerHTML={{__html: `Build an onboarding experience <br />that retains users. <span class="orb-icon" aria-hidden="true"></span>` }}></h2>
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
