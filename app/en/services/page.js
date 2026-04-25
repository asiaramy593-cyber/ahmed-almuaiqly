import { englishServices } from '@/data/english';
import { Icon } from '@/components/Icons';

export const metadata = { title: 'Services | Dr. Ahmed Al-Muaiqly', description: 'Academic, research, and heritage-related services.' };

export default function EnglishServicesPage() {
  return (
    <div className="en-page" dir="ltr">
      <section className="section">
        <div className="container">
          <div className="section-title section-title-center">
            <span className="eyebrow">Services</span>
            <h1>Academic and Heritage Services</h1>
            <p>Professional services for researchers, institutions, cultural entities, and media platforms seeking documented Egyptology expertise.</p>
          </div>
          <div className="card-grid card-grid-services">
            {englishServices.map((item) => (
              <article className="egypt-card glass-card service-card" key={item.title}>
                <span className="card-icon"><Icon name={item.icon} size={24} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
