import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/orders-returns-and-service/" },
  title: "Orders, Returns & Service | Hyperlink Tech Solutions",
  description: "We build efficient workflows for order tracking, automated returns processing, and customer service ticketing, turning operations into a competitive advantage.",
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
                    <strong>Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Post-Purchase</div>
                        <p className="eyebrow">Operations</p>
                        <h1 id="service-title">Streamline post-purchase operations.</h1>
                        <p className="hero-lead">We build efficient workflows for order tracking, automated returns processing, and customer service ticketing, turning operations into a competitive advantage.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Automated Return Merchandise Authorization (RMA) portals for self-serve returns</li>
                            <li>Real-time order tracking integrations and proactive delivery notifications</li>
                            <li>Unified customer service views connecting order data with support tickets</li>
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
                        
                        <div className="proof-item">
                            <small>01 · Operational Efficiency</small>
                            <strong>Automate the returns process to save hundreds of customer service hours.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Customer Trust</small>
                            <strong>Keep buyers informed with accurate, real-time tracking updates.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Faster Resolution</small>
                            <strong>Give support agents immediate access to order details and history.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Data-Driven Returns</small>
                            <strong>Analyze return reasons to improve product descriptions and sizing.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When post-purchase fails</p>
                        <p>A bad return experience ensures the customer will never buy again.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Manual operations frustrate customers and staff.</h2>
                        <p>The customer journey doesn't end at checkout. If they have to email support to initiate a return, or if they are constantly asking 'Where is my order?', your operational overhead skyrockets and customer satisfaction plummets.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Manual Returns Processing</h3>
                                <p>Customer service reps spend hours validating return policies and emailing shipping labels.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Tracking Blind Spots</h3>
                                <p>Customers receive no updates between 'Order Placed' and 'Out for Delivery'.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Disjointed Support</h3>
                                <p>Helpdesk agents have to toggle between three different systems to find a customer's order status.</p>
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
                                <p className="eyebrow" style={{color: "#d8c2ff"}}>The deliverables</p>
                                <h2>Seamless service operations.</h2>
                            </div>
                            <p>We engineer systems that automate the heavy lifting of post-purchase logistics and support.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Self-Serve RMA Portals</h3>
                                <p>Custom interfaces where customers can initiate returns, print labels, and track refund status based on specific policy rules.</p>
                                <div className="deliverable-tags"><small>Returns</small><small>Logistics</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Order Tracking Dashboards</h3>
                                <p>Integrations with carriers (FedEx, UPS, Shippit) to provide visual, real-time delivery tracking.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Tracking</small><small>Transparency</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Helpdesk Integrations</h3>
                                <p>Middleware connecting your commerce platform to Zendesk or Gorgias, giving agents unified customer profiles.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>Support</small><small>CRM</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Notifications</h3>
                                <p>Transactional email and SMS triggers for order updates, delays, or return confirmations.</p>
                                <div className="deliverable-tags"><small>Comms</small><small>Automation</small><small>Email</small></div>
                            </article>
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
