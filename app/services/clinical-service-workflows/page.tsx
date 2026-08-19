import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceClientScripts from "../business-website-development/ServiceClientScripts";

export const metadata: Metadata = {
    title: "Clinical Service Workflows Services | Hyperlink",
    description: "Custom clinical interfaces designed to reduce administrative burden and orchestrate care delivery securely.",
};

export default function ClinicalServiceWorkflowsPage() {
    return (
        <>
            <SiteHeader />
            <main id="top" className="service-page">
                
                {/* HERO */}
                <section className="service-hero" data-block-type="hero">
                    <div className="container">
                        <div className="breadcrumbs">
                            <a href="/">Home</a><span>/</span>
                            <a href="/industries/hospitals-clinics-healthcare-providers/">Healthcare</a><span>/</span>
                            <strong>Clinical Service Workflows</strong>
                        </div>
                        <div className="hero-grid">
                            <div className="hero-copy reveal">
                                <p className="eyebrow">Clinical Operations</p>
                                <h1>Clinical Service Workflows</h1>
                                <p className="hero-lead">Custom clinical interfaces designed to reduce administrative burden and orchestrate care delivery securely.</p>
                                <div className="hero-actions">
                                    <a className="btn primary" href="#project-enquiry">Discuss Your Project →</a>
                                </div>
                            </div>
                            <div className="hero-visual reveal-right">
                                <div className="service-bento">
                                    <div className="service-bento-main">
                                        <span className="bento-icon">🩺</span>
                                        <h3>Care Coordination Boards</h3>
                                        <div className="service-mini-ui">
                                            <div className="ui-line"></div>
                                            <div className="ui-line half"></div>
                                            <div className="ui-line"></div>
                                        </div>
                                    </div>
                                    <div className="service-bento-card">
                                        <strong>Bed Management UX</strong>
                                    </div>
                                    <div className="service-bento-card accent">
                                        <strong>EHR API Middleware (FHIR)</strong>
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
                                <h3>EHR alert fatigue</h3>
                                <p>Clinicians are overwhelmed by poor UX and excessive clicking in legacy EHR systems.</p>
                                <span className="outcome">Outcome: Streamlined, role-specific custom interfaces.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">02</span>
                                <h3>Handoff errors</h3>
                                <p>Patient transfers between departments rely on phone calls, leading to dropped information.</p>
                                <span className="outcome">Outcome: Digital handoff and care coordination boards.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">03</span>
                                <h3>Blind to capacity</h3>
                                <p>Nursing supervisors lack real-time visibility into bed availability across the hospital.</p>
                                <span className="outcome">Outcome: Live bed management and capacity dashboards.</span>
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
                            <h2>Core features we build for Clinical Service Workflows.</h2>
                        </div>
                        <div className="capability-grid">
                            
                            <div className="capability-card reveal">
                                <strong>✓ Care Coordination Boards</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Bed Management UX</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ EHR API Middleware (FHIR)</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Clinical Decision Support</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Secure Handoffs</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Discharge Planning</strong>
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
                                <h2>Ready to build your Clinical Service Workflows?</h2>
                                <p>Provide a few details about your requirements and we'll send a technical proposal.</p>
                            </div>
                            <form className="full-form js-demo-form" action="/api/leads" method="post">
                                <input type="hidden" name="source_page" value="clinical-service-workflows" />
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
