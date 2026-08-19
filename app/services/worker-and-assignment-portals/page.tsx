import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/worker-and-assignment-portals/" },
  title: "Worker & Assignment Portals | Hyperlink Tech Solutions",
  description: "We develop bespoke portals for contractors and temp staff to submit timesheets, view upcoming assignments, and access compliance or health and safety documents.",
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
                    <strong>Workforce Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Worker Portals</div>
                        <p className="eyebrow">Workforce Operations</p>
                        <h1 id="service-title">Self-serve management for your contingent workforce.</h1>
                        <p className="hero-lead">We develop bespoke portals for contractors and temp staff to submit timesheets, view upcoming assignments, and access compliance or health and safety documents.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom mobile-first portals allowing workers to easily log their hours and expenses directly from the job site</li>
                            <li>Automated logic that routes submitted timesheets to the correct client line manager for digital approval via a secure link</li>
                            <li>Centralized dashboards where workers can update their availability, view upcoming shifts, and download past payslips</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Project <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        
                        <div className="proof-item">
                            <small>01 · Faster Payroll</small>
                            <strong>Stop the finance team from spending all day Monday chasing missing paper timesheets.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Reduced Errors</small>
                            <strong>Stop staff from manually re-keying timesheet data from an email into the payroll software.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Better Worker Experience</small>
                            <strong>When a temp worker logs in, the portal acts as a seamless, easy-to-use extension of your agency.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Audit & Compliance</small>
                            <strong>Ensure every assignment brief and Health & Safety document is acknowledged and tracked.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When workforce management is outdated</p>
                        <p>Your temp workers cannot deliver a great service to the client if they are fighting legacy software just to get paid.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Analog tools cripple back-office efficiency.</h2>
                        <p>Staffing firms invest heavily in winning clients but often ignore the tools used by their contractors. If a temp nurse has to photograph a paper timesheet and email it in every Friday, or if they have to call the agency just to confirm their shift time tomorrow, operational costs skyrocket and errors multiply.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Manual Timesheet Chasing</h3>
                                <p>Highly paid recruiters and admins are spending their Friday afternoons calling contractors to submit their hours.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Data Disconnects</h3>
                                <p>A worker updates their bank details via email, but the payroll software isn't updated because the systems don't talk to each other.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Compliance Risks</h3>
                                <p>Workers are turning up to site without having formally acknowledged the specific Health and Safety brief for that assignment.</p>
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
                                <h2>The digital workforce companion.</h2>
                            </div>
                            <p>We engineer secure mobile-first tools that turn your contingent workforce into highly efficient operational nodes.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Worker Dashboards</h3>
                                <p>Building secure web apps where contractors log in to view their assignments, submit timesheets, and update availability.</p>
                                <div className="deliverable-tags"><small>Portals</small><small>Mobile</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Digital Timesheet & Approval Flows</h3>
                                <p>Custom logic engines that capture hours securely and automatically email the client approver a frictionless authorization link.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Operations</small><small>Automation</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Secure Document Delivery</h3>
                                <p>Portals where the agency can push specific onboarding documents (e.g., Site Rules) and force the worker to digitally acknowledge them.</p>
                                <div className="deliverable-tags"><small>Compliance</small><small>Data</small><small>Security</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Payroll API Hooks</h3>
                                <p>Developing middleware that ensures approved timesheet data flows perfectly into middle-office systems like Astute Payroll or Xero.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Integration</small><small>Workflow</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Staffing Platform</p>
                            <h2>Modernizing candidate onboarding.</h2>
                        </div>
                        <p>See how we helped a national healthcare staffing agency replace their paper-based compliance packs with a custom React application flow, reducing time-to-hire from 14 days to 48 hours and drastically increasing candidate conversion rates.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Recruitment Tech</span>
                                <span>Candidate Portals</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/recruitment-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Frictionless, compliant placement.</h2>
                                <p>We developed a secure mobile-first onboarding portal where nurses could easily upload their certifications using their phone camera, digitally sign contracts, and sync their availability directly into the agency's Bullhorn ATS.</p>
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
                        <h2 id="faq-title">Common questions about recruitment tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with our Applicant Tracking System (ATS)?</summary>
                            <p>We build robust API middleware to connect your custom frontend directly to core systems like Bullhorn, JobAdder, or Greenhouse. This ensures jobs are pulled to the website instantly, and applications are pushed into the exact right workflow stage without manual data entry.</p>
                        </details>
                        <details>
                            <summary>Can you build portals for our clients to review candidates?</summary>
                            <p>Yes. We build secure B2B environments where a hiring manager can log in, view anonymized CVs or video interviews submitted by your recruiters, and click 'Approve for Interview'—all syncing automatically back to your ATS.</p>
                        </details>
                        <details>
                            <summary>How do you handle complex contractor timesheets?</summary>
                            <p>We build mobile-first assignment portals where contractors can log their hours. We implement dynamic approval logic so the line manager receives a secure link to authorize the timesheet, which then pushes directly into your payroll software (e.g., Xero or Astute).</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other staffing capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/job-websites-and-employer-branding/"><div><small>Discovery</small><h3>Job Websites</h3><p>Showcase employer brand.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/candidate-applications-and-portals/"><div><small>Conversion</small><h3>Candidate Portals</h3><p>Frictionless onboarding.</p></div><b>Explore candidate ↗</b></a>
                        <a className="related-card" href="/services/client-and-vacancy-portals/"><div><small>Service</small><h3>Client Portals</h3><p>B2B collaboration.</p></div><b>Explore client ↗</b></a>
                        <a className="related-card" href="/services/worker-and-assignment-portals/"><div><small>Operations</small><h3>Worker Portals</h3><p>Manage assignments.</p></div><b>Explore worker ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your recruitment <br />and staffing operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From high-performance ATS-integrated job boards to highly secure candidate onboarding flows and client review portals, we build software that drives placements and reduces admin.</p>
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
