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
                            <p className="eyebrow">Featured Omnichannel Platform</p>
                            <h2>Unifying the retail experience.</h2>
                        </div>
                        <p>See how we helped a national fashion retailer bridge the gap between their Shopify Plus storefront and their brick-and-mortar POS system, enabling true click-and-collect functionality and unified loyalty points.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Omnichannel Tech</span>
                                <span>POS & Web Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/omnichannel-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From online cart to in-store pickup.</h2>
                                <p>We developed a custom integration layer that syncs live physical store inventory to the web frontend, allowing customers to accurately check local stock, buy online, and pick up in-store within 2 hours.</p>
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
                        <h2 id="faq-title">Common questions about omnichannel retail tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle 'Buy Online, Pick Up In Store' (BOPIS) inventory sync?</summary>
                            <p>We build secure API middleware that connects your eCommerce platform to your physical Point of Sale (POS) system. This ensures that when a customer looks at a product online, they see exactly how many units are sitting on the shelf at their nearest physical store.</p>
                        </details>
                        <details>
                            <summary>Can loyalty points be earned and spent across both channels?</summary>
                            <p>Yes. We integrate unified loyalty management platforms that act as a single source of truth. If a customer buys a shirt in-store, the points instantly reflect in their digital wallet, and they can use those points during their next online checkout.</p>
                        </details>
                        <details>
                            <summary>Can you build custom store appointment booking systems?</summary>
                            <p>Absolutely. We build headless booking engines that allow customers to reserve specific services (like personal styling or equipment fitting) at specific physical locations, syncing directly with store staff calendars.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other retail capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/omnichannel-storefronts/"><div><small>Commerce</small><h3>Storefronts</h3><p>Connect the digital and physical aisle.</p></div><b>Explore storefronts ↗</b></a>
                        <a className="related-card" href="/services/pickup-delivery-and-returns/"><div><small>Fulfillment</small><h3>Pickup & Delivery</h3><p>Frictionless omnichannel logistics.</p></div><b>Explore fulfillment ↗</b></a>
                        <a className="related-card" href="/services/store-locator-and-appointments/"><div><small>Engagement</small><h3>Store Locator</h3><p>Drive foot traffic digitally.</p></div><b>Explore locators ↗</b></a>
                        <a className="related-card" href="/services/customer-accounts-and-loyalty/"><div><small>Retention</small><h3>Accounts & Loyalty</h3><p>Build unified customer relationships.</p></div><b>Explore loyalty ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your omnichannel <br />retail operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From seamless BOPIS (Buy Online Pick Up In Store) workflows to unified POS loyalty integrations, we build software that drives growth across every retail channel.</p>
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
  "omnichannel-storefronts": {
    metaTitle: "Omnichannel Storefronts",
    eyebrow: "Unified Commerce",
    h1: "Connect the digital and physical aisle.",
    lead: "We design high-performance headless storefronts that seamlessly bridge the gap between online browsing and in-store shopping for modern retailers.",
    status: "Storefronts",
    points: [
      "Ultra-fast page loads leveraging modern edge caching and Next.js architecture",
      "Dynamic stock indicators showing live availability at local brick-and-mortar stores",
      "Unified product discovery that accounts for both warehouse and store-level inventory"
    ],
    proof: [
      ["01 · Lightning Fast", "Sub-second load times that keep mobile shoppers engaged."],
      ["02 · Local Context", "Show users what is available right now in their city."],
      ["03 · SEO Optimized", "Structure that ranks higher in search engines for local retail intent."],
      ["04 · Headless Agility", "Update content independently of the complex backend inventory platform."]
    ],
    problemsIntro: {
      eyebrow: "When channels are siloed",
      asideLead: "Customers don't care about your internal systems; they just want to buy.",
      title: "Disconnected storefronts frustrate local shoppers.",
      mainLead: "If your website operates completely separately from your physical stores, you are losing sales. When a customer finds a product online but can't see if it's in stock at their local mall, they will often abandon the purchase rather than risk a wasted trip."
    },
    problems: [
      ["Inventory Blind Spots", "The website only shows warehouse stock, hiding thousands of units sitting on retail shelves."],
      ["Slow Mobile Experience", "Customers standing in your store try to look up product reviews on your site, but it's too slow to load."],
      ["Fragmented Branding", "The digital storefront looks and feels completely different from the physical in-store experience."]
    ],
    deliverablesIntro: {
      title: "Next-generation retail experiences.",
      lead: "We build decoupled frontend experiences that prioritize speed, aesthetics, and true omnichannel integration."
    },
    deliverables: [
      ["Headless Architecture", "Next.js frontends connected to Shopify Plus or commercetools, built specifically for speed and flexibility.", "React", "Headless", "Speed"],
      ["Live Local Inventory", "Custom integrations that ping the POS system to display 'Only 2 left at [Local Store]' directly on the product page.", "APIs", "UX", "Integration"],
      ["Advanced Search Integration", "Algolia or Typesense implementation for instant, faceted search results prioritizing local availability.", "Search", "UX", "Discovery"],
      ["CMS Integration", "Sanity or Contentful setups allowing marketing teams to push campaigns to digital screens in-store and the website simultaneously.", "CMS", "Agility", "Content"]
    ]
  },
  "pickup-delivery-and-returns": {
    metaTitle: "Pickup, Delivery & Returns",
    eyebrow: "Fulfillment",
    h1: "Frictionless omnichannel logistics.",
    lead: "We build robust fulfillment workflows including Buy Online, Pick Up In Store (BOPIS), ship-from-store logic, and automated self-serve returns portals.",
    status: "Fulfillment Operations",
    points: [
      "Streamlined 'Click & Collect' (BOPIS) checkout flows with location-based pickup windows",
      "Ship-from-store routing logic to fulfill online orders using local retail inventory",
      "Cross-channel return portals allowing online purchases to be easily returned in-store"
    ],
    proof: [
      ["01 · Increased Foot Traffic", "BOPIS customers frequently buy additional items when picking up their order."],
      ["02 · Lower Shipping Costs", "Fulfill orders from a local store rather than a distant central warehouse."],
      ["03 · Faster Delivery", "Enable same-day local delivery by treating your stores as micro-fulfillment centers."],
      ["04 · Easy Returns", "Reduce customer friction by allowing any item to be returned anywhere."]
    ],
    problemsIntro: {
      eyebrow: "When fulfillment creates friction",
      asideLead: "Every delayed pickup or difficult return costs you a repeat customer.",
      title: "Rigid logistics drive customers to competitors.",
      mainLead: "Modern shoppers expect ultimate flexibility. If they can't buy online and pick it up on their way home, or if they are forced to mail back a return instead of dropping it off at the mall, they view your brand as inconvenient."
    },
    problems: [
      ["Failed Pickups", "A customer arrives to collect a BOPIS order, but the store staff hasn't been notified because systems aren't synced."],
      ["Wasted Inventory", "Online items are 'sold out' at the warehouse, while hundreds sit untouched in retail stores."],
      ["Return Nightmares", "Customers are frustrated because store staff can't scan or process an online return receipt at the POS."]
    ],
    deliverablesIntro: {
      title: "Optimized fulfillment paths.",
      lead: "We build integrated workflows designed specifically to make moving products between channels effortless."
    },
    deliverables: [
      ["BOPIS Checkout Logic", "Custom checkout flows that lock in local inventory and allow customers to select specific pickup times.", "UX", "Checkout", "Logic"],
      ["Ship-From-Store Routing", "Middleware that analyzes online orders and automatically routes the fulfillment ticket to the nearest retail store with stock.", "Routing", "APIs", "Logistics"],
      ["Omnichannel RMA Portals", "Self-serve return interfaces that generate a barcode customers can scan directly at a physical store register.", "Returns", "UX", "Integration"],
      ["Staff Fulfillment Dashboards", "Tablet-friendly interfaces for store staff to receive, pick, and pack online orders efficiently.", "React", "Operations", "UI"]
    ]
  },
  "store-locator-and-appointments": {
    metaTitle: "Store Locator & Appointments",
    eyebrow: "In-Store Experience",
    h1: "Drive foot traffic through digital engagement.",
    lead: "We engineer advanced geolocation tools and booking engines, allowing customers to easily find physical stock, book styling sessions, or reserve fitting rooms.",
    status: "Store Engagement",
    points: [
      "Advanced, map-based store locators with live operating hours and facility details",
      "Headless appointment booking systems for personal styling, repairs, or consultations",
      "Event ticketing and RSVP management for in-store brand activations"
    ],
    proof: [
      ["01 · Higher Footfall", "Make it effortless for customers to find the exact location carrying their desired product."],
      ["02 · Guaranteed Service", "Allow VIP customers to book dedicated time with store experts."],
      ["03 · Better Staff Planning", "Store managers can roster staff based on booked appointments and expected traffic."],
      ["04 · Local SEO", "Generate dedicated, SEO-optimized landing pages for every physical store location."]
    ],
    problemsIntro: {
      eyebrow: "When digital fails physical",
      asideLead: "If they can't find your store or book a service, they'll go to the mall next door.",
      title: "Poor local digital presence hurts store performance.",
      mainLead: "Your physical stores are your biggest asset, but if your website only features a clunky PDF list of addresses, you aren't leveraging them. Customers want to see exactly how far away a store is, if it's open right now, and if they can book a dedicated service."
    },
    problems: [
      ["Frustrating Navigation", "Customers struggle to find store operating hours on mobile, leading to arriving at a closed shop."],
      ["Missed VIP Opportunities", "High-value customers abandon the idea of a styling session because they have to call the store to book it."],
      ["Poor Local Search", "Your individual stores don't rank on Google Maps because they lack dedicated, structured local web pages."]
    ],
    deliverablesIntro: {
      title: "Digital tools for physical spaces.",
      lead: "We engineer features that actively push digital browsers into your brick-and-mortar locations."
    },
    deliverables: [
      ["Dynamic Store Locators", "Mapbox or Google Maps integrations with geolocation routing, showing the closest stores and their current stock levels.", "Maps", "Geolocation", "UX"],
      ["Headless Booking Engines", "Custom React interfaces that connect to scheduling software (like Acuity or custom APIs) for booking in-store services.", "Scheduling", "APIs", "React"],
      ["Local SEO Pages", "Programmatically generated pages for every retail location, utilizing structured schema data for maximum Google visibility.", "SEO", "CMS", "Performance"],
      ["Event RSVP Portals", "Secure, gated registration flows for exclusive in-store product launches or VIP nights.", "Forms", "Events", "Auth"]
    ]
  },
  "customer-accounts-and-loyalty": {
    metaTitle: "Customer Accounts & Loyalty",
    eyebrow: "Retention",
    h1: "Build lasting omnichannel relationships.",
    lead: "We develop unified customer portals that track loyalty points across both physical POS and online checkouts, ensuring a consistent brand experience everywhere.",
    status: "Customer Retention",
    points: [
      "Unified digital wallets storing loyalty points earned both in-store and online",
      "Single Sign-On (SSO) and social login for a frictionless account experience",
      "Personalized dashboards showing complete omnichannel purchase history and digital receipts"
    ],
    proof: [
      ["01 · Higher LTV", "Encourage repeat purchases through engaging, easy-to-understand loyalty mechanics."],
      ["02 · Unified Identity", "Stop treating the same customer as two different people online and offline."],
      ["03 · Personalization", "Tailor online recommendations based on what they tried on and bought in-store."],
      ["04 · Reduced Support", "Allow customers to manage preferences and reprint receipts without calling support."]
    ],
    problemsIntro: {
      eyebrow: "When loyalty is fragmented",
      asideLead: "Telling a customer they 'can't use those points online' destroys brand trust.",
      title: "Disconnected accounts frustrate your best customers.",
      mainLead: "Loyalty programs fail when they are difficult to use. If a customer spends thousands in your flagship store but logs into your website to see '0 points' because the systems don't talk to each other, you are actively alienating your most valuable demographic."
    },
    problems: [
      ["Siloed Rewards", "Customers are furious when they realize their in-store purchases aren't counting towards their digital VIP tier."],
      ["Login Friction", "Users abandon their accounts because they have different passwords for the app, the website, and the loyalty program."],
      ["Fragmented Data", "Marketing teams send emails promoting a product the customer just bought in-store yesterday."]
    ],
    deliverablesIntro: {
      title: "A single view of the customer.",
      lead: "We engineer digital identity solutions where customers feel recognized and valued, regardless of where they shop."
    },
    deliverables: [
      ["Unified Loyalty Integrations", "Connecting systems like Yotpo or Smile.io directly into both the headless website and the physical POS (via API middleware).", "Loyalty", "APIs", "Rewards"],
      ["Identity Management (CIAM)", "Secure, centralized login flows using Auth0 or custom JWTs, ensuring one identity across all brand touchpoints.", "Security", "Auth", "Data"],
      ["Omnichannel Order History", "React-based profile pages that merge online orders and scanned in-store receipts into a single chronological feed.", "React", "Data", "UX"],
      ["Digital Membership Cards", "Generating dynamic QR codes or Apple Wallet passes within the portal for easy scanning at physical registers.", "Mobile", "Integration", "UX"]
    ]
  },
  "retail-operations-dashboards": {
    metaTitle: "Retail Operations Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visibility across every channel.",
    lead: "We aggregate data from your eCommerce platform, in-store POS, and warehouse systems into executive dashboards tracking total revenue, inventory turnover, and staff efficiency.",
    status: "Retail Analytics",
    points: [
      "Unified BI dashboards combining online conversion rates with physical store foot traffic",
      "Real-time tracking of BOPIS fulfillment times and ship-from-store efficiency",
      "Predictive analytics for omnichannel demand forecasting and stock rebalancing"
    ],
    proof: [
      ["01 · Actionable Insights", "Consolidate fragmented omnichannel data into clear, actionable metrics."],
      ["02 · Inventory Optimization", "Forecast demand accurately to prevent stockouts in high-traffic retail locations."],
      ["03 · Staff Efficiency", "Track how quickly store teams are picking and packing online orders."],
      ["04 · True Omnichannel ROI", "Understand how digital marketing spend directly drives physical store visits."]
    ],
    problemsIntro: {
      eyebrow: "When retail data is siloed",
      asideLead: "You can't optimize an omnichannel business looking at separate reports.",
      title: "Fragmented data leads to missed opportunities.",
      mainLead: "Retail executives often struggle with data spread across Shopify, their physical POS system, and their warehouse ERP. This fragmentation makes it impossible to quickly understand which channels are truly driving profitability and where inventory is getting stuck."
    },
    problems: [
      ["Blind Merchandising", "Online and in-store inventory allocations are based on guesswork rather than unified, real-time conversion data."],
      ["Fulfillment Bottlenecks", "Management doesn't realize a specific retail store is taking 4 hours to pick BOPIS orders, ruining the customer experience."],
      ["Reporting Fatigue", "Analysts spend hours manually compiling reports in Excel to merge online sales with physical register data."]
    ],
    deliverablesIntro: {
      title: "Intelligent retail command centers.",
      lead: "We build data platforms and custom tooling that give your leadership team the power to operate a unified commerce network."
    },
    deliverables: [
      ["Executive Scorecards", "Custom BI interfaces tracking high-level KPIs like Omnichannel LTV, margin performance, and store-by-store fulfillment times.", "BI", "Dashboards", "Metrics"],
      ["Data Warehousing", "Pipelines extracting data from digital commerce platforms, physical POS systems, and ERPs into a central cloud repository.", "ETL", "Data", "Cloud"],
      ["Fulfillment Analytics", "Visual tools to chart BOPIS SLAs (Service Level Agreements) and compare ship-from-store efficiency across different retail locations.", "Analytics", "React", "Operations"],
      ["Automated Reporting", "Dynamic engines to instantly generate branded PDF or email summaries for regional managers and retail executives.", "Reporting", "PDFs", "Automation"]
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
