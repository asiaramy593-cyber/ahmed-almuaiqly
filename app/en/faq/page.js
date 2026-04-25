import { englishFaqs } from '@/data/english';

export const metadata = { title: 'FAQ | Dr. Ahmed Al-Muaiqly', description: 'Frequently asked questions and clear answers.' };

export default function EnglishFaqPage() {
  return (
    <div className="en-page" dir="ltr">
      <section className="section">
        <div className="container narrow">
          <div className="section-title section-title-center">
            <span className="eyebrow">FAQ</span>
            <h1>Frequently Asked Questions</h1>
            <p>Clear answers about the academic profile, services, research summaries, and official communication channels.</p>
          </div>
          <div className="faq-list">
            {englishFaqs.map((item) => (
              <details className="faq-item egypt-card glass-card" key={item.q}>
                <summary>{item.q}<span>+</span></summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
