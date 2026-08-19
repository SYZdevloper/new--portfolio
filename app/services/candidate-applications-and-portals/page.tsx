import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/candidate-applications-and-portals/" },
  title: "Candidate Applications & Portals | Hyperlink Tech Solutions",
  description: "We engineer secure digital application flows integrating parsing technologies, background checks, and digital document signing to securely onboard talent in minutes.",
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
                    <strong>Conversion & Onboarding</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Digital Onboarding</div>
                        <p className="eyebrow">Conversion & Onboarding</p>
                        <h1 id="service-title">Frictionless candidate applications.</h1>
                        <p className="hero-lead">We engineer secure digital application flows integrating parsing technologies, background checks, and digital document signing to securely onboard talent in minutes.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom React-based application flows that eliminate the need for printing massive PDF registration packs</li>
                            <li>Dynamic logic that adapts the compliance requirements based on the industry (e.g., Healthcare vs. IT)</li>
                            <li>Live API integrations with identity verification and background check providers to validate candidate credentials instantly</li>
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
                            <small>01 · Higher Completion</small>
                            <strong>Turn a frustrating 20-page paper registration into a smooth, 10-minute digital flow.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Placements</small>
                            <strong>Your recruiters have all the structured compliance data they need to submit the candidate immediately.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Reduced Admin</small>
                            <strong>Push clean data directly into your ATS, allowing instant generation of placement contracts.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Secure Data Collection</small>
                            <strong>Stop candidates from emailing highly sensitive ID documents over unencrypted channels.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When onboarding is painful</p>
                        <p>If a nurse has to print and scan 20 pages of compliance documents just to register with your agency, they will simply use a competitor.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Clunky onboarding destroys candidate acquisition.</h2>
                        <p>Agencies spend thousands on job board advertising only to force users into an onboarding flow that looks like a digitized tax return. When the form is a massive PDF, requires wet signatures, or asks irrelevant questions, the candidate abandons the process, delaying their availability to work.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The PDF Drop-off</h3>
                                <p>Users abandon the registration when they realize they have to download, print, and sign a physical compliance document.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Data Entry Fatigue</h3>
                                <p>The legacy form asks for 10 years of work history without offering an easy CV parsing integration, causing frustration.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Manual Data Double-Handling</h3>
                                <p>Administrators spend hours manually re-typing candidate data and uploading passport scans into the core ATS.</p>
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
                                <h2>Automated candidate conversion.</h2>
                            </div>
                            <p>We engineer application flows that handle complex compliance requirements while remaining beautiful and frictionless.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Custom Application Frontends</h3>
                                <p>Building bespoke React flows that guide the user step-by-step, validating data in real-time before submission.</p>
                                <div className="deliverable-tags"><small>UX</small><small>React</small><small>Conversion</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>CV Parsing & eKYC Integrations</h3>
                                <p>Developing secure Node.js layers that connect to parsing APIs (Daxtra) and ID check services for instant verification.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Compliance</small><small>Security</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>ATS API Middleware</h3>
                                <p>Developing secure logic that pushes the sanitized intake data and compliance documents directly into systems like Bullhorn.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>Logic</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Digital Signatures (eSign)</h3>
                                <p>Integrating with DocuSign to dynamically generate the completed agency contract and collect secure signatures.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>APIs</small><small>Compliance</small></div>
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
