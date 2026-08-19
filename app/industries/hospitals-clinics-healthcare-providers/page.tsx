import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HealthcareClientScripts from "./HealthcareClientScripts";

export const metadata: Metadata = {
    title: "Healthcare, Hospitals & Clinic Software Solutions | Hyperlink",
    description: "Secure, HIPAA-compliant patient portals, booking systems, and clinical workflows for modern healthcare providers and hospital networks.",
    alternates: { canonical: "/industries/hospitals-clinics-healthcare-providers/" }
};

export default function HealthcareIndustryPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="saas-industry-page">
        
            <section className="hero" data-block-type="hero" data-block-id="industry-hero">
                <div className="container">
                    <div className="breadcrumbs"><a href="/">Home</a><span>/</span><a
                            href="/industries/">Industries</a><span>/</span><strong>Healthcare & Hospitals</strong></div>
                    <div className="hero-grid">
                        <div className="hero-copy reveal">
                            <p className="eyebrow">Patient & Clinical Technology</p>
                            <h1>Software that transforms the patient experience.</h1>
                            <p className="hero-lead">From accessible digital front doors and secure patient portals to optimized clinical workflows, we build healthcare technology that reduces administrative burden and improves care delivery.</p>
                            <div className="hero-points">
                                <span>Design frictionless appointment booking and digital intake</span>
                                <span>Build secure portals that empower patients with their health data</span>
                                <span>Connect custom web interfaces securely to legacy EHR systems</span>
                            </div>
                            <div className="hero-actions"><a className="btn primary" href="#free-review">Get a Free Industry
                                    Review →</a><a className="btn" href="#solutions">Explore Solutions</a></div>
                            <p className="microcopy">No obligation. Share your current patient journey or workflow and we will identify a practical first-release opportunity.</p>
                        </div>
                        <aside className="review-card reveal-right" id="free-review"><span className="review-badge">Free Healthcare Tech review</span>
                            <h2>Find the digital journey that needs attention first.</h2>
                            <p>Share your current portal, booking flow, or clinical pain point. We will reply with a focused recommendation.</p>
                            <div className="review-deliverables"><span>Current journey
                                    observations</span><span>Highest-priority opportunity</span><span>Key data and
                                    EHR integration dependencies</span></div>
                            <form className="compact-form js-demo-form" action="/api/leads" method="post"><input
                                    type="hidden" name="source_page" value="industries/hospitals-clinics-healthcare-providers" /><input
                                    type="hidden" name="offer" value="free-industries/healthcare-review" /><input
                                    name="email" type="email" required={true} placeholder="Work email *" /><input name="company"
                                    required={true} placeholder="Clinic/Hospital name *" /><select name="goal">
                                    <option>Primary requirement</option>
                                    <option>Healthcare Websites & Service Discovery</option>
                                    <option>Appointments & Referrals</option>
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
                                approved scope, source data and HIPAA-compliant providers.</p>
                        </aside>
                    </div>
                </div>
            </section>
            
            <section className="section" data-block-type="proofStrip">
                <div className="container">
                    <div className="trust-strip reveal">
                        <div className="trust-item"><strong>Security-first design</strong><span>Architecture built to meet stringent HIPAA requirements.</span></div>
                        <div className="trust-item"><strong>EHR Connected</strong><span>Middleware strategies for Epic, Cerner, and specialized EHRs.</span></div>
                        <div className="trust-item"><strong>Accessible by default</strong><span>WCAG compliance for patients of all abilities.</span></div>
                        <div className="trust-item"><strong>Clinical alignment</strong><span>Workflows designed alongside actual care providers.</span></div>
                    </div>
                </div>
            </section>
            
            <section className="section soft" data-block-type="painOutcomeGrid">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Where digital journeys break</p>
                            <p>Care delivery requires trust, clarity, and absolute security.</p>
                        </div>
                        <h2>Fix the friction that frustrates patients and exhausts clinical staff.</h2>
                    </div>
                    <div className="problem-grid">
                        <article className="problem-card reveal-zoom"><span className="problem-num">01</span>
                            <h3>Paper intake forms delay clinical care.</h3>
                            <p>Patients spend 20 minutes with a clipboard in the waiting room, and staff spend another 20 minutes re-typing that data into the EHR.</p>
                            <span className="outcome">Outcome: Secure digital intake forms completed at home via SMS link.</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">02</span>
                            <h3>Booking workflows are confusing and rigid.</h3>
                            <p>Patients abandon online booking because the system uses internal clinical terminology rather than consumer-friendly symptoms.</p>
                            <span className="outcome">Outcome: Smart triage flows that guide patients to the correct specialist.</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">03</span>
                            <h3>Clinical communication is siloed.</h3>
                            <p>Care teams rely on disconnected pager systems and whiteboards, leading to delayed discharges and patient handoff errors.</p>
                            <span className="outcome">Outcome: Unified clinical dashboards indicating live bed capacity and status.</span>
                        </article>
                    </div>
                </div>
            </section>
            
            <section className="section" id="solutions" data-block-type="solutionTabs">
                <div className="container">
                    <div className="solutions-shell">
                        <div className="solution-tabs reveal">
                            <p className="eyebrow" style={{"color":"#bfa8ff"}}>What we build</p>
                            <h2>Connected digital capabilities across the healthcare lifecycle.</h2>
                            <button className="solution-tab active" data-key="discovery"><span>01</span><span>Websites & Service Discovery</span><span>→</span></button>
                            <button className="solution-tab" data-key="quoting"><span>02</span><span>Appointments & Referrals</span><span>→</span></button>
                            <button className="solution-tab" data-key="carrier"><span>03</span><span>Patient Service Portals</span><span>→</span></button>
                            <button className="solution-tab" data-key="tracking"><span>04</span><span>Clinical Service Workflows</span><span>→</span></button>
                            <button className="solution-tab" data-key="analytics"><span>05</span><span>Healthcare Dashboards</span><span>→</span></button>
                        </div>
                        <div className="solution-panel reveal-right">
                            <div className="solution-copy" style={{ transition: "opacity 0.3s ease-in-out" }}>
                                <span className="mini" id="solutionKicker">Service Discovery</span>
                                <h3 id="solutionTitle">Guide patients to the right care.</h3>
                                <p id="solutionText">Modern healthcare websites that make it easy for patients to find specialists, understand services, and navigate complex clinical campuses.</p>
                                <div className="solution-list" id="solutionList">
                                    <span>Provider directories</span>
                                    <span>Interactive campus maps</span>
                                    <span>Service line showcasing</span>
                                </div>
                                <Link className="btn" id="solutionLink" href="/services/healthcare-websites-and-service-discovery/">Discuss this capability →</Link>
                            </div>
                            <div className="ui-window" aria-hidden="true">
                                <div className="ui-top">
                                    <div className="ui-dots"><i></i><i></i><i></i></div><span className="ui-badge"
                                        id="uiBadge">Service Discovery</span>
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
                            <h2>A practical lifecycle from symptom search to clinical outcome.</h2>
                            <p>The platform provides patients with an accessible digital front door, offers care teams streamlined administrative tools, and gives hospital executives visibility into operational metrics.</p>
                            <div className="case-features">
                                <div className="case-feature"><span>01</span>
                                    <div><strong>Patient experience</strong><small>Symptom triage, secure telehealth portals, and digital test results.</small></div>
                                </div>
                                <div className="case-feature"><span>02</span>
                                    <div><strong>Clinical workspace</strong><small>EHR-synced schedules, digital intake reviews, and secure messaging.</small></div>
                                </div>
                                <div className="case-feature"><span>03</span>
                                    <div><strong>Executive control</strong><small>Wait time analytics, capacity planning, and automated compliance reporting.</small></div>
                                </div>
                            </div>
                            <div className="case-stack"><span>React/Next.js</span><span>HL7/FHIR APIs</span><span>Auth0/CIAM</span><span>Data Security</span><span>Integrations</span></div>
                            <a className="btn primary" href="#project-enquiry">Discuss Your Project →</a>
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
                        <h2>A practical route from fragmented systems to connected care.</h2>
                    </div>
                    <div className="process-grid">
                        <article className="process-step"><span>01 · DISCOVER</span>
                            <h3>Understand patients, staff, and compliance.</h3>
                            <p>Review target patient demographics, accessibility needs, clinical team pain points, and strict HIPAA/compliance requirements.</p>
                        </article>
                        <article className="process-step"><span>02 · STRUCTURE</span>
                            <h3>Define taxonomy, logic and EHR integrations.</h3>
                            <p>Map out exactly how patient identities are verified, how APIs will securely hit the EHR (e.g., via FHIR), and how data is encrypted at rest.</p>
                        </article>
                        <article className="process-step"><span>03 · BUILD & INTEGRATE</span>
                            <h3>Create the product in focused milestones.</h3>
                            <p>Develop headless portals, accessible booking flows, and the secure middleware required for health data transmission.</p>
                        </article>
                        <article className="process-step"><span>04 · LAUNCH & IMPROVE</span>
                            <h3>Release with clear clinical ownership.</h3>
                            <p>Document the integration layer, train the administrative staff, and optimize the booking flow based on actual patient completion rates.</p>
                        </article>
                    </div>
                </div>
            </section>
            
            <section className="section soft" data-block-type="childIndustryGrid">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Industry categories</p>
                            <p>Explore the care model closest to your organisation.</p>
                        </div>
                        <h2>Different care models require tailored digital journeys.</h2>
                    </div>
                    <div className="category-grid">
                        <a className="category-card" href="#project-enquiry"><b>→</b>
                            <h3>Hospitals & Health Networks</h3>
                            <p>Focusing on complex campus navigation, multi-specialty directories, and unified patient portals.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>→</b>
                            <h3>Specialty Clinics & Practices</h3>
                            <p>Requiring tailored intake forms, specific procedure education, and rapid referral workflows.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>→</b>
                            <h3>Telehealth & Virtual Care</h3>
                            <p>Needing secure video integrations, asynchronous messaging, and remote patient monitoring tools.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>→</b>
                            <h3>Allied Health & Therapy</h3>
                            <p>Handling recurring appointment schedules, progress tracking, and patient engagement tools.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>→</b>
                            <h3>Aged Care & Assisted Living</h3>
                            <p>Requiring family communication portals, care plan tracking, and facility management dashboards.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>→</b>
                            <h3>Diagnostic & Imaging Centers</h3>
                            <p>Focusing on secure transfer of large imaging files, rapid result delivery, and referring physician portals.</p><span>Discuss category</span>
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
                        <div className="faq-item open"><button className="faq-question"><span>Can you integrate the patient portal directly with Epic or Cerner?</span><span>−</span></button>
                            <div className="faq-answer">
                                <p>Yes. We build secure API middleware using standards like FHIR and HL7 to safely read and write data between your custom web frontend and your core Electronic Health Record system.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Are the portals you build HIPAA compliant?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes. Security and privacy are foundational. We architect solutions with encryption at rest and in transit, strict role-based access controls, and comprehensive audit logging to support your HIPAA compliance requirements.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>How do you handle accessibility for elderly or disabled patients?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>We design strictly to WCAG (Web Content Accessibility Guidelines) standards, ensuring high contrast, keyboard navigability, screen reader compatibility, and clear, simple typography for all users.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you build a portal for referring physicians, not just patients?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Absolutely. We frequently build B2B healthcare portals that allow external referring clinics to securely submit patient data, upload imaging, and track the status of their referred patients in real-time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="final-cta" id="project-enquiry">
                <div className="container">
                    <div className="final-box">
                        <div className="final-copy">
                            <p className="eyebrow" style={{"color":"#cdbdff"}}>Have a Healthcare or Clinical project?</p>
                            <h2>Tell us what your patients and care teams need next.</h2>
                            <p>Use this form for a new hospital website, patient portal, booking flow, or clinical dashboard.</p>
                        </div>
                        <form className="full-form js-demo-form" action="/api/leads" method="post"><input type="hidden"
                                name="source_page" value="industries/hospitals-clinics-healthcare-providers" /><input type="hidden" name="offer"
                                value="industries/healthcare-project-proposal" />
                            <div className="field"><label>Name *</label><input name="name" required={true} placeholder="Your name" />
                            </div>
                            <div className="field"><label>Work email *</label><input name="email" type="email" required={true}
                                    placeholder="you@hospital.org" /></div>
                            <div className="field"><label>Organisation</label><input name="company" placeholder="Clinic or Hospital name" />
                            </div>
                            <div className="field"><label>Primary requirement</label><select name="requirement">
                                    <option>Healthcare Websites & Service Discovery</option>
                                    <option>Appointments & Referrals</option>
                                    <option>Patient Service Portals</option>
                                    <option>Clinical Service Workflows</option>
                                    <option>Healthcare Service Dashboards</option>
                                    <option>Existing platform redesign</option>
                                </select></div>
                            <div className="field full"><label>Project details</label><textarea name="message"
                                    placeholder="Patient needs, clinical workflows, EHR systems and timeline"></textarea>
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
      <HealthcareClientScripts />
    </>
  );
}
