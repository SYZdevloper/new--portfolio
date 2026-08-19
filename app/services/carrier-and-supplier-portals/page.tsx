import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/carrier-and-supplier-portals/" },
  title: "Carrier & Supplier Portals | Hyperlink Tech Solutions",
  description: "We engineer secure B2B portals where external carriers, owner-operators, and warehouse partners can view available loads, submit bids, and upload compliance documents.",
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
                        <div className="hero-status">Carrier Portals</div>
                        <p className="eyebrow">B2B Operations</p>
                        <h1 id="service-title">Streamline carrier relations.</h1>
                        <p className="hero-lead">We engineer secure B2B portals where external carriers, owner-operators, and warehouse partners can view available loads, submit bids, and upload compliance documents.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Load board interfaces for carriers to view, bid on, or instantly 'Buy It Now' for available freight</li>
                            <li>Digital document management for insurance certificates, W-9s, and Proof of Delivery (POD) uploads</li>
                            <li>Automated settlement dashboards where carriers can track their payments and submit invoices</li>
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
                            <strong>Stop playing phone tag with dispatchers to cover a load.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Billing</small>
                            <strong>Digital POD uploads mean you can invoice the shipper days faster.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Compliance Control</small>
                            <strong>Automatically block carriers from booking loads if their insurance is expired.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Carrier Loyalty</small>
                            <strong>Carriers prefer working with brokers who offer transparent, easy-to-use digital tools.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When B2B communication is messy</p>
                        <p>Managing 500 owner-operators via text message is a disaster waiting to happen.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Disorganized operations cause supply chain chaos.</h2>
                        <p>Running a 3PL or brokerage involves coordinating with hundreds of external carriers. When insurance docs are lost in spam folders, or a driver is begging your accounts payable team for payment status, your internal team is drowning in admin instead of covering freight.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Missing Paperwork</h3>
                                <p>A driver loses the physical BOL, delaying the entire invoicing cycle by weeks.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Check Calls</h3>
                                <p>Your track-and-trace team spends all day calling drivers just to ask 'Where are you?'</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Compliance Risks</h3>
                                <p>You accidentally dispatch a load to a carrier whose safety rating was downgraded yesterday.</p>
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
                                <h2>Centralized carrier operations.</h2>
                            </div>
                            <p>We build secure B2B environments that professionalize the relationship between brokers and carriers.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Load Board Dashboards</h3>
                                <p>API integrations pulling live unassigned freight from the TMS, allowing carriers to view and bid on matching lanes.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>Dashboards</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Document Vaults</h3>
                                <p>Secure, mobile-friendly upload portals where drivers can snap a photo of a POD and instantly attach it to the TMS load file.</p>
                                <div className="deliverable-tags"><small>Mobile</small><small>Integration</small><small>Operations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Settlement Portals</h3>
                                <p>Custom interfaces where carriers can view the payment status of past loads and opt-in for 'Quick Pay' discounts.</p>
                                <div className="deliverable-tags"><small>Finance</small><small>Logic</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Identity & Compliance (CIAM)</h3>
                                <p>Secure login flows connected to RMIS or SaferWatch APIs to ensure only active, compliant carriers can access the portal.</p>
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
