import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import ServiceHeader from "@/components/services/ServiceHeader";
import ServiceFooter from "@/components/services/ServiceFooter";

export const metadata: Metadata = {
  title: "Landing Page Design Services | Hyperlink Tech Solutions",
  description: "Conversion-focused landing page design for campaigns, product launches, lead generation and paid advertising. Get responsive design, forms, analytics and tracking.",
};

export default function LandingPageDesign() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/landing-page-design/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/landing-page-design/",
          "name": "Landing Page Design Services | Hyperlink Tech Solutions",
          "description": "Conversion-focused landing page design for campaigns, product launches, lead generation and paid advertising.",
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
                    <strong>Landing Page Design</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy">
                        <div className="hero-status">Focused landing pages designed around one conversion goal</div>
                        <p className="eyebrow">Landing page design services</p>
                        <h1 id="service-title">Landing pages designed to turn campaign traffic into <span className="accent-text">qualified action.</span></h1>
                        <p>We design and develop focused landing pages for lead-generation campaigns, paid advertising, product launches, service promotions and event registrations. Every section is organised around a specific audience, offer and conversion action—helping visitors understand the value quickly and take the next step with confidence.</p>
                        <ul className="hero-points">
                            <li>Clear offer and message hierarchy</li>
                            <li>Conversion-focused responsive design</li>
                            <li>Lead forms and call-to-action sections</li>
                            <li>Analytics and campaign-tracking foundations</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get Landing Page Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#case-study">View Landing Page Example <span className="arrow">↗</span></a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Landing page benefits">
                        <div className="proof-item">
                            <small>01 · Focused</small>
                            <strong>One audience, one offer and one primary action without unnecessary navigation or distractions.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Persuasive</small>
                            <strong>Content sections structured around visitor questions, objections, benefits and proof.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Measurable</small>
                            <strong>Forms, button clicks and campaign actions prepared for analytics and conversion tracking.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Responsive</small>
                            <strong>A clear experience across desktop, tablet and mobile campaign traffic.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When a campaign page becomes necessary</p>
                        <p>Sending campaign traffic to a general homepage often forces visitors to search for the offer, resulting in confusion, drop-offs and weaker conversion data.</p>
                        <a className="btn" href="#included">See What Is Included <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Your campaign should lead visitors toward one clear decision—not make them search for the next step.</h2>
                        <p>We help businesses replace unfocused campaign journeys with dedicated landing pages that present the right message, evidence and action in a clear sequence.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The campaign sends traffic to a generic page</h3>
                                <p>A homepage or broad service page may contain too many options and may not directly match the advertisement, email or promotion that brought the visitor there.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>The offer is difficult to understand</h3>
                                <p>Visitors leave when the page does not quickly explain what is being offered, who it is for and why it is relevant.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>The page has too many competing actions</h3>
                                <p>Multiple links, navigation choices and unrelated calls to action can distract visitors from the campaign’s main objective.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">04</span>
                                <h3>The form creates unnecessary friction</h3>
                                <p>Long, confusing or poorly designed forms reduce submissions and may prevent qualified prospects from completing an enquiry.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">05</span>
                                <h3>The mobile experience is weak</h3>
                                <p>Campaign traffic often comes from mobile devices, where poor spacing, small buttons and difficult forms can significantly affect conversion.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">06</span>
                                <h3>Campaign performance cannot be measured</h3>
                                <p>Without proper tracking, it becomes difficult to understand which campaign, message or call to action generated the enquiry.</p>
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
                                <p className="eyebrow" style={{color: "#d8c2ff"}}>Complete landing page delivery</p>
                                <h2>Everything required to turn a campaign message into a focused conversion experience.</h2>
                            </div>
                            <p>The final scope is shaped around your offer, audience, traffic source and conversion objective. The modules below show what a complete landing-page project can include.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Strategy</span>
                                <h3>Campaign and Conversion Planning</h3>
                                <p>Clarification of the campaign audience, offer, traffic source, visitor intent, objections and primary conversion action.</p>
                                <div className="deliverable-tags"><small>Audience</small><small>Offer</small><small>Conversion goal</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Structure</span>
                                <h3>Message Hierarchy and Page Flow</h3>
                                <p>Planning the order of the headline, value proposition, benefits, proof, objections, calls to action and form sections.</p>
                                <div className="deliverable-tags"><small>Content flow</small><small>Wireframe</small><small>CTA placement</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Design</span>
                                <h3>Responsive Landing Page Interface</h3>
                                <p>A custom desktop and mobile design that supports the campaign message while remaining consistent with your brand.</p>
                                <div className="deliverable-tags"><small>Desktop</small><small>Mobile</small><small>Brand consistency</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Conversion</span>
                                <h3>Forms and Call-to-Action Journeys</h3>
                                <p>Focused enquiry, registration, consultation or download journeys with validation, confirmation states and spam protection.</p>
                                <div className="deliverable-tags"><small>Lead form</small><small>Validation</small><small>Thank-you state</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>05 · Tracking</span>
                                <h3>Analytics and Conversion-Event Setup</h3>
                                <p>Preparation for measuring form submissions, button clicks, phone calls and other agreed campaign actions.</p>
                                <div className="deliverable-tags"><small>Analytics</small><small>Events</small><small>Campaign data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>06 · Launch</span>
                                <h3>Testing, Deployment and Campaign Readiness</h3>
                                <p>Responsive, browser, form and functionality checks followed by deployment and verification of agreed tracking events.</p>
                                <div className="deliverable-tags"><small>QA</small><small>Deployment</small><small>Tracking checks</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured landing page example</p>
                            <h2>Show how one focused page moved visitors from campaign interest to enquiry.</h2>
                        </div>
                        <p>Replace this demonstration with one genuine landing-page project. Explain the traffic source, campaign offer, page structure, conversion action and observable result.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Business website project visual">
                            <div className="case-visual-top">
                                <span>Campaign Landing Page</span>
                                <span>Responsive + Lead Flow</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/b9149920-0a45-4672-b659-5d8eedf2dd6b.webp" alt="Working system example" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Example Case-Study Structure</p>
                                <h2>A clearer journey from advertisement click to qualified lead.</h2>
                                <p>Use this area to explain why the original campaign page was ineffective, how the message and structure were improved and what changed after launch. Use genuine campaign data whenever it is available.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Paid traffic was being sent to a general service page that contained several competing actions.</strong></div>
                                <div className="case-fact"><small>Approach</small><strong>A dedicated landing page was created with campaign-specific messaging and a shorter enquiry form.</strong></div>
                                <div className="case-fact"><small>Result</small><strong>Replace this statement with a verified conversion improvement or measurable campaign outcome.</strong></div>
                            </div>
                            <a className="btn primary" href="/work/">View All Landing Page Projects <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">What businesses ask before starting landing page design.</h2>
                        <p>These answers clarify the scope, CMS, SEO, migration, integrations and support before a proposal request.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>What is the difference between a landing page and a website page?</summary>
                            <p>A landing page is usually created for one audience, campaign and conversion action. A standard website page may support broader navigation and provide several paths for visitors to explore.</p>
                        </details>
                        <details>
                            <summary>Can you design a landing page for paid advertising?</summary>
                            <p>Yes. Landing pages can be created for search, social, display, email or other campaigns. The page message should closely match the advertisement and visitor intent.</p>
                        </details>
                        <details>
                            <summary>Do you write the landing-page content?</summary>
                            <p>Content structure and messaging guidance can be included. Complete copywriting can also be scoped depending on the offer, available information and required research.</p>
                        </details>
                        <details>
                            <summary>Can you develop the landing page as well?</summary>
                            <p>Yes. Hyperlink Tech Solutions can manage planning, wireframing, responsive design, development, form configuration, tracking preparation, testing and deployment.</p>
                        </details>
                        <details>
                            <summary>Can the landing page connect to our CRM?</summary>
                            <p>Yes, provided the CRM supports an appropriate form, API, webhook or third-party integration method. Integration requirements should be confirmed before development begins.</p>
                        </details>
                        <details>
                            <summary>Will the landing page work on mobile devices?</summary>
                            <p>Yes. The content hierarchy, calls to action, forms, buttons and spacing are designed and tested for relevant desktop, tablet and mobile screen sizes.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Build the supporting experience around your campaign.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/custom-website-design/"><div><small>Design</small><h3>Custom Website Design</h3><p>Create a complete website experience when your requirement extends beyond a single focused campaign page.</p></div><b>Explore website design ↗</b></a>
                        <a className="related-card" href="/services/business-website-development/"><div><small>Development</small><h3>Business Website Development</h3><p>Develop a scalable, CMS-powered company website with service pages, integrations and lead-generation journeys.</p></div><b>Explore website development ↗</b></a>
                        <a className="related-card" href="/services/frontend-development/"><div><small>Code</small><h3>Frontend Development</h3><p>Implement existing landing-page designs into responsive, maintainable production interfaces.</p></div><b>Explore frontend ↗</b></a>
                        <a className="related-card" href="/services/website-maintenance/"><div><small>Support</small><h3>Website Maintenance</h3><p>Receive ongoing technical support for campaign updates, fixes, performance and landing-page improvements.</p></div><b>Explore maintenance ↗</b></a>
                    </div>
                </div>
            </section>

            <section className="section lead-section" id="contact">
                <div className="container lead-grid">
                    <div className="lead-copy">
                        <p className="eyebrow" style={{color: "#d8c2ff"}}>Plan your next campaign page</p>
                        <h2>Tell us what you are promoting and what action visitors should take.</h2>
                        <p>Share your offer, audience, traffic source, campaign objective and expected launch date. We will review the requirement and recommend a practical landing-page scope.</p>
                    </div>

                    <div className="lead-panel">
                        <h3>Tell us about your landing page</h3>
                        <p>Provide a few details about the campaign and we will respond with the most suitable next step.</p>
                        <form className="lead-form js-lead-form" data-form-name="Landing Page Design Lead"
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
                                    placeholder="Tell us what the campaign needs to include, your preferred timeline and current challenges"></textarea>
                            </div>
                            <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" />
                            <input type="hidden" name="service" value="Landing Page Design" />
                            <input type="hidden" name="landing_page" value="/services/landing-page-design/" />
                            <label className="consent">
                                <input type="checkbox" required />
                                <span>By submitting this form, you agree that Hyperlink Tech Solutions may contact you regarding your project enquiry.</span>
                            </label>
                            <button className="btn primary full" type="submit">Submit Landing Page Enquiry <span className="arrow">↗</span></button>
                            <div className="form-status" aria-live="polite"></div>
                        </form>
                        <div className="trust-line">No obligation · Your information stays private</div>
                    </div>
                </div>
            </section>
        </main>

        <ServiceFooter />
    </div>
    <a className="floating-cta" href="#contact">Get Landing Page Proposal ↗</a>
    </>
  );
}
