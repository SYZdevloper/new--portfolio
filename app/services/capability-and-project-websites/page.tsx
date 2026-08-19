import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/capability-and-project-websites/" },
  title: "Capability & Project Websites | Hyperlink Tech Solutions",
  description: "We design high-performance digital portfolios for major contractors, highlighting technical capabilities, safety records, and flagship infrastructure projects.",
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
                    <strong>Construction Marketing</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Corporate Construction Websites</div>
                        <p className="eyebrow">Construction Marketing</p>
                        <h1 id="service-title">Showcase your engineering capabilities with authority.</h1>
                        <p className="hero-lead">We design high-performance digital portfolios for major contractors, highlighting technical capabilities, safety records, and flagship infrastructure projects.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Award-winning B2B web design that builds trust with government and enterprise clients</li>
                            <li>Interactive project maps and rich media galleries (drone footage, timelapses)</li>
                            <li>Clear articulation of ESG, HSE, and technical compliance standards</li>
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
                            <small>01 · Bid Support</small>
                            <strong>A website that serves as a powerful asset during the tender process.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Talent Attraction</small>
                            <strong>Position your firm as an employer of choice for top engineers.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Project Maps</small>
                            <strong>Visually demonstrate the scale of your global or national footprint.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Rich Media</small>
                            <strong>Seamlessly embed 4K drone footage and BIM visualizations without lag.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When perception trails reality</p>
                        <p>You build $500M assets, but your website looks like it costs $500.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Procurement teams are judging your digital presence.</h2>
                        <p>Major infrastructure clients and government bodies scrutinize contractors heavily before awarding tenders. If your digital presence is outdated, hard to navigate, or fails to articulate your safety record, you are losing bids to competitors with lesser capabilities but better presentation.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Outdated Portfolios</h3>
                                <p>Flagship projects from the last 3 years aren't listed because updating the current CMS requires a developer.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Hidden Capabilities</h3>
                                <p>Clients think you only do civil works because your specialized MEP capabilities are buried on page four.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Poor Talent Pipeline</h3>
                                <p>Top-tier graduates accept offers from competitors because your careers page lacks a modern, engaging narrative.</p>
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
                                <h2>Digital foundations for major contractors.</h2>
                            </div>
                            <p>We build corporate platforms that project stability, scale, and technical excellence.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Bespoke UI/UX</h3>
                                <p>High-contrast, authoritative design systems tailored specifically for Tier-1 contractors and engineering firms.</p>
                                <div className="deliverable-tags"><small>Design</small><small>Brand</small><small>Authority</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Interactive Case Studies</h3>
                                <p>Dynamic portfolio templates that allow you to upload stats, drone videos, and client testimonials easily.</p>
                                <div className="deliverable-tags"><small>CMS</small><small>Video</small><small>Stats</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>ESG & Safety Hubs</h3>
                                <p>Dedicated sections designed to clearly present your HSE metrics, sustainability targets, and compliance certifications.</p>
                                <div className="deliverable-tags"><small>HSE</small><small>ESG</small><small>Trust</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Headless CMS Architecture</h3>
                                <p>Lightning-fast Next.js builds paired with Sanity or Contentful, ensuring zero lag even with heavy media.</p>
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
                            <p className="eyebrow">Featured Engineering Build</p>
                            <h2>Connecting the job site to the boardroom.</h2>
                        </div>
                        <p>See how we helped a massive civil engineering contractor digitize thousands of paper safety forms and provide their executive team with real-time portfolio visibility.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Construction Software</span>
                                <span>Field Mobility + Data Aggregation</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/construction-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Eliminating rework and data silos.</h2>
                                <p>We developed a custom ecosystem that allows field workers to capture QA/QC data offline in the trench, which automatically syncs to Procore and populates an executive BI dashboard at headquarters.</p>
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
                        <h2 id="faq-title">Common questions about our ConTech software.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Do you integrate with Procore, Autodesk, or Oracle Aconex?</summary>
                            <p>Yes. We regularly build middleware that connects custom field apps or client portals directly into core construction management platforms like Procore, ensuring data remains centralized without forcing field workers to use clunky interfaces.</p>
                        </details>
                        <details>
                            <summary>Can field applications work without an internet connection?</summary>
                            <p>Absolutely. We specialize in building offline-first PWA and React Native applications. Field engineers can fill out safety forms, capture photos, and annotate drawings deep underground, and the app will automatically sync the payload once they hit a cellular signal.</p>
                        </details>
                        <details>
                            <summary>How do you handle massive files like BIM models and drone surveys?</summary>
                            <p>We architect secure AWS/Azure storage solutions utilizing specialized viewers (like Autodesk Forge or WebGL) to render massive point clouds and 3D models directly in the browser, without requiring the client to download heavy CAD software.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other construction capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/capability-and-project-websites/"><div><small>Marketing</small><h3>Capability Websites</h3><p>Showcase your engineering capabilities with authority.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/tender-and-prequalification-portals/"><div><small>Procurement</small><h3>Tender Portals</h3><p>Streamline contractor and supplier onboarding.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/field-safety-and-quality-workflows/"><div><small>Site Operations</small><h3>Field Workflows</h3><p>Digitize the job site to eliminate rework.</p></div><b>Explore field tools ↗</b></a>
                        <a className="related-card" href="/services/construction-operations-dashboards/"><div><small>Executive</small><h3>Operations Dashboards</h3><p>Real-time control over portfolio performance.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Accelerate your construction <br />and engineering operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build platforms that win tenders, secure the job site, and provide total operational oversight? Let's discuss your roadmap.</p>
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
