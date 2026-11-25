import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import InfoCards from '../components/InfoCards'

function ServicesPage() {
  return (
    <>
      <PageHero title="Services">S3M MPC provides credit, rice retailing, commercial stall and equipment rentals, and e-wallet services. Contact the cooperative to confirm current terms.</PageHero>
      <section className="section container" id="member-services"><SectionHeading eyebrow="Member support" title="Services for members.">Explore the cooperative’s services and contact S3M MPC for current rates and requirements.</SectionHeading><InfoCards items={[
        { label: 'CREDIT', title: 'Credit granting', description: 'The listed rate is 1% per month, plus a 2% processing fee. Lending allocations: 30% for agricultural productivity and 70% for housing construction, provident, and education loans.', icon: '₱' },
        { label: 'RICE RETAIL', title: 'Rice retailing', description: 'Average sales are 300 sacks per month (25 kg each), with a listed price of ₱1,250–₱1,350 per sack. Members may borrow up to two sacks monthly, payable within one month.', icon: '＋' },
        { label: 'COMMERCIAL SPACE', title: 'Commercial stall rentals', description: 'Three stalls serve a bakery, meat shop, and convenience store. The listed rental is ₱3,000 per month for each stall.', icon: '↗' },
        { label: 'OTHER SERVICES', title: 'Rentals & e-wallet', description: 'Table and chair rentals and an e-wallet service are also available. Contact S3M MPC for current availability and details.', icon: '◎' },
      ]} className="four-card-grid" /></section>
      <section className="section soft-section" id="community-support"><div className="container two-column"><div><span className="eyebrow">Community support</span><h2>Local businesses, shared opportunity.</h2><p>The cooperative operates rice retailing and a meat shop and encourages fish vendors and tricycle drivers to build savings.</p><p className="muted-copy">Rates and availability may change. Contact S3M MPC for current service terms.</p></div><div className="photo-placeholder inner-photo" role="img" aria-label="Community support photo to be added"><span className="placeholder-label">PHOTO AREA</span></div></div></section>
      <section className="section container" id="service-information"><SectionHeading eyebrow="Need help?" title="Find the right service.">For current rates, requirements, availability, or assistance, contact the cooperative office at Brgy. Makina, Balete, Batangas.</SectionHeading></section>
    </>
  )
}

export default ServicesPage
