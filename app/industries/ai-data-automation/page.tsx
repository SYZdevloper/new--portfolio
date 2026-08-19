import type { Metadata } from "next";
import Link from "next/link";
import "./ai-data-automation.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AiDataAutomationClientScripts from "./AiDataAutomationClientScripts";

export const metadata: Metadata = {
  alternates: { canonical: "/industries/ai-data-automation/" },
  title: "Ai Data Automation Website Design & Development | Hyperlink",
  description: "High-converting marketing websites and complex UI/UX design for AI, data, and automation platforms. Turn technical capabilities into clear user value.",
};

export default function AiDataAutomationPage() {
  return (
    <>
      <SiteHeader />

      <main id="top" className="saas-industry-page">

            <section className="hero" data-block-type="hero" data-block-id="service-hero">
                <div className="container">
                    <div className="breadcrumbs"><a href="/">Home</a><span>/</span><a
                            href="/services/">Services</a><span>/</span><strong>AI &amp; Data Automation</strong></div>
                    <div className="hero-grid">
                        <div className="hero-copy reveal">
                            <p className="eyebrow">AI &amp; data automation services</p>
                            <h1>Turn repetitive work into <em>reliable, connected business workflows.</em></h1>
                            <p className="hero-lead">We design AI-assisted workflows, data pipelines, internal tools and
                                integrations around your real processes, approvals and systems—so information moves
                                faster without removing the controls your team needs.</p>
                            <div className="hero-points"><span>Reduce repetitive data entry and manual
                                    handoffs</span><span>Connect documents, data and business
                                    applications</span><span>Keep human review where judgement or risk requires
                                    it</span>
                            </div>
                            <div className="hero-actions"><a className="btn primary" href="#free-review">Get a Free Automation
                                    Assessment →</a><a className="btn" href="#solutions">See Automation Solutions</a></div>
                            <p className="microcopy">No obligation. Share one workflow and we will identify a practical
                                first
                                automation opportunity.</p>
                        </div>

                        <aside className="review-card reveal-right" id="free-review" data-block-type="leadMagnetForm"
                            data-block-id="free-review">
                            <span className="review-badge">Free workflow assessment</span>
                            <h2>Find the best business process to automate first.</h2>
                            <p>Share one repetitive, delayed or error-prone workflow. We will reply with a focused
                                recommendation instead of a generic AI sales deck.</p>
                            <div className="review-deliverables"><span>Current workflow and bottleneck
                                    observations</span><span>Recommended automation
                                    opportunity</span><span>Highest-priority
                                    first phase and required controls</span></div>
                            <form className="compact-form js-demo-form" action="/api/leads" method="post">
                                <input type="hidden" name="source_page" value="ai-data-automation" />
                                <input type="hidden" name="offer" value="free-ai-automation-assessment" />
                                <input name="email" type="email" required={true} autoComplete="email"
                                    placeholder="Work email *" aria-label="Work email" />
                                <input name="company" type="text" required={true} autoComplete="organization"
                                    placeholder="Company name *" aria-label="Company name" />
                                <select name="goal" aria-label="Workflow goal">
                                    <option value="">What needs improvement?</option>
                                    <option>Reduce repetitive data entry</option>
                                    <option>Connect business systems</option>
                                    <option>Process documents automatically</option>
                                    <option>Automate reports and dashboards</option>
                                    <option>Build an internal AI assistant</option>
                                    <option>Improve an existing automation</option>
                                </select>
                                <div className="success-message">Thanks—your request is ready. Connect this form to the
                                    existing <code>/api/leads</code> endpoint.</div>
                                <button className="btn primary" type="submit">Get My Free Assessment →</button>
                            </form>
                            <p className="privacy-note">Your details are used only to respond to this request.</p>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="section" data-block-type="proofStrip" data-block-id="trust-strip">
                <div className="container">
                    <div className="trust-strip reveal">
                        <div className="trust-item"><strong>Workflow-first planning</strong><span>Technology follows the
                                real process, rules and responsibilities.</span></div>
                        <div className="trust-item"><strong>Human review by design</strong><span>Exceptions and sensitive
                                actions remain visible to authorised people.</span></div>
                        <div className="trust-item"><strong>Connected delivery</strong><span>Interfaces, integrations, data
                                and automation are planned together.</span></div>
                        <div className="trust-item"><strong>Focused first phase</strong><span>Start with one measurable
                                workflow before expanding.</span></div>
                    </div>
                </div>
            </section>

            <section className="section soft" data-block-type="painOutcomeGrid" data-block-id="workflow-problems">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Where operational time is lost</p>
                            <p>Automation is useful only when it removes a real workflow obstacle.</p>
                        </div>
                        <h2>Fix the handoffs that slow teams down, create avoidable errors or hide important work.</h2>
                    </div>
                    <div className="problem-grid">
                        <article className="problem-card reveal-zoom"><span className="problem-num">01</span>
                            <h3>Teams re-enter the same information.</h3>
                            <p>Customer, order or project data is copied between forms, spreadsheets, email and
                                business applications.</p><span className="outcome">Outcome: validated data moving between
                                approved systems</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">02</span>
                            <h3>Documents and requests require repetitive handling.</h3>
                            <p>Invoices, applications, reports or tickets must be read, classified and routed by
                                hand.</p><span className="outcome">Outcome: AI-assisted extraction, classification and human
                                review</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">03</span>
                            <h3>Reports depend on manual spreadsheet work.</h3>
                            <p>Teams repeatedly collect files, clean values, reconcile metrics and prepare the same
                                summaries.</p><span className="outcome">Outcome: scheduled data preparation and
                                decision-ready dashboards</span>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section" id="solutions" data-block-type="solutionTabs" data-block-id="solutions">
                <div className="container">
                    <div className="solutions-shell">
                        <div className="solution-tabs reveal">
                            <p className="eyebrow" style={{"color":"#bfa8ff"}}>What we automate</p>
                            <h2>One partner across workflows, data and business systems.</h2>
                            <button className="solution-tab active" data-key="workflow"><span>01</span><span>Workflow
                                    Automation</span><span>→</span></button>
                            <button className="solution-tab" data-key="integration"><span>02</span><span>Data
                                    Integration</span><span>→</span></button>
                            <button className="solution-tab" data-key="documents"><span>03</span><span>Document
                                    Processing</span><span>→</span></button>
                            <button className="solution-tab" data-key="assistant"><span>04</span><span>Internal AI
                                    Assistants</span><span>→</span></button>
                            <button className="solution-tab" data-key="reporting"><span>05</span><span>Reporting &amp;
                                    Dashboards</span><span>→</span></button>
                        </div>
                        <div className="solution-panel reveal-right">
                            <div className="solution-copy"><span className="mini" id="solutionKicker">Process
                                    orchestration</span>
                                <h3 id="solutionTitle">Turn repetitive multi-step work into a visible, controlled
                                    workflow.</h3>
                                <p id="solutionText">Connect forms, rules, assignments, approvals and notifications so
                                    work moves forward without depending on manual follow-up.</p>
                                <div className="solution-list" id="solutionList"><span>Form-to-workflow
                                        automation</span><span>Approvals, routing and escalation</span><span>Exception
                                        queues for human review</span></div><a className="btn" id="solutionLink"
                                    href="/services/custom-web-app-development/">Explore this capability →</a>
                            </div>
                            <div className="ui-window" aria-hidden="true">
                                <div className="ui-top">
                                    <div className="ui-dots"><i></i><i></i><i></i></div><span className="ui-badge"
                                        id="uiBadge">Workflow Automation</span>
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

            <section className="section soft" id="work" data-block-type="workflowBlueprint"
                data-block-id="automation-blueprint">
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
                            <p className="eyebrow">Example automation blueprint</p>
                            <h2>Lead-to-operations workflow with validation, routing and human review.</h2>
                            <p>A practical automation can capture an enquiry, validate required information, create or
                                update the relevant business record, assign ownership and surface exceptions before a
                                sensitive action is completed.</p>
                            <div className="case-features">
                                <div className="case-feature"><span>01</span>
                                    <div><strong>Structured intake</strong><small>Forms, email or application events
                                            enter one controlled workflow.</small></div>
                                </div>
                                <div className="case-feature"><span>02</span>
                                    <div><strong>Rules and integrations</strong><small>Approved data is checked, mapped
                                            and sent to the required systems.</small></div>
                                </div>
                                <div className="case-feature"><span>03</span>
                                    <div><strong>Visible exceptions</strong><small>Uncertain or high-risk cases are
                                            routed to an authorised person.</small></div>
                                </div>
                            </div>
                            <div className="case-stack"><span>APIs</span><span>Webhooks</span><span>Databases</span><span>AI
                                    models</span><span>Role-based access</span></div><a className="btn primary"
                                href="#project-enquiry">Discuss Your Workflow →</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" data-block-type="process" data-block-id="process">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">How the project moves</p>
                            <p>Start with one valuable process, validate it and expand from evidence.</p>
                        </div>
                        <h2>A practical route from manual work to a maintainable automation.</h2>
                    </div>
                    <div className="process-grid">
                        <article className="process-step"><span>01 · DISCOVER</span>
                            <h3>Map the process, systems and exceptions.</h3>
                            <p>Document the trigger, inputs, people, decisions, tools, failure points and desired
                                output.</p>
                        </article>
                        <article className="process-step"><span>02 · DEFINE</span>
                            <h3>Agree rules, controls and success measures.</h3>
                            <p>Decide what can be automated, where judgement stays human and how the result will be
                                evaluated.</p>
                        </article>
                        <article className="process-step"><span>03 · BUILD &amp; VALIDATE</span>
                            <h3>Create a focused workflow and test realistic cases.</h3>
                            <p>Connect the required systems and test normal, incomplete, duplicate and exception
                                scenarios.</p>
                        </article>
                        <article className="process-step"><span>04 · LAUNCH &amp; IMPROVE</span>
                            <h3>Deploy with monitoring, ownership and a fallback path.</h3>
                            <p>Launch the approved workflow, document responsibility and prioritise changes from real
                                usage.</p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft" data-block-type="childServiceGrid" data-block-id="automation-use-cases">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Automation use cases</p>
                            <p>Choose the workflow closest to your current operational bottleneck.</p>
                        </div>
                        <h2>Different teams need different combinations of rules, data, AI and human approval.</h2>
                    </div>
                    <div className="category-grid"><a className="category-card"
                            href="/ai-data-automation/sales-crm-automation/"><b>↗</b>
                            <h3>Sales &amp; CRM Automation</h3>
                            <p>Lead capture, classification, routing, record creation and follow-up ownership.</p>
                            <span>Explore
                                service</span>
                        </a><a className="category-card" href="/ai-data-automation/document-processing/"><b>↗</b>
                            <h3>Document Processing</h3>
                            <p>Extraction, classification, validation and exception review for business documents.</p>
                            <span>Explore
                                service</span>
                        </a><a className="category-card" href="/ai-data-automation/reporting-automation/"><b>↗</b>
                            <h3>Reporting Automation</h3>
                            <p>Scheduled data preparation, reconciled metrics and role-specific dashboards.</p>
                            <span>Explore
                                service</span>
                        </a><a className="category-card" href="/ai-data-automation/customer-support-workflows/"><b>↗</b>
                            <h3>Customer Support Workflows</h3>
                            <p>Ticket classification, summarisation, routing and response assistance.</p><span>Explore
                                service</span>
                        </a><a className="category-card" href="/ai-data-automation/operations-automation/"><b>↗</b>
                            <h3>Operations Automation</h3>
                            <p>Assignments, status synchronisation, reminders, approvals and exception alerts.</p>
                            <span>Explore
                                service</span>
                        </a><a className="category-card" href="/ai-data-automation/internal-ai-assistants/"><b>↗</b>
                            <h3>Internal Knowledge Assistants</h3>
                            <p>Role-aware search and assistance grounded in approved organisational information.</p>
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
                            <p>Key questions before starting an AI or workflow automation project.</p>
                        </div>
                        <h2>Clear answers before you automate a business process.</h2>
                    </div>
                    <div className="faq-list">
                        <div className="faq-item open"><button className="faq-question"><span>Does every automation project need
                                    artificial intelligence?</span><span>−</span></button>
                            <div className="faq-answer">
                                <p>No. Many workflows are more reliable with forms, rules, APIs and scheduled processes.
                                    We include AI only when it suits the input, uncertainty and business value.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you connect our existing CRM, ERP
                                    or
                                    business tools?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Often, yes. Feasibility depends on each system's API, authentication, data access,
                                    rate limits and commercial terms. We confirm this before finalising the scope.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can AI extract data from PDFs and
                                    scanned documents?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes, depending on document quality and consistency. Important fields should be
                                    validated, and uncertain results should be routed for human review.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>How do you handle incorrect AI
                                    output?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Controls can include approved source grounding, validation rules, confidence
                                    thresholds, test cases, restricted actions, human approval and fallback workflows.
                                </p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can we start with one small
                                    workflow?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes. A focused first workflow is usually the best way to validate data, integration,
                                    usability and operating value before expanding.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>How long does an automation project
                                    take?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>The timeline depends on workflow complexity, data readiness, integrations, exception
                                    handling, security requirements and testing. We define a focused first phase after
                                    discovery.</p>
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
                            <p className="eyebrow" style={{"color":"#cdbdff"}}>Have a workflow in mind?</p>
                            <h2>Tell us what your team needs to automate.</h2>
                            <p>Use this form for workflow automation, system integration, document processing, internal
                                AI assistance, dashboards or an existing automation that needs improvement.</p>
                        </div>
                        <form className="full-form js-demo-form" action="/api/leads" method="post"><input type="hidden"
                                name="source_page" value="ai-data-automation" /><input type="hidden" name="offer"
                                value="ai-automation-project-proposal" />
                            <div className="field"><label htmlFor="lead-name">Name *</label><input id="lead-name" name="name"
                                    required={true} autoComplete="name" placeholder="Your name" /></div>
                            <div className="field"><label htmlFor="lead-email">Work email *</label><input id="lead-email"
                                    name="email" type="email" required={true} autoComplete="email"
                                    placeholder="you@company.com" /></div>
                            <div className="field"><label htmlFor="lead-company">Company</label><input id="lead-company"
                                    name="company" autoComplete="organization" placeholder="Company name" /></div>
                            <div className="field"><label htmlFor="lead-need">Primary requirement</label><select id="lead-need"
                                    name="requirement">
                                    <option>Business workflow automation</option>
                                    <option>Data integration and synchronisation</option>
                                    <option>AI document processing</option>
                                    <option>Internal AI assistant</option>
                                    <option>Reporting and dashboard automation</option>
                                    <option>Improve an existing automation</option>
                                </select></div>
                            <div className="field full"><label htmlFor="lead-message">Workflow details</label><textarea
                                    id="lead-message" name="message"
                                    placeholder="Current process, systems, main bottleneck, exceptions and desired timeline"></textarea>
                            </div>
                            <div className="success-message">Thanks—your enquiry is ready. Connect this form to the existing
                                <code>/api/leads</code> endpoint.
                            </div>
                            <div className="field full"><button className="btn" type="submit">Request an Automation Proposal
                                    →</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        
      </main>

      <SiteFooter />
      <AiDataAutomationClientScripts />
    </>
  );
}
