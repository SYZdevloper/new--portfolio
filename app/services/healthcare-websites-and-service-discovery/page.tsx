import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceClientScripts from "../business-website-development/ServiceClientScripts";

export const metadata: Metadata = {
    title: "Healthcare Websites & Service Discovery Services | Hyperlink",
    description: "Modern healthcare websites and digital front doors that guide patients to the right care and clinical services.",
};

export default function HealthcareWebsitesServiceDiscoveryPage() {
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
                            <strong>Healthcare Websites & Service Discovery</strong>
                        </div>
                        <div className="hero-grid">
                            <div className="hero-copy reveal">
                                <p className="eyebrow">Service Discovery</p>
                                <h1>Healthcare Websites & Service Discovery</h1>
                                <p className="hero-lead">Modern healthcare websites and digital front doors that guide patients to the right care and clinical services.</p>
                                <div className="hero-actions">
                                    <a className="btn primary" href="#project-enquiry">Discuss Your Project →</a>
                                </div>
                            </div>
                            <div className="hero-visual reveal-right">
                                <div className="service-bento">
                                    <div className="service-bento-main">
                                        <span className="bento-icon">🏥</span>
                                        <h3>Provider Directories</h3>
                                        <div className="service-mini-ui">
                                            <div className="ui-line"></div>
                                            <div className="ui-line half"></div>
                                            <div className="ui-line"></div>
                                        </div>
                                    </div>
                                    <div className="service-bento-card">
                                        <strong>Campus Wayfinding</strong>
                                    </div>
                                    <div className="service-bento-card accent">
                                        <strong>Service Line Showcasing</strong>
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
                                <h3>Hard to find specialists</h3>
                                <p>Patients struggle to navigate complex hospital websites to find the right care.</p>
                                <span className="outcome">Outcome: Intuitive provider directories with smart search.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">02</span>
                                <h3>Lost on campus</h3>
                                <p>Patients miss appointments because they cannot find the right building or clinic.</p>
                                <span className="outcome">Outcome: Interactive campus maps and wayfinding.</span>
                            </article>
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">03</span>
                                <h3>Poor mobile experience</h3>
                                <p>Existing websites fail to load quickly or format correctly on patient smartphones.</p>
                                <span className="outcome">Outcome: Lightning-fast, mobile-first accessible designs.</span>
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
                            <h2>Core features we build for Healthcare Websites & Service Discovery.</h2>
                        </div>
                        <div className="capability-grid">
                            
                            <div className="capability-card reveal">
                                <strong>✓ Provider Directories</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Campus Wayfinding</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Service Line Showcasing</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ Patient Education Hubs</strong>
                            </div>
                            <div className="capability-card reveal">
                                <strong>✓ CMS Architecture</strong>
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
                                <h2>Ready to build your Healthcare Websites & Service Discovery?</h2>
                                <p>Provide a few details about your requirements and we'll send a technical proposal.</p>
                            </div>
                            <form className="full-form js-demo-form" action="/api/leads" method="post">
                                <input type="hidden" name="source_page" value="healthcare-websites-and-service-discovery" />
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
