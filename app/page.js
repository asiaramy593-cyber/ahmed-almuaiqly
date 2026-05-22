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
            title="د. أحمد المعيقلي: باحث في الآثار المصرية القديمة"
            text="موقع تعريفي وبحثي يقدّم مقالات تاريخية ودراسات وتحليلات أثرية حول علم المصريات والحضارة المصرية القديمة."
          />
          <CardGrid items={trustPillars} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split-grid split-grid-about">
          <div className="egypt-card glass-card visual-panel home-pharaoh-panel about-feature-panel">
            <div className="visual-panel-inner about-feature-inner">
              <span className="visual-chip">نبذة تعريفية</span>
              <h3>باحث آثار ومستشار تاريخي</h3>
              <p>
                تعريف موجز بشغف الدكتور أحمد المعيقلي بالآثار المصرية القديمة، وأبحاثه التاريخية، وإدارته لمنصات معرفية تهتم بالحضارة المصرية.
              </p>
              <div className="about-mini-grid">
                <div className="about-mini-card">
                  <strong>اهتمام أثري</strong>
                  <span>شغف ممتد بالمواقع والشواهد والرموز المرتبطة بمصر القديمة.</span>
                </div>
                <div className="about-mini-card">
                  <strong>أبحاث تاريخية</strong>
                  <span>مقالات ودراسات وتحليلات مبنية على منهج ومصادر واضحة.</span>
                </div>
                <div className="about-mini-card">
                  <strong>منصات معرفية</strong>
                  <span>إدارة ودعم محتوى رقمي متخصص في الحضارة المصرية القديمة.</span>
                </div>
                <div className="about-mini-card">
                  <strong>استشارة تاريخية</strong>
                  <span>دعم المحتوى الثقافي والإعلامي بمراجعة تاريخية وأثرية دقيقة.</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionTitle
              eyebrow="من هو الدكتور؟"
              title="السيرة الذاتية: شغف بالآثار وأبحاث في تاريخ مصر القديمة"
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
            eyebrow="المؤهلات والخبرات"
            title="مؤهلات وخبرات في الآثار وعلم المصريات"
            text="عرض منظم للخلفية الأكاديمية والخبرات البحثية والميدانية المرتبطة بالآثار المصرية القديمة، وتحليل الشواهد التاريخية، وإعداد المحتوى المتخصص."
          />
          <CardGrid items={credentials} variant="credentials" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            eyebrow="الرؤية والرسالة"
            title="رؤية أثرية تحفظ الوعي بالحضارة المصرية"
            text="رؤية ورسالة تركزان على تقديم الآثار المصرية القديمة ومقالات التاريخ بمنهج واضح وموثوق."
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
            title="مجالات العمل والاستشارات التاريخية"
            text="خدمات بحثية واستشارية موجهة للباحثين والمؤسسات والمنصات المهتمة بالآثار المصرية القديمة والمقالات التاريخية."
          />
          <CardGrid items={services} variant="services" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            eyebrow="الإنتاج العلمي"
            title="مقالات تاريخية ودراسات وتحليلات أثرية"
            text="مساحة مخصصة للإنتاج العلمي: مقالات تاريخية، كتب ودراسات، وتحليلات أثرية أو قراءات للاكتشافات والشواهد المنشورة."
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
            title="إنتاج علمي ومنصات معرفية وتعاون مؤسسي"
            text="بوابات إضافية تخدم الباحث والقارئ: مكتبة مقالات تاريخية، قناة للتعاون الرسمي، ومساحة لمحاور الظهور الإعلامي والندوات الخاصة بالآثار المصرية القديمة."
          />
          <div className="phase2-grid">
            <article className="egypt-card glass-card phase2-card">
              <div>
                <span className="eyebrow">المكتبة المعرفية</span>
                <h3>مقالات تاريخية ودراسات وتحليلات أثرية</h3>
                <p>{knowledgeCollections[0].text}</p>
              </div>
              <Link href="/knowledge" className="btn btn-secondary">استعراض المكتبة</Link>
            </article>
            <article className="egypt-card glass-card phase2-card">
              <div>
                <span className="eyebrow">التعاون الرسمي</span>
                <h3>قناة للجهات والمنصات المهتمة بالآثار</h3>
                <p>{collaborationTracks[0].text}</p>
              </div>
              <Link href="/collaboration" className="btn btn-secondary">إرسال طلب تعاون</Link>
            </article>
            <article className="egypt-card glass-card phase2-card">
              <div>
                <span className="eyebrow">الظهور الإعلامي</span>
                <h3>محاور أثرية للقاءات والندوات</h3>
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
