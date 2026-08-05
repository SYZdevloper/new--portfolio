import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import ServiceHeader from "@/components/services/ServiceHeader";
import ServiceFooter from "@/components/services/ServiceFooter";

export const metadata: Metadata = {
  title: "Client Portal Development Services | Hyperlink Tech Solutions",
  description: "Custom client portal development for secure customer access, documents, projects, invoices, requests and communication. Get role-based access, integrations, responsive design and scalable architecture.",
};

export default function ClientPortalDevelopment() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/client-portal-development/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/client-portal-development/",
          "name": "Client Portal Development Services | Hyperlink Tech Solutions",
          "description": "Custom client portal development for secure customer access, documents, projects, invoices, requests and communication.",
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
                    <strong>Client Portal Development</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy">
                        <div className="hero-status">Secure client portals from workflow planning to launch</div>
                        <p className="eyebrow">Client portal development services</p>
                        <h1 id="service-title">Client portals built to give customers secure, convenient access to what they <span className="accent-text">need.</span></h1>
                        <p>We design and develop responsive client portals for service businesses, agencies, SaaS platforms and other organisations that need a secure space for customer access. From projects, documents and invoices to requests, messages and account details, every portal is organised around the information and actions your clients use most—helping your team reduce repetitive communication while improving the customer experience.</p>
                        <ul className="hero-points">
                            <li>Secure customer accounts</li>
                            <li>Projects, files and account information</li>
                            <li>Requests, approvals and communication</li>
                            <li>Role-based access and integrations</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get Client Portal Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#case-study">View Client Portal Example <span className="arrow">↗</span></a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Client portal benefits">
                        <div className="proof-item">
                            <small>01 · Secure</small>
                            <strong>Clients access only the accounts, documents, projects and information assigned to them.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Convenient</small>
                            <strong>Customers can find updates, files and actions without repeatedly contacting your team.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Connected</small>
                            <strong>The portal can integrate with approved business systems, notifications and data workflows.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Scalable</small>
                            <strong>Reusable modules and structured permissions make it easier to expand portal features over time.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When customer communication becomes fragmented</p>
                        <p>Email, messaging apps and shared folders may work initially, but they become difficult to manage when customers need regular access to projects, documents, requests and account information.</p>
                        <a className="btn" href="#included">See What Is Included <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Your customers should not have to search through emails to understand what is happening.</h2>
                        <p>We help businesses replace scattered communication and file-sharing processes with secure client portals that centralise information, actions and updates in one organised experience.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Customers repeatedly ask for the same updates</h3>
                                <p>Your team spends time answering routine questions about project status, documents, invoices or next steps.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Files are scattered across email and cloud folders</h3>
                                <p>Important documents may be difficult to locate, incorrectly shared or disconnected from the related project or request.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Clients cannot track requests or progress</h3>
                                <p>Customers may submit information through email but have no clear view of whether it was received, reviewed or completed.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">04</span>
                                <h3>Account information is managed manually</h3>
                                <p>Contact details, preferences, subscriptions, services and billing information may require support intervention for routine changes.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">05</span>
                                <h3>Communication lacks context</h3>
                                <p>Messages, approvals and comments can become separated from the project, document or workflow they relate to.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">06</span>
                                <h3>Different clients need different access</h3>
                                <p>Each customer, company, team member or partner may require access to different records, files and actions.</p>
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
                                <p className="eyebrow" style={{color: "#d8c2ff"}}>Complete client portal delivery</p>
                                <h2>Everything required to turn customer access into a secure, organised digital experience.</h2>
                            </div>
                            <p>The final scope is shaped around your clients, services, data, workflows and integrations. The modules below show what a complete client-portal project can include.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Discovery</span>
                                <h3>Client Journey and Workflow Planning</h3>
                                <p>Clarification of the client groups, current communication process, information needs, required actions and internal workflow.</p>
                                <div className="deliverable-tags"><small>Client roles</small><small>Journey</small><small>Requirements</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Architecture</span>
                                <h3>Portal Modules and Data Planning</h3>
                                <p>Planning the portal structure, account model, projects, documents, requests, permissions and integrations.</p>
                                <div className="deliverable-tags"><small>Modules</small><small>Data model</small><small>Architecture</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Experience</span>
                                <h3>Responsive Portal Interface Design</h3>
                                <p>Design of the client dashboard, project views, file access, messages, forms, settings and account states.</p>
                                <div className="deliverable-tags"><small>Dashboard</small><small>Responsive UI</small><small>Client experience</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Development</span>
                                <h3>Frontend, Backend and Portal Logic</h3>
                                <p>Development of the portal interface, database operations, workflows, validations and approved business rules.</p>
                                <div className="deliverable-tags"><small>Frontend</small><small>Backend</small><small>Business logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>05 · Access</span>
                                <h3>Authentication and Permissions</h3>
                                <p>Secure sign-in, password recovery, account access and role-based visibility for clients, staff and administrators.</p>
                                <div className="deliverable-tags"><small>Authentication</small><small>Roles</small><small>Permissions</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>06 · Communication</span>
                                <h3>Requests, Messages and Notifications</h3>
                                <p>Structured customer requests, comments, status updates and approved email or in-app notifications.</p>
                                <div className="deliverable-tags"><small>Requests</small><small>Messaging</small><small>Notifications</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>07 · Connectivity</span>
                                <h3>Business System Integrations</h3>
                                <p>Connection with approved CRM, billing, storage, project-management or other relevant systems.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Webhooks</small><small>Integrations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>08 · Launch</span>
                                <h3>Testing, Deployment and Handover</h3>
                                <p>Quality checks, production deployment, environment configuration and agreed training or documentation.</p>
                                <div className="deliverable-tags"><small>QA</small><small>Deployment</small><small>Handover</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured client portal example</p>
                            <h2>Show how one secure portal replaced scattered customer communication.</h2>
                        </div>
                        <p>Replace this demonstration with one genuine client-portal project. Explain the original client experience, the portal modules, user access and what improved after launch.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Client Portal visual">
                            <div className="case-visual-top">
                                <span>Client Portal</span>
                                <span>Custom Web App</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Working system example" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Example Case-Study Structure</p>
                                <h2>A central client workspace for projects, files, requests and billing.</h2>
                                <p>Use this area to explain how customers previously received updates and information, what friction existed and how the portal changed the process.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Project updates, documents, invoices and customer requests were managed through email, shared folders and manual follow-up.</strong></div>
                                <div className="case-fact"><small>Users</small><strong>Clients, client team members, account managers and administrators required different access and actions.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>A responsive portal with secure login, project status, document access, request submission, messages, invoices and account settings.</strong></div>
                                <div className="case-fact"><small>Integrations</small><strong>Replace this with the real CRM, billing, storage, email, project-management or other systems connected to the portal.</strong></div>
                                <div className="case-fact"><small>Result</small><strong>Replace this statement with a verified improvement such as fewer support requests, faster document access, clearer approvals or improved customer satisfaction.</strong></div>
                            </div>
                            <a className="btn primary" href="/work/">View All Client Portal Projects <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">What teams ask before starting client portal development.</h2>
                        <p>These answers clarify the scope, integrations, access models and delivery process before a proposal request.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>What is a client portal?</summary>
                            <p>A client portal is a secure online space where customers can access account information, projects, documents, requests, invoices, messages and other services related to their relationship with a business.</p>
                        </details>
                        <details>
                            <summary>How is a client portal different from a website?</summary>
                            <p>A website usually provides public information. A client portal requires secure login and provides customer-specific data, files and actions.</p>
                        </details>
                        <details>
                            <summary>Can you build a portal for an existing website or application?</summary>
                            <p>Yes. A client portal can be developed alongside an existing website or connected to an existing backend, database or API where the technical environment supports it.</p>
                        </details>
                        <details>
                            <summary>Can each client see different information?</summary>
                            <p>Yes. Clients, companies, team members and internal staff can receive different access according to the approved permission model.</p>
                        </details>
                        <details>
                            <summary>Can clients upload and download documents?</summary>
                            <p>Yes. Secure file upload, categorisation, access control and download workflows can be included where suitable storage is available.</p>
                        </details>
                        <details>
                            <summary>Can the portal show projects and status updates?</summary>
                            <p>Yes. Project milestones, service status, deliverables, pending actions and timelines can be included.</p>
                        </details>
                        <details>
                            <summary>Can clients submit requests or support tickets?</summary>
                            <p>Yes. Structured request forms, status tracking, comments and notifications can be included.</p>
                        </details>
                        <details>
                            <summary>Can the portal include invoices and payments?</summary>
                            <p>Yes. Invoice access, payment status, subscriptions and payment integrations can be included where supported by the selected systems.</p>
                        </details>
                        <details>
                            <summary>Can clients communicate with our team inside the portal?</summary>
                            <p>Yes. Contextual messages, comments and notifications can be included according to the communication workflow.</p>
                        </details>
                        <details>
                            <summary>Will the portal work on mobile devices?</summary>
                            <p>Core client-portal functions can be developed responsively for relevant desktop, tablet and mobile screen sizes.</p>
                        </details>
                        <details>
                            <summary>How do you protect client information?</summary>
                            <p>Security can include authentication, role-based access, account isolation, validation, secure file access and other controls relevant to the project scope.</p>
                        </details>
                        <details>
                            <summary>Can the portal integrate with our CRM or project-management tool?</summary>
                            <p>Yes, provided the existing tool offers suitable APIs, webhooks or supported integration methods.</p>
                        </details>
                        <details>
                            <summary>How long does client portal development take?</summary>
                            <p>The timeline depends on the number of modules, user roles, integrations, workflows, files and review cycles. A realistic plan is provided after scope confirmation.</p>
                        </details>
                        <details>
                            <summary>Who owns the portal code?</summary>
                            <p>Code ownership, third-party licences, repository access and handover terms should be clearly stated in the commercial agreement.</p>
                        </details>
                        <details>
                            <summary>Do you provide support after launch?</summary>
                            <p>Yes. Maintenance, bug fixes, new features and technical improvements can be provided through a separate support arrangement.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Build the broader digital system around your client experience.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/custom-web-app-development/"><div><small>Apps</small><h3>Custom Web App Development</h3><p>Develop the complete business logic, workflows and data platform behind the portal.</p></div><b>Explore web apps ↗</b></a>
                        <a className="related-card" href="/services/admin-panel-development/"><div><small>Admin</small><h3>Admin Panel Development</h3><p>Create the internal control panel used by staff to manage clients, requests, files and portal activity.</p></div><b>Explore admin panels ↗</b></a>
                        <a className="related-card" href="/services/dashboard-design/"><div><small>Dashboards</small><h3>Dashboard Design</h3><p>Design clear client and internal dashboards for status, activity and reporting.</p></div><b>Explore dashboard design ↗</b></a>
                        <a className="related-card" href="/services/custom-erp-development/"><div><small>ERP</small><h3>Custom ERP Development</h3><p>Connect the client portal with broader internal operations, approvals and reporting.</p></div><b>Explore custom ERP ↗</b></a>
                        <a className="related-card" href="/services/frontend-development/"><div><small>Frontend</small><h3>Frontend Development</h3><p>Implement approved portal designs into reusable and responsive production interfaces.</p></div><b>Explore frontend ↗</b></a>
                        <a className="related-card" href="/services/design-system-development/"><div><small>Systems</small><h3>Design System Development</h3><p>Create shared components and interface patterns for consistent customer and admin experiences.</p></div><b>Explore design systems ↗</b></a>
                    </div>
                </div>
            </section>

            <section className="section lead-section" id="contact">
                <div className="container lead-grid">
                    <div className="lead-copy">
                        <p className="eyebrow" style={{color: "#d8c2ff"}}>Plan a better client experience</p>
                        <h2>Tell us what your customers need to access, submit and track.</h2>
                        <p>Share your current communication process, portal users, required modules, existing tools and expected timeline. We will review the requirement and recommend a practical discovery or development scope.</p>
                    </div>

                    <div className="lead-panel">
                        <h3>Tell us about your client portal</h3>
                        <p>Provide a few details about your customers, services and required portal features, and we will respond with the most suitable next step.</p>
                        <form className="lead-form js-lead-form" data-form-name="Client Portal Lead"
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
                                <label htmlFor="main-message">Portal details *</label>
                                <textarea id="main-message" name="message" required
                                    placeholder="Tell us about the industry, portal type, primary client groups, required modules, current communication process, and existing backend/systems..."></textarea>
                            </div>
                            <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" />
                            <input type="hidden" name="service" value="Client Portal Development" />
                            <input type="hidden" name="landing_page" value="/services/client-portal-development/" />
                            <label className="consent">
                                <input type="checkbox" required />
                                <span>By submitting this form, you agree that Hyperlink Tech Solutions may contact you regarding your project enquiry.</span>
                            </label>
                            <button className="btn primary full" type="submit">Submit Client Portal Enquiry <span className="arrow">↗</span></button>
                            <div className="form-status" aria-live="polite"></div>
                        </form>
                        <div className="trust-line">No obligation · Your information stays private</div>
                    </div>
                </div>
            </section>
        </main>

        <ServiceFooter />
    </div>
    <a className="floating-cta" href="#contact">Get Client Portal Proposal ↗</a>
    </>
  );
}
