import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Custom ERP Development Services | Hyperlink Tech Solutions",
  description: "Custom ERP development for operations, finance, inventory, HR, approvals and reporting. Get role-based modules, workflow automation, integrations and scalable business software.",
};

export default function CustomErpDevelopment() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/custom-erp-development/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/custom-erp-development/",
          "name": "Custom ERP Development Services | Hyperlink Tech Solutions",
          "description": "Custom ERP development for operations, finance, inventory, HR, approvals and reporting.",
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
                    <strong>Custom ERP Development</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy">
                        <div className="hero-status">Custom ERP systems from process mapping to launch</div>
                        <p className="eyebrow">Custom ERP development services</p>
                        <h1 id="service-title">Custom ERP systems built around the way your business actually <span className="accent-text">operates.</span></h1>
                        <p>We design and develop modular ERP platforms that connect departments, records, approvals, inventory, finance, reporting and recurring workflows in one central system. Every module is shaped around your users, responsibilities and operational rules—helping your organisation replace disconnected spreadsheets and manual handoffs with a clearer, more reliable business platform.</p>
                        <ul className="hero-points">
                            <li>Department and workflow mapping</li>
                            <li>Modular ERP architecture</li>
                            <li>Role-based access and approvals</li>
                            <li>Reporting, integrations and automation</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get ERP Development Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#case-study">View ERP Example <span className="arrow">↗</span></a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Custom ERP benefits">
                        <div className="proof-item">
                            <small>01 · Centralised</small>
                            <strong>Important business records, workflows and reports are managed through one connected platform.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Controlled</small>
                            <strong>Role-based permissions and approval rules help teams access the right data and actions.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Automated</small>
                            <strong>Recurring tasks, notifications, handoffs and status changes can be streamlined through defined workflows.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Scalable</small>
                            <strong>Modular architecture makes it easier to add departments, processes and reports as the organisation grows.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When disconnected operations start slowing the business down</p>
                        <p>Spreadsheets and standalone tools can support early operations, but they often create duplication, delays and reporting gaps as departments and transaction volumes increase.</p>
                        <a className="btn" href="#included">See What Is Included <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Your teams should work from one connected system—not from separate files, inboxes and manual updates.</h2>
                        <p>We help businesses replace fragmented processes with custom ERP platforms designed around defined departments, records, approvals and reporting requirements.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Each department uses a separate system</h3>
                                <p>Sales, operations, finance, inventory and management may work from different tools with no reliable information flow between them.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Data is entered more than once</h3>
                                <p>The same customer, order, invoice or inventory information may be copied across spreadsheets and applications, increasing errors and wasted effort.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Approvals depend on email and follow-up</h3>
                                <p>Purchase requests, payments, expenses and operational decisions may have no consistent approval path or status visibility.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">04</span>
                                <h3>Management reporting is delayed</h3>
                                <p>Reports often require manual consolidation because business information is spread across different teams and file formats.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">05</span>
                                <h3>Staff cannot see the full workflow</h3>
                                <p>Users may understand their own task but lack visibility into earlier stages, pending approvals or downstream impact.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">06</span>
                                <h3>Standard ERP software does not fit the process</h3>
                                <p>Generic software may force your teams into unnecessary modules while still failing to support the workflows that make your business unique.</p>
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
                                <p className="eyebrow" style={{color: "#d8c2ff"}}>Complete ERP delivery</p>
                                <h2>Everything required to turn your operational processes into a connected business system.</h2>
                            </div>
                            <p>The final scope is shaped around your departments, records, users, approvals, integrations and reporting needs. The modules below show what a complete custom ERP project can include.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Discovery</span>
                                <h3>Department and Process Mapping</h3>
                                <p>Clarification of the teams, current tools, workflows, records, approvals, pain points and expected business outcomes.</p>
                                <div className="deliverable-tags"><small>Departments</small><small>Processes</small><small>Requirements</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Architecture</span>
                                <h3>ERP Modules and Data Planning</h3>
                                <p>Planning the module structure, data relationships, permissions, statuses, integrations and technical approach.</p>
                                <div className="deliverable-tags"><small>Modules</small><small>Data model</small><small>Architecture</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Experience</span>
                                <h3>Dashboards and Operational Interface Design</h3>
                                <p>Responsive interface design for dashboards, forms, records, tables, approvals, reports and role-specific views.</p>
                                <div className="deliverable-tags"><small>Dashboards</small><small>Workflows</small><small>Responsive UI</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Development</span>
                                <h3>Frontend, Backend and Business Logic</h3>
                                <p>Development of ERP modules, database operations, validations, calculations and approved business rules.</p>
                                <div className="deliverable-tags"><small>Frontend</small><small>Backend</small><small>Business logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>05 · Access</span>
                                <h3>Roles, Permissions and Approvals</h3>
                                <p>Secure sign-in, department-based access and configurable approval paths for managers, staff and administrators.</p>
                                <div className="deliverable-tags"><small>Authentication</small><small>Permissions</small><small>Approvals</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>06 · Automation</span>
                                <h3>Notifications and Workflow Triggers</h3>
                                <p>Automation of approved handoffs, reminders, status changes and other recurring operational actions.</p>
                                <div className="deliverable-tags"><small>Automation</small><small>Notifications</small><small>Workflow rules</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>07 · Connectivity</span>
                                <h3>Business System Integrations</h3>
                                <p>Connection with approved accounting, payment, CRM, storage, email or other operational systems.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Webhooks</small><small>Integrations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>08 · Reporting</span>
                                <h3>Dashboards, Exports and Activity Logs</h3>
                                <p>Operational reporting, role-based dashboards, exports, status history and audit visibility where required.</p>
                                <div className="deliverable-tags"><small>Reports</small><small>Exports</small><small>Logs</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured ERP example</p>
                            <h2>Show how one connected system replaced fragmented operations.</h2>
                        </div>
                        <p>Replace this demonstration with one genuine ERP project. Explain the original process, departments involved, modules created and what improved after implementation.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Custom ERP visual">
                            <div className="case-visual-top">
                                <span>Custom ERP</span>
                                <span>Web Application</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Working system example" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Example Case-Study Structure</p>
                                <h2>A central operations platform for requests, approvals, inventory and reporting.</h2>
                                <p>Use this area to explain how information previously moved across teams, where delays occurred and how the ERP changed daily work.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Operations, procurement, inventory and finance were managed through separate spreadsheets and email, creating duplicate records and unclear approval status.</strong></div>
                                <div className="case-fact"><small>Users</small><strong>Department staff, supervisors, finance teams, management and administrators required different modules and permissions.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>A modular ERP with request management, purchase approvals, inventory tracking, supplier records, expense workflows, dashboards and reports.</strong></div>
                                <div className="case-fact"><small>Integrations</small><strong>Replace this with the real accounting, payment, email, storage or other systems connected to the ERP.</strong></div>
                                <div className="case-fact"><small>Result</small><strong>Replace this statement with a verified improvement such as reduced manual entry, faster approvals, clearer inventory visibility or more reliable reporting.</strong></div>
                            </div>
                            <a className="btn primary" href="/work/">View All ERP Projects <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">What teams ask before starting custom ERP development.</h2>
                        <p>These answers clarify the scope, modules, data migration and delivery process before a proposal request.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>What is a custom ERP system?</summary>
                            <p>A custom ERP is a business management platform developed around specific departments, records, workflows, approvals and reporting needs.</p>
                        </details>
                        <details>
                            <summary>How is custom ERP different from off-the-shelf ERP software?</summary>
                            <p>Off-the-shelf ERP products provide predefined modules and workflows. A custom ERP is shaped around the processes, roles and integrations of a specific organisation.</p>
                        </details>
                        <details>
                            <summary>Which ERP modules can you develop?</summary>
                            <p>Modules may include CRM, sales, procurement, inventory, finance, HR, projects, assets, service management, documents and reporting.</p>
                        </details>
                        <details>
                            <summary>Can the ERP support different departments and locations?</summary>
                            <p>Yes. Users and data can be organised by department, branch, location, project or business unit according to the approved access model.</p>
                        </details>
                        <details>
                            <summary>Can you develop only one ERP module first?</summary>
                            <p>Yes. A focused module can be developed first and expanded later if the data model and architecture are planned appropriately.</p>
                        </details>
                        <details>
                            <summary>Can you integrate the ERP with existing software?</summary>
                            <p>Yes, provided the existing systems offer suitable APIs, webhooks or supported integration methods.</p>
                        </details>
                        <details>
                            <summary>Can you migrate our existing spreadsheet data?</summary>
                            <p>Yes. Data migration can be included after reviewing the structure, quality and volume of the existing records.</p>
                        </details>
                        <details>
                            <summary>Can the ERP automate approvals and notifications?</summary>
                            <p>Yes. Approval paths, reminders, assignments, status changes and notifications can be included according to defined business rules.</p>
                        </details>
                        <details>
                            <summary>Will the ERP work on mobile devices?</summary>
                            <p>Core ERP functions can be developed responsively for relevant desktop, tablet and mobile screen sizes. Complex tables may use adapted mobile layouts.</p>
                        </details>
                        <details>
                            <summary>How do you protect sensitive business data?</summary>
                            <p>Security can include authentication, role-based access, department restrictions, validation, secure data handling, backups and activity logs according to the project scope.</p>
                        </details>
                        <details>
                            <summary>Can you guarantee that the ERP will fit every future process?</summary>
                            <p>No system can anticipate every future requirement. We design modular architecture around the approved scope and support future improvements as the organisation evolves.</p>
                        </details>
                        <details>
                            <summary>How long does custom ERP development take?</summary>
                            <p>The timeline depends on the number of modules, users, workflows, integrations, migration requirements and review cycles. A realistic plan is provided after discovery and scope confirmation.</p>
                        </details>
                        <details>
                            <summary>Who owns the ERP code?</summary>
                            <p>Code ownership, third-party licences, repository access and handover terms should be clearly stated in the commercial agreement.</p>
                        </details>
                        <details>
                            <summary>Do you provide support after launch?</summary>
                            <p>Yes. Maintenance, bug fixes, new modules, integration updates and workflow improvements can be provided through a separate support arrangement.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Build the supporting systems around your ERP platform.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/custom-web-app-development/"><div><small>Apps</small><h3>Custom Web App Development</h3><p>Develop specialised business workflows and user experiences beyond the core ERP modules.</p></div><b>Explore web apps ↗</b></a>
                        <a className="related-card" href="/services/admin-panel-development/"><div><small>Admin</small><h3>Admin Panel Development</h3><p>Create internal control interfaces for managing users, records, settings and ERP activity.</p></div><b>Explore admin panels ↗</b></a>
                        <a className="related-card" href="/services/client-portal-development/"><div><small>Portals</small><h3>Client Portal Development</h3><p>Give customers secure access to projects, documents, invoices and requests connected to the ERP.</p></div><b>Explore client portals ↗</b></a>
                        <a className="related-card" href="/services/dashboard-design/"><div><small>Dashboards</small><h3>Dashboard Design</h3><p>Design role-specific dashboards for operations, management and reporting.</p></div><b>Explore dashboard design ↗</b></a>
                        <a className="related-card" href="/services/frontend-development/"><div><small>Frontend</small><h3>Frontend Development</h3><p>Implement approved ERP interfaces into responsive and reusable production components.</p></div><b>Explore frontend ↗</b></a>
                        <a className="related-card" href="/services/design-system-development/"><div><small>Systems</small><h3>Design System Development</h3><p>Create shared components and patterns for consistent ERP modules and workflows.</p></div><b>Explore design systems ↗</b></a>
                    </div>
                </div>
            </section>

            <section className="section lead-section" id="contact">
                <div className="container lead-grid">
                    <div className="lead-copy">
                        <p className="eyebrow" style={{color: "#d8c2ff"}}>Plan your custom ERP</p>
                        <h2>Tell us which departments, records and workflows need to work together.</h2>
                        <p>Share your current tools, teams, required modules, approval processes, integration needs and expected timeline. We will review the requirement and recommend a practical discovery or development scope.</p>
                    </div>

                    <div className="lead-panel">
                        <h3>Tell us about your ERP requirement</h3>
                        <p>Provide a few details about your departments, workflows and existing systems, and we will respond with the most suitable next step.</p>
                        <form className="lead-form js-lead-form" data-form-name="Custom ERP Lead"
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
                                <label htmlFor="main-message">ERP details *</label>
                                <textarea id="main-message" name="message" required
                                    placeholder="Tell us about the company size, required ERP modules, departments involved, current software, workflow problems, and existing data volume..."></textarea>
                            </div>
                            <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" />
                            <input type="hidden" name="service" value="Custom ERP Development" />
                            <input type="hidden" name="landing_page" value="/services/custom-erp-development/" />
                            <label className="consent">
                                <input type="checkbox" required />
                                <span>By submitting this form, you agree that Hyperlink Tech Solutions may contact you regarding your project enquiry.</span>
                            </label>
                            <button className="btn primary full" type="submit">Submit ERP Development Enquiry <span className="arrow">↗</span></button>
                            <div className="form-status" aria-live="polite"></div>
                        </form>
                        <div className="trust-line">No obligation · Your information stays private</div>
                    </div>
                </div>
            </section>
        </main>

        <SiteFooter />
    </div>
    <a className="floating-cta" href="#contact">Get ERP Development Proposal ↗</a>
    </>
  );
}
