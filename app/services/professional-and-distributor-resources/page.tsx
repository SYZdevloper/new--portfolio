import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceClientScripts from "../business-website-development/ServiceClientScripts";

export const metadata: Metadata = {
    title: "Professional & Distributor Resources Services | Hyperlink",
    description: "Secure B2B resource hubs empowering medical professionals and distributors with training and ordering tools.",
};

export default function ProfessionalDistributorResourcesPage() {
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
                            <strong>Professional & Distributor Resources</strong>
                        </div>
                        <div className="hero-grid">
                            <div className="hero-copy reveal">
                                <p className="eyebrow">Professional Resources</p>
                                <h1>Professional & Distributor Resources</h1>
                                <p className="hero-lead">Secure B2B resource hubs empowering medical professionals and distributors with training and ordering tools.</p>
                                <div className="hero-actions">
                                    <a className="btn primary" href="#project-enquiry">Discuss Your Project →</a>
                                </div>
                            </div>
                            <div className="hero-visual reveal-right">
                                <div className="service-bento">
                                    <div className="service-bento-main">
                                        <span className="bento-icon">🔐</span>
                                        <h3>Surgical Guide Libraries</h3>
                                        <div className="service-mini-ui">
                                            <div className="ui-line"></div>
                                            <div className="ui-line half"></div>
                                            <div className="ui-line"></div>
                                        </div>
                                    </div>
                                    <div className="service-bento-card">
                                        <strong>Clinician Training LMS</strong>
                                    </div>
                                    <div className="service-bento-card accent">
                                        <strong>B2B Bulk Ordering</strong>
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
                                <h3>Outdated surgical guides</h3>
                                <p>Clinicians risk using outdated surgical technique guides because they rely on printed manuals.</p>
                                <span className="outcome">Outcome: Real-time, version-controlled digital resource hubs.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">02</span>
                                <h3>Manual bulk ordering</h3>
                                <p>Distributors submit orders via email and spreadsheets, causing delays and errors.</p>
                                <span className="outcome">Outcome: B2B ecommerce portals connected to ERPs.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">03</span>
                                <h3>Lack of training visibility</h3>
                                <p>Manufacturers cannot track which clinicians have completed mandatory device training.</p>
                                <span className="outcome">Outcome: Integrated LMS (Learning Management System) portals.</span>
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
                            <h2>Core features we build for Professional & Distributor Resources.</h2>
                        </div>
                        <div className="capability-grid">
                            
                            <div className="capability-card reveal">
                                <strong>✓ Surgical Guide Libraries</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Clinician Training LMS</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ B2B Bulk Ordering</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Distributor Dashboards</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ CIAM/SSO Authentication</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ ERP Integration</strong>
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
                                <h2>Ready to build your Professional & Distributor Resources?</h2>
                                <p>Provide a few details about your requirements and we'll send a technical proposal.</p>
                            </div>
                            <form className="full-form js-demo-form" action="/api/leads" method="post">
                                <input type="hidden" name="source_page" value="professional-and-distributor-resources" />
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
