import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceClientScripts from "../business-website-development/ServiceClientScripts";

export const metadata: Metadata = {
    title: "Pharmaceutical Corporate Websites Services | Hyperlink",
    description: "Enterprise websites that balance investor relations, scientific innovation, and global regulatory compliance.",
};

export default function PharmaceuticalCorporateWebsitesPage() {
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
                            <strong>Pharmaceutical Corporate Websites</strong>
                        </div>
                        <div className="hero-grid">
                            <div className="hero-copy reveal">
                                <p className="eyebrow">Corporate Websites</p>
                                <h1>Pharmaceutical Corporate Websites</h1>
                                <p className="hero-lead">Enterprise websites that balance investor relations, scientific innovation, and global regulatory compliance.</p>
                                <div className="hero-actions">
                                    <a className="btn primary" href="#project-enquiry">Discuss Your Project →</a>
                                </div>
                            </div>
                            <div className="hero-visual reveal-right">
                                <div className="service-bento">
                                    <div className="service-bento-main">
                                        <span className="bento-icon">🏢</span>
                                        <h3>Global CMS Architecture</h3>
                                        <div className="service-mini-ui">
                                            <div className="ui-line"></div>
                                            <div className="ui-line half"></div>
                                            <div className="ui-line"></div>
                                        </div>
                                    </div>
                                    <div className="service-bento-card">
                                        <strong>Investor Relations Hubs</strong>
                                    </div>
                                    <div className="service-bento-card accent">
                                        <strong>Interactive Pipeline Visuals</strong>
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
                                <h3>Scattered brand identity</h3>
                                <p>Multiple legacy websites across regions create a confusing experience for investors and partners.</p>
                                <span className="outcome">Outcome: Unified global CMS with localized content.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">02</span>
                                <h3>Buried pipeline data</h3>
                                <p>Scientific achievements and R&D pipelines are hidden in dense, unreadable text.</p>
                                <span className="outcome">Outcome: Interactive R&D pipeline visualizers.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">03</span>
                                <h3>Compliance risks</h3>
                                <p>Marketing sites frequently fail to meet strict FDA/EMA off-label promotion guidelines.</p>
                                <span className="outcome">Outcome: Built-in regulatory approval workflows.</span>
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
                            <h2>Core features we build for Pharmaceutical Corporate Websites.</h2>
                        </div>
                        <div className="capability-grid">
                            
                            <div className="capability-card reveal">
                                <strong>✓ Global CMS Architecture</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Investor Relations Hubs</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Interactive Pipeline Visuals</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Regulatory Approval Workflows</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Corporate Sustainability Reporting</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ WCAG Accessibility</strong>
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
                                <h2>Ready to build your Pharmaceutical Corporate Websites?</h2>
                                <p>Provide a few details about your requirements and we'll send a technical proposal.</p>
                            </div>
                            <form className="full-form js-demo-form" action="/api/leads" method="post">
                                <input type="hidden" name="source_page" value="pharmaceutical-corporate-websites" />
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
