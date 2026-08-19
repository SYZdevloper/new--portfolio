import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/specifier-and-design-tools/" },
  title: "Specifier & Design Tools | Hyperlink Tech Solutions",
  description: "We build interactive design tools, CAD/BIM libraries, and visualizers that make it easy for architects and engineers to drop your products directly into their project specifications.",
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
                    <strong>Technical Sales</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Specifier Tools</div>
                        <p className="eyebrow">Technical Sales</p>
                        <h1 id="service-title">Help architects specify your products.</h1>
                        <p className="hero-lead">We build interactive design tools, CAD/BIM libraries, and visualizers that make it easy for architects and engineers to drop your products directly into their project specifications.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Dedicated architectural resource libraries for Revit, SketchUp, and AutoCAD files</li>
                            <li>Interactive product visualizers (e.g., mixing brick colors, mortar, and roofing styles)</li>
                            <li>Automated specification writing tools that generate exact architectural text</li>
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
                            <small>01 · BIM Integration</small>
                            <strong>Ensure your products exist natively in the architect's CAD software.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Visual Confidence</small>
                            <strong>Let clients see exactly how different product combinations will look.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Lead Generation</small>
                            <strong>Capture high-intent leads when architects download specific BIM files.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Error Reduction</small>
                            <strong>Automated spec-writers prevent contractors from substituting cheaper alternatives.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When specifying is difficult</p>
                        <p>If an architect can't find your BIM file, you won't make it onto the drawings.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Friction in the design phase costs you major projects.</h2>
                        <p>Architects are under immense time pressure. When they are drawing up a multi-million dollar commercial project, they use the materials that are easiest to drop into their software. If you don't provide accessible, high-quality Revit files or clear specification text, you lose the project before it even goes to tender.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Missing Assets</h3>
                                <p>Your CAD files are outdated, poorly modeled, or hidden behind broken links on an old website.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Visual Ambiguity</h3>
                                <p>Clients struggle to visualize how a specific cladding profile will look across a massive facade.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Vague Specifications</h3>
                                <p>Architects write vague specs because you haven't provided clear, copy-pasteable specification text, leading to competitors winning the bid.</p>
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
                                <h2>Tools that win the specification.</h2>
                            </div>
                            <p>We engineer digital assets that make specifying your products the path of least resistance.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>BIM & CAD Libraries</h3>
                                <p>Searchable databases specifically built to host, version-control, and track downloads of massive architectural files.</p>
                                <div className="deliverable-tags"><small>Database</small><small>BIM</small><small>LeadGen</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Product Visualizers</h3>
                                <p>Custom WebGL or React-based configurators allowing users to mix and match materials, colors, and textures on a 3D or 2D canvas.</p>
                                <div className="deliverable-tags"><small>WebGL</small><small>React</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Automated Spec Writers</h3>
                                <p>Logic engines that ask the architect a few questions about their project, then automatically generate the exact specification text required for the tender.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Forms</small><small>Automation</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Calculators & Estimators</h3>
                                <p>Custom tools that calculate exact material quantities (e.g., linear meters of decking, bags of grout) based on project dimensions.</p>
                                <div className="deliverable-tags"><small>Math</small><small>React</small><small>Sales</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Materials Platform</p>
                            <h2>Digitizing the specification lifecycle.</h2>
                        </div>
                        <p>See how we helped a national building materials manufacturer build a headless product platform that connects digital CAD libraries directly to architect sample requests and distributor inventory.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Manufacturing Tech</span>
                                <span>B2B Commerce & Specification</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/materials-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From architectural concept to site delivery.</h2>
                                <p>We developed a custom portal that allows architects to download BIM files and request physical samples, while seamlessly routing the resulting commercial quotes to the nearest authorized dealer based on real-time ERP inventory.</p>
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
                        <h2 id="faq-title">Common questions about building materials tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle complex product variations (colours, sizes, finishes)?</summary>
                            <p>We build structured databases (often via headless CMS like Sanity or integrated PIMs) that manage complex parent-child SKU relationships. This allows a user to view a 'product line' and then filter dynamically by specific finish or dimension without navigating through hundreds of separate pages.</p>
                        </details>
                        <details>
                            <summary>Can you integrate B2B ordering portals with legacy manufacturing ERPs?</summary>
                            <p>Yes. We build secure API middleware layers that sit between your modern dealer portal and legacy ERPs (like SAP, JD Edwards, or Epicor). This translates modern web cart requests into the specific formats your backend system requires for order entry and inventory deduction.</p>
                        </details>
                        <details>
                            <summary>Do you host CAD and BIM files directly on the platform?</summary>
                            <p>Yes. We build dedicated architectural resource libraries where specifiers can easily filter and download Revit, SketchUp, and AutoCAD files. We can also track these downloads to generate high-intent leads for your commercial sales team.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other manufacturing capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/product-and-material-catalogues/"><div><small>Discovery</small><h3>Material Catalogues</h3><p>Showcase technical specifications.</p></div><b>Explore catalogues ↗</b></a>
                        <a className="related-card" href="/services/specifier-and-design-tools/"><div><small>Technical Sales</small><h3>Design Tools</h3><p>Help architects specify products.</p></div><b>Explore tools ↗</b></a>
                        <a className="related-card" href="/services/samples-quotes-and-projects/"><div><small>Sales</small><h3>Sample Workflows</h3><p>Accelerate the specification cycle.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/dealer-and-distributor-portals/"><div><small>Commerce</small><h3>Dealer Portals</h3><p>Digitize bulk material ordering.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your materials <br />and manufacturing operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From complex technical catalogues for architects to B2B bulk ordering portals for dealers, we build software that drives efficiency across the construction supply chain.</p>
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
