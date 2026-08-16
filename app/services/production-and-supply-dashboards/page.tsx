import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/production-and-supply-dashboards/" },
  title: "Production & Supply Dashboards | Hyperlink Tech Solutions",
  description: "Visualize your entire supply chain. We build custom production and supply dashboards that aggregate data from ERPs, PLCs, and logistics APIs for real-time intelligence.",
};

export default function ProductionAndSupplyDashboards() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/production-and-supply-dashboards/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/production-and-supply-dashboards/",
          "name": "Production & Supply Dashboards | Hyperlink Tech Solutions",
          "description": "Visualize your entire supply chain. We build custom production and supply dashboards that aggregate data from ERPs, PLCs, and logistics APIs for real-time intelligence.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/production-and-supply-dashboards/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/production-and-supply-dashboards/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/production-and-supply-dashboards/#service",
          "name": "Production & Supply Dashboards",
          "serviceType": "Business Intelligence & Data Visualization",
          "url": "https://hyperlinktechsolutions.com/services/production-and-supply-dashboards/",
          "description": "Visualize your entire supply chain. We build custom production and supply dashboards that aggregate data from ERPs, PLCs, and logistics APIs for real-time intelligence.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Supply Chain Executives, Plant Managers, and Logistics Directors"
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
                    <strong>Production & Supply Dashboards</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Real-Time Operational Intelligence</div>
                        <p className="eyebrow">Production & Supply Dashboards</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Turn supply chain noise into <em class="accent-text">actionable clarity.</em>' }}></h1>
                        <p className="hero-lead">We engineer high-performance data dashboards that sit on top of your existing systems. Aggregate telemetry from the factory floor, logistics networks, and enterprise databases into one unified command center.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Aggregate data from SAP, Oracle, IoT sensors, and 3PL APIs</li>
                            <li>Real-time visualization of capacity, yield, and bottlenecks</li>
                            <li>Custom reporting interfaces built with Next.js and specialized charting libraries</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Data <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Dashboard benefits">
                        <div className="proof-item">
                            <small>01 · Unified View</small>
                            <strong>Stop switching between 5 different software tools to see one metric.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Predictive Analytics</small>
                            <strong>Spot production delays before they impact customer deliveries.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Accessible UX</small>
                            <strong>Consumer-grade interfaces that executives actually want to use.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · High Speed</small>
                            <strong>Query millions of rows of supply data in milliseconds.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When Custom Dashboards are necessary</p>
                        <p>When your leadership team argues over whose spreadsheet has the "correct" numbers.</p>
                        <a className="btn" href="#contact">Centralize Your Data <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Siloed operational data makes proactive management impossible.</h2>
                        <p>In modern manufacturing and supply chains, the data exists, but it's trapped. Your ERP holds orders, your PLCs hold machine speeds, and your freight forwarder holds tracking info. When you can't see how these connect in real-time, you operate reactively.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The Spreadsheet Grind</h3>
                                <p>Analysts spend 20 hours a week downloading CSVs and building pivot tables just to produce a weekly supply chain report that is already outdated.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Blind Spots</h3>
                                <p>A critical machine is operating at 60% capacity, but management won't realize it until the end-of-month yield report is generated.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Ugly BI Tools</h3>
                                <p>Legacy Business Intelligence platforms are so complex and visually cluttered that non-technical managers refuse to adopt them.</p>
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
                                <h2>Custom Data Visualization Architecture.</h2>
                            </div>
                            <p>We build lightweight, incredibly fast web applications that connect directly to your data lakes and APIs to render beautiful, actionable insights.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Integration</span>
                                <h3>API & Data Aggregation</h3>
                                <p>Building secure middleware to pull data from disparate sources—ERPs, warehouse systems, and IoT sensors—into a unified analytics layer.</p>
                                <div className="deliverable-tags"><small>Middleware</small><small>APIs</small><small>ETL</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · UI/UX</span>
                                <h3>Executive Interfaces</h3>
                                <p>Designing clean, intuitive dashboard layouts tailored specifically to the KPIs your leadership team actually cares about.</p>
                                <div className="deliverable-tags"><small>UI/UX</small><small>KPIs</small><small>Design</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Visualization</span>
                                <h3>Advanced Charting</h3>
                                <p>Utilizing high-performance libraries like D3.js or Recharts to render complex, interactive datasets without freezing the browser.</p>
                                <div className="deliverable-tags"><small>D3.js</small><small>Graphs</small><small>React</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Infrastructure</span>
                                <h3>Real-Time Socket Connections</h3>
                                <p>Implementing WebSockets to stream live factory floor telemetry directly to the dashboard, ensuring zero latency on critical alerts.</p>
                                <div className="deliverable-tags"><small>WebSockets</small><small>Real-Time</small><small>Telemetry</small></div>
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
                            <h2>Unifying 12 global manufacturing plants.</h2>
                        </div>
                        <p>See how we gave a global executive team real-time visibility into their entire production network.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Data Visualization</span>
                                <span>React & D3.js</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#1a1a1a', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ color: '#666', fontSize: '1.2rem', fontWeight: 500 }}>Global Capacity Map</div>
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Automotive Parts Manufacturer</p>
                                <h2>Ending the weekly spreadsheet war.</h2>
                                <p>The executive team at a Tier-1 auto supplier spent 4 hours every Monday arguing over capacity metrics because the 12 global plants used different reporting systems and formats.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Data from European SAP systems and Mexican on-premise servers had to be aggregated manually, creating a 5-day delay in operational intelligence.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We built a unified data pipeline that feeds into a custom React dashboard. Executives can now see live yield, OEE (Overall Equipment Effectiveness), and supply delays globally.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>The 4-hour Monday meeting was eliminated. Supply chain leaders can now instantly spot bottlenecks and reroute orders to facilities with excess capacity.</strong></div>
                            </div>
                            <a className="btn primary" href="/contact">Start Your Project <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">Common questions about Custom Dashboards.</h2>
                        <p>Answers covering Tableau vs Custom Builds, security, and mobile access.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Why build a custom dashboard instead of using PowerBI or Tableau?</summary>
                            <p>Tools like PowerBI are incredibly powerful, but they often require deep training, look generic, and have restrictive licensing costs per user. We build custom dashboards when you need a consumer-grade, heavily branded interface that is so intuitive anyone in the company can use it instantly, with zero per-seat licensing fees.</p>
                        </details>
                        <details>
                            <summary>Can these dashboards pull data from older legacy software?</summary>
                            <p>Yes. If your legacy software doesn't have a modern API, we can build scripts to query its SQL database directly or parse daily CSV exports, pushing that data into a modern analytics layer.</p>
                        </details>
                        <details>
                            <summary>Are these dashboards secure enough for financial supply data?</summary>
                            <p>Absolutely. We implement enterprise-grade authentication (OIDC, SAML, SSO integrations like Okta/Azure AD) and strict Role-Based Access Control so a floor manager only sees their shift data, while the CEO sees the global roll-up.</p>
                        </details>
                        <details>
                            <summary>Will this work on an iPad or mobile device?</summary>
                            <p>Yes. Unlike clunky desktop-first BI tools, our custom React/Next.js dashboards are fully responsive. Plant managers can view real-time line metrics on a tablet while walking the factory floor.</p>
                        </details>
                        <details>
                            <summary>Can the dashboard trigger external alerts?</summary>
                            <p>Yes. We can program logic into the middleware to trigger SMS, Slack, or email alerts if a specific metric (like machine temperature or inventory level) crosses a critical threshold.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Complete your digital infrastructure.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/quality-and-traceability-workflows/"><div><small>Compliance</small><h3>Quality Workflows</h3><p>Ensure the data feeding your dashboard is accurate and compliant.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/product-information-and-catalogues/"><div><small>Data</small><h3>Product Information</h3><p>Centralize your SKU data to standardize reporting across plants.</p></div><b>Explore PIM ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>See your business. <br />Scale your operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to replace those massive spreadsheets with a real-time, interactive command center? Let's discuss your data.</p>
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
