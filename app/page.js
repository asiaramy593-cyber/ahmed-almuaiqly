import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import CardGrid from '@/components/CardGrid';
import FaqList from '@/components/FaqList';
import { Icon } from '@/components/Icons';
import {
  biography,
  collaborationTracks,
  contactCards,
  credentials,
  faqs,
  knowledgeCollections,
  mediaHighlights,
  researchThemes,
  services,
  siteConfig,
  trustPillars,
  visionMission
} from '@/data/site';

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="ملامح التخصص"
            title="رؤية علمية موثقة في خدمة التاريخ المصري"
            text="محتوى بحثي يوازن بين المرجع الأكاديمي الصارم وحسن العرض، ويقرب تاريخ مصر القديمة إلى القارئ بلغة واضحة ورصينة."
          />
          <CardGrid items={trustPillars} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split-grid split-grid-about">
          <div className="egypt-card glass-card visual-panel home-pharaoh-panel about-feature-panel">
            <div className="visual-panel-inner about-feature-inner">
              <span className="visual-chip">نبذة تعريفية</span>
              <h3>ملامح خبرة أكاديمية ممتدة</h3>
              <p>
                تعريف موجز بالسيرة العلمية والاهتمامات البحثية ومسارات التعاون الأكاديمي والثقافي داخل مصر وخارجها.
              </p>
              <div className="about-mini-grid">
                <div className="about-mini-card">
                  <strong>خبرة أكاديمية</strong>
                  <span>دراسة متخصصة للحضارة المصرية القديمة بين البحث الأكاديمي والعمل الميداني.</span>
                </div>
                <div className="about-mini-card">
                  <strong>طرح موثق</strong>
                  <span>قراءة تاريخية تستند إلى الأدلة والنقوش والمراجع العلمية المعتمدة.</span>
                </div>
                <div className="about-mini-card">
                  <strong>تعاون ثقافي</strong>
                  <span>مسارات تعاون مع الباحثين والمؤسسات المعنية بالتراث داخل مصر وخارجها.</span>
                </div>
                <div className="about-mini-card">
                  <strong>وعي تاريخي</strong>
                  <span>تقديم المعرفة بلغة واضحة تحفظ العمق العلمي وتخدم القارئ العام والمتخصص.</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionTitle
              eyebrow="من هو الدكتور؟"
              title="سيرة بحثية تستند إلى الدراسة والعمل الميداني"
              text={biography.intro}
              align="right"
            />
            <div className="text-flow egypt-card glass-card about-card">
              {biography.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="hero-actions compact">
                <Link href="/about" className="btn btn-primary">قراءة السيرة الكاملة</Link>
                <Link href="/contact" className="btn btn-secondary">طلب تواصل رسمي</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="الشهادات الدولية"
            title="مسار أكاديمي يرسخ الثقة والمصداقية"
            text="عرض منظم للمؤهلات والشهادات والزمالات التي تشكل الخلفية العلمية للدكتور أحمد المعيقلي في علم المصريات وحفظ التراث."
          />
          <CardGrid items={credentials} variant="credentials" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            eyebrow="الرؤية والرسالة"
            title="رؤية علمية تصون التاريخ والهوية"
            text="رؤية فكرية ورسالة معرفية تعبّران عن موقف علمي مسؤول تجاه التاريخ المصري وحضارته الممتدة."
          />
          <div className="card-grid card-grid-mission">
            {visionMission.map((item) => (
              <article className="egypt-card glass-card mission-card" key={item.title}>
                <span className="card-icon"><Icon name={item.icon} size={30} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="الخدمات"
            title="مجالات التعاون والخدمات"
            text="خدمات معرفية وبحثية واستشارية موجّهة للباحثين والطلاب والمؤسسات والمهتمين بعلم المصريات والتراث التاريخي."
          />
          <CardGrid items={services} variant="services" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            eyebrow="الأبحاث والمقالات"
            title="محاور بحثية تعكس عمق التخصص والاهتمام"
            text="مجالات بحثية وفكرية يمكن من خلالها تقديم مقالات، رؤى، ومحتوى موثق يخدم القارئ والباحث والمهتم بتاريخ مصر القديمة."
          />
          <CardGrid items={researchThemes} variant="topics" />
          <div className="center-actions">
            <Link href="/articles" className="btn btn-secondary">عرض الصفحة الكاملة</Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            eyebrow="مزايا إضافية"
            title="مسارات معرفية وتعاون مؤسسي وحضور إعلامي"
            text="ثلاث بوابات إضافية تعزز قيمة الموقع: مكتبة معرفية للمهتمين، وصفحة مخصصة لطلبات التعاون الرسمي، ومساحة تعرض محاور الظهور الإعلامي والندوات العلمية."
          />
          <div className="phase2-grid">
            <article className="egypt-card glass-card phase2-card">
              <div>
                <span className="eyebrow">المكتبة المعرفية</span>
                <h3>مواد معرفية ومقالات وملفات تحليلية</h3>
                <p>{knowledgeCollections[0].text}</p>
              </div>
              <Link href="/knowledge" className="btn btn-secondary">استعراض المكتبة</Link>
            </article>
            <article className="egypt-card glass-card phase2-card">
              <div>
                <span className="eyebrow">التعاون الرسمي</span>
                <h3>قناة مخصصة للجهات والمؤسسات</h3>
                <p>{collaborationTracks[0].text}</p>
              </div>
              <Link href="/collaboration" className="btn btn-secondary">إرسال طلب تعاون</Link>
            </article>
            <article className="egypt-card glass-card phase2-card">
              <div>
                <span className="eyebrow">الظهور الإعلامي</span>
                <h3>محاور قابلة للعرض في اللقاءات والندوات</h3>
                <p>{mediaHighlights[0].summary}</p>
              </div>
              <Link href="/media" className="btn btn-secondary">استعراض المحاور</Link>
            </article>
          </div>
        </div>
      </section>


      <section className="section">
        <div className="container split-grid split-grid-contact">
          <div>
            <SectionTitle
              eyebrow="الأسئلة الشائعة"
              title="إجابات مختصرة تضع الصورة كاملة أمام الزائر"
              text="قسم مختصر يساعد الزائر على فهم طبيعة العمل والخدمات ووسائل التواصل بسهولة واطمئنان."
              align="right"
            />
            <FaqList items={faqs.slice(0, 4)} />
          </div>
          <div>
            <SectionTitle
              eyebrow="تواصل سريع"
              title="قنوات التواصل والبيانات الرسمية"
              text="كل وسائل التواصل الأساسية معروضة بصورة منظمة، مع روابط مباشرة للواتساب والبريد الإلكتروني والخريطة."
              align="right"
            />
            <div className="card-grid card-grid-contact-short">
              {contactCards.map((item) => (
                <article className="egypt-card glass-card mini-contact-card" key={item.title}>
                  <span className="card-icon"><Icon name={item.icon} size={24} /></span>
                  <h3>{item.title}</h3>
                  <p className={item.title.includes('هاتف') ? 'phone-ltr' : ''}>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="cta-box egypt-card glass-card cta-box-home">
              <div>
                <span className="eyebrow">للتواصل المباشر</span>
                <h3>قنوات تواصل مباشرة وواضحة</h3>
                <p>وسائل رسمية مناسبة للاستفسارات وطلبات التعاون وتنسيق اللقاءات الرسمية.</p>
              </div>
              <div className="cta-actions">
                <a href={`https://wa.me/${siteConfig.whatsapp}`} className="btn btn-primary" target="_blank" rel="noreferrer">واتساب مباشر</a>
                <Link href="/contact" className="btn btn-secondary">صفحة التواصل</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
