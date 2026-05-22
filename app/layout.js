import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactRail from '@/components/ContactRail';
import { siteConfig } from '@/data/site';

const seoTitle = 'د. أحمد المعيقلي | باحث في الآثار المصرية القديمة ومستشار تاريخي';
const seoDescription =
  'الموقع الرسمي للدكتور أحمد المعيقلي، باحث وعالم في الآثار المصرية القديمة ومستشار تاريخي، يقدم مقالات تاريخية ودراسات وتحليلات موثقة في علم المصريات والحضارة المصرية القديمة.';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || siteConfig.siteUrl),
  title: {
    default: seoTitle,
    template: '%s | د. أحمد المعيقلي'
  },
  description: seoDescription,
  keywords: siteConfig.keywords,
  authors: [{ name: 'د. أحمد المعيقلي', url: siteConfig.siteUrl }],
  creator: 'د. أحمد المعيقلي',
  publisher: 'د. أحمد المعيقلي',
  category: 'Egyptian Archaeology, Egyptology, Historical Research',
  alternates: {
    canonical: '/',
    languages: {
      'ar-EG': '/',
      en: '/en'
    }
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: '/',
    siteName: siteConfig.siteName,
    locale: 'ar_EG',
    type: 'profile',
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt: 'د. أحمد المعيقلي - باحث في الآثار المصرية القديمة'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: seoTitle,
    description: seoDescription,
    images: [siteConfig.image]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#050b14'
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteConfig.siteUrl}/#person`,
      name: siteConfig.titleAr,
      alternateName: [siteConfig.titleEn, 'أحمد المعيقلي', 'دكتور أحمد المعيقلي'],
      description: siteConfig.description,
      url: siteConfig.siteUrl,
      image: `${siteConfig.siteUrl}${siteConfig.image}`,
      jobTitle: 'باحث في الآثار المصرية القديمة ومستشار تاريخي',
      hasOccupation: [
        {
          '@type': 'Occupation',
          name: 'باحث آثار',
          occupationLocation: {
            '@type': 'Country',
            name: 'Egypt'
          }
        },
        {
          '@type': 'Occupation',
          name: 'Historical Consultant'
        }
      ],
      knowsAbout: [
        'أحمد المعيقلي',
        'دكتور أحمد المعيقلي',
        'آثار مصرية',
        'باحث آثار',
        'علم المصريات',
        'مقالات تاريخية',
        'Egyptology',
        'Egyptian Archaeology',
        'Ancient Egypt'
      ],
      sameAs: [siteConfig.facebook].filter(Boolean),
      contactPoint: {
        '@type': 'ContactPoint',
        email: siteConfig.email,
        telephone: siteConfig.phoneDisplay,
        contactType: 'official inquiries',
        availableLanguage: ['Arabic', 'English']
      }
    },
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.siteUrl}/#website`,
      url: siteConfig.siteUrl,
      name: siteConfig.siteName,
      inLanguage: 'ar-EG',
      description: siteConfig.description,
      publisher: {
        '@id': `${siteConfig.siteUrl}/#person`
      }
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteConfig.siteUrl}/#profilepage`,
      url: siteConfig.siteUrl,
      name: seoTitle,
      description: seoDescription,
      inLanguage: 'ar-EG',
      about: {
        '@id': `${siteConfig.siteUrl}/#person`
      },
      isPartOf: {
        '@id': `${siteConfig.siteUrl}/#website`
      }
    }
  ]
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="ar" dir="rtl">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {gaId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`
              }}
            />
          </>
        ) : null}
        <div className="site-shell">
          <Header />
          <main>{children}</main>
          <Footer />
          <ContactRail />
        </div>
      </body>
    </html>
  );
}
