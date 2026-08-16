import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/production-and-service-dashboards/" },
  title: "Production & Service Dashboards | Hyperlink Tech Solutions",
  description: "Gain real-time visibility into your operations. We engineer custom dashboards that unify data from your manufacturing floor, field service software, and ERP.",
};

export default function ProductionAndServiceDashboards() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/production-and-service-dashboards/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/production-and-service-dashboards/",
          "name": "Production & Service Dashboards | Hyperlink Tech Solutions",
          "description": "Gain real-time visibility into your operations. We engineer custom dashboards that unify data from your manufacturing floor, field service software, and ERP.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/production-and-service-dashboards/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/production-and-service-dashboards/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/production-and-service-dashboards/#service",
          "name": "Production & Service Dashboards",
          "serviceType": "Operational Intelligence & Visualization",
          "url": "https://hyperlinktechsolutions.com/services/production-and-service-dashboards/",
          "description": "Gain real-time visibility into your operations. We engineer custom dashboards that unify data from your manufacturing floor, field service software, and ERP.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Plant Managers, Field Service Directors, and Operations Executives"
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
                    <strong>Production & Service Dashboards</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Unified Operational Data</div>
                        <p className="eyebrow">Production & Service Dashboards</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Connect the factory floor to the <em class="accent-text">field service team.</em>' }}></h1>
                        <p className="hero-lead">We build incredibly fast, custom BI dashboards that aggregate your trapped data. See machine telemetry, field technician routes, and ERP supply levels on a single screen in real-time.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Aggregate data from PLCs, IoT sensors, and field service APIs</li>
                            <li>Real-time visualization using Next.js and high-performance charts</li>
                            <li>Custom alerts for downtime, maintenance, and SLA breaches</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Dashboards <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Dashboard benefits">
                        <div className="proof-item">
                            <small>01 · Eliminates Spreadsheets</small>
                            <strong>Stop spending Fridays manually merging CSV files.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Proactive Maintenance</small>
                            <strong>Identify degrading machine performance before it causes downtime.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Accessible UX</small>
                            <strong>Dashboards that look beautiful on a desktop or a tablet on the shop floor.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · High Speed</small>
                            <strong>Query millions of rows of operational data in milliseconds.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When Custom Dashboards are necessary</p>
                        <p>When leadership spends meetings arguing about which software has the "correct" numbers.</p>
                        <a className="btn" href="#contact">Centralize Your Data <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Siloed operational data prevents proactive leadership.</h2>
                        <p>In complex industrial operations, your data is rarely in one place. Your SCADA system holds machine uptime, your field management tool holds technician schedules, and your ERP holds the financial impact. When these systems don't talk to each other, you are managing blindly.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The Monday Morning Trap</h3>
                                <p>Analysts spend all weekend downloading disparate reports to build a slide deck that is already 48 hours out of date by Monday morning.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Reactive Service</h3>
                                <p>A machine goes down, but your field service team isn't automatically dispatched because the production software isn't connected to the scheduling tool.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Cluttered BI Tools</h3>
                                <p>Legacy BI tools are so overwhelmingly complex that managers refuse to log in, preferring to request custom data pulls from IT.</p>
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
                            <p>We build lightweight, web-based applications that sit on top of your existing infrastructure, providing consumer-grade interfaces for your most complex industrial data.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Integration</span>
                                <h3>API & Database Aggregation</h3>
                                <p>Writing secure middleware to pull data from your legacy ERPs (SAP, Epicor), IoT sensors, and modern SaaS tools into a unified analytics warehouse.</p>
                                <div className="deliverable-tags"><small>Middleware</small><small>APIs</small><small>ETL Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · UI/UX</span>
                                <h3>Role-Based Interfaces</h3>
                                <p>Designing different views for different users: a macro-level financial roll-up for executives, and a micro-level machine status view for the plant manager.</p>
                                <div className="deliverable-tags"><small>UX Design</small><small>RBAC</small><small>Dashboards</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Visualization</span>
                                <h3>Advanced React Charting</h3>
                                <p>Utilizing high-performance libraries like D3.js and Recharts to render massive datasets smoothly in the browser without lagging or crashing.</p>
                                <div className="deliverable-tags"><small>React</small><small>D3.js</small><small>Data Viz</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Infrastructure</span>
                                <h3>Real-Time Alerts</h3>
                                <p>Implementing WebSockets to stream live telemetry, allowing the dashboard to instantly trigger SMS or email alerts when critical SLAs are breached.</p>
                                <div className="deliverable-tags"><small>WebSockets</small><small>Alerts</small><small>Telemetry</small></div>
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
                            <h2>Bridging the gap between production and field repair.</h2>
                        </div>
                        <p>See how we connected IoT machine telemetry directly to a field service routing dashboard.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Operational Dashboards</span>
                                <span>IoT Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#1a1a1a', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ color: '#666', fontSize: '1.2rem', fontWeight: 500 }}>Live Operations Map</div>
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Industrial Equipment Manufacturer</p>
                                <h2>Fixing machines before the client calls.</h2>
                                <p>A manufacturer of heavy industrial HVAC units equipped their machines with IoT sensors, but the data was locked inside a clunky proprietary app. Their field service dispatchers couldn't see the sensor data, and their engineers couldn't see the dispatch schedule.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Because the systems were siloed, technicians were being dispatched *after* a unit failed, resulting in furious customers and breached SLA penalties.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We built a unified "Command Center" web app. It pulls live temperature telemetry from the units and cross-references it with technician GPS locations via their field service API.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>If a unit's vibration metric spikes, the dashboard flashes red and automatically suggests routing the closest available technician. Unplanned downtime for their clients was reduced by 34%.</strong></div>
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
                        <p>Answers covering Tableau vs Custom Builds, security, and legacy tech.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Why build a custom dashboard instead of using PowerBI or Tableau?</summary>
                            <p>Tools like PowerBI are incredibly powerful, but they often require deep training, look generic, and have restrictive licensing costs per user. We build custom dashboards when you need a consumer-grade, heavily branded interface that is so intuitive anyone in the company can use it instantly, with zero per-seat licensing fees.</p>
                        </details>
                        <details>
                            <summary>Can these dashboards pull data from older legacy software?</summary>
                            <p>Yes. If your legacy software doesn't have a modern REST API, we can build scripts to query its SQL/Oracle database directly or parse daily CSV exports via an FTP server, pushing that data into a modern analytics layer.</p>
                        </details>
                        <details>
                            <summary>Are these dashboards secure enough for proprietary operational data?</summary>
                            <p>Absolutely. We implement enterprise-grade authentication (OIDC, SAML, SSO integrations like Okta/Azure AD) and strict Role-Based Access Control so a floor manager only sees their shift data, while the CEO sees the global roll-up.</p>
                        </details>
                        <details>
                            <summary>Will this work on an iPad or mobile device?</summary>
                            <p>Yes. Unlike clunky desktop-first BI tools, our custom React/Next.js dashboards are fully responsive. Plant managers and field technicians can view real-time metrics natively on their tablets.</p>
                        </details>
                        <details>
                            <summary>How fast is the data refresh rate?</summary>
                            <p>It depends on your backend infrastructure. If your systems support it, we can use WebSockets to stream data in sub-second real-time. If we are polling an older API, we can configure the refresh rate to whatever cadence your database can handle safely.</p>
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
                        <a className="related-card" href="/services/distributor-and-customer-portals/"><div><small>Commerce</small><h3>Customer Portals</h3><p>Ensure the order data feeding your dashboard is fully digitized.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/quality-and-traceability-workflows/"><div><small>Compliance</small><h3>Quality Workflows</h3><p>Digitize the QC logs that populate your production dashboard.</p></div><b>Explore workflows ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>See the data. <br />Fix the problem. <span className="orb-icon" aria-hidden="true"></span></h2>
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
