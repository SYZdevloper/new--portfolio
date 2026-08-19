import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/customer-and-merchant-portals/" },
  title: "Customer & Merchant Portals | Hyperlink Tech Solutions",
  description: "We develop self-serve B2B portals where e-commerce merchants can upload bulk manifests, integrate via API, track all active parcels, and manage their monthly billing.",
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
                    <strong>B2B Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Merchant Portals</div>
                        <p className="eyebrow">B2B Operations</p>
                        <h1 id="service-title">Empower your highest-volume shippers.</h1>
                        <p className="hero-lead">We develop self-serve B2B portals where e-commerce merchants can upload bulk manifests, integrate via API, track all active parcels, and manage their monthly billing.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Self-serve dashboards allowing merchants to view all active, failed, and completed deliveries in real-time</li>
                            <li>Seamless API integrations connecting directly to the merchant's Shopify, WooCommerce, or proprietary ERP</li>
                            <li>Digital document vaults for retrieving Proof of Delivery (POD) signatures and photos in bulk</li>
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
                            <small>01 · Sticky B2B Relationships</small>
                            <strong>Merchants will never leave a courier partner that perfectly integrates into their tech stack.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Processing</small>
                            <strong>API integrations mean orders flow into your dispatch system without human intervention.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Issue Resolution</small>
                            <strong>Allow merchants to quickly see why a delivery failed (e.g., 'Invalid Address') and resolve it instantly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Smoother Billing</small>
                            <strong>Make it incredibly easy for clients to download monthly invoices and pay balances digitally.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When B2B communication is messy</p>
                        <p>Managing a major e-commerce client via CSV email attachments is a disaster waiting to happen.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Disorganized operations cause supply chain chaos.</h2>
                        <p>Running a courier operation involves coordinating massive volume with demanding merchants. When a Shopify store has to manually export a spreadsheet and email it to your dispatch team at 5 PM every day, errors occur. If they can't self-serve tracking updates, they will bombard your team with emails.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Data Entry Burden</h3>
                                <p>Your dispatch team spends hours manually formatting a client's messy spreadsheet to upload it into the routing software.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>API Disconnects</h3>
                                <p>You lose a massive e-commerce contract because you don't offer a modern API to connect to their checkout flow.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Fragmented Communication</h3>
                                <p>Important delivery updates are lost across 20 different email threads between the merchant, consumer, and driver.</p>
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
                                <h2>Centralized merchant operations.</h2>
                            </div>
                            <p>We build secure environments that professionalize the relationship between couriers and enterprise shippers.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Merchant Dashboards</h3>
                                <p>API integrations pulling live data from your dispatch software, allowing clients to view their entire delivery network at a glance.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>Dashboards</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>E-commerce Integrations</h3>
                                <p>Building plugins or webhooks that automatically pull orders from Shopify the moment a local consumer checks out.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>E-commerce</small><small>Operations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>POD & Exception Vaults</h3>
                                <p>Secure, structured portals where merchants can instantly view the photo of a package left at a door to resolve a customer dispute.</p>
                                <div className="deliverable-tags"><small>Cloud</small><small>Integration</small><small>Service</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Identity Management (CIAM)</h3>
                                <p>Secure, centralized login flows using Auth0 to ensure only authorized merchant staff access sensitive consumer delivery data.</p>
                                <div className="deliverable-tags"><small>Security</small><small>Auth</small><small>B2B</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Last-Mile Platform</p>
                            <h2>Powering the local delivery economy.</h2>
                        </div>
                        <p>See how we helped an urban courier network replace manual dispatching with a fully automated routing and merchant portal, scaling their daily capacity from 500 to 5,000 drops per day without hiring more dispatchers.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Courier Tech</span>
                                <span>Routing & Tracking</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/last-mile-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Complete final mile control.</h2>
                                <p>We developed a secure B2B merchant portal integrated directly with Shopify, automatically ingesting orders, clustering them via a custom routing algorithm, and pushing turn-by-turn routes directly to the drivers' native mobile app.</p>
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
                        <h2 id="faq-title">Common questions about last-mile tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with e-commerce platforms like Shopify?</summary>
                            <p>We build API middleware that listens for webhooks from Shopify, WooCommerce, or Magento. When a local order is placed, the data is automatically ingested into your dispatch software, generating a tracking link instantly.</p>
                        </details>
                        <details>
                            <summary>Do you build native driver apps?</summary>
                            <p>Yes. We use React Native to build high-performance iOS and Android apps for your fleet. These apps handle barcode scanning, digital signature capture (ePOD), and photo uploads when packages are left at the door.</p>
                        </details>
                        <details>
                            <summary>Can you optimize multi-stop routes automatically?</summary>
                            <p>Yes. We integrate routing algorithms (like Mapbox Optimization or Onfleet APIs) that instantly calculate the most efficient sequence for a driver handling 80 deliveries in a specific zip code, minimizing drive time and fuel costs.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other courier capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/delivery-booking-and-pricing/"><div><small>Revenue</small><h3>Booking & Pricing</h3><p>Instant local delivery rates.</p></div><b>Explore booking ↗</b></a>
                        <a className="related-card" href="/services/tracking-and-notifications/"><div><small>Service</small><h3>Tracking & Alerts</h3><p>The Amazon-grade experience.</p></div><b>Explore tracking ↗</b></a>
                        <a className="related-card" href="/services/customer-and-merchant-portals/"><div><small>B2B Operations</small><h3>Merchant Portals</h3><p>Empower volume shippers.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/driver-and-route-workflows/"><div><small>Mobile</small><h3>Driver Workflows</h3><p>Optimize the final mile.</p></div><b>Explore driver apps ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your courier <br />and last-mile operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From automated B2B merchant portals to live consumer tracking links and native driver apps, we build software that drives efficiency in the final mile.</p>
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
