import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/service-and-coverage-websites/" },
  title: "Service & Coverage Websites | Hyperlink Tech Solutions",
  description: "We design accessible, high-performance websites for waste management and environmental service companies to clearly communicate service areas, recycling guidelines, and corporate sustainability.",
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
                    <strong>Waste & Environmental</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Environmental Websites</div>
                        <p className="eyebrow">Waste & Environmental</p>
                        <h1 id="service-title">Connect communities with environmental services.</h1>
                        <p className="hero-lead">We design accessible, high-performance websites for waste management and environmental service companies to clearly communicate service areas, recycling guidelines, and corporate sustainability.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Task-oriented UX design prioritizing bin schedules, service maps, and new connections</li>
                            <li>Interactive coverage maps allowing users to check service availability by postcode</li>
                            <li>Authoritative communication of ESG initiatives and landfill diversion rates</li>
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
                            <small>01 · Lower Call Volume</small>
                            <strong>Residents can easily find their collection days online.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Accessibility First</small>
                            <strong>WCAG compliant design for all community members.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Clear Coverage</small>
                            <strong>Visual maps prevent out-of-area booking attempts.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · ESG Trust</small>
                            <strong>Clearly communicate your commitment to the circular economy.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When public websites fail</p>
                        <p>Residents shouldn't have to call you to find out what goes in the recycling bin.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Clunky websites overwhelm your dispatch center.</h2>
                        <p>Waste management operators serve entire municipalities. If your website is hard to navigate on mobile, or residents can't easily find their bin collection schedule, they will flood your call center with basic inquiries, driving up operational costs.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Information Overload</h3>
                                <p>Critical information like holiday collection schedules is buried in unreadable PDFs.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Out of Area Leads</h3>
                                <p>Your sales team wastes time dealing with commercial quote requests from suburbs you don't service.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Rigid CMS</h3>
                                <p>Your comms team has to hire a developer to publish a service disruption notice during a storm.</p>
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
                                <h2>Digital foundations for environmental services.</h2>
                            </div>
                            <p>We build public-facing platforms focused entirely on clarity, speed, and self-service.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Task-Oriented UX</h3>
                                <p>Homepage designs that put high-frequency actions (Bin Schedules, Book a Skip, Report Missed Bin) front and center.</p>
                                <div className="deliverable-tags"><small>UX/UI</small><small>Figma</small><small>Design</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Interactive Coverage Maps</h3>
                                <p>Mapbox or Google Maps integrations where users enter their address to instantly see collection days and service availability.</p>
                                <div className="deliverable-tags"><small>Maps</small><small>Geo</small><small>APIs</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Dynamic ESG Reporting</h3>
                                <p>Visual blocks that pull live data (e.g., tons of waste diverted from landfill) directly into the website.</p>
                                <div className="deliverable-tags"><small>ESG</small><small>DataViz</small><small>Metrics</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Headless CMS Architecture</h3>
                                <p>Next.js paired with Sanity or Contentful, empowering your team to publish emergency notices instantly.</p>
                                <div className="deliverable-tags"><small>Next.js</small><small>Sanity</small><small>Speed</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Environmental Platform</p>
                            <h2>Transforming waste management.</h2>
                        </div>
                        <p>See how we helped a major waste management operator digitize their commercial bookings, outfit drivers with offline-first routing apps, and aggregate weighbridge data into a unified executive dashboard.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Environmental Tech</span>
                                <span>Field Mobility & Data Aggregation</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/waste-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>End-to-end operational visibility.</h2>
                                <p>We developed a custom ecosystem that connects customer self-service portals directly to the routing software in the garbage trucks, reducing missed collections by 80% and providing instant EPA compliance reporting.</p>
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
                        <h2 id="faq-title">Common questions about waste & environmental tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate web bookings directly into our routing software?</summary>
                            <p>Yes. We regularly build API middleware that takes a booking from the public website, processes the payment, and injects the job directly into specialized routing platforms like Routeware, AMCS, or Fleetmatics.</p>
                        </details>
                        <details>
                            <summary>How do drivers use the app if they are in remote areas?</summary>
                            <p>We build driver applications with an 'Offline-First' architecture (using PWA or React Native). Drivers can view their route, tick off completed jobs, and upload photos of contaminated bins entirely offline. The app syncs the data back to HQ the moment a cellular connection is restored.</p>
                        </details>
                        <details>
                            <summary>How do you handle EPA and government compliance reporting?</summary>
                            <p>We build automated data pipelines that pull tonnage from weighbridges, asset data from the CRM, and fleet telematics into a centralized cloud database. From there, we generate dynamic dashboards and automated PDF reports that perfectly match regulatory requirements.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other environmental capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/service-and-coverage-websites/"><div><small>Public Info</small><h3>Service Websites</h3><p>Connect communities with environmental services.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/customer-and-account-portals/"><div><small>Self-Service</small><h3>Account Portals</h3><p>Frictionless account management for residents.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/bookings-and-collection-workflows/"><div><small>Operations</small><h3>Booking Workflows</h3><p>Digitize hard-rubbish and skip bin bookings.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/field-route-and-asset-workflows/"><div><small>Field Crews</small><h3>Route Workflows</h3><p>Optimize collection routes and asset tracking.</p></div><b>Explore field tools ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your waste and <br />environmental operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From seamless customer booking portals to offline routing apps for your drivers, we build software that drives operational efficiency.</p>
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
