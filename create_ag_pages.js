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
                            <p className="eyebrow">Featured AgTech Platform</p>
                            <h2>Digitizing the growing season.</h2>
                        </div>
                        <p>See how we helped a global crop-protection manufacturer build an offline-first scouting app for their agronomists, instantly syncing paddock data to a centralized dealer ordering portal.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>AgTech</span>
                                <span>B2B Commerce & Field Mobility</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/agtech-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From soil to supply chain.</h2>
                                <p>We developed a custom ecosystem that connects field observations directly to dealer inventory systems, ensuring that farmers get the exact chemical prescriptions they need, exactly when they need them.</p>
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
                        <h2 id="faq-title">Common questions about agriculture tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do field apps work when agronomists are in cellular dead zones?</summary>
                            <p>We build 'Offline-First' applications (using IndexedDB or SQLite for mobile). An agronomist can log weed pressure, take photos, and write a spray recommendation entirely offline. The app stores the data and automatically syncs it to the cloud when they drive back into town.</p>
                        </details>
                        <details>
                            <summary>Can you integrate B2B ordering portals with legacy ERPs like SAP or JD Edwards?</summary>
                            <p>Yes. Agricultural supply chains run on complex legacy ERPs. We build secure API middleware layers that sit between your modern dealer portal and your ERP, translating modern web requests into the specific formats your backend system requires without overloading it.</p>
                        </details>
                        <details>
                            <summary>How do you handle variable pricing for different dealer networks?</summary>
                            <p>We build custom logic engines into our B2B commerce platforms. When a dealer logs in, the platform calls an API to fetch their specific tier pricing, early-order program discounts, and current rebate status, ensuring they only see the pricing rules that apply to them.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other agricultural capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/agricultural-product-platforms/"><div><small>Marketing</small><h3>Product Platforms</h3><p>Connect products with producers.</p></div><b>Explore platforms ↗</b></a>
                        <a className="related-card" href="/services/farmer-and-adviser-portals/"><div><small>Collaboration</small><h3>Grower Portals</h3><p>Digital hubs for agronomy and account management.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/dealer-and-commerce-workflows/"><div><small>Supply Chain</small><h3>Commerce Workflows</h3><p>Digitize the agricultural supply chain.</p></div><b>Explore commerce ↗</b></a>
                        <a className="related-card" href="/services/field-data-and-service-workflows/"><div><small>Agronomy</small><h3>Field Data Workflows</h3><p>Capture data from the paddock, offline.</p></div><b>Explore field tools ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your agribusiness <br />and supply chain. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From offline scouting apps for agronomists to complex B2B dealer portals, we build software that drives efficiency across the agricultural sector.</p>
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
  "agricultural-product-platforms": {
    metaTitle: "Agricultural Product Platforms",
    eyebrow: "Agribusiness",
    h1: "Connect products with producers.",
    lead: "We design high-performance product and capability platforms for ag-chem companies, seed breeders, and equipment manufacturers to clearly communicate efficacy and technical data.",
    status: "Ag Product Websites",
    points: [
      "Dynamic product catalogues integrated directly with your PIM (Product Information Management) system",
      "Interactive tools like seeding rate calculators and chemical tank-mix guides",
      "High-performance architecture ensuring fast load times on rural internet connections"
    ],
    proof: [
      ["01 · Technical Clarity", "Easily display complex SDS (Safety Data Sheets) and label information."],
      ["02 · Agronomic Trust", "Showcase local field trial data and efficacy results clearly."],
      ["03 · Find a Dealer", "Interactive mapping tools to connect farmers with local stockists."],
      ["04 · Low Bandwidth", "Optimized image delivery for fast loading in rural areas."]
    ],
    problemsIntro: {
      eyebrow: "When technical data is buried",
      asideLead: "Farmers shouldn't have to download a 10MB PDF just to find an application rate.",
      title: "Hard-to-find information loses sales.",
      mainLead: "Agricultural products are highly technical. Whether it's a pre-emergent herbicide or a new wheat variety, farmers and agronomists need instant access to application rates, plant-back periods, and safety data. If your website is slow or difficult to navigate on a phone in the paddock, they will choose a competitor."
    },
    problems: [
      ["Outdated Labels", "A farmer accesses an old version of a chemical label because the website wasn't updated, leading to application errors."],
      ["Poor Mobile UX", "Agronomists struggle to use your tank-mix compatibility guide on their phones while standing at the spray rig."],
      ["Slow Rural Loads", "Heavy video backgrounds and uncompressed images cause your site to time out on 3G connections."]
    ],
    deliverablesIntro: {
      title: "Digital foundations for agribusiness.",
      lead: "We build platforms that put critical agronomic information at the fingertips of the industry."
    },
    deliverables: [
      ["Dynamic Product Catalogues", "Headless CMS implementations (Sanity/Contentful) allowing your team to update labels and SDS documents instantly.", "CMS", "Data", "Speed"],
      ["Agronomic Calculators", "Custom React tools (e.g., seeding rate calculators, ROI estimators) that drive engagement and provide instant value.", "React", "Logic", "UX"],
      ["Dealer Locators", "Mapbox integrations that route farmers to the nearest retail store carrying your specific product line.", "Maps", "Routing", "Sales"],
      ["Low-Bandwidth Optimization", "Aggressive edge-caching and automated media compression ensuring fast load times globally.", "Vercel", "CDN", "Performance"]
    ]
  },
  "farmer-and-adviser-portals": {
    metaTitle: "Farmer & Adviser Portals",
    eyebrow: "Customer Collaboration",
    h1: "Digital hubs for agronomy and account management.",
    lead: "We build secure portals where farmers and agronomists can access soil test results, spray recommendations, and historical purchase data in one unified dashboard.",
    status: "Grower Portals",
    points: [
      "Secure, unified dashboards replacing fragmented email chains and spreadsheets",
      "Digital delivery and approval of agronomic recommendations and chemical prescriptions",
      "Historical data vault for soil tests, tissue tests, and yield maps"
    ],
    proof: [
      ["01 · Sticky Relationships", "Make it impossible for customers to leave by housing all their historical data."],
      ["02 · Faster Approvals", "Farmers can click 'Approve' on a spray recommendation instantly via SMS."],
      ["03 · Less Admin", "Stop re-sending invoices and soil tests; farmers can self-serve 24/7."],
      ["04 · Centralized Comms", "Keep the agronomist, the farmer, and the retail store in total sync."]
    ],
    problemsIntro: {
      eyebrow: "When agronomy is scattered",
      asideLead: "Managing a 10,000-hectare cropping program via WhatsApp and email is a liability.",
      title: "Disjointed communication risks yield.",
      mainLead: "Farming requires intense collaboration between the grower, the agronomist, and the retail supplier. When recommendations are texted, soil tests are emailed as PDFs, and invoices arrive by mail, the farmer is left to piece the puzzle together, increasing the risk of expensive mistakes."
    },
    problems: [
      ["Lost Recommendations", "A farmer loses a text message about a spray rate, applies the wrong chemical, and damages the crop."],
      ["Data Silos", "Historical soil test data is trapped on the hard drive of an agronomist who left the company."],
      ["Compliance Nightmares", "Without a central digital record of chemical applications, QA audits become a massive administrative headache."]
    ],
    deliverablesIntro: {
      title: "The digital farm office.",
      lead: "We engineer secure portals that act as the central source of truth for the growing season."
    },
    deliverables: [
      ["Unified Dashboards", "React-based interfaces where users can view current weather, upcoming tasks, and recent agronomic advice in one glance.", "UX", "React", "Dashboards"],
      ["Digital Recommendations", "Workflows that allow an agronomist to write a chemical prescription and instantly push it to the farmer's portal for sign-off.", "Workflows", "Logic", "Sync"],
      ["Data Vaults", "Secure AWS S3 storage for all farm data (soil tests, yield maps, drone imagery) tied directly to the customer's account.", "AWS", "Storage", "Security"],
      ["Role-Based Access (RBAC)", "Strict permission models ensuring farm hands can see task lists, but only the owner can see financial invoices.", "Auth0", "RBAC", "Security"]
    ]
  },
  "dealer-and-commerce-workflows": {
    metaTitle: "Dealer & Commerce Workflows",
    eyebrow: "B2B Commerce",
    h1: "Digitize the agricultural supply chain.",
    lead: "We engineer complex B2B e-commerce platforms and dealer ordering portals that handle early-order programs, variable pricing, and bulk logistics.",
    status: "Dealer Portals",
    points: [
      "Custom B2B e-commerce engines designed for the complexities of agricultural inputs",
      "Automated Early Order Program (EOP) logic, calculating complex tiered discounts and rebates",
      "Seamless integration with legacy ERP systems (SAP, JD Edwards, NetSuite)"
    ],
    proof: [
      ["01 · Automated Rebates", "Eliminate the manual calculation of complex dealer rebate programs."],
      ["02 · Inventory Visibility", "Dealers can see live warehouse stock before placing massive seed or chem orders."],
      ["03 · Faster Ordering", "Replace faxed and emailed purchase orders with a streamlined digital cart."],
      ["04 · Accurate Pricing", "Ensure every dealer sees their exact contractual pricing tier."]
    ],
    problemsIntro: {
      eyebrow: "When B2B ordering is manual",
      asideLead: "Processing million-dollar seed orders via email attachments is slowing you down.",
      title: "Complex pricing structures break standard e-commerce.",
      mainLead: "Agricultural supply chains are notoriously complex. Standard Shopify or Magento stores cannot handle the reality of the Ag sector: dealer-specific pricing tiers, complex volume rebates, hazardous goods logistics, and Early Order Programs. When ordering is manual, your customer service team becomes an expensive bottleneck."
    },
    problems: [
      ["Order Entry Errors", "A customer service rep miskeys a chemical order from an email, resulting in the wrong pallet being shipped during a critical planting window."],
      ["Rebate Confusion", "Dealers constantly call to check their rebate status because they can't track it themselves."],
      ["Stockouts", "Dealers place orders blindly without knowing if the product is actually in the warehouse, leading to backorder frustration."]
    ],
    deliverablesIntro: {
      title: "Custom B2B commerce engines.",
      lead: "We build bespoke ordering platforms that understand the specific business logic of agribusiness."
    },
    deliverables: [
      ["Custom Pricing Engines", "Logic layers that query the ERP in real-time to display the correct price based on the logged-in dealer's tier and current promotions.", "Logic", "Pricing", "APIs"],
      ["Early Order Program (EOP) Workflows", "Dedicated interfaces for dealers to plan and commit to their seasonal purchases, with visual trackers for rebate thresholds.", "Workflows", "B2B", "UX"],
      ["ERP Middleware", "Secure Node.js translation layers that securely read/write orders directly into SAP or JD Edwards without exposing the core database.", "Integration", "Node.js", "ERP"],
      ["Bulk Logistics Calculators", "Checkout logic that automatically calculates shipping constraints for pallets, IBCs (shuttles), and hazardous chemicals.", "Logistics", "Math", "Cart"]
    ]
  },
  "field-data-and-service-workflows": {
    metaTitle: "Field Data & Service Workflows",
    eyebrow: "Field Mobility",
    h1: "Capture data from the paddock, offline.",
    lead: "We develop offline-capable mobile apps for field agronomists and service technicians to log crop scouting data, take soil samples, and manage machinery repairs without a cellular connection.",
    status: "Field Mobility Apps",
    points: [
      "True offline-first mobile architecture utilizing local device storage (IndexedDB/SQLite)",
      "Geospatial integration for dropping pins on specific weed outbreaks or machinery breakdowns",
      "Instant syncing of field data to central CRMs or dealer portals once connectivity is restored"
    ],
    proof: [
      ["01 · Never Lose Data", "Agronomists can scout fields all day without relying on a 4G connection."],
      ["02 · Eliminate Paper", "Stop writing field notes on notepads that have to be re-typed in the office later."],
      ["03 · Photographic Proof", "Attach geotagged photos of pest damage directly to the scouting report."],
      ["04 · Faster Service", "Equipment technicians can access parts manuals offline while fixing a tractor."]
    ],
    problemsIntro: {
      eyebrow: "When the paddock is a black spot",
      asideLead: "If your app requires an internet connection, it's useless on a farm.",
      title: "Poor connectivity destroys data integrity.",
      mainLead: "Agriculture happens where cellular networks don't. When agronomists or machinery technicians are forced to use web-based tools that drop out, they revert to writing notes on paper or in the notes app on their phone. This means data is siloed, delayed, and often lost completely."
    },
    problems: [
      ["Double Data Entry", "An agronomist spends all day in the field, then spends three hours that night typing their notes into the corporate CRM."],
      ["Location Ambiguity", "A technician is dispatched to fix a pump, but spends an hour trying to find it because the exact GPS coordinates weren't logged."],
      ["App Frustration", "Off-the-shelf CRM apps freeze and crash when transitioning in and out of cellular coverage."]
    ],
    deliverablesIntro: {
      title: "Rugged software for the field.",
      lead: "We build progressive web apps (PWAs) and React Native mobile tools explicitly designed for rural conditions."
    },
    deliverables: [
      ["Offline-First Architecture", "Advanced local caching allowing users to create records, take photos, and run complex forms entirely offline.", "Offline", "PWA", "Sync"],
      ["Geospatial Data Capture", "Integrations with device GPS allowing users to drop accurate pins for soil sampling sites or machinery breakdowns.", "Geo", "Maps", "Mobile"],
      ["Smart Scouting Forms", "Customizable digital checklists for agronomy or equipment inspections, utilizing conditional logic to speed up data entry.", "Forms", "Logic", "UX"],
      ["Background Sync Engines", "Background processes that detect when cellular service is restored and quietly push all saved data to the central server.", "APIs", "Webhooks", "Integration"]
    ]
  },
  "farm-and-programme-dashboards": {
    metaTitle: "Farm & Programme Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visibility across the growing season.",
    lead: "We aggregate data from IoT sensors, dealer CRMs, and field apps into executive dashboards, tracking program adoption, supply chain constraints, and overall yield potential.",
    status: "Ag Dashboards",
    points: [
      "Unified BI dashboards combining sales data, field observations, and weather modeling",
      "Real-time tracking of chemical or seed program adoption across different geographical regions",
      "Predictive analytics to identify supply chain bottlenecks before the planting window opens"
    ],
    proof: [
      ["01 · Single Source of Truth", "Consolidate your ERP, CRM, and agronomy software into one executive view."],
      ["02 · Program Visibility", "See exactly how many hectares are committed to your new seed variety."],
      ["03 · Supply Chain Agility", "Move inventory between warehouses proactively based on live regional demand."],
      ["04 · Automated Board Packs", "Turn disparate data sets into polished executive reports instantly."]
    ],
    problemsIntro: {
      eyebrow: "When executives fly blind",
      asideLead: "You can't manage a national supply chain looking at last month's sales data.",
      title: "Data silos hide the reality of the season.",
      mainLead: "Agribusiness leaders are forced to make high-stakes inventory and marketing decisions in highly compressed seasonal windows. If your sales data is in SAP, your agronomy data is in a legacy app, and your weather forecasts are in a separate portal, you cannot react fast enough to changing conditions."
    },
    problems: [
      ["Inventory Misallocation", "Product is sitting in a warehouse in a region suffering from drought, while another region is stocked out due to unexpected rain."],
      ["Blind Program Tracking", "Marketing launches a major rebate program, but leadership has no idea what the adoption rate is until the season ends."],
      ["Manual Reporting Burden", "Analysts spend weeks manually extracting and merging data in Excel just to build the monthly sales report."]
    ],
    deliverablesIntro: {
      title: "Command centers for agribusiness.",
      lead: "We engineer data aggregation platforms that give leadership the real-time insights needed to win the season."
    },
    deliverables: [
      ["Executive Scorecards", "High-level visual dashboards tracking KPIs like program adoption, regional sales vs. forecast, and inventory levels.", "BI", "Dashboards", "Metrics"],
      ["Data Warehousing", "Pipelines that extract data from disparate proprietary systems (ERP, CRM, Agronomy Apps) and normalize it in a cloud data warehouse.", "ETL", "Cloud", "Data"],
      ["Geospatial Analytics", "Map-based interfaces that overlay live sales data with weather patterns and soil moisture indices to predict regional demand spikes.", "GIS", "Mapping", "React"],
      ["Automated Reporting", "Dynamic engines to instantly generate branded PDF or email summaries for regional sales managers and executives.", "Reporting", "PDFs", "Automation"]
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
