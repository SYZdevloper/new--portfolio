import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/club-team-and-competition-websites/" },
  title: "Club, Team & Competition Websites | Hyperlink Tech Solutions",
  description: "We design high-performance websites for sports clubs, national associations, and leagues that drive fan engagement and centralize competition data.",
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
                    <strong>Digital Community</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Sports Websites</div>
                        <p className="eyebrow">Digital Community</p>
                        <h1 id="service-title">The digital home for your sporting community.</h1>
                        <p className="hero-lead">We design high-performance websites for sports clubs, national associations, and leagues that drive fan engagement and centralize competition data.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Dynamic data integrations pulling live fixtures, results, and ladders from competition management software</li>
                            <li>Visually rich storytelling combining high-res match photography with engaging video content</li>
                            <li>Headless CMS setups allowing media teams to publish news and match reports instantly</li>
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
                            <small>01 · Fan Engagement</small>
                            <strong>Digital experiences that capture the passion of your team and supporters.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Live Data Speed</small>
                            <strong>Sub-second load times even when thousands check the ladder simultaneously on Saturday afternoon.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Sponsor Value</small>
                            <strong>Structure that provides premium digital real estate for key commercial partners.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Media Agility</small>
                            <strong>Empower your media team to post injury updates without developer help.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When digital fails the fans</p>
                        <p>If a parent can't find the U12 fixture on their phone, they are frustrated before they even reach the field.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Poor digital presence limits participation.</h2>
                        <p>Sports is driven by community and immediate information. If a member lands on a sluggish website with broken PDFs for fixtures or news articles from last season, the organization feels amateur. They need instant access to ladders, registrations, and club news.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Fixture Frustration</h3>
                                <p>Members bounce because they can't easily find a readable schedule for their specific grade on a mobile screen.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Data Delays</h3>
                                <p>Your website crashes on Saturday afternoons when everyone logs on to check the results.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Developer Bottlenecks</h3>
                                <p>The communications manager cannot add a new sponsor logo to the homepage without raising an IT ticket.</p>
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
                                <h2>Digital flagships for sports organizations.</h2>
                            </div>
                            <p>We build decoupled frontend experiences that prioritize live data display and media-rich storytelling.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Headless Architecture</h3>
                                <p>Next.js frontends connected to Sanity or Contentful, ensuring the site is lightning fast under heavy weekend traffic.</p>
                                <div className="deliverable-tags"><small>React</small><small>Headless</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Competition API Hooks</h3>
                                <p>Custom middleware connecting the frontend directly to systems like PlayHQ or GameDay to display live ladders.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Integration</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Dynamic Video & Media</h3>
                                <p>Optimized media delivery pipelines allowing for rich match-highlight integrations without slowing down the site.</p>
                                <div className="deliverable-tags"><small>Media</small><small>UX</small><small>Performance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Global Edge Hosting</h3>
                                <p>Deployment on Vercel to ensure your site never goes down, even during championship finals.</p>
                                <div className="deliverable-tags"><small>DevOps</small><small>Performance</small><small>Scale</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Sports Platform</p>
                            <h2>Transforming national participation.</h2>
                        </div>
                        <p>See how we helped a national sporting body replace a fragile legacy registration system with a custom React portal, reducing member onboarding time by 60% while securely handling millions in subscription revenue.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Sports Tech</span>
                                <span>Member Portals</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/sports-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>A frictionless season start.</h2>
                                <p>We developed a secure, scalable membership platform that integrates directly with Stripe for complex family billing and auto-validates working-with-children checks via third-party APIs, eliminating manual admin for club volunteers.</p>
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
                        <h2 id="faq-title">Common questions about sports tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle complex family registration discounts?</summary>
                            <p>Off-the-shelf tools fail at sports math. We build custom logic engines that automatically calculate 'third-child' discounts, prorated mid-season fees, and state-level government sports vouchers dynamically during checkout.</p>
                        </details>
                        <details>
                            <summary>Can you integrate live competition data (ladders and fixtures)?</summary>
                            <p>Yes. We build custom API middleware that connects the website frontend directly to competition management systems (like PlayHQ, GameDay, or Opta), displaying live scores and ladders without slowing down the site.</p>
                        </details>
                        <details>
                            <summary>Do you build portals for coaches and referees?</summary>
                            <p>Yes. We build secure B2B-style portals where officials can submit match reports digitally, view their assignments, and upload mandatory compliance documents (like background checks) securely.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other sports capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/club-team-and-competition-websites/"><div><small>Community</small><h3>Sports Websites</h3><p>The digital home of the sport.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/membership-and-registration/"><div><small>Growth</small><h3>Member Onboarding</h3><p>Frictionless registrations.</p></div><b>Explore registration ↗</b></a>
                        <a className="related-card" href="/services/officials-and-volunteer-portals/"><div><small>Operations</small><h3>Officials Portals</h3><p>Empower the volunteers.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/membership-and-participation-dashboards/"><div><small>Analytics</small><h3>Participation BI</h3><p>Visibility into sport health.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your sports <br />and association operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From complex membership billing engines to live competition dashboards and secure official portals, we build software that drives participation and reduces administrative burden.</p>
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
