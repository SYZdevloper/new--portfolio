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
                            <p className="eyebrow">Featured Attractions Platform</p>
                            <h2>Transforming the visitor experience.</h2>
                        </div>
                        <p>See how we helped a major regional zoo replace a clunky legacy ticketing widget with a custom React booking flow, increasing online pre-sales by 40% and drastically reducing queues at the front gate on Saturday mornings.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Visitor Tech</span>
                                <span>Ticketing Integrations</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/attractions-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Frictionless entry, higher revenue.</h2>
                                <p>We developed a secure ticketing engine connected directly to their POS system (like Gateway or Centaman). Families can now purchase time-slotted tickets, add a giraffe-feeding experience to their cart, and checkout with Apple Pay in seconds.</p>
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
                        <h2 id="faq-title">Common questions about attractions tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with complex ticketing systems like Gateway Ticketing or Centaman?</summary>
                            <p>We build API middleware that connects your custom web frontend directly to your core ticketing software. This allows us to pull live capacity, dynamic pricing, and pass validations without exposing the core database.</p>
                        </details>
                        <details>
                            <summary>Can you handle time-slotted or capacity-limited entry?</summary>
                            <p>Yes. We build interactive calendar and time-picker UIs that query the ticketing system in real-time. If a 10:00 AM slot reaches its 50-person limit, our frontend immediately grays it out to prevent overselling.</p>
                        </details>
                        <details>
                            <summary>Do you build digital tickets for Apple Wallet or Google Pay?</summary>
                            <p>Yes. Upon successful checkout, we can automatically generate dynamic QR codes and native Apple Wallet/Google Pay passes that your turnstiles or gate staff can scan instantly.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other attraction capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/attraction-and-activity-websites/"><div><small>Discovery</small><h3>Attraction Websites</h3><p>Showcase the experience.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/tickets-passes-and-booking/"><div><small>Revenue</small><h3>Ticketing & Passes</h3><p>Frictionless gate entry.</p></div><b>Explore ticketing ↗</b></a>
                        <a className="related-card" href="/services/membership-and-visitor-accounts/"><div><small>Loyalty</small><h3>Member Portals</h3><p>Self-serve passholders.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/groups-events-and-education/"><div><small>B2B Operations</small><h3>Group Bookings</h3><p>Streamline large groups.</p></div><b>Explore B2B ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your attraction <br />and visitor operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From custom ticketing engines to digital passholder wallets and live attendance dashboards, we build software that drives revenue and reduces gate friction.</p>
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
  "attraction-and-activity-websites": {
    metaTitle: "Attraction & Activity Websites",
    eyebrow: "Visitor Discovery",
    h1: "Digitally showcase your attraction.",
    lead: "We design visually stunning, high-performance websites for theme parks, museums, and zoos that drive ticket sales and communicate daily operational updates clearly.",
    status: "Attraction Websites",
    points: [
      "Visually rich storytelling utilizing immersive video and high-resolution photography of the park experience",
      "Dynamic operational banners to instantly communicate weather closures, ride maintenance, or sold-out days",
      "Headless CMS setups allowing marketing teams to launch new exhibit pages or seasonal events instantly"
    ],
    proof: [
      ["01 · Brand Elevation", "Digital experiences that capture the excitement and scale of your physical attraction."],
      ["02 · Reduced Friction", "Ensure visitors can easily find opening hours, parking info, and park maps on their phone."],
      ["03 · SEO Optimized", "Structure that ranks higher for regional tourism and 'things to do near me' searches."],
      ["04 · Operational Agility", "Empower your team to post an urgent weather update without waiting for IT."]
    ],
    problemsIntro: {
      eyebrow: "When digital fails the visitor",
      asideLead: "If a family can't figure out if you are open today, they will go somewhere else.",
      title: "Poor digital experiences kill ticket sales.",
      mainLead: "Planning a family day out is stressful. If a visitor lands on an outdated website where finding the opening hours requires three clicks, or the interactive map crashes their phone, their enthusiasm drops. They need immediate inspiration followed by clear, actionable operational information."
    },
    problems: [
      ["Information Hide-and-Seek", "Visitors are frustrated because they cannot easily find basic information like parking costs or stroller policies."],
      ["Slow Performance", "Your website feels outdated and sluggish, especially when loaded with heavy videos that haven't been optimized."],
      ["Developer Bottlenecks", "Marketing is unable to announce the new roller coaster opening date on the homepage without raising a ticket."]
    ],
    deliverablesIntro: {
      title: "Digital flagships for attractions.",
      lead: "We build decoupled frontend experiences that prioritize visual excitement without sacrificing mobile speed."
    },
    deliverables: [
      ["Headless Architecture", "Next.js frontends connected to Sanity or Contentful, separating the visual experience from the ticketing backend.", "React", "Headless", "Speed"],
      ["Interactive Park Maps", "Custom Mapbox integrations visualizing the park layout, allowing users to filter for restrooms, food, or specific rides.", "Maps", "UX", "Mobile"],
      ["Dynamic Alerts", "CMS-driven banner systems allowing operations to instantly broadcast capacity limits or ride closures across the whole site.", "CMS", "Operations", "UX"],
      ["Global Edge Hosting", "Deployment on Vercel to ensure your site loads instantly, even during peak summer holiday traffic spikes.", "DevOps", "Performance", "Scale"]
    ]
  },
  "tickets-passes-and-booking": {
    metaTitle: "Tickets, Passes & Booking",
    eyebrow: "Conversion",
    h1: "Frictionless visitor ticketing.",
    lead: "We engineer custom ticketing flows that handle dynamic pricing, time-slotted entry, and multi-day passes, ensuring guests can secure entry instantly from their phones.",
    status: "Ticketing Engines",
    points: [
      "Custom React-based checkout flows that eliminate clunky, redirected third-party ticketing widgets",
      "Live API integrations with your core ticketing system (Gateway, Centaman, Roller) for capacity management",
      "Seamless cross-selling of ancillary products (e.g., parking, fast passes, meal deals) during the flow"
    ],
    proof: [
      ["01 · Higher Conversion", "Turn a frustrating 5-step checkout process into a smooth, 1-minute mobile transaction."],
      ["02 · Increased Yield", "Boost Per-Capita spending by easily upselling VIP experiences or parking before checkout."],
      ["03 · Capacity Control", "Ensure time-slotted entry limits are perfectly respected to prevent overcrowding."],
      ["04 · Smoother Entry", "Generate digital tickets that scan instantly at the turnstile, reducing gate queues."]
    ],
    problemsIntro: {
      eyebrow: "When buying is difficult",
      asideLead: "If it takes 10 minutes to buy a ticket on a phone, families will just show up and cause a line at the gate.",
      title: "Clunky ticketing widgets destroy online pre-sales.",
      mainLead: "Attractions spend thousands on marketing only to send users to an out-of-the-box ticketing portal that looks terrible on mobile. When the calendar is slow to load, selecting ticket types is confusing, or the system crashes during payment, the visitor abandons the cart. This forces them to buy at the physical gate, requiring more staff and causing massive queues."
    },
    problems: [
      ["The Redirect Drop-off", "Users abandon the purchase when they are suddenly redirected to a different URL (like an iframe widget) that doesn't match your brand."],
      ["Mobile Checkout Failures", "The legacy booking widget is not responsive, making it impossible to select a specific time-slot on an iPhone."],
      ["Missed Ancillary Revenue", "The off-the-shelf system makes it too difficult to cleanly offer a 'Buy Parking Now' upsell before the final payment screen."]
    ],
    deliverablesIntro: {
      title: "Custom ticketing architecture.",
      lead: "We engineer booking flows that handle complex capacity logic while remaining beautiful and frictionless."
    },
    deliverables: [
      ["Custom Checkout Frontends", "Building bespoke React ticketing flows that keep the user on your domain from date selection to payment.", "UX", "React", "Conversion"],
      ["Ticketing API Middleware", "Developing secure Node.js layers that translate availability requests between the modern frontend and legacy POS databases.", "APIs", "Integration", "Logic"],
      ["Dynamic Calendar UIs", "Building fast, interactive calendars that visually indicate peak pricing days or sold-out time slots instantly.", "React", "Pricing", "UX"],
      ["Digital Wallet Integration", "Implementing Stripe/Adyen to support Apple Pay and generating native Apple Wallet passes for the tickets.", "Payments", "Fintech", "Mobile"]
    ]
  },
  "membership-and-visitor-accounts": {
    metaTitle: "Membership & Visitor Accounts",
    eyebrow: "Loyalty",
    h1: "Self-serve management for annual passholders.",
    lead: "We build secure portals where loyal members can renew their passes, access digital tickets for fast entry, and claim exclusive food and merchandise discounts.",
    status: "Passholder Portals",
    points: [
      "Self-serve dashboards allowing members to view their digital pass barcode, renew their subscription, or update their photo",
      "Exclusive access layers allowing passholders to book limited-capacity events or early-access dates before the general public",
      "Automated card-on-file billing for monthly subscription models or annual renewals"
    ],
    proof: [
      ["01 · Reduced Support Calls", "Passholders can update their expired credit card or change their address without calling guest services."],
      ["02 · Higher Retention", "Make it incredibly easy for a member to click 'Renew Now' when their pass is about to expire."],
      ["03 · Faster Gate Entry", "Members always have their digital barcode ready on their phone, eliminating lost plastic cards."],
      ["04 · Targeted Marketing", "Use the portal to push personalized offers based on a member's specific visit history."]
    ],
    problemsIntro: {
      eyebrow: "When loyalty is analog",
      asideLead: "Your guest services desk shouldn't be clogged with people trying to reprint a lost plastic pass.",
      title: "Lack of self-service frustrates your best customers.",
      mainLead: "Annual passholders are your most valuable asset. But if they have to stand in a 20-minute line at Guest Services just to update their photo, or if they can't figure out how to apply their member discount online, they feel undervalued. A clunky renewal process directly leads to churn."
    },
    problems: [
      ["High Admin Burden", "Your guest services team spends hours processing simple membership renewals or replacing lost cards manually."],
      ["Opaque Benefits", "Members don't renew because they don't know how to access or use the '10% off food' benefit they were promised."],
      ["Login Friction", "Users abandon their accounts because the legacy portal requires a 16-digit pass number as a username instead of a simple email address."]
    ],
    deliverablesIntro: {
      title: "Centralized passholder operations.",
      lead: "We engineer secure dashboards that give your loyal members complete control over their relationship with the park."
    },
    deliverables: [
      ["Passholder Dashboards", "API integrations pulling live data from the ticketing software, allowing members to view their digital pass and expiry date.", "Integration", "Dashboards", "Data"],
      ["Self-Serve Renewals", "Logic engines that allow users to safely update a credit card and automatically process a renewal payment via API.", "Logic", "APIs", "Service"],
      ["Digital Benefit Wallets", "Custom interfaces displaying available perks (e.g., 'Free Bring-a-Friend Ticket') which can be redeemed directly into the cart.", "Commerce", "Loyalty", "UX"],
      ["Identity Management (CIAM)", "Secure, centralized login flows using Auth0 to ensure a seamless experience across the web and mobile apps.", "Security", "Auth", "Data"]
    ]
  },
  "groups-events-and-education": {
    metaTitle: "Groups, Events & Education",
    eyebrow: "B2B Operations",
    h1: "Streamline group and school bookings.",
    lead: "We develop specialized booking portals for schools, corporate groups, and private events, replacing messy email threads with structured digital quoting and payment workflows.",
    status: "Group Portals",
    points: [
      "Custom B2B inquiry forms that accurately capture group size, dietary needs, and desired add-ons (e.g., educational workshops)",
      "Digital quoting engines allowing your sales team to send a branded proposal that the client can accept and pay online",
      "Automated manifest generation ensuring operations staff know exactly when 300 school kids will arrive at the gate"
    ],
    proof: [
      ["01 · Increased Sales Velocity", "Turn a 3-day email negotiation into a same-day digital booking for a corporate retreat."],
      ["02 · Reduced Admin", "Stop your group sales team from manually typing credit card numbers taken over the phone."],
      ["03 · Accurate Capacity", "Ensure massive school groups are properly allocated in the ticketing system to prevent gate chaos."],
      ["04 · Smoother Arrival", "Provide group leaders with a single digital barcode that admits their entire party of 50 instantly."]
    ],
    problemsIntro: {
      eyebrow: "When B2B is messy",
      asideLead: "Managing a 200-person corporate event via PDF invoices and bank transfers is a disaster.",
      title: "Disorganized group sales cause operational chaos.",
      mainLead: "Attractions generate massive revenue from schools and corporate events, but managing them is often an administrative nightmare. If a teacher has to email the office to book a field trip, wait for a PDF invoice, and arrange a manual bank transfer, errors occur. When group details are lost in email threads, the park operations team is blindsided on the day."
    },
    problems: [
      ["The Email Grind", "Your sales team spends hours manually generating PDF quotes and chasing schools for payment."],
      ["Lost Requirements", "A corporate group arrives for a catered lunch, but the dietary requirements were buried in an old email thread."],
      ["Gate Bottlenecks", "A group of 100 people arrives at the gate, but their tickets weren't properly processed, holding up the entire queue."]
    ],
    deliverablesIntro: {
      title: "Centralized group commerce.",
      lead: "We engineer secure portals that professionalize how you sell and manage large-scale visits."
    },
    deliverables: [
      ["B2B Booking Engines", "React-based interfaces where group leaders can input their requirements and instantly request a formal quote.", "UX", "Commerce", "Conversion"],
      ["Digital Quoting & Invoicing", "Backend systems that generate an interactive web-proposal, allowing the client to click 'Accept' and pay the deposit via Stripe.", "Fintech", "Operations", "Sales"],
      ["Ticketing API Hooks", "Developing middleware that automatically reserves 150 capacity slots in your core system the moment the deposit is paid.", "APIs", "Integration", "Data"],
      ["Educational Resource Hubs", "Secure portals where teachers can download curriculum-aligned worksheets and risk assessments before their visit.", "Portals", "Content", "UX"]
    ]
  },
  "visitor-operations-dashboards": {
    metaTitle: "Visitor Operations Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visibility across the entire park.",
    lead: "We aggregate data from your ticketing system, point-of-sale (POS), and turnstiles into executive dashboards tracking live in-park attendance, per-capita spending, and queue wait times.",
    status: "Operations Analytics",
    points: [
      "Unified BI dashboards tracking core metrics (Live Attendance, Food & Beverage Yield, Retail Conversion) in real-time",
      "Predictive attendance modeling combining historical ticket data with upcoming weather forecasts to optimize staffing",
      "Geospatial mapping of the park showing real-time crowd density based on Wi-Fi tracking or app usage"
    ],
    proof: [
      ["01 · Live Decision Making", "Identify that the north sector is overcrowded and dispatch a pop-up ice cream cart instantly."],
      ["02 · Margin Visibility", "Instantly see how much profit you made today on general admission versus ancillary spending."],
      ["03 · Staff Optimization", "Predict low attendance due to rain tomorrow and confidently cancel casual shifts to save payroll."],
      ["04 · Automated Reporting", "Eliminate the days spent manually merging ticketing and food/beverage exports in Excel."]
    ],
    problemsIntro: {
      eyebrow: "When park data is siloed",
      asideLead: "You can't manage a 10,000-person theme park looking at yesterday's fragmented spreadsheets.",
      title: "Data silos hide true operational profitability.",
      mainLead: "Attraction executives are forced to make strategic decisions with fragmented data. If entry scans are in the ticketing system, burger sales are in a separate POS, and merchandise is in an ERP, calculating the true Per-Capita (Per-Cap) spend of a visitor today is nearly impossible."
    },
    problems: [
      ["Hidden Margin Erosion", "Management doesn't realize that while attendance was high, food and beverage yield plummeted because lines were too long."],
      ["Staffing Mismatches", "You overstaff the park on a Tuesday because management couldn't easily factor the incoming rain into the attendance model."],
      ["Reporting Fatigue", "Analysts spend hours every morning manually extracting and merging data from different regional systems to build the daily flash report."]
    ],
    deliverablesIntro: {
      title: "Command centers for attraction executives.",
      lead: "We engineer data aggregation platforms that give leadership the real-time insights needed to protect margins and optimize the guest experience."
    },
    deliverables: [
      ["Live Operations Control Towers", "High-level visual dashboards tracking live turnstile scans against forecasted attendance.", "BI", "Dashboards", "Operations"],
      ["Data Warehousing", "Pipelines that extract data from disparate systems (Ticketing POS, F&B POS, Weather APIs) and normalize it in a cloud data warehouse.", "ETL", "Cloud", "Data"],
      ["Per-Capita Analytics", "Visual tools to track true visitor profitability by merging ticket revenue with in-park spending patterns.", "Analytics", "Data", "Finance"],
      ["Automated Flash Reporting", "Dynamic engines to instantly generate branded PDF or email summaries for park managers and ownership groups at the close of business.", "Reporting", "PDFs", "Automation"]
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
