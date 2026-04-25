'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/Icons';
import { navLinks, siteConfig } from '@/data/site';
import { englishNav, englishSite } from '@/data/english';

const arExtendedLinks = [
  ...navLinks,
  { href: '/knowledge', label: 'المكتبة المعرفية' },
  { href: '/collaboration', label: 'التعاون الرسمي' },
  { href: '/media', label: 'الظهور الإعلامي' },
  { href: '/en', label: 'English' }
];

export default function Footer() {
  const pathname = usePathname() || '/';
  const isEnglish = pathname.startsWith('/en');
  const links = isEnglish ? [...englishNav.primary, ...englishNav.more, { href: '/', label: 'العربية' }] : arExtendedLinks;
  const title = isEnglish ? englishSite.title : siteConfig.titleAr;
  const description = isEnglish ? englishSite.description : siteConfig.description;

  return (
    <footer className="site-footer" dir={isEnglish ? 'ltr' : 'rtl'}>
      <div className="container footer-top">
        <div className="footer-brand egypt-card glass-card">
          <span className="brand-mark large-mark">
            <Icon name="wing" size={34} />
          </span>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>

        <div className="footer-grid">
          <div>
            <h4>{isEnglish ? 'Site Links' : 'روابط الموقع'}</h4>
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{isEnglish ? 'Contact Information' : 'معلومات التواصل'}</h4>
            <ul>
              <li><span className="phone-ltr">{siteConfig.phoneDisplay}</span></li>
              <li>{siteConfig.email}</li>
              <li>{isEnglish ? 'North 90 Street, Fifth Settlement, New Cairo' : siteConfig.addressLines[1]}</li>
            </ul>
          </div>
          <div>
            <h4>{isEnglish ? 'Direct Links' : 'روابط مباشرة'}</h4>
            <div className="social-links">
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer">
                <Icon name="phone" size={18} />
                {isEnglish ? 'WhatsApp' : 'واتساب'}
              </a>
              <a href={siteConfig.facebook} target="_blank" rel="noreferrer">
                <Icon name="facebook" size={18} />
                {isEnglish ? 'Facebook' : 'فيسبوك'}
              </a>
              <a href={siteConfig.mapLink} target="_blank" rel="noreferrer">
                <Icon name="location" size={18} />
                {isEnglish ? 'Map Location' : 'الموقع على الخريطة'}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container copyright">
        <span>{isEnglish ? `© 2026 All rights reserved - ${title}` : `© 2026 جميع الحقوق محفوظة - ${title}`}</span>
        <span className="footer-signature">Designed & Developed by <strong>Ramy Elhawary</strong></span>
      </div>
    </footer>
  );
}
