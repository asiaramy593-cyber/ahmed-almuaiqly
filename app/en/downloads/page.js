import { englishDownloads } from '@/data/english';

export const metadata = { title: 'Research Summaries | Dr. Ahmed Al-Muaiqly', description: 'Download concise research summaries.' };

export default function EnglishDownloadsPage() {
  return (
    <div className="en-page" dir="ltr">
      <section className="section">
        <div className="container">
          <div className="section-title section-title-center"><span className="eyebrow">Research Summaries</span><h1>Download Concise Research Summaries</h1><p>Selected summaries are available for introductory review. For complete papers, please contact the office directly.</p></div>
          <div className="knowledge-grid">
            {englishDownloads.map((item) => <article className="egypt-card glass-card knowledge-card" key={item.title}><span className="article-badge">{item.type}</span><h3>{item.title}</h3><p>{item.description}</p><a href={item.href} className="btn btn-secondary article-btn" download>Download Summary</a></article>)}
          </div>
        </div>
      </section>
    </div>
  );
}
