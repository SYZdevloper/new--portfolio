import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceClientScripts from "../business-website-development/ServiceClientScripts";

export const metadata: Metadata = {
    title: "Appointments & Referrals Services | Hyperlink",
    description: "Secure, intelligent booking workflows that handle complex clinical triage and automated appointment reminders.",
};

export default function AppointmentsReferralsPage() {
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
                            <strong>Appointments & Referrals</strong>
                        </div>
                        <div className="hero-grid">
                            <div className="hero-copy reveal">
                                <p className="eyebrow">Digital Booking</p>
                                <h1>Appointments & Referrals</h1>
                                <p className="hero-lead">Secure, intelligent booking workflows that handle complex clinical triage and automated appointment reminders.</p>
                                <div className="hero-actions">
                                    <a className="btn primary" href="#project-enquiry">Discuss Your Project →</a>
                                </div>
                            </div>
                            <div className="hero-visual reveal-right">
                                <div className="service-bento">
                                    <div className="service-bento-main">
                                        <span className="bento-icon">📅</span>
                                        <h3>EHR-Integrated Booking</h3>
                                        <div className="service-mini-ui">
                                            <div className="ui-line"></div>
                                            <div className="ui-line half"></div>
                                            <div className="ui-line"></div>
                                        </div>
                                    </div>
                                    <div className="service-bento-card">
                                        <strong>Smart Symptom Triage</strong>
                                    </div>
                                    <div className="service-bento-card accent">
                                        <strong>Digital Intake Forms</strong>
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
                                <h3>Call center overload</h3>
                                <p>Staff spend hours on the phone handling routine appointment bookings and reschedules.</p>
                                <span className="outcome">Outcome: Self-serve digital booking connected to the EHR.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">02</span>
                                <h3>High no-show rates</h3>
                                <p>Patients forget appointments, leading to lost revenue and empty clinical slots.</p>
                                <span className="outcome">Outcome: Automated SMS and email reminder workflows.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">03</span>
                                <h3>Paper intake delays</h3>
                                <p>Patients fill out paper forms in the waiting room, delaying the start of clinical care.</p>
                                <span className="outcome">Outcome: Secure digital intake completed prior to arrival.</span>
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
                            <h2>Core features we build for Appointments & Referrals.</h2>
                        </div>
                        <div className="capability-grid">
                            
                            <div className="capability-card reveal">
                                <strong>✓ EHR-Integrated Booking</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Smart Symptom Triage</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Digital Intake Forms</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Automated Reminders</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Referral Management</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Insurance Verification</strong>
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
                                <h2>Ready to build your Appointments & Referrals?</h2>
                                <p>Provide a few details about your requirements and we'll send a technical proposal.</p>
                            </div>
                            <form className="full-form js-demo-form" action="/api/leads" method="post">
                                <input type="hidden" name="source_page" value="appointments-and-referrals" />
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
