
import React from 'react';

export default function ServiceFooter() {
    return (
        <footer>
            <div className="container">
                <div className="footer-grid footer-grid-seo">
                    <div className="footer-brand">
                        <a className="brand" href="/">
                            <span className="brand-logo" aria-hidden="true">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="hyperlinkFooterAccent" x1="16" y1="24" x2="32" y2="24"
                                            gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#8B5CF6" />
                                            <stop offset="1" stopColor="#C084FC" />
                                        </linearGradient>
                                    </defs>
                                    <rect x="11" y="10" width="5" height="28" rx="2.5" fill="white" />
                                    <rect x="32" y="10" width="5" height="28" rx="2.5" fill="white" />
                                    <rect x="15" y="21" width="18" height="6" rx="3" fill="url(#hyperlinkFooterAccent)" />
                                </svg>
                            </span>
                            <span className="brand-name"><strong>Hyperlink</strong><small>Tech Solutions</small></span>
                        </a>
                        <p>Custom web design, UI/UX and development for growing businesses that need a clearer,
                            stronger digital presence.</p>
                        <p><strong>Email:</strong>
                            <a href="mailto:hello@hyperlinktechsolutions.com">hello@hyperlinktechsolutions.com</a>
                        </p>
                    </div>
                    <div className="footer-col">
                        <h4>Services</h4>
                        <a href="/services/custom-website-design/">Website Design</a>
                        <a href="/services/business-website-development/">Business Websites</a>
                        <a href="/services/landing-page-design/">Landing Pages</a>
                        <a href="/services/saas-ui-ux-design/">SaaS UI/UX</a>
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
                    <span>© <span id="year"></span> Hyperlink Tech Solutions. All rights reserved.</span>
                    <span>
                        <a href="/privacy-policy/">Privacy Policy</a> ·
                        <a href="/terms-and-conditions/">Terms and Conditions</a> ·
                        <a href="/cookie-policy/">Cookie Policy</a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
