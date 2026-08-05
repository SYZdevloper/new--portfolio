import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import ServiceHeader from "@/components/services/ServiceHeader";
import ServiceFooter from "@/components/services/ServiceFooter";

export const metadata: Metadata = {
  title: "Custom Web Application Development Services | Hyperlink Tech Solutions",
  description: "Custom web application development for customer portals, internal tools, workflow systems, dashboards and business platforms. Get responsive interfaces, integrations, permissions and scalable architecture.",
};

export default function CustomWebApp() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/custom-web-app-development/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/custom-web-app-development/",
          "name": "Custom Web Application Development Services | Hyperlink Tech Solutions",
          "description": "Custom web application development for customer portals, internal tools, workflow systems, dashboards and business platforms.",
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
                    <strong>Custom Web App Development</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy">
                        <div className="hero-status">Purpose-built web applications from workflow planning to launch</div>
                        <p className="eyebrow">Custom web application development services</p>
                        <h1 id="service-title">Custom web applications built around your users, workflows and <span className="accent-text">business operations.</span></h1>
                        <p>We design and develop responsive web applications for customer-facing services, internal operations, workflow automation, data management and specialised business requirements. Every application is shaped around the people who use it, the information they need and the tasks they must complete—helping your organisation replace disconnected processes with a clearer digital system.</p>
                        <ul className="hero-points">
                            <li>Workflow-focused product planning</li>
                            <li>Responsive interface and application development</li>
                            <li>Authentication, roles and permissions</li>
                            <li>APIs, integrations and data workflows</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get Web Application Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#case-study">View Application Example <span className="arrow">↗</span></a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Web app development benefits">
                        <div className="proof-item">
                            <small>01 · Purpose-Built</small>
                            <strong>The application is planned around your organisation’s actual workflows instead of forcing your team into a generic software structure.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Role-Aware</small>
                            <strong>Users can receive the appropriate views, actions and data access according to their role and responsibility.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Connected</small>
                            <strong>APIs, databases and business tools can be integrated where they support the required workflow.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Scalable</small>
                            <strong>Reusable components, structured data and maintainable architecture make future improvements easier to plan.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When standard software is no longer enough</p>
                        <p>Spreadsheets, disconnected tools and manual handoffs may work initially, but they often become difficult to manage as users, records, approvals and operational complexity increase.</p>
                        <a className="btn" href="#included">See What Is Included <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Your software should support the way your organisation works—not force every process into a workaround.</h2>
                        <p>We help businesses replace fragmented tools and repetitive manual tasks with custom web applications designed around defined users, permissions, records and operational workflows.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Important work is managed across spreadsheets</h3>
                                <p>Teams lose time when records are divided across multiple files, duplicated manually or updated without clear ownership.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Standard software does not match the workflow</h3>
                                <p>Off-the-shelf products may include unnecessary features while still failing to support the organisation’s actual process.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Users cannot access the right information</h3>
                                <p>Customers, staff, managers and administrators may require different views, permissions and actions within the same system.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">04</span>
                                <h3>Approvals and handoffs are handled manually</h3>
                                <p>Email chains, chat messages and verbal follow-ups make it difficult to understand the current status of a request or task.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">05</span>
                                <h3>Business tools are disconnected</h3>
                                <p>Customer records, documents, payments, notifications and reporting may exist across separate systems with no reliable flow between them.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">06</span>
                                <h3>The current platform cannot grow</h3>
                                <p>A fragile codebase, unclear data structure or rigid interface can make every new feature expensive and difficult to maintain.</p>
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
                                <p className="eyebrow" style={{color: "#d8c2ff"}}>Complete application delivery</p>
                                <h2>Everything required to turn a defined business workflow into a working web application.</h2>
                            </div>
                            <p>The final scope is shaped around your users, data, permissions, workflows and integrations. The modules below show what a complete custom web-application project can include.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Discovery</span>
                                <h3>Requirements and Workflow Mapping</h3>
                                <p>Clarification of the business problem, user groups, existing process, required actions, data, approvals, exceptions and expected outcome.</p>
                                <div className="deliverable-tags"><small>Requirements</small><small>User roles</small><small>Workflow map</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Architecture</span>
                                <h3>Application and Data Planning</h3>
                                <p>Planning the application modules, page hierarchy, data relationships, permissions, integrations and technical approach.</p>
                                <div className="deliverable-tags"><small>Modules</small><small>Data model</small><small>Technical plan</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Experience</span>
                                <h3>User Flows and Responsive Interface Design</h3>
                                <p>Wireframes and responsive interface design for the key tasks each user must complete across desktop, tablet and mobile screens.</p>
                                <div className="deliverable-tags"><small>User flows</small><small>Wireframes</small><small>Responsive UI</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Development</span>
                                <h3>Frontend, Backend and Business Logic</h3>
                                <p>Development of the application interface, server-side functionality, database operations, validation and agreed business rules.</p>
                                <div className="deliverable-tags"><small>Frontend</small><small>Backend</small><small>Business logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>05 · Access</span>
                                <h3>Authentication, Roles and Permissions</h3>
                                <p>Secure sign-in flows and role-based access controls according to the approved user and data-access model.</p>
                                <div className="deliverable-tags"><small>Authentication</small><small>Roles</small><small>Permissions</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>06 · Connectivity</span>
                                <h3>APIs and Business Integrations</h3>
                                <p>Integration with agreed third-party services such as payment systems, email platforms, storage, analytics, CRM tools or internal APIs.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Webhooks</small><small>Integrations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>07 · Quality</span>
                                <h3>Testing and Application Verification</h3>
                                <p>Review of key workflows, permissions, forms, data operations, responsive layouts, browsers and agreed functionality.</p>
                                <div className="deliverable-tags"><small>Functional QA</small><small>Responsive QA</small><small>Permission checks</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>08 · Launch</span>
                                <h3>Deployment, Handover and Support</h3>
                                <p>Production deployment, environment configuration, agreed documentation and the beginning of the support or maintenance arrangement.</p>
                                <div className="deliverable-tags"><small>Deployment</small><small>Handover</small><small>Support</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured application example</p>
                            <h2>Show the working workflow—not only a collection of interface screenshots.</h2>
                        </div>
                        <p>Replace this demonstration with one genuine application project. Explain the original operational problem, the user roles, the key workflow, the technical implementation and the resulting improvement.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Web Application project visual">
                            <div className="case-visual-top">
                                <span>Web Application</span>
                                <span>Responsive + Internal Workflow</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/b9149920-0a45-4672-b659-5d8eedf2dd6b.webp" alt="Working system example" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Example Case-Study Structure</p>
                                <h2>A clearer path from customer request to internal completion.</h2>
                                <p>Use this area to explain how information previously moved between users, teams and tools, what was changed and what became easier after the application was introduced.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Requests were being received through several channels and manually transferred into spreadsheets.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>A responsive web application with account access, status tracking, document handling and role-based administration.</strong></div>
                                <div className="case-fact"><small>Result</small><strong>Replace this statement with a verified operational improvement or measurable time saving.</strong></div>
                            </div>
                            <a className="btn primary" href="/work/">View All Web Application Projects <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">What businesses ask before starting application development.</h2>
                        <p>These answers clarify the scope, frontend and backend development, mobile readiness, systems and project scope before a proposal request.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>What is a custom web application?</summary>
                            <p>A custom web application is browser-accessible software developed around a specific set of users, workflows, data and business requirements. Unlike a standard website, it generally allows users to sign in, manage information, complete tasks and interact with application logic.</p>
                        </details>
                        <details>
                            <summary>How is a web application different from a business website?</summary>
                            <p>A business website primarily presents information and supports marketing or enquiries. A web application enables users to perform actions such as managing records, submitting requests, collaborating, processing transactions or completing operational workflows.</p>
                        </details>
                        <details>
                            <summary>Can you help define the application requirements?</summary>
                            <p>Yes. Discovery and workflow planning can be included to clarify the users, modules, permissions, information, integrations and primary business rules before development begins.</p>
                        </details>
                        <details>
                            <summary>Can you develop both the frontend and backend?</summary>
                            <p>Yes. Hyperlink Tech Solutions can manage responsive interface development, backend logic, database operations, authentication, APIs, integrations, testing and deployment according to the agreed scope.</p>
                        </details>
                        <details>
                            <summary>Can the application support different user roles?</summary>
                            <p>Yes. Role-based access can be implemented for groups such as customers, staff, managers, vendors and administrators. The permissions and accessible data must be clearly defined during planning.</p>
                        </details>
                        <details>
                            <summary>Can you improve an existing web application?</summary>
                            <p>Yes. We can review an existing application for interface improvements, new features, integration work, performance optimisation or technical restructuring. Feasibility depends on the technology, documentation and condition of the current codebase.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Build the supporting interfaces and systems around your application.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/saas-ui-ux-design/"><div><small>Design</small><h3>SaaS UI/UX Design</h3><p>Plan user flows, wireframes, responsive interfaces and design systems for software products before development.</p></div><b>Explore SaaS design ↗</b></a>
                        <a className="related-card" href="/services/dashboard-design/"><div><small>Dashboards</small><h3>Dashboard Design</h3><p>Create role-specific dashboards that organise metrics, activities, alerts and operational actions.</p></div><b>Explore dashboards ↗</b></a>
                        <a className="related-card" href="/services/client-portal-development/"><div><small>Portals</small><h3>Client Portal Development</h3><p>Build secure customer-facing portals for documents, requests, projects, invoices and communication.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/custom-erp-development/"><div><small>ERP</small><h3>Custom ERP Development</h3><p>Connect departments, approvals, records and reporting through a central operational system.</p></div><b>Explore ERP ↗</b></a>
                    </div>
                </div>
            </section>

            <section className="section lead-section" id="contact">
                <div className="container lead-grid">
                    <div className="lead-copy">
                        <p className="eyebrow" style={{color: "#d8c2ff"}}>Plan your custom application</p>
                        <h2>Tell us which users, workflows and business problems the application must support.</h2>
                        <p>Share your current process, user groups, required functionality, existing tools and expected timeline. We will review the requirement and recommend a practical discovery or development scope.</p>
                    </div>

                    <div className="lead-panel">
                        <h3>Tell us about your web application</h3>
                        <p>Provide a few details about the users, workflow and required functionality, and we will respond with the most suitable next step.</p>
                        <form className="lead-form js-lead-form" data-form-name="Web Application Lead"
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
                                <label htmlFor="main-message">Project details *</label>
                                <textarea id="main-message" name="message" required
                                    placeholder="Tell us about the business problem, user groups, required features, and any existing tools or integrations..."></textarea>
                            </div>
                            <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" />
                            <input type="hidden" name="service" value="Custom Web App Development" />
                            <input type="hidden" name="landing_page" value="/services/custom-web-app-development/" />
                            <label className="consent">
                                <input type="checkbox" required />
                                <span>By submitting this form, you agree that Hyperlink Tech Solutions may contact you regarding your project enquiry.</span>
                            </label>
                            <button className="btn primary full" type="submit">Submit Web Application Enquiry <span className="arrow">↗</span></button>
                            <div className="form-status" aria-live="polite"></div>
                        </form>
                        <div className="trust-line">No obligation · Your information stays private</div>
                    </div>
                </div>
            </section>
        </main>

        <ServiceFooter />
    </div>
    <a className="floating-cta" href="#contact">Get Web Application Proposal ↗</a>
    </>
  );
}
