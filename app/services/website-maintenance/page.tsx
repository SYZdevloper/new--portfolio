import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Website Maintenance Services | Hyperlink Tech Solutions",
  description: "Website maintenance services for updates, bug fixes, backups, security checks, performance improvements and ongoing technical support. Keep your website reliable, secure and up to date.",
};

export default function WebsiteMaintenance() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/website-maintenance/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/website-maintenance/",
          "name": "Website Maintenance Services | Hyperlink Tech Solutions",
          "description": "Website maintenance services for updates, bug fixes, backups, security checks, performance improvements and ongoing technical support.",
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
                    <strong>Website Maintenance</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy">
                        <div className="hero-status">Ongoing website support from routine updates to technical improvements</div>
                        <p className="eyebrow">Website maintenance services</p>
                        <h1 id="service-title">Website maintenance that keeps your site reliable, secure and ready to support your <span className="accent-text">business.</span></h1>
                        <p>We provide ongoing website maintenance for business websites, ecommerce platforms, landing pages and custom web applications. From content updates and bug fixes to backups, security checks and performance improvements, we help keep your website working properly while reducing the risk of unexpected issues and outdated content.</p>
                        <ul className="hero-points">
                            <li>Routine content and technical updates</li>
                            <li>Bug fixing and issue resolution</li>
                            <li>Backup and security checks</li>
                            <li>Performance and reliability improvements</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get Website Maintenance Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#included">View Maintenance Coverage <span className="arrow">↗</span></a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Maintenance benefits">
                        <div className="proof-item">
                            <small>01 · Reliable</small>
                            <strong>Routine checks and timely issue resolution help keep important pages, forms and features working.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Updated</small>
                            <strong>Content, plugins, dependencies and agreed website areas can be kept current through a managed process.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Protected</small>
                            <strong>Backups, update reviews and basic security checks reduce avoidable operational risk.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Supported</small>
                            <strong>Your team has a clear channel for reporting website issues and requesting approved changes.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When a live website still needs regular attention</p>
                        <p>Launching a website is not the end of the work. Content changes, browser updates, third-party tools, security patches and new business requirements continue after launch.</p>
                        <a className="btn" href="#included">See What Is Included <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Your website should remain useful after launch—not slowly become outdated, unreliable or difficult to manage.</h2>
                        <p>We help businesses maintain live websites through structured updates, technical support and ongoing improvements.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Content becomes outdated</h3>
                                <p>Service information, team details, pricing, contact information and important pages may no longer reflect the current business.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Forms or features stop working</h3>
                                <p>Third-party integrations, email delivery, payment tools or scripts may fail after platform or dependency changes.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Website performance declines</h3>
                                <p>Large images, accumulated scripts, plugin issues and unoptimised changes can gradually affect loading speed.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">04</span>
                                <h3>Security updates are delayed</h3>
                                <p>Outdated software, plugins or libraries can create avoidable vulnerabilities and compatibility problems.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">05</span>
                                <h3>Small bugs are left unresolved</h3>
                                <p>Broken links, layout issues, mobile problems and visual errors can reduce trust and usability.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">06</span>
                                <h3>Every update depends on an emergency request</h3>
                                <p>Without an ongoing process, even routine changes become rushed, delayed or unnecessarily expensive.</p>
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
                                <p className="eyebrow" style={{color: "#d8c2ff"}}>Complete website maintenance coverage</p>
                                <h2>Practical support for keeping your website current, stable and useful.</h2>
                            </div>
                            <p>The final maintenance scope depends on your platform, hosting, website complexity and support needs. The modules below show what an ongoing maintenance arrangement can include.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Updates</span>
                                <h3>Content and Website Changes</h3>
                                <p>Approved updates to text, images, pages, services, banners, links and other agreed website content.</p>
                                <div className="deliverable-tags"><small>Content updates</small><small>Pages</small><small>Media</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Fixes</span>
                                <h3>Bug and Layout Resolution</h3>
                                <p>Investigation and repair of broken links, visual issues, responsive problems, form errors and minor functionality defects.</p>
                                <div className="deliverable-tags"><small>Bug fixes</small><small>Layout issues</small><small>Forms</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Platform</span>
                                <h3>Plugin, Theme and Dependency Updates</h3>
                                <p>Review and application of suitable updates to website software, themes, plugins, packages or dependencies.</p>
                                <div className="deliverable-tags"><small>Plugins</small><small>Dependencies</small><small>Compatibility</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Backups</span>
                                <h3>Website and Data Protection</h3>
                                <p>Scheduled backup checks for website files, databases and agreed content where supported by the hosting environment.</p>
                                <div className="deliverable-tags"><small>Backups</small><small>Recovery</small><small>Data protection</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>05 · Security</span>
                                <h3>Basic Website Security Checks</h3>
                                <p>Review of obvious issues, outdated software, suspicious activity and agreed security-related settings.</p>
                                <div className="deliverable-tags"><small>Security checks</small><small>Updates</small><small>Monitoring</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>06 · Performance</span>
                                <h3>Loading and Technical Improvements</h3>
                                <p>Image optimisation, script review, caching checks and other agreed performance improvements.</p>
                                <div className="deliverable-tags"><small>Speed</small><small>Images</small><small>Optimisation</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>07 · Monitoring</span>
                                <h3>Availability and Issue Awareness</h3>
                                <p>Basic checks for uptime, broken pages, form delivery or other agreed website-health indicators.</p>
                                <div className="deliverable-tags"><small>Uptime</small><small>Forms</small><small>Website health</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>08 · Support</span>
                                <h3>Managed Change Requests</h3>
                                <p>A clear process for reporting issues, requesting updates and prioritising approved website work.</p>
                                <div className="deliverable-tags"><small>Support channel</small><small>Priorities</small><small>Response process</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured maintenance example</p>
                            <h2>Sustained performance for a growing content platform.</h2>
                        </div>
                        <p>See how our ongoing website maintenance services help SoulHome ensure secure access for users, seamless resource delivery, and continuous platform stability as their paid content library expands.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Maintenance visual">
                            <div className="case-visual-top">
                                <span>Content Platform Maintenance</span>
                                <span>Security + Updates + Support</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/7d2de5e8-3b37-4208-958d-a51bc02499e8.webp" alt="SoulHome Maintenance" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">SoulHome Support</p>
                                <h2>Reliable operations and priority technical support.</h2>
                                <p>After building the initial automated delivery system for SoulHome, we transitioned into an active maintenance partnership to manage platform health, troubleshoot integrations, and support the creator in scaling their content offerings without technical friction.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The creator needed to focus exclusively on developing new spiritual and inner-work resources rather than managing server health, integration uptime, and platform security.</strong></div>
                                <div className="case-fact"><small>Maintenance Work</small><strong>Continuous monitoring of Calendly webhooks, magic-link email delivery checks, periodic database optimizations, regular security patching, and on-demand support for new content structures.</strong></div>
                                <div className="case-fact"><small>Result</small><strong>Delivered 99.9% uptime for paid resource access, prevented integration failures through proactive testing, and gave the creator complete peace of mind to scale their business.</strong></div>
                            </div>
                            <a className="btn primary" href="/work/">View All Maintenance Projects <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">What teams ask before starting website maintenance.</h2>
                        <p>These answers clarify the scope, updates, platforms and delivery process before a proposal request.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>What does website maintenance include?</summary>
                            <p>Website maintenance can include content updates, bug fixes, backups, plugin or dependency updates, form checks, performance improvements and ongoing technical support.</p>
                        </details>
                        <details>
                            <summary>Why does a website need ongoing maintenance?</summary>
                            <p>Websites rely on hosting, software, browsers, third-party services and changing business content. Regular maintenance helps reduce outdated information, broken functionality and avoidable technical issues.</p>
                        </details>
                        <details>
                            <summary>Can you maintain a website built by another company?</summary>
                            <p>Yes. We can review an existing website before accepting maintenance responsibility. Feasibility depends on the platform, code quality, access and current condition.</p>
                        </details>
                        <details>
                            <summary>Do you maintain WordPress websites?</summary>
                            <p>Yes. WordPress maintenance can include core, plugin and theme update reviews, backups, bug fixes, content changes and security-related checks.</p>
                        </details>
                        <details>
                            <summary>Can you maintain custom-coded websites?</summary>
                            <p>Yes, provided the codebase, repository, hosting and technical environment can be reviewed and supported safely.</p>
                        </details>
                        <details>
                            <summary>Do you guarantee that the website will never go down?</summary>
                            <p>No. Uptime also depends on hosting, DNS, third-party systems, internet infrastructure and external services. Maintenance can reduce risk and improve response, but cannot guarantee uninterrupted availability.</p>
                        </details>
                        <details>
                            <summary>Can you fix urgent website issues?</summary>
                            <p>Urgent support may be available depending on the maintenance agreement and current workload. Critical-response expectations should be defined before support begins.</p>
                        </details>
                        <details>
                            <summary>Are content updates included?</summary>
                            <p>Approved text, image, page and service updates can be included according to the maintenance plan and allocated time.</p>
                        </details>
                        <details>
                            <summary>Do you provide website backups?</summary>
                            <p>Backup verification and configuration support can be included where the hosting or platform supports suitable backup tools.</p>
                        </details>
                        <details>
                            <summary>Can you improve website speed?</summary>
                            <p>Yes. We can review images, scripts, caching, frontend code and obvious performance issues. Results also depend on hosting, backend performance and third-party tools.</p>
                        </details>
                        <details>
                            <summary>Do you monitor website security?</summary>
                            <p>Basic security checks can be included. Advanced security monitoring, penetration testing, malware forensics and compliance work should be scoped separately.</p>
                        </details>
                        <details>
                            <summary>Can you add new features during maintenance?</summary>
                            <p>Small improvements may fit within an ongoing allocation. Larger features should be treated as separate development projects with defined scope and testing.</p>
                        </details>
                        <details>
                            <summary>How quickly are maintenance requests completed?</summary>
                            <p>Timing depends on request priority, complexity and the selected support plan. Response expectations should be stated clearly in the agreement.</p>
                        </details>
                        <details>
                            <summary>What access do you need?</summary>
                            <p>Access may include the CMS, code repository, hosting, domain, analytics, forms, database or third-party services relevant to the requested work.</p>
                        </details>
                        <details>
                            <summary>Do you provide monthly maintenance reports?</summary>
                            <p>Yes. Maintenance reports can include completed updates, issues found, unresolved items and recommended improvements.</p>
                        </details>
                        <details>
                            <summary>Can I cancel the maintenance plan?</summary>
                            <p>Cancellation terms, notice periods and unused time should be stated clearly in the maintenance agreement.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Improve or rebuild the parts of your website that maintenance alone cannot solve.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/business-website-development/"><div><small>Websites</small><h3>Business Website Development</h3><p>Replace an outdated or fragile website with a new responsive, CMS-powered platform.</p></div><b>Explore website dev ↗</b></a>
                        <a className="related-card" href="/services/website-redesign/"><div><small>Redesign</small><h3>Website Redesign</h3><p>Improve the structure, appearance and user experience of an existing website.</p></div><b>Explore redesign ↗</b></a>
                        <a className="related-card" href="/services/frontend-development/"><div><small>Frontend</small><h3>Frontend Development</h3><p>Implement responsive interface fixes, new sections and approved designs.</p></div><b>Explore frontend ↗</b></a>
                        <a className="related-card" href="/services/landing-page-design/"><div><small>Landing Pages</small><h3>Landing Page Design</h3><p>Create focused pages for campaigns, lead generation and specific offers.</p></div><b>Explore landing pages ↗</b></a>
                        <a className="related-card" href="/services/ecommerce-development/"><div><small>Ecommerce</small><h3>Ecommerce Development</h3><p>Build or improve online-store functionality, product journeys and checkout experiences.</p></div><b>Explore ecommerce ↗</b></a>
                        <a className="related-card" href="/services/custom-web-app-development/"><div><small>Web Apps</small><h3>Custom Web Application</h3><p>Develop custom features or workflows that go beyond standard website maintenance.</p></div><b>Explore web apps ↗</b></a>
                    </div>
                </div>
            </section>

            <section className="section lead-section" id="contact">
                <div className="container lead-grid">
                    <div className="lead-copy">
                        <p className="eyebrow" style={{color: "#d8c2ff"}}>Keep your website working properly</p>
                        <h2>Tell us what needs regular attention, fixing or improvement.</h2>
                        <p>Share your website URL, platform, current issues, update frequency and support expectations. We will review the website and recommend a practical maintenance plan.</p>
                    </div>

                    <div className="lead-panel">
                        <h3>Tell us about your website maintenance needs</h3>
                        <p>Provide a few details about the website, platform and required support, and we will respond with the most suitable next step.</p>
                        <form className="lead-form js-lead-form" data-form-name="Website Maintenance Lead"
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
                                <label htmlFor="main-message">Website details *</label>
                                <textarea id="main-message" name="message" required
                                    placeholder="Tell us about the website URL, platform, current issues, update frequency, and expected maintenance services..."></textarea>
                            </div>
                            <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" />
                            <input type="hidden" name="service" value="Website Maintenance" />
                            <input type="hidden" name="landing_page" value="/services/website-maintenance/" />
                            <label className="consent">
                                <input type="checkbox" required />
                                <span>By submitting this form, you agree that Hyperlink Tech Solutions may contact you regarding your maintenance enquiry.</span>
                            </label>
                            <button className="btn primary full" type="submit">Submit Website Maintenance Enquiry <span className="arrow">↗</span></button>
                            <div className="form-status" aria-live="polite"></div>
                        </form>
                        <div className="trust-line">No obligation · Your information stays private</div>
                    </div>
                </div>
            </section>
        </main>

        <SiteFooter />
    </div>
    <a className="floating-cta" href="#contact">Get Website Maintenance Proposal ↗</a>
    </>
  );
}
