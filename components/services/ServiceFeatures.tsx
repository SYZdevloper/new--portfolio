
import React from 'react';

export default function ServiceFeatures() {
    return (
        <section className="section soft" id="included">
                <div className="container">
                    <div className="solution-shell">
                        <div className="solution-head">
                            <div>
                                <p className="eyebrow" style={{"color":"#d8c2ff"}}>Complete website delivery</p>
                                <h2>Everything required to turn an approved direction into a functioning business website.</h2>
                            </div>
                            <p>The final scope is shaped around your pages, content, workflows and integrations.
                                The modules below show the areas a complete development project can include.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Architecture</span>
                                <h3>Website structure and reusable page system</h3>
                                <p>Implementation of navigation, URL structure, page hierarchy and reusable templates that keep the website consistent.</p>
                                <div className="deliverable-tags"><small>Sitemap</small><small>Navigation</small><small>Templates</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Front end</span>
                                <h3>Responsive interface development</h3>
                                <p>Development of approved designs into responsive components for desktop, tablet and mobile experiences.</p>
                                <div className="deliverable-tags"><small>HTML/CSS</small><small>Components</small><small>Accessibility</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Content</span>
                                <h3>CMS and content management</h3>
                                <p>Editable pages, services, articles, media and agreed content areas with a manageable publishing workflow.</p>
                                <div className="deliverable-tags"><small>CMS</small><small>Roles</small><small>Media</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Leads</span>
                                <h3>Forms and conversion journeys</h3>
                                <p>Contact, proposal and service-specific forms with validation, notifications, thank-you states and spam protection.</p>
                                <div className="deliverable-tags"><small>Forms</small><small>Events</small><small>CRM-ready</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>05 · Visibility</span>
                                <h3>Technical SEO foundations</h3>
                                <p>Semantic structure, metadata support, canonical tags, sitemap, robots rules, schema and redirect planning.</p>
                                <div className="deliverable-tags"><small>Metadata</small><small>Schema</small><small>Sitemap</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>06 · Launch</span>
                                <h3>Testing, deployment and handover</h3>
                                <p>Responsive, browser, form and functionality checks followed by production deployment and practical handover.</p>
                                <div className="deliverable-tags"><small>QA</small><small>Deployment</small><small>Support</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
    );
}
