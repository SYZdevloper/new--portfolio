import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/reporting-and-dashboards/" },
  title: "Custom Dashboard Development & Reporting | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
  description: "Build custom, real-time operational dashboards that visualize your automated workflows, metrics, and business data.",
};

export default function ReportingAndDashboards() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/reporting-and-dashboards/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/reporting-and-dashboards/",
          "name": "Custom Dashboard Development & Reporting | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
          "description": "Build custom, real-time operational dashboards that visualize your automated workflows, metrics, and business data.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/reporting-and-dashboards/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/reporting-and-dashboards/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/reporting-and-dashboards/#service",
          "name": "Custom Dashboards",
          "serviceType": "Data Visualization",
          "url": "https://hyperlinktechsolutions.com/services/reporting-and-dashboards/",
          "description": "Build custom, real-time operational dashboards that visualize your automated workflows, metrics, and business data.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Growing businesses, enterprises, and operations teams"
          }
        }
      ]
    }
    ` }} />
      
    <ServiceInteractions />
      <div className="service-page-wrapper">
        <SiteHeader />

        <main id="top">
            <section className="hero service-hero" aria-labelledby="service-title">
                <nav className="service-breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services/">Services</Link><span>›</span>
                    <strong>Reporting & Dashboards</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Visualizing operational health in real-time</div>
                        <p className="eyebrow">Custom Dashboards</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Stop making decisions based on <em class="accent-text">two-week-old spreadsheets.</em>' }}></h1>
                        <p className="hero-lead">We design and develop custom, real-time dashboards that aggregate data from all your business systems into beautiful, intuitive interfaces, giving your team absolute clarity on operational health.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Aggregate data from disparate CRMs, ERPs, and databases</li>
                            <li>Custom Next.js interfaces tailored exactly to your workflows</li>
                            <li>Role-based views for executives, managers, and operators</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a Dashboard Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Automation benefits">
                        <div className="proof-item">
                            <small>01 · Real-time Metrics</small>
                            <strong>Live data synced directly via API, not stale CSV exports.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Custom Visuals</small>
                            <strong>Bespoke charts designed for your specific KPIs.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Role-based Access</small>
                            <strong>Show the right metrics to the right team members.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Actionable UI</small>
                            <strong>Dashboards you can actually click, filter, and interact with.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When custom dashboards are necessary</p>
                        <p>Off-the-shelf BI tools are often too complex for everyday operational teams.</p>
                        <a className="btn" href="#contact">Discuss Your Dashboards <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Executives need clarity, not complex BI query builders.</h2>
                        <p>While tools like Tableau or PowerBI are powerful for data analysts, they are often incredibly frustrating for operational teams and executives who just need quick, actionable insights.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Spreadsheet Dependency</h3>
                                <p>Critical weekly reporting still relies on someone manually downloading data, running macros, and compiling a PDF.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Clunky BI Interfaces</h3>
                                <p>Standard BI tools look outdated, load slowly, and require SQL knowledge just to filter a simple date range.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>No Central Source</h3>
                                <p>Marketing looks at HubSpot, Finance looks at Xero, and Leadership has no single screen that shows the health of both.</p>
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
                                <h2>Fast, secure, and beautiful data visualization.</h2>
                            </div>
                            <p>We build custom dashboard applications using Next.js and modern charting libraries, delivering a premium SaaS-like experience for your internal data.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Frontend</span>
                                <h3>Next.js Interface Development</h3>
                                <p>Lightning-fast, responsive web interfaces built with React and TailwindCSS for a premium user experience.</p>
                                <div className="deliverable-tags"><small>Next.js</small><small>React</small><small>Tailwind</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Data</span>
                                <h3>API Aggregation Layer</h3>
                                <p>Secure Node.js backends that query, cache, and format data from your various business tools before it hits the frontend.</p>
                                <div className="deliverable-tags"><small>Node.js</small><small>Caching</small><small>APIs</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Visuals</span>
                                <h3>Custom Charting & UX</h3>
                                <p>Implementing advanced charting libraries (Recharts, D3) to visualize complex data points clearly and interactively.</p>
                                <div className="deliverable-tags"><small>D3</small><small>Recharts</small><small>UX Design</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Security</span>
                                <h3>Auth & Role-Based Access</h3>
                                <p>Strict authentication protocols (NextAuth, Supabase) ensuring users only see the data they are authorized to view.</p>
                                <div className="deliverable-tags"><small>Auth</small><small>RBAC</small><small>Security</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Dashboard Build</p>
                            <h2>Replacing 15 messy spreadsheets with one elegant UI.</h2>
                        </div>
                        <p>See how we built a unified executive dashboard that tracks live operational metrics across 4 different legacy platforms.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Dashboard Development</span>
                                <span>Next.js + Tailwind</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Executive Operations Dashboard</p>
                                <h2>Absolute clarity for the C-Suite.</h2>
                                <p>A mid-market logistics firm struggled with visibility. Every Friday, analysts spent 8 hours compiling reports from their fleet software, CRM, and accounting system for Monday leadership meetings.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Leadership was always making decisions based on data that was a week old. The off-the-shelf BI tool they purchased was too difficult for non-technical managers to use effectively.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We designed a sleek, intuitive Next.js dashboard specifically tailored to their 5 core KPIs. We built a data aggregation layer that pulls live stats from all three systems, caching it for instant load times.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>Leadership now has real-time, second-by-second visibility into operational health on their phones and desktops. The 8-hour Friday reporting process was completely eliminated.</strong></div>
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
                        <h2 id="faq-title">Common questions about custom dashboards.</h2>
                        <p>Answers covering BI tools, tech stacks, and data security.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Why build a custom dashboard instead of using PowerBI or Tableau?</summary>
                            <p>Custom Next.js dashboards offer a far superior, frictionless user experience. They load instantly, look exactly like your brand, can be integrated directly into your own SaaS apps, and don't require expensive per-seat licensing for every user.</p>
                        </details>
                        <details>
                            <summary>How do you ensure the dashboard loads quickly with large datasets?</summary>
                            <p>We don't query massive databases directly from the frontend on every load. We build intermediate API layers that cache complex queries, utilize materialized views in PostgreSQL, and aggregate data server-side so the UI remains lightning fast.</p>
                        </details>
                        <details>
                            <summary>Can users interact with and filter the data?</summary>
                            <p>Yes. We build robust, intuitive filtering systems (by date range, region, team member, etc.) that instantly update charts and tables without requiring page reloads.</p>
                        </details>
                        <details>
                            <summary>Can we embed these dashboards into our existing software?</summary>
                            <p>Absolutely. Because we build these as modern web applications (React/Next.js), they can easily be embedded via iframe into existing portals, or the components can be directly integrated into your proprietary SaaS codebase.</p>
                        </details>
                        <details>
                            <summary>Is the data secure?</summary>
                            <p>Yes. We implement enterprise-grade authentication (Oauth, SSO, SAML) and strict role-based access controls (RBAC) so employees can only access the metrics and reports relevant to their specific role.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Scale your operations with intelligent automation.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/workflow-automation/"><div><small>Automation</small><h3>Workflow Automation</h3><p>Turn manual tasks into scalable, automated workflows.</p></div><b>Explore workflow automation ↗</b></a>
                        <a className="related-card" href="/services/document-processing/"><div><small>AI</small><h3>Document Processing</h3><p>Extract structured data from unstructured PDFs and forms using AI.</p></div><b>Explore document processing ↗</b></a>
                        <a className="related-card" href="/services/internal-ai-assistants/"><div><small>Assistants</small><h3>Internal AI Assistants</h3><p>Custom AI agents built on your company data to automate internal requests.</p></div><b>Explore AI assistants ↗</b></a>
                        <a className="related-card" href="/services/reporting-and-dashboards/"><div><small>Analytics</small><h3>Reporting & Dashboards</h3><p>Real-time operational dashboards that visualize your automated workflows.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>See the complete picture <br />of your business. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to replace slow, manual reporting with a beautiful, real-time dashboard? Let's discuss your metrics and data sources.</p>
                        <a className="btn" href="#contact">Get a Dashboard Proposal <span className="arrow">↗</span></a>
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
