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
              <div className="work-placeholder">
                <span>Add project image</span>
              </div>
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
                <p>This is an exclusive membership platform for accessing premium resources and booking events. Built with Next.js Expertise, it delivers a seamless user Experience, establishes Authoritativeness by integrating Stripe, Supabase, and Calendly, and ensures Trustworthiness by securely delivering private content via the Google Drive API.</p>
              </div>
              <span className="work-index">01</span>
            </div>
          </a>
        </article>
        <article className="work-card">
          <a className="work-card-link" href="https://www.nbrgroup.in/" target="_blank" rel="noopener noreferrer" aria-label="View NBR Group real estate project">
            <div className="work-media">
              <img src="/images/nbrgroup.webp" width="1200" height="900" loading="lazy" alt="NBR Group real estate platform" />
              <div className="work-placeholder">
                <span>Add project image</span>
              </div>
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
                <p>A premier real estate platform built to establish industry Authoritativeness and maximise conversions. Leveraging our deep Expertise in property-tech, we integrated intelligent lead capture workflows that seamlessly qualify prospects. Deployed securely on Cloudflare's edge network, the platform ensures total Trustworthiness with lightning-fast, highly reliable property browsing Experiences.</p>
              </div>
              <span className="work-index">02</span>
            </div>
          </a>
        </article>
        <article className="work-card">
          <a className="work-card-link" href="https://xmf.co.in/" target="_blank" rel="noopener noreferrer" aria-label="View XMF Martial Arts portal">
            <div className="work-media">
              <img src="/images/xmf2.webp" width="1200" height="900" loading="lazy" alt="XMF martial arts student portal" />
              <div className="work-placeholder">
                <span>Add project image</span>
              </div>
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
                <p>A comprehensive web platform and student portal for XMF Martial Arts. The system tracks real-time training analytics, attendance, and progression for over 100+ active students. Designed with a clean, intuitive interface, it empowers both instructors and students to monitor performance and streamline academy operations effectively.</p>
              </div>
              <span className="work-index">03</span>
            </div>
          </a>
        </article>
        <article className="work-card">
          <a className="work-card-link" href="https://acronspring.com/" target="_blank" rel="noopener noreferrer" aria-label="View Acron Spring corporate website">
            <div className="work-media">
              <img src="/images/ChatGPT%20Image%20Aug%202,%202026,%2011_24_20%20PM.webp" width="1200" height="900" loading="lazy" alt="Acron Spring corporate website" />
              <div className="work-placeholder">
                <span>Add project image</span>
              </div>
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
                <p>A professional corporate website for Acron Spring Private Limited, a leading global spring manufacturer established in 1962. The platform showcases their extensive product catalog, while providing a clear inquiry system for custom manufacturing orders with no minimum quantities.</p>
              </div>
              <span className="work-index">04</span>
            </div>
          </a>
        </article>
        <article className="work-card">
          <a className="work-card-link" href="#" target="_blank" rel="noopener noreferrer" aria-label="View PCF For All healthcare website">
            <div className="work-media">
              <img src="/images/c7104b50-1530-4735-8be9-34faf5c996b0.webp" width="1200" height="900" loading="lazy" alt="PCF For All healthcare website" />
              <div className="work-placeholder">
                <span>Add project image</span>
              </div>
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
                <p>A comprehensive healthcare website based in Houston. Designed with a clean and professional UI, it delivers a seamless user experience for patients to learn about medical services, explore care options, and securely manage their health online.</p>
              </div>
              <span className="work-index">05</span>
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
