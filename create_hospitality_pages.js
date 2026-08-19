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
                            <p className="eyebrow">Featured Hospitality Platform</p>
                            <h2>Elevating the digital guest journey.</h2>
                        </div>
                        <p>See how we helped a luxury hotel group redesign their entire digital footprint, migrating to a headless architecture that seamlessly blended immersive property storytelling with a lightning-fast custom booking engine.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Hospitality Tech</span>
                                <span>Direct Bookings</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/hospitality-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Reducing reliance on OTAs.</h2>
                                <p>We developed a custom frontend that integrates directly with their Property Management System (PMS). By removing the friction of a clunky legacy booking widget and replacing it with a tailored React experience, direct bookings increased by 42%.</p>
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
                        <h2 id="faq-title">Common questions about hospitality tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with our Property Management System (PMS)?</summary>
                            <p>We build secure API middleware to connect your headless frontend directly to industry-standard PMS platforms like Opera (Oracle), Cloudbeds, or Mews. This ensures live availability, real-time pricing, and seamless reservation injection.</p>
                        </details>
                        <details>
                            <summary>Can you build custom booking engines instead of using widgets?</summary>
                            <p>Yes. Legacy booking widgets often break the brand experience and hurt conversions. We build fully custom React-based booking flows that look and feel like part of your website, while pulling data from your backend systems via API.</p>
                        </details>
                        <details>
                            <summary>How do you ensure the website is fast despite heavy imagery and video?</summary>
                            <p>We use Next.js and advanced media optimization techniques (lazy loading, next-gen formats, edge caching). This allows us to build visually immersive, video-heavy hotel sites that still load in under a second and rank highly on Google.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other hospitality capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/property-and-experience-websites/"><div><small>Discovery</small><h3>Property Websites</h3><p>Immersive digital destinations.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/availability-and-direct-booking/"><div><small>Revenue</small><h3>Direct Booking</h3><p>Maximize high-margin reservations.</p></div><b>Explore booking ↗</b></a>
                        <a className="related-card" href="/services/guest-and-concierge-portals/"><div><small>Service</small><h3>Guest Portals</h3><p>Elevate the on-property experience.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/offers-dining-and-events/"><div><small>Ancillary</small><h3>Dining & Events</h3><p>Drive revenue across the property.</p></div><b>Explore ancillary ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your hospitality <br />and tourism operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From stunning headless property websites to custom PMS-integrated booking engines and digital concierge portals, we build software that drives direct revenue and elevates the guest experience.</p>
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
  "property-and-experience-websites": {
    metaTitle: "Property & Experience Websites",
    eyebrow: "Digital Flagships",
    h1: "Immersive digital homes for physical destinations.",
    lead: "We design visually stunning, high-performance websites for hotels, resorts, and tourism groups that perfectly capture the physical experience and drive direct conversions.",
    status: "Property Websites",
    points: [
      "Visually rich storytelling utilizing WebGL, ambient video, and micro-animations",
      "Lightning-fast load times optimized for global travelers on mobile devices",
      "Headless CMS setups allowing marketing teams to launch seasonal campaigns instantly"
    ],
    proof: [
      ["01 · Brand Elevation", "Digital experiences that match the luxury of your physical property."],
      ["02 · Unbreakable Speed", "Sub-second load times even with massive hero videos and high-res galleries."],
      ["03 · SEO Optimized", "Structure that ranks higher for destination and property-specific searches."],
      ["04 · Marketing Agility", "Empower your team to update dining menus and spa packages without developer help."]
    ],
    problemsIntro: {
      eyebrow: "When digital fails physical",
      asideLead: "A five-star resort deserves better than a two-star website.",
      title: "Poor digital experiences erode brand equity.",
      mainLead: "The guest journey begins long before check-in. If a prospective guest lands on a sluggish, template-based website with broken mobile galleries and outdated menus, they will immediately question the quality of the property itself. First impressions drive direct bookings."
    },
    problems: [
      ["Slow Rich Media", "High-production property videos cause the website to freeze and crash on mobile devices."],
      ["Mobile Frustration", "Guests trying to check the restaurant menu on their phone abandon the site because the PDF won't load."],
      ["Developer Bottlenecks", "Marketing is unable to update the homepage for a holiday campaign without waiting weeks for IT support."]
    ],
    deliverablesIntro: {
      title: "Digital flagships for hospitality.",
      lead: "We build decoupled frontend experiences that prioritize immersive storytelling without sacrificing speed."
    },
    deliverables: [
      ["Headless Architecture", "Next.js frontends connected to Sanity or Contentful, separating the visual experience from the backend data.", "React", "Headless", "Speed"],
      ["Immersive Visuals", "Custom CSS and WebGL animations to visually guide users through property amenities, rooms, and local experiences.", "WebGL", "UX", "Storytelling"],
      ["Multilingual SEO", "Structuring the site to serve localized content and rank effectively in international target markets.", "SEO", "i18n", "Growth"],
      ["Global Edge Hosting", "Deployment on Vercel to ensure your site loads instantly whether the user is in London or Tokyo.", "DevOps", "Performance", "Scale"]
    ]
  },
  "availability-and-direct-booking": {
    metaTitle: "Availability & Direct Booking",
    eyebrow: "Conversion",
    h1: "Maximize high-margin direct bookings.",
    lead: "We build frictionless, headless booking engines that integrate seamlessly with your Property Management System (PMS) to increase direct revenue and reduce OTA reliance.",
    status: "Booking Engines",
    points: [
      "Custom React-based booking flows that eliminate the need for clunky third-party widgets",
      "Live API integrations with major PMS platforms (Opera, Cloudbeds, Mews) for real-time rates",
      "Frictionless checkout experiences with digital wallet integration (Apple Pay, Google Pay)"
    ],
    proof: [
      ["01 · Lower OTA Fees", "Drive more traffic to your direct channel, saving 15-25% on commission."],
      ["02 · Higher Conversion", "Remove the friction of being redirected to an ugly, separate booking domain."],
      ["03 · Dynamic Upsells", "Offer room upgrades, breakfast, and spa packages directly in the booking flow."],
      ["04 · Accurate Pricing", "Guarantee that the rate shown on the website exactly matches your PMS."
      ]
    ],
    problemsIntro: {
      eyebrow: "When booking is difficult",
      asideLead: "If your direct booking is harder to use than Expedia, you will lose the margin.",
      title: "Clunky booking widgets destroy direct revenue.",
      mainLead: "Hotels spend thousands on marketing only to send users to a third-party booking widget that looks like it was built in 2005. When the booking engine is slow, visually disconnected from the brand, or fails on mobile, the guest will simply book your hotel through an Online Travel Agency (OTA) instead."
    },
    problems: [
      ["The Redirect Drop-off", "Users abandon the booking when they are suddenly redirected to a different URL with a completely different design."],
      ["Mobile Checkout Failures", "The legacy booking widget is not responsive, making it impossible to select dates on an iPhone."],
      ["Lost Upsell Revenue", "The out-of-the-box booking tool doesn't allow for elegant promotion of high-margin add-ons like airport transfers."
      ]
    ],
    deliverablesIntro: {
      title: "Custom booking architecture.",
      lead: "We engineer booking engines that look like your brand and convert like an OTA."
    },
    deliverables: [
      ["Custom Booking Frontends", "Building bespoke React booking flows that keep the user on your domain from date selection to payment.", "UX", "React", "Conversion"],
      ["PMS API Middleware", "Developing secure Node.js layers that translate availability requests between the modern frontend and legacy PMS databases.", "APIs", "Integration", "Logic"],
      ["Dynamic Pricing Logic", "Ensuring that complex length-of-stay rules, promo codes, and corporate rates are accurately reflected in real-time.", "Logic", "Pricing", "Rates"],
      ["Payment Gateway Integration", "Implementing Stripe or Adyen to support one-click checkouts and local international payment methods.", "Payments", "Security", "Fintech"]
    ]
  },
  "offers-dining-and-events": {
    metaTitle: "Offers, Dining & Events",
    eyebrow: "Revenue Expansion",
    h1: "Drive ancillary revenue across the property.",
    lead: "We engineer integrated platforms for booking restaurant tables, spa treatments, and event spaces, ensuring guests spend more time and money on-property.",
    status: "Ancillary Revenue",
    points: [
      "Custom dining reservation systems integrated with platforms like SevenRooms or OpenTable",
      "Interactive event space viewers and digital RFP (Request for Proposal) generators for corporate bookings",
      "Dynamic offer engines that bundle rooms, dining, and experiences into bookable packages"
    ],
    proof: [
      ["01 · Higher RevPAR", "Increase total revenue per available room by making ancillary services easy to book."],
      ["02 · Streamlined Events", "Automate the corporate and wedding RFP process to qualify leads faster."],
      ["03 · Captured F&B", "Ensure hotel guests book your restaurants rather than leaving the property."],
      ["04 · Centralized Management", "Update all dining menus and spa prices from a single headless CMS."]
    ],
    problemsIntro: {
      eyebrow: "When amenities are hidden",
      asideLead: "If a guest doesn't know the spa is open, they won't book a massage.",
      title: "Disconnected services leave money on the table.",
      mainLead: "Many hotels treat their restaurants, spas, and event spaces as separate businesses digitally. If a guest has to navigate three different websites or call three different phone numbers to organize their stay, they will simply spend their money off-property."
    },
    problems: [
      ["Missed Dining Revenue", "Guests eat off-property because they couldn't easily view the menu or book a table from their phone in the room."],
      ["Manual Event Quotes", "Your events team wastes hours manually typing up quotes for weddings because there is no digital RFP tool."],
      ["Inflexible Packaging", "Marketing wants to launch a 'Stay & Dine' package, but the legacy booking engine can't handle bundled pricing."]
    ],
    deliverablesIntro: {
      title: "Holistic property commerce.",
      lead: "We build digital platforms that cross-sell your entire physical footprint seamlessly."
    },
    deliverables: [
      ["F&B Integrations", "Connecting the website frontend to restaurant management systems to allow real-time table availability and menu syncing.", "Integration", "APIs", "Dining"],
      ["Interactive Venue Planners", "Building tools where event planners can view floor plans, select catering options, and generate a live estimated quote.", "React", "Logic", "Events"],
      ["Dynamic Package Engines", "Developing logic that allows marketing teams to bundle specific room types with specific ancillary services in the CMS.", "CMS", "Logic", "Marketing"],
      ["Spa & Activity Booking", "Custom interfaces for reserving timed services, integrating with specialized wellness management software.", "Scheduling", "UX", "Wellness"]
    ]
  },
  "guest-and-concierge-portals": {
    metaTitle: "Guest & Concierge Portals",
    eyebrow: "Digital Service",
    h1: "Elevate the on-property experience.",
    lead: "We develop secure guest portals where visitors can manage reservations, request room service, access digital keys, and chat directly with the concierge.",
    status: "Guest Experience",
    points: [
      "Mobile-first Progressive Web Apps (PWAs) allowing guests to access services without downloading an app",
      "Digital room service ordering integrated directly with the F&B point-of-sale system",
      "Automated pre-arrival check-in flows to bypass the front desk queue"
    ],
    proof: [
      ["01 · Seamless Check-in", "Reduce lobby queues by allowing guests to complete registration on their phone."],
      ["02 · Higher Room Service", "Visual, digital menus dramatically increase in-room dining order values."],
      ["03 · Instant Communication", "Allow guests to request more towels via chat instead of calling the front desk."],
      ["04 · Operational Efficiency", "Route guest requests automatically to housekeeping or maintenance."]
    ],
    problemsIntro: {
      eyebrow: "When service is analog",
      asideLead: "Modern travelers expect to manage their stay from their phone.",
      title: "Analog service creates operational bottlenecks.",
      mainLead: "If a guest has to pick up a physical phone to order a burger, or wait in a 20-minute line just to confirm their passport details, the luxury experience is broken. Relying on printed compendiums and phone calls strains your staff and frustrates your guests."
    },
    problems: [
      ["Front Desk Friction", "Massive queues form at 3:00 PM because every guest has to manually sign registration cards."],
      ["Lost Room Service Revenue", "Guests skip in-room dining because the printed menu in the drawer is outdated and unappealing."],
      ["Missed Communications", "Housekeeping misses a request for extra pillows because the front desk was too busy to log the phone call."]
    ],
    deliverablesIntro: {
      title: "The digital concierge.",
      lead: "We engineer mobile-first tools that put the entire hotel's services in the guest's pocket."
    },
    deliverables: [
      ["Guest Web Apps (PWAs)", "Building fast, app-like portals accessible via a QR code in the room—no App Store download required.", "PWA", "Mobile", "UX"],
      ["Digital F&B Ordering", "Creating visual menus with 'add to cart' functionality, routing orders directly to the kitchen display system (KDS).", "Commerce", "Integration", "Dining"],
      ["Pre-Arrival Workflows", "Secure digital forms allowing guests to submit ID, provide credit card pre-auth, and state preferences before they land.", "Forms", "Security", "Operations"],
      ["Service Ticketing Middleware", "Connecting guest portal requests directly into internal hotel task management systems (like HotSOS or ALICE).", "Integration", "APIs", "Operations"]
    ]
  },
  "hospitality-dashboards": {
    metaTitle: "Hospitality Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visibility across the entire portfolio.",
    lead: "We aggregate data from your PMS, point-of-sale systems, and booking engines into executive dashboards tracking RevPAR, occupancy rates, and ancillary spend across all properties.",
    status: "Operations Analytics",
    points: [
      "Unified BI dashboards tracking core metrics (RevPAR, ADR, Occupancy) across a multi-property portfolio",
      "Consolidated view of direct booking vs. OTA performance to measure marketing ROI",
      "Real-time tracking of on-property ancillary spend (F&B, Spa) by guest segment"
    ],
    proof: [
      ["01 · Portfolio Visibility", "See the performance of every hotel in the group on a single screen."],
      ["02 · Channel Optimization", "Instantly understand which digital campaigns are actually driving direct bookings."],
      ["03 · Revenue Management", "Identify pacing trends early to adjust pricing and yield strategies."],
      ["04 · Automated Reporting", "Eliminate the days spent manually merging PMS exports in Excel."]
    ],
    problemsIntro: {
      eyebrow: "When hospitality data is siloed",
      asideLead: "You can't manage a hotel group looking at fragmented PMS reports.",
      title: "Data silos hide true property profitability.",
      mainLead: "Hotel executives are forced to make strategic decisions with fragmented data. If room revenue is in the PMS, restaurant revenue is in the POS, and marketing spend is in Google Ads, calculating the true profitability of a specific guest segment or property is nearly impossible."
    },
    problems: [
      ["Blind Marketing", "You spend thousands on digital ads but can't accurately trace which campaigns resulted in completed stays."],
      ["Fragmented Guest Value", "Management doesn't know that a guest who booked a cheap room via an OTA actually spent $500 in the restaurant."],
      ["Reporting Fatigue", "Revenue managers spend weeks manually extracting and merging data from different property systems to build the monthly board pack."]
    ],
    deliverablesIntro: {
      title: "Command centers for hotel executives.",
      lead: "We engineer data aggregation platforms that give leadership the real-time insights needed to optimize yield and operations."
    },
    deliverables: [
      ["Executive Scorecards", "High-level visual dashboards tracking KPIs like RevPAR, Gross Operating Profit per Available Room (GOPPAR), and direct booking share.", "BI", "Dashboards", "Metrics"],
      ["Data Warehousing", "Pipelines that extract data from disparate property systems (Opera, Symphony POS) and normalize it in a cloud data warehouse.", "ETL", "Cloud", "Data"],
      ["Ancillary Spend Analytics", "Visual tools to track 'Total Guest Value' by combining room rate data with F&B and spa consumption.", "Analytics", "Data", "Finance"],
      ["Automated Reporting", "Dynamic engines to instantly generate branded PDF or email summaries for general managers and ownership groups.", "Reporting", "PDFs", "Automation"]
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
