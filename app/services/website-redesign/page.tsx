import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Website Redesign Services | Hyperlink Tech Solutions",
  description: "Website redesign services for outdated, slow or underperforming websites. Improve structure, UX, responsive design, content hierarchy, conversions and SEO migration planning.",
};

export default function WebsiteRedesign() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/website-redesign/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/website-redesign/",
          "name": "Website Redesign Services | Hyperlink Tech Solutions",
          "description": "Website redesign services for outdated, slow or underperforming websites.",
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
                    <strong>Website Redesign</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy">
                        <div className="hero-status">Structured website redesign from audit to relaunch</div>
                        <p className="eyebrow">Website redesign services</p>
                        <h1 id="service-title">Website redesigns that improve clarity, credibility and <span className="accent-text">conversion.</span></h1>
                        <p>We redesign outdated, confusing or underperforming websites for businesses that need a stronger digital presence without losing the value of their existing content, rankings or brand recognition. From structure and navigation to responsive UI, calls to action and migration planning, every redesign is shaped around what should be retained, improved and rebuilt.</p>
                        <ul className="hero-points">
                            <li>Existing website audit and redesign strategy</li>
                            <li>Improved navigation and content hierarchy</li>
                            <li>Responsive desktop and mobile UI</li>
                            <li>SEO-aware migration and relaunch planning</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get Website Redesign Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#case-study">View Redesign Example <span className="arrow">↗</span></a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Website redesign benefits">
                        <div className="proof-item">
                            <small>01 · Strategic</small>
                            <strong>The redesign begins with the business, audience, content and current website—not with visual styling alone.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Familiar</small>
                            <strong>Useful content, brand recognition and important user habits are retained where they still support the business.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Improved</small>
                            <strong>Navigation, page structure, mobile usability and conversion paths are redesigned around clearer goals.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Migration-Aware</small>
                            <strong>URLs, content, metadata and redirects are considered before the redesigned website is launched.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When the current website no longer supports the business</p>
                        <p>A website can remain technically online while becoming increasingly difficult to use, update and trust. Redesign becomes necessary when the experience no longer reflects the company or supports its current goals.</p>
                        <a className="btn" href="#included">See What Is Included <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Your website should evolve with the business—not remain trapped in an outdated structure.</h2>
                        <p>We help organisations replace weak navigation, inconsistent pages and dated interfaces with a clearer website system that supports current services, audiences and conversion goals.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The website looks outdated</h3>
                                <p>The current interface may feel old, inconsistent or visually weaker than the quality of the actual business.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Visitors struggle to find important information</h3>
                                <p>Navigation, service hierarchy and page structure may no longer reflect the company’s current offering.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>The website performs poorly on mobile</h3>
                                <p>Content, menus, buttons, forms and images may feel compressed, misaligned or difficult to use on smaller screens.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">04</span>
                                <h3>The website generates few useful enquiries</h3>
                                <p>Visitors may not understand the value proposition, proof, next step or difference between services.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">05</span>
                                <h3>Content has grown without a clear system</h3>
                                <p>New pages may have been added over time without consistent templates, internal linking or content hierarchy.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">06</span>
                                <h3>The platform is difficult to maintain</h3>
                                <p>Routine content changes, technical updates and page additions may require excessive developer effort or create new inconsistencies.</p>
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
                                <p className="eyebrow" style={{color: "#d8c2ff"}}>Complete website redesign delivery</p>
                                <h2>Everything required to transform an existing website into a clearer, more effective digital experience.</h2>
                            </div>
                            <p>The final scope is shaped around the current website, retained content, migration complexity and business priorities. The modules below show what a complete website-redesign project can include.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Audit</span>
                                <h3>Existing Website Review</h3>
                                <p>Review of current pages, navigation, content, usability, mobile behaviour, conversion paths and obvious technical issues.</p>
                                <div className="deliverable-tags"><small>UX audit</small><small>Content review</small><small>Technical observations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Strategy</span>
                                <h3>Redesign Goals and Retention Planning</h3>
                                <p>Definition of what should be retained, rewritten, removed, merged or added before redesign begins.</p>
                                <div className="deliverable-tags"><small>Retain</small><small>Improve</small><small>Replace</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Architecture</span>
                                <h3>Sitemap and Navigation Redesign</h3>
                                <p>Reorganisation of the website structure, menus, page hierarchy and internal relationships.</p>
                                <div className="deliverable-tags"><small>Sitemap</small><small>Navigation</small><small>Information architecture</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Experience</span>
                                <h3>Wireframes and Page Journeys</h3>
                                <p>Wireframes for key pages showing improved content order, calls to action and responsive behaviour.</p>
                                <div className="deliverable-tags"><small>Wireframes</small><small>User journeys</small><small>CTA flow</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>05 · Interface</span>
                                <h3>Responsive Visual Redesign</h3>
                                <p>Custom desktop and mobile designs for the agreed page templates and reusable sections.</p>
                                <div className="deliverable-tags"><small>Desktop UI</small><small>Mobile UI</small><small>Visual redesign</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>06 · System</span>
                                <h3>Reusable Components and Templates</h3>
                                <p>Shared website components for navigation, service pages, proof, forms, resources and calls to action.</p>
                                <div className="deliverable-tags"><small>Components</small><small>Templates</small><small>Consistency</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>07 · Migration</span>
                                <h3>SEO and Content Transition Planning</h3>
                                <p>Planning for URLs, redirects, metadata, internal links, content migration and launch checks.</p>
                                <div className="deliverable-tags"><small>Redirects</small><small>Metadata</small><small>Migration</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>08 · Handoff</span>
                                <h3>Developer-Ready Redesign Files</h3>
                                <p>Organised Figma files, responsive layouts, assets and implementation notes for development.</p>
                                <div className="deliverable-tags"><small>Figma</small><small>Handoff</small><small>Specifications</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured redesign example</p>
                            <h2>Show the difference between a cosmetic refresh and a strategic redesign.</h2>
                        </div>
                        <p>Replace this demonstration with one genuine website-redesign project. Explain what was not working, what was retained, what changed and what improved after relaunch.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Website Redesign visual">
                            <div className="case-visual-top">
                                <span>Website Redesign</span>
                                <span>UX Design</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Working system example" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Example Case-Study Structure</p>
                                <h2>A clearer service journey built on the strongest parts of the existing website.</h2>
                                <p>Use this area to explain how the previous website had evolved, which content remained valuable and how the new structure improved the experience.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The website contained useful content but had inconsistent page layouts, unclear service navigation and weak mobile usability.</strong></div>
                                <div className="case-fact"><small>Retained</small><strong>Important service information, established URLs, brand assets and high-performing content were preserved where appropriate.</strong></div>
                                <div className="case-fact"><small>Redesign</small><strong>The sitemap, navigation, service templates, typography, spacing, forms and responsive behaviour were redesigned as one connected system.</strong></div>
                                <div className="case-fact"><small>Migration</small><strong>Redirects, metadata, internal links and content transfer were planned before launch.</strong></div>
                                <div className="case-fact"><small>Result</small><strong>Replace this statement with a verified improvement such as clearer service discovery, better mobile engagement, stronger enquiry quality or reduced bounce on important pages.</strong></div>
                            </div>
                            <a className="btn primary" href="/work/">View All Website Redesign Projects <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">What teams ask before starting a website redesign.</h2>
                        <p>These answers clarify the scope, design process, handoff and delivery expectations before a proposal request.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>What is a website redesign?</summary>
                            <p>A website redesign is a structured improvement of an existing website’s navigation, content hierarchy, user experience, visual interface and conversion paths. It may also include technical redevelopment and migration.</p>
                        </details>
                        <details>
                            <summary>How is redesign different from a visual refresh?</summary>
                            <p>A visual refresh mainly changes colours, typography, imagery and styling. A redesign can also change the sitemap, navigation, page structure, content and user journeys.</p>
                        </details>
                        <details>
                            <summary>Should we keep our existing website content?</summary>
                            <p>Useful, accurate and high-performing content should usually be retained or improved. Weak, outdated or duplicate content may need to be rewritten, merged or removed.</p>
                        </details>
                        <details>
                            <summary>Will redesigning the website affect SEO?</summary>
                            <p>It can. URL changes, removed content, missing redirects and metadata errors can affect visibility. SEO-aware migration planning reduces avoidable risk.</p>
                        </details>
                        <details>
                            <summary>Can you redesign the website without changing the platform?</summary>
                            <p>Yes, if the current platform can support the required design and functionality. The technical environment should be reviewed first.</p>
                        </details>
                        <details>
                            <summary>Can you move the website to a new platform?</summary>
                            <p>Yes. Redesign can be combined with migration to a different CMS, framework or hosting environment.</p>
                        </details>
                        <details>
                            <summary>Do you redesign both desktop and mobile versions?</summary>
                            <p>Yes. Responsive behaviour is considered across relevant desktop, tablet and mobile screen sizes.</p>
                        </details>
                        <details>
                            <summary>Can you keep our current branding?</summary>
                            <p>Yes. Existing brand assets can be retained and translated into a stronger digital interface. Branding can also be refined where needed.</p>
                        </details>
                        <details>
                            <summary>Do you rewrite website content?</summary>
                            <p>Content restructuring and messaging guidance can be included. Complete copywriting can also be scoped separately.</p>
                        </details>
                        <details>
                            <summary>Can you improve our enquiry forms?</summary>
                            <p>Yes. Form layout, fields, validation, mobile behaviour and submission flow can be redesigned and developed.</p>
                        </details>
                        <details>
                            <summary>Do you provide website development after redesign?</summary>
                            <p>Yes. Development, CMS implementation, migration, testing and deployment can be included as one complete project.</p>
                        </details>
                        <details>
                            <summary>How do you decide which pages should be removed?</summary>
                            <p>Page decisions should consider relevance, quality, traffic, rankings, backlinks, conversion value and overlap with other content.</p>
                        </details>
                        <details>
                            <summary>How many revision rounds are included?</summary>
                            <p>The number of revision rounds should be defined in the proposal. Milestone-based reviews are recommended instead of unlimited revisions.</p>
                        </details>
                        <details>
                            <summary>How long does a website redesign take?</summary>
                            <p>The timeline depends on the page count, retained content, migration complexity, visual scope, development and approval speed.</p>
                        </details>
                        <details>
                            <summary>Can you guarantee that rankings will improve after redesign?</summary>
                            <p>No responsible agency should guarantee ranking improvements. A redesign can improve structure, content and technical quality, but rankings depend on competition, authority, content and search-engine behaviour.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Choose the right level of support before and after redesign.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/custom-website-design/"><div><small>Design</small><h3>Custom Website Design</h3><p>Create a completely new custom website design when little of the current interface should be retained.</p></div><b>Explore custom design ↗</b></a>
                        <a className="related-card" href="/services/business-website-development/"><div><small>Development</small><h3>Business Website Development</h3><p>Develop the redesigned website into a responsive, CMS-powered business platform.</p></div><b>Explore website dev ↗</b></a>
                        <a className="related-card" href="/services/frontend-development/"><div><small>Frontend</small><h3>Frontend Development</h3><p>Implement approved redesign files into reusable and responsive production components.</p></div><b>Explore frontend ↗</b></a>
                        <a className="related-card" href="/services/landing-page-design/"><div><small>Landing Pages</small><h3>Landing Page Design</h3><p>Create focused campaign pages alongside the redesigned website.</p></div><b>Explore landing pages ↗</b></a>
                        <a className="related-card" href="/services/website-maintenance/"><div><small>Maintenance</small><h3>Website Maintenance</h3><p>Receive ongoing updates, fixes and technical support after relaunch.</p></div><b>Explore website maintenance ↗</b></a>
                        <a className="related-card" href="/services/design-system-development/"><div><small>Systems</small><h3>Design System Development</h3><p>Create reusable components and interface rules for a large or complex website redesign.</p></div><b>Explore design systems ↗</b></a>
                    </div>
                </div>
            </section>

            <section className="section lead-section" id="contact">
                <div className="container lead-grid">
                    <div className="lead-copy">
                        <p className="eyebrow" style={{color: "#d8c2ff"}}>Plan a stronger version of your current website</p>
                        <h2>Tell us what is no longer working and what the redesigned website must improve.</h2>
                        <p>Share your current website, business goals, priority pages, known problems and expected timeline. We will review the website and recommend a practical redesign scope.</p>
                    </div>

                    <div className="lead-panel">
                        <h3>Tell us about your website redesign</h3>
                        <p>Provide a few details about the current website, redesign goals and migration requirements, and we will respond with the most suitable next step.</p>
                        <form className="lead-form js-lead-form" data-form-name="Website Redesign Lead"
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
                                <label htmlFor="main-message">Project details *</label>
                                <textarea id="main-message" name="message" required
                                    placeholder="Tell us about your current website URL, current platform, main redesign problems, content status, and required redesign services..."></textarea>
                            </div>
                            <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" />
                            <input type="hidden" name="service" value="Website Redesign" />
                            <input type="hidden" name="landing_page" value="/services/website-redesign/" />
                            <label className="consent">
                                <input type="checkbox" required />
                                <span>By submitting this form, you agree that Hyperlink Tech Solutions may contact you regarding your project enquiry.</span>
                            </label>
                            <button className="btn primary full" type="submit">Submit Website Redesign Enquiry <span className="arrow">↗</span></button>
                            <div className="form-status" aria-live="polite"></div>
                        </form>
                        <div className="trust-line">No obligation · Your information stays private</div>
                    </div>
                </div>
            </section>
        </main>

        <SiteFooter />
    </div>
    <a className="floating-cta" href="#contact">Get Website Redesign Proposal ↗</a>
    </>
  );
}
