import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/brand-and-product-websites/" },
  title: "Brand & Product Websites | Hyperlink Tech Solutions",
  description: "We design high-performance product websites that communicate your brand's unique story, educate consumers, and drive demand directly to your retail partners or D2C channels.",
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
                    <strong>Brand Experience</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Brand Websites</div>
                        <p className="eyebrow">Brand Experience</p>
                        <h1 id="service-title">Immersive digital brand homes.</h1>
                        <p className="hero-lead">We design high-performance product websites that communicate your brand's unique story, educate consumers, and drive demand directly to your retail partners or D2C channels.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Rich, interactive storytelling combining video, 3D assets, and micro-animations</li>
                            <li>Dynamic 'Where to Buy' locators routing traffic directly to authorized retail partners</li>
                            <li>Headless CMS architecture allowing marketing teams to update content instantly</li>
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
                            <small>01 · Premium Aesthetics</small>
                            <strong>Digital experiences that match the quality of your physical products.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Channel Harmony</small>
                            <strong>Push traffic to your D2C cart or directly to key retail partners.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Unbreakable Speed</small>
                            <strong>Sub-second load times even with massive hero videos and rich media.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Marketing Agility</small>
                            <strong>Empower your team to launch landing pages without developer help.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When your brand is compromised</p>
                        <p>A premium physical product on a slow, generic website damages brand equity.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Poor digital experiences erode consumer trust.</h2>
                        <p>Consumer brands spend millions on packaging and product development, only to push traffic to sluggish, template-based websites. If your site doesn't visually captivate the user or clearly explain the product benefits, they will buy a competitor's product sitting on the same retail shelf.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Slow Rich Media</h3>
                                <p>Your high-production campaign videos cause the website to freeze and crash on mobile devices.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Where to Buy Friction</h3>
                                <p>Consumers want your product but can't figure out which local retailer actually has it in stock.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Developer Bottlenecks</h3>
                                <p>Marketing is unable to update the homepage for a new season without waiting weeks for IT support.</p>
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
                                <h2>Digital flagships for modern brands.</h2>
                            </div>
                            <p>We build decoupled frontend experiences that prioritize immersive storytelling without sacrificing speed.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Headless Architecture</h3>
                                <p>Next.js frontends connected to Sanity or Contentful, separating the visual experience from the backend data.</p>
                                <div className="deliverable-tags"><small>React</small><small>Headless</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>'Where to Buy' Integrations</h3>
                                <p>Custom logic that connects to retailer inventory feeds or maps to direct users to the nearest stockist.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Maps</small><small>Conversion</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Interactive Product Education</h3>
                                <p>WebGL and advanced CSS animations to visually break down product features (e.g., shoe tech, skincare ingredients).</p>
                                <div className="deliverable-tags"><small>WebGL</small><small>UX</small><small>Storytelling</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Global Edge Hosting</h3>
                                <p>Deployment on Vercel to ensure your brand site loads instantly whether the user is in New York or Tokyo.</p>
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
