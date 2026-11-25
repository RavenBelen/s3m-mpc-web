import { Link } from "react-router";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import InfoCards from "../components/InfoCards";

function MembershipPage() {
  return (
    <>
      <PageHero title="Membership">
        Join Sandigan ng Maligayang Mamamayan ng Makina MPC and take part in a
        member-owned cooperative serving Balete and CALABARZON.
      </PageHero>
      <section className="section container" id="benefits">
        <SectionHeading
          eyebrow="Member benefits"
          title="Contribute, participate, and share in progress."
        >
          Membership includes access to cooperative services and opportunities
          to take part.
        </SectionHeading>
        <InfoCards
          items={[
            {
              label: "CREDIT",
              title: "Low-interest loans",
              description:
                "The profile lists a 1% monthly interest rate. Loan terms and a 2% processing fee are described on the Services page.",
              icon: "₱",
            },
            {
              label: "OWNERSHIP",
              title: "Share capital interest",
              description:
                "Members may receive interest on share capital, subject to cooperative policy and applicable results.",
              icon: "◎",
            },
            {
              label: "PATRONAGE",
              title: "Patronage refund",
              description:
                "Members may receive a patronage refund based on cooperative policy and patronage.",
              icon: "↗",
            },
            {
              label: "LEARNING",
              title: "Member training",
              description:
                "Take part in trainings and learning opportunities offered by the cooperative.",
              icon: "✦",
            },
          ]}
          className="four-card-grid"
        />
      </section>
      <section className="section soft-section" id="how-to-join">
        <div className="container">
          <SectionHeading
            eyebrow="How to become a member"
            title="Membership requirements."
          >
            Contact S3M MPC to confirm current requirements and the payment
            breakdown before applying.
          </SectionHeading>
          <div className="requirements-grid">
            <article>
              <span>01</span>
              <h3>Age</h3>
              <p>Applicants must be 18 to 64 years old.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Tax identification</h3>
              <p>A TIN is required. Farmers may apply without a TIN.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Pre-membership seminar</h3>
              <p>Attend the one-day Pre-Membership Education Seminar (PMES).</p>
            </article>
            <article>
              <span>04</span>
              <h3>Payment amount</h3>
              <p>
                ₱12,005.00. Contact the cooperative to confirm the current
                amount and breakdown.
              </p>
            </article>
          </div>
          <Link className="button button-dark" to="/contact">
            Ask about joining <span>→</span>
          </Link>
        </div>
      </section>
      <section className="section container" id="faq">
        <SectionHeading eyebrow="Common questions" title="Membership FAQ" />
        <div className="faq-list">
          <details>
            <summary>Can farmers apply without a TIN?</summary>
            <p>
              Farmers may apply without a TIN. Contact S3M MPC to confirm
              current requirements.
            </p>
          </details>
          <details>
            <summary>What does the ₱12,005.00 payment cover?</summary>
            <p>Contact the cooperative for the current payment breakdown.</p>
          </details>
          <details>
            <summary>Where can I ask about the seminar?</summary>
            <p>
              Contact the cooperative for the next Pre-Membership Education
              Seminar schedule.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}

export default MembershipPage;
