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
                            <p className="eyebrow">Featured Wealth Platform</p>
                            <h2>Modernizing fund operations.</h2>
                        </div>
                        <p>See how we helped a boutique funds management firm digitize their archaic, paper-based onboarding process, allowing them to verify complex trust structures via API and secure $50M in new capital entirely online within the first month.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>WealthTech</span>
                                <span>Digital Onboarding</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/wealth-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Frictionless, compliant capital raising.</h2>
                                <p>We developed a highly secure application flow that intelligently adapts based on the entity type (Individual, SMSF, Company). It automatically queries ASIC and identity registers for real-time AML/KYC checks, generating a pre-filled, compliant digital mandate for the investor to e-sign.</p>
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
                        <h2 id="faq-title">Common questions about wealth tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle complex entity structures (Trusts, Companies, SMSFs)?</summary>
                            <p>We build dynamic logic into the digital application. If a user selects 'Corporate Trustee for a Trust', our React form automatically generates the exact required fields for beneficial owners, drastically simplifying what is traditionally a confusing 40-page PDF.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with Portfolio Management Systems (e.g., Praemium, Iress)?</summary>
                            <p>Yes. We build secure API middleware to pull real-time portfolio data, asset allocations, and historical performance from your core systems, displaying it securely within the custom investor portal.</p>
                        </details>
                        <details>
                            <summary>How do you ensure data security for high-net-worth clients?</summary>
                            <p>We implement enterprise-grade IAM (Identity and Access Management) using Auth0 or Okta. We enforce strict Multi-Factor Authentication (MFA), ensure all data is encrypted at rest, and use secure document vaults to eliminate sending sensitive tax files over email.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other wealth capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/investment-and-adviser-websites/"><div><small>Discovery</small><h3>Wealth Websites</h3><p>Showcase institutional trust.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/investor-onboarding/"><div><small>Conversion</small><h3>Investor Onboarding</h3><p>Frictionless digital applications.</p></div><b>Explore onboarding ↗</b></a>
                        <a className="related-card" href="/services/investor-and-client-portals/"><div><small>Service</small><h3>Client Portals</h3><p>Premium digital experiences.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/adviser-and-relationship-workflows/"><div><small>Operations</small><h3>Adviser Workflows</h3><p>Empower the advisory team.</p></div><b>Explore operations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your wealth <br />and funds management operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From compliant digital onboarding of complex entities to highly secure, premium investor portals, we build software that drives capital growth and operational efficiency.</p>
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
  "investment-and-adviser-websites": {
    metaTitle: "Investment & Adviser Websites",
    eyebrow: "Brand Discovery",
    h1: "Digitally showcase your investment expertise.",
    lead: "We design high-trust websites for wealth managers, family offices, and funds that convey institutional credibility and clearly articulate complex investment strategies.",
    status: "Wealth Websites",
    points: [
      "Dynamic data visualization natively built in React to showcase historical fund performance and asset allocation",
      "Enterprise-grade security and accessibility (WCAG) compliance built into the foundation",
      "Headless CMS setups allowing compliance teams to instantly update PDS documents and regulatory disclaimers"
    ],
    proof: [
      ["01 · Institutional Trust", "Digital experiences that convey absolute stability and sophisticated expertise to HNW clients."],
      ["02 · Complex Clarity", "Translate dense investment methodologies into easily digestible visual storytelling."],
      ["03 · Higher Conversions", "Structure that guides the prospective investor seamlessly from a fund page directly into the digital application."],
      ["04 · Compliance Agility", "Empower your team to update mandatory legal disclaimers globally without developer help."]
    ],
    problemsIntro: {
      eyebrow: "When digital fails wealth management",
      asideLead: "If a prospective client cannot easily find the historical performance data, they will question your transparency.",
      title: "Poor digital presentation loses trust and capital.",
      mainLead: "Wealth management is entirely built on trust. If a prospective investor lands on an outdated website where finding the latest monthly update requires downloading a poorly formatted PDF, they will assume your back-office operations are equally archaic. They need immediate confidence in your strategy and technology."
    },
    problems: [
      ["Opaque Performance", "Investors bounce because they cannot easily compare fund performance against benchmark indices on a mobile screen."],
      ["Slow Performance", "Your website feels sluggish and outdated, actively undermining trust in your institution's technical capability to manage their wealth."],
      ["Compliance Bottlenecks", "Marketing is unable to update a legally required PDS link without waiting weeks for IT support."]
    ],
    deliverablesIntro: {
      title: "Digital flagships for modern wealth.",
      lead: "We build decoupled frontend experiences that prioritize trust, clarity, and uncompromising speed."
    },
    deliverables: [
      ["Headless Architecture", "Next.js frontends connected to Sanity or Contentful, ensuring the site is lightning fast and highly secure.", "React", "Headless", "Security"],
      ["Interactive Data Visualization", "Building bespoke React charts (using libraries like Recharts or D3) to display historical unit prices dynamically.", "UX", "Data Viz", "React"],
      ["Compliance Management", "Structuring the CMS so legal teams can easily manage global disclaimers, target market determinations (TMDs), and PDS versions.", "CMS", "Compliance", "Operations"],
      ["Global Edge Hosting", "Deployment on Vercel to ensure your site loads instantly, capturing highly motivated investors worldwide.", "DevOps", "Performance", "Scale"]
    ]
  },
  "investor-onboarding": {
    metaTitle: "Investor Onboarding",
    eyebrow: "Conversion & Compliance",
    h1: "Frictionless investor acquisition.",
    lead: "We engineer secure digital application flows integrating AML/KYC checks and sophisticated logic for complex entity structures (Trusts, SMSFs), allowing investors to commit capital entirely online.",
    status: "Digital Applications",
    points: [
      "Custom React-based application flows that eliminate the need for printing massive PDF application forms",
      "Dynamic logic that adapts the question set based on the specific entity type (Individual vs. Corporate Trustee)",
      "Live API integrations with identity verification providers (eKYC) to instantly validate passports and driver's licenses"
    ],
    proof: [
      ["01 · Higher Completion", "Turn a frustrating 40-page paper application into a smooth, 10-minute digital flow."],
      ["02 · Reduced Fraud", "Integrate biometric and document verification directly into the onboarding journey."],
      ["03 · Faster Capital Deployment", "Push clean, validated data directly into your registry, allowing instant BPAY or wire transfer instructions."],
      ["04 · Entity Flexibility", "Handle the complexities of SMSFs, Trusts, and corporate structures effortlessly via smart logic."]
    ],
    problemsIntro: {
      eyebrow: "When onboarding is painful",
      asideLead: "If a client has to print and sign 40 pages to invest in a fund, they will often leave the paperwork on their desk indefinitely.",
      title: "Clunky onboarding destroys capital acquisition.",
      mainLead: "Funds spend thousands on marketing and adviser networks only to force users into an onboarding flow that looks like a digitized tax return. When the form is a massive PDF, requires wet signatures, or fails to save progress, the investor abandons the process, delaying capital deployment."
    },
    problems: [
      ["The PDF Drop-off", "Users abandon the application when they realize they have to download, print, and sign a physical document for a complex trust structure."],
      ["Data Entry Fatigue", "The legacy form asks for 10 years of address history without offering an easy Google Maps autocomplete, causing frustration."],
      ["Manual Verification Delays", "Accounts take days to open because back-office staff have to manually review photocopies of ID documents and query ASIC registers."]
    ],
    deliverablesIntro: {
      title: "Automated wealth conversion.",
      lead: "We engineer application flows that handle complex regulatory requirements while remaining beautiful and frictionless."
    },
    deliverables: [
      ["Custom Application Frontends", "Building bespoke React flows that guide the user step-by-step, validating data in real-time before submission.", "UX", "React", "Conversion"],
      ["eKYC & Identity Integrations", "Developing secure Node.js layers that connect to services like GreenID or Onfido for instant AML/KYC checks.", "APIs", "Compliance", "Security"],
      ["Entity Structure Logic", "Building rules engines that adapt the required fields based on whether the applicant is a Trust, Company, or SMSF.", "Logic", "UX", "Speed"],
      ["Digital Signatures (eSign)", "Integrating with DocuSign or similar APIs to dynamically generate the completed application and collect secure signatures.", "Integration", "APIs", "Data"]
    ]
  },
  "investor-and-client-portals": {
    metaTitle: "Investor & Client Portals",
    eyebrow: "Digital Service",
    h1: "Secure self-serve management for investors.",
    lead: "We build premium digital environments where high-net-worth clients can securely view portfolio performance, access sensitive tax documents, and digitally sign new investment mandates.",
    status: "Investor Portals",
    points: [
      "Secure web and mobile-responsive dashboards displaying aggregated balances, recent transactions, and historical performance",
      "Digital document vaults containing all historical tax statements, contract notes, and quarterly reports securely in one place",
      "Self-serve capabilities allowing clients to securely update their bank details, change their address, or adjust their communication preferences"
    ],
    proof: [
      ["01 · Premium Experience", "Provide a modern digital service experience that justifies your management fees."],
      ["02 · Reduced Admin Burden", "Clients can download a historical tax statement instantly without calling your support team."],
      ["03 · Higher Engagement", "Gamify the experience with clear, visual tracking of their progress toward financial goals."],
      ["04 · Centralized Identity", "Ensure a single, highly secure login backed by Multi-Factor Authentication (MFA)."]
    ],
    problemsIntro: {
      eyebrow: "When servicing is analog",
      asideLead: "Your operations team shouldn't spend all of July re-emailing lost tax statements to clients.",
      title: "Lack of self-service frustrates high-net-worth clients.",
      mainLead: "Premium clients expect their wealth manager to provide the same digital agility as their retail bank. If a client has to email the office just to update their nominated bank account, or if they receive their sensitive quarterly reports via unencrypted email attachments, they feel the service is outdated and insecure."
    },
    problems: [
      ["High Support Costs", "Your back-office spends hours every day helping clients update addresses or resending lost PDF statements."],
      ["Opaque Performance", "Clients call repeatedly because the legacy portal's charts are impossible to read on a mobile phone."],
      ["Security Risks", "Advisers are emailing highly sensitive tax documents and PII (Personally Identifiable Information) because there is no secure portal vault."]
    ],
    deliverablesIntro: {
      title: "Centralized client operations.",
      lead: "We engineer highly secure dashboards that give your clients complete control and visibility over their wealth."
    },
    deliverables: [
      ["Investor Dashboards", "API integrations pulling live data from your Portfolio Management System (e.g., Praemium, Iress) to display real-time balances.", "Integration", "Dashboards", "Data"],
      ["Interactive Performance Charts", "Building bespoke React components that allow the user to easily compare their portfolio performance against major indices.", "Data Viz", "React", "UX"],
      ["Secure Document Vaults", "Interfaces for securely delivering sensitive documents, ensuring tax reports are never sent via plain email.", "Security", "Compliance", "UX"],
      ["Identity Management (CIAM)", "Secure, centralized login flows using Auth0 to ensure strict data privacy and mandatory MFA.", "Security", "Auth", "Data"]
    ]
  },
  "adviser-and-relationship-workflows": {
    metaTitle: "Adviser & Relationship Workflows",
    eyebrow: "Operations",
    h1: "Empower your advisory team.",
    lead: "We develop bespoke B2B portals for financial advisers and relationship managers, streamlining client data collection, portfolio reviews, and compliance documentation.",
    status: "Adviser Tools",
    points: [
      "Custom B2E (Business-to-Employee) portals allowing advisers to view a 360-degree profile of their entire client book",
      "Digital Fact-Find workflows replacing secure-email threads when gathering initial financial data from a new prospect",
      "Assisted onboarding flows allowing an adviser to start an application and push a secure link to the client to digitally sign"
    ],
    proof: [
      ["01 · Faster Origination", "Advisers spend less time chasing missing signatures and more time managing wealth."],
      ["02 · Reduced Errors", "Stop staff from manually re-keying data from a printed Fact-Find into the CRM."],
      ["03 · Better Client Experience", "When a client logs in, the portal acts as a seamless extension of the adviser's personal brand."],
      ["04 · Audit & Compliance", "Ensure every Record of Advice (ROA) and interaction is tracked and securely stored for compliance."]
    ],
    problemsIntro: {
      eyebrow: "When adviser tools are outdated",
      asideLead: "Your advisers cannot deliver a premium client experience if they are fighting legacy software.",
      title: "Analog tools cripple adviser efficiency.",
      mainLead: "Wealth firms invest heavily in the client-facing digital experience but often ignore the tools used by their advisers. If a wealth manager has to ask a client to email highly sensitive tax documents, or if they have to log into three different systems just to prepare for a portfolio review, operational costs skyrocket."
    },
    problems: [
      ["The Email Grind", "Advisers spend hours every week playing email ping-pong with clients trying to collect the correct identification documents."],
      ["Data Disconnects", "A client updates their address in the portal, but the adviser's CRM isn't updated because the systems don't talk to each other."],
      ["Compliance Risks", "Advisers are storing sensitive client documents locally on their desktops because the official secure upload portal is too hard to use."]
    ],
    deliverablesIntro: {
      title: "The digital adviser companion.",
      lead: "We engineer secure tools that turn your advisory team into highly efficient operational nodes."
    },
    deliverables: [
      ["Adviser Dashboards", "Building secure web apps where staff log in to view their pipeline, upcoming reviews, and missing client documents.", "Portals", "Integration", "UX"],
      ["Digital Fact-Find Tools", "Custom interfaces allowing an adviser to send a secure, dynamic form to a prospect to capture their financial position before the first meeting.", "UX", "Operations", "Sales"],
      ["Secure Document Collection", "Portals where advisers can request specific documents and the client receives a secure link to upload it via their phone.", "Compliance", "Data", "Security"],
      ["CRM API Hooks", "Developing middleware that ensures the data entered by the adviser perfectly matches the data architecture required by Salesforce or Xplan.", "APIs", "Integration", "Workflow"]
    ]
  },
  "investment-reporting-dashboards": {
    metaTitle: "Investment Reporting Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visibility across Funds Under Management (FUM).",
    lead: "We aggregate data from your portfolio management system, CRM, and custodial feeds into executive dashboards tracking FUM growth, asset class allocation, and fee revenue.",
    status: "Operations Analytics",
    points: [
      "Unified BI dashboards tracking core metrics (Net Inflows, FUM Growth, Client Churn) in real-time across the firm",
      "Adviser scorecarding to identify which relationship managers are consistently driving the highest net new assets",
      "Real-time tracking of asset class concentrations to manage firm-wide risk exposure"
    ],
    proof: [
      ["01 · Live Decision Making", "Identify a sudden spike in client withdrawals and investigate the root cause immediately."],
      ["02 · Margin Visibility", "Instantly see how much fee revenue a specific adviser or fund strategy generated this month."],
      ["03 · Risk Management", "Track the firm's overall exposure to a specific equity sector across all client portfolios instantly."],
      ["04 · Automated Reporting", "Eliminate the days spent manually merging CRM and custodial exports in Excel for the monthly board pack."]
    ],
    problemsIntro: {
      eyebrow: "When firm data is siloed",
      asideLead: "You can't manage a $1B wealth firm looking at fragmented spreadsheets.",
      title: "Data silos hide true operational efficiency.",
      mainLead: "Wealth executives are forced to make strategic decisions with fragmented data. If client acquisition is tracked in the CRM, FUM is in the portfolio system, and revenue is in the accounting software, calculating the true profitability of a specific advisory team is nearly impossible."
    },
    problems: [
      ["Hidden Revenue Leakage", "Management doesn't realize that a specific advisory team is heavily discounting their fees to win business, destroying margin."],
      ["Siloed Performance Data", "You cannot easily graph marketing spend against net new assets because the data lives in disconnected systems."],
      ["Reporting Fatigue", "Analysts spend hours every morning manually extracting and merging data from different regional systems to build the weekly flash report."]
    ],
    deliverablesIntro: {
      title: "Command centers for wealth executives.",
      lead: "We engineer data aggregation platforms that give leadership the real-time insights needed to manage risk and grow FUM."
    },
    deliverables: [
      ["Live Firm Control Towers", "High-level visual dashboards tracking live FUM balances against forecasted growth targets.", "BI", "Dashboards", "Operations"],
      ["Data Warehousing", "Pipelines that extract data from disparate systems (CRM, Custodians, Marketing) and normalize it in a highly secure cloud data warehouse.", "ETL", "Cloud", "Data"],
      ["Adviser Yield Analytics", "Visual tools to track the true profitability of relationship managers by merging their salary costs with the fee revenue they generate.", "Analytics", "Data", "Finance"],
      ["Automated Board Reporting", "Dynamic engines to instantly generate standardized PDF reports for the investment committee or board of directors.", "Reporting", "Compliance", "Automation"]
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
