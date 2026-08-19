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
                            <p className="eyebrow">Featured Chemical Platform</p>
                            <h2>Digitizing bulk formulations.</h2>
                        </div>
                        <p>See how we helped a global specialty chemicals manufacturer build a headless product platform that automatically matches specific polymer formulations to regional SDS compliance requirements.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Chemical Tech</span>
                                <span>B2B Commerce & Compliance</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/chemical-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From laboratory to logistics.</h2>
                                <p>We developed a custom B2B portal that allows distributors to order bulk IBCs, track hazardous freight via IoT integrations, and instantly download batch-specific Certificates of Analysis (CoA) without calling customer service.</p>
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
                        <h2 id="faq-title">Common questions about chemical industry tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle complex regulatory and compliance data?</summary>
                            <p>We build structured databases (often via headless CMS like Sanity) that link products to specific regional regulations (REACH, EPA). This ensures that a technical buyer in Europe automatically sees the correct SDS and compliance documents for their jurisdiction.</p>
                        </details>
                        <details>
                            <summary>Can you integrate B2B ordering portals with legacy ERPs like SAP?</summary>
                            <p>Yes. Chemical supply chains run on complex legacy ERPs. We build secure API middleware layers that sit between your modern distributor portal and your ERP, translating modern web requests into the specific formats your backend system requires for order entry and inventory.</p>
                        </details>
                        <details>
                            <summary>How do you handle hazardous freight calculations?</summary>
                            <p>We build custom logic engines into the checkout process. The platform automatically checks UN numbers, packing groups, and dangerous goods classes, calculating specific hazmat freight surcharges and preventing incompatible chemicals from being placed on the same pallet.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other chemical capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/technical-product-catalogues/"><div><small>Discovery</small><h3>Technical Catalogues</h3><p>Structure complex chemical formulations.</p></div><b>Explore catalogues ↗</b></a>
                        <a className="related-card" href="/services/safety-and-technical-resources/"><div><small>Compliance</small><h3>Safety Resources</h3><p>Digital hubs for SDS and technical data.</p></div><b>Explore resources ↗</b></a>
                        <a className="related-card" href="/services/samples-and-technical-sales/"><div><small>Sales</small><h3>Sample Workflows</h3><p>Accelerate the technical sales cycle.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/distributor-and-customer-portals/"><div><small>Commerce</small><h3>Distributor Portals</h3><p>Digitize bulk chemical ordering.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your chemical <br />and manufacturing operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From complex technical catalogues to B2B hazardous ordering portals, we build software that drives efficiency across the chemical supply chain.</p>
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
  "technical-product-catalogues": {
    metaTitle: "Technical Product Catalogues",
    eyebrow: "Product Discovery",
    h1: "Structure complex chemical formulations.",
    lead: "We design high-performance product catalogues for chemical manufacturers, enabling technical buyers to filter by application, molecular properties, and regulatory compliance.",
    status: "Chemical Catalogues",
    points: [
      "Advanced taxonomy and filtering for thousands of complex SKUs and formulations",
      "Dynamic linkage between base products and regional variations or packaging sizes",
      "High-performance architecture optimized for global B2B procurement teams"
    ],
    proof: [
      ["01 · Technical Clarity", "Easily display complex physical properties and application data."],
      ["02 · Advanced Filtering", "Buyers can search by CAS number, application, or chemical family."],
      ["03 · SEO Optimization", "Capture organic search intent for specific chemical formulations."],
      ["04 · Single Source of Truth", "Centralize product data by integrating with your existing PIM."]
    ],
    problemsIntro: {
      eyebrow: "When technical data is buried",
      asideLead: "Technical buyers won't wait days for a sales rep to email a product spec sheet.",
      title: "Hard-to-find information loses B2B sales.",
      mainLead: "Chemical products are highly technical. Whether an R&D chemist is looking for a specific surfactant or a procurement manager needs a bulk solvent, they need instant access to physical properties, applications, and regulatory status. If your website is just a list of PDFs, they will buy from a competitor with better digital tools."
    },
    problems: [
      ["PDF Graveyards", "Your product data is locked inside hundreds of outdated PDFs that cannot be searched or filtered by buyers."],
      ["Inconsistent Data", "The marketing website shows different product specifications than the internal ERP system."],
      ["Poor Searchability", "Customers cannot easily find products using industry-standard identifiers like CAS numbers or trade names."]
    ],
    deliverablesIntro: {
      title: "Digital foundations for chemical manufacturers.",
      lead: "We build platforms that put critical technical information at the fingertips of the industry."
    },
    deliverables: [
      ["Headless CMS Architecture", "Implementations using Sanity or Contentful, allowing your technical team to structure complex product relationships.", "CMS", "Data", "Speed"],
      ["Advanced Search Interfaces", "Algolia or Elasticsearch integrations allowing lightning-fast filtering by properties, applications, and regulatory compliance.", "Search", "React", "UX"],
      ["PIM Integrations", "Secure middleware that syncs your website catalogue directly with your Product Information Management (PIM) system.", "APIs", "Data", "Sync"],
      ["Dynamic Property Tables", "React components that cleanly display complex chemical properties (viscosity, pH, density) based on the user's selected region.", "React", "UI", "Formatting"]
    ]
  },
  "safety-and-technical-resources": {
    metaTitle: "Safety & Technical Resources",
    eyebrow: "Compliance",
    h1: "Digital hubs for SDS and technical data.",
    lead: "We build secure, searchable repositories for Safety Data Sheets (SDS), Certificates of Analysis (CoA), and technical bulletins, ensuring regulatory compliance and easy customer access.",
    status: "Resource Centers",
    points: [
      "Automated document generation and retrieval systems for critical compliance paperwork",
      "Regional filtering to ensure customers access the correct SDS for their specific jurisdiction (REACH, OSHA)",
      "Secure portals for downloading batch-specific Certificates of Analysis (CoA)"
    ],
    proof: [
      ["01 · Regulatory Compliance", "Ensure customers always have the latest legally required safety data."],
      ["02 · Reduced Admin", "Stop customer service from spending hours emailing CoAs to clients."],
      ["03 · Version Control", "Automatically archive old SDS versions while keeping the current one live."],
      ["04 · Batch Traceability", "Allow customers to enter a lot number and instantly download its CoA."]
    ],
    problemsIntro: {
      eyebrow: "When compliance is manual",
      asideLead: "Emailing safety documents manually is a massive legal and operational liability.",
      title: "Document friction slows down the supply chain.",
      mainLead: "The chemical industry runs on documentation. If a truck arrives at a customer site but the Safety Data Sheet is missing, the load gets rejected. If your customer service team is manually pulling CoAs from a shared drive and emailing them, you are wasting resources and risking compliance failures."
    },
    problems: [
      ["Outdated SDS Usage", "A customer relies on an old SDS downloaded two years ago, unaware that the hazard classification recently changed."],
      ["CoA Bottlenecks", "Customers cannot receive their shipments because the QA department is backlogged processing manual CoA requests."],
      ["Regional Confusion", "A European buyer accidentally downloads a US-formatted SDS, leading to compliance issues at their facility."]
    ],
    deliverablesIntro: {
      title: "Automated compliance delivery.",
      lead: "We engineer systems that make critical safety and quality documents instantly accessible."
    },
    deliverables: [
      ["Document Repositories", "Searchable, version-controlled databases specifically built to handle thousands of technical PDFs.", "Database", "Search", "Archiving"],
      ["ERP / LIMS Integration", "Middleware that automatically pulls CoAs directly from the Lab Information Management System as soon as a batch is released.", "Integration", "APIs", "LIMS"],
      ["Lot Number Search", "Custom interfaces where customers can type in a batch number and retrieve the exact QA documentation for that specific run.", "UX", "Search", "Compliance"],
      ["Regional Logic Rules", "Systems that detect a user's location or account settings to automatically serve the correct jurisdictional document (e.g., GHS vs. CLP).", "Logic", "Routing", "Legal"]
    ]
  },
  "samples-and-technical-sales": {
    metaTitle: "Samples & Technical Sales",
    eyebrow: "Sales Enablement",
    h1: "Accelerate the technical sales cycle.",
    lead: "We engineer workflows that allow R&D teams to request product samples, track formulation testing, and collaborate directly with your technical sales engineers.",
    status: "Sales Workflows",
    points: [
      "Streamlined sample request forms capturing end-use applications and required volumes",
      "Internal workflows for sample approval, lab dispatch, and hazardous shipping compliance",
      "Post-sample follow-up automation to track the success of formulation trials"
    ],
    proof: [
      ["01 · Faster Approvals", "Route sample requests instantly to the correct regional technical manager."],
      ["02 · Lab Visibility", "Give the R&D lab a clear queue of samples to mix and dispatch."],
      ["03 · ROI Tracking", "Connect sample dispatch data to closed-won revenue in your CRM."],
      ["04 · Feedback Loops", "Automatically prompt customers for trial results after delivery."]
    ],
    problemsIntro: {
      eyebrow: "When sampling is unmanaged",
      asideLead: "Sending expensive chemical samples into a black hole hurts your bottom line.",
      title: "Disconnected sample processes lose deals.",
      mainLead: "In the chemical industry, selling often starts with a physical sample. When requests are taken over the phone, emailed to the lab, and shipped without tracking, technical sales reps lose visibility. They don't know when the sample arrived, and they forget to follow up, resulting in lost formulation opportunities."
    },
    problems: [
      ["Lost Requests", "A sample request gets buried in a lab manager's inbox, and the prospect chooses a competitor who shipped faster."],
      ["Zero Traceability", "Sales reps have no idea if the sample they requested actually shipped or was received by the customer's R&D team."],
      ["Poor Follow-up", "Thousands of dollars in samples are sent out monthly, but there is no system to track which trials resulted in bulk orders."]
    ],
    deliverablesIntro: {
      title: "Digital formulation workflows.",
      lead: "We build systems that turn sample requests into a structured, trackable sales pipeline."
    },
    deliverables: [
      ["Sample Request Portals", "Gated forms for prospects to request specific grades, securely capturing application data and regulatory requirements.", "Forms", "UX", "Leads"],
      ["Lab Dispatch Workflows", "Internal dashboards for the lab to view approved requests, print hazmat labels, and log tracking numbers.", "Dashboards", "Logistics", "Operations"],
      ["CRM Integration", "Middleware that automatically logs sample requests, dispatch statuses, and tracking links directly onto the account record in Salesforce or HubSpot.", "APIs", "CRM", "Sales"],
      ["Automated Follow-up Engines", "Email logic that triggers check-ins based on the delivery date, prompting the customer to report on their formulation trial.", "Automation", "Email", "Conversion"]
    ]
  },
  "distributor-and-customer-portals": {
    metaTitle: "Distributor & Customer Portals",
    eyebrow: "B2B Commerce",
    h1: "Digitize bulk chemical ordering.",
    lead: "We build secure B2B portals where distributors can place bulk orders, track hazardous freight logistics, and download batch-specific quality documents.",
    status: "Customer Portals",
    points: [
      "Custom B2B e-commerce engines designed for the complexities of bulk chemical inputs (totes, IBCs, tankers)",
      "Automated logistics calculations for dangerous goods, compatibility rules, and freight surcharges",
      "Seamless integration with legacy ERP systems (SAP, JD Edwards, NetSuite) for live pricing and inventory"
    ],
    proof: [
      ["01 · Contract Pricing", "Ensure every distributor sees their exact negotiated tier pricing."],
      ["02 · Inventory Visibility", "Customers can see live warehouse stock before placing bulk orders."],
      ["03 · Faster Ordering", "Replace faxed purchase orders with a streamlined digital cart."],
      ["04 · Self-Serve Admin", "Customers can download invoices and CoAs without calling support."]
    ],
    problemsIntro: {
      eyebrow: "When B2B ordering is manual",
      asideLead: "Processing hazardous bulk orders via email attachments is slowing you down.",
      title: "Complex pricing and hazmat rules break standard e-commerce.",
      mainLead: "Chemical supply chains are notoriously complex. Standard Shopify or Magento stores cannot handle the reality of the sector: customer-specific pricing tiers, complex volume rebates, hazardous goods segregation, and bulk packaging rules. When ordering is manual, your customer service team becomes an expensive bottleneck."
    },
    problems: [
      ["Order Entry Errors", "A customer service rep miskeys a chemical grade from an email, resulting in the wrong formulation being shipped to a manufacturing plant."],
      ["Logistics Failures", "An order is accepted but later rejected by logistics because incompatible dangerous goods were placed on the same manifest."],
      ["Stockouts", "Distributors place orders blindly without knowing if the product is actually in the tank, leading to backorder frustration."]
    ],
    deliverablesIntro: {
      title: "Custom B2B commerce engines.",
      lead: "We build bespoke ordering platforms that understand the specific business logic of chemical manufacturing."
    },
    deliverables: [
      ["Custom Pricing Engines", "Logic layers that query the ERP in real-time to display the correct price based on the logged-in customer's contract.", "Logic", "Pricing", "APIs"],
      ["Dangerous Goods Calculators", "Checkout logic that automatically checks UN numbers and packing groups to prevent incompatible shipping combinations.", "Hazmat", "Math", "Cart"],
      ["ERP Middleware", "Secure Node.js translation layers that securely read/write orders directly into SAP without exposing the core database.", "Integration", "Node.js", "ERP"],
      ["Self-Serve Dashboards", "React-based interfaces where users can view order history, track tanker deliveries, and download invoices.", "UX", "Dashboards", "React"]
    ]
  },
  "quality-and-operations-dashboards": {
    metaTitle: "Quality & Operations Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visibility across the chemical supply chain.",
    lead: "We aggregate data from LIMS (Laboratory Information Management Systems), ERPs, and plant sensors into executive dashboards tracking yield, quality control, and safety metrics.",
    status: "Operations Dashboards",
    points: [
      "Unified BI dashboards combining plant production data, lab quality results, and sales forecasts",
      "Real-time tracking of First Pass Yield (FPY), off-spec batches, and overall equipment effectiveness (OEE)",
      "Predictive analytics to identify supply chain bottlenecks or raw material shortages"
    ],
    proof: [
      ["01 · Single Source of Truth", "Consolidate your ERP, LIMS, and plant data into one executive view."],
      ["02 · Quality Visibility", "Instantly see the rate of off-spec production across all regional plants."],
      ["03 · Supply Chain Agility", "Move raw materials proactively based on live demand and transit times."],
      ["04 · Automated Board Packs", "Turn disparate operational data into polished executive reports instantly."]
    ],
    problemsIntro: {
      eyebrow: "When executives fly blind",
      asideLead: "You can't manage a global chemical operation looking at last month's spreadsheets.",
      title: "Data silos hide the reality of production.",
      mainLead: "Chemical manufacturing leaders are forced to make high-stakes operational and safety decisions with fragmented data. If your production data is in SAP, your quality data is in a legacy LIMS, and your safety incidents are in a spreadsheet, you cannot react fast enough to process deviations or margin pressure."
    },
    problems: [
      ["Hidden Quality Issues", "A specific plant is consistently producing off-spec batches, but the trend isn't visible until the end-of-month QA report."],
      ["Margin Squeeze", "Raw material costs spike, but the impact on final product margins isn't calculated until the batches are already sold."],
      ["Manual Reporting Burden", "Analysts spend weeks manually extracting and merging data from different plant systems just to build the quarterly yield report."]
    ],
    deliverablesIntro: {
      title: "Command centers for chemical leaders.",
      lead: "We engineer data aggregation platforms that give leadership the real-time insights needed to protect margins and quality."
    },
    deliverables: [
      ["Executive Scorecards", "High-level visual dashboards tracking KPIs like First Pass Yield, safety incident rates, and production volumes.", "BI", "Dashboards", "Metrics"],
      ["Data Warehousing", "Pipelines that extract data from disparate proprietary systems (LIMS, ERP, SCADA) and normalize it in a cloud data warehouse.", "ETL", "Cloud", "Data"],
      ["Process Analytics", "Visual tools to chart batch variations and compare performance across different reactor lines or facilities.", "DataViz", "Analytics", "React"],
      ["Automated Reporting", "Dynamic engines to instantly generate branded PDF or email summaries for plant managers and executives.", "Reporting", "PDFs", "Automation"]
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
