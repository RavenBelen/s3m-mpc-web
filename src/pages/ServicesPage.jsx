import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import InfoCards from '../components/InfoCards'

function ServicesPage() {
  return (
    <>
      <PageHero title="Services">Find cooperative services and support for members. Replace these sample categories with the services S3M MPC currently provides.</PageHero>
      <section className="section container" id="member-services"><SectionHeading eyebrow="Member support" title="Services for members.">Add eligibility details, requirements, schedules, and contact information for each service.</SectionHeading><InfoCards items={[
        { label: 'MEMBER SUPPORT', title: 'Member services', description: 'Information and assistance for members throughout their cooperative journey.', icon: '◎' },
        { label: 'FINANCIAL', title: 'Financial services', description: 'Add approved savings, credit, or other financial service details here.', icon: '₱' },
        { label: 'INFORMATION', title: 'Member assistance', description: 'Get help finding the right office, person, or cooperative resource.', icon: '?' },
      ]} /></section>
      <section className="section soft-section" id="community-support"><div className="container two-column"><div><span className="eyebrow">Community support</span><h2>Serving beyond our membership.</h2><p>Share the cooperative’s community programs, partnerships, and the ways local residents can participate.</p></div><div className="photo-placeholder inner-photo" role="img" aria-label="Community support photo to be added"><span className="placeholder-label">PHOTO AREA</span></div></div></section>
      <section className="section container" id="service-information"><SectionHeading eyebrow="Need help?" title="Find the right service.">For service availability, requirements, or assistance, contact the cooperative directly.</SectionHeading></section>
    </>
  )
}

export default ServicesPage
