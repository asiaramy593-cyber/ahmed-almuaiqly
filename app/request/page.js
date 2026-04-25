import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';
import { requestTypes, siteConfig } from '@/data/site';

export const metadata = {
  title: 'طلب رسمي',
  description: 'صفحة مخصصة لطلبات التعاون الرسمي والاستشارات والمحاضرات وطلبات البحث.'
};

export default function RequestPage() {
  return (
    <>
      <PageHero
        eyebrow="طلب رسمي"
        title="قناة مخصصة للطلبات المؤسسية والبحثية"
        text="استخدم هذه الصفحة لتجهيز طلب واضح بخصوص التعاون، المحاضرات، الاستشارات، أو الحصول على نسخة بحثية كاملة."
        primaryLabel="تواصل الآن"
        secondaryLabel="العودة للرئيسية"
      />

      <section className="section">
        <div className="container split-grid split-grid-contact-page">
          <div>
            <SectionTitle
              eyebrow="تنظيم الطلب"
              title="تفاصيل واضحة لتواصل أسرع"
              text="يساعد النموذج التالي على تحديد طبيعة الطلب من البداية، ثم إرساله إلى البريد الرسمي أو استكماله عبر واتساب."
              align="right"
            />
            <div className="egypt-card glass-card contact-note">
              <strong>ملاحظة</strong>
              <p>للحصول على نسخة كاملة من أي بحث أو لترتيب تعاون رسمي، يُفضل توضيح الجهة، نوع الطلب، والموعد المقترح إن وجد.</p>
            </div>
          </div>

          <div className="egypt-card glass-card contact-form-panel">
            <div className="contact-form-head">
              <span className="section-kicker">نموذج طلب</span>
              <h3>أرسل طلبك بصورة منظمة</h3>
              <p>النموذج يفتح برنامج البريد الإلكتروني لديك لإرسال الطلب إلى البريد الرسمي.</p>
            </div>
            <form className="contact-form-grid" action={`mailto:${siteConfig.email}`} method="post" encType="text/plain">
              <label><span>الاسم</span><input type="text" name="name" placeholder="اكتب الاسم" required /></label>
              <label><span>البريد الإلكتروني</span><input type="email" name="email" placeholder="name@example.com" required /></label>
              <label><span>نوع الطلب</span><select name="requestType" defaultValue={requestTypes[0]}>{requestTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
              <label><span>الجهة / المؤسسة</span><input type="text" name="organization" placeholder="اختياري" /></label>
              <label className="contact-form-full"><span>تفاصيل الطلب</span><textarea name="message" rows="7" placeholder="اكتب ملخص الطلب أو نوع التعاون المطلوب" required /></label>
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
