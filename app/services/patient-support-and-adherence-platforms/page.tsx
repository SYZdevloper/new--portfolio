import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceClientScripts from "../business-website-development/ServiceClientScripts";

export const metadata: Metadata = {
    title: "Patient Support & Adherence Platforms Services | Hyperlink",
    description: "Digital therapeutic platforms and companion apps that guide patients through complex treatments and improve adherence.",
};

export default function PatientSupportAdherencePlatformsPage() {
    return (
        <>
            <SiteHeader />
            <main id="top" className="service-page">
                
                {/* HERO */}
                <section className="service-hero" data-block-type="hero">
                    <div className="container">
                        <div className="breadcrumbs">
                            <a href="/">Home</a><span>/</span>
                            <a href="/industries/pharmaceuticals-biotechnology/">Pharma & Biotech</a><span>/</span>
                            <strong>Patient Support & Adherence Platforms</strong>
                        </div>
                        <div className="hero-grid">
                            <div className="hero-copy reveal">
                                <p className="eyebrow">Patient Platforms</p>
                                <h1>Patient Support & Adherence Platforms</h1>
                                <p className="hero-lead">Digital therapeutic platforms and companion apps that guide patients through complex treatments and improve adherence.</p>
                                <div className="hero-actions">
                                    <a className="btn primary" href="#project-enquiry">Discuss Your Project →</a>
                                </div>
                            </div>
                            <div className="hero-visual reveal-right">
                                <div className="service-bento">
                                    <div className="service-bento-main">
                                        <span className="bento-icon">📱</span>
                                        <h3>Companion Mobile Apps</h3>
                                        <div className="service-mini-ui">
                                            <div className="ui-line"></div>
                                            <div className="ui-line half"></div>
                                            <div className="ui-line"></div>
                                        </div>
                                    </div>
                                    <div className="service-bento-card">
                                        <strong>Medication Reminders</strong>
                                    </div>
                                    <div className="service-bento-card accent">
                                        <strong>Symptom Tracking (PROs)</strong>
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
                                <h3>Low medication adherence</h3>
                                <p>Patients abandon complex biological treatments due to confusing protocols and side effects.</p>
                                <span className="outcome">Outcome: Digital companion apps with guided support.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">02</span>
                                <h3>Lack of symptom tracking</h3>
                                <p>Clinicians have no visibility into how a patient feels between clinical visits.</p>
                                <span className="outcome">Outcome: Daily symptom tracking and PRO (Patient Reported Outcomes) tools.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">03</span>
                                <h3>Complicated reimbursement</h3>
                                <p>Patients struggle to navigate insurance coverage and copay assistance programs.</p>
                                <span className="outcome">Outcome: Integrated financial support and copay portals.</span>
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
                            <h2>Core features we build for Patient Support & Adherence Platforms.</h2>
                        </div>
                        <div className="capability-grid">
                            
                            <div className="capability-card reveal">
                                <strong>✓ Companion Mobile Apps</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Medication Reminders</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Symptom Tracking (PROs)</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Copay Assistance Portals</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Telehealth Integration</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Gamified Adherence</strong>
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
                                <h2>Ready to build your Patient Support & Adherence Platforms?</h2>
                                <p>Provide a few details about your requirements and we'll send a technical proposal.</p>
                            </div>
                            <form className="full-form js-demo-form" action="/api/leads" method="post">
                                <input type="hidden" name="source_page" value="patient-support-and-adherence-platforms" />
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
