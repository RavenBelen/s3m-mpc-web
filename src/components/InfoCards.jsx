function InfoCards({ items }) {
  return (
    <div className="service-grid">
      {items.map((item, index) => (
        <article className="service-card" id={item.id} key={item.title}>
          <span className="service-index">0{index + 1} / {item.label}</span>
          <div className="service-icon" aria-hidden="true">{item.icon ?? '＋'}</div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.to && <a href={item.to}>{item.linkLabel ?? 'Learn more'} <span>→</span></a>}
        </article>
      ))}
    </div>
  )
}

export default InfoCards
