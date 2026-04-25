import Link from 'next/link';
import { englishSite } from '@/data/english';

export const metadata = { title: 'Academic Profile | Dr. Ahmed Al-Muaiqly', description: englishSite.description };

export default function EnglishAboutPage() {
  return (
    <div className="en-page" dir="ltr">
      <section className="section">
        <div className="container split-grid">
          <div className="egypt-card glass-card en-panel">
            <span className="eyebrow">Academic Profile</span>
            <h1>Dr. Ahmed Al-Muaiqly</h1>
            <p>{englishSite.description}</p>
            <p>His work focuses on documented historical awareness, responsible public communication, and scholarly collaboration in Egyptology and heritage preservation.</p>
            <p>The website presents his academic profile, research interests, and formal channels for institutions, researchers, and cultural organizations.</p>
            <div className="hero-actions"><Link href="/en/request" className="btn btn-primary">Request Collaboration</Link><Link href="/en/contact" className="btn btn-secondary">Contact Office</Link></div>
          </div>
          <div className="egypt-card glass-card en-panel">
            <span className="eyebrow">Mission</span>
            <h2>Knowledge, Evidence, and Heritage</h2>
            <p>The mission is to provide documented historical knowledge, support a clear public understanding of ancient Egypt, and encourage responsible academic and cultural engagement.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
