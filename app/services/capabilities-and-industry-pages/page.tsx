import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/capabilities-and-industry-pages/" },
  title: "Capabilities & Industry Pages | Hyperlink Tech Solutions",
  description: "Structure processes, materials, tolerances, equipment, certifications and example applications to build buyer confidence.",
};

export default function CapabilitiesAndIndustryPages() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/capabilities-and-industry-pages/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/capabilities-and-industry-pages/",
          "name": "Capabilities & Industry Pages | Hyperlink Tech Solutions",
          "description": "Structure processes, materials, tolerances, equipment, certifications and example applications to build buyer confidence.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/capabilities-and-industry-pages/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/capabilities-and-industry-pages/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/capabilities-and-industry-pages/#service",
          "name": "Capabilities & Industry Pages",
          "serviceType": "Web Development",
          "url": "https://hyperlinktechsolutions.com/services/capabilities-and-industry-pages/",
          "description": "Structure processes, materials, tolerances, equipment, certifications and example applications to build buyer confidence.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Manufacturers, Contract Manufacturers, Engineering Firms"
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
                    <strong>Capabilities & Industry Pages</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Buyer confidence</div>
                        <p className="eyebrow">Capabilities & Industry Pages</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Explain what the business can manufacture and for <em class="accent-text">whom.</em>' }}></h1>
                        <p className="hero-lead">Structure processes, materials, tolerances, equipment, certifications and example applications to build buyer confidence and accelerate the sales cycle.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Process and material pages</li>
                            <li>Equipment and tolerance data</li>
                            <li>Industries and applications</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        <div className="proof-item">
                            <small>01 · Structured Data</small>
                            <strong>Present complex technical specifications in an easily scannable format.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Buyer Alignment</small>
                            <strong>Map your capabilities directly to the industries and pain points of your target audience.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Proof of Quality</small>
                            <strong>Highlight certifications, compliance standards, and equipment lists seamlessly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · SEO Advantage</small>
                            <strong>Rank for specific manufacturing processes, materials, and niche applications.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When clear capabilities are necessary</p>
                        <p>You cannot win technical contracts if engineers and procurement teams can't quickly verify what you can actually do.</p>
                        <a className="btn" href="#contact">Discuss Capabilities <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Vague claims lose RFQs before they even begin.</h2>
                        <p>If a buyer has to dig through a generic "About Us" page to figure out if you handle 5-axis CNC machining for aerospace-grade titanium, they will simply go to a competitor whose website explicitly confirms it.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Hidden Equipment Lists</h3>
                                <p>Investing millions in state-of-the-art machinery means nothing if potential clients don't know it exists or what tolerances it can hold.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Generic Industry Messaging</h3>
                                <p>Listing "Automotive" as an industry is too broad. Buyers need to see specific case studies, parts, and compliance standards relevant to their tier-1 supply chain.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Poor Information Architecture</h3>
                                <p>Burying material capabilities in downloadable PDFs prevents search engines from indexing them and creates friction for buyers doing rapid vendor qualification.</p>
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
                                <h2>Clear, structured capabilities pages.</h2>
                            </div>
                            <p>We build professional capability and industry pages that clearly communicate your expertise and manufacturing prowess.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Processes</span>
                                <h3>Process & Material Indexing</h3>
                                <p>Structured web pages detailing every manufacturing process you offer, cross-linked with supported materials and minimum tolerances.</p>
                                <div className="deliverable-tags"><small>Materials</small><small>Tolerances</small><small>Processes</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Equipment</span>
                                <h3>Digital Equipment Rosters</h3>
                                <p>Dynamic lists of your shop floor equipment, categorized by function, capacity, and work envelope, building immediate credibility.</p>
                                <div className="deliverable-tags"><small>Machinery</small><small>Capacity</small><small>Credibility</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Applications</span>
                                <h3>Industry Application Pages</h3>
                                <p>Dedicated hubs for specific industries, showcasing example parts, relevant certifications (like AS9100 or ISO 13485), and domain expertise.</p>
                                <div className="deliverable-tags"><small>Industries</small><small>Certifications</small><small>Case Studies</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Discovery</span>
                                <h3>SEO & Navigation Structure</h3>
                                <p>Architecting the site so that engineers searching for "medical grade silicone molding" land directly on your highly relevant capabilities page.</p>
                                <div className="deliverable-tags"><small>SEO</small><small>Navigation</small><small>Discovery</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Implementation</p>
                            <h2>Transforming a broad manufacturer into a specialized partner.</h2>
                        </div>
                        <p>See how structuring capabilities correctly led to a 40% increase in qualified inbound RFQs for a contract manufacturer.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Capabilities Showcase</span>
                                <span>CMS + Next.js</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#111', height: '200px' }}>
                                {/* Placeholder for case study image */}
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Precision Manufacturing Partner</p>
                                <h2>Clarifying the value proposition.</h2>
                                <p>A mid-sized contract manufacturer was receiving too many misaligned RFQs because their website simply stated "Custom Manufacturing Solutions".</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Procurement teams couldn't verify if the company had the specific 5-axis machines and ITAR compliance required for aerospace defense contracts.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We completely restructured their digital presence, creating deep, technical pages for each machining capability, cross-referencing equipment lists, tolerances, and specific aerospace case studies.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>The clarity instantly filtered out bad-fit leads, while increasing high-value, qualified RFQs from target industries by 40%.</strong></div>
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
                        <h2 id="faq-title">Common questions about capability pages.</h2>
                        <p>Answers covering content creation, SEO, and technical details.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Do we need to write all the technical content?</summary>
                            <p>We work collaboratively. You provide the raw specifications, equipment lists, and tolerances, and we structure it into compelling, scannable web copy optimized for buyers and search engines.</p>
                        </details>
                        <details>
                            <summary>How detailed should the equipment list be?</summary>
                            <p>Very detailed. Engineers love specs. Including make, model, work envelope dimensions, and capabilities of your machinery directly answers their qualification questions.</p>
                        </details>
                        <details>
                            <summary>Will these pages help with SEO?</summary>
                            <p>Yes, significantly. By creating dedicated pages for specific processes (e.g., "Swiss CNC Machining" vs just "Machining"), you capture highly targeted, high-intent search traffic.</p>
                        </details>
                        <details>
                            <summary>Can we update our capabilities as we buy new machines?</summary>
                            <p>Absolutely. We build these pages on a headless CMS, allowing your team to easily add new equipment, materials, or certifications without needing a developer.</p>
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
                        <a className="related-card" href="/services/rfq-and-quotation-workflows/"><div><small>Intake</small><h3>RFQ Workflows</h3><p>Collect complete requirements and move opportunities through review.</p></div><b>Explore RFQ workflows ↗</b></a>
                        <a className="related-card" href="/services/client-portal-development/"><div><small>Portals</small><h3>Customer Portals</h3><p>Give authorised customers one place for active work.</p></div><b>Explore customer portals ↗</b></a>
                        <a className="related-card" href="/services/quality-and-document-control/"><div><small>Compliance</small><h3>Quality & Document Control</h3><p>Connect inspection and quality information.</p></div><b>Explore quality control ↗</b></a>
                        <a className="related-card" href="/services/production-and-capacity-dashboards/"><div><small>Operations</small><h3>Production Dashboards</h3><p>Help teams understand workload, schedules and exceptions.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Build buyer confidence with <br />clear capabilities. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to showcase your true manufacturing strength and attract the right kind of RFQs?</p>
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
