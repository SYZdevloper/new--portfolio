
import React from 'react';

export default function ServiceHero() {
    return (
        <section className="hero service-hero" aria-labelledby="service-title">
                <nav className="service-breadcrumb" aria-label="Breadcrumb">
                    <a href="/">Home</a><span>›</span>
                    <a href="/services/">Services</a><span>›</span>
                    <strong>Business Website Development</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy">
                        <div className="hero-status">Complete business websites from strategy to launch</div>
                        <p className="eyebrow">Business website development services</p>
                        <h1 id="service-title">Business website development built for <span
                                className="accent-text">leads, performance and growth.</span></h1>
                        <p>We develop responsive, CMS-powered business websites with structured service pages,
                            enquiry forms, analytics, integrations and technical SEO foundations—so your website
                            becomes a useful business system, not a static online brochure.</p>
                        <ul className="hero-points">
                            <li>Responsive across every key screen</li>
                            <li>Easy-to-manage CMS</li>
                            <li>Lead forms and business integrations</li>
                            <li>SEO and performance foundations</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get Website Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#case-study">View Development Example <span className="arrow">↗</span></a>
                        </div>
                    </div>
                </div>
            </section>
    );
}
