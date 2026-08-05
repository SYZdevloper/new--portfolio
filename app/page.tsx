import HomeInteractions from "@/components/HomeInteractions";
import WorkCarousel from "@/components/WorkCarousel";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { headers } from 'next/headers';

export default async function HomePage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await props.searchParams;
  const headersList = await headers();
  // We use searchParams for local testing, otherwise fallback to the Vercel header, otherwise default to IN
  const country = searchParams.testGeo || headersList.get('x-vercel-ip-country') || 'IN';
  const isIndia = country === 'IN';

  const currency = isIndia ? '₹' : '$';
  const priceStarter = isIndia ? '8,499' : '249';
  const pricePremium = isIndia ? '17,999' : '449';
  const priceEnterprise = isIndia ? '25,000+' : '649+';

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
          <section className="hero" aria-labelledby="homepage-title">
            <div className="container hero-grid">
              <div className="hero-copy">
                <div className="hero-status">Web design and development for ambitious businesses</div>
                <p className="eyebrow">Web design and development agency</p>
                <h1 id="homepage-title">
                  High-performance web design that makes your brand{' '}
                  <span className="accent-text">impossible to ignore.</span>
                </h1>
                <p>We design and develop custom business websites, landing pages, SaaS interfaces, dashboards and web applications that communicate clearly, build trust and generate better opportunities.</p>
                <ul className="hero-points">
                  <li>100+ clients served</li>
                  <li>Custom design and development</li>
                  <li>Clear, collaborative delivery</li>
                </ul>
                <div className="hero-actions">
                  <a className="btn primary js-open-proposal" href="#contact">
                    Get Free Proposal
                    <span className="arrow">↗</span>
                  </a>
                  <a className="btn" href="/work/">
                    View Our Work
                    <span className="arrow">↗</span>
                  </a>
                </div>
              </div>
              <div className="hero-product-scene" aria-label="Website experience planning preview">
                <div className="scene-glow" aria-hidden="true"></div>
                <div className="product-window">
                  <aside className="product-sidebar" aria-hidden="true">
                    <div className="product-sidebar-logo">•</div>
                    <span className="side-dot active"></span>
                    <span className="side-dot"></span>
                    <span className="side-dot"></span>
                    <span className="side-dot"></span>
                    <span className="side-dot"></span>
                  </aside>
                  <div className="product-main">
                    <div className="product-topbar">
                      <div>
                        <p>Website experience preview</p>
                        <h3>Built around the customer journey</h3>
                      </div>
                      <span className="product-avatar"></span>
                    </div>
                    <div className="product-kpis">
                      <div className="product-kpi">
                        <span>Positioning</span>
                        <strong>Clear</strong>
                        <small>Easy to understand</small>
                      </div>
                      <div className="product-kpi">
                        <span>Responsive UI</span>
                        <strong>All screens</strong>
                        <small>Mobile first</small>
                      </div>
                      <div className="product-kpi">
                        <span>Lead journey</span>
                        <strong>Focused</strong>
                        <small>Action ready</small>
                      </div>
                    </div>
                    <div className="product-panels">
                      <div className="product-panel">
                        <div className="product-panel-head">
                          Page experience
                          <span>Strategy to launch</span>
                        </div>
                        <div className="chart-bars" aria-hidden="true">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                        </div>
                      </div>
                      <div className="product-panel">
                        <div className="product-panel-head">
                          Core website areas
                          <span>Planned</span>
                        </div>
                        <div className="task-list">
                          <div className="task-row">
                            <span className="task-icon"></span>
                            <div className="task-copy">
                              <strong>Home and positioning</strong>
                              <span>Explain the offer</span>
                            </div>
                            <span className="task-status">Ready</span>
                          </div>
                          <div className="task-row">
                            <span className="task-icon"></span>
                            <div className="task-copy">
                              <strong>Services and proof</strong>
                              <span>Build confidence</span>
                            </div>
                            <span className="task-status">Ready</span>
                          </div>
                          <div className="task-row">
                            <span className="task-icon"></span>
                            <div className="task-copy">
                              <strong>Work and insights</strong>
                              <span>Show expertise</span>
                            </div>
                            <span className="task-status">Ready</span>
                          </div>
                          <div className="task-row">
                            <span className="task-icon"></span>
                            <div className="task-copy">
                              <strong>Enquiry flow</strong>
                              <span>Make action simple</span>
                            </div>
                            <span className="task-status">Ready</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section" id="services" aria-labelledby="services-title">
            <div className="container">
              <div className="intro-grid">
                <div className="intro-copy">
                  <p className="eyebrow">Core services</p>
                  <p>From high-converting business websites to product interfaces and custom web systems, we build around your audience, goals and workflows.</p>
                  <a className="btn" href="/services/">
                    View All Services
                    <span className="arrow">↗</span>
                  </a>
                </div>
                <h2 className="intro-title" id="services-title">Web design and development services for growing businesses.</h2>
              </div>
              <div className="service-bento">
                <a className="service-bento-card service-bento-main" href="/services/website-design/">
                  <div>
                    <span className="service-index">01</span>
                    <h3>Custom website design that makes your business clearer and more credible.</h3>
                    <p>Strategy-led websites shaped around your brand, audience and conversion goals—not a recycled template.</p>
                    <div className="service-highlights">
                      <span>Custom responsive UI</span>
                      <span>Conversion structure</span>
                      <span>CMS-ready build</span>
                    </div>
                  </div>
                  <div className="service-proof">
                    <div>
                      <strong>100+</strong>
                      <span>clients served</span>
                    </div>
                    <div className="service-card-footer">
                      <span>Explore Website Design</span>
                      <span className="service-card-arrow">↗</span>
                    </div>
                  </div>
                </a>
                <a className="service-bento-card" href="/services/business-website-development/">
                  <div>
                    <span className="service-index">02</span>
                    <h3>Business Website Development</h3>
                    <p>Professional company websites with service pages, enquiry flows, CMS control and analytics foundations.</p>
                  </div>
                  <div className="service-card-footer">
                    <span>Explore business websites</span>
                    <span className="service-card-arrow">↗</span>
                  </div>
                </a>
                <a className="service-bento-card" href="/services/landing-page-design/">
                  <div>
                    <span className="service-index">03</span>
                    <h3>Landing Page Design</h3>
                    <p>Focused campaign and launch pages that keep the message clear and guide visitors toward one valuable action.</p>
                  </div>
                  <div className="service-card-footer">
                    <span>Explore landing pages</span>
                    <span className="service-card-arrow">↗</span>
                  </div>
                </a>
                <a className="service-bento-card" href="/services/saas-ui-ux-design/">
                  <div>
                    <span className="service-index">04</span>
                    <h3>SaaS and Product UI/UX</h3>
                    <p>Clear interfaces and workflows for software products, dashboards, subscriptions and B2B platforms.</p>
                  </div>
                  <div className="service-card-footer">
                    <span>Explore product design</span>
                    <span className="service-card-arrow">↗</span>
                  </div>
                </a>
                <a className="service-bento-card" href="/services/custom-web-app-development/">
                  <div>
                    <span className="service-index">05</span>
                    <h3>Custom Web Applications</h3>
                    <p>Purpose-built portals, admin panels and web systems developed around your business requirements.</p>
                  </div>
                  <div className="service-card-footer">
                    <span>Explore web applications</span>
                    <span className="service-card-arrow">↗</span>
                  </div>
                </a>
              </div>
            </div>
          </section>
          <section className="section soft" id="work" aria-labelledby="work-title">
            <div className="container">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">Selected work</p>
                  <h2 id="work-title">A closer look at what we design and build.</h2>
                </div>

              </div>
              <WorkCarousel />
              <div className="work-footer">

                <a className="btn" href="/work/">
                  View All Work
                  <span className="arrow">↗</span>
                </a>
              </div>
            </div>
          </section>
          <section className="section industries-section" id="industries" aria-labelledby="industries-title">
            <div className="container">
              <div className="industries-shell">
                <div className="industries-head">
                  <div>
                    <p className="eyebrow">Industries we support</p>
                    <h2 id="industries-title">Digital experiences shaped around your market.</h2>
                  </div>
                  <div className="industries-head-side">
                    <p>We adapt the content, user journey and functionality to how customers buy and how each business operates.</p>
                    <a href="/industries/">
                      Explore all industries
                      <span className="arrow">↗</span>
                    </a>
                  </div>
                </div>
                <div className="industry-grid">
                  <a className="industry-link" href="/industries/manufacturing/">
                    <span className="industry-card-top">
                      <span className="industry-icon">MF</span>
                      <span className="industry-number">01</span>
                    </span>
                    <span className="industry-card-bottom">
                      <span>
                        <h3>Manufacturing</h3>
                        <p>Product catalogues, dealer portals and enquiry systems.</p>
                      </span>
                      <span className="industry-arrow">↗</span>
                    </span>
                  </a>
                  <a className="industry-link" href="/industries/real-estate/">
                    <span className="industry-card-top">
                      <span className="industry-icon">RE</span>
                      <span className="industry-number">02</span>
                    </span>
                    <span className="industry-card-bottom">
                      <span>
                        <h3>Real Estate</h3>
                        <p>Project websites, listings and lead-capture experiences.</p>
                      </span>
                      <span className="industry-arrow">↗</span>
                    </span>
                  </a>
                  <a className="industry-link" href="/industries/healthcare/">
                    <span className="industry-card-top">
                      <span className="industry-icon">HC</span>
                      <span className="industry-number">03</span>
                    </span>
                    <span className="industry-card-bottom">
                      <span>
                        <h3>Healthcare</h3>
                        <p>Patient journeys, appointment flows and secure portals.</p>
                      </span>
                      <span className="industry-arrow">↗</span>
                    </span>
                  </a>
                  <a className="industry-link" href="/industries/education/">
                    <span className="industry-card-top">
                      <span className="industry-icon">ED</span>
                      <span className="industry-number">04</span>
                    </span>
                    <span className="industry-card-bottom">
                      <span>
                        <h3>Education</h3>
                        <p>Admissions, course discovery and student platforms.</p>
                      </span>
                      <span className="industry-arrow">↗</span>
                    </span>
                  </a>
                  <a className="industry-link" href="/industries/saas-startups/">
                    <span className="industry-card-top">
                      <span className="industry-icon">SS</span>
                      <span className="industry-number">05</span>
                    </span>
                    <span className="industry-card-bottom">
                      <span>
                        <h3>SaaS and Startups</h3>
                        <p>Marketing sites, product UI and onboarding experiences.</p>
                      </span>
                      <span className="industry-arrow">↗</span>
                    </span>
                  </a>
                  <a className="industry-link" href="/industries/professional-services/">
                    <span className="industry-card-top">
                      <span className="industry-icon">PS</span>
                      <span className="industry-number">06</span>
                    </span>
                    <span className="industry-card-bottom">
                      <span>
                        <h3>Professional Services</h3>
                        <p>Clear positioning, authority and consultation lead flows.</p>
                      </span>
                      <span className="industry-arrow">↗</span>
                    </span>
                  </a>
                  <a className="industry-link" href="/industries/ecommerce/">
                    <span className="industry-card-top">
                      <span className="industry-icon">EC</span>
                      <span className="industry-number">07</span>
                    </span>
                    <span className="industry-card-bottom">
                      <span>
                        <h3>Ecommerce</h3>
                        <p>Storefronts, product discovery and smoother checkout UX.</p>
                      </span>
                      <span className="industry-arrow">↗</span>
                    </span>
                  </a>
                  <a className="industry-link" href="/industries/logistics/">
                    <span className="industry-card-top">
                      <span className="industry-icon">LG</span>
                      <span className="industry-number">08</span>
                    </span>
                    <span className="industry-card-bottom">
                      <span>
                        <h3>Logistics</h3>
                        <p>Tracking portals, operations dashboards and workflows.</p>
                      </span>
                      <span className="industry-arrow">↗</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="section process-section" id="process">
            <div className="container">
              <div className="process-shell">
                <div className="process-overview">
                  <p className="eyebrow">How we work</p>
                  <h2>A clear path from requirement to launch.</h2>
                  <p>A straightforward process for websites and digital products, with clear decisions, visible progress and practical next steps.</p>
                  <div className="process-proof" aria-label="Process benefits">
                    <span>Single point of contact</span>
                    <span>Weekly progress updates</span>
                    <span>Clear approvals</span>
                  </div>
                  <a className="btn js-open-proposal" href="#contact">
                    Plan My Project
                    <span className="arrow">↗</span>
                  </a>
                </div>
                <div className="process-timeline" aria-label="Our four-step process">
                  <article className="process-step">
                    <div className="step-marker">01</div>
                    <div className="step-main">
                      <div className="step-meta">
                        <div className="step-headline">
                          <strong>Understand</strong>
                          <h3>Discovery & alignment</h3>
                        </div>
                      </div>
                      <p>We understand your users, roles, workflows, business goals and the product outcomes your website or software must deliver.</p>
                    </div>
                    <div className="step-side">
                      <span className="step-time">Timeline: 1–2 days</span>
                      <span className="step-output">Discovery brief</span>
                    </div>
                  </article>
                  <article className="process-step">
                    <div className="step-marker">02</div>
                    <div className="step-main">
                      <div className="step-meta">
                        <div className="step-headline">
                          <strong>Plan</strong>
                          <h3>Strategy & experience map</h3>
                        </div>
                      </div>
                      <p>We shape the information architecture, user flows, navigation, screen priorities and the success criteria for the product.</p>
                    </div>
                    <div className="step-side">
                      <span className="step-time">Timeline: 2–4 days</span>
                      <span className="step-output">UX roadmap</span>
                    </div>
                  </article>
                  <article className="process-step">
                    <div className="step-marker">03</div>
                    <div className="step-main">
                      <div className="step-meta">
                        <div className="step-headline">
                          <strong>Create</strong>
                          <h3>Design, build & review</h3>
                        </div>
                      </div>
                      <p>Our team designs the screens, components and interaction patterns, then shares structured previews for focused stakeholder feedback.</p>
                    </div>
                    <div className="step-side">
                      <span className="step-time">Timeline: milestone based</span>
                      <span className="step-output">Approved build</span>
                    </div>
                  </article>
                  <article className="process-step">
                    <div className="step-marker">04</div>
                    <div className="step-main">
                      <div className="step-meta">
                        <div className="step-headline">
                          <strong>Improve</strong>
                          <h3>Test, launch and support</h3>
                        </div>
                      </div>
                      <p>We complete quality checks, connect forms and analytics, launch the project and provide handover or ongoing support.</p>
                    </div>
                    <div className="step-side">
                      <span className="step-time">Timeline: ongoing</span>
                      <span className="step-output">Launch + support</span>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
          <section className="section" id="pricing">
            <div className="container">
              <div className="pricing-shell">
                <div className="pricing-head">
                  <div>
                    <p className="eyebrow">Pricing</p>
                    <h2>Flexible packages for different stages of growth.</h2>
                  </div>
                  <p>Choose a starting package or request a custom proposal. Final pricing depends on page count, functionality, integrations, content requirements and delivery timeline.</p>
                </div>
                <div className="pricing-grid">
                  <article className="price-card">
                    <span className="price-badge">Starter</span>
                    <h3>Starter</h3>
                    <p>Perfect for local businesses wanting an online presence they can control.</p>
                    <div className="price-value">{currency}{priceStarter}</div>
                    <div className="price-note">Starting from</div>
                    <ul className="price-features">
                      <li>7–10 pages setup</li>
                      <li>Custom admin dashboard (CMS)</li>
                      <li>WhatsApp chat integration</li>
                      <li>Lead capture forms</li>
                      <li>Google Analytics setup</li>
                      <li>SEO optimization</li>
                      <li>Performance optimisation</li>
                      <li>Social media integration</li>
                      <li>2 months free bug support</li>
                    </ul>
                    <a className="btn js-open-proposal" href="#contact" data-package="Starter" data-price={`${currency}${priceStarter}`} data-service="Business Website Design" data-budget={budgetOptions[0]}>
                      Choose Starter
                      <span className="arrow">↗</span>
                    </a>
                  </article>
                  <article className="price-card featured">
                    <span className="price-badge orange">Most popular</span>
                    <h3>Premium</h3>
                    <p>For established businesses looking to capture leads and collect payments.</p>
                    <div className="price-value">{currency}{pricePremium}</div>
                    <div className="price-note">Starting from</div>
                    <ul className="price-features">
                      <li>17–20 pages setup</li>
                      <li>Online payment integration</li>
                      <li>Automated email setup</li>
                      <li>Domain connection support</li>
                      <li>Local SEO foundations</li>
                      <li>Business email setup support</li>
                      <li>Google Business Profile setup</li>
                      <li>Premium scroll animations</li>
                      <li>Instant lead notifications</li>
                    </ul>
                    <a className="btn primary js-open-proposal" href="#contact" data-package="Premium" data-price={`${currency}${pricePremium}`} data-service="Business Website Design" data-budget={budgetOptions[0]}>
                      Choose Premium
                      <span className="arrow">↗</span>
                    </a>
                  </article>
                  <article className="price-card">
                    <span className="price-badge">Enterprise</span>
                    <h3>Enterprise</h3>
                    <p>For startups and companies needing custom functionality and apps.</p>
                    <div className="price-value">{currency}{priceEnterprise}</div>
                    <div className="price-note">Starting from</div>
                    <ul className="price-features">
                      <li>Complex custom logic</li>
                      <li>3rd party API integrations</li>
                      <li>User portals & dashboards</li>
                      <li>Advanced booking systems</li>
                      <li>Secure custom architecture</li>
                      <li>Priority maintenance</li>
                      <li>Custom CRM dashboard</li>
                      <li>Role-based access control</li>
                      <li>Advanced security setup</li>
                    </ul>
                    <a className="btn js-open-proposal" href="#contact" data-package="Enterprise" data-price={`${currency}${priceEnterprise}`} data-service="Custom Web / Product Design" data-budget={budgetOptions[1]}>
                      Choose Enterprise
                      <span className="arrow">↗</span>
                    </a>
                  </article>
                  <article className="price-card">
                    <span className="price-badge">Custom ERP</span>
                    <h3>Custom ERP</h3>
                    <p>For large factories and offices needing internal management software.</p>
                    <div className="price-value">Custom</div>
                    <div className="price-note">Custom quote</div>
                    <ul className="price-features">
                      <li>Internal company software</li>
                      <li>Payroll & HR modules</li>
                      <li>Inventory management</li>
                      <li>Automated invoicing</li>
                      <li>Dedicated cloud server</li>
                      <li>Full-stack ownership</li>
                      <li>Secure employee portals</li>
                      <li>Custom reporting tools</li>
                      <li>1 year priority support</li>
                    </ul>
                    <a className="btn js-open-proposal" href="#contact" data-package="Custom ERP" data-price="Custom quote" data-service="Custom ERP / Internal Software">
                      Choose Custom ERP
                      <span className="arrow">↗</span>
                    </a>
                  </article>
                </div>
                <div className="pricing-footnote">Need a different scope? We can customise the package for your pages, functionality, integrations, content and support requirements.</div>
              </div>
            </div>
          </section>
          <section className="section soft" id="why-hyperlink" aria-labelledby="why-title">
            <div className="container">
              <div className="reviews-shell">
                <div className="testimonial-head">
                  <div>
                    <p className="eyebrow">Why businesses choose Hyperlink</p>
                    <h2 id="why-title">A focused digital team without unnecessary agency complexity.</h2>
                  </div>
                  <p className="testimonial-summary">Strategy, design and development stay connected—so decisions are clearer, handoffs are fewer and the final experience feels consistent.</p>
                </div>
                <div className="trust-grid">
                  <article className="trust-card">
                    <div className="trust-card-top">
                      <span>01</span>
                      <small>Think</small>
                    </div>
                    <h3>Strategy before visuals</h3>
                    <p>We clarify the message, audience and action before deciding how the website or product should look.</p>
                  </article>
                  <article className="trust-card">
                    <div className="trust-card-top">
                      <span>02</span>
                      <small>Create</small>
                    </div>
                    <h3>Design and development together</h3>
                    <p>Responsive behaviour, CMS control and implementation are considered while the interface is being designed.</p>
                  </article>
                  <article className="trust-card">
                    <div className="trust-card-top">
                      <span>03</span>
                      <small>Deliver</small>
                    </div>
                    <h3>Clear scope and communication</h3>
                    <p>You know what is included, what we need from you and what is happening at every stage of delivery.</p>
                  </article>
                  <article className="trust-card">
                    <div className="trust-card-top">
                      <span>04</span>
                      <small>Support</small>
                    </div>
                    <h3>Help beyond launch</h3>
                    <p>Handover, fixes and continued improvements can remain part of the engagement after the project goes live.</p>
                  </article>
                </div>
                <div className="reviews-proof">
                  <p>
                    <strong>100+ clients served</strong>
                    across websites, digital products, dashboards and business systems.
                  </p>
                  <a className="btn primary" href="/about/">
                    About Hyperlink
                    <span className="arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="section company-section" id="about" aria-labelledby="about-title">
            <div className="container company-shell">
              <div className="company-copy">
                <p className="eyebrow">About Hyperlink Tech Solutions</p>
                <h2 id="about-title">A practical digital partner for businesses ready to look sharper and work smarter online.</h2>
                <p>We bring website strategy, product UI/UX and web development into one connected team—helping businesses move from an unclear requirement to a polished, usable digital experience.</p>
                <div className="company-copy-points" aria-label="Core capabilities">
                  <span>Custom websites</span>
                  <span>Product interfaces</span>
                  <span>Business web systems</span>
                </div>
                <a className="btn primary" href="/about/">
                  Meet Hyperlink
                  <span className="arrow">↗</span>
                </a>
              </div>
              <div className="company-showcase" aria-label="Hyperlink Tech Solutions at a glance">
                <div className="company-showcase-head">
                  <span>Hyperlink at a glance</span>
                  <i aria-hidden="true"></i>
                </div>
                <div className="company-impact">
                  <strong>100+</strong>
                  <p>client partnerships across websites, digital products and business systems.</p>
                </div>
                <div className="company-capabilities">
                  <div>
                    <span>01</span>
                    <strong>Web design</strong>
                    <small>Clear, credible and conversion-aware websites.</small>
                  </div>
                  <div>
                    <span>02</span>
                    <strong>Product UI/UX</strong>
                    <small>Usable interfaces for SaaS, dashboards and portals.</small>
                  </div>
                  <div>
                    <span>03</span>
                    <strong>Web development</strong>
                    <small>Responsive builds, integrations and custom workflows.</small>
                  </div>
                </div>
                <div className="company-delivery">
                  <span>Direct collaboration</span>
                  <span>Flexible engagement</span>
                  <span>One connected team</span>
                </div>
              </div>
            </div>
          </section>
          <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
            <div className="container faq-shell">
              <div className="faq-intro">
                <p className="eyebrow">Frequently asked questions</p>
                <h2 id="faq-title">What businesses usually ask before starting.</h2>
                <p>These answers help visitors understand the service, process and next step before submitting a proposal request.</p>
              </div>
              <div className="faq-list">
                <details open>
                  <summary>What services does Hyperlink Tech Solutions provide?</summary>
                  <p>We provide custom website design, business website development, landing pages, ecommerce experiences, SaaS and dashboard UI/UX, portals, web applications, admin panels, ERP interfaces and ongoing support.</p>
                </details>
                <details>
                  <summary>Do you handle both website design and development?</summary>
                  <p>Yes. Projects can include strategy, structure, responsive UI design, development, CMS setup, forms, integrations, quality checks and launch support.</p>
                </details>
                <details>
                  <summary>How much does a business website cost?</summary>
                  <p>Starter packages begin at {currency}{priceStarter}. Final pricing depends on the number of pages, content, functionality, integrations, timeline and support requirements.</p>
                </details>
                <details>
                  <summary>How long does a website project take?</summary>
                  <p>The timeline depends on scope, content readiness and feedback speed. A focused business website is typically faster than a custom portal, dashboard or web application.</p>
                </details>
                <details>
                  <summary>Can projects be handled completely remotely?</summary>
                  <p>Yes. Discovery, reviews, approvals and delivery can all be managed remotely through clear milestones, scheduled updates and shared project tools.</p>
                </details>
              </div>
            </div>
          </section>
          <section className="section lead-section" id="contact">
            <div className="container lead-grid">
              <div className="lead-copy">
                <p className="eyebrow" style={{ color: "#d8c2ff" }}>Start your website or digital product</p>
                <h2>Ready to build a stronger digital experience?</h2>
                <p>Tell us what your business needs and we will reply with a recommended approach, estimated timeline and suitable starting package.</p>
                <ul>
                  <li>Discovery call for your website or product</li>
                  <li>Clear scope and transparent pricing</li>
                  <li>Design aligned with your audience and workflows</li>
                </ul>
              </div>
              <div className="lead-panel">
                <h3>Request your free proposal</h3>
                <p>Complete the form and we will contact you within one business day.</p>
                <form className="lead-form js-lead-form" data-form-name="Main Proposal Form" action="/api/leads" method="post" noValidate>
                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="main-name">Full name *</label>
                      <input id="main-name" name="name" required autoComplete="name" placeholder="Your full name" />
                    </div>
                    <div className="field">
                      <label htmlFor="main-company">Company</label>
                      <input id="main-company" name="company" autoComplete="organization" placeholder="Company name" />
                    </div>
                  </div>
                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="main-email">Work email *</label>
                      <input id="main-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
                    </div>
                    <div className="field">
                      <label htmlFor="main-phone">Phone *</label>
                      <input id="main-phone" name="phone" type="tel" required autoComplete="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>
                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="main-service">Primary requirement *</label>
                      <select id="main-service" name="service" required>
                        <option value="">Select a service</option>
                        <option>Business Website Design</option>
                        <option>Landing Page Design</option>
                        <option>SaaS / Product UI Design</option>
                        <option>Dashboard & Portal Design</option>
                        <option>Custom Web / Product Design</option>
                        <option>Custom ERP / Internal Software</option>
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="main-budget">Estimated budget *</label>
                      <select id="main-budget" name="budget" required>
                        <option value="">Select budget</option>
                        {budgetOptions.map(opt => <option key={opt}>{opt}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="main-message">Tell us about your project</label>
                    <textarea id="main-message" name="message" placeholder="Your business, required pages or features, timeline and current challenges"></textarea>
                  </div>
                  <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" />
                  <input type="hidden" name="landing_page" value="/" />
                  <input type="hidden" name="utm_source" />
                  <input type="hidden" name="utm_medium" />
                  <input type="hidden" name="utm_campaign" />
                  <input type="hidden" name="utm_term" />
                  <input type="hidden" name="utm_content" />
                  <input type="hidden" name="gclid" />

                  <button className="btn primary full" type="submit">
                    Send My Enquiry
                    <span className="arrow">↗</span>
                  </button>
                  <div className="form-status" aria-live="polite"></div>
                </form>
              </div>
            </div>
          </section>
          <section className="big-cta">
            <div className="container">
              <h2>
                Build a stronger
                <br />
                digital presence
                <span className="orb-icon" aria-hidden="true"></span>
                together.
              </h2>
              <div className="big-cta-row">
                <p>Have a website, landing page, dashboard or web application in mind? Let’s shape it into a clearer, more credible and more effective experience.</p>
                <a className="btn js-open-proposal" href="#contact">
                  Get a Free Proposal
                  <span className="arrow">↗</span>
                </a>
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
