import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';
import { knowledgeArticles, knowledgeCollections } from '@/data/site';

export const metadata = {
  title: 'المكتبة المعرفية',
  description: 'مكتبة معرفية تضم مقالات وملفات تحليلية وردوداً علمية مختصرة حول التاريخ المصري القديم وعلم المصريات.'
};

export default function KnowledgePage() {
  return (
    <>
      <PageHero
        eyebrow="المكتبة المعرفية"
        title="مواد معرفية وملفات تحليلية تخدم الباحث والقارئ"
        text="قسم منظم يضم مقالات معرفية، وملفات تحليلية، وردوداً علمية مختصرة تساعد على الوصول إلى المعلومة الموثقة بصورة واضحة ومتوازنة."
        primaryLabel="طلب مادة معرفية"
        secondaryLabel="العودة للرئيسية"
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="أنواع المحتوى"
            title="مكونات مكتبة معرفية قابلة للتوسع"
            text="تم تصميم هذه المساحة لتستوعب المقالات والملفات التحليلية والردود العلمية المختصرة، مع إمكانية إضافة مواد جديدة بصورة منتظمة."
          />
          <div className="card-grid card-grid-services">
            {knowledgeCollections.map((item) => (
              <article className="egypt-card info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            eyebrow="نماذج معرفية"
            title="عناوين مقترحة داخل المكتبة"
            text="بطاقات تعريفية بعناوين ونبذات مختصرة تمثل طبيعة المحتوى الذي يمكن عرضه داخل المكتبة المعرفية."
          />
          <div className="knowledge-grid">
            {knowledgeArticles.map((item) => (
              <article className="egypt-card glass-card knowledge-card" key={item.title}>
                <span className="article-badge">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
