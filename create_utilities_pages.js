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
                            <p className="eyebrow">Featured Utility Platform</p>
                            <h2>Transforming citizen services.</h2>
                        </div>
                        <p>See how we helped a major regional water corporation completely redesign their digital ecosystem, allowing customers to easily track consumption, report faults, and pay bills online—drastically reducing call center load.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Gov & Utility Tech</span>
                                <span>Portals & CRM Integrations</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/utility-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Self-service at scale.</h2>
                                <p>We developed a WCAG-compliant web portal integrated directly with SAP and Salesforce, enabling 500,000+ residents to securely view their smart meter data and self-manage their accounts.</p>
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
                        <h2 id="faq-title">Common questions about utility tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Do you build to WCAG (Web Content Accessibility Guidelines) standards?</summary>
                            <p>Yes. We ensure all utility and government platforms are built to WCAG 2.1 AA (or AAA if required) standards. Public services must be accessible to everyone, meaning proper contrast ratios, screen-reader compatibility, and keyboard navigability are baked into our design systems from day one.</p>
                        </details>
                        <details>
                            <summary>How do you handle massive traffic spikes during an outage?</summary>
                            <p>We architect our frontend applications using Next.js on edge networks (like Vercel or AWS CloudFront) with heavy static caching. This means if a storm knocks out power and 100,000 residents visit your outage map simultaneously, the server won't crash under the load.</p>
                        </details>
                        <details>
                            <summary>Can you integrate web portals with legacy billing systems?</summary>
                            <p>Absolutely. Utilities often run on older, robust billing engines (like SAP IS-U or Oracle). We build secure API middleware layers that sit between your legacy system and the modern web frontend, ensuring fast page loads for the user without exposing your core database to the public internet.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other utility capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/service-and-information-websites/"><div><small>Public Info</small><h3>Service Websites</h3><p>Clear digital pathways for public services.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/customer-account-portals/"><div><small>Self-Service</small><h3>Account Portals</h3><p>Frictionless self-service for ratepayers.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/outage-and-incident-communication/"><div><small>Crisis Comms</small><h3>Outage Communication</h3><p>Keep communities informed during critical events.</p></div><b>Explore tools ↗</b></a>
                        <a className="related-card" href="/services/utility-operations-dashboards/"><div><small>Network</small><h3>Operations Dashboards</h3><p>Operational clarity across the grid.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Digitize your utility <br />and public services. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From reducing call center load via self-service portals to keeping the public informed during outages, we build software that serves the community.</p>
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
  "service-and-information-websites": {
    metaTitle: "Service & Information Websites",
    eyebrow: "Utility Services",
    h1: "Clear digital pathways for public services.",
    lead: "We design accessible, high-performance websites for public utilities (water, power, gas, telecom), ensuring citizens can easily find information, pay bills, and report faults.",
    status: "Utility Websites",
    points: [
      "Strict WCAG 2.1 AA accessibility compliance for all community users",
      "Task-oriented UX design that prioritizes paying bills and reporting faults",
      "Scalable cloud architecture that stays online during major weather events"
    ],
    proof: [
      ["01 · Lower Call Volume", "Users can easily find answers and self-serve online."],
      ["02 · Accessibility First", "Ensure your digital services are usable by all citizens."],
      ["03 · Rapid Updates", "Publish emergency notices to the homepage in seconds."],
      ["04 · High Uptime", "Architecture designed to withstand massive traffic spikes."]
    ],
    problemsIntro: {
      eyebrow: "When public websites fail",
      asideLead: "Citizens shouldn't need a manual to figure out how to pay their water bill.",
      title: "Clunky websites overwhelm your call center.",
      mainLead: "Public utility websites serve a massive, diverse demographic. If your site is cluttered, hard to navigate on a mobile phone, or non-compliant with accessibility standards, frustrated residents will default to calling your support center—driving up operational costs."
    },
    problems: [
      ["Information Overload", "Important tasks like 'Report a Leak' are buried under pages of corporate press releases."],
      ["Accessibility Failures", "Visually impaired users or elderly citizens struggle to navigate the site to pay their bills."],
      ["Crash Under Load", "During a major storm, the influx of residents checking the homepage causes the server to crash."]
    ],
    deliverablesIntro: {
      title: "Digital foundations for utilities.",
      lead: "We build public-facing platforms focused entirely on clarity, speed, and accessibility."
    },
    deliverables: [
      ["Task-Oriented UX", "Homepage designs that put high-frequency actions (Pay Bill, Report Fault, Outages) front and center.", "UX/UI", "Figma", "Design"],
      ["WCAG Compliant Frontend", "Codebases rigorously tested for screen readers, keyboard navigation, and color contrast.", "A11y", "HTML", "React"],
      ["Headless CMS Architecture", "Next.js paired with Sanity or Contentful, empowering comms teams to publish emergency banners instantly.", "Next.js", "Sanity", "Speed"],
      ["Edge Caching", "Deployment on Vercel or AWS CloudFront to ensure the site never goes down during traffic spikes.", "CDN", "AWS", "Uptime"]
    ]
  },
  "customer-account-portals": {
    metaTitle: "Customer Account Portals",
    eyebrow: "Customer Experience",
    h1: "Frictionless self-service for ratepayers.",
    lead: "We build secure, integrated account portals allowing utility customers to manage direct debits, view historical consumption data, and update their details without calling support.",
    status: "Self-Service Portals",
    points: [
      "Secure, passwordless login options (Magic Links, OTPs) to reduce friction",
      "Interactive data visualizations of smart meter usage and historical billing",
      "Seamless integration with legacy billing engines (SAP, Oracle, Gentrack)"
    ],
    proof: [
      ["01 · Lower Cost-to-Serve", "Drastically reduce the number of basic billing inquiries."],
      ["02 · Payment Velocity", "Make it incredibly easy for customers to set up direct debits."],
      ["03 · Smart Insights", "Help customers understand and reduce their consumption."],
      ["04 · Secure Access", "Enterprise-grade security protecting personal and financial data."]
    ],
    problemsIntro: {
      eyebrow: "When self-service is painful",
      asideLead: "If resetting a password takes 10 minutes, the customer will just call you.",
      title: "Friction in the portal creates work for your staff.",
      mainLead: "Your customers expect the same digital experience from their utility provider that they get from Netflix or their bank. If your account portal requires complex account numbers to log in, looks terrible on mobile, or fails to clearly explain a high bill, self-service adoption will plummet."
    },
    problems: [
      ["Login Friction", "Customers forget their passwords, get locked out, and have to call support just to pay a bill."],
      ["Confusing Bills", "The portal shows a PDF of the bill but provides no interactive tools to explain why usage spiked this month."],
      ["Disconnected Systems", "Updating an address in the web portal doesn't actually update the legacy CRM immediately."]
    ],
    deliverablesIntro: {
      title: "Modern utility experiences.",
      lead: "We engineer secure portals that make managing utility accounts simple and intuitive."
    },
    deliverables: [
      ["Passwordless Authentication", "Integrations with Auth0 or native SMS/Email OTPs, allowing customers to log in without remembering complex passwords.", "Auth", "Security", "UX"],
      ["Consumption Dashboards", "Interactive React charts that visualize smart meter data, allowing customers to compare usage against previous years.", "DataViz", "React", "Charts"],
      ["Billing & Payment Integrations", "Secure payment gateways (Stripe, Braintree) and seamless direct-debit setup workflows.", "Payments", "PCI", "Finance"],
      ["Legacy API Middleware", "Custom Node.js/Python layers that translate slow legacy database queries into fast, modern API responses.", "APIs", "Node.js", "Backend"]
    ]
  },
  "connections-and-service-requests": {
    metaTitle: "Connections & Service Requests",
    eyebrow: "Digital Workflows",
    h1: "Digitize new connections and fault reporting.",
    lead: "We engineer intelligent digital forms that guide developers and homeowners through complex new connection applications and streamline fault reporting into your CRM.",
    status: "Service Workflows",
    points: [
      "Dynamic logic forms that adapt based on whether the user is a homeowner or commercial developer",
      "Geospatial integration allowing users to drop a pin on a map to report a fault (e.g., burst pipe, downed line)",
      "Automated routing of applications directly into Salesforce, SAP, or Maximo"
    ],
    proof: [
      ["01 · Faster Approvals", "Ensure connection applications are submitted with all required documents the first time."],
      ["02 · Accurate Faults", "Collect precise GPS data and photos from citizens reporting issues."],
      ["03 · CRM Automation", "Eliminate manual data entry for your customer service representatives."],
      ["04 · Status Tracking", "Allow developers to track their application status online."]
    ],
    problemsIntro: {
      eyebrow: "When applications require PDFs",
      asideLead: "A 20-page PDF form is a terrible way to start a customer relationship.",
      title: "Manual applications throttle your network growth.",
      mainLead: "Applying for a new water or power connection is inherently complex. When you force developers or homeowners to fill out static PDF forms, you guarantee missing information, back-and-forth emails, and delayed project timelines."
    },
    problems: [
      ["Incomplete Submissions", "Applications are submitted missing critical engineering diagrams, requiring manual follow-up."],
      ["Vague Fault Reports", "A citizen calls to report a leak 'near the big tree on Main Street,' making it impossible for crews to find quickly."],
      ["Data Entry Burden", "Staff spend hours manually typing data from PDFs into the central CRM system."]
    ],
    deliverablesIntro: {
      title: "Intelligent data capture.",
      lead: "We build smart workflows that collect exact information and route it instantly."
    },
    deliverables: [
      ["Dynamic Application Forms", "Multi-step React forms that use conditional logic to only ask questions relevant to the specific connection type.", "React", "Logic", "Forms"],
      ["Map-Based Fault Reporting", "Integrations with Google Maps or Mapbox, allowing users to drop a pin, upload a photo, and submit a precise defect location.", "Maps", "Geo", "UX"],
      ["Document Validation", "Workflows that force developers to upload required CAD files or site plans before they can click submit.", "Uploads", "Validation", "AWS"],
      ["CRM Webhooks", "Direct API integrations that push new applications and fault reports into Salesforce or Microsoft Dynamics instantly.", "APIs", "Salesforce", "Sync"]
    ]
  },
  "outage-and-incident-communication": {
    metaTitle: "Outage & Incident Communication",
    eyebrow: "Crisis Management",
    h1: "Keep communities informed during critical events.",
    lead: "We develop scalable outage maps and SMS notification engines that handle massive traffic spikes during extreme weather events, keeping the public safe and informed.",
    status: "Outage Comms",
    points: [
      "Interactive, GIS-integrated outage maps showing affected areas and estimated restoration times",
      "Automated SMS and email notification engines triggered by network events",
      "Ultra-scalable cloud architecture designed to survive 100x traffic spikes during storms"
    ],
    proof: [
      ["01 · Public Safety", "Provide accurate, life-saving information during major incidents."],
      ["02 · Traffic Resilience", "Infrastructure that stays online when the community needs it most."],
      ["03 · Proactive Alerts", "Push restoration updates via SMS so residents don't have to keep checking the site."],
      ["04 · GIS Integration", "Sync directly with your ADMS (Advanced Distribution Management System)."]
    ],
    problemsIntro: {
      eyebrow: "When the grid goes down",
      asideLead: "If your outage map crashes during a storm, panic ensues.",
      title: "Information vacuums create crisis situations.",
      mainLead: "During a major weather event, hundreds of thousands of residents will attempt to check your website simultaneously. If your outage map is slow, inaccurate, or outright crashes, the public loses trust and floods emergency call centers."
    },
    problems: [
      ["Server Crashes", "The monolithic architecture of the corporate website fails under the sudden load of a storm event."],
      ["Stale Data", "The outage map updates every 30 minutes, meaning residents are looking at outdated restoration times."],
      ["Reactive Comms", "Residents have to continually refresh the page because there is no push-notification system in place."]
    ],
    deliverablesIntro: {
      title: "Resilient communication systems.",
      lead: "We engineer highly scalable tools that deliver critical information when it matters most."
    },
    deliverables: [
      ["Interactive Outage Maps", "Custom Mapbox or Esri integrations that visualize polygon data (affected areas) and pin data (individual faults) clearly.", "GIS", "Maps", "DataViz"],
      ["Edge-Cached Architecture", "Deploying the outage map as a statically generated, heavily cached application on edge networks to guarantee uptime.", "Edge", "Vercel", "AWS"],
      ["Proactive Notification Engines", "Integrations with Twilio or SendGrid to blast SMS/Email updates to affected customer cohorts as restoration times change.", "SMS", "Twilio", "Comms"],
      ["ADMS Middleware", "Secure API layers that extract real-time fault data from your operational network systems and push it to the web.", "APIs", "Webhooks", "Sync"]
    ]
  },
  "utility-operations-dashboards": {
    metaTitle: "Utility Operations Dashboards",
    eyebrow: "Network Operations",
    h1: "Operational clarity across the grid.",
    lead: "We aggregate data from smart meters, network sensors, and field crews into unified executive dashboards, providing live visibility into grid health and service levels.",
    status: "Utility Dashboards",
    points: [
      "Unified BI dashboards combining SCADA telemetry, customer complaints, and crew locations",
      "Predictive analytics to identify likely asset failures before they cause an outage",
      "Real-time tracking of SLA compliance and regulatory reporting metrics"
    ],
    proof: [
      ["01 · Unified View", "See grid health, financials, and customer sentiment on one screen."],
      ["02 · Faster Response", "Identify and dispatch crews to network anomalies instantly."],
      ["03 · Regulatory Compliance", "Automate the reporting required by government regulators."],
      ["04 · Predictive Maintenance", "Use machine learning to flag transformers or pumps at risk of failure."]
    ],
    problemsIntro: {
      eyebrow: "When operations are siloed",
      asideLead: "You can't optimize a network if the data is locked in five different systems.",
      title: "Data fragmentation limits your operational response.",
      mainLead: "Utility operators generate massive amounts of data. But if customer complaints live in Salesforce, grid telemetry lives in SCADA, and crew locations live in a separate fleet app, the control room cannot make holistic, rapid decisions during a crisis."
    },
    problems: [
      ["Siloed Intelligence", "The control room sees a pressure drop in the water network, but doesn't know there are three customer leak reports in the same area."],
      ["Manual Reporting", "Analysts spend days pulling data from different systems to build regulatory compliance reports."],
      ["Reactive Maintenance", "Assets are run until failure because there is no consolidated view of maintenance history and live telemetry."]
    ],
    deliverablesIntro: {
      title: "Command centers for modern utilities.",
      lead: "We engineer data aggregation platforms that give operational leaders total visibility."
    },
    deliverables: [
      ["Executive Scorecards", "High-level visual dashboards tracking KPIs like SAIDI/SAIFI (reliability indices), current active outages, and crew deployment.", "BI", "Dashboards", "Metrics"],
      ["Data Warehousing", "Pipelines that extract data from disparate proprietary systems (CRM, GIS, SCADA) and normalize it in Snowflake or AWS.", "ETL", "Cloud", "Data"],
      ["Spatial Analytics", "Map-based interfaces that overlay live telemetry data, weather patterns, and active work orders for the control room.", "GIS", "Mapping", "React"],
      ["Automated Regulatory Reports", "Dynamic engines to instantly generate branded PDF or data-lake exports required by government utility regulators.", "Reporting", "PDFs", "Automation"]
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
