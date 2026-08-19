import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/brand-menu-and-location-websites/" },
  title: "Brand, Menu & Location Websites | Hyperlink Tech Solutions",
  description: "We design high-performance restaurant websites that capture the dining experience visually while making it effortless for guests to find locations, view live menus, and book a table.",
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
                    <strong>Brand Discovery</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Restaurant Websites</div>
                        <p className="eyebrow">Brand Discovery</p>
                        <h1 id="service-title">Drive foot traffic with digital appetite.</h1>
                        <p className="hero-lead">We design high-performance restaurant websites that capture the dining experience visually while making it effortless for guests to find locations, view live menus, and book a table.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Visually rich storytelling utilizing ambient video and high-resolution food photography</li>
                            <li>Dynamic, location-aware menus that update instantly based on the nearest physical restaurant</li>
                            <li>Headless CMS setups allowing marketing to launch seasonal specials without developer help</li>
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
                            <small>01 · Brand Elevation</small>
                            <strong>Digital experiences that match the ambiance of your physical dining room.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Unbreakable Speed</small>
                            <strong>Sub-second load times even with massive video headers.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Local SEO</small>
                            <strong>Structure that ensures your specific locations rank #1 in local map searches.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Menu Management</small>
                            <strong>Eliminate PDFs; build digital menus that actually render correctly on mobile.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When digital fails physical</p>
                        <p>If a guest can't read the menu on their phone, they will dine somewhere else.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Poor digital experiences kill Friday night reservations.</h2>
                        <p>Dining out is a highly visual and immediate decision. If a prospective guest lands on a sluggish website with an outdated PDF menu that they have to pinch-to-zoom to read, the appetite vanishes. They will bounce and book with a competitor whose digital presence feels more modern and trustworthy.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The PDF Menu Problem</h3>
                                <p>Your menu is a massive PDF file that takes 10 seconds to load and is impossible to read on a mobile phone.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Location Confusion</h3>
                                <p>A guest books a table or places an order for the downtown location when they actually meant to book the suburban one.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Developer Bottlenecks</h3>
                                <p>Marketing is unable to add the new 'Mother's Day Special' to the homepage without waiting weeks for IT support.</p>
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
                                <h2>Digital flagships for hospitality brands.</h2>
                            </div>
                            <p>We build decoupled frontend experiences that prioritize mouth-watering visuals without sacrificing speed.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Headless Architecture</h3>
                                <p>Next.js frontends connected to Sanity or Contentful, separating the visual experience from the backend reservation data.</p>
                                <div className="deliverable-tags"><small>React</small><small>Headless</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Dynamic Digital Menus</h3>
                                <p>Building HTML/React based menus that pull live data from the CMS, ensuring perfect mobile rendering and SEO indexing.</p>
                                <div className="deliverable-tags"><small>CMS</small><small>UX</small><small>Mobile</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Geolocation & Routing</h3>
                                <p>Implementing logic that detects the user's location and automatically serves the menu, hours, and booking link for the nearest restaurant.</p>
                                <div className="deliverable-tags"><small>Maps</small><small>Logic</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Global Edge Hosting</h3>
                                <p>Deployment on Vercel to ensure your site loads instantly, capturing hungry users on mobile connections.</p>
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
                            <p className="eyebrow">Featured F&B Platform</p>
                            <h2>Owning the digital dining experience.</h2>
                        </div>
                        <p>See how we helped a national restaurant group migrate off third-party delivery apps by building a custom ordering engine that integrated directly with their Toast POS, increasing direct revenue and saving millions in commissions.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Restaurant Tech</span>
                                <span>POS Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/restaurant-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Direct revenue without the fees.</h2>
                                <p>We developed a custom frontend ordering app that syncs menus, modifiers, and 86'd items live from the POS. When a guest orders, the ticket fires straight to the kitchen display system (KDS) exactly as if they were sitting in the dining room.</p>
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
                        <h2 id="faq-title">Common questions about restaurant tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate online ordering with our POS?</summary>
                            <p>We build API middleware that connects the custom web frontend directly to modern POS systems like Toast, Square, or Lightspeed. This ensures that when an item is marked 'sold out' in the kitchen, it instantly disappears from the website.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with reservation systems like SevenRooms or Resy?</summary>
                            <p>Yes. Instead of using generic widgets that take users off-brand, we can build custom booking forms using the APIs of major reservation platforms. This keeps the user on your domain and improves conversion.</p>
                        </details>
                        <details>
                            <summary>How do you manage menus for a group with 20 different locations?</summary>
                            <p>We implement a headless CMS (like Sanity) connected to a geolocation engine. The system automatically detects the user's nearest restaurant and loads the specific menu and pricing for that location, preventing 'wrong store' orders.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other restaurant capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/brand-menu-and-location-websites/"><div><small>Discovery</small><h3>Brand & Menus</h3><p>Drive foot traffic digitally.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/reservations-and-waitlists/"><div><small>Acquisition</small><h3>Reservations</h3><p>Maximize table utilization.</p></div><b>Explore bookings ↗</b></a>
                        <a className="related-card" href="/services/ordering-and-delivery/"><div><small>Revenue</small><h3>Direct Ordering</h3><p>Own off-premise dining.</p></div><b>Explore ordering ↗</b></a>
                        <a className="related-card" href="/services/accounts-loyalty-and-catering/"><div><small>Retention</small><h3>Loyalty & Catering</h3><p>Turn diners into regulars.</p></div><b>Explore loyalty ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your restaurant <br />and hospitality operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From immersive brand sites to commission-free POS ordering engines and unified loyalty portals, we build software that drives direct revenue for multi-location groups.</p>
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
