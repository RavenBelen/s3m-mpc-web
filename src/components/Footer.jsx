import { Link } from 'react-router'
import BrandMark from './BrandMark'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <Link className="brand footer-brand" to="/"><BrandMark /><span className="brand-copy"><strong>S3M MPC</strong><small>Multi-Purpose Cooperative</small></span></Link>
        <p>People. Purpose. Progress.<br />Working together for a stronger community.</p>
        <div className="footer-links"><Link to="/about">About Us</Link><Link to="/membership">Membership</Link><Link to="/contact">Contact</Link></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 S3M MPC. All rights reserved.</span><span>Member-owned · Community-focused</span></div>
    </footer>
  )
}

export default Footer
