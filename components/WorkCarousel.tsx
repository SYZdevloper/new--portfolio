'use client';

import { useRef } from 'react';

export default function WorkCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 500;
      scrollRef.current.scrollBy({ left: -(cardWidth + 18), behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 500;
      scrollRef.current.scrollBy({ left: cardWidth + 18, behavior: 'smooth' });
    }
  };

  return (
    <div className="carousel-wrapper">

      <div className="work-showcase carousel-track" ref={scrollRef}>
        <article className="work-card">
          <a className="work-card-link" href="https://soulhomelove.com" target="_blank" rel="noopener noreferrer" aria-label="View SoulHome project">
            <div className="work-media">
              <img src="/images/soulhome.webp" width="1200" height="900" loading="lazy" alt="SoulHome membership platform" />

              <div className="work-media-top">
                <span className="work-open">↗</span>
              </div>
            </div>
            <div className="work-body">
              <div>
                <div className="work-tags">
                  <span>Membership Platform</span>
                  <span>Next.js</span>
                </div>
                <h3>SoulHome</h3>
                <p>The client needed a secure way to monetize premium content and manage event bookings. We built a custom Next.js membership platform integrating Stripe for payments, Supabase for authentication, and Calendly for buying resources. Post-launch, the automated workflow eliminated manual onboarding and securely delivered private content to subscribers.</p>
              </div>
              <span className="work-index">01</span>
            </div>
          </a>
        </article>
        <article className="work-card">
          <a className="work-card-link" href="https://www.nbrgroup.in/" target="_blank" rel="noopener noreferrer" aria-label="View NBR Group real estate project">
            <div className="work-media">
              <img src="/images/nbrgroup.webp" width="1200" height="900" loading="lazy" alt="NBR Group real estate platform" />

              <div className="work-media-top">
                <span className="work-open">↗</span>
              </div>
            </div>
            <div className="work-body">
              <div>
                <div className="work-tags">
                  <span>Real Estate Platform</span>
                  <span>Cloudflare</span>
                </div>
                <h3>NBR Group</h3>
                <p>NBR Group struggled with slow property browsing and inefficient lead tracking. We developed a lightning-fast property portal deployed on Cloudflare's edge network. By integrating intelligent lead capture workflows, the new platform significantly increased prospect qualification rates and reduced page load times.</p>
              </div>
              <span className="work-index">02</span>
            </div>
          </a>
        </article>
        <article className="work-card">
          <a className="work-card-link" href="https://xmf.co.in/" target="_blank" rel="noopener noreferrer" aria-label="View XMF Martial Arts portal">
            <div className="work-media">
              <img src="/images/xmf2.webp" width="1200" height="900" loading="lazy" alt="XMF martial arts student portal" />

              <div className="work-media-top">
                <span className="work-open">↗</span>
              </div>
            </div>
            <div className="work-body">
              <div>
                <div className="work-tags">
                  <span>Student Portal</span>
                  <span>Analytics</span>
                </div>
                <h3>XMF Martial Arts</h3>
                <p>Managing attendance and progression for 100+ active students was becoming a logistical challenge. We built a custom web portal that tracks real-time training analytics and attendance. The intuitive system empowered instructors to monitor performance instantly, reducing administrative overhead and streamlining academy operations.</p>
              </div>
              <span className="work-index">03</span>
            </div>
          </a>
        </article>
        <article className="work-card">
          <a className="work-card-link" href="https://acronspring.com/" target="_blank" rel="noopener noreferrer" aria-label="View Acron Spring corporate website">
            <div className="work-media">
              <img src="/images/ChatGPT%20Image%20Aug%202,%202026,%2011_24_20%20PM.webp" width="1200" height="900" loading="lazy" alt="Acron Spring corporate website" />

              <div className="work-media-top">
                <span className="work-open">↗</span>
              </div>
            </div>
            <div className="work-body">
              <div>
                <div className="work-tags">
                  <span>Corporate Website</span>
                  <span>Manufacturing</span>
                </div>
                <h3>Acron Spring</h3>
                <p>As a global manufacturer since 1962, Acron Spring needed a modernized digital storefront to handle custom manufacturing inquiries. We developed a professional platform that digitizes their extensive product catalog and streamlines their RFQ process. The new system successfully simplified custom orders for B2B clients worldwide.</p>
              </div>
              <span className="work-index">04</span>
            </div>
          </a>
        </article>
        <article className="work-card">
          <a className="work-card-link" href="#" target="_blank" rel="noopener noreferrer" aria-label="View PCF For All healthcare website">
            <div className="work-media">
              <img src="/images/c7104b50-1530-4735-8be9-34faf5c996b0.webp" width="1200" height="900" loading="lazy" alt="PCF For All healthcare website" />

              <div className="work-media-top">
                <span className="work-open">↗</span>
              </div>
            </div>
            <div className="work-body">
              <div>
                <div className="work-tags">
                  <span>Healthcare</span>
                  <span>Houston</span>
                </div>
                <h3>PCF For All</h3>
                <p>Patients needed a simpler way to explore care options and manage their health online. We built a highly accessible healthcare platform with a clean, professional interface. The modernized portal improved patient engagement and reduced front-desk call volume by securely centralizing medical services and information.</p>
              </div>
              <span className="work-index">05</span>
            </div>
          </a>
        </article>
        <article className="work-card">
          <a className="work-card-link" href="https://www.odettepatisserie.com/" target="_blank" rel="noopener noreferrer" aria-label="View Odette Patisserie website">
            <div className="work-media">
              <img src="/images/5003135f-5a38-40a3-ba34-64190c6d4c1e.webp" width="1200" height="900" loading="lazy" alt="Odette Patisserie ecommerce website" />

              <div className="work-media-top">
                <span className="work-open">↗</span>
              </div>
            </div>
            <div className="work-body">
              <div>
                <div className="work-tags">
                  <span>Premium Patisserie</span>
                  <span>E-commerce</span>
                </div>
                <h3>Odette Patisserie</h3>
                <p>Odette required a high-end digital presence that matched their premium pastries, while handling online orders efficiently. We engineered a custom e-commerce site with a modern, elegant interface. The conversion-optimized checkout process drove a notable increase in online sales and streamlined their fulfillment operations.</p>
              </div>
              <span className="work-index">06</span>
            </div>
          </a>
        </article>
      </div>
      <div className="carousel-controls">
        <button type="button" className="carousel-btn" onClick={handleScrollLeft} aria-label="Previous project">
          ←
        </button>
        <button type="button" className="carousel-btn" onClick={handleScrollRight} aria-label="Next project">
          →
        </button>
      </div>
    </div>
  );
}
