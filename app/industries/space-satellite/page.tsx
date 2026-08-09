import type { Metadata } from "next";
import Link from "next/link";
import "../industry-template.css";
import "./space-satellite.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SpaceSatelliteClientScripts from "./SpaceSatelliteClientScripts";

export const metadata: Metadata = {
  title: "SpaceSatellite Services | Hyperlink Tech Solutions",
  description: "SpaceSatellite services built around your operations.",
};

export default function SpaceSatellitePage() {
  return (
    <>
      <SiteHeader />

      <main id="top" className="saas-industry-page">

            <section className="hero" data-block-type="hero" data-block-id="industry-hero">
                <div className="container">
                    <div className="breadcrumbs"><a href="/">Home</a><span>/</span><a
                            href="/industries/">Industries</a><span>/</span><strong>Space &amp; Satellite</strong></div>
                    <div className="hero-grid">
                        <div className="hero-copy reveal">
                            <p className="eyebrow">Space &amp; Satellite</p>
                            <h1>Connect mission services, satellite data and operational workflows through clear digital
                                products.</h1>
                            <p className="hero-lead">We build digital platforms for satellite operators, space-technology
                                companies, data providers, ground-service businesses and mission teams.</p>
                            <div className="hero-points"><span>Explain missions, payloads, services, coverage and data
                                    products clearly</span><span>Connect customers, orders, access, delivery and support
                                    workflows</span><span>Support ground operations, assets, schedules, incidents and
                                    reporting</span></div>
                            <div className="hero-actions"><a className="btn primary" href="#free-review">Get a Free Industry
                                    Review →</a><a className="btn" href="#solutions">Explore Solutions</a></div>
                            <p className="microcopy">No obligation. Share your current workflow or platform idea and we will
                                identify a practical first-release opportunity.</p>
                        </div>
                        <aside className="review-card reveal-right" id="free-review"><span className="review-badge">Free Space &amp;
                                Satellite review</span>
                            <h2>Find the digital journey that needs attention first.</h2>
                            <p>Share your current platform, workflow or project idea. We will reply with a focused
                                recommendation.</p>
                            <div className="review-deliverables"><span>Current journey
                                    observations</span><span>Highest-priority opportunity</span><span>Key data and
                                    integration dependencies</span></div>
                            <form className="compact-form js-demo-form" action="/api/leads" method="post"><input
                                    type="hidden" name="source_page" value="space-satellite" /><input type="hidden"
                                    name="offer" value="free-space-satellite-review" /><input name="email" type="email"
                                    required={true} placeholder="Work email *" /><input name="company" required={true}
                                    placeholder="Company name *" /><select name="goal">
                                    <option>Primary requirement</option>
                                    <option>Mission &amp; Service Platforms</option>
                                    <option>Data Product Portals</option>
                                    <option>Ground Segment Workflows</option>
                                    <option>Mission Collaboration Portals</option>
                                    <option>Mission Operations Dashboards</option>
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
                            <h3>Complex services are difficult for customers to evaluate.</h3>
                            <p>The current journey creates avoidable manual work, uncertainty or repeated follow-up.</p>
                            <span className="outcome">Outcome: Clear mission, coverage, product and service
                                information</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">02</span>
                            <h3>Data orders and delivery depend on manual coordination.</h3>
                            <p>The current journey creates avoidable manual work, uncertainty or repeated follow-up.</p>
                            <span className="outcome">Outcome: Controlled accounts, requests, processing and delivery
                                states</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">03</span>
                            <h3>Ground and mission information is spread across tools.</h3>
                            <p>The current journey creates avoidable manual work, uncertainty or repeated follow-up.</p>
                            <span className="outcome">Outcome: Focused schedule, asset, incident and performance
                                visibility</span>
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
                                className="solution-tab active" data-key="services"><span>01</span><span>Mission &amp;
                                    Service Platforms</span><span>→</span></button><button className="solution-tab"
                                data-key="data"><span>02</span><span>Data Product
                                    Portals</span><span>→</span></button><button className="solution-tab"
                                data-key="ground"><span>03</span><span>Ground Segment
                                    Workflows</span><span>→</span></button><button className="solution-tab"
                                data-key="missions"><span>04</span><span>Mission Collaboration
                                    Portals</span><span>→</span></button><button className="solution-tab"
                                data-key="operations"><span>05</span><span>Mission Operations
                                    Dashboards</span><span>→</span></button>
                        </div>
                        <div className="solution-panel reveal-right">
                            <div className="solution-copy"><span className="mini" id="solutionKicker">Service clarity</span>
                                <h3 id="solutionTitle">Explain missions, payloads, coverage and commercial services.
                                </h3>
                                <p id="solutionText">Structure capabilities, satellites, sensors, coverage, service
                                    levels, documents and enquiries.</p>
                                <div className="solution-list" id="solutionList"><span>Mission and satellite
                                        pages</span><span>Coverage experiences</span><span>Service and enquiry
                                        journeys</span></div><a className="btn" href="#project-enquiry">Discuss this
                                    capability →</a>
                            </div>
                            <div className="ui-window" aria-hidden="true">
                                <div className="ui-top">
                                    <div className="ui-dots"><i></i><i></i><i></i></div><span className="ui-badge"
                                        id="uiBadge">Mission &amp; Service Platforms</span>
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
                            <h3>Satellite Operators</h3>
                            <p>Fleets, coverage, services, customers, ground operations and reporting.</p><span>Discuss
                                category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Earth Observation Providers</h3>
                            <p>Data catalogues, orders, processing, delivery and support.</p><span>Discuss
                                category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Satellite Communications</h3>
                            <p>Coverage, capacity enquiries, partners, service and customer portals.</p><span>Discuss
                                category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Ground Segment Providers</h3>
                            <p>Stations, service requests, schedules, assets and performance.</p><span>Discuss
                                category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Space Technology Companies</h3>
                            <p>Capabilities, products, programmes, suppliers and documentation.</p><span>Discuss
                                category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Mission &amp; Data Platforms</h3>
                            <p>Stakeholders, workflows, data products, access and analytics.</p><span>Discuss
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
                        <div className="faq-item open"><button className="faq-question"><span>What space and satellite
                                    businesses do you support?</span><span>−</span></button>
                            <div className="faq-answer">
                                <p>We support satellite operators, Earth observation and communications providers,
                                    ground-segment businesses, space-technology suppliers and mission-data platforms.
                                </p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you build an interactive coverage
                                    or mission map?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes, using approved geographic, orbital, coverage and availability data from
                                    supported sources.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can customers order and download
                                    satellite data?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes, where data catalogues, licensing rules, processing systems, storage and secure
                                    delivery interfaces are available.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can the platform support ground-station
                                    scheduling?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>It can support approved request and schedule workflows; flight-critical command and
                                    control must remain in appropriately engineered and authorised systems.</p>
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
                                <p>Yes, when the current APIs and architecture can support the required experience. We
                                    can redesign selected journeys and implement improvements in phases.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Do you build flight software or
                                    command-and-control systems?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>This page focuses on web platforms and operational interfaces. Flight-critical or
                                    command systems require separate specialist engineering, assurance and
                                    authorisation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="final-cta" id="project-enquiry">
                <div className="container">
                    <div className="final-box">
                        <div className="final-copy">
                            <p className="eyebrow" style={{"color":"#cdbdff"}}>Have a Space &amp; Satellite project?</p>
                            <h2>Tell us what your customers, partners and teams need next.</h2>
                            <p>Use this form for a new platform, portal, workflow, dashboard, integration or
                                existing-product redesign.</p>
                        </div>
                        <form className="full-form js-demo-form" action="/api/leads" method="post"><input type="hidden"
                                name="source_page" value="space-satellite" /><input type="hidden" name="offer"
                                value="space-satellite-project-proposal" />
                            <div className="field"><label>Name *</label><input name="name" required={true} placeholder="Your name" />
                            </div>
                            <div className="field"><label>Work email *</label><input name="email" type="email" required={true}
                                    placeholder="you@company.com" /></div>
                            <div className="field"><label>Company</label><input name="company" placeholder="Company name" />
                            </div>
                            <div className="field"><label>Primary requirement</label><select name="requirement">
                                    <option>Mission &amp; Service Platforms</option>
                                    <option>Data Product Portals</option>
                                    <option>Ground Segment Workflows</option>
                                    <option>Mission Collaboration Portals</option>
                                    <option>Mission Operations Dashboards</option>
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
      <SpaceSatelliteClientScripts />
    </>
  );
}
