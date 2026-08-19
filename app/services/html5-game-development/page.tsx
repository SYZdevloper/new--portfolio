import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/html5-game-development/" },
  title: "HTML5 Game Development Services | Hyperlink Tech Solutions",
  description: "Cross-platform games that run everywhere. We develop high-performance HTML5, WebGL, and Playable Ads that run instantly in the browser without app store downloads.",
};

export default function Html5GameDevelopment() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/html5-game-development/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/html5-game-development/",
          "name": "HTML5 Game Development Services | Hyperlink Tech Solutions",
          "description": "Cross-platform games that run everywhere. We develop high-performance HTML5, WebGL, and Playable Ads that run instantly in the browser without app store downloads.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/html5-game-development/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/html5-game-development/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/html5-game-development/#service",
          "name": "HTML5 Game Development",
          "serviceType": "Web Gaming & Cross-Platform Engine Engineering",
          "url": "https://hyperlinktechsolutions.com/services/html5-game-development/",
          "description": "Cross-platform games that run everywhere. We develop high-performance HTML5, WebGL, and Playable Ads that run instantly in the browser without app store downloads.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Game Publishers, Ad Networks, and Educational Brands"
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
                    <strong>HTML5 Game Development</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Instant Play Web Gaming</div>
                        <p className="eyebrow">HTML5 Game Development</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'High-performance games that <em class="accent-text">skip the app store.</em>' }}></h1>
                        <p className="hero-lead">We engineer cross-platform HTML5 and WebGL games that load instantly in any browser. Bypass the 30% app store fees and reach users directly on mobile, desktop, and within playable ads.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Phaser, PixiJS, and Three.js development</li>
                            <li>Ultra-lightweight builds optimized for 3G/4G playable ads</li>
                            <li>Multiplayer integrations via WebSockets</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Game Build <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="HTML5 benefits">
                        <div className="proof-item">
                            <small>01 · No Downloads</small>
                            <strong>Frictionless onboarding. Users click a link and play instantly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Write Once, Run Anywhere</small>
                            <strong>One codebase works seamlessly across iOS, Android, and PC.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Ad Network Ready</small>
                            <strong>Optimized 2MB builds tailored for Google and Meta playable ads.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · App Store Freedom</small>
                            <strong>Monetize directly via Stripe without paying a 30% platform tax.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When HTML5 is necessary</p>
                        <p>When the cost to acquire an app install exceeds the lifetime value of the player.</p>
                        <a className="btn" href="#contact">Explore Web Gaming <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>App stores are saturated, expensive, and introduce massive friction.</h2>
                        <p>Getting a user to click an ad, open the App Store, download a 500MB file, and create an account is incredibly difficult. For casual games, promotional marketing, and ed-tech tools, this friction kills your conversion rate before the user even sees the title screen.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>High CPIs</h3>
                                <p>Cost-Per-Install on native iOS and Android apps has skyrocketed, making it nearly impossible for casual games to turn a profit on user acquisition.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>The 30% Tax</h3>
                                <p>Apple and Google take a massive 30% cut of your in-app purchases simply for hosting the binary, drastically cutting into your revenue margins.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Porting Nightmares</h3>
                                <p>Maintaining separate codebases for iOS, Android, and Desktop requires triple the engineering resources and creates constant QA headaches.</p>
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
                                <h2>Cross-Platform Web Game Engineering.</h2>
                            </div>
                            <p>We leverage modern canvas APIs, WebGL, and lightweight JavaScript engines to deliver native-quality performance directly in the mobile browser.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · 2D Games</span>
                                <h3>Phaser & PixiJS Development</h3>
                                <p>Building highly optimized 2D games perfect for casual gaming portals, hyper-casual mechanics, and branded marketing experiences.</p>
                                <div className="deliverable-tags"><small>Phaser</small><small>PixiJS</small><small>Canvas</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · 3D Games</span>
                                <h3>Three.js & WebGL Architecture</h3>
                                <p>Harnessing the GPU in the browser to render stunning 3D environments, character models, and complex physics without native binaries.</p>
                                <div className="deliverable-tags"><small>WebGL</small><small>Three.js</small><small>Shaders</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Advertising</span>
                                <h3>Playable Ad Units</h3>
                                <p>Engineering ultra-compressed, single-file HTML/JS games (under 2MB) that run perfectly inside Facebook, Google, and TikTok ad networks.</p>
                                <div className="deliverable-tags"><small>MRAID</small><small>Optimization</small><small>Playables</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Infrastructure</span>
                                <h3>Real-Time Multiplayer</h3>
                                <p>Implementing Node.js and WebSocket backends to support synchronized, low-latency multiplayer logic, chat, and leaderboards.</p>
                                <div className="deliverable-tags"><small>WebSockets</small><small>Node.js</small><small>Multiplayer</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured HTML5 Build</p>
                            <h2>Bypassing the App Store for a leading EdTech brand.</h2>
                        </div>
                        <p>See how moving to the browser increased student access and reduced deployment friction.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Web Gaming</span>
                                <span>Phaser + Next.js</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#1a1a1a', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ color: '#666', fontSize: '1.2rem', fontWeight: 500 }}>Browser Game UI</div>
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Educational Technology Platform</p>
                                <h2>Reaching schools blocked by IT policies.</h2>
                                <p>An EdTech company had built a highly successful math game as an iOS app, but school districts with strict IT policies refused to allow students to download arbitrary apps onto school-issued iPads or Chromebooks.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>They needed the game to run perfectly on low-end school Chromebooks and iPads without requiring any installation or IT approval.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We ported the entire Unity codebase into HTML5 using Phaser, optimizing the asset pipeline to ensure the game loaded in under 3 seconds on slow school Wi-Fi.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>The web-based version bypassed IT blockers completely. The client doubled their active school contracts within 6 months, as teachers could simply share a URL.</strong></div>
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
                        <h2 id="faq-title">Common questions about HTML5 Games.</h2>
                        <p>Answers covering performance, monetization, and technology.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Are HTML5 games as fast as native apps?</summary>
                            <p>For casual, 2D, and moderate 3D games, yes. Modern browsers leverage WebGL to tap directly into the device's GPU, meaning games run at a smooth 60FPS. Extremely heavy, AAA-style 3D games are still better suited for native platforms.</p>
                        </details>
                        <details>
                            <summary>Can you monetize a web game without the App Store?</summary>
                            <p>Absolutely. In fact, you keep more of the money. We can integrate Stripe or PayPal for direct in-game purchases, or implement web-friendly ad networks (like Google AdSense for Games) to monetize traffic.</p>
                        </details>
                        <details>
                            <summary>Can an HTML5 game still be put on the App Store?</summary>
                            <p>Yes. If you decide you want app store presence later, we can "wrap" the HTML5 game using frameworks like Capacitor or Cordova, allowing you to publish it to iOS and Android as a native app using the exact same codebase.</p>
                        </details>
                        <details>
                            <summary>What engines do you use?</summary>
                            <p>We primarily use Phaser for complex 2D games, PixiJS for high-performance rendering, and Three.js for 3D experiences. We can also export from Unity to WebGL, though pure JS frameworks yield significantly faster load times.</p>
                        </details>
                        <details>
                            <summary>Can the game be played offline?</summary>
                            <p>Yes. By utilizing modern web technologies like Service Workers and Progressive Web App (PWA) architecture, the browser can cache the game assets, allowing users to play even when they lose an internet connection.</p>
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
                        <a className="related-card" href="/services/game-design-and-ux/"><div><small>Design</small><h3>Game Design & UX</h3><p>Ensure your web game is designed for maximum retention before writing code.</p></div><b>Explore design ↗</b></a>
                        <a className="related-card" href="/services/gamification-and-rewards/"><div><small>Strategy</small><h3>Gamification</h3><p>Integrate your HTML5 minigames into broader loyalty platforms.</p></div><b>Explore gamification ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Instant play. <br />Infinite reach. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build a game that bypasses the app stores and reaches users directly? Let's discuss your web game.</p>
                        <a className="btn" href="#contact">Get a Development Quote <span className="arrow">↗</span></a>
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
