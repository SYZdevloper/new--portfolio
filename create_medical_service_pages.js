const fs = require('fs');
const path = require('path');

const services = [
    {
        id: 'medical-product-websites-and-catalogues',
        name: 'Medical Product Websites & Catalogues',
        description: 'Digital experiences that educate clinicians and convert leads through interactive 3D catalogues and clinical data.',
        kicker: 'Medical Product Websites',
        icon: '🩻',
        problems: [
            { num: '01', title: 'Static PDFs fail to sell', text: 'Complex surgical equipment cannot be fully understood through flat, static PDF brochures.', outcome: 'Interactive WebGL and 3D product visualizers.' },
            { num: '02', title: 'Clinical data is buried', text: 'Surgeons cannot easily find the clinical outcomes and whitepapers supporting a new device.', outcome: 'Searchable clinical evidence hubs.' },
            { num: '03', title: 'Inconsistent branding', text: 'Global product launches suffer from fragmented messaging across regional websites.', outcome: 'Unified CMS architectures with localization.' }
        ],
        deliverables: ['3D Product Viewers', 'Technical Specification Hubs', 'Clinical Evidence Libraries', 'Lead Generation Forms', 'Global CMS Architecture', 'Medical Device SEO']
    },
    {
        id: 'professional-and-distributor-resources',
        name: 'Professional & Distributor Resources',
        description: 'Secure B2B resource hubs empowering medical professionals and distributors with training and ordering tools.',
        kicker: 'Professional Resources',
        icon: '🔐',
        problems: [
            { num: '01', title: 'Outdated surgical guides', text: 'Clinicians risk using outdated surgical technique guides because they rely on printed manuals.', outcome: 'Real-time, version-controlled digital resource hubs.' },
            { num: '02', title: 'Manual bulk ordering', text: 'Distributors submit orders via email and spreadsheets, causing delays and errors.', outcome: 'B2B ecommerce portals connected to ERPs.' },
            { num: '03', title: 'Lack of training visibility', text: 'Manufacturers cannot track which clinicians have completed mandatory device training.', outcome: 'Integrated LMS (Learning Management System) portals.' }
        ],
        deliverables: ['Surgical Guide Libraries', 'Clinician Training LMS', 'B2B Bulk Ordering', 'Distributor Dashboards', 'CIAM/SSO Authentication', 'ERP Integration']
    },
    {
        id: 'equipment-and-service-portals',
        name: 'Equipment & Service Portals',
        description: 'Asset management portals for hospitals and biomedical engineering to track device fleets and maintenance.',
        kicker: 'Equipment Portals',
        icon: '🔧',
        problems: [
            { num: '01', title: 'Lost warranty status', text: 'Hospitals struggle to track the warranty and service contract status of capital equipment.', outcome: 'Centralized asset management and warranty tracking.' },
            { num: '02', title: 'Reactive maintenance', text: 'Equipment fails unexpectedly because preventative maintenance schedules are ignored.', outcome: 'Automated maintenance scheduling and alerts.' },
            { num: '03', title: 'Slow service dispatch', text: 'Logging a support ticket requires a phone call and manual data entry by the manufacturer.', outcome: 'Self-serve digital ticketing and field service tracking.' }
        ],
        deliverables: ['Asset Fleet Management', 'Warranty Tracking', 'Service Ticketing', 'Preventative Maintenance Alerts', 'Field Service Integration', 'Spare Parts Ordering']
    },
    {
        id: 'diagnostic-and-laboratory-workflows',
        name: 'Diagnostic & Laboratory Workflows',
        description: 'Secure digital workflows for laboratories to receive orders, track samples, and deliver diagnostic reports.',
        kicker: 'Laboratory Workflows',
        icon: '🔬',
        problems: [
            { num: '01', title: 'Manual order entry', text: 'Laboratories waste hours manually re-keying test orders from paper requisitions.', outcome: 'Digital provider portals for secure test ordering.' },
            { num: '02', title: 'Lost samples', text: 'Without digital provenance, tracking a specific tissue sample through the lab is difficult.', outcome: 'End-to-end sample tracking and LIS integration.' },
            { num: '03', title: 'Delayed results', text: 'Referring clinicians wait days to receive physical or faxed diagnostic reports.', outcome: 'Secure digital result delivery and provider dashboards.' }
        ],
        deliverables: ['Provider Ordering Portals', 'Sample Provenance Tracking', 'Secure Result Reporting', 'LIS Integration (HL7/FHIR)', 'Billing Workflows', 'Patient Result Portals']
    },
    {
        id: 'product-and-service-dashboards',
        name: 'Product & Service Dashboards',
        description: 'Advanced analytics providing visibility into IoT device utilization, field service performance, and clinical outcomes.',
        kicker: 'Product Dashboards',
        icon: '📈',
        problems: [
            { num: '01', title: 'Blind to utilization', text: 'Manufacturers don’t know how often their connected capital equipment is actually used in the field.', outcome: 'IoT telemetry dashboards tracking active utilization.' },
            { num: '02', title: 'Inefficient field service', text: 'Service managers cannot easily measure first-time fix rates or technician response times.', outcome: 'Field service performance analytics.' },
            { num: '03', title: 'Disconnected outcomes', text: 'Product managers lack data correlating device usage with long-term clinical success.', outcome: 'Unified data warehousing linking device and clinical data.' }
        ],
        deliverables: ['IoT Telemetry Analytics', 'Field Service KPI Tracking', 'Clinical Outcome Reporting', 'Predictive Maintenance Models', 'Executive BI', 'Data Warehousing']
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
                            <a href="/industries/medical-devices-diagnostics/">Medical Devices</a><span>/</span>
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

console.log('5 Medical Service Pages created successfully.');
