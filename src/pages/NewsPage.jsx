import { Link } from 'react-router'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

const updates = [
  ['SCHOOL SUPPORT', 'Brigada Eskwela', 'A cooperative outreach activity that supports school communities.', 'announcements'],
  ['ENVIRONMENT', 'Tree planting & coastal cleanup', 'Community activities that encourage care for the local environment.', 'events'],
  ['EDUCATION', 'Educational assistance', 'The cooperative lists more than five assistance slots for students.', 'updates'],
]

function NewsPage() {
  return (
    <>
      <PageHero title="News & Events">Keep up with cooperative announcements, upcoming activities, and stories from the community.</PageHero>
      <section className="section container"><SectionHeading eyebrow="Community & events" title="Activities that bring people together.">Learn about S3M MPC’s outreach activities and member programs.</SectionHeading><div className="news-grid">{updates.map(([type, title, text, id], index) => <article className="news-card" id={id} key={title}><div className="news-card-image" role="img" aria-label="Cooperative activity photo to be added"><span className="placeholder-label">PHOTO AREA</span></div><div className="news-card-copy"><span className="service-index">{type} · 0{index + 1}</span><h3>{title}</h3><p>{text}</p><Link to={index === 2 ? '/programs' : '/contact'}>Learn more <span>→</span></Link></div></article>)}</div></section>
      <section className="section soft-section"><div className="container"><span className="eyebrow">Latest updates</span><h2>Announcements from S3M MPC</h2><p className="muted-copy">Contact the cooperative office for current schedules and announcements.</p></div></section>
    </>
  )
}

export default NewsPage
