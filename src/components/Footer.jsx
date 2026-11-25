import { Link } from "react-router";
import BrandMark from "./BrandMark";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <Link className="brand footer-brand" to="/">
          <BrandMark />
          <span className="brand-copy">
            <strong>Sandigan ng Maligayang</strong>
            <strong>Mamamayan ng Makina</strong>
            <small>Multi-Purpose Cooperative · S3M MPC</small>
          </span>
        </Link>
        <p>
          Brgy. Makina, Balete, Batangas
          <br />
          Serving members across CALABARZON.
        </p>
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 S3M MPC. All rights reserved.</span>
        <span>Member-owned · Community-focused</span>
      </div>
    </footer>
  );
}

export default Footer;
