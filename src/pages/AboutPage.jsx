import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

function AboutPage() {
  return (
    <>
      <PageHero title="About Us">A cooperative built around members, shared purpose, and the belief that communities thrive when people work together.</PageHero>
      <section className="section container two-column" id="story">
        <div><span className="eyebrow">Our story</span><h2>Created through cooperation.</h2><p>S3M MPC brings members together to meet common needs and create lasting opportunities. This page is ready for the cooperative’s history, milestones, and the people who helped shape it.</p></div>
        <div className="photo-placeholder inner-photo" role="img" aria-label="Cooperative history photo to be added"><span className="placeholder-label">PHOTO AREA</span></div>
      </section>
      <section className="section soft-section" id="mission"><div className="container"><SectionHeading eyebrow="Our direction" title="Mission & Vision">Replace these draft statements with the cooperative’s approved mission and vision.</SectionHeading><div className="statement-grid"><article><span className="statement-icon">◎</span><h3>Our Mission</h3><p>To serve members and community through responsible, inclusive, and sustainable cooperative action.</p></article><article><span className="statement-icon">✦</span><h3>Our Vision</h3><p>A thriving community where people work together and share in meaningful progress.</p></article></div></div></section>
      <section className="section container" id="leadership"><SectionHeading eyebrow="Leadership & Governance" title="Member-led by design.">Add the board, management team, and governance information here.</SectionHeading><div className="photo-placeholder wide-placeholder" role="img" aria-label="Leadership team photo to be added"><span className="placeholder-label">PHOTO AREA</span></div></section>
    </>
  )
}

export default AboutPage
