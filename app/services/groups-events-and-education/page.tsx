import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/groups-events-and-education/" },
  title: "Groups, Events & Education | Hyperlink Tech Solutions",
  description: "We develop specialized booking portals for schools, corporate groups, and private events, replacing messy email threads with structured digital quoting and payment workflows.",
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
                    <strong>B2B Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Group Portals</div>
                        <p className="eyebrow">B2B Operations</p>
                        <h1 id="service-title">Streamline group and school bookings.</h1>
                        <p className="hero-lead">We develop specialized booking portals for schools, corporate groups, and private events, replacing messy email threads with structured digital quoting and payment workflows.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom B2B inquiry forms that accurately capture group size, dietary needs, and desired add-ons (e.g., educational workshops)</li>
                            <li>Digital quoting engines allowing your sales team to send a branded proposal that the client can accept and pay online</li>
                            <li>Automated manifest generation ensuring operations staff know exactly when 300 school kids will arrive at the gate</li>
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
                            <small>01 · Increased Sales Velocity</small>
                            <strong>Turn a 3-day email negotiation into a same-day digital booking for a corporate retreat.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Reduced Admin</small>
                            <strong>Stop your group sales team from manually typing credit card numbers taken over the phone.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Accurate Capacity</small>
                            <strong>Ensure massive school groups are properly allocated in the ticketing system to prevent gate chaos.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Smoother Arrival</small>
                            <strong>Provide group leaders with a single digital barcode that admits their entire party of 50 instantly.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When B2B is messy</p>
                        <p>Managing a 200-person corporate event via PDF invoices and bank transfers is a disaster.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Disorganized group sales cause operational chaos.</h2>
                        <p>Attractions generate massive revenue from schools and corporate events, but managing them is often an administrative nightmare. If a teacher has to email the office to book a field trip, wait for a PDF invoice, and arrange a manual bank transfer, errors occur. When group details are lost in email threads, the park operations team is blindsided on the day.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The Email Grind</h3>
                                <p>Your sales team spends hours manually generating PDF quotes and chasing schools for payment.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Lost Requirements</h3>
                                <p>A corporate group arrives for a catered lunch, but the dietary requirements were buried in an old email thread.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Gate Bottlenecks</h3>
                                <p>A group of 100 people arrives at the gate, but their tickets weren't properly processed, holding up the entire queue.</p>
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
                                <h2>Centralized group commerce.</h2>
                            </div>
                            <p>We engineer secure portals that professionalize how you sell and manage large-scale visits.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>B2B Booking Engines</h3>
                                <p>React-based interfaces where group leaders can input their requirements and instantly request a formal quote.</p>
                                <div className="deliverable-tags"><small>UX</small><small>Commerce</small><small>Conversion</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Digital Quoting & Invoicing</h3>
                                <p>Backend systems that generate an interactive web-proposal, allowing the client to click 'Accept' and pay the deposit via Stripe.</p>
                                <div className="deliverable-tags"><small>Fintech</small><small>Operations</small><small>Sales</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Ticketing API Hooks</h3>
                                <p>Developing middleware that automatically reserves 150 capacity slots in your core system the moment the deposit is paid.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Integration</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Educational Resource Hubs</h3>
                                <p>Secure portals where teachers can download curriculum-aligned worksheets and risk assessments before their visit.</p>
                                <div className="deliverable-tags"><small>Portals</small><small>Content</small><small>UX</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Attractions Platform</p>
                            <h2>Transforming the visitor experience.</h2>
                        </div>
                        <p>See how we helped a major regional zoo replace a clunky legacy ticketing widget with a custom React booking flow, increasing online pre-sales by 40% and drastically reducing queues at the front gate on Saturday mornings.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Visitor Tech</span>
                                <span>Ticketing Integrations</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/attractions-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Frictionless entry, higher revenue.</h2>
                                <p>We developed a secure ticketing engine connected directly to their POS system (like Gateway or Centaman). Families can now purchase time-slotted tickets, add a giraffe-feeding experience to their cart, and checkout with Apple Pay in seconds.</p>
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
                        <h2 id="faq-title">Common questions about attractions tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with complex ticketing systems like Gateway Ticketing or Centaman?</summary>
                            <p>We build API middleware that connects your custom web frontend directly to your core ticketing software. This allows us to pull live capacity, dynamic pricing, and pass validations without exposing the core database.</p>
                        </details>
                        <details>
                            <summary>Can you handle time-slotted or capacity-limited entry?</summary>
                            <p>Yes. We build interactive calendar and time-picker UIs that query the ticketing system in real-time. If a 10:00 AM slot reaches its 50-person limit, our frontend immediately grays it out to prevent overselling.</p>
                        </details>
                        <details>
                            <summary>Do you build digital tickets for Apple Wallet or Google Pay?</summary>
                            <p>Yes. Upon successful checkout, we can automatically generate dynamic QR codes and native Apple Wallet/Google Pay passes that your turnstiles or gate staff can scan instantly.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other attraction capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/attraction-and-activity-websites/"><div><small>Discovery</small><h3>Attraction Websites</h3><p>Showcase the experience.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/tickets-passes-and-booking/"><div><small>Revenue</small><h3>Ticketing & Passes</h3><p>Frictionless gate entry.</p></div><b>Explore ticketing ↗</b></a>
                        <a className="related-card" href="/services/membership-and-visitor-accounts/"><div><small>Loyalty</small><h3>Member Portals</h3><p>Self-serve passholders.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/groups-events-and-education/"><div><small>B2B Operations</small><h3>Group Bookings</h3><p>Streamline large groups.</p></div><b>Explore B2B ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your attraction <br />and visitor operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From custom ticketing engines to digital passholder wallets and live attendance dashboards, we build software that drives revenue and reduces gate friction.</p>
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
