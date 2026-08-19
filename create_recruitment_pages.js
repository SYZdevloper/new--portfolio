const fs = require('fs');
const path = require('path');

const directory = path.join('d:', 'new website', 'hyperlink-nextjs-app-router', 'app', 'services');

const template = (slug, data) => `import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/${slug}/" },
  title: "${data.metaTitle} | Hyperlink Tech Solutions",
  description: "${data.lead}",
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
                    <strong>${data.eyebrow}</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">${data.status}</div>
                        <p className="eyebrow">${data.eyebrow}</p>
                        <h1 id="service-title">${data.h1}</h1>
                        <p className="hero-lead">${data.lead}</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>${data.points[0]}</li>
                            <li>${data.points[1]}</li>
                            <li>${data.points[2]}</li>
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
                        ${data.proof.map(p => `
                        <div className="proof-item">
                            <small>${p[0]}</small>
                            <strong>${p[1]}</strong>
                        </div>`).join("")}
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">${data.problemsIntro.eyebrow}</p>
                        <p>${data.problemsIntro.asideLead}</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>${data.problemsIntro.title}</h2>
                        <p>${data.problemsIntro.mainLead}</p>

                        <div className="problem-grid">
                            ${data.problems.map((p, i) => `
                            <article className="problem-card">
                                <span className="problem-card-number">0${i+1}</span>
                                <h3>${p[0]}</h3>
                                <p>${p[1]}</p>
                            </article>`).join("")}
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
                                <h2>${data.deliverablesIntro.title}</h2>
                            </div>
                            <p>${data.deliverablesIntro.lead}</p>
                        </div>

                        <div className="deliverable-grid">
                            ${data.deliverables.map((d, i) => `
                            <article className="deliverable-card">
                                <span>0${i+1} · Core</span>
                                <h3>${d[0]}</h3>
                                <p>${d[1]}</p>
                                <div className="deliverable-tags"><small>${d[2]}</small><small>${d[3]}</small><small>${d[4]}</small></div>
                            </article>`).join("")}
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
`;

const pages = {
  "job-websites-and-employer-branding": {
    metaTitle: "Job Websites & Employer Branding",
    eyebrow: "Brand Discovery",
    h1: "Digitally showcase your recruitment brand.",
    lead: "We design high-performance job boards and recruitment agency websites that attract top talent, articulate employer value propositions, and integrate flawlessly with your ATS.",
    status: "Recruitment Websites",
    points: [
      "Lightning-fast, faceted job search interfaces (powered by Algolia) allowing candidates to filter roles instantly",
      "Seamless API integrations with Bullhorn, JobAdder, or Greenhouse, eliminating manual job posting",
      "Headless CMS setups allowing marketing teams to easily publish consultant profiles and industry insights"
    ],
    proof: [
      ["01 · Brand Authority", "Digital experiences that justify premium fees to enterprise clients and attract the best candidates."],
      ["02 · Frictionless Search", "Ensure candidates can find the exact role they want without clicking through clunky pagination."],
      ["03 · SEO Dominance", "Structure thousands of job listings perfectly so Google indexes them for 'jobs near me' queries."],
      ["04 · Operational Efficiency", "When a recruiter closes a job in the ATS, it disappears from the website instantly."]
    ],
    problemsIntro: {
      eyebrow: "When digital fails the agency",
      asideLead: "If a top-tier candidate cannot easily search your jobs on their phone, they will go to a competitor.",
      title: "Poor digital presentation devalues your brand.",
      mainLead: "Recruitment is highly competitive. If a prospective client lands on a generic agency website with broken job search functionality and outdated consultant profiles, they will assume your talent pool is equally uninspired. If candidates find the application process clunky, they will abandon the form entirely."
    },
    problems: [
      ["The ATS iFrame Drop-off", "Candidates abandon applications because your 'Apply Now' button redirects them to a terrible, unbranded ATS portal."],
      ["Slow Job Search", "Your website feels outdated because searching for a role requires a full page reload and the filters are broken."],
      ["Developer Bottlenecks", "Marketing is unable to highlight an 'Employer of the Month' campaign without waiting weeks for IT support."]
    ],
    deliverablesIntro: {
      title: "Digital flagships for staffing firms.",
      lead: "We build decoupled frontend experiences that prioritize trust, candidate conversion, and uncompromising speed."
    },
    deliverables: [
      ["Headless Architecture", "Next.js frontends connected to Sanity or Contentful, ensuring the site is lightning fast and highly secure.", "React", "Headless", "Security"],
      ["ATS API Integrations", "Building secure middleware that pulls live job data directly from Bullhorn/JobAdder and pushes applications back in.", "Integration", "APIs", "Data"],
      ["Faceted Search UIs", "Integrating Algolia to provide instant, typo-tolerant search filtering across thousands of active vacancies.", "Search", "React", "UX"],
      ["Global Edge Hosting", "Deployment on Vercel to ensure your site loads instantly for candidates applying on their mobile network commute.", "DevOps", "Performance", "Scale"]
    ]
  },
  "candidate-applications-and-portals": {
    metaTitle: "Candidate Applications & Portals",
    eyebrow: "Conversion & Onboarding",
    h1: "Frictionless candidate applications.",
    lead: "We engineer secure digital application flows integrating parsing technologies, background checks, and digital document signing to securely onboard talent in minutes.",
    status: "Digital Onboarding",
    points: [
      "Custom React-based application flows that eliminate the need for printing massive PDF registration packs",
      "Dynamic logic that adapts the compliance requirements based on the industry (e.g., Healthcare vs. IT)",
      "Live API integrations with identity verification and background check providers to validate candidate credentials instantly"
    ],
    proof: [
      ["01 · Higher Completion", "Turn a frustrating 20-page paper registration into a smooth, 10-minute digital flow."],
      ["02 · Faster Placements", "Your recruiters have all the structured compliance data they need to submit the candidate immediately."],
      ["03 · Reduced Admin", "Push clean data directly into your ATS, allowing instant generation of placement contracts."],
      ["04 · Secure Data Collection", "Stop candidates from emailing highly sensitive ID documents over unencrypted channels."]
    ],
    problemsIntro: {
      eyebrow: "When onboarding is painful",
      asideLead: "If a nurse has to print and scan 20 pages of compliance documents just to register with your agency, they will simply use a competitor.",
      title: "Clunky onboarding destroys candidate acquisition.",
      mainLead: "Agencies spend thousands on job board advertising only to force users into an onboarding flow that looks like a digitized tax return. When the form is a massive PDF, requires wet signatures, or asks irrelevant questions, the candidate abandons the process, delaying their availability to work."
    },
    problems: [
      ["The PDF Drop-off", "Users abandon the registration when they realize they have to download, print, and sign a physical compliance document."],
      ["Data Entry Fatigue", "The legacy form asks for 10 years of work history without offering an easy CV parsing integration, causing frustration."],
      ["Manual Data Double-Handling", "Administrators spend hours manually re-typing candidate data and uploading passport scans into the core ATS."]
    ],
    deliverablesIntro: {
      title: "Automated candidate conversion.",
      lead: "We engineer application flows that handle complex compliance requirements while remaining beautiful and frictionless."
    },
    deliverables: [
      ["Custom Application Frontends", "Building bespoke React flows that guide the user step-by-step, validating data in real-time before submission.", "UX", "React", "Conversion"],
      ["CV Parsing & eKYC Integrations", "Developing secure Node.js layers that connect to parsing APIs (Daxtra) and ID check services for instant verification.", "APIs", "Compliance", "Security"],
      ["ATS API Middleware", "Developing secure logic that pushes the sanitized intake data and compliance documents directly into systems like Bullhorn.", "Integration", "Logic", "Data"],
      ["Digital Signatures (eSign)", "Integrating with DocuSign to dynamically generate the completed agency contract and collect secure signatures.", "Integration", "APIs", "Compliance"]
    ]
  },
  "client-and-vacancy-portals": {
    metaTitle: "Client & Vacancy Portals",
    eyebrow: "B2B Service",
    h1: "Collaborative hiring environments.",
    lead: "We build secure B2B portals where your clients can view shortlisted candidates, review resumes, and approve new vacancies in a centralized, branded environment.",
    status: "Client Portals",
    points: [
      "Secure web dashboards replacing messy email chains when presenting a shortlist of 5 candidates to a hiring manager",
      "Digital document vaults containing all historical placement contracts, invoices, and terms of business",
      "Self-serve capabilities allowing clients to quickly log a new vacancy directly into your ATS without calling their account manager"
    ],
    proof: [
      ["01 · Premium Client Experience", "Provide a modern, transparent digital experience that justifies your agency margins."],
      ["02 · Faster Placements", "Stop recruiters from waiting days for a hiring manager to reply to an email with CV attachments."],
      ["03 · Absolute Security", "Ensure highly sensitive candidate data and salary expectations are never transmitted via plain text email."],
      ["04 · Centralized Communication", "Keep all interview feedback, candidate approvals, and offers securely in one auditable environment."]
    ],
    problemsIntro: {
      eyebrow: "When collaboration is analog",
      asideLead: "Managing a critical executive search mandate via 50 separate email threads is a major liability.",
      title: "Disorganized collaboration frustrates enterprise clients.",
      mainLead: "Recruitment engagements involve massive amounts of sensitive data exchange. If your team is asking an HR manager to review 10 anonymized CVs attached to an email, or if they have to call the recruiter just to provide interview feedback, the service feels chaotic and introduces massive data privacy risks."
    },
    problems: [
      ["The Email Grind", "Recruiters spend hours every week cross-referencing email threads to figure out which candidates the client has actually approved for interview."],
      ["Opaque Process Status", "The client is frustrated because they feel they are paying a massive retainer but have no visibility into the daily talent mapping progress."],
      ["Security Risks", "Staff are emailing highly sensitive candidate CVs and salary details, risking data breaches and GDPR violations."]
    ],
    deliverablesIntro: {
      title: "Centralized client operations.",
      lead: "We engineer secure environments that professionalize the relationship between your agency and the hiring manager."
    },
    deliverables: [
      ["Client Dashboards", "API integrations pulling live data from your ATS, allowing clients to view the status of their active vacancies and shortlists.", "Integration", "Dashboards", "Data"],
      ["Interactive Candidate Reviews", "Custom UIs where clients can view anonymized candidate profiles, watch video introductions, and click 'Request Interview'.", "UX", "Collaboration", "Speed"],
      ["Self-Serve Vacancy Logging", "Interfaces for securely submitting a new job brief, which automatically creates a draft vacancy in your ATS for the recruiter.", "Operations", "Integration", "UX"],
      ["Identity Management (CIAM)", "Secure, centralized login flows using Auth0 to ensure strict B2B data privacy and MFA.", "Security", "Auth", "Data"]
    ]
  },
  "worker-and-assignment-portals": {
    metaTitle: "Worker & Assignment Portals",
    eyebrow: "Workforce Operations",
    h1: "Self-serve management for your contingent workforce.",
    lead: "We develop bespoke portals for contractors and temp staff to submit timesheets, view upcoming assignments, and access compliance or health and safety documents.",
    status: "Worker Portals",
    points: [
      "Custom mobile-first portals allowing workers to easily log their hours and expenses directly from the job site",
      "Automated logic that routes submitted timesheets to the correct client line manager for digital approval via a secure link",
      "Centralized dashboards where workers can update their availability, view upcoming shifts, and download past payslips"
    ],
    proof: [
      ["01 · Faster Payroll", "Stop the finance team from spending all day Monday chasing missing paper timesheets."],
      ["02 · Reduced Errors", "Stop staff from manually re-keying timesheet data from an email into the payroll software."],
      ["03 · Better Worker Experience", "When a temp worker logs in, the portal acts as a seamless, easy-to-use extension of your agency."],
      ["04 · Audit & Compliance", "Ensure every assignment brief and Health & Safety document is acknowledged and tracked."]
    ],
    problemsIntro: {
      eyebrow: "When workforce management is outdated",
      asideLead: "Your temp workers cannot deliver a great service to the client if they are fighting legacy software just to get paid.",
      title: "Analog tools cripple back-office efficiency.",
      mainLead: "Staffing firms invest heavily in winning clients but often ignore the tools used by their contractors. If a temp nurse has to photograph a paper timesheet and email it in every Friday, or if they have to call the agency just to confirm their shift time tomorrow, operational costs skyrocket and errors multiply."
    },
    problems: [
      ["Manual Timesheet Chasing", "Highly paid recruiters and admins are spending their Friday afternoons calling contractors to submit their hours."],
      ["Data Disconnects", "A worker updates their bank details via email, but the payroll software isn't updated because the systems don't talk to each other."],
      ["Compliance Risks", "Workers are turning up to site without having formally acknowledged the specific Health and Safety brief for that assignment."]
    ],
    deliverablesIntro: {
      title: "The digital workforce companion.",
      lead: "We engineer secure mobile-first tools that turn your contingent workforce into highly efficient operational nodes."
    },
    deliverables: [
      ["Worker Dashboards", "Building secure web apps where contractors log in to view their assignments, submit timesheets, and update availability.", "Portals", "Mobile", "UX"],
      ["Digital Timesheet & Approval Flows", "Custom logic engines that capture hours securely and automatically email the client approver a frictionless authorization link.", "Logic", "Operations", "Automation"],
      ["Secure Document Delivery", "Portals where the agency can push specific onboarding documents (e.g., Site Rules) and force the worker to digitally acknowledge them.", "Compliance", "Data", "Security"],
      ["Payroll API Hooks", "Developing middleware that ensures approved timesheet data flows perfectly into middle-office systems like Astute Payroll or Xero.", "APIs", "Integration", "Workflow"]
    ]
  },
  "recruitment-and-workforce-dashboards": {
    metaTitle: "Recruitment & Workforce Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visibility across your talent pipeline.",
    lead: "We aggregate data from your ATS, timesheet systems, and CRM into executive dashboards tracking time-to-hire, placement margins, and recruiter utilization rates.",
    status: "Operations Analytics",
    points: [
      "Unified BI dashboards tracking core metrics (Job Fill Rates, Time-to-Placement, Temp Margin) across the entire agency",
      "Recruiter scorecarding identifying which consultants are consistently generating the highest fee revenue versus their activity metrics",
      "Real-time pipeline tracking showing the Directors exactly how much permanent fee revenue is forecast to drop this month"
    ],
    proof: [
      ["01 · Live Decision Making", "Identify that a specific team has a low fill rate and reallocate resources or marketing spend instantly."],
      ["02 · Margin Visibility", "Instantly see the true profit margin on a specific volume temp contract after accounting for payroll taxes and burden."],
      ["03 · Pipeline Accuracy", "Track exactly how many initial candidate interviews actually converted into final placements."],
      ["04 · Automated Reporting", "Eliminate the days spent manually merging ATS and financial exports in Excel for the monthly board meeting."]
    ],
    problemsIntro: {
      eyebrow: "When agency data is siloed",
      asideLead: "You can't manage a 50-person recruitment firm looking at fragmented Bullhorn reports.",
      title: "Data silos hide true placement profitability.",
      mainLead: "Recruitment executives are forced to make strategic decisions with fragmented data. If sales data is in Salesforce, placements are in Bullhorn, and timesheets are in a third-party payroll system, calculating the true realization rate of a specific consultant's desk is nearly impossible."
    },
    problems: [
      ["Hidden Margin Erosion", "Management doesn't realize that a specific volume account is consistently over-serviced by recruiters, destroying the margin on low-markup temp work."],
      ["Siloed Performance Data", "You cannot easily graph job board spend against actual placement fees because the data lives in disconnected systems."],
      ["Reporting Fatigue", "Operations managers spend hours every week manually extracting and merging data from different regional systems to build the weekly 'Flash Report'."]
    ],
    deliverablesIntro: {
      title: "Command centers for agency leadership.",
      lead: "We engineer data aggregation platforms that give Directors the real-time insights needed to optimize recruiter performance and grow margins."
    },
    deliverables: [
      ["Live Agency Control Towers", "High-level visual dashboards tracking live temp hours worked and permanent fee pipeline against monthly targets.", "BI", "Dashboards", "Operations"],
      ["Data Warehousing", "Pipelines that extract data from disparate systems (ATS, Payroll, CRM) and normalize it in a highly secure cloud data warehouse.", "ETL", "Cloud", "Data"],
      ["Margin & Activity Analytics", "Visual tools to track the true profitability of clients by merging placement data with actual hours logged and recruiter costs.", "Analytics", "Data", "Finance"],
      ["Automated Director Reporting", "Dynamic engines to instantly generate standardized PDF or email summaries for the management team highlighting pipeline risks.", "Reporting", "Operations", "Automation"]
    ]
  }
};

Object.keys(pages).forEach(slug => {
  const dirPath = path.join(directory, slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  const filePath = path.join(dirPath, 'page.tsx');
  const fileContent = template(slug, pages[slug]);
  
  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log(`Created ${slug}`);
});
