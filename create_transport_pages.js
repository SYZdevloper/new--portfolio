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
                            <p className="eyebrow">Featured Transport Platform</p>
                            <h2>Modernizing passenger transport.</h2>
                        </div>
                        <p>See how we helped a regional bus and ferry operator replace their legacy booking widget with a custom React frontend, increasing online ticket sales by 35% and drastically reducing lines at the physical terminal.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Transport Tech</span>
                                <span>Booking & Ticketing</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/transport-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Frictionless digital ticketing.</h2>
                                <p>We developed a secure booking engine connected directly to their proprietary inventory system. Passengers can now book multi-leg journeys on their phone in seconds, receiving Apple Wallet passes instead of paper tickets.</p>
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
                        <h2 id="faq-title">Common questions about transport tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with our legacy ticketing or reservation system?</summary>
                            <p>We build secure API middleware to connect your headless frontend directly to complex transport management systems. This allows us to pull live timetables, seat availability, and pricing without exposing the core database.</p>
                        </details>
                        <details>
                            <summary>Can you build custom routing and timetable planners?</summary>
                            <p>Yes. We build interactive trip planners where users can input their origin and destination, and our logic engine calculates the optimal route, showing live ETAs and connection times based on your schedules.</p>
                        </details>
                        <details>
                            <summary>Do you build digital tickets like Apple Wallet passes?</summary>
                            <p>Yes. Upon successful checkout, we can automatically generate dynamic QR codes and native Apple Wallet/Google Pay passes that your drivers or terminal staff can scan easily.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other transport capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/transport-service-websites/"><div><small>Discovery</small><h3>Transport Websites</h3><p>Showcase your network.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/reservations-and-trip-booking/"><div><small>Revenue</small><h3>Trip Booking</h3><p>Frictionless ticketing.</p></div><b>Explore booking ↗</b></a>
                        <a className="related-card" href="/services/customer-and-corporate-portals/"><div><small>Service</small><h3>Passenger Portals</h3><p>Self-serve management.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/fleet-driver-and-maintenance/"><div><small>Operations</small><h3>Fleet & Driver Ops</h3><p>Keep the network moving.</p></div><b>Explore operations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your passenger <br />transport operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From automated ticketing engines to real-time timetable planners and digital maintenance workflows, we build software that drives efficiency across the transport network.</p>
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
  "transport-service-websites": {
    metaTitle: "Transport Service Websites",
    eyebrow: "Network Discovery",
    h1: "Digitally showcase your transport network.",
    lead: "We design high-performance websites for passenger transport, bus networks, and ferry operators that clearly communicate routes, timetables, and service reliability.",
    status: "Transport Websites",
    points: [
      "Interactive network maps showing all routes, stops, and major connection hubs",
      "Dynamic timetable interfaces that are easy to read on mobile devices",
      "Headless CMS setups allowing operations teams to instantly post service disruption alerts"
    ],
    proof: [
      ["01 · Brand Authority", "Digital experiences that convey safety, reliability, and scale to passengers."],
      ["02 · Reduced Confusion", "Ensure passengers easily understand schedules before arriving at the terminal."],
      ["03 · SEO Optimized", "Structure that ranks higher for specific regional route and schedule searches."],
      ["04 · Operational Agility", "Empower your team to post weather delays or route changes without IT help."]
    ],
    problemsIntro: {
      eyebrow: "When digital fails the network",
      asideLead: "If a passenger can't read your timetable on their phone, they will find another way to travel.",
      title: "Poor digital presence causes terminal chaos.",
      mainLead: "Passenger transport requires absolute clarity. If a commuter lands on an outdated website with a massive PDF timetable they have to pinch-to-zoom to read, they will be frustrated. They need immediate confidence in your schedules, route maps, and real-time service status."
    },
    problems: [
      ["The PDF Timetable Problem", "Passengers bounce because they can't easily find or read your schedules on a mobile screen."],
      ["Slow Performance", "Your website feels outdated and sluggish, undermining trust in your overall operation."],
      ["Developer Bottlenecks", "Customer service is flooded with calls because marketing couldn't update the website about a snow delay fast enough."]
    ],
    deliverablesIntro: {
      title: "Digital flagships for transport networks.",
      lead: "We build decoupled frontend experiences that prioritize clear timetable communication and speed."
    },
    deliverables: [
      ["Headless Architecture", "Next.js frontends connected to Sanity or Contentful, ensuring the site is lightning fast and accessible.", "React", "Headless", "Speed"],
      ["Interactive Network Maps", "Custom Mapbox integrations visualizing your routes, terminals, and live vehicle locations if applicable.", "Maps", "UX", "Data"],
      ["Digital Timetable Grids", "Building responsive, filterable interfaces that allow users to select their stop and instantly see the next departure.", "UX", "React", "Mobile"],
      ["Global Edge Hosting", "Deployment on Vercel to ensure your site loads instantly, even during high-traffic rush hours.", "DevOps", "Performance", "Scale"]
    ]
  },
  "reservations-and-trip-booking": {
    metaTitle: "Reservations & Trip Booking",
    eyebrow: "Conversion",
    h1: "Frictionless passenger booking.",
    lead: "We engineer custom booking engines that handle complex timetables, dynamic pricing, and multi-leg journeys, ensuring passengers can secure their tickets instantly.",
    status: "Booking Engines",
    points: [
      "Custom React-based booking flows that eliminate the need for clunky third-party widgets",
      "Live API integrations with your core reservation system for real-time seat availability",
      "Seamless digital checkout flows supporting Apple Pay, Google Pay, and split payments"
    ],
    proof: [
      ["01 · Higher Conversion", "Turn a frustrating, multi-step booking widget into a 30-second checkout flow."],
      ["02 · Reduced Terminal Lines", "Shift more ticket sales online to reduce the burden on your physical ticket agents."],
      ["03 · Dynamic Upsells", "Offer premium seating, luggage upgrades, or flexible ticket options directly in the flow."],
      ["04 · Brand Control", "Keep the user on your domain from route selection all the way to payment."]
    ],
    problemsIntro: {
      eyebrow: "When booking is difficult",
      asideLead: "If buying a bus ticket takes 10 minutes on a phone, passengers will just drive.",
      title: "Clunky booking widgets destroy ticket sales.",
      mainLead: "Transport operators spend thousands on marketing only to send users to an out-of-the-box booking widget that looks like it was built a decade ago. When the booking engine is slow, confusing for round-trips, or fails to load on a mobile device, the passenger abandons the purchase."
    },
    problems: [
      ["The Redirect Drop-off", "Users abandon the booking when they are suddenly redirected to a different URL with a completely different design."],
      ["Mobile Checkout Failures", "The legacy booking widget is not responsive, making it impossible to select a specific seat on a phone."],
      ["Inflexible Logic", "The off-the-shelf tool cannot handle your specific business rules, like multi-leg ferry journeys with vehicle types."]
    ],
    deliverablesIntro: {
      title: "Automated transport commerce.",
      lead: "We engineer booking engines that handle the complex math of timetables while remaining beautiful."
    },
    deliverables: [
      ["Custom Booking Frontends", "Building bespoke React booking flows that keep the passenger on your domain from route selection to payment.", "UX", "React", "Conversion"],
      ["Ticketing API Middleware", "Developing secure Node.js layers that translate availability requests between the modern frontend and legacy reservation databases.", "APIs", "Integration", "Logic"],
      ["Seat Selection UI", "Building interactive, SVG-based seat maps where users can pick their exact spot on the bus or ferry.", "React", "SVG", "UX"],
      ["Digital Wallet Integration", "Implementing Stripe or Adyen to support one-click checkouts and generating Apple Wallet passes for tickets.", "Payments", "Fintech", "Mobile"]
    ]
  },
  "customer-and-corporate-portals": {
    metaTitle: "Customer & Corporate Portals",
    eyebrow: "Service & B2B",
    h1: "Self-serve management for all passengers.",
    lead: "We build secure portals where daily commuters can manage their digital passes and corporate clients can manage bulk bookings and employee transit accounts.",
    status: "Passenger Portals",
    points: [
      "Self-serve dashboards allowing commuters to view active tickets, renew monthly passes, and update payment methods",
      "Corporate B2B portals where HR teams can manage transit benefits for hundreds of employees",
      "Digital document vaults for retrieving tax invoices and historical travel receipts"
    ],
    proof: [
      ["01 · Reduced Support Calls", "Passengers can cancel or change their own tickets online without calling your call center."],
      ["02 · Sticky B2B Relationships", "Corporate clients will love the ease of managing bulk transit passes through a modern portal."],
      ["03 · Faster Boarding", "Digital passes and QR codes in the portal mean faster scanning at the terminal."],
      ["04 · Unified Identity", "Stop treating the same daily commuter as a new customer every time they buy a ticket."]
    ],
    problemsIntro: {
      eyebrow: "When service is analog",
      asideLead: "Your call center shouldn't be overwhelmed by people asking to change a 9 AM ticket to a 10 AM ticket.",
      title: "Lack of self-service frustrates modern commuters.",
      mainLead: "Daily commuters and corporate clients expect absolute control. If a passenger has to call your office to change a departure time, or a corporate client has to email a spreadsheet to buy 50 monthly passes, your operations team is drowning in unnecessary admin work."
    },
    problems: [
      ["High Support Costs", "Your customer service team spends all day processing simple ticket changes or issuing refunds manually."],
      ["B2B Billing Chaos", "Corporate accounts are managed via messy email threads and manual invoice generation."],
      ["Login Friction", "Users abandon their accounts because the password reset process is broken or they can't easily find their digital ticket."]
    ],
    deliverablesIntro: {
      title: "Centralized passenger operations.",
      lead: "We engineer secure dashboards that give your customers complete control over their travel."
    },
    deliverables: [
      ["Passenger Dashboards", "API integrations pulling live booking data, allowing clients to view their upcoming trips and active passes.", "Integration", "Dashboards", "Data"],
      ["Self-Serve Ticket Changes", "Logic engines that allow users to change a booking time and automatically calculate/charge the fare difference via API.", "Logic", "APIs", "Service"],
      ["B2B Corporate Portals", "Custom interfaces where corporate admins can save company credit cards, provision employee passes, and download tax invoices.", "B2B", "Commerce", "Portals"],
      ["Identity Management (CIAM)", "Secure, centralized login flows using Auth0 to ensure a seamless experience across web and mobile apps.", "Security", "Auth", "Data"]
    ]
  },
  "fleet-driver-and-maintenance": {
    metaTitle: "Fleet, Driver & Maintenance",
    eyebrow: "Operations",
    h1: "Keep your fleet moving.",
    lead: "We develop digital workflows and mobile apps for drivers to conduct pre-trip inspections, manage shift schedules, and instantly report maintenance defects to the depot.",
    status: "Fleet Operations",
    points: [
      "Native mobile apps for drivers to complete mandatory DVIR (Driver Vehicle Inspection Reports) digitally",
      "Automated maintenance ticketing systems that alert mechanics the moment a driver flags a defect",
      "Digital manifest and passenger scanning apps to replace paper clipboards at boarding"
    ],
    proof: [
      ["01 · Higher Compliance", "Ensure every vehicle is inspected with timestamped, digital proof before it leaves the yard."],
      ["02 · Faster Maintenance", "Mechanics can order parts before the bus even returns to the depot based on live driver defect reports."],
      ["03 · Accurate Boarding", "Digital scanners validate tickets instantly, preventing fraud and speeding up departure."],
      ["04 · Reduced Paperwork", "Eliminate the boxes of paper inspection forms taking up space in the dispatch office."]
    ],
    problemsIntro: {
      eyebrow: "When the fleet is analog",
      asideLead: "You cannot run a modern transport network on paper inspection forms and radio calls.",
      title: "Analog tools cripple fleet efficiency and safety.",
      mainLead: "The physical fleet is your biggest asset. If drivers are completing safety inspections on paper forms that sit in a tray for three days, or if they are manually checking off passenger names on a clipboard, you are risking compliance failures and operating inefficiently."
    },
    problems: [
      ["Compliance Risks", "Paper inspection reports go missing, making it impossible to prove a vehicle was checked before a breakdown."],
      ["Maintenance Delays", "A driver notices a worn tire at 6 AM, but the mechanic doesn't find out until the paper form is handed in at 4 PM."],
      ["Boarding Bottlenecks", "Passengers are delayed because the driver has to manually search for their name on a printed manifest."]
    ],
    deliverablesIntro: {
      title: "The digital driver companion.",
      lead: "We engineer mobile-first tools that turn drivers and mechanics into highly efficient operations nodes."
    },
    deliverables: [
      ["Native Driver Apps", "Building high-performance iOS and Android apps using React Native, designed specifically for ease of use by drivers.", "Mobile", "React Native", "UX"],
      ["Digital Inspection Workflows", "Custom form logic requiring drivers to check specific vehicle components, upload photos of damage, and sign digitally.", "Forms", "Operations", "Compliance"],
      ["Ticket Scanning Integrations", "Implementing fast, reliable camera scanning in the app to validate QR codes against the live passenger manifest.", "Hardware", "Operations", "Accuracy"],
      ["Maintenance API Hooks", "Developing middleware that automatically opens a work order in your maintenance software (like Fleetio) when a defect is logged.", "APIs", "Integration", "Workflow"]
    ]
  },
  "transport-operations-dashboards": {
    metaTitle: "Transport Operations Dashboards",
    eyebrow: "Executive Operations",
    h1: "Real-time control of the transport network.",
    lead: "We aggregate data from your ticketing system, GPS trackers, and maintenance software into executive dashboards tracking on-time performance, fleet utilization, and yield per route.",
    status: "Operations Analytics",
    points: [
      "Unified BI dashboards tracking core metrics (Load Factor, Revenue per Mile, On-Time Performance) across all routes",
      "Live network maps showing exactly where every vehicle is and its adherence to the timetable",
      "Post-shift analytics identifying which specific routes or timeslots are consistently unprofitable"
    ],
    proof: [
      ["01 · Live Decision Making", "Identify a delayed service instantly and dispatch a relief vehicle or update passenger apps automatically."],
      ["02 · Margin Visibility", "Instantly see how much profit you made on the 9 AM express route today versus yesterday."],
      ["03 · Asset Optimization", "Track performance data to identify vehicles that spend too much time in the maintenance yard."],
      ["04 · Automated Reporting", "Eliminate the days spent manually merging ticketing and GPS exports in Excel."]
    ],
    problemsIntro: {
      eyebrow: "When operations data is siloed",
      asideLead: "You can't manage a regional transport network looking at fragmented spreadsheets.",
      title: "Data silos hide true route profitability.",
      mainLead: "Transport executives are forced to make strategic decisions with fragmented data. If passenger revenue is in the ticketing system, GPS locations are in a tracking portal, and maintenance costs are in an ERP, calculating the true profitability of a specific route is nearly impossible."
    },
    problems: [
      ["Hidden Margin Erosion", "Management doesn't realize that a specific mid-day route is actually losing money because they can't easily merge fuel costs with ticket sales."],
      ["Network Blind Spots", "A vehicle breaks down, but dispatch doesn't realize the impact on the overall network schedule until passengers complain."],
      ["Reporting Fatigue", "Analysts spend weeks manually extracting and merging data from different regional systems to build the monthly board pack."]
    ],
    deliverablesIntro: {
      title: "Command centers for transport executives.",
      lead: "We engineer data aggregation platforms that give leadership the real-time insights needed to protect margins and optimize the network."
    },
    deliverables: [
      ["Live Operations Control Towers", "High-level visual dashboards with live maps, tracking fleet progress against forecasted timetables.", "BI", "Maps", "Operations"],
      ["Data Warehousing", "Pipelines that extract data from disparate systems (Ticketing, GPS, Maintenance) and normalize it in a cloud data warehouse.", "ETL", "Cloud", "Data"],
      ["Route Yield Analytics", "Visual tools to track true route profitability by factoring in driver pay, fuel, maintenance, and ticket revenue.", "Analytics", "Data", "Finance"],
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
