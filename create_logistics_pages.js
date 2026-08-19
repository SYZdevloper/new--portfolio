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
                            <p className="eyebrow">Featured Logistics Platform</p>
                            <h2>Digitizing freight operations.</h2>
                        </div>
                        <p>See how we helped a national logistics provider replace manual spreadsheets with a custom quoting engine and tracking portal, drastically reducing customer service calls while increasing lane profitability.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Logistics Tech</span>
                                <span>Freight & Tracking</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/logistics-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From quote to proof of delivery.</h2>
                                <p>We developed a custom portal that integrates with their Transportation Management System (TMS). Shippers can now generate live LTL freight quotes, book the load, and track the truck in real-time without ever picking up the phone.</p>
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
                        <h2 id="faq-title">Common questions about logistics tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with our TMS or WMS?</summary>
                            <p>We build secure API middleware to connect your headless frontend directly to industry-standard systems like MercuryGate, Manhattan, or custom legacy AS400 databases. This ensures live rates, inventory, and tracking.</p>
                        </details>
                        <details>
                            <summary>Can you automate our quoting process?</summary>
                            <p>Yes. We build custom calculation engines that factor in dimensional weight, lane density, fuel surcharges, and customer-specific tariffs to generate instant, accurate quotes on the web.</p>
                        </details>
                        <details>
                            <summary>Do you build portals for external carriers and owner-operators?</summary>
                            <p>Yes. We build secure B2B portals where external drivers can view available loads, submit bids, upload Proof of Delivery (POD) documents, and track their settlements.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other logistics capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/freight-and-capacity-discovery/"><div><small>Discovery</small><h3>Capacity Discovery</h3><p>Showcase network strength.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/quotes-booking-and-dispatch/"><div><small>Revenue</small><h3>Quoting & Booking</h3><p>Digitize the freight sale.</p></div><b>Explore quoting ↗</b></a>
                        <a className="related-card" href="/services/tracking-and-customer-portals/"><div><small>Service</small><h3>Customer Portals</h3><p>Self-serve tracking.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/supply-chain-dashboards/"><div><small>Operations</small><h3>Supply Chain BI</h3><p>Visibility across the network.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your logistics <br />and supply chain operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From automated freight quoting engines to real-time tracking portals and carrier management dashboards, we build software that drives efficiency across the supply chain.</p>
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
  "freight-and-capacity-discovery": {
    metaTitle: "Freight & Capacity Discovery",
    eyebrow: "Network Discovery",
    h1: "Showcase your supply chain capabilities.",
    lead: "We design high-performance digital platforms for 3PLs, carriers, and freight forwarders that clearly communicate network capacity, specialized equipment, and lane coverage to prospective shippers.",
    status: "Logistics Websites",
    points: [
      "Interactive network maps showing distribution centers, ports, and primary freight lanes",
      "Dynamic filtering for specialized equipment (reefer, flatbed, hazmat)",
      "Headless CMS setups allowing marketing teams to update lane capabilities instantly"
    ],
    proof: [
      ["01 · Brand Trust", "Digital experiences that convey reliability and scale to enterprise shippers."],
      ["02 · Lead Qualification", "Ensure prospects understand your exact capacity before requesting a quote."],
      ["03 · SEO Optimized", "Structure that ranks higher for specific regional lane and equipment searches."],
      ["04 · Marketing Agility", "Empower your team to highlight new routes or facilities without developer help."]
    ],
    problemsIntro: {
      eyebrow: "When digital fails the network",
      asideLead: "If a shipper can't tell if you run reefers in Texas, they won't ask for a quote.",
      title: "Poor digital presence costs you enterprise contracts.",
      mainLead: "Logistics is highly competitive. If an enterprise shipper lands on an outdated website with vague descriptions of your fleet and a generic 'Contact Us' form, they will bounce. They need immediate confidence that you have the specific capacity and geographic coverage they require."
    },
    problems: [
      ["Vague Capabilities", "Shippers bounce because they can't easily find a map of your service areas or a list of your specialized equipment."],
      ["Slow Performance", "Your website feels outdated and sluggish, undermining trust in your technical ability to handle complex freight."],
      ["Developer Bottlenecks", "Marketing is unable to announce a newly acquired warehouse or transport lane without waiting weeks for IT."]
    ],
    deliverablesIntro: {
      title: "Digital flagships for logistics.",
      lead: "We build decoupled frontend experiences that prioritize clear capability communication and speed."
    },
    deliverables: [
      ["Headless Architecture", "Next.js frontends connected to Sanity or Contentful, ensuring the site is lightning fast and highly secure.", "React", "Headless", "Speed"],
      ["Interactive Network Maps", "Custom Mapbox integrations visualizing your hubs, lanes, and real-time network density.", "Maps", "UX", "Data"],
      ["Equipment Catalogues", "Structured databases detailing trailer dimensions, weight capacities, and compliance certifications.", "CMS", "Data", "UX"],
      ["Global Edge Hosting", "Deployment on Vercel to ensure your site loads instantly for global supply chain managers.", "DevOps", "Performance", "Scale"]
    ]
  },
  "quotes-booking-and-dispatch": {
    metaTitle: "Quotes, Booking & Dispatch",
    eyebrow: "Revenue",
    h1: "Digitize the freight sale.",
    lead: "We engineer custom quoting engines and booking flows that integrate directly with your TMS, allowing shippers to generate live rates based on dimensional weight and lane density.",
    status: "Quoting Engines",
    points: [
      "Custom calculation engines factoring in class, weight, fuel surcharges, and accessorials",
      "Live API integrations with your Transportation Management System (TMS) for instant booking",
      "Digital Bill of Lading (BOL) generation and dispatch automation"
    ],
    proof: [
      ["01 · Faster Conversions", "Turn a 2-hour email quoting process into a 10-second web transaction."],
      ["02 · Reduced Admin", "Stop your staff from manually re-keying web quotes into the TMS."],
      ["03 · Accurate Pricing", "Guarantee that complex tariffs and fuel surcharges are applied correctly."],
      ["04 · 24/7 Operations", "Allow shippers to quote and book freight even when your office is closed."]
    ],
    problemsIntro: {
      eyebrow: "When quoting is manual",
      asideLead: "If it takes you an hour to quote a lane, another broker already won the load.",
      title: "Manual quoting destroys margin and speed.",
      mainLead: "Freight moves fast. If a shipper has to email a spreadsheet of dimensions, wait for your team to check the routing guide, and then wait for an emailed PDF quote, they will simply use a digital broker instead. Manual quoting limits your volume and burns out your sales team."
    },
    problems: [
      ["Slow Response Times", "Customers request a quote, but your team takes hours to calculate tariffs and capacity manually."],
      ["Data Entry Errors", "Staff manually type dimensions from an email into the TMS, resulting in incorrect billing or equipment mismatches."],
      ["Lost Off-Hours Revenue", "You lose bids on weekend or evening freight because your quoting process requires human intervention."]
    ],
    deliverablesIntro: {
      title: "Automated freight commerce.",
      lead: "We engineer quoting engines that handle the complex math of logistics instantly."
    },
    deliverables: [
      ["Custom Quoting Frontends", "Building bespoke React interfaces where shippers input dimensions, class, and zip codes to instantly see rates.", "UX", "React", "Conversion"],
      ["TMS API Middleware", "Developing secure Node.js layers that translate quote requests between the modern frontend and legacy TMS databases (e.g., MercuryGate, McLeod).", "APIs", "Integration", "Logic"],
      ["Complex Tariff Logic", "Ensuring that dimensional weight rules, specialized accessorials (liftgate, inside delivery), and customer-specific discounts are perfectly calculated.", "Logic", "Pricing", "Rates"],
      ["Digital Dispatch Workflows", "Automating the creation of the BOL and instantly pushing the booked load into the dispatch queue.", "Operations", "Automation", "Workflow"]
    ]
  },
  "carrier-and-supplier-portals": {
    metaTitle: "Carrier & Supplier Portals",
    eyebrow: "B2B Operations",
    h1: "Streamline carrier relations.",
    lead: "We engineer secure B2B portals where external carriers, owner-operators, and warehouse partners can view available loads, submit bids, and upload compliance documents.",
    status: "Carrier Portals",
    points: [
      "Load board interfaces for carriers to view, bid on, or instantly 'Buy It Now' for available freight",
      "Digital document management for insurance certificates, W-9s, and Proof of Delivery (POD) uploads",
      "Automated settlement dashboards where carriers can track their payments and submit invoices"
    ],
    proof: [
      ["01 · Operational Efficiency", "Stop playing phone tag with dispatchers to cover a load."],
      ["02 · Faster Billing", "Digital POD uploads mean you can invoice the shipper days faster."],
      ["03 · Compliance Control", "Automatically block carriers from booking loads if their insurance is expired."],
      ["04 · Carrier Loyalty", "Carriers prefer working with brokers who offer transparent, easy-to-use digital tools."]
    ],
    problemsIntro: {
      eyebrow: "When B2B communication is messy",
      asideLead: "Managing 500 owner-operators via text message is a disaster waiting to happen.",
      title: "Disorganized operations cause supply chain chaos.",
      mainLead: "Running a 3PL or brokerage involves coordinating with hundreds of external carriers. When insurance docs are lost in spam folders, or a driver is begging your accounts payable team for payment status, your internal team is drowning in admin instead of covering freight."
    },
    problems: [
      ["Missing Paperwork", "A driver loses the physical BOL, delaying the entire invoicing cycle by weeks."],
      ["Check Calls", "Your track-and-trace team spends all day calling drivers just to ask 'Where are you?'"],
      ["Compliance Risks", "You accidentally dispatch a load to a carrier whose safety rating was downgraded yesterday."]
    ],
    deliverablesIntro: {
      title: "Centralized carrier operations.",
      lead: "We build secure B2B environments that professionalize the relationship between brokers and carriers."
    },
    deliverables: [
      ["Load Board Dashboards", "API integrations pulling live unassigned freight from the TMS, allowing carriers to view and bid on matching lanes.", "Integration", "Dashboards", "Data"],
      ["Document Vaults", "Secure, mobile-friendly upload portals where drivers can snap a photo of a POD and instantly attach it to the TMS load file.", "Mobile", "Integration", "Operations"],
      ["Settlement Portals", "Custom interfaces where carriers can view the payment status of past loads and opt-in for 'Quick Pay' discounts.", "Finance", "Logic", "UX"],
      ["Identity & Compliance (CIAM)", "Secure login flows connected to RMIS or SaferWatch APIs to ensure only active, compliant carriers can access the portal.", "Security", "Auth", "B2B"]
    ]
  },
  "tracking-and-customer-portals": {
    metaTitle: "Tracking & Customer Portals",
    eyebrow: "Service",
    h1: "Self-serve visibility for shippers.",
    lead: "We build secure portals where your customers can track active freight, download invoices, view historical lane analytics, and manage their shipping address books.",
    status: "Customer Portals",
    points: [
      "Visual track-and-trace dashboards integrating ELD/GPS data for real-time truck locations",
      "Self-serve invoice retrieval and statement downloads connected directly to your ERP",
      "Automated milestone notifications (Picked Up, In Transit, Delivered) via email or SMS"
    ],
    proof: [
      ["01 · Reduced Support Calls", "Customers can see exactly where their freight is without calling your team."],
      ["02 · Faster Payments", "Make it incredibly easy for clients to download invoices and pay balances digitally."],
      ["03 · Higher Retention", "Shippers stick with logistics partners who provide transparent, modern digital experiences."],
      ["04 · Centralized Data", "A single source of truth for all historical BOLs, PODs, and freight claims."]
    ],
    problemsIntro: {
      eyebrow: "When service is analog",
      asideLead: "Your customer service team shouldn't be a human tracking number.",
      title: "Lack of visibility frustrates modern shippers.",
      mainLead: "Enterprise shippers expect the same tracking visibility they get from Amazon. If they have to call your office to find out if a critical LTL shipment has been delivered, or email accounting for a copy of last month's invoice, they view your operation as outdated."
    },
    problems: [
      ["Tracking Blind Spots", "Customers are angry because they receive no updates between 'Dispatched' and 'Delivered'."],
      ["Invoice Bottlenecks", "Your finance team wastes hours every week pulling PDFs from the billing system and emailing them to clients."],
      ["Lost Documents", "Shippers can't find the signed POD they need to process a claim, leading to frustrated emails."]
    ],
    deliverablesIntro: {
      title: "Comprehensive shipper portals.",
      lead: "We engineer secure dashboards that give your customers complete control over their logistics data."
    },
    deliverables: [
      ["Visual Tracking Maps", "Integrating with ELD providers (like Samsara or Project44) to show a live map pin of the truck's location.", "Maps", "APIs", "Tracking"],
      ["Invoice & Statement Portals", "API integrations pulling live financial data, allowing clients to view and download historical billing PDFs.", "Integration", "Finance", "ERP"],
      ["Automated Notifications", "Transactional email and SMS triggers for key shipment milestones or unavoidable delays.", "Comms", "Automation", "UX"],
      ["Document Repositories", "Secure directories where the shipper can always access past BOLs, PODs, and customs documentation.", "Data", "Storage", "UX"]
    ]
  },
  "supply-chain-dashboards": {
    metaTitle: "Supply Chain Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visibility across the logistics network.",
    lead: "We aggregate data from your TMS, WMS, and accounting software to provide real-time visibility into lane profitability, carrier performance, and warehouse efficiency.",
    status: "Operations Analytics",
    points: [
      "Unified BI dashboards tracking core metrics (Margin per Load, On-Time Delivery, Dwell Time)",
      "Carrier scorecarding to identify which partners are consistently late or causing claims",
      "Real-time tracking of warehouse metrics like picks per hour and dock door utilization"
    ],
    proof: [
      ["01 · Live Decision Making", "Adjust pricing strategies instantly based on real-time lane capacity and margin data."],
      ["02 · Carrier Optimization", "Stop giving freight to carriers who consistently fail your On-Time Service Level Agreements (SLAs)."],
      ["03 · Yield Protection", "Track which specific customers or lanes are actually driving the highest profit margin."],
      ["04 · Automated Reporting", "Eliminate the days spent manually merging TMS and accounting exports in Excel."]
    ],
    problemsIntro: {
      eyebrow: "When logistics data is siloed",
      asideLead: "You can't manage a national supply chain looking at fragmented spreadsheets.",
      title: "Data silos hide true operational profitability.",
      mainLead: "Logistics executives are forced to make strategic decisions with fragmented data. If load data is in the TMS, warehouse data is in the WMS, and financials are in QuickBooks, calculating the true profitability of a specific customer account or identifying a failing carrier is nearly impossible."
    },
    problems: [
      ["Hidden Margin Erosion", "Management doesn't realize that a specific high-volume customer is actually unprofitable due to constant accessorials and detention time."],
      ["Carrier Blind Spots", "You continue using a carrier who is constantly late because management can't easily view aggregated on-time performance data."],
      ["Reporting Fatigue", "Analysts spend weeks manually extracting and merging data from different regional systems to build the monthly board pack."]
    ],
    deliverablesIntro: {
      title: "Command centers for supply chain executives.",
      lead: "We engineer data aggregation platforms that give leadership the real-time insights needed to protect margins and optimize freight flows."
    },
    deliverables: [
      ["Executive Scorecards", "High-level visual dashboards tracking KPIs like Gross Margin, Revenue per Truck, and overall On-Time In-Full (OTIF) rates.", "BI", "Dashboards", "Metrics"],
      ["Data Warehousing", "Pipelines that extract data from disparate logistics systems (TMS, WMS, ELD) and normalize it in a cloud data warehouse.", "ETL", "Cloud", "Data"],
      ["Cost-to-Serve Analytics", "Visual tools to track true customer profitability by factoring in claims, detention time, and support tickets.", "Analytics", "Data", "Finance"],
      ["Automated P&L Reporting", "Dynamic engines to instantly generate branded PDF or email summaries for branch managers and ownership groups.", "Reporting", "PDFs", "Automation"]
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
