import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/leads-test-drives-and-reservations/" },
  title: "Vehicle Reservations & Test Drive Portals | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
  description: "Engineer frictionless reservation flows and automated test-drive logistics for automotive OEMs and dealers.",
};

export default function LeadsTestDrivesAndReservations() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/leads-test-drives-and-reservations/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/leads-test-drives-and-reservations/",
          "name": "Vehicle Reservations & Test Drive Portals | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
          "description": "Engineer frictionless reservation flows and automated test-drive logistics for automotive OEMs and dealers.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/leads-test-drives-and-reservations/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/leads-test-drives-and-reservations/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/leads-test-drives-and-reservations/#service",
          "name": "Leads, Test Drives & Reservations",
          "serviceType": "Automotive Engineering",
          "url": "https://hyperlinktechsolutions.com/services/leads-test-drives-and-reservations/",
          "description": "Engineer frictionless reservation flows and automated test-drive logistics for automotive OEMs and dealers.",
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
                    <strong>Test Drives & Leads</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Converting digital interest into physical sales</div>
                        <p className="eyebrow">Leads, Test Drives & Reservations</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Turn website traffic into <em class="accent-text">keys in hand.</em>' }}></h1>
                        <p className="hero-lead">We engineer frictionless direct-to-consumer reservation engines and automated test-drive scheduling logistics. Stop losing high-intent buyers to clunky lead forms and slow dealership follow-ups.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Build automated $100+ deposit flows for new vehicle reservations</li>
                            <li>Integrate real-time calendar APIs for instant test-drive booking</li>
                            <li>Route leads intelligently to the closest dealership CRM</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a Reservations Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        <div className="proof-item">
                            <small>01 · Frictionless Deposits</small>
                            <strong>Apple Pay and Stripe integrations for 1-click reservations.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Instant Booking</small>
                            <strong>Users schedule a test drive without waiting for an email reply.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Smart Routing</small>
                            <strong>Automatically assign the lead to the closest available dealership.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · DMS Sync</small>
                            <strong>Push all lead data directly into Reynolds & Reynolds, CDK, or Salesforce.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When a reservation engine matters</p>
                        <p>If a customer is ready to put down a $100 deposit, do not make them fill out a 5-page form.</p>
                        <a className="btn" href="#contact">Discuss Reservation Flows <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Clunky forms destroy the momentum of a car sale.</h2>
                        <p>The moment a user finishes configuring their dream car is the peak of their excitement. If your next step is a basic "Contact Us" form that says a dealer will call them eventually, you instantly kill that momentum.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Abandoned Reservations</h3>
                                <p>The process to put down a $500 pre-order deposit is hosted on a clunky, unbranded third-party iframe, causing users to abandon the checkout.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Double-Booked Test Drives</h3>
                                <p>The website lets a user request a time, but it doesn't actually check the dealership's calendar, leading to angry customers showing up for cars that aren't there.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Lost CRM Data</h3>
                                <p>Leads are emailed to a generic dealership inbox where they sit for 3 days, instead of being parsed directly into the Dealer Management System (DMS).</p>
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
                                <h2>Direct-to-consumer sales infrastructure.</h2>
                            </div>
                            <p>We build the secure financial and logistical plumbing required to capture high-intent automotive buyers instantly.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Finance</span>
                                <h3>Stripe Reservation Flows</h3>
                                <p>Implementing secure, PCI-compliant checkout flows allowing users to place a refundable deposit via Apple Pay or credit card in seconds.</p>
                                <div className="deliverable-tags"><small>Stripe</small><small>Deposits</small><small>Checkout</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Logistics</span>
                                <h3>Real-time Calendar APIs</h3>
                                <p>Connecting the website directly to the dealership's calendar system so users can book a confirmed test-drive slot instantly.</p>
                                <div className="deliverable-tags"><small>Scheduling</small><small>Calendars</small><small>APIs</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Routing</span>
                                <h3>Geolocation Dealer Matching</h3>
                                <p>Using map APIs to automatically route the lead, the deposit, and the configured vehicle spec to the specific dealership closest to the user's zip code.</p>
                                <div className="deliverable-tags"><small>Routing</small><small>Maps</small><small>Logistics</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Data</span>
                                <h3>DMS & CRM Integrations</h3>
                                <p>Pushing the structured lead data directly into Salesforce, HubSpot, or automotive-specific CRMs (CDK, Reynolds) via API.</p>
                                <div className="deliverable-tags"><small>DMS</small><small>CRM</small><small>Webhooks</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Automotive Build</p>
                            <h2>Automating the $500 pre-order flow for a new mobility brand.</h2>
                        </div>
                        <p>See how we engineered a frictionless deposit engine that handled a massive influx of day-one reservations without crashing.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>FinTech & Mobility</span>
                                <span>Next.js + Stripe Escrow</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Direct-to-Consumer Reservation Engine</p>
                                <h2>Capturing the hype instantly.</h2>
                                <p>An EV startup was launching a highly anticipated new model. They needed a system capable of handling thousands of simultaneous $500 deposits the moment the press release dropped.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The existing legacy checkout flow was slow and frequently timed out under load, risking millions in lost day-one reservation revenue.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We built a custom Next.js checkout flow heavily integrated with Stripe. We implemented Apple Pay for 1-click checkout and used serverless edge functions to ensure the system could scale infinitely during the launch spike.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>The system flawlessly processed over 4,000 reservations ($2M in deposits) in the first 48 hours without a single timeout or crashed page.</strong></div>
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
                        <h2 id="faq-title">Common questions about Leads & Reservations.</h2>
                        <p>Answers covering deposits, dealership routing, and CRM integrations.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle refundable deposits legally?</summary>
                            <p>We typically use Stripe. We configure the system to securely authorize and hold the funds, or capture them into a specific escrow account. If the user cancels, the portal triggers an automated Stripe API call to refund the card instantly.</p>
                        </details>
                        <details>
                            <summary>Can the website know which cars are actually on the dealer lot?</summary>
                            <p>Yes. For test drives, we build integrations with the dealership's inventory feed (via API or daily CSV drops). The website only allows users to book a test drive for a VIN that is actively marked "in stock" at their local dealer.</p>
                        </details>
                        <details>
                            <summary>How do you route leads to franchised dealerships?</summary>
                            <p>When the user enters their zip code, we use geospatial routing to find the closest franchised dealer. The backend API then formats the lead and pushes it specifically to that dealer's CRM endpoint.</p>
                        </details>
                        <details>
                            <summary>Do you integrate with CDK Global or Reynolds & Reynolds?</summary>
                            <p>Yes. Automotive Dealer Management Systems (DMS) can be notoriously difficult to integrate with, but we build custom middleware to ensure leads parse correctly into ADF/XML formats if modern APIs aren't available.</p>
                        </details>
                        <details>
                            <summary>Can users modify their reservation later?</summary>
                            <p>Absolutely. We build secure Owner Portals where users can log in via Magic Link, view their reservation status, update their configured options, or request a refund with one click.</p>
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
                    <h2>Capture every lead and <br />book every test drive. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build a frictionless reservation engine for your next vehicle launch? Let's discuss your sales flow.</p>
                        <a className="btn" href="#contact">Get a Reservations Proposal <span className="arrow">↗</span></a>
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
