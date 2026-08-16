import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/production-and-capacity-dashboards/" },
  title: "Production & Capacity Dashboards | Hyperlink Tech Solutions",
  description: "Help teams understand workload, schedules and exceptions.",
};

export default function ProductionAndCapacityDashboards() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/production-and-capacity-dashboards/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/production-and-capacity-dashboards/",
          "name": "Production & Capacity Dashboards | Hyperlink Tech Solutions",
          "description": "Help teams understand workload, schedules and exceptions.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/production-and-capacity-dashboards/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/production-and-capacity-dashboards/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/production-and-capacity-dashboards/#service",
          "name": "Production & Capacity Dashboards",
          "serviceType": "Manufacturing Operations",
          "url": "https://hyperlinktechsolutions.com/services/production-and-capacity-dashboards/",
          "description": "Help teams understand workload, schedules and exceptions.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Plant Managers, Production Supervisors, Manufacturing Execs"
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
                    <strong>Production & Capacity Dashboards</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Operational visibility</div>
                        <p className="eyebrow">Production & Capacity Dashboards</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Help teams understand workload, schedules and <em class="accent-text">exceptions.</em>' }}></h1>
                        <p className="hero-lead">Display jobs, work centres, capacity, due dates, quality holds, shipments and approved indicators on real-time visual dashboards.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Job and schedule status</li>
                            <li>Capacity visibility</li>
                            <li>Exceptions and reporting</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        <div className="proof-item">
                            <small>01 · Live Status</small>
                            <strong>Know instantly what job is running on which machine right now.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Identify Bottlenecks</small>
                            <strong>Spot accumulating work-in-progress (WIP) before it derails delivery dates.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Visual Capacity</small>
                            <strong>See machine and operator availability at a glance to accept new rush orders confidently.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Exception Alerts</small>
                            <strong>Get notified immediately about quality holds, machine downtime, or material shortages.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When operational visibility is necessary</p>
                        <p>You cannot run a modern, high-throughput manufacturing floor relying on daily printouts and whiteboard schedules.</p>
                        <a className="btn" href="#contact">Discuss Dashboards <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Blind spots cause missed deadlines.</h2>
                        <p>When production managers have to physically walk the floor or query an outdated ERP screen just to see if a critical job is on schedule, operational agility is zero. Problems are discovered too late to fix.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Hidden Bottlenecks</h3>
                                <p>WIP piles up at a specific work center, but management only realizes it days later when downstream assembly lines run out of parts.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Unreliable Scheduling</h3>
                                <p>Trying to schedule new rush jobs is a guessing game because there's no real-time view of current machine capacity and actual vs. estimated run times.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Silent Failures</h3>
                                <p>A machine goes down or a job is put on quality hold, but the right people aren't alerted immediately, causing hours of preventable downtime.</p>
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
                                <h2>Real-time production visibility.</h2>
                            </div>
                            <p>We build factory-floor ready dashboards that provide instant visibility into production capacity, job status, and operational bottlenecks.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Tracking</span>
                                <h3>Active Job Dashboards</h3>
                                <p>Clear, color-coded visual boards showing every active job, its current work center, completion percentage, and estimated finish time.</p>
                                <div className="deliverable-tags"><small>Tracking</small><small>Status</small><small>Real-time</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Planning</span>
                                <h3>Capacity & Scheduling Views</h3>
                                <p>Gantt-style or heatmap views of machine and operator utilization, making it easy to spot open capacity or overloaded work centers.</p>
                                <div className="deliverable-tags"><small>Capacity</small><small>Planning</small><small>Utilization</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Alerts</span>
                                <h3>Exception & Hold Monitoring</h3>
                                <p>Automated visual alerts for jobs that fall behind schedule, fail inspection, or are paused due to material shortages.</p>
                                <div className="deliverable-tags"><small>Alerts</small><small>Exceptions</small><small>Downtime</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Displays</span>
                                <h3>Factory Floor Andon Screens</h3>
                                <p>High-contrast, highly legible interfaces designed specifically to run on large overhead TVs across the shop floor to keep everyone aligned.</p>
                                <div className="deliverable-tags"><small>TV Displays</small><small>Andon</small><small>Visibility</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Implementation</p>
                            <h2>Eliminating the morning status meeting.</h2>
                        </div>
                        <p>See how moving from whiteboards to real-time digital dashboards increased on-time delivery by 25% for a machine shop.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Production Dashboard</span>
                                <span>React + ERP API</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#111', height: '200px' }}>
                                {/* Placeholder for case study image */}
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">CNC Machining Facility</p>
                                <h2>Seeing the floor clearly.</h2>
                                <p>A busy CNC facility relied on daily printouts and a giant whiteboard to track hundreds of active jobs, leading to constant confusion and expediting.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Supervisors spent the first two hours of every day just figuring out where jobs were and updating the whiteboard.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We built a custom web dashboard that pulls live routing data from their ERP. Operators use cheap tablets at each machine to clock in/out of jobs, instantly updating large TV screens across the shop.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>Supervisors got 2 hours of their day back, bottlenecks were identified instantly, and on-time delivery improved from 70% to 95%.</strong></div>
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
                        <h2 id="faq-title">Common questions about Production Dashboards.</h2>
                        <p>Answers covering data sources, hardware, and integration.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Where does the dashboard get its data?</summary>
                            <p>Typically, we integrate with your existing ERP or MRP system via APIs. If you don't have one, we can build lightweight operator interfaces (like tablet apps) to capture the data directly on the floor.</p>
                        </details>
                        <details>
                            <summary>Can these run on standard Smart TVs?</summary>
                            <p>Yes. They are web applications designed to run smoothly in the browser of a standard Smart TV, Raspberry Pi, or any connected display device.</p>
                        </details>
                        <details>
                            <summary>Do they update in real-time?</summary>
                            <p>Yes. We use WebSockets or frequent polling to ensure that when a job status changes at a machine, the overhead boards update instantly without needing a page refresh.</p>
                        </details>
                        <details>
                            <summary>Can we customize what metrics are shown?</summary>
                            <p>Absolutely. Different departments care about different things. We can build specific views for the plant manager (overall utilization), quality control (scrap rates), and the shipping dock (due today).</p>
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
                        <a className="related-card" href="/services/capabilities-and-industry-pages/"><div><small>Discovery</small><h3>Capabilities Pages</h3><p>Structure processes, materials, and tolerances.</p></div><b>Explore capabilities ↗</b></a>
                        <a className="related-card" href="/services/rfq-and-quotation-workflows/"><div><small>Intake</small><h3>RFQ Workflows</h3><p>Collect complete requirements and move opportunities through review.</p></div><b>Explore RFQ workflows ↗</b></a>
                        <a className="related-card" href="/services/client-portal-development/"><div><small>Portals</small><h3>Customer Portals</h3><p>Give authorised customers one place for active work.</p></div><b>Explore customer portals ↗</b></a>
                        <a className="related-card" href="/services/quality-and-document-control/"><div><small>Compliance</small><h3>Quality & Document Control</h3><p>Connect inspection and quality information.</p></div><b>Explore quality control ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Stop guessing where <br />your jobs are. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to give your team the visual tools they need to eliminate bottlenecks and hit every delivery date?</p>
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
