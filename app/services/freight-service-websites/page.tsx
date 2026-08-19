import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/freight-service-websites/" },
  title: "Freight Service Websites | Hyperlink Tech Solutions",
  description: "We design high-performance websites for freight forwarders and NVOCCs that clearly communicate global lane capabilities, multi-modal services, and compliance expertise.",
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
                    <strong>Network Discovery</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Forwarding Websites</div>
                        <p className="eyebrow">Network Discovery</p>
                        <h1 id="service-title">Digitally showcase your global reach.</h1>
                        <p className="hero-lead">We design high-performance websites for freight forwarders and NVOCCs that clearly communicate global lane capabilities, multi-modal services, and compliance expertise.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Interactive global network maps showing primary trade lanes, agents, and warehousing nodes</li>
                            <li>Specialized service pages detailing customs brokerage, project cargo, and cold chain expertise</li>
                            <li>Headless CMS setups allowing marketing teams to launch new trade lane promotions instantly</li>
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
                            <small>01 · Brand Authority</small>
                            <strong>Digital experiences that convey global scale and reliability to major importers.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Lead Qualification</small>
                            <strong>Ensure prospects understand your specific lane expertise before requesting a quote.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Global SEO</small>
                            <strong>Structure that ranks higher for specific international trade route searches.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Marketing Agility</small>
                            <strong>Empower your team to update compliance notices and tariffs without developer help.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When digital fails global trade</p>
                        <p>If a shipper can't tell if you have agents in Shenzhen, they won't ask for a quote.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Poor digital presence costs you enterprise importers.</h2>
                        <p>International logistics requires deep trust. If a massive importer lands on an outdated website with vague descriptions of 'global services' and a generic contact form, they will bounce. They need immediate confidence in your specific trade lanes, customs expertise, and technical capabilities.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Vague Capabilities</h3>
                                <p>Shippers bounce because they can't easily find a map of your service areas or a list of your specialized certifications.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Slow Performance</h3>
                                <p>Your website feels outdated and sluggish, undermining trust in your technical ability to handle complex supply chains.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Developer Bottlenecks</h3>
                                <p>Marketing is unable to announce a new direct LCL consolidation service without waiting weeks for IT.</p>
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
                                <h2>Digital flagships for freight forwarders.</h2>
                            </div>
                            <p>We build decoupled frontend experiences that prioritize clear capability communication and global speed.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Headless Architecture</h3>
                                <p>Next.js frontends connected to Sanity or Contentful, ensuring the site is lightning fast worldwide.</p>
                                <div className="deliverable-tags"><small>React</small><small>Headless</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Interactive Network Maps</h3>
                                <p>Custom Mapbox integrations visualizing your global agent network, ports, and real-time trade lanes.</p>
                                <div className="deliverable-tags"><small>Maps</small><small>UX</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Compliance Catalogues</h3>
                                <p>Structured pages detailing customs brokerage services, Incoterms guides, and compliance certifications.</p>
                                <div className="deliverable-tags"><small>CMS</small><small>Data</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Global Edge Hosting</h3>
                                <p>Deployment on Vercel to ensure your site loads instantly whether the user is in LA or Singapore.</p>
                                <div className="deliverable-tags"><small>DevOps</small><small>Performance</small><small>Scale</small></div>
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
