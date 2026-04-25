import FaqList from '@/components/FaqList';
import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';
import { faqs } from '@/data/site';

export const metadata = {
  title: 'الأسئلة الشائعة',
  description: 'إجابات واضحة عن أبرز الأسئلة الخاصة بد. أحمد المعيقلي وخدماته ومجال عمله.'
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="الأسئلة الشائعة"
        title="أسئلة شائعة وإجابات واضحة"
        text="إجابات مباشرة تساعد الزائر على فهم مجالات العمل، وطبيعة التعاون، ووسائل التواصل الرسمية بصورة واضحة."
      />
      <section className="section">
        <div className="container narrow">
          <SectionTitle
            eyebrow="الأسئلة المتكررة"
            title="كل ما يحتاجه الزائر في مكان واحد"
            text="أسئلة مختارة بعناية لتقديم صورة واضحة عن الدكتور أحمد المعيقلي واهتماماته وخدماته وطرق التواصل معه."
          />
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  );
}
