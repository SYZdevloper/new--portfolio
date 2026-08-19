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
                            <p className="eyebrow">Featured Real Estate Build</p>
                            <h2>Selling off-plan with digital precision.</h2>
                        </div>
                        <p>See how we helped a master developer accelerate pre-sales by replacing static PDFs with a fully interactive, CRM-connected inventory platform.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Property Tech Platform</span>
                                <span>3D Visualization + CRM Sync</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/realestate-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Interactive inventory, instant reservations.</h2>
                                <p>We developed a custom portal that allows buyers and brokers to explore units in 3D, view live pricing, and place deposits directly through a seamless Stripe integration.</p>
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
                            <summary>Can you integrate with Salesforce or Hubspot?</summary>
                            <p>Yes. We build robust API integrations with leading real estate CRMs (Salesforce, HubSpot, Propertybase) to ensure leads, availability statuses, and reservations sync in real-time between the website and the sales team.</p>
                        </details>
                        <details>
                            <summary>How do you handle 3D models and interactive masterplans?</summary>
                            <p>We utilize WebGL, Three.js, and specialized tiling methods to render high-fidelity architectural models and interactive maps directly in the browser, without requiring the user to download heavy plugins.</p>
                        </details>
                        <details>
                            <summary>Can buyers place deposits online?</summary>
                            <p>Absolutely. We integrate secure payment gateways (like Stripe or regional equivalents) to allow buyers to place holds or pay EOI (Expression of Interest) fees directly through the unit journey flow.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other real estate capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/project-websites-and-discovery/"><div><small>Marketing</small><h3>Project Websites</h3><p>Immersive digital experiences for new developments.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/inventory-and-unit-journeys/"><div><small>Sales</small><h3>Unit Journeys</h3><p>Help buyers find their perfect space, instantly.</p></div><b>Explore inventory ↗</b></a>
                        <a className="related-card" href="/services/broker-and-channel-portals/"><div><small>Partners</small><h3>Broker Portals</h3><p>Empower your broker network to sell faster.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/sales-and-project-dashboards/"><div><small>Operations</small><h3>Project Dashboards</h3><p>Total visibility over project sales and revenue.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Accelerate your property <br />sales and operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build platforms that wow buyers, empower brokers, and provide total operational oversight? Let's discuss your project.</p>
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
  "project-websites-and-discovery": {
    metaTitle: "Real Estate Project Websites & Discovery",
    eyebrow: "Real Estate Marketing",
    h1: "Immersive digital experiences for new developments.",
    lead: "We design high-end project websites that bring off-plan real estate to life through interactive masterplans, 3D tours, and seamless lead capture.",
    status: "Property Discovery Platforms",
    points: [
      "Award-winning web design that matches luxury property aesthetics",
      "Interactive location maps and neighborhood amenity guides",
      "High-conversion lead capture flows integrated directly with CRM"
    ],
    proof: [
      ["01 · Premium Aesthetics", "Design that reflects the true value of the development."],
      ["02 · Interactive Maps", "Showcase local amenities, transit, and lifestyle visually."],
      ["03 · Smart Lead Capture", "Pre-qualify buyers through intelligent, conversational forms."],
      ["04 · Blazing Fast", "Next.js architecture ensures massive image galleries load instantly."]
    ],
    problemsIntro: {
      eyebrow: "When design falls flat",
      asideLead: "You can't sell a $2M penthouse with a $200 template.",
      title: "First impressions are everything in off-plan sales.",
      mainLead: "Buyers are being asked to invest millions based purely on a vision. If a project website is slow, generic, or difficult to navigate, it immediately erodes trust in the developer's ability to deliver."
    },
    problems: [
      ["Generic Templates", "Luxury properties presented on clunky, slow-loading WordPress themes that look like everyone else."],
      ["Lost Leads", "Contact forms that break on mobile or fail to send data to the sales team's CRM."],
      ["Static Collateral", "Forcing buyers to download massive PDFs instead of letting them explore the vision interactively."]
    ],
    deliverablesIntro: {
      title: "Digital showrooms.",
      lead: "We build bespoke marketing websites that captivate buyers and generate high-intent leads."
    },
    deliverables: [
      ["Bespoke UI/UX", "High-end, customized web design utilizing smooth scroll animations and premium typography.", "Design", "Animations", "Luxury"],
      ["Interactive Maps", "Custom Mapbox integrations highlighting nearby schools, transit hubs, and lifestyle amenities.", "Mapbox", "Location", "UX"],
      ["CRM Integration", "Direct API connections to Salesforce or HubSpot to ensure leads are instantly routed to sales agents.", "APIs", "Salesforce", "Routing"],
      ["Performance Media", "Optimized video and image pipelines ensuring high-res renders load instantly without buffering.", "Next.js", "CDNs", "Speed"]
    ]
  },
  "inventory-and-unit-journeys": {
    metaTitle: "Inventory & Unit Journeys",
    eyebrow: "Interactive Unit Finders",
    h1: "Help buyers find their perfect space, instantly.",
    lead: "We build interactive unit finders and stacking plans that sync in real-time with your CRM, allowing buyers to explore floorplans, views, and availability seamlessly.",
    status: "Real Estate Inventory Tools",
    points: [
      "Interactive 3D building stackers to filter units by floor and view",
      "Real-time availability syncing—never show a sold unit",
      "Dynamic floorplan comparisons and virtual tour integration"
    ],
    proof: [
      ["01 · Live Availability", "Direct CRM sync ensures inventory is always 100% accurate."],
      ["02 · Building Stackers", "Visually browse available units by elevation and floor."],
      ["03 · Advanced Filters", "Search by price, bedrooms, orientation, or square footage."],
      ["04 · Save & Compare", "Allow buyers to shortlist their favorite floorplans securely."]
    ],
    problemsIntro: {
      eyebrow: "When inventory is hidden",
      asideLead: "PDF floorplans kill the buying momentum.",
      title: "Make it easy for buyers to say yes.",
      mainLead: "Navigating a 400-unit tower using static price lists and a folder of PDF floorplans is incredibly frustrating. Buyers drop off when they can't easily compare their options."
    },
    problems: [
      ["Stale Data", "Sales agents and websites showing units that were already reserved three days ago."],
      ["Clunky Filters", "Buyers are forced to scroll through endless lists instead of visually clicking on a building facade."],
      ["Isolated Assets", "Floorplans, renders, and pricing are kept in three different places, confusing the buyer."]
    ],
    deliverablesIntro: {
      title: "Interactive property browsers.",
      lead: "We engineer complex inventory interfaces that turn data into an engaging, visual shopping experience."
    },
    deliverables: [
      ["Building Stackers", "SVG or WebGL based interactive building facades where users can click on specific floors and units.", "SVG", "WebGL", "Interactive"],
      ["Parametric Search", "Lightning-fast filtering systems (Algolia) to instantly narrow down units by specific criteria.", "Search", "Filters", "Speed"],
      ["Live CRM Sync", "Robust middleware that securely pulls live pricing and availability status directly from the sales database.", "APIs", "Sync", "Real-time"],
      ["Floorplan Viewers", "Interactive floorplan displays with dynamic room highlights and integrated 360 virtual tours.", "Floorplans", "Media", "UX"]
    ]
  },
  "leads-visits-and-bookings": {
    metaTitle: "Leads, Visits & Bookings",
    eyebrow: "Property Sales Tech",
    h1: "Turn digital interest into physical site visits.",
    lead: "We engineer lead capture flows, digital appointment scheduling, and secure online reservation systems that accelerate the property sales cycle.",
    status: "Property Booking Engines",
    points: [
      "Smart scheduling for physical site tours and display suites",
      "Secure online payment gateways for Expression of Interest (EOI) fees",
      "Digital KYC and document uploads for initial sales contracts"
    ],
    proof: [
      ["01 · Higher Conversion", "Remove friction from booking a site visit or virtual tour."],
      ["02 · Online Reservations", "Allow buyers to lock in a unit with a secure digital deposit."],
      ["03 · KYC Automation", "Collect ID documents securely before the contract stage."],
      ["04 · Sales Routing", "Instantly assign leads to the correct agent based on territory."]
    ],
    problemsIntro: {
      eyebrow: "When booking creates friction",
      asideLead: "Phone tag is the fastest way to lose a buyer.",
      title: "The reservation process should be frictionless.",
      mainLead: "When a buyer is ready to visit a display suite or put down a deposit, forcing them to wait for an email reply or a phone call gives them time to reconsider or look at a competitor."
    },
    problems: [
      ["Scheduling Chaos", "Agents waste hours emailing back and forth just to find a time for a site visit."],
      ["Manual Deposits", "Waiting for wire transfers or physical checks delays the reservation process unnecessarily."],
      ["Data Entry Errors", "Sales admins manually typing buyer details from a web form into the CRM."]
    ],
    deliverablesIntro: {
      title: "Digital sales workflows.",
      lead: "We build the interactive tools that move a buyer from 'browsing' to 'reserved'."
    },
    deliverables: [
      ["Smart Scheduling", "Integration with tools like Calendly or custom calendar logic to book tours based on agent availability.", "Calendars", "Booking", "Reminders"],
      ["Digital Checkout", "Secure payment flows utilizing Stripe to process holding deposits or EOI fees instantly.", "Stripe", "Payments", "Security"],
      ["Document Uploads", "Encrypted portals for buyers to securely upload passports, bank statements, and KYC documents.", "Encryption", "KYC", "Forms"],
      ["E-Sign Integration", "Workflows that automatically generate reservation agreements and send them via DocuSign or HelloSign.", "E-Sign", "APIs", "Contracts"]
    ]
  },
  "broker-and-channel-portals": {
    metaTitle: "Broker & Channel Portals",
    eyebrow: "Channel Partner Software",
    h1: "Empower your broker network to sell faster.",
    lead: "We develop secure broker portals that provide channel partners with real-time inventory access, marketing collateral, and digital commission tracking.",
    status: "Channel Partner Portals",
    points: [
      "Self-serve access to unbranded marketing materials and floorplans",
      "Live inventory availability explicitly for authorized channel partners",
      "Automated lead registration to protect broker commissions"
    ],
    proof: [
      ["01 · Live Inventory", "Brokers never pitch a sold unit to their clients again."],
      ["02 · Lead Protection", "Digital registration prevents disputes over who sourced the buyer."],
      ["03 · Marketing Hub", "A single source of truth for all brochures, renders, and videos."],
      ["04 · Commission Tracking", "Brokers can see the status of their payouts in real-time."]
    ],
    problemsIntro: {
      eyebrow: "When brokers are blind",
      asideLead: "You can't sell what you can't see.",
      title: "Your channel partners need real-time data.",
      mainLead: "External brokers drive massive sales volume for developers, but they are often treated as an afterthought. Forcing them to rely on outdated WhatsApp PDFs and phone calls for availability creates massive friction."
    },
    problems: [
      ["Commission Disputes", "Messy email chains lead to arguments over which broker actually registered the client first."],
      ["Outdated Collateral", "Brokers send clients an old version of the masterplan because they couldn't find the new link."],
      ["Sales Bottlenecks", "In-house sales teams spend 30% of their day just answering 'Is unit 402 still available?' from brokers."]
    ],
    deliverablesIntro: {
      title: "Digital enablement for agents.",
      lead: "We build secure, scalable portals that treat your external broker network like your most valuable asset."
    },
    deliverables: [
      ["Inventory Access", "Gated dashboards showing live availability and specific broker pricing structures.", "Dashboards", "Sync", "RBAC"],
      ["Lead Registration", "Secure forms that timestamp and inject broker leads directly into your CRM, locking in their commission.", "Forms", "CRM", "Timestamp"],
      ["Asset Management", "A centralized, searchable media library for downloading high-res renders, floorplans, and unbranded brochures.", "Media", "Search", "Downloads"],
      ["Performance Tracking", "Analytics views showing brokers their sales velocity, pipeline, and upcoming commission milestones.", "Analytics", "Metrics", "BI"]
    ]
  },
  "sales-and-project-dashboards": {
    metaTitle: "Sales & Project Dashboards",
    eyebrow: "Developer Operations",
    h1: "Total visibility over project sales and revenue.",
    lead: "We build executive dashboards for property developers, aggregating CRM data, marketing spend, and inventory velocity into a single source of truth.",
    status: "Real Estate Dashboards",
    points: [
      "Real-time aggregation of sales velocity across multiple projects",
      "Visual heatmaps of building inventory and reservation status",
      "Marketing ROI tracking from lead source to final contract"
    ],
    proof: [
      ["01 · Single Pane of Glass", "Unify data from your CRM, ERP, and marketing platforms."],
      ["02 · Sales Velocity", "Track exactly how fast units are moving compared to projections."],
      ["03 · Inventory Heatmaps", "Visually identify which floorplans or elevations are underperforming."],
      ["04 · ROI Attribution", "Know exactly which marketing channel produced the most revenue."]
    ],
    problemsIntro: {
      eyebrow: "When executives are blind",
      asideLead: "Spreadsheets cannot manage a billion-dollar pipeline.",
      title: "Real estate development runs on cash flow and velocity.",
      mainLead: "When a developer launches a major project, executives need instant visibility into sales performance. Relying on manually compiled weekly reports means critical pricing and marketing decisions are made too late."
    },
    problems: [
      ["Data Silos", "Marketing knows the cost-per-lead, Sales knows the conversion rate, but nobody knows the actual ROI."],
      ["Outdated Reports", "By the time the Friday sales report is generated, the data is already three days old."],
      ["Pricing Misses", "Without visual heatmaps, developers fail to notice that corner units are underpriced and selling too fast."]
    ],
    deliverablesIntro: {
      title: "Command centers for developers.",
      lead: "We engineer BI dashboards that aggregate complex real estate data into actionable, real-time insights for executives."
    },
    deliverables: [
      ["Executive Dashboards", "High-level visualizations of total revenue, units sold, and active pipeline across the entire portfolio.", "BI", "Visuals", "Metrics"],
      ["Inventory Heatmaps", "Interactive building stackers color-coded by status (Available, Reserved, Sold) to visualize sales velocity.", "DataViz", "SVG", "Live Data"],
      ["Marketing Attribution", "Middleware that connects ad spend data with CRM closed-won data to calculate true cost-per-acquisition.", "APIs", "Data pipelines", "ROI"],
      ["Automated Reporting", "Dynamic engine to instantly generate PDF or email summaries for board meetings and investors.", "Reporting", "PDFs", "Automation"]
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
