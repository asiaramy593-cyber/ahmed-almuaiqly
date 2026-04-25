import { englishCollaborationTracks } from '@/data/english';
import { Icon } from '@/components/Icons';

export const metadata = { title: 'Collaboration | Dr. Ahmed Al-Muaiqly', description: 'Academic and cultural collaboration paths.' };

export default function EnglishCollaborationPage() {
  return (
    <div className="en-page" dir="ltr">
      <section className="section">
        <div className="container">
          <div className="section-title section-title-center"><span className="eyebrow">Collaboration</span><h1>Academic and Cultural Collaboration</h1><p>Formal collaboration paths for universities, research centers, museums, media entities, and cultural institutions.</p></div>
          <div className="card-grid card-grid-services">
            {englishCollaborationTracks.map((item) => <article className="egypt-card glass-card service-card" key={item.title}><span className="card-icon"><Icon name={item.icon} size={24} /></span><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
        </div>
      </section>
    </div>
  );
}
