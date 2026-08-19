import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/sportstech-product-websites/" },
  title: "SportsTech Product Websites | Hyperlink Tech Solutions",
  description: "We design high-performance websites for SportsTech hardware and software companies, clearly communicating complex biomechanical or analytical benefits to coaches, athletes, and investors.",
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
                    <strong>Product Discovery</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Product Websites</div>
                        <p className="eyebrow">Product Discovery</p>
                        <h1 id="service-title">Commercialize your sports technology.</h1>
                        <p className="hero-lead">We design high-performance websites for SportsTech hardware and software companies, clearly communicating complex biomechanical or analytical benefits to coaches, athletes, and investors.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Visually rich storytelling utilizing 3D renders, WebGL animations, and product explainer videos</li>
                            <li>Structured B2B lead generation flows designed to capture demo requests from High-Performance Managers</li>
                            <li>Headless CMS setups allowing marketing teams to launch new feature announcements instantly</li>
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
                            <strong>Digital experiences that match the cutting-edge nature of your hardware.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Complex Storytelling</small>
                            <strong>Translate deep biomechanical science into easily digestible visual marketing.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Investor Ready</small>
                            <strong>Present a polished, enterprise-grade digital footprint to secure your next funding round.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · High-Quality Leads</small>
                            <strong>Structure the site to qualify elite teams versus amateur consumers before they book a demo.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When digital fails the product</p>
                        <p>If a Premier League coach can't understand what your device does in 10 seconds, they will leave.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Poor digital presentation devalues great technology.</h2>
                        <p>SportsTech companies often spend millions on hardware R&D but launch with a template-based website that fails to explain the product. If your target audience (elite coaches, sports scientists) lands on a site filled with dense academic text and poor imagery, they will assume your software is equally clunky to use.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Academic Clutter</h3>
                                <p>The website reads like a research paper, failing to communicate the actual on-field benefits to a busy coach.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Low-Quality Visuals</h3>
                                <p>You are selling a $10,000 piece of testing hardware, but the website images are blurry and uninspiring.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Poor Lead Capture</h3>
                                <p>Elite teams are bouncing because your 'Book a Demo' flow is a broken, 15-field generic contact form.</p>
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
                                <h2>Digital flagships for SportsTech.</h2>
                            </div>
                            <p>We build decoupled frontend experiences that prioritize immersive product storytelling and speed.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Headless Architecture</h3>
                                <p>Next.js frontends connected to Sanity or Contentful, ensuring the site is lightning fast and highly secure.</p>
                                <div className="deliverable-tags"><small>React</small><small>Headless</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Immersive 3D & WebGL</h3>
                                <p>Custom animations that allow users to virtually inspect your hardware or visualize the data it produces.</p>
                                <div className="deliverable-tags"><small>WebGL</small><small>UX</small><small>Storytelling</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>B2B Commerce Flows</h3>
                                <p>Implementing tailored checkout or quote-request flows via Stripe for teams buying hardware in bulk.</p>
                                <div className="deliverable-tags"><small>E-commerce</small><small>B2B</small><small>Sales</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Global Edge Hosting</h3>
                                <p>Deployment on Vercel to ensure your site loads instantly for coaches in London, New York, or Sydney.</p>
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
                            <p className="eyebrow">Featured SportsTech Platform</p>
                            <h2>Unifying high-performance data.</h2>
                        </div>
                        <p>See how we helped a professional sports franchise replace five different Excel spreadsheets and three disconnected hardware apps with a single, unified Athlete Management System (AMS), saving the sports science team 15 hours of data entry per week.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>High Performance</span>
                                <span>Data Engineering</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/sportstech-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From silos to scorecards.</h2>
                                <p>We developed a secure cloud infrastructure that automatically ingests GPS data (Catapult), strength metrics (VALD), and subjective wellness surveys into a single dashboard, allowing the High-Performance Manager to identify injury risks instantly.</p>
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
                        <h2 id="faq-title">Common questions about SportsTech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate data from different hardware providers (GPS, Force Plates)?</summary>
                            <p>We build robust ETL (Extract, Transform, Load) pipelines that connect to the APIs of major providers (like STATSports, Catapult, or VALD), normalizing the disparate data into a single, unified data warehouse for your team.</p>
                        </details>
                        <details>
                            <summary>Can you build mobile apps for athletes to log wellness data?</summary>
                            <p>Yes. We build lightweight, secure React Native apps where athletes can quickly log RPE (Rate of Perceived Exertion), sleep quality, and muscle soreness before they even arrive at the training facility.</p>
                        </details>
                        <details>
                            <summary>How do you ensure medical and performance data is secure?</summary>
                            <p>Athlete health data is highly sensitive. We implement enterprise-grade security protocols (like Auth0 for identity management), encrypt data at rest, and ensure role-based access control so a coach only sees what the medical team allows.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other high-performance capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/sportstech-product-websites/"><div><small>Discovery</small><h3>Product Sites</h3><p>Commercialize your tech.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/athlete-and-coach-portals/"><div><small>Service</small><h3>Athlete Portals</h3><p>The high-performance hub.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/testing-and-assessment-workflows/"><div><small>Operations</small><h3>Testing Workflows</h3><p>Digitize sports science.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/device-and-data-integrations/"><div><small>Engineering</small><h3>Device Integrations</h3><p>Connect the ecosystem.</p></div><b>Explore integrations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your high-performance <br />and SportsTech operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From complex hardware API integrations to mobile athlete wellness apps and predictive injury dashboards, we build software that drives elite performance.</p>
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
