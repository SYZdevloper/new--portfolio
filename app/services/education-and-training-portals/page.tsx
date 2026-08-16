import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/education-and-training-portals/" },
  title: "Education & Training Portals | Hyperlink Tech Solutions",
  description: "Modernize corporate learning. We build custom Learning Management Systems (LMS), compliance portals, and interactive training environments designed for actual retention.",
};

export default function EducationAndTrainingPortals() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/education-and-training-portals/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/education-and-training-portals/",
          "name": "Education & Training Portals | Hyperlink Tech Solutions",
          "description": "Modernize corporate learning. We build custom Learning Management Systems (LMS), compliance portals, and interactive training environments designed for actual retention.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/education-and-training-portals/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/education-and-training-portals/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/education-and-training-portals/#service",
          "name": "Education & Training Portals",
          "serviceType": "LMS & Corporate Training Architecture",
          "url": "https://hyperlinktechsolutions.com/services/education-and-training-portals/",
          "description": "Modernize corporate learning. We build custom Learning Management Systems (LMS), compliance portals, and interactive training environments designed for actual retention.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Corporate HR, EdTech Publishers, and Healthcare Compliance Officers"
          }
        }
      ]
    }
    ` }} />
      
    <ServiceInteractions />
      <div className="service-page-wrapper">
        <SiteHeader />

        <main id="top">
            <section className="hero service-hero" aria-labelledby="service-title">
                <nav className="service-breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services/">Services</Link><span>›</span>
                    <strong>Education & Training Portals</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Interactive Learning Infrastructure</div>
                        <p className="eyebrow">Education & Training Portals</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Corporate training that doesn\'t <em class="accent-text">put your team to sleep.</em>' }}></h1>
                        <p className="hero-lead">We build custom Learning Management Systems (LMS) and enterprise training portals that prioritize user experience. Replace out-of-the-box compliance software with engaging, measurable learning environments.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom LMS architecture using Next.js and secure video hosting</li>
                            <li>SCORM/xAPI integration for legacy course compatibility</li>
                            <li>Interactive assessments, certifications, and compliance tracking</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Training Needs <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Portal benefits">
                        <div className="proof-item">
                            <small>01 · High Completion Rates</small>
                            <strong>Intuitive UI means employees actually finish their modules.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Automated Compliance</small>
                            <strong>Instantly flag certifications that are about to expire.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Scalable Architecture</small>
                            <strong>Host high-definition video for 10,000+ simultaneous users.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Granular Analytics</small>
                            <strong>Track exact drop-off points within individual learning videos.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When Custom Portals are necessary</p>
                        <p>When your company outgrows standard LMS platforms and needs proprietary assessment logic.</p>
                        <a className="btn" href="#contact">Modernize Your LMS <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Standard LMS software is built for administrators, not learners.</h2>
                        <p>Most enterprise training software is notoriously clunky, visually outdated, and difficult to navigate. When your onboarding or compliance training feels like a relic from 2005, it sets a terrible first impression for new hires and guarantees low knowledge retention.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The "Click-Next" Syndrome</h3>
                                <p>Learners disengage from static slide-based courses, mindlessly clicking "Next" as fast as possible just to get the completion certificate.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Siloed Data</h3>
                                <p>Your training platform doesn't communicate with your HRIS (like Workday) or your active directory, creating massive administrative overhead.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Mobile Incompatibility</h3>
                                <p>Deskless workers (retail, manufacturing, logistics) cannot easily complete training modules because the portal is impossible to use on a smartphone.</p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section soft" id="included">
                <div className="container">
                    <div className="solution-shell">
                        <div className="solution-head">
                            <div>
                                <p className="eyebrow" style={{color: "#d8c2ff"}}>The deliverables</p>
                                <h2>Custom Learning Environments.</h2>
                            </div>
                            <p>We build secure, headless learning applications that deliver modern video streaming, interactive assessments, and deep analytics without the bloat of traditional platforms.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Media</span>
                                <h3>Secure Video Delivery</h3>
                                <p>Integrating enterprise-grade CDN infrastructure to stream encrypted training videos globally, preventing unauthorized downloading or sharing.</p>
                                <div className="deliverable-tags"><small>Video</small><small>CDN</small><small>HLS/DASH</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Assessments</span>
                                <h3>Interactive Quizzes & Logic</h3>
                                <p>Building dynamic testing modules—from simple multiple-choice to branching scenario-based logic that adapts to the learner's previous answers.</p>
                                <div className="deliverable-tags"><small>Testing</small><small>Logic</small><small>Certifications</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Integrations</span>
                                <h3>SSO & HRIS Syncing</h3>
                                <p>Implementing Single Sign-On (SAML/OIDC) so employees use existing credentials, and automatically syncing completion data back to your HR software.</p>
                                <div className="deliverable-tags"><small>SSO</small><small>HRIS</small><small>Workday</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · UX/UI</span>
                                <h3>Mobile-First Portals</h3>
                                <p>Designing clean, consumer-grade interfaces that allow deskless employees to consume micro-learning content natively on their smartphones.</p>
                                <div className="deliverable-tags"><small>Mobile</small><small>Micro-learning</small><small>UX</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Portal Build</p>
                            <h2>Modernizing compliance for a national healthcare provider.</h2>
                        </div>
                        <p>See how we replaced a legacy LMS with a mobile-friendly onboarding platform for nurses.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>LMS Portal</span>
                                <span>React & Node.js</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#1a1a1a', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ color: '#666', fontSize: '1.2rem', fontWeight: 500 }}>Mobile Course Dashboard</div>
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Healthcare Network</p>
                                <h2>Training deskless healthcare workers.</h2>
                                <p>A network of 40 clinics was struggling with their annual compliance training. Their legacy LMS required VPN access and only worked on desktop Internet Explorer, making it incredibly difficult for busy nurses to complete their modules.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Only 45% of staff were completing mandatory HIPAA and safety training on time, putting the organization at severe regulatory risk.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We built a progressive web app (PWA) portal utilizing Okta for SSO. Nurses could now securely stream short, 5-minute training modules directly on their phones during breaks.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>On-time compliance completion jumped to 98% within the first year. The HR department saved an estimated 40 hours a month previously spent chasing employees.</strong></div>
                            </div>
                            <a className="btn primary" href="/contact">Start Your Project <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">Common questions about Training Portals.</h2>
                        <p>Answers covering legacy course imports, security, and hosting.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can we import our old SCORM courses into a custom portal?</summary>
                            <p>Yes. We can build SCORM/xAPI compliant players into your new custom portal. This allows you to migrate thousands of hours of legacy content (built in tools like Articulate or Captivate) without having to rebuild the courses from scratch.</p>
                        </details>
                        <details>
                            <summary>Why build a custom LMS instead of using Canvas or Moodle?</summary>
                            <p>Off-the-shelf platforms are great for standard use cases, but they lack flexibility. We build custom platforms when you need highly specific assessment logic, deep integration with proprietary internal systems, or a completely white-labeled user experience that standard tools can't provide.</p>
                        </details>
                        <details>
                            <summary>How do you handle video hosting costs?</summary>
                            <p>We decouple the video hosting from the application layer. We typically utilize enterprise services like Mux, AWS MediaLive, or Vimeo API, which optimize the streaming bitrate for the user's connection and keep your server costs drastically lower than self-hosting massive video files.</p>
                        </details>
                        <details>
                            <summary>Can the platform generate verifiable certificates?</summary>
                            <p>Absolutely. We can program the backend to dynamically generate PDF certificates upon course completion, complete with unique ID numbers, dates, and QR codes that verify the credential against your database.</p>
                        </details>
                        <details>
                            <summary>Is the training data secure?</summary>
                            <p>Yes. We build to strict security standards, utilizing robust encryption in transit and at rest. If you are in a regulated industry (like healthcare or finance), we can ensure the architecture complies with HIPAA, SOC2, or GDPR requirements.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Complete your digital infrastructure.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/gamification-and-rewards/"><div><small>Engagement</small><h3>Gamification</h3><p>Add points, streaks, and leaderboards to your training modules.</p></div><b>Explore gamification ↗</b></a>
                        <a className="related-card" href="/services/game-operations-and-analytics/"><div><small>Data</small><h3>Analytics Dashboards</h3><p>Build custom reporting tools to visualize learner progression and drop-off.</p></div><b>Explore analytics ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize learning. <br />Ensure compliance. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to replace your clunky legacy LMS with a fast, modern training environment? Let's discuss your portal.</p>
                        <a className="btn" href="#contact">Get a Portal Proposal <span className="arrow">↗</span></a>
                    </div>
                </div>
            </section>
        </main>

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
