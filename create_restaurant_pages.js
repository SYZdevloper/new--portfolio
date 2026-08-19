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
                            <p className="eyebrow">Featured F&B Platform</p>
                            <h2>Owning the digital dining experience.</h2>
                        </div>
                        <p>See how we helped a national restaurant group migrate off third-party delivery apps by building a custom ordering engine that integrated directly with their Toast POS, increasing direct revenue and saving millions in commissions.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Restaurant Tech</span>
                                <span>POS Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/restaurant-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Direct revenue without the fees.</h2>
                                <p>We developed a custom frontend ordering app that syncs menus, modifiers, and 86'd items live from the POS. When a guest orders, the ticket fires straight to the kitchen display system (KDS) exactly as if they were sitting in the dining room.</p>
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
                        <h2 id="faq-title">Common questions about restaurant tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate online ordering with our POS?</summary>
                            <p>We build API middleware that connects the custom web frontend directly to modern POS systems like Toast, Square, or Lightspeed. This ensures that when an item is marked 'sold out' in the kitchen, it instantly disappears from the website.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with reservation systems like SevenRooms or Resy?</summary>
                            <p>Yes. Instead of using generic widgets that take users off-brand, we can build custom booking forms using the APIs of major reservation platforms. This keeps the user on your domain and improves conversion.</p>
                        </details>
                        <details>
                            <summary>How do you manage menus for a group with 20 different locations?</summary>
                            <p>We implement a headless CMS (like Sanity) connected to a geolocation engine. The system automatically detects the user's nearest restaurant and loads the specific menu and pricing for that location, preventing 'wrong store' orders.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other restaurant capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/brand-menu-and-location-websites/"><div><small>Discovery</small><h3>Brand & Menus</h3><p>Drive foot traffic digitally.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/reservations-and-waitlists/"><div><small>Acquisition</small><h3>Reservations</h3><p>Maximize table utilization.</p></div><b>Explore bookings ↗</b></a>
                        <a className="related-card" href="/services/ordering-and-delivery/"><div><small>Revenue</small><h3>Direct Ordering</h3><p>Own off-premise dining.</p></div><b>Explore ordering ↗</b></a>
                        <a className="related-card" href="/services/accounts-loyalty-and-catering/"><div><small>Retention</small><h3>Loyalty & Catering</h3><p>Turn diners into regulars.</p></div><b>Explore loyalty ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your restaurant <br />and hospitality operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From immersive brand sites to commission-free POS ordering engines and unified loyalty portals, we build software that drives direct revenue for multi-location groups.</p>
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
  "brand-menu-and-location-websites": {
    metaTitle: "Brand, Menu & Location Websites",
    eyebrow: "Brand Discovery",
    h1: "Drive foot traffic with digital appetite.",
    lead: "We design high-performance restaurant websites that capture the dining experience visually while making it effortless for guests to find locations, view live menus, and book a table.",
    status: "Restaurant Websites",
    points: [
      "Visually rich storytelling utilizing ambient video and high-resolution food photography",
      "Dynamic, location-aware menus that update instantly based on the nearest physical restaurant",
      "Headless CMS setups allowing marketing to launch seasonal specials without developer help"
    ],
    proof: [
      ["01 · Brand Elevation", "Digital experiences that match the ambiance of your physical dining room."],
      ["02 · Unbreakable Speed", "Sub-second load times even with massive video headers."],
      ["03 · Local SEO", "Structure that ensures your specific locations rank #1 in local map searches."],
      ["04 · Menu Management", "Eliminate PDFs; build digital menus that actually render correctly on mobile."]
    ],
    problemsIntro: {
      eyebrow: "When digital fails physical",
      asideLead: "If a guest can't read the menu on their phone, they will dine somewhere else.",
      title: "Poor digital experiences kill Friday night reservations.",
      mainLead: "Dining out is a highly visual and immediate decision. If a prospective guest lands on a sluggish website with an outdated PDF menu that they have to pinch-to-zoom to read, the appetite vanishes. They will bounce and book with a competitor whose digital presence feels more modern and trustworthy."
    },
    problems: [
      ["The PDF Menu Problem", "Your menu is a massive PDF file that takes 10 seconds to load and is impossible to read on a mobile phone."],
      ["Location Confusion", "A guest books a table or places an order for the downtown location when they actually meant to book the suburban one."],
      ["Developer Bottlenecks", "Marketing is unable to add the new 'Mother's Day Special' to the homepage without waiting weeks for IT support."]
    ],
    deliverablesIntro: {
      title: "Digital flagships for hospitality brands.",
      lead: "We build decoupled frontend experiences that prioritize mouth-watering visuals without sacrificing speed."
    },
    deliverables: [
      ["Headless Architecture", "Next.js frontends connected to Sanity or Contentful, separating the visual experience from the backend reservation data.", "React", "Headless", "Speed"],
      ["Dynamic Digital Menus", "Building HTML/React based menus that pull live data from the CMS, ensuring perfect mobile rendering and SEO indexing.", "CMS", "UX", "Mobile"],
      ["Geolocation & Routing", "Implementing logic that detects the user's location and automatically serves the menu, hours, and booking link for the nearest restaurant.", "Maps", "Logic", "UX"],
      ["Global Edge Hosting", "Deployment on Vercel to ensure your site loads instantly, capturing hungry users on mobile connections.", "DevOps", "Performance", "Scale"]
    ]
  },
  "reservations-and-waitlists": {
    metaTitle: "Reservations & Waitlists",
    eyebrow: "Guest Acquisition",
    h1: "Maximize table utilization.",
    lead: "We engineer custom booking flows and waitlist integrations that connect directly to your front-of-house systems, ensuring guests can easily secure a table without friction.",
    status: "Booking & Waitlists",
    points: [
      "Custom React-based booking flows that eliminate the need for clunky third-party widgets",
      "Live API integrations with major reservation platforms (SevenRooms, Resy, OpenTable)",
      "Digital waitlist integrations allowing guests to join the queue before they arrive"
    ],
    proof: [
      ["01 · Higher Conversion", "Remove the friction of being redirected to an ugly, separate booking domain."],
      ["02 · Own the Data", "Capture guest data directly on your site before passing the reservation to the backend."],
      ["03 · Dynamic Upsells", "Offer pre-paid dining experiences or wine pairings directly in the booking flow."],
      ["04 · Smoother Front-of-House", "Guests joining the digital waitlist reduces crowding in the physical host area."]
    ],
    problemsIntro: {
      eyebrow: "When booking is difficult",
      asideLead: "If a user is ready to book a table for six, don't make them fight a broken widget.",
      title: "Clunky booking widgets destroy reservations.",
      mainLead: "Restaurant groups spend thousands on marketing only to send users to an out-of-the-box booking widget that looks like it was built a decade ago. When the booking engine is slow, visually disconnected from the brand, or fails to load on an iPhone, the guest abandons the reservation."
    },
    problems: [
      ["The Redirect Drop-off", "Users abandon the booking when they are suddenly redirected to a different URL with a completely different design."],
      ["Mobile Checkout Failures", "The legacy booking widget is not responsive, making it impossible to select a time slot on mobile."],
      ["Loss of Brand Control", "The third-party booking platform controls the email confirmation, hiding your brand behind theirs."]
    ],
    deliverablesIntro: {
      title: "Custom reservation architecture.",
      lead: "We engineer booking flows that handle the heavy lifting of table logic while remaining beautiful and frictionless."
    },
    deliverables: [
      ["Custom Booking Frontends", "Building bespoke React booking flows that keep the user on your domain from date selection to confirmation.", "UX", "React", "Conversion"],
      ["Reservation API Middleware", "Developing secure Node.js layers that translate availability requests between the modern frontend and legacy reservation databases.", "APIs", "Integration", "Logic"],
      ["Digital Waitlist Flows", "Interfaces that allow users to see live wait times and join the queue virtually, syncing instantly with the host stand iPad.", "Integration", "UX", "Operations"],
      ["Ticketing & Events", "Implementing Stripe to support pre-paid tickets for special dinners, chef's tables, or holiday events.", "Payments", "Security", "Fintech"]
    ]
  },
  "ordering-and-delivery": {
    metaTitle: "Ordering & Delivery",
    eyebrow: "Direct Revenue",
    h1: "Own your off-premise dining.",
    lead: "We build custom, commission-free online ordering engines and native apps that integrate directly with your Point of Sale (POS) system, allowing you to bypass third-party delivery fees.",
    status: "Online Ordering",
    points: [
      "Custom React or React Native ordering apps that inject tickets directly into the POS (Toast, Square, Revel)",
      "Live menu syncing, ensuring 86'd items disappear from the website instantly",
      "Integration with white-label delivery networks (DoorDash Drive, Uber Direct) to offer delivery without the 30% commission"
    ],
    proof: [
      ["01 · Higher Margins", "Stop giving away 30% of your off-premise revenue to third-party apps."],
      ["02 · Own the Customer", "When guests order direct, you keep their email and purchase history for future marketing."],
      ["03 · Smoother Operations", "No more 'tablet farms'—web orders fire straight to the kitchen display exactly like dine-in tickets."],
      ["04 · Flexible Fulfillment", "Offer both scheduled curbside pickup and white-label delivery."]
    ],
    problemsIntro: {
      eyebrow: "When delivery platforms take over",
      asideLead: "You do the cooking, but the delivery app takes the margin and owns the customer.",
      title: "Third-party dependency is suffocating margins.",
      mainLead: "Relying entirely on UberEats or DoorDash is a dangerous strategy. Not only do they take up to 30% of every order, but they also keep the customer data. If you don't offer a frictionless, direct way for loyal guests to order pickup or delivery, you are renting your own customers."
    },
    problems: [
      ["Crushing Commissions", "High delivery app fees turn high-volume off-premise sales into low-margin busywork."],
      ["The Tablet Farm", "Staff spend hours manually re-keying orders from an iPad into the actual POS system, causing delays and errors."],
      ["Data Blindness", "You have no idea who is actually eating your food because the delivery apps refuse to share customer email addresses."]
    ],
    deliverablesIntro: {
      title: "Direct ordering engines.",
      lead: "We engineer custom commerce platforms that put the control (and the margin) back in the hands of the restaurant."
    },
    deliverables: [
      ["POS API Integration", "Middleware that connects the frontend directly to Toast or Square, mapping complex modifier groups and modifiers perfectly.", "POS", "Integration", "APIs"],
      ["Custom Ordering Frontends", "React-based web apps with slide-out carts, upselling logic, and lightning-fast checkout flows.", "UX", "React", "Commerce"],
      ["White-Label Delivery Routing", "Connecting to DoorDash Drive APIs so the customer gets their food delivered, but you own the transaction.", "Logistics", "APIs", "Operations"],
      ["Native Mobile Apps", "Deploying the ordering engine as iOS and Android apps using React Native for your most loyal customers.", "Mobile", "Apps", "Retention"]
    ]
  },
  "accounts-loyalty-and-catering": {
    metaTitle: "Accounts, Loyalty & Catering",
    eyebrow: "Retention & B2B",
    h1: "Turn one-time diners into regulars.",
    lead: "We develop unified guest accounts that track loyalty points across all locations, alongside specialized portals for managing high-value corporate catering orders.",
    status: "Loyalty & B2B",
    points: [
      "Unified digital wallets storing loyalty points earned both in-store (POS) and online",
      "Single Sign-On (SSO) allowing guests to log in, view order history, and re-order their 'usual' with one click",
      "Dedicated B2B catering portals handling complex tax-exempt orders, invoice payments, and scheduled drops"
    ],
    proof: [
      ["01 · Higher LTV", "Encourage repeat visits through engaging, easy-to-understand loyalty mechanics."],
      ["02 · Frictionless Reordering", "Guests can reorder their past customized meals with a single tap."],
      ["03 · B2B Revenue", "Capture lucrative corporate catering orders with a professional, self-serve portal."],
      ["04 · Unified Identity", "Stop treating the same guest as two different people online and offline."]
    ],
    problemsIntro: {
      eyebrow: "When loyalty is fragmented",
      asideLead: "Telling a guest they 'can't use those points online' destroys brand trust.",
      title: "Disconnected systems frustrate your best guests.",
      mainLead: "Loyalty programs fail when they are difficult to use. If a guest spends hundreds dining in your restaurants but logs into your online ordering app to see '0 points' because the systems don't talk to each other, you are actively alienating your most valuable demographic."
    },
    problems: [
      ["Siloed Rewards", "Guests are frustrated when they realize their in-store purchases aren't counting towards their digital VIP tier."],
      ["Catering Chaos", "Massive $2,000 corporate catering orders are being processed via messy email threads instead of a dedicated portal."],
      ["Login Friction", "Users abandon their accounts because they have different passwords for the app, the reservations site, and the loyalty program."]
    ],
    deliverablesIntro: {
      title: "A single view of the guest.",
      lead: "We engineer digital identity solutions where guests feel recognized and valued, regardless of how they order."
    },
    deliverables: [
      ["Unified Loyalty Integrations", "Connecting systems like Paytronix or Thanx directly into both the headless website and the physical POS.", "Loyalty", "APIs", "Rewards"],
      ["Identity Management (CIAM)", "Secure, centralized login flows using Auth0, ensuring one identity across all brand touchpoints.", "Security", "Auth", "Data"],
      ["B2B Catering Portals", "Custom interfaces where corporate admins can save company credit cards, schedule massive orders, and download tax invoices.", "B2B", "Commerce", "Portals"],
      ["Digital Membership Cards", "Generating dynamic QR codes or Apple Wallet passes within the portal for easy scanning at physical registers.", "Mobile", "Integration", "UX"]
    ]
  },
  "location-and-guest-dashboards": {
    metaTitle: "Location & Guest Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visibility across the entire restaurant group.",
    lead: "We aggregate data from your POS, reservation system, and delivery platforms into executive dashboards tracking average check size, table turn times, and location profitability.",
    status: "Operations Analytics",
    points: [
      "Unified BI dashboards tracking core metrics (RevPASH, Check Average, Ticket Times) across a multi-unit group",
      "Consolidated view of first-party direct ordering vs. third-party delivery performance",
      "Real-time tracking of labor costs against forecasted sales volume"
    ],
    proof: [
      ["01 · Group Visibility", "See the performance of every restaurant in the group on a single screen."],
      ["02 · Channel Optimization", "Instantly understand how much margin you are losing to third-party delivery apps this week."],
      ["03 · Menu Engineering", "Identify highly profitable items versus 'dogs' to optimize the menu across all locations."],
      ["04 · Automated Reporting", "Eliminate the days spent manually merging POS exports in Excel."]
    ],
    problemsIntro: {
      eyebrow: "When restaurant data is siloed",
      asideLead: "You can't manage a 20-unit group looking at fragmented POS reports.",
      title: "Data silos hide true location profitability.",
      mainLead: "Restaurant executives are forced to make strategic decisions with fragmented data. If dine-in revenue is in Toast, delivery revenue is in UberEats, and labor costs are in 7shifts, calculating the true profitability of a specific location or menu item is nearly impossible."
    },
    problems: [
      ["Hidden Margin Erosion", "Management doesn't realize that a specific location is actually losing money on weekends because labor costs and delivery fees spiked."],
      ["Blind Menu Planning", "You introduce a new item but can't accurately trace if it cannibalized sales of higher-margin dishes."],
      ["Reporting Fatigue", "Operations managers spend hours manually extracting and merging data from different regional systems to build the weekly packet."]
    ],
    deliverablesIntro: {
      title: "Command centers for restaurant executives.",
      lead: "We engineer data aggregation platforms that give leadership the real-time insights needed to optimize yield and operations."
    },
    deliverables: [
      ["Executive Scorecards", "High-level visual dashboards tracking KPIs like Prime Cost, Sales per Labor Hour, and overall capacity utilization.", "BI", "Dashboards", "Metrics"],
      ["Data Warehousing", "Pipelines that extract data from disparate property systems (POS, Labor, Inventory) and normalize it in a cloud data warehouse.", "ETL", "Cloud", "Data"],
      ["Delivery Profitability Analytics", "Visual tools to track true profitability by subtracting specific third-party commissions from gross channel sales.", "Analytics", "Data", "Finance"],
      ["Automated Reporting", "Dynamic engines to instantly generate branded PDF or email summaries for regional managers and ownership groups.", "Reporting", "PDFs", "Automation"]
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
