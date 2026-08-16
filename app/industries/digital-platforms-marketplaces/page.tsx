import type { Metadata } from "next";
import Link from "next/link";
import "../industry-template.css";
import "./digital-platforms-marketplaces.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import DigitalPlatformsMarketplacesClientScripts from "./DigitalPlatformsMarketplacesClientScripts";

export const metadata: Metadata = {
  alternates: { canonical: "/industries/digital-platforms-marketplaces/" },
  title: "Digital Platforms Marketplaces Website Design & Development | Hyperlink",
  description: "Scalable web architectures and user-centric UI/UX design for digital marketplaces and multi-sided platforms. Reduce friction and increase transactions.",
};

export default function DigitalPlatformsMarketplacesPage() {
  return (
    <>
      <SiteHeader />

      <main id="top" className="saas-industry-page">

            <section className="hero" data-block-type="hero" data-block-id="service-hero">
                <div className="container">
                    <div className="breadcrumbs"><a href="/">Home</a><span>/</span><a
                            href="/services/">Services</a><span>/</span><strong>Digital Platforms &amp;
                            Marketplaces</strong></div>
                    <div className="hero-grid">
                        <div className="hero-copy reveal">
                            <p className="eyebrow">Digital platforms &amp; marketplaces</p>
                            <h1>Build a platform where discovery, trust and <em>transactions work together.</em></h1>
                            <p className="hero-lead">We design and develop multi-sided digital products that connect
                                customers, providers, partners and internal teams through one clear operating
                                experience.</p>
                            <div className="hero-points"><span>Make listings, services or opportunities easier to
                                    discover</span><span>Create structured onboarding for customers and
                                    providers</span><span>Connect transactions, communication and operations</span>
                            </div>
                            <div className="hero-actions"><a className="btn primary" href="#free-review">Get a Free Platform
                                    Scope Review →</a><a className="btn" href="#solutions">See Platform Capabilities</a>
                            </div>
                            <p className="microcopy">No obligation. Share your platform idea or current product and we will
                                identify the clearest first-release priorities.</p>
                        </div>

                        <aside className="review-card reveal-right" id="free-review" data-block-type="leadMagnetForm"
                            data-block-id="free-review">
                            <span className="review-badge">Free platform scope review</span>
                            <h2>Find the smallest useful version of your platform.</h2>
                            <p>Share the users you need to connect and the action they should complete. We will reply
                                with a focused scope recommendation rather than a generic development proposal.</p>
                            <div className="review-deliverables"><span>Core user roles and journey
                                    observations</span><span>Recommended first-release capabilities</span><span>Key
                                    integration, trust and operational considerations</span></div>
                            <form className="compact-form js-demo-form" action="/api/leads" method="post">
                                <input type="hidden" name="source_page" value="digital-platforms-marketplaces" />
                                <input type="hidden" name="offer" value="free-platform-scope-review" />
                                <input name="email" type="email" required={true} autoComplete="email"
                                    placeholder="Work email *" aria-label="Work email" />
                                <input name="company" type="text" required={true} autoComplete="organization"
                                    placeholder="Company name *" aria-label="Company name" />
                                <select name="goal" aria-label="Platform type">
                                    <option value="">Platform type</option>
                                    <option>B2B marketplace</option>
                                    <option>Service marketplace</option>
                                    <option>Product marketplace</option>
                                    <option>Booking or rental platform</option>
                                    <option>Membership platform</option>
                                    <option>Directory or lead network</option>
                                    <option>Improve an existing platform</option>
                                </select>
                                <div className="success-message">Thanks—your request is ready. Connect this form to the
                                    existing <code>/api/leads</code> endpoint.</div>
                                <button className="btn primary" type="submit">Get My Free Review →</button>
                            </form>
                            <p className="privacy-note">Your details are used only to respond to this request.</p>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="section" data-block-type="proofStrip" data-block-id="trust-strip">
                <div className="container">
                    <div className="trust-strip reveal">
                        <div className="trust-item"><strong>Multi-sided journey design</strong><span>Customer, provider and
                                admin experiences are planned together.</span></div>
                        <div className="trust-item"><strong>Operations included</strong><span>Approvals, exceptions and
                                support workflows are part of the product.</span></div>
                        <div className="trust-item"><strong>Integration-ready</strong><span>Payments, messaging and business
                                systems are scoped around real providers.</span></div>
                        <div className="trust-item"><strong>Focused MVP delivery</strong><span>Start with the smallest
                                useful
                                transaction or matching loop.</span></div>
                    </div>
                </div>
            </section>

            <section className="section soft" data-block-type="painOutcomeGrid" data-block-id="platform-problems">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Where platform growth breaks</p>
                            <p>A marketplace works only when every side can complete its part of the journey.</p>
                        </div>
                        <h2>Fix the friction that stops customers, providers and operators from reaching a successful
                            transaction.</h2>
                    </div>
                    <div className="problem-grid">
                        <article className="problem-card reveal-zoom"><span className="problem-num">01</span>
                            <h3>Users cannot find the right listing or provider.</h3>
                            <p>Categories, search, filters and listing information do not reflect the decision customers
                                need to make.</p><span className="outcome">Outcome: clear discovery, filters, comparison and
                                matching</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">02</span>
                            <h3>Provider onboarding creates friction and incomplete profiles.</h3>
                            <p>Partners do not know what information is required, what has been approved or what they
                                must do next.</p><span className="outcome">Outcome: structured setup, verification and
                                approval states</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">03</span>
                            <h3>Transactions and support happen outside the platform.</h3>
                            <p>Bookings, payments, updates and disputes move across calls, email and spreadsheets,
                                leaving users and operators without a shared status.</p><span className="outcome">Outcome:
                                connected booking, payment, status and issue workflows</span>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section" id="solutions" data-block-type="solutionTabs" data-block-id="solutions">
                <div className="container">
                    <div className="solutions-shell">
                        <div className="solution-tabs reveal">
                            <p className="eyebrow" style={{"color":"#bfa8ff"}}>What we build</p>
                            <h2>One product system across discovery, transactions and operations.</h2>
                            <button className="solution-tab active" data-key="strategy"><span>01</span><span>Marketplace
                                    Strategy &amp; UX</span><span>→</span></button>
                            <button className="solution-tab" data-key="onboarding"><span>02</span><span>Provider
                                    Onboarding</span><span>→</span></button>
                            <button className="solution-tab" data-key="discovery"><span>03</span><span>Listings, Search
                                    &amp;
                                    Matching</span><span>→</span></button>
                            <button className="solution-tab" data-key="transactions"><span>04</span><span>Transactions &amp;
                                    Payments</span><span>→</span></button>
                            <button className="solution-tab" data-key="operations"><span>05</span><span>Admin &amp;
                                    Operations</span><span>→</span></button>
                        </div>
                        <div className="solution-panel reveal-right">
                            <div className="solution-copy"><span className="mini" id="solutionKicker">Business model &amp;
                                    journey design</span>
                                <h3 id="solutionTitle">Define how every side creates, receives and exchanges value on
                                    the
                                    platform.</h3>
                                <p id="solutionText">Map users, roles, supply, demand, trust, transactions and
                                    operations
                                    before turning the idea into screens and features.</p>
                                <div className="solution-list" id="solutionList"><span>User roles and value
                                        exchange</span><span>Marketplace journey and information
                                        architecture</span><span>MVP scope and success measures</span></div><a
                                    className="btn" id="solutionLink" href="#project-enquiry">Discuss this capability →</a>
                            </div>
                            <div className="ui-window" aria-hidden="true">
                                <div className="ui-top">
                                    <div className="ui-dots"><i></i><i></i><i></i></div><span className="ui-badge"
                                        id="uiBadge">Marketplace Strategy</span>
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
                data-block-id="marketplace-blueprint">
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
                            <p className="eyebrow">Two-sided platform blueprint</p>
                            <h2>A connected journey from onboarding and discovery to fulfilment and support.</h2>
                            <p>A practical marketplace gives customers enough information to choose, gives providers
                                the tools to deliver, and gives operators the visibility to approve, assist and resolve
                                exceptions.</p>
                            <div className="case-features">
                                <div className="case-feature"><span>01</span>
                                    <div><strong>Customer experience</strong><small>Discovery, comparison, booking or
                                            purchase, messaging and status visibility.</small></div>
                                </div>
                                <div className="case-feature"><span>02</span>
                                    <div><strong>Provider workspace</strong><small>Onboarding, profiles, listings,
                                            availability, orders and performance information.</small></div>
                                </div>
                                <div className="case-feature"><span>03</span>
                                    <div><strong>Platform operations</strong><small>Approvals, commissions, moderation,
                                            disputes, configuration and reporting.</small></div>
                                </div>
                            </div>
                            <div className="case-stack"><span>Next.js</span><span>React</span><span>Supabase</span><span>API
                                    integrations</span><span>Role-based access</span></div><a className="btn primary"
                                href="#project-enquiry">Discuss Your Platform →</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" data-block-type="process" data-block-id="process">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">How the project moves</p>
                            <p>Build the smallest useful marketplace loop, validate it and expand from evidence.</p>
                        </div>
                        <h2>A practical route from platform idea to an approved, testable product.</h2>
                    </div>
                    <div className="process-grid">
                        <article className="process-step"><span>01 · DISCOVER</span>
                            <h3>Understand users, supply, demand and operations.</h3>
                            <p>Review the business model, customer need, provider workflow, transaction and internal
                                responsibilities.</p>
                        </article>
                        <article className="process-step"><span>02 · STRUCTURE</span>
                            <h3>Define roles and the core marketplace loop.</h3>
                            <p>Map onboarding, discovery, matching, transaction, fulfilment, support and admin
                                journeys.</p>
                        </article>
                        <article className="process-step"><span>03 · BUILD &amp; VALIDATE</span>
                            <h3>Create the focused first release and test real cases.</h3>
                            <p>Design and implement approved flows, integrations, permissions and exception states in
                                milestones.</p>
                        </article>
                        <article className="process-step"><span>04 · LAUNCH &amp; IMPROVE</span>
                            <h3>Measure marketplace health and prioritise the next change.</h3>
                            <p>Review activation, successful matches or transactions, support cases and operational
                                friction.</p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft" data-block-type="childServiceGrid" data-block-id="platform-models">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Platform and marketplace models</p>
                            <p>Explore the structure closest to your users and value exchange.</p>
                        </div>
                        <h2>Different platform models require different trust, transaction and operational decisions.
                        </h2>
                    </div>
                    <div className="category-grid"><a className="category-card"
                            href="/digital-platforms-marketplaces/b2b-marketplaces/"><b>↗</b>
                            <h3>B2B Marketplaces</h3>
                            <p>Supplier discovery, enquiries, quotations, orders and account-based business workflows.
                            </p><span>Explore
                                platform</span>
                        </a><a className="category-card"
                            href="/digital-platforms-marketplaces/service-marketplaces/"><b>↗</b>
                            <h3>Service Marketplaces</h3>
                            <p>Provider profiles, availability, matching, bookings, messaging and reviews.</p>
                            <span>Explore
                                platform</span>
                        </a><a className="category-card"
                            href="/digital-platforms-marketplaces/product-marketplaces/"><b>↗</b>
                            <h3>Product Marketplaces</h3>
                            <p>Multi-vendor catalogues, inventory, orders, commissions and fulfilment states.</p>
                            <span>Explore
                                platform</span>
                        </a><a className="category-card"
                            href="/digital-platforms-marketplaces/booking-rental-platforms/"><b>↗</b>
                            <h3>Booking &amp; Rental Platforms</h3>
                            <p>Availability, scheduling, deposits, confirmations, cancellations and returns.</p>
                            <span>Explore
                                platform</span>
                        </a><a className="category-card"
                            href="/digital-platforms-marketplaces/membership-platforms/"><b>↗</b>
                            <h3>Membership Platforms</h3>
                            <p>Plans, gated access, content or services, billing status and member journeys.</p>
                            <span>Explore
                                platform</span>
                        </a><a className="category-card"
                            href="/digital-platforms-marketplaces/directories-lead-networks/"><b>↗</b>
                            <h3>Directories &amp; Lead Networks</h3>
                            <p>Profiles, discovery, qualification, lead delivery and partner management.</p>
                            <span>Explore
                                platform</span>
                        </a></div>
                </div>
            </section>

            <section className="section" data-block-type="faq" data-block-id="faq">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Frequently asked</p>
                            <p>Key questions before building or improving a multi-sided digital platform.</p>
                        </div>
                        <h2>Clear answers before you commit to a platform build.</h2>
                    </div>
                    <div className="faq-list">
                        <div className="faq-item open"><button className="faq-question"><span>What types of platforms and
                                    marketplaces do you build?</span><span>−</span></button>
                            <div className="faq-answer">
                                <p>Projects can include B2B marketplaces, service marketplaces, product marketplaces,
                                    booking and rental platforms, membership products, directories and lead networks.
                                </p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you build a multi-vendor
                                    marketplace?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes. A platform can include vendor onboarding, profiles, listings, availability,
                                    orders or bookings, dashboards, commissions and admin controls according to the
                                    business model.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can the platform support payments and
                                    provider payouts?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Often, yes. Payment collection, commissions, refunds and provider payouts depend on
                                    the selected payment provider, country, account structure, verification
                                    requirements and commercial terms.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you improve an existing platform
                                    without replacing the backend?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes, when the existing architecture and APIs can support the required experience. We
                                    can redesign selected journeys and implement improvements in phases.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>What should be included in a
                                    marketplace MVP?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>A focused minimum viable product normally includes the minimum roles, onboarding,
                                    discovery, core transaction or matching workflow, essential communication and admin
                                    controls required to test the business model.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>How do you handle trust, verification
                                    and disputes?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Controls may include profiles, verification states, moderation, reviews, reporting,
                                    audit logs, cancellation rules, dispute workflows and manual admin review.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can our team manage the platform
                                    through an admin panel?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes. The admin scope can include users, providers, listings, approvals, transactions,
                                    commissions, content, disputes, reports and platform configuration.</p>
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
                            <p className="eyebrow" style={{"color":"#cdbdff"}}>Have a platform idea?</p>
                            <h2>Tell us who your platform needs to connect.</h2>
                            <p>Use this form for a B2B marketplace, service platform, multi-vendor store, booking
                                system,
                                membership product, provider network or an existing platform that needs improvement.</p>
                        </div>
                        <form className="full-form js-demo-form" action="/api/leads" method="post"><input type="hidden"
                                name="source_page" value="digital-platforms-marketplaces" /><input type="hidden"
                                name="offer" value="digital-platform-marketplace-proposal" />
                            <div className="field"><label htmlFor="lead-name">Name *</label><input id="lead-name" name="name"
                                    required={true} autoComplete="name" placeholder="Your name" /></div>
                            <div className="field"><label htmlFor="lead-email">Work email *</label><input id="lead-email"
                                    name="email" type="email" required={true} autoComplete="email"
                                    placeholder="you@company.com" /></div>
                            <div className="field"><label htmlFor="lead-company">Company</label><input id="lead-company"
                                    name="company" autoComplete="organization" placeholder="Company name" /></div>
                            <div className="field"><label htmlFor="lead-need">Platform type</label><select id="lead-need"
                                    name="requirement">
                                    <option>B2B marketplace</option>
                                    <option>Service marketplace</option>
                                    <option>Product marketplace</option>
                                    <option>Booking or rental platform</option>
                                    <option>Membership platform</option>
                                    <option>Directory or lead network</option>
                                    <option>Marketplace MVP</option>
                                    <option>Existing platform redesign</option>
                                </select></div>
                            <div className="field full"><label htmlFor="lead-message">Platform details</label><textarea
                                    id="lead-message" name="message"
                                    placeholder="Users, value exchange, current process, essential transaction and desired timeline"></textarea>
                            </div>
                            <div className="success-message">Thanks—your enquiry is ready. Connect this form to the existing
                                <code>/api/leads</code> endpoint.
                            </div>
                            <div className="field full"><button className="btn" type="submit">Request a Platform Proposal
                                    →</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        
      </main>

      <SiteFooter />
      <DigitalPlatformsMarketplacesClientScripts />
    </>
  );
}
