import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/testing-and-assessment-workflows/" },
  title: "Testing & Assessment Workflows | Hyperlink Tech Solutions",
  description: "We engineer custom digital workflows for capturing physical testing data (force plates, sprints, jumps) at scale, replacing messy clipboards and Excel spreadsheets during combines and profiling days.",
};

export default function Page() {
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
                    <strong>Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Assessment Tools</div>
                        <p className="eyebrow">Operations</p>
                        <h1 id="service-title">Digitize sports science protocols.</h1>
                        <p className="hero-lead">We engineer custom digital workflows for capturing physical testing data (force plates, sprints, jumps) at scale, replacing messy clipboards and Excel spreadsheets during combines and profiling days.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom iPad web apps designed specifically for rapid data entry during intense team testing days</li>
                            <li>Automated calculation engines that instantly process raw jump heights into RSI (Reactive Strength Index) or asymmetry scores</li>
                            <li>Direct API integrations to push the captured data immediately into the central Athlete Management System (AMS)</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Project <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        
                        <div className="proof-item">
                            <small>01 · Faster Profiling</small>
                            <strong>Test an entire squad of 40 athletes in half the time by removing manual data entry bottlenecks.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Zero Data Loss</small>
                            <strong>Stop losing valuable baseline data because a piece of paper blew away or an Excel file crashed.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Instant Feedback</small>
                            <strong>Provide the coach with a ranked leaderboard of the squad's sprint times the second testing finishes.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Standardized Protocols</small>
                            <strong>Force sports scientists to collect data exactly the same way every time via structured digital forms.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When testing is analog</p>
                        <p>Sports science shouldn't rely on a clipboard and a shouting intern.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Manual data collection ruins testing validity.</h2>
                        <p>Pre-season profiling and combine testing are chaotic. If your sports scientists are shouting jump heights to an intern furiously typing into an Excel spreadsheet, errors will occur. When data is captured manually, the sports science team spends the next three days cleaning data instead of actually analyzing it to prevent injuries.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Data Entry Errors</h3>
                                <p>A 10m sprint time is incorrectly typed as 1.20s instead of 2.10s, completely skewing the athlete's profile.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Analysis Delays</h3>
                                <p>The Head Coach wants the testing results immediately, but the sports science team needs 48 hours to merge the spreadsheets.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Historical Disconnect</h3>
                                <p>Baseline data from last year is sitting on a former employee's laptop and can't be compared to today's results.</p>
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
                                <h2>The digital sports science suite.</h2>
                            </div>
                            <p>We build mobile-first data collection tools that bring order and speed to high-performance testing environments.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Rapid Data Entry Apps</h3>
                                <p>React-based iPad interfaces designed with massive buttons and offline capabilities for on-field use.</p>
                                <div className="deliverable-tags"><small>Mobile</small><small>React</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Real-time Calculation Engines</h3>
                                <p>Logic layers that instantly calculate complex biomechanical derived metrics (like force-velocity profiles) on the device.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Math</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Live Leaderboards</h3>
                                <p>Dashboards that project live testing results onto a screen in the gym to drive competitive athlete intent.</p>
                                <div className="deliverable-tags"><small>BI</small><small>Dashboards</small><small>Engagement</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>AMS API Hooks</h3>
                                <p>Developing middleware that automatically pushes the sanitized testing session data into platforms like Smartabase or Edge10.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Integration</small><small>Data</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured SportsTech Platform</p>
                            <h2>Unifying high-performance data.</h2>
                        </div>
                        <p>See how we helped a professional sports franchise replace five different Excel spreadsheets and three disconnected hardware apps with a single, unified Athlete Management System (AMS), saving the sports science team 15 hours of data entry per week.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>High Performance</span>
                                <span>Data Engineering</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/sportstech-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From silos to scorecards.</h2>
                                <p>We developed a secure cloud infrastructure that automatically ingests GPS data (Catapult), strength metrics (VALD), and subjective wellness surveys into a single dashboard, allowing the High-Performance Manager to identify injury risks instantly.</p>
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
                        <h2 id="faq-title">Common questions about SportsTech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate data from different hardware providers (GPS, Force Plates)?</summary>
                            <p>We build robust ETL (Extract, Transform, Load) pipelines that connect to the APIs of major providers (like STATSports, Catapult, or VALD), normalizing the disparate data into a single, unified data warehouse for your team.</p>
                        </details>
                        <details>
                            <summary>Can you build mobile apps for athletes to log wellness data?</summary>
                            <p>Yes. We build lightweight, secure React Native apps where athletes can quickly log RPE (Rate of Perceived Exertion), sleep quality, and muscle soreness before they even arrive at the training facility.</p>
                        </details>
                        <details>
                            <summary>How do you ensure medical and performance data is secure?</summary>
                            <p>Athlete health data is highly sensitive. We implement enterprise-grade security protocols (like Auth0 for identity management), encrypt data at rest, and ensure role-based access control so a coach only sees what the medical team allows.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other high-performance capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/sportstech-product-websites/"><div><small>Discovery</small><h3>Product Sites</h3><p>Commercialize your tech.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/athlete-and-coach-portals/"><div><small>Service</small><h3>Athlete Portals</h3><p>The high-performance hub.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/testing-and-assessment-workflows/"><div><small>Operations</small><h3>Testing Workflows</h3><p>Digitize sports science.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/device-and-data-integrations/"><div><small>Engineering</small><h3>Device Integrations</h3><p>Connect the ecosystem.</p></div><b>Explore integrations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your high-performance <br />and SportsTech operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From complex hardware API integrations to mobile athlete wellness apps and predictive injury dashboards, we build software that drives elite performance.</p>
                        <a className="btn" href="#contact">Get a Proposal <span className="arrow">↗</span></a>
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
