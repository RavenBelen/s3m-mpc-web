import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import InfoCards from '../components/InfoCards'

function ProgramsPage() {
  return (
    <>
      <PageHero title="Programs & Livelihood">Explore initiatives that help members build skills, access opportunity, and contribute to a stronger community.</PageHero>
      <section className="section container" id="livelihood"><SectionHeading eyebrow="Our programs" title="Opportunities to learn and grow.">Program descriptions below are placeholders; add the cooperative’s current offerings and schedules.</SectionHeading><InfoCards items={[
        { label: 'LIVELIHOOD', title: 'Livelihood opportunities', description: 'Share current enterprise and livelihood initiatives for eligible participants.', icon: '↗' },
        { label: 'TRAINING', title: 'Training & development', description: 'List workshops, learning sessions, and member development activities.', icon: '✦', id: 'training' },
        { label: 'COMMUNITY', title: 'Community initiatives', description: 'Highlight projects created with members and community partners.', icon: '◎', id: 'initiatives' },
      ]} /></section>
      <section className="section soft-section"><div className="container two-column"><div><span className="eyebrow">Get involved</span><h2>Bring an idea to the cooperative.</h2><p>Members can contact S3M MPC to ask about current programs or suggest a community initiative.</p></div><div className="photo-placeholder inner-photo" role="img" aria-label="Cooperative program photo to be added"><span className="placeholder-label">PHOTO AREA</span></div></div></section>
    </>
  )
}

export default ProgramsPage
