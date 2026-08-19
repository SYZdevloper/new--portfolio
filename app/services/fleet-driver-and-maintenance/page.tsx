import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/fleet-driver-and-maintenance/" },
  title: "Fleet, Driver & Maintenance | Hyperlink Tech Solutions",
  description: "We develop digital workflows and mobile apps for drivers to conduct pre-trip inspections, manage shift schedules, and instantly report maintenance defects to the depot.",
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
                    <strong>Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Fleet Operations</div>
                        <p className="eyebrow">Operations</p>
                        <h1 id="service-title">Keep your fleet moving.</h1>
                        <p className="hero-lead">We develop digital workflows and mobile apps for drivers to conduct pre-trip inspections, manage shift schedules, and instantly report maintenance defects to the depot.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Native mobile apps for drivers to complete mandatory DVIR (Driver Vehicle Inspection Reports) digitally</li>
                            <li>Automated maintenance ticketing systems that alert mechanics the moment a driver flags a defect</li>
                            <li>Digital manifest and passenger scanning apps to replace paper clipboards at boarding</li>
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
                            <small>01 · Higher Compliance</small>
                            <strong>Ensure every vehicle is inspected with timestamped, digital proof before it leaves the yard.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Maintenance</small>
                            <strong>Mechanics can order parts before the bus even returns to the depot based on live driver defect reports.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Accurate Boarding</small>
                            <strong>Digital scanners validate tickets instantly, preventing fraud and speeding up departure.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Reduced Paperwork</small>
                            <strong>Eliminate the boxes of paper inspection forms taking up space in the dispatch office.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When the fleet is analog</p>
                        <p>You cannot run a modern transport network on paper inspection forms and radio calls.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Analog tools cripple fleet efficiency and safety.</h2>
                        <p>The physical fleet is your biggest asset. If drivers are completing safety inspections on paper forms that sit in a tray for three days, or if they are manually checking off passenger names on a clipboard, you are risking compliance failures and operating inefficiently.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Compliance Risks</h3>
                                <p>Paper inspection reports go missing, making it impossible to prove a vehicle was checked before a breakdown.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Maintenance Delays</h3>
                                <p>A driver notices a worn tire at 6 AM, but the mechanic doesn't find out until the paper form is handed in at 4 PM.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Boarding Bottlenecks</h3>
                                <p>Passengers are delayed because the driver has to manually search for their name on a printed manifest.</p>
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
                                <h2>The digital driver companion.</h2>
                            </div>
                            <p>We engineer mobile-first tools that turn drivers and mechanics into highly efficient operations nodes.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Native Driver Apps</h3>
                                <p>Building high-performance iOS and Android apps using React Native, designed specifically for ease of use by drivers.</p>
                                <div className="deliverable-tags"><small>Mobile</small><small>React Native</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Digital Inspection Workflows</h3>
                                <p>Custom form logic requiring drivers to check specific vehicle components, upload photos of damage, and sign digitally.</p>
                                <div className="deliverable-tags"><small>Forms</small><small>Operations</small><small>Compliance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Ticket Scanning Integrations</h3>
                                <p>Implementing fast, reliable camera scanning in the app to validate QR codes against the live passenger manifest.</p>
                                <div className="deliverable-tags"><small>Hardware</small><small>Operations</small><small>Accuracy</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Maintenance API Hooks</h3>
                                <p>Developing middleware that automatically opens a work order in your maintenance software (like Fleetio) when a defect is logged.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Integration</small><small>Workflow</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Transport Platform</p>
                            <h2>Modernizing passenger transport.</h2>
                        </div>
                        <p>See how we helped a regional bus and ferry operator replace their legacy booking widget with a custom React frontend, increasing online ticket sales by 35% and drastically reducing lines at the physical terminal.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Transport Tech</span>
                                <span>Booking & Ticketing</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/transport-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Frictionless digital ticketing.</h2>
                                <p>We developed a secure booking engine connected directly to their proprietary inventory system. Passengers can now book multi-leg journeys on their phone in seconds, receiving Apple Wallet passes instead of paper tickets.</p>
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
                        <h2 id="faq-title">Common questions about transport tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with our legacy ticketing or reservation system?</summary>
                            <p>We build secure API middleware to connect your headless frontend directly to complex transport management systems. This allows us to pull live timetables, seat availability, and pricing without exposing the core database.</p>
                        </details>
                        <details>
                            <summary>Can you build custom routing and timetable planners?</summary>
                            <p>Yes. We build interactive trip planners where users can input their origin and destination, and our logic engine calculates the optimal route, showing live ETAs and connection times based on your schedules.</p>
                        </details>
                        <details>
                            <summary>Do you build digital tickets like Apple Wallet passes?</summary>
                            <p>Yes. Upon successful checkout, we can automatically generate dynamic QR codes and native Apple Wallet/Google Pay passes that your drivers or terminal staff can scan easily.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other transport capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/transport-service-websites/"><div><small>Discovery</small><h3>Transport Websites</h3><p>Showcase your network.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/reservations-and-trip-booking/"><div><small>Revenue</small><h3>Trip Booking</h3><p>Frictionless ticketing.</p></div><b>Explore booking ↗</b></a>
                        <a className="related-card" href="/services/customer-and-corporate-portals/"><div><small>Service</small><h3>Passenger Portals</h3><p>Self-serve management.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/fleet-driver-and-maintenance/"><div><small>Operations</small><h3>Fleet & Driver Ops</h3><p>Keep the network moving.</p></div><b>Explore operations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your passenger <br />transport operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From automated ticketing engines to real-time timetable planners and digital maintenance workflows, we build software that drives efficiency across the transport network.</p>
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
