import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/lead-routing-and-crm-workflows/" },
  title: "Lead Routing & CRM Workflows | Hyperlink Tech Solutions",
  description: "We build intelligent lead routing algorithms that capture inquiries from multiple portals and instantly assign them to the right agent based on territory and performance.",
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
                    <strong>Real Estate CRM Integration</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Lead Routing Engines</div>
                        <p className="eyebrow">Real Estate CRM Integration</p>
                        <h1 id="service-title">Never let a high-intent buyer slip away.</h1>
                        <p className="hero-lead">We build intelligent lead routing algorithms that capture inquiries from multiple portals and instantly assign them to the right agent based on territory and performance.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Aggregate leads from Zillow, Realtor.com, and custom landing pages</li>
                            <li>Algorithmic round-robin routing based on agent availability and zip code</li>
                            <li>Automated SMS and email drip campaigns for immediate follow-up</li>
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
                            <small>01 · Speed to Lead</small>
                            <strong>Route inquiries to a live agent's phone in under 30 seconds.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Smart Routing</small>
                            <strong>Assign luxury leads only to agents with luxury track records.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Centralized Data</small>
                            <strong>Stop losing leads in flooded email inboxes.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Accountability</small>
                            <strong>Track exactly which agents are calling their leads back.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When leads go cold</p>
                        <p>A real estate lead loses 50% of its value every hour it is ignored.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Speed to lead is the only metric that matters.</h2>
                        <p>Brokerages spend thousands of dollars generating leads, only to have them sit in a generic inbox because the routing process relies on manual assignment by an office administrator.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Manual Assignment</h3>
                                <p>Leads sit untouched over the weekend because the admin who assigns them is off the clock.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Cherry-Picking</h3>
                                <p>Without automated round-robin rules, top agents steal the best leads while newer agents starve.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Data Silos</h3>
                                <p>Leads generated from Facebook ads never make it into the primary CRM system for follow-up.</p>
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
                                <h2>Intelligent lead orchestration.</h2>
                            </div>
                            <p>We engineer middleware and workflows that ensure every inquiry is captured, categorized, and acted upon instantly.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Lead Aggregation</h3>
                                <p>API integrations and email parsers that pull inquiries from third-party aggregators into one unified queue.</p>
                                <div className="deliverable-tags"><small>Webhooks</small><small>Parsing</small><small>APIs</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Routing Algorithms</h3>
                                <p>Complex logic engines that assign leads based on price point, language, zip code, and round-robin rules.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Algorithms</small><small>Routing</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Shark Tank Models</h3>
                                <p>Broadcast systems that send a lead to 5 agents simultaneously—the first to 'claim' it gets the deal.</p>
                                <div className="deliverable-tags"><small>WebSockets</small><small>Mobile</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>CRM Sync</h3>
                                <p>Deep integrations with Follow Up Boss, Salesforce, or Hubspot to trigger automated welcome campaigns.</p>
                                <div className="deliverable-tags"><small>CRM</small><small>Sync</small><small>Automation</small></div>
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
