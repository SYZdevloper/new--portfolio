import type { Metadata } from "next";
import Link from "next/link";
import "../industry-template.css";
import "./healthtech-telemedicine.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HealthtechTelemedicineClientScripts from "./HealthtechTelemedicineClientScripts";

export const metadata: Metadata = {
  title: "HealthtechTelemedicine Services | Hyperlink Tech Solutions",
  description: "HealthtechTelemedicine services built around your operations.",
};

export default function HealthtechTelemedicinePage() {
  return (
    <>
      <SiteHeader />

      <main id="top" className="saas-industry-page">

            <section className="hero" data-block-type="hero" data-block-id="industry-hero">
                <div className="container">
                    <div className="breadcrumbs"><a href="/">Home</a><span>/</span><a
                            href="/industries/">Industries</a><span>/</span><strong>Medical Devices &amp;
                            Diagnostics</strong></div>
                    <div className="hero-grid">
                        <div className="hero-copy reveal">
                            <p className="eyebrow">Medical Devices &amp; Diagnostics</p>
                            <h1>Make medical technologies easier to understand, evaluate, adopt and support.</h1>
                            <p className="hero-lead">We build product websites, professional resource centres and service
                                portals for medical-device, laboratory, imaging and diagnostics companies.</p>
                            <div className="hero-points"><span>Present intended use, evidence, specifications and safety
                                    information clearly</span><span>Connect buyers, clinicians, laboratories,
                                    distributors and service teams</span><span>Support training, documents, equipment,
                                    maintenance and approved result workflows</span></div>
                            <div className="hero-actions"><a className="btn primary" href="#free-review">Get a Free Industry
                                    Review →</a><a className="btn" href="#solutions">Explore Solutions</a></div>
                            <p className="microcopy">No obligation. Share your current workflow or platform idea and we will
                                identify a practical first-release opportunity.</p>
                        </div>
                        <aside className="review-card reveal-right" id="free-review"><span className="review-badge">Free Medical Devices
                                &amp; Diagnostics review</span>
                            <h2>Find the digital journey that needs attention first.</h2>
                            <p>Share your current platform, workflow or project idea. We will reply with a focused
                                recommendation.</p>
                            <div className="review-deliverables"><span>Current journey
                                    observations</span><span>Highest-priority opportunity</span><span>Key data and
                                    integration dependencies</span></div>
                            <form className="compact-form js-demo-form" action="/api/leads" method="post"><input
                                    type="hidden" name="source_page"
                                    value="industries/medical-devices-diagnostics" /><input type="hidden" name="offer"
                                    value="free-industries/medical-devices-diagnostics-review" /><input name="email"
                                    type="email" required={true} placeholder="Work email *" /><input name="company" required={true}
                                    placeholder="Company name *" /><select name="goal">
                                    <option>Primary requirement</option>
                                    <option>Medical Product Websites &amp; Catalogues</option>
                                    <option>Professional &amp; Distributor Resources</option>
                                    <option>Equipment &amp; Service Portals</option>
                                    <option>Diagnostic &amp; Laboratory Workflows</option>
                                    <option>Product &amp; Service Dashboards</option>
                                    <option>Existing platform redesign</option>
                                </select>
                                <div className="success-message">Thanks—your request is ready. Connect this form to the
                                    existing API endpoint.</div><button className="btn primary" type="submit">Get My Free
                                    Review →</button>
                            </form>
                            <p className="privacy-note">Capabilities, integrations and regulated workflows depend on
                                approved scope, source data and responsible providers.</p>
                        </aside>
                    </div>
                </div>
            </section>
            <section className="section" data-block-type="proofStrip">
                <div className="container">
                    <div className="trust-strip reveal">
                        <div className="trust-item"><strong>Industry-specific journeys</strong><span>Products and workflows
                                reflect real stakeholder decisions.</span></div>
                        <div className="trust-item"><strong>Roles connected</strong><span>Customers, partners and teams
                                receive appropriate access.</span></div>
                        <div className="trust-item"><strong>Operations included</strong><span>Documents, states, exceptions
                                and reporting remain visible.</span></div>
                        <div className="trust-item"><strong>Integration-aware</strong><span>Existing systems connect through
                                approved interfaces.</span></div>
                    </div>
                </div>
            </section>
            <section className="section soft" data-block-type="painOutcomeGrid">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Where digital journeys break</p>
                            <p>Complex industries need clear information and dependable workflow states.</p>
                        </div>
                        <h2>Fix the friction that slows customers, partners and operational teams.</h2>
                    </div>
                    <div className="problem-grid">
                        <article className="problem-card reveal-zoom"><span className="problem-num">01</span>
                            <h3>Product differences are buried in technical documents.</h3>
                            <p>The current journey creates avoidable manual work, uncertainty or repeated follow-up.</p>
                            <span className="outcome">Outcome: Clear intended use, features, evidence and specification
                                comparison</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">02</span>
                            <h3>Customers cannot find current instructions and certificates.</h3>
                            <p>The current journey creates avoidable manual work, uncertainty or repeated follow-up.</p>
                            <span className="outcome">Outcome: Controlled document, version, market and product
                                access</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">03</span>
                            <h3>Support teams lack equipment and service context.</h3>
                            <p>The current journey creates avoidable manual work, uncertainty or repeated follow-up.</p>
                            <span className="outcome">Outcome: Connected installed-base, case and maintenance
                                journeys</span>
                        </article>
                    </div>
                </div>
            </section>
            <section className="section" id="solutions" data-block-type="solutionTabs">
                <div className="container">
                    <div className="solutions-shell">
                        <div className="solution-tabs reveal">
                            <p className="eyebrow" style={{"color":"#bfa8ff"}}>What we build</p>
                            <h2>Connected digital capabilities across the industry lifecycle.</h2><button
                                className="solution-tab active" data-key="products"><span>01</span><span>Medical Product
                                    Websites &amp; Catalogues</span><span>→</span></button><button className="solution-tab"
                                data-key="resources"><span>02</span><span>Professional &amp; Distributor
                                    Resources</span><span>→</span></button><button className="solution-tab"
                                data-key="service"><span>03</span><span>Equipment &amp; Service
                                    Portals</span><span>→</span></button><button className="solution-tab"
                                data-key="diagnostics"><span>04</span><span>Diagnostic &amp; Laboratory
                                    Workflows</span><span>→</span></button><button className="solution-tab"
                                data-key="reporting"><span>05</span><span>Product &amp; Service
                                    Dashboards</span><span>→</span></button>
                        </div>
                        <div className="solution-panel reveal-right">
                            <div className="solution-copy"><span className="mini" id="solutionKicker">Product evaluation</span>
                                <h3 id="solutionTitle">Help professional buyers and users assess approved products.</h3>
                                <p id="solutionText">Structure intended use, clinical context, features, configurations,
                                    specifications, accessories, evidence, safety information and enquiries.</p>
                                <div className="solution-list" id="solutionList"><span>Product
                                        discovery</span><span>Technical comparison</span><span>Evidence and safety
                                        content</span></div><a className="btn" href="#project-enquiry">Discuss this
                                    capability →</a>
                            </div>
                            <div className="ui-window" aria-hidden="true">
                                <div className="ui-top">
                                    <div className="ui-dots"><i></i><i></i><i></i></div><span className="ui-badge"
                                        id="uiBadge">Medical Product Websites &amp; Catalogues</span>
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
            <section className="section soft" id="work" data-block-type="platformBlueprint">
                <div className="container">
                    <div className="case-study">
                        <div className="case-visual">
                            <div className="case-browser">
                                <div className="case-browser-top"></div>
                                <div className="case-browser-body">
                                    <div className="case-browser-main"></div>
                                    <div className="case-browser-side"><span></span><span></span><span></span></div>
                                </div>
                            </div>
                        </div>
                        <div className="case-copy">
                            <p className="eyebrow">Connected platform blueprint</p>
                            <h2>A practical lifecycle from discovery and engagement to operations and reporting.</h2>
                            <p>The platform gives external users clear journeys, gives teams controlled workflows and
                                gives operators useful visibility across important states and exceptions.</p>
                            <div className="case-features">
                                <div className="case-feature"><span>01</span>
                                    <div><strong>Customer experience</strong><small>Discovery, detail, enquiry, account
                                            and support journeys.</small></div>
                                </div>
                                <div className="case-feature"><span>02</span>
                                    <div><strong>Partner and team workspace</strong><small>Roles, tasks, files,
                                            approvals, status and collaboration.</small></div>
                                </div>
                                <div className="case-feature"><span>03</span>
                                    <div><strong>Operational control</strong><small>Data, permissions, integrations,
                                            exceptions and reporting.</small></div>
                                </div>
                            </div>
                            <div className="case-stack"><span>Next.js</span><span>Role-based portals</span><span>API
                                    integrations</span><span>Dashboards</span><span>Analytics</span></div><a
                                className="btn primary" href="#project-enquiry">Discuss Your Project →</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section" data-block-type="process">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">How the project moves</p>
                            <p>Users, data and integration dependencies remain visible throughout delivery.</p>
                        </div>
                        <h2>A practical route from industry workflow to an approved digital product.</h2>
                    </div>
                    <div className="process-grid">
                        <article className="process-step"><span>01 · DISCOVER</span>
                            <h3>Understand users, workflows and outcomes.</h3>
                            <p>Review audiences, data, current systems, pain points, constraints and success measures.
                            </p>
                        </article>
                        <article className="process-step"><span>02 · STRUCTURE</span>
                            <h3>Define roles, journeys and system boundaries.</h3>
                            <p>Map information, permissions, states, approvals, integrations and operational ownership.
                            </p>
                        </article>
                        <article className="process-step"><span>03 · BUILD &amp; INTEGRATE</span>
                            <h3>Create the product in focused milestones.</h3>
                            <p>Develop responsive interfaces, workflows and approved integrations, then test realistic
                                cases.</p>
                        </article>
                        <article className="process-step"><span>04 · LAUNCH &amp; IMPROVE</span>
                            <h3>Release with clear ownership.</h3>
                            <p>Document the solution, train relevant teams and improve from usage and operational
                                evidence.</p>
                        </article>
                    </div>
                </div>
            </section>
            <section className="section soft" data-block-type="childIndustryGrid">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Industry categories</p>
                            <p>Explore the business model closest to your organisation.</p>
                        </div>
                        <h2>Different operating models require different digital journeys.</h2>
                    </div>
                    <div className="category-grid"><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Medical Device Manufacturers</h3>
                            <p>Products, evidence, instructions, distributors and service.</p><span>Discuss
                                category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>In Vitro Diagnostics Companies</h3>
                            <p>Assays, instruments, laboratories, documents and support.</p><span>Discuss
                                category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Imaging &amp; Radiology Technology</h3>
                            <p>Systems, applications, sites, service and professional resources.</p><span>Discuss
                                category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Laboratory Technology Providers</h3>
                            <p>Instruments, workflows, consumables, service and integrations.</p><span>Discuss
                                category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Device Distributors</h3>
                            <p>Catalogues, territories, quotations, resources, orders and support.</p><span>Discuss
                                category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Digital Diagnostic Platforms</h3>
                            <p>Orders, data, authorised results, cases and operational reporting.</p><span>Discuss
                                category</span>
                        </a></div>
                </div>
            </section>
            <section className="section" data-block-type="faq" id="faq">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Frequently asked</p>
                            <p>Important questions before starting the project.</p>
                        </div>
                        <h2>Clear answers before you build.</h2>
                    </div>
                    <div className="faq-list">
                        <div className="faq-item open"><button className="faq-question"><span>What medical-device and
                                    diagnostics businesses do you support?</span><span>−</span></button>
                            <div className="faq-answer">
                                <p>We support device, diagnostic, imaging and laboratory technology manufacturers,
                                    distributors and digital diagnostic platforms.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you build a searchable
                                    technical-document library?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes. Documents can be organised by product, model, language, market, type, version
                                    and effective date.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can customers register equipment and
                                    request service?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes. Portals can support installed equipment, warranties, maintenance, calibration,
                                    consumables, cases and service history.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can the platform display diagnostic
                                    results?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes, where authorised systems and clinically approved release rules are available.
                                    Interpretation and clinical decisions remain with qualified healthcare
                                    professionals.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can the platform connect with our
                                    existing systems?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Often, yes. Integration depends on available APIs, data quality, permissions, vendor
                                    limits and the agreed system of record.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you build to recognised
                                    accessibility standards?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes. We can design and test against the agreed WCAG target, including keyboard use,
                                    readable structure, contrast, form guidance and assistive-technology considerations.
                                    Formal conformance depends on the final content, integrations and ongoing
                                    governance.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you guarantee complete security or
                                    compliance?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>No provider can guarantee complete security or compliance. We can implement approved
                                    technical and organisational controls, evidence workflows and testing within scope,
                                    while formal assurance remains with the client and qualified authorities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="final-cta" id="project-enquiry">
                <div className="container">
                    <div className="final-box">
                        <div className="final-copy">
                            <p className="eyebrow" style={{"color":"#cdbdff"}}>Have a Medical Devices &amp; Diagnostics project?
                            </p>
                            <h2>Tell us what your customers, partners and teams need next.</h2>
                            <p>Use this form for a new platform, portal, workflow, dashboard, integration or
                                existing-product redesign.</p>
                        </div>
                        <form className="full-form js-demo-form" action="/api/leads" method="post"><input type="hidden"
                                name="source_page" value="industries/medical-devices-diagnostics" /><input type="hidden"
                                name="offer" value="industries/medical-devices-diagnostics-project-proposal" />
                            <div className="field"><label>Name *</label><input name="name" required={true} placeholder="Your name" />
                            </div>
                            <div className="field"><label>Work email *</label><input name="email" type="email" required={true}
                                    placeholder="you@company.com" /></div>
                            <div className="field"><label>Company</label><input name="company" placeholder="Company name" />
                            </div>
                            <div className="field"><label>Primary requirement</label><select name="requirement">
                                    <option>Medical Product Websites &amp; Catalogues</option>
                                    <option>Professional &amp; Distributor Resources</option>
                                    <option>Equipment &amp; Service Portals</option>
                                    <option>Diagnostic &amp; Laboratory Workflows</option>
                                    <option>Product &amp; Service Dashboards</option>
                                    <option>Existing platform redesign</option>
                                </select></div>
                            <div className="field full"><label>Project details</label><textarea name="message"
                                    placeholder="Users, workflow, current systems, integrations and timeline"></textarea>
                            </div>
                            <div className="success-message">Thanks—your enquiry is ready. Connect this form to the existing
                                API endpoint.</div>
                            <div className="field full"><button className="btn" type="submit">Request a Project Proposal
                                    →</button></div>
                        </form>
                    </div>
                </div>
            </section>
        
      </main>

      <SiteFooter />
      <HealthtechTelemedicineClientScripts />
    </>
  );
}
