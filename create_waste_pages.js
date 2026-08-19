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
                            <p className="eyebrow">Featured Environmental Platform</p>
                            <h2>Transforming waste management.</h2>
                        </div>
                        <p>See how we helped a major waste management operator digitize their commercial bookings, outfit drivers with offline-first routing apps, and aggregate weighbridge data into a unified executive dashboard.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Environmental Tech</span>
                                <span>Field Mobility & Data Aggregation</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/waste-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>End-to-end operational visibility.</h2>
                                <p>We developed a custom ecosystem that connects customer self-service portals directly to the routing software in the garbage trucks, reducing missed collections by 80% and providing instant EPA compliance reporting.</p>
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
                        <h2 id="faq-title">Common questions about waste & environmental tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate web bookings directly into our routing software?</summary>
                            <p>Yes. We regularly build API middleware that takes a booking from the public website, processes the payment, and injects the job directly into specialized routing platforms like Routeware, AMCS, or Fleetmatics.</p>
                        </details>
                        <details>
                            <summary>How do drivers use the app if they are in remote areas?</summary>
                            <p>We build driver applications with an 'Offline-First' architecture (using PWA or React Native). Drivers can view their route, tick off completed jobs, and upload photos of contaminated bins entirely offline. The app syncs the data back to HQ the moment a cellular connection is restored.</p>
                        </details>
                        <details>
                            <summary>How do you handle EPA and government compliance reporting?</summary>
                            <p>We build automated data pipelines that pull tonnage from weighbridges, asset data from the CRM, and fleet telematics into a centralized cloud database. From there, we generate dynamic dashboards and automated PDF reports that perfectly match regulatory requirements.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other environmental capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/service-and-coverage-websites/"><div><small>Public Info</small><h3>Service Websites</h3><p>Connect communities with environmental services.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/customer-and-account-portals/"><div><small>Self-Service</small><h3>Account Portals</h3><p>Frictionless account management for residents.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/bookings-and-collection-workflows/"><div><small>Operations</small><h3>Booking Workflows</h3><p>Digitize hard-rubbish and skip bin bookings.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/field-route-and-asset-workflows/"><div><small>Field Crews</small><h3>Route Workflows</h3><p>Optimize collection routes and asset tracking.</p></div><b>Explore field tools ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your waste and <br />environmental operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From seamless customer booking portals to offline routing apps for your drivers, we build software that drives operational efficiency.</p>
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
  "service-and-coverage-websites": {
    metaTitle: "Service & Coverage Websites",
    eyebrow: "Waste & Environmental",
    h1: "Connect communities with environmental services.",
    lead: "We design accessible, high-performance websites for waste management and environmental service companies to clearly communicate service areas, recycling guidelines, and corporate sustainability.",
    status: "Environmental Websites",
    points: [
      "Task-oriented UX design prioritizing bin schedules, service maps, and new connections",
      "Interactive coverage maps allowing users to check service availability by postcode",
      "Authoritative communication of ESG initiatives and landfill diversion rates"
    ],
    proof: [
      ["01 · Lower Call Volume", "Residents can easily find their collection days online."],
      ["02 · Accessibility First", "WCAG compliant design for all community members."],
      ["03 · Clear Coverage", "Visual maps prevent out-of-area booking attempts."],
      ["04 · ESG Trust", "Clearly communicate your commitment to the circular economy."]
    ],
    problemsIntro: {
      eyebrow: "When public websites fail",
      asideLead: "Residents shouldn't have to call you to find out what goes in the recycling bin.",
      title: "Clunky websites overwhelm your dispatch center.",
      mainLead: "Waste management operators serve entire municipalities. If your website is hard to navigate on mobile, or residents can't easily find their bin collection schedule, they will flood your call center with basic inquiries, driving up operational costs."
    },
    problems: [
      ["Information Overload", "Critical information like holiday collection schedules is buried in unreadable PDFs."],
      ["Out of Area Leads", "Your sales team wastes time dealing with commercial quote requests from suburbs you don't service."],
      ["Rigid CMS", "Your comms team has to hire a developer to publish a service disruption notice during a storm."]
    ],
    deliverablesIntro: {
      title: "Digital foundations for environmental services.",
      lead: "We build public-facing platforms focused entirely on clarity, speed, and self-service."
    },
    deliverables: [
      ["Task-Oriented UX", "Homepage designs that put high-frequency actions (Bin Schedules, Book a Skip, Report Missed Bin) front and center.", "UX/UI", "Figma", "Design"],
      ["Interactive Coverage Maps", "Mapbox or Google Maps integrations where users enter their address to instantly see collection days and service availability.", "Maps", "Geo", "APIs"],
      ["Dynamic ESG Reporting", "Visual blocks that pull live data (e.g., tons of waste diverted from landfill) directly into the website.", "ESG", "DataViz", "Metrics"],
      ["Headless CMS Architecture", "Next.js paired with Sanity or Contentful, empowering your team to publish emergency notices instantly.", "Next.js", "Sanity", "Speed"]
    ]
  },
  "customer-and-account-portals": {
    metaTitle: "Customer & Account Portals",
    eyebrow: "Customer Experience",
    h1: "Frictionless account management for residents and businesses.",
    lead: "We build secure, self-service portals allowing commercial and residential customers to pay bills, upgrade bin sizes, and view their diversion rates without calling support.",
    status: "Self-Service Portals",
    points: [
      "Secure, passwordless login options to reduce friction for residential users",
      "Commercial dashboards showing multi-site waste metrics and sustainability reporting",
      "Seamless integration with legacy billing engines (SAP, NetSuite, AMCS)"
    ],
    proof: [
      ["01 · Lower Cost-to-Serve", "Drastically reduce basic billing and account inquiries."],
      ["02 · Payment Velocity", "Make it incredibly easy for customers to set up direct debits."],
      ["03 · Commercial Retention", "Provide corporate clients with the ESG data they need for their own reporting."],
      ["04 · Secure Access", "Enterprise-grade security protecting personal and financial data."]
    ],
    problemsIntro: {
      eyebrow: "When self-service is painful",
      asideLead: "If upgrading a bin size takes three phone calls, the customer experience is broken.",
      title: "Friction in the portal creates work for your staff.",
      mainLead: "Your commercial clients need data for their ESG reports, and your residential clients just want to pay their bill easily. If your account portal is difficult to access, looks terrible on mobile, or provides no insights into waste diversion, self-service adoption will plummet."
    },
    problems: [
      ["Login Friction", "Customers forget their passwords, get locked out, and have to call support just to pay a quarterly bill."],
      ["Confusing Bills", "The portal shows a PDF of the bill but provides no interactive tools to explain excess weight charges."],
      ["Disconnected Systems", "Updating an address in the web portal doesn't actually update the legacy routing system immediately."]
    ],
    deliverablesIntro: {
      title: "Modern account experiences.",
      lead: "We engineer secure portals that make managing waste accounts simple for both residents and enterprises."
    },
    deliverables: [
      ["Passwordless Authentication", "Integrations with Auth0 or native SMS/Email OTPs, allowing customers to log in without remembering complex passwords.", "Auth", "Security", "UX"],
      ["Commercial ESG Dashboards", "Interactive charts that visualize diversion rates and total tonnage for corporate clients managing multiple sites.", "DataViz", "React", "Charts"],
      ["Billing & Payment Integrations", "Secure payment gateways (Stripe, Braintree) and seamless direct-debit setup workflows.", "Payments", "PCI", "Finance"],
      ["Legacy API Middleware", "Custom Node.js layers that translate slow legacy database queries into fast, modern API responses.", "APIs", "Node.js", "Backend"]
    ]
  },
  "bookings-and-collection-workflows": {
    metaTitle: "Bookings & Collection Workflows",
    eyebrow: "Digital Workflows",
    h1: "Digitize hard-rubbish and skip bin bookings.",
    lead: "We engineer intelligent digital forms and e-commerce workflows that allow customers to easily book on-demand collections and schedule bulky waste pickups.",
    status: "Booking Engines",
    points: [
      "Dynamic booking forms that adapt based on the user's location and required waste type",
      "Integrated payment gateways for upfront processing of skip bin hires",
      "Automated routing of confirmed bookings directly into fleet dispatch software"
    ],
    proof: [
      ["01 · 24/7 Sales", "Customers can book a skip bin on a Sunday night without waiting for office hours."],
      ["02 · Accurate Quoting", "Automatically calculate distance, weight limits, and permit fees."],
      ["03 · Dispatch Automation", "Eliminate manual data entry for your dispatchers."],
      ["04 · Reduced Disputes", "Force customers to agree to prohibited item lists before they can pay."]
    ],
    problemsIntro: {
      eyebrow: "When bookings require phone calls",
      asideLead: "A static PDF form is a terrible way to run an on-demand business.",
      title: "Manual bookings throttle your operational growth.",
      mainLead: "If a customer has to call your office to get a quote for a skip bin or schedule a hard-rubbish collection, you are artificially limiting your revenue. Modern customers expect an Uber-like experience: instant quotes, digital payment, and automated scheduling."
    },
    problems: [
      ["Lost Revenue", "Customers abandon the process because they can't get an instant price online."],
      ["Data Entry Burden", "Dispatchers spend hours manually typing booking details from emails into the routing software."],
      ["Disputed Charges", "Customers throw prohibited items (like asbestos or tires) into the bin because the terms weren't clearly enforced during booking."]
    ],
    deliverablesIntro: {
      title: "Intelligent booking engines.",
      lead: "We build smart e-commerce workflows that capture exact requirements, process payments, and dispatch vehicles."
    },
    deliverables: [
      ["Dynamic Booking Forms", "Multi-step React forms that use conditional logic to adjust pricing based on bin size, waste type, and delivery zone.", "React", "Logic", "Forms"],
      ["Address Validation", "Integrations with Google Places API to ensure the delivery address is valid and falls within your service area.", "Maps", "Geo", "UX"],
      ["E-Commerce & Compliance", "Integrated Stripe checkout that forces users to digitally acknowledge prohibited item lists before payment is accepted.", "Payments", "Stripe", "Compliance"],
      ["Dispatch Webhooks", "Direct API integrations that push confirmed jobs into routing software like AMCS, Routeware, or Fleetmatics instantly.", "APIs", "Webhooks", "Sync"]
    ]
  },
  "field-route-and-asset-workflows": {
    metaTitle: "Field, Route & Asset Workflows",
    eyebrow: "Field Operations",
    h1: "Optimize collection routes and asset tracking.",
    lead: "We develop offline-capable mobile apps for drivers to receive dynamic routing updates, log missed collections with photographic evidence, and track bin assets in real-time.",
    status: "Field Mobility Apps",
    points: [
      "Offline-first mobile architecture ensuring drivers can complete jobs in cellular dead zones",
      "Digital logging of contaminated bins, blocked access, and overloaded skips with photo evidence",
      "Real-time asset tracking (RFID/GPS) for high-value commercial bins and skips"
    ],
    proof: [
      ["01 · Dispute Resolution", "Instantly prove a bin wasn't collected because a car was blocking it."],
      ["02 · Offline Capable", "Drivers can tick off jobs in remote areas without the app freezing."],
      ["03 · Dynamic Routing", "Push urgent ad-hoc jobs to the closest driver automatically."],
      ["04 · Asset Recovery", "Stop losing thousands of dollars worth of skip bins and commercial containers."]
    ],
    problemsIntro: {
      eyebrow: "When the cab is disconnected",
      asideLead: "Paper run-sheets belong in a museum, not a garbage truck.",
      title: "Disconnected drivers create operational chaos.",
      mainLead: "Waste collection is a high-volume, logistics-heavy operation. If your drivers rely on paper run-sheets or clunky apps that crash offline, dispatchers lose visibility, routes become inefficient, and customer complaints about missed bins skyrocket."
    },
    problems: [
      ["Customer Disputes", "A customer complains their bin wasn't emptied, and the driver has no photographic proof that it was contaminated with hazardous waste."],
      ["App Crashes", "Off-the-shelf routing apps freeze when the truck enters a new subdivision with poor 5G coverage."],
      ["Lost Assets", "Dispatch doesn't know where fifty high-value commercial skip bins have been left, requiring a physical audit."]
    ],
    deliverablesIntro: {
      title: "Rugged software for the road.",
      lead: "We build progressive web apps (PWAs) and React Native mobile tools explicitly designed for drivers."
    },
    deliverables: [
      ["Offline-First Architecture", "Local caching utilizing IndexedDB so drivers can view routes and tick off jobs entirely without an internet connection.", "Offline", "PWA", "Sync"],
      ["Exception Logging", "Built-in camera tools allowing drivers to snap a photo of a blocked bin, which instantly updates the customer's portal and CRM.", "Camera", "Logic", "UX"],
      ["Turn-by-Turn Integrations", "Deep linking from your run-sheet directly into Google Maps or heavy-vehicle specific navigation systems.", "Maps", "Routing", "Mobile"],
      ["Asset Tracking Sync", "Middleware that ingests RFID or GPS pings from bins and updates your core asset registry in real-time.", "APIs", "IoT", "Integration"]
    ]
  },
  "environmental-and-compliance-dashboards": {
    metaTitle: "Environmental & Compliance Dashboards",
    eyebrow: "Executive Operations",
    h1: "Track diversion rates and fleet efficiency.",
    lead: "We aggregate data from fleet telematics, weighbridges, and customer CRMs into executive dashboards, providing live visibility into recycling diversion rates and EPA compliance.",
    status: "Compliance Dashboards",
    points: [
      "Unified BI dashboards combining tons-collected, landfill diversion rates, and fleet fuel efficiency",
      "Automated carbon accounting and sustainability reporting for government regulators (EPA)",
      "Real-time tracking of route profitability and landfill levy costs"
    ],
    proof: [
      ["01 · Single Source of Truth", "Stop hunting across routing software and weighbridge systems for data."],
      ["02 · Live Telemetry", "Monitor fleet location, safety metrics, and route completion in real-time."],
      ["03 · ESG Automation", "Turn raw tonnage data into auditable sustainability reports instantly."],
      ["04 · Margin Visibility", "Understand the exact profitability of specific commercial routes."]
    ],
    problemsIntro: {
      eyebrow: "When executives fly blind",
      asideLead: "You can't optimize a fleet using last month's Excel spreadsheets.",
      title: "Data silos are hiding operational inefficiencies.",
      mainLead: "Environmental operators are drowning in data. With routing data in AMCS, weights in the weighbridge software, and customer data in Salesforce, executives cannot make rapid, profitable decisions because the data is never in one place at the same time."
    },
    problems: [
      ["Siloed Intelligence", "The fleet is hitting route completion targets, but landfill levies are destroying the margin, and leadership can't see the disconnect."],
      ["Manual Reporting", "Analysts spend weeks manually extracting data to build EPA compliance reports."],
      ["Reactive Management", "Leadership only finds out a major commercial route is unprofitable during the end-of-year financial review."]
    ],
    deliverablesIntro: {
      title: "Command centers for environmental leaders.",
      lead: "We engineer data aggregation platforms that give executives the exact metrics they need to protect margins and ensure compliance."
    },
    deliverables: [
      ["Executive Scorecards", "High-level visualizations of daily tonnage, diversion rates, and route profitability across all active depots.", "BI", "Dashboards", "Metrics"],
      ["Data Warehousing", "Pipelines that extract data from disparate proprietary systems (Weighbridges, Telematics, CRM) and normalize it in Snowflake or AWS.", "ETL", "Cloud", "Data"],
      ["Carbon Accounting Engines", "Algorithms that translate raw fuel usage and tonnage data into standardized ESG reporting frameworks.", "Logic", "Math", "Reporting"],
      ["Automated Regulatory Reports", "Dynamic engines to instantly generate branded PDF or data-lake exports required by the EPA or local government councils.", "Reporting", "PDFs", "Automation"]
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
