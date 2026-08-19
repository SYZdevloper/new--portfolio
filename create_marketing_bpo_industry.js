const fs = require('fs');
const path = require('path');

const industrySlug = 'marketing-creative-bpo-support-services';
const industryTitle = 'Marketing, Creative, BPO & Support Services';
const directory = path.join('d:', 'new website', 'hyperlink-nextjs-app-router', 'app', 'industries', industrySlug);

const pageContent = `import type { Metadata } from "next";
import Link from "next/link";
import "../industry-template.css";
import IndustryClientScripts from "./IndustryClientScripts";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  alternates: { canonical: "/industries/${industrySlug}/" },
  title: "${industryTitle} Software Development | Hyperlink Tech Solutions",
  description: "We build high-performance agency platforms, digital asset managers, BPO portals, and creative collaboration tools that drive efficiency and scale.",
};

export default function Page() {
  return (
    <>
      <IndustryClientScripts />
      <div className="industry-page-wrapper">
        <SiteHeader />

        <main id="top">
          {/* 1. HERO SECTION */}
          <section className="hero industry-hero" aria-labelledby="industry-title">
            <div className="hero-background">
                {/* Abstract geometric background to represent creative/BPO networking */}
                <div className="bg-shape shape-1"></div>
                <div className="bg-shape shape-2"></div>
                <div className="bg-shape shape-3"></div>
            </div>

            <nav className="industry-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>›</span>
              <Link href="/industries/">Industries</Link><span>›</span>
              <strong>Marketing & BPO</strong>
            </nav>

            <div className="container hero-grid">
              <div className="hero-copy reveal">
                <div className="hero-status">Marketing, Creative & BPO</div>
                <h1 id="industry-title">Software that scales <br />creative and support operations.</h1>
                <p className="hero-lead">From bespoke agency client portals to high-volume BPO workflow tools, we build digital infrastructure that allows service businesses to scale efficiently.</p>
                <div className="hero-actions">
                  <a className="btn primary" href="#contact">Discuss Your Roadmap <span className="arrow">↗</span></a>
                  <a className="btn" href="#capabilities">Explore Capabilities</a>
                </div>
              </div>
            </div>
          </section>

          {/* 2. STATS / PROOF BAR */}
          <div className="proof-bar">
            <div className="container">
              <div className="proof-bar-inner" aria-label="Industry metrics">
                <div className="proof-item">
                  <small>Efficiency</small>
                  <strong>40% faster approvals</strong>
                </div>
                <div className="proof-item">
                  <small>Security</small>
                  <strong>SOC 2 compliance</strong>
                </div>
                <div className="proof-item">
                  <small>Scale</small>
                  <strong>Millions of assets managed</strong>
                </div>
                <div className="proof-item">
                  <small>Architecture</small>
                  <strong>Cloud-native workflows</strong>
                </div>
              </div>
            </div>
          </div>

          {/* 3. CAPABILITIES GRID (The "Lifecycle" of this industry) */}
          <section className="section" id="capabilities">
            <div className="container">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">Connected Capabilities</p>
                  <h2>Digital transformation across agency & BPO lifecycles.</h2>
                </div>
                <p>We build specialized software that addresses the unique bottlenecks of high-volume service delivery, from initial client intake to final asset delivery.</p>
              </div>

              <div className="capability-grid">
                <div className="capability-card reveal">
                  <div className="cap-num">01</div>
                  <h3>Agency & Studio Websites</h3>
                  <p>Visually stunning, high-performance portfolios and marketing sites that showcase creative work and capture high-value enterprise leads.</p>
                  <Link href="/services/agency-and-studio-websites/" className="cap-link">Explore Websites ↗</Link>
                </div>

                <div className="capability-card reveal">
                  <div className="cap-num">02</div>
                  <h3>Client Intake & Briefing</h3>
                  <p>Dynamic digital briefing forms that capture precise client requirements, asset specs, and budgets before a project even begins.</p>
                  <Link href="/services/client-intake-and-briefing/" className="cap-link">Explore Intake ↗</Link>
                </div>

                <div className="capability-card reveal">
                  <div className="cap-num">03</div>
                  <h3>Collaboration & Review Portals</h3>
                  <p>Secure environments for clients to review deliverables, annotate creative assets, and provide structured feedback without messy email chains.</p>
                  <Link href="/services/collaboration-and-review-portals/" className="cap-link">Explore Portals ↗</Link>
                </div>

                <div className="capability-card reveal">
                  <div className="cap-num">04</div>
                  <h3>Resource & Asset Management</h3>
                  <p>Internal tools to schedule creative teams, track project burn rates, and securely store vast libraries of digital assets (DAM).</p>
                  <Link href="/services/resource-and-asset-management/" className="cap-link">Explore DAM ↗</Link>
                </div>

                <div className="capability-card reveal">
                  <div className="cap-num">05</div>
                  <h3>BPO & Agency Dashboards</h3>
                  <p>Executive reporting tools providing real-time visibility into account profitability, staff utilization, and SLA compliance.</p>
                  <Link href="/services/bpo-and-agency-dashboards/" className="cap-link">Explore Analytics ↗</Link>
                </div>
              </div>
            </div>
          </section>

          {/* 4. CASE STUDY */}
          <section className="section soft" id="case-study">
            <div className="container">
              <div className="case-study-shell reveal">
                <article className="case-copy">
                  <div>
                    <p className="eyebrow">Featured BPO Platform</p>
                    <h2>Automating a global support center.</h2>
                    <p>We helped a 500-seat Business Process Outsourcing (BPO) firm replace their fragmented ticketing and quality assurance spreadsheets with a unified React dashboard, reducing ticket handling time by 25% and providing their enterprise clients with real-time SLA visibility.</p>
                  </div>
                  <ul className="case-tags">
                    <li>Custom React Portals</li>
                    <li>SLA Dashboards</li>
                    <li>API Integrations</li>
                  </ul>
                  <a className="btn primary" href="/work/">Read Full Case Study <span className="arrow">↗</span></a>
                </article>
                <article className="case-visual" aria-label="Project visual">
                  <div className="case-image-wrapper">
                    {/* Placeholder for actual case study image */}
                    <div style={{width: '100%', height: '400px', backgroundColor: '#1a1a1a', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666'}}>BPO Dashboard Visualization</div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* 5. TECH STACK & INTEGRATIONS */}
          <section className="section" id="tech">
            <div className="container">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">Enterprise Integrations</p>
                  <h2>Connecting your operational stack.</h2>
                </div>
                <p>We build middleware that connects your custom frontends directly into the core systems used by modern agencies and BPOs.</p>
              </div>

              <div className="tech-grid">
                <div className="tech-item">Project Management <span>Asana, Monday.com, Jira</span></div>
                <div className="tech-item">CRM & Sales <span>Salesforce, HubSpot</span></div>
                <div className="tech-item">Asset Storage <span>AWS S3, Cloudinary</span></div>
                <div className="tech-item">Finance & Billing <span>Xero, QuickBooks, Stripe</span></div>
                <div className="tech-item">Communication <span>Slack APIs, Twilio</span></div>
                <div className="tech-item">Identity & Auth <span>Auth0, Okta, Azure AD</span></div>
              </div>
            </div>
          </section>

          {/* 6. CTA SECTION */}
          <section className="big-cta">
            <div className="container">
              <h2>Build software that scales <br />your agency. <span className="orb-icon" aria-hidden="true"></span></h2>
              <div className="big-cta-row">
                <p>From client collaboration portals to BPO operational dashboards, we build the digital infrastructure that drives service efficiency.</p>
                <a className="btn" href="#contact">Get a Proposal <span className="arrow">↗</span></a>
              </div>
            </div>
          </section>

        </main>
        <SiteFooter />
      </div>
    </>
  );
}
`;

const clientScriptsContent = `"use client";
import { useEffect } from "react";

export default function IndustryClientScripts() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}
`;

if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory, { recursive: true });
}

fs.writeFileSync(path.join(directory, 'page.tsx'), pageContent, 'utf8');
fs.writeFileSync(path.join(directory, 'IndustryClientScripts.tsx'), clientScriptsContent, 'utf8');

console.log('Created marketing-creative-bpo-support-services industry page');
