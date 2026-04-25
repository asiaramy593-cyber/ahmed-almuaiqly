import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';
import CardGrid from '@/components/CardGrid';
import { biography, credentials, siteConfig, visionMission } from '@/data/site';

export const metadata = {
  title: 'من هو د. أحمد المعيقلي',
  description: 'نبذة تعريفية كاملة عن د. أحمد المعيقلي ورحلته الأكاديمية ورؤيته العلمية في علم المصريات.'
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="السيرة التعريفية"
        title="من هو د. أحمد المعيقلي؟"
        text="صفحة تعريفية تعرض الخلفية العلمية والرسالة الفكرية والمسار الأكاديمي الذي ينطلق منه هذا الحضور الرسمي."
      />

      <section className="section">
        <div className="container split-grid split-grid-about-page">
          <div className="egypt-card glass-card text-page large-text-card">
            <SectionTitle eyebrow="نبذة موسعة" title={siteConfig.titleAr} text={biography.intro} align="right" />
            {biography.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="stacked-cards">
            {visionMission.map((item) => (
              <article className="egypt-card glass-card aside-card" key={item.title}>
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
            eyebrow="الشهادات والدراسات"
            title="مسار أكاديمي دولي متماسك"
            text="رحلة علمية امتدت بين مؤسسات أكاديمية ومراكز متخصصة في أوروبا ومصر، وأسهمت في بناء خبرة بحثية راسخة في علم المصريات وحفظ التراث."
          />
          <CardGrid items={credentials} variant="credentials" />
        </div>
      </section>
    </>
  );
}
