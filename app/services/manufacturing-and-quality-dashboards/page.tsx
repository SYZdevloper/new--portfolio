import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/manufacturing-and-quality-dashboards/" },
  title: "OEM Manufacturing & Quality Dashboards | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
  description: "Build internal operations portals for automotive OEMs to track assembly metrics, supply chain logistics, and quality assurance.",
};

export default function ManufacturingAndQualityDashboards() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/manufacturing-and-quality-dashboards/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/manufacturing-and-quality-dashboards/",
          "name": "OEM Manufacturing & Quality Dashboards | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
          "description": "Build internal operations portals for automotive OEMs to track assembly metrics, supply chain logistics, and quality assurance.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/manufacturing-and-quality-dashboards/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/manufacturing-and-quality-dashboards/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/manufacturing-and-quality-dashboards/#service",
          "name": "Manufacturing & Quality Dashboards",
          "serviceType": "Automotive Engineering",
          "url": "https://hyperlinktechsolutions.com/services/manufacturing-and-quality-dashboards/",
          "description": "Build internal operations portals for automotive OEMs to track assembly metrics, supply chain logistics, and quality assurance.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Automotive OEMs, Dealership Networks, and Mobility Startups"
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
                    <strong>Manufacturing Dashboards</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Engineering the factory command center</div>
                        <p className="eyebrow">Manufacturing & Quality Dashboards</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Real-time visibility for your <em class="accent-text">entire assembly line.</em>' }}></h1>
                        <p className="hero-lead">We build custom, secure operations portals for automotive OEMs and tier-1 suppliers. Stop tracking quality assurance on clipboards and get a real-time digital twin of your production bottlenecks.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Integrate factory floor IoT sensors for real-time production metrics</li>
                            <li>Build tablet-optimized Quality Assurance (QA) apps for inspectors</li>
                            <li>Track supply chain logistics and part shortages in one unified dashboard</li>
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
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        <div className="proof-item">
                            <small>01 · Live Bottlenecks</small>
                            <strong>Instantly see which station is slowing down the assembly line.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Digital QA</small>
                            <strong>Inspectors log defects on tablets, immediately updating the repair bay.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Supply Chain Sync</small>
                            <strong>Dashboard alerts managers if a critical part shipment is delayed.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Factory Floor Ready</small>
                            <strong>High-contrast UIs designed specifically for industrial environments.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When factory software is necessary</p>
                        <p>You cannot optimize a modern vehicle assembly line using paper clipboards and Excel.</p>
                        <a className="btn" href="#contact">Discuss Operations Tools <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Blind spots on the factory floor cost millions.</h2>
                        <p>If the plant manager has to wait until the end-of-day report to realize that Station 4 was missing a critical wire harness for three hours, your production line is bleeding money.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Delayed Quality Feedback</h3>
                                <p>A defect is noticed at the end of the line, but because QA is tracked on paper, it takes hours for the data to reach the station that caused the defect, resulting in 50 more defective cars.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Supply Chain Surprises</h3>
                                <p>Assembly halts because a specific sub-assembly didn't arrive from a tier-1 supplier, and the operations team had no early warning system.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Disconnected Floor Data</h3>
                                <p>The robots are generating massive amounts of cycle-time data, but the plant managers have no visual dashboard to actually interpret it.</p>
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
                                <h2>Secure internal tools for production dominance.</h2>
                            </div>
                            <p>We build the internal software that makes running an automotive assembly plant manageable, secure, and data-driven.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Metrics</span>
                                <h3>Assembly Line Dashboards</h3>
                                <p>Building real-time TV dashboards for the factory floor tracking Takt time, completed units, and live bottlenecks.</p>
                                <div className="deliverable-tags"><small>Metrics</small><small>Dashboards</small><small>Takt Time</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · QA</span>
                                <h3>Digital Inspection Apps</h3>
                                <p>Developing fast, tablet-optimized PWA applications for quality inspectors to log defects, attach photos, and route vehicles to the rework bay.</p>
                                <div className="deliverable-tags"><small>QA</small><small>Tablets</small><small>Inspections</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Logistics</span>
                                <h3>Supply Chain Integrations</h3>
                                <p>Connecting to your ERP (SAP/Oracle) and freight APIs to create a unified view of inbound parts vs outbound vehicle deliveries.</p>
                                <div className="deliverable-tags"><small>Supply Chain</small><small>ERP</small><small>Logistics</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Data</span>
                                <h3>IoT & PLC Integrations</h3>
                                <p>Writing middleware to ingest data directly from the Programmable Logic Controllers (PLCs) on the robots to visualize machine health.</p>
                                <div className="deliverable-tags"><small>IoT</small><small>PLCs</small><small>Automation</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Operations Build</p>
                            <h2>Replacing manual clipboard QA checks with a real-time digital dashboard.</h2>
                        </div>
                        <p>See how we built a secure operations portal that reduced rework time by 20% for an EV manufacturer.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Factory Operations</span>
                                <span>Next.js + Tablet PWAs</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">OEM Assembly Line Command Center</p>
                                <h2>Bringing the clipboard into the digital age.</h2>
                                <p>A rapidly scaling EV manufacturer was struggling with quality control bottlenecks. Inspectors were writing down panel gap issues on paper, which were manually typed into a spreadsheet hours later.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>By the time the rework bay received the defect data, the car had already been moved, and the station causing the defect had produced 20 more flawed vehicles.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We built a custom Next.js QA application optimized for iPads on the factory floor. Inspectors tap the location of the defect on a 2D map of the car, which instantly alerts both the rework bay and the originating station.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>The feedback loop was reduced from 4 hours to 2 seconds. The immediate alerts allowed the line managers to fix the root cause instantly, reducing total rework time by 20%.</strong></div>
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
                        <h2 id="faq-title">Common questions about Manufacturing Dashboards.</h2>
                        <p>Answers covering IoT integration, PLCs, and factory floor UX.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you get data from factory robots (PLCs)?</summary>
                            <p>We typically use middleware platforms (like Ignition or Kepware) that talk to the industrial PLCs (Siemens, Allen-Bradley) using protocols like OPC UA. We then pull that data into our modern Next.js dashboards via API.</p>
                        </details>
                        <details>
                            <summary>Can these dashboards run on large TVs on the factory floor?</summary>
                            <p>Yes. We design specific "Andon" board views that are highly legible from 50 feet away, highlighting critical metrics like Takt time and station downtime in bright, high-contrast colors.</p>
                        </details>
                        <details>
                            <summary>Are tablet apps better than paper for QA?</summary>
                            <p>Infinitely. A tablet app enforces structured data (you can't skip a mandatory check), allows for photo uploads of the defect, and instantly transmits the data to the database, eliminating hours of manual data entry.</p>
                        </details>
                        <details>
                            <summary>How is the dashboard secured?</summary>
                            <p>Factory data is highly sensitive. We deploy these applications securely, often entirely on-premise or within a strictly firewalled VPC. Access requires strict SSO/SAML authentication and Role-Based Access Control.</p>
                        </details>
                        <details>
                            <summary>Do you replace our ERP system?</summary>
                            <p>No. The ERP (SAP, Oracle) remains your source of truth for inventory and financials. Our dashboards act as the visual, highly-usable layer on top of the ERP, designed specifically for the fast-paced factory floor.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Complete your automotive digital infrastructure.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/vehicle-experience-and-configurators/"><div><small>Discovery</small><h3>Vehicle Configurators</h3><p>Build high-fidelity 3D car configurators and immersive digital showrooms.</p></div><b>Explore configurators ↗</b></a>
                        <a className="related-card" href="/services/leads-test-drives-and-reservations/"><div><small>Sales</small><h3>Test Drives & Leads</h3><p>Engineer frictionless reservation flows and test-drive logistics.</p></div><b>Explore reservations ↗</b></a>
                        <a className="related-card" href="/services/owner-and-service-portals/"><div><small>After-Sales</small><h3>Owner Portals</h3><p>Develop connected car portals with live telematics and service scheduling.</p></div><b>Explore owner portals ↗</b></a>
                        <a className="related-card" href="/services/manufacturing-and-quality-dashboards/"><div><small>Operations</small><h3>Quality Dashboards</h3><p>Build internal operations portals for OEMs to track assembly metrics.</p></div><b>Explore manufacturing ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Get real-time visibility into <br />your assembly line. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to give your plant managers the internal tools they need to optimize production? Let's discuss your factory data.</p>
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
