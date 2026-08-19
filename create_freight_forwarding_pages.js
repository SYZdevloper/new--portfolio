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
                            <p className="eyebrow">Featured Freight Platform</p>
                            <h2>Digitizing the global supply chain.</h2>
                        </div>
                        <p>See how we helped a global freight forwarder build a custom customer portal connected directly to CargoWise, drastically reducing 'Where is my container?' phone calls and automating their multi-modal quoting process.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Freight Forwarding</span>
                                <span>CargoWise Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/freight-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Complete visibility, zero phone calls.</h2>
                                <p>We developed a secure portal where shippers can log in, view live AIS tracking of their ocean freight, submit customs documents, and pay invoices via Stripe—all syncing bidirectionally with the legacy freight management system.</p>
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
                        <h2 id="faq-title">Common questions about freight tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with CargoWise or other legacy forwarding systems?</summary>
                            <p>We build secure API middleware to connect your headless frontend directly to complex Freight Management Systems (FMS). This allows us to pull live tracking data, shipment statuses, and invoices without exposing the core database.</p>
                        </details>
                        <details>
                            <summary>Can you automate ocean and air quoting?</summary>
                            <p>Yes. Global quoting is incredibly complex due to fluctuating bunker adjustments, peak season surcharges, and local drayage. We build custom calculation engines that pull these variables to generate instant, accurate web quotes for shippers.</p>
                        </details>
                        <details>
                            <summary>Do you provide live map tracking for ocean freight?</summary>
                            <p>Yes. We integrate with visibility providers like Project44, FourKites, or direct AIS data streams to plot containers on an interactive global map within the customer portal.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other freight capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/freight-service-websites/"><div><small>Discovery</small><h3>Freight Websites</h3><p>Showcase global reach.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/rate-and-quotation-workflows/"><div><small>Revenue</small><h3>Quoting Workflows</h3><p>Automate complex pricing.</p></div><b>Explore quoting ↗</b></a>
                        <a className="related-card" href="/services/customer-booking-portals/"><div><small>Service</small><h3>Booking Portals</h3><p>Frictionless freight management.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/tracking-and-exception-visibility/"><div><small>Operations</small><h3>Exception Tracking</h3><p>Visibility across ocean & air.</p></div><b>Explore tracking ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your global <br />freight forwarding operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From automated multi-modal quoting engines to real-time ocean tracking portals and CargoWise integrations, we build software that drives efficiency across international borders.</p>
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
  "freight-service-websites": {
    metaTitle: "Freight Service Websites",
    eyebrow: "Network Discovery",
    h1: "Digitally showcase your global reach.",
    lead: "We design high-performance websites for freight forwarders and NVOCCs that clearly communicate global lane capabilities, multi-modal services, and compliance expertise.",
    status: "Forwarding Websites",
    points: [
      "Interactive global network maps showing primary trade lanes, agents, and warehousing nodes",
      "Specialized service pages detailing customs brokerage, project cargo, and cold chain expertise",
      "Headless CMS setups allowing marketing teams to launch new trade lane promotions instantly"
    ],
    proof: [
      ["01 · Brand Authority", "Digital experiences that convey global scale and reliability to major importers."],
      ["02 · Lead Qualification", "Ensure prospects understand your specific lane expertise before requesting a quote."],
      ["03 · Global SEO", "Structure that ranks higher for specific international trade route searches."],
      ["04 · Marketing Agility", "Empower your team to update compliance notices and tariffs without developer help."]
    ],
    problemsIntro: {
      eyebrow: "When digital fails global trade",
      asideLead: "If a shipper can't tell if you have agents in Shenzhen, they won't ask for a quote.",
      title: "Poor digital presence costs you enterprise importers.",
      mainLead: "International logistics requires deep trust. If a massive importer lands on an outdated website with vague descriptions of 'global services' and a generic contact form, they will bounce. They need immediate confidence in your specific trade lanes, customs expertise, and technical capabilities."
    },
    problems: [
      ["Vague Capabilities", "Shippers bounce because they can't easily find a map of your service areas or a list of your specialized certifications."],
      ["Slow Performance", "Your website feels outdated and sluggish, undermining trust in your technical ability to handle complex supply chains."],
      ["Developer Bottlenecks", "Marketing is unable to announce a new direct LCL consolidation service without waiting weeks for IT."]
    ],
    deliverablesIntro: {
      title: "Digital flagships for freight forwarders.",
      lead: "We build decoupled frontend experiences that prioritize clear capability communication and global speed."
    },
    deliverables: [
      ["Headless Architecture", "Next.js frontends connected to Sanity or Contentful, ensuring the site is lightning fast worldwide.", "React", "Headless", "Speed"],
      ["Interactive Network Maps", "Custom Mapbox integrations visualizing your global agent network, ports, and real-time trade lanes.", "Maps", "UX", "Data"],
      ["Compliance Catalogues", "Structured pages detailing customs brokerage services, Incoterms guides, and compliance certifications.", "CMS", "Data", "UX"],
      ["Global Edge Hosting", "Deployment on Vercel to ensure your site loads instantly whether the user is in LA or Singapore.", "DevOps", "Performance", "Scale"]
    ]
  },
  "rate-and-quotation-workflows": {
    metaTitle: "Rate & Quotation Workflows",
    eyebrow: "Conversion",
    h1: "Automate complex global quoting.",
    lead: "We engineer custom quoting engines that factor in ocean/air rates, customs duties, fuel surcharges (BAF), and drayage to provide instant, accurate global freight quotes.",
    status: "Quoting Engines",
    points: [
      "Custom calculation engines factoring in FCL/LCL volume, hazardous classes, and peak season surcharges",
      "Live API integrations with your Freight Management System (like CargoWise) for instant booking",
      "Automated PDF quote generation for complex, multi-modal project cargo"
    ],
    proof: [
      ["01 · Faster Conversions", "Turn a 24-hour email quoting process into a 2-minute web transaction."],
      ["02 · Reduced Admin", "Stop your staff from manually checking carrier portals to build a single quote."],
      ["03 · Accurate Pricing", "Guarantee that complex tariffs, BAF, and origin/destination charges are applied correctly."],
      ["04 · 24/7 Operations", "Allow shippers in different time zones to quote freight while your office is closed."]
    ],
    problemsIntro: {
      eyebrow: "When quoting is manual",
      asideLead: "If it takes you a day to quote a container from Shanghai, a digital forwarder already won the load.",
      title: "Manual quoting destroys margin and speed.",
      mainLead: "Global freight moves fast. If a shipper has to email a packing list, wait for your team to check ocean carrier rates, calculate drayage, and then wait for an emailed spreadsheet quote, they will simply use a digital-first forwarder like Flexport instead. Manual quoting limits your volume."
    },
    problems: [
      ["Slow Response Times", "Customers request a quote, but your team takes hours to calculate multi-modal tariffs and capacity manually."],
      ["Data Entry Errors", "Staff manually type dimensions from an email into the FMS, resulting in incorrect billing or space mismatches."],
      ["Lost Time Zone Revenue", "You lose bids on Asian imports because your quoting process requires a human awake in the US."]
    ],
    deliverablesIntro: {
      title: "Automated global commerce.",
      lead: "We engineer quoting engines that handle the complex math of international logistics instantly."
    },
    deliverables: [
      ["Custom Quoting Frontends", "Building bespoke React interfaces where shippers input dims, Incoterms, and ports to instantly see rates.", "UX", "React", "Conversion"],
      ["FMS API Middleware", "Developing secure Node.js layers that translate quote requests between the modern frontend and legacy FMS databases.", "APIs", "Integration", "Logic"],
      ["Complex Tariff Logic", "Ensuring that dimensional weight rules, specialized accessorials (chassis splits, pre-pulls), and customer-specific tariffs are calculated.", "Logic", "Pricing", "Rates"],
      ["Dynamic PDF Generators", "Engines that take the selected route and automatically generate a stunning, detailed PDF quote ready for the customer.", "Reporting", "PDFs", "Automation"]
    ]
  },
  "customer-booking-portals": {
    metaTitle: "Customer Booking Portals",
    eyebrow: "Digital Service",
    h1: "Frictionless freight management.",
    lead: "We build secure, self-serve portals where shippers can convert quotes into active bookings, upload commercial invoices, and manage packing lists entirely online.",
    status: "Shipper Portals",
    points: [
      "Self-serve dashboards allowing shippers to view active bookings, historical volumes, and account balances",
      "Digital document vaults for uploading Commercial Invoices, Packing Lists, and Certificates of Origin",
      "Automated ISF (Importer Security Filing) data collection forms connected directly to customs brokers"
    ],
    proof: [
      ["01 · Streamlined Operations", "Stop playing email ping-pong to collect customs documents."],
      ["02 · Faster Processing", "Digital document uploads mean your customs team can clear freight faster."],
      ["03 · Compliance Control", "Ensure all required fields for ISF filing are collected before a container is loaded."],
      ["04 · Customer Loyalty", "Shippers stick with forwarders who offer transparent, easy-to-use digital booking tools."]
    ],
    problemsIntro: {
      eyebrow: "When booking is messy",
      asideLead: "Managing 500 import containers via email attachments is a disaster waiting to happen.",
      title: "Disorganized operations cause supply chain chaos.",
      mainLead: "Running a freight forwarding operation involves coordinating massive amounts of documentation. When a Commercial Invoice is lost in a spam folder, or a shipper forgets to provide ISF details until the ship sails, your internal team is drowning in admin and the customer faces massive fines."
    },
    problems: [
      ["Missing Paperwork", "A shipper emails the wrong packing list, delaying customs clearance and causing demurrage fees."],
      ["Data Entry Burden", "Your operations team spends hours manually re-keying product details from a PDF into the customs software."],
      ["Fragmented Communication", "Important booking updates are lost across 20 different email threads between the shipper, agent, and carrier."]
    ],
    deliverablesIntro: {
      title: "Centralized shipper operations.",
      lead: "We build secure environments that professionalize the relationship between forwarders and importers."
    },
    deliverables: [
      ["Booking Dashboards", "API integrations pulling live booking data from CargoWise, allowing clients to view all active shipments in one place.", "Integration", "Dashboards", "Data"],
      ["Document Vaults", "Secure, structured upload portals where shippers attach specific documents directly to the digital shipment file.", "Cloud", "Integration", "Operations"],
      ["Customs Data Forms", "Interactive forms that validate HTS codes and ISF data before allowing the shipper to submit the booking.", "Logic", "Compliance", "UX"],
      ["Identity Management (CIAM)", "Secure, centralized login flows using Auth0 to ensure only authorized supply chain managers access sensitive trade data.", "Security", "Auth", "B2B"]
    ]
  },
  "tracking-and-exception-visibility": {
    metaTitle: "Tracking & Exception Visibility",
    eyebrow: "Operations",
    h1: "Real-time visibility across the ocean and air.",
    lead: "We integrate with global carrier APIs and AIS vessel tracking to provide your customers with live map visibility and automated alerts for rollovers, customs holds, or delays.",
    status: "Tracking Portals",
    points: [
      "Visual track-and-trace dashboards integrating AIS and API data for real-time vessel/flight locations",
      "Automated milestone notifications (Gated In, Departed, Customs Cleared) via email or SMS",
      "Exception management dashboards highlighting containers at risk of demurrage or detention"
    ],
    proof: [
      ["01 · Reduced Support Calls", "Customers can see exactly where their container is without emailing your team."],
      ["02 · Proactive Problem Solving", "Identify customs holds immediately before they result in massive storage fees."],
      ["03 · Higher Retention", "Shippers demand the same tracking visibility from forwarders that they get from UPS."],
      ["04 · Centralized Data", "A single source of truth for all historical ETAs, ATDs, and delivery proofs."]
    ],
    problemsIntro: {
      eyebrow: "When visibility is analog",
      asideLead: "Your operations team shouldn't be a human tracking number.",
      title: "Lack of visibility frustrates modern importers.",
      mainLead: "Enterprise supply chains require absolute precision. If an importer has to call your office to find out if a critical container was rolled, or wait for a daily Excel spreadsheet update, they view your operation as outdated and risky."
    },
    problems: [
      ["Tracking Blind Spots", "Customers are angry because they receive no updates between a vessel departing China and arriving in LA."],
      ["Demurrage Surprises", "A container sits at the port for five days because nobody realized customs had flagged it, resulting in massive fees."],
      ["Update Fatigue", "Your tracking team wastes hours every day manually checking carrier websites and emailing status updates to clients."]
    ],
    deliverablesIntro: {
      title: "Comprehensive tracking portals.",
      lead: "We engineer secure dashboards that give your customers complete control over their supply chain data."
    },
    deliverables: [
      ["Visual Tracking Maps", "Integrating with visibility providers (like Project44, FourKites) or direct AIS to show a live map pin of the vessel.", "Maps", "APIs", "Tracking"],
      ["Exception Alerting", "Logic engines that scan milestones and flag shipments that have missed their ETA or have been placed on customs hold.", "Logic", "Data", "Operations"],
      ["Automated Notifications", "Transactional email and webhook triggers for key shipment milestones or unavoidable delays.", "Comms", "Automation", "UX"],
      ["Supplier Milestones", "Interfaces allowing overseas factories to update 'Cargo Ready Dates', providing visibility before the freight even reaches the port.", "B2B", "Integration", "UX"]
    ]
  },
  "forwarding-operations-dashboards": {
    metaTitle: "Forwarding Operations Dashboards",
    eyebrow: "Executive Operations",
    h1: "Control the global supply chain.",
    lead: "We aggregate data from your Freight Management System (like CargoWise) to provide executives with live dashboards tracking lane margins, container dwell times, and demurrage risks.",
    status: "Operations Analytics",
    points: [
      "Unified BI dashboards tracking core metrics (TEU Volume, Yield per Container, Dwell Time) across all lanes",
      "Carrier scorecarding to identify which shipping lines are consistently rolling your cargo",
      "Real-time tracking of financial risks like accumulated demurrage and detention fees"
    ],
    proof: [
      ["01 · Live Decision Making", "Adjust routing strategies instantly based on port congestion and real-time margin data."],
      ["02 · Carrier Optimization", "Stop booking with carriers who consistently fail your transit time expectations."],
      ["03 · Yield Protection", "Track which specific customers or trade lanes are actually driving the highest profit margin."],
      ["04 · Automated Reporting", "Eliminate the days spent manually merging FMS and accounting exports in Excel."]
    ],
    problemsIntro: {
      eyebrow: "When forwarding data is siloed",
      asideLead: "You can't manage global logistics looking at fragmented spreadsheets.",
      title: "Data silos hide true operational profitability.",
      mainLead: "Forwarding executives are forced to make strategic decisions with fragmented data. If volume data is in CargoWise, exception data is in a tracking portal, and financials are in an ERP, calculating the true profitability of a specific customer account or identifying a failing trade lane is nearly impossible."
    },
    problems: [
      ["Hidden Margin Erosion", "Management doesn't realize that a specific high-volume importer is actually unprofitable due to constant exceptions and manual work."],
      ["Carrier Blind Spots", "You continue using an ocean carrier who constantly rolls cargo because management can't easily view aggregated performance data."],
      ["Reporting Fatigue", "Analysts spend weeks manually extracting and merging data from different regional systems to build the monthly board pack."]
    ],
    deliverablesIntro: {
      title: "Command centers for forwarding executives.",
      lead: "We engineer data aggregation platforms that give leadership the real-time insights needed to protect margins and optimize global trade."
    },
    deliverables: [
      ["Executive Scorecards", "High-level visual dashboards tracking KPIs like Gross Margin, TEUs moved, and overall On-Time performance.", "BI", "Dashboards", "Metrics"],
      ["Data Warehousing", "Pipelines that extract data from disparate logistics systems (FMS, Tracking APIs, ERP) and normalize it in a cloud data warehouse.", "ETL", "Cloud", "Data"],
      ["Cost-to-Serve Analytics", "Visual tools to track true customer profitability by factoring in claims, exception management time, and support tickets.", "Analytics", "Data", "Finance"],
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
