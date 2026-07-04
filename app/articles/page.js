import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';
import { researchArticles, researchThemes, siteConfig } from '@/data/site';

const pageUrl = `${siteConfig.siteUrl}/articles`;

export const metadata = {
  title: 'الأبحاث والمقالات',
  description: 'محاور بحثية ومقالات معرفية تعكس اهتمام د. أحمد المعيقلي بتاريخ مصر القديمة وحماية التراث.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'الأبحاث والمقالات | د. أحمد المعيقلي',
    description: 'محاور بحثية ومقالات معرفية تعكس اهتمام د. أحمد المعيقلي بتاريخ مصر القديمة وحماية التراث.',
    url: pageUrl,
  }
};

export default function ArticlesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${pageUrl}/#webpage`,
    url: pageUrl,
    name: 'الأبحاث والمقالات - د. أحمد المعيقلي',
    description: metadata.description,
    inLanguage: 'ar-EG',
    isPartOf: {
      '@id': `${siteConfig.siteUrl}/#website`
    },
    about: {
      '@type': 'Thing',
      name: 'Egyptology',
      sameAs: 'https://ar.wikipedia.org/wiki/علم_المصريات'
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: researchArticles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'ScholarlyArticle',
          headline: article.title,
          abstract: article.summary,
          author: {
            '@id': `${siteConfig.siteUrl}/#person`
          },
          keywords: article.category,
          inLanguage: 'ar-EG'
        }
      }))
    }
  };

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />

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
