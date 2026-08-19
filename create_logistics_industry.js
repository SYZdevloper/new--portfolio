const fs = require('fs');
const path = require('path');

const dir = path.join('d:', 'new website', 'hyperlink-nextjs-app-router', 'app', 'industries', 'logistics-warehousing');

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

// 1. Create Client Scripts
const clientScripts = `// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function LogisticsWarehousingClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { 
        "discovery": { 
            "kicker": "Network Discovery", 
            "title": "Showcase your supply chain capabilities.", 
            "text": "Clearly communicate network capacity, specialized equipment, and lane coverage to prospective enterprise shippers.", 
            "items": ["Interactive network maps", "Equipment catalogues", "Lane coverage visualization"], 
            "label": "Freight & Capacity Discovery" 
        }, 
        "quoting": { 
            "kicker": "Revenue", 
            "title": "Digitize the freight sale.", 
            "text": "Engineer custom quoting engines and booking flows that integrate directly with your TMS.", 
            "items": ["Instant web quoting", "Live TMS integration", "Automated BOL generation"], 
            "label": "Quotes, Booking & Dispatch" 
        }, 
        "carrier": { 
            "kicker": "B2B Operations", 
            "title": "Streamline carrier relations.", 
            "text": "Provide secure B2B portals where external carriers and warehouse partners can view loads, submit bids, and upload documents.", 
            "items": ["Load board interfaces", "Digital document vaults", "Automated settlement"], 
            "label": "Carrier & Supplier Portals" 
        }, 
        "tracking": { 
            "kicker": "Service", 
            "title": "Self-serve visibility for shippers.", 
            "text": "Build secure portals where your customers can track active freight, download invoices, and manage shipping addresses.", 
            "items": ["Visual ELD tracking", "Invoice & statement retrieval", "Automated milestone alerts"], 
            "label": "Tracking & Customer Portals" 
        }, 
        "analytics": { 
            "kicker": "Executive Operations", 
            "title": "Visibility across the logistics network.", 
            "text": "Aggregate data from your TMS, WMS, and accounting software to track lane profitability and carrier performance.", 
            "items": ["Executive margin scorecards", "Carrier performance tracking", "Warehouse pick rate analytics"], 
            "label": "Supply Chain Dashboards" 
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
fs.writeFileSync(path.join(dir, 'LogisticsWarehousingClientScripts.tsx'), clientScripts, 'utf8');

// 2. Create Page
const pageTsx = `import type { Metadata } from "next";
import Link from "next/link";
import "../industry-template.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import LogisticsWarehousingClientScripts from "./LogisticsWarehousingClientScripts";

export const metadata: Metadata = {
  alternates: { canonical: "/industries/logistics-warehousing/" },
  title: "Logistics & Warehousing Software Solutions | Hyperlink",
  description: "B2B digital platforms, custom TMS integrations, and supply chain portals for 3PLs, carriers, and freight forwarders.",
};

export default function LogisticsWarehousingPage() {
  return (
    <>
      <SiteHeader />

      <main id="top" className="saas-industry-page">

            <section className="hero" data-block-type="hero" data-block-id="industry-hero">
                <div className="container">
                    <div className="breadcrumbs"><a href="/">Home</a><span>/</span><a
                            href="/industries/">Industries</a><span>/</span><strong>Logistics & Warehousing</strong></div>
                    <div className="hero-grid">
                        <div className="hero-copy reveal">
                            <p className="eyebrow">Supply Chain Technology</p>
                            <h1>Digitize freight operations from quote to delivery.</h1>
                            <p className="hero-lead">We build custom quoting engines, track-and-trace customer portals, and seamless carrier management tools for modern 3PLs, freight brokers, and asset-based carriers.</p>
                            <div className="hero-points">
                                <span>Automate complex LTL/FTL quoting directly on the web</span>
                                <span>Provide enterprise shippers with visual, self-serve tracking dashboards</span>
                                <span>Integrate deeply with legacy TMS, WMS, and ELD platforms</span>
                            </div>
                            <div className="hero-actions"><a className="btn primary" href="#free-review">Get a Free Industry
                                    Review →</a><a className="btn" href="#solutions">Explore Solutions</a></div>
                            <p className="microcopy">No obligation. Share your current workflow or platform idea and we will
                                identify a practical first-release opportunity.</p>
                        </div>
                        <aside className="review-card reveal-right" id="free-review"><span className="review-badge">Free Logistics Tech review</span>
                            <h2>Find the digital journey that needs attention first.</h2>
                            <p>Share your current platform, workflow or project idea. We will reply with a focused
                                recommendation.</p>
                            <div className="review-deliverables"><span>Current journey
                                    observations</span><span>Highest-priority opportunity</span><span>Key data and
                                    integration dependencies</span></div>
                            <form className="compact-form js-demo-form" action="/api/leads" method="post"><input
                                    type="hidden" name="source_page" value="industries/logistics-warehousing" /><input
                                    type="hidden" name="offer" value="free-industries/logistics-review" /><input
                                    name="email" type="email" required={true} placeholder="Work email *" /><input name="company"
                                    required={true} placeholder="Company name *" /><select name="goal">
                                    <option>Primary requirement</option>
                                    <option>Freight & Capacity Discovery</option>
                                    <option>Quotes, Booking & Dispatch</option>
                                    <option>Carrier & Supplier Portals</option>
                                    <option>Tracking & Customer Portals</option>
                                    <option>Supply Chain Dashboards</option>
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
                        <div className="trust-item"><strong>Industry-specific logic</strong><span>Cart rules reflect dimensional weight and specialized accessorials.</span></div>
                        <div className="trust-item"><strong>Roles connected</strong><span>Shippers, brokers, drivers, and warehouse staff interact smoothly.</span></div>
                        <div className="trust-item"><strong>Operations included</strong><span>Invoices, BOLs, PODs, and tracking remain visible.</span></div>
                        <div className="trust-item"><strong>Integration-aware</strong><span>Seamless connections to TMS (MercuryGate, McLeod, AS400).</span></div>
                    </div>
                </div>
            </section>
            
            <section className="section soft" data-block-type="painOutcomeGrid">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Where digital journeys break</p>
                            <p>Moving freight requires speed and absolute visibility.</p>
                        </div>
                        <h2>Fix the friction that slows dispatch and frustrates shippers.</h2>
                    </div>
                    <div className="problem-grid">
                        <article className="problem-card reveal-zoom"><span className="problem-num">01</span>
                            <h3>Manual quoting creates an expensive bottleneck.</h3>
                            <p>Customers request a quote via email, and your team takes hours to calculate tariffs and capacity manually, losing the load to a digital broker.</p>
                            <span className="outcome">Outcome: Automated web quoting integrated with your TMS.</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">02</span>
                            <h3>Lack of tracking visibility frustrates enterprise shippers.</h3>
                            <p>Your track-and-trace team spends all day answering "Where is my truck?" emails instead of solving real logistics problems.</p>
                            <span className="outcome">Outcome: Self-serve tracking portals with live ELD maps.</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">03</span>
                            <h3>Missing PODs delay invoicing and crush cash flow.</h3>
                            <p>Drivers lose physical paperwork, delaying the entire accounts receivable cycle by weeks.</p>
                            <span className="outcome">Outcome: Mobile document vaults for instant carrier uploads.</span>
                        </article>
                    </div>
                </div>
            </section>
            
            <section className="section" id="solutions" data-block-type="solutionTabs">
                <div className="container">
                    <div className="solutions-shell">
                        <div className="solution-tabs reveal">
                            <p className="eyebrow" style={{"color":"#bfa8ff"}}>What we build</p>
                            <h2>Connected digital capabilities across the supply chain.</h2>
                            <button className="solution-tab active" data-key="discovery"><span>01</span><span>Freight & Capacity Discovery</span><span>→</span></button>
                            <button className="solution-tab" data-key="quoting"><span>02</span><span>Quotes, Booking & Dispatch</span><span>→</span></button>
                            <button className="solution-tab" data-key="carrier"><span>03</span><span>Carrier & Supplier Portals</span><span>→</span></button>
                            <button className="solution-tab" data-key="tracking"><span>04</span><span>Tracking & Customer Portals</span><span>→</span></button>
                            <button className="solution-tab" data-key="analytics"><span>05</span><span>Supply Chain Dashboards</span><span>→</span></button>
                        </div>
                        <div className="solution-panel reveal-right">
                            <div className="solution-copy"><span className="mini" id="solutionKicker">Network Discovery</span>
                                <h3 id="solutionTitle">Showcase your supply chain capabilities.</h3>
                                <p id="solutionText">Clearly communicate network capacity, specialized equipment, and lane coverage to prospective enterprise shippers.</p>
                                <div className="solution-list" id="solutionList"><span>Interactive network maps</span><span>Equipment catalogues</span><span>Lane coverage visualization</span></div>
                                <Link className="btn" id="solutionLink" href="/services/freight-and-capacity-discovery/">Discuss this capability →</Link>
                            </div>
                            <div className="ui-window" aria-hidden="true">
                                <div className="ui-top">
                                    <div className="ui-dots"><i></i><i></i><i></i></div><span className="ui-badge"
                                        id="uiBadge">Freight & Capacity Discovery</span>
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
                            <h2>A practical lifecycle from freight quote to final delivery.</h2>
                            <p>The platform gives shippers instant pricing, provides operations teams with trackable dispatch workflows, and empowers carriers with self-serve load boards connected to the core TMS.</p>
                            <div className="case-features">
                                <div className="case-feature"><span>01</span>
                                    <div><strong>Shipper experience</strong><small>Instant quoting, live tracking, and digital invoice retrieval.</small></div>
                                </div>
                                <div className="case-feature"><span>02</span>
                                    <div><strong>Carrier workspace</strong><small>Load boards, bidding, POD uploads, and settlement tracking.</small></div>
                                </div>
                                <div className="case-feature"><span>03</span>
                                    <div><strong>Broker control</strong><small>TMS integrations, ELD mapping, margin reporting, and dispatch logic.</small></div>
                                </div>
                            </div>
                            <div className="case-stack"><span>Next.js</span><span>TMS APIs</span><span>ELD Integrations</span><span>Mapping</span><span>Analytics</span></div>
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
                        <h2>A practical route from manual emails to a scalable digital brokerage.</h2>
                    </div>
                    <div className="process-grid">
                        <article className="process-step"><span>01 · DISCOVER</span>
                            <h3>Understand users, rates and outcomes.</h3>
                            <p>Review target audiences (shippers vs. carriers), complex tariff structures, TMS constraints, and success measures.</p>
                        </article>
                        <article className="process-step"><span>02 · STRUCTURE</span>
                            <h3>Define taxonomy, logic and integrations.</h3>
                            <p>Map out exactly how dimensional weight is calculated, how APIs will hit the TMS, and how ELD data will display on a map.</p>
                        </article>
                        <article className="process-step"><span>03 · BUILD & INTEGRATE</span>
                            <h3>Create the product in focused milestones.</h3>
                            <p>Develop headless portals, secure document vaults, and the complex cart logic required for LTL accessorials.</p>
                        </article>
                        <article className="process-step"><span>04 · LAUNCH & IMPROVE</span>
                            <h3>Release with clear ownership.</h3>
                            <p>Document the integration layer, train the dispatch team, and optimize based on actual carrier usage.</p>
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
                        <h2>Different supply chain models require tailored digital journeys.</h2>
                    </div>
                    <div className="category-grid">
                        <a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Freight Brokerages & 3PLs</h3>
                            <p>Asset-light logistics relying on carrier networks and rapid quoting.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Asset-Based Carriers</h3>
                            <p>Trucking fleets needing equipment visualization and direct shipper portals.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Warehousing & Fulfillment</h3>
                            <p>Facilities requiring WMS integrations, pick/pack visibility, and inventory sync.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Cold Chain & Specialized</h3>
                            <p>Refrigerated or Hazmat logistics requiring strict compliance and temperature tracking.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Last-Mile Delivery</h3>
                            <p>Urban delivery networks needing routing optimization and consumer-facing tracking links.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Freight Forwarding</h3>
                            <p>Global logistics managing ocean/air freight, customs docs, and multi-modal tracking.</p><span>Discuss category</span>
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
                        <div className="faq-item open"><button className="faq-question"><span>Can you integrate portals with legacy TMS systems like McLeod or MercuryGate?</span><span>−</span></button>
                            <div className="faq-answer">
                                <p>Yes. We build custom API middleware that securely connects modern web frontends directly into complex Transportation Management Systems for live pricing, load posting, and dispatch status.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>How do you handle complex LTL quoting accessorials?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Standard forms fail at this. We write custom quoting logic that intelligently asks shippers about liftgates, residential delivery, and hazardous materials to calculate the true freight cost.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you track trucks on a live map?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes, we can pipe ELD or visibility provider data (like Samsara or Project44) directly into a Mapbox frontend to provide Amazon-style visual tracking for your enterprise shippers.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Do you build load boards for carriers?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes, we build secure, authenticated portals where approved carriers can log in, view available freight, submit bids, and click to 'Book Now'.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="final-cta" id="project-enquiry">
                <div className="container">
                    <div className="final-box">
                        <div className="final-copy">
                            <p className="eyebrow" style={{"color":"#cdbdff"}}>Have a Logistics or Supply Chain project?</p>
                            <h2>Tell us what your shippers, carriers and operations teams need next.</h2>
                            <p>Use this form for a new quoting engine, tracking portal, load board, or TMS integration.</p>
                        </div>
                        <form className="full-form js-demo-form" action="/api/leads" method="post"><input type="hidden"
                                name="source_page" value="industries/logistics-warehousing" /><input type="hidden" name="offer"
                                value="industries/logistics-project-proposal" />
                            <div className="field"><label>Name *</label><input name="name" required={true} placeholder="Your name" />
                            </div>
                            <div className="field"><label>Work email *</label><input name="email" type="email" required={true}
                                    placeholder="you@company.com" /></div>
                            <div className="field"><label>Company</label><input name="company" placeholder="Company name" />
                            </div>
                            <div className="field"><label>Primary requirement</label><select name="requirement">
                                    <option>Freight & Capacity Discovery</option>
                                    <option>Quotes, Booking & Dispatch</option>
                                    <option>Carrier & Supplier Portals</option>
                                    <option>Tracking & Customer Portals</option>
                                    <option>Supply Chain Dashboards</option>
                                    <option>Existing platform redesign</option>
                                </select></div>
                            <div className="field full"><label>Project details</label><textarea name="message"
                                    placeholder="Users, workflows, complex logic, TMS systems and timeline"></textarea>
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
      <LogisticsWarehousingClientScripts />
    </>
  );
}
`;
fs.writeFileSync(path.join(dir, 'page.tsx'), pageTsx, 'utf8');

console.log("Logistics & Warehousing Industry Page Generated successfully!");
