
import type { Metadata } from "next";
import Link from "next/link";
import "./services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import ServiceHeader from "@/components/services/ServiceHeader";
import ServiceFooter from "@/components/services/ServiceFooter";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";
import ServiceFeatures from "@/components/services/ServiceFeatures";

export const metadata: Metadata = {
  title: "Business Website Development Services | Hyperlink Tech Solutions",
  description: "Get a responsive, CMS-powered business website with lead forms, integrations, analytics and SEO foundations. Explore Hyperlink's website development services.",
};

export default function BusinessWebsiteDevelopment() {
  return (
    <>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/business-website-development/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/business-website-development/",
          "name": "Business Website Development Services | Hyperlink Tech Solutions",
          "description": "Responsive, CMS-powered business website development with lead forms, integrations, analytics and SEO foundations.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/business-website-development/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/business-website-development/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/business-website-development/#service",
          "name": "Business Website Development",
          "serviceType": "Business Website Development",
          "url": "https://hyperlinktechsolutions.com/services/business-website-development/",
          "description": "Development of responsive business websites with CMS access, structured service pages, lead-generation forms, analytics, integrations and technical SEO foundations.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Startups, growing businesses and established companies"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://hyperlinktechsolutions.com/services/business-website-development/#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://hyperlinktechsolutions.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://hyperlinktechsolutions.com/services/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Business Website Development",
              "item": "https://hyperlinktechsolutions.com/services/business-website-development/"
            }
          ]
        },
        {
          "@type": "FAQPage",
          "@id": "https://hyperlinktechsolutions.com/services/business-website-development/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much does a business website cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The cost depends on page count, unique templates, content, CMS requirements, integrations, custom functionality and delivery timeline. Hyperlink provides a defined scope and proposal after reviewing the requirements."
              }
            },
            {
              "@type": "Question",
              "name": "Will I be able to update the website myself?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. When content management is included, your team can update agreed areas such as page copy, services, articles, images and selected website settings without editing code."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide website design as well?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Hyperlink can manage website strategy, information architecture, responsive UI design, development, CMS setup, testing and launch as one connected project."
              }
            },
            {
              "@type": "Question",
              "name": "Will the website be SEO-ready?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The development can include semantic HTML, editable metadata, canonical tags, sitemap and robots configuration, structured data, image alt-text support, internal linking and performance checks."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide support after launch?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Handover, launch support, maintenance, technical updates and ongoing improvement options can be included according to the agreed scope."
              }
            }
          ]
        }
      ]
    }
    ` }} />
      
      
    <ServiceInteractions />
      <div className="service-page-wrapper">
        <ServiceHeader />

        <main id="top">
            <ServiceHero />

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Website development benefits">
                        <div className="proof-item">
                            <small>01 · Built for business</small>
                            <strong>Pages and journeys organised around how customers evaluate your company.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Manageable</small>
                            <strong>CMS access for agreed content areas without relying on a developer for every update.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Connected</small>
                            <strong>Forms, analytics, booking, CRM, WhatsApp and other useful integrations.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Launch ready</small>
                            <strong>Responsive testing, SEO foundations, deployment and practical handover.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When development becomes necessary</p>
                        <p>A working business website must remain fast, manageable and useful as your services,
                            content and lead-generation requirements grow.</p>
                        <a className="btn" href="#included">See What Is Included <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Your website should support the business—not create more technical friction.</h2>
                        <p>We help businesses replace fragile, difficult-to-update or ineffective websites with a
                            clearer platform that supports content, enquiries, analytics and future expansion.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The website is slow or unstable</h3>
                                <p>Visitors lose confidence when pages load poorly, layouts break or basic functionality feels unreliable.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Content is difficult to update</h3>
                                <p>Your team should not need code changes for every service, article, image or routine content update.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Enquiries are not handled properly</h3>
                                <p>Forms need reliable delivery, spam protection, thank-you states and conversion tracking.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">04</span>
                                <h3>The mobile experience is weak</h3>
                                <p>Navigation, readability, forms and CTAs must remain clear across phones, tablets and desktops.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">05</span>
                                <h3>Business tools are disconnected</h3>
                                <p>Booking, CRM, analytics, payments, email and customer communication should work together where useful.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">06</span>
                                <h3>The website cannot scale</h3>
                                <p>Adding services, locations, resources or functionality should not require rebuilding the entire platform.</p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceFeatures />

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured development example</p>
                            <h2>Real-world systems, built for growth.</h2>
                        </div>
                        <p>See how our business website development services help companies streamline their lead generation and content management processes.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Business website project visual">
                            <div className="case-visual-top">
                                <span>Business website platform</span>
                                <span>Responsive + CMS + lead flow</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/7d2de5e8-3b37-4208-958d-a51bc02499e8.webp" alt="Working system example" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Enterprise Solutions</p>
                                <h2>A scalable platform for global reach.</h2>
                                <p>We delivered a comprehensive corporate website featuring seamless CRM integration, multi-region content management, and optimized lead flow—driving a significant increase in qualified inquiries.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Fragmented systems and an outdated digital presence limited expansion.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>Unified Next.js architecture with a headless CMS for effortless updates.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>40% increase in lead conversion and significantly reduced page load times.</strong></div>
                            </div>
                            <a className="btn primary" href="/work/">View All Website Projects <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft" id="website-types">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Business website types</p>
                            <h2>Development shaped around the way your company sells, informs and operates.</h2>
                        </div>
                        <p>The page structure and required functionality should change with the industry,
                            audience and complexity of the business.</p>
                    </div>

                    <div className="website-types">
                        <article className="website-type-card"><span>01</span><h3>Corporate websites</h3><p>Company positioning, capabilities, locations, leadership, resources, careers and investor-facing information.</p></article>
                        <article className="website-type-card"><span>02</span><h3>Service business websites</h3><p>Individual service pages, proof, enquiry flows, bookings, testimonials and content publishing.</p></article>
                        <article className="website-type-card"><span>03</span><h3>Manufacturing websites</h3><p>Products, capabilities, applications, industries, downloadable documents and distributor enquiries.</p></article>
                        <article className="website-type-card"><span>04</span><h3>Real-estate websites</h3><p>Projects, locations, amenities, galleries, brochures, lead forms and sales-team integrations.</p></article>
                        <article className="website-type-card"><span>05</span><h3>Healthcare websites</h3><p>Services, specialists, facilities, appointments, patient information and location-based pages.</p></article>
                        <article className="website-type-card"><span>06</span><h3>SaaS marketing websites</h3><p>Product positioning, feature pages, use cases, integrations, pricing, demos and trial conversion.</p></article>
                        <article className="website-type-card"><span>07</span><h3>Research platforms</h3><p>Report discovery, categories, content publishing, search, downloads and commercial enquiry journeys.</p></article>
                        <article className="website-type-card"><span>08</span><h3>Multi-location websites</h3><p>Location templates, local content, maps, contact information and scalable regional management.</p></article>
                    </div>
                </div>
            </section>

            <section className="section" id="integrations">
                <div className="container integration-shell">
                    <div className="integration-copy">
                        <p className="eyebrow">Integrations and technology</p>
                        <h2>Connect the website with the tools your business already uses.</h2>
                        <p>We choose integrations according to the customer journey and operational requirement.
                            The objective is practical connectivity—not a decorative wall of software logos.</p>
                        <div className="tech-row" aria-label="Possible technology choices">
                            <span>Next.js</span><span>React</span><span>Node.js</span><span>WordPress</span>
                            <span>Headless CMS</span><span>Supabase</span><span>PostgreSQL</span>
                            <span>Cloudflare</span><span>Vercel</span>
                        </div>
                        <p>Technology is recommended after reviewing content volume, editing needs, custom functionality,
                            scalability, deployment and long-term maintenance.</p>
                    </div>

                    <div className="integration-cloud" aria-label="Possible business website integrations">
                        <div className="integration-center">Your website</div>
                        <span className="integration-node">CRM</span>
                        <span className="integration-node">Analytics</span>
                        <span className="integration-node">WhatsApp</span>
                        <span className="integration-node">Bookings</span>
                        <span className="integration-node">Payments</span>
                        <span className="integration-node">Email tools</span>
                    </div>
                </div>
            </section>

            <section className="section process-section" id="process">
                <div className="container">
                    <div className="process-shell">
                        <div className="process-overview">
                            <p className="eyebrow">Development process</p>
                            <h2>A clear path from requirements to a working website.</h2>
                            <p>Design, technical decisions, content, integrations and quality checks remain connected
                                through defined milestones and visible approvals.</p>
                            <div className="process-proof" aria-label="Process benefits">
                                <span>Defined scope</span>
                                <span>Milestone reviews</span>
                                <span>Practical handover</span>
                            </div>
                            <a className="btn" href="#contact">Plan My Website <span className="arrow">↗</span></a>
                        </div>

                        <div className="process-timeline" aria-label="Business website development process">
                            <article className="process-step">
                                <div className="step-marker">01</div>
                                <div className="step-main">
                                    <div className="step-meta"><div className="step-headline"><strong>Analyse</strong><h3>Requirements and content</h3></div></div>
                                    <p>Confirm pages, content responsibilities, CMS needs, forms, integrations, migration and launch requirements.</p>
                                </div>
                                <div className="step-side"><span className="step-time">Initial phase</span><span className="step-output">Approved scope</span></div>
                            </article>
                            <article className="process-step">
                                <div className="step-marker">02</div>
                                <div className="step-main">
                                    <div className="step-meta"><div className="step-headline"><strong>Plan</strong><h3>Technical architecture</h3></div></div>
                                    <p>Select the stack, CMS, data structure, component approach, hosting and implementation plan.</p>
                                </div>
                                <div className="step-side"><span className="step-time">Planning phase</span><span className="step-output">Build roadmap</span></div>
                            </article>
                            <article className="process-step">
                                <div className="step-marker">03</div>
                                <div className="step-main">
                                    <div className="step-meta"><div className="step-headline"><strong>Develop</strong><h3>Pages, CMS and integrations</h3></div></div>
                                    <p>Build responsive components, connect editable content, configure forms and integrate required business tools.</p>
                                </div>
                                <div className="step-side"><span className="step-time">Milestone based</span><span className="step-output">Working preview</span></div>
                            </article>
                            <article className="process-step">
                                <div className="step-marker">04</div>
                                <div className="step-main">
                                    <div className="step-meta"><div className="step-headline"><strong>Verify</strong><h3>Quality assurance</h3></div></div>
                                    <p>Review mobile layouts, browsers, forms, links, integrations, content and agreed performance requirements.</p>
                                </div>
                                <div className="step-side"><span className="step-time">Pre-launch</span><span className="step-output">QA approval</span></div>
                            </article>
                            <article className="process-step">
                                <div className="step-marker">05</div>
                                <div className="step-main">
                                    <div className="step-meta"><div className="step-headline"><strong>Launch</strong><h3>Deployment and handover</h3></div></div>
                                    <p>Deploy the production website, connect the domain, verify tracking and provide CMS guidance and support.</p>
                                </div>
                                <div className="step-side"><span className="step-time">Launch phase</span><span className="step-output">Live website</span></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section soft" id="pricing">
                <div className="container">
                    <div className="scope-grid">
                        <div className="scope-copy">
                            <p className="eyebrow" style={{"color":"#d8c2ff"}}>Pricing and timeline</p>
                            <h2>Scope first. Clear proposal next.</h2>
                            <p>Business website pricing depends on the pages, content, CMS, integrations and technical
                                complexity. After reviewing the requirement, we provide defined deliverables,
                                responsibilities, timeline and pricing.</p>
                            <a className="btn light" href="#contact">Request a Scoped Proposal <span className="arrow">↗</span></a>
                        </div>

                        <div className="scope-factors">
                            <article className="scope-factor"><span>01</span><div><strong>Page and template count</strong><small>Number of pages and genuinely different page layouts.</small></div><em>Scope factor</em></article>
                            <article className="scope-factor"><span>02</span><div><strong>CMS and content migration</strong><small>Editable areas, publishing workflows and existing content transfer.</small></div><em>Scope factor</em></article>
                            <article className="scope-factor"><span>03</span><div><strong>Forms and integrations</strong><small>CRM, booking, payment, analytics, email and third-party systems.</small></div><em>Scope factor</em></article>
                            <article className="scope-factor"><span>04</span><div><strong>Custom functionality</strong><small>Search, portals, account areas, calculators or specialised workflows.</small></div><em>Scope factor</em></article>
                            <article className="scope-factor"><span>05</span><div><strong>Timeline and support</strong><small>Delivery urgency, launch coordination, maintenance and ongoing improvements.</small></div><em>Scope factor</em></article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="why-hyperlink">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Why Hyperlink</p>
                            <h2>Development decisions remain tied to business outcomes.</h2>
                        </div>
                        <p>A good implementation should be manageable, responsive, measurable and ready for the next stage of the business.</p>
                    </div>

                    <div className="trust-grid">
                        <article className="trust-card"><div className="trust-card-top"><span>01</span><small>Connected</small></div><h3>Design and development together</h3><p>Interface decisions, technical constraints and content requirements remain coordinated.</p></article>
                        <article className="trust-card"><div className="trust-card-top"><span>02</span><small>Manageable</small></div><h3>Reusable website structure</h3><p>Components and templates are organised for consistency and future expansion.</p></article>
                        <article className="trust-card"><div className="trust-card-top"><span>03</span><small>Commercial</small></div><h3>Lead journeys considered</h3><p>Forms, CTA placement and tracking are treated as part of the build—not an afterthought.</p></article>
                        <article className="trust-card"><div className="trust-card-top"><span>04</span><small>Supported</small></div><h3>Launch and ongoing options</h3><p>Handover, maintenance and future improvement support can be included in the scope.</p></article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently asked questions</p>
                        <h2 id="faq-title">What businesses ask before starting development.</h2>
                        <p>These answers clarify the scope, CMS, SEO, migration, integrations and support before a proposal request.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How much does a business website cost?</summary>
                            <p>The cost depends on page count, unique templates, content readiness, CMS requirements,
                                integrations, custom functionality and delivery timeline. After reviewing the requirement,
                                we provide a defined scope, responsibilities, timeline and proposal.</p>
                        </details>
                        <details>
                            <summary>Will I be able to update the website myself?</summary>
                            <p>Yes. When content management is included, your team can update agreed areas such as page
                                copy, services, articles, images and selected website settings without editing code.</p>
                        </details>
                        <details>
                            <summary>Do you provide website design as well?</summary>
                            <p>Yes. Hyperlink can manage strategy, information architecture, responsive UI design,
                                development, CMS setup, testing and launch as one connected project.</p>
                        </details>
                        <details>
                            <summary>Can you migrate our existing website?</summary>
                            <p>Yes, when included in the scope. Migration planning covers existing URLs, content,
                                media, redirects, metadata and any functionality that must be preserved or replaced.</p>
                        </details>
                        <details>
                            <summary>Can forms connect with our CRM or email tools?</summary>
                            <p>Yes. Forms can be connected to suitable CRM, email, booking or automation tools when
                                the platform provides a supported integration or API.</p>
                        </details>
                        <details>
                            <summary>Will the website be SEO-ready?</summary>
                            <p>The development can include semantic HTML, editable metadata, canonical tags, sitemap
                                and robots configuration, structured data, alt-text support, internal linking and performance checks.</p>
                        </details>
                        <details>
                            <summary>Do you provide hosting, launch and maintenance?</summary>
                            <p>Deployment and launch support can be included, along with domain connection, hosting
                                configuration, CMS guidance, technical maintenance and ongoing improvement options.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Support the website with the right design and post-launch services.</h2>
                        </div>
                        <p>Use descriptive internal links so visitors and search engines understand how each service relates to this page.</p>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/custom-website-design/"><div><small>Design</small><h3>Custom Website Design</h3><p>Strategy, structure, wireframes and responsive UI shaped around your brand and audience.</p></div><b>Explore website design ↗</b></a>
                        <a className="related-card" href="/services/landing-page-design/"><div><small>Campaigns</small><h3>Landing Page Design</h3><p>Focused pages for advertising, launches and lead-generation campaigns.</p></div><b>Explore landing pages ↗</b></a>
                        <a className="related-card" href="/services/custom-web-application-development/"><div><small>Functionality</small><h3>Custom Web Applications</h3><p>Portals, dashboards and workflow systems for specialised business requirements.</p></div><b>Explore web applications ↗</b></a>
                        <a className="related-card" href="/services/website-maintenance/"><div><small>After launch</small><h3>Website Maintenance</h3><p>Updates, monitoring, fixes, performance improvements and continuous support.</p></div><b>Explore maintenance ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Build a business website <br />that keeps working <span className="orb-icon" aria-hidden="true"></span>
                        after launch.</h2>
                    <div className="big-cta-row">
                        <p>Need a complete company website, CMS migration or connected lead-generation platform?
                            Let’s define the right structure, stack and delivery plan.</p>
                        <a className="btn" href="#contact">Get a Website Proposal <span className="arrow">↗</span></a>
                    </div>
                </div>
            </section>
        </main>

        <ServiceFooter />
    </div>
    <a className="floating-cta" href="#contact">Get Website Proposal ↗</a>
    <div className="mobile-bottom" aria-label="Quick contact actions">
        <a href="mailto:hello@hyperlinktechsolutions.com">Email Us</a>
        <a href="#contact">Get Proposal</a>
    </div>

    

    </>
  );
}
