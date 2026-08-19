import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceClientScripts from "../business-website-development/ServiceClientScripts";

export const metadata: Metadata = {
    title: "Equipment & Service Portals Services | Hyperlink",
    description: "Asset management portals for hospitals and biomedical engineering to track device fleets and maintenance.",
};

export default function EquipmentServicePortalsPage() {
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
                            <strong>Equipment & Service Portals</strong>
                        </div>
                        <div className="hero-grid">
                            <div className="hero-copy reveal">
                                <p className="eyebrow">Equipment Portals</p>
                                <h1>Equipment & Service Portals</h1>
                                <p className="hero-lead">Asset management portals for hospitals and biomedical engineering to track device fleets and maintenance.</p>
                                <div className="hero-actions">
                                    <a className="btn primary" href="#project-enquiry">Discuss Your Project →</a>
                                </div>
                            </div>
                            <div className="hero-visual reveal-right">
                                <div className="service-bento">
                                    <div className="service-bento-main">
                                        <span className="bento-icon">🔧</span>
                                        <h3>Asset Fleet Management</h3>
                                        <div className="service-mini-ui">
                                            <div className="ui-line"></div>
                                            <div className="ui-line half"></div>
                                            <div className="ui-line"></div>
                                        </div>
                                    </div>
                                    <div className="service-bento-card">
                                        <strong>Warranty Tracking</strong>
                                    </div>
                                    <div className="service-bento-card accent">
                                        <strong>Service Ticketing</strong>
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
                                <h3>Lost warranty status</h3>
                                <p>Hospitals struggle to track the warranty and service contract status of capital equipment.</p>
                                <span className="outcome">Outcome: Centralized asset management and warranty tracking.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">02</span>
                                <h3>Reactive maintenance</h3>
                                <p>Equipment fails unexpectedly because preventative maintenance schedules are ignored.</p>
                                <span className="outcome">Outcome: Automated maintenance scheduling and alerts.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">03</span>
                                <h3>Slow service dispatch</h3>
                                <p>Logging a support ticket requires a phone call and manual data entry by the manufacturer.</p>
                                <span className="outcome">Outcome: Self-serve digital ticketing and field service tracking.</span>
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
                            <h2>Core features we build for Equipment & Service Portals.</h2>
                        </div>
                        <div className="capability-grid">
                            
                            <div className="capability-card reveal">
                                <strong>✓ Asset Fleet Management</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Warranty Tracking</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Service Ticketing</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Preventative Maintenance Alerts</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Field Service Integration</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Spare Parts Ordering</strong>
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
                                <h2>Ready to build your Equipment & Service Portals?</h2>
                                <p>Provide a few details about your requirements and we'll send a technical proposal.</p>
                            </div>
                            <form className="full-form js-demo-form" action="/api/leads" method="post">
                                <input type="hidden" name="source_page" value="equipment-and-service-portals" />
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
