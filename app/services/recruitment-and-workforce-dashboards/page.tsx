import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/recruitment-and-workforce-dashboards/" },
  title: "Recruitment & Workforce Dashboards | Hyperlink Tech Solutions",
  description: "We aggregate data from your ATS, timesheet systems, and CRM into executive dashboards tracking time-to-hire, placement margins, and recruiter utilization rates.",
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
                    <strong>Executive Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Operations Analytics</div>
                        <p className="eyebrow">Executive Operations</p>
                        <h1 id="service-title">Visibility across your talent pipeline.</h1>
                        <p className="hero-lead">We aggregate data from your ATS, timesheet systems, and CRM into executive dashboards tracking time-to-hire, placement margins, and recruiter utilization rates.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Unified BI dashboards tracking core metrics (Job Fill Rates, Time-to-Placement, Temp Margin) across the entire agency</li>
                            <li>Recruiter scorecarding identifying which consultants are consistently generating the highest fee revenue versus their activity metrics</li>
                            <li>Real-time pipeline tracking showing the Directors exactly how much permanent fee revenue is forecast to drop this month</li>
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
                            <small>01 · Live Decision Making</small>
                            <strong>Identify that a specific team has a low fill rate and reallocate resources or marketing spend instantly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Margin Visibility</small>
                            <strong>Instantly see the true profit margin on a specific volume temp contract after accounting for payroll taxes and burden.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Pipeline Accuracy</small>
                            <strong>Track exactly how many initial candidate interviews actually converted into final placements.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Automated Reporting</small>
                            <strong>Eliminate the days spent manually merging ATS and financial exports in Excel for the monthly board meeting.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When agency data is siloed</p>
                        <p>You can't manage a 50-person recruitment firm looking at fragmented Bullhorn reports.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Data silos hide true placement profitability.</h2>
                        <p>Recruitment executives are forced to make strategic decisions with fragmented data. If sales data is in Salesforce, placements are in Bullhorn, and timesheets are in a third-party payroll system, calculating the true realization rate of a specific consultant's desk is nearly impossible.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Hidden Margin Erosion</h3>
                                <p>Management doesn't realize that a specific volume account is consistently over-serviced by recruiters, destroying the margin on low-markup temp work.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Siloed Performance Data</h3>
                                <p>You cannot easily graph job board spend against actual placement fees because the data lives in disconnected systems.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Reporting Fatigue</h3>
                                <p>Operations managers spend hours every week manually extracting and merging data from different regional systems to build the weekly 'Flash Report'.</p>
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
                                <h2>Command centers for agency leadership.</h2>
                            </div>
                            <p>We engineer data aggregation platforms that give Directors the real-time insights needed to optimize recruiter performance and grow margins.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Live Agency Control Towers</h3>
                                <p>High-level visual dashboards tracking live temp hours worked and permanent fee pipeline against monthly targets.</p>
                                <div className="deliverable-tags"><small>BI</small><small>Dashboards</small><small>Operations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Data Warehousing</h3>
                                <p>Pipelines that extract data from disparate systems (ATS, Payroll, CRM) and normalize it in a highly secure cloud data warehouse.</p>
                                <div className="deliverable-tags"><small>ETL</small><small>Cloud</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Margin & Activity Analytics</h3>
                                <p>Visual tools to track the true profitability of clients by merging placement data with actual hours logged and recruiter costs.</p>
                                <div className="deliverable-tags"><small>Analytics</small><small>Data</small><small>Finance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Director Reporting</h3>
                                <p>Dynamic engines to instantly generate standardized PDF or email summaries for the management team highlighting pipeline risks.</p>
                                <div className="deliverable-tags"><small>Reporting</small><small>Operations</small><small>Automation</small></div>
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
