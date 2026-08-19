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
                            <p className="eyebrow">Featured B2B Platform</p>
                            <h2>Modernizing wholesale distribution.</h2>
                        </div>
                        <p>See how we helped a national industrial distributor migrate from a legacy AS400 system to a modern headless B2B portal, allowing procurement teams to quick-order thousands of SKUs via CSV upload while retaining exact contract pricing.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>B2B Tech</span>
                                <span>Wholesale & Distribution</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/b2b-distribution-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Speed and scale for B2B buyers.</h2>
                                <p>We developed a custom ordering engine that integrates directly with their ERP, providing real-time visibility into complex freight calculations, warehouse inventory, and automated account-level volume discounts.</p>
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
                        <h2 id="faq-title">Common questions about B2B distribution tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle customer-specific tier pricing?</summary>
                            <p>We build secure API middleware that connects the frontend portal directly to your ERP (like SAP, NetSuite, or Epicor). When a B2B user logs in, the pricing engine queries the ERP in real-time to display their exact negotiated rate and volume discounts.</p>
                        </details>
                        <details>
                            <summary>Can you support massive catalogues with hundreds of thousands of SKUs?</summary>
                            <p>Yes. We use headless architecture and enterprise search tools like Algolia or Elasticsearch. This allows buyers to search massive databases instantly by part number, competitor cross-reference, or complex technical facets without slowing down the site.</p>
                        </details>
                        <details>
                            <summary>Do you support punchout catalogs (cXML/OCI)?</summary>
                            <p>Yes. We can integrate your B2B commerce platform with major eProcurement systems (like Ariba, Coupa, or Jaggaer) so your enterprise clients can shop your site directly from within their own purchasing software.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other distribution capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/b2b-catalogues-and-search/"><div><small>Discovery</small><h3>Catalogues & Search</h3><p>Find exact parts instantly.</p></div><b>Explore search ↗</b></a>
                        <a className="related-card" href="/services/accounts-pricing-and-quotations/"><div><small>Commerce</small><h3>Pricing & Quotes</h3><p>Digitize complex B2B pricing.</p></div><b>Explore pricing ↗</b></a>
                        <a className="related-card" href="/services/ordering-and-replenishment/"><div><small>Operations</small><h3>Quick Ordering</h3><p>Streamline bulk restocks.</p></div><b>Explore ordering ↗</b></a>
                        <a className="related-card" href="/services/customer-and-delivery-portals/"><div><small>Post-Purchase</small><h3>Delivery Portals</h3><p>Self-serve B2B tools.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your B2B wholesale <br />and distribution operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From lightning-fast search for massive catalogues to complex ERP pricing integrations and quick-order portals, we build software that drives B2B volume.</p>
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
  "b2b-catalogues-and-search": {
    metaTitle: "B2B Catalogues & Search",
    eyebrow: "Product Discovery",
    h1: "Advanced search for massive B2B catalogues.",
    lead: "We design high-performance B2B catalogues capable of indexing hundreds of thousands of SKUs, empowering procurement teams to find exact parts instantly via faceted search and cross-referencing.",
    status: "B2B Catalogues",
    points: [
      "Lightning-fast search engines (Algolia/Elasticsearch) built for huge datasets",
      "Competitor cross-referencing and exact part-number matching",
      "Advanced technical faceting allowing filtering by dimensions, material, or compliance"
    ],
    proof: [
      ["01 · Instant Results", "Sub-second search results across 500,000+ SKUs."],
      ["02 · Accurate Cross-Ref", "Allow buyers to search a competitor's SKU and find your equivalent."],
      ["03 · Technical Filtering", "Drill down by highly specific technical attributes (e.g., thread pitch, voltage)."],
      ["04 · High ROI", "When B2B buyers find the exact part faster, conversion rates skyrocket."]
    ],
    problemsIntro: {
      eyebrow: "When procurement is difficult",
      asideLead: "B2B buyers know exactly what they want; don't make them dig for it.",
      title: "Poor search destroys B2B sales volume.",
      mainLead: "B2B buyers aren't browsing for fun; they are executing a job. If they paste a specific manufacturer part number into your search bar and get zero results, or if they have to navigate through 12 clunky categories to find a widget, they will buy from a competitor whose site is easier to use."
    },
    problems: [
      ["Search Failures", "Your current eCommerce platform chokes when searching through hundreds of thousands of SKUs, causing page timeouts."],
      ["Rigid Querying", "If a buyer searches for a SKU but misses a single hyphen, the site returns '0 Results' instead of the correct product."],
      ["Poor Data Structure", "Buyers cannot filter products by the technical specifications they actually care about (size, material, rating)."]
    ],
    deliverablesIntro: {
      title: "Search engines for scale.",
      lead: "We engineer headless catalogues prioritizing speed, typo-tolerance, and deep technical filtering."
    },
    deliverables: [
      ["Enterprise Search Integration", "Implementing Algolia or Elasticsearch to handle massive, complex product indexes with instant response times.", "Search", "APIs", "Performance"],
      ["Cross-Reference Logic", "Building databases that map competitor SKUs or generic industry codes to your specific internal part numbers.", "Data", "Logic", "UX"],
      ["Headless Frontend Architecture", "Using Next.js to deliver lightning-fast, SEO-optimized catalogue pages that don't rely on a slow monolithic backend.", "React", "Next.js", "Speed"],
      ["PIM Syndication", "Connecting the frontend directly to your Product Information Management system (Akeneo, Inriver) to ensure data accuracy.", "Integration", "PIM", "Data"]
    ]
  },
  "accounts-pricing-and-quotations": {
    metaTitle: "Accounts, Pricing & Quotations",
    eyebrow: "B2B Commerce",
    h1: "Digitize complex B2B pricing and quotes.",
    lead: "We build secure portals that integrate directly with your ERP, ensuring logged-in customers see their exact negotiated tier pricing, volume breaks, and digital RFQ workflows.",
    status: "Pricing & RFQs",
    points: [
      "Real-time ERP integration to display customer-specific contract pricing automatically",
      "Dynamic volume discount tables encouraging higher Average Order Value (AOV)",
      "Digital Request For Quote (RFQ) workflows replacing messy email threads"
    ],
    proof: [
      ["01 · Contract Accuracy", "Eliminate pricing disputes by showing the exact ERP contract price."],
      ["02 · Faster Quotes", "Turn cart contents into a formal PDF quote with one click."],
      ["03 · Sales Efficiency", "Reps can build and send digital quotes on behalf of the customer."],
      ["04 · Punchout Ready", "Integrate pricing directly into your clients' eProcurement systems."]
    ],
    problemsIntro: {
      eyebrow: "When B2B pricing is manual",
      asideLead: "Relying on sales reps to quote every bulk order creates a massive bottleneck.",
      title: "Opaque pricing stops B2B buyers from self-serving.",
      mainLead: "Wholesale distribution runs on relationship pricing. If a loyal customer logs into your portal but only sees retail pricing, they won't buy. If they have to call a sales rep to confirm their specific discount tier, your customer service team becomes an expensive bottleneck to revenue."
    },
    problems: [
      ["Incorrect Pricing", "Standard eCommerce platforms can't handle the complexity of the 50 different pricing matrices stored in your ERP."],
      ["Quoting Chaos", "Procurement teams request quotes via email, leading to lost threads, delayed responses, and lost sales."],
      ["Manual Intervention", "Your team spends hours manually re-keying web orders into the ERP because the pricing didn't match the contract."]
    ],
    deliverablesIntro: {
      title: "Intelligent B2B commerce logic.",
      lead: "We engineer systems that understand and automate the complex realities of wholesale pricing."
    },
    deliverables: [
      ["ERP Pricing Middleware", "Secure API layers (Node.js) that query your legacy ERP (SAP, Epicor) in real-time to fetch the exact price for the authenticated user.", "Integration", "APIs", "Logic"],
      ["Digital RFQ Portals", "Custom interfaces where buyers can submit complex carts for pricing review, and sales reps can approve them digitally.", "Workflows", "UX", "Sales"],
      ["Sales Rep Impersonation", "Features allowing your sales team to log in 'as the customer' to build carts and verify pricing on their behalf.", "Auth", "Sales", "Support"],
      ["Tiered Volume Calculators", "Dynamic UI elements that clearly show buyers how much they will save if they order the next pallet size up.", "UX", "React", "Conversion"]
    ]
  },
  "ordering-and-replenishment": {
    metaTitle: "Ordering & Replenishment",
    eyebrow: "Sales Workflows",
    h1: "Streamline bulk ordering and restocks.",
    lead: "We engineer custom B2B cart experiences supporting quick-order pads, CSV uploads, barcode scanning, and automated subscription replenishment to make reordering effortless.",
    status: "B2B Ordering",
    points: [
      "Quick-order interfaces for buyers who already know their exact SKU numbers",
      "CSV bulk upload functionality allowing procurement to add 500 lines to a cart instantly",
      "Saved order templates and automated replenishment schedules for recurring stock"
    ],
    proof: [
      ["01 · Frictionless Reorders", "Reduce a 30-minute procurement task to a 2-minute digital process."],
      ["02 · Bulk Efficiency", "Buyers can upload a massive spreadsheet straight into the checkout flow."],
      ["03 · Reduced Errors", "Eliminate the mistakes that happen when customer service manually keys in faxed orders."],
      ["04 · Recurring Revenue", "Lock in sales with automated weekly or monthly replenishment carts."]
    ],
    problemsIntro: {
      eyebrow: "When B2B ordering is tedious",
      asideLead: "B2B buyers are ordering 200 items at a time, not browsing for one.",
      title: "Retail-style carts fail B2B procurement.",
      mainLead: "Standard eCommerce carts are designed for consumers buying a few items. If a procurement manager needs to order 300 different electrical components, forcing them to visit 300 individual product pages and click 'add to cart' is infuriating. They will simply email a spreadsheet instead, shifting the admin burden back to your team."
    },
    problems: [
      ["Manual Bulk Entry", "Your sales team spends hours re-typing massive purchase orders sent via email or fax."],
      ["Time-Consuming Carts", "Buyers complain that the website is too slow and difficult for large, complex weekly restock orders."],
      ["Lost Recurring Sales", "Customers forget to reorder consumables because there is no automated reminder or subscription system."]
    ],
    deliverablesIntro: {
      title: "High-volume ordering engines.",
      lead: "We build custom cart interfaces designed specifically for the speed and scale of wholesale procurement."
    },
    deliverables: [
      ["Quick-Order Pads", "Custom React interfaces where buyers can simply tab through SKU and Quantity fields, adding dozens of items in seconds.", "UX", "React", "Speed"],
      ["CSV Cart Uploaders", "Tools that parse a customer's Excel or CSV file, map the SKUs, and instantly populate a massive B2B cart.", "Logic", "Data", "Automation"],
      ["Order Template Portals", "Saved shopping lists allowing buyers to load their 'Weekly Restock' template and check out with two clicks.", "Portals", "UX", "Retention"],
      ["Barcode & Mobile Scanning", "Progressive Web Apps (PWAs) allowing warehouse staff to scan a shelf barcode and instantly add the item to a replenishment cart.", "Mobile", "Hardware", "PWA"]
    ]
  },
  "customer-and-delivery-portals": {
    metaTitle: "Customer & Delivery Portals",
    eyebrow: "Post-Purchase",
    h1: "Self-serve tools for B2B customers.",
    lead: "We build unified dashboards where clients can track complex freight deliveries, download invoices, pay outstanding account balances, and manage multi-site purchasing permissions.",
    status: "B2B Dashboards",
    points: [
      "Self-serve invoice retrieval and statement downloads connected directly to the ERP",
      "Account payment gateways allowing clients to settle net-30 balances via credit card or ACH",
      "Multi-tier account structures allowing a head office to manage purchasing budgets for regional branches"
    ],
    proof: [
      ["01 · Lower Support Costs", "Stop paying staff to email copies of old invoices to customers."],
      ["02 · Faster Payments", "Make it incredibly easy for clients to pay their outstanding account balances digitally."],
      ["03 · Delivery Transparency", "Track heavy LTL (Less Than Truckload) freight directly within the portal."],
      ["04 · Corporate Control", "Give procurement managers control over what their regional staff can buy."]
    ],
    problemsIntro: {
      eyebrow: "When account management is manual",
      asideLead: "Your accounting team shouldn't act as a customer service desk.",
      title: "Lack of self-serve tools suffocates operations.",
      mainLead: "Wholesale clients require constant administrative support. They need copies of old invoices for their accountants, they want to know where their freight is, and they need to manage which of their staff are allowed to make purchases. If your digital portal doesn't provide this, your phone lines will be permanently jammed."
    },
    problems: [
      ["Invoice Bottlenecks", "Your finance team wastes hours every week pulling PDFs from the ERP and emailing them to clients."],
      ["Rogue Purchasing", "A regional branch manager overspends because there are no digital budget controls or approval workflows in the portal."],
      ["Delayed Receivables", "Clients pay late because the process of executing a bank transfer is manual; they'd rather just click 'Pay Statement' online."]
    ],
    deliverablesIntro: {
      title: "Comprehensive B2B account portals.",
      lead: "We engineer secure dashboards that give wholesale clients complete control over their finances and operations."
    },
    deliverables: [
      ["Invoice & Statement Portals", "API integrations pulling live financial data from SAP or NetSuite, allowing clients to view and download historical PDFs.", "Integration", "Finance", "ERP"],
      ["Account Payment Gateways", "Integrating B2B payment processors (like Stripe or specialized B2B gateways) to allow instant settlement of account balances.", "Payments", "Security", "Fintech"],
      ["Corporate Role Management", "Custom identity structures allowing a 'Super Admin' client to set purchasing limits and approval workflows for their junior buyers.", "Auth", "Logic", "Security"],
      ["Freight Tracking Dashboards", "Integrating with major logistics and LTL carriers to provide visual delivery tracking for massive industrial orders.", "Logistics", "APIs", "Tracking"]
    ]
  },
  "distribution-dashboards": {
    metaTitle: "Distribution Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visibility across the distribution network.",
    lead: "We aggregate data from your WMS, ERP, and commerce platforms into executive dashboards tracking warehouse pick rates, freight costs, and B2B channel profitability.",
    status: "Operations Analytics",
    points: [
      "Unified BI dashboards tracking daily sales volume against warehouse capacity and pick rates",
      "Real-time visibility into freight costs and margin erosion across different delivery routes",
      "Predictive analytics to identify aging inventory and optimize purchasing cycles"
    ],
    proof: [
      ["01 · Single Source of Truth", "Consolidate your ERP, WMS, and B2B portal data into one executive view."],
      ["02 · Protect Margins", "Instantly see if soaring LTL freight costs are eroding the profitability of specific accounts."],
      ["03 · Warehouse Efficiency", "Track how many lines your warehouse staff are picking per hour in real-time."],
      ["04 · Automated Board Packs", "Turn disparate operational data into polished executive reports instantly."]
    ],
    problemsIntro: {
      eyebrow: "When distribution data is siloed",
      asideLead: "You can't optimize a massive distribution network looking at last month's spreadsheets.",
      title: "Fragmented data hides margin erosion.",
      mainLead: "Wholesale distribution operates on tight margins. If your sales data is in an eCommerce platform, your inventory is in a WMS, and your freight costs are in an ERP, you cannot accurately determine which clients and routes are actually profitable until it's too late."
    },
    problems: [
      ["Hidden Freight Costs", "You win a massive B2B order, but realize later that the complex freight requirements completely destroyed the margin."],
      ["Warehouse Bottlenecks", "Sales volume surges, but the warehouse falls behind on picking because management had no real-time visibility into the queue."],
      ["Reporting Fatigue", "Analysts spend weeks manually extracting and merging data from different systems just to build the quarterly profitability report."]
    ],
    deliverablesIntro: {
      title: "Command centers for distribution leaders.",
      lead: "We engineer data aggregation platforms that give leadership the real-time insights needed to protect margins and optimize fulfillment."
    },
    deliverables: [
      ["Executive Scorecards", "High-level visual dashboards tracking KPIs like Gross Margin Return on Inventory (GMROI), pick rates, and freight-to-sales ratios.", "BI", "Dashboards", "Metrics"],
      ["Data Warehousing", "Pipelines that extract data from disparate legacy systems (WMS, ERP, SCADA) and normalize it in a cloud data warehouse.", "ETL", "Cloud", "Data"],
      ["Cost-to-Serve Analytics", "Visual tools calculating the true profitability of specific B2B accounts by factoring in support tickets, returns, and specialized freight.", "Analytics", "Logic", "B2B"],
      ["Automated Reporting", "Dynamic engines to instantly generate branded PDF or email summaries for branch managers and executives.", "Reporting", "PDFs", "Automation"]
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
