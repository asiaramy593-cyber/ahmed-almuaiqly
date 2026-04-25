'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';
import { Icon } from '@/components/Icons';
import { navLinks, siteConfig } from '@/data/site';
import { englishNav, englishSite } from '@/data/english';

const arPrimary = navLinks.filter((link) => ['/', '/about', '/services', '/articles', '/contact'].includes(link.href));
const arMore = [
  { href: '/faq', label: 'الأسئلة الشائعة' },
  { href: '/request', label: 'طلب رسمي' },
  { href: '/downloads', label: 'ملخصات الأبحاث' },
  { href: '/knowledge', label: 'المكتبة المعرفية' },
  { href: '/collaboration', label: 'التعاون الرسمي' },
  { href: '/media', label: 'الظهور الإعلامي' }
];

function mapLanguagePath(pathname, isEnglish) {
  const clean = pathname || '/';
  if (isEnglish) {
    const withoutEn = clean.replace(/^\/en/, '') || '/';
    return withoutEn;
  }
  return clean === '/' ? '/en' : `/en${clean}`;
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const currentPath = useMemo(() => pathname || '/', [pathname]);
  const isEnglish = currentPath.startsWith('/en');
  const primaryLinks = isEnglish ? englishNav.primary : arPrimary;
  const moreLinks = isEnglish ? englishNav.more : arMore;
  const languageHref = mapLanguagePath(currentPath, isEnglish);
  const languageLabel = isEnglish ? 'العربية' : 'English';
  const brandHref = isEnglish ? '/en' : '/';
  const brandTitle = isEnglish ? englishSite.title : siteConfig.titleAr;
  const brandRole = isEnglish ? englishSite.headerRole : siteConfig.headerRole;
  const contactHref = isEnglish ? '/en/contact' : '/contact';
  const contactLabel = isEnglish ? 'Contact Now' : 'تواصل الآن';
  const moreLabel = isEnglish ? 'More' : 'المزيد';

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href={brandHref} className="brand" aria-label={brandTitle} onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <Icon name="wing" size={28} />
          </span>
          <span>
            <strong>{brandTitle}</strong>
            <small>{brandRole}</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>

        <nav className={`nav ${open ? 'is-open' : ''}`}>
          {primaryLinks.map((link) => {
            const active = currentPath === link.href;
            return (
              <Link key={link.href} href={link.href} className={active ? 'active' : ''} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            );
          })}

          <div className="nav-more">
            <button type="button" className="nav-more-button">
              {moreLabel}
              <span aria-hidden="true">▾</span>
            </button>
            <div className="nav-more-menu">
              {moreLinks.map((link) => {
                const active = currentPath === link.href;
                return (
                  <Link key={link.href} href={link.href} className={active ? 'active' : ''} onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        <Link href={languageHref} className="lang-switch" onClick={() => setOpen(false)}>
          {languageLabel}
        </Link>

        <Link href={contactHref} className="btn btn-primary header-cta" onClick={() => setOpen(false)}>
          {contactLabel}
        </Link>
      </div>
    </header>
  );
}
