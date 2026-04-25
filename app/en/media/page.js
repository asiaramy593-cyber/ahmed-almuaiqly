import { englishMediaHighlights } from '@/data/english';

export const metadata = { title: 'Media Presence | Dr. Ahmed Al-Muaiqly', description: 'Media, seminars, and public academic presence.' };

export default function EnglishMediaPage() {
  return (
    <div className="en-page" dir="ltr">
      <section className="section">
        <div className="container">
          <div className="section-title section-title-center"><span className="eyebrow">Media</span><h1>Media and Academic Presence</h1><p>Topics and participation formats suitable for lectures, interviews, seminars, and cultural programs.</p></div>
          <div className="articles-grid">
            {englishMediaHighlights.map((item) => <article className="egypt-card glass-card article-card" key={item.title}><span className="article-badge">{item.category}</span><h3>{item.title}</h3><p>{item.summary}</p></article>)}
          </div>
        </div>
      </section>
    </div>
  );
}
