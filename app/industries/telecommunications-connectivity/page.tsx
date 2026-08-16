import type { Metadata } from "next";
import Link from "next/link";
import "../industry-template.css";
import "./telecommunications-connectivity.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import TelecommunicationsConnectivityClientScripts from "./TelecommunicationsConnectivityClientScripts";

export const metadata: Metadata = {
  alternates: { canonical: "/industries/telecommunications-connectivity/" },
  title: "Telecommunications Connectivity Website Design & Development | Hyperlink",
  description: "Customer portals, coverage maps, and corporate websites for telecommunications and connectivity providers. Streamline subscriber management.",
};

export default function TelecommunicationsConnectivityPage() {
  return (
    <>
      <SiteHeader />

      <main id="top" className="saas-industry-page">

            <section className="hero" data-block-type="hero" data-block-id="industry-hero">
                <div className="container">
                    <div className="breadcrumbs"><a href="/">Home</a><span>/</span><a
                            href="/industries/">Industries</a><span>/</span><strong>Telecommunications &amp;
                            Connectivity</strong></div>
                    <div className="hero-grid">
                        <div className="hero-copy reveal">
                            <p className="eyebrow">Telecommunications &amp; connectivity</p>
                            <h1>Make connectivity services easier to <em>discover, order and manage.</em></h1>
                            <p className="hero-lead">We design and develop websites, portals, dashboards and digital
                                workflows for telecom operators, internet service providers and connectivity businesses
                                that need clearer customer and operational experiences.</p>
                            <div className="hero-points"><span>Help customers compare plans and check service
                                    availability</span><span>Create clearer ordering, onboarding and self-service
                                    journeys</span><span>Connect customer, partner and operational workflows</span>
                            </div>
                            <div className="hero-actions"><a className="btn primary" href="#free-review">Get a Free Telecom
                                    Digital Review →</a><a className="btn" href="#solutions">See Telecom Solutions</a></div>
                            <p className="microcopy">No obligation. Share your current website, portal or workflow and we
                                will identify the clearest digital improvement.</p>
                        </div>

                        <aside className="review-card reveal-right" id="free-review" data-block-type="leadMagnetForm"
                            data-block-id="free-review">
                            <span className="review-badge">Free digital journey review</span>
                            <h2>Find the customer or operational journey that needs attention first.</h2>
                            <p>Share your website, portal or current process. We will reply with a focused
                                recommendation
                                instead of a generic telecom technology proposal.</p>
                            <div className="review-deliverables"><span>Customer journey and content
                                    observations</span><span>Highest-priority portal or workflow
                                    opportunity</span><span>Key data, integration and operational considerations</span>
                            </div>
                            <form className="compact-form js-demo-form" action="/api/leads" method="post">
                                <input type="hidden" name="source_page" value="telecommunications-connectivity" />
                                <input type="hidden" name="offer" value="free-telecom-digital-review" />
                                <input name="email" type="email" required={true} autoComplete="email"
                                    placeholder="Work email *" aria-label="Work email" />
                                <input name="company" type="text" required={true} autoComplete="organization"
                                    placeholder="Company name *" aria-label="Company name" />
                                <select name="goal" aria-label="Primary requirement">
                                    <option value="">Primary requirement</option>
                                    <option>Telecom or ISP website</option>
                                    <option>Plan comparison and discovery</option>
                                    <option>Coverage or availability checker</option>
                                    <option>Customer self-service portal</option>
                                    <option>Dealer or partner portal</option>
                                    <option>Operations dashboard</option>
                                    <option>System integration</option>
                                </select>
                                <div className="success-message">Thanks—your request is ready. Connect this form to the
                                    existing <code>/api/leads</code> endpoint.</div>
                                <button className="btn primary" type="submit">Get My Free Review →</button>
                            </form>
                            <p className="privacy-note">This review covers digital experience and software workflows—not
                                carrier-network engineering or hardware deployment.</p>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="section" data-block-type="proofStrip" data-block-id="trust-strip">
                <div className="container">
                    <div className="trust-strip reveal">
                        <div className="trust-item"><strong>Customer-first journeys</strong><span>Plans, availability and
                                next actions are organised around real decisions.</span></div>
                        <div className="trust-item"><strong>Self-service by design</strong><span>Customers can complete
                                suitable tasks without unnecessary support handoffs.</span></div>
                        <div className="trust-item"><strong>Operational visibility</strong><span>Teams can review orders,
                                exceptions, tickets and service states.</span></div>
                        <div className="trust-item"><strong>Integration-aware delivery</strong><span>Interfaces are scoped
                                around approved CRM, billing and network data.</span></div>
                    </div>
                </div>
            </section>

            <section className="section soft" data-block-type="painOutcomeGrid" data-block-id="telecom-problems">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Where telecom journeys break</p>
                            <p>A digital channel is useful only when it clarifies a real customer or team decision.</p>
                        </div>
                        <h2>Fix the friction that creates uncertainty between service discovery, ordering and support.
                        </h2>
                    </div>
                    <div className="problem-grid">
                        <article className="problem-card reveal-zoom"><span className="problem-num">01</span>
                            <h3>Plans and services are difficult to compare.</h3>
                            <p>Customers see technical details but cannot quickly identify the right plan, included
                                features, commitment or next action.</p><span className="outcome">Outcome: clear product,
                                plan and audience-specific discovery</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">02</span>
                            <h3>Availability and ordering journeys create uncertainty.</h3>
                            <p>Customers do not know whether service is available, what information is required or what
                                happens after an order is submitted.</p><span className="outcome">Outcome: visible
                                eligibility, requirements and order states</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">03</span>
                            <h3>Customer support and operations lack a shared view.</h3>
                            <p>Account, order, service and support information is fragmented across tools, creating
                                repeated questions and manual follow-up.</p><span className="outcome">Outcome: connected
                                self-service, case and status workflows</span>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section" id="solutions" data-block-type="solutionTabs" data-block-id="solutions">
                <div className="container">
                    <div className="solutions-shell">
                        <div className="solution-tabs reveal">
                            <p className="eyebrow" style={{"color":"#bfa8ff"}}>What we build</p>
                            <h2>One digital partner across customer, partner and operational journeys.</h2>
                            <button className="solution-tab active" data-key="website"><span>01</span><span>Websites &amp;
                                    Plan Discovery</span><span>→</span></button>
                            <button className="solution-tab" data-key="availability"><span>02</span><span>Coverage &amp;
                                    Availability</span><span>→</span></button>
                            <button className="solution-tab" data-key="customer"><span>03</span><span>Customer
                                    Self-Service</span><span>→</span></button>
                            <button className="solution-tab" data-key="partner"><span>04</span><span>Dealer &amp; Partner
                                    Portals</span><span>→</span></button>
                            <button className="solution-tab" data-key="operations"><span>05</span><span>Dashboards &amp;
                                    Integrations</span><span>→</span></button>
                        </div>
                        <div className="solution-panel reveal-right">
                            <div className="solution-copy"><span className="mini" id="solutionKicker">Acquisition &amp;
                                    clarity</span>
                                <h3 id="solutionTitle">Help customers understand services, compare plans and choose the
                                    right next action.</h3>
                                <p id="solutionText">Structure audiences, service types, plan details, pricing,
                                    eligibility and conversion paths around the questions customers ask.</p>
                                <div className="solution-list" id="solutionList"><span>Service and plan
                                        architecture</span><span>Comparison and audience-specific
                                        journeys</span><span>Lead, callback and order actions</span></div><a className="btn"
                                    id="solutionLink" href="/services/business-website-development/">Explore this
                                    capability →</a>
                            </div>
                            <div className="ui-window" aria-hidden="true">
                                <div className="ui-top">
                                    <div className="ui-dots"><i></i><i></i><i></i></div><span className="ui-badge"
                                        id="uiBadge">Plan Discovery</span>
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

            <section className="section soft" id="work" data-block-type="journeyBlueprint"
                data-block-id="connectivity-blueprint">
                <div className="container">
                    <div className="case-study">
                        <div className="case-visual" aria-hidden="true">
                            <div className="case-browser">
                                <div className="case-browser-top"></div>
                                <div className="case-browser-body">
                                    <div className="case-browser-main"></div>
                                    <div className="case-browser-side"><span></span><span></span><span></span></div>
                                </div>
                            </div>
                        </div>
                        <div className="case-copy">
                            <p className="eyebrow">Connectivity journey blueprint</p>
                            <h2>A connected journey from service discovery and eligibility to order status and support.
                            </h2>
                            <p>A practical telecom experience gives customers clear plan information, confirms what is
                                available from an approved source, captures the right order details and keeps service
                                progress visible.</p>
                            <div className="case-features">
                                <div className="case-feature"><span>01</span>
                                    <div><strong>Discover &amp; qualify</strong><small>Compare plans, check availability
                                            and understand requirements.</small></div>
                                </div>
                                <div className="case-feature"><span>02</span>
                                    <div><strong>Order &amp; track</strong><small>Submit approved information, receive
                                            confirmation and view meaningful status updates.</small></div>
                                </div>
                                <div className="case-feature"><span>03</span>
                                    <div><strong>Manage &amp; support</strong><small>Access account information, bills,
                                            requests, notifications and support journeys.</small></div>
                                </div>
                            </div>
                            <div className="case-stack"><span>Web
                                    portals</span><span>APIs</span><span>CRM</span><span>Billing
                                    systems</span><span>Role-based access</span></div><a className="btn primary"
                                href="#project-enquiry">Discuss Your Telecom Project →</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" data-block-type="process" data-block-id="process">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">How the project moves</p>
                            <p>Customer journeys and system dependencies stay visible throughout delivery.</p>
                        </div>
                        <h2>A practical route from unclear requirements to an approved telecom digital experience.</h2>
                    </div>
                    <div className="process-grid">
                        <article className="process-step"><span>01 · DISCOVER</span>
                            <h3>Understand customers, services and operations.</h3>
                            <p>Review audiences, plans, regions, current channels, business systems and priority
                                outcomes.</p>
                        </article>
                        <article className="process-step"><span>02 · STRUCTURE</span>
                            <h3>Define journeys, data and system boundaries.</h3>
                            <p>Map discovery, eligibility, ordering, account, support and operational flows before
                                designing screens.</p>
                        </article>
                        <article className="process-step"><span>03 · BUILD &amp; INTEGRATE</span>
                            <h3>Create approved interfaces and connect required systems.</h3>
                            <p>Deliver responsive components, portals, permissions and integrations in focused
                                milestones.</p>
                        </article>
                        <article className="process-step"><span>04 · LAUNCH &amp; IMPROVE</span>
                            <h3>Validate critical journeys and prioritise the next change.</h3>
                            <p>Test devices, data states, forms and integrations, then improve from real usage and
                                support evidence.</p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft" data-block-type="childIndustryGrid" data-block-id="telecom-categories">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Telecom and connectivity categories</p>
                            <p>Explore the digital journey closest to your organisation and customers.</p>
                        </div>
                        <h2>Different connectivity models require different discovery, account and operational
                            experiences.</h2>
                    </div>
                    <div className="category-grid"><a className="category-card"
                            href="/telecommunications-connectivity/telecom-operators/"><b>↗</b>
                            <h3>Telecom Operators</h3>
                            <p>Plan discovery, ordering, account self-service, support and operational interfaces.</p>
                            <span>Explore
                                category</span>
                        </a><a className="category-card"
                            href="/telecommunications-connectivity/internet-service-providers/"><b>↗</b>
                            <h3>Internet Service Providers</h3>
                            <p>Address checks, broadband plans, installation status, billing and service requests.</p>
                            <span>Explore
                                category</span>
                        </a><a className="category-card" href="/telecommunications-connectivity/mvno/"><b>↗</b>
                            <h3>Mobile Virtual Network Operators</h3>
                            <p>Digital acquisition, SIM or eSIM journeys, plans, account management and support.</p>
                            <span>Explore
                                category</span>
                        </a><a className="category-card"
                            href="/telecommunications-connectivity/enterprise-connectivity/"><b>↗</b>
                            <h3>Enterprise Connectivity</h3>
                            <p>Solution discovery, site requirements, quotations, account portals and service views.</p>
                            <span>Explore
                                category</span>
                        </a><a className="category-card"
                            href="/telecommunications-connectivity/fibre-infrastructure/"><b>↗</b>
                            <h3>Fibre &amp; Infrastructure Providers</h3>
                            <p>Coverage presentation, partner enquiries, project visibility and infrastructure data
                                workflows.</p><span>Explore category</span>
                        </a><a className="category-card" href="/telecommunications-connectivity/iot-platforms/"><b>↗</b>
                            <h3>IoT &amp; Connectivity Platforms</h3>
                            <p>Device or account dashboards, usage views, alerts, permissions and API-led experiences.
                            </p><span>Explore
                                category</span>
                        </a></div>
                </div>
            </section>

            <section className="section" data-block-type="faq" data-block-id="faq">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Frequently asked</p>
                            <p>Key questions before starting a telecom website, portal or software project.</p>
                        </div>
                        <h2>Clear answers before you change a customer or operational journey.</h2>
                    </div>
                    <div className="faq-list">
                        <div className="faq-item open"><button className="faq-question"><span>What telecom and connectivity
                                    businesses do you support?</span><span>−</span></button>
                            <div className="faq-answer">
                                <p>Projects can support telecom operators, internet service providers, mobile virtual
                                    network operators, enterprise-connectivity providers, fibre and infrastructure
                                    businesses, and IoT or connectivity platforms.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you build a service-availability or
                                    coverage checker?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes, when an approved coverage, address or serviceability data source is available.
                                    The interface can collect a location, query the source and present eligible services
                                    and next steps.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you integrate with our CRM, billing
                                    or provisioning systems?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Often, yes. Feasibility depends on each system's API, authentication, data access,
                                    rate limits, documentation and commercial terms.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you build a customer self-service
                                    portal?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes. Depending on the available systems, a portal can support account details, plan
                                    information, billing views, payments, service requests, order status, support and
                                    notifications.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you improve the frontend without
                                    replacing our existing backend?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes, when the existing APIs and architecture can support the required experience. We
                                    can redesign selected journeys and implement the work in controlled phases.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Do you provide telecom network
                                    engineering or NOC services?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>This page covers digital experience and software services. Carrier-network
                                    engineering, radio planning, hardware deployment and managed network operations
                                    should be claimed only when separately available and contractually defined.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>How do you handle customer and account
                                    data?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Data handling is scoped for the specific platform and may include authentication,
                                    role-based access, encryption, secret management, logging, retention requirements
                                    and least-privilege integrations.</p>
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
                            <p className="eyebrow" style={{"color":"#cdbdff"}}>Have a defined telecom project?</p>
                            <h2>Tell us which customer or operational journey needs improvement.</h2>
                            <p>Use this form for a telecom website, plan comparison, serviceability checker, customer
                                portal, partner portal, dashboard or integration requirement.</p>
                        </div>
                        <form className="full-form js-demo-form" action="/api/leads" method="post"><input type="hidden"
                                name="source_page" value="telecommunications-connectivity" /><input type="hidden"
                                name="offer" value="telecommunications-digital-project-proposal" />
                            <div className="field"><label htmlFor="lead-name">Name *</label><input id="lead-name" name="name"
                                    required={true} autoComplete="name" placeholder="Your name" /></div>
                            <div className="field"><label htmlFor="lead-email">Work email *</label><input id="lead-email"
                                    name="email" type="email" required={true} autoComplete="email"
                                    placeholder="you@company.com" /></div>
                            <div className="field"><label htmlFor="lead-company">Company</label><input id="lead-company"
                                    name="company" autoComplete="organization" placeholder="Company name" /></div>
                            <div className="field"><label htmlFor="lead-need">Primary requirement</label><select id="lead-need"
                                    name="requirement">
                                    <option>Telecom or ISP website</option>
                                    <option>Plan comparison and discovery</option>
                                    <option>Coverage or availability checker</option>
                                    <option>Customer self-service portal</option>
                                    <option>Dealer or partner portal</option>
                                    <option>Operations dashboard</option>
                                    <option>CRM, billing or API integration</option>
                                    <option>Existing platform redesign</option>
                                </select></div>
                            <div className="field full"><label htmlFor="lead-message">Project details</label><textarea
                                    id="lead-message" name="message"
                                    placeholder="Customers, services, current systems, main problem and desired timeline"></textarea>
                            </div>
                            <div className="success-message">Thanks—your enquiry is ready. Connect this form to the existing
                                <code>/api/leads</code> endpoint.
                            </div>
                            <div className="field full"><button className="btn" type="submit">Request a Telecom Proposal
                                    →</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        
      </main>

      <SiteFooter />
      <TelecommunicationsConnectivityClientScripts />
    </>
  );
}
