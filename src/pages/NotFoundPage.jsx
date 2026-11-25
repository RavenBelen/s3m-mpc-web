import { Link } from 'react-router'

function NotFoundPage() {
  return <section className="pagehero not-found"><div className="container"><span className="eyebrow">Page not found</span><h1>We couldn’t find that page.</h1><p>The page may have moved or the address may be incorrect.</p><Link className="button button-yellow" to="/">Return home <span>→</span></Link></div></section>
}

export default NotFoundPage
