export default function SectionTitle({ eyebrow, title, text, align = 'center' }) {
  return (
    <div className={`section-title section-title-${align}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      <span className="title-ornament" aria-hidden="true"></span>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
