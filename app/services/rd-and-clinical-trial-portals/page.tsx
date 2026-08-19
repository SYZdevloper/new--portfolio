import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceClientScripts from "../business-website-development/ServiceClientScripts";

export const metadata: Metadata = {
    title: "R&D & Clinical Trial Portals Services | Hyperlink",
    description: "Secure digital environments for managing clinical trials, tracking cohort data, and facilitating global research collaboration.",
};

export default function RDClinicalTrialPortalsPage() {
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
                            <strong>R&D & Clinical Trial Portals</strong>
                        </div>
                        <div className="hero-grid">
                            <div className="hero-copy reveal">
                                <p className="eyebrow">Clinical Portals</p>
                                <h1>R&D & Clinical Trial Portals</h1>
                                <p className="hero-lead">Secure digital environments for managing clinical trials, tracking cohort data, and facilitating global research collaboration.</p>
                                <div className="hero-actions">
                                    <a className="btn primary" href="#project-enquiry">Discuss Your Project →</a>
                                </div>
                            </div>
                            <div className="hero-visual reveal-right">
                                <div className="service-bento">
                                    <div className="service-bento-main">
                                        <span className="bento-icon">🧪</span>
                                        <h3>Patient Recruitment Funnels</h3>
                                        <div className="service-mini-ui">
                                            <div className="ui-line"></div>
                                            <div className="ui-line half"></div>
                                            <div className="ui-line"></div>
                                        </div>
                                    </div>
                                    <div className="service-bento-card">
                                        <strong>Digital Pre-screening</strong>
                                    </div>
                                    <div className="service-bento-card accent">
                                        <strong>eConsent Workflows</strong>
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
                                <h3>Slow trial recruitment</h3>
                                <p>Finding eligible patients takes months using traditional manual outreach and paper screening.</p>
                                <span className="outcome">Outcome: Automated digital recruitment and screening funnels.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">02</span>
                                <h3>Fragmented cohort data</h3>
                                <p>Trial data is collected in disparate spreadsheets, increasing the risk of data entry errors.</p>
                                <span className="outcome">Outcome: Centralized, secure EDC (Electronic Data Capture) portals.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">03</span>
                                <h3>Poor investigator engagement</h3>
                                <p>Clinical investigators struggle to collaborate across different global trial sites.</p>
                                <span className="outcome">Outcome: Secure investigator collaboration hubs.</span>
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
                            <h2>Core features we build for R&D & Clinical Trial Portals.</h2>
                        </div>
                        <div className="capability-grid">
                            
                            <div className="capability-card reveal">
                                <strong>✓ Patient Recruitment Funnels</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Digital Pre-screening</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ eConsent Workflows</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Investigator Collaboration Hubs</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Secure EDC Integrations</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ De-identified Data Portals</strong>
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
                                <h2>Ready to build your R&D & Clinical Trial Portals?</h2>
                                <p>Provide a few details about your requirements and we'll send a technical proposal.</p>
                            </div>
                            <form className="full-form js-demo-form" action="/api/leads" method="post">
                                <input type="hidden" name="source_page" value="rd-and-clinical-trial-portals" />
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
