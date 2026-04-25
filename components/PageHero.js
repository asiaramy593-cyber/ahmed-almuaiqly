import Link from 'next/link';

export default function PageHero({ eyebrow, title, text, primaryLabel = 'تواصل الآن', secondaryLabel = 'العودة للرئيسية' }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-box egypt-card glass-card">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{text}</p>
          <div className="hero-actions compact">
            <Link href="/contact" className="btn btn-primary">{primaryLabel}</Link>
            <Link href="/" className="btn btn-secondary">{secondaryLabel}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
