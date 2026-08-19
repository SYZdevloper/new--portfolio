import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/cloud-architecture-and-migration/" },
  title: "Cloud Architecture & Migration Services | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
  description: "Design scalable, secure cloud environments on AWS/GCP and migrate enterprise workloads without disruption.",
};

export default function CloudArchitectureAndMigration() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/cloud-architecture-and-migration/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/cloud-architecture-and-migration/",
          "name": "Cloud Architecture & Migration Services | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
          "description": "Design scalable, secure cloud environments on AWS/GCP and migrate enterprise workloads without disruption.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/cloud-architecture-and-migration/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/cloud-architecture-and-migration/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/cloud-architecture-and-migration/#service",
          "name": "Cloud Architecture & Migration",
          "serviceType": "Cloud Infrastructure",
          "url": "https://hyperlinktechsolutions.com/services/cloud-architecture-and-migration/",
          "description": "Design scalable, secure cloud environments on AWS/GCP and migrate enterprise workloads without disruption.",
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
                    <strong>Cloud Architecture</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Secure, scalable cloud environments</div>
                        <p className="eyebrow">Cloud Architecture & Migration</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Migrate to the cloud with <em class="accent-text">absolute confidence.</em>' }}></h1>
                        <p className="hero-lead">We design highly available, secure cloud architectures on AWS and GCP, and execute flawless migrations that modernize your infrastructure while optimizing for performance and cost.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Design scalable, fault-tolerant cloud architectures</li>
                            <li>Execute zero-downtime migrations from on-prem to cloud</li>
                            <li>Audit and optimize existing cloud environments to reduce spend</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a Cloud Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Infrastructure benefits">
                        <div className="proof-item">
                            <small>01 · Zero Downtime</small>
                            <strong>Carefully orchestrated cutovers that users never notice.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Cost Optimization</small>
                            <strong>Right-sizing resources so you only pay for what you need.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · High Availability</small>
                            <strong>Multi-region deployments designed to survive outages.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Security First</small>
                            <strong>Strict IAM, VPCs, and encryption built in by default.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When cloud migration is necessary</p>
                        <p>Managing physical servers or outdated VPS hosting is a massive distraction from your core product.</p>
                        <a className="btn" href="#contact">Discuss Cloud Migration <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Your infrastructure shouldn't be a liability.</h2>
                        <p>Whether you are stuck on expensive on-premise hardware or dealing with a messy, poorly configured AWS account, we help you build a reliable foundation.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Terrifying Migrations</h3>
                                <p>The idea of moving massive databases and live applications to a new environment feels too risky to attempt without expert help.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Spiraling Cloud Costs</h3>
                                <p>Your AWS or GCP bill grows every month, but you aren't sure which resources are actually necessary and which are wasted.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Downtime Under Load</h3>
                                <p>Your current hosting cannot scale automatically, meaning traffic spikes result in sluggish performance or complete crashes.</p>
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
                                <h2>Enterprise cloud engineering from design to deployment.</h2>
                            </div>
                            <p>We don't just "lift and shift." We refactor and optimize your architecture to take full advantage of cloud-native technologies.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Design</span>
                                <h3>AWS / GCP Architecture</h3>
                                <p>Designing Virtual Private Clouds (VPCs), subnets, load balancers, and database clusters tailored exactly to your traffic patterns.</p>
                                <div className="deliverable-tags"><small>AWS</small><small>GCP</small><small>Topology</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Execution</span>
                                <h3>Migration Planning & Cutover</h3>
                                <p>Orchestrating the safe transfer of data, testing the new environment, and executing seamless DNS cutovers without dropping requests.</p>
                                <div className="deliverable-tags"><small>Cutover</small><small>Data Sync</small><small>DNS</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Modernisation</span>
                                <h3>Serverless Computing</h3>
                                <p>Refactoring applications to utilize serverless functions (Lambda, Cloud Run) to drastically reduce maintenance overhead and cost.</p>
                                <div className="deliverable-tags"><small>Serverless</small><small>Lambda</small><small>Scale</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · FinOps</span>
                                <h3>Cloud Cost Optimization</h3>
                                <p>Auditing existing environments to identify unused resources, implement reserved instances, and cut cloud hosting bills by up to 40%.</p>
                                <div className="deliverable-tags"><small>FinOps</small><small>Audits</small><small>Savings</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Migration</p>
                            <h2>Zero-downtime cloud migration for a healthcare platform.</h2>
                        </div>
                        <p>See how we moved a heavily regulated enterprise application from legacy on-premise servers to a highly secure, compliant AWS environment.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Cloud Engineering</span>
                                <span>AWS Migration + Security</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Zero-Downtime Cloud Migration</p>
                                <h2>Moving to AWS without dropping a single record.</h2>
                                <p>A healthcare provider needed to move their massive patient database and application servers to AWS to support remote access, but strict uptime SLAs made the migration incredibly daunting.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The existing on-premise servers were reaching end-of-life, but the application was mission-critical. A traditional maintenance window with hours of downtime was unacceptable.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We designed a secure AWS landing zone (HIPAA compliant). We set up asynchronous database replication to sync the on-prem data to AWS RDS in real-time, and deployed the application to auto-scaling server clusters.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>During the final cutover, we simply updated DNS records to point to the new AWS environment. The migration was completed with exactly zero seconds of downtime, and the client reduced IT hardware costs by 60%.</strong></div>
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
                        <h2 id="faq-title">Common questions about cloud migrations.</h2>
                        <p>Answers covering AWS vs GCP, "lift and shift", and security.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Do you prefer AWS, Google Cloud (GCP), or Azure?</summary>
                            <p>We are vendor-agnostic and primarily work with AWS and GCP. AWS is our default for massive enterprise ecosystems, while GCP often provides excellent developer experiences and data tools. We will recommend the best fit for your specific stack.</p>
                        </details>
                        <details>
                            <summary>What is wrong with a "lift and shift" migration?</summary>
                            <p>Taking a virtual machine from your local server room and dropping it directly into an AWS EC2 instance usually results in higher costs and misses the benefits of the cloud. We prefer to refactor slightly—using managed databases and load balancing—to ensure the new environment is actually scalable.</p>
                        </details>
                        <details>
                            <summary>How do you ensure data isn't lost during a database migration?</summary>
                            <p>We utilize continuous replication tools (like AWS DMS). The new cloud database remains in a constant sync state with your old database. When we finally switch the application over, the cloud database is already 100% up to date.</p>
                        </details>
                        <details>
                            <summary>Can you lower our existing AWS bill?</summary>
                            <p>Yes. Cloud Cost Optimization (FinOps) is a core service. We audit your environment to terminate zombie resources, implement auto-scaling to shut down servers at night, and purchase savings plans.</p>
                        </details>
                        <details>
                            <summary>Is the cloud actually secure for sensitive data?</summary>
                            <p>When configured correctly, the cloud is significantly more secure than an on-premise server room. We implement strict IAM policies, network isolation via VPCs, and encryption at rest/in transit by default.</p>
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
                    <h2>Build a foundation that <br />scales automatically. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to migrate to a secure, modern cloud environment? Let's discuss your infrastructure and migration strategy.</p>
                        <a className="btn" href="#contact">Get a Cloud Proposal <span className="arrow">↗</span></a>
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
