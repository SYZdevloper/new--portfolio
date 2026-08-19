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
                            <p className="eyebrow">Featured Travel Platform</p>
                            <h2>Modernizing global tour operations.</h2>
                        </div>
                        <p>See how we helped a global luxury tour operator migrate from an outdated legacy reservation system to a modern headless architecture, resulting in a 40% increase in direct consumer bookings and massive efficiency gains for their travel agents.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Travel Tech</span>
                                <span>Reservation Systems</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/travel-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From discovery to departure.</h2>
                                <p>We developed a custom frontend that integrates directly with their Tour Operator Software (TourCMS). By removing the friction of a clunky booking widget and building a dynamic itinerary planner, we transformed how customers buy complex travel.</p>
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
                        <h2 id="faq-title">Common questions about travel tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with our Tour Operator Software or GDS?</summary>
                            <p>We build secure API middleware to connect your headless frontend directly to platforms like TourCMS, Rezdy, or major GDS (Global Distribution Systems) like Amadeus. This ensures live availability, dynamic pricing, and seamless reservation injection.</p>
                        </details>
                        <details>
                            <summary>Can you build custom multi-day booking engines?</summary>
                            <p>Yes. Off-the-shelf booking tools often fail when a trip involves multiple hotels, flights, and activities over 14 days. We build fully custom React-based booking flows that handle complex, multi-leg itineraries intuitively.</p>
                        </details>
                        <details>
                            <summary>How do you handle dynamic pricing and multiple currencies?</summary>
                            <p>Our custom booking engines calculate live pricing based on your backend rules (seasonality, capacity) and use geolocation to display the correct currency. We integrate with gateways like Stripe to process payments natively without redirects.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other travel capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/destination-and-trip-discovery/"><div><small>Discovery</small><h3>Destination Hubs</h3><p>Ignite the desire to travel.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/availability-and-booking-journeys/"><div><small>Revenue</small><h3>Booking Journeys</h3><p>Streamline complex bookings.</p></div><b>Explore booking ↗</b></a>
                        <a className="related-card" href="/services/itinerary-and-planning-tools/"><div><small>Customization</small><h3>Planning Tools</h3><p>Build the perfect trip.</p></div><b>Explore tools ↗</b></a>
                        <a className="related-card" href="/services/traveller-portals/"><div><small>Service</small><h3>Traveller Portals</h3><p>A digital companion.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your travel <br />and tour operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From visually stunning destination hubs to custom multi-leg booking engines and digital traveller portals, we build software that drives direct bookings and elevates the journey.</p>
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
  "destination-and-trip-discovery": {
    metaTitle: "Destination & Trip Discovery",
    eyebrow: "Inspiration & Discovery",
    h1: "Ignite the desire to travel.",
    lead: "We build visually rich, fast-loading destination hubs and tour catalogues that inspire travelers and funnel high-intent traffic into your booking engine.",
    status: "Destination Discovery",
    points: [
      "Visually rich storytelling utilizing ambient video and interactive maps",
      "Advanced faceted search allowing users to filter trips by region, activity level, or theme",
      "Headless CMS setups allowing marketing teams to launch seasonal campaigns instantly"
    ],
    proof: [
      ["01 · Brand Elevation", "Digital experiences that match the awe of the physical destination."],
      ["02 · Unbreakable Speed", "Sub-second load times even with massive hero videos and high-res galleries."],
      ["03 · SEO Optimized", "Structure that ranks higher for destination and experience-specific searches."],
      ["04 · Marketing Agility", "Empower your team to update itineraries and media without developer help."]
    ],
    problemsIntro: {
      eyebrow: "When digital fails to inspire",
      asideLead: "Selling a $10,000 African safari on a slow, template-based website is almost impossible.",
      title: "Poor digital experiences kill travel conversions.",
      mainLead: "Travel is an emotional purchase driven by visuals. If a prospective traveler lands on a sluggish website with broken image galleries and dense, unreadable text blocks, the inspiration vanishes. They will simply bounce and book with a competitor whose digital presence feels more trustworthy."
    },
    problems: [
      ["Slow Rich Media", "High-production drone videos cause the website to freeze and crash on mobile devices."],
      ["Frustrating Search", "Users cannot easily filter your 500+ tours to find the exact dates, physical rating, and destination they want."],
      ["Developer Bottlenecks", "Marketing is unable to launch a 'Summer Sale' landing page without waiting weeks for IT support."]
    ],
    deliverablesIntro: {
      title: "Digital flagships for travel brands.",
      lead: "We build decoupled frontend experiences that prioritize immersive storytelling without sacrificing speed."
    },
    deliverables: [
      ["Headless Architecture", "Next.js frontends connected to Sanity or Contentful, separating the visual experience from the backend reservation data.", "React", "Headless", "Speed"],
      ["Advanced Search Integration", "Implementing Algolia or Typesense to allow instant, typo-tolerant filtering of complex travel catalogues.", "Search", "UX", "Discovery"],
      ["Immersive Visuals", "Custom CSS and WebGL animations to visually guide users through itineraries, route maps, and local experiences.", "WebGL", "Maps", "Storytelling"],
      ["Global Edge Hosting", "Deployment on Vercel to ensure your site loads instantly whether the user is in London or Sydney.", "DevOps", "Performance", "Scale"]
    ]
  },
  "availability-and-booking-journeys": {
    metaTitle: "Availability & Booking Journeys",
    eyebrow: "Conversion",
    h1: "Streamline complex multi-leg bookings.",
    lead: "We engineer custom booking engines that handle the complexities of travel—dynamic pricing, real-time inventory from API integrations, and multi-currency checkouts.",
    status: "Booking Engines",
    points: [
      "Custom React-based booking flows that eliminate the need for clunky third-party widgets",
      "Live API integrations with major reservation systems (TourCMS, Rezdy, FareHarbor)",
      "Dynamic pricing logic supporting seasonality, group discounts, and multi-currency"
    ],
    proof: [
      ["01 · Higher Conversion", "Remove the friction of being redirected to an ugly, separate booking domain."],
      ["02 · Dynamic Upsells", "Offer pre-trip extensions, insurance, and activity upgrades directly in the flow."],
      ["03 · Accurate Pricing", "Guarantee that the rate shown on the website exactly matches your reservation backend."],
      ["04 · B2B / B2C Ready", "Serve both direct consumers and travel agents with different pricing from the same frontend."]
    ],
    problemsIntro: {
      eyebrow: "When booking is difficult",
      asideLead: "If a user is ready to spend $5,000, don't make them fight a broken widget.",
      title: "Clunky booking engines destroy direct revenue.",
      mainLead: "Tour operators spend thousands on marketing only to send users to an out-of-the-box booking widget that looks like it was built in 2005. When the booking engine is slow, visually disconnected from the brand, or fails to calculate complex group pricing on mobile, the traveler abandons the cart."
    },
    problems: [
      ["The Redirect Drop-off", "Users abandon the booking when they are suddenly redirected to a different URL with a completely different design."],
      ["Mobile Checkout Failures", "The legacy booking widget is not responsive, making it impossible to select complex dates or add-ons on an iPhone."],
      ["Inflexible Logic", "The out-of-the-box tool cannot handle your specific business rules, like requiring a 20% deposit now and the balance 60 days prior."]
    ],
    deliverablesIntro: {
      title: "Custom booking architecture.",
      lead: "We engineer booking engines that handle the heavy lifting of travel logic while remaining beautiful and frictionless."
    },
    deliverables: [
      ["Custom Booking Frontends", "Building bespoke React booking flows that keep the user on your domain from date selection to payment.", "UX", "React", "Conversion"],
      ["Reservation API Middleware", "Developing secure Node.js layers that translate availability requests between the modern frontend and legacy tour software databases.", "APIs", "Integration", "Logic"],
      ["Complex Pricing Engines", "Ensuring that seasonality rules, child vs. adult rates, and promo codes are accurately reflected in real-time.", "Logic", "Pricing", "Rates"],
      ["Payment Gateway Integration", "Implementing Stripe or Adyen to support split payments, deposits, and local international payment methods.", "Payments", "Security", "Fintech"]
    ]
  },
  "itinerary-and-planning-tools": {
    metaTitle: "Itinerary & Planning Tools",
    eyebrow: "Trip Customization",
    h1: "Empower travelers to build their perfect trip.",
    lead: "We develop interactive planning tools where users can drag-and-drop activities, select room types, and build custom itineraries that generate precise quotes instantly.",
    status: "Planning Tools",
    points: [
      "Interactive drag-and-drop itinerary builders for Fully Independent Travel (FIT) packages",
      "Dynamic pricing calculators that update the total cost in real-time as users add days or upgrades",
      "Automated PDF quote generation for complex multi-leg journeys"
    ],
    proof: [
      ["01 · Higher Engagement", "Users spend significantly more time on site when they can visually build their trip."],
      ["02 · Faster Sales Cycles", "Reduce the back-and-forth emails between your travel agents and the customer."],
      ["03 · Increased AOV", "Travelers are more likely to upgrade when they can instantly see the incremental cost."],
      ["04 · Lead Generation", "Capture high-intent leads by requiring an email to save or download the custom itinerary."]
    ],
    problemsIntro: {
      eyebrow: "When customization is manual",
      asideLead: "Your sales team shouldn't spend hours typing up quotes in Word documents.",
      title: "Manual quoting creates an expensive bottleneck.",
      mainLead: "Modern travelers want bespoke experiences, but if they have to wait 48 hours for a travel agent to email them a PDF quote for a custom trip, they lose interest. When customization is purely manual, your sales team is bogged down in admin work instead of actually selling."
    },
    problems: [
      ["Slow Response Times", "Customers request a custom trip, but your team takes two days to calculate the pricing across five different suppliers."],
      ["Visual Disconnect", "The quote sent to the customer is a dense text email or a boring spreadsheet, lacking the inspirational imagery that sells the trip."],
      ["Inflexible Changes", "If the customer wants to change one hotel, the agent has to recalculate the entire trip manually."]
    ],
    deliverablesIntro: {
      title: "Digital trip building.",
      lead: "We build platforms that turn complex travel planning into an engaging, visual, and instantaneous experience."
    },
    deliverables: [
      ["Interactive Trip Builders", "React-based interfaces where users can select starting dates, add destinations, and choose accommodation tiers visually.", "UX", "React", "Logic"],
      ["Real-time Quoting Engines", "Logic layers that instantly calculate total package costs based on the specific combination of components selected.", "Logic", "Pricing", "APIs"],
      ["Dynamic PDF Generators", "Engines that take the selected itinerary and automatically generate a stunning, image-rich PDF quote ready for the customer.", "Reporting", "PDFs", "Automation"],
      ["Agent Co-Browsing", "Features allowing your sales team to log in 'as the customer' to build or modify the itinerary collaboratively.", "Auth", "Sales", "Support"]
    ]
  },
  "traveller-portals": {
    metaTitle: "Traveller Portals",
    eyebrow: "Post-Booking Service",
    h1: "A digital companion for the entire journey.",
    lead: "We build secure portals where travelers can manage their bookings, download digital tickets, view daily itineraries, and receive live updates while on the road.",
    status: "Traveller Portals",
    points: [
      "Mobile-first Progressive Web Apps (PWAs) allowing travelers to access their itinerary without downloading an app",
      "Secure digital vaults for storing passports, visas, and electronic flight tickets",
      "Automated pre-trip checklists and payment reminders for upcoming balances"
    ],
    proof: [
      ["01 · Reduced Support Calls", "Travelers can find their own answers (e.g., meeting times, hotel addresses) without calling your team."],
      ["02 · Faster Payments", "Automated reminders and a one-click payment portal ensure final balances are paid on time."],
      ["03 · Seamless Communication", "Push real-time updates (e.g., 'The bus is 10 minutes late') directly to the traveler's phone."],
      ["04 · Operational Efficiency", "Digitize the collection of dietary requirements and waiver signatures."]
    ],
    problemsIntro: {
      eyebrow: "When service is analog",
      asideLead: "Mailing physical welcome packs or relying on PDF attachments is outdated.",
      title: "Fragmented communication causes anxiety.",
      mainLead: "Once a traveler books, the anxiety sets in. Do they have the right visa? When is the final payment due? Where do they meet the guide? If your company relies on a dozen different email threads to manage this process, critical information gets lost, leading to stressed travelers and overwhelmed support staff."
    },
    problems: [
      ["Lost Information", "Travelers can't find the email with their hotel voucher when they are standing at the check-in desk in a foreign country."],
      ["Payment Chasing", "Your finance team spends hours calling customers to collect final balance payments 60 days before departure."],
      ["Manual Data Collection", "Staff manually copy and paste passport numbers and dietary requirements from emails into the reservation system."]
    ],
    deliverablesIntro: {
      title: "The digital travel companion.",
      lead: "We engineer mobile-first tools that put the entire trip details securely in the traveler's pocket."
    },
    deliverables: [
      ["Traveller Web Apps (PWAs)", "Building fast, app-like portals accessible via a magic link in an email—no App Store download required.", "PWA", "Mobile", "UX"],
      ["Digital Itineraries", "Creating interactive daily schedules complete with maps, guide contact details, and weather forecasts.", "UX", "Maps", "Integration"],
      ["Secure Data Collection", "Encrypted digital forms allowing guests to submit passport details, dietary requirements, and digital waivers.", "Forms", "Security", "Compliance"],
      ["Self-Serve Payment Gateways", "Integrating Stripe to allow travelers to view their outstanding balance and pay via credit card or ACH securely.", "Payments", "Finance", "APIs"]
    ]
  },
  "travel-operations-dashboards": {
    metaTitle: "Travel Operations Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visibility across global tours and operations.",
    lead: "We aggregate data from your reservation system, accounting software, and marketing channels to provide real-time visibility into tour margins, capacity, and customer acquisition costs.",
    status: "Operations Analytics",
    points: [
      "Unified BI dashboards tracking core metrics (Yield, Capacity Utilization, Blended Margin) across all global tours",
      "Consolidated view of B2C direct bookings vs. B2B travel agent performance",
      "Real-time tracking of operational costs (guides, transport) against budgeted margins"
    ],
    proof: [
      ["01 · Portfolio Visibility", "See the performance of every tour and destination on a single screen."],
      ["02 · Channel Optimization", "Instantly understand which digital campaigns or agent networks are actually driving profitable bookings."],
      ["03 · Revenue Management", "Identify pacing trends early to adjust pricing, launch promotions, or cancel unprofitable departures."],
      ["04 · Automated Reporting", "Eliminate the days spent manually merging reservation exports in Excel."]
    ],
    problemsIntro: {
      eyebrow: "When travel data is siloed",
      asideLead: "You can't manage a global tour operator looking at fragmented reservation reports.",
      title: "Data silos hide true operational profitability.",
      mainLead: "Travel executives are forced to make strategic decisions with fragmented data. If booking revenue is in TourCMS, operational costs are in Xero, and marketing spend is in Google Ads, calculating the true profitability of a specific tour departure or marketing channel is nearly impossible."
    },
    problems: [
      ["Blind Marketing", "You spend thousands on digital ads but can't accurately trace which campaigns resulted in completed, high-margin trips."],
      ["Margin Erosion", "Management doesn't realize that a specific tour departure is actually losing money because local operational costs spiked."],
      ["Reporting Fatigue", "Analysts spend weeks manually extracting and merging data from different regional systems to build the monthly board pack."]
    ],
    deliverablesIntro: {
      title: "Command centers for travel executives.",
      lead: "We engineer data aggregation platforms that give leadership the real-time insights needed to optimize yield and global operations."
    },
    deliverables: [
      ["Executive Scorecards", "High-level visual dashboards tracking KPIs like Passenger Numbers, Average Booking Value, and overall capacity utilization.", "BI", "Dashboards", "Metrics"],
      ["Data Warehousing", "Pipelines that extract data from disparate property systems (TourCMS, Xero) and normalize it in a cloud data warehouse.", "ETL", "Cloud", "Data"],
      ["Margin & Yield Analytics", "Visual tools to track true profitability by combining booking revenue with actualized operational costs per departure.", "Analytics", "Data", "Finance"],
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
