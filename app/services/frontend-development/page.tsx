import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import ServiceHeader from "@/components/services/ServiceHeader";
import ServiceFooter from "@/components/services/ServiceFooter";

export const metadata: Metadata = {
  title: "Frontend Development Services | Hyperlink Tech Solutions",
  description: "Frontend development services for websites, SaaS products, dashboards and web applications. Get responsive React and Next.js interfaces, API integration, accessibility and performance optimisation.",
};

export default function FrontendDevelopment() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/frontend-development/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/frontend-development/",
          "name": "Frontend Development Services | Hyperlink Tech Solutions",
          "description": "Frontend development services for websites, SaaS products, dashboards and web applications.",
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
                    <strong>Frontend Development</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy">
                        <div className="hero-status">Responsive frontend implementation from approved design to production</div>
                        <p className="eyebrow">Frontend development services</p>
                        <h1 id="service-title">Frontend interfaces built to be responsive, fast and <span className="accent-text">maintainable.</span></h1>
                        <p>We develop production-ready frontend interfaces for business websites, SaaS products, dashboards and custom web applications. From reusable React and Next.js components to API integration, responsive behaviour and performance optimisation, we turn approved designs into dependable digital experiences that look consistent and work smoothly across key devices.</p>
                        <ul className="hero-points">
                            <li>React and Next.js development</li>
                            <li>Reusable, responsive components</li>
                            <li>API and backend integration</li>
                            <li>Performance and accessibility foundations</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get Frontend Development Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#case-study">View Frontend Example <span className="arrow">↗</span></a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Frontend development benefits">
                        <div className="proof-item">
                            <small>01 · Accurate</small>
                            <strong>Approved designs are implemented carefully across layouts, components, interactions and responsive states.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Reusable</small>
                            <strong>Shared components and patterns reduce duplication and make future interface changes easier to manage.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Connected</small>
                            <strong>Frontend interfaces are integrated with APIs, forms, authentication and business data where required.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Optimised</small>
                            <strong>Performance, accessibility and responsive behaviour are considered throughout implementation.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When approved designs still need reliable implementation</p>
                        <p>A polished design file is only the beginning. The final experience depends on how accurately, responsively and maintainably the interface is developed.</p>
                        <a className="btn" href="#included">See What Is Included <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Your interface should behave as clearly as it looks—not lose quality during development.</h2>
                        <p>We help businesses and product teams turn design files into responsive production interfaces while maintaining visual consistency, component reuse and practical frontend architecture.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The developed interface does not match the design</h3>
                                <p>Spacing, typography, alignment, sizing and component states may differ from the approved design, reducing visual quality and consistency.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Mobile layouts break or feel unfinished</h3>
                                <p>Desktop-first implementation often creates poor navigation, awkward stacking, overflow and difficult interactions on smaller screens.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Components are duplicated across the codebase</h3>
                                <p>When similar UI elements are rebuilt repeatedly, updates become slower and inconsistencies increase.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">04</span>
                                <h3>Backend data is difficult to display clearly</h3>
                                <p>APIs may be connected without thoughtful loading, empty, error and success states, creating a weak user experience.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">05</span>
                                <h3>The interface feels slow</h3>
                                <p>Large bundles, unoptimised images, unnecessary scripts and inefficient rendering can affect page speed and usability.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">06</span>
                                <h3>Future changes are expensive</h3>
                                <p>Unclear component boundaries, inconsistent styling and fragile code can make routine interface updates difficult to implement safely.</p>
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
                                <p className="eyebrow" style={{color: "#d8c2ff"}}>Complete frontend implementation</p>
                                <h2>Everything required to turn approved designs into a working responsive interface.</h2>
                            </div>
                            <p>The final scope depends on your product, design files, backend readiness, required integrations and deployment environment. The modules below show what a complete frontend-development project can include.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Review</span>
                                <h3>Design and Technical Assessment</h3>
                                <p>Review of the design files, screen states, assets, breakpoints, interactions, component reuse and backend requirements before development begins.</p>
                                <div className="deliverable-tags"><small>Design review</small><small>Scope</small><small>Technical assessment</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Architecture</span>
                                <h3>Frontend Structure and Component Planning</h3>
                                <p>Planning reusable components, page structure, routing, state requirements, data flow and implementation conventions.</p>
                                <div className="deliverable-tags"><small>Components</small><small>Routing</small><small>Architecture</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Development</span>
                                <h3>Responsive Interface Implementation</h3>
                                <p>Development of approved pages and product screens into reusable frontend components across desktop, tablet and mobile layouts.</p>
                                <div className="deliverable-tags"><small>React</small><small>Next.js</small><small>Responsive UI</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Integration</span>
                                <h3>APIs, Forms and Business Data</h3>
                                <p>Connection of frontend interfaces with APIs, forms, authentication, content systems and other agreed data sources.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Forms</small><small>Data integration</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>05 · States</span>
                                <h3>Loading, Empty, Error and Success Behaviour</h3>
                                <p>Implementation of realistic interface states so users understand what is happening when data is loading, unavailable or successfully updated.</p>
                                <div className="deliverable-tags"><small>Loading</small><small>Error</small><small>Feedback</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>06 · Quality</span>
                                <h3>Browser and Responsive Testing</h3>
                                <p>Review of layouts, interactions, forms and components across agreed browsers, devices and viewport sizes.</p>
                                <div className="deliverable-tags"><small>Responsive QA</small><small>Browser QA</small><small>Interaction checks</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>07 · Optimisation</span>
                                <h3>Performance and Accessibility Foundations</h3>
                                <p>Image optimisation, code-splitting considerations, semantic structure, keyboard support and other agreed improvements.</p>
                                <div className="deliverable-tags"><small>Performance</small><small>Accessibility</small><small>SEO foundations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>08 · Delivery</span>
                                <h3>Deployment and Handover</h3>
                                <p>Production deployment support, code handover, environment guidance and agreed documentation.</p>
                                <div className="deliverable-tags"><small>Deployment</small><small>Handover</small><small>Documentation</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured frontend example</p>
                            <h2>Show how approved design became a reliable working product.</h2>
                        </div>
                        <p>Replace this demonstration with one genuine frontend-development project. Explain the design source, implementation challenges, component approach, integrations and final result.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Frontend Development visual">
                            <div className="case-visual-top">
                                <span>Frontend Development</span>
                                <span>React & Next.js</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Working system example" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Example Case-Study Structure</p>
                                <h2>A responsive frontend built from a complete product design system.</h2>
                                <p>Use this area to explain what was provided, how the interface was structured and what became easier after implementation.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Starting Point</small><strong>The client provided approved Figma designs for desktop and mobile views, including a shared component library and defined interaction states.</strong></div>
                                <div className="case-fact"><small>Challenge</small><strong>The product required reusable components, multiple user states, API-driven content and accurate responsive behaviour across a large set of screens.</strong></div>
                                <div className="case-fact"><small>Development Approach</small><strong>The interface was implemented using React or Next.js with shared components, consistent styling, typed data handling and structured page layouts.</strong></div>
                                <div className="case-fact"><small>Integrations</small><strong>Replace this with the real APIs, authentication services, CMS, analytics or business systems used in the project.</strong></div>
                                <div className="case-fact"><small>Result</small><strong>Replace this statement with a verified improvement such as faster delivery, improved consistency, reduced frontend duplication or better performance.</strong></div>
                            </div>
                            <a className="btn primary" href="/work/">View All Frontend Projects <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">What teams ask before starting frontend development.</h2>
                        <p>These answers clarify the scope, tools, alignment and delivery process before a proposal request.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>What does frontend development include?</summary>
                            <p>Frontend development covers the part of a website or application users see and interact with. It includes layouts, components, navigation, forms, data display, responsive behaviour and connection with backend services.</p>
                        </details>
                        <details>
                            <summary>Can you develop from Figma designs?</summary>
                            <p>Yes. We can review approved Figma designs and implement them into responsive frontend interfaces. The designs should ideally include desktop and mobile layouts, component states and required assets.</p>
                        </details>
                        <details>
                            <summary>Which frontend technologies do you use?</summary>
                            <p>Depending on the project, we may use HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS and related frontend tools.</p>
                        </details>
                        <details>
                            <summary>Can you work with our existing backend?</summary>
                            <p>Yes, provided the backend exposes suitable APIs or integration methods and the required documentation or developer support is available.</p>
                        </details>
                        <details>
                            <summary>Can you improve an existing frontend?</summary>
                            <p>Yes. We can review and improve existing interfaces for responsiveness, visual consistency, component reuse, performance or new feature implementation. Feasibility depends on the current codebase.</p>
                        </details>
                        <details>
                            <summary>Do you build responsive interfaces?</summary>
                            <p>Yes. Layouts, navigation, components, forms and key interactions are developed for agreed desktop, tablet and mobile screen sizes.</p>
                        </details>
                        <details>
                            <summary>Can you implement our design system?</summary>
                            <p>Yes. Existing design-system tokens and components can be translated into reusable frontend code. Design-tocode alignment should be reviewed before development begins.</p>
                        </details>
                        <details>
                            <summary>Do you handle API integration?</summary>
                            <p>Yes. We can connect approved frontend interfaces with REST, GraphQL or other supported APIs, including loading, empty, error and success states.</p>
                        </details>
                        <details>
                            <summary>Can you add authentication?</summary>
                            <p>Yes. Frontend authentication flows and protected views can be integrated with an agreed authentication service or backend system.</p>
                        </details>
                        <details>
                            <summary>Will the frontend be SEO-friendly?</summary>
                            <p>For public websites, the project can include semantic HTML, metadata support, crawlable content, canonical tags and other technical SEO foundations. Requirements should be confirmed in scope.</p>
                        </details>
                        <details>
                            <summary>Do you guarantee a specific performance score?</summary>
                            <p>No fixed performance score should be guaranteed without controlling the full stack, hosting, third-party scripts, content and backend behaviour. We optimise the frontend around the agreed environment and measurable constraints.</p>
                        </details>
                        <details>
                            <summary>Who owns the frontend code?</summary>
                            <p>Code ownership, licences, repository access and handover terms should be clearly stated in the commercial agreement before development begins.</p>
                        </details>
                        <details>
                            <summary>How long does frontend development take?</summary>
                            <p>The timeline depends on the number of pages or screens, component complexity, design readiness, API availability, integrations and review cycles. A realistic delivery schedule is provided after scope confirmation.</p>
                        </details>
                        <details>
                            <summary>Do you provide maintenance after launch?</summary>
                            <p>Yes. Frontend maintenance, bug fixes, improvements and new feature support can be included through a separate ongoing arrangement.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Connect frontend implementation with the broader product or website requirement.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/custom-website-design/"><div><small>Design</small><h3>Custom Website Design</h3><p>Create the responsive design system and page layouts before frontend development begins.</p></div><b>Explore website design ↗</b></a>
                        <a className="related-card" href="/services/saas-ui-ux-design/"><div><small>Product Design</small><h3>SaaS UI/UX Design</h3><p>Plan complete software-product flows, wireframes and responsive interfaces.</p></div><b>Explore SaaS design ↗</b></a>
                        <a className="related-card" href="/services/dashboard-design/"><div><small>Dashboards</small><h3>Dashboard Design</h3><p>Design data-rich dashboards, role-based views, chart patterns and operational interfaces.</p></div><b>Explore dashboard design ↗</b></a>
                        <a className="related-card" href="/services/design-system-development/"><div><small>Systems</small><h3>Design System Development</h3><p>Create reusable components, tokens and interface rules for consistent implementation.</p></div><b>Explore design systems ↗</b></a>
                        <a className="related-card" href="/services/custom-web-app-development/"><div><small>Apps</small><h3>Custom Web App Development</h3><p>Combine frontend, backend, database and workflow development into a complete custom application.</p></div><b>Explore web apps ↗</b></a>
                        <a className="related-card" href="/services/website-maintenance/"><div><small>Maintenance</small><h3>Website Maintenance</h3><p>Receive ongoing technical support, fixes and frontend improvements after launch.</p></div><b>Explore website maintenance ↗</b></a>
                    </div>
                </div>
            </section>

            <section className="section lead-section" id="contact">
                <div className="container lead-grid">
                    <div className="lead-copy">
                        <p className="eyebrow" style={{color: "#d8c2ff"}}>Turn approved designs into a working interface</p>
                        <h2>Share your design files, frontend requirements and technical environment.</h2>
                        <p>Tell us what has already been designed, which screens must be built, what backend or APIs are available and when the interface needs to be delivered. We will review the requirement and recommend a practical frontend scope.</p>
                    </div>

                    <div className="lead-panel">
                        <h3>Tell us about your frontend project</h3>
                        <p>Provide a few details about the designs, technology and required implementation, and we will respond with the most suitable next step.</p>
                        <form className="lead-form js-lead-form" data-form-name="Frontend Development Lead"
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
                                <label htmlFor="main-message">Implementation details *</label>
                                <textarea id="main-message" name="message" required
                                    placeholder="Tell us about the project type, design file URL, preferred frontend technology, existing backend/API, and required integrations..."></textarea>
                            </div>
                            <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" />
                            <input type="hidden" name="service" value="Frontend Development" />
                            <input type="hidden" name="landing_page" value="/services/frontend-development/" />
                            <label className="consent">
                                <input type="checkbox" required />
                                <span>By submitting this form, you agree that Hyperlink Tech Solutions may contact you regarding your project enquiry.</span>
                            </label>
                            <button className="btn primary full" type="submit">Submit Frontend Development Enquiry <span className="arrow">↗</span></button>
                            <div className="form-status" aria-live="polite"></div>
                        </form>
                        <div className="trust-line">No obligation · Your information stays private</div>
                    </div>
                </div>
            </section>
        </main>

        <ServiceFooter />
    </div>
    <a className="floating-cta" href="#contact">Get Frontend Development Proposal ↗</a>
    </>
  );
}
