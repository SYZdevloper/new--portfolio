import type { Metadata } from "next";
import Link from "next/link";
import "../industry-template.css";
import "./hospitals-clinics-healthcare-providers.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HospitalsClinicsHealthcareProvidersClientScripts from "./HospitalsClinicsHealthcareProvidersClientScripts";

export const metadata: Metadata = {
  title: "HospitalsClinicsHealthcareProviders Services | Hyperlink Tech Solutions",
  description: "HospitalsClinicsHealthcareProviders services built around your operations.",
};

export default function HospitalsClinicsHealthcareProvidersPage() {
  return (
    <>
      <SiteHeader />

      <main id="top" className="saas-industry-page">

            <section className="hero" data-block-type="hero" data-block-id="industry-hero">
                <div className="container">
                    <div className="breadcrumbs"><a href="/">Home</a><span>/</span><a
                            href="/industries/">Industries</a><span>/</span><strong>Hospitals, Clinics &amp; Healthcare
                            Providers</strong></div>
                    <div className="hero-grid">
                        <div className="hero-copy reveal">
                            <p className="eyebrow">Hospitals, Clinics &amp; Healthcare Providers</p>
                            <h1>Help patients find the right care, prepare confidently and access services more easily.
                            </h1>
                            <p className="hero-lead">We build accessible websites, appointment journeys and secure service
                                portals for hospitals, clinics, diagnostic centres and healthcare groups.</p>
                            <div className="hero-points"><span>Make services, specialists, locations and preparation
                                    information easier to find</span><span>Connect appointment requests, referrals,
                                    forms and patient communication</span><span>Support secure access to approved
                                    documents, results, payments and service updates</span></div>
                            <div className="hero-actions"><a className="btn primary" href="#free-review">Get a Free Industry
                                    Review →</a><a className="btn" href="#solutions">Explore Solutions</a></div>
                            <p className="microcopy">No obligation. Share your current workflow or platform idea and we will
                                identify a practical first-release opportunity.</p>
                        </div>
                        <aside className="review-card reveal-right" id="free-review"><span className="review-badge">Free Hospitals, Clinics
                                &amp; Healthcare Providers review</span>
                            <h2>Find the digital journey that needs attention first.</h2>
                            <p>Share your current platform, workflow or project idea. We will reply with a focused
                                recommendation.</p>
                            <div className="review-deliverables"><span>Current journey
                                    observations</span><span>Highest-priority opportunity</span><span>Key data and
                                    integration dependencies</span></div>
                            <form className="compact-form js-demo-form" action="/api/leads" method="post"><input
                                    type="hidden" name="source_page"
                                    value="industries/hospitals-clinics-healthcare-providers" /><input type="hidden"
                                    name="offer"
                                    value="free-industries/hospitals-clinics-healthcare-providers-review" /><input
                                    name="email" type="email" required={true} placeholder="Work email *" /><input name="company"
                                    required={true} placeholder="Company name *" /><select name="goal">
                                    <option>Primary requirement</option>
                                    <option>Healthcare Websites &amp; Service Discovery</option>
                                    <option>Appointments &amp; Referrals</option>
                                    <option>Patient Service Portals</option>
                                    <option>Clinical Service Workflows</option>
                                    <option>Healthcare Service Dashboards</option>
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
                            <h3>Patients cannot tell which service or specialist they need.</h3>
                            <p>The current journey creates avoidable manual work, uncertainty or repeated follow-up.</p>
                            <span className="outcome">Outcome: Clear symptom, specialty, clinician and location
                                discovery</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">02</span>
                            <h3>Appointment journeys require repeated calls and paperwork.</h3>
                            <p>The current journey creates avoidable manual work, uncertainty or repeated follow-up.</p>
                            <span className="outcome">Outcome: Connected booking, referral and preparation workflows</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">03</span>
                            <h3>Important instructions are scattered across pages and PDFs.</h3>
                            <p>The current journey creates avoidable manual work, uncertainty or repeated follow-up.</p>
                            <span className="outcome">Outcome: Timely, accessible guidance linked to each care
                                journey</span>
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
                                className="solution-tab active" data-key="discovery"><span>01</span><span>Healthcare
                                    Websites &amp; Service Discovery</span><span>→</span></button><button
                                className="solution-tab" data-key="appointments"><span>02</span><span>Appointments &amp;
                                    Referrals</span><span>→</span></button><button className="solution-tab"
                                data-key="patients"><span>03</span><span>Patient Service
                                    Portals</span><span>→</span></button><button className="solution-tab"
                                data-key="operations"><span>04</span><span>Clinical Service
                                    Workflows</span><span>→</span></button><button className="solution-tab"
                                data-key="insights"><span>05</span><span>Healthcare Service
                                    Dashboards</span><span>→</span></button>
                        </div>
                        <div className="solution-panel reveal-right">
                            <div className="solution-copy"><span className="mini" id="solutionKicker">Find appropriate
                                    care</span>
                                <h3 id="solutionTitle">Help patients understand available services and next steps.</h3>
                                <p id="solutionText">Structure specialties, conditions, treatments, clinicians,
                                    locations, eligibility, preparation guidance and urgent-care information.</p>
                                <div className="solution-list" id="solutionList"><span>Service and condition
                                        pages</span><span>Clinician and location search</span><span>Clear care
                                        pathways</span></div><a className="btn" href="#project-enquiry">Discuss this
                                    capability →</a>
                            </div>
                            <div className="ui-window" aria-hidden="true">
                                <div className="ui-top">
                                    <div className="ui-dots"><i></i><i></i><i></i></div><span className="ui-badge"
                                        id="uiBadge">Healthcare Websites &amp; Service Discovery</span>
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
                            <h3>Hospitals &amp; Health Systems</h3>
                            <p>Services, specialists, locations, appointments and patient access.</p><span>Discuss
                                category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Primary Care &amp; Medical Clinics</h3>
                            <p>Practitioners, services, booking, forms and patient communication.</p><span>Discuss
                                category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Specialist Clinics</h3>
                            <p>Conditions, treatments, referrals, preparation and follow-up.</p><span>Discuss
                                category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Diagnostic &amp; Imaging Centres</h3>
                            <p>Tests, locations, referrals, preparation, appointments and results access.</p>
                            <span>Discuss category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Dental &amp; Allied Health Providers</h3>
                            <p>Services, practitioners, bookings, plans and patient information.</p><span>Discuss
                                category</span>
                        </a><a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Healthcare Groups &amp; Networks</h3>
                            <p>Brands, facilities, shared services, governance and reporting.</p><span>Discuss
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
                        <div className="faq-item open"><button className="faq-question"><span>What healthcare providers do you
                                    support?</span><span>−</span></button>
                            <div className="faq-answer">
                                <p>We support hospitals, health systems, primary and specialist clinics, diagnostic
                                    centres, dental providers, allied health services and healthcare groups.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can patients book or request
                                    appointments online?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes. Journeys can support service selection, referrals, availability, reminders,
                                    changes and approved routing rules.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can patients view results and medical
                                    documents?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes, when secure and authorised clinical or document interfaces are available.
                                    Release rules and clinical communication remain the provider's responsibility.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you add symptom checking or medical
                                    guidance?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>We can implement content and workflows approved by qualified clinicians, including
                                    clear escalation and emergency guidance. The website must not present unreviewed
                                    content as diagnosis or medical advice.</p>
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
                            <p className="eyebrow" style={{"color":"#cdbdff"}}>Have a Hospitals, Clinics &amp; Healthcare
                                Providers project?</p>
                            <h2>Tell us what your customers, partners and teams need next.</h2>
                            <p>Use this form for a new platform, portal, workflow, dashboard, integration or
                                existing-product redesign.</p>
                        </div>
                        <form className="full-form js-demo-form" action="/api/leads" method="post"><input type="hidden"
                                name="source_page" value="industries/hospitals-clinics-healthcare-providers" /><input
                                type="hidden" name="offer"
                                value="industries/hospitals-clinics-healthcare-providers-project-proposal" />
                            <div className="field"><label>Name *</label><input name="name" required={true} placeholder="Your name" />
                            </div>
                            <div className="field"><label>Work email *</label><input name="email" type="email" required={true}
                                    placeholder="you@company.com" /></div>
                            <div className="field"><label>Company</label><input name="company" placeholder="Company name" />
                            </div>
                            <div className="field"><label>Primary requirement</label><select name="requirement">
                                    <option>Healthcare Websites &amp; Service Discovery</option>
                                    <option>Appointments &amp; Referrals</option>
                                    <option>Patient Service Portals</option>
                                    <option>Clinical Service Workflows</option>
                                    <option>Healthcare Service Dashboards</option>
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
      <HospitalsClinicsHealthcareProvidersClientScripts />
    </>
  );
}
