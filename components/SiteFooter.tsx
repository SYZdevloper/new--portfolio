export default function SiteFooter({ budgetOptions = ["Under $500", "$500 - $1,000", "$1,000 - $2,500", "$2,500 - $5,000", "$5,000+"] }: { budgetOptions?: string[] }) {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-grid footer-grid-seo">
            <div className="footer-brand">
              <a className="brand" href="/">
                <span className="brand-logo" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="hyperlinkFooterAccent" x1="16" y1="24" x2="32" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8B5CF6" />
                        <stop offset="1" stopColor="#C084FC" />
                      </linearGradient>
                    </defs>
                    <rect x="11" y="10" width="5" height="28" rx="2.5" fill="white" />
                    <rect x="32" y="10" width="5" height="28" rx="2.5" fill="white" />
                    <rect x="15" y="21" width="18" height="6" rx="3" fill="url(#hyperlinkFooterAccent)" />
                  </svg>
                </span>
                <span className="brand-name">
                  <strong>Hyperlink</strong>
                  <small>Tech Solutions</small>
                </span>
              </a>
              <p>Custom web design, UI/UX and development for growing businesses that need a clearer, stronger digital presence.</p>
              <p>
                <strong>Email:</strong>
                <a href="mailto:hello@hyperlinktechsolutions.com">hello@hyperlinktechsolutions.com</a>
              </p>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <a href="/services/website-design/">Website Design</a>
              <a href="/services/landing-page-design/">Landing Pages</a>
              <a href="/services/saas-ui-ux-design/">SaaS UI/UX</a>
              <a href="/services/custom-web-app-development/">Custom Web Apps</a>
              <a href="/services/">All Services</a>
            </div>
            <div className="footer-col">
              <h4>Industries</h4>
              <a href="/industries/manufacturing/">Manufacturing</a>
              <a href="/industries/real-estate/">Real Estate</a>
              <a href="/industries/healthcare/">Healthcare</a>
              <a href="/industries/saas-startups/">SaaS and Startups</a>
              <a href="/industries/">All Industries</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="/about/">About</a>
              <a href="/work/">Work</a>
              <a href="/process/">Process</a>
              <a href="/pricing/">Pricing</a>
              <a href="/contact/">Contact</a>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <a href="/insights/">Insights</a>
              <a href="/work/case-studies/">Case Studies</a>
              <a href="/faq/">FAQs</a>
              <a href="/contact/">Start a Project</a>
              <a href="/sitemap.xml">Sitemap</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              ©
              <span id="year">{new Date().getFullYear()}</span>
              Hyperlink Tech Solutions. All rights reserved.
            </span>
            <span>
              <a href="/privacy-policy/">Privacy Policy</a>
              ·
              <a href="/terms-and-conditions/">Terms and Conditions</a>
              ·
              <a href="/cookie-policy/">Cookie Policy</a>
            </span>
          </div>
        </div>
      </footer>

      <div className="proposal-modal" id="proposal-modal" aria-hidden="true">
        <div className="proposal-dialog" role="dialog" aria-modal="true" aria-labelledby="proposal-modal-title">
          <div className="proposal-modal-head">
            <div>
              <p className="eyebrow" id="proposal-modal-eyebrow">Free product consultation</p>
              <h2 id="proposal-modal-title">Get your custom proposal</h2>
              <p id="proposal-modal-description">Tell us what you need. We will reply with the recommended design approach, timeline and estimated budget.</p>
            </div>
            <button className="modal-close" type="button" aria-label="Close proposal form">×</button>
          </div>
          <div className="proposal-modal-body">
            <div className="selected-package" id="selected-package" aria-live="polite">
              <div>
                <small>Selected package</small>
                <strong id="selected-package-name"></strong>
              </div>
              <span className="selected-package-price" id="selected-package-price"></span>
            </div>
            <div className="modal-trust" aria-label="Proposal benefits">
              <span>100+ clients served</span>
              <span>Reply within one business day</span>
              <span>No obligation</span>
            </div>
            <form className="lead-form js-lead-form" id="proposal-form" data-form-name="Proposal Popup Form" action="/api/leads" method="post" noValidate>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="popup-name">Full name *</label>
                  <input id="popup-name" name="name" required autoComplete="name" placeholder="Your full name" />
                </div>
                <div className="field">
                  <label htmlFor="popup-phone">Phone *</label>
                  <input id="popup-phone" name="phone" type="tel" required autoComplete="tel" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="popup-email">Work email *</label>
                  <input id="popup-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
                </div>
                <div className="field">
                  <label htmlFor="popup-company">Company</label>
                  <input id="popup-company" name="company" autoComplete="organization" placeholder="Company name" />
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="popup-service">Primary requirement *</label>
                  <select id="popup-service" name="service" required>
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
                  <label htmlFor="popup-budget">Estimated budget *</label>
                  <select id="popup-budget" name="budget" required>
                    <option value="">Select budget</option>
                    {budgetOptions.map(opt => <option key={opt}>{opt}</option>)}
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="popup-message">Project details</label>
                <textarea id="popup-message" name="message" placeholder="Your product type, key workflows, preferred timeline and current challenge"></textarea>
              </div>
              <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="package" id="popup-package" />
              <input type="hidden" name="package_price" id="popup-package-price" />
              <input type="hidden" name="landing_page" value="/" />
              <input type="hidden" name="utm_source" />
              <input type="hidden" name="utm_medium" />
              <input type="hidden" name="utm_campaign" />
              <input type="hidden" name="utm_term" />
              <input type="hidden" name="utm_content" />
              <input type="hidden" name="gclid" />

              <button className="btn primary full" id="proposal-submit-button" type="submit">
                Request My Proposal
                <span className="arrow">↗</span>
              </button>
              <div className="form-status" aria-live="polite"></div>
            </form>
          </div>
        </div>
      </div>

      <div className="mobile-bottom" aria-label="Quick contact actions">
        <a href="#contact">Contact Us</a>
        <a className="js-open-proposal" href="#contact">Get Proposal</a>
      </div>
    </>
  );
}
