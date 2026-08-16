import type { Metadata } from "next";
import Link from "next/link";
import "../industry-template.css";
import "./it-services-cloud-cybersecurity.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ItServicesCloudCybersecurityClientScripts from "./ItServicesCloudCybersecurityClientScripts";

export const metadata: Metadata = {
  alternates: { canonical: "/industries/it-services-cloud-cybersecurity/" },
  title: "IT Services Cloud Cybersecurity Website Design & Development | Hyperlink",
  description: "High-converting websites and managed service portals for IT, cloud, and cybersecurity firms. Generate qualified B2B leads and demonstrate technical authority.",
};

export default function ItServicesCloudCybersecurityPage() {
  return (
    <>
      <SiteHeader />

      <main id="top" className="saas-industry-page">

            <section className="hero" data-block-type="hero" data-block-id="service-hero">
                <div className="container">
                    <div className="breadcrumbs"><a href="/">Home</a><span>/</span><a
                            href="/services/">Services</a><span>/</span><strong>IT Services, Cloud &amp;
                            Cybersecurity</strong></div>
                    <div className="hero-grid">
                        <div className="hero-copy reveal">
                            <p className="eyebrow">IT services, cloud &amp; cybersecurity</p>
                            <h1>Build reliable systems, control access and <em>prepare for disruption.</em></h1>
                            <p className="hero-lead">We help businesses plan, modernise and protect the technology behind
                                their applications, data and daily operations—from cloud architecture and deployment
                                to access control, monitoring and recovery readiness.</p>
                            <div className="hero-points"><span>Modernise infrastructure with a clear migration
                                    plan</span><span>Improve deployment, monitoring and recovery
                                    readiness</span><span>Build access and security controls into delivery</span>
                            </div>
                            <div className="hero-actions"><a className="btn primary" href="#free-review">Get a Free IT &amp;
                                    Cloud Assessment →</a><a className="btn" href="#solutions">See Our Solutions</a></div>
                            <p className="microcopy">No obligation. Share your current environment or priority and we will
                                recommend a practical first step.</p>
                        </div>

                        <aside className="review-card reveal-right" id="free-review" data-block-type="leadMagnetForm"
                            data-block-id="free-review">
                            <span className="review-badge">Free high-level assessment</span>
                            <h2>Find the infrastructure or security priority that matters most.</h2>
                            <p>Share your environment, planned migration or recurring concern. We will reply with a
                                focused recommendation rather than a generic technology sales deck.</p>
                            <div className="review-deliverables"><span>Current environment and priority
                                    observations</span><span>Recommended infrastructure or security first
                                    step</span><span>Key dependencies, controls and delivery considerations</span></div>
                            <form className="compact-form js-demo-form" action="/api/leads" method="post">
                                <input type="hidden" name="source_page" value="it-services-cloud-cybersecurity" />
                                <input type="hidden" name="offer" value="free-it-cloud-security-assessment" />
                                <input name="email" type="email" required={true} autoComplete="email"
                                    placeholder="Work email *" aria-label="Work email" />
                                <input name="company" type="text" required={true} autoComplete="organization"
                                    placeholder="Company name *" aria-label="Company name" />
                                <select name="goal" aria-label="Primary priority">
                                    <option value="">Primary priority</option>
                                    <option>Plan a cloud migration</option>
                                    <option>Improve cloud infrastructure</option>
                                    <option>Automate deployments</option>
                                    <option>Review access and security</option>
                                    <option>Improve backup and recovery</option>
                                    <option>Set up monitoring and alerts</option>
                                    <option>Reduce cloud costs</option>
                                </select>
                                <div className="success-message">Thanks—your request is ready. Connect this form to the
                                    existing <code>/api/leads</code> endpoint.</div>
                                <button className="btn primary" type="submit">Get My Free Assessment →</button>
                            </form>
                            <p className="privacy-note">High-level review only—not a certification, compliance audit,
                                penetration test or security guarantee.</p>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="section" data-block-type="proofStrip" data-block-id="trust-strip">
                <div className="container">
                    <div className="trust-strip reveal">
                        <div className="trust-item"><strong>Business-first priorities</strong><span>Technical work is
                                connected to availability, ownership and recovery.</span></div>
                        <div className="trust-item"><strong>Controlled change</strong><span>Dependencies, approvals and
                                rollback are planned before high-impact work.</span></div>
                        <div className="trust-item"><strong>Security built into delivery</strong><span>Access, secrets, data
                                and monitoring are considered from the start.</span></div>
                        <div className="trust-item"><strong>Documented handover</strong><span>Architecture, procedures and
                                responsibilities remain understandable.</span></div>
                    </div>
                </div>
            </section>

            <section className="section soft" data-block-type="painOutcomeGrid" data-block-id="infrastructure-problems">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Where technology risk begins</p>
                            <p>Cloud and security work is useful only when it resolves a real business dependency.</p>
                        </div>
                        <h2>Fix the gaps that create downtime, uncontrolled access and operational confusion.</h2>
                    </div>
                    <div className="problem-grid">
                        <article className="problem-card reveal-zoom"><span className="problem-num">01</span>
                            <h3>Infrastructure has grown without a clear architecture.</h3>
                            <p>Applications, databases and third-party services have been added without a reliable view
                                of ownership, dependencies or failure points.</p><span className="outcome">Outcome:
                                documented systems, dependencies and target state</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">02</span>
                            <h3>Access and deployments rely on individual knowledge.</h3>
                            <p>Shared accounts, unclear privileges and manual release steps make changes harder to
                                control and repeat.</p><span className="outcome">Outcome: controlled permissions and
                                repeatable delivery</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">03</span>
                            <h3>Backups and monitoring exist without tested response paths.</h3>
                            <p>Data may be copied and alerts may exist, but restoration, ownership and escalation have
                                not been clearly validated.</p><span className="outcome">Outcome: actionable visibility and
                                recovery readiness</span>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section" id="solutions" data-block-type="solutionTabs" data-block-id="solutions">
                <div className="container">
                    <div className="solutions-shell">
                        <div className="solution-tabs reveal">
                            <p className="eyebrow" style={{"color":"#bfa8ff"}}>How we can help</p>
                            <h2>Connected support from technology planning to secure operations.</h2>
                            <button className="solution-tab active" data-key="strategy"><span>01</span><span>IT Strategy
                                    &amp; Modernisation</span><span>→</span></button>
                            <button className="solution-tab" data-key="cloud"><span>02</span><span>Cloud Architecture &amp;
                                    Migration</span><span>→</span></button>
                            <button className="solution-tab" data-key="devops"><span>03</span><span>DevOps &amp;
                                    Deployment</span><span>→</span></button>
                            <button className="solution-tab" data-key="security"><span>04</span><span>Security Assessment
                                    &amp; Hardening</span><span>→</span></button>
                            <button className="solution-tab" data-key="resilience"><span>05</span><span>Backup, Monitoring
                                    &amp; Recovery</span><span>→</span></button>
                        </div>
                        <div className="solution-panel reveal-right">
                            <div className="solution-copy"><span className="mini" id="solutionKicker">Technology roadmap</span>
                                <h3 id="solutionTitle">Create a practical modernisation plan around real systems and
                                    business priorities.</h3>
                                <p id="solutionText">Map applications, infrastructure, dependencies, ownership and risk
                                    before deciding what to migrate, improve, integrate or retain.</p>
                                <div className="solution-list" id="solutionList"><span>Current technology
                                        assessment</span><span>Dependency and ownership mapping</span><span>Phased
                                        modernisation roadmap</span></div><a className="btn" id="solutionLink"
                                    href="#project-enquiry">Discuss this capability →</a>
                            </div>
                            <div className="ui-window" aria-hidden="true">
                                <div className="ui-top">
                                    <div className="ui-dots"><i></i><i></i><i></i></div><span className="ui-badge"
                                        id="uiBadge">IT Strategy</span>
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

            <section className="section soft" id="work" data-block-type="architectureBlueprint"
                data-block-id="cloud-security-blueprint">
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
                            <p className="eyebrow">Cloud and security blueprint</p>
                            <h2>A secure foundation connecting applications, data, delivery, visibility and recovery.
                            </h2>
                            <p>A practical architecture brings identities, applications, infrastructure, deployments,
                                logs and backups into one documented operating model—without adding more complexity
                                than the workload requires.</p>
                            <div className="case-features">
                                <div className="case-feature"><span>01</span>
                                    <div><strong>Controlled access</strong><small>Named identities, appropriate roles
                                            and protected administrative credentials.</small></div>
                                </div>
                                <div className="case-feature"><span>02</span>
                                    <div><strong>Repeatable delivery</strong><small>Environment separation, deployment
                                            checks, approvals and rollback options.</small></div>
                                </div>
                                <div className="case-feature"><span>03</span>
                                    <div><strong>Visible recovery</strong><small>Useful monitoring, protected backups
                                            and documented restoration responsibilities.</small></div>
                                </div>
                            </div>
                            <div className="case-stack"><span>Cloud infrastructure</span><span>CI/CD</span><span>Identity
                                    controls</span><span>Monitoring</span><span>Recovery</span></div><a
                                className="btn primary" href="#project-enquiry">Discuss Your Environment →</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" data-block-type="process" data-block-id="process">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">How the project moves</p>
                            <p>High-impact changes require clear scope, approvals and fallback paths.</p>
                        </div>
                        <h2>A practical route from unclear technology risk to an approved improvement.</h2>
                    </div>
                    <div className="process-grid">
                        <article className="process-step"><span>01 · DISCOVER</span>
                            <h3>Understand systems and business priorities.</h3>
                            <p>Identify services, data, users, dependencies, current pain points and the processes
                                affected by the work.</p>
                        </article>
                        <article className="process-step"><span>02 · DESIGN</span>
                            <h3>Define scope, responsibilities and target state.</h3>
                            <p>Agree access, approvals, architecture, migration sequencing, monitoring, recovery and
                                success criteria.</p>
                        </article>
                        <article className="process-step"><span>03 · IMPLEMENT &amp; VALIDATE</span>
                            <h3>Deliver controlled changes and test important cases.</h3>
                            <p>Implement in milestones and review functionality, access, deployment, monitoring,
                                failure and recovery scenarios.</p>
                        </article>
                        <article className="process-step"><span>04 · LAUNCH &amp; IMPROVE</span>
                            <h3>Document ownership and prioritise the next improvement.</h3>
                            <p>Release the approved solution with operating procedures, support boundaries and a clear
                                optimisation roadmap.</p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft" data-block-type="childServiceGrid" data-block-id="it-cloud-services">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">IT, cloud and security services</p>
                            <p>Explore the service closest to your current technology priority.</p>
                        </div>
                        <h2>Different environments need different combinations of architecture, access and resilience.
                        </h2>
                    </div>
                    <div className="category-grid"><a className="category-card"
                            href="/it-services-cloud-cybersecurity/cloud-migration/"><b>↗</b>
                            <h3>Cloud Migration</h3>
                            <p>Workload discovery, target architecture, migration sequencing, cutover and validation.
                            </p><span>Explore
                                service</span>
                        </a><a className="category-card"
                            href="/it-services-cloud-cybersecurity/cloud-infrastructure-management/"><b>↗</b>
                            <h3>Cloud Infrastructure Management</h3>
                            <p>Environment setup, resource visibility, monitoring, maintenance and documentation.</p>
                            <span>Explore
                                service</span>
                        </a><a className="category-card"
                            href="/it-services-cloud-cybersecurity/identity-access-management/"><b>↗</b>
                            <h3>Identity &amp; Access Management</h3>
                            <p>Role design, least privilege, multi-factor authentication and access lifecycle review.
                            </p><span>Explore
                                service</span>
                        </a><a className="category-card"
                            href="/it-services-cloud-cybersecurity/application-api-security/"><b>↗</b>
                            <h3>Application &amp; API Security</h3>
                            <p>Authentication, authorisation, input controls, secure integrations and event logging.</p>
                            <span>Explore
                                service</span>
                        </a><a className="category-card"
                            href="/it-services-cloud-cybersecurity/backup-disaster-recovery/"><b>↗</b>
                            <h3>Backup &amp; Disaster Recovery</h3>
                            <p>Backup coverage, retention, recovery targets, restoration procedures and exercises.</p>
                            <span>Explore
                                service</span>
                        </a><a className="category-card"
                            href="/it-services-cloud-cybersecurity/security-monitoring-incident-readiness/"><b>↗</b>
                            <h3>Monitoring &amp; Incident Readiness</h3>
                            <p>Priority alerts, ownership, response playbooks, evidence and tabletop exercises.</p>
                            <span>Explore
                                service</span>
                        </a></div>
                </div>
            </section>

            <section className="section" data-block-type="faq" data-block-id="faq">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Frequently asked</p>
                            <p>Important questions before an IT, cloud or cybersecurity engagement.</p>
                        </div>
                        <h2>Clear answers before you change or assess a business system.</h2>
                    </div>
                    <div className="faq-list">
                        <div className="faq-item open"><button className="faq-question"><span>Which cloud platforms do you
                                    support?</span><span>−</span></button>
                            <div className="faq-answer">
                                <p>Platform support is confirmed during discovery based on the workload and our current
                                    delivery expertise. The architecture is then planned around the selected provider's
                                    services, commercial terms and responsibility model.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you migrate our existing
                                    application to the cloud?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes, after assessing the application, data, dependencies and target platform. The
                                    migration plan includes testing, validation, cutover, rollback and post-migration
                                    monitoring.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Do you provide managed IT or 24/7
                                    monitoring?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Only when the commercial offering includes the required staffing, tools, escalation
                                    model and coverage. Support hours, response targets and exclusions must be
                                    documented before this service is offered.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Do you conduct penetration
                                    testing?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Security testing depends on confirmed capability and agreed scope. Any penetration
                                    test requires explicit written authorisation, approved targets, rules of engagement
                                    and reporting. A qualified specialist partner may be appropriate.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you make our business completely
                                    secure?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>No provider can guarantee complete security. The goal is to understand material
                                    risks, reduce exposure, improve detection and recovery, and maintain controls as
                                    systems and threats change.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you help with
                                    compliance?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>We can help implement technical controls, documentation and evidence processes within
                                    an agreed scope. Formal legal advice, certification or attestation must come from an
                                    appropriate qualified adviser, auditor or certification body.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>What is the difference between backup
                                    and disaster recovery?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>A backup is a protected copy of data or system state. Disaster recovery is the
                                    broader plan for restoring services, dependencies and operations within agreed time
                                    and data-loss targets.</p>
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
                            <p className="eyebrow" style={{"color":"#cdbdff"}}>Have a defined priority?</p>
                            <h2>Tell us what your systems need next.</h2>
                            <p>Use this form for cloud migration, infrastructure improvement, DevOps, access review,
                                security hardening, backup and recovery, monitoring or technical documentation.</p>
                        </div>
                        <form className="full-form js-demo-form" action="/api/leads" method="post"><input type="hidden"
                                name="source_page" value="it-services-cloud-cybersecurity" /><input type="hidden"
                                name="offer" value="it-cloud-cybersecurity-project-proposal" />
                            <div className="field"><label htmlFor="lead-name">Name *</label><input id="lead-name" name="name"
                                    required={true} autoComplete="name" placeholder="Your name" /></div>
                            <div className="field"><label htmlFor="lead-email">Work email *</label><input id="lead-email"
                                    name="email" type="email" required={true} autoComplete="email"
                                    placeholder="you@company.com" /></div>
                            <div className="field"><label htmlFor="lead-company">Company</label><input id="lead-company"
                                    name="company" autoComplete="organization" placeholder="Company name" /></div>
                            <div className="field"><label htmlFor="lead-need">Primary requirement</label><select id="lead-need"
                                    name="requirement">
                                    <option>IT strategy and modernisation</option>
                                    <option>Cloud architecture and migration</option>
                                    <option>Cloud infrastructure setup</option>
                                    <option>DevOps and deployment automation</option>
                                    <option>Identity and access management</option>
                                    <option>Security assessment and hardening</option>
                                    <option>Application and API security</option>
                                    <option>Backup and disaster recovery</option>
                                    <option>Monitoring and incident readiness</option>
                                    <option>Cloud cost optimisation</option>
                                </select></div>
                            <div className="field full"><label htmlFor="lead-message">Project details</label><textarea
                                    id="lead-message" name="message"
                                    placeholder="Current environment, systems, main concern, dependencies and desired timeline"></textarea>
                            </div>
                            <div className="success-message">Thanks—your enquiry is ready. Connect this form to the existing
                                <code>/api/leads</code> endpoint.
                            </div>
                            <div className="field full"><button className="btn" type="submit">Request an IT &amp; Cloud Proposal
                                    →</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        
      </main>

      <SiteFooter />
      <ItServicesCloudCybersecurityClientScripts />
    </>
  );
}
