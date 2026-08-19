import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/corporate-and-investor-websites/" },
  title: "Corporate & Investor Websites | Hyperlink Tech Solutions",
  description: "We design high-performance corporate websites for resource and infrastructure companies, ensuring investors and media have instant access to market announcements, share prices, and ESG reports.",
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
                    <strong>Corporate Communications</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Corporate Websites</div>
                        <p className="eyebrow">Corporate Communications</p>
                        <h1 id="service-title">Communicate scale, governance, and value.</h1>
                        <p className="hero-lead">We design high-performance corporate websites for resource and infrastructure companies, ensuring investors and media have instant access to market announcements, share prices, and ESG reports.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Ultra-secure Headless CMS architecture preventing unauthorized access to market-sensitive data</li>
                            <li>Live API integrations with financial data providers (ASX, NYSE, IRESS) for stock charts</li>
                            <li>High-performance global hosting to handle massive traffic spikes during quarterly reporting</li>
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
                            <small>01 · Unbreakable Security</small>
                            <strong>Headless architecture eliminates traditional CMS vulnerabilities.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Live Market Data</small>
                            <strong>Automated feeds for share prices and stock exchange announcements.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · ESG Showcase</small>
                            <strong>Interactive hubs for sustainability reports and governance policies.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Traffic Resilience</small>
                            <strong>Edge-caching ensures the site stays fast during major news events.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When corporate communications fail</p>
                        <p>Investors shouldn't struggle to find your latest quarterly report.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Poor digital governance destroys market confidence.</h2>
                        <p>Major resource and infrastructure companies are judged by their transparency and digital presence. If your corporate website is slow, vulnerable to hacking, or requires manual uploads for every market announcement, you are creating compliance risks and frustrating institutional investors.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Security Vulnerabilities</h3>
                                <p>Your current WordPress site is constantly targeted by bots, risking the leak of embargoed financial data.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Delayed Announcements</h3>
                                <p>Manual processes mean your website is hours behind the official stock exchange feed.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Poor Investor UX</h3>
                                <p>Analysts struggle to find historical financial data because PDFs are buried in disorganized folders.</p>
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
                                <h2>Digital foundations for listed companies.</h2>
                            </div>
                            <p>We build platforms that project stability, scale, and uncompromising governance.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Headless CMS Architecture</h3>
                                <p>Implementations using Sanity or Contentful that decouple the database from the public site, ensuring maximum security.</p>
                                <div className="deliverable-tags"><small>Security</small><small>CMS</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Financial Data Integrations</h3>
                                <p>Secure middleware that pulls live charting data, historical prices, and official announcements directly from market APIs.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Finance</small><small>React</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Interactive ESG Hubs</h3>
                                <p>Dedicated micro-sites that visualize your carbon reduction goals, diversity metrics, and community investments.</p>
                                <div className="deliverable-tags"><small>ESG</small><small>DataViz</small><small>Brand</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Global Edge Hosting</h3>
                                <p>Deployment on Vercel or AWS Edge networks to ensure lightning-fast load times for international investors.</p>
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
