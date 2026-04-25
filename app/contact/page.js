import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';
import { Icon } from '@/components/Icons';
import { contactCards, requestTypes, siteConfig } from '@/data/site';

export const metadata = {
  title: 'تواصل معنا',
  description: 'بيانات التواصل الرسمية مع د. أحمد المعيقلي: الهاتف، البريد الإلكتروني، فيسبوك، عنوان المكتب، ومواعيد العمل.'
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="التواصل"
        title="وسائل التواصل والمكتب الرسمي"
        text="للتواصل المباشر بخصوص الاستفسارات، وطلبات التعاون، والمساعدة البحثية، والاستشارات المتعلقة بعلم المصريات والتراث."
      />
      <section className="section">
        <div className="container split-grid split-grid-contact-page">
          <div>
            <SectionTitle
              eyebrow="بيانات الاتصال"
              title="قنوات تواصل واضحة ومباشرة"
              text="يمكن استخدام الأزرار التالية للوصول السريع إلى واتساب، أو البريد الإلكتروني، أو صفحة فيسبوك، أو مقر المكتب على الخريطة."
              align="right"
            />
            <div className="card-grid card-grid-contact-full">
              {contactCards.map((item) => (
                <article className="egypt-card glass-card mini-contact-card" key={item.title}>
                  <span className="card-icon"><Icon name={item.icon} size={24} /></span>
                  <h3>{item.title}</h3>
                  <p className={item.title.includes('هاتف') ? 'phone-ltr' : ''}>{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="contact-page-stack">
            <div className="egypt-card glass-card contact-panel">
              <h3>روابط مباشرة</h3>
              <p>اختر وسيلة التواصل المناسبة، وسيتم فتحها مباشرة من أي جهاز بسهولة وسرعة.</p>
              <div className="social-links social-links-column">
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer">
                  <Icon name="phone" size={18} />
                  فتح واتساب
                </a>
                <a href={`mailto:${siteConfig.email}`}>
                  <Icon name="email" size={18} />
                  إرسال بريد إلكتروني
                </a>
                <a href={siteConfig.facebook} target="_blank" rel="noreferrer">
                  <Icon name="facebook" size={18} />
                  فتح صفحة فيسبوك
                </a>
                <a href={siteConfig.mapLink} target="_blank" rel="noreferrer">
                  <Icon name="location" size={18} />
                  عرض مقر المكتب على الخريطة
                </a>
              </div>
              <div className="contact-note">
                <strong>العنوان:</strong>
                <p>{siteConfig.addressLines.join(' - ')}</p>
                <strong>الهاتف:</strong>
                <p className="phone-ltr">{siteConfig.phoneDisplay}</p>
                <strong>مواعيد العمل:</strong>
                <p>{siteConfig.officeHours}</p>
              </div>
            </div>

            <div className="egypt-card glass-card contact-form-panel">
              <div className="contact-form-head">
                <span className="section-kicker">نموذج تواصل</span>
                <h3>أرسل استفسارك بصورة منظمة</h3>
                <p>يمكن استخدام هذا النموذج لتجهيز الرسالة قبل إرسالها عبر البريد الإلكتروني أو واتساب.</p>
              </div>

              <form
                className="contact-form-grid"
                action={`mailto:${siteConfig.email}`}
                method="post"
                encType="text/plain"
              >
                <label>
                  <span>الاسم</span>
                  <input type="text" name="name" placeholder="الاسم الكامل" required />
                </label>

                <label>
                  <span>البريد الإلكتروني</span>
                  <input type="email" name="email" placeholder="name@example.com" required />
                </label>

                <label>
                  <span>نوع الطلب</span>
                  <select name="requestType" defaultValue={requestTypes[0]}>
                    {requestTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </label>

                <label className="contact-form-full">
                  <span>الرسالة</span>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="اكتب تفاصيل طلبك أو استفسارك هنا"
                    required
                  />
                </label>

                <div className="contact-form-actions">
                  <button type="submit" className="btn btn-primary">إرسال عبر البريد</button>
                  <a
                    className="btn btn-secondary"
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    فتح واتساب
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
