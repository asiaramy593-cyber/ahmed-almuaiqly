import { englishRequestTypes } from '@/data/english';
import { siteConfig } from '@/data/site';

export const metadata = { title: 'Official Request | Dr. Ahmed Al-Muaiqly', description: 'Formal academic and institutional request channel.' };

export default function EnglishRequestPage() {
  return (
    <div className="en-page" dir="ltr">
      <section className="section">
        <div className="container split-grid">
          <div className="egypt-card glass-card en-panel"><span className="eyebrow">Official Request</span><h1>Institutional and Research Requests</h1><p>A dedicated channel for universities, institutions, media entities, and researchers seeking lectures, consultation, review, or heritage-related collaboration.</p></div>
          <div className="egypt-card glass-card contact-form-panel">
            <div className="contact-form-head"><span className="section-kicker">Request Form</span><h3>Send your request</h3><p>The form opens your email client to send the message to the official address.</p></div>
            <form className="contact-form-grid" action={`mailto:${siteConfig.email}`} method="post" encType="text/plain">
              <label><span>Name</span><input type="text" name="name" required /></label>
              <label><span>Email</span><input type="email" name="email" required /></label>
              <label><span>Request Type</span><select name="requestType">{englishRequestTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
              <label><span>Organization</span><input type="text" name="organization" /></label>
              <label className="contact-form-full"><span>Details</span><textarea name="message" rows="7" required /></label>
              <div className="contact-form-actions"><button type="submit" className="btn btn-primary">Send by Email</button><a className="btn btn-secondary" href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a></div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
