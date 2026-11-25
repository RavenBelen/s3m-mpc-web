import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import PeopleCarousel from "../components/PeopleCarousel";

function AboutPage() {
  return (
    <>
      <PageHero title="About Us">
        Sandigan ng Maligayang Mamamayan ng Makina Multi-Purpose Cooperative,
        known as S3M MPC, is a member-owned cooperative based in Brgy. Makina,
        Balete, Batangas.
      </PageHero>

      <section className="section container about-intro" id="story">
        <div className="about-intro-copy">
          <span className="eyebrow">Who we are</span>
          <h2>People working together to improve lives.</h2>
          <p>
            S3M MPC brings members together to build livelihood, grow savings,
            and support one another. The cooperative’s work is rooted in
            bayanihan: members contribute, share responsibility, and use their
            collective effort to meet common needs.
          </p>
          <p>
            From its first agricultural loans to today’s services and community
            programs, S3M MPC continues to create practical opportunities for
            members and the communities of Balete.
          </p>
        </div>
        <div className="about-facts">
          <article>
            <span>REGISTERED</span>
            <strong>February 4, 2004</strong>
            <small>Cooperative Development Authority</small>
          </article>
          <article>
            <span>BASED IN</span>
            <strong>Brgy. Makina</strong>
            <small>Balete, Batangas</small>
          </article>
          <article>
            <span>AREA SERVED</span>
            <strong>CALABARZON</strong>
            <small>Members from different barangays in Balete</small>
          </article>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <SectionHeading
            eyebrow="Our history"
            title="From Bayanihan Banking to S3M MPC"
          >
            The cooperative began with members pooling small contributions to
            help one another access agricultural loans and livelihood
            opportunities.
          </SectionHeading>
          <div className="timeline">
            <article>
              <span>JULY 2003</span>
              <div>
                <h3>Bayanihan Banking begins</h3>
                <p>
                  Sixty-eight members contributed ₱10 each, creating ₱680 in
                  starting capital. The fund was used for agricultural loans.
                  Earnings were added to members’ savings and reinvested in hog
                  raising, contract growing, and other small businesses.
                </p>
              </div>
            </article>
            <article>
              <span>FEBRUARY 4, 2004</span>
              <div>
                <h3>Registered as S3M MPC</h3>
                <p>
                  Bayanihan Banking became the Sandigan ng Maligayang Mamamayan
                  ng Makina Multi-Purpose Cooperative and registered with the
                  Cooperative Development Authority.
                </p>
              </div>
            </article>
            <article>
              <span>GROWING TOGETHER</span>
              <div>
                <h3>Expanding services and participation</h3>
                <p>
                  The cooperative grew to serve members from different barangays
                  in Balete. Its activities expanded to include rice retailing,
                  a meat shop, commercial stall rentals, and table-and-chair
                  rentals. It also encouraged fish vendors and tricycle drivers
                  to save.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section container values-section" id="mission">
        <SectionHeading
          eyebrow="Our direction"
          title="Mission, vision & core values"
        >
          Our statements express the cooperative’s commitment to member
          livelihood and community well-being.
        </SectionHeading>
        <div className="statement-grid">
          <article>
            <span className="statement-icon">◎</span>
            <h3>Our Mission</h3>
            <p>
              Ang kooperatiba ay magsasagawa ng mga pangkabuhayang proyekto at
              palalakasin ang hanay ng mga miyembro para sa tulong-tulong na
              pagpapaunlad ng bawat isa tungo sa tagumpay ng kooperatiba at ng
              bayan.
            </p>
            <p className="translation">
              The cooperative will carry out livelihood projects and strengthen
              its members through mutual support and shared development, toward
              the success of the cooperative and the community.
            </p>
          </article>
          <article>
            <span className="statement-icon">✦</span>
            <h3>Our Vision</h3>
            <p>
              Isang matatag at may takot sa Diyos na kooperatiba na behikulo at
              instrumento ng pagpapabuti ng kabuhayan ng lahat ng miyembro at ng
              komunidad.
            </p>
            <p className="translation">
              A strong, God-fearing cooperative that helps improve the
              livelihood of all members and the community.
            </p>
          </article>
          <article className="values-card">
            <span className="statement-icon">⌂</span>
            <h3>Core Values</h3>
            <p>
              Makapagbigay ng sapat na pagkain sa bawat lamesa ng mga kasapi at
              makatulong sa pag-aayos ng kapaligiran ng komunidad para sa maayos
              at tahimik na paninirahan.
            </p>
            <p className="translation">
              Help put sufficient food on every member’s table and improve the
              community environment for peaceful living.
            </p>
          </article>
        </div>
      </section>

      <section className="section soft-section people-section" id="our-people">
        <div className="container">
          <SectionHeading
            eyebrow="Our people"
            title="Members and employees, working as one."
          >
            The people of S3M MPC are at the heart of the cooperative. This
            space is reserved for the employees’ group photo.
          </SectionHeading>
          <PeopleCarousel />
        </div>
      </section>

      <section
        className="section container organization-section"
        id="leadership"
      >
        <SectionHeading
          eyebrow="General Assembly & organization"
          title="The people and positions behind the cooperative."
        >
          Add the official organizational structure and names when the approved
          chart and employee details are ready.
        </SectionHeading>
        <div
          className="organization-photo-placeholder"
          role="img"
          aria-label="Portrait organizational chart photo placeholder"
        >
          <span className="placeholder-label">
            PORTRAIT ORGANIZATIONAL CHART PHOTO
          </span>
        </div>
        <p className="photo-caption">
          General Assembly and employee structure · Portrait organizational
          chart to be added
        </p>
        <div
          className="position-directory"
          aria-label="Position and name placeholders"
        >
          {[
            "Position / Committee",
            "Position / Committee",
            "Position / Committee",
            "Employee Position",
          ].map((label, index) => (
            <article key={`${label}-${index}`}>
              <div className="person-photo-placeholder" aria-hidden="true">
                PHOTO
              </div>
              <span>{label}</span>
              <strong>Name to be added</strong>
            </article>
          ))}
        </div>
        <div className="governance-copy">
          <span className="eyebrow">Registration & affiliations</span>
          <p>
            S3M MPC is registered with the Cooperative Development Authority
            under registration number <strong>9520-040002730</strong>. The
            cooperative is affiliated with the Cooperative Union of Batangas and
            the Municipal Cooperative and Development Council.
          </p>
        </div>
      </section>

      <section className="section soft-section" id="profile">
        <div className="container">
          <SectionHeading
            eyebrow="Cooperative profile"
            title="S3M MPC at a glance"
          >
            The following profile figures were included in the cooperative
            information provided.
          </SectionHeading>
          <div className="profile-grid">
            <div>
              <span>Address</span>
              <strong>Brgy. Makina, Balete, Batangas</strong>
            </div>
            <div>
              <span>Established</span>
              <strong>February 4, 2004</strong>
            </div>
            <div>
              <span>Coverage area</span>
              <strong>CALABARZON</strong>
            </div>
            <div>
              <span>Type</span>
              <strong>Multi-Purpose Cooperative</strong>
            </div>
            <div>
              <span>CDA registration no.</span>
              <strong>9520-040002730</strong>
            </div>
            <div>
              <span>Members</span>
              <strong>2,146</strong>
            </div>
            <div>
              <span>Initial capital</span>
              <strong>₱30,000</strong>
            </div>
            <div>
              <span>Share capital</span>
              <strong>₱59,982,700</strong>
            </div>
            <div>
              <span>Total assets</span>
              <strong>₱96,257,521.22</strong>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
