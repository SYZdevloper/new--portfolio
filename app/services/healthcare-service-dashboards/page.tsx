import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceClientScripts from "../business-website-development/ServiceClientScripts";

export const metadata: Metadata = {
    title: "Healthcare Service Dashboards Services | Hyperlink",
    description: "Executive dashboards aggregating data across departments to track wait times, outcomes, and revenue cycles.",
};

export default function HealthcareServiceDashboardsPage() {
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
                            <strong>Healthcare Service Dashboards</strong>
                        </div>
                        <div className="hero-grid">
                            <div className="hero-copy reveal">
                                <p className="eyebrow">Healthcare Analytics</p>
                                <h1>Healthcare Service Dashboards</h1>
                                <p className="hero-lead">Executive dashboards aggregating data across departments to track wait times, outcomes, and revenue cycles.</p>
                                <div className="hero-actions">
                                    <a className="btn primary" href="#project-enquiry">Discuss Your Project →</a>
                                </div>
                            </div>
                            <div className="hero-visual reveal-right">
                                <div className="service-bento">
                                    <div className="service-bento-main">
                                        <span className="bento-icon">📊</span>
                                        <h3>Wait Time Monitoring</h3>
                                        <div className="service-mini-ui">
                                            <div className="ui-line"></div>
                                            <div className="ui-line half"></div>
                                            <div className="ui-line"></div>
                                        </div>
                                    </div>
                                    <div className="service-bento-card">
                                        <strong>Clinical Outcome Tracking</strong>
                                    </div>
                                    <div className="service-bento-card accent">
                                        <strong>Revenue Cycle Analytics</strong>
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
                                <h3>Siloed data sources</h3>
                                <p>Clinical and financial data live in different systems, making holistic reporting impossible.</p>
                                <span className="outcome">Outcome: Unified data warehousing and BI dashboards.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">02</span>
                                <h3>Hidden bottlenecks</h3>
                                <p>Administrators cannot see where patients are getting stuck in the emergency department.</p>
                                <span className="outcome">Outcome: Live wait time and patient flow monitoring.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">03</span>
                                <h3>Revenue leakage</h3>
                                <p>Denied claims and coding errors go unnoticed until the end of the financial quarter.</p>
                                <span className="outcome">Outcome: Real-time revenue cycle and claims tracking.</span>
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
                            <h2>Core features we build for Healthcare Service Dashboards.</h2>
                        </div>
                        <div className="capability-grid">
                            
                            <div className="capability-card reveal">
                                <strong>✓ Wait Time Monitoring</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Clinical Outcome Tracking</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Revenue Cycle Analytics</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Resource Utilization</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Compliance Reporting</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Executive BI</strong>
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
                                <h2>Ready to build your Healthcare Service Dashboards?</h2>
                                <p>Provide a few details about your requirements and we'll send a technical proposal.</p>
                            </div>
                            <form className="full-form js-demo-form" action="/api/leads" method="post">
                                <input type="hidden" name="source_page" value="healthcare-service-dashboards" />
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
