import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/campaign-and-launch-experiences/" },
  title: "Campaign & Launch Experiences | Hyperlink Tech Solutions",
  description: "We build interactive micro-sites, AR experiences, and high-traffic campaign landing pages designed to capture attention and convert hype into sales during major product drops.",
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
                    <strong>Marketing Activations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Campaign Activations</div>
                        <p className="eyebrow">Marketing Activations</p>
                        <h1 id="service-title">High-impact product launches.</h1>
                        <p className="hero-lead">We build interactive micro-sites, AR experiences, and high-traffic campaign landing pages designed to capture attention and convert hype into sales during major product drops.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Ultra-scalable infrastructure designed specifically to handle massive, sudden traffic spikes (drops)</li>
                            <li>Interactive data capture mechanics (quizzes, waitlists, AR filters) to build zero-party data</li>
                            <li>Seamless integration with your core CRM and D2C checkout flows</li>
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
                            <small>01 · Zero Downtime</small>
                            <strong>Architecture built to withstand the traffic of a global influencer campaign.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Data Capture</small>
                            <strong>Turn anonymous hype into owned email and SMS subscribers.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Immersive Tech</small>
                            <strong>Leverage WebGL and AR to let consumers interact with the product before it drops.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Rapid Deployment</small>
                            <strong>Frameworks designed to spin up campaign sites in weeks, not months.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When the drop fails</p>
                        <p>Nothing kills marketing ROI faster than a website crashing on launch day.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Traffic spikes expose weak digital infrastructure.</h2>
                        <p>You secured the influencer, paid for the ads, and generated the hype. When the campaign goes live, millions of users hit the site—and it crashes. Standard monolithic websites simply cannot handle the sudden concurrency of a major product drop, resulting in lost revenue and a PR nightmare.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Server Crashes</h3>
                                <p>The website goes down completely within minutes of the campaign launch email being sent.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Boring Activations</h3>
                                <p>The 'campaign' is just a standard landing page that fails to engage users or capture their data.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Disconnected Journeys</h3>
                                <p>Users sign up for the waitlist on a third-party app, breaking the seamless brand experience.</p>
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
                                <h2>Bulletproof launch architecture.</h2>
                            </div>
                            <p>We engineer campaign experiences that are as technically resilient as they are visually stunning.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Static Site Generation (SSG)</h3>
                                <p>Using Next.js to pre-build the campaign site, meaning millions of users can hit it without querying a database.</p>
                                <div className="deliverable-tags"><small>SSG</small><small>Scale</small><small>Reliability</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Interactive WebGL</h3>
                                <p>Custom 3D experiences allowing users to spin, explode, or customize the new product directly in the browser.</p>
                                <div className="deliverable-tags"><small>3D</small><small>React</small><small>Engagement</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Waitlist & Lead Gen APIs</h3>
                                <p>Secure middleware that rapidly captures massive volumes of user data and queues it for syncing to Salesforce or Klaviyo.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Data</small><small>CRM</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Countdown & Scarcity Logic</h3>
                                <p>Real-time edge functions that manage synchronized countdown timers and live inventory scarcity across the globe.</p>
                                <div className="deliverable-tags"><small>Edge</small><small>Logic</small><small>UX</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Consumer Brand Platform</p>
                            <h2>Unifying wholesale and D2C.</h2>
                        </div>
                        <p>See how we helped a global consumer goods brand launch a headless product experience that serves millions of D2C shoppers while simultaneously powering a secure portal for their massive retail distribution network.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Brand Tech</span>
                                <span>B2B & D2C Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/brand-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>A single source of product truth.</h2>
                                <p>We developed a custom architecture connected to their PIM that ensures every product launch features perfectly synced marketing copy, high-res assets, and pricing, whether the user is a retail buyer or an end consumer.</p>
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
                        <h2 id="faq-title">Common questions about consumer brand tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle massive traffic spikes during product launches?</summary>
                            <p>We build Campaign & Launch experiences using static site generation (SSG) via Next.js and host them on global edge networks (like Vercel). This ensures the site remains lightning-fast even when millions of users hit it simultaneously during a drop.</p>
                        </details>
                        <details>
                            <summary>Can you integrate a B2B wholesale portal with our existing ERP?</summary>
                            <p>Yes. We build custom API middleware that allows your Retailer Portals to talk directly to legacy ERPs (like SAP or NetSuite), ensuring that wholesale customers see their specific contract pricing and live inventory without manual data entry.</p>
                        </details>
                        <details>
                            <summary>What is a PIM and why do we need one?</summary>
                            <p>A Product Information Management (PIM) system acts as the central brain for your product data. We integrate your website with your PIM so that when marketing updates a product description or pack shot, it automatically updates on your D2C site, your B2B portal, and your retailer feeds.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other consumer brand capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/brand-and-product-websites/"><div><small>Brand Experience</small><h3>Brand Websites</h3><p>Immersive digital brand homes.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/campaign-and-launch-experiences/"><div><small>Activations</small><h3>Campaigns & Launches</h3><p>High-impact product drops.</p></div><b>Explore campaigns ↗</b></a>
                        <a className="related-card" href="/services/retailer-and-distributor-portals/"><div><small>B2B Commerce</small><h3>Retailer Portals</h3><p>Empower your wholesale channel.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/product-information-and-assets/"><div><small>Data</small><h3>Product Information</h3><p>A single source of truth.</p></div><b>Explore PIM ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your consumer brand <br />and wholesale operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From high-traffic product launches to complex B2B distributor portals and PIM integrations, we build software that drives growth across your entire channel ecosystem.</p>
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
