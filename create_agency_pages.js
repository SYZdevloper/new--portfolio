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
                            <p className="eyebrow">Featured Agency Build</p>
                            <h2>Empowering agents with digital precision.</h2>
                        </div>
                        <p>See how we helped a national real estate brokerage replace fragmented tools with a unified platform for listings, lead routing, and agent productivity.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Real Estate Software</span>
                                <span>Data Sync + Workflow Automation</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/agency-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Connecting the property lifecycle.</h2>
                                <p>We developed a custom ecosystem that ingests massive listing data feeds, dynamically routes buyer inquiries to top-performing agents, and provides branch managers with total revenue visibility.</p>
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
                        <h2 id="faq-title">Common questions about our PropTech software.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate directly with MLS and RETS feeds?</summary>
                            <p>Yes. We have deep experience building automated ingestion pipelines that pull, normalize, and update massive property data feeds (via RESO Web API, RETS, or direct portal APIs) to ensure your listings are always perfectly synced.</p>
                        </details>
                        <details>
                            <summary>How do you handle complex lead routing algorithms?</summary>
                            <p>We build custom rules engines that route buyer inquiries based on highly specific criteria, such as the property's ZIP code, the agent's current availability, historical conversion rates, and language preferences.</p>
                        </details>
                        <details>
                            <summary>Can you connect our custom portal to Salesforce or Follow Up Boss?</summary>
                            <p>Absolutely. We regularly build robust bidirectional syncs with leading real estate CRMs to ensure that agents never have to manually enter a lead's contact information or property viewing history.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other brokerage capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/listings-and-property-search/"><div><small>Discovery</small><h3>Property Search</h3><p>Connect buyers with their dream homes, faster.</p></div><b>Explore search ↗</b></a>
                        <a className="related-card" href="/services/agent-and-office-experiences/"><div><small>Productivity</small><h3>Agent Experiences</h3><p>Empower your agents to close more deals.</p></div><b>Explore tools ↗</b></a>
                        <a className="related-card" href="/services/owner-and-landlord-portals/"><div><small>Management</small><h3>Landlord Portals</h3><p>Transparent oversight for property owners.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/brokerage-dashboards/"><div><small>Operations</small><h3>Brokerage Dashboards</h3><p>Complete visibility over your brokerage's performance.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Accelerate your real estate <br />brokerage operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build platforms that attract buyers, empower agents, and provide total operational oversight? Let's discuss your roadmap.</p>
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
  "listings-and-property-search": {
    metaTitle: "Listings & Property Search",
    eyebrow: "Real Estate Portals",
    h1: "Connect buyers with their dream homes, faster.",
    lead: "We engineer high-performance property search engines with advanced mapping, intelligent filtering, and lightning-fast listing syndication.",
    status: "Property Search Engines",
    points: [
      "Sub-second map-based search across massive listing databases",
      "Automated integration with MLS, RETS, and RESO Web APIs",
      "Intelligent saved searches and personalized property alerts"
    ],
    proof: [
      ["01 · Sub-second Search", "Filter thousands of listings instantly without page reloads."],
      ["02 · Map Interactions", "Draw custom boundaries to find properties in specific neighborhoods."],
      ["03 · Data Accuracy", "Constant synchronization ensures sold properties are removed."],
      ["04 · Mobile Optimized", "Thumb-friendly image galleries and swipeable property cards."]
    ],
    problemsIntro: {
      eyebrow: "When search breaks down",
      asideLead: "Slow loading times kill buyer intent immediately.",
      title: "Property discovery must be effortless.",
      mainLead: "Buyers have extremely high expectations for real estate search. If your portal is slow, has outdated listings, or lacks intuitive map features, they will immediately bounce to a major aggregator."
    },
    problems: [
      ["Stale Listings", "Manual data entry results in buyers inquiring about homes that sold weeks ago."],
      ["Map Lag", "Displaying 500 pins on a map causes the browser to freeze and stutter."],
      ["Poor Filtering", "Forcing users to scroll through irrelevant listings because the search criteria are too rigid."]
    ],
    deliverablesIntro: {
      title: "High-performance property portals.",
      lead: "We architect headless frontends and robust data pipelines to deliver the fastest property search experience possible."
    },
    deliverables: [
      ["Map-based Search", "Custom Mapbox or Google Maps integrations with dynamic clustering to handle thousands of pins smoothly.", "Mapbox", "Clustering", "WebGL"],
      ["Data Ingestion", "Middleware that continuously pulls, sanitizes, and normalizes listing data from disparate MLS feeds.", "RETS", "APIs", "Data Sync"],
      ["Algolia Integration", "Implementation of Algolia for typo-tolerant, lightning-fast text and parametric filtering.", "Search", "Algolia", "Speed"],
      ["Saved Searches", "User accounts that allow buyers to save criteria and receive instant email or push alerts for new matches.", "Alerts", "Auth", "Logic"]
    ]
  },
  "agent-and-office-experiences": {
    metaTitle: "Agent & Office Experiences",
    eyebrow: "Brokerage Technology",
    h1: "Empower your agents to close more deals.",
    lead: "We design digital workspaces for real estate agents, unifying MLS data, marketing tools, and transaction management into a single, seamless platform.",
    status: "Agent Productivity Tools",
    points: [
      "Centralized dashboards for managing active listings and open houses",
      "One-click generation of branded marketing collateral and property flyers",
      "Seamless integration with transaction management and e-signature tools"
    ],
    proof: [
      ["01 · Unified Tools", "Stop forcing agents to log into six different platforms."],
      ["02 · Auto-marketing", "Generate social graphics from listing data instantly."],
      ["03 · Open House Apps", "Digital sign-in sheets that flow directly into the CRM."],
      ["04 · Mobile Access", "Give agents the power to manage their business from their phone."]
    ],
    problemsIntro: {
      eyebrow: "When agents lose focus",
      asideLead: "Admin work prevents agents from selling.",
      title: "Technology should accelerate agents, not slow them down.",
      mainLead: "Top-producing agents spend far too much time formatting brochures, re-entering data across different tools, and chasing down transaction paperwork instead of actually talking to clients."
    },
    problems: [
      ["Platform Fatigue", "Agents have to copy and paste data between the MLS, the CRM, the marketing suite, and the compliance tool."],
      ["Brand Dilution", "Agents create their own unbranded, ugly flyers because the official process takes too long."],
      ["Lost Leads", "Paper sign-in sheets from weekend open houses sit in a car trunk and are never entered into the database."]
    ],
    deliverablesIntro: {
      title: "Digital workspaces for modern agents.",
      lead: "We build intuitive intranets and mobile tools that automate the busywork of real estate."
    },
    deliverables: [
      ["Agent Dashboards", "A single pane of glass showing an agent their active pipeline, upcoming tasks, and current listings.", "Dashboards", "UX/UI", "Productivity"],
      ["Marketing Generators", "Tools that pull listing photos and text to automatically generate on-brand PDFs and social media posts.", "PDFs", "Automation", "Brand"],
      ["Open House Apps", "Tablet-optimized forms for capturing visitor details that automatically trigger follow-up campaigns.", "Forms", "Tablet", "CRM Sync"],
      ["Transaction Links", "Deep integrations with tools like Dotloop or DocuSign to track the status of compliance paperwork.", "APIs", "Compliance", "E-Sign"]
    ]
  },
  "lead-routing-and-crm-workflows": {
    metaTitle: "Lead Routing & CRM Workflows",
    eyebrow: "Real Estate CRM Integration",
    h1: "Never let a high-intent buyer slip away.",
    lead: "We build intelligent lead routing algorithms that capture inquiries from multiple portals and instantly assign them to the right agent based on territory and performance.",
    status: "Lead Routing Engines",
    points: [
      "Aggregate leads from Zillow, Realtor.com, and custom landing pages",
      "Algorithmic round-robin routing based on agent availability and zip code",
      "Automated SMS and email drip campaigns for immediate follow-up"
    ],
    proof: [
      ["01 · Speed to Lead", "Route inquiries to a live agent's phone in under 30 seconds."],
      ["02 · Smart Routing", "Assign luxury leads only to agents with luxury track records."],
      ["03 · Centralized Data", "Stop losing leads in flooded email inboxes."],
      ["04 · Accountability", "Track exactly which agents are calling their leads back."]
    ],
    problemsIntro: {
      eyebrow: "When leads go cold",
      asideLead: "A real estate lead loses 50% of its value every hour it is ignored.",
      title: "Speed to lead is the only metric that matters.",
      mainLead: "Brokerages spend thousands of dollars generating leads, only to have them sit in a generic inbox because the routing process relies on manual assignment by an office administrator."
    },
    problems: [
      ["Manual Assignment", "Leads sit untouched over the weekend because the admin who assigns them is off the clock."],
      ["Cherry-Picking", "Without automated round-robin rules, top agents steal the best leads while newer agents starve."],
      ["Data Silos", "Leads generated from Facebook ads never make it into the primary CRM system for follow-up."]
    ],
    deliverablesIntro: {
      title: "Intelligent lead orchestration.",
      lead: "We engineer middleware and workflows that ensure every inquiry is captured, categorized, and acted upon instantly."
    },
    deliverables: [
      ["Lead Aggregation", "API integrations and email parsers that pull inquiries from third-party aggregators into one unified queue.", "Webhooks", "Parsing", "APIs"],
      ["Routing Algorithms", "Complex logic engines that assign leads based on price point, language, zip code, and round-robin rules.", "Logic", "Algorithms", "Routing"],
      ["Shark Tank Models", "Broadcast systems that send a lead to 5 agents simultaneously—the first to 'claim' it gets the deal.", "WebSockets", "Mobile", "Speed"],
      ["CRM Sync", "Deep integrations with Follow Up Boss, Salesforce, or Hubspot to trigger automated welcome campaigns.", "CRM", "Sync", "Automation"]
    ]
  },
  "owner-and-landlord-portals": {
    metaTitle: "Owner & Landlord Portals",
    eyebrow: "Property Management Tech",
    h1: "Transparent oversight for property owners.",
    lead: "We develop secure portals for landlords to track rental income, monitor maintenance requests, and review digital lease agreements in real-time.",
    status: "Landlord Dashboards",
    points: [
      "Financial dashboards tracking rent collection, expenses, and yields",
      "Transparent views of active maintenance tickets and repair costs",
      "Secure document vaults for leases, tax documents, and property deeds"
    ],
    proof: [
      ["01 · Financial Clarity", "Owners can view itemized cash flow for their entire portfolio."],
      ["02 · Maintenance Tracking", "Approve repair quotes instantly without playing phone tag."],
      ["03 · Document Vault", "No more lost leases. Everything is securely stored online."],
      ["04 · Tax Readiness", "Generate year-end financial summaries in a single click."]
    ],
    problemsIntro: {
      eyebrow: "When owners lose trust",
      asideLead: "Opaque management drives landlords to competitors.",
      title: "Property owners demand total financial transparency.",
      mainLead: "When landlords have to constantly email their property manager to ask if rent was collected or why a maintenance bill was so high, trust erodes quickly. Spreadsheets and PDF statements are no longer acceptable."
    },
    problems: [
      ["Black Box Expenses", "Owners receive a monthly statement with a $500 'repair' charge but no accompanying photos or context."],
      ["Lost Documents", "Finding an active lease agreement requires digging through two years of email history."],
      ["Delayed Reporting", "Owners have to wait until the 15th of the month just to see the previous month's cash flow."]
    ],
    deliverablesIntro: {
      title: "Digital command centers for landlords.",
      lead: "We build intuitive portals that integrate with your core property management software to provide owners with real-time transparency."
    },
    deliverables: [
      ["Financial Dashboards", "Integration with accounting backends to visualize rent rolls, operational expenses, and net yields.", "Dashboards", "Charts", "Finance"],
      ["Ticketing Systems", "Workflows that surface tenant maintenance requests, complete with contractor photos and quote approvals.", "Ticketing", "Approvals", "Images"],
      ["Document Vaults", "Secure, structured repositories for lease agreements, insurance policies, and compliance certificates.", "Storage", "Encryption", "Docs"],
      ["Automated Statements", "Systems that automatically generate and email branded monthly financial summaries to owners.", "PDFs", "Automation", "Reporting"]
    ]
  },
  "brokerage-dashboards": {
    metaTitle: "Brokerage Dashboards",
    eyebrow: "Real Estate Operations",
    h1: "Complete visibility over your brokerage's performance.",
    lead: "We build executive dashboards that aggregate agent commissions, office GCI (Gross Commission Income), and market share data into actionable insights.",
    status: "Brokerage Analytics",
    points: [
      "Real-time tracking of GCI, split payouts, and office profitability",
      "Leaderboards highlighting top-performing agents and branches",
      "Market share analytics tracking competitor listings and sales volume"
    ],
    proof: [
      ["01 · Live GCI Tracking", "Monitor Gross Commission Income against quarterly targets."],
      ["02 · Agent Retention", "Identify struggling agents early to offer targeted coaching."],
      ["03 · Split Automation", "Visualize complex commission tiers and team splits clearly."],
      ["04 · Market Share", "Pull MLS data to see exactly how your office stacks up locally."]
    ],
    problemsIntro: {
      eyebrow: "When executives fly blind",
      asideLead: "You can't grow a brokerage on gut feeling.",
      title: "Brokerages run on thin margins and high volume.",
      mainLead: "Managing the profitability of a multi-office brokerage is impossible if the accounting data, the CRM data, and the MLS data live in completely different systems."
    },
    problems: [
      ["Fragmented Data", "The Managing Broker has to export three different CSVs just to calculate the month's net revenue."],
      ["Surprise Departures", "Top agents leave for competitors because leadership didn't notice their closing volume was dropping."],
      ["Manual Splits", "Office admins waste days manually calculating complex team commission splits in Excel."]
    ],
    deliverablesIntro: {
      title: "Business intelligence for real estate.",
      lead: "We engineer data aggregation platforms that give managing brokers the exact metrics they need to drive profitability."
    },
    deliverables: [
      ["Executive Scorecards", "High-level visualizations of active pipeline, closed volume, and net revenue across all branch locations.", "BI", "Dashboards", "Metrics"],
      ["Agent Analytics", "Individual performance views tracking an agent's conversion rates, average days on market, and commission caps.", "Analytics", "Performance", "Tracking"],
      ["Commission Visualizers", "Tools that connect to accounting systems to visually map out cap resets and split tiers.", "Finance", "Logic", "Visuals"],
      ["Market Share Tracking", "Automated ingestion of MLS data to chart the brokerage's performance against local competitors.", "Data pipelines", "Scraping", "Graphs"]
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
