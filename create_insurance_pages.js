const fs = require('fs');
const path = require('path');

const directory = path.join('d:', 'new website', 'hyperlink-nextjs-app-router', 'app', 'services');

const template = (slug, data) => `import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/${slug}/" },
  title: "${data.metaTitle} | Hyperlink Tech Solutions",
  description: "${data.lead}",
};

export default function Page() {
  return (
    <>
      <ServiceInteractions />
      <div className="service-page-wrapper">
        <SiteHeader />

        <main id="top">
            <section className="hero service-hero" aria-labelledby="service-title">
                <nav className="service-breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services/">Services</Link><span>›</span>
                    <strong>${data.eyebrow}</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">${data.status}</div>
                        <p className="eyebrow">${data.eyebrow}</p>
                        <h1 id="service-title">${data.h1}</h1>
                        <p className="hero-lead">${data.lead}</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>${data.points[0]}</li>
                            <li>${data.points[1]}</li>
                            <li>${data.points[2]}</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Project <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        ${data.proof.map(p => `
                        <div className="proof-item">
                            <small>${p[0]}</small>
                            <strong>${p[1]}</strong>
                        </div>`).join("")}
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">${data.problemsIntro.eyebrow}</p>
                        <p>${data.problemsIntro.asideLead}</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>${data.problemsIntro.title}</h2>
                        <p>${data.problemsIntro.mainLead}</p>

                        <div className="problem-grid">
                            ${data.problems.map((p, i) => `
                            <article className="problem-card">
                                <span className="problem-card-number">0${i+1}</span>
                                <h3>${p[0]}</h3>
                                <p>${p[1]}</p>
                            </article>`).join("")}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section soft" id="included">
                <div className="container">
                    <div className="solution-shell">
                        <div className="solution-head">
                            <div>
                                <p className="eyebrow" style={{color: "#d8c2ff"}}>The deliverables</p>
                                <h2>${data.deliverablesIntro.title}</h2>
                            </div>
                            <p>${data.deliverablesIntro.lead}</p>
                        </div>

                        <div className="deliverable-grid">
                            ${data.deliverables.map((d, i) => `
                            <article className="deliverable-card">
                                <span>0${i+1} · Core</span>
                                <h3>${d[0]}</h3>
                                <p>${d[1]}</p>
                                <div className="deliverable-tags"><small>${d[2]}</small><small>${d[3]}</small><small>${d[4]}</small></div>
                            </article>`).join("")}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Insurtech Platform</p>
                            <h2>Transforming the quote journey.</h2>
                        </div>
                        <p>See how we helped a specialty MGA replace their massive PDF application with a dynamic React quoting engine, cutting the time to bind a policy from 3 days to 4 minutes and increasing direct-to-consumer sales by 60%.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Insurtech</span>
                                <span>Quoting Engines</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/insurance-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Frictionless digital binding.</h2>
                                <p>We developed a secure quoting flow that asks dynamic questions based on previous answers, pings a third-party rating API in real-time, and generates a bindable quote and digital policy document instantly upon credit card payment.</p>
                            </div>
                            <a className="btn primary" href="/work/">View All Projects <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">Common questions about insurtech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with complex rating or underwriting engines?</summary>
                            <p>We build API middleware that connects the frontend quoting flow directly to your rating engine (like Duck Creek, Guidewire, or proprietary Excel-based APIs), pulling live premiums without exposing the underlying logic to the web.</p>
                        </details>
                        <details>
                            <summary>Can you handle dynamic question sets?</summary>
                            <p>Yes. We build intelligent forms using React state management. If a user selects 'Yes' to owning a swimming pool, the form instantly expands to ask about fencing and diving boards, keeping the initial interface clean and uncluttered.</p>
                        </details>
                        <details>
                            <summary>Do you build broker portals as well as direct-to-consumer?</summary>
                            <p>Absolutely. We build specialized B2B portals where brokers can manage a portfolio of clients, clone past quotes for faster renewals, and securely upload complex risk assessment documents directly to the underwriter.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other insurance capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/insurance-product-websites/"><div><small>Discovery</small><h3>Product Websites</h3><p>Showcase coverages.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/quote-and-application-journeys/"><div><small>Conversion</small><h3>Quoting Engines</h3><p>Frictionless binding.</p></div><b>Explore quoting ↗</b></a>
                        <a className="related-card" href="/services/policyholder-portals/"><div><small>Service</small><h3>Policyholder Portals</h3><p>Self-serve management.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/claims-and-service-experiences/"><div><small>Support</small><h3>Claims Workflows</h3><p>Digital FNOL.</p></div><b>Explore claims ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your insurance <br />and underwriting operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From dynamic quoting engines to seamless digital claims workflows and secure broker portals, we build software that drives premium growth and reduces operational costs.</p>
                        <a className="btn" href="#contact">Get a Proposal <span className="arrow">↗</span></a>
                    </div>
                </div>
            </section>
        </main>

        <SiteFooter />
    </div>
    <a className="floating-cta" href="#contact">Get Proposal ↗</a>
    <div className="mobile-bottom" aria-label="Quick contact actions">
        <a href="mailto:hello@hyperlinktechsolutions.com">Email Us</a>
        <a href="#contact">Get Proposal</a>
    </div>
    </>
  );
}
`;

const pages = {
  "insurance-product-websites": {
    metaTitle: "Insurance Product Websites",
    eyebrow: "Product Discovery",
    h1: "Digitally showcase your insurance products.",
    lead: "We design high-trust, high-performance websites for insurers and MGAs that clearly communicate coverage options and drive prospects into the quoting funnel.",
    status: "Insurance Websites",
    points: [
      "Dynamic coverage comparison tables built natively in React to help users choose the right policy",
      "Enterprise-grade security and accessibility (WCAG) compliance built into the foundation",
      "Headless CMS setups allowing marketing and compliance teams to update PDS/FSG documents instantly"
    ],
    proof: [
      ["01 · Brand Trust", "Digital experiences that convey institutional stability alongside modern insurtech agility."],
      ["02 · Complex Clarity", "Translate dense Product Disclosure Statements into easily digestible visual marketing."],
      ["03 · Higher Conversions", "Structure that guides the user seamlessly from a product page directly into the quote engine."],
      ["04 · Compliance Agility", "Empower your team to update mandatory legal disclaimers globally without developer help."]
    ],
    problemsIntro: {
      eyebrow: "When digital fails insurance",
      asideLead: "If a customer can't easily understand what is excluded from a policy, they won't buy it.",
      title: "Poor digital presentation loses trust and premiums.",
      mainLead: "Insurance is an invisible product built on trust. If a prospective policyholder lands on an outdated website where finding the coverage limits requires downloading a 40-page PDF, they will assume your claims process is equally archaic. They need immediate confidence in your cover and technology."
    },
    problems: [
      ["Information Hide-and-Seek", "Customers bounce because they cannot easily compare 'Basic' versus 'Comprehensive' cover on a mobile screen."],
      ["Slow Performance", "Your website feels outdated and sluggish, undermining trust in your institution's technical capability to pay a claim."],
      ["Compliance Bottlenecks", "Marketing is unable to update a legally required PDS link without waiting weeks for IT support."]
    ],
    deliverablesIntro: {
      title: "Digital flagships for modern insurance.",
      lead: "We build decoupled frontend experiences that prioritize trust, clarity, and uncompromising speed."
    },
    deliverables: [
      ["Headless Architecture", "Next.js frontends connected to Sanity or Contentful, ensuring the site is lightning fast and highly secure.", "React", "Headless", "Security"],
      ["Interactive Coverage Tools", "Building bespoke React components that allow users to toggle coverage options and instantly see the benefits without page reloads.", "UX", "React", "Conversion"],
      ["Compliance Management", "Structuring the CMS so legal teams can easily manage global disclaimers, Target Market Determinations (TMDs), and PDS versions.", "CMS", "Compliance", "Operations"],
      ["Global Edge Hosting", "Deployment on Vercel to ensure your site loads instantly, capturing highly motivated users on their phones.", "DevOps", "Performance", "Scale"]
    ]
  },
  "quote-and-application-journeys": {
    metaTitle: "Quote & Application Journeys",
    eyebrow: "Conversion & Pricing",
    h1: "Frictionless quoting and underwriting.",
    lead: "We engineer dynamic quoting engines that integrate with complex rating APIs, allowing customers to build customized policies and purchase cover instantly.",
    status: "Quoting Engines",
    points: [
      "Custom React-based application flows that eliminate the need for downloading and printing PDF proposal forms",
      "Dynamic logic that adapts the question set based on the specific risk or the applicant's previous answers",
      "Live API integrations with your rating engine to instantly calculate premiums based on real-time data lookups (e.g., property data)"
    ],
    proof: [
      ["01 · Higher Completion", "Turn a frustrating 50-question form into a smooth, 5-minute mobile flow by only asking relevant questions."],
      ["02 · Faster Binding", "Push clean, validated data directly into your policy administration system, allowing instant credit card payment."],
      ["03 · Reduced Fraud", "Integrate third-party data lookups (like vehicle registration APIs) to automatically verify risk details."],
      ["04 · Omnichannel Resumption", "Allow a customer to start a quote on their phone and finish it later on a desktop."]
    ],
    problemsIntro: {
      eyebrow: "When quoting is painful",
      asideLead: "If a customer has to print a form to get a business insurance quote, they will just use a broker.",
      title: "Clunky quoting destroys direct acquisition.",
      mainLead: "Insurers spend thousands on marketing only to force users into a quoting engine that looks like a digitized tax return. When the form is slow, asks irrelevant questions (like asking a tenant about roof materials), or fails to save progress, the customer abandons the process."
    },
    problems: [
      ["The PDF Drop-off", "Users abandon the application when they realize they have to download, print, and sign a physical proposal form."],
      ["Question Fatigue", "The legacy form asks 40 generic questions instead of dynamically filtering based on the risk profile, causing frustration on mobile."],
      ["Manual Underwriting Delays", "Policies take days to issue because underwriters have to manually review clean risks that should have been straight-through processed."]
    ],
    deliverablesIntro: {
      title: "Automated premium conversion.",
      lead: "We engineer quoting flows that handle complex underwriting rules while remaining beautiful and frictionless."
    },
    deliverables: [
      ["Custom Quoting Frontends", "Building bespoke React flows that guide the user step-by-step, validating data and fetching real-time prices.", "UX", "React", "Conversion"],
      ["Rating Engine API Middleware", "Developing secure Node.js layers that connect the web frontend directly to complex rating models (like Guidewire or proprietary APIs).", "APIs", "Underwriting", "Logic"],
      ["Dynamic Question Logic", "Building rules engines that skip irrelevant sections (e.g., hiding 'Pool Fencing' if the user selected 'Apartment').", "Logic", "UX", "Speed"],
      ["Payment & Policy Generation", "Integrating Stripe for instant binding and dynamically generating the personalized PDF policy schedule for download.", "Fintech", "Integration", "Data"]
    ]
  },
  "policyholder-portals": {
    metaTitle: "Policyholder Portals",
    eyebrow: "Digital Service",
    h1: "Self-serve management for policyholders.",
    lead: "We build secure portals where customers can download certificates of currency, update their risk details, and renew their policies automatically.",
    status: "Policyholder Portals",
    points: [
      "Secure web and mobile-responsive dashboards displaying active policies, payment schedules, and claim statuses",
      "Self-serve capabilities allowing customers to securely update an address, add a driver, or change a deductible and see the premium impact",
      "Digital document vaults containing all historical Policy Schedules, PDS documents, and Certificates of Currency"
    ],
    proof: [
      ["01 · Reduced Call Volume", "Customers can download a Certificate of Currency instantly without calling the contact center."],
      ["02 · Higher Retention", "Make it incredibly easy for an existing customer to review and pay their renewal notice with one click."],
      ["03 · Premium Experience", "Provide a modern digital service experience that justifies your premium pricing over discount competitors."],
      ["04 · Centralized Identity", "Ensure a single, secure login across all your digital properties and product lines."]
    ],
    problemsIntro: {
      eyebrow: "When servicing is analog",
      asideLead: "Your call center shouldn't be overwhelmed by people asking for a copy of their policy schedule.",
      title: "Lack of self-service frustrates modern policyholders.",
      mainLead: "Consumers expect their insurer to provide the same digital agility as their bank. If a customer has to call the office just to add a new car to their policy, or wait 24 hours for an emailed certificate to secure a job, they feel undervalued and will shop around at renewal."
    },
    problems: [
      ["High Support Costs", "Your contact center spends hours every day helping customers change their address or resending lost documents."],
      ["Opaque Policy Status", "Customers call repeatedly because they have no digital way to check if their monthly direct debit was successful."],
      ["Login Friction", "Users abandon their accounts because the legacy portal uses a confusing policy number as a username instead of an email."]
    ],
    deliverablesIntro: {
      title: "Centralized policyholder operations.",
      lead: "We engineer secure dashboards that give your customers complete control over their risk portfolio."
    },
    deliverables: [
      ["Policyholder Dashboards", "API integrations pulling live data from your Policy Admin System (PAS), allowing clients to view real-time coverage.", "Integration", "Dashboards", "Data"],
      ["Self-Serve Endorsements", "Logic engines that allow users to safely update a risk detail (like garaging address) and automatically calculate the premium difference via API.", "Logic", "APIs", "Service"],
      ["Secure Document Vaults", "Interfaces for securely delivering sensitive documents and generating dynamic Certificates of Currency on demand.", "Security", "Compliance", "UX"],
      ["Identity Management (CIAM)", "Secure, centralized login flows using Auth0 to ensure strict data privacy and MFA (Multi-Factor Authentication).", "Security", "Auth", "Data"]
    ]
  },
  "claims-and-service-experiences": {
    metaTitle: "Claims & Service Experiences",
    eyebrow: "Customer Support",
    h1: "Compassionate, digital claims management.",
    lead: "We develop digital first-notice-of-loss (FNOL) workflows that allow customers to upload photos and track their claim status in real-time, reducing call center volume.",
    status: "Digital Claims",
    points: [
      "Custom React-based FNOL (First Notice of Loss) flows allowing customers to lodge a claim from their mobile phone at the scene of an incident",
      "Seamless photo and video upload capabilities connected directly to the core claims management system",
      "Live tracking dashboards where customers can see the exact status of their claim (e.g., 'Assessor Appointed', 'Awaiting Repair Quote')"
    ],
    proof: [
      ["01 · Faster Triage", "Receive structured data and photos instantly, allowing claims handlers to fast-track simple repairs."],
      ["02 · Reduced Anxiety", "Stop customers from calling every day by providing a live 'Domino's Pizza-style' tracker for their claim status."],
      ["03 · Lower Loss Ratios", "By capturing data at the scene immediately, you reduce the risk of fraudulent details being added later."],
      ["04 · Compassionate UX", "Design an interface that is calming, clear, and easy to use for someone who has just experienced a stressful event."]
    ],
    problemsIntro: {
      eyebrow: "When claims are painful",
      asideLead: "A customer who has just crashed their car doesn't want to navigate a 15-page PDF form.",
      title: "Analog claims processes destroy customer loyalty.",
      mainLead: "The claim is the moment of truth for an insurer. If a customer has suffered a loss and is forced to wait on hold for 45 minutes, only to be emailed a massive PDF form they have to print and scan, the relationship is broken. An opaque claims process creates massive anxiety and guarantees they will not renew."
    },
    problems: [
      ["The FNOL Bottleneck", "Customers abandon the digital claim and call the center because the web form crashed when they tried to upload a photo of the damage."],
      ["Status Black Holes", "Customers call your team three times a week because they have absolutely no idea if their repair quote was approved."],
      ["Data Re-keying", "Your claims team spends hours manually re-typing incident descriptions from an email into the core claims system."]
    ],
    deliverablesIntro: {
      title: "The digital claims companion.",
      lead: "We engineer empathetic, highly functional workflows that turn the worst day of a customer's life into a seamless service experience."
    },
    deliverables: [
      ["Mobile-First FNOL Flows", "Building bespoke React flows that guide the user through incident reporting, using their phone's camera and GPS for accurate data.", "UX", "Mobile", "Compassion"],
      ["Claims API Middleware", "Developing secure Node.js layers that push the structured claim data and media directly into systems like Guidewire ClaimCenter.", "APIs", "Integration", "Logic"],
      ["Live Status Trackers", "Building dashboards that pull status updates from the core system, visually showing the customer exactly where they are in the process.", "UX", "Transparency", "Service"],
      ["Automated Communications", "Integrating with Twilio or SendGrid to trigger an SMS the moment an assessor is dispatched or a payment is approved.", "Comms", "Operations", "Automation"]
    ]
  },
  "broker-and-operations-portals": {
    metaTitle: "Broker & Operations Portals",
    eyebrow: "B2B & Operations",
    h1: "Empower your distribution network.",
    lead: "We build specialized B2B portals for insurance brokers to generate bulk quotes, manage client portfolios, and interact directly with underwriting teams.",
    status: "Broker Portals",
    points: [
      "Custom B2B portals allowing brokers to quote, bind, and issue policies on behalf of their clients instantly",
      "Portfolio management dashboards where brokers can see all upcoming renewals and outstanding premium payments across their client base",
      "Secure communication channels for brokers to refer complex risks directly to underwriters with attached documentation"
    ],
    proof: [
      ["01 · Increased Broker Loyalty", "Brokers will place more business with you if your digital quoting system is the fastest and easiest to use."],
      ["02 · Reduced Underwriting Admin", "Stop your underwriters from spending half their day responding to basic quote requests via email."],
      ["03 · Faster Renewals", "Allow brokers to bulk-renew dozens of simple policies with a single click in the portal."],
      ["04 · Centralized B2B Identity", "Ensure broker principals can manage access levels for their junior staff within your system securely."]
    ],
    problemsIntro: {
      eyebrow: "When B2B is messy",
      asideLead: "If a broker has to wait 3 days for an email quote, they will place the business with a competitor whose portal gives them a price in 3 minutes.",
      title: "Clunky broker tools cost you market share.",
      mainLead: "Brokers are your primary distribution channel for commercial lines. If they are forced to use a clunky, legacy portal that constantly times out, or if they have to rely on email to get a simple quote, they will actively avoid placing business with you. Speed and ease of use are the ultimate competitive advantages in B2B insurance."
    },
    problems: [
      ["The Email Grind", "Your underwriters are drowning in email quote requests for simple risks that should have been straight-through processed by a portal."],
      ["Lost Renewals", "Brokers miss renewal dates because your system doesn't provide them with a clear, consolidated dashboard of their upcoming expiring policies."],
      ["System Frustration", "Brokers stop using your portal because it requires them to re-enter data they already have in their own Broker Management System (BMS)."]
    ],
    deliverablesIntro: {
      title: "Command centers for broker distribution.",
      lead: "We engineer B2B portals that give your distribution partners the speed and autonomy they demand."
    },
    deliverables: [
      ["Broker Quoting Engines", "React-based interfaces designed for speed, allowing expert users to bypass marketing copy and generate quotes in seconds.", "UX", "Speed", "B2B"],
      ["Portfolio Dashboards", "API integrations pulling live data from the PAS, giving brokers a 360-degree view of all their active clients, claims, and renewals.", "Integration", "Dashboards", "Operations"],
      ["Referral Workflows", "Custom logic that automatically stops a quote if it breaches underwriting guidelines, securely routing the data and documents to a human underwriter.", "Logic", "Workflow", "Risk"],
      ["B2B Identity Management", "Secure login flows (Auth0) with delegated administration, allowing a brokerage manager to onboard their own staff to your portal.", "Security", "Auth", "Scale"]
    ]
  }
};

Object.keys(pages).forEach(slug => {
  const dirPath = path.join(directory, slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  const filePath = path.join(dirPath, 'page.tsx');
  const fileContent = template(slug, pages[slug]);
  
  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log(`Created ${slug}`);
});
