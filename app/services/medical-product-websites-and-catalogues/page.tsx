import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceClientScripts from "../business-website-development/ServiceClientScripts";

export const metadata: Metadata = {
    title: "Medical Product Websites & Catalogues Services | Hyperlink",
    description: "Digital experiences that educate clinicians and convert leads through interactive 3D catalogues and clinical data.",
};

export default function MedicalProductWebsitesCataloguesPage() {
    return (
        <>
            <SiteHeader />
            <main id="top" className="service-page">
                
                {/* HERO */}
                <section className="service-hero" data-block-type="hero">
                    <div className="container">
                        <div className="breadcrumbs">
                            <a href="/">Home</a><span>/</span>
                            <a href="/industries/medical-devices-diagnostics/">Medical Devices</a><span>/</span>
                            <strong>Medical Product Websites & Catalogues</strong>
                        </div>
                        <div className="hero-grid">
                            <div className="hero-copy reveal">
                                <p className="eyebrow">Medical Product Websites</p>
                                <h1>Medical Product Websites & Catalogues</h1>
                                <p className="hero-lead">Digital experiences that educate clinicians and convert leads through interactive 3D catalogues and clinical data.</p>
                                <div className="hero-actions">
                                    <a className="btn primary" href="#project-enquiry">Discuss Your Project →</a>
                                </div>
                            </div>
                            <div className="hero-visual reveal-right">
                                <div className="service-bento">
                                    <div className="service-bento-main">
                                        <span className="bento-icon">🩻</span>
                                        <h3>3D Product Viewers</h3>
                                        <div className="service-mini-ui">
                                            <div className="ui-line"></div>
                                            <div className="ui-line half"></div>
                                            <div className="ui-line"></div>
                                        </div>
                                    </div>
                                    <div className="service-bento-card">
                                        <strong>Technical Specification Hubs</strong>
                                    </div>
                                    <div className="service-bento-card accent">
                                        <strong>Clinical Evidence Libraries</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROBLEMS & OUTCOMES */}
                <section className="section soft" data-block-type="painOutcomeGrid">
                    <div className="container">
                        <div className="section-head reveal">
                            <div>
                                <p className="eyebrow">The Challenge</p>
                                <p>Why legacy approaches fail in this domain.</p>
                            </div>
                            <h2>Solve the friction slowing down your delivery.</h2>
                        </div>
                        <div className="problem-grid">
                            
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">01</span>
                                <h3>Static PDFs fail to sell</h3>
                                <p>Complex surgical equipment cannot be fully understood through flat, static PDF brochures.</p>
                                <span className="outcome">Outcome: Interactive WebGL and 3D product visualizers.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">02</span>
                                <h3>Clinical data is buried</h3>
                                <p>Surgeons cannot easily find the clinical outcomes and whitepapers supporting a new device.</p>
                                <span className="outcome">Outcome: Searchable clinical evidence hubs.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">03</span>
                                <h3>Inconsistent branding</h3>
                                <p>Global product launches suffer from fragmented messaging across regional websites.</p>
                                <span className="outcome">Outcome: Unified CMS architectures with localization.</span>
                            </article>
                        </div>
                    </div>
                </section>

                {/* INCLUDED DELIVERABLES */}
                <section className="section" data-block-type="deliverablesList">
                    <div className="container">
                        <div className="section-head reveal">
                            <div>
                                <p className="eyebrow">Platform Capabilities</p>
                                <p>What's included in this service.</p>
                            </div>
                            <h2>Core features we build for Medical Product Websites & Catalogues.</h2>
                        </div>
                        <div className="capability-grid">
                            
                            <div className="capability-card reveal">
                                <strong>✓ 3D Product Viewers</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Technical Specification Hubs</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Clinical Evidence Libraries</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Lead Generation Forms</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Global CMS Architecture</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Medical Device SEO</strong>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROJECT ENQUIRY */}
                <section className="final-cta" id="project-enquiry">
                    <div className="container">
                        <div className="final-box">
                            <div className="final-copy">
                                <p className="eyebrow" style={{ color: "#cdbdff" }}>Start Your Project</p>
                                <h2>Ready to build your Medical Product Websites & Catalogues?</h2>
                                <p>Provide a few details about your requirements and we'll send a technical proposal.</p>
                            </div>
                            <form className="full-form js-demo-form" action="/api/leads" method="post">
                                <input type="hidden" name="source_page" value="medical-product-websites-and-catalogues" />
                                <div className="field">
                                    <label>Name *</label>
                                    <input name="name" required={true} placeholder="Your name" />
                                </div>
                                <div className="field">
                                    <label>Work email *</label>
                                    <input name="email" type="email" required={true} placeholder="you@company.com" />
                                </div>
                                <div className="field full">
                                    <label>Project Details</label>
                                    <textarea name="message" placeholder="Core requirements, target users, and timeline"></textarea>
                                </div>
                                <div className="field full">
                                    <button className="btn" type="submit">Request Proposal →</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

            </main>
            <SiteFooter />
            <ServiceClientScripts />
        </>
    );
}
