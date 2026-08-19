import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/store-locator-and-appointments/" },
  title: "Store Locator & Appointments | Hyperlink Tech Solutions",
  description: "We engineer advanced geolocation tools and booking engines, allowing customers to easily find physical stock, book styling sessions, or reserve fitting rooms.",
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
                    <strong>In-Store Experience</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Store Engagement</div>
                        <p className="eyebrow">In-Store Experience</p>
                        <h1 id="service-title">Drive foot traffic through digital engagement.</h1>
                        <p className="hero-lead">We engineer advanced geolocation tools and booking engines, allowing customers to easily find physical stock, book styling sessions, or reserve fitting rooms.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Advanced, map-based store locators with live operating hours and facility details</li>
                            <li>Headless appointment booking systems for personal styling, repairs, or consultations</li>
                            <li>Event ticketing and RSVP management for in-store brand activations</li>
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
                            <small>01 · Higher Footfall</small>
                            <strong>Make it effortless for customers to find the exact location carrying their desired product.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Guaranteed Service</small>
                            <strong>Allow VIP customers to book dedicated time with store experts.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Better Staff Planning</small>
                            <strong>Store managers can roster staff based on booked appointments and expected traffic.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Local SEO</small>
                            <strong>Generate dedicated, SEO-optimized landing pages for every physical store location.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When digital fails physical</p>
                        <p>If they can't find your store or book a service, they'll go to the mall next door.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Poor local digital presence hurts store performance.</h2>
                        <p>Your physical stores are your biggest asset, but if your website only features a clunky PDF list of addresses, you aren't leveraging them. Customers want to see exactly how far away a store is, if it's open right now, and if they can book a dedicated service.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Frustrating Navigation</h3>
                                <p>Customers struggle to find store operating hours on mobile, leading to arriving at a closed shop.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Missed VIP Opportunities</h3>
                                <p>High-value customers abandon the idea of a styling session because they have to call the store to book it.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Poor Local Search</h3>
                                <p>Your individual stores don't rank on Google Maps because they lack dedicated, structured local web pages.</p>
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
                                <h2>Digital tools for physical spaces.</h2>
                            </div>
                            <p>We engineer features that actively push digital browsers into your brick-and-mortar locations.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Dynamic Store Locators</h3>
                                <p>Mapbox or Google Maps integrations with geolocation routing, showing the closest stores and their current stock levels.</p>
                                <div className="deliverable-tags"><small>Maps</small><small>Geolocation</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Headless Booking Engines</h3>
                                <p>Custom React interfaces that connect to scheduling software (like Acuity or custom APIs) for booking in-store services.</p>
                                <div className="deliverable-tags"><small>Scheduling</small><small>APIs</small><small>React</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Local SEO Pages</h3>
                                <p>Programmatically generated pages for every retail location, utilizing structured schema data for maximum Google visibility.</p>
                                <div className="deliverable-tags"><small>SEO</small><small>CMS</small><small>Performance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Event RSVP Portals</h3>
                                <p>Secure, gated registration flows for exclusive in-store product launches or VIP nights.</p>
                                <div className="deliverable-tags"><small>Forms</small><small>Events</small><small>Auth</small></div>
                            </article>
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
