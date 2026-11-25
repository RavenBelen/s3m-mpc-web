import { useState } from 'react'
import PageHero from '../components/PageHero'

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero title="Contact Us">Have a question about membership, services, or cooperative programs? Send a message or visit the cooperative.</PageHero>
      <section className="section container contact-layout">
        <div className="contact-details"><span className="eyebrow">Get in touch</span><h2>We’re ready to listen.</h2><p>Replace the sample details below with the cooperative’s official contact information.</p><div><span>Email</span><a href="mailto:hello@example.org">hello@example.org</a></div><div><span>Office</span><p>Your cooperative address goes here</p></div><div><span>Office hours</span><p>Add regular office hours here</p></div></div>
        <form className="contact-form" onSubmit={handleSubmit}><h3>Send us a message</h3><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" required placeholder="Full name"/><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com"/><label htmlFor="contact-topic">What can we help with?</label><select id="contact-topic" name="topic"><option>Choose a topic</option><option>Membership</option><option>Services</option><option>Programs</option><option>General question</option></select><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" required placeholder="Write your message..." rows="5"></textarea><button className="button button-yellow" type="submit">Submit message <span>→</span></button>{submitted && <p className="form-note" role="status">Thank you. This sample form needs a connected email service or backend to deliver messages.</p>}<small>This form is a front-end demo; it does not send or store messages yet.</small></form>
      </section>
    </>
  )
}

export default ContactPage
