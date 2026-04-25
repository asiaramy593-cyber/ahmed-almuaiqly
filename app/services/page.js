import PageHero from '@/components/PageHero';
import CardGrid from '@/components/CardGrid';
import SectionTitle from '@/components/SectionTitle';
import { collaborationSteps, services } from '@/data/site';

export const metadata = {
  title: 'الخدمات',
  description: 'الخدمات الأكاديمية والبحثية والتوعوية المتاحة للتعاون مع د. أحمد المعيقلي.'
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="الخدمات"
        title="مجالات التعاون والخدمات المتاحة"
        text="خدمات موجهة للأفراد والمؤسسات تشمل المساعدة في الأبحاث، والاستشارات المرتبطة بالتنقيب، وإعداد المعرفة المتخصصة في علم المصريات والتراث المصري."
      />
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="للباحثين والجهات"
            title="خدمات علمية ومعرفية واستشارية"
            text="تم تنظيم هذه الخدمات لتوضيح مجالات الدعم الممكنة في البحث العلمي، والتنقيب، والمحتوى المعرفي، والمحاضرات، والتعاون الثقافي والأكاديمي."
          />
          <CardGrid items={services} variant="services" />
          <div className="service-process egypt-card glass-card">
            <div className="service-process-copy">
              <span className="eyebrow">آلية العمل</span>
              <h3>خطوات واضحة لتنظيم الخدمة أو الطلب المؤسسي</h3>
              <p>تم إعداد هذا المسار لتسهيل التواصل مع الأفراد والجهات، وضمان وضوح نطاق الخدمة ووسيلة المتابعة منذ البداية.</p>
            </div>
            <ol className="service-steps">
              {collaborationSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
