
import React from 'react';

export default function ServiceHeader() {
    return (
        <header className="site-header" id="site-header">
            <nav className="nav" aria-label="Main navigation">
                <a className="brand" href="/" aria-label="Hyperlink Tech Solutions home">
                    <span className="brand-logo" aria-hidden="true">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="hyperlinkAccent" x1="16" y1="24" x2="32" y2="24"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#8B5CF6" />
                                    <stop offset="1" stopColor="#C084FC" />
                                </linearGradient>
                            </defs>
                            <rect x="11" y="10" width="5" height="28" rx="2.5" fill="white" />
                            <rect x="32" y="10" width="5" height="28" rx="2.5" fill="white" />
                            <rect x="15" y="21" width="18" height="6" rx="3" fill="url(#hyperlinkAccent)" />
                        </svg>
                    </span>
                    <span className="brand-name"><strong>Hyperlink</strong><small>Tech Solutions</small></span>
                </a>
                <div className="nav-links">
                    <div className="nav-dropdown-wrapper">
                        <a href="/services/">Services</a>
                        <div className="nav-dropdown">
                            <div className="dropdown-col">
                                <span className="dropdown-title">Websites</span>
                                <a href="/services/custom-website-design/">Custom Website Design</a>
                                <a href="/services/business-website-development/">Business Website Development</a>
                                <a href="/services/landing-page-design/">Landing Page Design</a>
                                <a href="/services/website-redesign/">Website Redesign</a>
                                <a href="/services/website-migration/">Website Migration</a>
                                <a href="/services/website-maintenance/">Website Maintenance</a>
                                <a href="/services/website-performance-optimization/">Website Performance Optimisation</a>
                            </div>
                            <div className="dropdown-col">
                                <span className="dropdown-title">Product Design</span>
                                <a href="/services/saas-ui-ux-design/">SaaS UI/UX Design</a>
                                <a href="/services/dashboard-design/">Dashboard Design</a>
                                <a href="/services/design-system-development/">Design System Development</a>
                            </div>
                            <div className="dropdown-col">
                                <span className="dropdown-title">Applications & Platforms</span>
                                <a href="/services/custom-web-app-development/">Custom Web App Development</a>
                                <a href="/services/client-portal-development/">Client Portal Development</a>
                                <a href="/services/admin-panel-development/">Admin Panel Development</a>
                                <a href="/services/custom-erp-development/">Custom ERP Development</a>
                                <a href="/services/mvp-development/">MVP Development</a>
                            </div>
                            <div className="dropdown-col">
                                <span className="dropdown-title">Engineering & Commerce</span>
                                <a href="/services/frontend-development/">Frontend Development</a>
                                <a href="/services/api-integration-development/">API Integration Development</a>
                                <a href="/services/ecommerce-development/">Ecommerce Development</a>
                            </div>
                        </div>
                    </div>
                    <a href="/work/">Work</a>
                    <a href="/industries/">Industries</a>
                    <a href="/pricing/">Pricing</a>
                    <a href="/about/">About</a>
                    <a href="/contact/">Contact</a>
                </div>
                <div className="nav-actions">
                    <a className="btn" href="#contact">Contact Us</a>
                    <a className="btn primary" href="#contact">Get Proposal</a>
                    <button className="menu-btn" type="button" aria-label="Open navigation menu" aria-expanded="false"
                        aria-controls="mobile-navigation"><span></span></button>
                </div>
            </nav>
            <div className="mobile-nav-panel" id="mobile-navigation" aria-label="Mobile navigation">
                <a href="/services/">Services</a>
                <a href="/work/">Our Work</a>
                <a href="/industries/">Industries</a>
                <a href="/pricing/">Pricing</a>
                <a href="/about/">About</a>
                <a href="/contact/">Contact Us</a>
            </div>
        </header>
    );
}
