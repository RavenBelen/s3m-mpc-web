import { useState } from 'react'
import { Link } from 'react-router'
import InfoCards from '../components/InfoCards'
import SectionHeading from '../components/SectionHeading'

const slides = [
  { kicker: 'S3M MULTI-PURPOSE COOPERATIVE', title: ['Stronger together.', 'Growing together.'], text: 'A member-owned cooperative creating opportunity through service, shared effort, and community.', action: 'Discover our cooperative', to: '/about' },
  { kicker: 'MEMBERSHIP · SERVICE · COMMUNITY', title: ['A better future', 'starts with us.'], text: 'Join a community where every member has a voice and every contribution helps us move forward.', action: 'Explore membership', to: '/membership' },
  { kicker: 'BUILDING OPPORTUNITY', title: ['Working for our', 'community.'], text: 'Learn about our services, programs, and the ways we support our members and neighbors.', action: 'See what we do', to: '/services' },
]

const quickLinks = [
  ['01', 'About the Cooperative', 'Learn about our purpose, values, and leadership.', '/about'],
  ['02', 'Become a Member', 'See how you can join and take part.', '/membership'],
  ['03', 'Member Services', 'Explore services and opportunities for members.', '/services'],
  ['04', 'News & Events', 'Read the latest announcements and updates.', '/news'],
]

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slide = slides[activeSlide]
  const goTo = (direction) => setActiveSlide((activeSlide + direction + slides.length) % slides.length)

  return (
    <section className="hero" aria-label="Featured cooperative information">
      <div className="hero-media" role="img" aria-label="Featured image area; photo to be added later"></div>
      <div className="hero-shade"></div>
      <div className="container hero-content" key={slide.title.join(' ')}>
        <span className="hero-kicker"><i></i>{slide.kicker}</span>
        <h1>{slide.title.map((line) => <span key={line}>{line}</span>)}</h1>
        <p>{slide.text}</p>
        <Link className="button button-yellow" to={slide.to}>{slide.action}<span aria-hidden="true">→</span></Link>
      </div>
      <div className="hero-controls container">
        <div className="slide-dots" aria-label="Choose featured panel">
          {slides.map((item, index) => <button key={item.kicker} type="button" className={activeSlide === index ? 'dot active' : 'dot'} onClick={() => setActiveSlide(index)} aria-label={`Show slide ${index + 1}`} aria-current={activeSlide === index ? 'true' : undefined}></button>)}
        </div>
        <div className="slide-arrows"><button type="button" onClick={() => goTo(-1)} aria-label="Previous slide">←</button><button type="button" onClick={() => goTo(1)} aria-label="Next slide">→</button></div>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <>
      <Hero />
      <section className="quick-section" aria-label="Quick links">
        <div className="container quick-grid">
          {quickLinks.map(([number, title, text, to]) => <Link className="quick-card" to={to} key={title}><span className="quick-number">{number}</span><span className="quick-copy"><strong>{title}</strong><small>{text}</small></span><span className="quick-arrow" aria-hidden="true">↗</span></Link>)}
        </div>
      </section>
      <section className="intro-section container" id="about">
        <div className="intro-copy"><span className="eyebrow">Welcome to S3M MPC</span><h2>One cooperative.<br /><em>Many possibilities.</em></h2><p>S3M MPC brings people together to meet shared needs and create opportunities through cooperation. Our members shape the direction of the cooperative and share in the progress we make.</p><Link className="text-link" to="/about">Discover our story <span aria-hidden="true">→</span></Link></div>
        <div className="photo-placeholder" role="img" aria-label="Cooperative photo will be added here"><span className="placeholder-label">PHOTO AREA</span></div>
      </section>
      <section className="services-section">
        <div className="container"><SectionHeading eyebrow="Explore S3M MPC" title="Here for our members.">Find the information and support you need, all in one place.</SectionHeading>
          <InfoCards items={[
            { label: 'MEMBERSHIP', title: 'Membership', description: 'Learn about member benefits, responsibilities, and how to join.', to: '/membership', linkLabel: 'Explore membership', icon: '＋' },
            { label: 'OPPORTUNITY', title: 'Programs & Livelihood', description: 'Discover programs designed to support members and local opportunity.', to: '/programs', linkLabel: 'View our programs', icon: '↗' },
            { label: 'COMMUNITY', title: 'Community', description: 'See how cooperation can create a stronger, more connected community.', to: '/services#community-support', linkLabel: 'See our community work', icon: '◎' },
          ]} />
        </div>
      </section>
      <section className="news-strip"><div className="container news-inner"><div><span className="eyebrow">Stay connected</span><h2>News from the cooperative</h2></div><p>Announcements, events, and member stories will appear here.</p><Link className="button button-outline" to="/news">View all updates <span>→</span></Link></div></section>
      <section className="join-banner"><div className="container join-inner"><div><span className="eyebrow">Your next step</span><h2>Let’s grow stronger together.</h2><p>Have a question or want to learn about joining? Get in touch with S3M MPC.</p></div><Link className="button button-yellow" to="/contact">Contact the Cooperative <span>→</span></Link></div></section>
    </>
  )
}

export default HomePage
