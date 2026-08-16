import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/security-assessment-and-hardening/" },
  title: "Cloud Security Assessment & Hardening | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
  description: "Secure applications and cloud infrastructure against modern threats and ensure strict compliance (SOC2/HIPAA).",
};

export default function SecurityAssessmentAndHardening() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/security-assessment-and-hardening/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/security-assessment-and-hardening/",
          "name": "Cloud Security Assessment & Hardening | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
          "description": "Secure applications and cloud infrastructure against modern threats and ensure strict compliance (SOC2/HIPAA).",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/security-assessment-and-hardening/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/security-assessment-and-hardening/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/security-assessment-and-hardening/#service",
          "name": "Security Assessment & Hardening",
          "serviceType": "Cybersecurity",
          "url": "https://hyperlinktechsolutions.com/services/security-assessment-and-hardening/",
          "description": "Secure applications and cloud infrastructure against modern threats and ensure strict compliance (SOC2/HIPAA).",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Growing businesses, enterprises, and engineering teams"
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
                    <strong>Security Assessment</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Protecting critical infrastructure and data</div>
                        <p className="eyebrow">Security Assessment & Hardening</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Enterprise-grade security for <em class="accent-text">peace of mind.</em>' }}></h1>
                        <p className="hero-lead">We audit your codebase and cloud environments to uncover vulnerabilities, implement robust access controls, and harden your infrastructure to protect against modern threats and satisfy strict compliance audits.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Comprehensive vulnerability audits of code and cloud environments</li>
                            <li>Implementation of strict IAM and zero-trust architectures</li>
                            <li>Preparation and hardening for SOC2, HIPAA, and GDPR compliance</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a Security Audit <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Infrastructure benefits">
                        <div className="proof-item">
                            <small>01 · Vulnerability Discovery</small>
                            <strong>Finding the holes before malicious actors do.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Compliance Ready</small>
                            <strong>Architectures designed to easily pass SOC2 audits.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Access Control</small>
                            <strong>Locking down internal systems with strict IAM rules.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Data Protection</small>
                            <strong>Ensuring encryption at rest and in transit everywhere.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When security hardening is necessary</p>
                        <p>A single data breach can destroy years of customer trust and brand equity.</p>
                        <a className="btn" href="#contact">Discuss Security Needs <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Fast growth often leaves security behind.</h2>
                        <p>When engineering teams are moving fast to build features, security best practices are often ignored. We help you retroactively secure your applications without slowing down development.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Failing Compliance Audits</h3>
                                <p>Enterprise clients are demanding SOC2 or ISO27001 reports, but your current infrastructure cannot pass the strict security requirements.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Over-permissioned Access</h3>
                                <p>Every developer has root access to the production database, meaning one compromised laptop could lead to a catastrophic data breach.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Unknown Vulnerabilities</h3>
                                <p>You rely on heavily outdated open-source packages and legacy code, leaving known exploits exposed to the public internet.</p>
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
                                <h2>Comprehensive audits and robust defenses.</h2>
                            </div>
                            <p>We don't just hand you a PDF report of problems. We actively implement the fixes and harden your infrastructure.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Assessment</span>
                                <h3>Vulnerability Audits</h3>
                                <p>Deep-dive reviews of your application codebase, dependency trees, and cloud configurations to identify critical security flaws.</p>
                                <div className="deliverable-tags"><small>Code Audit</small><small>Pen Testing</small><small>Scanning</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Architecture</span>
                                <h3>IAM & Access Control</h3>
                                <p>Designing and implementing least-privilege IAM roles, Single Sign-On (SSO), and secure VPN access for your internal teams.</p>
                                <div className="deliverable-tags"><small>IAM</small><small>Zero-Trust</small><small>SSO</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Compliance</span>
                                <h3>Compliance Preparation</h3>
                                <p>Hardening your infrastructure with encryption, logging, and monitoring to meet the technical requirements for SOC2, HIPAA, or GDPR.</p>
                                <div className="deliverable-tags"><small>SOC2</small><small>HIPAA</small><small>Audit Prep</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Network</span>
                                <h3>WAF & DDoS Protection</h3>
                                <p>Implementing Web Application Firewalls (Cloudflare, AWS WAF) and strict network rules to block malicious traffic and automated attacks.</p>
                                <div className="deliverable-tags"><small>WAF</small><small>DDoS</small><small>Firewalls</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Security Build</p>
                            <h2>Securing a fintech application for SOC2 compliance.</h2>
                        </div>
                        <p>See how we completely overhauled a startup's cloud security posture to help them close enterprise banking contracts.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Security Engineering</span>
                                <span>AWS Hardening + SOC2</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Enterprise Security Hardening</p>
                                <h2>Passing the enterprise vendor review.</h2>
                                <p>A rapidly growing fintech startup was blocked from closing major enterprise deals because their AWS infrastructure and internal access controls could not pass a SOC2 Type II audit.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The infrastructure was built quickly. Developers shared AWS root credentials, databases were publicly accessible, and there was no central logging for audit trails.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We completely redesigned their AWS environment. We moved databases into private subnets, implemented strict IAM roles, enforced MFA everywhere, and set up automated CloudTrail logging.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>The company passed their SOC2 audit with zero exceptions, unblocking millions of dollars in enterprise pipeline and establishing a secure foundation for future growth.</strong></div>
                            </div>
                            <a className="btn primary" href="/work/">View All Projects <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">Common questions about security hardening.</h2>
                        <p>Answers covering penetration testing, compliance, and zero-trust.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>What is the difference between a vulnerability audit and penetration testing?</summary>
                            <p>An audit is a comprehensive review of your code, configurations, and architecture against security best practices (white-box). Penetration testing involves actively simulating a cyberattack on your live systems to exploit weaknesses (black-box). We offer both.</p>
                        </details>
                        <details>
                            <summary>Can you guarantee we will pass a SOC2 audit?</summary>
                            <p>While the final decision is up to the certified auditor, we implement the strict technical controls (encryption, access logging, least-privilege networks) that are explicitly required to satisfy the infrastructure portion of the audit.</p>
                        </details>
                        <details>
                            <summary>What is "least-privilege" or "zero-trust" architecture?</summary>
                            <p>It means no user or system is trusted by default. A developer should only have access to the specific servers they need for their job, and only when they need them. We lock down your environments so a single compromised password doesn't grant access to everything.</p>
                        </details>
                        <details>
                            <summary>Do you review third-party code dependencies?</summary>
                            <p>Yes. A massive percentage of modern breaches happen through outdated open-source libraries. We implement automated scanning in your CI/CD pipeline to flag and block deployments if a known vulnerability (CVE) is detected in a dependency.</p>
                        </details>
                        <details>
                            <summary>Will adding security controls slow down our developers?</summary>
                            <p>If done poorly, yes. If done well, no. We implement security natively into the DevOps pipeline (DevSecOps) and use seamless SSO tools so developers remain highly productive while operating securely.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Scale securely with modern infrastructure.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/cloud-architecture-and-migration/"><div><small>Cloud</small><h3>Cloud Architecture</h3><p>Design scalable, secure cloud environments and migrate workloads safely.</p></div><b>Explore cloud migration ↗</b></a>
                        <a className="related-card" href="/services/devops-and-deployment/"><div><small>DevOps</small><h3>DevOps & Deployment</h3><p>Automate infrastructure and establish CI/CD pipelines to ship faster.</p></div><b>Explore DevOps ↗</b></a>
                        <a className="related-card" href="/services/security-assessment-and-hardening/"><div><small>Security</small><h3>Security Hardening</h3><p>Secure applications and infrastructure against modern threats and ensure compliance.</p></div><b>Explore security ↗</b></a>
                        <a className="related-card" href="/services/database-architecture-and-scaling/"><div><small>Data</small><h3>Database Scaling</h3><p>Design highly available database layers that can handle massive traffic.</p></div><b>Explore database architecture ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Protect your data and <br />earn enterprise trust. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to uncover vulnerabilities and harden your cloud infrastructure? Let's discuss your security posture.</p>
                        <a className="btn" href="#contact">Get a Security Audit <span className="arrow">↗</span></a>
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
