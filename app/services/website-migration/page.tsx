import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import ServiceHeader from "@/components/services/ServiceHeader";
import ServiceFooter from "@/components/services/ServiceFooter";

export const metadata: Metadata = {
  title: "Website Migration Services | Hyperlink Tech Solutions",
  description: "Website migration services for moving websites, content, URLs, CMS data and integrations between platforms while protecting functionality, SEO value and business continuity.",
};

export default function WebsiteMigration() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/website-migration/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/website-migration/",
          "name": "Website Migration Services | Hyperlink Tech Solutions",
          "description": "Website migration services for moving websites, content, URLs, CMS data and integrations between platforms while protecting functionality, SEO value and business continuity.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "inLanguage": "en"
        }
      ]
    }
    ` }} />
      
    <ServiceInteractions />
      <div className="service-page-wrapper">
        <ServiceHeader />

        <main id="top">
            <section className="hero service-hero" aria-labelledby="service-title">
                <nav className="service-breadcrumb" aria-label="Breadcrumb">
                    <a href="/">Home</a><span>›</span>
                    <a href="/services/">Services</a><span>›</span>
                    <strong>Website Migration</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy">
                        <div className="hero-status">Controlled website migration from audit to relaunch</div>
                        <p className="eyebrow">Website migration services</p>
                        <h1 id="service-title">Website migrations planned to protect content, functionality and <span className="accent-text">search visibility.</span></h1>
                        <p>We migrate websites, content, URLs, media, forms and integrations between platforms, hosting environments and domains through a structured process. From WordPress and legacy CMS migrations to Next.js, headless platforms or new hosting infrastructure, every migration is planned around continuity, redirects, technical compatibility and controlled launch.</p>
                        <ul className="hero-points">
                            <li>Platform, hosting and domain migration</li>
                            <li>Content, media and data transfer</li>
                            <li>URL mapping and redirect planning</li>
                            <li>Pre-launch testing and post-launch monitoring</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get Website Migration Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#included">View Migration Process <span className="arrow">↗</span></a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Website migration benefits">
                        <div className="proof-item">
                            <small>01 · Planned</small>
                            <strong>The migration begins with a complete inventory of content, URLs, functionality, integrations and technical dependencies.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Controlled</small>
                            <strong>Important pages, forms, assets and business workflows are tested before the final switch.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · SEO-Aware</small>
                            <strong>URLs, metadata, internal links, canonicals and redirects are reviewed to reduce avoidable search loss.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Verifiable</small>
                            <strong>The migrated website is checked before and after launch for content, functionality, tracking and technical issues.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When the current platform starts limiting the website</p>
                        <p>A website may need to move because of performance, maintenance, scalability, hosting, security or content-management limitations.</p>
                        <a className="btn" href="#included">See What Is Included <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Your website should move forward without losing the value already built into it.</h2>
                        <p>We help businesses migrate websites carefully so that important pages, content, forms, URLs and business functionality remain connected throughout the transition.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The current platform is difficult to manage</h3>
                                <p>Routine updates may require technical support, manual workarounds or excessive time because the CMS no longer fits the team.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Website performance is limited</h3>
                                <p>The existing platform, theme, plugins or hosting environment may create slow loading, unstable behaviour or scaling constraints.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>The website needs a new technical foundation</h3>
                                <p>The business may require a modern framework, headless CMS, improved frontend architecture or more flexible deployment environment.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">04</span>
                                <h3>Hosting or infrastructure is unreliable</h3>
                                <p>Frequent downtime, weak support, poor security practices or limited deployment control may make a hosting migration necessary.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">05</span>
                                <h3>The domain or brand is changing</h3>
                                <p>A rebrand, business restructuring or domain change requires careful URL mapping, redirects and tracking updates.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">06</span>
                                <h3>Content and SEO value are at risk</h3>
                                <p>Poorly planned migrations can lose pages, metadata, internal links, backlinks and established search visibility.</p>
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
                                <p className="eyebrow" style={{color: "#d8c2ff"}}>Complete migration delivery</p>
                                <h2>Everything required to move the website through a controlled technical transition.</h2>
                            </div>
                            <p>The final scope depends on the current platform, destination platform, page count, data structure, integrations and migration risk. The modules below show what a complete website-migration project can include.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Audit</span>
                                <h3>Existing Website and Platform Review</h3>
                                <p>Review of pages, URLs, content, media, forms, integrations, metadata, analytics and technical dependencies.</p>
                                <div className="deliverable-tags"><small>Inventory</small><small>Platform review</small><small>Risk assessment</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Strategy</span>
                                <h3>Migration Scope and Destination Planning</h3>
                                <p>Definition of what should move, change, merge, retire or be rebuilt on the destination platform.</p>
                                <div className="deliverable-tags"><small>Scope</small><small>Destination</small><small>Migration plan</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Mapping</span>
                                <h3>URLs, Content and Data Relationships</h3>
                                <p>Creation of source-to-destination mappings for pages, categories, media, records and other structured content.</p>
                                <div className="deliverable-tags"><small>URL mapping</small><small>Data mapping</small><small>Content mapping</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Build</span>
                                <h3>Destination Platform Preparation</h3>
                                <p>Configuration or development of the new CMS, frontend, hosting environment and required templates.</p>
                                <div className="deliverable-tags"><small>Platform setup</small><small>Templates</small><small>Environment</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>05 · Transfer</span>
                                <h3>Content, Media and Data Migration</h3>
                                <p>Migration of approved pages, assets, posts, products, users or other supported records.</p>
                                <div className="deliverable-tags"><small>Content transfer</small><small>Media</small><small>Data import</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>06 · Redirects</span>
                                <h3>SEO Migration Planning</h3>
                                <p>Preparation of permanent redirects for changed, merged or retired URLs.</p>
                                <div className="deliverable-tags"><small>301 redirects</small><small>Canonicals</small><small>SEO continuity</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>07 · Integration</span>
                                <h3>Forms, Analytics and Business Tools</h3>
                                <p>Reconnection of forms, analytics, CRM, email, payments and other approved systems.</p>
                                <div className="deliverable-tags"><small>Forms</small><small>Analytics</small><small>Integrations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>08 · Quality</span>
                                <h3>Pre-Launch Validation</h3>
                                <p>Review of pages, links, media, forms, metadata, responsive layouts, redirects and functionality before launch.</p>
                                <div className="deliverable-tags"><small>QA</small><small>Crawl review</small><small>Functional testing</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>09 · Launch</span>
                                <h3>Domain and Production Transition</h3>
                                <p>Controlled release of the new website, DNS or hosting updates and production verification.</p>
                                <div className="deliverable-tags"><small>Deployment</small><small>DNS</small><small>Production checks</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>10 · Monitor</span>
                                <h3>Post-Launch Review</h3>
                                <p>Monitoring of indexing, redirects, analytics, forms, errors and important pages after migration.</p>
                                <div className="deliverable-tags"><small>Monitoring</small><small>Indexing</small><small>Issue resolution</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured website migration example</p>
                            <h2>Show how the website moved platforms without losing important content or functionality.</h2>
                        </div>
                        <p>Replace this demonstration with one genuine migration project. Explain the source platform, destination platform, migration risks and final outcome.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Website Migration visual">
                            <div className="case-visual-top">
                                <span>Migration</span>
                                <span>Data Transfer</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/a64rh6mbvofuhdruunnf.webp" alt="Working system example" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Example Case-Study Structure</p>
                                <h2>A controlled move from a legacy CMS to a faster, easier-to-manage platform.</h2>
                                <p>Use this area to explain why the existing platform was no longer suitable, what needed to be preserved and how the migration was completed.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The existing website was slow, difficult to update and dependent on outdated plugins, while important service pages already had search visibility.</strong></div>
                                <div className="case-fact"><small>Source Platform</small><strong>Replace this with the real platform, CMS, hosting provider or custom environment.</strong></div>
                                <div className="case-fact"><small>Destination Platform</small><strong>Replace this with the real destination such as WordPress, Next.js, Shopify, a headless CMS or a new hosting environment.</strong></div>
                                <div className="case-fact"><small>Migration Work</small><strong>Content inventory, template rebuilding, media transfer, metadata mapping, redirects, form reconnection and analytics verification.</strong></div>
                                <div className="case-fact"><small>Result</small><strong>Replace this statement with a verified improvement such as easier content management, improved loading, fewer technical issues or a successful relaunch with stable traffic.</strong></div>
                            </div>
                            <a className="btn primary" href="/work/">View All Migration Projects <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">What teams ask before moving their website to a new platform.</h2>
                        <p>These answers clarify the scope, technical approach, risk factors and delivery expectations before starting a migration project.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>What is website migration?</summary>
                            <p>Website migration is the process of moving a website between platforms, hosts, domains or technical architectures while preserving important content, functionality and URL relationships.</p>
                        </details>
                        <details>
                            <summary>Can you migrate a website without changing its design?</summary>
                            <p>Yes. A website can be moved between hosts or platforms while keeping the current design where the destination supports it.</p>
                        </details>
                        <details>
                            <summary>Can migration be combined with a redesign?</summary>
                            <p>Yes. Website redesign and platform migration are often combined, but this increases the need for careful content, URL and SEO planning.</p>
                        </details>
                        <details>
                            <summary>Can you migrate WordPress to Next.js?</summary>
                            <p>Yes. The frontend can be rebuilt in Next.js while WordPress remains the content backend, or content can be moved to another CMS depending on the requirement.</p>
                        </details>
                        <details>
                            <summary>Can you migrate from Wix or Squarespace?</summary>
                            <p>Yes. Pages, content, media and URLs can be migrated, although some platform-specific functionality may need to be rebuilt.</p>
                        </details>
                        <details>
                            <summary>Will we lose SEO rankings during migration?</summary>
                            <p>Rankings may fluctuate after migration. Careful URL mapping, redirects, metadata transfer and post-launch monitoring reduce avoidable risk.</p>
                        </details>
                        <details>
                            <summary>Do you migrate blog posts and media?</summary>
                            <p>Yes. Posts, categories, authors, dates, images and files can be migrated where the source data is accessible and supported.</p>
                        </details>
                        <details>
                            <summary>Can you migrate ecommerce products and customers?</summary>
                            <p>Yes. Product, collection and customer migration can be included after reviewing the source and destination platforms.</p>
                        </details>
                        <details>
                            <summary>Can you move our website to a new domain?</summary>
                            <p>Yes. Domain migration can include URL mapping, redirects, analytics updates, Search Console changes and post-launch monitoring.</p>
                        </details>
                        <details>
                            <summary>How do redirects work?</summary>
                            <p>A permanent 301 redirect sends users and search engines from an old URL to the most relevant new URL.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Services often combined with a website migration.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/business-website-development/"><div><small>Development</small><h3>Business Website Development</h3><p>Develop the migrated website into a responsive, CMS-powered business platform.</p></div><b>Explore website development ↗</b></a>
                        <a className="related-card" href="/services/website-maintenance/"><div><small>Maintenance</small><h3>Website Maintenance</h3><p>Keep the migrated website secure, fast, and technically sound post-launch.</p></div><b>Explore website maintenance ↗</b></a>
                        <a className="related-card" href="/services/custom-website-design/"><div><small>Design</small><h3>Custom Website Design</h3><p>Redesign the visual interface alongside your technical migration.</p></div><b>Explore custom design ↗</b></a>
                    </div>
                </div>
            </section>

            <section className="section lead-section" id="contact">
                <div className="container lead-grid">
                    <div className="lead-copy">
                        <p className="eyebrow" style={{color: "#d8c2ff"}}>Plan your website migration</p>
                        <h2>Tell us about your current platform and destination goals.</h2>
                        <p>Share your current website, current platform, destination platform, page volume and main reason for migrating. We will review the details and recommend a practical migration scope.</p>
                    </div>

                    <div className="lead-panel">
                        <h3>Tell us about your migration</h3>
                        <p>Provide a few details about your website platform, size and migration requirements, and we will respond with the most suitable next step.</p>
                        <form className="lead-form js-lead-form" data-form-name="Website Migration Lead"
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
                                    placeholder="Tell us about your current website URL, current platform, destination platform, page volume, and main reason for migrating..."></textarea>
                            </div>
                            <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" />
                            <input type="hidden" name="service" value="Website Migration" />
                            <input type="hidden" name="landing_page" value="/services/website-migration/" />
                            <label className="consent">
                                <input type="checkbox" required />
                                <span>By submitting this form, you agree that Hyperlink Tech Solutions may contact you regarding your project enquiry.</span>
                            </label>
                            <button className="btn primary full" type="submit">Submit Website Migration Enquiry <span className="arrow">↗</span></button>
                            <div className="form-status" aria-live="polite"></div>
                        </form>
                        <div className="trust-line">No obligation · Your information stays private</div>
                    </div>
                </div>
            </section>
        </main>

        <ServiceFooter />
    </div>
    <a className="floating-cta" href="#contact">Get Website Migration Proposal ↗</a>
    </>
  );
}
