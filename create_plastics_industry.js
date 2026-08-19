const fs = require('fs');
const path = require('path');

const dir = path.join('d:', 'new website', 'hyperlink-nextjs-app-router', 'app', 'industries', 'plastics-rubber-building-materials');

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

// 1. Create CSS
fs.writeFileSync(path.join(dir, 'plastics-rubber-building-materials.css'), '/* Plastics, Rubber & Building Materials CSS */\n', 'utf8');

// 2. Create Client Scripts
const clientScripts = `// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function PlasticsRubberBuildingMaterialsClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { 
        "catalogues": { 
            "kicker": "Product Discovery", 
            "title": "Showcase complex material specifications clearly.", 
            "text": "Present fire ratings, acoustic data, compliance standards, and installation guides in an easily filterable interface.", 
            "items": ["Technical spec sheets", "Warranty & compliance docs", "Installation guides"], 
            "label": "Product & Material Catalogues" 
        }, 
        "specifier": { 
            "kicker": "Technical Sales", 
            "title": "Help architects specify your materials.", 
            "text": "Provide interactive visualizers and native BIM/CAD files so specifiers can drag and drop your products into their projects.", 
            "items": ["BIM & CAD libraries", "Material visualizers", "Automated spec-writers"], 
            "label": "Specifier & Design Tools" 
        }, 
        "samples": { 
            "kicker": "Sales Workflows", 
            "title": "Accelerate the commercial specification cycle.", 
            "text": "Digitize sample requests, multi-stage commercial quotes, and project-based product grouping for architects.", 
            "items": ["Digital sample requests", "Multi-stage quoting", "Project board portals"], 
            "label": "Samples, Quotes & Projects" 
        }, 
        "dealers": { 
            "kicker": "B2B Commerce", 
            "title": "Digitize bulk trade and distributor ordering.", 
            "text": "Build ordering engines that handle custom tier pricing, complex pack sizes (pallets/sqm), and heavy freight logistics.", 
            "items": ["Contract pricing engines", "Complex unit conversions", "Self-serve dealer admin"], 
            "label": "Dealer & Distributor Portals" 
        }, 
        "quality": { 
            "kicker": "Executive Operations", 
            "title": "Visibility across manufacturing and supply chain.", 
            "text": "Aggregate data from the factory floor and logistics networks to track First Pass Yield, defect rates, and delivery performance.", 
            "items": ["First Pass Yield tracking", "Logistics dashboards", "Defect analytics"], 
            "label": "Quality & Supply Dashboards" 
        } 
    };

    document.querySelectorAll('.solution-tab').forEach((tab) => {
        tab.addEventListener('click', (e) => {
            const target = e.currentTarget as HTMLElement;
            document.querySelectorAll('.solution-tab').forEach(x => x.classList.remove('active'));
            target.classList.add('active');
            
            const key = target.dataset.key;
            if (!key || !solutionData[key]) return;
            
            const d = solutionData[key];
            const kicker = document.getElementById('solutionKicker');
            if (kicker) kicker.textContent = d.kicker;
            
            const title = document.getElementById('solutionTitle');
            if (title) title.textContent = d.title;
            
            const text = document.getElementById('solutionText');
            if (text) text.textContent = d.text;
            
            const list = document.getElementById('solutionList');
            if (list) list.innerHTML = d.items.map((x: string) => '<span>' + x + '</span>').join('');
            
            const link = document.getElementById('solutionLink') as HTMLAnchorElement | null;
            if (link) link.href = d.link;
            
            const badge = document.getElementById('uiBadge');
            if (badge) badge.textContent = d.label;
        });
    });

    const handleFaqClick = (e: MouseEvent) => {
        const target = (e.target as HTMLElement).closest('.faq-question');
        if (!target) return;
        const item = target.closest('.faq-item');
        if (!item) return;
        
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(x => {
            x.classList.remove('open');
            const lastSpan = x.querySelector('.faq-question span:last-child');
            if (lastSpan) lastSpan.textContent = '+';
        });
        
        if (!wasOpen) {
            item.classList.add('open');
            const lastSpan = target.querySelector('span:last-child');
            if (lastSpan) lastSpan.textContent = '\\u2212';
        }
    };
    
    if (!(window as any)._faqListenerAdded) {
        document.addEventListener('click', handleFaqClick);
        (window as any)._faqListenerAdded = true;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = Array.from(document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-zoom"));
    if (prefersReducedMotion) {
        revealElements.forEach(element => element.classList.add("is-visible"));
    } else {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
        revealElements.forEach(element => revealObserver.observe(element));
    }

    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const open = mobileMenu.classList.toggle('open');
            menuBtn.textContent = open ? 'A-' : '~';
        });
    }

    document.querySelectorAll('.js-demo-form').forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const successMsg = form.querySelector('.success-message');
            if (successMsg) successMsg.classList.add('show');
        });
    });

  }, []);

  return null;
}
`;
fs.writeFileSync(path.join(dir, 'PlasticsRubberBuildingMaterialsClientScripts.tsx'), clientScripts, 'utf8');

// 3. Create Page
const pageTsx = `import type { Metadata } from "next";
import Link from "next/link";
import "../industry-template.css";
import "./plastics-rubber-building-materials.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PlasticsRubberBuildingMaterialsClientScripts from "./PlasticsRubberBuildingMaterialsClientScripts";

export const metadata: Metadata = {
  alternates: { canonical: "/industries/plastics-rubber-building-materials/" },
  title: "Plastics, Rubber & Building Materials Website Design | Hyperlink",
  description: "B2B digital platforms, technical catalogues, and dealer portals for manufacturers of building materials, plastics, and rubber products.",
};

export default function PlasticsRubberBuildingMaterialsPage() {
  return (
    <>
      <SiteHeader />

      <main id="top" className="saas-industry-page">

            <section className="hero" data-block-type="hero" data-block-id="industry-hero">
                <div className="container">
                    <div className="breadcrumbs"><a href="/">Home</a><span>/</span><a
                            href="/industries/">Industries</a><span>/</span><strong>Building Materials, Plastics & Rubber</strong></div>
                    <div className="hero-grid">
                        <div className="hero-copy reveal">
                            <p className="eyebrow">Manufacturing & Materials</p>
                            <h1>Connect technical specifiers, dealers, and manufacturing operations.</h1>
                            <p className="hero-lead">We build highly technical product catalogues, architectural specifier tools, and complex B2B dealer ordering portals for manufacturers of building materials, plastics, and rubber.</p>
                            <div className="hero-points">
                                <span>Present complex parent-child product variations and compliance data clearly</span>
                                <span>Accelerate the specification process with interactive BIM and sample tools</span>
                                <span>Automate bulk trade ordering with ERP-integrated pricing logic</span>
                            </div>
                            <div className="hero-actions"><a className="btn primary" href="#free-review">Get a Free Industry
                                    Review →</a><a className="btn" href="#solutions">Explore Solutions</a></div>
                            <p className="microcopy">No obligation. Share your current workflow or platform idea and we will
                                identify a practical first-release opportunity.</p>
                        </div>
                        <aside className="review-card reveal-right" id="free-review"><span className="review-badge">Free Materials Manufacturing review</span>
                            <h2>Find the digital journey that needs attention first.</h2>
                            <p>Share your current platform, workflow or project idea. We will reply with a focused
                                recommendation.</p>
                            <div className="review-deliverables"><span>Current journey
                                    observations</span><span>Highest-priority opportunity</span><span>Key data and
                                    integration dependencies</span></div>
                            <form className="compact-form js-demo-form" action="/api/leads" method="post"><input
                                    type="hidden" name="source_page" value="industries/plastics-rubber-building-materials" /><input
                                    type="hidden" name="offer" value="free-industries/materials-review" /><input
                                    name="email" type="email" required={true} placeholder="Work email *" /><input name="company"
                                    required={true} placeholder="Company name *" /><select name="goal">
                                    <option>Primary requirement</option>
                                    <option>Product & Material Catalogues</option>
                                    <option>Specifier & Design Tools</option>
                                    <option>Samples, Quotes & Projects</option>
                                    <option>Dealer & Distributor Portals</option>
                                    <option>Quality & Supply Dashboards</option>
                                    <option>Existing platform redesign</option>
                                </select>
                                <div className="success-message">Thanks—your request is ready. Connect this form to the
                                    existing API endpoint.</div><button className="btn primary" type="submit">Get My Free
                                    Review →</button>
                            </form>
                            <p className="privacy-note">Capabilities, integrations and regulated workflows depend on
                                approved scope, source data and responsible providers.</p>
                        </aside>
                    </div>
                </div>
            </section>
            
            <section className="section" data-block-type="proofStrip">
                <div className="container">
                    <div className="trust-strip reveal">
                        <div className="trust-item"><strong>Industry-specific logic</strong><span>Cart rules reflect heavy freight and complex pack sizes.</span></div>
                        <div className="trust-item"><strong>Roles connected</strong><span>Architects, trade dealers, and production teams interact smoothly.</span></div>
                        <div className="trust-item"><strong>Operations included</strong><span>Samples, quotes, invoices, and production status remain visible.</span></div>
                        <div className="trust-item"><strong>Integration-aware</strong><span>Seamless connections to legacy manufacturing ERPs (SAP, NetSuite).</span></div>
                    </div>
                </div>
            </section>
            
            <section className="section soft" data-block-type="painOutcomeGrid">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Where digital journeys break</p>
                            <p>Complex materials require clear technical data and reliable ordering states.</p>
                        </div>
                        <h2>Fix the friction that slows commercial specification and dealer orders.</h2>
                    </div>
                    <div className="problem-grid">
                        <article className="problem-card reveal-zoom"><span className="problem-num">01</span>
                            <h3>Technical specs and BIM files are difficult to locate.</h3>
                            <p>Architects abandon your site because they can't easily find fire ratings, compliance docs, or native CAD models.</p>
                            <span className="outcome">Outcome: Advanced, filterable product catalogues and CAD libraries.</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">02</span>
                            <h3>Sample requests are untracked and disconnected from sales.</h3>
                            <p>You send thousands of dollars in physical samples without visibility into which ones result in a commercial specification.</p>
                            <span className="outcome">Outcome: Trackable sample workflows integrated directly with CRM.</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">03</span>
                            <h3>B2B ordering is bogged down in manual email attachments.</h3>
                            <p>Dealers call your team constantly because standard ecommerce can't handle their specific contract pricing or complex freight.</p>
                            <span className="outcome">Outcome: Self-serve dealer portals with live ERP integration.</span>
                        </article>
                    </div>
                </div>
            </section>
            
            <section className="section" id="solutions" data-block-type="solutionTabs">
                <div className="container">
                    <div className="solutions-shell">
                        <div className="solution-tabs reveal">
                            <p className="eyebrow" style={{"color":"#bfa8ff"}}>What we build</p>
                            <h2>Connected digital capabilities across the industry lifecycle.</h2>
                            <button className="solution-tab active" data-key="catalogues"><span>01</span><span>Product & Material Catalogues</span><span>→</span></button>
                            <button className="solution-tab" data-key="specifier"><span>02</span><span>Specifier & Design Tools</span><span>→</span></button>
                            <button className="solution-tab" data-key="samples"><span>03</span><span>Samples, Quotes & Projects</span><span>→</span></button>
                            <button className="solution-tab" data-key="dealers"><span>04</span><span>Dealer & Distributor Portals</span><span>→</span></button>
                            <button className="solution-tab" data-key="quality"><span>05</span><span>Quality & Supply Dashboards</span><span>→</span></button>
                        </div>
                        <div className="solution-panel reveal-right">
                            <div className="solution-copy"><span className="mini" id="solutionKicker">Product Discovery</span>
                                <h3 id="solutionTitle">Showcase complex material specifications clearly.</h3>
                                <p id="solutionText">Present fire ratings, acoustic data, compliance standards, and installation guides in an easily filterable interface.</p>
                                <div className="solution-list" id="solutionList"><span>Technical spec sheets</span><span>Warranty & compliance docs</span><span>Installation guides</span></div>
                                <Link className="btn" id="solutionLink" href="/services/product-and-material-catalogues/">Discuss this capability →</Link>
                            </div>
                            <div className="ui-window" aria-hidden="true">
                                <div className="ui-top">
                                    <div className="ui-dots"><i></i><i></i><i></i></div><span className="ui-badge"
                                        id="uiBadge">Product & Material Catalogues</span>
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
                            <h2>A practical lifecycle from architectural discovery to manufacturing and dispatch.</h2>
                            <p>The platform gives specifiers clear technical journeys, provides sales teams with trackable workflows, and empowers dealers with self-serve procurement connected to manufacturing reality.</p>
                            <div className="case-features">
                                <div className="case-feature"><span>01</span>
                                    <div><strong>Specifier experience</strong><small>BIM libraries, compliance data, sample requests, and technical discovery.</small></div>
                                </div>
                                <div className="case-feature"><span>02</span>
                                    <div><strong>Dealer & Partner workspace</strong><small>Contract pricing, bulk ordering, freight calculations, and invoices.</small></div>
                                </div>
                                <div className="case-feature"><span>03</span>
                                    <div><strong>Manufacturing control</strong><small>Data integrations, ERP connections, yield reporting, and logistics.</small></div>
                                </div>
                            </div>
                            <div className="case-stack"><span>Next.js</span><span>Headless CMS</span><span>ERP Integrations</span><span>Web Cart Logic</span><span>Analytics</span></div>
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
                        <h2>A practical route from complex spreadsheets to a scalable digital product.</h2>
                    </div>
                    <div className="process-grid">
                        <article className="process-step"><span>01 · DISCOVER</span>
                            <h3>Understand users, SKUs and outcomes.</h3>
                            <p>Review target audiences (architects vs. trade), complex parent/child SKU structures, ERP constraints, and success measures.</p>
                        </article>
                        <article className="process-step"><span>02 · STRUCTURE</span>
                            <h3>Define taxonomy, logic and integrations.</h3>
                            <p>Map out exactly how products are grouped, how dealer pricing works in the ERP, and how CAD files will be delivered.</p>
                        </article>
                        <article className="process-step"><span>03 · BUILD & INTEGRATE</span>
                            <h3>Create the product in focused milestones.</h3>
                            <p>Develop headless catalogues, interactive visualizers, and the complex cart logic required for pallets and heavy freight.</p>
                        </article>
                        <article className="process-step"><span>04 · LAUNCH & IMPROVE</span>
                            <h3>Release with clear ownership.</h3>
                            <p>Document the integration layer, train the marketing team on the CMS, and optimize based on actual B2B usage.</p>
                        </article>
                    </div>
                </div>
            </section>
            
            <section className="section soft" data-block-type="childIndustryGrid">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Industry categories</p>
                            <p>Explore the business model closest to your organisation.</p>
                        </div>
                        <h2>Different manufacturing models require tailored digital journeys.</h2>
                    </div>
                    <div className="category-grid">
                        <a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Building Materials</h3>
                            <p>Timber, cladding, bricks, masonry, and architectural finishes.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Plastics Manufacturing</h3>
                            <p>Extrusions, molding, industrial plastics, and specialized polymers.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Rubber & Synthetics</h3>
                            <p>Industrial belting, automotive components, and heavy-duty synthetics.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Architectural Hardware</h3>
                            <p>Doors, windows, technical fittings, and commercial fixtures.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Roofing & Insulation</h3>
                            <p>Thermal materials, acoustics, heavy roofing, and waterproofing.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Interior Fitout Supplies</h3>
                            <p>Flooring, ceiling grids, commercial lighting, and partitioning.</p><span>Discuss category</span>
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
                        <div className="faq-item open"><button className="faq-question"><span>Can you integrate B2B ordering portals with legacy ERPs like SAP?</span><span>−</span></button>
                            <div className="faq-answer">
                                <p>Yes. We build custom API middleware that securely connects modern web frontends directly into complex manufacturing ERPs for live pricing, inventory deduction, and credit limit checks.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>How do you handle complex freight rules for heavy materials?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Standard eCommerce platforms fail at this. We write custom cart logic that calculates freight based on weight, pallets, linear meters, and whether a site requires a forklift or flatbed delivery.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you track sample requests inside our CRM?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes, we can pipe digital sample requests directly into Salesforce, HubSpot, or Microsoft Dynamics, triggering automated follow-up workflows for your sales team.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you build product visualizers?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes, we build interactive 2D and 3D visualizers that allow architects to select a room or exterior and swap out cladding colors, brick styles, or flooring textures dynamically.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Do you build headless CMS architecture?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes. For manufacturers with thousands of SKUs, we heavily utilize headless platforms like Sanity.io or Contentful to create ultra-fast, structured technical catalogues that avoid WordPress limitations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="final-cta" id="project-enquiry">
                <div className="container">
                    <div className="final-box">
                        <div className="final-copy">
                            <p className="eyebrow" style={{"color":"#cdbdff"}}>Have a Manufacturing or Materials project?</p>
                            <h2>Tell us what your specifiers, dealers and operations teams need next.</h2>
                            <p>Use this form for a new technical catalogue, dealer portal, CAD library, or integration.</p>
                        </div>
                        <form className="full-form js-demo-form" action="/api/leads" method="post"><input type="hidden"
                                name="source_page" value="industries/plastics-rubber-building-materials" /><input type="hidden" name="offer"
                                value="industries/materials-project-proposal" />
                            <div className="field"><label>Name *</label><input name="name" required={true} placeholder="Your name" />
                            </div>
                            <div className="field"><label>Work email *</label><input name="email" type="email" required={true}
                                    placeholder="you@company.com" /></div>
                            <div className="field"><label>Company</label><input name="company" placeholder="Company name" />
                            </div>
                            <div className="field"><label>Primary requirement</label><select name="requirement">
                                    <option>Product & Material Catalogues</option>
                                    <option>Specifier & Design Tools</option>
                                    <option>Samples, Quotes & Projects</option>
                                    <option>Dealer & Distributor Portals</option>
                                    <option>Quality & Supply Dashboards</option>
                                    <option>Existing platform redesign</option>
                                </select></div>
                            <div className="field full"><label>Project details</label><textarea name="message"
                                    placeholder="Users, workflows, complex SKUs, ERP systems and timeline"></textarea>
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
      <PlasticsRubberBuildingMaterialsClientScripts />
    </>
  );
}
`;
fs.writeFileSync(path.join(dir, 'page.tsx'), pageTsx, 'utf8');

console.log("Plastics, Rubber & Building Materials Industry Page Generated successfully!");
