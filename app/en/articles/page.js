import { englishResearchArticles } from '@/data/english';

export const metadata = { title: 'Research and Articles | Dr. Ahmed Al-Muaiqly', description: 'Selected research summaries in Egyptology and heritage preservation.' };

export default function EnglishArticlesPage() {
  return (
    <div className="en-page" dir="ltr">
      <section className="section">
        <div className="container">
          <div className="section-title section-title-center">
            <span className="eyebrow">Research</span>
            <h1>Research and Selected Articles</h1>
            <p>Selected research themes and concise summaries. For full papers or formal academic requests, please contact the office directly.</p>
          </div>
          <div className="articles-grid">
            {englishResearchArticles.map((item) => (
              <article className="egypt-card glass-card article-card" key={item.title}>
                <span className="article-badge">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <details className="article-details">
                  <summary className="btn btn-secondary article-btn">{item.actionLabel}</summary>
                  <div className="article-excerpt"><p>{item.excerpt}</p><p className="article-note">For the complete paper, please contact Dr. Ahmed Al-Muaiqly.</p></div>
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
