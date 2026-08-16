import type { Metadata } from "next";
import Link from "next/link";
import "../industry-template.css";
import "./saas-industry.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import IndustryClientScripts from "./IndustryClientScripts";

export const metadata: Metadata = {
  title: "SaaS Website Design & Development Agency | Hyperlink Tech Solutions",
  description: "SaaS website design, product UI/UX, onboarding, dashboards and custom development for software companies that want more demos, trials and product adoption.",
};

export default function SaaSIndustryPage() {
  const budgetOptions = ["Under $500", "$500 - $1,000", "$1,000 - $2,500", "$2,500 - $5,000", "$5,000+"];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "SaaS Website Design & Development Agency | Hyperlink Tech Solutions",
          "description": "SaaS website design, product UI/UX, onboarding, dashboards and custom development for software companies that want more demos, trials and product adoption.",
          "url": "https://www.hyperlinktechsolutions.com/industries/software-saas-companies/"
        }
      ` }} />

      <SiteHeader />

      <main id="top" className="saas-industry-page">

            <section className="hero" data-block-type="hero" data-block-id="industry-hero">
                <div className="container">
                    <div className="breadcrumbs"><a href="/">Home</a><span>/</span><a
                            href="/industries/">Industries</a><span>/</span><strong>Software &amp; SaaS
                            Companies</strong></div>
                    <div className="hero-grid">
                        <div className="hero-copy reveal">
                            <p className="eyebrow">SaaS website design &amp; development</p>
                            <h1>Turn more SaaS visitors into <em>demos, trials and active users.</em></h1>
                            <p className="hero-lead">We connect product positioning, website conversion, onboarding and
                                product UX so prospects understand your software faster and reach value with less
                                friction.</p>
                            <div className="hero-points"><span>Explain complex software without vague
                                    messaging</span><span>Create clearer demo, trial and onboarding
                                    journeys</span><span>Carry one design system from marketing site to product</span>
                            </div>
                            <div className="hero-actions"><a className="btn primary" href="#free-review">Get a Free SaaS
                                    Conversion Review →</a><a className="btn" href="#solutions">See What We Build</a></div>
                            <p className="microcopy">No obligation. Share your website and we will identify the clearest
                                conversion opportunities.</p>
                        </div>

                        <aside className="review-card reveal-right" id="free-review" data-block-type="leadMagnetForm"
                            data-block-id="free-review">
                            <span className="review-badge">Free conversion review</span>
                            <h2>Find out where your SaaS website is losing buyers.</h2>
                            <p>Send your website and primary goal. We will reply with a focused review rather than a
                                generic sales deck.</p>
                            <div className="review-deliverables"><span>Positioning and message clarity
                                    observations</span><span>CTA, demo or trial journey
                                    opportunities</span><span>Highest-priority page or UX recommendation</span></div>
                            <form className="compact-form js-demo-form" action="/api/leads" method="post">
                                <input type="hidden" name="source_page" value="software-saas-companies" />
                                <input type="hidden" name="offer" value="free-saas-conversion-review" />
                                <input name="email" type="email" required={true} autoComplete="email"
                                    placeholder="Work email *" aria-label="Work email" />
                                <input name="website" type="url" required={true} placeholder="Website URL *"
                                    aria-label="Website URL" />
                                <select name="goal" aria-label="Primary goal">
                                    <option value="">Primary goal</option>
                                    <option>Get more demos</option>
                                    <option>Increase free trials</option>
                                    <option>Improve onboarding</option>
                                    <option>Redesign product UI</option>
                                    <option>Build a SaaS application</option>
                                </select>
                                <div className="success-message">Thanks—your request is ready. Connect this form to the
                                    existing <code>/api/leads</code> endpoint.</div>
                                <button className="btn primary" type="submit">Get My Free Review →</button>
                            </form>
                            <p className="privacy-note">Your details are used only to respond to this request.</p>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="section" data-block-type="proofStrip" data-block-id="trust-strip">
                <div className="container">
                    <div className="trust-strip reveal">
                        <div className="trust-item"><strong>100+ clients served</strong><span>Across websites, portals and
                                digital products.</span></div>
                        <div className="trust-item"><strong>Website + product expertise</strong><span>One team across
                                marketing pages, dashboards and applications.</span></div>
                        <div className="trust-item"><strong>Remote delivery</strong><span>Structured reviews, milestones and
                                direct communication.</span></div>
                        <div className="trust-item"><strong>One-business-day reply</strong><span>A clear next step instead
                                of an automated sequence.</span></div>
                    </div>
                </div>
            </section>

            <section className="section soft" data-block-type="painOutcomeGrid" data-block-id="conversion-problems">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Where SaaS conversion breaks</p>
                            <p>Design is useful only when it removes a real buyer or user obstacle.</p>
                        </div>
                        <h2>Fix the points that stop prospects from understanding, trusting or adopting the product.
                        </h2>
                    </div>
                    <div className="problem-grid">
                        <article className="problem-card reveal-zoom"><span className="problem-num">01</span>
                            <h3>The product is difficult to understand.</h3>
                            <p>The homepage lists features, but buyers cannot quickly identify who the product is for,
                                what it replaces or why it matters.</p><span className="outcome">Outcome: clearer
                                positioning and use-case journeys</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">02</span>
                            <h3>The demo or trial journey leaks intent.</h3>
                            <p>Calls to action, pricing, forms and proof do not match the buyer’s level of awareness or
                                sales motion.</p><span className="outcome">Outcome: stronger demo, trial and qualification
                                paths</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">03</span>
                            <h3>The website and product feel disconnected.</h3>
                            <p>Expectations created by the marketing site are lost inside inconsistent onboarding,
                                navigation and dashboard experiences.</p><span className="outcome">Outcome: one connected
                                acquisition-to-activation system</span>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section" id="solutions" data-block-type="solutionTabs" data-block-id="solutions">
                <div className="container">
                    <div className="solutions-shell">
                        <div className="solution-tabs reveal">
                            <p className="eyebrow" style={{"color":"#bfa8ff"}}>What we build</p>
                            <h2>One partner across the SaaS journey.</h2>
                            <button className="solution-tab active" data-key="website"><span>01</span><span>SaaS Marketing
                                    Website</span><span>→</span></button>
                            <button className="solution-tab" data-key="product"><span>02</span><span>Product
                                    UI/UX</span><span>→</span></button>
                            <button className="solution-tab" data-key="onboarding"><span>03</span><span>Onboarding
                                    Experience</span><span>→</span></button>
                            <button className="solution-tab" data-key="dashboard"><span>04</span><span>Product
                                    Dashboard</span><span>→</span></button>
                            <button className="solution-tab" data-key="development"><span>05</span><span>Custom SaaS
                                    Development</span><span>→</span></button>
                        </div>
                        <div className="solution-panel reveal-right">
                            <div className="solution-copy"><span className="mini" id="solutionKicker">Positioning &amp; demand
                                    generation</span>
                                <h3 id="solutionTitle">A SaaS website that makes the product easy to understand and easy
                                    to buy.</h3>
                                <p id="solutionText">Connect use cases, integrations, pricing, proof and conversion
                                    paths around the questions buyers ask before booking a demo or starting a trial.</p>
                                <div className="solution-list" id="solutionList"><span>Homepage and use-case
                                        architecture</span><span>Demo, trial and pricing journeys</span><span>CMS,
                                        technical SEO and analytics</span></div><a className="btn" id="solutionLink"
                                    href="/services/saas-marketing-website/">Explore this service →</a>
                            </div>
                            <div className="ui-window" aria-hidden="true" data-view="website">
                                <div className="ui-top">
                                    <div className="ui-dots"><i></i><i></i><i></i></div><span className="ui-badge"
                                        id="uiBadge">SaaS Marketing Website</span>
                                </div>
                                <div className="ui-body">
                                    <div className="ui-side"><i></i><i></i><i></i><i></i><i></i></div>
                                    <div className="ui-main">
                                        <div className="ui-title"></div>
                                        <div className="ui-stats"><span></span><span></span><span></span></div>
                                        <div className="ui-chart"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section soft" id="work" data-block-type="caseStudy" data-block-id="featured-product">
                <div className="container">
                    <div className="case-study">
                        <div className="case-visual" aria-label="End-to-End SaaS visual" style={{ padding: 0, background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="End-to-End SaaS Architecture" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
                            </div>
                        </div>
                        <div className="case-copy">
                            <p className="eyebrow">End-to-End SaaS Delivery</p>
                            <h2>From positioning and marketing to core product architecture.</h2>
                            <p>We don't just build isolated features. We design and engineer the complete SaaS journey—from the homepage that converts the user, to the dashboard they use every day.</p>
                            <div className="case-features">
                                <div className="case-feature"><span>01</span>
                                    <div><strong>Acquisition &amp; Onboarding</strong><small>High-converting marketing websites paired with frictionless, role-based setup wizards.</small></div>
                                </div>
                                <div className="case-feature"><span>02</span>
                                    <div><strong>Product UI/UX &amp; Dashboards</strong><small>Clear, focused interfaces that turn complex data into actionable, everyday decisions.</small></div>
                                </div>
                                <div className="case-feature"><span>03</span>
                                    <div><strong>Custom SaaS Architecture</strong><small>Scalable Next.js and Node.js codebases built for multi-tenant security and rapid iteration.</small></div>
                                </div>
                            </div>
                            <div className="case-stack"><span>Strategy</span><span>UI/UX Design</span><span>Next.js</span><span>Node.js</span><span>PostgreSQL</span></div><a className="btn primary"
                                href="/work/">View Product Work →</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" data-block-type="process" data-block-id="process">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">How the project moves</p>
                            <p>Short feedback loops reduce surprises and keep product decisions visible.</p>
                        </div>
                        <h2>A practical route from unclear requirements to an approved experience.</h2>
                    </div>
                    <div className="process-grid">
                        <article className="process-step"><span>01 · DISCOVER</span>
                            <h3>Understand users, product and buying motion.</h3>
                            <p>Review the current product, audience, sales process, analytics and priority business
                                goal.</p>
                        </article>
                        <article className="process-step"><span>02 · STRUCTURE</span>
                            <h3>Define journeys before designing screens.</h3>
                            <p>Map pages, flows, navigation, content hierarchy and the actions each user should
                                complete.</p>
                        </article>
                        <article className="process-step"><span>03 · DESIGN &amp; BUILD</span>
                            <h3>Create and review in focused milestones.</h3>
                            <p>Design reusable components and implement approved pages or product workflows.</p>
                        </article>
                        <article className="process-step"><span>04 · IMPROVE</span>
                            <h3>Launch, measure and prioritise the next change.</h3>
                            <p>Connect analytics, review behaviour and continue improving conversion or usability.</p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft" data-block-type="childIndustryGrid" data-block-id="saas-categories">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">SaaS categories</p>
                            <p>Explore the page closest to your product and buying journey.</p>
                        </div>
                        <h2>Different SaaS models require different positioning and product decisions.</h2>
                    </div>
                    <div className="category-grid"><a className="category-card"
                            href="/industries/software-saas-companies/b2b-saas/"><b>↗</b>
                            <h3>B2B SaaS</h3>
                            <p>Software products built for business teams and professional users.</p><span>Explore
                                category</span>
                        </a><a className="category-card" href="/industries/software-saas-companies/vertical-saas/"><b>↗</b>
                            <h3>Vertical SaaS</h3>
                            <p>Products designed around one industry’s specialised workflows.</p><span>Explore
                                category</span>
                        </a><a className="category-card"
                            href="/industries/software-saas-companies/enterprise-software/"><b>↗</b>
                            <h3>Enterprise Software</h3>
                            <p>Platforms with complex accounts, permissions and integrations.</p><span>Explore
                                category</span>
                        </a><a className="category-card" href="/industries/software-saas-companies/ai-saas/"><b>↗</b>
                            <h3>AI SaaS</h3>
                            <p>Software powered by AI, automation, agents and data.</p><span>Explore category</span>
                        </a><a className="category-card"
                            href="/industries/software-saas-companies/developer-tools/"><b>↗</b>
                            <h3>Developer Tools</h3>
                            <p>APIs, infrastructure and products created for technical teams.</p><span>Explore
                                category</span>
                        </a><a className="category-card"
                            href="/industries/software-saas-companies/consumer-applications/"><b>↗</b>
                            <h3>Consumer Applications</h3>
                            <p>Subscription products designed for individual users.</p><span>Explore category</span>
                        </a></div>
                </div>
            </section>

            <section className="section" data-block-type="faq" data-block-id="faq">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Frequently asked</p>
                            <p>Key questions before starting a SaaS website or product project.</p>
                        </div>
                        <h2>Clear answers before you commit to a project.</h2>
                    </div>
                    <div className="faq-list">
                        <div className="faq-item open"><button className="faq-question"><span>Do you design both SaaS websites
                                    and product interfaces?</span><span>−</span></button>
                            <div className="faq-answer">
                                <p>Yes. A project can include positioning, the marketing website, onboarding,
                                    dashboards, product UI/UX and supporting integrations.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you improve an existing SaaS
                                    product without rebuilding the backend?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes. We can redesign user journeys and interfaces around the existing product
                                    architecture, then plan implementation in phases.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>How long does a SaaS website or product
                                    design project take?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Timelines depend on scope and content readiness. A focused marketing website is
                                    usually faster than a full product redesign or custom SaaS application.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>What is included in the free SaaS
                                    conversion review?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>We review the website or information you share and identify the clearest positioning,
                                    CTA, conversion or user-journey opportunities visible at that stage.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you work with early-stage SaaS
                                    founders?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes. The scope can focus on an MVP, launch website, investor-ready product experience
                                    or the highest-priority workflow instead of a large rebuild.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="final-cta" id="project-enquiry" data-block-type="inquiryForm"
                data-block-id="project-enquiry">
                <div className="container">
                    <div className="final-box">
                        <div className="final-copy">
                            <p className="eyebrow" style={{"color":"#cdbdff"}}>Have a defined project?</p>
                            <h2>Tell us what your SaaS product needs next.</h2>
                            <p>Use this form for a website, onboarding, dashboard, product redesign or custom SaaS
                                development requirement.</p>
                        </div>
                        <form className="full-form js-demo-form" action="/api/leads" method="post"><input type="hidden"
                                name="source_page" value="software-saas-companies" /><input type="hidden" name="offer"
                                value="saas-project-proposal" />
                            <div className="field"><label htmlFor="lead-name">Name *</label><input id="lead-name" name="name"
                                    required={true} autoComplete="name" placeholder="Your name" /></div>
                            <div className="field"><label htmlFor="lead-email">Work email *</label><input id="lead-email"
                                    name="email" type="email" required={true} autoComplete="email"
                                    placeholder="you@company.com" /></div>
                            <div className="field"><label htmlFor="lead-company">Company</label><input id="lead-company"
                                    name="company" autoComplete="organization" placeholder="Company name" /></div>
                            <div className="field"><label htmlFor="lead-need">Primary requirement</label><select id="lead-need"
                                    name="requirement">
                                    <option>SaaS marketing website</option>
                                    <option>Product UI/UX</option>
                                    <option>Onboarding</option>
                                    <option>Dashboard</option>
                                    <option>Custom SaaS development</option>
                                </select></div>
                            <div className="field full"><label htmlFor="lead-message">Project details</label><textarea
                                    id="lead-message" name="message"
                                    placeholder="Product, users, current system, main problem and desired timeline"></textarea>
                            </div>
                            <div className="success-message">Thanks—your enquiry is ready. Connect this form to the existing
                                <code>/api/leads</code> endpoint.
                            </div>
                            <div className="field full"><button className="btn" type="submit">Request a SaaS Proposal →</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        
      </main>

      <SiteFooter budgetOptions={budgetOptions} />
      <IndustryClientScripts />
    </>
  );
}
