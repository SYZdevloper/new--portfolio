const fs = require('fs');
const path = require('path');

const directory = path.join('d:', 'new website', 'hyperlink-nextjs-app-router', 'app', 'services');

const template = (slug, data) => `import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/${slug}/" },
  title: "${data.metaTitle} | Hyperlink Tech Solutions",
  description: "${data.lead}",
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
                    <strong>${data.eyebrow}</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">${data.status}</div>
                        <p className="eyebrow">${data.eyebrow}</p>
                        <h1 id="service-title">${data.h1}</h1>
                        <p className="hero-lead">${data.lead}</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>${data.points[0]}</li>
                            <li>${data.points[1]}</li>
                            <li>${data.points[2]}</li>
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
                        ${data.proof.map(p => `
                        <div className="proof-item">
                            <small>${p[0]}</small>
                            <strong>${p[1]}</strong>
                        </div>`).join("")}
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">${data.problemsIntro.eyebrow}</p>
                        <p>${data.problemsIntro.asideLead}</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>${data.problemsIntro.title}</h2>
                        <p>${data.problemsIntro.mainLead}</p>

                        <div className="problem-grid">
                            ${data.problems.map((p, i) => `
                            <article className="problem-card">
                                <span className="problem-card-number">0${i+1}</span>
                                <h3>${p[0]}</h3>
                                <p>${p[1]}</p>
                            </article>`).join("")}
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
                                <h2>${data.deliverablesIntro.title}</h2>
                            </div>
                            <p>${data.deliverablesIntro.lead}</p>
                        </div>

                        <div className="deliverable-grid">
                            ${data.deliverables.map((d, i) => `
                            <article className="deliverable-card">
                                <span>0${i+1} · Core</span>
                                <h3>${d[0]}</h3>
                                <p>${d[1]}</p>
                                <div className="deliverable-tags"><small>${d[2]}</small><small>${d[3]}</small><small>${d[4]}</small></div>
                            </article>`).join("")}
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
`;

const pages = {
  "sportstech-product-websites": {
    metaTitle: "SportsTech Product Websites",
    eyebrow: "Product Discovery",
    h1: "Commercialize your sports technology.",
    lead: "We design high-performance websites for SportsTech hardware and software companies, clearly communicating complex biomechanical or analytical benefits to coaches, athletes, and investors.",
    status: "Product Websites",
    points: [
      "Visually rich storytelling utilizing 3D renders, WebGL animations, and product explainer videos",
      "Structured B2B lead generation flows designed to capture demo requests from High-Performance Managers",
      "Headless CMS setups allowing marketing teams to launch new feature announcements instantly"
    ],
    proof: [
      ["01 · Brand Authority", "Digital experiences that match the cutting-edge nature of your hardware."],
      ["02 · Complex Storytelling", "Translate deep biomechanical science into easily digestible visual marketing."],
      ["03 · Investor Ready", "Present a polished, enterprise-grade digital footprint to secure your next funding round."],
      ["04 · High-Quality Leads", "Structure the site to qualify elite teams versus amateur consumers before they book a demo."]
    ],
    problemsIntro: {
      eyebrow: "When digital fails the product",
      asideLead: "If a Premier League coach can't understand what your device does in 10 seconds, they will leave.",
      title: "Poor digital presentation devalues great technology.",
      mainLead: "SportsTech companies often spend millions on hardware R&D but launch with a template-based website that fails to explain the product. If your target audience (elite coaches, sports scientists) lands on a site filled with dense academic text and poor imagery, they will assume your software is equally clunky to use."
    },
    problems: [
      ["Academic Clutter", "The website reads like a research paper, failing to communicate the actual on-field benefits to a busy coach."],
      ["Low-Quality Visuals", "You are selling a $10,000 piece of testing hardware, but the website images are blurry and uninspiring."],
      ["Poor Lead Capture", "Elite teams are bouncing because your 'Book a Demo' flow is a broken, 15-field generic contact form."]
    ],
    deliverablesIntro: {
      title: "Digital flagships for SportsTech.",
      lead: "We build decoupled frontend experiences that prioritize immersive product storytelling and speed."
    },
    deliverables: [
      ["Headless Architecture", "Next.js frontends connected to Sanity or Contentful, ensuring the site is lightning fast and highly secure.", "React", "Headless", "Speed"],
      ["Immersive 3D & WebGL", "Custom animations that allow users to virtually inspect your hardware or visualize the data it produces.", "WebGL", "UX", "Storytelling"],
      ["B2B Commerce Flows", "Implementing tailored checkout or quote-request flows via Stripe for teams buying hardware in bulk.", "E-commerce", "B2B", "Sales"],
      ["Global Edge Hosting", "Deployment on Vercel to ensure your site loads instantly for coaches in London, New York, or Sydney.", "DevOps", "Performance", "Scale"]
    ]
  },
  "athlete-and-coach-portals": {
    metaTitle: "Athlete & Coach Portals",
    eyebrow: "Digital Service",
    h1: "The central hub for high performance.",
    lead: "We build secure, role-based portals where athletes can log subjective wellness data, view training prescriptions, and coaches can manage entire squad rosters efficiently.",
    status: "Athlete Portals",
    points: [
      "Role-based dashboards ensuring medical staff, strength coaches, and athletes only see the data relevant to them",
      "Mobile-first Athlete Web Apps for logging morning wellness (Sleep, Soreness, RPE) in under 30 seconds",
      "Secure messaging and push notifications for last-minute schedule changes or video review sharing"
    ],
    proof: [
      ["01 · Higher Compliance", "Athletes actually fill out their wellness surveys when the app is fast and easy to use."],
      ["02 · Time Savings", "Coaches stop chasing players on WhatsApp and manage everything through a centralized hub."],
      ["03 · Data Security", "Ensure highly sensitive medical and performance data is locked behind enterprise-grade authentication."],
      ["04 · Contextual Visibility", "A coach can see that a player slept poorly before designing that day's intense training block."]
    ],
    problemsIntro: {
      eyebrow: "When operations are fragmented",
      asideLead: "You cannot manage an elite sporting team using five different WhatsApp groups.",
      title: "Fragmented communication creates performance gaps.",
      mainLead: "Elite teams generate massive amounts of data and scheduling changes daily. If the strength coach sends the gym program via email, the physio asks for injury updates on WhatsApp, and the video analyst uses a separate app, the athlete becomes overwhelmed and compliance drops. Poor communication directly impacts on-field performance."
    },
    problems: [
      ["Low Wellness Compliance", "Athletes stop filling out their morning surveys because the legacy app takes two minutes to load and keeps crashing."],
      ["Information Black Holes", "A player misses a critical video review session because the schedule change was buried in a group chat."],
      ["Privacy Risks", "Highly sensitive injury data is being discussed on unencrypted, consumer messaging apps."]
    ],
    deliverablesIntro: {
      title: "Centralized high-performance operations.",
      lead: "We engineer secure environments that professionalize the relationship between athletes and coaching staff."
    },
    deliverables: [
      ["Athlete Web Apps (PWAs)", "Building fast, mobile-first portals that athletes can save to their home screen for daily data entry.", "PWA", "Mobile", "UX"],
      ["Role-Based Dashboards", "Custom React interfaces tailored for specific staff roles (e.g., Medical sees injuries, S&C sees load).", "React", "Logic", "Operations"],
      ["Digital Program Delivery", "Interfaces for strength coaches to push individualized lifting programs directly to the athlete's device.", "Logic", "Data", "UX"],
      ["Identity Management (CIAM)", "Secure login flows using Auth0 to ensure strict data privacy and HIPAA/GDPR compliance where required.", "Security", "Auth", "Compliance"]
    ]
  },
  "testing-and-assessment-workflows": {
    metaTitle: "Testing & Assessment Workflows",
    eyebrow: "Operations",
    h1: "Digitize sports science protocols.",
    lead: "We engineer custom digital workflows for capturing physical testing data (force plates, sprints, jumps) at scale, replacing messy clipboards and Excel spreadsheets during combines and profiling days.",
    status: "Assessment Tools",
    points: [
      "Custom iPad web apps designed specifically for rapid data entry during intense team testing days",
      "Automated calculation engines that instantly process raw jump heights into RSI (Reactive Strength Index) or asymmetry scores",
      "Direct API integrations to push the captured data immediately into the central Athlete Management System (AMS)"
    ],
    proof: [
      ["01 · Faster Profiling", "Test an entire squad of 40 athletes in half the time by removing manual data entry bottlenecks."],
      ["02 · Zero Data Loss", "Stop losing valuable baseline data because a piece of paper blew away or an Excel file crashed."],
      ["03 · Instant Feedback", "Provide the coach with a ranked leaderboard of the squad's sprint times the second testing finishes."],
      ["04 · Standardized Protocols", "Force sports scientists to collect data exactly the same way every time via structured digital forms."]
    ],
    problemsIntro: {
      eyebrow: "When testing is analog",
      asideLead: "Sports science shouldn't rely on a clipboard and a shouting intern.",
      title: "Manual data collection ruins testing validity.",
      mainLead: "Pre-season profiling and combine testing are chaotic. If your sports scientists are shouting jump heights to an intern furiously typing into an Excel spreadsheet, errors will occur. When data is captured manually, the sports science team spends the next three days cleaning data instead of actually analyzing it to prevent injuries."
    },
    problems: [
      ["Data Entry Errors", "A 10m sprint time is incorrectly typed as 1.20s instead of 2.10s, completely skewing the athlete's profile."],
      ["Analysis Delays", "The Head Coach wants the testing results immediately, but the sports science team needs 48 hours to merge the spreadsheets."],
      ["Historical Disconnect", "Baseline data from last year is sitting on a former employee's laptop and can't be compared to today's results."]
    ],
    deliverablesIntro: {
      title: "The digital sports science suite.",
      lead: "We build mobile-first data collection tools that bring order and speed to high-performance testing environments."
    },
    deliverables: [
      ["Rapid Data Entry Apps", "React-based iPad interfaces designed with massive buttons and offline capabilities for on-field use.", "Mobile", "React", "UX"],
      ["Real-time Calculation Engines", "Logic layers that instantly calculate complex biomechanical derived metrics (like force-velocity profiles) on the device.", "Logic", "Math", "Speed"],
      ["Live Leaderboards", "Dashboards that project live testing results onto a screen in the gym to drive competitive athlete intent.", "BI", "Dashboards", "Engagement"],
      ["AMS API Hooks", "Developing middleware that automatically pushes the sanitized testing session data into platforms like Smartabase or Edge10.", "APIs", "Integration", "Data"]
    ]
  },
  "device-and-data-integrations": {
    metaTitle: "Device & Data Integrations",
    eyebrow: "Data Engineering",
    h1: "Connect the performance ecosystem.",
    lead: "We develop API middleware and Bluetooth integrations to ingest live data from wearables (GPS, HR), velocity-based training devices, and force plates into a single centralized database.",
    status: "Data Integrations",
    points: [
      "Robust ETL pipelines connecting to third-party APIs (STATSports, Catapult, VALD, Oura)",
      "Automated data normalization, ensuring 'High Speed Running' from different GPS brands can be compared accurately",
      "Cloud data warehousing (AWS/GCP) designed specifically for the high volume and velocity of biomechanical time-series data"
    ],
    proof: [
      ["01 · A Single Source of Truth", "Stop opening five different software platforms just to see how hard an athlete trained today."],
      ["02 · Automated Workflows", "Eliminate the daily chore of exporting CSVs from the GPS software and importing them into the AMS."],
      ["03 · Historical Asset Value", "Build a proprietary data warehouse that becomes a highly valuable asset for the franchise over time."],
      ["04 · Scalable Architecture", "Ensure your database can handle millions of rows of 100Hz accelerometer data without crashing."]
    ],
    problemsIntro: {
      eyebrow: "When hardware doesn't talk",
      asideLead: "Having 10 pieces of elite hardware is useless if the data lives in 10 different silos.",
      title: "Data fragmentation hides the true physical picture.",
      mainLead: "Elite teams invest hundreds of thousands of dollars in GPS units, force plates, and sleep trackers. But if the GPS data lives on one server, the strength data in another, and the wellness data in a spreadsheet, the High-Performance Manager cannot see the correlation between poor sleep, high acute load, and a subsequent hamstring injury."
    },
    problems: [
      ["The CSV Grind", "Sports scientists waste two hours every morning manually exporting and merging CSV files from different hardware providers."],
      ["Siloed Analysis", "You cannot easily graph an athlete's maximum sprint velocity against their weekly hamstring strength because the data is disconnected."],
      ["Vendor Lock-in", "The team is terrified to change GPS providers because they don't own their historical data; it's trapped in the vendor's cloud."]
    ],
    deliverablesIntro: {
      title: "Unified high-performance data architecture.",
      lead: "We engineer the invisible pipelines that connect your entire hardware ecosystem into one proprietary asset."
    },
    deliverables: [
      ["Hardware API Middleware", "Developing secure Node.js layers that routinely poll third-party APIs to extract session data the moment a device is synced.", "APIs", "Integration", "Logic"],
      ["Data Normalization Engines", "Building logic that cleanses incoming data, standardizes naming conventions (e.g., matching 'Hamstring L' to 'Left Hamstring'), and flags anomalies.", "Data", "ETL", "Quality"],
      ["Time-Series Warehousing", "Architecting cloud databases (like Snowflake or TimescaleDB) specifically designed to handle massive volumes of high-frequency sports data.", "Cloud", "Data", "Scale"],
      ["Bluetooth/Local Integrations", "Where APIs don't exist, we can build custom local integrations to pull data directly from hardware files via local network scripts.", "Hardware", "Engineering", "Innovation"]
    ]
  },
  "performance-dashboards": {
    metaTitle: "Performance Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visualize athletic potential.",
    lead: "We aggregate data from wearables, subjective wellness surveys, and match statistics into advanced BI dashboards, helping high-performance managers identify injury risks and peak physical readiness.",
    status: "Operations Analytics",
    points: [
      "Unified BI dashboards tracking core metrics (Acute:Chronic Workload Ratio, Readiness Scores, Match Demands)",
      "Automated red-flagging systems that alert medical staff when an athlete spikes in load while reporting poor sleep",
      "Longitudinal profiling dashboards to track an athlete's physical development across a multi-year contract"
    ],
    proof: [
      ["01 · Injury Prevention", "Identify the 'danger zone' of fatigue before it results in a costly soft-tissue injury."],
      ["02 · Coach Communication", "Translate complex sports science data into simple, visual 'traffic light' reports for the Head Coach."],
      ["03 · Player Accountability", "Show an athlete exactly how their off-field recovery habits are impacting their on-field output."],
      ["04 · Automated Reporting", "Eliminate the days spent manually building PowerPoint slides for the weekly performance meeting."]
    ],
    problemsIntro: {
      eyebrow: "When sports data is unreadable",
      asideLead: "The Head Coach doesn't care about a spreadsheet with 10,000 rows. They want to know who is fit to play.",
      title: "Complex data without visualization is useless.",
      mainLead: "High-Performance units collect millions of data points a week. But if that data remains trapped in complex statistical models or dense spreadsheets, it fails to influence the coaching staff. The Head Coach needs actionable, visual insights delivered instantly to dictate tactical and training decisions."
    },
    problems: [
      ["Lost in the Noise", "The sports science team generates incredible insights, but the Head Coach ignores them because they are presented in a confusing format."],
      ["Missed Warning Signs", "An athlete suffers a preventable injury because the spike in their training load wasn't visually flagged to the medical team in time."],
      ["Reporting Fatigue", "Analysts spend hours every morning manually updating Excel charts just to prepare for the 8 AM coaches meeting."]
    ],
    deliverablesIntro: {
      title: "Command centers for elite performance.",
      lead: "We engineer data visualization platforms that translate complex sports science into actionable coaching decisions."
    },
    deliverables: [
      ["Executive Scorecards", "High-level visual dashboards using 'traffic light' systems to instantly communicate squad readiness to the Head Coach.", "BI", "Dashboards", "Metrics"],
      ["Acute/Chronic Load Modeling", "Visual tools that automatically plot an athlete's current training load against their historical capacity to identify injury risk zones.", "Analytics", "Data", "Science"],
      ["Interactive Squad Profiling", "React-based scatter plots and radar charts allowing staff to compare athletes physically across different positions or age groups.", "Data Viz", "React", "UX"],
      ["Automated PDF Reporting", "Dynamic engines to instantly generate branded, simple PDF summaries for players or coaches who prefer printed reports.", "Reporting", "PDFs", "Automation"]
    ]
  }
};

Object.keys(pages).forEach(slug => {
  const dirPath = path.join(directory, slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  const filePath = path.join(dirPath, 'page.tsx');
  const fileContent = template(slug, pages[slug]);
  
  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log(`Created ${slug}`);
});
