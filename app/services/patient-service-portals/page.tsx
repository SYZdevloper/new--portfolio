import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceClientScripts from "../business-website-development/ServiceClientScripts";

export const metadata: Metadata = {
    title: "Patient Service Portals Services | Hyperlink",
    description: "Secure, HIPAA-compliant digital environments empowering patients to manage their care and access health data.",
};

export default function PatientServicePortalsPage() {
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
                            <strong>Patient Service Portals</strong>
                        </div>
                        <div className="hero-grid">
                            <div className="hero-copy reveal">
                                <p className="eyebrow">Patient Portals</p>
                                <h1>Patient Service Portals</h1>
                                <p className="hero-lead">Secure, HIPAA-compliant digital environments empowering patients to manage their care and access health data.</p>
                                <div className="hero-actions">
                                    <a className="btn primary" href="#project-enquiry">Discuss Your Project →</a>
                                </div>
                            </div>
                            <div className="hero-visual reveal-right">
                                <div className="service-bento">
                                    <div className="service-bento-main">
                                        <span className="bento-icon">👤</span>
                                        <h3>Lab Result Dashboards</h3>
                                        <div className="service-mini-ui">
                                            <div className="ui-line"></div>
                                            <div className="ui-line half"></div>
                                            <div className="ui-line"></div>
                                        </div>
                                    </div>
                                    <div className="service-bento-card">
                                        <strong>Secure Messaging</strong>
                                    </div>
                                    <div className="service-bento-card accent">
                                        <strong>Telehealth Integration</strong>
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
                                <h3>Data is inaccessible</h3>
                                <p>Patients must call or visit in person just to get a copy of their routine lab results.</p>
                                <span className="outcome">Outcome: Self-serve access to test results and clinical notes.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">02</span>
                                <h3>Disconnected communication</h3>
                                <p>Patients leave voicemails that take days for the care team to properly address.</p>
                                <span className="outcome">Outcome: Secure, asynchronous messaging with providers.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">03</span>
                                <h3>Fragmented family care</h3>
                                <p>Parents struggle to manage healthcare across multiple children and aging parents.</p>
                                <span className="outcome">Outcome: Proxy access for family health record management.</span>
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
                            <h2>Core features we build for Patient Service Portals.</h2>
                        </div>
                        <div className="capability-grid">
                            
                            <div className="capability-card reveal">
                                <strong>✓ Lab Result Dashboards</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Secure Messaging</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Telehealth Integration</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Prescription Renewals</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Family/Proxy Access</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Bill Payment</strong>
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
                                <h2>Ready to build your Patient Service Portals?</h2>
                                <p>Provide a few details about your requirements and we'll send a technical proposal.</p>
                            </div>
                            <form className="full-form js-demo-form" action="/api/leads" method="post">
                                <input type="hidden" name="source_page" value="patient-service-portals" />
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
