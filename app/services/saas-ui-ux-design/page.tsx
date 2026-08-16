import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "SaaS UI/UX Design Services | Hyperlink Tech Solutions",
  description: "SaaS UI/UX design services for dashboards, onboarding, workflows, billing, settings and responsive product interfaces. Improve usability, clarity and product consistency.",
};

export default function SaaSDesign() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/saas-ui-ux-design/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/saas-ui-ux-design/",
          "name": "SaaS UI/UX Design Services | Hyperlink Tech Solutions",
          "description": "SaaS UI/UX design services for dashboards, onboarding, workflows, billing, settings and responsive product interfaces.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
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
                    <a href="/">Home</a><span>›</span>
                    <a href="/services/">Services</a><span>›</span>
                    <strong>SaaS UI/UX Design</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy">
                        <div className="hero-status">Product interfaces designed around real users and workflows</div>
                        <p className="eyebrow">SaaS UI/UX design services</p>
                        <h1 id="service-title">SaaS product experiences designed for clarity, adoption and <span className="accent-text">long-term growth.</span></h1>
                        <p>We design SaaS interfaces that help users understand the product, complete important tasks and navigate complex workflows with less friction. From onboarding and dashboards to billing, permissions, settings and responsive states, every screen is organised around the user’s role, objective and context.</p>
                        <ul className="hero-points">
                            <li>User flows and product architecture</li>
                            <li>Wireframes and responsive UI design</li>
                            <li>Dashboard and workflow design</li>
                            <li>Scalable design systems and prototypes</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get SaaS Design Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#case-study">View SaaS Design Example <span className="arrow">↗</span></a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="SaaS UX benefits">
                        <div className="proof-item">
                            <small>01 · User-Centred</small>
                            <strong>Interfaces planned around user roles, goals, priorities and recurring tasks.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Workflow-Driven</small>
                            <strong>Screens and interactions organised around complete journeys rather than isolated visuals.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Scalable</small>
                            <strong>Reusable components and patterns that support new features, modules and product growth.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Responsive</small>
                            <strong>Clear experiences across desktop, tablet and mobile use cases where required.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When product design becomes necessary</p>
                        <p>A SaaS product may contain powerful functionality, but users will struggle to adopt it when navigation, workflows, terminology and information hierarchy are unclear.</p>
                        <a className="btn" href="#included">See What Is Included <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Your product should make complex work feel manageable—not force users to understand the system before they can use it.</h2>
                        <p>We help SaaS companies replace fragmented, inconsistent or difficult product experiences with clearer flows, more predictable interactions and a reusable visual system.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Users struggle to understand where to begin</h3>
                                <p>New users may enter the product without a clear first action, guided setup or understanding of the value they can achieve.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Important workflows contain too many steps</h3>
                                <p>Repeated actions become frustrating when screens, forms and decisions are not organised around the actual task.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Navigation no longer matches the product</h3>
                                <p>As features are added, menus and page structures often become crowded, inconsistent or difficult to scan.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">04</span>
                                <h3>Dashboards show information without clear priority</h3>
                                <p>Users may see large amounts of data but remain unsure what requires attention, what changed and what action to take next.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">05</span>
                                <h3>The interface feels inconsistent</h3>
                                <p>Different modules may use different patterns, terminology, spacing or interaction behaviour, reducing trust and learnability.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">06</span>
                                <h3>New features are difficult to design and release</h3>
                                <p>Without reusable components and documented patterns, every new feature creates additional design and development effort.</p>
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
                                <p className="eyebrow" style={{color: "#d8c2ff"}}>Complete SaaS product design</p>
                                <h2>Everything required to turn product requirements into a clear and usable interface system.</h2>
                            </div>
                            <p>The final scope is shaped around your product stage, user roles, core workflows, existing interface and development process. The modules below show what a complete SaaS UI/UX engagement can include.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Discovery</span>
                                <h3>Product and User Understanding</h3>
                                <p>Review of the product, target audience, business model, user roles, current experience, product goals and design constraints.</p>
                                <div className="deliverable-tags"><small>Product goals</small><small>User roles</small><small>Existing experience</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Architecture</span>
                                <h3>Information Structure and Navigation</h3>
                                <p>Organisation of modules, menus, page hierarchy, object relationships and navigation patterns.</p>
                                <div className="deliverable-tags"><small>Sitemap</small><small>Navigation</small><small>Product architecture</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · UX</span>
                                <h3>User Flows and Wireframes</h3>
                                <p>Planning complete journeys such as onboarding, setup, task completion, collaboration, upgrades and account management.</p>
                                <div className="deliverable-tags"><small>User flows</small><small>Wireframes</small><small>Edge cases</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · UI</span>
                                <h3>Responsive Product Interface Design</h3>
                                <p>High-fidelity interface design for core product screens, states, interactions and responsive behaviour.</p>
                                <div className="deliverable-tags"><small>Desktop</small><small>Tablet</small><small>Mobile</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>05 · System</span>
                                <h3>Reusable Design Components</h3>
                                <p>Creation or refinement of reusable components, design tokens, layouts, patterns and interaction guidelines.</p>
                                <div className="deliverable-tags"><small>Components</small><small>Tokens</small><small>Documentation</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>06 · Handoff</span>
                                <h3>Prototype, Specifications and Review</h3>
                                <p>Clickable prototypes, screen states, design annotations, asset preparation and implementation support for the development team.</p>
                                <div className="deliverable-tags"><small>Prototype</small><small>Handoff</small><small>Design QA</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured SaaS project</p>
                            <h2>Financial management, made easier to understand and act on.</h2>
                        </div>
                        <p>See how our SaaS UI/UX design services helped RichPath bring balances, transactions, multi-currency wallets and financial performance into one focused product experience.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="SaaS project visual">
                            <div className="case-visual-top">
                                <span>Finance Management SaaS</span>
                                <span>Responsive Dashboard + UX Workflow</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Working system example" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">RichPath</p>
                                <h2>A clearer journey from financial overview to everyday action.</h2>
                                <p>RichPath was designed to help users understand their financial position, manage multiple wallets and complete common actions without navigating through a complicated finance platform.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Users needed to review balances, manage multiple currencies, transfer or request funds and understand income, spending and profitability across disconnected screens.</strong></div>
                                <div className="case-fact"><small>Approach</small><strong>We reorganised the experience around a unified overview dashboard. Total balance and primary actions were prioritised first, followed by multi-currency wallets, earnings, spending, income, revenue and profit-and-loss reporting. Supporting screens were structured for activity, account management and detailed reports.</strong></div>
                                <div className="case-fact"><small>Result</small><strong>Users can now move from login to meaningful financial information, complete key actions and review performance from one consistent interface—creating a more understandable and efficient product journey.</strong></div>
                            </div>
                            <a className="btn primary" href="/work/">View All SaaS Projects <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">What product teams ask before starting SaaS design.</h2>
                        <p>These answers clarify the scope, research, mobile readiness, systems and developer handoff before a proposal request.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>What is included in SaaS UI/UX design?</summary>
                            <p>The scope can include product discovery, user flows, information architecture, wireframes, responsive interface design, prototypes, design systems and development handoff. The exact deliverables depend on the product stage and requirements.</p>
                        </details>
                        <details>
                            <summary>Can you design a new SaaS product from an idea?</summary>
                            <p>Yes. We can help organise early requirements into user roles, product architecture, workflows, wireframes and implementation-ready interface designs. Product validation and technical development should be scoped separately where required.</p>
                        </details>
                        <details>
                            <summary>Can you redesign an existing SaaS application?</summary>
                            <p>Yes. We can review an existing product for navigation, workflow, hierarchy, visual consistency and usability problems before redesigning priority areas or the complete interface.</p>
                        </details>
                        <details>
                            <summary>Do you design both desktop and mobile interfaces?</summary>
                            <p>Yes. Responsive behaviour can be designed for desktop, tablet and mobile according to the product’s actual usage patterns. Not every SaaS product requires identical functionality on every screen size.</p>
                        </details>
                        <details>
                            <summary>Can you create a design system?</summary>
                            <p>Yes. We can create a new SaaS design system or refine an existing component library with tokens, components, states, patterns and documentation.</p>
                        </details>
                        <details>
                            <summary>Can you work with our existing development team?</summary>
                            <p>Yes. We can provide organised design files, prototypes, specifications, assets and review support to help your developers implement the approved interface accurately.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Connect product design with the engineering and systems required to launch.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/dashboard-design/"><div><small>Design</small><h3>Dashboard Design</h3><p>Design focused dashboards for metrics, operations, reporting and role-based decisions.</p></div><b>Explore dashboards ↗</b></a>
                        <a className="related-card" href="/services/custom-web-app-development/"><div><small>Development</small><h3>Custom Web App Development</h3><p>Turn approved product requirements and interfaces into a functioning custom web application.</p></div><b>Explore apps ↗</b></a>
                        <a className="related-card" href="/services/frontend-development/"><div><small>Code</small><h3>Frontend Development</h3><p>Implement existing SaaS designs into responsive, reusable and maintainable interfaces.</p></div><b>Explore frontend ↗</b></a>
                        <a className="related-card" href="/services/design-system-development/"><div><small>Systems</small><h3>Design System Development</h3><p>Create a reusable system of components, tokens and usage guidelines for product consistency.</p></div><b>Explore systems ↗</b></a>
                    </div>
                </div>
            </section>

            <section className="section lead-section" id="contact">
                <div className="container lead-grid">
                    <div className="lead-copy">
                        <p className="eyebrow" style={{color: "#d8c2ff"}}>Plan your SaaS product experience</p>
                        <h2>Tell us what users need to accomplish and where the current experience creates friction.</h2>
                        <p>Share your product stage, target users, core workflows, current screens and expected timeline. We will review the requirement and recommend a practical SaaS design scope.</p>
                    </div>

                    <div className="lead-panel">
                        <h3>Tell us about your SaaS product</h3>
                        <p>Provide a few details about the product and we will respond with the most suitable next step.</p>
                        <form className="lead-form js-lead-form" data-form-name="SaaS Design Lead"
                            action="/api/leads" method="post" noValidate>
                            <div className="field-row">
                                <div className="field">
                                    <label htmlFor="main-name">Full name *</label>
                                    <input id="main-name" name="name" required autoComplete="name" placeholder="Your full name" />
                                </div>
                                <div className="field">
                                    <label htmlFor="main-company">Company</label>
                                    <input id="main-company" name="company" autoComplete="organization" placeholder="Company name" />
                                </div>
                            </div>
                            <div className="field-row">
                                <div className="field">
                                    <label htmlFor="main-email">Work email *</label>
                                    <input id="main-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
                                </div>
                                <div className="field">
                                    <label htmlFor="main-phone">Phone or WhatsApp</label>
                                    <input id="main-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98XXXXXX" />
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="main-message">Product details *</label>
                                <textarea id="main-message" name="message" required
                                    placeholder="Tell us about the product stage, target users, core workflows, current screens and expected timeline"></textarea>
                            </div>
                            <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" />
                            <input type="hidden" name="service" value="SaaS UI/UX Design" />
                            <input type="hidden" name="landing_page" value="/services/saas-ui-ux-design/" />
                            <label className="consent">
                                <input type="checkbox" required />
                                <span>By submitting this form, you agree that Hyperlink Tech Solutions may contact you regarding your product enquiry.</span>
                            </label>
                            <button className="btn primary full" type="submit">Submit SaaS Design Enquiry <span className="arrow">↗</span></button>
                            <div className="form-status" aria-live="polite"></div>
                        </form>
                        <div className="trust-line">No obligation · Your information stays private</div>
                    </div>
                </div>
            </section>
        </main>

        <SiteFooter />
    </div>
    <a className="floating-cta" href="#contact">Get SaaS Design Proposal ↗</a>
    </>
  );
}
