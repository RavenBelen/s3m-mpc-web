import { Link } from 'react-router'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import InfoCards from '../components/InfoCards'

function MembershipPage() {
  return (
    <>
      <PageHero title="Membership">Become part of a cooperative where members have a voice, share responsibility, and help guide the future.</PageHero>
      <section className="section container" id="benefits"><SectionHeading eyebrow="Why join S3M MPC" title="A place to belong and contribute.">Add confirmed membership qualifications, share requirements, and member benefits before publishing.</SectionHeading><InfoCards items={[
        { label: 'VOICE', title: 'Take part', description: 'Members can participate in meetings and help shape cooperative priorities.', icon: '◎' },
        { label: 'SUPPORT', title: 'Access services', description: 'Explore services, programs, and opportunities available to eligible members.', icon: '＋' },
        { label: 'COMMUNITY', title: 'Grow together', description: 'Connect with people working toward shared goals and community progress.', icon: '✦' },
      ]} /></section>
      <section className="section soft-section" id="how-to-join"><div className="container"><SectionHeading eyebrow="How to join" title="Your path to membership.">The cooperative can add official steps, forms, fees, and approval timelines here.</SectionHeading><div className="steps-list"><article><span>01</span><div><h3>Ask about membership</h3><p>Contact the cooperative to confirm eligibility and current requirements.</p></div></article><article><span>02</span><div><h3>Submit your application</h3><p>Complete the membership application and provide the requested documents.</p></div></article><article><span>03</span><div><h3>Attend orientation</h3><p>Learn about member rights, responsibilities, and ways to participate.</p></div></article></div><Link className="button button-dark" to="/contact">Ask about joining <span>→</span></Link></div></section>
      <section className="section container" id="faq"><SectionHeading eyebrow="Common questions" title="Membership FAQ" /><div className="faq-list"><details><summary>Who can apply for membership?</summary><p>Add the cooperative’s current eligibility requirements here.</p></details><details><summary>What documents do I need?</summary><p>Contact S3M MPC for the current application checklist.</p></details><details><summary>How can I learn about member fees or shares?</summary><p>Ask the cooperative for its current fee and share information.</p></details></div></section>
    </>
  )
}

export default MembershipPage
