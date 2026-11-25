import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import InfoCards from '../components/InfoCards'

function ProgramsPage() {
  return (
    <>
      <PageHero title="Programs & Livelihood">S3M MPC supports member livelihood and community activities, including education assistance, school improvement, tree planting, and coastal cleanups.</PageHero>
      <section className="section container" id="livelihood"><SectionHeading eyebrow="Community outreach" title="Programs that support the community.">The programs below are listed in the cooperative presentation.</SectionHeading><InfoCards items={[
        { label: 'EDUCATION', title: 'Educational assistance', description: 'More than five slots are listed, with assistance of ₱3,000 per semester or ₱6,000 per school year. Contact S3M MPC for current slots and eligibility.', icon: '✦' },
        { label: 'SCHOOLS', title: 'Brigada Eskwela', description: 'A community outreach program supporting school preparation and improvement.', icon: '＋', id: 'training' },
        { label: 'ENVIRONMENT', title: 'Tree planting & coastal cleanup', description: 'Environmental activities that invite members to care for local surroundings.', icon: '◎', id: 'initiatives' },
      ]} /></section>
      <section className="section soft-section"><div className="container two-column"><div><span className="eyebrow">Get involved</span><h2>Learn about current opportunities.</h2><p>Program slots, schedules, and requirements may change. Contact S3M MPC for current details or to ask about taking part.</p></div><div className="photo-placeholder inner-photo" role="img" aria-label="Cooperative program photo to be added"><span className="placeholder-label">PHOTO AREA</span></div></div></section>
    </>
  )
}

export default ProgramsPage
