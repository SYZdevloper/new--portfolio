import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/tracking-and-customer-portals/" },
  title: "Tracking & Customer Portals | Hyperlink Tech Solutions",
  description: "We build secure portals where your customers can track active freight, download invoices, view historical lane analytics, and manage their shipping address books.",
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
                    <strong>Service</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Customer Portals</div>
                        <p className="eyebrow">Service</p>
                        <h1 id="service-title">Self-serve visibility for shippers.</h1>
                        <p className="hero-lead">We build secure portals where your customers can track active freight, download invoices, view historical lane analytics, and manage their shipping address books.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Visual track-and-trace dashboards integrating ELD/GPS data for real-time truck locations</li>
                            <li>Self-serve invoice retrieval and statement downloads connected directly to your ERP</li>
                            <li>Automated milestone notifications (Picked Up, In Transit, Delivered) via email or SMS</li>
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
                            <small>01 · Reduced Support Calls</small>
                            <strong>Customers can see exactly where their freight is without calling your team.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Payments</small>
                            <strong>Make it incredibly easy for clients to download invoices and pay balances digitally.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Higher Retention</small>
                            <strong>Shippers stick with logistics partners who provide transparent, modern digital experiences.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Centralized Data</small>
                            <strong>A single source of truth for all historical BOLs, PODs, and freight claims.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When service is analog</p>
                        <p>Your customer service team shouldn't be a human tracking number.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Lack of visibility frustrates modern shippers.</h2>
                        <p>Enterprise shippers expect the same tracking visibility they get from Amazon. If they have to call your office to find out if a critical LTL shipment has been delivered, or email accounting for a copy of last month's invoice, they view your operation as outdated.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Tracking Blind Spots</h3>
                                <p>Customers are angry because they receive no updates between 'Dispatched' and 'Delivered'.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Invoice Bottlenecks</h3>
                                <p>Your finance team wastes hours every week pulling PDFs from the billing system and emailing them to clients.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Lost Documents</h3>
                                <p>Shippers can't find the signed POD they need to process a claim, leading to frustrated emails.</p>
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
                                <h2>Comprehensive shipper portals.</h2>
                            </div>
                            <p>We engineer secure dashboards that give your customers complete control over their logistics data.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Visual Tracking Maps</h3>
                                <p>Integrating with ELD providers (like Samsara or Project44) to show a live map pin of the truck's location.</p>
                                <div className="deliverable-tags"><small>Maps</small><small>APIs</small><small>Tracking</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Invoice & Statement Portals</h3>
                                <p>API integrations pulling live financial data, allowing clients to view and download historical billing PDFs.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>Finance</small><small>ERP</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Automated Notifications</h3>
                                <p>Transactional email and SMS triggers for key shipment milestones or unavoidable delays.</p>
                                <div className="deliverable-tags"><small>Comms</small><small>Automation</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Document Repositories</h3>
                                <p>Secure directories where the shipper can always access past BOLs, PODs, and customs documentation.</p>
                                <div className="deliverable-tags"><small>Data</small><small>Storage</small><small>UX</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Logistics Platform</p>
                            <h2>Digitizing freight operations.</h2>
                        </div>
                        <p>See how we helped a national logistics provider replace manual spreadsheets with a custom quoting engine and tracking portal, drastically reducing customer service calls while increasing lane profitability.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Logistics Tech</span>
                                <span>Freight & Tracking</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/logistics-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From quote to proof of delivery.</h2>
                                <p>We developed a custom portal that integrates with their Transportation Management System (TMS). Shippers can now generate live LTL freight quotes, book the load, and track the truck in real-time without ever picking up the phone.</p>
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
                        <h2 id="faq-title">Common questions about logistics tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with our TMS or WMS?</summary>
                            <p>We build secure API middleware to connect your headless frontend directly to industry-standard systems like MercuryGate, Manhattan, or custom legacy AS400 databases. This ensures live rates, inventory, and tracking.</p>
                        </details>
                        <details>
                            <summary>Can you automate our quoting process?</summary>
                            <p>Yes. We build custom calculation engines that factor in dimensional weight, lane density, fuel surcharges, and customer-specific tariffs to generate instant, accurate quotes on the web.</p>
                        </details>
                        <details>
                            <summary>Do you build portals for external carriers and owner-operators?</summary>
                            <p>Yes. We build secure B2B portals where external drivers can view available loads, submit bids, upload Proof of Delivery (POD) documents, and track their settlements.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other logistics capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/freight-and-capacity-discovery/"><div><small>Discovery</small><h3>Capacity Discovery</h3><p>Showcase network strength.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/quotes-booking-and-dispatch/"><div><small>Revenue</small><h3>Quoting & Booking</h3><p>Digitize the freight sale.</p></div><b>Explore quoting ↗</b></a>
                        <a className="related-card" href="/services/tracking-and-customer-portals/"><div><small>Service</small><h3>Customer Portals</h3><p>Self-serve tracking.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/supply-chain-dashboards/"><div><small>Operations</small><h3>Supply Chain BI</h3><p>Visibility across the network.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your logistics <br />and supply chain operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From automated freight quoting engines to real-time tracking portals and carrier management dashboards, we build software that drives efficiency across the supply chain.</p>
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
