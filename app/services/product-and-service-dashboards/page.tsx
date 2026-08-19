import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceClientScripts from "../business-website-development/ServiceClientScripts";

export const metadata: Metadata = {
    title: "Product & Service Dashboards Services | Hyperlink",
    description: "Advanced analytics providing visibility into IoT device utilization, field service performance, and clinical outcomes.",
};

export default function ProductServiceDashboardsPage() {
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
                            <strong>Product & Service Dashboards</strong>
                        </div>
                        <div className="hero-grid">
                            <div className="hero-copy reveal">
                                <p className="eyebrow">Product Dashboards</p>
                                <h1>Product & Service Dashboards</h1>
                                <p className="hero-lead">Advanced analytics providing visibility into IoT device utilization, field service performance, and clinical outcomes.</p>
                                <div className="hero-actions">
                                    <a className="btn primary" href="#project-enquiry">Discuss Your Project →</a>
                                </div>
                            </div>
                            <div className="hero-visual reveal-right">
                                <div className="service-bento">
                                    <div className="service-bento-main">
                                        <span className="bento-icon">📈</span>
                                        <h3>IoT Telemetry Analytics</h3>
                                        <div className="service-mini-ui">
                                            <div className="ui-line"></div>
                                            <div className="ui-line half"></div>
                                            <div className="ui-line"></div>
                                        </div>
                                    </div>
                                    <div className="service-bento-card">
                                        <strong>Field Service KPI Tracking</strong>
                                    </div>
                                    <div className="service-bento-card accent">
                                        <strong>Clinical Outcome Reporting</strong>
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
                                <h3>Blind to utilization</h3>
                                <p>Manufacturers don’t know how often their connected capital equipment is actually used in the field.</p>
                                <span className="outcome">Outcome: IoT telemetry dashboards tracking active utilization.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">02</span>
                                <h3>Inefficient field service</h3>
                                <p>Service managers cannot easily measure first-time fix rates or technician response times.</p>
                                <span className="outcome">Outcome: Field service performance analytics.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">03</span>
                                <h3>Disconnected outcomes</h3>
                                <p>Product managers lack data correlating device usage with long-term clinical success.</p>
                                <span className="outcome">Outcome: Unified data warehousing linking device and clinical data.</span>
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
                            <h2>Core features we build for Product & Service Dashboards.</h2>
                        </div>
                        <div className="capability-grid">
                            
                            <div className="capability-card reveal">
                                <strong>✓ IoT Telemetry Analytics</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Field Service KPI Tracking</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Clinical Outcome Reporting</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Predictive Maintenance Models</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Executive BI</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Data Warehousing</strong>
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
                                <h2>Ready to build your Product & Service Dashboards?</h2>
                                <p>Provide a few details about your requirements and we'll send a technical proposal.</p>
                            </div>
                            <form className="full-form js-demo-form" action="/api/leads" method="post">
                                <input type="hidden" name="source_page" value="product-and-service-dashboards" />
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
