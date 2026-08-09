import type { Metadata } from "next";
import Link from "next/link";
import "../industry-template.css";
import "./construction-civil-engineering.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ConstructionCivilEngineeringClientScripts from "./ConstructionCivilEngineeringClientScripts";

export const metadata: Metadata = {
  title: "ConstructionCivilEngineering Services | Hyperlink Tech Solutions",
  description: "ConstructionCivilEngineering services built around your operations.",
};

export default function ConstructionCivilEngineeringPage() {
  return (
    <>
      <SiteHeader />

      <main id="top" className="saas-industry-page">

            <section className="hero" data-block-type="hero" data-block-id="industry-hero">
                <div className="container">
                    <div className="breadcrumbs"><a href="/">Home</a><span>/</span><a
                            href="/industries/">Industries</a><span>/</span><strong>Construction &amp; Civil
                            Engineering</strong></div>
                    <div className="hero-grid">
                        <div className="hero-copy reveal">
                            <p className="eyebrow">Construction &amp; Civil Engineering</p>
                            <h1>Present construction capability clearly and connect projects, tenders and field
                                workflows.</h1>
                            <p className="hero-lead">We build corporate websites, tender portals, project systems and
                                operational dashboards for contractors, civil-engineering firms and infrastructure
                                businesses.</p>
                            <div className="hero-points"><span>Show sectors, capabilities, equipment, certifications and
                                    completed work</span><span>Connect prequalification, tenders, suppliers and document
                                    workflows</span><span>Support projects, field reporting, safety, quality and
                                    progress visibility</span></div>
                            <div className="hero-actions"><a className="btn primary" href="#free-review">Get a Free Industry
                                    Review →</a><a className="btn" href="#solutions">Explore Solutions</a></div>
                            <p className="microcopy">No obligation. Share your current workflow or platform idea and we will
                                identify a practical first-release opportunity.</p>
                        </div>
                        <aside className="review-card reveal-right" id="free-review"><span className="review-badge">Free Construction &amp;
                                Civil Engineering review</span>
                            <h2>Find the digital journey that needs attention first.</h2>
                            <p>Share your current platform, workflow or project idea. We will reply with a focused
                                recommendation.</p>
                            <div className="review-deliverables"><span>Current journey
                                    observations</span><span>Highest-priority opportunity</span><span>Key data and
                                    integration dependencies</span></div>
                            <form className="compact-form js-demo-form" action="/api/leads" method="post"><input
                                    type="hidden" name="source_page"
                                    value="industries/construction-civil-engineering" /><input type="hidden" name="offer"
                                    value="free-industries/construction-civil-engineering-review" /><input name="email"
                                    type="email" required={true} placeholder="Work email *" /><input name="company" required={true}
                                    placeholder="Company name *" /><select name="goal">
                                    <option>Primary requirement</option>
                                    <option>Capability &amp; Project Websites</option>
                                    <option>Tender &amp; Prequalification Portals</option>
                                    <option>Project &amp; Client Portals</option>
                                    <option>Field, Safety &amp; Quality Workflows</option>
                                    <option>Construction Operations Dashboards</option>
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
                            <h3>Capability claims lack project evidence.</h3>
                            <p>The current journey creates avoidable manual work, uncertainty or repeated follow-up.</p>
                            <span className="outcome">Outcome: Structured sectors, services, projects and credentials</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">02</span>
                            <h3>Tender documents move through email and folders.</h3>
                            <p>The current journey creates avoidable manual work, uncertainty or repeated follow-up.</p>
                            <span className="outcome">Outcome: Controlled opportunities, files, reviews and
                                submissions</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">03</span>
                            <h3>Project reporting arrives late and in different formats.</h3>
                            <p>The current journey creates avoidable manual work, uncertainty or repeated follow-up.</p>
                            <span className="outcome">Outcome: Consistent site, progress and exception visibility</span>
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
                                className="solution-tab active" data-key="capabilities"><span>01</span><span>Capability
                                    &amp; Project Websites</span><span>→</span></button><button className="solution-tab"
                                data-key="tenders"><span>02</span><span>Tender &amp; Prequalification
                                    Portals</span><span>→</span></button><button className="solution-tab"
                                data-key="projects"><span>03</span><span>Project &amp; Client
                                    Portals</span><span>→</span></button><button className="solution-tab"
                                data-key="field"><span>04</span><span>Field, Safety &amp; Quality
                                    Workflows</span><span>→</span></button><button className="solution-tab"
                                data-key="operations"><span>05</span><span>Construction Operations
                                    Dashboards</span><span>→</span></button>
                        </div>
                        <div className="solution-panel reveal-right">
                            <div className="solution-copy"><span className="mini" id="solutionKicker">Buyer confidence</span>
                                <h3 id="solutionTitle">Show what the business can deliver and where it has proved it.
                                </h3>
                                <p id="solutionText">Structure sectors, services, regions, equipment, certifications,
                                    projects and outcomes.</p>
                                <div className="solution-list" id="solutionList"><span>Capability
                                        architecture</span><span>Project portfolio</span><span>Credentials and
                                        resources</span></div><a className="btn" href="#project-enquiry">Discuss this
                                    capability →</a>
                            </div>
                            <div className="ui-window" aria-hidden="true">
                                <div className="ui-top">
                                    <div className="ui-dots"><i></i><i></i><i></i></div><span className="ui-badge"
                                        id="uiBadge">Capability &amp; Project Websites</span>
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
                            <h3>General Contractors</h3>
                            <p>Capabilities, bids, projects, clients, suppliers and reporting.</p><span>Discuss
                                category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Civil &amp; Infrastructure Firms</h3>
                            <p>Roads, bridges, utilities, earthworks and public-project portfolios.</p><span>Discuss
                                category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Industrial Construction</h3>
                            <p>Plants, facilities, shutdowns, safety, quality and client collaboration.</p><span>Discuss
                                category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Specialist Contractors</h3>
                            <p>Disciplines, qualifications, tenders, field work and evidence.</p><span>Discuss
                                category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Engineering, Procurement &amp; Construction</h3>
                            <p>Programmes, suppliers, documents, milestones and governance.</p><span>Discuss
                                category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Construction Suppliers &amp; Partners</h3>
                            <p>Prequalification, packages, documents, actions and performance.</p><span>Discuss
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
                        <div className="faq-item open"><button className="faq-question"><span>What construction businesses do
                                    you support?</span><span>−</span></button>
                            <div className="faq-answer">
                                <p>We support general contractors, civil and infrastructure firms, industrial builders,
                                    specialist contractors and engineering, procurement and construction organisations.
                                </p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you build a tender or
                                    prequalification portal?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes. Workflows can organise opportunities, questionnaires, files, owners, review,
                                    approval and deadlines.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can clients view project progress and
                                    documents?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes. Role-based portals can show approved milestones, photos, documents, requests,
                                    issues and reports.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can field teams submit site records
                                    from mobile devices?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes. Responsive forms can support approved diaries, inspections, observations,
                                    actions and photo evidence.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can the platform connect with our
                                    existing business systems?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Often, yes. Integration depends on available APIs, data quality, permissions, vendor
                                    limits and the agreed system of record.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you improve an existing frontend
                                    without replacing the backend?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes, when current APIs and architecture support the required experience. We can
                                    redesign selected journeys and implement improvements in phases.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you guarantee regulatory
                                    compliance?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>No. We can implement approved fields, controls and evidence workflows, but legal,
                                    regulatory and certification decisions remain with the client and qualified
                                    authorities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="final-cta" id="project-enquiry">
                <div className="container">
                    <div className="final-box">
                        <div className="final-copy">
                            <p className="eyebrow" style={{"color":"#cdbdff"}}>Have a Construction &amp; Civil Engineering
                                project?</p>
                            <h2>Tell us what your customers, partners and teams need next.</h2>
                            <p>Use this form for a new platform, portal, workflow, dashboard, integration or
                                existing-product redesign.</p>
                        </div>
                        <form className="full-form js-demo-form" action="/api/leads" method="post"><input type="hidden"
                                name="source_page" value="industries/construction-civil-engineering" /><input
                                type="hidden" name="offer"
                                value="industries/construction-civil-engineering-project-proposal" />
                            <div className="field"><label>Name *</label><input name="name" required={true} placeholder="Your name" />
                            </div>
                            <div className="field"><label>Work email *</label><input name="email" type="email" required={true}
                                    placeholder="you@company.com" /></div>
                            <div className="field"><label>Company</label><input name="company" placeholder="Company name" />
                            </div>
                            <div className="field"><label>Primary requirement</label><select name="requirement">
                                    <option>Capability &amp; Project Websites</option>
                                    <option>Tender &amp; Prequalification Portals</option>
                                    <option>Project &amp; Client Portals</option>
                                    <option>Field, Safety &amp; Quality Workflows</option>
                                    <option>Construction Operations Dashboards</option>
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
      <ConstructionCivilEngineeringClientScripts />
    </>
  );
}
