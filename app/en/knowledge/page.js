import { englishKnowledgeCollections } from '@/data/english';
import { Icon } from '@/components/Icons';

export const metadata = { title: 'Knowledge Library | Dr. Ahmed Al-Muaiqly', description: 'Knowledge materials in Egyptology and heritage.' };

export default function EnglishKnowledgePage() {
  return (
    <div className="en-page" dir="ltr">
      <section className="section">
        <div className="container">
          <div className="section-title section-title-center"><span className="eyebrow">Knowledge Library</span><h1>Knowledge Materials and Reference Briefs</h1><p>A curated knowledge space presenting articles, analytical notes, and documented responses related to ancient Egypt and heritage preservation.</p></div>
          <div className="knowledge-grid">
            {englishKnowledgeCollections.map((item) => <article className="egypt-card glass-card knowledge-card" key={item.title}><span className="card-icon"><Icon name={item.icon} size={24} /></span><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
        </div>
      </section>
    </div>
  );
}
