import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  alternates: { canonical: "/services/ecommerce-development/" },
  title: "Shopify Ecommerce Development Services | Hyperlink Tech Solutions",
  description: "Shopify ecommerce development with a custom Next.js frontend for fast, flexible and conversion-focused online stores. Get product architecture, checkout integration, customer accounts, analytics and scalable storefront development.",
};

export default function EcommerceDevelopment() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/ecommerce-development/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/ecommerce-development/",
          "name": "Shopify Ecommerce Development Services | Hyperlink Tech Solutions",
          "description": "Shopify ecommerce development with a custom Next.js frontend for fast, flexible and conversion-focused online stores.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "inLanguage": "en"
        }
      ]
    }
    ` }} />
      
    <ServiceInteractions />
      <div className="service-page-wrapper">
        <SiteHeader />

        <main id="top">
            <section className="hero service-hero" aria-labelledby="service-title">
                <nav className="service-breadcrumb" aria-label="Breadcrumb">
                    <a href="/">Home</a><span>›</span>
                    <a href="/services/">Services</a><span>›</span>
                    <strong>Ecommerce Development</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy">
                        <div className="hero-status">Shopify commerce with a custom Next.js storefront</div>
                        <p className="eyebrow">Ecommerce development services</p>
                        <h1 id="service-title">Ecommerce stores built for faster shopping, easier management and <span className="accent-text">long-term growth.</span></h1>
                        <p>We design and develop ecommerce stores using Shopify for product, inventory, order and checkout management, combined with a custom Next.js frontend for greater speed, flexibility and control over the customer experience. From catalogue architecture and product discovery to cart flows, customer accounts and analytics, every part of the storefront is organised around making products easier to find, understand and purchase.</p>
                        <ul className="hero-points">
                            <li>Shopify commerce backend</li>
                            <li>Custom Next.js storefront</li>
                            <li>Product, cart and checkout integration</li>
                            <li>Responsive performance and SEO foundations</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get Ecommerce Development Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#case-study">View Ecommerce Example <span className="arrow">↗</span></a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Ecommerce development benefits">
                        <div className="proof-item">
                            <small>01 · Manageable</small>
                            <strong>Your team manages products, collections, inventory, discounts and orders through Shopify’s established admin system.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Flexible</small>
                            <strong>The Next.js frontend gives greater control over layouts, content, interactions and the customer journey.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Fast</small>
                            <strong>Modern frontend architecture, optimised media and efficient page delivery support a faster shopping experience.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Scalable</small>
                            <strong>Reusable storefront components and Shopify’s commerce infrastructure make future growth easier to plan.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When a basic store theme starts limiting growth</p>
                        <p>A standard Shopify theme can be suitable for a simple launch, but it may become restrictive when your brand, catalogue, content or conversion journey requires more flexibility.</p>
                        <a className="btn" href="#included">See What Is Included <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Your online store should help customers buy confidently—not make them work through a rigid template.</h2>
                        <p>We help businesses create ecommerce experiences that combine Shopify’s reliable commerce operations with a custom Next.js frontend designed around product discovery, trust and conversion.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The storefront looks like a generic theme</h3>
                                <p>A standard layout may make the brand feel interchangeable and limit how products, collections and campaigns are presented.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Product discovery is difficult</h3>
                                <p>Weak navigation, filters, categories and search can make it harder for customers to find relevant products quickly.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Product pages do not answer buying questions</h3>
                                <p>Important information about variants, materials, specifications, delivery, returns or suitability may be difficult to understand.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">04</span>
                                <h3>Mobile shopping feels slow or awkward</h3>
                                <p>Large images, heavy scripts, poor spacing and difficult controls can create friction on the devices customers use most.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">05</span>
                                <h3>Marketing content is disconnected from commerce</h3>
                                <p>Editorial content, campaign pages, guides and product storytelling may be limited by the structure of a standard store theme.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">06</span>
                                <h3>The frontend is difficult to customise safely</h3>
                                <p>Theme changes may create conflicts, slow performance or require repeated workarounds as the store grows.</p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section soft" id="included">
                <div className="container">
                    <div className="solution-shell">
                        <div className="solution-head">
                            <div>
                                <p className="eyebrow" style={{color: "#d8c2ff"}}>Complete ecommerce delivery</p>
                                <h2>Everything required to turn Shopify into a custom, high-quality shopping experience.</h2>
                            </div>
                            <p>The final scope is shaped around your catalogue, customer journey, markets, content and integrations. The modules below show what a complete Shopify and Next.js ecommerce project can include.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Discovery</span>
                                <h3>Business and Catalogue Planning</h3>
                                <p>Clarification of products, customer groups, markets, fulfilment, payments, current platform and commercial goals.</p>
                                <div className="deliverable-tags"><small>Products</small><small>Customers</small><small>Goals</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Architecture</span>
                                <h3>Store and Catalogue Structure</h3>
                                <p>Planning products, variants, collections, navigation, filters, content pages and customer journeys.</p>
                                <div className="deliverable-tags"><small>Catalogue</small><small>Collections</small><small>Navigation</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Experience</span>
                                <h3>Ecommerce UX and Responsive Design</h3>
                                <p>Wireframes and responsive interface design for homepage, collections, product pages, cart, account areas and campaign pages.</p>
                                <div className="deliverable-tags"><small>UX</small><small>Mobile</small><small>Storefront UI</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Commerce</span>
                                <h3>Shopify Setup and Configuration</h3>
                                <p>Configuration of products, collections, inventory, markets, discounts, policies and agreed Shopify settings.</p>
                                <div className="deliverable-tags"><small>Shopify</small><small>Products</small><small>Operations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>05 · Frontend</span>
                                <h3>Custom Next.js Storefront Development</h3>
                                <p>Development of the storefront using reusable Next.js components connected to Shopify commerce data.</p>
                                <div className="deliverable-tags"><small>Next.js</small><small>Components</small><small>Storefront</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>06 · Integration</span>
                                <h3>Cart, Checkout and Customer Accounts</h3>
                                <p>Implementation of cart journeys, Shopify checkout redirection, account access and other agreed commerce flows.</p>
                                <div className="deliverable-tags"><small>Cart</small><small>Checkout</small><small>Accounts</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>07 · Connectivity</span>
                                <h3>Apps, APIs and Business Integrations</h3>
                                <p>Connection with approved payment, email, analytics, reviews, search, CRM, fulfilment or customer-support tools.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Shopify apps</small><small>Integrations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>08 · Quality</span>
                                <h3>Testing and Store Verification</h3>
                                <p>Review of products, variants, cart behaviour, checkout, forms, responsive layouts, links and agreed integrations.</p>
                                <div className="deliverable-tags"><small>Ecommerce QA</small><small>Responsive QA</small><small>Checkout checks</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>09 · Migration</span>
                                <h3>Products, Customers and Content</h3>
                                <p>Planning and implementation support for importing approved data from an existing platform or structured source.</p>
                                <div className="deliverable-tags"><small>Products</small><small>Content</small><small>Migration</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>10 · Launch</span>
                                <h3>Deployment and Handover</h3>
                                <p>Production deployment, domain configuration, analytics checks and practical guidance for managing the store.</p>
                                <div className="deliverable-tags"><small>Deployment</small><small>Handover</small><small>Support</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured ecommerce project</p>
                            <h2>A refined digital storefront for handcrafted French desserts.</h2>
                        </div>
                        <p>See how Odette Pâtisserie created a more visual and convenient buying experience for discovering cakes, selecting an ordering option and purchasing across desktop and mobile.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Ecommerce Development visual">
                            <div className="case-visual-top">
                                <span>Odette Pâtisserie Ecommerce</span>
                                <span>Next.js Storefront + Shopify API</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/odette-patisserie-ecommerce.webp" alt="Odette Pâtisserie Storefront" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Odette Pâtisserie & Chocolatier</p>
                                <h2>From product discovery to delivery, designed around every occasion.</h2>
                                <p>Odette offers luxury eggless French pastries, macarons, entremets, bonbons, celebration cakes and gifting collections in Pune. The ecommerce experience needed to communicate this craftsmanship while helping customers order confidently.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>A diverse catalogue, different preparation times and occasion-based purchases made it difficult to present every product through a conventional ecommerce layout. Customers also needed to distinguish between pre-order cakes, quicker same-day options and custom requests.</strong></div>
                                <div className="case-fact"><small>Architecture</small><strong>Products were organised around buying intent—including celebration cakes, individual desserts, chocolates, gifting and custom orders. Product pages prioritised flavour details, sizes, preparation requirements and delivery availability.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>A responsive Next.js storefront was developed with Shopify managing products, collections, inventory, discounts, customer information, orders and secure checkout. The frontend introduced flexible campaign layouts, detailed product storytelling and a mobile-first shopping journey.</strong></div>
                                <div className="case-fact"><small>Integrations</small><strong>The ordering experience connected direct website purchases with WhatsApp for custom enquiries and external ordering options such as Swiggy and Zomato for selected individual desserts.</strong></div>
                                <div className="case-fact"><small>Result</small><strong>Odette gained a more cohesive ecommerce experience that presents its products with the same attention to detail as its physical pâtisserie, while making product discovery, ordering choices and mobile purchasing easier for customers.</strong></div>
                            </div>
                            <a className="btn primary" href="/work/">View All Ecommerce Projects <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">What teams ask before starting a headless ecommerce project.</h2>
                        <p>These answers clarify the scope, design process, Shopify setup and delivery expectations before a proposal request.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Why use Shopify with a Next.js frontend?</summary>
                            <p>Shopify provides established commerce management for products, inventory, orders and checkout, while Next.js provides greater control over the storefront design, content structure, performance and frontend experience.</p>
                        </details>
                        <details>
                            <summary>What is headless Shopify?</summary>
                            <p>Headless Shopify separates the customer-facing storefront from Shopify’s standard theme layer. Shopify continues to manage commerce operations, while a custom frontend such as Next.js presents the shopping experience.</p>
                        </details>
                        <details>
                            <summary>Will we still manage products through Shopify?</summary>
                            <p>Yes. Products, collections, inventory, discounts and orders can continue to be managed through Shopify Admin.</p>
                        </details>
                        <details>
                            <summary>Does checkout still use Shopify?</summary>
                            <p>Yes. In most headless Shopify implementations, the custom storefront connects customers to Shopify’s hosted checkout for transaction processing.</p>
                        </details>
                        <details>
                            <summary>Can you develop a standard Shopify store too?</summary>
                            <p>Yes. Shopify setup, theme customisation and custom theme development can be scoped when a headless storefront is unnecessary.</p>
                        </details>
                        <details>
                            <summary>Can the Next.js storefront use Shopify apps?</summary>
                            <p>Some Shopify apps work directly through the backend or APIs, while others depend on the standard theme environment. Compatibility must be reviewed before selection.</p>
                        </details>
                        <details>
                            <summary>Can you migrate our existing ecommerce store to Shopify?</summary>
                            <p>Yes. Product, content, customer and URL migration can be included after reviewing the source platform and data quality.</p>
                        </details>
                        <details>
                            <summary>Can you create custom product filters and search?</summary>
                            <p>Yes. Filters and search can be implemented using Shopify capabilities or an approved third-party search service, depending on the catalogue and required experience.</p>
                        </details>
                        <details>
                            <summary>Can the store support multiple currencies and regions?</summary>
                            <p>Shopify Markets can support suitable regional domains, currencies, languages and product availability. The final setup depends on business and regional requirements.</p>
                        </details>
                        <details>
                            <summary>Can you add subscriptions, loyalty or reviews?</summary>
                            <p>Yes, through suitable Shopify applications or integrations. App compatibility with a headless Next.js frontend should be confirmed before development.</p>
                        </details>
                        <details>
                            <summary>Will the store be mobile responsive?</summary>
                            <p>Yes. Homepage, navigation, collections, product pages, cart and key shopping interactions are developed for relevant desktop, tablet and mobile screen sizes.</p>
                        </details>
                        <details>
                            <summary>Is a headless Shopify store always better than a theme?</summary>
                            <p>No. A standard or custom Shopify theme may be more suitable for a smaller store with straightforward design requirements. Headless architecture is most useful when the business needs greater frontend control, content flexibility or custom experience.</p>
                        </details>
                        <details>
                            <summary>Can you guarantee a higher conversion rate?</summary>
                            <p>No responsible agency should guarantee a specific conversion rate. Performance depends on traffic quality, product demand, pricing, trust, fulfilment and marketing as well as the storefront experience.</p>
                        </details>
                        <details>
                            <summary>Will the store be SEO-friendly?</summary>
                            <p>The project can include indexable product and collection content, metadata, canonical tags, structured data, internal linking and other technical SEO foundations.</p>
                        </details>
                        <details>
                            <summary>Who owns the storefront code?</summary>
                            <p>Code ownership, third-party licences, Shopify access, repository access and handover terms should be stated clearly in the commercial agreement.</p>
                        </details>
                        <details>
                            <summary>How long does ecommerce development take?</summary>
                            <p>The timeline depends on catalogue size, design complexity, integrations, migration, content readiness and review cycles. A realistic delivery plan is provided after scope confirmation.</p>
                        </details>
                        <details>
                            <summary>Do you provide ecommerce maintenance after launch?</summary>
                            <p>Yes. Ongoing technical support, storefront updates, campaign pages, integration work and performance improvements can be provided through a separate arrangement.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Build the design, frontend and operational systems around your store.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/custom-website-design/"><div><small>Design</small><h3>Custom Website Design</h3><p>Create the broader brand and responsive interface direction for the ecommerce experience.</p></div><b>Explore custom design ↗</b></a>
                        <a className="related-card" href="/services/frontend-development/"><div><small>Frontend</small><h3>Frontend Development</h3><p>Develop reusable Next.js storefront components and custom shopping interfaces.</p></div><b>Explore frontend ↗</b></a>
                        <a className="related-card" href="/services/landing-page-design/"><div><small>Landing Pages</small><h3>Landing Page Design</h3><p>Create focused campaign and product-launch pages connected to the store.</p></div><b>Explore landing pages ↗</b></a>
                    </div>
                </div>
            </section>

            <section className="section lead-section" id="contact">
                <div className="container lead-grid">
                    <div className="lead-copy">
                        <p className="eyebrow" style={{color: "#d8c2ff"}}>Plan your ecommerce development project</p>
                        <h2>Tell us about your catalogue, current platform and storefront goals.</h2>
                        <p>Share your current store, product types, required integrations, target markets and expected timeline. We will review the details and recommend a practical ecommerce development scope.</p>
                    </div>

                    <div className="lead-panel">
                        <h3>Tell us about your store</h3>
                        <p>Provide a few details about your products, platform and migration requirements, and we will respond with the most suitable next step.</p>
                        <form className="lead-form js-lead-form" data-form-name="Ecommerce Development Lead"
                            action="/api/leads" method="post" noValidate>
                            <div className="field-row">
                                <div className="field">
                                    <label htmlFor="main-name">Full name *</label>
                                    <input id="main-name" name="name" required autoComplete="name" placeholder="Your full name" />
                                </div>
                                <div className="field">
                                    <label htmlFor="main-company">Company</label>
                                    <input id="main-company" name="company" autoComplete="organization" placeholder="Company name" />
                                </div>
                            </div>
                            <div className="field-row">
                                <div className="field">
                                    <label htmlFor="main-email">Work email *</label>
                                    <input id="main-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
                                </div>
                                <div className="field">
                                    <label htmlFor="main-phone">Phone or WhatsApp</label>
                                    <input id="main-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98XXXXXX" />
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="main-message">Project details *</label>
                                <textarea id="main-message" name="message" required
                                    placeholder="Tell us about your current store URL, product type, current platform, required integrations, and target markets..."></textarea>
                            </div>
                            <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" />
                            <input type="hidden" name="service" value="Ecommerce Development" />
                            <input type="hidden" name="landing_page" value="/services/ecommerce-development/" />
                            <label className="consent">
                                <input type="checkbox" required />
                                <span>By submitting this form, you agree that Hyperlink Tech Solutions may contact you regarding your project enquiry.</span>
                            </label>
                            <button className="btn primary full" type="submit">Submit Ecommerce Enquiry <span className="arrow">↗</span></button>
                            <div className="form-status" aria-live="polite"></div>
                        </form>
                        <div className="trust-line">No obligation · Your information stays private</div>
                    </div>
                </div>
            </section>
        </main>

        <SiteFooter />
    </div>
    <a className="floating-cta" href="#contact">Get Ecommerce Development Proposal ↗</a>
    </>
  );
}
