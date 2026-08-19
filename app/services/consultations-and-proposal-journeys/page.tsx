import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/consultations-and-proposal-journeys/" },
  title: "Consultations & Proposal Journeys | Hyperlink Tech Solutions",
  description: "We build digital proposal journeys that automate NDA signing, fee estimates, and initial consultation scheduling for professional services.",
};

export default function Page() {
  return (
    <>
      <ServiceInteractions />
      <div className="service-page-wrapper">
        <SiteHeader />

        <main id="top">
            <section className="hero service-hero" aria-labelledby="service-title">
                <nav className="service-breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services/">Services</Link><span>›</span>
                    <strong>Client Acquisition</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Digital Proposals</div>
                        <p className="eyebrow">Client Acquisition</p>
                        <h1 id="service-title">Streamline the path from inquiry to signed contract.</h1>
                        <p className="hero-lead">We build digital proposal journeys that automate NDA signing, fee estimates, and initial consultation scheduling for professional services.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Interactive intake forms that qualify leads based on budget and scope</li>
                            <li>Automated scheduling for initial design consultations</li>
                            <li>Dynamic, trackable digital proposals with integrated e-signatures</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Practice <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        
                        <div className="proof-item">
                            <small>01 · Better Leads</small>
                            <strong>Filter out tire-kickers before they take up a partner's time.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Closing</small>
                            <strong>Send beautiful digital proposals instead of static PDFs.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · E-Signatures</small>
                            <strong>Get fee agreements signed directly within the browser.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · CRM Sync</small>
                            <strong>Push all prospect data directly into HubSpot or Salesforce.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When onboarding is manual</p>
                        <p>Partners are spending too much time qualifying bad leads.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Friction in the sales process loses premium clients.</h2>
                        <p>If a prospective client has to wait days for an email reply to schedule a consultation, or is sent a clunky Word document to sign as a fee proposal, the initial trust is broken. Modern clients expect a seamless, digital-first onboarding experience.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Time Waste</h3>
                                <p>Senior architects spend hours on calls with leads who ultimately don't have the budget for a custom build.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Lost Proposals</h3>
                                <p>You send a PDF fee estimate and have no idea if the client ever opened it or shared it with their board.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Messy Onboarding</h3>
                                <p>Chasing clients for signed NDAs, initial deposits, and site surveys via disjointed email threads.</p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section soft" id="included">
                <div className="container">
                    <div className="solution-shell">
                        <div className="solution-head">
                            <div>
                                <p className="eyebrow" style={{color: "#d8c2ff"}}>The deliverables</p>
                                <h2>Automated acquisition flows.</h2>
                            </div>
                            <p>We engineer systems that make saying 'yes' to your practice frictionless.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Smart Intake Forms</h3>
                                <p>Multi-step logic forms that capture project details, site locations, and budget brackets, routing high-value leads to partners.</p>
                                <div className="deliverable-tags"><small>Forms</small><small>Logic</small><small>Routing</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Digital Proposals</h3>
                                <p>Trackable web-based proposals that notify you when a client is viewing them, complete with rich media embeds.</p>
                                <div className="deliverable-tags"><small>Proposals</small><small>Analytics</small><small>Web</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Integrated E-Sign</h3>
                                <p>Seamless contract execution workflows using DocuSign or bespoke API integrations for fee agreements.</p>
                                <div className="deliverable-tags"><small>E-Sign</small><small>Contracts</small><small>Legal</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Scheduling Automation</h3>
                                <p>Direct calendar integrations (Calendly/ChiliPiper) allowing qualified leads to book initial briefs instantly.</p>
                                <div className="deliverable-tags"><small>Calendars</small><small>Sync</small><small>UX</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Practice Platform</p>
                            <h2>Elevating the studio experience.</h2>
                        </div>
                        <p>See how we helped a global architectural practice build a seamless digital ecosystem that took them from beautiful portfolio websites to fully integrated client project portals.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Architecture Tech</span>
                                <span>WebGL & Web Portals</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/architecture-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Designing for designers.</h2>
                                <p>We developed a high-performance Next.js portfolio that renders heavy 3D fly-throughs flawlessly, backed by a secure client portal where stakeholders can review plans and sign off on material finishes.</p>
                            </div>
                            <a className="btn primary" href="/work/">View All Projects <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">Common questions about architecture & design tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle heavy media files on portfolio sites?</summary>
                            <p>We utilize modern frameworks like Next.js paired with global CDNs and automated image/video compression via services like Cloudinary or Mux. This ensures that even heavy 4K videos and high-res architectural renders load instantly without hurting your SEO.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with our practice management software?</summary>
                            <p>Yes. We frequently integrate web platforms with industry-standard software like Deltek, ArchiSnapper, or BQE Core to automate time-tracking dashboards, project accounting, and CRM functions.</p>
                        </details>
                        <details>
                            <summary>Are client portals secure enough for confidential designs?</summary>
                            <p>Absolutely. We build bespoke portals using enterprise-grade authentication (Auth0/Okta), ensuring that pre-release designs, tender documents, and financial estimates are strictly accessible only to authorized stakeholders.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other practice capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/portfolio-and-practice-websites/"><div><small>Marketing</small><h3>Practice Websites</h3><p>Digital portfolios that win major commissions.</p></div><b>Explore portfolios ↗</b></a>
                        <a className="related-card" href="/services/consultations-and-proposal-journeys/"><div><small>Sales</small><h3>Proposal Journeys</h3><p>Streamline the path to a signed contract.</p></div><b>Explore proposals ↗</b></a>
                        <a className="related-card" href="/services/client-project-portals/"><div><small>Collaboration</small><h3>Client Portals</h3><p>Keep clients engaged during the design phase.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/practice-and-service-dashboards/"><div><small>Operations</small><h3>Practice Dashboards</h3><p>Track utilization and practice profitability.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your practice with <br />bespoke digital tools. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From award-winning portfolios to secure client collaboration portals, we build the technology that powers leading design firms.</p>
                        <a className="btn" href="#contact">Get a Proposal <span className="arrow">↗</span></a>
                    </div>
                </div>
            </section>
        </main>

        <SiteFooter />
    </div>
    <a className="floating-cta" href="#contact">Get Proposal ↗</a>
    <div className="mobile-bottom" aria-label="Quick contact actions">
        <a href="mailto:hello@hyperlinktechsolutions.com">Email Us</a>
        <a href="#contact">Get Proposal</a>
    </div>
    </>
  );
}
