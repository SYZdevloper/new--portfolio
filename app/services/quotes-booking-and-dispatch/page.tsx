import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/quotes-booking-and-dispatch/" },
  title: "Quotes, Booking & Dispatch | Hyperlink Tech Solutions",
  description: "We engineer custom quoting engines and booking flows that integrate directly with your TMS, allowing shippers to generate live rates based on dimensional weight and lane density.",
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
                    <strong>Revenue</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Quoting Engines</div>
                        <p className="eyebrow">Revenue</p>
                        <h1 id="service-title">Digitize the freight sale.</h1>
                        <p className="hero-lead">We engineer custom quoting engines and booking flows that integrate directly with your TMS, allowing shippers to generate live rates based on dimensional weight and lane density.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom calculation engines factoring in class, weight, fuel surcharges, and accessorials</li>
                            <li>Live API integrations with your Transportation Management System (TMS) for instant booking</li>
                            <li>Digital Bill of Lading (BOL) generation and dispatch automation</li>
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
                            <small>01 · Faster Conversions</small>
                            <strong>Turn a 2-hour email quoting process into a 10-second web transaction.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Reduced Admin</small>
                            <strong>Stop your staff from manually re-keying web quotes into the TMS.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Accurate Pricing</small>
                            <strong>Guarantee that complex tariffs and fuel surcharges are applied correctly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · 24/7 Operations</small>
                            <strong>Allow shippers to quote and book freight even when your office is closed.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When quoting is manual</p>
                        <p>If it takes you an hour to quote a lane, another broker already won the load.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Manual quoting destroys margin and speed.</h2>
                        <p>Freight moves fast. If a shipper has to email a spreadsheet of dimensions, wait for your team to check the routing guide, and then wait for an emailed PDF quote, they will simply use a digital broker instead. Manual quoting limits your volume and burns out your sales team.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Slow Response Times</h3>
                                <p>Customers request a quote, but your team takes hours to calculate tariffs and capacity manually.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Data Entry Errors</h3>
                                <p>Staff manually type dimensions from an email into the TMS, resulting in incorrect billing or equipment mismatches.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Lost Off-Hours Revenue</h3>
                                <p>You lose bids on weekend or evening freight because your quoting process requires human intervention.</p>
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
                                <h2>Automated freight commerce.</h2>
                            </div>
                            <p>We engineer quoting engines that handle the complex math of logistics instantly.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Custom Quoting Frontends</h3>
                                <p>Building bespoke React interfaces where shippers input dimensions, class, and zip codes to instantly see rates.</p>
                                <div className="deliverable-tags"><small>UX</small><small>React</small><small>Conversion</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>TMS API Middleware</h3>
                                <p>Developing secure Node.js layers that translate quote requests between the modern frontend and legacy TMS databases (e.g., MercuryGate, McLeod).</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Integration</small><small>Logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Complex Tariff Logic</h3>
                                <p>Ensuring that dimensional weight rules, specialized accessorials (liftgate, inside delivery), and customer-specific discounts are perfectly calculated.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Pricing</small><small>Rates</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Digital Dispatch Workflows</h3>
                                <p>Automating the creation of the BOL and instantly pushing the booked load into the dispatch queue.</p>
                                <div className="deliverable-tags"><small>Operations</small><small>Automation</small><small>Workflow</small></div>
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
