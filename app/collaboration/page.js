import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';
import { collaborationSteps, collaborationTracks, requestTypes, siteConfig } from '@/data/site';

export const metadata = {
  title: 'التعاون الرسمي',
  description: 'صفحة مخصصة لطلبات التعاون الرسمي مع د. أحمد المعيقلي للجامعات والمؤسسات والجهات الثقافية والإعلامية.'
};

export default function CollaborationPage() {
  return (
    <>
      <PageHero
        eyebrow="التعاون الرسمي"
        title="مسار مخصص للجامعات والمؤسسات والجهات الثقافية"
        text="هذه الصفحة موجهة لطلبات التعاون الرسمية، بما يشمل المحاضرات، والندوات، والمراجعات العلمية، والمشروعات الثقافية والإعلامية المرتبطة بالتاريخ المصري القديم."
        primaryLabel="التواصل الرسمي"
        secondaryLabel="العودة للرئيسية"
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="مجالات التعاون"
            title="مسارات مناسبة للأفراد والجهات والمؤسسات"
            text="مجالات منظمة توضح نوعية التعاون الممكن، وتساعد على توجيه الطلب إلى المسار المناسب منذ البداية."
          />
          <div className="card-grid card-grid-services">
            {collaborationTracks.map((item) => (
              <article className="egypt-card info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split-grid split-grid-contact-page">
          <div className="egypt-card glass-card collaboration-flow">
            <SectionTitle
              eyebrow="خطوات الطلب"
              title="تنظيم واضح منذ التواصل الأول"
              text="تم إعداد الخطوات التالية لتسهيل التنسيق وضمان وضوح نوع الخدمة أو الفعالية المطلوبة قبل بدء المتابعة التنفيذية."
              align="right"
            />
            <ol className="service-steps">
              {collaborationSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="egypt-card glass-card contact-form-panel">
            <div className="contact-form-head">
              <span className="section-kicker">طلب تعاون رسمي</span>
              <h3>أرسل تفاصيل الجهة أو المبادرة</h3>
              <p>يمكن استخدام النموذج التالي لتجهيز رسالة التعاون قبل إرسالها عبر البريد الإلكتروني الرسمي أو واتساب.</p>
            </div>

            <form className="contact-form-grid" action={`mailto:${siteConfig.email}`} method="post" encType="text/plain">
              <label>
                <span>اسم الجهة</span>
                <input type="text" name="organization" placeholder="اسم الجامعة أو المؤسسة" required />
              </label>

              <label>
                <span>البريد الرسمي</span>
                <input type="email" name="email" placeholder="official@example.com" required />
              </label>

              <label>
                <span>نوع الطلب</span>
                <select name="requestType" defaultValue={requestTypes[2]}>
                  {requestTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>

              <label className="contact-form-full">
                <span>تفاصيل الطلب</span>
                <textarea name="message" rows="6" placeholder="أدخل موجزًا عن نوع التعاون، والموعد المقترح، وطبيعة الفعالية أو المشروع" required />
              </label>

              <div className="contact-form-actions">
                <button type="submit" className="btn btn-primary">إرسال عبر البريد</button>
                <a className="btn btn-secondary" href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer">واتساب مباشر</a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
