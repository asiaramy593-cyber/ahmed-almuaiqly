import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';
import { researchArticles, researchThemes } from '@/data/site';

export const metadata = {
  title: 'الأبحاث والمقالات',
  description: 'محاور بحثية ومقالات معرفية تعكس اهتمام د. أحمد المعيقلي بتاريخ مصر القديمة وحماية التراث.'
};

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        eyebrow="الأبحاث والمقالات"
        title="أبحاث ومقالات مختارة"
        text="صفحة مخصصة لعرض الموضوعات البحثية والمقالات العلمية المرتبطة بتاريخ مصر القديمة، والنقوش، والهوية الحضارية، وحفظ التراث."
        primaryLabel="تواصل الآن"
        secondaryLabel="العودة للرئيسية"
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="مواد منشورة"
            title="نماذج من الأبحاث والمقالات"
            text="يمكن استعراض ملخص كل بحث من خلال البطاقة، وللحصول على النسخة الكاملة يُرجى التواصل مباشرة مع الدكتور."
          />
          <div className="articles-grid">
            {researchArticles.map((item) => (
              <article className="egypt-card info-card article-card" key={item.title}>
                <span className="article-badge">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <details className="article-details">
                  <summary className="btn btn-secondary article-btn">{item.actionLabel}</summary>
                  <div className="article-excerpt">
                    <p>{item.excerpt}</p>
                    <p className="article-note">للحصول على البحث الكامل، يُرجى التواصل مع الدكتور.</p>
                  </div>
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            eyebrow="مجالات بحثية"
            title="محاور التخصص والاهتمام"
            text="القضايا العلمية التي تشكل الإطار العام للأبحاث والكتابات المعروضة في الموقع."
          />
          <div className="topics-list">
            {researchThemes.map((item) => (
              <article className="egypt-card topic-row" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
