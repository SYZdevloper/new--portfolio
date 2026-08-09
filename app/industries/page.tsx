import type { Metadata } from "next";
import Link from "next/link";
import "./industries.css";
import IndustryNavigator from "@/components/industries/IndustryNavigator";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import IndustryInteractions from "@/components/industries/IndustryInteractions";
import ProposalModal from "@/components/industries/ProposalModal";

export const metadata: Metadata = {
  title: "Industries We Serve | Website & Software Development",
  description: "Explore industry-focused website design, ecommerce, portal and custom software solutions for technology, manufacturing, healthcare, finance, retail, real estate and more.",
};

export default function IndustriesDirectory() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: `
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.hyperlinktechsolutions.com/industries/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.hyperlinktechsolutions.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Industries",
          "item": "https://www.hyperlinktechsolutions.com/industries/"
        }
      ]
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.hyperlinktechsolutions.com/industries/#webpage",
      "url": "https://www.hyperlinktechsolutions.com/industries/",
      "name": "Industries We Serve",
      "headline": "Website Design and Software Development for Major Industries",
      "description": "Explore industry-focused website design, ecommerce, portal and custom software solutions for major business sectors.",
      "breadcrumb": {
        "@id": "https://www.hyperlinktechsolutions.com/industries/#breadcrumb"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://www.hyperlinktechsolutions.com/industries/#industry-list",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Software & SaaS Companies",
          "url": "https://www.hyperlinktechsolutions.com/industries/software-saas-companies/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "AI, Data & Automation",
          "url": "https://www.hyperlinktechsolutions.com/industries/ai-data-automation/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "IT Services, Cloud & Cybersecurity",
          "url": "https://www.hyperlinktechsolutions.com/industries/it-services-cloud-cybersecurity/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Digital Platforms & Marketplaces",
          "url": "https://www.hyperlinktechsolutions.com/industries/digital-platforms-marketplaces/"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Telecommunications & Connectivity",
          "url": "https://www.hyperlinktechsolutions.com/industries/telecommunications-connectivity/"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Media, News & Publishing",
          "url": "https://www.hyperlinktechsolutions.com/industries/media-news-publishing/"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Film, Streaming & Creator Economy",
          "url": "https://www.hyperlinktechsolutions.com/industries/film-streaming-creator-economy/"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Gaming & Interactive Entertainment",
          "url": "https://www.hyperlinktechsolutions.com/industries/gaming-interactive-entertainment/"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "Machinery & Industrial Equipment",
          "url": "https://www.hyperlinktechsolutions.com/industries/machinery-industrial-equipment/"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "Electronics & Electrical Manufacturing",
          "url": "https://www.hyperlinktechsolutions.com/industries/electronics-electrical-manufacturing/"
        },
        {
          "@type": "ListItem",
          "position": 11,
          "name": "Food, Beverage & Consumer Manufacturing",
          "url": "https://www.hyperlinktechsolutions.com/industries/food-beverage-consumer-manufacturing/"
        },
        {
          "@type": "ListItem",
          "position": 12,
          "name": "General & Contract Manufacturing",
          "url": "https://www.hyperlinktechsolutions.com/industries/general-contract-manufacturing/"
        },
        {
          "@type": "ListItem",
          "position": 13,
          "name": "Automotive Manufacturers",
          "url": "https://www.hyperlinktechsolutions.com/industries/automotive-manufacturers/"
        },
        {
          "@type": "ListItem",
          "position": 14,
          "name": "Automotive Components & Suppliers",
          "url": "https://www.hyperlinktechsolutions.com/industries/automotive-components-suppliers/"
        },
        {
          "@type": "ListItem",
          "position": 15,
          "name": "Electric Vehicles & Charging",
          "url": "https://www.hyperlinktechsolutions.com/industries/electric-vehicles-charging/"
        },
        {
          "@type": "ListItem",
          "position": 16,
          "name": "Automotive Retail & Mobility Services",
          "url": "https://www.hyperlinktechsolutions.com/industries/automotive-retail-mobility-services/"
        },
        {
          "@type": "ListItem",
          "position": 17,
          "name": "Aerospace & Aviation",
          "url": "https://www.hyperlinktechsolutions.com/industries/aerospace-aviation/"
        },
        {
          "@type": "ListItem",
          "position": 18,
          "name": "Defense & Security",
          "url": "https://www.hyperlinktechsolutions.com/industries/defense-security/"
        },
        {
          "@type": "ListItem",
          "position": 19,
          "name": "Space & Satellite",
          "url": "https://www.hyperlinktechsolutions.com/industries/space-satellite/"
        },
        {
          "@type": "ListItem",
          "position": 20,
          "name": "Rail, Marine & Advanced Transport",
          "url": "https://www.hyperlinktechsolutions.com/industries/rail-marine-advanced-transport/"
        },
        {
          "@type": "ListItem",
          "position": 21,
          "name": "Real Estate Development",
          "url": "https://www.hyperlinktechsolutions.com/industries/real-estate-development/"
        },
        {
          "@type": "ListItem",
          "position": 22,
          "name": "Property Sales & Brokerage",
          "url": "https://www.hyperlinktechsolutions.com/industries/property-sales-brokerage/"
        },
        {
          "@type": "ListItem",
          "position": 23,
          "name": "Construction & Civil Engineering",
          "url": "https://www.hyperlinktechsolutions.com/industries/construction-civil-engineering/"
        },
        {
          "@type": "ListItem",
          "position": 24,
          "name": "Architecture, Interiors & Property Services",
          "url": "https://www.hyperlinktechsolutions.com/industries/architecture-interiors-property-services/"
        },
        {
          "@type": "ListItem",
          "position": 25,
          "name": "Renewable Energy",
          "url": "https://www.hyperlinktechsolutions.com/industries/renewable-energy/"
        },
        {
          "@type": "ListItem",
          "position": 26,
          "name": "Oil & Gas",
          "url": "https://www.hyperlinktechsolutions.com/industries/oil-gas/"
        },
        {
          "@type": "ListItem",
          "position": 27,
          "name": "Power & Utilities",
          "url": "https://www.hyperlinktechsolutions.com/industries/power-utilities/"
        },
        {
          "@type": "ListItem",
          "position": 28,
          "name": "Water, Waste & Environmental Services",
          "url": "https://www.hyperlinktechsolutions.com/industries/water-waste-environmental-services/"
        },
        {
          "@type": "ListItem",
          "position": 29,
          "name": "Agriculture & Agritech",
          "url": "https://www.hyperlinktechsolutions.com/industries/agriculture-agritech/"
        },
        {
          "@type": "ListItem",
          "position": 30,
          "name": "Livestock, Dairy & Animal Agriculture",
          "url": "https://www.hyperlinktechsolutions.com/industries/livestock-dairy-animal-agriculture/"
        },
        {
          "@type": "ListItem",
          "position": 31,
          "name": "Fisheries & Aquaculture",
          "url": "https://www.hyperlinktechsolutions.com/industries/fisheries-aquaculture/"
        },
        {
          "@type": "ListItem",
          "position": 32,
          "name": "Forestry, Inputs & Agricultural Services",
          "url": "https://www.hyperlinktechsolutions.com/industries/forestry-inputs-agricultural-services/"
        },
        {
          "@type": "ListItem",
          "position": 33,
          "name": "Chemicals & Petrochemicals",
          "url": "https://www.hyperlinktechsolutions.com/industries/chemicals-petrochemicals/"
        },
        {
          "@type": "ListItem",
          "position": 34,
          "name": "Mining & Minerals",
          "url": "https://www.hyperlinktechsolutions.com/industries/mining-minerals/"
        },
        {
          "@type": "ListItem",
          "position": 35,
          "name": "Metals & Fabrication",
          "url": "https://www.hyperlinktechsolutions.com/industries/metals-fabrication/"
        },
        {
          "@type": "ListItem",
          "position": 36,
          "name": "Plastics, Rubber & Building Materials",
          "url": "https://www.hyperlinktechsolutions.com/industries/plastics-rubber-building-materials/"
        },
        {
          "@type": "ListItem",
          "position": 37,
          "name": "Ecommerce & D2C Brands",
          "url": "https://www.hyperlinktechsolutions.com/industries/ecommerce-d2c-brands/"
        },
        {
          "@type": "ListItem",
          "position": 38,
          "name": "Retail & Omnichannel Commerce",
          "url": "https://www.hyperlinktechsolutions.com/industries/retail-omnichannel-commerce/"
        },
        {
          "@type": "ListItem",
          "position": 39,
          "name": "Consumer Goods & FMCG",
          "url": "https://www.hyperlinktechsolutions.com/industries/consumer-goods-fmcg/"
        },
        {
          "@type": "ListItem",
          "position": 40,
          "name": "Wholesale & Distribution",
          "url": "https://www.hyperlinktechsolutions.com/industries/wholesale-distribution/"
        },
        {
          "@type": "ListItem",
          "position": 41,
          "name": "Hotels & Resorts",
          "url": "https://www.hyperlinktechsolutions.com/industries/hotels-resorts/"
        },
        {
          "@type": "ListItem",
          "position": 42,
          "name": "Travel & Tourism",
          "url": "https://www.hyperlinktechsolutions.com/industries/travel-tourism/"
        },
        {
          "@type": "ListItem",
          "position": 43,
          "name": "Restaurants, Cafes & Food Service",
          "url": "https://www.hyperlinktechsolutions.com/industries/restaurants-cafes-food-service/"
        },
        {
          "@type": "ListItem",
          "position": 44,
          "name": "Events, Venues & Booking Platforms",
          "url": "https://www.hyperlinktechsolutions.com/industries/events-venues-booking-platforms/"
        },
        {
          "@type": "ListItem",
          "position": 45,
          "name": "Logistics & Warehousing",
          "url": "https://www.hyperlinktechsolutions.com/industries/logistics-warehousing/"
        },
        {
          "@type": "ListItem",
          "position": 46,
          "name": "Freight, Shipping & Forwarding",
          "url": "https://www.hyperlinktechsolutions.com/industries/freight-shipping-forwarding/"
        },
        {
          "@type": "ListItem",
          "position": 47,
          "name": "Courier & Last-Mile Delivery",
          "url": "https://www.hyperlinktechsolutions.com/industries/courier-last-mile-delivery/"
        },
        {
          "@type": "ListItem",
          "position": 48,
          "name": "Transportation & Fleet Services",
          "url": "https://www.hyperlinktechsolutions.com/industries/transportation-fleet-services/"
        },
        {
          "@type": "ListItem",
          "position": 49,
          "name": "Sports Organisations & Clubs",
          "url": "https://www.hyperlinktechsolutions.com/industries/sports-organisations-clubs/"
        },
        {
          "@type": "ListItem",
          "position": 50,
          "name": "Fitness & Wellness Businesses",
          "url": "https://www.hyperlinktechsolutions.com/industries/fitness-wellness-businesses/"
        },
        {
          "@type": "ListItem",
          "position": 51,
          "name": "SportsTech & Performance Platforms",
          "url": "https://www.hyperlinktechsolutions.com/industries/sportstech-performance-platforms/"
        },
        {
          "@type": "ListItem",
          "position": 52,
          "name": "Recreation, Leisure & Attractions",
          "url": "https://www.hyperlinktechsolutions.com/industries/recreation-leisure-attractions/"
        },
        {
          "@type": "ListItem",
          "position": 53,
          "name": "Banking & Lending",
          "url": "https://www.hyperlinktechsolutions.com/industries/banking-lending/"
        },
        {
          "@type": "ListItem",
          "position": 54,
          "name": "FinTech & Payments",
          "url": "https://www.hyperlinktechsolutions.com/industries/fintech-payments/"
        },
        {
          "@type": "ListItem",
          "position": 55,
          "name": "Insurance & InsurTech",
          "url": "https://www.hyperlinktechsolutions.com/industries/insurance-insurtech/"
        },
        {
          "@type": "ListItem",
          "position": 56,
          "name": "Investment & Wealth Management",
          "url": "https://www.hyperlinktechsolutions.com/industries/investment-wealth-management/"
        },
        {
          "@type": "ListItem",
          "position": 57,
          "name": "Consulting & Advisory",
          "url": "https://www.hyperlinktechsolutions.com/industries/consulting-advisory/"
        },
        {
          "@type": "ListItem",
          "position": 58,
          "name": "Legal, Accounting & Tax Services",
          "url": "https://www.hyperlinktechsolutions.com/industries/legal-accounting-tax-services/"
        },
        {
          "@type": "ListItem",
          "position": 59,
          "name": "Recruitment, Staffing & HR",
          "url": "https://www.hyperlinktechsolutions.com/industries/recruitment-staffing-hr/"
        },
        {
          "@type": "ListItem",
          "position": 60,
          "name": "Marketing, Creative, BPO & Support Services",
          "url": "https://www.hyperlinktechsolutions.com/industries/marketing-creative-bpo-support-services/"
        },
        {
          "@type": "ListItem",
          "position": 61,
          "name": "Hospitals, Clinics & Healthcare Providers",
          "url": "https://www.hyperlinktechsolutions.com/industries/hospitals-clinics-healthcare-providers/"
        },
        {
          "@type": "ListItem",
          "position": 62,
          "name": "HealthTech & Telemedicine",
          "url": "https://www.hyperlinktechsolutions.com/industries/healthtech-telemedicine/"
        },
        {
          "@type": "ListItem",
          "position": 63,
          "name": "Pharmaceuticals & Biotechnology",
          "url": "https://www.hyperlinktechsolutions.com/industries/pharmaceuticals-biotechnology/"
        },
        {
          "@type": "ListItem",
          "position": 64,
          "name": "Medical Devices & Diagnostics",
          "url": "https://www.hyperlinktechsolutions.com/industries/medical-devices-diagnostics/"
        },
        {
          "@type": "ListItem",
          "position": 65,
          "name": "Schools & Education Groups",
          "url": "https://www.hyperlinktechsolutions.com/industries/schools-education-groups/"
        },
        {
          "@type": "ListItem",
          "position": 66,
          "name": "Colleges & Universities",
          "url": "https://www.hyperlinktechsolutions.com/industries/colleges-universities/"
        },
        {
          "@type": "ListItem",
          "position": 67,
          "name": "EdTech & Online Learning",
          "url": "https://www.hyperlinktechsolutions.com/industries/edtech-online-learning/"
        },
        {
          "@type": "ListItem",
          "position": 68,
          "name": "Training, Coaching & Research",
          "url": "https://www.hyperlinktechsolutions.com/industries/training-coaching-research/"
        },
        {
          "@type": "ListItem",
          "position": 69,
          "name": "Government & Public Sector",
          "url": "https://www.hyperlinktechsolutions.com/industries/government-public-sector/"
        },
        {
          "@type": "ListItem",
          "position": 70,
          "name": "Nonprofits & NGOs",
          "url": "https://www.hyperlinktechsolutions.com/industries/nonprofits-ngos/"
        },
        {
          "@type": "ListItem",
          "position": 71,
          "name": "Associations & Membership Organisations",
          "url": "https://www.hyperlinktechsolutions.com/industries/associations-membership-organisations/"
        },
        {
          "@type": "ListItem",
          "position": 72,
          "name": "Community & International Organisations",
          "url": "https://www.hyperlinktechsolutions.com/industries/community-international-organisations/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.hyperlinktechsolutions.com/industries/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What industries does Hyperlink Tech Solutions serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We design and develop business websites, ecommerce platforms, portals, dashboards and custom applications for companies across technology, manufacturing, healthcare, finance, retail, real estate, logistics, education, hospitality and other major sectors."
          }
        },
        {
          "@type": "Question",
          "name": "How should I choose the correct industry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose the broad industry that best reflects what your company sells or the market it primarily serves. More specialised categories can be organised on the dedicated industry page."
          }
        },
        {
          "@type": "Question",
          "name": "Can you create solutions for a niche industry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The main directory uses broad industries for clarity, while each industry page can support a deeper hierarchy for specialist markets and services."
          }
        }
      ]
    }
  ]
}
      `}} />

      <SiteHeader />
      <IndustryInteractions />

      <main>
        <section className="hero">

          <div className="container">
            <div className="breadcrumbs"><a href="/">Home</a><span>/</span><strong>Industries</strong></div>
            <div className="hero-copy">
              <p className="eyebrow">Industries we serve</p>
              <h1>Digital solutions shaped around <em>your industry.</em></h1>
              <p className="hero-lead">Explore industry-focused website design, ecommerce, portals, dashboards and
                custom software built around the way customers research, compare, enquire and purchase in
                your market.</p>
              <div className="hero-actions">
                <a className="btn primary" href="#industry-navigator">Find Your Industry →</a>
                <button className="btn open-proposal" type="button">Discuss Your Project</button>
              </div>
            </div>
          </div>

        </section>

        <IndustryNavigator />

        <section className="seo-section">
          <div className="container seo-grid">
            <div className="seo-copy">
              <p className="eyebrow">Industry-focused digital solutions</p>
              <h2>Website and software development built around how your market works.</h2>
              <p>Hyperlink Tech Solutions creates business websites, ecommerce platforms, customer portals,
                dashboards and custom web applications for organisations across major industries. We shape
                the information architecture, user journey and functionality around the real buying process
                in each market.</p>
              <p>Each broad industry page can support a scalable hierarchy for specialist markets while
                maintaining useful internal linking, clear search intent and consistent conversion paths.
              </p>
            </div>
            <div className="seo-points">
              <article className="seo-point">
                <h3>Industry-specific journeys</h3>
                <p>Navigation, content and calls to action reflect how customers make decisions in your
                  market.</p>
              </article>
              <article className="seo-point">
                <h3>Search-friendly architecture</h3>
                <p>Broad industry pages create a strong foundation for relevant specialist landing pages.
                </p>
              </article>
              <article className="seo-point">
                <h3>Relevant digital functionality</h3>
                <p>We select the right combination of websites, ecommerce, portals, dashboards and integrations.</p>
              </article>
              <article className="seo-point">
                <h3>Seamless Integrations</h3>
                <p>Connect your custom software directly to the specialized tools and ERPs your industry relies on.</p>
              </article>
              <article className="seo-point">
                <h3>Compliance &amp; Security</h3>
                <p>Built with industry-specific regulations and data protection requirements in mind.</p>
              </article>
              <article className="seo-point">
                <h3>Scalable Data Structures</h3>
                <p>Future-proof your business logic and databases for evolving industry standards and growth.</p>
              </article>
            </div>
          </div>
        </section>
        <section className="inquiry-section" id="contact">
          <div className="container">
            <div className="inquiry-box">
              <div className="inquiry-copy">
                <p className="eyebrow">Not sure which industry to choose?</p>
                <h2>Tell us what your company does.</h2>
                <p>Share your products, customers and goals. We will identify the most relevant industry
                  page and recommend the right digital approach.</p>
              </div>
              <form className="form-grid" id="inlineInquiryForm">
                <div className="field"><label htmlFor="inlineName">Name</label><input id="inlineName" required />
                </div>
                <div className="field"><label htmlFor="inlineEmail">Work email</label><input id="inlineEmail"
                  type="email" required /></div>
                <div className="field"><label htmlFor="inlineCompany">Company</label><input id="inlineCompany" />
                </div>
                <div className="field"><label htmlFor="inlineFamily">Industry family</label><select
                  id="inlineFamily">
                  <option>Technology &amp; Media</option>
                  <option>Manufacturing &amp; Engineering</option>
                  <option>Resources &amp; Built World</option>
                  <option>Consumer, Commerce &amp; Travel</option>
                  <option>Finance &amp; Professional Services</option>
                  <option>Health, Education &amp; Public</option>
                  <option>Not sure</option>
                </select></div>
                <div className="field full"><label htmlFor="inlineMessage">Project requirements</label><textarea
                  id="inlineMessage"
                  placeholder="Tell us about your business and what you need"></textarea></div>
                <div className="form-message" id="inlineFormMessage">Demo submitted. Connect this form to your
                  existing backend or CRM endpoint.</div>
                <div className="field full"><button className="btn primary" type="submit">Send Enquiry →</button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="faq-section">
          <div className="container">
            <div className="faq-heading">
              <p className="eyebrow">Industry solutions FAQ</p>
              <h2>Questions about our industry expertise.</h2>
            </div>
            <div className="faq-list">
              <details>
                <summary>What industries does Hyperlink Tech Solutions serve?</summary>
                <p>We design and develop business websites, ecommerce platforms, portals, dashboards and
                  custom applications for companies across technology, manufacturing, healthcare, finance,
                  retail, real estate, logistics, education, hospitality and other major sectors.</p>
              </details>
              <details>
                <summary>How should I choose the correct industry?</summary>
                <p>Choose the broad industry that best reflects what your company sells or the market it
                  primarily serves. More specialised categories can be organised on the dedicated industry
                  page.</p>
              </details>
              <details>
                <summary>Can you create solutions for a niche industry?</summary>
                <p>Yes. The main directory uses broad industries for clarity, while each industry page can
                  support a deeper hierarchy for specialist markets and services.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="cta">
          <div className="container">
            <div className="cta-box">
              <div className="cta-copy">
                <p className="eyebrow" style={{ color: '#cdbdff' }}>Start your project</p>
                <h2>Need a website or software solution for your industry?</h2>
                <p>Tell us about your customers, products and workflow. We will recommend the right
                  structure and technology.</p>
              </div>
              <button className="btn open-proposal" type="button">Get a Proposal &rarr;</button>
            </div>
          </div>
        </section>
      </main>

      <ProposalModal />
      <SiteFooter />
    </>
  );
}







