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
                            <p className="eyebrow">Featured Sports Platform</p>
                            <h2>Transforming national participation.</h2>
                        </div>
                        <p>See how we helped a national sporting body replace a fragile legacy registration system with a custom React portal, reducing member onboarding time by 60% while securely handling millions in subscription revenue.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Sports Tech</span>
                                <span>Member Portals</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/sports-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>A frictionless season start.</h2>
                                <p>We developed a secure, scalable membership platform that integrates directly with Stripe for complex family billing and auto-validates working-with-children checks via third-party APIs, eliminating manual admin for club volunteers.</p>
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
                        <h2 id="faq-title">Common questions about sports tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle complex family registration discounts?</summary>
                            <p>Off-the-shelf tools fail at sports math. We build custom logic engines that automatically calculate 'third-child' discounts, prorated mid-season fees, and state-level government sports vouchers dynamically during checkout.</p>
                        </details>
                        <details>
                            <summary>Can you integrate live competition data (ladders and fixtures)?</summary>
                            <p>Yes. We build custom API middleware that connects the website frontend directly to competition management systems (like PlayHQ, GameDay, or Opta), displaying live scores and ladders without slowing down the site.</p>
                        </details>
                        <details>
                            <summary>Do you build portals for coaches and referees?</summary>
                            <p>Yes. We build secure B2B-style portals where officials can submit match reports digitally, view their assignments, and upload mandatory compliance documents (like background checks) securely.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other sports capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/club-team-and-competition-websites/"><div><small>Community</small><h3>Sports Websites</h3><p>The digital home of the sport.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/membership-and-registration/"><div><small>Growth</small><h3>Member Onboarding</h3><p>Frictionless registrations.</p></div><b>Explore registration ↗</b></a>
                        <a className="related-card" href="/services/officials-and-volunteer-portals/"><div><small>Operations</small><h3>Officials Portals</h3><p>Empower the volunteers.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/membership-and-participation-dashboards/"><div><small>Analytics</small><h3>Participation BI</h3><p>Visibility into sport health.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your sports <br />and association operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From complex membership billing engines to live competition dashboards and secure official portals, we build software that drives participation and reduces administrative burden.</p>
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
  "club-team-and-competition-websites": {
    metaTitle: "Club, Team & Competition Websites",
    eyebrow: "Digital Community",
    h1: "The digital home for your sporting community.",
    lead: "We design high-performance websites for sports clubs, national associations, and leagues that drive fan engagement and centralize competition data.",
    status: "Sports Websites",
    points: [
      "Dynamic data integrations pulling live fixtures, results, and ladders from competition management software",
      "Visually rich storytelling combining high-res match photography with engaging video content",
      "Headless CMS setups allowing media teams to publish news and match reports instantly"
    ],
    proof: [
      ["01 · Fan Engagement", "Digital experiences that capture the passion of your team and supporters."],
      ["02 · Live Data Speed", "Sub-second load times even when thousands check the ladder simultaneously on Saturday afternoon."],
      ["03 · Sponsor Value", "Structure that provides premium digital real estate for key commercial partners."],
      ["04 · Media Agility", "Empower your media team to post injury updates without developer help."]
    ],
    problemsIntro: {
      eyebrow: "When digital fails the fans",
      asideLead: "If a parent can't find the U12 fixture on their phone, they are frustrated before they even reach the field.",
      title: "Poor digital presence limits participation.",
      mainLead: "Sports is driven by community and immediate information. If a member lands on a sluggish website with broken PDFs for fixtures or news articles from last season, the organization feels amateur. They need instant access to ladders, registrations, and club news."
    },
    problems: [
      ["Fixture Frustration", "Members bounce because they can't easily find a readable schedule for their specific grade on a mobile screen."],
      ["Data Delays", "Your website crashes on Saturday afternoons when everyone logs on to check the results."],
      ["Developer Bottlenecks", "The communications manager cannot add a new sponsor logo to the homepage without raising an IT ticket."]
    ],
    deliverablesIntro: {
      title: "Digital flagships for sports organizations.",
      lead: "We build decoupled frontend experiences that prioritize live data display and media-rich storytelling."
    },
    deliverables: [
      ["Headless Architecture", "Next.js frontends connected to Sanity or Contentful, ensuring the site is lightning fast under heavy weekend traffic.", "React", "Headless", "Speed"],
      ["Competition API Hooks", "Custom middleware connecting the frontend directly to systems like PlayHQ or GameDay to display live ladders.", "APIs", "Integration", "Data"],
      ["Dynamic Video & Media", "Optimized media delivery pipelines allowing for rich match-highlight integrations without slowing down the site.", "Media", "UX", "Performance"],
      ["Global Edge Hosting", "Deployment on Vercel to ensure your site never goes down, even during championship finals.", "DevOps", "Performance", "Scale"]
    ]
  },
  "membership-and-registration": {
    metaTitle: "Membership & Registration",
    eyebrow: "Growth",
    h1: "Frictionless member onboarding.",
    lead: "We engineer custom registration flows that handle complex family discounts, age-grade logic, and direct-debit subscription billing seamlessly.",
    status: "Registration Engines",
    points: [
      "Custom React-based registration flows that eliminate confusing, generic third-party forms",
      "Intelligent logic calculating complex state vouchers, third-child discounts, and prorated mid-season fees",
      "Seamless digital checkout supporting Apple Pay and automated recurring billing via Stripe"
    ],
    proof: [
      ["01 · Higher Completion", "Turn a frustrating 20-minute form into a smooth, 2-minute mobile checkout."],
      ["02 · Reduced Admin", "Stop your club volunteers from manually chasing unpaid fees via spreadsheet."],
      ["03 · Accurate Pricing", "Guarantee that complex family capping rules are applied correctly every time."],
      ["04 · Automated Renewals", "Reduce churn by implementing frictionless, card-on-file membership renewals."]
    ],
    problemsIntro: {
      eyebrow: "When registration is painful",
      asideLead: "If a parent has to fill out the same medical details three times for three kids, they will complain.",
      title: "Clunky registration destroys growth.",
      mainLead: "Sporting bodies spend months planning the season, only to force members through a generic, out-of-the-box form that looks terrible on mobile. When the registration engine cannot handle the reality of family linking or fails to apply government sports vouchers, the administrative burden falls onto stressed volunteers."
    },
    problems: [
      ["Form Abandonment", "Users quit the registration process because the legacy system keeps crashing when they try to upload a photo."],
      ["Manual Math Errors", "Volunteers spend hours manually calculating refunds because the system didn't automatically apply a family discount."],
      ["Inflexible Payments", "You lose members because the legacy system cannot support flexible payment plans or split direct debits."]
    ],
    deliverablesIntro: {
      title: "Automated membership commerce.",
      lead: "We engineer registration engines that handle the complex math of sports associations while remaining beautiful."
    },
    deliverables: [
      ["Custom Registration Frontends", "Building bespoke React flows that keep the member on your domain from data entry to payment.", "UX", "React", "Conversion"],
      ["Complex Pricing Logic", "Ensuring that age-restrictions, multi-child discounts, and government voucher codes (like Active Kids) are validated and calculated instantly.", "Logic", "Pricing", "Rates"],
      ["CRM API Middleware", "Developing secure Node.js layers that push the sanitized registration data directly into Salesforce or your sports CRM.", "APIs", "Integration", "Data"],
      ["Subscription Billing", "Implementing Stripe Billing to handle recurring payments, failed card retries, and automated receipt generation.", "Payments", "Fintech", "Automation"]
    ]
  },
  "events-tickets-and-programs": {
    metaTitle: "Events, Tickets & Programs",
    eyebrow: "Revenue",
    h1: "Maximize event and program participation.",
    lead: "We build custom ticketing engines and program booking portals for holiday camps, coaching clinics, and major association events.",
    status: "Booking Portals",
    points: [
      "Custom booking interfaces for multi-day clinics, allowing parents to select specific days or full weeks",
      "Digital ticketing for gala dinners, presentation nights, and major association tournaments",
      "Capacity management systems automatically closing registrations when a clinic or event is full"
    ],
    proof: [
      ["01 · Increased Revenue", "Make it incredibly easy for members to discover and book ancillary programs like holiday camps."],
      ["02 · Reduced Admin", "Eliminate the need for staff to manually track clinic numbers on an Excel spreadsheet."],
      ["03 · Accurate Medical Data", "Ensure dietary requirements and medical conditions are captured during the ticket purchase."],
      ["04 · Smoother Check-in", "Generate digital QR tickets for fast, scanning-based entry at events."]
    ],
    problemsIntro: {
      eyebrow: "When booking is messy",
      asideLead: "Managing a 100-kid holiday clinic via email and bank transfers is a disaster.",
      title: "Disorganized operations cause event chaos.",
      mainLead: "Associations generate massive revenue from ancillary programs, but managing them is often an administrative nightmare. If a parent has to email the office to book their child into a Tuesday/Thursday clinic, and then manually transfer funds, errors occur. When capacity is managed manually, overbooking leads to safety risks."
    },
    problems: [
      ["The Spreadsheet Nightmare", "Your staff spends hours manually cross-referencing bank deposits with a list of kids attending a coaching clinic."],
      ["Lost Medical Info", "A coach runs a camp but doesn't have the allergy information because it was buried in a parent's email."],
      ["Clunky Ticketing", "Selling tickets for the annual presentation night through a generic third-party site looks unprofessional and costs high fees."]
    ],
    deliverablesIntro: {
      title: "Centralized program commerce.",
      lead: "We engineer secure portals that professionalize how you sell and manage events."
    },
    deliverables: [
      ["Program Booking Engines", "React-based interfaces where users can select specific dates, add merchandise, and checkout in one seamless transaction.", "UX", "Commerce", "Conversion"],
      ["Capacity & Inventory Logic", "Backend systems that instantly lock out dates when a coach-to-player ratio limit is reached.", "Logic", "Operations", "Safety"],
      ["Digital Data Collection", "Custom forms built into the checkout flow that mandate the capture of emergency contacts and medical conditions.", "Forms", "Compliance", "UX"],
      ["Ticketing & Scanners", "Generating dynamic QR codes for event entry and building simple web-apps for staff to scan attendees at the door.", "Mobile", "Integration", "Operations"]
    ]
  },
  "officials-and-volunteer-portals": {
    metaTitle: "Officials & Volunteer Portals",
    eyebrow: "Operations",
    h1: "Empower the people who run the game.",
    lead: "We develop secure portals where referees, coaches, and volunteers can submit match reports, upload compliance documents, and manage their schedules.",
    status: "Official Portals",
    points: [
      "Self-serve dashboards allowing referees to view upcoming assignments and accept or decline matches",
      "Digital document vaults for uploading and validating Working With Children Checks and coaching accreditations",
      "Mobile-first match reporting forms allowing officials to submit scores and incident reports instantly"
    ],
    proof: [
      ["01 · Higher Compliance", "Automate the tracking of expired accreditations to ensure every official is legally compliant."],
      ["02 · Faster Results", "Mobile match reporting means ladders are updated on Saturday afternoon, not Tuesday morning."],
      ["03 · Reduced Attrition", "Volunteers stay longer when they are supported by modern, easy-to-use digital tools."],
      ["04 · Centralized Data", "Stop relying on a single staff member's spreadsheet to know who is qualified to referee a final."]
    ],
    problemsIntro: {
      eyebrow: "When operations are analog",
      asideLead: "You cannot manage a 500-referee network using paper forms and WhatsApp.",
      title: "Analog tools cripple volunteer efficiency.",
      mainLead: "Grassroots and state-level sports run on volunteers and officials. If a referee has to fill out a paper incident report and mail it to the office, or if a coach's mandatory background check expires without anyone noticing, the association faces massive operational and legal risks."
    },
    problems: [
      ["Compliance Disasters", "A volunteer coaches a team despite their mandatory child-safety check having expired two months ago."],
      ["Data Delays", "The league ladder is incorrect all weekend because a referee forgot to text the final score to the administrator."],
      ["Scheduling Chaos", "Assigning referees is a nightmare of phone calls, emails, and last-minute cancellations handled on an Excel sheet."]
    ],
    deliverablesIntro: {
      title: "The digital official companion.",
      lead: "We engineer mobile-first tools that turn volunteers into highly efficient operational nodes."
    },
    deliverables: [
      ["Official Dashboards", "Building secure web apps where referees log in to view their specific roster, integrated with the master competition draw.", "Portals", "Integration", "UX"],
      ["Digital Match Reporting", "Custom form logic allowing officials to input scores, red cards, and injuries on their phone before they leave the field.", "Forms", "Operations", "Mobile"],
      ["Accreditation Vaults", "Secure upload portals where coaches attach certificates, coupled with logic that flags profiles 30 days before expiry.", "Compliance", "Data", "Security"],
      ["Identity Management (CIAM)", "Secure login flows ensuring only active, compliant officials can access sensitive participant data.", "Security", "Auth", "Data"]
    ]
  },
  "membership-and-participation-dashboards": {
    metaTitle: "Membership & Participation Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visibility into the health of your sport.",
    lead: "We aggregate data from registration systems and CRM platforms into executive dashboards tracking year-on-year retention, demographic growth, and geographic participation.",
    status: "Participation Analytics",
    points: [
      "Unified BI dashboards tracking core metrics (Conversion, Churn, Revenue per Member) across all clubs and regions",
      "Geospatial mapping to identify 'cold spots' where participation is dropping to target marketing spend",
      "Real-time tracking of diversity metrics (e.g., female participation growth) to report to government funding bodies"
    ],
    proof: [
      ["01 · Strategic Decision Making", "Deploy development officers to specific regions based on real-time registration dips."],
      ["02 · Funding Justification", "Instantly generate the exact demographic reports required to secure government sports grants."],
      ["03 · Retention Visibility", "Identify which specific age groups are dropping out of the sport and design programs to retain them."],
      ["04 · Automated Reporting", "Eliminate the weeks spent manually merging data from 50 different clubs at the end of the season."]
    ],
    problemsIntro: {
      eyebrow: "When sports data is siloed",
      asideLead: "You can't grow a national sport looking at fragmented club spreadsheets.",
      title: "Data silos hide true participation trends.",
      mainLead: "Sports executives are forced to make strategic decisions with fragmented data. If registration data is locked in a legacy system, program attendance is in a spreadsheet, and financials are in an ERP, calculating the true retention rate of a 12-year-old participant across five years is nearly impossible."
    },
    problems: [
      ["Hidden Churn", "Management doesn't realize that while total numbers are up, female participation in a specific region dropped by 20%."],
      ["Grant Reporting Nightmares", "Staff spend weeks manually trying to prove to the government that a specific diversity initiative actually worked."],
      ["Blind Marketing", "You spend thousands on digital ads but can't accurately trace if they resulted in actual paid club registrations."]
    ],
    deliverablesIntro: {
      title: "Command centers for sports executives.",
      lead: "We engineer data aggregation platforms that give leadership the real-time insights needed to grow the game."
    },
    deliverables: [
      ["Executive Scorecards", "High-level visual dashboards tracking KPIs like Total Members, Year-on-Year Growth, and Churn Rate.", "BI", "Dashboards", "Metrics"],
      ["Data Warehousing", "Pipelines that extract data from disparate sports systems (PlayHQ, Salesforce) and normalize it in a cloud data warehouse.", "ETL", "Cloud", "Data"],
      ["Demographic & Geospatial Analytics", "Visual tools to track participation across age, gender, and postcodes, mapping it against population census data.", "Analytics", "Data", "Maps"],
      ["Automated Board Reporting", "Dynamic engines to instantly generate branded PDF or email summaries for board members and government stakeholders.", "Reporting", "PDFs", "Automation"]
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
