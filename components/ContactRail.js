import { Icon } from '@/components/Icons';
import { siteConfig } from '@/data/site';

export default function ContactRail() {
  return (
    <div className="floating-contacts" aria-label="وسائل تواصل سريعة">
      <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer" aria-label="واتساب">
        <Icon name="phone" size={18} />
      </a>
      <a href={`mailto:${siteConfig.email}`} aria-label="البريد الإلكتروني">
        <Icon name="email" size={18} />
      </a>
      <a href={siteConfig.facebook} target="_blank" rel="noreferrer" aria-label="فيسبوك">
        <Icon name="facebook" size={18} />
      </a>
      <a href="#top" aria-label="العودة للأعلى">
        <Icon name="arrow" size={18} />
      </a>
    </div>
  );
}
