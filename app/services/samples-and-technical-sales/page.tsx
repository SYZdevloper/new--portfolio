import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/samples-and-technical-sales/" },
  title: "Samples & Technical Sales | Hyperlink Tech Solutions",
  description: "We engineer workflows that allow R&D teams to request product samples, track formulation testing, and collaborate directly with your technical sales engineers.",
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
                    <strong>Sales Enablement</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Sales Workflows</div>
                        <p className="eyebrow">Sales Enablement</p>
                        <h1 id="service-title">Accelerate the technical sales cycle.</h1>
                        <p className="hero-lead">We engineer workflows that allow R&D teams to request product samples, track formulation testing, and collaborate directly with your technical sales engineers.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Streamlined sample request forms capturing end-use applications and required volumes</li>
                            <li>Internal workflows for sample approval, lab dispatch, and hazardous shipping compliance</li>
                            <li>Post-sample follow-up automation to track the success of formulation trials</li>
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
                            <small>01 · Faster Approvals</small>
                            <strong>Route sample requests instantly to the correct regional technical manager.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Lab Visibility</small>
                            <strong>Give the R&D lab a clear queue of samples to mix and dispatch.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · ROI Tracking</small>
                            <strong>Connect sample dispatch data to closed-won revenue in your CRM.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Feedback Loops</small>
                            <strong>Automatically prompt customers for trial results after delivery.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When sampling is unmanaged</p>
                        <p>Sending expensive chemical samples into a black hole hurts your bottom line.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Disconnected sample processes lose deals.</h2>
                        <p>In the chemical industry, selling often starts with a physical sample. When requests are taken over the phone, emailed to the lab, and shipped without tracking, technical sales reps lose visibility. They don't know when the sample arrived, and they forget to follow up, resulting in lost formulation opportunities.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Lost Requests</h3>
                                <p>A sample request gets buried in a lab manager's inbox, and the prospect chooses a competitor who shipped faster.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Zero Traceability</h3>
                                <p>Sales reps have no idea if the sample they requested actually shipped or was received by the customer's R&D team.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Poor Follow-up</h3>
                                <p>Thousands of dollars in samples are sent out monthly, but there is no system to track which trials resulted in bulk orders.</p>
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
                                <h2>Digital formulation workflows.</h2>
                            </div>
                            <p>We build systems that turn sample requests into a structured, trackable sales pipeline.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Sample Request Portals</h3>
                                <p>Gated forms for prospects to request specific grades, securely capturing application data and regulatory requirements.</p>
                                <div className="deliverable-tags"><small>Forms</small><small>UX</small><small>Leads</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Lab Dispatch Workflows</h3>
                                <p>Internal dashboards for the lab to view approved requests, print hazmat labels, and log tracking numbers.</p>
                                <div className="deliverable-tags"><small>Dashboards</small><small>Logistics</small><small>Operations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>CRM Integration</h3>
                                <p>Middleware that automatically logs sample requests, dispatch statuses, and tracking links directly onto the account record in Salesforce or HubSpot.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>CRM</small><small>Sales</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Follow-up Engines</h3>
                                <p>Email logic that triggers check-ins based on the delivery date, prompting the customer to report on their formulation trial.</p>
                                <div className="deliverable-tags"><small>Automation</small><small>Email</small><small>Conversion</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Chemical Platform</p>
                            <h2>Digitizing bulk formulations.</h2>
                        </div>
                        <p>See how we helped a global specialty chemicals manufacturer build a headless product platform that automatically matches specific polymer formulations to regional SDS compliance requirements.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Chemical Tech</span>
                                <span>B2B Commerce & Compliance</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/chemical-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From laboratory to logistics.</h2>
                                <p>We developed a custom B2B portal that allows distributors to order bulk IBCs, track hazardous freight via IoT integrations, and instantly download batch-specific Certificates of Analysis (CoA) without calling customer service.</p>
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
                        <h2 id="faq-title">Common questions about chemical industry tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle complex regulatory and compliance data?</summary>
                            <p>We build structured databases (often via headless CMS like Sanity) that link products to specific regional regulations (REACH, EPA). This ensures that a technical buyer in Europe automatically sees the correct SDS and compliance documents for their jurisdiction.</p>
                        </details>
                        <details>
                            <summary>Can you integrate B2B ordering portals with legacy ERPs like SAP?</summary>
                            <p>Yes. Chemical supply chains run on complex legacy ERPs. We build secure API middleware layers that sit between your modern distributor portal and your ERP, translating modern web requests into the specific formats your backend system requires for order entry and inventory.</p>
                        </details>
                        <details>
                            <summary>How do you handle hazardous freight calculations?</summary>
                            <p>We build custom logic engines into the checkout process. The platform automatically checks UN numbers, packing groups, and dangerous goods classes, calculating specific hazmat freight surcharges and preventing incompatible chemicals from being placed on the same pallet.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other chemical capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/technical-product-catalogues/"><div><small>Discovery</small><h3>Technical Catalogues</h3><p>Structure complex chemical formulations.</p></div><b>Explore catalogues ↗</b></a>
                        <a className="related-card" href="/services/safety-and-technical-resources/"><div><small>Compliance</small><h3>Safety Resources</h3><p>Digital hubs for SDS and technical data.</p></div><b>Explore resources ↗</b></a>
                        <a className="related-card" href="/services/samples-and-technical-sales/"><div><small>Sales</small><h3>Sample Workflows</h3><p>Accelerate the technical sales cycle.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/distributor-and-customer-portals/"><div><small>Commerce</small><h3>Distributor Portals</h3><p>Digitize bulk chemical ordering.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your chemical <br />and manufacturing operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From complex technical catalogues to B2B hazardous ordering portals, we build software that drives efficiency across the chemical supply chain.</p>
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
