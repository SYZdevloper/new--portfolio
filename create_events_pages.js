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
                            <p className="eyebrow">Featured Events Platform</p>
                            <h2>Transforming the live experience.</h2>
                        </div>
                        <p>See how we helped a major music festival and venue operator migrate to a serverless architecture that handled 150,000 concurrent users during ticket drops without a single minute of downtime.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Events Tech</span>
                                <span>Ticketing & Scale</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/events-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Surviving the ticket drop.</h2>
                                <p>We developed a custom frontend leveraging Next.js static site generation (SSG) and an edge-based digital queue system, ensuring the brand experience remained flawlessly fast while users waited to access the ticketing backend.</p>
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
                        <h2 id="faq-title">Common questions about events tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you prevent the website crashing when tickets go on sale?</summary>
                            <p>We build Event sites using headless architecture and static site generation (SSG), deploying them on global edge networks (like Vercel). We decouple the heavy visual frontend from the transactional ticketing backend, and implement edge-based queueing systems to manage traffic spikes gracefully.</p>
                        </details>
                        <details>
                            <summary>Do you build custom ticketing systems?</summary>
                            <p>Rarely. Building a ticketing system from scratch is risky and expensive. Instead, we build beautiful, high-performing frontends that integrate seamlessly via API with industry-leading ticketing platforms like Ticketmaster, Eventbrite, or specialized white-label providers.</p>
                        </details>
                        <details>
                            <summary>Can you build interactive venue maps?</summary>
                            <p>Yes. We build custom WebGL or SVG-based interactive maps where users can view 360-degree seat previews, locate amenities, or click on specific corporate suites to initiate a booking enquiry.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other event capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/event-and-venue-discovery/"><div><small>Discovery</small><h3>Event Hubs</h3><p>Showcase experiences.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/tickets-enquiries-and-booking/"><div><small>Conversion</small><h3>Ticketing & Booking</h3><p>Frictionless sales.</p></div><b>Explore ticketing ↗</b></a>
                        <a className="related-card" href="/services/organiser-and-venue-portals/"><div><small>B2B Operations</small><h3>Organiser Portals</h3><p>Empower promoters.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/attendee-experience/"><div><small>Digital Service</small><h3>Attendee Apps</h3><p>Elevate the live event.</p></div><b>Explore attendee apps ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your events <br />and venue operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From unbreakable architectures that survive massive ticket drops to interactive attendee apps and venue management portals, we build software that drives the live experience.</p>
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
  "event-and-venue-discovery": {
    metaTitle: "Event & Venue Discovery",
    eyebrow: "Inspiration & Discovery",
    h1: "Showcase unforgettable experiences.",
    lead: "We design visually immersive digital hubs for events, festivals, and physical venues, capturing the energy of the live experience while making it easy for attendees to explore line-ups and schedules.",
    status: "Event Websites",
    points: [
      "Visually rich storytelling utilizing ambient video and heavy media optimization",
      "Dynamic, filterable line-ups and schedules pulling live data from a headless CMS",
      "Interactive 3D or SVG venue maps for spatial orientation before the event"
    ],
    proof: [
      ["01 · Brand Energy", "Digital experiences that capture the exact vibe of your festival or venue."],
      ["02 · Unbreakable Speed", "Sub-second load times even with massive hero videos and high-res galleries."],
      ["03 · SEO Optimized", "Structure that ranks higher for artist and event-specific searches."],
      ["04 · Marketing Agility", "Empower your team to update line-ups and set times without developer help."]
    ],
    problemsIntro: {
      eyebrow: "When digital lacks energy",
      asideLead: "You can't sell a high-energy live experience with a boring, static website.",
      title: "Poor digital experiences kill event hype.",
      mainLead: "Live events are emotional purchases driven by anticipation. If a prospective attendee lands on a sluggish website with broken image galleries and dense, unreadable schedules, the excitement vanishes. They will bounce before clicking the 'Buy Tickets' button."
    },
    problems: [
      ["Slow Rich Media", "High-production after-movie videos cause the website to freeze and crash on mobile devices."],
      ["Frustrating Schedules", "Users cannot easily filter a 100-artist line-up by day or stage on their phone."],
      ["Developer Bottlenecks", "Marketing is unable to announce a surprise headline act instantly without waiting for IT support."]
    ],
    deliverablesIntro: {
      title: "Digital hubs for live events.",
      lead: "We build decoupled frontend experiences that prioritize immersive storytelling and speed."
    },
    deliverables: [
      ["Headless Architecture", "Next.js frontends connected to Sanity or Contentful, separating the visual experience from the backend ticketing data.", "React", "Headless", "Speed"],
      ["Dynamic Line-Up Grids", "Building complex, filterable interfaces that allow users to sort artists by genre, day, or venue stage instantly.", "UX", "React", "Mobile"],
      ["Immersive Visuals", "Custom CSS and WebGL animations to visually guide users through the event vibe and ticketing tiers.", "WebGL", "UX", "Storytelling"],
      ["Global Edge Hosting", "Deployment on Vercel to ensure your site loads instantly, even when thousands of users hit it at the exact same moment.", "DevOps", "Performance", "Scale"]
    ]
  },
  "tickets-enquiries-and-booking": {
    metaTitle: "Tickets, Enquiries & Booking",
    eyebrow: "Conversion",
    h1: "Frictionless ticketing and venue booking.",
    lead: "We build robust ticketing integrations and interactive venue booking tools that can handle massive traffic spikes during festival pre-sales or manage complex corporate RFP processes.",
    status: "Ticketing & RFPs",
    points: [
      "Seamless API integrations with major ticketing platforms (Ticketmaster, Eventbrite, Tixel)",
      "Edge-based queueing systems designed to handle massive concurrency without crashing",
      "Interactive digital RFP tools for booking corporate boxes, VIP suites, or entire venues"
    ],
    proof: [
      ["01 · Zero Downtime", "Architecture built specifically to survive the traffic spike of a major ticket drop."],
      ["02 · Higher Conversion", "Remove the friction of being redirected to an ugly, separate booking domain unnecessarily."],
      ["03 · Streamlined Enquiries", "Automate the corporate event and VIP suite booking process to qualify leads faster."],
      ["04 · Fair Access", "Implement digital waiting rooms to manage inventory and prevent bot scalping."]
    ],
    problemsIntro: {
      eyebrow: "When the drop fails",
      asideLead: "Nothing ruins an event brand faster than the website crashing when tickets go on sale.",
      title: "Traffic spikes expose weak digital infrastructure.",
      mainLead: "You secured the headliner, paid for the ads, and generated the hype. At 9:00 AM, tickets go live, millions of users hit the site—and it crashes. Standard monolithic websites simply cannot handle the sudden concurrency of a major event drop, resulting in lost revenue and a PR nightmare on social media."
    },
    problems: [
      ["Server Crashes", "The website goes down completely within minutes of the pre-sale email being sent."],
      ["The Redirect Drop-off", "Users are suddenly redirected to a completely different, off-brand URL to actually buy the ticket."],
      ["Manual VIP Quotes", "Your events team wastes hours manually typing up quotes for corporate suites because there is no digital RFP tool."]
    ],
    deliverablesIntro: {
      title: "Bulletproof sales architecture.",
      lead: "We engineer booking and ticketing integrations that handle massive scale while remaining beautiful."
    },
    deliverables: [
      ["Static Site Generation (SSG)", "Using Next.js to pre-build the event site, meaning millions of users can hit the homepage without querying a database.", "SSG", "Scale", "Reliability"],
      ["Ticketing API Middleware", "Developing secure Node.js layers that fetch live ticket availability without crashing the core ticketing system.", "APIs", "Integration", "Logic"],
      ["Edge Queueing Systems", "Implementing digital waiting rooms (like Queue-it) to throttle traffic during a drop, protecting the checkout flow.", "Scale", "Cloud", "UX"],
      ["Interactive Venue Planners", "Building tools where corporate planners can view floor plans, select catering, and generate a live estimated quote.", "React", "Logic", "Sales"]
    ]
  },
  "organiser-and-venue-portals": {
    metaTitle: "Organiser & Venue Portals",
    eyebrow: "B2B Operations",
    h1: "Empower event organizers and promoters.",
    lead: "We engineer secure B2B portals where promoters can manage guest lists, access marketing assets, and communicate with venue operations teams in real-time.",
    status: "B2B Portals",
    points: [
      "Self-serve portals for external promoters to view live ticket sales and demographic data",
      "Secure digital asset management (DAM) for sharing authorized brand assets and venue specs",
      "Digital run-sheet and technical rider management replacing messy email threads"
    ],
    proof: [
      ["01 · Smoother Operations", "Keep venue staff and external promoters on the exact same page digitally."],
      ["02 · Faster Settlements", "Give promoters live access to their sales data to speed up post-event financials."],
      ["03 · Brand Protection", "Ensure promoters are only using authorized, up-to-date marketing assets."],
      ["04 · Reduced Email", "Replace chaotic 50-reply email chains with a centralized, structured portal."]
    ],
    problemsIntro: {
      eyebrow: "When B2B communication is messy",
      asideLead: "Managing a 10,000-person event via email attachments is a disaster waiting to happen.",
      title: "Disorganized operations cause event-day chaos.",
      mainLead: "Running a venue involves coordinating with dozens of external promoters, artists, and technical crews. When technical riders are lost in spam folders, or a promoter is begging your finance team for a live ticket count every two hours, your internal team is drowning in admin instead of running the venue."
    },
    problems: [
      ["Information Black Holes", "The technical crew doesn't get the updated lighting rider because it was emailed to the wrong person."],
      ["Reporting Burden", "Your ticketing manager spends hours manually exporting sales spreadsheets for impatient promoters."],
      ["Marketing Mismatches", "External organizers use low-res logos or outdated photos of your venue to promote their event."]
    ],
    deliverablesIntro: {
      title: "Centralized event operations.",
      lead: "We build secure B2B environments that professionalize the relationship between venues and organizers."
    },
    deliverables: [
      ["Promoter Dashboards", "API integrations pulling live data from the ticketing system, allowing promoters to view their sales pacing and VIP allocations.", "Integration", "Dashboards", "Data"],
      ["Brand Asset Vaults", "Secure, gated directories within the portal where organizers can download localized marketing guidelines and high-res venue imagery.", "DAM", "Assets", "Brand"],
      ["Digital Rider Management", "Custom forms and document management systems ensuring that technical requirements are securely collected and distributed.", "Forms", "Operations", "UX"],
      ["Identity Management (CIAM)", "Secure, centralized login flows using Auth0 to ensure only authorized promoter staff can access sensitive event data.", "Security", "Auth", "B2B"]
    ]
  },
  "attendee-experience": {
    metaTitle: "Attendee Experience",
    eyebrow: "Digital Service",
    h1: "Elevate the live event.",
    lead: "We develop mobile-first web apps providing attendees with personalized schedules, interactive wayfinding maps, and digital food & beverage ordering during the event.",
    status: "Attendee Apps",
    points: [
      "Mobile-first Progressive Web Apps (PWAs) accessible via a QR code—no App Store download required",
      "Interactive festival maps with geolocation to help attendees find stages, bars, and bathrooms",
      "Digital F&B ordering allowing attendees to skip the bar queue and order from their phone"
    ],
    proof: [
      ["01 · Higher F&B Revenue", "Guests buy more drinks when they don't have to stand in a 20-minute line."],
      ["02 · Less Confusion", "Interactive maps reduce the load on your event staff and security for directions."],
      ["03 · Personalized Experience", "Allow users to 'star' artists and build their own custom daily schedule."],
      ["04 · Instant Communication", "Push real-time updates (e.g., 'Stage change due to weather') directly to the user's phone."]
    ],
    problemsIntro: {
      eyebrow: "When the live experience is frustrating",
      asideLead: "If an attendee spends two hours of your festival standing in line, they won't come back next year.",
      title: "Analog event operations frustrate modern attendees.",
      mainLead: "Once the ticket is scanned, the real experience begins. If attendees have to carry a crumpled paper map, or miss their favorite artist because they were stuck in a chaotic line for a beer, the event experience is compromised. Relying on outdated analog systems strains your staff and annoys your guests."
    },
    problems: [
      ["The Bar Queue Bottleneck", "Massive lines form at the main bar, severely limiting the amount of revenue you can process per hour."],
      ["Lost Attendees", "Attendees miss crucial activations because the venue layout is confusing and signage is poor."],
      ["Missed Communications", "A headline act is moved to a different stage, but you have no way to quickly notify 20,000 people."]
    ],
    deliverablesIntro: {
      title: "The digital event companion.",
      lead: "We engineer mobile-first tools that put the entire event experience in the attendee's pocket."
    },
    deliverables: [
      ["Attendee Web Apps (PWAs)", "Building fast, app-like portals designed specifically to perform well on congested mobile networks at live events.", "PWA", "Mobile", "UX"],
      ["Digital F&B Ordering", "Creating visual menus with 'add to cart' functionality, routing orders directly to the bar's point-of-sale system.", "Commerce", "Integration", "Dining"],
      ["Interactive Wayfinding", "Custom Mapbox integrations showing the user's live location relative to stages, exits, and amenities.", "Maps", "Geolocation", "UX"],
      ["Schedule Builders", "React-based interfaces where users can 'heart' artists to generate a conflict-free personal timetable.", "React", "Logic", "Engagement"]
    ]
  },
  "event-operations-dashboards": {
    metaTitle: "Event Operations Dashboards",
    eyebrow: "Executive Operations",
    h1: "Real-time visibility into the live event.",
    lead: "We aggregate data from your ticketing system, access control scanners, and F&B POS into executive dashboards tracking crowd flow, bar revenue, and overall event profitability.",
    status: "Operations Analytics",
    points: [
      "Unified BI dashboards tracking core metrics (Scans vs. Sold, F&B Spend Per Head) during the live event",
      "Real-time tracking of bar and merchandise revenue to optimize staff deployment",
      "Post-event analytics consolidating marketing spend, ticketing revenue, and operational costs"
    ],
    proof: [
      ["01 · Live Decision Making", "Move security or bar staff dynamically based on real-time crowd and sales data."],
      ["02 · Revenue Visibility", "Instantly see F&B 'Spend Per Head' trending throughout the day."],
      ["03 · Yield Optimization", "Track which ticket tiers and marketing channels are actually driving the highest margin."],
      ["04 · Automated Reporting", "Eliminate the days spent manually merging ticketing and POS exports after the event."]
    ],
    problemsIntro: {
      eyebrow: "When event data is siloed",
      asideLead: "You can't manage a live 50,000-person event looking at yesterday's spreadsheets.",
      title: "Data silos hide true event profitability and risk.",
      mainLead: "Event executives are forced to make strategic, minute-by-minute decisions with fragmented data. If your ticket scans are in one system, your bar revenue is in a POS, and your merchandise sales are on a spreadsheet, calculating the live profitability or crowd density of a specific zone is nearly impossible."
    },
    problems: [
      ["Blind Staffing", "The VIP bar is dead, while the main stage bar is losing revenue due to lines, but management can't see the sales data to reallocate staff."],
      ["Fragmented Guest Value", "Management doesn't know that a guest who bought a cheap early-bird ticket actually spent $200 on merchandise."],
      ["Reporting Fatigue", "Finance spends weeks manually extracting and merging data from different vendors to build the final event P&L."]
    ],
    deliverablesIntro: {
      title: "Command centers for event executives.",
      lead: "We engineer data aggregation platforms that give leadership the real-time insights needed to manage crowds and protect margins."
    },
    deliverables: [
      ["Live Executive Scorecards", "High-level visual dashboards tracking KPIs like Total Scans, Drop-Out Rate, and live F&B revenue per minute.", "BI", "Dashboards", "Metrics"],
      ["Data Warehousing", "Pipelines that extract data from disparate event systems (Ticketmaster, Square POS) and normalize it in a cloud data warehouse.", "ETL", "Cloud", "Data"],
      ["Spend Per Head Analytics", "Visual tools to track 'Total Attendee Value' by combining ticket data with F&B and merchandise consumption.", "Analytics", "Data", "Finance"],
      ["Automated P&L Reporting", "Dynamic engines to instantly generate branded PDF or email summaries for promoters and ownership groups post-event.", "Reporting", "PDFs", "Automation"]
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
