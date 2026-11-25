import { Link } from 'react-router'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

const updates = [
  ['ANNOUNCEMENT', 'Cooperative updates will be shared here', 'Use this space for important notices, member updates, and cooperative announcements.', 'announcements'],
  ['EVENTS', 'Upcoming member activities', 'Add event details, dates, venue information, and instructions for joining.', 'events'],
  ['COMMUNITY', 'Stories from the cooperative', 'Share project updates and stories about members and community partners.', 'updates'],
]

function NewsPage() {
  return (
    <>
      <PageHero title="News & Events">Keep up with cooperative announcements, upcoming activities, and stories from the community.</PageHero>
      <section className="section container"><SectionHeading eyebrow="Stay informed" title="From S3M MPC.">Replace sample entries with approved news and event information.</SectionHeading><div className="news-grid">{updates.map(([type, title, text, id], index) => <article className="news-card" id={id} key={title}><div className="news-card-image" role="img" aria-label="News photo to be added"><span className="placeholder-label">PHOTO AREA</span></div><div className="news-card-copy"><span className="service-index">{type} · 0{index + 1}</span><h3>{title}</h3><p>{text}</p><Link to="/contact">Learn more <span>→</span></Link></div></article>)}</div></section>
      <section className="section soft-section"><div className="container"><span className="eyebrow">Event calendar</span><h2>Upcoming activities</h2><p className="muted-copy">Add an event calendar or current activity schedule when event details are ready.</p></div></section>
    </>
  )
}

export default NewsPage
