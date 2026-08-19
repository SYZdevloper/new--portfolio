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
                            <p className="eyebrow">Featured Last-Mile Platform</p>
                            <h2>Powering the local delivery economy.</h2>
                        </div>
                        <p>See how we helped an urban courier network replace manual dispatching with a fully automated routing and merchant portal, scaling their daily capacity from 500 to 5,000 drops per day without hiring more dispatchers.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Courier Tech</span>
                                <span>Routing & Tracking</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/last-mile-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Complete final mile control.</h2>
                                <p>We developed a secure B2B merchant portal integrated directly with Shopify, automatically ingesting orders, clustering them via a custom routing algorithm, and pushing turn-by-turn routes directly to the drivers' native mobile app.</p>
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
                        <h2 id="faq-title">Common questions about last-mile tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with e-commerce platforms like Shopify?</summary>
                            <p>We build API middleware that listens for webhooks from Shopify, WooCommerce, or Magento. When a local order is placed, the data is automatically ingested into your dispatch software, generating a tracking link instantly.</p>
                        </details>
                        <details>
                            <summary>Do you build native driver apps?</summary>
                            <p>Yes. We use React Native to build high-performance iOS and Android apps for your fleet. These apps handle barcode scanning, digital signature capture (ePOD), and photo uploads when packages are left at the door.</p>
                        </details>
                        <details>
                            <summary>Can you optimize multi-stop routes automatically?</summary>
                            <p>Yes. We integrate routing algorithms (like Mapbox Optimization or Onfleet APIs) that instantly calculate the most efficient sequence for a driver handling 80 deliveries in a specific zip code, minimizing drive time and fuel costs.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other courier capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/delivery-booking-and-pricing/"><div><small>Revenue</small><h3>Booking & Pricing</h3><p>Instant local delivery rates.</p></div><b>Explore booking ↗</b></a>
                        <a className="related-card" href="/services/tracking-and-notifications/"><div><small>Service</small><h3>Tracking & Alerts</h3><p>The Amazon-grade experience.</p></div><b>Explore tracking ↗</b></a>
                        <a className="related-card" href="/services/customer-and-merchant-portals/"><div><small>B2B Operations</small><h3>Merchant Portals</h3><p>Empower volume shippers.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/driver-and-route-workflows/"><div><small>Mobile</small><h3>Driver Workflows</h3><p>Optimize the final mile.</p></div><b>Explore driver apps ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your courier <br />and last-mile operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From automated B2B merchant portals to live consumer tracking links and native driver apps, we build software that drives efficiency in the final mile.</p>
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
  "delivery-booking-and-pricing": {
    metaTitle: "Delivery Booking & Pricing",
    eyebrow: "Conversion",
    h1: "Instant rates for local delivery.",
    lead: "We engineer custom quoting engines and booking flows that allow e-commerce merchants and consumers to instantly price and book local, same-day, and express deliveries.",
    status: "Booking Engines",
    points: [
      "Custom calculation engines factoring in distance, vehicle type, and urgency (e.g., 2-hour vs. Next Day)",
      "Live API integrations with your dispatch system to ensure capacity before confirming a booking",
      "Seamless digital checkout flows with corporate invoicing or credit card payments via Stripe"
    ],
    proof: [
      ["01 · Faster Conversions", "Turn a phone-based quoting process into a 10-second web transaction."],
      ["02 · Reduced Admin", "Stop your dispatchers from manually re-keying web orders into the system."],
      ["03 · Accurate Pricing", "Guarantee that complex zoning and volumetric math is applied correctly every time."],
      ["04 · 24/7 Operations", "Allow B2B clients to book overnight deliveries without human intervention."]
    ],
    problemsIntro: {
      eyebrow: "When quoting is manual",
      asideLead: "If a merchant has to call you to price a 10-mile delivery, they will use an app instead.",
      title: "Manual quoting destroys margin and speed.",
      mainLead: "Last-mile delivery moves incredibly fast. If an e-commerce brand has to email a spreadsheet of addresses, wait for your team to check driver availability, and then wait for an emailed quote, they will simply use a tech-forward competitor. Manual quoting limits your volume and burns out your dispatch team."
    },
    problems: [
      ["Slow Response Times", "Customers request a quote for a route, but your team takes hours to calculate distance and capacity manually."],
      ["Data Entry Errors", "Staff manually type delivery addresses from an email into the system, resulting in drivers being sent to the wrong location."],
      ["Lost B2B Volume", "You lose out on lucrative corporate accounts because your booking process cannot handle bulk CSV uploads."]
    ],
    deliverablesIntro: {
      title: "Automated delivery commerce.",
      lead: "We engineer quoting engines that handle the complex math of local logistics instantly."
    },
    deliverables: [
      ["Custom Quoting Frontends", "Building bespoke React interfaces where shippers input addresses and dimensions to instantly see exact rates.", "UX", "React", "Conversion"],
      ["Dispatch API Middleware", "Developing secure Node.js layers that translate quote requests between the modern frontend and legacy dispatch databases.", "APIs", "Integration", "Logic"],
      ["Complex Zoning Logic", "Ensuring that distance-based pricing, specific zip-code surcharges, and wait-time fees are perfectly calculated.", "Logic", "Pricing", "Rates"],
      ["Bulk Manifest Uploads", "Automating the ingestion of CSV files, allowing a merchant to instantly book 50 deliveries at once.", "Operations", "Automation", "Workflow"]
    ]
  },
  "tracking-and-notifications": {
    metaTitle: "Tracking & Notifications",
    eyebrow: "Service",
    h1: "The Amazon-grade tracking experience.",
    lead: "We build visually rich, map-based tracking pages and automated notification systems (SMS/Email) that keep the end-consumer informed every step of the delivery journey.",
    status: "Tracking Portals",
    points: [
      "White-labeled tracking links displaying a live map pin of the driver approaching the destination",
      "Automated milestone notifications (Out for Delivery, Next Stop, Delivered) via SMS and email",
      "Interactive feedback loops allowing the consumer to rate the delivery experience immediately"
    ],
    proof: [
      ["01 · Reduced Support Calls", "Consumers can see exactly where their package is without calling your team or the merchant."],
      ["02 · Higher Delivery Success", "When consumers know a driver is 10 minutes away, they make sure to answer the door."],
      ["03 · Brand Protection", "Provide a premium, modern tracking experience that makes your merchants look highly professional."],
      ["04 · Centralized Proof", "A single source of truth for all historical tracking data, signatures, and delivery photos."]
    ],
    problemsIntro: {
      eyebrow: "When service is analog",
      asideLead: "Your customer service team shouldn't be a human tracking number.",
      title: "Lack of visibility frustrates modern consumers.",
      mainLead: "End-consumers expect the same tracking visibility they get from Amazon or Uber. If they receive a vague 'Your package will arrive between 9 AM and 5 PM' email, they are instantly frustrated. When there is no live map or accurate ETA, your support phones ring constantly with 'Where is my delivery?' calls."
    },
    problems: [
      ["Tracking Blind Spots", "Consumers are angry because they receive no updates between the package leaving the depot and arriving."],
      ["Failed Deliveries", "Drivers waste time attempting a delivery because the consumer didn't know they were arriving and stepped out."],
      ["High Support Costs", "Your dispatch team wastes hours every week acting as the middleman between the angry consumer and the driver."]
    ],
    deliverablesIntro: {
      title: "Comprehensive consumer visibility.",
      lead: "We engineer secure dashboards that give the end-consumer absolute clarity and control over their delivery."
    },
    deliverables: [
      ["Visual Tracking Maps", "Integrating with your driver app or API provider to show a live, moving map pin of the vehicle's location.", "Maps", "APIs", "Tracking"],
      ["Predictive ETAs", "Logic engines that calculate precise estimated times of arrival based on the driver's current position and traffic data.", "Logic", "Data", "Operations"],
      ["Automated SMS Notifications", "Transactional Twilio integrations triggering text messages when the package is the 'next stop' on the route.", "Comms", "Automation", "UX"],
      ["Delivery Preference Forms", "Interfaces allowing the consumer to quickly tell the driver to 'Leave at back door' while the delivery is en route.", "UX", "Integration", "Service"]
    ]
  },
  "customer-and-merchant-portals": {
    metaTitle: "Customer & Merchant Portals",
    eyebrow: "B2B Operations",
    h1: "Empower your highest-volume shippers.",
    lead: "We develop self-serve B2B portals where e-commerce merchants can upload bulk manifests, integrate via API, track all active parcels, and manage their monthly billing.",
    status: "Merchant Portals",
    points: [
      "Self-serve dashboards allowing merchants to view all active, failed, and completed deliveries in real-time",
      "Seamless API integrations connecting directly to the merchant's Shopify, WooCommerce, or proprietary ERP",
      "Digital document vaults for retrieving Proof of Delivery (POD) signatures and photos in bulk"
    ],
    proof: [
      ["01 · Sticky B2B Relationships", "Merchants will never leave a courier partner that perfectly integrates into their tech stack."],
      ["02 · Faster Processing", "API integrations mean orders flow into your dispatch system without human intervention."],
      ["03 · Issue Resolution", "Allow merchants to quickly see why a delivery failed (e.g., 'Invalid Address') and resolve it instantly."],
      ["04 · Smoother Billing", "Make it incredibly easy for clients to download monthly invoices and pay balances digitally."]
    ],
    problemsIntro: {
      eyebrow: "When B2B communication is messy",
      asideLead: "Managing a major e-commerce client via CSV email attachments is a disaster waiting to happen.",
      title: "Disorganized operations cause supply chain chaos.",
      mainLead: "Running a courier operation involves coordinating massive volume with demanding merchants. When a Shopify store has to manually export a spreadsheet and email it to your dispatch team at 5 PM every day, errors occur. If they can't self-serve tracking updates, they will bombard your team with emails."
    },
    problems: [
      ["Data Entry Burden", "Your dispatch team spends hours manually formatting a client's messy spreadsheet to upload it into the routing software."],
      ["API Disconnects", "You lose a massive e-commerce contract because you don't offer a modern API to connect to their checkout flow."],
      ["Fragmented Communication", "Important delivery updates are lost across 20 different email threads between the merchant, consumer, and driver."]
    ],
    deliverablesIntro: {
      title: "Centralized merchant operations.",
      lead: "We build secure environments that professionalize the relationship between couriers and enterprise shippers."
    },
    deliverables: [
      ["Merchant Dashboards", "API integrations pulling live data from your dispatch software, allowing clients to view their entire delivery network at a glance.", "Integration", "Dashboards", "Data"],
      ["E-commerce Integrations", "Building plugins or webhooks that automatically pull orders from Shopify the moment a local consumer checks out.", "APIs", "E-commerce", "Operations"],
      ["POD & Exception Vaults", "Secure, structured portals where merchants can instantly view the photo of a package left at a door to resolve a customer dispute.", "Cloud", "Integration", "Service"],
      ["Identity Management (CIAM)", "Secure, centralized login flows using Auth0 to ensure only authorized merchant staff access sensitive consumer delivery data.", "Security", "Auth", "B2B"]
    ]
  },
  "driver-and-route-workflows": {
    metaTitle: "Driver & Route Workflows",
    eyebrow: "Mobile Operations",
    h1: "Optimize the final mile.",
    lead: "We build native mobile applications (iOS/Android) for your delivery fleet, featuring turn-by-turn route optimization, barcode scanning, and digital Proof of Delivery (ePOD).",
    status: "Driver Apps",
    points: [
      "Native React Native applications ensuring smooth performance, offline capability, and low battery drain",
      "Dynamic route optimization ordering 80+ stops based on traffic, time windows, and vehicle capacity",
      "Digital Proof of Delivery (ePOD) capturing signatures, photos, and exact GPS coordinates at the drop"
    ],
    proof: [
      ["01 · Higher Utilization", "Drivers complete significantly more stops per day when their route is mathematically optimized."],
      ["02 · Flawless Accuracy", "Barcode scanning ensures the driver physically cannot drop the wrong package at the wrong address."],
      ["03 · Instant Visibility", "As soon as a package is marked delivered on the app, the dispatcher and consumer see it."],
      ["04 · Smoother Onboarding", "An intuitive, consumer-grade app means new drivers can learn the job in minutes, not days."]
    ],
    problemsIntro: {
      eyebrow: "When the fleet is disconnected",
      asideLead: "You cannot manage a modern courier network using paper manifests and WhatsApp messages.",
      title: "Analog tools cripple driver efficiency.",
      mainLead: "The final mile is the most expensive part of the supply chain. If drivers are manually deciding their own routing order, getting lost, or recording signatures on clipboards, you are burning fuel and margin. A clunky app that drains their phone battery or crashes constantly leads to high driver turnover."
    },
    problems: [
      ["Inefficient Routing", "Drivers crisscross the same zip code three times because they are following an unoptimized, alphabetized list."],
      ["Failed Drops", "Packages are left at the wrong door because the driver had no barcode scanner to verify the parcel against the address."],
      ["Proof of Delivery Delays", "The dispatch team has to wait until the end of the day for the driver to return the paper manifest to confirm deliveries."]
    ],
    deliverablesIntro: {
      title: "The digital driver companion.",
      lead: "We engineer mobile-first tools that turn gig-workers and professional couriers into highly efficient logistics nodes."
    },
    deliverables: [
      ["Native Mobile Apps", "Building high-performance iOS and Android apps using React Native, utilizing device hardware (camera, GPS).", "Mobile", "React Native", "UX"],
      ["Route Optimization Algorithms", "Integrating with Mapbox or Onfleet APIs to instantly calculate the fastest sequence of stops, updating live if a new priority order is added.", "Logic", "Maps", "Efficiency"],
      ["Barcode & Scanning Logic", "Implementing fast, reliable camera scanning to verify parcel IDs against the manifest during loading and delivery.", "Hardware", "Operations", "Accuracy"],
      ["Offline Capabilities", "Ensuring the app stores route data locally so a driver can still complete a delivery inside a concrete parking garage with no cellular signal.", "Mobile", "Data", "Reliability"]
    ]
  },
  "last-mile-operations-dashboards": {
    metaTitle: "Last-Mile Operations Dashboards",
    eyebrow: "Executive Operations",
    h1: "Real-time control of the delivery fleet.",
    lead: "We aggregate data from your dispatch software, driver apps, and routing engines into executive dashboards tracking on-time delivery rates (OTIF), driver utilization, and cost per drop.",
    status: "Operations Analytics",
    points: [
      "Unified BI dashboards tracking core metrics (Cost per Drop, Stops per Hour, Exception Rates) across all hubs",
      "Live dispatch maps showing exactly where every driver is and their current route progress",
      "Post-shift analytics identifying which drivers are consistently late or causing damages"
    ],
    proof: [
      ["01 · Live Decision Making", "Identify a driver falling behind schedule at 11 AM and re-assign stops to a faster courier instantly."],
      ["02 · Margin Visibility", "Instantly see how much profit you made on a specific e-commerce client's volume today."],
      ["03 · Driver Optimization", "Track performance data to reward top drivers and retrain those with high failure rates."],
      ["04 · Automated Reporting", "Eliminate the days spent manually merging dispatch and accounting exports in Excel."]
    ],
    problemsIntro: {
      eyebrow: "When operations data is siloed",
      asideLead: "You can't manage a 500-driver fleet looking at fragmented spreadsheets.",
      title: "Data silos hide true operational profitability.",
      mainLead: "Courier executives are forced to make strategic decisions with fragmented data. If volume data is in the routing software, driver pay is in a spreadsheet, and client billing is in an ERP, calculating the true profitability of a specific route or merchant account is nearly impossible."
    },
    problems: [
      ["Hidden Margin Erosion", "Management doesn't realize that a specific high-volume merchant is actually unprofitable due to constant failed deliveries and support time."],
      ["Dispatch Blind Spots", "A driver's vehicle breaks down, but dispatch doesn't realize until hours later when customers start complaining about missed ETAs."],
      ["Reporting Fatigue", "Analysts spend weeks manually extracting and merging data from different regional systems to build the monthly board pack."]
    ],
    deliverablesIntro: {
      title: "Command centers for last-mile executives.",
      lead: "We engineer data aggregation platforms that give leadership the real-time insights needed to protect margins and optimize fleet operations."
    },
    deliverables: [
      ["Live Dispatch Control Towers", "High-level visual dashboards with live maps, tracking fleet progress against forecasted routing timelines.", "BI", "Maps", "Operations"],
      ["Data Warehousing", "Pipelines that extract data from disparate logistics systems (Routing, HR, CRM) and normalize it in a cloud data warehouse.", "ETL", "Cloud", "Data"],
      ["Cost-to-Serve Analytics", "Visual tools to track true route profitability by factoring in driver pay, fuel, and the time spent managing exceptions.", "Analytics", "Data", "Finance"],
      ["Automated P&L Reporting", "Dynamic engines to instantly generate branded PDF or email summaries for depot managers and ownership groups.", "Reporting", "PDFs", "Automation"]
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
