import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/customer-booking-portals/" },
  title: "Customer Booking Portals | Hyperlink Tech Solutions",
  description: "We build secure, self-serve portals where shippers can convert quotes into active bookings, upload commercial invoices, and manage packing lists entirely online.",
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
                    <strong>Digital Service</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Shipper Portals</div>
                        <p className="eyebrow">Digital Service</p>
                        <h1 id="service-title">Frictionless freight management.</h1>
                        <p className="hero-lead">We build secure, self-serve portals where shippers can convert quotes into active bookings, upload commercial invoices, and manage packing lists entirely online.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Self-serve dashboards allowing shippers to view active bookings, historical volumes, and account balances</li>
                            <li>Digital document vaults for uploading Commercial Invoices, Packing Lists, and Certificates of Origin</li>
                            <li>Automated ISF (Importer Security Filing) data collection forms connected directly to customs brokers</li>
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
                            <small>01 · Streamlined Operations</small>
                            <strong>Stop playing email ping-pong to collect customs documents.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Processing</small>
                            <strong>Digital document uploads mean your customs team can clear freight faster.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Compliance Control</small>
                            <strong>Ensure all required fields for ISF filing are collected before a container is loaded.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Customer Loyalty</small>
                            <strong>Shippers stick with forwarders who offer transparent, easy-to-use digital booking tools.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When booking is messy</p>
                        <p>Managing 500 import containers via email attachments is a disaster waiting to happen.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Disorganized operations cause supply chain chaos.</h2>
                        <p>Running a freight forwarding operation involves coordinating massive amounts of documentation. When a Commercial Invoice is lost in a spam folder, or a shipper forgets to provide ISF details until the ship sails, your internal team is drowning in admin and the customer faces massive fines.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Missing Paperwork</h3>
                                <p>A shipper emails the wrong packing list, delaying customs clearance and causing demurrage fees.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Data Entry Burden</h3>
                                <p>Your operations team spends hours manually re-keying product details from a PDF into the customs software.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Fragmented Communication</h3>
                                <p>Important booking updates are lost across 20 different email threads between the shipper, agent, and carrier.</p>
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
                                <h2>Centralized shipper operations.</h2>
                            </div>
                            <p>We build secure environments that professionalize the relationship between forwarders and importers.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Booking Dashboards</h3>
                                <p>API integrations pulling live booking data from CargoWise, allowing clients to view all active shipments in one place.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>Dashboards</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Document Vaults</h3>
                                <p>Secure, structured upload portals where shippers attach specific documents directly to the digital shipment file.</p>
                                <div className="deliverable-tags"><small>Cloud</small><small>Integration</small><small>Operations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Customs Data Forms</h3>
                                <p>Interactive forms that validate HTS codes and ISF data before allowing the shipper to submit the booking.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Compliance</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Identity Management (CIAM)</h3>
                                <p>Secure, centralized login flows using Auth0 to ensure only authorized supply chain managers access sensitive trade data.</p>
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
                            <p className="eyebrow">Featured Freight Platform</p>
                            <h2>Digitizing the global supply chain.</h2>
                        </div>
                        <p>See how we helped a global freight forwarder build a custom customer portal connected directly to CargoWise, drastically reducing 'Where is my container?' phone calls and automating their multi-modal quoting process.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Freight Forwarding</span>
                                <span>CargoWise Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/freight-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Complete visibility, zero phone calls.</h2>
                                <p>We developed a secure portal where shippers can log in, view live AIS tracking of their ocean freight, submit customs documents, and pay invoices via Stripe—all syncing bidirectionally with the legacy freight management system.</p>
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
                        <h2 id="faq-title">Common questions about freight tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with CargoWise or other legacy forwarding systems?</summary>
                            <p>We build secure API middleware to connect your headless frontend directly to complex Freight Management Systems (FMS). This allows us to pull live tracking data, shipment statuses, and invoices without exposing the core database.</p>
                        </details>
                        <details>
                            <summary>Can you automate ocean and air quoting?</summary>
                            <p>Yes. Global quoting is incredibly complex due to fluctuating bunker adjustments, peak season surcharges, and local drayage. We build custom calculation engines that pull these variables to generate instant, accurate web quotes for shippers.</p>
                        </details>
                        <details>
                            <summary>Do you provide live map tracking for ocean freight?</summary>
                            <p>Yes. We integrate with visibility providers like Project44, FourKites, or direct AIS data streams to plot containers on an interactive global map within the customer portal.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other freight capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/freight-service-websites/"><div><small>Discovery</small><h3>Freight Websites</h3><p>Showcase global reach.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/rate-and-quotation-workflows/"><div><small>Revenue</small><h3>Quoting Workflows</h3><p>Automate complex pricing.</p></div><b>Explore quoting ↗</b></a>
                        <a className="related-card" href="/services/customer-booking-portals/"><div><small>Service</small><h3>Booking Portals</h3><p>Frictionless freight management.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/tracking-and-exception-visibility/"><div><small>Operations</small><h3>Exception Tracking</h3><p>Visibility across ocean & air.</p></div><b>Explore tracking ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your global <br />freight forwarding operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From automated multi-modal quoting engines to real-time ocean tracking portals and CargoWise integrations, we build software that drives efficiency across international borders.</p>
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
