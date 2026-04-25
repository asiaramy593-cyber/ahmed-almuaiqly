import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';
import { mediaHighlights } from '@/data/site';

export const metadata = {
  title: 'الظهور الإعلامي',
  description: 'محاور الظهور الإعلامي والندوات واللقاءات العلمية المرتبطة بتاريخ مصر القديمة والتراث المصري.'
};

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="الظهور الإعلامي"
        title="محاور قابلة للعرض في اللقاءات والندوات والفعاليات"
        text="عرض منظم لأبرز المحاور التي يمكن تقديمها في اللقاءات العلمية والندوات والبرامج الثقافية والإعلامية المعنية بالحضارة المصرية القديمة."
        primaryLabel="تنسيق ظهور إعلامي"
        secondaryLabel="العودة للرئيسية"
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="محاور العرض"
            title="موضوعات ملائمة للبرامج الثقافية والندوات المتخصصة"
            text="توضح هذه الصفحة أمثلة للموضوعات التي يمكن تناولها في اللقاءات العامة أو المتخصصة، مع صياغة معرفية مناسبة للجمهور والجهات المنظمة."
          />
          <div className="knowledge-grid">
            {mediaHighlights.map((item) => (
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
