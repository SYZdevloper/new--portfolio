import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/corporate-supplier-and-contractor-portals/" },
  title: "Supplier & Contractor Portals | Hyperlink Tech Solutions",
  description: "We engineer secure B2B portals for major projects, automating contractor inductions, tracking insurance expiries, and managing tender submissions.",
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
                    <strong>Procurement & Compliance</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Contractor Portals</div>
                        <p className="eyebrow">Procurement & Compliance</p>
                        <h1 id="service-title">Streamline vendor onboarding and compliance.</h1>
                        <p className="hero-lead">We engineer secure B2B portals for major projects, automating contractor inductions, tracking insurance expiries, and managing tender submissions.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Automated vendor pre-qualification workflows capturing insurances, safety records, and certifications</li>
                            <li>Digital site induction systems delivering safety videos and capturing digital signatures</li>
                            <li>Secure document vaults for distributing tender packages and receiving bids</li>
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
                            <small>01 · Compliance Enforcement</small>
                            <strong>Ensure no vendor enters a site with expired public liability insurance.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Inductions</small>
                            <strong>Contractors arrive on day one already inducted and ready to work.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Tender Security</small>
                            <strong>Distribute massive engineering packages securely to approved bidders.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Audit Trails</small>
                            <strong>Immutable records of every submitted compliance document.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When procurement is manual</p>
                        <p>Managing 500 contractors via spreadsheets is a massive safety and financial risk.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Vendor friction slows down project delivery.</h2>
                        <p>Major infrastructure and resource projects run on contractors. When safety inductions are done on paper, insurance expiries are tracked in Excel, and tenders are managed via Dropbox, your procurement and HSE teams are bogged down in administration instead of driving project value.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Compliance Lapses</h3>
                                <p>A subcontractor is involved in an incident, and you discover their Workers Compensation insurance expired a month ago.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Induction Bottlenecks</h3>
                                <p>Dozens of workers sit in a site shed for four hours completing paper inductions instead of turning tools.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Tender Chaos</h3>
                                <p>Engineering drawings are lost or version-control is broken because they were distributed via disparate email chains.</p>
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
                                <h2>Streamlined vendor management.</h2>
                            </div>
                            <p>We build secure portals that act as the central compliance and procurement hub for your operations.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Automated Compliance Tracking</h3>
                                <p>Dashboards that visually flag expiring insurances and automatically lock non-compliant vendors out of the site access system.</p>
                                <div className="deliverable-tags"><small>Compliance</small><small>Alerts</small><small>Logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Digital Induction Workflows</h3>
                                <p>Modules that allow workers to watch site-specific safety videos, complete quizzes, and sign off digitally before arriving.</p>
                                <div className="deliverable-tags"><small>Safety</small><small>Forms</small><small>Mobile</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Tender & Bid Portals</h3>
                                <p>Secure data rooms where pre-qualified suppliers can download massive CAD files and submit structured commercial bids.</p>
                                <div className="deliverable-tags"><small>B2B</small><small>Security</small><small>Procurement</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>ERP / Finance Middleware</h3>
                                <p>Integration layers that push approved vendor details directly into SAP or Oracle, eliminating double data entry.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Integration</small><small>ERP</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Corporate Platform</p>
                            <h2>Digitizing the social license to operate.</h2>
                        </div>
                        <p>See how we helped a tier-one resource company consolidate their investor communications, community grant applications, and site contractor inductions into a single, highly secure digital ecosystem.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Corporate Tech</span>
                                <span>ESG & Stakeholder Management</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/corporate-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Visibility from the board to the pit.</h2>
                                <p>We developed a headless corporate architecture that seamlessly handles massive traffic spikes during quarterly reporting, while privately serving secure portals for local community stakeholders and tier-one contractors.</p>
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
                        <h2 id="faq-title">Common questions about corporate & resource tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate live share prices and ASX/NYSE announcements?</summary>
                            <p>Yes. We regularly integrate with financial data providers (like IRESS or EQS) to display real-time share price charts and automatically publish market announcements to your corporate website without double-handling data.</p>
                        </details>
                        <details>
                            <summary>How do you handle security for corporate and investor platforms?</summary>
                            <p>We build using Headless CMS architecture and static-site generation (Next.js). This means there is no traditional database exposed to the public internet, virtually eliminating the risk of SQL injection or WordPress-style vulnerabilities, ensuring your market-sensitive data is secure.</p>
                        </details>
                        <details>
                            <summary>Do your site workflow apps work completely offline in remote areas?</summary>
                            <p>Absolutely. We specialize in Offline-First progressive web and mobile applications using local device databases. Site workers can complete hazard reports, vehicle pre-starts, and asset inspections entirely offline; the app will automatically sync when they return to the site office Wi-Fi.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other corporate capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/corporate-and-investor-websites/"><div><small>Communications</small><h3>Investor Websites</h3><p>Communicate scale, governance, and value.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/community-and-stakeholder-portals/"><div><small>Engagement</small><h3>Stakeholder Portals</h3><p>Transparent community engagement.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/corporate-supplier-and-contractor-portals/"><div><small>Procurement</small><h3>Contractor Portals</h3><p>Streamline vendor onboarding.</p></div><b>Explore procurement ↗</b></a>
                        <a className="related-card" href="/services/operations-and-esg-dashboards/"><div><small>Analytics</small><h3>ESG Dashboards</h3><p>Visibility across production and sustainability.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your corporate <br />and operational footprint. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From highly secure investor websites to offline hazard reporting apps on remote sites, we build software that drives governance and operational efficiency.</p>
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
