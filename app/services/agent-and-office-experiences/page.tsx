import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/agent-and-office-experiences/" },
  title: "Agent & Office Experiences | Hyperlink Tech Solutions",
  description: "We design digital workspaces for real estate agents, unifying MLS data, marketing tools, and transaction management into a single, seamless platform.",
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
                    <strong>Brokerage Technology</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Agent Productivity Tools</div>
                        <p className="eyebrow">Brokerage Technology</p>
                        <h1 id="service-title">Empower your agents to close more deals.</h1>
                        <p className="hero-lead">We design digital workspaces for real estate agents, unifying MLS data, marketing tools, and transaction management into a single, seamless platform.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Centralized dashboards for managing active listings and open houses</li>
                            <li>One-click generation of branded marketing collateral and property flyers</li>
                            <li>Seamless integration with transaction management and e-signature tools</li>
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
                            <small>01 · Unified Tools</small>
                            <strong>Stop forcing agents to log into six different platforms.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Auto-marketing</small>
                            <strong>Generate social graphics from listing data instantly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Open House Apps</small>
                            <strong>Digital sign-in sheets that flow directly into the CRM.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Mobile Access</small>
                            <strong>Give agents the power to manage their business from their phone.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When agents lose focus</p>
                        <p>Admin work prevents agents from selling.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Technology should accelerate agents, not slow them down.</h2>
                        <p>Top-producing agents spend far too much time formatting brochures, re-entering data across different tools, and chasing down transaction paperwork instead of actually talking to clients.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Platform Fatigue</h3>
                                <p>Agents have to copy and paste data between the MLS, the CRM, the marketing suite, and the compliance tool.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Brand Dilution</h3>
                                <p>Agents create their own unbranded, ugly flyers because the official process takes too long.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Lost Leads</h3>
                                <p>Paper sign-in sheets from weekend open houses sit in a car trunk and are never entered into the database.</p>
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
                                <h2>Digital workspaces for modern agents.</h2>
                            </div>
                            <p>We build intuitive intranets and mobile tools that automate the busywork of real estate.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Agent Dashboards</h3>
                                <p>A single pane of glass showing an agent their active pipeline, upcoming tasks, and current listings.</p>
                                <div className="deliverable-tags"><small>Dashboards</small><small>UX/UI</small><small>Productivity</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Marketing Generators</h3>
                                <p>Tools that pull listing photos and text to automatically generate on-brand PDFs and social media posts.</p>
                                <div className="deliverable-tags"><small>PDFs</small><small>Automation</small><small>Brand</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Open House Apps</h3>
                                <p>Tablet-optimized forms for capturing visitor details that automatically trigger follow-up campaigns.</p>
                                <div className="deliverable-tags"><small>Forms</small><small>Tablet</small><small>CRM Sync</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Transaction Links</h3>
                                <p>Deep integrations with tools like Dotloop or DocuSign to track the status of compliance paperwork.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Compliance</small><small>E-Sign</small></div>
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
