import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/owner-and-service-portals/" },
  title: "Connected Car Owner Portals | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
  description: "Develop connected car portals with live telematics, remote commands, and automated service scheduling.",
};

export default function OwnerAndServicePortals() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/owner-and-service-portals/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/owner-and-service-portals/",
          "name": "Connected Car Owner Portals | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
          "description": "Develop connected car portals with live telematics, remote commands, and automated service scheduling.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/owner-and-service-portals/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/owner-and-service-portals/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/owner-and-service-portals/#service",
          "name": "Owner & Service Portals",
          "serviceType": "Automotive Engineering",
          "url": "https://hyperlinktechsolutions.com/services/owner-and-service-portals/",
          "description": "Develop connected car portals with live telematics, remote commands, and automated service scheduling.",
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
                    <strong>Owner Portals</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Engineering the post-purchase experience</div>
                        <p className="eyebrow">Owner & Service Portals</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Connect your drivers to their vehicles <em class="accent-text">in real-time.</em>' }}></h1>
                        <p className="hero-lead">We build secure "connected car" portals and progressive web apps for vehicle owners. Integrate live telematics, automate service scheduling, and manage vehicle financing in one unified dashboard.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Integrate live telematics APIs (battery range, tire pressure, location)</li>
                            <li>Build secure portals for OTA (Over-The-Air) update management</li>
                            <li>Automate maintenance scheduling based on live odometer readings</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a Portal Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        <div className="proof-item">
                            <small>01 · Live Telematics</small>
                            <strong>Owners see their exact battery range and charging status.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Remote Commands</small>
                            <strong>Secure APIs to lock doors or start climate control from the web.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Proactive Service</small>
                            <strong>Dashboard alerts owners when brake pads actually need replacing.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Digital Glovebox</small>
                            <strong>Secure storage for warranties, manuals, and insurance documents.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When a connected portal is necessary</p>
                        <p>If a driver has to call a dealership just to find out if their car needs service, your brand feels outdated.</p>
                        <a className="btn" href="#contact">Discuss Owner Portals <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Disconnected post-purchase experiences cause brand churn.</h2>
                        <p>Modern drivers expect their car to feel like a smartphone. If your post-purchase experience consists of a paper manual and a generic phone number to call for service, you are severely damaging brand loyalty.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Missed Maintenance</h3>
                                <p>Drivers ignore standard service intervals because they don't know they are due, leading to massive warranty claims and broken vehicles.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Telematics Data Silos</h3>
                                <p>The car is generating gigabytes of data (GPS, engine health), but the owner has no interface to actually view or benefit from that data.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Fragmented Ownership</h3>
                                <p>A user has to visit one website to pay their car loan, another to book service, and use a clunky app to check their battery.</p>
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
                                <h2>Secure, unified connected-car architecture.</h2>
                            </div>
                            <p>We build the Next.js portals that act as the central nervous system for your drivers, securely pulling data from the car to the cloud.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Telematics</span>
                                <h3>Connected Vehicle APIs</h3>
                                <p>Integrating with OEM or third-party telematics providers (like Smartcar) to display live odometer, fuel/battery level, and tire pressure data.</p>
                                <div className="deliverable-tags"><small>Telematics</small><small>APIs</small><small>IoT</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Service</span>
                                <h3>Predictive Maintenance</h3>
                                <p>Writing logic that monitors the live odometer API and automatically prompts the user to schedule a service appointment at the nearest dealer.</p>
                                <div className="deliverable-tags"><small>Maintenance</small><small>Scheduling</small><small>Logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Security</span>
                                <h3>Remote Command APIs</h3>
                                <p>Implementing highly secure, authenticated API calls that allow an owner to lock/unlock doors or flash the lights directly from the web portal.</p>
                                <div className="deliverable-tags"><small>Security</small><small>Remote</small><small>IAM</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Finance</span>
                                <h3>Loan & Subscription Dashboards</h3>
                                <p>Integrating with automotive finance engines to allow users to view their loan payoff amount or manage their premium connectivity subscriptions.</p>
                                <div className="deliverable-tags"><small>Finance</small><small>Subscriptions</small><small>Stripe</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Connectivity Build</p>
                            <h2>Integrating live vehicle telematics to drive proactive maintenance.</h2>
                        </div>
                        <p>See how we built a unified owner portal for a commercial fleet network, reducing vehicle downtime by 30%.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Connected Car Engineering</span>
                                <span>Next.js + Telematics APIs</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Connected Fleet Owner Portal</p>
                                <h2>Ending the oil change guessing game.</h2>
                                <p>A commercial van manufacturer was suffering from high warranty costs because fleet owners were constantly missing critical maintenance intervals.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The vans had onboard telematics hardware, but the fleet owners had no easy way to view the data. They relied on drivers manually writing down odometer readings.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We built a secure Owner Portal integrated directly with the vehicle's telematics API. The dashboard tracks the exact engine hours of every van in the fleet and automatically flags vehicles that are 500 miles away from a required service.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>Preventive maintenance compliance skyrocketed. Catastrophic engine failures (and associated warranty claims) dropped by 30% because the software prompted service before the vehicles broke down.</strong></div>
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
                        <h2 id="faq-title">Common questions about Connected Car Portals.</h2>
                        <p>Answers covering telematics integrations, security, and remote commands.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you get data from the car to the website?</summary>
                            <p>Modern vehicles have cellular modems that push data to the OEM's secure cloud. We build backend Node.js microservices that authenticate with that cloud API, pull the specific vehicle's data, and display it securely on the web portal.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with older cars that don't have modems?</summary>
                            <p>Yes. We often integrate with OBD-II telematics dongles (like Geotab or Samsara) that plug into older vehicles, allowing the same fleet-tracking and diagnostic capabilities.</p>
                        </details>
                        <details>
                            <summary>Is it safe to allow remote locking from a web browser?</summary>
                            <p>Security is paramount. Remote command APIs require incredibly strict authentication (Multi-Factor Authentication, short-lived tokens, and rate limiting). We ensure that even if the website is compromised, the core vehicle API enforces its own security checks.</p>
                        </details>
                        <details>
                            <summary>Can users schedule service directly with a dealer?</summary>
                            <p>Yes. We integrate the portal with the dealership's service scheduling software (like Xtime). The portal passes the vehicle VIN, current mileage, and diagnostic fault codes directly to the mechanic before the car even arrives.</p>
                        </details>
                        <details>
                            <summary>Do you build native iOS/Android apps or Web Apps?</summary>
                            <p>While we often build Progressive Web Apps (PWAs) that work beautifully on mobile browsers (and are much cheaper to maintain), for connected car remote commands (like using your phone as a Bluetooth key), native iOS/Android apps are usually required.</p>
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
                    <h2>Keep your drivers connected <br />long after the sale. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build a unified owner experience powered by live telematics data? Let's discuss your API architecture.</p>
                        <a className="btn" href="#contact">Get a Portal Proposal <span className="arrow">↗</span></a>
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
