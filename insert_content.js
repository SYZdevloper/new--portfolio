const fs = require('fs');
const path = require('path');

const directory = path.join('d:', 'new website', 'hyperlink-nextjs-app-router', 'app', 'services');

const data = {
  "ev-charging-experiences": {
    lead: "We design end-to-end digital experiences that keep drivers informed, charged, and delighted.",
    status: "EV Charging App Design",
    points: [
      "Find available chargers instantly with accurate location data",
      "Start sessions with one tap via Apple Pay or RFID",
      "Know exactly if a charger is in use, offline, or available"
    ],
    proof: [
      ["01 · Charger Discovery", "Find available chargers instantly with accurate location data."],
      ["02 · Seamless Payments", "Start sessions with one tap via Apple Pay, Google Pay, or RFID."],
      ["03 · Real-time Status", "Know exactly if a charger is in use, offline, or available."],
      ["04 · High Driver NPS", "Eliminate frustration and build brand loyalty through UX."]
    ],
    problemsIntro: {
      eyebrow: "When UX matters",
      asideLead: "Drivers shouldn't need a manual to charge their vehicle.",
      title: "Charging should be as simple as pumping gas.",
      mainLead: "We help charge point operators replace clunky, error-prone apps with streamlined digital experiences that get drivers plugged in and paying without the headache."
    },
    problems: [
      ["Fragmented Apps", "Drivers are forced to juggle multiple apps to locate a charger, start a session, and manage their wallet."],
      ["Charger Anxiety", "Poor telemetry means drivers arrive at chargers that are actually broken, offline, or occupied."],
      ["Payment Friction", "Complex checkout flows, forced account creation, and pre-authorization failures cause drivers to abandon sessions."]
    ],
    deliverablesIntro: {
      title: "Custom charging apps built for reliability.",
      lead: "We build native apps and responsive web portals that connect directly to your CSMS to deliver a flawless driver journey."
    },
    deliverables: [
      ["Mobile App Design", "Intuitive native iOS and Android interfaces focused on speed, accessibility, and at-a-glance status visibility.", "iOS/Android", "React Native", "UX/UI"],
      ["Payment Integration", "Secure integration with Stripe, Adyen, and digital wallets for friction-free, PCI-compliant checkout.", "Stripe/Adyen", "Apple Pay", "RFID"],
      ["Mapping & Routing", "Interactive maps powered by Mapbox or Google Maps with live charger availability and turn-by-turn routing.", "Mapbox", "Clustering", "Routing"],
      ["Account Management", "Self-serve portals for drivers to manage subscriptions, view charging history, and download tax invoices.", "Invoices", "Subscriptions", "Auth"]
    ]
  },
  "station-discovery-and-access": {
    lead: "We build interactive maps, routing integrations, and access control systems for public and private charging networks.",
    status: "Location & Access Systems",
    points: [
      "Reflect charger status changes in milliseconds on the map",
      "Navigate drivers to available stations based on current SoC",
      "Unlock hardware via App, RFID, or Plug & Charge protocols"
    ],
    proof: [
      ["01 · Live Telemetry", "Reflect charger status changes in milliseconds on the map."],
      ["02 · Smart Routing", "Navigate drivers to available stations based on current SoC."],
      ["03 · Secure Access", "Unlock hardware via App, RFID, or Plug & Charge protocols."],
      ["04 · Roaming Integrations", "Display partner network chargers via OCPI feeds."]
    ],
    problemsIntro: {
      eyebrow: "When discovery fails",
      asideLead: "A charger is useless if a driver can't find it or unlock it.",
      title: "Drivers need absolute trust in your map data.",
      mainLead: "We build high-performance mapping layers and access control logic that guarantee drivers find the right plug, at the right time, and can actually start a session."
    },
    problems: [
      ["Ghost Chargers", "Lagging APIs result in maps showing chargers that have been decommissioned or are actively in maintenance mode."],
      ["Outdated Maps", "Slow rendering engines and poor clustering make the app unusable when navigating densely populated charger areas."],
      ["Frustrating Access", "Complex hardware handshakes fail, leaving drivers stranded in front of a charger they cannot unlock."]
    ],
    deliverablesIntro: {
      title: "Location intelligence and access control.",
      lead: "We architect performant WebSocket connections and WebGL map rendering to ensure your station data is accurate, fast, and actionable."
    },
    deliverables: [
      ["Interactive Maps", "Custom Mapbox GL JS implementations with smooth clustering, custom markers, and instant filtering.", "WebGL", "Clustering", "Mapbox"],
      ["OCPI Integrations", "Ingest and normalize roaming data from partner networks to expand your app's coverage footprint.", "OCPI", "Roaming", "Data Sync"],
      ["Access Control", "Software bridges connecting app interfaces to hardware via RFID pairing, NFC, or backend session commands.", "RFID/NFC", "Auth", "Hardware"],
      ["Telemetry Processing", "Event-driven architecture using WebSockets to push live charger status updates to client devices.", "WebSockets", "Pub/Sub", "Real-time"]
    ]
  },
  "accounts-sessions-and-payments": {
    lead: "We design robust transaction pipelines, subscription logic, and secure payment integrations for charge point operators.",
    status: "EV Payments & Billing",
    points: [
      "Handle complex cross-border payments and tax logic natively",
      "Offer discounted kWh rates for premium monthly members",
      "Generate compliant, itemized B2C and B2B PDF receipts"
    ],
    proof: [
      ["01 · Multi-currency", "Handle complex cross-border payments and tax logic natively."],
      ["02 · Subscription Tiers", "Offer discounted kWh rates for premium monthly members."],
      ["03 · Invoice Automation", "Generate compliant, itemized B2C and B2B PDF receipts."],
      ["04 · Low Dispute Rates", "Transparent billing timelines prevent chargebacks."]
    ],
    problemsIntro: {
      eyebrow: "When billing breaks",
      asideLead: "Revenue leakage and chargebacks kill CPO margins.",
      title: "EV billing is uniquely complex. We simplify it.",
      mainLead: "From pre-authorization holds to dynamic time-based tariffs and roaming fees, EV payments require specialized logic that standard e-commerce setups can't handle."
    },
    problems: [
      ["Confusing Pricing", "Drivers cannot decipher how they were billed due to complex combinations of parking fees, kWh rates, and idle fees."],
      ["Failed Authorizations", "Heavy-handed pre-authorizations lock up driver funds, causing bank declines and frustrating user experiences."],
      ["Complex Roaming", "Reconciling payments across multiple eMSPs and CPOs via OCPI leads to delayed settlements and billing errors."]
    ],
    deliverablesIntro: {
      title: "Transaction pipelines built for EV infrastructure.",
      lead: "We integrate robust payment gateways with custom tariff engines to ensure every session is priced, billed, and receipted accurately."
    },
    deliverables: [
      ["Stripe/Adyen Integrations", "Enterprise-grade payment processing with support for Apple Pay, Google Pay, and localized payment methods.", "Stripe", "Adyen", "Wallets"],
      ["Membership Engines", "Subscription systems that automatically apply the correct tariff discounts based on a driver's tier.", "Tiers", "Discounts", "Recurring"],
      ["Session Aggregation", "Middleware that translates raw CDRs (Charge Detail Records) from your CSMS into structured invoice data.", "CDRs", "Parsing", "Middleware"],
      ["Automated Invoicing", "Dynamic PDF generation for receipts and monthly B2B statements, compliant with regional tax requirements.", "PDFs", "Tax/VAT", "B2B/B2C"]
    ]
  },
  "fleet-and-property-portals": {
    lead: "We build multi-tenant portals that allow businesses to monitor their private chargers, allocate costs, and manage access.",
    status: "B2B Fleet Portals",
    points: [
      "Monitor the exact State of Charge for hundreds of vehicles",
      "Assign energy costs to specific departments, routes, or tenants",
      "Restrict charger usage via strict RBAC and RFID whitelisting"
    ],
    proof: [
      ["01 · Depot Visibility", "Monitor the exact State of Charge for hundreds of vehicles."],
      ["02 · Cost Allocation", "Assign energy costs to specific departments, routes, or tenants."],
      ["03 · Access Control", "Restrict charger usage via strict RBAC and RFID whitelisting."],
      ["04 · API Telematics", "Merge charger data with vehicle telemetry for a complete picture."]
    ],
    problemsIntro: {
      eyebrow: "When fleets go blind",
      asideLead: "Operating EVs at scale requires precise operational data.",
      title: "B2B charging is about logistics, not just energy.",
      mainLead: "We build enterprise portals that help fleet operators ensure vehicles are ready for routes, and allow property managers to monetize and control their private infrastructure."
    },
    problems: [
      ["Blind Spots", "Fleet managers lack visibility into overnight charging, leading to vehicles leaving the depot with insufficient range."],
      ["Uncontrolled Costs", "Property managers struggle to bill commercial tenants accurately for their specific energy consumption."],
      ["Power Constraints", "Without smart visualization, depots easily exceed grid limits, triggering massive peak-demand utility charges."]
    ],
    deliverablesIntro: {
      title: "Multi-tenant control centers.",
      lead: "We build specialized dashboards that aggregate hardware APIs, vehicle telematics, and business logic into a single B2B application."
    },
    deliverables: [
      ["Depot Dashboards", "Real-time visual layouts of your depot or parking garage showing exactly which vehicles are charging and their current SoC.", "React/Vue", "Live Data", "Visualization"],
      ["Tenant Management", "Strict multi-tenant architecture allowing you to onboard distinct organizations, set credit limits, and assign specific chargers.", "Multi-tenant", "RBAC", "Onboarding"],
      ["Smart Charging Logic", "Interfaces to configure load balancing rules, schedule off-peak charging, and prioritize specific vehicles for fast charging.", "Load Balancing", "Scheduling", "Rules"],
      ["Reporting & Exports", "Automated generation of detailed Excel/CSV reports for sustainability compliance, tax rebates, and payroll reimbursements.", "CSV/Excel", "Compliance", "Payroll"]
    ]
  },
  "charging-operations-dashboards": {
    lead: "We build back-office dashboards that provide total visibility into network health, diagnostics, and revenue.",
    status: "CPO Operations Platform",
    points: [
      "Identify and resolve hardware faults without a truck roll",
      "Unify disparate charger brands into a single pane of glass",
      "Proactively dispatch technicians before drivers complain"
    ],
    proof: [
      ["01 · Remote Diagnostics", "Identify and resolve hardware faults without a truck roll."],
      ["02 · Hardware Agnostic", "Unify disparate charger brands into a single pane of glass."],
      ["03 · High Uptime", "Proactively dispatch technicians before drivers complain."],
      ["04 · Command & Control", "Remotely reboot, update firmware, and manage configurations."]
    ],
    problemsIntro: {
      eyebrow: "When operations fail",
      asideLead: "Broken chargers destroy driver trust and CPO revenue.",
      title: "Your support team needs better tools to keep the network alive.",
      mainLead: "We build back-office interfaces that sit on top of your CSMS, giving your NOC (Network Operations Center) and support teams exactly what they need to maximize uptime."
    },
    problems: [
      ["Reactive Maintenance", "CPOs rely on angry drivers calling support to find out a charger is broken, rather than detecting the fault proactively."],
      ["Fragmented Tools", "Support teams waste time jumping between five different manufacturer portals to reboot hardware and check logs."],
      ["Poor Driver Support", "Customer service agents lack the real-time session visibility needed to help a stranded driver start a charge over the phone."]
    ],
    deliverablesIntro: {
      title: "High-performance command centers.",
      lead: "We design custom web applications that ingest your OCPP backend data and present it through blazing-fast, actionable interfaces."
    },
    deliverables: [
      ["Real-time Telemetry", "Live grids showing voltage, temperature, error codes, and connectivity status for every socket in your network.", "Metrics", "WebSockets", "Status"],
      ["Remote Control", "Secure interfaces allowing authorized agents to remotely unlock connectors, start/stop sessions, and hard-reset stations.", "Commands", "OCPP", "Security"],
      ["Maintenance Ticketing", "Automated rules that instantly generate maintenance tickets in Jira/ServiceNow when specific hardware faults are detected.", "Webhooks", "Integrations", "Ticketing"],
      ["CSMS Integrations", "Custom middleware that pulls data from GreenFlux, Driivz, or AMPECO to build a superior, unified frontend.", "APIs", "Middleware", "Aggregation"]
    ]
  }
};

Object.keys(data).forEach(slug => {
  const filePath = path.join(directory, slug, "page.tsx");
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');
  const pageData = data[slug];

  // Fix the hero lead and status and points
  content = content.replace(/<div className="hero-status">[^<]+<\/div>/, `<div className="hero-status">${pageData.status}</div>`);
  content = content.replace(/<p className="hero-lead">[^<]+<\/p>/, `<p className="hero-lead">${pageData.lead}</p>`);
  
  const pointsHtml = `
                            <li>${pageData.points[0]}</li>
                            <li>${pageData.points[1]}</li>
                            <li>${pageData.points[2]}</li>`;
  content = content.replace(/<ul className="hero-points"[^>]*>.*?<\/ul>/s, `<ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>${pointsHtml}\n                        </ul>`);

  // Build the new sections to inject
  const proofItems = pageData.proof.map(p => `
                        <div className="proof-item">
                            <small>${p[0]}</small>
                            <strong>${p[1]}</strong>
                        </div>`).join("");

  const problemItems = pageData.problems.map((p, i) => `
                            <article className="problem-card">
                                <span className="problem-card-number">0${i+1}</span>
                                <h3>${p[0]}</h3>
                                <p>${p[1]}</p>
                            </article>`).join("");

  const deliverableItems = pageData.deliverables.map((d, i) => `
                            <article className="deliverable-card">
                                <span>0${i+1} · Core</span>
                                <h3>${d[0]}</h3>
                                <p>${d[1]}</p>
                                <div className="deliverable-tags"><small>${d[2]}</small><small>${d[3]}</small><small>${d[4]}</small></div>
                            </article>`).join("");

  const newSections = `
            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">${proofItems}
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">${pageData.problemsIntro.eyebrow}</p>
                        <p>${pageData.problemsIntro.asideLead}</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>${pageData.problemsIntro.title}</h2>
                        <p>${pageData.problemsIntro.mainLead}</p>

                        <div className="problem-grid">${problemItems}
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
                                <h2>${pageData.deliverablesIntro.title}</h2>
                            </div>
                            <p>${pageData.deliverablesIntro.lead}</p>
                        </div>

                        <div className="deliverable-grid">${deliverableItems}
                        </div>
                    </div>
                </div>
            </section>
`;

  // Inject before `<section className="section" id="case-study">`
  // Clean up any previously half-injected or failed stuff just in case, but my previous command failed, so it should be clean.
  // Wait, if it failed it didn't change the file.
  
  if (!content.includes('className="proof-bar"')) {
    content = content.replace(/<\/section>\s*<section className="section" id="case-study">/, `</section>\n${newSections}\n            <section className="section" id="case-study">`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully injected sections for ${slug}`);
  } else {
    console.log(`Already injected for ${slug}`);
  }
});
