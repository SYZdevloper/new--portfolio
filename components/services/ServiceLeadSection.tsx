
import React from 'react';

export default function ServiceLeadSection() {
    return (
        <section className="section lead-section" id="contact">
                <div className="container lead-grid">
                    <div className="lead-copy">
                        <p className="eyebrow" style={{"color":"#d8c2ff"}}>Start your business website</p>
                        <h2>Ready to build a website that supports your business?</h2>
                        <p>Tell us about your company, required pages, existing website and functionality.
                            We will reply with a recommended development approach, estimated timeline and scope.</p>
                        <ul>
                            <li>Recommended platform and CMS approach</li>
                            <li>Defined deliverables and responsibilities</li>
                            <li>Estimated timeline and suitable budget range</li>
                        </ul>
                    </div>

                    <div className="lead-panel">
                        <h3>Request your website proposal</h3>
                        <p>Complete the form and we will respond within one business day.</p>
                        <form className="lead-form js-lead-form" data-form-name="Business Website Development Lead"
                            action="/api/leads" method="post" noValidate>
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
                                    <label htmlFor="main-phone">Phone</label>
                                    <input id="main-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98XXXXXX" />
                                </div>
                            </div>
                            <div className="field-row">
                                <div className="field">
                                    <label htmlFor="main-pages">Approximate website size</label>
                                    <select id="main-pages" name="pages">
                                        <option value="">Select page range</option>
                                        <option>1–5 pages</option>
                                        <option>6–10 pages</option>
                                        <option>11–20 pages</option>
                                        <option>21–50 pages</option>
                                        <option>50+ pages</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label htmlFor="main-website">Current website</label>
                                    <input id="main-website" name="current_website" type="url" placeholder="https://example.com" />
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="main-message">Required pages, functionality or integrations *</label>
                                <textarea id="main-message" name="message" required
                                    placeholder="Tell us what the website needs to include, your preferred timeline and current challenges"></textarea>
                            </div>
                            <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" />
                            <input type="hidden" name="service" value="Business Website Development" />
                            <input type="hidden" name="landing_page" value="/services/business-website-development/" />
                            <input type="hidden" name="utm_source" />
                            <input type="hidden" name="utm_medium" />
                            <input type="hidden" name="utm_campaign" />
                            <input type="hidden" name="utm_term" />
                            <input type="hidden" name="utm_content" />
                            <input type="hidden" name="gclid" />
                            <label className="consent">
                                <input type="checkbox" required />
                                <span>I agree to the <a href="/privacy-policy/">Privacy Policy</a> and consent to receive
                                    a call, email or WhatsApp response regarding this enquiry.</span>
                            </label>
                            <button className="btn primary full" type="submit">Request My Website Proposal <span className="arrow">↗</span></button>
                            <div className="form-status" aria-live="polite"></div>
                        </form>
                        <div className="trust-line">No obligation · Your information stays private</div>
                    </div>
                </div>
            </section>
    );
}
