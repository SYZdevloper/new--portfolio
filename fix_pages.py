import os
import re

directory = r"d:\new website\hyperlink-nextjs-app-router\app\services"
files_to_fix = [
    "ev-charging-experiences",
    "station-discovery-and-access",
    "accounts-sessions-and-payments",
    "fleet-and-property-portals",
    "charging-operations-dashboards"
]

template = """import type {{ Metadata }} from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {{
  alternates: {{ canonical: "/services/{slug}/" }},
  title: "{meta_title} | Hyperlink Tech Solutions",
  description: "{meta_desc}",
}};

export default function Page() {{
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
                    <strong>{breadcrumb}</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">EV Charging Solutions</div>
                        <p className="eyebrow">{eyebrow}</p>
                        <h1 id="service-title">{h1}</h1>
                        <p className="hero-lead">{lead}</p>
                        <ul className="hero-points" style={{{{ listStyle: "none", padding: 0 }}}}>
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

{rest_of_main}

        <SiteFooter />
    </div>
    <a className="floating-cta" href="#contact">Get Proposal ↗</a>
    <div className="mobile-bottom" aria-label="Quick contact actions">
        <a href="mailto:hello@hyperlinktechsolutions.com">Email Us</a>
        <a href="#contact">Get Proposal</a>
    </div>
    </>
  );
}}
"""

for slug in files_to_fix:
    path = os.path.join(directory, slug, "page.tsx")
    if not os.path.exists(path):
        continue
    
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Extract meta title
    meta_title = re.search(r'title:\s*"([^"]+)"', content)
    meta_title = meta_title.group(1).replace(" – Hyperlink Tech Solutions", "") if meta_title else "Service"
    
    # Extract meta desc
    meta_desc = re.search(r'description:\s*"([^"]+)"', content)
    meta_desc = meta_desc.group(1) if meta_desc else "Description"
    
    # Extract eyebrow
    eyebrow = re.search(r'<p className="eyebrow">(.*?)</p>', content)
    eyebrow = eyebrow.group(1) if eyebrow else "Service"
    
    # Extract h1
    h1 = re.search(r'<h1>(.*?)</h1>', content)
    h1 = h1.group(1) if h1 else "Service"
    
    # Extract lead
    lead = re.search(r'<h1>.*?</h1>\s*<p>(.*?)</p>', content, flags=re.DOTALL)
    lead = lead.group(1).strip() if lead else "Lead paragraph"
    
    # Breadcrumb based on title
    breadcrumb = eyebrow
    
    # Extract rest of main (case-study to end of main)
    rest_of_main = re.search(r'(<section className="section" id="case-study".*?)</main>', content, flags=re.DOTALL)
    if rest_of_main:
        rest_of_main_content = rest_of_main.group(1)
    else:
        rest_of_main_content = "<!-- Missing content -->"
        
    new_content = template.format(
        slug=slug,
        meta_title=meta_title,
        meta_desc=meta_desc,
        breadcrumb=breadcrumb,
        eyebrow=eyebrow,
        h1=h1,
        lead=lead,
        rest_of_main=rest_of_main_content
    )
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Fixed {slug}")
