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
                            <p className="eyebrow">Featured Automotive Build</p>
                            <h2>Transforming the digital automotive journey.</h2>
                        </div>
                        <p>See how we modernized a leading network's digital presence to increase conversion rates and operational efficiency.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Digital Automotive Platform</span>
                                <span>UX/UI + Custom Engineering</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/automotive-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From friction to fast lanes.</h2>
                                <p>We completely re-architected the customer journey and backend operational software, resulting in a cohesive experience that bridges the gap between digital discovery and physical fulfillment.</p>
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
                        <h2 id="faq-title">Common questions about our automotive platforms.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Do you integrate with existing Dealer Management Systems (DMS)?</summary>
                            <p>Yes. We have extensive experience integrating with leading DMS and CRM platforms like CDK Global, Reynolds and Reynolds, Salesforce, and custom legacy systems.</p>
                        </details>
                        <details>
                            <summary>How long does a typical build take?</summary>
                            <p>Most enterprise automotive projects range from 3 to 6 months, depending on the complexity of legacy integrations and custom workflow requirements.</p>
                        </details>
                        <details>
                            <summary>Can you handle inventory data feeds from multiple branches?</summary>
                            <p>Absolutely. We build robust data ingestion pipelines that aggregate, sanitize, and normalize inventory data across multiple physical locations into a single, unified search experience.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other automotive capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/leads-appointments-and-sales/"><div><small>Sales</small><h3>Leads & Appointments</h3><p>Turn browsing into test drives and closed deals.</p></div><b>Explore sales ↗</b></a>
                        <a className="related-card" href="/services/rental-subscription-and-booking/"><div><small>Mobility</small><h3>Rental & Booking</h3><p>Powering flexible mobility and subscription software.</p></div><b>Explore booking ↗</b></a>
                        <a className="related-card" href="/services/service-and-workshop-experiences/"><div><small>Aftersales</small><h3>Service Portals</h3><p>Digitize the vehicle service and maintenance journey.</p></div><b>Explore service ↗</b></a>
                        <a className="related-card" href="/services/branch-fleet-and-operations/"><div><small>Operations</small><h3>Branch & Fleet</h3><p>Run your automotive operations from one dashboard.</p></div><b>Explore operations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Accelerate your digital <br />automotive journey. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build platforms that drive sales, streamline operations, and modernize the customer experience? Let's discuss your roadmap.</p>
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
  "inventory-and-vehicle-discovery": {
    metaTitle: "Inventory & Vehicle Discovery Platforms",
    eyebrow: "Digital Showrooms & Search",
    h1: "Help buyers find the perfect vehicle, instantly.",
    lead: "We build blazing-fast automotive discovery platforms with advanced filtering, 360-degree views, and seamless inventory synchronization.",
    status: "Automotive Discovery Platforms",
    points: [
      "Lightning-fast parametric search across thousands of vehicles",
      "Immersive 3D/360° vehicle viewers and galleries",
      "Real-time synchronization with your Dealer Management System (DMS)"
    ],
    proof: [
      ["01 · Sub-second Search", "Filter by make, model, trim, or features instantly."],
      ["02 · DMS Sync", "Never show a sold car. Live inventory updates."],
      ["03 · Immersive Media", "Integrate SpinCar or custom 360-degree galleries."],
      ["04 · Cross-branch", "Aggregate stock across all your dealership locations."]
    ],
    problemsIntro: {
      eyebrow: "When discovery fails",
      asideLead: "Slow, clunky inventory search kills buyer intent.",
      title: "Your digital showroom must perform flawlessly.",
      mainLead: "Buyers spend weeks researching cars online. If your inventory is hard to navigate, outdated, or lacks high-quality visuals, they will bounce to a competitor."
    },
    problems: [
      ["Slow Search", "Page reloads for every applied filter frustrate users and increase bounce rates significantly."],
      ["Stale Data", "Disconnects between the physical lot and the website lead to inquiries on sold vehicles."],
      ["Poor Mobile UX", "Complex filters and large vehicle images break down on mobile devices where most research happens."]
    ],
    deliverablesIntro: {
      title: "High-performance digital showrooms.",
      lead: "We architect custom headless commerce and Next.js frontends to deliver lightning-fast vehicle discovery experiences."
    },
    deliverables: [
      ["Headless Search", "Algolia or Elasticsearch implementations for sub-second, typo-tolerant vehicle filtering.", "Algolia", "Search", "Filters"],
      ["Inventory Pipelines", "Robust middleware that securely syncs data from your DMS to the web in real-time.", "DMS API", "Sync", "Middleware"],
      ["Media Optimization", "Automated image pipelines that compress and deliver vehicle photos instantly without quality loss.", "CDNs", "WebP", "360° Viewers"],
      ["Mobile-First UX", "Responsive interfaces designed specifically for thumb-friendly filtering and image swiping.", "UX/UI", "Mobile", "React"]
    ]
  },
  "leads-appointments-and-sales": {
    metaTitle: "Automotive Leads, Appointments & Sales",
    eyebrow: "Omnichannel Auto Sales",
    h1: "Turn browsing into test drives and closed deals.",
    lead: "We design high-conversion lead capture experiences, digital appointment scheduling, and online sales checkout flows for modern dealerships.",
    status: "Dealership Sales Tech",
    points: [
      "Frictionless test drive booking systems",
      "Digital retail flows for online deposits and financing",
      "Seamless routing of leads into your CRM"
    ],
    proof: [
      ["01 · Higher Conversion", "Streamlined forms drastically increase lead submission rates."],
      ["02 · Smart Routing", "Automatically assign leads to the right sales associate."],
      ["03 · Digital Retailing", "Enable online deposits and trade-in valuations."],
      ["04 · Analytics Tracking", "Attribute every lead to the exact marketing channel."]
    ],
    problemsIntro: {
      eyebrow: "When forms cause friction",
      asideLead: "Every extra form field drops your conversion rate.",
      title: "Don't let high-intent buyers slip away.",
      mainLead: "Capturing a lead is only the first step. Dealerships need systems that not only convert visitors but also qualify them and route them to sales teams instantly."
    },
    problems: [
      ["Clunky Booking", "Forcing users to call or fill out massive forms just to schedule a simple test drive."],
      ["Lead Leakage", "Website leads get lost in email inboxes instead of injecting directly into the CRM."],
      ["Offline Financing", "Buyers are forced into the dealership to complete basic finance applications and trade-ins."]
    ],
    deliverablesIntro: {
      title: "Conversion engines and digital retail.",
      lead: "We build the interactive tools that move a customer from 'interested' to 'ready to buy'."
    },
    deliverables: [
      ["Smart Scheduling", "Calendar integrations that let buyers book test drives based on real-time vehicle and staff availability.", "Calendars", "Booking", "Reminders"],
      ["Digital Checkout", "Secure workflows for placing deposits, applying for finance, and e-signing preliminary documents.", "Stripe", "Fintech", "E-Sign"],
      ["CRM Integrations", "Direct API connections to Salesforce, Hubspot, or automotive CRMs to inject leads with full context.", "APIs", "Salesforce", "Routing"],
      ["Trade-in Tools", "Integration with Kelly Blue Book or similar APIs to provide instant, automated vehicle valuations.", "Valuation", "APIs", "Calculators"]
    ]
  },
  "rental-subscription-and-booking": {
    metaTitle: "Rental, Subscription & Booking Software",
    eyebrow: "Flexible Mobility Solutions",
    h1: "Powering the next generation of vehicle access.",
    lead: "We engineer robust booking engines and subscription platforms that make renting or subscribing to a car entirely digital and frictionless.",
    status: "Mobility & Booking Engines",
    points: [
      "Dynamic pricing and availability calendars",
      "Automated ID verification and digital contract signing",
      "Recurring billing engines for vehicle subscriptions"
    ],
    proof: [
      ["01 · Real-time Availability", "Prevent double-bookings with strict inventory management."],
      ["02 · ID Verification", "Automate KYC and driver license checks instantly."],
      ["03 · Dynamic Pricing", "Adjust rates automatically based on demand and seasonality."],
      ["04 · Subscription Billing", "Manage recurring payments and tier upgrades seamlessly."]
    ],
    problemsIntro: {
      eyebrow: "When mobility gets stuck",
      asideLead: "Counter queues and paperwork kill the rental experience.",
      title: "Modern consumers expect instant access.",
      mainLead: "Whether it's a weekend rental or a monthly subscription, customers want to book, verify, and unlock a vehicle entirely from their phone without standing in line."
    },
    problems: [
      ["Paperwork Bottlenecks", "Manual license checks and physical signatures create massive queues at rental branches."],
      ["Rigid Billing", "Legacy systems can't handle the flexible, recurring nature of modern vehicle subscriptions."],
      ["Inventory Clashes", "Poorly synced systems result in customers booking vehicles that are out for maintenance."]
    ],
    deliverablesIntro: {
      title: "End-to-end mobility platforms.",
      lead: "We build the complex backend engines required to manage fleets, process bookings, and handle risk securely."
    },
    deliverables: [
      ["Booking Engines", "Custom reservation systems handling complex logic for dates, locations, add-ons, and grace periods.", "Logic", "Calendars", "Pricing"],
      ["Identity Verification", "Integration with tools like Stripe Identity or Onfido for instant, automated driver license checks.", "KYC", "Onfido", "Security"],
      ["Subscription Billing", "Robust recurring payment systems that handle prorations, upgrades, and automated failed-payment retries.", "Stripe", "Billing", "SaaS"],
      ["Digital Handover", "Mobile flows that guide customers through vehicle condition checks, photo uploads, and digital signatures.", "Mobile", "Photos", "E-Sign"]
    ]
  },
  "service-and-workshop-experiences": {
    metaTitle: "Service & Workshop Portals",
    eyebrow: "Aftersales & Maintenance",
    h1: "Digitize the vehicle service journey.",
    lead: "We create transparent service booking portals, repair tracking dashboards, and digital vehicle health reports that build trust and drive retention.",
    status: "Aftersales Digital Experiences",
    points: [
      "Self-serve service scheduling and loaner vehicle requests",
      "Digital approvals for additional repair work",
      "Transparent tracking from drop-off to pickup"
    ],
    proof: [
      ["01 · Higher Retention", "Convenient digital service booking keeps customers coming back."],
      ["02 · Faster Approvals", "SMS links for instant approval on video-backed repair quotes."],
      ["03 · Reduced Calls", "Status trackers eliminate 'Is my car ready yet?' phone calls."],
      ["04 · Loaner Management", "Seamlessly assign and track courtesy vehicles."]
    ],
    problemsIntro: {
      eyebrow: "When service causes stress",
      asideLead: "Lack of transparency breeds mistrust in the workshop.",
      title: "Aftersales is the key to dealership profitability.",
      mainLead: "A clunky service experience drives customers to independent mechanics. Dealerships must offer a digital, transparent, and frictionless maintenance journey."
    },
    problems: [
      ["Phone Tag", "Service advisors waste hours calling customers for approval on brake pads or tires."],
      ["Black Box Anxiety", "Customers drop off their car and have no visibility into its status until the end of the day."],
      ["Inconvenient Booking", "Forcing customers to call during business hours to schedule routine maintenance."]
    ],
    deliverablesIntro: {
      title: "Transparent aftersales tools.",
      lead: "We build portals that connect your service bay directly to the customer's smartphone."
    },
    deliverables: [
      ["Service Scheduling", "Smart booking flows that understand standard repair times and workshop bay availability.", "Booking", "Workshop", "Logic"],
      ["Digital Health Checks", "Mobile-friendly interfaces displaying mechanic videos, photos, and itemized quotes for instant approval.", "VHC", "Video", "Approvals"],
      ["Status Tracking", "Pizza-tracker style progress bars showing exactly what stage of service the vehicle is in.", "WebSockets", "Tracking", "UX"],
      ["Online Payments", "Secure checkout links sent via SMS allowing customers to pay their invoice before they even arrive.", "SMS", "Stripe", "Payments"]
    ]
  },
  "branch-fleet-and-operations": {
    metaTitle: "Branch, Fleet & Operations Dashboards",
    eyebrow: "Dealership & Rental Operations",
    h1: "Run your automotive operations from one dashboard.",
    lead: "We build custom operational software to manage branch logistics, fleet movements, inventory intake, and staff coordination.",
    status: "Automotive Operations Software",
    points: [
      "Centralized fleet movement and logistics tracking",
      "Automated vehicle intake and reconditioning workflows",
      "Cross-branch performance analytics and KPI tracking"
    ],
    proof: [
      ["01 · Logistics Control", "Track the exact location and status of every asset across branches."],
      ["02 · Faster Recon", "Digitize the reconditioning process to get cars on the lot faster."],
      ["03 · Staff Efficiency", "Eliminate clipboards, spreadsheets, and manual data entry."],
      ["04 · Unified Data", "Bring DMS, CRM, and accounting data into one operational view."]
    ],
    problemsIntro: {
      eyebrow: "When operations scale",
      asideLead: "Spreadsheets cannot manage a multi-branch network.",
      title: "Hidden inefficiencies cost millions.",
      mainLead: "As dealer groups and rental networks grow, operational complexity skyrockets. Relying on disconnected legacy tools and manual tracking leads to lost assets and wasted time."
    },
    problems: [
      ["Slow Reconditioning", "Vehicles sit idle for days because the service bay, detailer, and photographer aren't communicating."],
      ["Lost Inventory", "Constant confusion over which branch holds a specific vehicle or loaner car."],
      ["Data Silos", "General Managers have to pull reports from five different systems to understand daily performance."]
    ],
    deliverablesIntro: {
      title: "Custom back-office platforms.",
      lead: "We architect secure, scalable internal tools that streamline workflows and provide total operational visibility."
    },
    deliverables: [
      ["Fleet Tracking", "Interactive map and list interfaces tracking vehicle statuses, locations, and scheduled movements.", "Logistics", "Maps", "Status"],
      ["Workflow Automation", "Digital Kanban boards for the reconditioning pipeline, automatically notifying the next department.", "Kanban", "Alerts", "Speed"],
      ["Role-based Dashboards", "Tailored analytics views for GMs, Sales Managers, and Service Directors based on their specific KPIs.", "RBAC", "Analytics", "Dashboards"],
      ["System Integration", "Custom middleware connecting your DMS, accounting software, and HR tools into a single pane of glass.", "Middleware", "APIs", "Integration"]
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
