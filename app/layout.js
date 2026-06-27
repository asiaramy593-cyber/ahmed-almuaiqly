import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactRail from '@/components/ContactRail';
import { siteConfig } from '@/data/site';

// تأكد 100% أن siteConfig.siteUrl في ملف site.js هو: https://ahmed-almuaiqly-delta.vercel.app
const siteUrl = siteConfig.siteUrl.replace(/\/$/, '');
const seoImage = `${siteUrl}${siteConfig.image}`;

const seoTitle = 'د. أحمد المعيقلي | باحث آثار ومستشار تاريخي للحضارة المصرية';
const seoDescription =
  'الموقع الرسمي للدكتور أحمد المعيقلي، باحث وعالم في الآثار المصرية القديمة ومستشار تاريخي. يقدم دراسات، تحليلات، ومقالات موثقة في علم المصريات وتاريخ مصر القديمة.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoTitle,
    template: '%s | د. أحمد المعيقلي'
  },
  description: seoDescription,
  // تعمدت إضافة الكلمات البحثية بالعربي هنا مباشرة لضمان التقاط جوجل لها
  keywords: [
    'أحمد المعيقلي',
    'د. أحمد المعيقلي',
    'دكتور أحمد المعيقلي',
    'باحث آثار',
    'أحمد المعيقلي باحث آثار',
    'علم المصريات',
    'الحضارة المصرية القديمة',
    'مستشار تاريخي',
    'مقالات تاريخية',
    'Egyptology',
    'Egyptian Archaeology',
    ...(siteConfig.keywords || [])
  ],
  authors: [{ name: 'د. أحمد المعيقلي', url: siteUrl }],
  creator: 'د. أحمد المعيقلي',
  publisher: 'د. أحمد المعيقلي',
  category: 'Egyptian Archaeology, Egyptology, Historical Research',
  alternates: {
    canonical: siteUrl,
    languages: {
      'ar-EG': siteUrl,
      en: `${siteUrl}/en`
    }
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: siteUrl,
    siteName: siteConfig.siteName,
    locale: 'ar_EG',
    type: 'profile',
    images: [
      {
        url: seoImage,
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
    images: [seoImage]
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
      '@id': `${siteUrl}/#person`,
      name: siteConfig.titleAr || 'د. أحمد المعيقلي',
      // إضافة الكلمات المفتاحية باللغة العربية هنا تدعم ظهور الدكتور في الـ Knowledge Graph لجوجل
      alternateName: [
        siteConfig.titleEn, 
        'أحمد المعيقلي', 
        'دكتور أحمد المعيقلي', 
        'د. أحمد المعيقلي باحث آثار', 
        'أحمد المعيقلي باحث آثار'
      ],
      description: seoDescription,
      url: siteUrl,
      image: seoImage,
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
        'د. أحمد المعيقلي باحث آثار',
        'أحمد المعيقلي باحث آثار',
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
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteConfig.siteName || 'الموقع الرسمي للدكتور أحمد المعيقلي',
      inLanguage: 'ar-EG',
      description: seoDescription,
      publisher: {
        '@id': `${siteUrl}/#person`
      }
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: seoTitle,
      description: seoDescription,
      inLanguage: 'ar-EG',
      mainEntity: {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: siteConfig.titleAr || 'د. أحمد المعيقلي',
        url: siteUrl,
        image: seoImage
      },
      about: {
        '@id': `${siteUrl}/#person`
      },
      isPartOf: {
        '@id': `${siteUrl}/#website`
      }
    }
  ]
};
export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="ar" dir="rtl">
      <body>
        {/* حقن بيانات الـ Schema المحسنة لمحركات البحث */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        
        {/* كود التتبع الخاص بجوجل أناليتكس إذا كان متوفراً */}
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
