import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/game-operations-and-analytics/" },
  title: "LiveOps & Game Analytics Services | Hyperlink Tech Solutions",
  description: "Maximize player lifetime value. We engineer custom LiveOps dashboards, economy monitoring tools, and telemetry analytics for live-service games.",
};

export default function GameOperationsAndAnalytics() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/game-operations-and-analytics/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/game-operations-and-analytics/",
          "name": "LiveOps & Game Analytics Services | Hyperlink Tech Solutions",
          "description": "Maximize player lifetime value. We engineer custom LiveOps dashboards, economy monitoring tools, and telemetry analytics for live-service games.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/game-operations-and-analytics/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/game-operations-and-analytics/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/game-operations-and-analytics/#service",
          "name": "Game Operations & Analytics",
          "serviceType": "LiveOps & Telemetry Dashboards",
          "url": "https://hyperlinktechsolutions.com/services/game-operations-and-analytics/",
          "description": "Maximize player lifetime value. We engineer custom LiveOps dashboards, economy monitoring tools, and telemetry analytics for live-service games.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Live-Service Studios, Mobile Publishers, and Web3 Gaming Projects"
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
                    <strong>Game Operations & Analytics</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">LiveOps Infrastructure</div>
                        <p className="eyebrow">Game Operations & Analytics</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Data-driven tooling for <em class="accent-text">live-service games.</em>' }}></h1>
                        <p className="hero-lead">Launching a game is only the beginning. We engineer the backend tools, analytics pipelines, and LiveOps dashboards required to run modern, profitable "Games as a Service" (GaaS).</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom LiveOps dashboards for content scheduling and A/B testing</li>
                            <li>Real-time telemetry and economy balancing dashboards</li>
                            <li>Data pipelines built on AWS, Snowflake, and BigQuery</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Data Needs <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Analytics benefits">
                        <div className="proof-item">
                            <small>01 · Predictive Churn</small>
                            <strong>Identify exactly which boss fight is making players quit.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Economy Control</small>
                            <strong>Monitor inflation of in-game currencies in real-time.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Instant LiveOps</small>
                            <strong>Push new events and items without requiring an app store update.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Monetization ROI</small>
                            <strong>Calculate the exact LTV (Lifetime Value) of specific ad campaigns.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When Custom LiveOps are necessary</p>
                        <p>When your production team has to beg engineering to run a database query just to check weekend sales.</p>
                        <a className="btn" href="#contact">Empower Your Producers <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Running a live game blindly destroys revenue.</h2>
                        <p>In modern gaming, you are managing a living economy. If you cannot see how players are spending their time and money in real-time, you cannot react. Relying on out-of-the-box analytics that don't match your game's unique logic leads to disastrous decisions.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Hardcoded Content</h3>
                                <p>To run a weekend sale or a seasonal event, you have to submit a new build to Apple and Google, forcing you into 2-week lead times.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Data Silos</h3>
                                <p>Your player acquisition data sits in Facebook Ads, your crash logs sit in Unity, and your purchase data sits in Stripe. You can't calculate true ROI.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Economy Inflation</h3>
                                <p>A bug allows players to farm premium currency, but because your reporting isn't real-time, you don't notice until the economy is irreversibly damaged.</p>
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
                                <h2>Custom Data & Tooling Architecture.</h2>
                            </div>
                            <p>We build secure, web-based administrative panels and massive data pipelines that give your product managers the power to operate the game without writing code.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Administration</span>
                                <h3>LiveOps Web Dashboards</h3>
                                <p>Building Next.js admin panels where non-technical producers can toggle events, schedule sales, and modify game balance parameters instantly.</p>
                                <div className="deliverable-tags"><small>Admin Panels</small><small>React</small><small>CRUD Tools</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Telemetry</span>
                                <h3>Custom Analytics Pipelines</h3>
                                <p>Engineering high-throughput data pipelines (Kafka, Kinesis) to ingest millions of telemetry events per second without dropping data.</p>
                                <div className="deliverable-tags"><small>Pipelines</small><small>Kafka</small><small>AWS</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Visualization</span>
                                <h3>Economy & KPI Reporting</h3>
                                <p>Connecting your data lake to tools like Looker or building custom D3.js charts to visualize ARPDAU, LTV, Retention, and Currency Sinks.</p>
                                <div className="deliverable-tags"><small>KPIs</small><small>Looker</small><small>Data Viz</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Infrastructure</span>
                                <h3>A/B Testing Frameworks</h3>
                                <p>Developing backend systems that allow you to segment players and serve different pricing or difficulty curves to measure the statistical impact on revenue.</p>
                                <div className="deliverable-tags"><small>A/B Testing</small><small>Segmentation</small><small>Backend</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Infrastructure Build</p>
                            <h2>Building the nerve center for an MMORPG.</h2>
                        </div>
                        <p>See how we engineered a custom economy tracking system to prevent hyper-inflation.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Economy Dashboards</span>
                                <span>BigQuery & Looker</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#1a1a1a', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ color: '#666', fontSize: '1.2rem', fontWeight: 500 }}>Live Telemetry Map</div>
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Mid-Core Studio</p>
                                <h2>Spotting the gold farmers in real-time.</h2>
                                <p>A studio running a popular mobile MMORPG was experiencing severe in-game inflation. The premium currency was losing value, directly cannibalizing their real-world in-app purchases, but their off-the-shelf analytics couldn't pinpoint the source.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>They needed to track exactly where "gold" was being generated (sources) and where it was being spent (sinks) across 500,000 daily active users.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We built a custom AWS Kinesis pipeline that ingested every transaction. We visualized this in a custom Next.js "Economy Manager" dashboard that flagged anomalies.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>Within 48 hours, the dashboard identified an exploit in a specific dungeon raid. Producers used the dashboard to instantly disable the raid without updating the app, saving the economy.</strong></div>
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
                        <h2 id="faq-title">Common questions about LiveOps.</h2>
                        <p>Answers covering PlayFab, custom tools, and security.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Why build custom LiveOps tools instead of using PlayFab or Unity Analytics?</summary>
                            <p>PlayFab and standard BaaS (Backend as a Service) platforms are excellent starting points. However, as your game scales, their pricing models become prohibitively expensive, and their UI cannot accommodate highly specific, proprietary game mechanics. We build custom when you need exact control and lower long-term OPEX.</p>
                        </details>
                        <details>
                            <summary>How do you implement "instant" LiveOps updates?</summary>
                            <p>We architect your game to download balancing parameters (JSON files or Unity Addressables) from a CDN at launch. When your producers change a weapon's damage value in our web dashboard, it updates the CDN, and the game downloads the new data instantly, bypassing app store approvals.</p>
                        </details>
                        <details>
                            <summary>Can you handle the volume of data a hit game generates?</summary>
                            <p>Yes. We engineer data pipelines using cloud-native, serverless architectures (like AWS Kinesis, GCP Dataflow, or Kafka) that automatically scale up to handle millions of events per second during a viral launch, and scale down when traffic normalizes.</p>
                        </details>
                        <details>
                            <summary>What kind of team uses these dashboards?</summary>
                            <p>We build these tools primarily for Product Managers, LiveOps Producers, and Customer Support representatives. The goal is to give non-engineers the power to run the game safely.</p>
                        </details>
                        <details>
                            <summary>How do you secure administrative tools?</summary>
                            <p>Internal tools require the highest level of security. We implement strict Role-Based Access Control (RBAC), SSO via Okta/Google Workspace, and comprehensive audit logging so you know exactly which producer triggered an event.</p>
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
                        <a className="related-card" href="/services/game-design-and-ux/"><div><small>Design</small><h3>Game Design</h3><p>Use your telemetry data to refine and rebalance the core loop.</p></div><b>Explore design ↗</b></a>
                        <a className="related-card" href="/services/html5-game-development/"><div><small>Engineering</small><h3>HTML5 Development</h3><p>Connect your web games directly to your new LiveOps backend.</p></div><b>Explore development ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Track the data. <br />Manage the economy. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to give your production team the tools they need to run a profitable live-service game? Let's discuss your backend.</p>
                        <a className="btn" href="#contact">Get a Infrastructure Proposal <span className="arrow">↗</span></a>
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
