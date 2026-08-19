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
                            <p className="eyebrow">Featured Wellness Platform</p>
                            <h2>Owning the boutique studio experience.</h2>
                        </div>
                        <p>See how we helped a rapidly expanding pilates franchise ditch their clunky off-the-shelf booking widget and build a custom React frontend integrated directly with Mariana Tek, resulting in a 40% increase in web conversions.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Fitness Tech</span>
                                <span>Booking Integrations</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/wellness-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Frictionless booking, premium brand.</h2>
                                <p>We developed a secure booking engine connected directly to their studio management system. Clients can now filter classes by instructor, book a specific reformer bed, and securely pay for a membership package without ever leaving the brand's domain.</p>
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
                        <h2 id="faq-title">Common questions about fitness tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with systems like Mindbody or Mariana Tek?</summary>
                            <p>We build API middleware that connects your custom web frontend directly to your core studio software. This allows us to pull live schedules, availability, and pricing without relying on ugly, iframe-based widgets.</p>
                        </details>
                        <details>
                            <summary>Can you build custom apps for our studio?</summary>
                            <p>Yes. We use React Native to build high-performance iOS and Android apps for your members. These apps provide push notifications, easy class booking, and digital check-in (QR codes) at the front desk.</p>
                        </details>
                        <details>
                            <summary>Do you handle multi-location schedules?</summary>
                            <p>Yes. For franchise or multi-unit operators, we build geolocation logic that automatically detects where the user is and displays the schedule for the nearest studio, while still allowing them to filter across the whole network.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other wellness capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/brand-service-and-location-websites/"><div><small>Discovery</small><h3>Brand Websites</h3><p>Showcase the experience.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/schedules-booking-and-waitlists/"><div><small>Conversion</small><h3>Class Booking</h3><p>Frictionless reservations.</p></div><b>Explore booking ↗</b></a>
                        <a className="related-card" href="/services/memberships-packs-and-payments/"><div><small>Revenue</small><h3>Memberships</h3><p>Optimize recurring revenue.</p></div><b>Explore memberships ↗</b></a>
                        <a className="related-card" href="/services/client-and-program-portals/"><div><small>Service</small><h3>Client Portals</h3><p>Self-serve management.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your fitness <br />and wellness operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From seamless API-driven class booking flows to digital membership portals and multi-location analytics dashboards, we build software that drives studio growth.</p>
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
  "brand-service-and-location-websites": {
    metaTitle: "Brand, Service & Location Websites",
    eyebrow: "Brand Discovery",
    h1: "Digitally showcase your wellness brand.",
    lead: "We design visually stunning, high-performance websites for boutique fitness studios, gyms, and wellness clinics that drive foot traffic and membership signups.",
    status: "Fitness Websites",
    points: [
      "Visually rich storytelling utilizing ambient video and high-resolution studio photography",
      "Dynamic, location-aware schedules that update instantly based on the nearest physical studio",
      "Headless CMS setups allowing marketing to launch new instructor profiles or challenges instantly"
    ],
    proof: [
      ["01 · Brand Elevation", "Digital experiences that match the premium aesthetic of your physical studio."],
      ["02 · Unbreakable Speed", "Sub-second load times even with massive video headers on mobile devices."],
      ["03 · Local SEO", "Structure that ensures your specific locations rank #1 in local map searches."],
      ["04 · Marketing Agility", "Empower your team to update pricing and intro-offers without developer help."]
    ],
    problemsIntro: {
      eyebrow: "When digital fails physical",
      asideLead: "If a potential client can't feel the vibe of your studio online, they won't buy a pass.",
      title: "Poor digital experiences kill introductory signups.",
      mainLead: "Fitness is an emotional, aesthetic-driven purchase. If a prospective member lands on a sluggish website with broken images and a confusing layout, the inspiration vanishes. They will bounce and book an intro class with a competitor whose digital presence feels more modern and trustworthy."
    },
    problems: [
      ["Vague Aesthetics", "The website looks like a generic template and completely fails to capture the energy of your specific classes."],
      ["Location Confusion", "A client tries to view the schedule for the downtown studio but accidentally looks at the suburban location because the site navigation is poor."],
      ["Developer Bottlenecks", "Marketing is unable to add the new 'Summer Shred Challenge' to the homepage without waiting weeks for IT support."]
    ],
    deliverablesIntro: {
      title: "Digital flagships for boutique fitness.",
      lead: "We build decoupled frontend experiences that prioritize visual energy without sacrificing speed."
    },
    deliverables: [
      ["Headless Architecture", "Next.js frontends connected to Sanity or Contentful, separating the visual experience from the backend booking data.", "React", "Headless", "Speed"],
      ["Dynamic Studio Pages", "Building location-specific pages that pull live schedules and pricing for that exact studio, ensuring perfect local SEO.", "SEO", "UX", "Mobile"],
      ["Geolocation & Routing", "Implementing logic that detects the user's location and automatically serves the schedule for the nearest gym.", "Maps", "Logic", "UX"],
      ["Global Edge Hosting", "Deployment on Vercel to ensure your site loads instantly, capturing highly motivated users on their phones.", "DevOps", "Performance", "Scale"]
    ]
  },
  "schedules-booking-and-waitlists": {
    metaTitle: "Schedules, Booking & Waitlists",
    eyebrow: "Conversion",
    h1: "Frictionless class and service booking.",
    lead: "We engineer custom booking flows that connect directly to your studio management software, ensuring clients can easily secure a spot or join a waitlist without leaving your brand experience.",
    status: "Booking & Waitlists",
    points: [
      "Custom React-based booking flows that eliminate the need for clunky third-party widgets (e.g., Mindbody iframe)",
      "Live API integrations with major reservation platforms (Mindbody, Mariana Tek, Zenoti)",
      "Interactive spot-selection tools allowing clients to choose a specific bike or reformer bed"
    ],
    proof: [
      ["01 · Higher Conversion", "Remove the friction of being redirected to an ugly, separate booking domain."],
      ["02 · Flawless Mobile", "Ensure that booking a 6 AM class on an iPhone is a smooth, 10-second process."],
      ["03 · Dynamic Spot Selection", "Charge a premium for the 'front row' bikes directly in the flow."],
      ["04 · Smoother Waitlists", "Automatically move waitlisted clients into the class when a cancellation occurs via API."]
    ],
    problemsIntro: {
      eyebrow: "When booking is difficult",
      asideLead: "If a user is ready to book a class, don't make them fight a broken widget.",
      title: "Clunky booking widgets destroy class utilization.",
      mainLead: "Studios spend thousands on marketing only to send users to an out-of-the-box booking widget that looks terrible on mobile. When the schedule is slow to load, visually disconnected from the brand, or requires creating a confusing third-party account, the client abandons the reservation."
    },
    problems: [
      ["The Redirect Drop-off", "Users abandon the booking when they are suddenly redirected to a different URL (like Mindbody Online) to checkout."],
      ["Mobile Checkout Failures", "The legacy booking widget is not responsive, making it impossible to select a time slot or bike on an iPhone."],
      ["Loss of Brand Control", "The third-party booking platform controls the email confirmation and user account, diluting your brand."]
    ],
    deliverablesIntro: {
      title: "Custom reservation architecture.",
      lead: "We engineer booking flows that handle the heavy lifting of capacity logic while remaining beautiful and frictionless."
    },
    deliverables: [
      ["Custom Booking Frontends", "Building bespoke React booking flows that keep the user on your domain from class selection to confirmation.", "UX", "React", "Conversion"],
      ["Studio API Middleware", "Developing secure Node.js layers that translate availability requests between the modern frontend and legacy studio databases.", "APIs", "Integration", "Logic"],
      ["Spot Selection UI", "Building interactive, SVG-based room maps where users can pick their exact reformer or treadmill.", "React", "SVG", "UX"],
      ["Waitlist Automation", "Implementing logic to seamlessly handle waitlist joins and push notifications when a spot opens up.", "Operations", "Logic", "Service"]
    ]
  },
  "memberships-packs-and-payments": {
    metaTitle: "Memberships, Packs & Payments",
    eyebrow: "Revenue",
    h1: "Optimize your recurring revenue.",
    lead: "We build robust payment integrations supporting tiered memberships, class packs, and drop-in rates, seamlessly connected to Stripe and your core management system.",
    status: "Fitness E-commerce",
    points: [
      "Frictionless checkout flows for purchasing digital class packs and recurring monthly memberships",
      "Seamless API integrations connecting web purchases directly to the client's profile in the studio software",
      "Digital wallets supporting Apple Pay and Google Pay for one-click introductory offer purchases"
    ],
    proof: [
      ["01 · Increased Sales", "Make it incredibly easy for a new client to buy the '2-Week Unlimited Intro' package on their phone."],
      ["02 · Reduced Admin", "Stop your front desk staff from having to manually swipe credit cards or fix failed payments."],
      ["03 · Accurate Auto-Pay", "Ensure that recurring memberships are billed accurately and on schedule."],
      ["04 · Flexible Pricing", "Easily run flash sales or targeted promo codes directly through the custom frontend."]
    ],
    problemsIntro: {
      eyebrow: "When buying is hard",
      asideLead: "If it takes 5 steps to buy a class pack, the client will change their mind.",
      title: "Friction at checkout costs you members.",
      mainLead: "The moment a client decides to commit to a membership or a 10-pack, the process must be flawless. If they have to create a clunky account on a third-party site, enter their credit card multiple times, or encounter errors with a promo code, the impulse to buy is lost."
    },
    problems: [
      ["High Cart Abandonment", "Clients quit the checkout process because the legacy system requires too many unnecessary data fields."],
      ["Failed Recurring Billing", "You lose revenue because the current system doesn't have an elegant way to handle expired credit cards or retries."],
      ["Promo Code Chaos", "Marketing runs an Instagram campaign, but the off-the-shelf booking system cannot apply the discount correctly."]
    ],
    deliverablesIntro: {
      title: "Automated fitness commerce.",
      lead: "We engineer e-commerce experiences designed specifically for the unique pricing models of boutique fitness."
    },
    deliverables: [
      ["Custom Checkout Frontends", "React-based interfaces where users can select a membership tier, apply a promo code, and checkout in seconds.", "UX", "Commerce", "Conversion"],
      ["Studio System Syncing", "API integrations ensuring that when a pack is bought on the website, it instantly appears in the client's account in Mindbody or Mariana Tek.", "Integration", "APIs", "Data"],
      ["Subscription Management", "Implementing Stripe Billing to handle complex recurring payments, failed card dunning, and prorations.", "Payments", "Fintech", "Automation"],
      ["Digital Gift Cards", "Custom workflows allowing users to purchase, schedule, and email digital gift cards for class packs to friends.", "E-commerce", "Logic", "UX"]
    ]
  },
  "client-and-program-portals": {
    metaTitle: "Client & Program Portals",
    eyebrow: "Digital Service",
    h1: "Self-serve management for your clients.",
    lead: "We develop secure portals where members can manage their subscriptions, track their attendance, access digital wellness programs, and update their payment methods.",
    status: "Member Portals",
    points: [
      "Self-serve dashboards allowing clients to view upcoming bookings, cancel classes, and track their 'remaining credits'",
      "Digital content vaults for studios offering hybrid models (e.g., On-Demand video libraries or nutrition PDFs)",
      "Automated waitlist management allowing users to see their queue position and confirm/decline spots"
    ],
    proof: [
      ["01 · Reduced Support Calls", "Clients can cancel a class or update an expired credit card without calling the front desk."],
      ["02 · Increased Engagement", "Gamify the experience by showing clients their 'classes attended' milestones directly in the portal."],
      ["03 · Hybrid Revenue", "Monetize digital content by gating video libraries behind a specific membership tier."],
      ["04 · Seamless Check-in", "Provide a digital barcode or QR code in the portal for fast scanning at the studio entrance."]
    ],
    problemsIntro: {
      eyebrow: "When service is analog",
      asideLead: "Your front desk shouldn't be overwhelmed by people asking 'how many classes do I have left?'",
      title: "Lack of self-service frustrates modern members.",
      mainLead: "Boutique fitness clients expect a premium digital experience to match the premium physical experience. If they have to call the studio to cancel a booking, or if they are penalized with a late-cancel fee because the app crashed, they become frustrated and eventually churn."
    },
    problems: [
      ["High Admin Burden", "Your front desk team spends all day answering basic account questions instead of selling memberships to walk-ins."],
      ["Opaque Balances", "Clients don't know when their class pack expires, leading to angry emails when they lose unused credits."],
      ["Login Friction", "Users abandon their accounts because the password reset process is broken or relies on a confusing third-party email."]
    ],
    deliverablesIntro: {
      title: "Centralized member operations.",
      lead: "We engineer secure dashboards that give your clients complete control over their wellness journey."
    },
    deliverables: [
      ["Member Dashboards", "API integrations pulling live data from the studio software, allowing clients to view their active packs, upcoming bookings, and attendance history.", "Integration", "Dashboards", "Data"],
      ["Self-Serve Account Actions", "Logic engines that allow users to safely pause a membership, update a credit card, or cancel a class within the studio's policy window.", "Logic", "APIs", "Service"],
      ["Digital Content Delivery", "Custom interfaces for streaming gated VOD (Video on Demand) content or downloading specialized nutrition programs based on their subscription tier.", "Media", "Auth", "UX"],
      ["Identity Management (CIAM)", "Secure, centralized login flows using Auth0 to ensure a seamless experience across web and native mobile apps.", "Security", "Auth", "Data"]
    ]
  },
  "studio-and-wellness-dashboards": {
    metaTitle: "Studio & Wellness Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visibility across your entire fitness group.",
    lead: "We aggregate data from your booking system (like Mindbody or Mariana Tek) into executive dashboards tracking class utilization, membership churn, and revenue per square foot.",
    status: "Operations Analytics",
    points: [
      "Unified BI dashboards tracking core metrics (Utilization Rate, Churn, Yield per Class) across a multi-studio group",
      "Instructor scorecarding to identify which trainers are consistently driving waitlists versus low attendance",
      "Real-time tracking of introductory offer conversions to measure marketing ROI"
    ],
    proof: [
      ["01 · Live Decision Making", "Identify a consistently empty Tuesday morning class and adjust the schedule or instructor quickly."],
      ["02 · Margin Visibility", "Instantly see how much profit a specific location is generating after payroll and rent."],
      ["03 · Yield Optimization", "Track which specific membership tiers or class packs are actually driving the highest lifetime value."],
      ["04 · Automated Reporting", "Eliminate the days spent manually merging Mindbody reports in Excel to build the monthly packet."]
    ],
    problemsIntro: {
      eyebrow: "When studio data is siloed",
      asideLead: "You can't manage a 20-location franchise looking at fragmented scheduling reports.",
      title: "Data silos hide true studio profitability.",
      mainLead: "Fitness executives are forced to make strategic decisions with fragmented data. If booking data is in one system, payroll is in another, and digital marketing spend is in Google Ads, calculating the true profitability of a specific location or the conversion rate of a marketing campaign is nearly impossible."
    },
    problems: [
      ["Hidden Margin Erosion", "Management doesn't realize that a specific high-volume studio is actually unprofitable due to high instructor payroll and low utilization rates."],
      ["Blind Marketing", "You spend thousands on Instagram ads to drive 'Intro Packs' but can't accurately trace how many of those users converted to full memberships."],
      ["Reporting Fatigue", "Operations managers spend hours manually extracting and merging data from different regional systems to build the weekly board pack."]
    ],
    deliverablesIntro: {
      title: "Command centers for fitness executives.",
      lead: "We engineer data aggregation platforms that give leadership the real-time insights needed to optimize yield and scale operations."
    },
    deliverables: [
      ["Executive Scorecards", "High-level visual dashboards tracking KPIs like Total Active Members, Revenue per Visit, and overall class utilization percentages.", "BI", "Dashboards", "Metrics"],
      ["Data Warehousing", "Pipelines that extract data from disparate systems (Booking, Payroll, Marketing) and normalize it in a cloud data warehouse.", "ETL", "Cloud", "Data"],
      ["Instructor Analytics", "Visual tools to track true profitability by correlating specific instructors with high attendance, retention, and merchandise sales.", "Analytics", "Data", "Finance"],
      ["Automated P&L Reporting", "Dynamic engines to instantly generate branded PDF or email summaries for studio managers and franchise owners.", "Reporting", "PDFs", "Automation"]
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
