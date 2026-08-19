import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/rental-and-operations-dashboards/" },
  title: "Rental & Fleet Operations Dashboards | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
  description: "Build the internal command center to track fleet utilization, manage rental contracts, and monitor equipment telematics.",
};

export default function RentalAndOperationsDashboards() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/rental-and-operations-dashboards/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/rental-and-operations-dashboards/",
          "name": "Rental & Fleet Operations Dashboards | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
          "description": "Build the internal command center to track fleet utilization, manage rental contracts, and monitor equipment telematics.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/rental-and-operations-dashboards/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/rental-and-operations-dashboards/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/rental-and-operations-dashboards/#service",
          "name": "Rental & Operations Dashboards",
          "serviceType": "Manufacturing & B2B Engineering",
          "url": "https://hyperlinktechsolutions.com/services/rental-and-operations-dashboards/",
          "description": "Build the internal command center to track fleet utilization, manage rental contracts, and monitor equipment telematics.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "B2B Manufacturers, heavy equipment dealers, and industrial suppliers"
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
                    <strong>Rental Dashboards</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">The equipment command center</div>
                        <p className="eyebrow">Rental & Operations Dashboards</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Manage your entire rental fleet from <em class="accent-text">one powerful dashboard.</em>' }}></h1>
                        <p className="hero-lead">We build custom, secure operations portals for heavy equipment rental companies. Stop tracking multimillion-dollar fleets on whiteboards and spreadsheets. Get real-time visibility into utilization, contracts, and maintenance.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Track real-time fleet utilization and revenue metrics</li>
                            <li>Integrate IoT/Telematics APIs to monitor machine health and location</li>
                            <li>Automate rental contracts, dispatching, and return workflows</li>
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
                    <div className="proof-bar-inner" aria-label="B2B platform benefits">
                        <div className="proof-item">
                            <small>01 · Maximum Utilization</small>
                            <strong>Spot idle equipment instantly and get it back out on rent.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Telematics Sync</small>
                            <strong>Live GPS locations and engine hours pulled from IoT sensors.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Digital Contracts</small>
                            <strong>Frictionless digital signature workflows for dispatchers.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Maintenance Alerts</small>
                            <strong>Automated warnings when a machine is due for service.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When custom operations software is necessary</p>
                        <p>You can't manage a fleet of 500 excavators efficiently using an Excel spreadsheet.</p>
                        <a className="btn" href="#contact">Discuss Operations Tools <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Running a rental fleet blindly leads to massive losses.</h2>
                        <p>If your dispatchers have to walk the yard to see what is available, or your finance team has to hunt down paper contracts to bill a client, your operations are bottlenecked and you are losing money on idle assets.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Poor Fleet Utilization</h3>
                                <p>You have machines sitting idle in the yard because the sales team isn't sure if they have been inspected and released for rent yet.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Disconnected Telematics</h3>
                                <p>You pay for GPS and telematics hardware on the machines, but the data lives in a separate portal that nobody checks, leading to missed maintenance.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Messy Paper Trails</h3>
                                <p>Rental agreements, damage waivers, and inspection reports are done on paper, causing disputes when equipment comes back damaged.</p>
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
                                <h2>Secure internal tools for fleet dominance.</h2>
                            </div>
                            <p>We build the internal software that makes running a massive equipment operation manageable, secure, and profitable.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Metrics</span>
                                <h3>Utilization Dashboards</h3>
                                <p>Building real-time charts tracking fleet utilization rates, ROI per asset class, and upcoming availability calendars.</p>
                                <div className="deliverable-tags"><small>Utilization</small><small>Metrics</small><small>Charts</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Tracking</span>
                                <h3>IoT & Telematics Integration</h3>
                                <p>Connecting to APIs (like AEMP standards) to pull live GPS, fuel levels, and engine fault codes directly into the dispatcher's view.</p>
                                <div className="deliverable-tags"><small>IoT</small><small>Telematics</small><small>GPS</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Workflow</span>
                                <h3>Rental Contract Automation</h3>
                                <p>Creating digital workflows for dispatchers to generate rental agreements, capture digital signatures on tablets, and trigger billing.</p>
                                <div className="deliverable-tags"><small>Contracts</small><small>Workflows</small><small>Dispatch</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Operations</span>
                                <h3>Maintenance Scheduling</h3>
                                <p>Automating alerts based on telematics data (e.g., triggering a service ticket when an excavator hits 500 engine hours).</p>
                                <div className="deliverable-tags"><small>Maintenance</small><small>Service</small><small>Alerts</small></div>
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
                            <h2>Replacing a mess of spreadsheets with a custom Next.js command center.</h2>
                        </div>
                        <p>See how we built a secure operations portal that increased fleet utilization by 15% for a regional rental company.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Internal Tools</span>
                                <span>Next.js + Telematics API</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Equipment Rental Command Center</p>
                                <h2>Bringing the whiteboard into the digital age.</h2>
                                <p>A heavy equipment rental company managing 5,000+ assets was still using physical whiteboards and massive shared spreadsheets to track which machines were on which job site.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The manual tracking was causing chaos. Machines were frequently "lost," and preventive maintenance was constantly missed because no one was checking the engine hours.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We built a custom Next.js operations dashboard. We integrated the API from their existing telematics hardware to pull live GPS and engine hours directly into the app.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>Dispatchers could finally see the entire fleet on one map. Utilization rates jumped 15% because idle assets were spotted immediately, and preventive maintenance compliance hit 100%.</strong></div>
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
                        <h2 id="faq-title">Common questions about Rental Dashboards.</h2>
                        <p>Answers covering telematics, ERPs, and digital signatures.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can't we just use off-the-shelf rental software?</summary>
                            <p>Yes, platforms like Point of Rental or Wynne are great. However, as your operation grows, you often need to combine data from your rental software, your telematics hardware, and your accounting ERP into one unified view. That's when a custom dashboard becomes necessary.</p>
                        </details>
                        <details>
                            <summary>How do you integrate with telematics hardware?</summary>
                            <p>Most modern telematics providers (like OEM systems from CAT/John Deere or third-party trackers) provide APIs. We write backend microservices to constantly poll these APIs and push the updated location and health data to your dashboard.</p>
                        </details>
                        <details>
                            <summary>What is the AEMP standard?</summary>
                            <p>AEMP (Association of Equipment Management Professionals) is a standard API format used by many heavy equipment manufacturers. It allows us to easily pull data from a mixed fleet (e.g., CAT, Komatsu, Volvo) into one single dashboard without writing 10 different integrations.</p>
                        </details>
                        <details>
                            <summary>Can dispatchers use the dashboard on a tablet in the yard?</summary>
                            <p>Absolutely. We build all our operations tools to be fully responsive. A yard worker can walk up to a machine with an iPad, perform a digital inspection, and the dashboard in the office updates instantly.</p>
                        </details>
                        <details>
                            <summary>How is the dashboard secured?</summary>
                            <p>Internal tools require maximum security. We place the dashboard behind strict authentication (SSO/SAML), restrict access by IP address if necessary, and implement Role-Based Access Control so a yard worker can't see financial revenue data.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Complete your industrial B2B infrastructure.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/product-catalogue-and-discovery/"><div><small>Catalogues</small><h3>B2B Discovery</h3><p>Architect massive, complex B2B catalogues with CAD downloads and bulk ordering.</p></div><b>Explore catalogues ↗</b></a>
                        <a className="related-card" href="/services/equipment-configurators-and-quotes/"><div><small>Sales</small><h3>Equipment Configurators</h3><p>Build interactive CPQ engines to customize heavy machinery instantly.</p></div><b>Explore configurators ↗</b></a>
                        <a className="related-card" href="/services/dealer-and-distributor-portals/"><div><small>Wholesale</small><h3>Dealer Portals</h3><p>Empower your distributors with self-serve ordering and inventory access.</p></div><b>Explore dealer portals ↗</b></a>
                        <a className="related-card" href="/services/rental-and-operations-dashboards/"><div><small>Operations</small><h3>Rental Dashboards</h3><p>Build the command center to track fleet utilization and rental telematics.</p></div><b>Explore rental dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Take control of your <br />equipment operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to give your team the internal tools they need to maximize utilization and track assets? Let's discuss your command center.</p>
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
