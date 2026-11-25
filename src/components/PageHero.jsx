import { Link } from 'react-router'

function PageHero({ title, eyebrow = 'S3M MPC', children }) {
  return (
    <section className="pagehero">
      <div className="container">
        <div className="crumb"><Link to="/">Home</Link><span>/</span>{title}</div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </section>
  )
}

export default PageHero
