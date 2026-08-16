import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/cms-and-editorial-workflows/" },
  title: "CMS & Editorial Workflow Development | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
  description: "Build custom headless CMS platforms for newsrooms with complex multi-author permissions and version control.",
};

export default function CmsAndEditorialWorkflows() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/cms-and-editorial-workflows/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/cms-and-editorial-workflows/",
          "name": "CMS & Editorial Workflow Development | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
          "description": "Build custom headless CMS platforms for newsrooms with complex multi-author permissions and version control.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/cms-and-editorial-workflows/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/cms-and-editorial-workflows/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/cms-and-editorial-workflows/#service",
          "name": "CMS & Editorial Workflows",
          "serviceType": "Publishing & Media Engineering",
          "url": "https://hyperlinktechsolutions.com/services/cms-and-editorial-workflows/",
          "description": "Build custom headless CMS platforms for newsrooms with complex multi-author permissions and version control.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Digital publishers, newsrooms, and independent media companies"
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
                    <strong>CMS & Workflows</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Empowering your newsroom</div>
                        <p className="eyebrow">CMS & Editorial Workflows</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Stop fighting your CMS. <em class="accent-text">Start publishing faster.</em>' }}></h1>
                        <p className="hero-lead">We architect modern headless CMS platforms (like Sanity) tailored specifically to your newsroom's workflow. Stop hacking together plugins and get a system built for professional publishing.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Build modular content blocks for rich, interactive storytelling</li>
                            <li>Implement strict role-based permissions (Writers, Editors, Admins)</li>
                            <li>Develop custom editorial workflows for drafting and fact-checking</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a CMS Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Media platform benefits">
                        <div className="proof-item">
                            <small>01 · Modular Writing</small>
                            <strong>Easily drag and drop tweets, quotes, and charts into articles.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Version Control</small>
                            <strong>Never lose a draft and see exactly who changed what.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Editorial Review</small>
                            <strong>Custom states (Draft &gt; Review &gt; Fact Check &gt; Published).</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Multi-Author</small>
                            <strong>Allow multiple writers to collaborate without locking each other out.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When a custom CMS is necessary</p>
                        <p>If your editors are afraid to hit "Publish" because the formatting might break, your tools are failing them.</p>
                        <a className="btn" href="#contact">Discuss Your CMS <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Rigid CMS platforms destroy editorial creativity.</h2>
                        <p>Traditional CMS themes force writers into rigid "Title and Body" boxes. When they try to add an interactive chart or a custom pull-quote, the formatting breaks and requires developer intervention.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Accidental Publishing</h3>
                                <p>Without strict review workflows, junior writers accidentally push unvetted drafts directly to the live homepage.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Boring Storytelling</h3>
                                <p>Because adding multimedia is so difficult, your team defaults to walls of text, leading to low reader engagement.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Plugin Hell</h3>
                                <p>You have 40 different WordPress plugins trying to handle SEO, caching, and forms, causing constant conflicts and security risks.</p>
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
                                <h2>Professional tools for professional newsrooms.</h2>
                            </div>
                            <p>We implement headless platforms that separate your content data from presentation, giving your writers absolute freedom.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Platform</span>
                                <h3>Headless CMS Architecture</h3>
                                <p>Implementing modern, flexible platforms like Sanity or Contentful that treat your articles as structured data, not just raw HTML.</p>
                                <div className="deliverable-tags"><small>Sanity</small><small>Contentful</small><small>Headless</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Workflow</span>
                                <h3>Draft & Revision Pipelines</h3>
                                <p>Building custom kanban-style workflows within the CMS to track an article's status from pitch to publication.</p>
                                <div className="deliverable-tags"><small>Pipelines</small><small>Drafts</small><small>Kanban</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Security</span>
                                <h3>Role-Based Permissions</h3>
                                <p>Locking down the "Publish" button so only senior editors can push content live, while freelancers only see their own drafts.</p>
                                <div className="deliverable-tags"><small>RBAC</small><small>Permissions</small><small>Safety</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Content</span>
                                <h3>Modular Story Blocks</h3>
                                <p>Developing custom blocks that allow writers to easily insert rich media, newsletters signups, or paywalls anywhere in the text.</p>
                                <div className="deliverable-tags"><small>Blocks</small><small>Rich Media</small><small>Embeds</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured CMS Build</p>
                            <h2>Replacing a rigid monolith with a custom Sanity CMS.</h2>
                        </div>
                        <p>See how we empowered an independent media company to double their editorial output without hiring more writers.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>CMS Engineering</span>
                                <span>Sanity.io + Custom Blocks</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Newsroom CMS Overhaul</p>
                                <h2>Freeing writers from formatting hell.</h2>
                                <p>A rapidly growing digital magazine was constrained by a heavily customized legacy CMS. Formatting a single feature article with images and quotes took an editor over an hour.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Writers were relying on HTML hacks to get articles to look right. There was no version control, so if an editor made a mistake, the previous draft was lost forever.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We migrated their entire archive to Sanity.io. We built a custom "Studio" for the newsroom featuring modular blocks for quotes, galleries, and embedded charts, plus a strict "Draft -&gt; Review -&gt; Live" permissions structure.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>Formatting time dropped from 60 minutes to 5 minutes. The editorial team doubled their weekly publishing output because they were no longer fighting the software.</strong></div>
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
                        <h2 id="faq-title">Common questions about Custom CMS Workflows.</h2>
                        <p>Answers covering Sanity, content migration, and workflows.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Why do you recommend Sanity over WordPress?</summary>
                            <p>Sanity is a true structured content platform. Instead of saving an article as a giant blob of HTML, it saves it as clean data (a title, an author reference, an array of blocks). This makes it infinitely easier to reuse content on apps, newsletters, or smart displays.</p>
                        </details>
                        <details>
                            <summary>Can you migrate our existing 10,000 articles?</summary>
                            <p>Yes. We write custom migration scripts that extract your legacy data (from WordPress, Drupal, or custom databases), clean the formatting, and programmatically insert it into the new headless CMS.</p>
                        </details>
                        <details>
                            <summary>Can editors preview what the article will look like?</summary>
                            <p>Absolutely. We build live preview environments. When a writer makes a change in the CMS, they instantly see exactly how it will look on the live website before hitting publish.</p>
                        </details>
                        <details>
                            <summary>How do you handle image optimization?</summary>
                            <p>Modern headless CMS platforms (like Sanity) handle image cropping and compression automatically on the fly. Writers just upload the high-res image, and the frontend automatically requests the perfectly sized webp version.</p>
                        </details>
                        <details>
                            <summary>Can freelancers use the system securely?</summary>
                            <p>Yes. We configure strict roles. A freelancer can log in, create a draft, and upload images, but they cannot see other writers' work, access site settings, or push anything live.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Complete your publishing infrastructure.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/news-and-editorial-websites/"><div><small>Websites</small><h3>Editorial Websites</h3><p>Design lightning-fast media websites optimized for readability.</p></div><b>Explore editorial websites ↗</b></a>
                        <a className="related-card" href="/services/cms-and-editorial-workflows/"><div><small>Backend</small><h3>CMS & Workflows</h3><p>Build custom headless CMS platforms for newsrooms.</p></div><b>Explore CMS development ↗</b></a>
                        <a className="related-card" href="/services/subscriptions-and-member-access/"><div><small>Revenue</small><h3>Subscriptions & Members</h3><p>Engineer robust paywalls and seamless subscription logic.</p></div><b>Explore subscriptions ↗</b></a>
                        <a className="related-card" href="/services/newsletters-ads-and-analytics/"><div><small>Growth</small><h3>Newsletters & Ads</h3><p>Integrate monetization and distribution tools without sacrificing speed.</p></div><b>Explore monetization ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Give your writers the <br />tools they deserve. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build a CMS workflow that actually makes sense for your newsroom? Let's discuss your editorial process.</p>
                        <a className="btn" href="#contact">Get a CMS Proposal <span className="arrow">↗</span></a>
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
