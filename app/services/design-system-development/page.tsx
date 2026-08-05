import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import ServiceHeader from "@/components/services/ServiceHeader";
import ServiceFooter from "@/components/services/ServiceFooter";

export const metadata: Metadata = {
  title: "Design System Development Services | Hyperlink Tech Solutions",
  description: "Design system development services for SaaS products, dashboards, websites and web applications. Get reusable components, design tokens, documentation and scalable UI standards.",
};

export default function DesignSystemDevelopment() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/design-system-development/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/design-system-development/",
          "name": "Design System Development Services | Hyperlink Tech Solutions",
          "description": "Design system development services for SaaS products, dashboards, websites and web applications.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "inLanguage": "en"
        }
      ]
    }
    ` }} />
      
    <ServiceInteractions />
      <div className="service-page-wrapper">
        <ServiceHeader />

        <main id="top">
            <section className="hero service-hero" aria-labelledby="service-title">
                <nav className="service-breadcrumb" aria-label="Breadcrumb">
                    <a href="/">Home</a><span>›</span>
                    <a href="/services/">Services</a><span>›</span>
                    <strong>Design System Development</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy">
                        <div className="hero-status">Reusable interface systems designed for consistency and scale</div>
                        <p className="eyebrow">Design system development services</p>
                        <h1 id="service-title">Design systems that keep your product consistent as it <span className="accent-text">grows.</span></h1>
                        <p>We create reusable design systems for SaaS platforms, dashboards, websites and custom web applications. By defining shared components, design tokens, interaction patterns and documentation, we help product and development teams reduce inconsistency, improve collaboration and build new interfaces faster without redesigning the same elements repeatedly.</p>
                        <ul className="hero-points">
                            <li>Reusable UI component libraries</li>
                            <li>Design tokens and visual foundations</li>
                            <li>Responsive states and interaction patterns</li>
                            <li>Practical documentation and developer handoff</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get Design System Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#case-study">View Design System Example <span className="arrow">↗</span></a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Design system benefits">
                        <div className="proof-item">
                            <small>01 · Consistent</small>
                            <strong>Shared components and visual rules help interfaces look and behave consistently across screens and products.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Reusable</small>
                            <strong>Teams can build new pages and features from approved patterns instead of recreating common elements each time.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Collaborative</small>
                            <strong>Design and development teams work from a clearer shared language, reducing ambiguity during implementation.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Scalable</small>
                            <strong>A structured system makes it easier to expand the product while maintaining quality and recognisable brand behaviour.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When interface consistency starts to break down</p>
                        <p>As products grow, new screens and features are often created by different people at different times. Without shared rules, small inconsistencies quickly become expensive design and development problems.</p>
                        <a className="btn" href="#included">See What Is Included <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Your product should grow from a shared system—not from disconnected screens and one-off components.</h2>
                        <p>We help teams replace fragmented interface decisions with a reusable design foundation that supports faster design, clearer implementation and a more consistent user experience.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The same component looks different across screens</h3>
                                <p>Buttons, inputs, cards, tables and modals may use different spacing, colours, sizes or interactions even when they serve the same purpose.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Designers repeatedly recreate common elements</h3>
                                <p>Without a reusable library, teams spend time rebuilding familiar patterns instead of solving new product problems.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Development does not match the approved design</h3>
                                <p>Unclear component behaviour, missing states and inconsistent specifications often create gaps between design files and production interfaces.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">04</span>
                                <h3>New features take too long to design</h3>
                                <p>Every new screen becomes a separate design exercise when common layouts, patterns and components are not already defined.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">05</span>
                                <h3>The product lacks a consistent visual language</h3>
                                <p>Typography, colour, spacing, icons and interface behaviour may feel disconnected as the product expands.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">06</span>
                                <h3>Teams are afraid to update older screens</h3>
                                <p>Without documented standards, improving one part of the interface can create uncertainty about how the rest of the product should change.</p>
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
                                <p className="eyebrow" style={{color: "#d8c2ff"}}>Complete design system delivery</p>
                                <h2>Everything required to create a reusable interface foundation for your product.</h2>
                            </div>
                            <p>The final scope depends on your current product, team, platform complexity and implementation maturity. The modules below show what a complete design-system project can include.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Audit</span>
                                <h3>Existing Interface and Component Review</h3>
                                <p>Review of current screens, recurring patterns, inconsistencies, duplicated components and gaps between design and production.</p>
                                <div className="deliverable-tags"><small>UI audit</small><small>Inventory</small><small>Inconsistencies</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Foundations</span>
                                <h3>Visual Rules and Design Tokens</h3>
                                <p>Definition of colour, typography, spacing, radius, shadows, borders, grid behaviour and other reusable visual decisions.</p>
                                <div className="deliverable-tags"><small>Colour</small><small>Type</small><small>Spacing</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Components</span>
                                <h3>Reusable UI Component Library</h3>
                                <p>Design of approved components such as buttons, forms, cards, tables, navigation, modals, alerts and data-display patterns.</p>
                                <div className="deliverable-tags"><small>Components</small><small>Variants</small><small>Reuse</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · States</span>
                                <h3>Responsive and Interaction Behaviour</h3>
                                <p>Definition of hover, focus, active, disabled, loading, error, success, empty and responsive states.</p>
                                <div className="deliverable-tags"><small>States</small><small>Interactions</small><small>Responsive</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>05 · Patterns</span>
                                <h3>Repeated Product Experiences</h3>
                                <p>Reusable patterns for forms, onboarding, filtering, search, settings, data management, dashboards and other recurring workflows.</p>
                                <div className="deliverable-tags"><small>Patterns</small><small>Workflows</small><small>Consistency</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>06 · Documentation</span>
                                <h3>Usage Rules and Guidance</h3>
                                <p>Practical documentation that explains when, why and how each component or pattern should be used.</p>
                                <div className="deliverable-tags"><small>Guidelines</small><small>Examples</small><small>Usage rules</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>07 · Handoff</span>
                                <h3>Design-to-Development Alignment</h3>
                                <p>Organised Figma files, naming standards, component mapping and implementation guidance for the development team.</p>
                                <div className="deliverable-tags"><small>Figma</small><small>Handoff</small><small>Mapping</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>08 · Governance</span>
                                <h3>Maintenance and Contribution Model</h3>
                                <p>Recommendations for updating, reviewing and expanding the design system as the product and team evolve.</p>
                                <div className="deliverable-tags"><small>Governance</small><small>Ownership</small><small>Maintenance</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured design system example</p>
                            <h2>Show how one shared system replaced repeated design decisions.</h2>
                        </div>
                        <p>Replace this demonstration with one genuine design-system project. Explain the original inconsistency, the component audit, the system structure and how the product team used it after delivery.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Design System visual">
                            <div className="case-visual-top">
                                <span>Design System</span>
                                <span>Reusable Components</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Working system example" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Example Case-Study Structure</p>
                                <h2>A shared component system for faster and more consistent product delivery.</h2>
                                <p>Use this area to explain what the interface looked like before the system, where duplication existed and what changed after shared foundations and components were introduced.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The product had grown through multiple design and development cycles, resulting in duplicated components, inconsistent spacing and unclear responsive behaviour.</strong></div>
                                <div className="case-fact"><small>Audit</small><strong>Existing screens were reviewed to identify recurring components, visual differences, missing states and implementation gaps.</strong></div>
                                <div className="case-fact"><small>System</small><strong>A structured Figma library was created with design tokens, reusable components, responsive variants, interaction states and documented usage guidance.</strong></div>
                                <div className="case-fact"><small>Implementation Support</small><strong>Components were mapped to frontend patterns so designers and developers could work from a clearer shared structure.</strong></div>
                                <div className="case-fact"><small>Result</small><strong>Replace this statement with a verified improvement such as reduced design time, faster implementation, fewer inconsistencies or easier product expansion.</strong></div>
                            </div>
                            <a className="btn primary" href="/work/">View All Design System Projects <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">What teams ask before starting design system development.</h2>
                        <p>These answers clarify the scope, tools, alignment and delivery process before a proposal request.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>What is a design system?</summary>
                            <p>A design system is a shared collection of visual foundations, reusable components, interaction patterns and documentation used to create consistent digital interfaces.</p>
                        </details>
                        <details>
                            <summary>How is a design system different from a style guide?</summary>
                            <p>A style guide typically focuses on visual rules such as colour, typography and branding. A design system also includes functional components, states, product patterns, implementation guidance and maintenance processes.</p>
                        </details>
                        <details>
                            <summary>Can you create a design system from an existing product?</summary>
                            <p>Yes. We can audit the existing interface, identify recurring components and inconsistencies, then organise the strongest patterns into a reusable system.</p>
                        </details>
                        <details>
                            <summary>Do you create design systems in Figma?</summary>
                            <p>Yes. Design systems can be structured as reusable Figma libraries with components, properties, variants, variables, documentation and usage examples.</p>
                        </details>
                        <details>
                            <summary>Can the system work with our existing brand guidelines?</summary>
                            <p>Yes. Existing brand colours, typography, iconography and visual principles can be translated into a practical digital-interface system.</p>
                        </details>
                        <details>
                            <summary>Can you align the design system with our frontend code?</summary>
                            <p>Yes. We can coordinate naming, variants, tokens, responsive states and component mapping with your development approach. Actual frontend implementation can also be scoped separately.</p>
                        </details>
                        <details>
                            <summary>Do we need a design system for a small product?</summary>
                            <p>A full enterprise-scale system may be unnecessary for a small product, but a focused foundation and core component library can still improve speed and consistency.</p>
                        </details>
                        <details>
                            <summary>Can a design system support multiple brands or themes?</summary>
                            <p>Yes. Multi-brand, light-and-dark theme or white-label requirements can be considered, but they increase the token, component and testing complexity.</p>
                        </details>
                        <details>
                            <summary>Will you include accessibility states?</summary>
                            <p>Relevant focus, error, disabled, contrast and interaction considerations can be included. Formal accessibility certification or legal compliance review should be handled separately where required.</p>
                        </details>
                        <details>
                            <summary>Can you redesign our interface while creating the design system?</summary>
                            <p>Yes. Existing product screens can be improved as part of the audit and systemisation process, although the number of redesigned screens should be defined in scope.</p>
                        </details>
                        <details>
                            <summary>How long does design system development take?</summary>
                            <p>The timeline depends on the size of the existing product, number of components, required documentation, responsive complexity and review cycles. A realistic delivery schedule is provided after the initial audit.</p>
                        </details>
                        <details>
                            <summary>Who should maintain the design system after delivery?</summary>
                            <p>Ownership should usually be shared between designated design and development representatives. We can recommend a governance model based on your team structure.</p>
                        </details>
                        <details>
                            <summary>Can you provide ongoing support after launch?</summary>
                            <p>Yes. New components, refinements, documentation updates and adoption support can be provided through an ongoing design-system or product-design engagement.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Apply the design system across your product and development workflow.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/saas-ui-ux-design/"><div><small>Product</small><h3>SaaS UI/UX Design</h3><p>Design complete product flows and interfaces using a reusable system built for software products.</p></div><b>Explore SaaS design ↗</b></a>
                        <a className="related-card" href="/services/dashboard-design/"><div><small>Dashboards</small><h3>Dashboard Design</h3><p>Create consistent dashboard layouts, visualisation patterns and data-rich components.</p></div><b>Explore dashboards ↗</b></a>
                        <a className="related-card" href="/services/frontend-development/"><div><small>Code</small><h3>Frontend Development</h3><p>Implement the approved component system into reusable and responsive production code.</p></div><b>Explore frontend ↗</b></a>
                        <a className="related-card" href="/services/custom-web-app-development/"><div><small>Apps</small><h3>Custom Web App Development</h3><p>Use the design system as the interface foundation for a complete custom web application.</p></div><b>Explore web apps ↗</b></a>
                        <a className="related-card" href="/services/admin-panel-development/"><div><small>Admin</small><h3>Admin Panel Development</h3><p>Build consistent administration interfaces using shared components, patterns and states.</p></div><b>Explore admin panels ↗</b></a>
                    </div>
                </div>
            </section>

            <section className="section lead-section" id="contact">
                <div className="container lead-grid">
                    <div className="lead-copy">
                        <p className="eyebrow" style={{color: "#d8c2ff"}}>Build a stronger product foundation</p>
                        <h2>Tell us where interface inconsistency is slowing your team down.</h2>
                        <p>Share your current product, design files, frontend stack, team structure and expected system coverage. We will review the requirement and recommend a practical audit or design-system scope.</p>
                    </div>

                    <div className="lead-panel">
                        <h3>Tell us about your design system</h3>
                        <p>Provide a few details about the product, existing interface and team workflow, and we will respond with the most suitable next step.</p>
                        <form className="lead-form js-lead-form" data-form-name="Design System Lead"
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
                                <label htmlFor="main-message">System details *</label>
                                <textarea id="main-message" name="message" required
                                    placeholder="Tell us about the product URL, current design tools, frontend technology, consistency challenges, and required system scope..."></textarea>
                            </div>
                            <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" />
                            <input type="hidden" name="service" value="Design System Development" />
                            <input type="hidden" name="landing_page" value="/services/design-system-development/" />
                            <label className="consent">
                                <input type="checkbox" required />
                                <span>By submitting this form, you agree that Hyperlink Tech Solutions may contact you regarding your project enquiry.</span>
                            </label>
                            <button className="btn primary full" type="submit">Submit Design System Enquiry <span className="arrow">↗</span></button>
                            <div className="form-status" aria-live="polite"></div>
                        </form>
                        <div className="trust-line">No obligation · Your information stays private</div>
                    </div>
                </div>
            </section>
        </main>

        <ServiceFooter />
    </div>
    <a className="floating-cta" href="#contact">Get Design System Proposal ↗</a>
    </>
  );
}
