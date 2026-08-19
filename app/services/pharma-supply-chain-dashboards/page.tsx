import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceClientScripts from "../business-website-development/ServiceClientScripts";

export const metadata: Metadata = {
    title: "Pharma Supply Chain Dashboards Services | Hyperlink",
    description: "Executive dashboards tracking cold-chain logistics, manufacturing batch yields, and global regulatory submissions.",
};

export default function PharmaSupplyChainDashboardsPage() {
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
                            <strong>Pharma Supply Chain Dashboards</strong>
                        </div>
                        <div className="hero-grid">
                            <div className="hero-copy reveal">
                                <p className="eyebrow">Supply Dashboards</p>
                                <h1>Pharma Supply Chain Dashboards</h1>
                                <p className="hero-lead">Executive dashboards tracking cold-chain logistics, manufacturing batch yields, and global regulatory submissions.</p>
                                <div className="hero-actions">
                                    <a className="btn primary" href="#project-enquiry">Discuss Your Project →</a>
                                </div>
                            </div>
                            <div className="hero-visual reveal-right">
                                <div className="service-bento">
                                    <div className="service-bento-main">
                                        <span className="bento-icon">🧊</span>
                                        <h3>IoT Cold-Chain Tracking</h3>
                                        <div className="service-mini-ui">
                                            <div className="ui-line"></div>
                                            <div className="ui-line half"></div>
                                            <div className="ui-line"></div>
                                        </div>
                                    </div>
                                    <div className="service-bento-card">
                                        <strong>Batch Yield Analytics</strong>
                                    </div>
                                    <div className="service-bento-card accent">
                                        <strong>Regulatory Submission Tracking</strong>
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
                                <h3>Cold-chain spoilage</h3>
                                <p>Temperature excursions during transit ruin expensive biologic shipments without warning.</p>
                                <span className="outcome">Outcome: Real-time IoT temperature monitoring dashboards.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">02</span>
                                <h3>Manufacturing bottlenecks</h3>
                                <p>Plant managers lack real-time visibility into batch yields and equipment downtime.</p>
                                <span className="outcome">Outcome: Manufacturing KPI tracking and analytics.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">03</span>
                                <h3>Regulatory delays</h3>
                                <p>Tracking the status of drug submissions across dozens of global regulatory bodies is chaotic.</p>
                                <span className="outcome">Outcome: Centralized regulatory submission tracking.</span>
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
                            <h2>Core features we build for Pharma Supply Chain Dashboards.</h2>
                        </div>
                        <div className="capability-grid">
                            
                            <div className="capability-card reveal">
                                <strong>✓ IoT Cold-Chain Tracking</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Batch Yield Analytics</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Regulatory Submission Tracking</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Inventory Forecasting</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Supplier Quality Dashboards</strong>
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
                                <h2>Ready to build your Pharma Supply Chain Dashboards?</h2>
                                <p>Provide a few details about your requirements and we'll send a technical proposal.</p>
                            </div>
                            <form className="full-form js-demo-form" action="/api/leads" method="post">
                                <input type="hidden" name="source_page" value="pharma-supply-chain-dashboards" />
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
