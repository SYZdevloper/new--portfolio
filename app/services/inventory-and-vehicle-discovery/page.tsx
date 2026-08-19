import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/inventory-and-vehicle-discovery/" },
  title: "Inventory & Vehicle Discovery Platforms | Hyperlink Tech Solutions",
  description: "We build blazing-fast automotive discovery platforms with advanced filtering, 360-degree views, and seamless inventory synchronization.",
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
                    <strong>Digital Showrooms & Search</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Automotive Discovery Platforms</div>
                        <p className="eyebrow">Digital Showrooms & Search</p>
                        <h1 id="service-title">Help buyers find the perfect vehicle, instantly.</h1>
                        <p className="hero-lead">We build blazing-fast automotive discovery platforms with advanced filtering, 360-degree views, and seamless inventory synchronization.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Lightning-fast parametric search across thousands of vehicles</li>
                            <li>Immersive 3D/360° vehicle viewers and galleries</li>
                            <li>Real-time synchronization with your Dealer Management System (DMS)</li>
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
                            <small>01 · Sub-second Search</small>
                            <strong>Filter by make, model, trim, or features instantly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · DMS Sync</small>
                            <strong>Never show a sold car. Live inventory updates.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Immersive Media</small>
                            <strong>Integrate SpinCar or custom 360-degree galleries.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Cross-branch</small>
                            <strong>Aggregate stock across all your dealership locations.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When discovery fails</p>
                        <p>Slow, clunky inventory search kills buyer intent.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Your digital showroom must perform flawlessly.</h2>
                        <p>Buyers spend weeks researching cars online. If your inventory is hard to navigate, outdated, or lacks high-quality visuals, they will bounce to a competitor.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Slow Search</h3>
                                <p>Page reloads for every applied filter frustrate users and increase bounce rates significantly.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Stale Data</h3>
                                <p>Disconnects between the physical lot and the website lead to inquiries on sold vehicles.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Poor Mobile UX</h3>
                                <p>Complex filters and large vehicle images break down on mobile devices where most research happens.</p>
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
                                <h2>High-performance digital showrooms.</h2>
                            </div>
                            <p>We architect custom headless commerce and Next.js frontends to deliver lightning-fast vehicle discovery experiences.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Headless Search</h3>
                                <p>Algolia or Elasticsearch implementations for sub-second, typo-tolerant vehicle filtering.</p>
                                <div className="deliverable-tags"><small>Algolia</small><small>Search</small><small>Filters</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Inventory Pipelines</h3>
                                <p>Robust middleware that securely syncs data from your DMS to the web in real-time.</p>
                                <div className="deliverable-tags"><small>DMS API</small><small>Sync</small><small>Middleware</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Media Optimization</h3>
                                <p>Automated image pipelines that compress and deliver vehicle photos instantly without quality loss.</p>
                                <div className="deliverable-tags"><small>CDNs</small><small>WebP</small><small>360° Viewers</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Mobile-First UX</h3>
                                <p>Responsive interfaces designed specifically for thumb-friendly filtering and image swiping.</p>
                                <div className="deliverable-tags"><small>UX/UI</small><small>Mobile</small><small>React</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Automotive Build</p>
                            <h2>Transforming the digital automotive journey.</h2>
                        </div>
                        <p>See how we modernized a leading network's digital presence to increase conversion rates and operational efficiency.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Digital Automotive Platform</span>
                                <span>UX/UI + Custom Engineering</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/automotive-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From friction to fast lanes.</h2>
                                <p>We completely re-architected the customer journey and backend operational software, resulting in a cohesive experience that bridges the gap between digital discovery and physical fulfillment.</p>
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
                        <h2 id="faq-title">Common questions about our automotive platforms.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Do you integrate with existing Dealer Management Systems (DMS)?</summary>
                            <p>Yes. We have extensive experience integrating with leading DMS and CRM platforms like CDK Global, Reynolds and Reynolds, Salesforce, and custom legacy systems.</p>
                        </details>
                        <details>
                            <summary>How long does a typical build take?</summary>
                            <p>Most enterprise automotive projects range from 3 to 6 months, depending on the complexity of legacy integrations and custom workflow requirements.</p>
                        </details>
                        <details>
                            <summary>Can you handle inventory data feeds from multiple branches?</summary>
                            <p>Absolutely. We build robust data ingestion pipelines that aggregate, sanitize, and normalize inventory data across multiple physical locations into a single, unified search experience.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other automotive capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/leads-appointments-and-sales/"><div><small>Sales</small><h3>Leads & Appointments</h3><p>Turn browsing into test drives and closed deals.</p></div><b>Explore sales ↗</b></a>
                        <a className="related-card" href="/services/rental-subscription-and-booking/"><div><small>Mobility</small><h3>Rental & Booking</h3><p>Powering flexible mobility and subscription software.</p></div><b>Explore booking ↗</b></a>
                        <a className="related-card" href="/services/service-and-workshop-experiences/"><div><small>Aftersales</small><h3>Service Portals</h3><p>Digitize the vehicle service and maintenance journey.</p></div><b>Explore service ↗</b></a>
                        <a className="related-card" href="/services/branch-fleet-and-operations/"><div><small>Operations</small><h3>Branch & Fleet</h3><p>Run your automotive operations from one dashboard.</p></div><b>Explore operations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Accelerate your digital <br />automotive journey. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build platforms that drive sales, streamline operations, and modernize the customer experience? Let's discuss your roadmap.</p>
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
