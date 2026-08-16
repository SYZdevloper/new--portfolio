import type { Metadata } from "next";
import Link from "next/link";
import "../industry-template.css";
import "./machinery-industrial-equipment.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MachineryIndustrialEquipmentClientScripts from "./MachineryIndustrialEquipmentClientScripts";

export const metadata: Metadata = {
  alternates: { canonical: "/industries/machinery-industrial-equipment/" },
  title: "Machinery Industrial Equipment Website Design & Development | Hyperlink",
  description: "Digital catalogs and lead-generation websites for heavy machinery and industrial equipment manufacturers. Drive global B2B inquiries and sales.",
};

export default function MachineryIndustrialEquipmentPage() {
  return (
    <>
      <SiteHeader />

      <main id="top" className="saas-industry-page">

            <section className="hero" data-block-type="hero" data-block-id="industry-hero">
                <div className="container">
                    <div className="breadcrumbs"><a href="/">Home</a><span>/</span><a
                            href="/industries/">Industries</a><span>/</span><strong>Machinery &amp; Industrial
                            Equipment</strong></div>
                    <div className="hero-grid">
                        <div className="hero-copy reveal">
                            <p className="eyebrow">Machinery &amp; industrial equipment</p>
                            <h1>Make complex equipment easier to <em>discover, configure, quote and support.</em></h1>
                            <p className="hero-lead">We build digital platforms for machinery manufacturers, equipment
                                suppliers, dealers, rental businesses and industrial service teams.</p>
                            <div className="hero-points"><span>Present technical products with clear specifications and
                                    documents</span><span>Connect enquiries, configurations and quotation
                                    workflows</span><span>Support dealers, spare parts, service requests and equipment
                                    records</span>
                            </div>
                            <div className="hero-actions"><a className="btn primary" href="#free-review">Get a Free Machinery
                                    Platform Review →</a><a className="btn" href="#solutions">See Machinery Solutions</a>
                            </div>
                            <p className="microcopy">No obligation. Share your product range, workflow or platform idea and
                                we will recommend a practical first step.</p>
                        </div>

                        <aside className="review-card reveal-right" id="free-review" data-block-type="leadMagnetForm"
                            data-block-id="free-review">
                            <span className="review-badge">Free machinery platform review</span>
                            <h2>Find the product, dealer or after-sales journey to improve first.</h2>
                            <p>Share your current website, catalogue, portal or operational workflow. We will reply with
                                a focused recommendation.</p>
                            <div className="review-deliverables"><span>Product-discovery and quotation
                                    observations</span><span>Highest-priority dealer, service or catalogue
                                    opportunity</span><span>Key data, integration and operational dependencies</span>
                            </div>
                            <form className="compact-form js-demo-form" action="/api/leads" method="post">
                                <input type="hidden" name="source_page"
                                    value="industries/machinery-industrial-equipment" />
                                <input type="hidden" name="offer" value="free-machinery-platform-review" />
                                <input name="email" type="email" required={true} autoComplete="email"
                                    placeholder="Work email *" aria-label="Work email" />
                                <input name="company" type="text" required={true} autoComplete="organization"
                                    placeholder="Company name *" aria-label="Company name" />
                                <select name="goal" aria-label="Primary priority">
                                    <option value="">Primary priority</option>
                                    <option>Product catalogue or website</option>
                                    <option>Equipment configurator and quotes</option>
                                    <option>Dealer or distributor portal</option>
                                    <option>Spare parts and service portal</option>
                                    <option>Rental or fleet platform</option>
                                    <option>Operations and reporting dashboard</option>
                                    <option>Existing platform redesign</option>
                                </select>
                                <div className="success-message">Thanks—your request is ready. Connect this form to the
                                    existing <code>/api/leads</code> endpoint.</div>
                                <button className="btn primary" type="submit">Get My Free Assessment →</button>
                            </form>
                            <p className="privacy-note">Equipment specifications, pricing, warranties, safety and compliance
                                information require client approval.</p>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="section" data-block-type="proofStrip" data-block-id="trust-strip">
                <div className="container">
                    <div className="trust-strip reveal">
                        <div className="trust-item"><strong>Specification-led discovery</strong><span>Filters, comparisons
                                and documents support technical buying decisions.</span></div>
                        <div className="trust-item"><strong>Commercial workflows connected</strong><span>Configurations,
                                enquiries, approvals and quotations use defined states.</span></div>
                        <div className="trust-item"><strong>After-sales included</strong><span>Parts, service, warranties
                                and equipment records remain visible.</span></div>
                        <div className="trust-item"><strong>Integration-aware delivery</strong><span>Enterprise, customer,
                                inventory and telematics systems use approved interfaces.</span></div>
                    </div>
                </div>
            </section>

            <section className="section soft" data-block-type="painOutcomeGrid" data-block-id="machinery-problems">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Where machinery journeys break</p>
                            <p>Industrial buyers need clear technical information and dependable follow-through.</p>
                        </div>
                        <h2>Fix the friction that slows product discovery, quotations and after-sales support.</h2>
                    </div>
                    <div className="problem-grid">
                        <article className="problem-card reveal-zoom"><span className="problem-num">01</span>
                            <h3>Complex product ranges are difficult to navigate.</h3>
                            <p>Buyers cannot quickly compare specifications, compatible options, applications or
                                technical documents.</p><span className="outcome">Outcome: structured catalogues, filters,
                                comparisons and documents</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">02</span>
                            <h3>Quotes depend on spreadsheets and individual knowledge.</h3>
                            <p>Configurations, pricing, approvals and document generation move through disconnected
                                manual steps.</p><span className="outcome">Outcome: controlled configuration, enquiry and
                                approval workflows</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">03</span>
                            <h3>Parts and service information stays disconnected.</h3>
                            <p>Equipment records, compatible parts, maintenance requests, warranties and status updates
                                live in separate tools.</p><span className="outcome">Outcome: connected equipment records,
                                requests and after-sales visibility</span>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section" id="solutions" data-block-type="solutionTabs" data-block-id="solutions">
                <div className="container">
                    <div className="solutions-shell">
                        <div className="solution-tabs reveal">
                            <p className="eyebrow" style={{"color":"#bfa8ff"}}>How we can help</p>
                            <h2>Connected digital experiences across product discovery, sales and after-sales
                                operations.</h2>
                            <button className="solution-tab active" data-key="catalogue"><span>01</span><span>Product
                                    Catalogue &amp; Discovery</span><span>→</span></button>
                            <button className="solution-tab" data-key="configuration"><span>02</span><span>Equipment
                                    Configurators &amp; Quotes</span><span>→</span></button>
                            <button className="solution-tab" data-key="dealer"><span>03</span><span>Dealer &amp; Distributor
                                    Portals</span><span>→</span></button>
                            <button className="solution-tab" data-key="service"><span>04</span><span>Parts, Service &amp;
                                    Maintenance</span><span>→</span></button>
                            <button className="solution-tab" data-key="operations"><span>05</span><span>Rental &amp;
                                    Operations Dashboards</span><span>→</span></button>
                        </div>
                        <div className="solution-panel reveal-right">
                            <div className="solution-copy"><span className="mini" id="solutionKicker">Product discovery</span>
                                <h3 id="solutionTitle">Help technical buyers find and understand the right equipment.
                                </h3>
                                <p id="solutionText">Structure product families, specifications, filters, comparisons,
                                    applications and technical documents around real buying journeys.</p>
                                <div className="solution-list" id="solutionList"><span>Product information
                                        architecture</span><span>Specification filters and
                                        comparisons</span><span>Documents, media and enquiry actions</span></div><a
                                    className="btn" id="solutionLink" href="#project-enquiry">Discuss this capability →</a>
                            </div>
                            <div className="ui-window" aria-hidden="true">
                                <div className="ui-top">
                                    <div className="ui-dots"><i></i><i></i><i></i></div><span className="ui-badge"
                                        id="uiBadge">Product Catalogue</span>
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

            <section className="section soft" id="work" data-block-type="platformBlueprint"
                data-block-id="machinery-platform-blueprint">
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
                            <p className="eyebrow">Connected machinery platform</p>
                            <h2>A connected equipment lifecycle from discovery and quotation to service and reporting.
                            </h2>
                            <p>A practical platform gives buyers clear product information, gives sales and dealers
                                controlled commercial workflows, and gives service teams useful equipment history.</p>
                            <div className="case-features">
                                <div className="case-feature"><span>01</span>
                                    <div><strong>Buyer and sales experience</strong><small>Catalogues, comparisons,
                                            configurations, enquiries, quotes and approved documents.</small></div>
                                </div>
                                <div className="case-feature"><span>02</span>
                                    <div><strong>Dealer and service workspace</strong><small>Leads, accounts, equipment,
                                            parts, requests, warranties and maintenance status.</small></div>
                                </div>
                                <div className="case-feature"><span>03</span>
                                    <div><strong>Operational control</strong><small>Product data, pricing rules,
                                            permissions, integrations, exceptions and reporting.</small></div>
                                </div>
                            </div>
                            <div className="case-stack"><span>Next.js</span><span>Product data</span><span>ERP &amp; CRM
                                    APIs</span><span>Dealer portals</span><span>Analytics</span></div><a
                                className="btn primary" href="#project-enquiry">Discuss Your Machinery Platform →</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" data-block-type="process" data-block-id="process">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">How the project moves</p>
                            <p>Product data, user roles and system dependencies remain visible throughout delivery.</p>
                        </div>
                        <h2>A practical route from complex equipment workflows to an approved digital product.</h2>
                    </div>
                    <div className="process-grid">
                        <article className="process-step"><span>01 · DISCOVER</span>
                            <h3>Understand products, users and commercial priorities.</h3>
                            <p>Review product ranges, buyers, dealers, quote logic, parts, service processes, current
                                systems and priority outcomes.</p>
                        </article>
                        <article className="process-step"><span>02 · DESIGN</span>
                            <h3>Define roles, journeys, data and integration boundaries.</h3>
                            <p>Map discovery, configuration, quotation, dealer access, after-sales states, system
                                ownership and success criteria.</p>
                        </article>
                        <article className="process-step"><span>03 · IMPLEMENT &amp; VALIDATE</span>
                            <h3>Build the platform and connect approved systems.</h3>
                            <p>Develop responsive interfaces, permissions, workflows and integrations in focused
                                milestones, then test realistic cases.</p>
                        </article>
                        <article className="process-step"><span>04 · LAUNCH &amp; IMPROVE</span>
                            <h3>Launch with clear ownership and improve from evidence.</h3>
                            <p>Release the approved product with documentation, training and support boundaries, then
                                improve from usage and operational feedback.</p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft" data-block-type="childIndustryGrid" data-block-id="machinery-categories">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Machinery and equipment categories</p>
                            <p>Explore the operating model closest to your products and customers.</p>
                        </div>
                        <h2>Different equipment businesses need different catalogue, sales and service workflows.</h2>
                    </div>
                    <div className="category-grid"><a className="category-card"
                            href="/industries/machinery-industrial-equipment/industrial-machinery-manufacturers/"><b>↗</b>
                            <h3>Industrial Machinery Manufacturers</h3>
                            <p>Product catalogues, technical documents, configurators, enquiries and sales workflows.
                            </p><span>Explore category</span>
                        </a><a className="category-card"
                            href="/industries/machinery-industrial-equipment/construction-heavy-equipment/"><b>↗</b>
                            <h3>Construction &amp; Heavy Equipment</h3>
                            <p>Equipment discovery, applications, attachments, dealer journeys and service support.</p>
                            <span>Explore category</span>
                        </a><a className="category-card"
                            href="/industries/machinery-industrial-equipment/agricultural-farm-machinery/"><b>↗</b>
                            <h3>Agricultural &amp; Farm Machinery</h3>
                            <p>Product ranges, implements, dealer networks, finance enquiries, parts and maintenance.
                            </p><span>Explore category</span>
                        </a><a className="category-card"
                            href="/industries/machinery-industrial-equipment/material-handling-equipment/"><b>↗</b>
                            <h3>Material Handling Equipment</h3>
                            <p>Capacity-led discovery, configurations, fleet records, inspections and service planning.
                            </p><span>Explore category</span>
                        </a><a className="category-card"
                            href="/industries/machinery-industrial-equipment/equipment-dealers-distributors/"><b>↗</b>
                            <h3>Equipment Dealers &amp; Distributors</h3>
                            <p>Leads, price lists, quotations, inventory visibility, documents and account workflows.
                            </p><span>Explore category</span>
                        </a><a className="category-card"
                            href="/industries/machinery-industrial-equipment/rental-parts-service/"><b>↗</b>
                            <h3>Rental, Parts &amp; Service Businesses</h3>
                            <p>Availability, reservations, compatible parts, service requests and utilisation reporting.
                            </p><span>Explore category</span>
                        </a></div>
                </div>
            </section>

            <section className="section" data-block-type="faq" data-block-id="faq">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Frequently asked</p>
                            <p>Important questions before starting a machinery-platform project.</p>
                        </div>
                        <h2>Clear answers before you digitise product, sales or after-sales workflows.</h2>
                    </div>
                    <div className="faq-list">
                        <div className="faq-item open"><button className="faq-question"><span>What machinery and equipment
                                    businesses do you support?</span><span>−</span></button>
                            <div className="faq-answer">
                                <p>We support machinery manufacturers, industrial equipment suppliers, construction and
                                    farm equipment companies, material-handling businesses, dealers, distributors,
                                    rental operators and service teams.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you build a searchable technical
                                    product catalogue?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes. Product families can include specifications, filters, comparisons, compatible
                                    accessories, drawings, brochures, manuals, videos and enquiry actions based on
                                    approved product data.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can the platform generate equipment
                                    configurations or quotations?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes. Rules-based workflows can capture options, validate combinations, calculate
                                    approved pricing, route approvals and generate branded quotation documents.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can dealers and distributors have their
                                    own portal?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes. Role-based portals can provide authorised product data, price lists, leads,
                                    quote requests, orders, documents, service cases and performance information.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you support spare parts, service
                                    and warranty workflows?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes. The platform can connect equipment records with compatible parts, service
                                    requests, maintenance schedules, warranty information, documents and status updates.
                                </p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can the platform connect with our ERP,
                                    CRM or inventory system?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Often, yes. Integration depends on available APIs, data quality, permissions, vendor
                                    limits and the agreed system of record.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you build equipment rental and
                                    fleet dashboards?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes. Rental and fleet solutions can support availability, reservations, contracts,
                                    inspections, utilisation, maintenance, documents and reporting within the approved
                                    scope.</p>
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
                            <p className="eyebrow" style={{"color":"#cdbdff"}}>Have a machinery-platform project?</p>
                            <h2>Tell us what your buyers, dealers and service teams need next.</h2>
                            <p>Use this form for a catalogue, configurator, quotation system, dealer portal, parts and
                                service platform, rental solution, dashboard or existing-product redesign.</p>
                        </div>
                        <form className="full-form js-demo-form" action="/api/leads" method="post"><input type="hidden"
                                name="source_page" value="industries/machinery-industrial-equipment" /><input
                                type="hidden" name="offer" value="machinery-industrial-equipment-project-proposal" />
                            <div className="field"><label htmlFor="lead-name">Name *</label><input id="lead-name" name="name"
                                    required={true} autoComplete="name" placeholder="Your name" /></div>
                            <div className="field"><label htmlFor="lead-email">Work email *</label><input id="lead-email"
                                    name="email" type="email" required={true} autoComplete="email"
                                    placeholder="you@company.com" /></div>
                            <div className="field"><label htmlFor="lead-company">Company</label><input id="lead-company"
                                    name="company" autoComplete="organization" placeholder="Company name" /></div>
                            <div className="field"><label htmlFor="lead-need">Primary requirement</label><select id="lead-need"
                                    name="requirement">
                                    <option>Product catalogue or website</option>
                                    <option>Equipment configurator and quotations</option>
                                    <option>Dealer or distributor portal</option>
                                    <option>Spare parts and service portal</option>
                                    <option>Rental or fleet platform</option>
                                    <option>Operations and analytics dashboard</option>
                                    <option>ERP, CRM or inventory integration</option>
                                    <option>Existing platform redesign</option>
                                </select></div>
                            <div className="field full"><label htmlFor="lead-message">Project details</label><textarea
                                    id="lead-message" name="message"
                                    placeholder="Product range, users, current workflow, systems, integrations and timeline"></textarea>
                            </div>
                            <div className="success-message">Thanks—your enquiry is ready. Connect this form to the existing
                                <code>/api/leads</code> endpoint.
                            </div>
                            <div className="field full"><button className="btn" type="submit">Request a Machinery Platform
                                    Proposal
                                    →</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        
      </main>

      <SiteFooter />
      <MachineryIndustrialEquipmentClientScripts />
    </>
  );
}
