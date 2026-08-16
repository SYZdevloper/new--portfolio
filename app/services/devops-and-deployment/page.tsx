import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/devops-and-deployment/" },
  title: "DevOps & CI/CD Deployment Services | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
  description: "Automate infrastructure and establish robust CI/CD pipelines so your engineering teams can ship faster and safer.",
};

export default function DevOpsAndDeployment() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/devops-and-deployment/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/devops-and-deployment/",
          "name": "DevOps & CI/CD Deployment Services | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
          "description": "Automate infrastructure and establish robust CI/CD pipelines so your engineering teams can ship faster and safer.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/devops-and-deployment/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/devops-and-deployment/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/devops-and-deployment/#service",
          "name": "DevOps & Deployment",
          "serviceType": "DevOps Engineering",
          "url": "https://hyperlinktechsolutions.com/services/devops-and-deployment/",
          "description": "Automate infrastructure and establish robust CI/CD pipelines so your engineering teams can ship faster and safer.",
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
                    <strong>DevOps & Deployment</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Automating software delivery</div>
                        <p className="eyebrow">DevOps & Deployment</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Ship code faster, safer, and <em class="accent-text">fully automatically.</em>' }}></h1>
                        <p className="hero-lead">We implement modern DevOps practices, Infrastructure as Code, and bulletproof CI/CD pipelines so your developers can focus on writing features instead of worrying about broken deployments.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Automate deployments with robust CI/CD pipelines</li>
                            <li>Manage environments reliably using Infrastructure as Code (Terraform)</li>
                            <li>Containerize applications (Docker) for perfect consistency</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a DevOps Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Infrastructure benefits">
                        <div className="proof-item">
                            <small>01 · Deployment Speed</small>
                            <strong>Turn hour-long manual releases into 5-minute automated pushes.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Consistency</small>
                            <strong>Eliminate "it works on my machine" bugs via containerization.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Reliability</small>
                            <strong>Automated testing and rollbacks catch errors before users see them.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Developer Happiness</small>
                            <strong>Engineers write code, pipelines do the heavy lifting.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When DevOps is necessary</p>
                        <p>If deployments are stressful, your release process is broken.</p>
                        <a className="btn" href="#contact">Discuss Your Pipelines <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Manual deployments kill engineering momentum.</h2>
                        <p>Relying on a single senior engineer to manually FTP files or run SSH scripts to update production is a massive risk. We help you automate the entire delivery lifecycle.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Deployment Anxiety</h3>
                                <p>Releasing new features is a terrifying, manual process that often breaks production and requires late-night hotfixes.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>"Works on my machine"</h3>
                                <p>Code runs perfectly on a developer's laptop but fails in staging because the server environments don't perfectly match.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Slow Release Cycles</h3>
                                <p>Because deployments are difficult and require manual QA, you only release features once a month instead of multiple times a day.</p>
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
                                <h2>Robust pipelines and infrastructure automation.</h2>
                            </div>
                            <p>We build the tools and environments that allow high-performing engineering teams to ship with confidence.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Automation</span>
                                <h3>CI/CD Pipelines</h3>
                                <p>Building automated workflows (GitHub Actions, GitLab CI) that run tests, build assets, and deploy code the moment a pull request is merged.</p>
                                <div className="deliverable-tags"><small>CI/CD</small><small>GitHub Actions</small><small>Automation</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Provisioning</span>
                                <h3>Infrastructure as Code (IaC)</h3>
                                <p>Using Terraform or Pulumi to script your cloud environments, meaning a new staging server can be spun up in minutes with one command.</p>
                                <div className="deliverable-tags"><small>Terraform</small><small>IaC</small><small>Consistency</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Environments</span>
                                <h3>Containerization</h3>
                                <p>Wrapping applications in Docker containers and orchestrating them (Kubernetes, ECS) to guarantee they run identically everywhere.</p>
                                <div className="deliverable-tags"><small>Docker</small><small>Kubernetes</small><small>Containers</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Quality</span>
                                <h3>Automated Testing Hooks</h3>
                                <p>Integrating unit, integration, and E2E tests into the pipeline, strictly blocking deployments if code quality checks fail.</p>
                                <div className="deliverable-tags"><small>Testing</small><small>QA</small><small>Gates</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured DevOps Build</p>
                            <h2>Reducing deployment time from 4 hours to 5 minutes.</h2>
                        </div>
                        <p>See how we helped a SaaS company replace manual, error-prone server updates with a fully automated, containerized CI/CD pipeline.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>DevOps Engineering</span>
                                <span>Docker + GitHub Actions</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Automated Release Pipelines</p>
                                <h2>Ending deployment anxiety for good.</h2>
                                <p>A growing SaaS team was terrified of release days. Their manual deployment process took 4 hours, required two senior engineers, and almost always resulted in unexpected downtime.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The staging and production environments were manually configured and had drifted out of sync. Deployments involved SSHing into servers, pulling code, and manually restarting services.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We containerized the application with Docker and wrote Terraform scripts to standardize the AWS environments. We then built a GitHub Actions pipeline that automatically runs tests, builds the Docker image, and executes a rolling deployment.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>Deployments now take 5 minutes and require zero manual intervention. The team went from releasing once a month to safely deploying multiple times a day, freeing up senior engineers to focus on architecture.</strong></div>
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
                        <h2 id="faq-title">Common questions about DevOps implementations.</h2>
                        <p>Answers covering CI/CD tools, Docker, and deployment strategies.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>What CI/CD tools do you recommend?</summary>
                            <p>We heavily favour GitHub Actions and GitLab CI due to their tight integration with source control. However, we also frequently build and maintain pipelines in CircleCI, Jenkins, and AWS CodePipeline depending on your stack.</p>
                        </details>
                        <details>
                            <summary>Why do we need Infrastructure as Code (Terraform)?</summary>
                            <p>If a server crashes or you need a new staging environment, configuring it manually via the AWS console takes hours and invites human error. With Terraform, your entire infrastructure is defined in code, meaning you can deploy a perfect replica in minutes.</p>
                        </details>
                        <details>
                            <summary>Do we have to use Kubernetes?</summary>
                            <p>No. While Kubernetes is incredibly powerful for massive scale, it introduces significant complexity. For many mid-sized applications, Docker containers running on managed services like AWS ECS or Google Cloud Run are far more efficient and easier to maintain.</p>
                        </details>
                        <details>
                            <summary>How do you prevent broken code from reaching production?</summary>
                            <p>A CI/CD pipeline is only as good as its tests. We configure the pipeline to automatically run your unit and integration tests. If any test fails, the pipeline immediately halts and the deployment is blocked.</p>
                        </details>
                        <details>
                            <summary>What is a "rolling deployment"?</summary>
                            <p>Instead of taking the entire application offline to update it, a rolling deployment spins up the new version of the app alongside the old one, slowly routing traffic to the new version until it's safe to shut the old one down. This results in zero-downtime updates.</p>
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
                    <h2>Ship better software, <br />much faster. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to automate your deployments and eliminate release anxiety? Let's discuss your current engineering workflows.</p>
                        <a className="btn" href="#contact">Get a DevOps Proposal <span className="arrow">↗</span></a>
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
