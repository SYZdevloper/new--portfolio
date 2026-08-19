import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/agency-and-studio-websites/" },
  title: "Agency & Studio Websites | Hyperlink Tech Solutions",
  description: "We design visually stunning, high-performance portfolios and marketing sites that showcase creative work and capture high-value enterprise leads.",
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
                    <strong>Brand Discovery</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Agency Websites</div>
                        <p className="eyebrow">Brand Discovery</p>
                        <h1 id="service-title">Digitally showcase your creative portfolio.</h1>
                        <p className="hero-lead">We design visually stunning, high-performance portfolios and marketing sites that showcase creative work and capture high-value enterprise leads.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Immersive, WebGL-powered hero sections and ultra-smooth scroll animations that reflect your creative capability</li>
                            <li>Dynamic case study architecture allowing you to cleanly present complex strategy, video, and design deliverables</li>
                            <li>Headless CMS setups allowing marketing teams to launch new campaign case studies instantly</li>
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
                            <small>01 · Brand Elevation</small>
                            <strong>Digital experiences that justify premium retainers to enterprise CMOs.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Uncompromised Speed</small>
                            <strong>Heavy video and high-res imagery optimized to load instantly globally.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · SEO Optimized</small>
                            <strong>Structure that ranks highly for niche B2B queries like 'Enterprise UX Agency'.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Marketing Agility</small>
                            <strong>Empower your team to update the homepage reel without developer help.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When digital fails the agency</p>
                        <p>If an agency's own website feels sluggish and outdated, a CMO will assume their client work is the same.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Poor digital presentation devalues your creative output.</h2>
                        <p>Creative agencies and studios are judged entirely on their aesthetics and innovation. If a prospective client lands on a generic template site where the showreel stutters or the case studies are hard to read on mobile, they will bounce. They need immediate visual proof of your capability.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Visual Clutter</h3>
                                <p>The portfolio is difficult to navigate, failing to quickly communicate the business impact of your creative campaigns.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Slow Performance</h3>
                                <p>Your website feels sluggish because massive video files haven't been properly optimized for the web.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Developer Bottlenecks</h3>
                                <p>Your team is unable to publish a massive new rebrand case study because the legacy CMS is too rigid.</p>
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
                                <h2>Digital flagships for creative firms.</h2>
                            </div>
                            <p>We build decoupled frontend experiences that prioritize visual innovation, immersive storytelling, and uncompromising speed.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Headless Architecture</h3>
                                <p>Next.js frontends connected to Sanity, ensuring the site is lightning fast while handling massive media payloads.</p>
                                <div className="deliverable-tags"><small>React</small><small>Headless</small><small>Performance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Creative Engineering</h3>
                                <p>Implementing WebGL, Three.js, or advanced Framer Motion animations to create a memorable, award-winning interface.</p>
                                <div className="deliverable-tags"><small>WebGL</small><small>UX</small><small>Animation</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Dynamic Portfolio Structures</h3>
                                <p>Building flexible CMS taxonomies that allow you to interlink capabilities, industries, and case studies intelligently.</p>
                                <div className="deliverable-tags"><small>CMS</small><small>SEO</small><small>Architecture</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Media Optimization</h3>
                                <p>Pipelines that automatically encode, compress, and serve videos and images in next-gen formats via global CDNs.</p>
                                <div className="deliverable-tags"><small>Video</small><small>Optimization</small><small>Speed</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Agency Platform</p>
                            <h2>Transforming client delivery.</h2>
                        </div>
                        <p>See how we helped a global design agency replace fragmented email feedback loops with a custom React collaboration portal, accelerating project sign-offs by 40%.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Creative Tech</span>
                                <span>Client Portals</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/marketing-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Secure, centralized collaboration.</h2>
                                <p>We developed a portal where enterprise clients log in via SSO, securely review brand assets, leave time-stamped video feedback, and approve final deliverables—all synchronized with the agency's internal Monday.com boards.</p>
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
                        <h2 id="faq-title">Common questions about marketing tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle massive file uploads (e.g., 4K video) in portals?</summary>
                            <p>We integrate specialized cloud storage architectures like AWS S3 with Transfer Acceleration directly into the frontend. This allows clients to upload multi-gigabyte files directly to the cloud without timing out the web server.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with Project Management tools like Asana or Monday.com?</summary>
                            <p>Absolutely. We build API middleware so that when a client clicks "Approve" in the external portal, the corresponding task in your internal PM tool is instantly marked as 'Done', preventing double-handling.</p>
                        </details>
                        <details>
                            <summary>Do you build real-time SLA dashboards for BPOs?</summary>
                            <p>Yes. We build "Control Towers" that ingest ticket data from Zendesk or Salesforce in real-time, visually alerting operations managers if a client's Service Level Agreement is at risk of being breached.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/agency-and-studio-websites/"><div><small>Discovery</small><h3>Agency Websites</h3><p>Showcase creative portfolios.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/collaboration-and-review-portals/"><div><small>Service</small><h3>Review Portals</h3><p>Centralized client feedback.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/resource-and-asset-management/"><div><small>Operations</small><h3>Asset Management</h3><p>Secure digital asset storage.</p></div><b>Explore DAM ↗</b></a>
                        <a className="related-card" href="/services/bpo-and-agency-dashboards/"><div><small>Analytics</small><h3>Agency Dashboards</h3><p>Monitor profitability & SLAs.</p></div><b>Explore analytics ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your creative <br />and BPO operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From stunning agency websites to massive digital asset managers and SLA dashboards, we build software that scales your service delivery.</p>
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
