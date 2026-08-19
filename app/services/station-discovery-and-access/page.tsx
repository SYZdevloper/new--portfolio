import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/station-discovery-and-access/" },
  title: "Station Discovery & Access | Hyperlink Tech Solutions",
  description: "Interactive maps, routing integrations, and access control systems for EV charging networks.",
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
                    <strong>Station Discovery & Access</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Location & Access Systems</div>
                        <p className="eyebrow">Station Discovery & Access</p>
                        <h1 id="service-title">Help drivers find and access your chargers seamlessly.</h1>
                        <p className="hero-lead">We build interactive maps, routing integrations, and access control systems for public and private charging networks.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Reflect charger status changes in milliseconds on the map</li>
                            <li>Navigate drivers to available stations based on current SoC</li>
                            <li>Unlock hardware via App, RFID, or Plug & Charge protocols</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Project <span className="arrow">↗</span></a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        <div className="proof-item">
                            <small>01 · Live Telemetry</small>
                            <strong>Reflect charger status changes in milliseconds on the map.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Smart Routing</small>
                            <strong>Navigate drivers to available stations based on current SoC.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Secure Access</small>
                            <strong>Unlock hardware via App, RFID, or Plug & Charge protocols.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Roaming Integrations</small>
                            <strong>Display partner network chargers via OCPI feeds.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When discovery fails</p>
                        <p>A charger is useless if a driver can't find it or unlock it.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Drivers need absolute trust in your map data.</h2>
                        <p>We build high-performance mapping layers and access control logic that guarantee drivers find the right plug, at the right time, and can actually start a session.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Ghost Chargers</h3>
                                <p>Lagging APIs result in maps showing chargers that have been decommissioned or are actively in maintenance mode.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Outdated Maps</h3>
                                <p>Slow rendering engines and poor clustering make the app unusable when navigating densely populated charger areas.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Frustrating Access</h3>
                                <p>Complex hardware handshakes fail, leaving drivers stranded in front of a charger they cannot unlock.</p>
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
                                <h2>Location intelligence and access control.</h2>
                            </div>
                            <p>We architect performant WebSocket connections and WebGL map rendering to ensure your station data is accurate, fast, and actionable.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Interactive Maps</h3>
                                <p>Custom Mapbox GL JS implementations with smooth clustering, custom markers, and instant filtering.</p>
                                <div className="deliverable-tags"><small>WebGL</small><small>Clustering</small><small>Mapbox</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>OCPI Integrations</h3>
                                <p>Ingest and normalize roaming data from partner networks to expand your app's coverage footprint.</p>
                                <div className="deliverable-tags"><small>OCPI</small><small>Roaming</small><small>Data Sync</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Access Control</h3>
                                <p>Software bridges connecting app interfaces to hardware via RFID pairing, NFC, or backend session commands.</p>
                                <div className="deliverable-tags"><small>RFID/NFC</small><small>Auth</small><small>Hardware</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Telemetry Processing</h3>
                                <p>Event-driven architecture using WebSockets to push live charger status updates to client devices.</p>
                                <div className="deliverable-tags"><small>WebSockets</small><small>Pub/Sub</small><small>Real-time</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Mapping Platform</p>
                            <h2>Building a live-status mapping engine.</h2>
                        </div>
                        <p>See how we helped a charge point operator integrate real-time station telemetry with Google Maps for flawless navigation.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Interactive Maps</span>
                                <span>Location Services</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Intelligent Routing</p>
                                <h2>No more dead chargers or ghost locations.</h2>
                                <p>Drivers were frustrated arriving at stations that were out of service or occupied. The map needed to reflect sub-second state changes.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Syncing thousands of charger statuses to a map UI without lagging.</strong></div>
                                <div className="case-fact"><small>Approach</small><strong>We implemented a WebSocket-driven map layer using Mapbox GL JS for smooth rendering of live statuses.</strong></div>
                                <div className="case-fact"><small>Result</small><strong>"Failed to charge" support tickets decreased by 65%.</strong></div>
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
                        <h2 id="faq-title">Common questions about station discovery.</h2>
                        <p>Answers covering mapping APIs, hardware integration, and roaming.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Do you use Google Maps or Mapbox?</summary>
                            <p>We work with both, but often recommend Mapbox for highly custom, data-heavy charging maps due to its performant WebGL rendering.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with OCPI for roaming networks?</summary>
                            <p>Yes, we build middleware to ingest OCPI (Open Charge Point Interface) feeds, allowing your app to display partner network chargers.</p>
                        </details>
                        <details>
                            <summary>How do drivers unlock private chargers?</summary>
                            <p>We build app integrations using RFID, NFC, or secure Bluetooth/Wi-Fi to authenticate the user and authorize the session locally.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Enhance your discovery platform.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/api-integration-development/"><div><small>Systems</small><h3>API Integration</h3><p>Connect your maps with OCPI and roaming networks.</p></div><b>Explore integration ↗</b></a>
                        <a className="related-card" href="/services/mobile-app-development/"><div><small>Mobile</small><h3>Mobile Apps</h3><p>Build native apps with reliable location services.</p></div><b>Explore apps ↗</b></a>
                        <a className="related-card" href="/services/custom-web-app-development/"><div><small>Web</small><h3>Web Apps</h3><p>Web-based station finders for your marketing site.</p></div><b>Explore web ↗</b></a>
                        <a className="related-card" href="/services/cloud-architecture-and-migration/"><div><small>Cloud</small><h3>Cloud Architecture</h3><p>Scale your WebSocket connections for live maps.</p></div><b>Explore cloud ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Put your chargers on <br />the map. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build a reliable discovery experience that drivers trust? Let's discuss your mapping needs.</p>
                        <a className="btn" href="#contact">Discuss Station Discovery <span className="arrow">↗</span></a>
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
