import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/owner-and-landlord-portals/" },
  title: "Owner & Landlord Portals | Hyperlink Tech Solutions",
  description: "We develop secure portals for landlords to track rental income, monitor maintenance requests, and review digital lease agreements in real-time.",
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
                    <strong>Property Management Tech</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Landlord Dashboards</div>
                        <p className="eyebrow">Property Management Tech</p>
                        <h1 id="service-title">Transparent oversight for property owners.</h1>
                        <p className="hero-lead">We develop secure portals for landlords to track rental income, monitor maintenance requests, and review digital lease agreements in real-time.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Financial dashboards tracking rent collection, expenses, and yields</li>
                            <li>Transparent views of active maintenance tickets and repair costs</li>
                            <li>Secure document vaults for leases, tax documents, and property deeds</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Project <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        
                        <div className="proof-item">
                            <small>01 · Financial Clarity</small>
                            <strong>Owners can view itemized cash flow for their entire portfolio.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Maintenance Tracking</small>
                            <strong>Approve repair quotes instantly without playing phone tag.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Document Vault</small>
                            <strong>No more lost leases. Everything is securely stored online.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Tax Readiness</small>
                            <strong>Generate year-end financial summaries in a single click.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When owners lose trust</p>
                        <p>Opaque management drives landlords to competitors.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Property owners demand total financial transparency.</h2>
                        <p>When landlords have to constantly email their property manager to ask if rent was collected or why a maintenance bill was so high, trust erodes quickly. Spreadsheets and PDF statements are no longer acceptable.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Black Box Expenses</h3>
                                <p>Owners receive a monthly statement with a $500 'repair' charge but no accompanying photos or context.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Lost Documents</h3>
                                <p>Finding an active lease agreement requires digging through two years of email history.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Delayed Reporting</h3>
                                <p>Owners have to wait until the 15th of the month just to see the previous month's cash flow.</p>
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
                                <h2>Digital command centers for landlords.</h2>
                            </div>
                            <p>We build intuitive portals that integrate with your core property management software to provide owners with real-time transparency.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Financial Dashboards</h3>
                                <p>Integration with accounting backends to visualize rent rolls, operational expenses, and net yields.</p>
                                <div className="deliverable-tags"><small>Dashboards</small><small>Charts</small><small>Finance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Ticketing Systems</h3>
                                <p>Workflows that surface tenant maintenance requests, complete with contractor photos and quote approvals.</p>
                                <div className="deliverable-tags"><small>Ticketing</small><small>Approvals</small><small>Images</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Document Vaults</h3>
                                <p>Secure, structured repositories for lease agreements, insurance policies, and compliance certificates.</p>
                                <div className="deliverable-tags"><small>Storage</small><small>Encryption</small><small>Docs</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Statements</h3>
                                <p>Systems that automatically generate and email branded monthly financial summaries to owners.</p>
                                <div className="deliverable-tags"><small>PDFs</small><small>Automation</small><small>Reporting</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Agency Build</p>
                            <h2>Empowering agents with digital precision.</h2>
                        </div>
                        <p>See how we helped a national real estate brokerage replace fragmented tools with a unified platform for listings, lead routing, and agent productivity.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Real Estate Software</span>
                                <span>Data Sync + Workflow Automation</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/agency-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Connecting the property lifecycle.</h2>
                                <p>We developed a custom ecosystem that ingests massive listing data feeds, dynamically routes buyer inquiries to top-performing agents, and provides branch managers with total revenue visibility.</p>
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
                        <h2 id="faq-title">Common questions about our PropTech software.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate directly with MLS and RETS feeds?</summary>
                            <p>Yes. We have deep experience building automated ingestion pipelines that pull, normalize, and update massive property data feeds (via RESO Web API, RETS, or direct portal APIs) to ensure your listings are always perfectly synced.</p>
                        </details>
                        <details>
                            <summary>How do you handle complex lead routing algorithms?</summary>
                            <p>We build custom rules engines that route buyer inquiries based on highly specific criteria, such as the property's ZIP code, the agent's current availability, historical conversion rates, and language preferences.</p>
                        </details>
                        <details>
                            <summary>Can you connect our custom portal to Salesforce or Follow Up Boss?</summary>
                            <p>Absolutely. We regularly build robust bidirectional syncs with leading real estate CRMs to ensure that agents never have to manually enter a lead's contact information or property viewing history.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other brokerage capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/listings-and-property-search/"><div><small>Discovery</small><h3>Property Search</h3><p>Connect buyers with their dream homes, faster.</p></div><b>Explore search ↗</b></a>
                        <a className="related-card" href="/services/agent-and-office-experiences/"><div><small>Productivity</small><h3>Agent Experiences</h3><p>Empower your agents to close more deals.</p></div><b>Explore tools ↗</b></a>
                        <a className="related-card" href="/services/owner-and-landlord-portals/"><div><small>Management</small><h3>Landlord Portals</h3><p>Transparent oversight for property owners.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/brokerage-dashboards/"><div><small>Operations</small><h3>Brokerage Dashboards</h3><p>Complete visibility over your brokerage's performance.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Accelerate your real estate <br />brokerage operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build platforms that attract buyers, empower agents, and provide total operational oversight? Let's discuss your roadmap.</p>
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
