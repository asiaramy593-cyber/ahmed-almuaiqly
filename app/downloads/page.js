import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';
import { officialDownloads } from '@/data/site';

export const metadata = {
  title: 'ملخصات الأبحاث',
  description: 'ملخصات بحثية مختصرة قابلة للتحميل، مع توجيه للتواصل للحصول على النسخ الكاملة.'
};

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="ملخصات الأبحاث"
        title="تحميل ملخصات بحثية مختصرة"
        text="مواد موجزة تساعد الزائر على التعرف إلى محاور الأبحاث، وللحصول على النسخ الكاملة يُرجى التواصل مع الدكتور."
        primaryLabel="طلب النسخة الكاملة"
        secondaryLabel="العودة للرئيسية"
      />
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="مواد بحثية"
            title="ملخصات جاهزة للتحميل"
            text="اختر الملخص المناسب للاطلاع على فكرة البحث ومحاوره الأساسية، ويمكن طلب النسخة الكاملة عبر قنوات التواصل الرسمية."
          />
          <div className="knowledge-grid downloads-grid">
            {officialDownloads.map((item) => (
              <article className="egypt-card glass-card knowledge-card download-summary-card" key={item.title}>
                <span className="article-badge">{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className="article-note">للحصول على البحث الكامل، يُرجى التواصل مع الدكتور.</p>
                <a href={item.href} className="btn btn-secondary article-btn" download>تحميل الملخص</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
