import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/portfolio-and-practice-websites/" },
  title: "Portfolio & Practice Websites | Hyperlink Tech Solutions",
  description: "We design highly visual, immersive websites for architectural practices, interior design firms, and engineering consultancies to showcase their best work.",
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
                    <strong>Architecture & Design</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Practice Portfolios</div>
                        <p className="eyebrow">Architecture & Design</p>
                        <h1 id="service-title">Digital portfolios that win major commissions.</h1>
                        <p className="hero-lead">We design highly visual, immersive websites for architectural practices, interior design firms, and engineering consultancies to showcase their best work.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Award-winning, minimalist UI that lets your architectural photography shine</li>
                            <li>Headless CMS integration allowing architects to easily update projects without coding</li>
                            <li>High-performance video and WebGL integration for 3D walkthroughs</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Practice <span className="arrow">↗</span></a>
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
                            <strong>Position your studio alongside top-tier global practices.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Talent Pipeline</small>
                            <strong>Attract the best graduate architects and senior designers.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Media Handling</small>
                            <strong>Zero lag, even with dozens of 4K render images.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · SEO Growth</small>
                            <strong>Rank for specialized architectural and design services.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When design fails online</p>
                        <p>Your buildings are state-of-the-art, but your website is stuck in 2014.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Poor digital presentation costs you premium clients.</h2>
                        <p>For a design-led practice, your website is your most critical asset. If your digital portfolio feels clunky, loads slowly, or features a templated design, high-net-worth clients and commercial developers will question your studio's commitment to detail and innovation.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Slow Image Loading</h3>
                                <p>Potential clients bounce because heavy architectural renders take ten seconds to load on their phones.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Rigid Templates</h3>
                                <p>Your bespoke design philosophy is forced into a generic WordPress theme that looks like everyone else's.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Hidden Expertise</h3>
                                <p>Your thought leadership, sustainability initiatives, and masterplanning expertise are buried in PDFs.</p>
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
                                <h2>Bespoke digital foundations.</h2>
                            </div>
                            <p>We build portfolios that mirror the precision and elegance of your physical projects.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Immersive UI/UX</h3>
                                <p>Minimalist, high-end interfaces that use typography and whitespace to elevate your visual assets.</p>
                                <div className="deliverable-tags"><small>Design</small><small>Figma</small><small>UI/UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Headless Architecture</h3>
                                <p>Next.js frontends paired with Sanity CMS, providing lightning-fast load times and total creative freedom.</p>
                                <div className="deliverable-tags"><small>Next.js</small><small>Speed</small><small>CMS</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Media Optimization</h3>
                                <p>Automated pipelines that compress and serve heavy videos and images efficiently based on device size.</p>
                                <div className="deliverable-tags"><small>Media</small><small>CDN</small><small>Performance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Interactive Filtering</h3>
                                <p>Fluid project grids that allow users to filter your portfolio by sector, scale, or location instantly.</p>
                                <div className="deliverable-tags"><small>UX</small><small>Search</small><small>React</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Practice Platform</p>
                            <h2>Elevating the studio experience.</h2>
                        </div>
                        <p>See how we helped a global architectural practice build a seamless digital ecosystem that took them from beautiful portfolio websites to fully integrated client project portals.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Architecture Tech</span>
                                <span>WebGL & Web Portals</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/architecture-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Designing for designers.</h2>
                                <p>We developed a high-performance Next.js portfolio that renders heavy 3D fly-throughs flawlessly, backed by a secure client portal where stakeholders can review plans and sign off on material finishes.</p>
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
                        <h2 id="faq-title">Common questions about architecture & design tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle heavy media files on portfolio sites?</summary>
                            <p>We utilize modern frameworks like Next.js paired with global CDNs and automated image/video compression via services like Cloudinary or Mux. This ensures that even heavy 4K videos and high-res architectural renders load instantly without hurting your SEO.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with our practice management software?</summary>
                            <p>Yes. We frequently integrate web platforms with industry-standard software like Deltek, ArchiSnapper, or BQE Core to automate time-tracking dashboards, project accounting, and CRM functions.</p>
                        </details>
                        <details>
                            <summary>Are client portals secure enough for confidential designs?</summary>
                            <p>Absolutely. We build bespoke portals using enterprise-grade authentication (Auth0/Okta), ensuring that pre-release designs, tender documents, and financial estimates are strictly accessible only to authorized stakeholders.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other practice capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/portfolio-and-practice-websites/"><div><small>Marketing</small><h3>Practice Websites</h3><p>Digital portfolios that win major commissions.</p></div><b>Explore portfolios ↗</b></a>
                        <a className="related-card" href="/services/consultations-and-proposal-journeys/"><div><small>Sales</small><h3>Proposal Journeys</h3><p>Streamline the path to a signed contract.</p></div><b>Explore proposals ↗</b></a>
                        <a className="related-card" href="/services/client-project-portals/"><div><small>Collaboration</small><h3>Client Portals</h3><p>Keep clients engaged during the design phase.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/practice-and-service-dashboards/"><div><small>Operations</small><h3>Practice Dashboards</h3><p>Track utilization and practice profitability.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your practice with <br />bespoke digital tools. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From award-winning portfolios to secure client collaboration portals, we build the technology that powers leading design firms.</p>
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
