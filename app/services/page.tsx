import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HomeInteractions from "@/components/HomeInteractions";
import { headers } from 'next/headers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: "/services/" },
  title: "Web Design and Development Services | Hyperlink",
  description: "Explore our website design, development, UI/UX and custom software services built for startups, growing businesses and established companies.",
};

export default async function ServicesPage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await props.searchParams;
  const headersList = await headers();
  const country = searchParams.testGeo || headersList.get('x-vercel-ip-country') || 'IN';
  const isIndia = country === 'IN';

  const budgetOptions = isIndia
    ? [
      "Under ₹25,000",
      "₹25,000 – ₹50,000",
      "₹50,000 – ₹1,00,000",
      "₹1,00,000 – ₹3,00,000",
      "₹3,00,000+"
    ]
    : [
      "Under $500",
      "$500 – $1,000",
      "$1,000 – $2,500",
      "$2,500 – $5,000",
      "$5,000+"
    ];

  return (
    <>
      <div className="page-shell">
        <SiteHeader />
        <main id="top">
          {/* Hero */}
          <section className="hero" aria-labelledby="services-title">
            <div className="container hero-grid" style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="hero-copy" style={{ textAlign: 'center', alignItems: 'center' }}>
                <p className="eyebrow" style={{ alignSelf: 'center' }}>Our capabilities</p>
                <h1 id="services-title">Web Design and Development Services</h1>
                <p>Explore our website design, development, UI/UX and custom software services built for startups, growing businesses and established companies.</p>
                <div className="hero-actions" style={{ justifyContent: 'center' }}>
                  <a className="btn primary js-open-proposal" href="#contact">
                    Discuss Your Project
                    <span className="arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Services grid */}
          <section className="section" id="all-services">
            <div className="container">
              <div className="service-bento">

                {/* 1. Custom Website Design */}
                <a className="service-bento-card" href="/services/custom-website-design/">
                  <div>
                    <span className="service-index">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                    </span>
                    <h3>Custom Website Design</h3>
                    <p>Custom website design services for businesses, SaaS companies and growing brands.</p>
                  </div>
                  <div className="service-card-footer">
                    <span>Explore Service</span>
                    <span className="service-card-arrow">↗</span>
                  </div>
                </a>

                {/* 2. Business Website Development */}
                <a className="service-bento-card" href="/services/business-website-development/">
                  <div>
                    <span className="service-index">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17l6-6-6-6" /><path d="M12 19h8" /></svg>
                    </span>
                    <h3>Business Website Development</h3>
                    <p>Business website development services for corporate, service and B2B organisations.</p>
                  </div>
                  <div className="service-card-footer">
                    <span>Explore Service</span>
                    <span className="service-card-arrow">↗</span>
                  </div>
                </a>

                {/* 3. Landing Page Design */}
                <a className="service-bento-card" href="/services/landing-page-design/">
                  <div>
                    <span className="service-index">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                    </span>
                    <h3>Landing Page Design</h3>
                    <p>Landing page design and development for paid campaigns, lead generation and specific offers.</p>
                  </div>
                  <div className="service-card-footer">
                    <span>Explore Service</span>
                    <span className="service-card-arrow">↗</span>
                  </div>
                </a>

                {/* 4. SaaS UI/UX Design */}
                <a className="service-bento-card" href="/services/saas-ui-ux-design/">
                  <div>
                    <span className="service-index">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="9" y1="3" x2="9" y2="21" /></svg>
                    </span>
                    <h3>SaaS UI/UX Design</h3>
                    <p>SaaS UI and UX design services for dashboards, admin panels and web applications.</p>
                  </div>
                  <div className="service-card-footer">
                    <span>Explore Service</span>
                    <span className="service-card-arrow">↗</span>
                  </div>
                </a>

                {/* 5. Custom Web Application Development */}
                <a className="service-bento-card" href="/services/custom-web-app-development/">
                  <div>
                    <span className="service-index">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                    </span>
                    <h3>Custom Web Application Development</h3>
                    <p>Custom web application development services for internal tools, portals and complex business operations.</p>
                  </div>
                  <div className="service-card-footer">
                    <span>Explore Service</span>
                    <span className="service-card-arrow">↗</span>
                  </div>
                </a>

                {/* 6. Dashboard Design */}
                <a className="service-bento-card" href="/services/dashboard-design/">
                  <div>
                    <span className="service-index">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                    </span>
                    <h3>Dashboard Design</h3>
                    <p>Dashboard design services for operational visibility, reporting and user management.</p>
                  </div>
                  <div className="service-card-footer">
                    <span>Explore Service</span>
                    <span className="service-card-arrow">↗</span>
                  </div>
                </a>

                {/* 7. Design System Development */}
                <a className="service-bento-card" href="/services/design-system-development/">
                  <div>
                    <span className="service-index">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
                    </span>
                    <h3>Design System Development</h3>
                    <p>Design system development for consistent interfaces across websites and applications.</p>
                  </div>
                  <div className="service-card-footer">
                    <span>Explore Service</span>
                    <span className="service-card-arrow">↗</span>
                  </div>
                </a>

                {/* 8. Frontend Development */}
                <a className="service-bento-card" href="/services/frontend-development/">
                  <div>
                    <span className="service-index">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                    </span>
                    <h3>Frontend Development</h3>
                    <p>Frontend development services using React, Next.js and modern CSS architecture.</p>
                  </div>
                  <div className="service-card-footer">
                    <span>Explore Service</span>
                    <span className="service-card-arrow">↗</span>
                  </div>
                </a>

                {/* 9. Admin Panel Development */}
                <a className="service-bento-card" href="/services/admin-panel-development/">
                  <div>
                    <span className="service-index">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                    </span>
                    <h3>Admin Panel Development</h3>
                    <p>Custom admin panel development for managing users, content, transactions and platform operations.</p>
                  </div>
                  <div className="service-card-footer">
                    <span>Explore Service</span>
                    <span className="service-card-arrow">↗</span>
                  </div>
                </a>

                {/* 10. Client Portal Development */}
                <a className="service-bento-card" href="/services/client-portal-development/">
                  <div>
                    <span className="service-index">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                    </span>
                    <h3>Client Portal Development</h3>
                    <p>Custom client portal development for secure file sharing, project tracking and customer communication.</p>
                  </div>
                  <div className="service-card-footer">
                    <span>Explore Service</span>
                    <span className="service-card-arrow">↗</span>
                  </div>
                </a>

                {/* 11. Custom ERP Development */}
                <a className="service-bento-card" href="/services/custom-erp-development/">
                  <div>
                    <span className="service-index">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                    </span>
                    <h3>Custom ERP Development</h3>
                    <p>Custom ERP development for operations, finance, inventory, HR, approvals and reporting.</p>
                  </div>
                  <div className="service-card-footer">
                    <span>Explore Service</span>
                    <span className="service-card-arrow">↗</span>
                  </div>
                </a>

                {/* 12. Website Redesign */}
                <a className="service-bento-card" href="/services/website-redesign/">
                  <div>
                    <span className="service-index">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>
                    </span>
                    <h3>Website Redesign</h3>
                    <p>Website redesign services for outdated, slow or underperforming websites.</p>
                  </div>
                  <div className="service-card-footer">
                    <span>Explore Service</span>
                    <span className="service-card-arrow">↗</span>
                  </div>
                </a>

                {/* 13. Website Maintenance */}
                <a className="service-bento-card" href="/services/website-maintenance/">
                  <div>
                    <span className="service-index">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                    </span>
                    <h3>Website Maintenance</h3>
                    <p>Website maintenance services for updates, bug fixes, backups, security checks and technical support.</p>
                  </div>
                  <div className="service-card-footer">
                    <span>Explore Service</span>
                    <span className="service-card-arrow">↗</span>
                  </div>
                </a>

                {/* 14. Ecommerce Development */}
                <a className="service-bento-card" href="/services/ecommerce-development/">
                  <div>
                    <span className="service-index">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                    </span>
                    <h3>Ecommerce Development</h3>
                    <p>Ecommerce development services for Shopify, headless commerce and custom online storefronts.</p>
                  </div>
                  <div className="service-card-footer">
                    <span>Explore Service</span>
                    <span className="service-card-arrow">↗</span>
                  </div>
                </a>

                {/* 15. Website Migration */}
                <a className="service-bento-card" href="/services/website-migration/">
                  <div>
                    <span className="service-index">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </span>
                    <h3>Website Migration</h3>
                    <p>Website migration services for moving content, URLs and integrations between platforms securely.</p>
                  </div>
                  <div className="service-card-footer">
                    <span>Explore Service</span>
                    <span className="service-card-arrow">↗</span>
                  </div>
                </a>

                {/* 16. API Integration Development */}
                <a className="service-bento-card" href="/services/api-integration-development/">
                  <div>
                    <span className="service-index">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12h8" /><path d="M12 8v8" /><circle cx="12" cy="12" r="10" /></svg>
                    </span>
                    <h3>API Integration Development</h3>
                    <p>API integration development for connecting websites, SaaS platforms, and business systems.</p>
                  </div>
                  <div className="service-card-footer">
                    <span>Explore Service</span>
                    <span className="service-card-arrow">↗</span>
                  </div>
                </a>

                {/* 17. Website Performance Optimisation */}
                <a className="service-bento-card" href="/services/website-performance-optimization/">
                  <div>
                    <span className="service-index">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                    </span>
                    <h3>Website Performance Optimisation</h3>
                    <p>Performance optimisation for faster loading, Core Web Vitals, and better frontend efficiency.</p>
                  </div>
                  <div className="service-card-footer">
                    <span>Explore Service</span>
                    <span className="service-card-arrow">↗</span>
                  </div>
                </a>

                {/* 18. MVP Development */}
                <a className="service-bento-card" href="/services/mvp-development/">
                  <div>
                    <span className="service-index">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="m12 12-4 4v7" /><path d="m8 16-4-4" /></svg>
                    </span>
                    <h3>MVP Development</h3>
                    <p>MVP development services for startups to build focused first versions with essential features.</p>
                  </div>
                  <div className="service-card-footer">
                    <span>Explore Service</span>
                    <span className="service-card-arrow">↗</span>
                  </div>
                </a>

              </div>
            </div>
          </section>

          {/* Short supporting section */}
          <section className="section soft">
            <div className="container">
              <div className="intro-grid">
                <div className="intro-copy">
                  <p className="eyebrow">Why Hyperlink</p>
                  <p>From initial planning and UI design to development, testing and launch, Hyperlink Tech Solutions manages the complete digital delivery process.</p>
                  <ul className="hero-points faq-intro">
                    <li>Custom design</li>
                    <li>Responsive development</li>
                    <li>SEO foundations</li>
                    <li>Post-launch support</li>
                  </ul>
                </div>
                <h2 className="intro-title">One team for design and development.</h2>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="big-cta">
            <div className="container">
              <h2>
                Not sure which
                <br />
                service you need?
              </h2>
              <div className="big-cta-row">
                <p>Tell us what you are planning to build, and we will recommend the right service and project approach.</p>
                <div className="hero-actions">
                  <a className="btn primary js-open-proposal" href="#contact">Get a Free Proposal <span className="arrow">↗</span></a>
                  <a className="btn" href="/contact/">Contact Us <span className="arrow">↗</span></a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter budgetOptions={budgetOptions} />
      </div>
      <HomeInteractions />
    </>
  );
}
