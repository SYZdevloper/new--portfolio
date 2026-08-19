import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/transport-service-websites/" },
  title: "Transport Service Websites | Hyperlink Tech Solutions",
  description: "We design high-performance websites for passenger transport, bus networks, and ferry operators that clearly communicate routes, timetables, and service reliability.",
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
                    <strong>Network Discovery</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Transport Websites</div>
                        <p className="eyebrow">Network Discovery</p>
                        <h1 id="service-title">Digitally showcase your transport network.</h1>
                        <p className="hero-lead">We design high-performance websites for passenger transport, bus networks, and ferry operators that clearly communicate routes, timetables, and service reliability.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Interactive network maps showing all routes, stops, and major connection hubs</li>
                            <li>Dynamic timetable interfaces that are easy to read on mobile devices</li>
                            <li>Headless CMS setups allowing operations teams to instantly post service disruption alerts</li>
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
                            <small>01 · Brand Authority</small>
                            <strong>Digital experiences that convey safety, reliability, and scale to passengers.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Reduced Confusion</small>
                            <strong>Ensure passengers easily understand schedules before arriving at the terminal.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · SEO Optimized</small>
                            <strong>Structure that ranks higher for specific regional route and schedule searches.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Operational Agility</small>
                            <strong>Empower your team to post weather delays or route changes without IT help.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When digital fails the network</p>
                        <p>If a passenger can't read your timetable on their phone, they will find another way to travel.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Poor digital presence causes terminal chaos.</h2>
                        <p>Passenger transport requires absolute clarity. If a commuter lands on an outdated website with a massive PDF timetable they have to pinch-to-zoom to read, they will be frustrated. They need immediate confidence in your schedules, route maps, and real-time service status.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The PDF Timetable Problem</h3>
                                <p>Passengers bounce because they can't easily find or read your schedules on a mobile screen.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Slow Performance</h3>
                                <p>Your website feels outdated and sluggish, undermining trust in your overall operation.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Developer Bottlenecks</h3>
                                <p>Customer service is flooded with calls because marketing couldn't update the website about a snow delay fast enough.</p>
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
                                <h2>Digital flagships for transport networks.</h2>
                            </div>
                            <p>We build decoupled frontend experiences that prioritize clear timetable communication and speed.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Headless Architecture</h3>
                                <p>Next.js frontends connected to Sanity or Contentful, ensuring the site is lightning fast and accessible.</p>
                                <div className="deliverable-tags"><small>React</small><small>Headless</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Interactive Network Maps</h3>
                                <p>Custom Mapbox integrations visualizing your routes, terminals, and live vehicle locations if applicable.</p>
                                <div className="deliverable-tags"><small>Maps</small><small>UX</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Digital Timetable Grids</h3>
                                <p>Building responsive, filterable interfaces that allow users to select their stop and instantly see the next departure.</p>
                                <div className="deliverable-tags"><small>UX</small><small>React</small><small>Mobile</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Global Edge Hosting</h3>
                                <p>Deployment on Vercel to ensure your site loads instantly, even during high-traffic rush hours.</p>
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
