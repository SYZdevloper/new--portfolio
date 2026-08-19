const fs = require('fs');
const path = require('path');

const services = [
    {
        id: 'healthcare-websites-and-service-discovery',
        name: 'Healthcare Websites & Service Discovery',
        description: 'Modern healthcare websites and digital front doors that guide patients to the right care and clinical services.',
        kicker: 'Service Discovery',
        icon: '🏥',
        problems: [
            { num: '01', title: 'Hard to find specialists', text: 'Patients struggle to navigate complex hospital websites to find the right care.', outcome: 'Intuitive provider directories with smart search.' },
            { num: '02', title: 'Lost on campus', text: 'Patients miss appointments because they cannot find the right building or clinic.', outcome: 'Interactive campus maps and wayfinding.' },
            { num: '03', title: 'Poor mobile experience', text: 'Existing websites fail to load quickly or format correctly on patient smartphones.', outcome: 'Lightning-fast, mobile-first accessible designs.' }
        ],
        deliverables: ['Provider Directories', 'Campus Wayfinding', 'Service Line Showcasing', 'Patient Education Hubs', 'CMS Architecture', 'WCAG Accessibility']
    },
    {
        id: 'appointments-and-referrals',
        name: 'Appointments & Referrals',
        description: 'Secure, intelligent booking workflows that handle complex clinical triage and automated appointment reminders.',
        kicker: 'Digital Booking',
        icon: '📅',
        problems: [
            { num: '01', title: 'Call center overload', text: 'Staff spend hours on the phone handling routine appointment bookings and reschedules.', outcome: 'Self-serve digital booking connected to the EHR.' },
            { num: '02', title: 'High no-show rates', text: 'Patients forget appointments, leading to lost revenue and empty clinical slots.', outcome: 'Automated SMS and email reminder workflows.' },
            { num: '03', title: 'Paper intake delays', text: 'Patients fill out paper forms in the waiting room, delaying the start of clinical care.', outcome: 'Secure digital intake completed prior to arrival.' }
        ],
        deliverables: ['EHR-Integrated Booking', 'Smart Symptom Triage', 'Digital Intake Forms', 'Automated Reminders', 'Referral Management', 'Insurance Verification']
    },
    {
        id: 'patient-service-portals',
        name: 'Patient Service Portals',
        description: 'Secure, HIPAA-compliant digital environments empowering patients to manage their care and access health data.',
        kicker: 'Patient Portals',
        icon: '👤',
        problems: [
            { num: '01', title: 'Data is inaccessible', text: 'Patients must call or visit in person just to get a copy of their routine lab results.', outcome: 'Self-serve access to test results and clinical notes.' },
            { num: '02', title: 'Disconnected communication', text: 'Patients leave voicemails that take days for the care team to properly address.', outcome: 'Secure, asynchronous messaging with providers.' },
            { num: '03', title: 'Fragmented family care', text: 'Parents struggle to manage healthcare across multiple children and aging parents.', outcome: 'Proxy access for family health record management.' }
        ],
        deliverables: ['Lab Result Dashboards', 'Secure Messaging', 'Telehealth Integration', 'Prescription Renewals', 'Family/Proxy Access', 'Bill Payment']
    },
    {
        id: 'clinical-service-workflows',
        name: 'Clinical Service Workflows',
        description: 'Custom clinical interfaces designed to reduce administrative burden and orchestrate care delivery securely.',
        kicker: 'Clinical Operations',
        icon: '🩺',
        problems: [
            { num: '01', title: 'EHR alert fatigue', text: 'Clinicians are overwhelmed by poor UX and excessive clicking in legacy EHR systems.', outcome: 'Streamlined, role-specific custom interfaces.' },
            { num: '02', title: 'Handoff errors', text: 'Patient transfers between departments rely on phone calls, leading to dropped information.', outcome: 'Digital handoff and care coordination boards.' },
            { num: '03', title: 'Blind to capacity', text: 'Nursing supervisors lack real-time visibility into bed availability across the hospital.', outcome: 'Live bed management and capacity dashboards.' }
        ],
        deliverables: ['Care Coordination Boards', 'Bed Management UX', 'EHR API Middleware (FHIR)', 'Clinical Decision Support', 'Secure Handoffs', 'Discharge Planning']
    },
    {
        id: 'healthcare-service-dashboards',
        name: 'Healthcare Service Dashboards',
        description: 'Executive dashboards aggregating data across departments to track wait times, outcomes, and revenue cycles.',
        kicker: 'Healthcare Analytics',
        icon: '📊',
        problems: [
            { num: '01', title: 'Siloed data sources', text: 'Clinical and financial data live in different systems, making holistic reporting impossible.', outcome: 'Unified data warehousing and BI dashboards.' },
            { num: '02', title: 'Hidden bottlenecks', text: 'Administrators cannot see where patients are getting stuck in the emergency department.', outcome: 'Live wait time and patient flow monitoring.' },
            { num: '03', title: 'Revenue leakage', text: 'Denied claims and coding errors go unnoticed until the end of the financial quarter.', outcome: 'Real-time revenue cycle and claims tracking.' }
        ],
        deliverables: ['Wait Time Monitoring', 'Clinical Outcome Tracking', 'Revenue Cycle Analytics', 'Resource Utilization', 'Compliance Reporting', 'Executive BI']
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
                            <a href="/industries/hospitals-clinics-healthcare-providers/">Healthcare</a><span>/</span>
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

console.log('5 Healthcare Service Pages created successfully.');
