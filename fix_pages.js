const fs = require('fs');
const path = require('path');

const directory = path.join('d:', 'new website', 'hyperlink-nextjs-app-router', 'app', 'services');
const filesToFix = [
    "ev-charging-experiences",
    "station-discovery-and-access",
    "accounts-sessions-and-payments",
    "fleet-and-property-portals",
    "charging-operations-dashboards"
];

const template = (slug, metaTitle, metaDesc, breadcrumb, eyebrow, h1, lead, restOfMain) => `import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/${slug}/" },
  title: "${metaTitle} | Hyperlink Tech Solutions",
  description: "${metaDesc}",
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
                    <strong>${breadcrumb}</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">EV Charging Solutions</div>
                        <p className="eyebrow">${eyebrow}</p>
                        <h1 id="service-title">${h1}</h1>
                        <p className="hero-lead">${lead}</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Specialized infrastructure for the electric vehicle industry</li>
                            <li>Scalable operations and management platforms</li>
                            <li>Designed for drivers, operators, and property managers</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Project <span className="arrow">↗</span></a>
                        </div>
                    </div>
                </div>
            </section>

${restOfMain}

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

filesToFix.forEach(slug => {
    const filePath = path.join(directory, slug, "page.tsx");
    if (!fs.existsSync(filePath)) return;
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract metadata
    const titleMatch = content.match(/title:\s*"([^"]+)"/);
    const metaTitle = titleMatch ? titleMatch[1].replace(" – Hyperlink Tech Solutions", "") : "Service";
    
    const descMatch = content.match(/description:\s*"([^"]+)"/);
    const metaDesc = descMatch ? descMatch[1] : "Description";
    
    const eyebrowMatch = content.match(/<p className="eyebrow">(.*?)<\/p>/);
    const eyebrow = eyebrowMatch ? eyebrowMatch[1] : "Service";
    
    const h1Match = content.match(/<h1>(.*?)<\/h1>/);
    const h1 = h1Match ? h1Match[1] : "Service";
    
    const leadMatch = content.match(/<h1>.*?<\/h1>\s*<p>(.*?)<\/p>/s);
    const lead = leadMatch ? leadMatch[1].trim() : "Lead paragraph";
    
    const breadcrumb = eyebrow;
    
    // Extract the rest of main
    const restMatch = content.match(/(<section className="section" id="case-study".*?)<\/main>/s);
    const restOfMain = restMatch ? restMatch[1] : "<!-- Missing content -->";
    
    const newContent = template(slug, metaTitle, metaDesc, breadcrumb, eyebrow, h1, lead, restOfMain);
    
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Fixed ${slug}`);
});
