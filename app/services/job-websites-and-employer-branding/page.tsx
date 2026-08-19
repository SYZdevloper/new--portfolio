import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/job-websites-and-employer-branding/" },
  title: "Job Websites & Employer Branding | Hyperlink Tech Solutions",
  description: "We design high-performance job boards and recruitment agency websites that attract top talent, articulate employer value propositions, and integrate flawlessly with your ATS.",
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
                    <strong>Brand Discovery</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Recruitment Websites</div>
                        <p className="eyebrow">Brand Discovery</p>
                        <h1 id="service-title">Digitally showcase your recruitment brand.</h1>
                        <p className="hero-lead">We design high-performance job boards and recruitment agency websites that attract top talent, articulate employer value propositions, and integrate flawlessly with your ATS.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Lightning-fast, faceted job search interfaces (powered by Algolia) allowing candidates to filter roles instantly</li>
                            <li>Seamless API integrations with Bullhorn, JobAdder, or Greenhouse, eliminating manual job posting</li>
                            <li>Headless CMS setups allowing marketing teams to easily publish consultant profiles and industry insights</li>
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
                            <small>01 · Brand Authority</small>
                            <strong>Digital experiences that justify premium fees to enterprise clients and attract the best candidates.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Frictionless Search</small>
                            <strong>Ensure candidates can find the exact role they want without clicking through clunky pagination.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · SEO Dominance</small>
                            <strong>Structure thousands of job listings perfectly so Google indexes them for 'jobs near me' queries.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Operational Efficiency</small>
                            <strong>When a recruiter closes a job in the ATS, it disappears from the website instantly.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When digital fails the agency</p>
                        <p>If a top-tier candidate cannot easily search your jobs on their phone, they will go to a competitor.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Poor digital presentation devalues your brand.</h2>
                        <p>Recruitment is highly competitive. If a prospective client lands on a generic agency website with broken job search functionality and outdated consultant profiles, they will assume your talent pool is equally uninspired. If candidates find the application process clunky, they will abandon the form entirely.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The ATS iFrame Drop-off</h3>
                                <p>Candidates abandon applications because your 'Apply Now' button redirects them to a terrible, unbranded ATS portal.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Slow Job Search</h3>
                                <p>Your website feels outdated because searching for a role requires a full page reload and the filters are broken.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Developer Bottlenecks</h3>
                                <p>Marketing is unable to highlight an 'Employer of the Month' campaign without waiting weeks for IT support.</p>
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
                                <h2>Digital flagships for staffing firms.</h2>
                            </div>
                            <p>We build decoupled frontend experiences that prioritize trust, candidate conversion, and uncompromising speed.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Headless Architecture</h3>
                                <p>Next.js frontends connected to Sanity or Contentful, ensuring the site is lightning fast and highly secure.</p>
                                <div className="deliverable-tags"><small>React</small><small>Headless</small><small>Security</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>ATS API Integrations</h3>
                                <p>Building secure middleware that pulls live job data directly from Bullhorn/JobAdder and pushes applications back in.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>APIs</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Faceted Search UIs</h3>
                                <p>Integrating Algolia to provide instant, typo-tolerant search filtering across thousands of active vacancies.</p>
                                <div className="deliverable-tags"><small>Search</small><small>React</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Global Edge Hosting</h3>
                                <p>Deployment on Vercel to ensure your site loads instantly for candidates applying on their mobile network commute.</p>
                                <div className="deliverable-tags"><small>DevOps</small><small>Performance</small><small>Scale</small></div>
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
