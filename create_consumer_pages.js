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
                            <p className="eyebrow">Featured Consumer Brand Platform</p>
                            <h2>Unifying wholesale and D2C.</h2>
                        </div>
                        <p>See how we helped a global consumer goods brand launch a headless product experience that serves millions of D2C shoppers while simultaneously powering a secure portal for their massive retail distribution network.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Brand Tech</span>
                                <span>B2B & D2C Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/brand-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>A single source of product truth.</h2>
                                <p>We developed a custom architecture connected to their PIM that ensures every product launch features perfectly synced marketing copy, high-res assets, and pricing, whether the user is a retail buyer or an end consumer.</p>
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
                        <h2 id="faq-title">Common questions about consumer brand tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle massive traffic spikes during product launches?</summary>
                            <p>We build Campaign & Launch experiences using static site generation (SSG) via Next.js and host them on global edge networks (like Vercel). This ensures the site remains lightning-fast even when millions of users hit it simultaneously during a drop.</p>
                        </details>
                        <details>
                            <summary>Can you integrate a B2B wholesale portal with our existing ERP?</summary>
                            <p>Yes. We build custom API middleware that allows your Retailer Portals to talk directly to legacy ERPs (like SAP or NetSuite), ensuring that wholesale customers see their specific contract pricing and live inventory without manual data entry.</p>
                        </details>
                        <details>
                            <summary>What is a PIM and why do we need one?</summary>
                            <p>A Product Information Management (PIM) system acts as the central brain for your product data. We integrate your website with your PIM so that when marketing updates a product description or pack shot, it automatically updates on your D2C site, your B2B portal, and your retailer feeds.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other consumer brand capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/brand-and-product-websites/"><div><small>Brand Experience</small><h3>Brand Websites</h3><p>Immersive digital brand homes.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/campaign-and-launch-experiences/"><div><small>Activations</small><h3>Campaigns & Launches</h3><p>High-impact product drops.</p></div><b>Explore campaigns ↗</b></a>
                        <a className="related-card" href="/services/retailer-and-distributor-portals/"><div><small>B2B Commerce</small><h3>Retailer Portals</h3><p>Empower your wholesale channel.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/product-information-and-assets/"><div><small>Data</small><h3>Product Information</h3><p>A single source of truth.</p></div><b>Explore PIM ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your consumer brand <br />and wholesale operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From high-traffic product launches to complex B2B distributor portals and PIM integrations, we build software that drives growth across your entire channel ecosystem.</p>
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
  "brand-and-product-websites": {
    metaTitle: "Brand & Product Websites",
    eyebrow: "Brand Experience",
    h1: "Immersive digital brand homes.",
    lead: "We design high-performance product websites that communicate your brand's unique story, educate consumers, and drive demand directly to your retail partners or D2C channels.",
    status: "Brand Websites",
    points: [
      "Rich, interactive storytelling combining video, 3D assets, and micro-animations",
      "Dynamic 'Where to Buy' locators routing traffic directly to authorized retail partners",
      "Headless CMS architecture allowing marketing teams to update content instantly"
    ],
    proof: [
      ["01 · Premium Aesthetics", "Digital experiences that match the quality of your physical products."],
      ["02 · Channel Harmony", "Push traffic to your D2C cart or directly to key retail partners."],
      ["03 · Unbreakable Speed", "Sub-second load times even with massive hero videos and rich media."],
      ["04 · Marketing Agility", "Empower your team to launch landing pages without developer help."]
    ],
    problemsIntro: {
      eyebrow: "When your brand is compromised",
      asideLead: "A premium physical product on a slow, generic website damages brand equity.",
      title: "Poor digital experiences erode consumer trust.",
      mainLead: "Consumer brands spend millions on packaging and product development, only to push traffic to sluggish, template-based websites. If your site doesn't visually captivate the user or clearly explain the product benefits, they will buy a competitor's product sitting on the same retail shelf."
    },
    problems: [
      ["Slow Rich Media", "Your high-production campaign videos cause the website to freeze and crash on mobile devices."],
      ["Where to Buy Friction", "Consumers want your product but can't figure out which local retailer actually has it in stock."],
      ["Developer Bottlenecks", "Marketing is unable to update the homepage for a new season without waiting weeks for IT support."]
    ],
    deliverablesIntro: {
      title: "Digital flagships for modern brands.",
      lead: "We build decoupled frontend experiences that prioritize immersive storytelling without sacrificing speed."
    },
    deliverables: [
      ["Headless Architecture", "Next.js frontends connected to Sanity or Contentful, separating the visual experience from the backend data.", "React", "Headless", "Speed"],
      ["'Where to Buy' Integrations", "Custom logic that connects to retailer inventory feeds or maps to direct users to the nearest stockist.", "APIs", "Maps", "Conversion"],
      ["Interactive Product Education", "WebGL and advanced CSS animations to visually break down product features (e.g., shoe tech, skincare ingredients).", "WebGL", "UX", "Storytelling"],
      ["Global Edge Hosting", "Deployment on Vercel to ensure your brand site loads instantly whether the user is in New York or Tokyo.", "DevOps", "Performance", "Scale"]
    ]
  },
  "campaign-and-launch-experiences": {
    metaTitle: "Campaign & Launch Experiences",
    eyebrow: "Marketing Activations",
    h1: "High-impact product launches.",
    lead: "We build interactive micro-sites, AR experiences, and high-traffic campaign landing pages designed to capture attention and convert hype into sales during major product drops.",
    status: "Campaign Activations",
    points: [
      "Ultra-scalable infrastructure designed specifically to handle massive, sudden traffic spikes (drops)",
      "Interactive data capture mechanics (quizzes, waitlists, AR filters) to build zero-party data",
      "Seamless integration with your core CRM and D2C checkout flows"
    ],
    proof: [
      ["01 · Zero Downtime", "Architecture built to withstand the traffic of a global influencer campaign."],
      ["02 · Data Capture", "Turn anonymous hype into owned email and SMS subscribers."],
      ["03 · Immersive Tech", "Leverage WebGL and AR to let consumers interact with the product before it drops."],
      ["04 · Rapid Deployment", "Frameworks designed to spin up campaign sites in weeks, not months."]
    ],
    problemsIntro: {
      eyebrow: "When the drop fails",
      asideLead: "Nothing kills marketing ROI faster than a website crashing on launch day.",
      title: "Traffic spikes expose weak digital infrastructure.",
      mainLead: "You secured the influencer, paid for the ads, and generated the hype. When the campaign goes live, millions of users hit the site—and it crashes. Standard monolithic websites simply cannot handle the sudden concurrency of a major product drop, resulting in lost revenue and a PR nightmare."
    },
    problems: [
      ["Server Crashes", "The website goes down completely within minutes of the campaign launch email being sent."],
      ["Boring Activations", "The 'campaign' is just a standard landing page that fails to engage users or capture their data."],
      ["Disconnected Journeys", "Users sign up for the waitlist on a third-party app, breaking the seamless brand experience."]
    ],
    deliverablesIntro: {
      title: "Bulletproof launch architecture.",
      lead: "We engineer campaign experiences that are as technically resilient as they are visually stunning."
    },
    deliverables: [
      ["Static Site Generation (SSG)", "Using Next.js to pre-build the campaign site, meaning millions of users can hit it without querying a database.", "SSG", "Scale", "Reliability"],
      ["Interactive WebGL", "Custom 3D experiences allowing users to spin, explode, or customize the new product directly in the browser.", "3D", "React", "Engagement"],
      ["Waitlist & Lead Gen APIs", "Secure middleware that rapidly captures massive volumes of user data and queues it for syncing to Salesforce or Klaviyo.", "APIs", "Data", "CRM"],
      ["Countdown & Scarcity Logic", "Real-time edge functions that manage synchronized countdown timers and live inventory scarcity across the globe.", "Edge", "Logic", "UX"]
    ]
  },
  "retailer-and-distributor-portals": {
    metaTitle: "Retailer & Distributor Portals",
    eyebrow: "B2B Commerce",
    h1: "Empower your wholesale channel.",
    lead: "We engineer secure B2B portals where major retailers and independent stockists can easily place bulk orders, access merchandising guidelines, and download high-res campaign assets.",
    status: "B2B Portals",
    points: [
      "Custom B2B ordering engines featuring complex case-pack rules and customer-specific tier pricing",
      "Self-serve marketing hubs where retailers can download authorized brand assets and POS displays",
      "Seamless integration with legacy manufacturing ERPs (SAP, NetSuite) for live inventory visibility"
    ],
    proof: [
      ["01 · Contract Pricing", "Ensure every wholesale buyer sees their exact negotiated tier pricing."],
      ["02 · Brand Consistency", "Give stockists instant access to the correct, up-to-date campaign imagery."],
      ["03 · Faster Ordering", "Replace emailed Excel order forms with a streamlined digital B2B cart."],
      ["04 · Self-Serve Admin", "Retailers can download invoices and track shipments without calling your team."]
    ],
    problemsIntro: {
      eyebrow: "When B2B ordering is manual",
      asideLead: "Processing wholesale orders via email is an expensive bottleneck.",
      title: "Complex B2B logic breaks standard e-commerce.",
      mainLead: "Wholesale operations are fundamentally different from D2C. Standard Shopify stores cannot handle the reality of B2B: customer-specific pricing tiers, complex volume rebates, pack-size rules, and net-30 payment terms. When ordering is manual, your customer service team wastes time on data entry instead of sales."
    },
    problems: [
      ["Order Entry Errors", "A rep miskeys an order from an email, resulting in the wrong SKU being shipped to a major department store."],
      ["Brand Dilution", "Independent retailers use blurry, outdated imagery on their websites because they can't access your current campaign assets."],
      ["Stockout Frustration", "Buyers place bulk orders blindly without knowing if the product is actually in your warehouse, leading to backorders."]
    ],
    deliverablesIntro: {
      title: "Custom B2B commerce engines.",
      lead: "We build bespoke wholesale platforms that understand the specific business logic of consumer brands."
    },
    deliverables: [
      ["Custom Pricing Logic", "Middleware that queries the ERP in real-time to display the correct price based on the logged-in retailer's specific contract.", "Logic", "Pricing", "APIs"],
      ["B2B Order Grids", "Custom React interfaces allowing buyers to add dozens of variants (sizes/colors) to their cart simultaneously from a single grid.", "UX", "Cart", "React"],
      ["Brand Asset Vaults", "Secure, gated directories within the portal where retailers can download localized merchandising guidelines and high-res imagery.", "DAM", "Assets", "Brand"],
      ["ERP Middleware", "Secure Node.js translation layers that read/write orders directly into SAP or Epicor without exposing the core database.", "Integration", "Node.js", "ERP"]
    ]
  },
  "product-information-and-assets": {
    metaTitle: "Product Information & Assets",
    eyebrow: "Data Management",
    h1: "A single source of truth for your products.",
    lead: "We build centralized digital asset management (DAM) and PIM integrations to ensure your product copy, pack shots, and technical data are consistent across every global retailer.",
    status: "Product Data",
    points: [
      "Integration with enterprise PIM systems (Akeneo, Salsify, Inriver) to centralize product data",
      "Automated syndication of accurate product copy and imagery to major retail partners (Amazon, Walmart)",
      "Headless CMS setups that dynamically pull live PIM data onto your brand website"
    ],
    proof: [
      ["01 · Brand Consistency", "Ensure the exact same product description appears on your site and your retailers' sites."],
      ["02 · Faster Time to Market", "Launch new products globally without manually updating spreadsheets for weeks."],
      ["03 · Error Reduction", "Eliminate embarrassing typos and incorrect technical specs across sales channels."],
      ["04 · Centralized Assets", "Link high-res pack shots directly to the product SKU in a single database."]
    ],
    problemsIntro: {
      eyebrow: "When product data is fragmented",
      asideLead: "If your product data lives in spreadsheets, your brand is inconsistent.",
      title: "Siloed information delays global product launches.",
      mainLead: "Consumer brands often manage thousands of SKUs across multiple regions. If product descriptions are in a Word doc, dimensions are in an ERP, and images are in a Dropbox folder, launching a new product requires massive manual effort. This fragmentation leads to incorrect information appearing on major retail sites."
    },
    problems: [
      ["Retailer Penalties", "Major retailers (like Amazon) suppress your listings because the provided product data is incomplete or improperly formatted."],
      ["Inconsistent Branding", "A key product is advertised with a new feature on your D2C site, but the old description is still live on a wholesale partner's site."],
      ["Manual Data Entry", "Your eCommerce team spends weeks copying and pasting data from spreadsheets into Shopify for every new season drop."]
    ],
    deliverablesIntro: {
      title: "Master data architecture.",
      lead: "We engineer systems that establish a single, unbreakable source of truth for your entire product catalog."
    },
    deliverables: [
      ["PIM Implementation & Integration", "Connecting specialized Product Information Management systems to your D2C frontend and B2B portals.", "PIM", "Data", "APIs"],
      ["Automated Channel Syndication", "Building API pipelines that format and push your product data out to specific retailer requirements automatically.", "Syndication", "Integration", "Logic"],
      ["DAM Integration", "Connecting your Digital Asset Management system so that pack shots are automatically linked to their corresponding SKUs.", "DAM", "Media", "Automation"],
      ["Regional Data Localization", "Structuring the database to manage complex parent-child relationships for regional translations and market-specific compliance.", "Data", "Localization", "Structure"]
    ]
  },
  "brand-and-channel-dashboards": {
    metaTitle: "Brand & Channel Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visibility across your entire sales ecosystem.",
    lead: "We aggregate data from your D2C website, wholesale portals, and retail partners into executive dashboards tracking channel profitability, campaign ROI, and inventory movement.",
    status: "Brand Analytics",
    points: [
      "Unified BI dashboards combining direct-to-consumer sales data with B2B wholesale orders",
      "Real-time tracking of marketing campaign ROI across both digital and physical retail channels",
      "Predictive analytics for demand forecasting and global inventory allocation"
    ],
    proof: [
      ["01 · Single Source of Truth", "Consolidate your Shopify, ERP, and marketing data into one executive view."],
      ["02 · Channel Profitability", "Instantly compare the margin of a D2C sale versus a wholesale retail order."],
      ["03 · Campaign Visibility", "Track how a digital brand campaign impacts physical retail sell-through."],
      ["04 · Automated Board Packs", "Turn disparate multi-channel data into polished executive reports instantly."]
    ],
    problemsIntro: {
      eyebrow: "When brand data is siloed",
      asideLead: "You can't optimize a global brand looking at separate D2C and B2B spreadsheets.",
      title: "Fragmented data hides true channel performance.",
      mainLead: "Brand executives are forced to make high-stakes allocation decisions with fragmented data. If your D2C data is in Shopify, your wholesale data is in SAP, and your marketing spend is across five platforms, you cannot accurately determine which channel is actually driving profitability."
    },
    problems: [
      ["Blind Inventory Allocation", "You allocate too much stock to wholesale, causing costly stockouts on your higher-margin D2C website."],
      ["Unclear Campaign ROI", "A massive influencer campaign drives sales, but you can't tell if the uplift happened online or in physical retail stores."],
      ["Reporting Fatigue", "Analysts spend weeks manually extracting and merging data from different systems just to build the quarterly sales report."]
    ],
    deliverablesIntro: {
      title: "Command centers for brand leaders.",
      lead: "We engineer data aggregation platforms that give leadership the real-time insights needed to optimize global channels."
    },
    deliverables: [
      ["Executive Scorecards", "High-level visual dashboards tracking KPIs like Blended CAC, Channel Margin, and global inventory turnover.", "BI", "Dashboards", "Metrics"],
      ["Data Warehousing", "Pipelines that extract data from disparate systems (Shopify, ERP, Ad Networks) and normalize it in a cloud data warehouse.", "ETL", "Cloud", "Data"],
      ["Sell-Through Analytics", "Visual tools to track how quickly retail partners are moving your product off their shelves (via EDI integrations).", "Analytics", "React", "B2B"],
      ["Automated Reporting", "Dynamic engines to instantly generate branded PDF or email summaries for brand managers and executives.", "Reporting", "PDFs", "Automation"]
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
