import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/site-asset-and-workflows/" },
  title: "Site, Asset & Workflows | Hyperlink Tech Solutions",
  description: "We develop offline-capable mobile apps and workflow tools for remote sites, enabling digital pre-starts, hazard reporting, and asset inspections without cellular coverage.",
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
                    <strong>Field Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Field Mobility Apps</div>
                        <p className="eyebrow">Field Operations</p>
                        <h1 id="service-title">Digitize remote site operations.</h1>
                        <p className="hero-lead">We develop offline-capable mobile apps and workflow tools for remote sites, enabling digital pre-starts, hazard reporting, and asset inspections without cellular coverage.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>True offline-first mobile architecture utilizing local device storage (IndexedDB/SQLite) for remote areas</li>
                            <li>Digital vehicle pre-starts, JSEAs (Job Safety Environmental Analyses), and hazard observation forms</li>
                            <li>Asset inspection tools with barcode/QR scanning and geotagged photo attachments</li>
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
                            <small>01 · Never Lose Data</small>
                            <strong>Workers can complete safety forms deep in a pit without 4G connectivity.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Eliminate Paper</small>
                            <strong>Stop manually transcribing wet, dirty hazard reports at the end of the shift.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Instant Alerts</small>
                            <strong>Critical hazards sync immediately to the HSE manager when the tablet hits Wi-Fi.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Asset Traceability</small>
                            <strong>Scan a pump's QR code and instantly view its entire maintenance history.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When the site is a black spot</p>
                        <p>If your safety app requires an internet connection, it's useless on a remote project.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Poor connectivity destroys operational integrity.</h2>
                        <p>Heavy industry happens where cellular networks often don't exist. When field workers are forced to use web-based tools that drop out, they revert to writing safety forms on paper or skipping them entirely. This means critical hazard data is siloed, delayed, and requires hours of double-entry.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Double Data Entry</h3>
                                <p>A supervisor spends three hours every evening typing paper Take-5 forms into the corporate safety system.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Delayed Hazard Response</h3>
                                <p>A critical equipment fault is written on a paper pre-start, but the mechanic doesn't receive the paperwork until the next day.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>App Frustration</h3>
                                <p>Off-the-shelf enterprise apps freeze and crash when a worker drives out of Wi-Fi range.</p>
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
                                <h2>Rugged software for the field.</h2>
                            </div>
                            <p>We build progressive web apps (PWAs) and React Native mobile tools explicitly designed for harsh, disconnected environments.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Offline-First Architecture</h3>
                                <p>Advanced local caching allowing users to create records, attach photos, and run complex forms entirely offline.</p>
                                <div className="deliverable-tags"><small>Offline</small><small>PWA</small><small>Sync</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Smart Safety Forms</h3>
                                <p>Customizable digital checklists for JSEAs, Take-5s, and incidents, utilizing conditional logic to speed up data entry.</p>
                                <div className="deliverable-tags"><small>Forms</small><small>Logic</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>QR & Barcode Asset Scanning</h3>
                                <p>Native integrations allowing the app to scan an asset tag and instantly retrieve its manuals and inspection history.</p>
                                <div className="deliverable-tags"><small>Hardware</small><small>Assets</small><small>Mobile</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Background Sync Engines</h3>
                                <p>Background processes that detect when cellular or site Wi-Fi is restored and quietly push all saved data to the central server.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Webhooks</small><small>Integration</small></div>
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
