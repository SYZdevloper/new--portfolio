import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceClientScripts from "../business-website-development/ServiceClientScripts";

export const metadata: Metadata = {
    title: "Diagnostic & Laboratory Workflows Services | Hyperlink",
    description: "Secure digital workflows for laboratories to receive orders, track samples, and deliver diagnostic reports.",
};

export default function DiagnosticLaboratoryWorkflowsPage() {
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
                            <strong>Diagnostic & Laboratory Workflows</strong>
                        </div>
                        <div className="hero-grid">
                            <div className="hero-copy reveal">
                                <p className="eyebrow">Laboratory Workflows</p>
                                <h1>Diagnostic & Laboratory Workflows</h1>
                                <p className="hero-lead">Secure digital workflows for laboratories to receive orders, track samples, and deliver diagnostic reports.</p>
                                <div className="hero-actions">
                                    <a className="btn primary" href="#project-enquiry">Discuss Your Project →</a>
                                </div>
                            </div>
                            <div className="hero-visual reveal-right">
                                <div className="service-bento">
                                    <div className="service-bento-main">
                                        <span className="bento-icon">🔬</span>
                                        <h3>Provider Ordering Portals</h3>
                                        <div className="service-mini-ui">
                                            <div className="ui-line"></div>
                                            <div className="ui-line half"></div>
                                            <div className="ui-line"></div>
                                        </div>
                                    </div>
                                    <div className="service-bento-card">
                                        <strong>Sample Provenance Tracking</strong>
                                    </div>
                                    <div className="service-bento-card accent">
                                        <strong>Secure Result Reporting</strong>
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
                                <h3>Manual order entry</h3>
                                <p>Laboratories waste hours manually re-keying test orders from paper requisitions.</p>
                                <span className="outcome">Outcome: Digital provider portals for secure test ordering.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">02</span>
                                <h3>Lost samples</h3>
                                <p>Without digital provenance, tracking a specific tissue sample through the lab is difficult.</p>
                                <span className="outcome">Outcome: End-to-end sample tracking and LIS integration.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">03</span>
                                <h3>Delayed results</h3>
                                <p>Referring clinicians wait days to receive physical or faxed diagnostic reports.</p>
                                <span className="outcome">Outcome: Secure digital result delivery and provider dashboards.</span>
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
                            <h2>Core features we build for Diagnostic & Laboratory Workflows.</h2>
                        </div>
                        <div className="capability-grid">
                            
                            <div className="capability-card reveal">
                                <strong>✓ Provider Ordering Portals</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Sample Provenance Tracking</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Secure Result Reporting</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ LIS Integration (HL7/FHIR)</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Billing Workflows</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Patient Result Portals</strong>
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
                                <h2>Ready to build your Diagnostic & Laboratory Workflows?</h2>
                                <p>Provide a few details about your requirements and we'll send a technical proposal.</p>
                            </div>
                            <form className="full-form js-demo-form" action="/api/leads" method="post">
                                <input type="hidden" name="source_page" value="diagnostic-and-laboratory-workflows" />
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
