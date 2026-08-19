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
                            <p className="eyebrow">Featured Finance Platform</p>
                            <h2>Transforming digital lending.</h2>
                        </div>
                        <p>See how we helped a mid-tier credit union replace their PDF application forms with a custom React onboarding flow integrated with digital identity verification, reducing loan abandonment rates by 55%.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Fintech</span>
                                <span>Digital Onboarding</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/finance-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Frictionless, compliant growth.</h2>
                                <p>We developed a secure application portal that dynamically adjusts based on the loan type, automatically validates identity via third-party APIs (eKYC), and pushes the clean data directly into their Loan Origination System (LOS).</p>
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
                        <h2 id="faq-title">Common questions about financial tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you ensure data security and compliance (e.g., GDPR, PCI)?</summary>
                            <p>We build with compliance at the core. We utilize enterprise-grade Identity and Access Management (like Auth0), ensure data is encrypted at rest and in transit, and architect the frontend so sensitive data (like card numbers) bypasses our servers completely via secure tokens.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with core banking or legacy origination systems?</summary>
                            <p>Yes. We specialize in building secure API middleware that connects modern web and mobile frontends to legacy systems (like Fiserv, Jack Henry, or proprietary LOS platforms), allowing for real-time data exchange without exposing the core.</p>
                        </details>
                        <details>
                            <summary>Do you build tools for branch staff or just the customer?</summary>
                            <p>Both. While we build self-serve customer portals, we also build secure internal dashboards (B2E) that allow branch staff and advisers to view the same customer data, assisting them with complex applications or document collection in real-time.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other finance capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/financial-product-websites/"><div><small>Discovery</small><h3>Product Websites</h3><p>Showcase financial products.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/digital-onboarding-and-applications/"><div><small>Conversion</small><h3>Digital Onboarding</h3><p>Frictionless applications.</p></div><b>Explore onboarding ↗</b></a>
                        <a className="related-card" href="/services/customer-account-portals/"><div><small>Service</small><h3>Account Portals</h3><p>Self-serve customer management.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/branch-adviser-and-service-workflows/"><div><small>Operations</small><h3>Branch Workflows</h3><p>Empower frontline staff.</p></div><b>Explore operations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your banking <br />and financial operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From compliant digital onboarding flows to secure customer portals and core banking API integrations, we build software that drives growth and reduces operational risk.</p>
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
  "financial-product-websites": {
    metaTitle: "Financial Product Websites",
    eyebrow: "Product Discovery",
    h1: "Digitally showcase your financial products.",
    lead: "We design high-trust, high-performance websites for banks, credit unions, and fintechs that clearly communicate complex financial products and drive application conversions.",
    status: "Finance Websites",
    points: [
      "Dynamic rate tables and interactive calculators (mortgage, savings) built natively in React",
      "Enterprise-grade security and accessibility (WCAG) compliance built into the foundation",
      "Headless CMS setups allowing marketing and compliance teams to update rates and disclaimers instantly"
    ],
    proof: [
      ["01 · Brand Trust", "Digital experiences that convey institutional stability alongside modern fintech agility."],
      ["02 · Complex Clarity", "Translate dense financial product terms into easily digestible visual marketing."],
      ["03 · Higher Conversions", "Structure that guides the user seamlessly from a product page directly into the digital application."],
      ["04 · Marketing Agility", "Empower your team to update interest rates in minutes without developer help."]
    ],
    problemsIntro: {
      eyebrow: "When digital fails finance",
      asideLead: "If a customer can't easily calculate their loan repayment, they will go to a bank that makes it simple.",
      title: "Poor digital presentation loses trust and deposits.",
      mainLead: "Finance is built on trust and clarity. If a prospective customer lands on an outdated bank website where finding the current mortgage rate requires downloading a PDF, they will assume your digital banking experience is equally archaic. They need immediate confidence in your products and technology."
    },
    problems: [
      ["Information Hide-and-Seek", "Customers bounce because they cannot easily compare the features of three different credit cards on a mobile screen."],
      ["Slow Performance", "Your website feels outdated and sluggish, undermining trust in your institution's technical capability to secure their money."],
      ["Compliance Bottlenecks", "Marketing is unable to update a legally required disclaimer without waiting weeks for IT support."]
    ],
    deliverablesIntro: {
      title: "Digital flagships for modern finance.",
      lead: "We build decoupled frontend experiences that prioritize trust, clarity, and uncompromising speed."
    },
    deliverables: [
      ["Headless Architecture", "Next.js frontends connected to Sanity or Contentful, ensuring the site is lightning fast and highly secure.", "React", "Headless", "Security"],
      ["Interactive Calculators", "Building bespoke React components that allow users to instantly model loan repayments or compound interest without page reloads.", "UX", "React", "Conversion"],
      ["Compliance Management", "Structuring the CMS so legal teams can easily manage global disclaimers and rate changes from a single dashboard.", "CMS", "Compliance", "Operations"],
      ["Global Edge Hosting", "Deployment on Vercel to ensure your site loads instantly, capturing highly motivated users on their phones.", "DevOps", "Performance", "Scale"]
    ]
  },
  "digital-onboarding-and-applications": {
    metaTitle: "Digital Onboarding & Applications",
    eyebrow: "Conversion & Compliance",
    h1: "Frictionless customer onboarding.",
    lead: "We engineer secure digital application flows that integrate eKYC, AML checks, and digital signatures, allowing customers to open accounts or apply for loans in minutes.",
    status: "Digital Applications",
    points: [
      "Custom React-based application flows that eliminate the need for downloading and printing PDF forms",
      "Live API integrations with identity verification providers (eKYC) to instantly validate passports and driver's licenses",
      "Dynamic logic that adapts the question set based on the specific product or the applicant's previous answers"
    ],
    proof: [
      ["01 · Higher Completion", "Turn a frustrating 30-minute paper application into a smooth, 5-minute mobile flow."],
      ["02 · Reduced Fraud", "Integrate biometric and document verification directly into the onboarding journey."],
      ["03 · Faster Approvals", "Push clean, validated data directly into your decision engine or Loan Origination System (LOS)."],
      ["04 · Omnichannel Resumption", "Allow a customer to start an application on their phone and finish it later on a desktop."]
    ],
    problemsIntro: {
      eyebrow: "When applying is painful",
      asideLead: "If a customer has to print a form to open a checking account, they will simply use a neobank.",
      title: "Clunky onboarding destroys customer acquisition.",
      mainLead: "Financial institutions spend thousands on marketing only to force users into a digital application that looks like a digitized tax return. When the form is slow, asks irrelevant questions, or fails to save progress, the customer abandons the process. This forces them into a branch, drastically increasing your cost to acquire."
    },
    problems: [
      ["The PDF Drop-off", "Users abandon the application when they realize they have to download, print, and sign a physical document."],
      ["Data Entry Fatigue", "The legacy form asks for 5 years of address history without offering an easy Google Maps autocomplete, causing frustration on mobile."],
      ["Manual Verification Delays", "Accounts take days to open because back-office staff have to manually review photocopies of ID documents sent via email."]
    ],
    deliverablesIntro: {
      title: "Automated financial conversion.",
      lead: "We engineer application flows that handle complex regulatory requirements while remaining beautiful and frictionless."
    },
    deliverables: [
      ["Custom Application Frontends", "Building bespoke React flows that guide the user step-by-step, validating data in real-time before submission.", "UX", "React", "Conversion"],
      ["eKYC & Identity Integrations", "Developing secure Node.js layers that connect to services like Onfido or Jumio for instant ID scanning and liveness checks.", "APIs", "Compliance", "Security"],
      ["Dynamic Question Logic", "Building rules engines that skip irrelevant sections (e.g., hiding 'Spouse Income' if the user selected 'Single').", "Logic", "UX", "Speed"],
      ["Core System API Middleware", "Ensuring that upon completion, the application data and PDF artifacts are pushed directly into your CRM or LOS.", "Integration", "APIs", "Data"]
    ]
  },
  "customer-account-portals": {
    metaTitle: "Customer Account Portals",
    eyebrow: "Digital Banking",
    h1: "Self-serve management for your customers.",
    lead: "We build highly secure, intuitive portals where customers can manage their accounts, view transaction histories, and originate new financial products effortlessly.",
    status: "Customer Portals",
    points: [
      "Secure web and mobile-responsive dashboards displaying aggregated balances, recent transactions, and loan progress",
      "Self-serve capabilities allowing customers to securely update their address, reset a PIN, or dispute a transaction",
      "Seamless cross-selling environments allowing existing customers to apply for a credit card with pre-filled data"
    ],
    proof: [
      ["01 · Reduced Call Volume", "Customers can view their statements or change their address without calling the contact center."],
      ["02 · Higher Customer Lifetime Value", "Make it incredibly easy for an existing savings customer to originate a personal loan within the portal."],
      ["03 · Premium Experience", "Provide a modern digital banking experience that rivals the agility of specialized fintechs."],
      ["04 · Centralized Identity", "Ensure a single, secure login across all your digital properties and financial products."]
    ],
    problemsIntro: {
      eyebrow: "When banking is analog",
      asideLead: "Your call center shouldn't be overwhelmed by people asking for their current balance.",
      title: "Lack of self-service frustrates modern customers.",
      mainLead: "Consumers expect their bank to provide the same digital agility as Amazon or Uber. If a customer has to call a branch to request a statement, or if they are forced to re-enter all their personal details to apply for a second product, they feel undervalued and look for alternatives."
    },
    problems: [
      ["High Support Costs", "Your contact center spends hours every day helping customers reset passwords or explaining basic transaction history."],
      ["Opaque Product Status", "Customers call repeatedly because they have no digital way to check the status of their pending mortgage application."],
      ["Login Friction", "Users abandon their accounts because the legacy portal uses a confusing username system instead of biometric or mobile authentication."]
    ],
    deliverablesIntro: {
      title: "Centralized customer operations.",
      lead: "We engineer secure dashboards that give your customers complete control over their financial lives."
    },
    deliverables: [
      ["Customer Dashboards", "API integrations pulling live data from your core banking system (CBS), allowing clients to view real-time balances.", "Integration", "Dashboards", "Data"],
      ["Self-Serve Account Actions", "Logic engines that allow users to safely lock a debit card, set travel notices, or download tax documents securely.", "Logic", "APIs", "Service"],
      ["Secure Document Vaults", "Interfaces for securely delivering sensitive documents (like loan contracts) and capturing digital signatures (eSignature integrations).", "Security", "Compliance", "UX"],
      ["Identity Management (CIAM)", "Secure, centralized login flows using Auth0 or Ping Identity to ensure strict data privacy and MFA (Multi-Factor Authentication).", "Security", "Auth", "Data"]
    ]
  },
  "branch-adviser-and-service-workflows": {
    metaTitle: "Branch, Adviser & Service Workflows",
    eyebrow: "Operations",
    h1: "Empower your frontline teams.",
    lead: "We develop digital tools for branch staff and financial advisers, streamlining the application process, document collection, and customer service requests.",
    status: "Branch & Adviser Tools",
    points: [
      "Custom B2E (Business-to-Employee) portals allowing staff to view a 360-degree profile of the customer in front of them",
      "Digital document collection tools replacing secure-email threads when gathering payslips or tax returns for a loan",
      "Assisted onboarding flows allowing an adviser to start an application and push a secure link to the customer to finish it"
    ],
    proof: [
      ["01 · Faster Origination", "Advisers spend less time chasing missing documents and more time closing loans."],
      ["02 · Reduced Errors", "Stop staff from manually re-keying data from a printed form into the core banking system."],
      ["03 · Better Customer Experience", "When a customer walks into a branch, the staff member already knows they started an application online yesterday."],
      ["04 · Audit & Compliance", "Ensure every interaction and document collected by staff is tracked and securely stored for compliance."]
    ],
    problemsIntro: {
      eyebrow: "When staff tools are outdated",
      asideLead: "Your staff cannot deliver a modern customer experience if they are fighting legacy software.",
      title: "Analog tools cripple employee efficiency.",
      mainLead: "Financial institutions invest heavily in the customer-facing digital experience but often ignore the tools used by their staff. If a mortgage broker has to ask a client to email highly sensitive tax documents, or if a teller has to log into three different systems to answer a simple question, the customer experience suffers and operational costs skyrocket."
    },
    problems: [
      ["The Email Grind", "Advisers spend hours every week playing email ping-pong with clients trying to collect the correct identification documents."],
      ["Data Disconnects", "A customer starts a loan application online, but the branch staff can't see it because the systems don't talk to each other."],
      ["Compliance Risks", "Staff are storing sensitive customer documents locally on their desktops because the official secure upload portal is too hard to use."]
    ],
    deliverablesIntro: {
      title: "The digital frontline companion.",
      lead: "We engineer secure tools that turn your branch staff and advisers into highly efficient operational nodes."
    },
    deliverables: [
      ["Adviser Dashboards", "Building secure web apps where staff log in to view their pipeline, upcoming appointments, and missing client documents.", "Portals", "Integration", "UX"],
      ["Assisted Application Flows", "Custom interfaces allowing a staff member to co-browse or initiate an application on behalf of the customer, passing it off seamlessly.", "UX", "Operations", "Sales"],
      ["Secure Document Collection", "Portals where advisers can request specific documents (e.g., 'W2 2023') and the customer receives a secure, SMS-link to upload it via their phone camera.", "Compliance", "Data", "Security"],
      ["Core API Hooks", "Developing middleware that ensures the data entered by the adviser perfectly matches the data architecture required by the legacy LOS.", "APIs", "Integration", "Workflow"]
    ]
  },
  "banking-and-lending-dashboards": {
    metaTitle: "Banking & Lending Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visibility across the loan book.",
    lead: "We aggregate data from core banking systems and origination platforms into executive dashboards tracking loan approval rates, deposit growth, and compliance metrics.",
    status: "Operations Analytics",
    points: [
      "Unified BI dashboards tracking core metrics (Time-to-Decision, Application Abandonment, Origination Volume) in real-time",
      "Conversion funnel analytics identifying exactly where customers are dropping out of the digital application process",
      "Branch and adviser scorecarding to identify which teams are consistently driving the highest quality applications"
    ],
    proof: [
      ["01 · Live Decision Making", "Identify a sudden spike in application abandonment and investigate a potential technical issue immediately."],
      ["02 · Margin Visibility", "Instantly see how much volume a specific marketing campaign drove through the digital channel today."],
      ["03 · Bottleneck Identification", "Track the average time it takes for an application to move from 'Submitted' to 'Approved' to identify back-office delays."],
      ["04 · Automated Reporting", "Eliminate the days spent manually merging CRM and LOS exports in Excel for the monthly board pack."]
    ],
    problemsIntro: {
      eyebrow: "When financial data is siloed",
      asideLead: "You can't manage a digital lending operation looking at fragmented spreadsheets.",
      title: "Data silos hide true operational efficiency.",
      mainLead: "Finance executives are forced to make strategic decisions with fragmented data. If application starts are tracked in Google Analytics, approvals are in the LOS, and funded loans are in the core banking system, calculating the true conversion rate of your digital channel is nearly impossible."
    },
    problems: [
      ["Hidden Conversion Failures", "Management doesn't realize that 60% of users abandon the application specifically at the 'Upload ID' step because they can't connect the data points."],
      ["Siloed Performance Data", "You cannot easily graph branch origination performance against digital origination performance because the data lives in different systems."],
      ["Reporting Fatigue", "Analysts spend hours every morning manually extracting and merging data from different regional systems to build the daily flash report."]
    ],
    deliverablesIntro: {
      title: "Command centers for financial executives.",
      lead: "We engineer data aggregation platforms that give leadership the real-time insights needed to optimize the digital channel and manage risk."
    },
    deliverables: [
      ["Live Origination Control Towers", "High-level visual dashboards tracking live application submissions against forecasted volume.", "BI", "Dashboards", "Operations"],
      ["Data Warehousing", "Pipelines that extract data from disparate systems (Web Analytics, CRM, LOS) and normalize it in a highly secure cloud data warehouse.", "ETL", "Cloud", "Data"],
      ["Funnel & Drop-off Analytics", "Visual tools to track the exact customer journey through the onboarding flow, highlighting areas causing friction.", "Analytics", "Data", "UX"],
      ["Automated Compliance Reporting", "Dynamic engines to instantly generate standardized reports required by regulators or internal risk committees.", "Reporting", "Compliance", "Automation"]
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
