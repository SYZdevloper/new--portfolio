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
                            <p className="eyebrow">Featured Agency Platform</p>
                            <h2>Transforming client delivery.</h2>
                        </div>
                        <p>See how we helped a global design agency replace fragmented email feedback loops with a custom React collaboration portal, accelerating project sign-offs by 40%.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Creative Tech</span>
                                <span>Client Portals</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/marketing-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Secure, centralized collaboration.</h2>
                                <p>We developed a portal where enterprise clients log in via SSO, securely review brand assets, leave time-stamped video feedback, and approve final deliverables—all synchronized with the agency's internal Monday.com boards.</p>
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
                        <h2 id="faq-title">Common questions about marketing tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle massive file uploads (e.g., 4K video) in portals?</summary>
                            <p>We integrate specialized cloud storage architectures like AWS S3 with Transfer Acceleration directly into the frontend. This allows clients to upload multi-gigabyte files directly to the cloud without timing out the web server.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with Project Management tools like Asana or Monday.com?</summary>
                            <p>Absolutely. We build API middleware so that when a client clicks "Approve" in the external portal, the corresponding task in your internal PM tool is instantly marked as 'Done', preventing double-handling.</p>
                        </details>
                        <details>
                            <summary>Do you build real-time SLA dashboards for BPOs?</summary>
                            <p>Yes. We build "Control Towers" that ingest ticket data from Zendesk or Salesforce in real-time, visually alerting operations managers if a client's Service Level Agreement is at risk of being breached.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/agency-and-studio-websites/"><div><small>Discovery</small><h3>Agency Websites</h3><p>Showcase creative portfolios.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/collaboration-and-review-portals/"><div><small>Service</small><h3>Review Portals</h3><p>Centralized client feedback.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/resource-and-asset-management/"><div><small>Operations</small><h3>Asset Management</h3><p>Secure digital asset storage.</p></div><b>Explore DAM ↗</b></a>
                        <a className="related-card" href="/services/bpo-and-agency-dashboards/"><div><small>Analytics</small><h3>Agency Dashboards</h3><p>Monitor profitability & SLAs.</p></div><b>Explore analytics ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your creative <br />and BPO operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From stunning agency websites to massive digital asset managers and SLA dashboards, we build software that scales your service delivery.</p>
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
  "agency-and-studio-websites": {
    metaTitle: "Agency & Studio Websites",
    eyebrow: "Brand Discovery",
    h1: "Digitally showcase your creative portfolio.",
    lead: "We design visually stunning, high-performance portfolios and marketing sites that showcase creative work and capture high-value enterprise leads.",
    status: "Agency Websites",
    points: [
      "Immersive, WebGL-powered hero sections and ultra-smooth scroll animations that reflect your creative capability",
      "Dynamic case study architecture allowing you to cleanly present complex strategy, video, and design deliverables",
      "Headless CMS setups allowing marketing teams to launch new campaign case studies instantly"
    ],
    proof: [
      ["01 · Brand Elevation", "Digital experiences that justify premium retainers to enterprise CMOs."],
      ["02 · Uncompromised Speed", "Heavy video and high-res imagery optimized to load instantly globally."],
      ["03 · SEO Optimized", "Structure that ranks highly for niche B2B queries like 'Enterprise UX Agency'."],
      ["04 · Marketing Agility", "Empower your team to update the homepage reel without developer help."]
    ],
    problemsIntro: {
      eyebrow: "When digital fails the agency",
      asideLead: "If an agency's own website feels sluggish and outdated, a CMO will assume their client work is the same.",
      title: "Poor digital presentation devalues your creative output.",
      mainLead: "Creative agencies and studios are judged entirely on their aesthetics and innovation. If a prospective client lands on a generic template site where the showreel stutters or the case studies are hard to read on mobile, they will bounce. They need immediate visual proof of your capability."
    },
    problems: [
      ["Visual Clutter", "The portfolio is difficult to navigate, failing to quickly communicate the business impact of your creative campaigns."],
      ["Slow Performance", "Your website feels sluggish because massive video files haven't been properly optimized for the web."],
      ["Developer Bottlenecks", "Your team is unable to publish a massive new rebrand case study because the legacy CMS is too rigid."]
    ],
    deliverablesIntro: {
      title: "Digital flagships for creative firms.",
      lead: "We build decoupled frontend experiences that prioritize visual innovation, immersive storytelling, and uncompromising speed."
    },
    deliverables: [
      ["Headless Architecture", "Next.js frontends connected to Sanity, ensuring the site is lightning fast while handling massive media payloads.", "React", "Headless", "Performance"],
      ["Creative Engineering", "Implementing WebGL, Three.js, or advanced Framer Motion animations to create a memorable, award-winning interface.", "WebGL", "UX", "Animation"],
      ["Dynamic Portfolio Structures", "Building flexible CMS taxonomies that allow you to interlink capabilities, industries, and case studies intelligently.", "CMS", "SEO", "Architecture"],
      ["Media Optimization", "Pipelines that automatically encode, compress, and serve videos and images in next-gen formats via global CDNs.", "Video", "Optimization", "Speed"]
    ]
  },
  "client-intake-and-briefing": {
    metaTitle: "Client Intake & Briefing",
    eyebrow: "Conversion & Strategy",
    h1: "Capture precise project requirements.",
    lead: "We build dynamic digital briefing forms that capture precise client requirements, asset specs, and budgets before a project even begins, eliminating back-and-forth emails.",
    status: "Digital Briefing",
    points: [
      "Custom React-based intake flows that dynamically change questions based on the selected project type (e.g., Video vs. Web)",
      "Secure file upload integrations allowing clients to securely attach existing brand guidelines or raw assets",
      "Live API integrations pushing the structured brief directly into your CRM or project management system"
    ],
    proof: [
      ["01 · Faster Kick-offs", "Turn a messy 10-email thread into a single, perfectly structured digital brief."],
      ["02 · Accurate Quoting", "Ensure your strategy team has all the technical specs they need to price a project accurately."],
      ["03 · Reduced Admin", "Push clean data directly into Monday.com or Asana, automatically creating the project board."],
      ["04 · Professional First Impression", "Provide clients with a sleek, branded onboarding experience from day one."]
    ],
    problemsIntro: {
      eyebrow: "When intake is painful",
      asideLead: "If a producer has to chase a client for a logo in the correct format three times, margin is bleeding.",
      title: "Messy briefs destroy project margins.",
      mainLead: "Agencies lose thousands of dollars in billable time trying to extract basic requirements from clients via email. When a brief is incomplete, assumptions are made, leading to inaccurate quotes, scope creep, and rounds of unnecessary revisions. A structured intake process is the foundation of profitable delivery."
    },
    problems: [
      ["The Email Grind", "Account managers spend hours every week chasing clients for missing brand assets or technical specifications."],
      ["Scope Creep", "A project goes over budget because the client's requirement for 'multi-language support' was buried in an old email, not the official brief."],
      ["Manual Data Entry", "Producers waste time manually copying answers from a Word doc brief into Jira or Asana."]
    ],
    deliverablesIntro: {
      title: "Automated project discovery.",
      lead: "We engineer interactive intake tools that trade an excellent client experience for perfectly structured project data."
    },
    deliverables: [
      ["Dynamic Briefing Frontends", "Building bespoke React flows that guide the client through a visually engaging, conditional question set.", "UX", "React", "Conversion"],
      ["Secure Asset Intake", "Integrating direct-to-cloud uploaders (AWS S3) so clients can submit gigabytes of raw files without crashing the browser.", "Cloud", "Storage", "UX"],
      ["PM Tool API Middleware", "Developing secure logic that pushes the sanitized brief data directly into systems like Asana, Jira, or Monday.com.", "APIs", "Integration", "Data"],
      ["Automated Scoping Logic", "Building backend rules that can automatically generate a rough budget estimate based on the client's selected deliverables.", "Logic", "Finance", "Automation"]
    ]
  },
  "collaboration-and-review-portals": {
    metaTitle: "Collaboration & Review Portals",
    eyebrow: "Digital Service",
    h1: "Secure, centralized creative feedback.",
    lead: "We build secure environments for clients to review deliverables, annotate creative assets, and provide structured feedback without messy email chains.",
    status: "Client Portals",
    points: [
      "Secure web dashboards replacing massive email chains when presenting branding concepts or video cuts to clients",
      "Interactive annotation tools allowing clients to click directly on an image or video timestamp to leave specific feedback",
      "Dynamic approval workflows that require formal digital sign-off from key stakeholders before moving to the next phase"
    ],
    proof: [
      ["01 · Premium Client Experience", "Provide a modern, transparent digital experience that justifies your agency retainer."],
      ["02 · Faster Revisions", "Stop designers from guessing what 'make it pop more' means in an email; get exact visual annotations."],
      ["03 · Version Control", "Ensure the client is always looking at 'v4_Final' and not an old link from last week."],
      ["04 · Centralized Approvals", "Keep all feedback and final sign-offs securely in one auditable environment to prevent scope disputes."]
    ],
    problemsIntro: {
      eyebrow: "When collaboration is analog",
      asideLead: "Managing feedback on a 60-second commercial via a bulleted list in an email is a recipe for disaster.",
      title: "Disorganized feedback causes revision hell.",
      mainLead: "Creative delivery involves massive amounts of subjective feedback. If your team is asking a client to review a video by sending a Dropbox link and waiting for an email response, the feedback will be vague and disconnected from the asset. This leads to endless revision cycles that destroy project profitability."
    },
    problems: [
      ["The Feedback Disconnect", "Designers spend hours trying to match a client's emailed bullet point to a specific frame of a video."],
      ["Version Chaos", "A client accidentally approves 'v2' instead of 'v3' because they lost the most recent link in their inbox."],
      ["Scope Disputes", "The client claims they never approved the final design, and the agency has to dig through months of emails to find the confirmation."]
    ],
    deliverablesIntro: {
      title: "Centralized creative operations.",
      lead: "We engineer secure environments that professionalize the relationship between your agency and the client."
    },
    deliverables: [
      ["Client Review Dashboards", "Custom UIs where clients can view all active projects, deliverables, and outstanding approval requests in one place.", "React", "Dashboards", "UX"],
      ["Annotation & Markup Tools", "Building interactive canvases that allow users to drop pins on images or videos to leave precise, contextual comments.", "UX", "Canvas", "Collaboration"],
      ["Approval API Workflows", "Middleware that ensures when a client clicks 'Approve' in the portal, the task is instantly updated in your internal project management tool.", "Integration", "APIs", "Operations"],
      ["Identity Management (CIAM)", "Secure login flows (Auth0) allowing agency producers to easily grant or revoke access for specific client stakeholders.", "Security", "Auth", "B2B"]
    ]
  },
  "resource-and-asset-management": {
    metaTitle: "Resource & Asset Management",
    eyebrow: "Operations",
    h1: "Scale your creative production.",
    lead: "We build internal tools to schedule creative teams, track project burn rates, and securely store vast libraries of digital assets (DAM).",
    status: "Agency Operations",
    points: [
      "Custom Digital Asset Management (DAM) platforms handling massive 4K video files, RAW imagery, and complex brand taxonomies",
      "Resource allocation dashboards allowing producers to see team utilization, availability, and skillset matching in real-time",
      "Automated archival workflows that migrate old project assets to cheap, cold cloud storage (AWS Glacier) to save costs"
    ],
    proof: [
      ["01 · Faster Asset Retrieval", "Stop designers from spending 20 minutes searching the shared drive for a specific vector logo."],
      ["02 · Optimized Utilization", "Ensure your expensive senior creatives aren't sitting idle while juniors are overwhelmed."],
      ["03 · Reduced Storage Costs", "Automatically move terabytes of inactive project files off expensive hot storage."],
      ["04 · Better Client Handover", "Provide clients with a secure, searchable library of all their finalized brand assets upon project completion."]
    ],
    problemsIntro: {
      eyebrow: "When operations scale poorly",
      asideLead: "If a producer has to ask 5 people in Slack where the final logo file is, your agency is losing money.",
      title: "Asset chaos throttles creative output.",
      mainLead: "As agencies grow, managing files and people becomes the primary bottleneck. If your studio relies on a messy Google Drive folder structure and a massive Excel spreadsheet to schedule designers, files get lost, deadlines are missed, and expensive creatives are misallocated."
    },
    problems: [
      ["The Search Penalty", "Creative teams waste thousands of billable hours every year just looking for the correct version of a file."],
      ["Resource Blindspots", "Producers double-book a video editor because the scheduling spreadsheet wasn't updated in real-time."],
      ["Exploding Cloud Costs", "The agency is paying a fortune for Dropbox because nobody has time to manually archive old 4K project files."]
    ],
    deliverablesIntro: {
      title: "The digital studio backbone.",
      lead: "We engineer secure tools that turn your agency into a highly efficient production machine."
    },
    deliverables: [
      ["Custom DAM Interfaces", "Building lightning-fast, searchable asset libraries tailored to the specific metadata needs of your agency.", "React", "Search", "UX"],
      ["Cloud Storage Architecture", "Engineering AWS S3 and Glacier pipelines to handle petabytes of data securely, optimizing for both speed and cost.", "AWS", "Cloud", "Architecture"],
      ["Resource Scheduling Tools", "Visual Gantt charts and utilization dashboards that pull data from timesheets and PM tools to show live team availability.", "Data Viz", "Operations", "Dashboards"],
      ["Automated File Ingestion", "Building APIs that automatically tag and sort files based on the project code when they are uploaded by a freelancer.", "Automation", "Metadata", "Workflow"]
    ]
  },
  "bpo-and-agency-dashboards": {
    metaTitle: "BPO & Agency Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visibility across your service delivery.",
    lead: "We aggregate data from your CRM, timesheets, and ticketing systems into executive dashboards tracking account profitability, staff utilization, and SLA compliance.",
    status: "Operations Analytics",
    points: [
      "Unified BI dashboards tracking core metrics (Staff Utilization, Realization Rates, SLA Breaches) across the entire BPO or agency",
      "Account margin analytics identifying which specific clients are consistently over-serviced and unprofitable",
      "Real-time ticket or task tracking showing operations managers exactly where bottlenecks are forming"
    ],
    proof: [
      ["01 · Live Decision Making", "Identify that a specific support tier is about to breach their SLA and reallocate staff instantly."],
      ["02 · Margin Visibility", "Instantly see how much profit you made on a specific fixed-fee retainer after accounting for all logged hours."],
      ["03 · Pipeline Accuracy", "Track exactly how many digital briefs converted into actual signed Statements of Work (SOWs)."],
      ["04 · Automated Reporting", "Eliminate the days spent manually merging ticketing data and timesheet exports in Excel for the monthly client review."]
    ],
    problemsIntro: {
      eyebrow: "When operational data is siloed",
      asideLead: "You can't manage a 500-seat BPO looking at fragmented Zendesk reports.",
      title: "Data silos hide true account profitability.",
      mainLead: "Service executives are forced to make strategic decisions with fragmented data. If sales data is in Salesforce, timesheets are in Harvest, and support tickets are in Zendesk, calculating the true realization rate of a specific client account is nearly impossible."
    },
    problems: [
      ["Hidden Margin Erosion", "Management doesn't realize that a specific account team is consistently over-servicing a client, destroying the margin on the retainer."],
      ["SLA Surprises", "A major enterprise client threatens to churn because leadership had no visibility into a string of missed support SLAs last week."],
      ["Reporting Fatigue", "Operations managers spend hours every week manually extracting and merging data from different systems to build the weekly 'Flash Report'."]
    ],
    deliverablesIntro: {
      title: "Command centers for service leadership.",
      lead: "We engineer data aggregation platforms that give Managing Directors the real-time insights needed to optimize utilization and protect margins."
    },
    deliverables: [
      ["Live Operations Control Towers", "High-level visual dashboards tracking live staff utilization, ticket volumes, and SLA health against targets.", "BI", "Dashboards", "Operations"],
      ["Data Warehousing", "Pipelines that extract data from disparate systems (CRM, Timesheets, Ticketing) and normalize it in a highly secure cloud data warehouse.", "ETL", "Cloud", "Data"],
      ["Realization & Margin Analytics", "Visual tools to track the true profitability of accounts by merging standard billing rates with actual hours logged.", "Analytics", "Data", "Finance"],
      ["Automated Client Reporting", "Dynamic engines to instantly generate branded PDF or web reports for clients, proving SLA adherence and value delivered.", "Reporting", "Operations", "Automation"]
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
