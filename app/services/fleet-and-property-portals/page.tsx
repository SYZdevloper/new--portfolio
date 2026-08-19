import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/fleet-and-property-portals/" },
  title: "Fleet & Property Portals | Hyperlink Tech Solutions",
  description: "B2B charging management, multi-tenant portals, and fleet operations for the EV industry.",
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
                    <strong>Fleet & Property Portals</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">B2B Fleet Portals</div>
                        <p className="eyebrow">Fleet & Property Portals</p>
                        <h1 id="service-title">B2B charging management for fleet operators and real estate.</h1>
                        <p className="hero-lead">We build multi-tenant portals that allow businesses to monitor their private chargers, allocate costs, and manage access.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Monitor the exact State of Charge for hundreds of vehicles</li>
                            <li>Assign energy costs to specific departments, routes, or tenants</li>
                            <li>Restrict charger usage via strict RBAC and RFID whitelisting</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Project <span className="arrow">↗</span></a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        <div className="proof-item">
                            <small>01 · Depot Visibility</small>
                            <strong>Monitor the exact State of Charge for hundreds of vehicles.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Cost Allocation</small>
                            <strong>Assign energy costs to specific departments, routes, or tenants.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Access Control</small>
                            <strong>Restrict charger usage via strict RBAC and RFID whitelisting.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · API Telematics</small>
                            <strong>Merge charger data with vehicle telemetry for a complete picture.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When fleets go blind</p>
                        <p>Operating EVs at scale requires precise operational data.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>B2B charging is about logistics, not just energy.</h2>
                        <p>We build enterprise portals that help fleet operators ensure vehicles are ready for routes, and allow property managers to monetize and control their private infrastructure.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Blind Spots</h3>
                                <p>Fleet managers lack visibility into overnight charging, leading to vehicles leaving the depot with insufficient range.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Uncontrolled Costs</h3>
                                <p>Property managers struggle to bill commercial tenants accurately for their specific energy consumption.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Power Constraints</h3>
                                <p>Without smart visualization, depots easily exceed grid limits, triggering massive peak-demand utility charges.</p>
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
                                <h2>Multi-tenant control centers.</h2>
                            </div>
                            <p>We build specialized dashboards that aggregate hardware APIs, vehicle telematics, and business logic into a single B2B application.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Depot Dashboards</h3>
                                <p>Real-time visual layouts of your depot or parking garage showing exactly which vehicles are charging and their current SoC.</p>
                                <div className="deliverable-tags"><small>React/Vue</small><small>Live Data</small><small>Visualization</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Tenant Management</h3>
                                <p>Strict multi-tenant architecture allowing you to onboard distinct organizations, set credit limits, and assign specific chargers.</p>
                                <div className="deliverable-tags"><small>Multi-tenant</small><small>RBAC</small><small>Onboarding</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Smart Charging Logic</h3>
                                <p>Interfaces to configure load balancing rules, schedule off-peak charging, and prioritize specific vehicles for fast charging.</p>
                                <div className="deliverable-tags"><small>Load Balancing</small><small>Scheduling</small><small>Rules</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Reporting & Exports</h3>
                                <p>Automated generation of detailed Excel/CSV reports for sustainability compliance, tax rebates, and payroll reimbursements.</p>
                                <div className="deliverable-tags"><small>CSV/Excel</small><small>Compliance</small><small>Payroll</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Fleet Portal</p>
                            <h2>Electrifying a logistics delivery fleet.</h2>
                        </div>
                        <p>See how we helped a major logistics company transition 500 delivery vans to electric with a custom depot charging portal.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>B2B Portals</span>
                                <span>Fleet Management</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Depot Energy Management</p>
                                <h2>Ensuring vehicles are charged and ready for routes.</h2>
                                <p>Fleet managers lacked visibility into overnight charging statuses. Vans were leaving the depot undercharged, jeopardizing delivery schedules.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Monitor vehicle state-of-charge, prioritize depot power distribution, and alert managers to faults.</strong></div>
                                <div className="case-fact"><small>Approach</small><strong>We built a web dashboard integrating vehicle telematics and charger APIs for a holistic depot view.</strong></div>
                                <div className="case-fact"><small>Result</small><strong>Missed routes due to low battery dropped to zero, optimizing daily operations.</strong></div>
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
                        <h2 id="faq-title">What B2B clients ask about fleet portals.</h2>
                        <p>Answers covering telematics, role-based access, and reimbursements.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate with vehicle telematics?</summary>
                            <p>Yes. We integrate with APIs like Smartcar or OEM-specific telematics to read vehicle State of Charge (SoC) alongside charger data.</p>
                        </details>
                        <details>
                            <summary>How do you handle multi-tenant property management?</summary>
                            <p>We build strict Role-Based Access Control (RBAC). A property manager sees all chargers, while individual tenants only see their assigned spots and billing history.</p>
                        </details>
                        <details>
                            <summary>Can the portal handle employee home-charging reimbursement?</summary>
                            <p>Yes, we can build logic to separate home energy usage for the company vehicle and generate automated reimbursement reports for payroll.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Connect your B2B charging solutions.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/client-portal-development/"><div><small>Portals</small><h3>Client Portals</h3><p>Secure multi-tenant B2B environments.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/dashboard-design/"><div><small>Design</small><h3>Dashboard Design</h3><p>Intuitive UI for complex fleet data.</p></div><b>Explore design ↗</b></a>
                        <a className="related-card" href="/services/api-integration-development/"><div><small>Systems</small><h3>API Integration</h3><p>Connect telematics and energy hardware.</p></div><b>Explore integration ↗</b></a>
                        <a className="related-card" href="/services/workflow-automation/"><div><small>Operations</small><h3>Workflow Automation</h3><p>Automate alerts and reimbursement reports.</p></div><b>Explore automation ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Empower your fleet and <br />property managers. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build a B2B platform that handles the complexity of fleet charging? Let's discuss your portal.</p>
                        <a className="btn" href="#contact">Discuss Your Fleet Portal <span className="arrow">↗</span></a>
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
