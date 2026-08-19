import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/game-design-and-ux/" },
  title: "Game Design & UX/UI Services | Hyperlink Tech Solutions",
  description: "Create addictive player experiences. We provide end-to-end game design, wireframing, and UX/UI services for mobile, web, and enterprise gamification.",
};

export default function GameDesignAndUx() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/game-design-and-ux/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/game-design-and-ux/",
          "name": "Game Design & UX/UI Services | Hyperlink Tech Solutions",
          "description": "Create addictive player experiences. We provide end-to-end game design, wireframing, and UX/UI services for mobile, web, and enterprise gamification.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/game-design-and-ux/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/game-design-and-ux/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/game-design-and-ux/#service",
          "name": "Game Design & UX",
          "serviceType": "UI/UX Design & Game Mechanics",
          "url": "https://hyperlinktechsolutions.com/services/game-design-and-ux/",
          "description": "Create addictive player experiences. We provide end-to-end game design, wireframing, and UX/UI services for mobile, web, and enterprise gamification.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Game Studios, EdTech Brands, and Enterprise Brands"
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
                    <strong>Game Design & UX</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Player-Centric Mechanics</div>
                        <p className="eyebrow">Game Design & UX</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Build experiences players <em class="accent-text">can\'t put down.</em>' }}></h1>
                        <p className="hero-lead">We architect the core loops, mechanics, and visual interfaces that drive retention. From casual mobile hits to complex enterprise gamification, we design experiences that keep users engaged.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Core loop architecture and economy balancing</li>
                            <li>Wireframing, prototyping, and user journey mapping</li>
                            <li>High-fidelity UI/UX design for web, mobile, and XR</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Game Idea <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Design benefits">
                        <div className="proof-item">
                            <small>01 · High Retention</small>
                            <strong>Mechanics designed to drive D1, D7, and D30 return rates.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Frictionless UI</small>
                            <strong>Interfaces that players understand in under 3 seconds.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Economy Balance</small>
                            <strong>Mathematical modeling to ensure rewarding, sustainable progression.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Monetization</small>
                            <strong>Designing ethical, high-converting premium and ad-based models.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When Game UX is necessary</p>
                        <p>When you have a great concept, but your players are churning after 5 minutes.</p>
                        <a className="btn" href="#contact">Improve Retention <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Beautiful art cannot save a broken core gameplay loop.</h2>
                        <p>Many studios over-invest in stunning graphics while neglecting the fundamental user experience. If a player gets confused by the menu, frustrated by unfair mechanics, or bored by a lack of meaningful progression, they will uninstall the app immediately.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The Day-1 Dropoff</h3>
                                <p>Players download your app, but the onboarding is so convoluted and text-heavy that 60% of them never finish the tutorial.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Broken Economies</h3>
                                <p>Players accumulate resources too quickly, removing any incentive to make in-app purchases, or too slowly, causing them to quit in frustration.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Cluttered Interfaces</h3>
                                <p>The screen is covered in so many buttons, notifications, and menus that players can't focus on the actual gameplay experience.</p>
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
                                <h2>End-to-End Experience Design.</h2>
                            </div>
                            <p>We blend cognitive psychology with interactive design to create systems that are intuitively easy to learn, but satisfyingly difficult to master.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Systems</span>
                                <h3>Game Mechanics & Logic</h3>
                                <p>Defining the core actions, win/loss states, and mathematical pacing required to create a compelling sense of flow and achievement.</p>
                                <div className="deliverable-tags"><small>Mechanics</small><small>Flow</small><small>Logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Wireframing</span>
                                <h3>UX & Journey Mapping</h3>
                                <p>Creating low-fidelity prototypes to test navigation, menu structures, and the first-time user experience (FTUE) before writing any code.</p>
                                <div className="deliverable-tags"><small>Wireframes</small><small>FTUE</small><small>Prototyping</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Visuals</span>
                                <h3>High-Fidelity UI Design</h3>
                                <p>Crafting gorgeous, thematic interfaces—from HUDs to inventory screens—that feel native, responsive, and visually cohesive.</p>
                                <div className="deliverable-tags"><small>UI Art</small><small>HUDs</small><small>Animation</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Economics</span>
                                <h3>Monetization Strategy</h3>
                                <p>Designing balanced virtual economies, ad-placement strategies, and premium purchase flows that respect the player's experience.</p>
                                <div className="deliverable-tags"><small>Economy</small><small>IAP</small><small>Strategy</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Design Build</p>
                            <h2>Fixing the tutorial for a struggling mobile RPG.</h2>
                        </div>
                        <p>See how a UX redesign salvaged a game launch and doubled player retention.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>UX/UI Redesign</span>
                                <span>Mobile Gaming</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#1a1a1a', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ color: '#666', fontSize: '1.2rem', fontWeight: 500 }}>Interface Wireframes</div>
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Mobile Game Studio</p>
                                <h2>From 80% churn to a top-grossing hit.</h2>
                                <p>An indie studio had spent two years building a visually stunning mobile RPG, but during soft launch, 80% of players were abandoning the game within the first 10 minutes.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The tutorial was a wall of text, and the complex upgrade menus were buried under un-intuitive, confusing icons.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We completely overhauled the First-Time User Experience (FTUE), introducing contextual, "learn-by-doing" tooltips and redesigning the core HUD to prioritize primary actions.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>Day-1 retention surged from 20% to 45%. The streamlined upgrade menu led to a 300% increase in first-time in-app purchases.</strong></div>
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
                        <h2 id="faq-title">Common questions about Game UX.</h2>
                        <p>Answers covering deliverables, engines, and the design process.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>What exactly do you deliver at the end of the design phase?</summary>
                            <p>We deliver a comprehensive Game Design Document (GDD), fully interactive Figma prototypes of all menus and UI flows, and exported visual assets ready to be implemented by developers.</p>
                        </details>
                        <details>
                            <summary>Do you actually code the game, or just design it?</summary>
                            <p>This specific service covers the UX/UI and mechanics design. However, we have dedicated development teams that can take these designs and build the actual game in HTML5, Unity, or custom web frameworks.</p>
                        </details>
                        <details>
                            <summary>Can you apply game design to non-gaming apps?</summary>
                            <p>Absolutely. We frequently apply game mechanics (progression, feedback loops, rewards) to enterprise software, educational platforms, and fitness apps to drastically increase user engagement.</p>
                        </details>
                        <details>
                            <summary>How do you test if the mechanics are fun?</summary>
                            <p>We believe in "finding the fun" fast. We build rapid, low-fidelity paper prototypes or basic clickable wireframes to test the core loop with actual users before investing in expensive art and code.</p>
                        </details>
                        <details>
                            <summary>Do you handle 3D modeling and character art?</summary>
                            <p>While our core expertise is in UI (User Interface) and UX (User Experience) architecture, we partner with specialized 2D and 3D art studios to provide full-service visual production when required.</p>
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
                        <a className="related-card" href="/services/html5-game-development/"><div><small>Engineering</small><h3>HTML5 Development</h3><p>Turn your new UX designs into a playable, cross-platform reality.</p></div><b>Explore dev ↗</b></a>
                        <a className="related-card" href="/services/gamification-and-rewards/"><div><small>Strategy</small><h3>Gamification</h3><p>Apply your game mechanics to enterprise or consumer loyalty platforms.</p></div><b>Explore gamification ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Find the fun. <br />Keep the players. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to design an interface that players intuitively understand? Let's discuss your game mechanics.</p>
                        <a className="btn" href="#contact">Get a Design Audit <span className="arrow">↗</span></a>
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
