import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import ServiceHeader from "@/components/services/ServiceHeader";
import ServiceFooter from "@/components/services/ServiceFooter";

export const metadata: Metadata = {
  title: "Custom Website Design Services | Hyperlink Tech Solutions",
  description: "Custom website design services for businesses, SaaS companies and growing brands. Get strategy, wireframes, responsive UI design, design systems and developer-ready handoff.",
};

export default function CustomWebsiteDesign() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/custom-website-design/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/custom-website-design/",
          "name": "Custom Website Design Services | Hyperlink Tech Solutions",
          "description": "Custom website design services for businesses, SaaS companies and growing brands.",
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
                    <strong>Custom Website Design</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy">
                        <div className="hero-status">Custom website design from strategy to developer-ready handoff</div>
                        <p className="eyebrow">Custom website design services</p>
                        <h1 id="service-title">Custom websites designed around your brand, audience and business <span className="accent-text">goals.</span></h1>
                        <p>We design responsive websites for businesses, SaaS companies, service providers and growing brands that need more than a generic template. From strategy and page structure to wireframes, visual direction and responsive UI, every website is shaped around how visitors understand your offer, evaluate your credibility and move toward enquiry or purchase.</p>
                        <ul className="hero-points">
                            <li>Website strategy and information architecture</li>
                            <li>Custom wireframes and user journeys</li>
                            <li>Responsive desktop and mobile UI</li>
                            <li>Reusable design system and developer handoff</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get Website Design Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#case-study">View Website Design Example <span className="arrow">↗</span></a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Website design benefits">
                        <div className="proof-item">
                            <small>01 · Original</small>
                            <strong>The website is designed around your brand, audience and content instead of adapting a generic theme.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Structured</small>
                            <strong>Pages and navigation are organised around how visitors explore, compare and make decisions.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Responsive</small>
                            <strong>Layouts, content and calls to action are designed for desktop, tablet and mobile screens.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Build-Ready</small>
                            <strong>Approved designs are organised for clear developer handoff and consistent implementation.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When a template no longer represents the business</p>
                        <p>A generic theme may help launch quickly, but it often becomes limiting when your services, positioning, content and customer journey require a more deliberate experience.</p>
                        <a className="btn" href="#included">See What Is Included <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Your website should communicate what makes the business different—not make you look interchangeable.</h2>
                        <p>We help businesses replace generic, inconsistent or difficult-to-navigate websites with custom interfaces designed around clear positioning, stronger trust and practical conversion journeys.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The website looks like a generic template</h3>
                                <p>Visitors may struggle to remember or differentiate the brand when the layout, imagery and components feel similar to many competitors.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>The service structure is difficult to understand</h3>
                                <p>Important services, industries or solutions may be grouped poorly, hidden in navigation or explained without a clear hierarchy.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>The visual design does not match the business</h3>
                                <p>The current typography, colour usage, spacing and imagery may feel outdated or disconnected from the organisation’s actual quality.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">04</span>
                                <h3>The website lacks a clear conversion path</h3>
                                <p>Visitors may read several pages without knowing whether to enquire, book, request a proposal or explore a relevant service.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">05</span>
                                <h3>Mobile layouts feel compressed or unfinished</h3>
                                <p>A desktop template may stack poorly on smaller screens, making content, forms and navigation harder to use.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">06</span>
                                <h3>New pages are difficult to keep consistent</h3>
                                <p>Without reusable sections and design rules, every new page introduces different spacing, components and visual decisions.</p>
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
                                <p className="eyebrow" style={{color: "#d8c2ff"}}>Complete website design delivery</p>
                                <h2>Everything required to turn your positioning and content into a clear, responsive website experience.</h2>
                            </div>
                            <p>The final scope is shaped around your business, audience, page count and content requirements. The modules below show what a complete custom website-design project can include.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Discovery</span>
                                <h3>Business, Audience and Competitor Review</h3>
                                <p>Clarification of the brand, services, target audience, website goals, content priorities and competitive context.</p>
                                <div className="deliverable-tags"><small>Business goals</small><small>Audience</small><small>Competitors</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Architecture</span>
                                <h3>Sitemap and Page Hierarchy</h3>
                                <p>Planning the navigation, URL structure, page relationships and content hierarchy across the website.</p>
                                <div className="deliverable-tags"><small>Sitemap</small><small>Navigation</small><small>Page structure</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Experience</span>
                                <h3>User Journeys and Wireframes</h3>
                                <p>Wireframes for key pages, showing content order, section purpose, calls to action and responsive behaviour.</p>
                                <div className="deliverable-tags"><small>Wireframes</small><small>User journeys</small><small>CTA flow</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Direction</span>
                                <h3>Visual Style and Creative Exploration</h3>
                                <p>Definition of the visual direction through typography, colour usage, imagery, layout style and interface references.</p>
                                <div className="deliverable-tags"><small>Art direction</small><small>Typography</small><small>Visual language</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>05 · Interface</span>
                                <h3>Responsive Website UI Design</h3>
                                <p>Custom desktop and mobile designs for the agreed page templates and reusable website sections.</p>
                                <div className="deliverable-tags"><small>Desktop UI</small><small>Mobile UI</small><small>Responsive design</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>06 · System</span>
                                <h3>Reusable Components and Design Rules</h3>
                                <p>Shared buttons, cards, forms, navigation, spacing, typography and content patterns for consistency.</p>
                                <div className="deliverable-tags"><small>Components</small><small>Design system</small><small>Reusability</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>07 · States</span>
                                <h3>Interaction and Responsive Behaviour</h3>
                                <p>Design of hover, focus, menu, form, accordion, modal and other relevant interface states.</p>
                                <div className="deliverable-tags"><small>Interactions</small><small>States</small><small>Breakpoints</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>08 · Handoff</span>
                                <h3>Developer-Ready Design Files</h3>
                                <p>Organised Figma files, assets, reusable components and implementation notes for development.</p>
                                <div className="deliverable-tags"><small>Figma</small><small>Specifications</small><small>Handoff</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured website design project</p>
                            <h2>SoulHome — Digital Resource Platform for Spiritual and Inner-Work Content</h2>
                        </div>
                        <p>SoulHome received a complete automated journey from resource discovery to verified access. Customers could purchase resources and receive secure access without manual fulfilment, while the creator gained a more organised and scalable way to publish and manage paid spiritual and personal-growth content.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Website Design visual">
                            <div className="case-visual-top">
                                <span>Website Design</span>
                                <span>UI/UX Design</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/7d2de5e8-3b37-4208-958d-a51bc02499e8.webp" alt="SoulHome Platform" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">SoulHome Platform</p>
                                <h2>A complete automated journey from resource discovery to verified access.</h2>
                                <p>SoulHome needed more than a standard content website. The platform had to allow the creator to organise and present multiple paid resources while ensuring that only verified customers could access the materials they purchased. The buying and delivery process also needed to work without requiring the creator to manually verify every payment and send every resource.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Strategy</small><strong>The platform was structured around a simple customer journey: discover a resource, complete the purchase through Calendly, verify ownership through email and access the purchased material securely. Resource pages, purchase actions, account verification and protected access were planned as one connected workflow rather than separate website features.</strong></div>
                                <div className="case-fact"><small>Design</small><strong>A calm, content-focused visual system was created to match the themes of inner-child work, Akashic guidance and personal development. The interface used clear resource categories, detailed resource pages, focused purchase actions and responsive layouts so users could comfortably explore the platform across desktop and mobile devices.</strong></div>
                                <div className="case-fact"><small>Development & Integration</small><strong>Calendly was used as the purchase and booking layer. After a customer completed a purchase, Calendly sent the transaction details to the platform through a webhook. The system recorded the purchase and automatically emailed the customer a secure magic link. Once the customer verified their email, the platform confirmed their access rights and displayed the corresponding resource. The downloadable and viewable resources were stored on Google Drive, while SoulHome controlled who could access each resource based on verified purchase records.</strong></div>
                                <div className="case-fact"><small>Handoff</small><strong>The completed platform included responsive resource pages, Calendly webhook handling, purchase-record management, magic-link authentication, protected customer access and Google Drive resource delivery. The system was structured so the creator could continue adding and organising new resources as the platform expanded.</strong></div>
                            </div>
                            <a className="btn primary" href="/work/">View All Website Design Projects <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">What teams ask before starting custom website design.</h2>
                        <p>These answers clarify the scope, design process, handoff and delivery expectations before a proposal request.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>What is custom website design?</summary>
                            <p>Custom website design is the process of creating a website interface around a specific brand, audience, content structure and business objective rather than relying on a generic pre-built theme.</p>
                        </details>
                        <details>
                            <summary>How is custom website design different from using a template?</summary>
                            <p>A template provides a predefined layout and component style. Custom design allows the sitemap, page structure, visual system and responsive behaviour to be created around the actual business requirement.</p>
                        </details>
                        <details>
                            <summary>Do you design both desktop and mobile versions?</summary>
                            <p>Yes. Responsive behaviour is considered across relevant desktop, tablet and mobile screen sizes, with mobile layouts created for key page templates.</p>
                        </details>
                        <details>
                            <summary>Do you provide website development too?</summary>
                            <p>Yes. Website development can be scoped separately or combined with design as a complete project.</p>
                        </details>
                        <details>
                            <summary>Do you create wireframes before visual design?</summary>
                            <p>Yes. Wireframes are recommended for important pages because they clarify structure, content hierarchy and conversion flow before visual styling begins.</p>
                        </details>
                        <details>
                            <summary>Can you redesign our existing website?</summary>
                            <p>Yes. We can review the current website, retain useful content and improve its structure, navigation, interface and responsive experience.</p>
                        </details>
                        <details>
                            <summary>Can you work with our existing brand guidelines?</summary>
                            <p>Yes. Existing logos, colours, typography and brand guidelines can be translated into a practical website interface system.</p>
                        </details>
                        <details>
                            <summary>What if we do not have brand guidelines?</summary>
                            <p>A focused visual direction can be created for the website. Complete brand-identity development should be scoped separately when required.</p>
                        </details>
                        <details>
                            <summary>Do you write website content?</summary>
                            <p>Content structure and page guidance can be included. Complete copywriting can also be scoped depending on the number of pages, subject matter and required research.</p>
                        </details>
                        <details>
                            <summary>Will the design be SEO-friendly?</summary>
                            <p>The design can support clear page hierarchy, semantic content structure, internal linking, responsive usability and space for metadata-driven content. Technical SEO implementation takes place during development.</p>
                        </details>
                        <details>
                            <summary>Can you create a design system for the website?</summary>
                            <p>Yes. Reusable typography, spacing, buttons, forms, cards, navigation and content components can be organised into a website design system.</p>
                        </details>
                        <details>
                            <summary>Do you provide the Figma source files?</summary>
                            <p>Yes. The final Figma files and agreed assets can be included according to the commercial agreement and handoff terms.</p>
                        </details>
                        <details>
                            <summary>How many revisions are included?</summary>
                            <p>The number of revision rounds should be clearly defined in the proposal. Structured milestone reviews are recommended instead of unlimited revisions.</p>
                        </details>
                        <details>
                            <summary>How long does custom website design take?</summary>
                            <p>The timeline depends on the number of unique pages, content readiness, visual complexity, feedback cycles and approval speed. A realistic schedule is provided after scope confirmation.</p>
                        </details>
                        <details>
                            <summary>Can you support developers during implementation?</summary>
                            <p>Yes. Design QA, component clarification and responsive guidance can be included during the development phase.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Move from approved website design to a complete working platform.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/business-website-development/"><div><small>Development</small><h3>Business Website Development</h3><p>Develop the approved website into a responsive, CMS-powered and SEO-ready business platform.</p></div><b>Explore website dev ↗</b></a>
                        <a className="related-card" href="/services/landing-page-design/"><div><small>Landing Pages</small><h3>Landing Page Design</h3><p>Create focused campaign pages around one audience, offer and conversion action.</p></div><b>Explore landing pages ↗</b></a>
                        <a className="related-card" href="/services/website-redesign/"><div><small>Redesign</small><h3>Website Redesign</h3><p>Improve the structure, appearance and usability of an existing website.</p></div><b>Explore website redesign ↗</b></a>
                        <a className="related-card" href="/services/frontend-development/"><div><small>Frontend</small><h3>Frontend Development</h3><p>Implement approved website designs into responsive and reusable production components.</p></div><b>Explore frontend ↗</b></a>
                        <a className="related-card" href="/services/design-system-development/"><div><small>Systems</small><h3>Design System Development</h3><p>Create a broader reusable interface system for websites, products and applications.</p></div><b>Explore design systems ↗</b></a>
                        <a className="related-card" href="/services/website-maintenance/"><div><small>Maintenance</small><h3>Website Maintenance</h3><p>Receive ongoing support for content updates, fixes and technical improvements after launch.</p></div><b>Explore website maintenance ↗</b></a>
                    </div>
                </div>
            </section>

            <section className="section lead-section" id="contact">
                <div className="container lead-grid">
                    <div className="lead-copy">
                        <p className="eyebrow" style={{color: "#d8c2ff"}}>Design a website that represents the business properly</p>
                        <h2>Tell us what your website must communicate, organise and help visitors do.</h2>
                        <p>Share your current website, services, target audience, page requirements and expected timeline. We will review the requirement and recommend a practical website-design scope.</p>
                    </div>

                    <div className="lead-panel">
                        <h3>Tell us about your website design project</h3>
                        <p>Provide a few details about the business, website and required design scope, and we will respond with the most suitable next step.</p>
                        <form className="lead-form js-lead-form" data-form-name="Custom Website Design Lead"
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
                                    placeholder="Tell us about your current website, industry, website type, primary goal, content readiness, and required design services..."></textarea>
                            </div>
                            <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" />
                            <input type="hidden" name="service" value="Custom Website Design" />
                            <input type="hidden" name="landing_page" value="/services/custom-website-design/" />
                            <label className="consent">
                                <input type="checkbox" required />
                                <span>By submitting this form, you agree that Hyperlink Tech Solutions may contact you regarding your project enquiry.</span>
                            </label>
                            <button className="btn primary full" type="submit">Submit Website Design Enquiry <span className="arrow">↗</span></button>
                            <div className="form-status" aria-live="polite"></div>
                        </form>
                        <div className="trust-line">No obligation · Your information stays private</div>
                    </div>
                </div>
            </section>
        </main>

        <ServiceFooter />
    </div>
    <a className="floating-cta" href="#contact">Get Website Design Proposal ↗</a>
    </>
  );
}
