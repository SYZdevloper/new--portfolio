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
                            <p className="eyebrow">Featured Retail Platform</p>
                            <h2>Transforming digital commerce.</h2>
                        </div>
                        <p>See how we helped a national retailer migrate to a modern headless architecture, resulting in sub-second load times, a frictionless checkout experience, and a unified view of customer data across channels.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Commerce Tech</span>
                                <span>Omnichannel Experience</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/retail-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Seamless shopping at scale.</h2>
                                <p>We developed a custom storefront that integrates seamlessly with their ERP for real-time inventory, provides personalized product recommendations, and manages complex loyalty subscriptions without slowing down the user experience.</p>
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
                        <h2 id="faq-title">Common questions about retail tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you ensure fast load times during high-traffic events?</summary>
                            <p>We build headless commerce solutions using frameworks like Next.js, leveraging edge caching and static site generation to handle immense traffic spikes (like Black Friday) without performance degradation.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with our existing ERP and inventory systems?</summary>
                            <p>Yes. We build secure API middleware to connect your storefront with legacy ERPs, ensuring accurate stock levels, pricing, and order synchronization in real time.</p>
                        </details>
                        <details>
                            <summary>How do you manage complex loyalty and subscription models?</summary>
                            <p>We integrate robust identity and subscription management platforms (like Auth0 or Stripe Billing) to handle recurring payments, tier upgrades, and personalized rewards seamlessly within the customer portal.</p>
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
                        <a className="related-card" href="/services/storefront-and-product-discovery/"><div><small>Discovery</small><h3>Storefronts</h3><p>Engaging product discovery.</p></div><b>Explore storefronts ↗</b></a>
                        <a className="related-card" href="/services/cart-checkout-and-payments/"><div><small>Conversion</small><h3>Checkout & Payments</h3><p>Frictionless checkout experiences.</p></div><b>Explore checkout ↗</b></a>
                        <a className="related-card" href="/services/accounts-loyalty-and-subscriptions/"><div><small>Retention</small><h3>Loyalty & Subs</h3><p>Customer retention tools.</p></div><b>Explore loyalty ↗</b></a>
                        <a className="related-card" href="/services/orders-returns-and-service/"><div><small>Operations</small><h3>Orders & Returns</h3><p>Streamlined post-purchase ops.</p></div><b>Explore orders ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your retail <br />and commerce operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From high-performance storefronts to complex subscription logic and real-time inventory dashboards, we build software that drives growth across the commerce lifecycle.</p>
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
  "storefront-and-product-discovery": {
    metaTitle: "Storefront & Product Discovery",
    eyebrow: "Product Discovery",
    h1: "Engaging and fast product discovery.",
    lead: "We design high-performance, headless storefronts that captivate customers and guide them seamlessly from inspiration to purchase.",
    status: "Storefronts",
    points: [
      "Ultra-fast page loads leveraging modern edge caching",
      "Dynamic search and personalized product recommendations",
      "Immersive rich media experiences (AR, 3D viewers)"
    ],
    proof: [
      ["01 · Lightning Fast", "Sub-second load times that keep shoppers engaged."],
      ["02 · Smart Search", "Typo-tolerant search that finds the right product every time."],
      ["03 · SEO Optimized", "Structure that ranks higher in search engines."],
      ["04 · Headless Agility", "Update content independently of the backend platform."]
    ],
    problemsIntro: {
      eyebrow: "When discovery is slow",
      asideLead: "Customers won't wait for a slow catalogue to load.",
      title: "Poor performance kills conversions.",
      mainLead: "If your storefront is sluggish or search results are irrelevant, shoppers will bounce to a competitor. Legacy monolithic platforms often struggle to deliver the speed and agility required for modern digital commerce."
    },
    problems: [
      ["Slow Load Times", "Heavy themes and plugins slow down your site, directly hurting conversion rates."],
      ["Frustrating Search", "Customers can't find what they're looking for because of rigid, exact-match search functionality."],
      ["Inflexible Design", "Making simple layout changes requires developer intervention and risky platform deployments."]
    ],
    deliverablesIntro: {
      title: "Next-generation storefronts.",
      lead: "We build decoupled frontend experiences that prioritize speed, aesthetics, and discoverability."
    },
    deliverables: [
      ["Headless Architecture", "Next.js frontends connected to Shopify, BigCommerce, or custom backends via APIs.", "React", "Headless", "Speed"],
      ["Advanced Search Integration", "Algolia or Typesense implementation for instant, faceted search results.", "Search", "UX", "Discovery"],
      ["Rich Media Support", "Optimized delivery of high-res images, video, and 3D product models.", "Media", "Performance", "Visuals"],
      ["CMS Integration", "Sanity or Contentful setups allowing marketing teams to build landing pages without code.", "CMS", "Agility", "Content"]
    ]
  },
  "cart-checkout-and-payments": {
    metaTitle: "Cart, Checkout & Payments",
    eyebrow: "Conversion",
    h1: "Frictionless checkout experiences.",
    lead: "We engineer streamlined cart and checkout flows that minimize abandonment, offer flexible payment options, and integrate securely with fraud prevention systems.",
    status: "Checkout",
    points: [
      "One-click checkout and digital wallet integrations (Apple Pay, Google Pay)",
      "Dynamic shipping calculators and local pickup options",
      "Robust security and PCI compliance handling"
    ],
    proof: [
      ["01 · Lower Abandonment", "Remove unnecessary steps from the checkout process."],
      ["02 · Flexible Payments", "Support Buy Now Pay Later (BNPL) and alternative payment methods."],
      ["03 · Accurate Shipping", "Real-time rate calculation and address validation."],
      ["04 · Secure Transactions", "Best-in-class security protocols to protect customer data."]
    ],
    problemsIntro: {
      eyebrow: "When checkout creates friction",
      asideLead: "Every extra click in checkout loses revenue.",
      title: "Complex checkouts drive customers away.",
      mainLead: "You've done the hard work of getting the customer to the cart. If the checkout process requires an account creation, lacks their preferred payment method, or calculates shipping poorly, they will abandon the purchase."
    },
    problems: [
      ["High Abandonment Rate", "Too many form fields and confusing navigation cause users to give up."],
      ["Limited Payment Options", "Failing to offer modern digital wallets or installment payments costs sales."],
      ["Shipping Surprises", "Unexpected shipping costs presented at the very end of checkout kill conversions."]
    ],
    deliverablesIntro: {
      title: "Optimized conversion paths.",
      lead: "We build checkout experiences designed specifically to maximize successful transactions."
    },
    deliverables: [
      ["Optimized Cart UX", "Slide-out carts, dynamic upsells, and clear order summaries.", "UX", "Conversion", "Design"],
      ["Payment Gateway Integration", "Stripe, Braintree, or custom integrations for seamless, secure processing.", "Payments", "APIs", "Security"],
      ["Dynamic Shipping Logic", "Integrations with logistics providers for accurate, real-time freight quoting.", "Logistics", "Logic", "APIs"],
      ["Fraud Prevention Integration", "Connecting specialized tools to analyze transactions and reduce chargebacks.", "Security", "Data", "Trust"]
    ]
  },
  "accounts-loyalty-and-subscriptions": {
    metaTitle: "Accounts, Loyalty & Subscriptions",
    eyebrow: "Retention",
    h1: "Build lasting customer relationships.",
    lead: "We develop comprehensive customer portals that manage loyalty programs, recurring subscriptions, and personalized preferences to drive lifetime value.",
    status: "Customer Retention",
    points: [
      "Self-serve subscription management (pause, skip, modify deliveries)",
      "Tiered loyalty programs with points tracking and reward redemption",
      "Personalized dashboards showing order history and saved preferences"
    ],
    proof: [
      ["01 · Higher LTV", "Encourage repeat purchases through engaging loyalty mechanics."],
      ["02 · Subscription Control", "Reduce churn by giving customers easy control over their recurring orders."],
      ["03 · Personalization", "Tailor the experience based on past purchases and saved data."],
      ["04 · Reduced Support", "Allow customers to manage their own accounts without contacting service."]
    ],
    problemsIntro: {
      eyebrow: "When retention is ignored",
      asideLead: "Acquiring new customers is expensive; keep the ones you have.",
      title: "Weak account features lead to high churn.",
      mainLead: "If a customer cannot easily cancel or modify a subscription, they will just stop their credit card. If loyalty points are hard to redeem or track, the program loses its value. Poor account management directly impacts your recurring revenue."
    },
    problems: [
      ["Subscription Churn", "Customers cancel entirely because they can't simply skip a month's delivery."],
      ["Loyalty Apathy", "Users don't engage with the rewards program because the interface is confusing or separate from checkout."],
      ["Fragmented Data", "Customer preferences aren't utilized to personalize their shopping experience."]
    ],
    deliverablesIntro: {
      title: "Tools for customer loyalty.",
      lead: "We engineer digital spaces where customers feel valued and in control of their relationship with your brand."
    },
    deliverables: [
      ["Subscription Portals", "Custom interfaces for managing recurring orders via platforms like Recharge or Stripe Billing.", "Subscriptions", "UX", "Retention"],
      ["Loyalty Integrations", "Connecting systems like Yotpo or Smile.io directly into the customer dashboard and checkout flow.", "Loyalty", "APIs", "Rewards"],
      ["Identity Management", "Secure login flows using Auth0 or custom JWTs, including social sign-on.", "Security", "Auth", "Data"],
      ["Personalized Dashboards", "React-based profile pages showing recommended products based on purchase history.", "React", "Data", "Personalization"]
    ]
  },
  "orders-returns-and-service": {
    metaTitle: "Orders, Returns & Service",
    eyebrow: "Operations",
    h1: "Streamline post-purchase operations.",
    lead: "We build efficient workflows for order tracking, automated returns processing, and customer service ticketing, turning operations into a competitive advantage.",
    status: "Post-Purchase",
    points: [
      "Automated Return Merchandise Authorization (RMA) portals for self-serve returns",
      "Real-time order tracking integrations and proactive delivery notifications",
      "Unified customer service views connecting order data with support tickets"
    ],
    proof: [
      ["01 · Operational Efficiency", "Automate the returns process to save hundreds of customer service hours."],
      ["02 · Customer Trust", "Keep buyers informed with accurate, real-time tracking updates."],
      ["03 · Faster Resolution", "Give support agents immediate access to order details and history."],
      ["04 · Data-Driven Returns", "Analyze return reasons to improve product descriptions and sizing."]
    ],
    problemsIntro: {
      eyebrow: "When post-purchase fails",
      asideLead: "A bad return experience ensures the customer will never buy again.",
      title: "Manual operations frustrate customers and staff.",
      mainLead: "The customer journey doesn't end at checkout. If they have to email support to initiate a return, or if they are constantly asking 'Where is my order?', your operational overhead skyrockets and customer satisfaction plummets."
    },
    problems: [
      ["Manual Returns Processing", "Customer service reps spend hours validating return policies and emailing shipping labels."],
      ["Tracking Blind Spots", "Customers receive no updates between 'Order Placed' and 'Out for Delivery'."],
      ["Disjointed Support", "Helpdesk agents have to toggle between three different systems to find a customer's order status."]
    ],
    deliverablesIntro: {
      title: "Seamless service operations.",
      lead: "We engineer systems that automate the heavy lifting of post-purchase logistics and support."
    },
    deliverables: [
      ["Self-Serve RMA Portals", "Custom interfaces where customers can initiate returns, print labels, and track refund status based on specific policy rules.", "Returns", "Logistics", "UX"],
      ["Order Tracking Dashboards", "Integrations with carriers (FedEx, UPS, Shippit) to provide visual, real-time delivery tracking.", "APIs", "Tracking", "Transparency"],
      ["Helpdesk Integrations", "Middleware connecting your commerce platform to Zendesk or Gorgias, giving agents unified customer profiles.", "Integration", "Support", "CRM"],
      ["Automated Notifications", "Transactional email and SMS triggers for order updates, delays, or return confirmations.", "Comms", "Automation", "Email"]
    ]
  },
  "merchandising-and-analytics": {
    metaTitle: "Merchandising & Analytics",
    eyebrow: "Business Intelligence",
    h1: "Data-driven retail operations.",
    lead: "We aggregate data from storefronts, inventory systems, and marketing platforms into executive dashboards to optimize merchandising, pricing, and campaign performance.",
    status: "Retail Analytics",
    points: [
      "Unified BI dashboards tracking conversion rates, AOV, and inventory turnover",
      "Predictive analytics for demand forecasting and stock replenishment",
      "Custom merchandising tools for dynamic pricing and campaign management"
    ],
    proof: [
      ["01 · Actionable Insights", "Consolidate fragmented retail data into clear, actionable metrics."],
      ["02 · Inventory Optimization", "Forecast demand accurately to prevent stockouts and overstocking."],
      ["03 · Campaign ROI", "Track the exact impact of marketing campaigns on sales velocity."],
      ["04 · Agile Merchandising", "Tools to quickly adjust pricing or product placement based on real-time data."]
    ],
    problemsIntro: {
      eyebrow: "When retail data is siloed",
      asideLead: "You can't optimize what you can't see clearly.",
      title: "Fragmented data leads to missed opportunities.",
      mainLead: "Retail managers often struggle with data spread across Shopify, Google Analytics, their ERP, and marketing tools. This fragmentation makes it impossible to quickly understand product performance, optimize merchandising, or manage inventory effectively."
    },
    problems: [
      ["Blind Merchandising", "Product placements are based on guesswork rather than real-time conversion data."],
      ["Inventory Mismanagement", "Stockouts cost sales, while overstocking ties up capital, due to poor demand forecasting."],
      ["Reporting Fatigue", "Analysts spend hours manually compiling reports in Excel instead of analyzing trends."]
    ],
    deliverablesIntro: {
      title: "Intelligent retail command centers.",
      lead: "We build data platforms and custom tooling that give your team the power to merchandise and operate with precision."
    },
    deliverables: [
      ["Executive Dashboards", "Custom BI interfaces tracking high-level KPIs like CAC, LTV, and margin performance across channels.", "BI", "Dashboards", "Metrics"],
      ["Data Warehousing", "Pipelines extracting data from commerce platforms, POS systems, and ad networks into a central repository.", "ETL", "Data", "Cloud"],
      ["Dynamic Pricing Engines", "Custom logic to adjust pricing based on inventory levels, competitor data, or specific customer segments.", "Logic", "Pricing", "APIs"],
      ["Custom Merchandising Tools", "Interfaces allowing marketing teams to easily build product bundles, manage flash sales, or curate collections.", "Tools", "React", "Operations"]
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
