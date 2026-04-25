import { englishContactCards, englishRequestTypes } from '@/data/english';
import { siteConfig } from '@/data/site';
import { Icon } from '@/components/Icons';

export const metadata = { title: 'Contact | Dr. Ahmed Al-Muaiqly', description: 'Official contact channels and office details.' };

export default function EnglishContactPage() {
  return (
    <div className="en-page" dir="ltr">
      <section className="section">
        <div className="container split-grid">
          <div>
            <div className="section-title">
              <span className="eyebrow">Contact</span>
              <h1>Official Contact Channels</h1>
              <p>Use the following channels for inquiries, research requests, lectures, consultation, or institutional collaboration.</p>
            </div>
            <div className="card-grid card-grid-contact-short">
              {englishContactCards.map((item) => (
                <article className="egypt-card glass-card contact-card" key={item.title}>
                  <span className="card-icon"><Icon name={item.icon} size={22} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="egypt-card glass-card contact-form-panel">
            <div className="contact-form-head"><span className="section-kicker">Message</span><h3>Send a direct request</h3><p>The form opens your email client with the message details ready to send.</p></div>
            <form className="contact-form-grid" action={`mailto:${siteConfig.email}`} method="post" encType="text/plain">
              <label><span>Name</span><input type="text" name="name" required /></label>
              <label><span>Email</span><input type="email" name="email" required /></label>
              <label><span>Request Type</span><select name="requestType">{englishRequestTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
              <label className="contact-form-full"><span>Message</span><textarea name="message" rows="7" required /></label>
              <div className="contact-form-actions"><button type="submit" className="btn btn-primary">Send Email</button><a className="btn btn-secondary" href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a></div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
