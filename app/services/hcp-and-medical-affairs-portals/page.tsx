import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceClientScripts from "../business-website-development/ServiceClientScripts";

export const metadata: Metadata = {
    title: "HCP & Medical Affairs Portals Services | Hyperlink",
    description: "Gated portals for Healthcare Professionals to access clinical data, medical affairs resources, and secure sample ordering.",
};

export default function HCPMedicalAffairsPortalsPage() {
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
                            <strong>HCP & Medical Affairs Portals</strong>
                        </div>
                        <div className="hero-grid">
                            <div className="hero-copy reveal">
                                <p className="eyebrow">HCP Portals</p>
                                <h1>HCP & Medical Affairs Portals</h1>
                                <p className="hero-lead">Gated portals for Healthcare Professionals to access clinical data, medical affairs resources, and secure sample ordering.</p>
                                <div className="hero-actions">
                                    <a className="btn primary" href="#project-enquiry">Discuss Your Project →</a>
                                </div>
                            </div>
                            <div className="hero-visual reveal-right">
                                <div className="service-bento">
                                    <div className="service-bento-main">
                                        <span className="bento-icon">👨‍⚕️</span>
                                        <h3>HCP Identity Verification (e.g. MedPro)</h3>
                                        <div className="service-mini-ui">
                                            <div className="ui-line"></div>
                                            <div className="ui-line half"></div>
                                            <div className="ui-line"></div>
                                        </div>
                                    </div>
                                    <div className="service-bento-card">
                                        <strong>Medical Affairs Libraries</strong>
                                    </div>
                                    <div className="service-bento-card accent">
                                        <strong>Digital Sample Ordering</strong>
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
                                <h3>Accessing off-label data</h3>
                                <p>HCPs cannot easily access the in-depth scientific evidence they need to make prescribing decisions.</p>
                                <span className="outcome">Outcome: Secure, gated medical affairs libraries.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">02</span>
                                <h3>Slow sample fulfillment</h3>
                                <p>Physicians wait weeks for sales reps to drop off drug samples manually.</p>
                                <span className="outcome">Outcome: Compliant digital sample ordering workflows.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">03</span>
                                <h3>Unverified access</h3>
                                <p>Unverified users accessing restricted clinical data creates massive compliance liabilities.</p>
                                <span className="outcome">Outcome: Integration with HCP identity verification systems.</span>
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
                            <h2>Core features we build for HCP & Medical Affairs Portals.</h2>
                        </div>
                        <div className="capability-grid">
                            
                            <div className="capability-card reveal">
                                <strong>✓ HCP Identity Verification (e.g. MedPro)</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Medical Affairs Libraries</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Digital Sample Ordering</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ KOL Engagement Tools</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Continuing Medical Education (CME)</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Secure Messaging</strong>
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
                                <h2>Ready to build your HCP & Medical Affairs Portals?</h2>
                                <p>Provide a few details about your requirements and we'll send a technical proposal.</p>
                            </div>
                            <form className="full-form js-demo-form" action="/api/leads" method="post">
                                <input type="hidden" name="source_page" value="hcp-and-medical-affairs-portals" />
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
