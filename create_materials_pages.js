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
                            <p className="eyebrow">Featured Materials Platform</p>
                            <h2>Digitizing the specification lifecycle.</h2>
                        </div>
                        <p>See how we helped a national building materials manufacturer build a headless product platform that connects digital CAD libraries directly to architect sample requests and distributor inventory.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Manufacturing Tech</span>
                                <span>B2B Commerce & Specification</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/materials-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From architectural concept to site delivery.</h2>
                                <p>We developed a custom portal that allows architects to download BIM files and request physical samples, while seamlessly routing the resulting commercial quotes to the nearest authorized dealer based on real-time ERP inventory.</p>
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
                        <h2 id="faq-title">Common questions about building materials tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle complex product variations (colours, sizes, finishes)?</summary>
                            <p>We build structured databases (often via headless CMS like Sanity or integrated PIMs) that manage complex parent-child SKU relationships. This allows a user to view a 'product line' and then filter dynamically by specific finish or dimension without navigating through hundreds of separate pages.</p>
                        </details>
                        <details>
                            <summary>Can you integrate B2B ordering portals with legacy manufacturing ERPs?</summary>
                            <p>Yes. We build secure API middleware layers that sit between your modern dealer portal and legacy ERPs (like SAP, JD Edwards, or Epicor). This translates modern web cart requests into the specific formats your backend system requires for order entry and inventory deduction.</p>
                        </details>
                        <details>
                            <summary>Do you host CAD and BIM files directly on the platform?</summary>
                            <p>Yes. We build dedicated architectural resource libraries where specifiers can easily filter and download Revit, SketchUp, and AutoCAD files. We can also track these downloads to generate high-intent leads for your commercial sales team.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other manufacturing capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/product-and-material-catalogues/"><div><small>Discovery</small><h3>Material Catalogues</h3><p>Showcase technical specifications.</p></div><b>Explore catalogues ↗</b></a>
                        <a className="related-card" href="/services/specifier-and-design-tools/"><div><small>Technical Sales</small><h3>Design Tools</h3><p>Help architects specify products.</p></div><b>Explore tools ↗</b></a>
                        <a className="related-card" href="/services/samples-quotes-and-projects/"><div><small>Sales</small><h3>Sample Workflows</h3><p>Accelerate the specification cycle.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/dealer-and-distributor-portals/"><div><small>Commerce</small><h3>Dealer Portals</h3><p>Digitize bulk material ordering.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your materials <br />and manufacturing operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From complex technical catalogues for architects to B2B bulk ordering portals for dealers, we build software that drives efficiency across the construction supply chain.</p>
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
  "product-and-material-catalogues": {
    metaTitle: "Product & Material Catalogues",
    eyebrow: "Product Discovery",
    h1: "Showcase materials and technical specifications.",
    lead: "We design high-performance product catalogues for building material manufacturers, enabling architects and builders to easily find technical data, warranties, and installation guides.",
    status: "Material Catalogues",
    points: [
      "Advanced taxonomy and filtering for complex product lines (colors, finishes, dimensions)",
      "Dynamic linkage between base products and required installation accessories",
      "High-performance architecture optimized for architects browsing massive visual assets"
    ],
    proof: [
      ["01 · Technical Clarity", "Easily display fire ratings, acoustic data, and sustainability metrics."],
      ["02 · Advanced Filtering", "Builders can search by application, material type, or compliance standard."],
      ["03 · SEO Optimization", "Capture organic search intent for specific building materials."],
      ["04 · Single Source of Truth", "Centralize product data by integrating with your existing PIM."]
    ],
    problemsIntro: {
      eyebrow: "When technical data is buried",
      asideLead: "Architects won't wait days for a sales rep to email a product spec sheet.",
      title: "Hard-to-find information loses commercial specifications.",
      mainLead: "Building materials are highly technical. Whether an architect is looking for the fire rating of cladding or a builder needs an installation manual for roofing, they need instant access. If your website is just a list of disorganized PDFs, they will specify a competitor with better digital tools."
    },
    problems: [
      ["PDF Graveyards", "Your product data is locked inside hundreds of outdated PDFs that cannot be searched or filtered by specifiers."],
      ["Inconsistent Data", "The marketing website shows different product specifications than the internal ERP system or printed brochures."],
      ["Poor Searchability", "Customers cannot easily find products using industry-standard identifiers or specific project applications."]
    ],
    deliverablesIntro: {
      title: "Digital foundations for manufacturers.",
      lead: "We build platforms that put critical technical information at the fingertips of the construction industry."
    },
    deliverables: [
      ["Headless CMS Architecture", "Implementations using Sanity or Contentful, allowing your technical team to structure complex parent-child SKU relationships.", "CMS", "Data", "Speed"],
      ["Advanced Search Interfaces", "Algolia or Elasticsearch integrations allowing lightning-fast filtering by properties, applications, and regulatory compliance.", "Search", "React", "UX"],
      ["PIM Integrations", "Secure middleware that syncs your website catalogue directly with your Product Information Management (PIM) system.", "APIs", "Data", "Sync"],
      ["Dynamic Spec Sheets", "React components that dynamically generate printable technical data sheets (TDS) based on the exact product variant selected.", "React", "PDFs", "Formatting"]
    ]
  },
  "specifier-and-design-tools": {
    metaTitle: "Specifier & Design Tools",
    eyebrow: "Technical Sales",
    h1: "Help architects specify your products.",
    lead: "We build interactive design tools, CAD/BIM libraries, and visualizers that make it easy for architects and engineers to drop your products directly into their project specifications.",
    status: "Specifier Tools",
    points: [
      "Dedicated architectural resource libraries for Revit, SketchUp, and AutoCAD files",
      "Interactive product visualizers (e.g., mixing brick colors, mortar, and roofing styles)",
      "Automated specification writing tools that generate exact architectural text"
    ],
    proof: [
      ["01 · BIM Integration", "Ensure your products exist natively in the architect's CAD software."],
      ["02 · Visual Confidence", "Let clients see exactly how different product combinations will look."],
      ["03 · Lead Generation", "Capture high-intent leads when architects download specific BIM files."],
      ["04 · Error Reduction", "Automated spec-writers prevent contractors from substituting cheaper alternatives."]
    ],
    problemsIntro: {
      eyebrow: "When specifying is difficult",
      asideLead: "If an architect can't find your BIM file, you won't make it onto the drawings.",
      title: "Friction in the design phase costs you major projects.",
      mainLead: "Architects are under immense time pressure. When they are drawing up a multi-million dollar commercial project, they use the materials that are easiest to drop into their software. If you don't provide accessible, high-quality Revit files or clear specification text, you lose the project before it even goes to tender."
    },
    problems: [
      ["Missing Assets", "Your CAD files are outdated, poorly modeled, or hidden behind broken links on an old website."],
      ["Visual Ambiguity", "Clients struggle to visualize how a specific cladding profile will look across a massive facade."],
      ["Vague Specifications", "Architects write vague specs because you haven't provided clear, copy-pasteable specification text, leading to competitors winning the bid."]
    ],
    deliverablesIntro: {
      title: "Tools that win the specification.",
      lead: "We engineer digital assets that make specifying your products the path of least resistance."
    },
    deliverables: [
      ["BIM & CAD Libraries", "Searchable databases specifically built to host, version-control, and track downloads of massive architectural files.", "Database", "BIM", "LeadGen"],
      ["Product Visualizers", "Custom WebGL or React-based configurators allowing users to mix and match materials, colors, and textures on a 3D or 2D canvas.", "WebGL", "React", "UX"],
      ["Automated Spec Writers", "Logic engines that ask the architect a few questions about their project, then automatically generate the exact specification text required for the tender.", "Logic", "Forms", "Automation"],
      ["Calculators & Estimators", "Custom tools that calculate exact material quantities (e.g., linear meters of decking, bags of grout) based on project dimensions.", "Math", "React", "Sales"]
    ]
  },
  "samples-quotes-and-projects": {
    metaTitle: "Samples, Quotes & Projects",
    eyebrow: "Sales Workflows",
    h1: "Accelerate the specification cycle.",
    lead: "We engineer workflows that allow commercial clients to request physical samples, manage multi-stage quotes, and organize products by specific construction projects.",
    status: "Sales Workflows",
    points: [
      "Streamlined sample request carts allowing architects to bundle multiple materials for a mood board",
      "Project-builder tools allowing users to save and group products into specific commercial developments",
      "Seamless routing of commercial quotes to the appropriate regional sales manager or dealer"
    ],
    proof: [
      ["01 · Faster Dispatch", "Route sample requests instantly to the warehouse for fulfillment."],
      ["02 · Pipeline Visibility", "Give the sales team a clear view of which architects are requesting which materials."],
      ["03 · Project Organization", "Let architects organize their saved items by project (e.g., 'Sydney Airport Terminal')."],
      ["04 · Feedback Loops", "Automatically prompt architects for feedback after a sample is delivered."]
    ],
    problemsIntro: {
      eyebrow: "When sampling is unmanaged",
      asideLead: "Sending expensive material samples into a black hole hurts your bottom line.",
      title: "Disconnected sample processes lose commercial deals.",
      mainLead: "In the building materials industry, selling almost always requires a physical sample. When requests are taken over the phone, emailed to the warehouse, and shipped without tracking, your commercial reps lose visibility. They don't know when the sample arrived, and they forget to follow up, resulting in lost specifications."
    },
    problems: [
      ["Lost Requests", "A sample request gets buried in a warehouse inbox, and the architect specifies a competitor who shipped faster."],
      ["Zero Traceability", "Commercial reps have no idea if the expensive sample box they requested actually arrived at the architecture firm."],
      ["Poor Follow-up", "Thousands of dollars in samples are sent out monthly, but there is no system to track which ones resulted in commercial orders."]
    ],
    deliverablesIntro: {
      title: "Digital specification workflows.",
      lead: "We build systems that turn sample requests and project planning into a structured, trackable sales pipeline."
    },
    deliverables: [
      ["Sample Cart Experiences", "E-commerce style 'add to cart' functionality specifically designed for ordering free or paid material samples.", "UX", "Cart", "Leads"],
      ["Project Board Portals", "Secure areas where logged-in architects can save products, download aggregated technical data, and invite colleagues to collaborate.", "Portals", "React", "Collaboration"],
      ["CRM Integration", "Middleware that automatically logs sample requests, dispatch statuses, and tracking links directly onto the account record in Salesforce or HubSpot.", "APIs", "CRM", "Sales"],
      ["Quote Routing Engines", "Logic that takes a massive commercial cart and automatically routes the RFQ to the correct internal rep or external distributor based on territory.", "Routing", "Logic", "B2B"]
    ]
  },
  "dealer-and-distributor-portals": {
    metaTitle: "Dealer & Distributor Portals",
    eyebrow: "B2B Commerce",
    h1: "Digitize bulk material ordering.",
    lead: "We build secure B2B portals where trade dealers and distributors can place bulk orders, check live warehouse inventory, and download customer-specific pricing matrices.",
    status: "Dealer Portals",
    points: [
      "Custom B2B e-commerce engines designed for the complexities of building materials (pallets, packs, linear meters)",
      "Live integration with legacy ERP systems (SAP, JD Edwards, NetSuite) for real-time pricing and inventory",
      "Self-serve administrative tools for dealers to download invoices, track freight, and manage credit limits"
    ],
    proof: [
      ["01 · Contract Pricing", "Ensure every distributor sees their exact negotiated tier pricing."],
      ["02 · Inventory Visibility", "Dealers can see live warehouse stock before placing massive bulk orders."],
      ["03 · Faster Ordering", "Replace faxed purchase orders with a streamlined digital cart."],
      ["04 · Self-Serve Admin", "Dealers can download invoices and statements without calling support."]
    ],
    problemsIntro: {
      eyebrow: "When B2B ordering is manual",
      asideLead: "Processing massive commercial orders via email attachments is slowing you down.",
      title: "Complex pricing and logistics rules break standard e-commerce.",
      mainLead: "Building material supply chains are notoriously complex. Standard Shopify stores cannot handle the reality of the sector: customer-specific pricing tiers, complex volume rebates, pack-size rules (e.g., must order in pallets of 50), and variable freight based on massive weight. When ordering is manual, your customer service team becomes an expensive bottleneck."
    },
    problems: [
      ["Order Entry Errors", "A customer service rep miskeys a product code from an email, resulting in the wrong colored roofing being shipped to a site."],
      ["Freight Calculation Failures", "Standard carts can't calculate freight for three tons of bricks, meaning orders have to be processed offline."],
      ["Stockout Frustration", "Dealers place orders blindly without knowing if the product is actually in the warehouse, leading to backorders and angry builders."]
    ],
    deliverablesIntro: {
      title: "Custom B2B commerce engines.",
      lead: "We build bespoke ordering platforms that understand the specific business logic of materials manufacturing."
    },
    deliverables: [
      ["Custom Pricing Engines", "Logic layers that query the ERP in real-time to display the correct price based on the logged-in dealer's specific contract.", "Logic", "Pricing", "APIs"],
      ["Complex Unit Conversions", "Checkout logic that automatically converts 'square meters' requested by the user into the 'pallets and packs' required by the warehouse.", "Math", "Cart", "UX"],
      ["ERP Middleware", "Secure Node.js translation layers that securely read/write orders directly into SAP or Epicor without exposing the core database.", "Integration", "Node.js", "ERP"],
      ["Self-Serve Dashboards", "React-based interfaces where dealers can view order history, track flatbed deliveries, and download monthly statements.", "UX", "Dashboards", "React"]
    ]
  },
  "quality-and-supply-dashboards": {
    metaTitle: "Quality & Supply Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visibility across manufacturing and dispatch.",
    lead: "We aggregate data from factory ERPs, quality control systems, and logistics partners into executive dashboards tracking yield, defect rates, and delivery times.",
    status: "Operations Dashboards",
    points: [
      "Unified BI dashboards combining plant production data, QA lab results, and sales forecasts",
      "Real-time tracking of First Pass Yield (FPY), off-spec batches, and overall equipment effectiveness (OEE)",
      "Predictive analytics to identify supply chain bottlenecks or raw material shortages"
    ],
    proof: [
      ["01 · Single Source of Truth", "Consolidate your ERP, QA, and plant data into one executive view."],
      ["02 · Quality Visibility", "Instantly see the rate of manufacturing defects across all regional plants."],
      ["03 · Supply Chain Agility", "Move raw materials proactively based on live demand and transit times."],
      ["04 · Automated Board Packs", "Turn disparate operational data into polished executive reports instantly."]
    ],
    problemsIntro: {
      eyebrow: "When executives fly blind",
      asideLead: "You can't manage a national manufacturing operation looking at last month's spreadsheets.",
      title: "Data silos hide the reality of production.",
      mainLead: "Manufacturing leaders are forced to make high-stakes operational and safety decisions with fragmented data. If your production data is in an ancient AS400 system, your quality data is in a spreadsheet, and your logistics data is on a partner's portal, you cannot react fast enough to margin pressure."
    },
    problems: [
      ["Hidden Quality Issues", "A specific plant is consistently producing off-spec products, but the trend isn't visible until the end-of-month QA report."],
      ["Margin Squeeze", "Raw material costs spike, but the impact on final product margins isn't calculated until the batches are already sold."],
      ["Manual Reporting Burden", "Analysts spend weeks manually extracting and merging data from different plant systems just to build the quarterly yield report."]
    ],
    deliverablesIntro: {
      title: "Command centers for manufacturing leaders.",
      lead: "We engineer data aggregation platforms that give leadership the real-time insights needed to protect margins and quality."
    },
    deliverables: [
      ["Executive Scorecards", "High-level visual dashboards tracking KPIs like First Pass Yield, safety incident rates, and production volumes.", "BI", "Dashboards", "Metrics"],
      ["Data Warehousing", "Pipelines that extract data from disparate proprietary systems (ERP, SCADA) and normalize it in a cloud data warehouse.", "ETL", "Cloud", "Data"],
      ["Process Analytics", "Visual tools to chart batch variations and compare performance across different production lines or facilities.", "DataViz", "Analytics", "React"],
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
