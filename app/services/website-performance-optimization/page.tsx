import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  alternates: { canonical: "/services/website-performance-optimization/" },
  title: "Website Performance Optimisation Services | Hyperlink Tech Solutions",
  description: "Website performance optimisation for faster loading, improved Core Web Vitals, better frontend efficiency, optimised images, reduced script weight and smoother user experiences.",
};

export default function WebsitePerformanceOptimization() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/website-performance-optimization/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/website-performance-optimization/",
          "name": "Website Performance Optimisation Services | Hyperlink Tech Solutions",
          "description": "Website performance optimisation for faster loading, improved Core Web Vitals, better frontend efficiency, optimised images, reduced script weight and smoother user experiences.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "inLanguage": "en"
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
                    <a href="/">Home</a><span>›</span>
                    <a href="/services/">Services</a><span>›</span>
                    <strong>Website Performance Optimisation</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy">
                        <div className="hero-status">Performance improvement from technical audit to verified release</div>
                        <p className="eyebrow">Website performance optimisation services</p>
                        <h1 id="service-title">Faster websites built through focused technical improvements—not superficial <span className="accent-text">score chasing.</span></h1>
                        <p>We improve loading speed, frontend efficiency, image delivery, script usage and Core Web Vitals across important website pages. From slow business websites and ecommerce stores to React and Next.js applications, every optimisation project begins with evidence, identifies the real bottlenecks and prioritises improvements that make the website feel faster and work more reliably for users.</p>
                        <ul className="hero-points">
                            <li>Core Web Vitals and loading analysis</li>
                            <li>Image, font and asset optimisation</li>
                            <li>JavaScript and third-party script review</li>
                            <li>Frontend, caching and delivery improvements</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get Performance Optimisation Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#included">View Performance Audit Process <span className="arrow">↗</span></a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Performance benefits">
                        <div className="proof-item">
                            <small>01 · Evidence-Led</small>
                            <strong>Optimisation begins with measured bottlenecks, not assumptions or generic recommendations.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Prioritised</small>
                            <strong>The highest-impact improvements are addressed before low-value technical cleanup.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · User-Focused</small>
                            <strong>The goal is a faster, more stable experience across real devices—not only a laboratory score.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Verifiable</small>
                            <strong>Important pages are measured before and after implementation so the effect of changes can be reviewed.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When slow loading starts affecting usability and growth</p>
                        <p>A website can look polished while still feeling slow because of oversized images, excessive JavaScript, weak caching, heavy third-party scripts or inefficient rendering.</p>
                        <a className="btn" href="#included">See What Is Included <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Your website should feel responsive from the first interaction—not make visitors wait for the interface to catch up.</h2>
                        <p>We help businesses identify and fix the technical issues that make important pages slower, less stable or harder to use.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Important pages load slowly</h3>
                                <p>Large assets, backend delays or unnecessary requests may prevent the first useful content from appearing quickly.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Mobile performance is weak</h3>
                                <p>Pages that feel acceptable on desktop Wi-Fi may become frustrating on mobile devices and slower networks.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Layouts shift while loading</h3>
                                <p>Images, fonts, banners and dynamic components may move unexpectedly and disrupt the user experience.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">04</span>
                                <h3>Buttons and interactions respond slowly</h3>
                                <p>Heavy JavaScript, long tasks and inefficient rendering can delay clicks, menus, forms and other interactions.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">05</span>
                                <h3>Third-party scripts create excessive weight</h3>
                                <p>Analytics, chat, advertising, video and marketing tools may compete with essential page content.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">06</span>
                                <h3>Performance scores change without clear explanation</h3>
                                <p>A website may receive inconsistent results because testing conditions, page states and external dependencies are not understood.</p>
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
                                <p className="eyebrow" style={{color: "#d8c2ff"}}>Complete performance optimisation delivery</p>
                                <h2>Everything required to diagnose, improve and verify website performance.</h2>
                            </div>
                            <p>The final scope depends on your platform, hosting, frontend architecture, page types and technical constraints. The modules below show what a complete performance project can include.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Audit</span>
                                <h3>Performance and Technical Review</h3>
                                <p>Measurement of important pages using suitable tools, browser diagnostics and available real-user data.</p>
                                <div className="deliverable-tags"><small>Audit</small><small>Measurements</small><small>Bottlenecks</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Priorities</span>
                                <h3>Performance Improvement Roadmap</h3>
                                <p>Classification of issues by user impact, implementation effort, technical risk and likely benefit.</p>
                                <div className="deliverable-tags"><small>Roadmap</small><small>Impact</small><small>Priorities</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Media</span>
                                <h3>Image and Video Optimisation</h3>
                                <p>Improvement of image dimensions, formats, compression, responsive delivery and loading behaviour.</p>
                                <div className="deliverable-tags"><small>Images</small><small>Video</small><small>Media delivery</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Frontend</span>
                                <h3>CSS and JavaScript Optimisation</h3>
                                <p>Review of bundles, unused code, rendering behaviour, long tasks and unnecessary client-side work.</p>
                                <div className="deliverable-tags"><small>JavaScript</small><small>CSS</small><small>Rendering</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>05 · Delivery</span>
                                <h3>Caching and Asset Strategy</h3>
                                <p>Review of browser caching, CDN behaviour, static assets and content-delivery settings where supported.</p>
                                <div className="deliverable-tags"><small>Caching</small><small>CDN</small><small>Assets</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>06 · Fonts</span>
                                <h3>Typography Loading Improvements</h3>
                                <p>Optimisation of font files, weights, preload behaviour, fallbacks and rendering impact.</p>
                                <div className="deliverable-tags"><small>Fonts</small><small>Preload</small><small>Rendering</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>07 · Scripts</span>
                                <h3>Third-Party Resource Review</h3>
                                <p>Evaluation of analytics, advertising, chat, embeds and other scripts that affect loading or interaction.</p>
                                <div className="deliverable-tags"><small>Third-party scripts</small><small>Tags</small><small>Integrations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>08 · Stability</span>
                                <h3>Layout and Interaction Improvements</h3>
                                <p>Reduction of layout shift, delayed interaction and unstable component behaviour.</p>
                                <div className="deliverable-tags"><small>CLS</small><small>Responsiveness</small><small>Stability</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>09 · Validation</span>
                                <h3>Before-and-After Testing</h3>
                                <p>Repeatable testing across important pages, devices and scenarios after approved changes.</p>
                                <div className="deliverable-tags"><small>Verification</small><small>Comparison</small><small>QA</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>10 · Handover</span>
                                <h3>Findings and Maintenance Guidance</h3>
                                <p>Documentation of completed work, remaining limitations and recommended ongoing practices.</p>
                                <div className="deliverable-tags"><small>Report</small><small>Guidance</small><small>Handover</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured optimization example</p>
                            <h2>Sub-second load times for a luxury booking experience.</h2>
                        </div>
                        <p>See how our performance optimization services helped PresRide eliminate render-blocking resources, accelerate their booking flow, and dramatically improve their Core Web Vitals on mobile devices.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Optimisation visual">
                            <div className="case-visual-top">
                                <span>Performance Optimization</span>
                                <span>Core Web Vitals + Mobile Speed</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/preshride-responsive-mockup.webp" alt="PresRide Performance Optimization" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">PresRide</p>
                                <h2>A lightning-fast mobile experience for high-intent traffic.</h2>
                                <p>PresRide's premium chauffeur services rely heavily on mobile bookings. However, their visually rich landing pages were causing significant delays and layout shifts for users on cellular networks, leading to a high bounce rate before the booking widget could even initialize.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The booking landing page suffered from unoptimized hero imagery, render-blocking typography scripts, and heavy third-party tracking tags that delayed the core interactive elements.</strong></div>
                                <div className="case-fact"><small>Improvements</small><strong>We audited the page and implemented modern WebP conversion, deferred non-critical JavaScript, preloaded critical font assets, and stabilized layout dimensions to eliminate Cumulative Layout Shift (CLS).</strong></div>
                                <div className="case-fact"><small>Result</small><strong>Reduced Largest Contentful Paint (LCP) from 4.2s to 1.1s, completely eliminated layout shifts, and significantly increased the conversion rate for mobile users engaging with the booking widget.</strong></div>
                            </div>
                            <a className="btn primary" href="/work/">View All Performance Projects <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">What teams ask before starting performance optimisation.</h2>
                        <p>These answers clarify the scope, technical approach, risk factors and delivery expectations before starting an optimisation project.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>What is website performance optimisation?</summary>
                            <p>Website performance optimisation is the process of reducing loading delay, layout instability, interaction delay and unnecessary resource usage across important pages.</p>
                        </details>
                        <details>
                            <summary>What are Core Web Vitals?</summary>
                            <p>Core Web Vitals are user-experience metrics focused on loading, interaction responsiveness and visual stability.</p>
                        </details>
                        <details>
                            <summary>Can you guarantee a PageSpeed score of 100?</summary>
                            <p>No responsible provider should guarantee a perfect score. Results depend on hosting, third-party scripts, content, testing conditions, backend behaviour and platform constraints.</p>
                        </details>
                        <details>
                            <summary>Is a high PageSpeed score the same as a fast website?</summary>
                            <p>Not always. Laboratory scores are useful diagnostics, but real-user experience, page type, device conditions and business functionality also matter.</p>
                        </details>
                        <details>
                            <summary>Can you optimise a Next.js website?</summary>
                            <p>Yes. We can review rendering strategy, client-side JavaScript, images, fonts, bundles, data loading and third-party scripts.</p>
                        </details>
                        <details>
                            <summary>Can you optimise a WordPress website?</summary>
                            <p>Yes. WordPress optimisation can include themes, plugins, images, caching, frontend scripts and hosting observations.</p>
                        </details>
                        <details>
                            <summary>Can you improve mobile performance?</summary>
                            <p>Yes. Mobile optimisation is usually a major priority because slower devices and networks reveal bottlenecks more clearly.</p>
                        </details>
                        <details>
                            <summary>Will optimisation change the website design?</summary>
                            <p>Most changes preserve the approved design. Where an effect, video or asset creates significant performance cost, we may recommend a lighter alternative.</p>
                        </details>
                        <details>
                            <summary>Can you optimise third-party scripts?</summary>
                            <p>We can review their loading strategy, timing and necessity. We cannot change the internal code of external services.</p>
                        </details>
                        <details>
                            <summary>Can you reduce image size without damaging quality?</summary>
                            <p>Yes. Images can usually be resized, compressed and converted while preserving suitable visual quality.</p>
                        </details>
                        <details>
                            <summary>Can you improve server response time?</summary>
                            <p>Some server-side improvements may be possible, but hosting, backend queries and third-party APIs may require separate infrastructure or backend work.</p>
                        </details>
                        <details>
                            <summary>How do you measure improvement?</summary>
                            <p>We compare repeatable before-and-after tests, technical diagnostics and available real-user data across agreed important pages.</p>
                        </details>
                        <details>
                            <summary>How long does performance optimisation take?</summary>
                            <p>The timeline depends on the platform, number of pages, technical access, severity of issues and required development work.</p>
                        </details>
                        <details>
                            <summary>Can performance decline again after optimisation?</summary>
                            <p>Yes. New content, scripts, plugins, campaigns and design changes can introduce regressions. Ongoing monitoring helps identify them.</p>
                        </details>
                        <details>
                            <summary>Will performance optimisation improve SEO?</summary>
                            <p>Better performance can improve user experience and technical quality, but no ranking improvement should be guaranteed.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Improve the website beyond loading speed when broader changes are necessary.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/website-maintenance/"><div><small>Maintenance</small><h3>Website Maintenance</h3><p>Keep performance, scripts, plugins and website health under ongoing review.</p></div><b>Explore website maintenance ↗</b></a>
                        <a className="related-card" href="/services/frontend-development/"><div><small>Frontend</small><h3>Frontend Development</h3><p>Implement deeper component, bundle and rendering improvements.</p></div><b>Explore frontend development ↗</b></a>
                        <a className="related-card" href="/services/website-migration/"><div><small>Migration</small><h3>Website Migration</h3><p>Move from a limiting platform or hosting environment to a stronger technical foundation.</p></div><b>Explore website migration ↗</b></a>
                    </div>
                </div>
            </section>

            <section className="section lead-section" id="contact">
                <div className="container lead-grid">
                    <div className="lead-copy">
                        <p className="eyebrow" style={{color: "#d8c2ff"}}>Make your website feel faster</p>
                        <h2>Tell us which pages are slow, which platform you use and what users are experiencing.</h2>
                        <p>Share your website URL, current performance concerns, important pages, available reports and expected timeline. We will review the website and recommend a practical audit or optimisation scope.</p>
                    </div>

                    <div className="lead-panel">
                        <h3>Tell us about your performance issues</h3>
                        <p>Provide a few details about your platform and the loading problems you want to fix.</p>
                        <form className="lead-form js-lead-form" data-form-name="Performance Optimisation Lead"
                            action="/api/leads" method="post" noValidate>
                            <div className="field-row">
                                <div className="field">
                                    <label htmlFor="main-name">Full name *</label>
                                    <input id="main-name" name="name" required autoComplete="name" placeholder="Your full name" />
                                </div>
                                <div className="field">
                                    <label htmlFor="main-company">Company</label>
                                    <input id="main-company" name="company" autoComplete="organization" placeholder="Company name" />
                                </div>
                            </div>
                            <div className="field-row">
                                <div className="field">
                                    <label htmlFor="main-email">Work email *</label>
                                    <input id="main-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
                                </div>
                                <div className="field">
                                    <label htmlFor="main-phone">Phone or WhatsApp</label>
                                    <input id="main-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98XXXXXX" />
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="main-message">Performance details *</label>
                                <textarea id="main-message" name="message" required
                                    placeholder="Tell us about the website URL, platform, important pages, and the main performance problem..."></textarea>
                            </div>
                            <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" />
                            <input type="hidden" name="service" value="Website Performance Optimisation" />
                            <input type="hidden" name="landing_page" value="/services/website-performance-optimization/" />
                            <label className="consent">
                                <input type="checkbox" required />
                                <span>By submitting this form, you agree that Hyperlink Tech Solutions may contact you regarding your performance enquiry.</span>
                            </label>
                            <button className="btn primary full" type="submit">Submit Performance Optimisation Enquiry <span className="arrow">↗</span></button>
                            <div className="form-status" aria-live="polite"></div>
                        </form>
                        <div className="trust-line">No obligation · Your information stays private</div>
                    </div>
                </div>
            </section>
        </main>

        <SiteFooter />
    </div>
    <a className="floating-cta" href="#contact">Get Performance Optimisation Proposal ↗</a>
    </>
  );
}
