import Link from 'next/link';
import { heroHighlights, siteConfig } from '@/data/site';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-shell">
        <div className="hero-panel egypt-card glass-card">
          <div className="hero-copy hero-copy-floating">
            <h1 className="hero-name">
              <span>د. أحمد</span>
              <span>المعيقلي</span>
            </h1>
            <p className="hero-role">{siteConfig.shortRole}</p>
            <p className="hero-slogan">{siteConfig.slogan}</p>
            <p className="hero-text">{siteConfig.description}</p>

            <div className="hero-actions hero-actions-main hero-actions-single">
              <Link href="/about" className="btn btn-secondary hero-btn-secondary">
                استكشف السيرة العلمية
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-bottom-grid hero-bottom-grid-refined">
          <div className="hero-points hero-points-clean">
            {heroHighlights.map((item) => (
              <div className="hero-point" key={item.label}>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-stats egypt-card glass-card">
            <div className="hero-stat-item">
              <strong>أبحاث</strong>
              <span>في الآثار المصرية القديمة</span>
            </div>
            <div className="hero-stat-item">
              <strong>مقالات</strong>
              <span>تاريخية وتحليلات أثرية</span>
            </div>
            <div className="hero-stat-item">
              <strong>منصات</strong>
              <span>معرفية مهتمة بالحضارة المصرية</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
