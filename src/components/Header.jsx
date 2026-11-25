import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { menuGroups } from '../data/navigation'
import BrandMark from './BrandMark'
import DropdownMenu from './DropdownMenu'

function Header() {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const closeMenus = () => {
    setOpenMenu(null)
    setMobileOpen(false)
  }

  return (
    <header className="site-header" onKeyDown={(event) => event.key === 'Escape' && closeMenus()}>
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>Serving members and community</span>
          <div className="utility-links">
            <Link to="/news#announcements">Announcements</Link>
            <Link to="/contact">Contact</Link>
            <button type="button" onClick={() => setSearchOpen((value) => !value)} aria-expanded={searchOpen}>
              {searchOpen ? 'Close search' : 'Search'} <span aria-hidden="true">⌕</span>
            </button>
          </div>
        </div>
      </div>

      {searchOpen && (
        <form className="search-panel container" role="search" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="site-search">Search the website</label>
          <input id="site-search" type="search" placeholder="Type a keyword..." />
          <button className="button button-dark" type="submit">Search</button>
        </form>
      )}

      <div className="masthead container">
        <Link className="brand" to="/" onClick={closeMenus} aria-label="S3M MPC home">
          <BrandMark />
          <span className="brand-copy"><strong>S3M MPC</strong><small>Multi-Purpose Cooperative</small></span>
        </Link>
        <div className="masthead-note"><span className="masthead-line">People. Purpose. Progress.</span><span>Member-owned · Community-focused</span></div>
        <Link className="button button-yellow masthead-cta" to="/membership#how-to-join">Become a Member <span aria-hidden="true">→</span></Link>
        <button className="mobile-toggle" type="button" onClick={() => setMobileOpen((value) => !value)} aria-expanded={mobileOpen} aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className="nav-shell">
        <nav className={`main-nav container ${mobileOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <NavLink className="nav-home" to="/" end onClick={closeMenus}>Home</NavLink>
          {menuGroups.map((group) => (
            <div className="nav-item" key={group.title}>
              <button
                className={openMenu === group.title ? 'nav-trigger is-active' : 'nav-trigger'}
                type="button"
                onClick={() => setOpenMenu(openMenu === group.title ? null : group.title)}
                aria-expanded={openMenu === group.title}
              >
                {group.title}<span className="chevron" aria-hidden="true">⌄</span>
              </button>
              {openMenu === group.title && <DropdownMenu group={group} onSelect={closeMenus} />}
            </div>
          ))}
          <NavLink to="/contact" onClick={closeMenus}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
