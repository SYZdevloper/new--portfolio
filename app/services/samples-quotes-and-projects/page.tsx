import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/samples-quotes-and-projects/" },
  title: "Samples, Quotes & Projects Portals | Hyperlink Tech Solutions",
  description: "Digitize your B2B sales funnel. We build custom portals for architects and contractors to order material samples, request custom quotes, and manage project bids.",
};

export default function SamplesQuotesAndProjects() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/samples-quotes-and-projects/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/samples-quotes-and-projects/",
          "name": "Samples, Quotes & Projects Portals | Hyperlink Tech Solutions",
          "description": "Digitize your B2B sales funnel. We build custom portals for architects and contractors to order material samples, request custom quotes, and manage project bids.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/samples-quotes-and-projects/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/samples-quotes-and-projects/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/samples-quotes-and-projects/#service",
          "name": "Samples, Quotes & Projects",
          "serviceType": "B2B Sales Portals",
          "url": "https://hyperlinktechsolutions.com/services/samples-quotes-and-projects/",
          "description": "Digitize your B2B sales funnel. We build custom portals for architects and contractors to order material samples, request custom quotes, and manage project bids.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "A&D Manufacturers, Commercial Suppliers, and Industrial Wholesalers"
          }
        }
      ]
    }
    ` }} />
      
    <ServiceInteractions />
      <div className="service-page-wrapper">
        <SiteHeader />

        <main id="top">
            <section className="hero service-hero" aria-labelledby="service-title">
                <nav className="service-breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services/">Services</Link><span>›</span>
                    <strong>Samples, Quotes & Projects</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Streamlined Pre-Sales Workflows</div>
                        <p className="eyebrow">Samples, Quotes & Projects</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Turn complex B2B inquiries into <em class="accent-text">managed pipelines.</em>' }}></h1>
                        <p className="hero-lead">We digitize the messy middle of the B2B sales process. Build custom portals where architects can order physical samples, contractors can request complex RFQs, and your sales team can track it all by project.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Automated sample fulfillment routing and inventory management</li>
                            <li>Complex "Request for Quote" (RFQ) builders with matrix pricing</li>
                            <li>Project-based dashboards for managing multi-phase bids</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Sales Flow <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Portal benefits">
                        <div className="proof-item">
                            <small>01 · Faster Quoting</small>
                            <strong>Reduce quote turnaround time from days to hours.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Sample Tracking</small>
                            <strong>Tie every sample ordered directly to a CRM opportunity.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Project Organization</small>
                            <strong>Group multiple RFQs under a single commercial project ID.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Higher Win Rates</small>
                            <strong>A smoother quoting experience directly impacts bid success.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When Quoting Portals are necessary</p>
                        <p>When your sales inbox is filled with vague requests and lost sample tracking numbers.</p>
                        <a className="btn" href="#contact">Organize Your Pipeline <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Email-based quoting and sample ordering is leaking revenue.</h2>
                        <p>In B2B manufacturing, a sale rarely happens in a single click. It requires physical samples, custom pricing grids, and project-based tracking. When this is handled entirely via email threads, requests get lost, quoting takes too long, and competitors win the bid.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Black-Hole Samples</h3>
                                <p>Architects order expensive material samples, but your sales team has no automated way to follow up or tie that sample to a specific project.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Incomplete RFQs</h3>
                                <p>Contractors email requests for quotes but forget to include critical dimensions or material grades, causing days of back-and-forth clarification.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Disorganized Projects</h3>
                                <p>Large commercial builds require multiple quotes over several months. Your reps struggle to track which revisions belong to which phase of the project.</p>
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
                                <h2>End-to-End Project Portals.</h2>
                            </div>
                            <p>We build secure, account-based web portals that guide users through structured requests and give your sales team total visibility into the pipeline.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Logistics</span>
                                <h3>Sample Ordering Engines</h3>
                                <p>Building eCommerce-style checkouts specifically for free or paid samples, integrated directly with your fulfillment center and CRM.</p>
                                <div className="deliverable-tags"><small>Samples</small><small>Logistics</small><small>CRM</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Sales</span>
                                <h3>Guided RFQ Builders</h3>
                                <p>Replacing vague emails with dynamic forms that force users to provide all necessary specs (dimensions, tolerances) before submitting a quote request.</p>
                                <div className="deliverable-tags"><small>RFQs</small><small>Forms</small><small>Validation</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Organization</span>
                                <h3>Project Workspaces</h3>
                                <p>Creating user dashboards where architects can group different samples, quotes, and technical documents under specific "Project" folders.</p>
                                <div className="deliverable-tags"><small>Dashboards</small><small>Projects</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Integration</span>
                                <h3>ERP & CRM Syncing</h3>
                                <p>Piping approved quotes directly into your ERP for fulfillment, while logging every interaction in Salesforce to empower your sales reps.</p>
                                <div className="deliverable-tags"><small>ERP</small><small>Salesforce</small><small>APIs</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Portal Build</p>
                            <h2>Digitizing a national surfacing brand's sample program.</h2>
                        </div>
                        <p>See how we turned a massive cost center into a measurable lead generation machine.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Sample Portals</span>
                                <span>CRM Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#1a1a1a', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ color: '#666', fontSize: '1.2rem', fontWeight: 500 }}>Dashboard Interface</div>
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Commercial Tile Manufacturer</p>
                                <h2>Tracking the ROI of physical samples.</h2>
                                <p>A major tile manufacturer was spending $2M a year shipping free samples to architects, but they had no idea which samples actually resulted in a commercial project specification.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Samples were ordered via basic web forms and fulfilled manually. Sales reps didn't know an architect was interested until weeks later.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We built a "Project Portfolio" portal where architects add samples to specific projects. The portal integrates with their warehouse API for instant shipping labels, and alerts the local sales rep via Salesforce.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>The company can now trace 60% of commercial revenue back to specific sample orders. Follow-up time dropped from 14 days to 24 hours.</strong></div>
                            </div>
                            <a className="btn primary" href="/contact">Start Your Project <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">Common questions about Sales Portals.</h2>
                        <p>Answers covering sample limits, quoting logic, and integrations.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you prevent users from ordering too many free samples?</summary>
                            <p>We program business logic into the portal that restricts free sample quantities based on the user's account type. For example, a verified architect might get 10 free samples a month, while a standard user gets 2 before being prompted to pay.</p>
                        </details>
                        <details>
                            <summary>Can the portal calculate shipping costs for samples?</summary>
                            <p>Yes. We integrate with logistics APIs (FedEx, UPS, USPS) to calculate real-time shipping rates, and can integrate Stripe to process payments if you charge for expedited shipping.</p>
                        </details>
                        <details>
                            <summary>How does the RFQ builder handle complex pricing rules?</summary>
                            <p>Rather than exposing your pricing logic directly to the user, the RFQ builder acts as a structured data collection tool. It gathers all required variables and sends them to your ERP or internal quoting team, ensuring the final price provided is accurate.</p>
                        </details>
                        <details>
                            <summary>Can users share their 'Projects' with colleagues?</summary>
                            <p>Yes. We frequently build team-based workspaces where a lead architect can create a project, add materials to it, and invite junior designers or general contractors to view and collaborate on the same dashboard.</p>
                        </details>
                        <details>
                            <summary>Does this integrate with Salesforce?</summary>
                            <p>Absolutely. We use robust APIs to ensure that every sample ordered, project created, or RFQ submitted instantly generates or updates an Opportunity in your CRM, equipping your sales team with actionable data.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Complete your digital infrastructure.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/specifier-and-design-tools/"><div><small>Discovery</small><h3>Specifier Tools</h3><p>Give architects visual calculators before they request a quote.</p></div><b>Explore tools ↗</b></a>
                        <a className="related-card" href="/services/product-and-material-catalogues/"><div><small>Data</small><h3>Material Catalogues</h3><p>Organize the product data that feeds your sample ordering engine.</p></div><b>Explore catalogues ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Organize your pipeline. <br />Close more bids. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to modernize how your customers request samples and quotes? Let's discuss your B2B sales workflow.</p>
                        <a className="btn" href="#contact">Get a Portal Proposal <span className="arrow">↗</span></a>
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
