import type { Metadata } from "next";
import Link from "next/link";
import "./forestry-inputs-agricultural-services.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ForestryInputsAgriculturalServicesClientScripts from "./ForestryInputsAgriculturalServicesClientScripts";

export const metadata: Metadata = {
  alternates: { canonical: "/industries/forestry-inputs-agricultural-services/" },
  title: "Forestry & Agricultural Services Website Design & Development | Hyperlink",
  description: "Industrial corporate websites and client platforms for forestry, timber, and agricultural services. Showcase operational scale and sustainability.",
};

export default function ForestryInputsAgriculturalServicesPage() {
  return (
    <>
      <SiteHeader />

      <main id="top" className="saas-industry-page">

            <section className="hero" data-block-type="hero" data-block-id="industry-hero">
                <div className="container">
                    <div className="breadcrumbs"><a href="/">Home</a><span>/</span><a
                            href="/industries/">Industries</a><span>/</span><strong>Forestry &amp; Agricultural Services</strong>
                    </div>
                    <div className="hero-grid">
                        <div className="hero-copy reveal">
                            <p className="eyebrow">Forestry &amp; Agricultural Services</p>
                            <h1>Connect supply chains, field operations, and producers through practical digital tools.</h1>
                            <p className="hero-lead">We build corporate websites, supplier portals, field mobility apps, and operational dashboards for forestry companies, agricultural input suppliers, and rural service providers.</p>
                            <div className="hero-points">
                                <span>Present services, equipment, capabilities and safety compliance clearly</span>
                                <span>Connect contractors, operators, dispatchers and mill operations</span>
                                <span>Support harvest dockets, field surveys, logistics and yield reporting</span>
                            </div>
                            <div className="hero-actions"><a className="btn primary" href="#free-review">Get a Free Industry
                                    Review →</a><a className="btn" href="#solutions">Explore Solutions</a></div>
                            <p className="microcopy">No obligation. Share your current workflow or platform idea and we will
                                identify a practical first-release opportunity.</p>
                        </div>
                        <aside className="review-card reveal-right" id="free-review"><span className="review-badge">Free Forestry &amp; Ag Services review</span>
                            <h2>Find the digital journey that needs attention first.</h2>
                            <p>Share your current platform, workflow or project idea. We will reply with a focused
                                recommendation.</p>
                            <div className="review-deliverables"><span>Current journey
                                    observations</span><span>Highest-priority opportunity</span><span>Key data and
                                    integration dependencies</span></div>
                            <form className="compact-form js-demo-form" action="/api/leads" method="post"><input
                                    type="hidden" name="source_page" value="industries/forestry-inputs-agricultural-services" /><input
                                    type="hidden" name="offer"
                                    value="free-industries/forestry-review" /><input name="email"
                                    type="email" required={true} placeholder="Work email *" /><input name="company" required={true}
                                    placeholder="Company name *" /><select name="goal">
                                    <option>Primary requirement</option>
                                    <option>Forestry &amp; Input Platforms</option>
                                    <option>Contractor &amp; Operator Portals</option>
                                    <option>Harvest &amp; Logistics Workflows</option>
                                    <option>Field &amp; Survey Workflows</option>
                                    <option>Resource &amp; Yield Dashboards</option>
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
                            <h3>Service capabilities and safety records are unclear.</h3>
                            <p>Corporate procurement bypasses you because they can't verify your capacity or compliance online.</p>
                            <span className="outcome">Outcome: Clear service catalogues, certification vaults and compliance proof</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">02</span>
                            <h3>Contractor compliance and payments are chaotic.</h3>
                            <p>Managing harvest operators manually leads to expired insurances and payment disputes.</p>
                            <span className="outcome">Outcome: Automated induction, document tracking and rate calculators</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">03</span>
                            <h3>Field data is lost due to poor connectivity.</h3>
                            <p>Surveyors and operators revert to paper because web tools fail in remote forests.</p>
                            <span className="outcome">Outcome: Offline-first data capture, mapping and harvest dockets</span>
                        </article>
                    </div>
                </div>
            </section>
            <section className="section" id="solutions" data-block-type="solutionTabs">
                <div className="container">
                    <div className="solutions-shell">
                        <div className="solution-tabs reveal">
                            <p className="eyebrow" style={{"color":"#bfa8ff"}}>What we build</p>
                            <h2>Connected digital capabilities across the industry lifecycle.</h2>
                            <button className="solution-tab active" data-key="market"><span>01</span><span>Forestry &amp; Input Platforms</span><span>→</span></button>
                            <button className="solution-tab" data-key="production"><span>02</span><span>Contractor &amp; Operator Portals</span><span>→</span></button>
                            <button className="solution-tab" data-key="traceability"><span>03</span><span>Harvest &amp; Logistics Workflows</span><span>→</span></button>
                            <button className="solution-tab" data-key="services"><span>04</span><span>Field &amp; Survey Workflows</span><span>→</span></button>
                            <button className="solution-tab" data-key="analytics"><span>05</span><span>Resource &amp; Yield Dashboards</span><span>→</span></button>
                        </div>
                        <div className="solution-panel reveal-right">
                            <div className="solution-copy"><span className="mini" id="solutionKicker">Clear capabilities</span>
                                <h3 id="solutionTitle">Showcase capabilities, safety, and compliance.</h3>
                                <p id="solutionText">Present equipment fleets, operational regions, sustainability certifications and case studies to corporate buyers.</p>
                                <div className="solution-list" id="solutionList"><span>Service catalogues</span><span>FSC/PEFC certification display</span><span>Tender/Enquiry workflows</span></div><a className="btn" href="#project-enquiry">Discuss this
                                    capability →</a>
                            </div>
                            <div className="ui-window" aria-hidden="true">
                                <div className="ui-top">
                                    <div className="ui-dots"><i></i><i></i><i></i></div><span className="ui-badge"
                                        id="uiBadge">Forestry &amp; Input Platforms</span>
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
                    <div className="category-grid">
                        <a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Forestry &amp; Silviculture</h3>
                            <p>Land prep, planting, tending, and harvesting operations.</p><span>Discuss category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Timber &amp; Haulage Logistics</h3>
                            <p>Dispatch, dockets, routing, weighbridges, and rate matrices.</p><span>Discuss category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Agricultural Inputs &amp; Seed</h3>
                            <p>Product catalogues, SDS delivery, sales, and supply chains.</p><span>Discuss category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Rural Service Providers</h3>
                            <p>Fencing, earthmoving, spraying, and large-scale contracting.</p><span>Discuss category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Ag-Chem Manufacturers</h3>
                            <p>Regulatory compliance, technical data, formulations, and B2B orders.</p><span>Discuss category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Forestry Technology Providers</h3>
                            <p>GIS integration, drone data, sensor networks, and analytics.</p><span>Discuss category</span>
                        </a>
                    </div>
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
                        <div className="faq-item open"><button className="faq-question"><span>What forestry and ag-service businesses do you support?</span><span>−</span></button>
                            <div className="faq-answer">
                                <p>We support forestry managers, silviculture contractors, timber haulage firms, ag-chem manufacturers, and rural service providers.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you integrate with GIS mapping systems?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes. We regularly integrate Mapbox, ArcGIS, and custom spatial data layers for tracking compartments, boundaries, and environmental zones.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can field apps work completely offline?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes, we build offline-first mobile and progressive web apps utilizing local databases so surveyors and harvest crews can operate in cellular black spots.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you connect logistics apps to mill weighbridges?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes, through secure API middleware, we can match field harvest dockets to mill weight tickets for automated contractor reconciliations.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you automate contractor inductions?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes, we build digital onboarding portals that track insurance expiries, present safety videos, and collect digital signatures before operators arrive on site.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="final-cta" id="project-enquiry">
                <div className="container">
                    <div className="final-box">
                        <div className="final-copy">
                            <p className="eyebrow" style={{"color":"#cdbdff"}}>Have a Forestry or Ag Services project?</p>
                            <h2>Tell us what your customers, partners and teams need next.</h2>
                            <p>Use this form for a new platform, portal, workflow, dashboard, integration or
                                existing-product redesign.</p>
                        </div>
                        <form className="full-form js-demo-form" action="/api/leads" method="post"><input type="hidden"
                                name="source_page" value="industries/forestry-inputs-agricultural-services" /><input type="hidden"
                                name="offer" value="industries/forestry-project-proposal" />
                            <div className="field"><label>Name *</label><input name="name" required={true} placeholder="Your name" />
                            </div>
                            <div className="field"><label>Work email *</label><input name="email" type="email" required={true}
                                    placeholder="you@company.com" /></div>
                            <div className="field"><label>Company</label><input name="company" placeholder="Company name" />
                            </div>
                            <div className="field"><label>Primary requirement</label><select name="requirement">
                                    <option>Forestry &amp; Input Platforms</option>
                                    <option>Contractor &amp; Operator Portals</option>
                                    <option>Harvest &amp; Logistics Workflows</option>
                                    <option>Field &amp; Survey Workflows</option>
                                    <option>Resource &amp; Yield Dashboards</option>
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
      <ForestryInputsAgriculturalServicesClientScripts />
    </>
  );
}
