import { Icon } from '@/components/Icons';

export default function CardGrid({ items, variant = 'default' }) {
  return (
    <div className={`card-grid card-grid-${variant}`}>
      {items.map((item) => (
        <article className="egypt-card info-card" key={item.title || item.degree}>
          {item.icon ? (
            <span className="card-icon">
              <Icon name={item.icon} size={28} />
            </span>
          ) : null}
          <h3>{item.title || item.degree}</h3>
          {item.institution ? <h4>{item.institution}</h4> : null}
          <p>{item.text || item.details}</p>
        </article>
      ))}
    </div>
  );
}
