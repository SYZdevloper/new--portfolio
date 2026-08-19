const fs = require('fs');
const path = require('path');

const services = [
    {
        id: 'pharmaceutical-corporate-websites',
        name: 'Pharmaceutical Corporate Websites',
        description: 'Enterprise websites that balance investor relations, scientific innovation, and global regulatory compliance.',
        kicker: 'Corporate Websites',
        icon: '🏢',
        problems: [
            { num: '01', title: 'Scattered brand identity', text: 'Multiple legacy websites across regions create a confusing experience for investors and partners.', outcome: 'Unified global CMS with localized content.' },
            { num: '02', title: 'Buried pipeline data', text: 'Scientific achievements and R&D pipelines are hidden in dense, unreadable text.', outcome: 'Interactive R&D pipeline visualizers.' },
            { num: '03', title: 'Compliance risks', text: 'Marketing sites frequently fail to meet strict FDA/EMA off-label promotion guidelines.', outcome: 'Built-in regulatory approval workflows.' }
        ],
        deliverables: ['Global CMS Architecture', 'Investor Relations Hubs', 'Interactive Pipeline Visuals', 'Regulatory Approval Workflows', 'Corporate Sustainability Reporting', 'WCAG Accessibility']
    },
    {
        id: 'rd-and-clinical-trial-portals',
        name: 'R&D & Clinical Trial Portals',
        description: 'Secure digital environments for managing clinical trials, tracking cohort data, and facilitating global research collaboration.',
        kicker: 'Clinical Portals',
        icon: '🧪',
        problems: [
            { num: '01', title: 'Slow trial recruitment', text: 'Finding eligible patients takes months using traditional manual outreach and paper screening.', outcome: 'Automated digital recruitment and screening funnels.' },
            { num: '02', title: 'Fragmented cohort data', text: 'Trial data is collected in disparate spreadsheets, increasing the risk of data entry errors.', outcome: 'Centralized, secure EDC (Electronic Data Capture) portals.' },
            { num: '03', title: 'Poor investigator engagement', text: 'Clinical investigators struggle to collaborate across different global trial sites.', outcome: 'Secure investigator collaboration hubs.' }
        ],
        deliverables: ['Patient Recruitment Funnels', 'Digital Pre-screening', 'eConsent Workflows', 'Investigator Collaboration Hubs', 'Secure EDC Integrations', 'De-identified Data Portals']
    },
    {
        id: 'hcp-and-medical-affairs-portals',
        name: 'HCP & Medical Affairs Portals',
        description: 'Gated portals for Healthcare Professionals to access clinical data, medical affairs resources, and secure sample ordering.',
        kicker: 'HCP Portals',
        icon: '👨‍⚕️',
        problems: [
            { num: '01', title: 'Accessing off-label data', text: 'HCPs cannot easily access the in-depth scientific evidence they need to make prescribing decisions.', outcome: 'Secure, gated medical affairs libraries.' },
            { num: '02', title: 'Slow sample fulfillment', text: 'Physicians wait weeks for sales reps to drop off drug samples manually.', outcome: 'Compliant digital sample ordering workflows.' },
            { num: '03', title: 'Unverified access', text: 'Unverified users accessing restricted clinical data creates massive compliance liabilities.', outcome: 'Integration with HCP identity verification systems.' }
        ],
        deliverables: ['HCP Identity Verification (e.g. MedPro)', 'Medical Affairs Libraries', 'Digital Sample Ordering', 'KOL Engagement Tools', 'Continuing Medical Education (CME)', 'Secure Messaging']
    },
    {
        id: 'patient-support-and-adherence-platforms',
        name: 'Patient Support & Adherence Platforms',
        description: 'Digital therapeutic platforms and companion apps that guide patients through complex treatments and improve adherence.',
        kicker: 'Patient Platforms',
        icon: '📱',
        problems: [
            { num: '01', title: 'Low medication adherence', text: 'Patients abandon complex biological treatments due to confusing protocols and side effects.', outcome: 'Digital companion apps with guided support.' },
            { num: '02', title: 'Lack of symptom tracking', text: 'Clinicians have no visibility into how a patient feels between clinical visits.', outcome: 'Daily symptom tracking and PRO (Patient Reported Outcomes) tools.' },
            { num: '03', title: 'Complicated reimbursement', text: 'Patients struggle to navigate insurance coverage and copay assistance programs.', outcome: 'Integrated financial support and copay portals.' }
        ],
        deliverables: ['Companion Mobile Apps', 'Medication Reminders', 'Symptom Tracking (PROs)', 'Copay Assistance Portals', 'Telehealth Integration', 'Gamified Adherence']
    },
    {
        id: 'pharma-supply-chain-dashboards',
        name: 'Pharma Supply Chain Dashboards',
        description: 'Executive dashboards tracking cold-chain logistics, manufacturing batch yields, and global regulatory submissions.',
        kicker: 'Supply Dashboards',
        icon: '🧊',
        problems: [
            { num: '01', title: 'Cold-chain spoilage', text: 'Temperature excursions during transit ruin expensive biologic shipments without warning.', outcome: 'Real-time IoT temperature monitoring dashboards.' },
            { num: '02', title: 'Manufacturing bottlenecks', text: 'Plant managers lack real-time visibility into batch yields and equipment downtime.', outcome: 'Manufacturing KPI tracking and analytics.' },
            { num: '03', title: 'Regulatory delays', text: 'Tracking the status of drug submissions across dozens of global regulatory bodies is chaotic.', outcome: 'Centralized regulatory submission tracking.' }
        ],
        deliverables: ['IoT Cold-Chain Tracking', 'Batch Yield Analytics', 'Regulatory Submission Tracking', 'Inventory Forecasting', 'Supplier Quality Dashboards', 'Executive BI']
    }
];

services.forEach(service => {
    const dir = path.join('d:', 'new website', 'hyperlink-nextjs-app-router', 'app', 'services', service.id);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    const componentContent = `import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceClientScripts from "../business-website-development/ServiceClientScripts";

export const metadata: Metadata = {
    title: "${service.name} Services | Hyperlink",
    description: "${service.description}",
};

export default function ${service.name.replace(/[^a-zA-Z0-9]/g, '')}Page() {
    return (
        <>
            <SiteHeader />
            <main id="top" className="service-page">
                
                {/* HERO */}
                <section className="service-hero" data-block-type="hero">
                    <div className="container">
                        <div className="breadcrumbs">
                            <a href="/">Home</a><span>/</span>
                            <a href="/industries/pharmaceuticals-biotechnology/">Pharma & Biotech</a><span>/</span>
                            <strong>${service.name}</strong>
                        </div>
                        <div className="hero-grid">
                            <div className="hero-copy reveal">
                                <p className="eyebrow">${service.kicker}</p>
                                <h1>${service.name}</h1>
                                <p className="hero-lead">${service.description}</p>
                                <div className="hero-actions">
                                    <a className="btn primary" href="#project-enquiry">Discuss Your Project →</a>
                                </div>
                            </div>
                            <div className="hero-visual reveal-right">
                                <div className="service-bento">
                                    <div className="service-bento-main">
                                        <span className="bento-icon">${service.icon}</span>
                                        <h3>${service.deliverables[0]}</h3>
                                        <div className="service-mini-ui">
                                            <div className="ui-line"></div>
                                            <div className="ui-line half"></div>
                                            <div className="ui-line"></div>
                                        </div>
                                    </div>
                                    <div className="service-bento-card">
                                        <strong>${service.deliverables[1]}</strong>
                                    </div>
                                    <div className="service-bento-card accent">
                                        <strong>${service.deliverables[2]}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROBLEMS & OUTCOMES */}
                <section className="section soft" data-block-type="painOutcomeGrid">
                    <div className="container">
                        <div className="section-head reveal">
                            <div>
                                <p className="eyebrow">The Challenge</p>
                                <p>Why legacy approaches fail in this domain.</p>
                            </div>
                            <h2>Solve the friction slowing down your delivery.</h2>
                        </div>
                        <div className="problem-grid">
                            ${service.problems.map(p => `
                            <article className="problem-card reveal-zoom">
                                <span className="problem-num">${p.num}</span>
                                <h3>${p.title}</h3>
                                <p>${p.text}</p>
                                <span className="outcome">Outcome: ${p.outcome}</span>
                            </article>`).join('')}
                        </div>
                    </div>
                </section>

                {/* INCLUDED DELIVERABLES */}
                <section className="section" data-block-type="deliverablesList">
                    <div className="container">
                        <div className="section-head reveal">
                            <div>
                                <p className="eyebrow">Platform Capabilities</p>
                                <p>What's included in this service.</p>
                            </div>
                            <h2>Core features we build for ${service.name}.</h2>
                        </div>
                        <div className="capability-grid">
                            ${service.deliverables.map(d => `
                            <div className="capability-card reveal">
                                <strong>✓ ${d}</strong>
                            </div>`).join('')}
                        </div>
                    </div>
                </section>

                {/* PROJECT ENQUIRY */}
                <section className="final-cta" id="project-enquiry">
                    <div className="container">
                        <div className="final-box">
                            <div className="final-copy">
                                <p className="eyebrow" style={{ color: "#cdbdff" }}>Start Your Project</p>
                                <h2>Ready to build your ${service.name}?</h2>
                                <p>Provide a few details about your requirements and we'll send a technical proposal.</p>
                            </div>
                            <form className="full-form js-demo-form" action="/api/leads" method="post">
                                <input type="hidden" name="source_page" value="${service.id}" />
                                <div className="field">
                                    <label>Name *</label>
                                    <input name="name" required={true} placeholder="Your name" />
                                </div>
                                <div className="field">
                                    <label>Work email *</label>
                                    <input name="email" type="email" required={true} placeholder="you@company.com" />
                                </div>
                                <div className="field full">
                                    <label>Project Details</label>
                                    <textarea name="message" placeholder="Core requirements, target users, and timeline"></textarea>
                                </div>
                                <div className="field full">
                                    <button className="btn" type="submit">Request Proposal →</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

            </main>
            <SiteFooter />
            <ServiceClientScripts />
        </>
    );
}
`;

    fs.writeFileSync(path.join(dir, 'page.tsx'), componentContent, 'utf8');
});

console.log('5 Pharma Service Pages created successfully.');
