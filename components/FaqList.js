export default function FaqList({ items }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details className="egypt-card faq-item" key={item.q}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
