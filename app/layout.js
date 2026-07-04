import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactRail from '@/components/ContactRail';
import { siteConfig } from '@/data/site';

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
  keywords: [
    'أحمد المعيقلي',
    'د. أحمد المعيقلي',
    'دكتور أحمد المعيقلي',
    'باحث آثار',
    'أحمد المعيقلي باحث آثار',
    'الدكتور أحمد المعيقلي',
    'عالم مصريات',
    'علم المصريات',
    'الآثار المصرية القديمة',
    'الحضارة المصرية القديمة',
    'مستشار تاريخي',
    'مقالات تاريخية',
    'Ahmed Al-Muaiqly',
    'Dr. Ahmed Al-Muaiqly',
    'Egyptologist',
    'Egyptology',
    'Egyptian Archaeology',
    ...(siteConfig.keywords || [])
  ],
  authors: [{ name: 'د. أحمد المعيقلي', url: siteUrl }],
  creator: 'د. أحمد المعيقلي',
  publisher: 'د. أحمد المعيقلي',
  category: 'History, Archaeology, Science',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'ar-EG': siteUrl,
      'en': `${siteUrl}/en`
    }
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: siteUrl,
    siteName: siteConfig.siteName,
    locale: 'ar_EG',
    alternateLocale: 'en_US',
    type: 'profile',
    images: [
      {
        url: seoImage,
        width: 1200,
        height: 630,
        alt: 'د. أحمد المعيقلي - باحث في الآثار المصرية القديمة',
        type: 'image/svg+xml',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: seoTitle,
    description: seoDescription,
    creator: '@AhmedAlMuaiqly',
    images: [seoImage]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '280ee8c875cd7593',
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
      '@type': ['Person', 'Scientist'],
      '@id': `${siteUrl}/#person`,
      name: 'د. أحمد المعيقلي',
      givenName: 'أحمد',
      familyName: 'المعيقلي',
      alternateName: [
        'أحمد المعيقلي',
        'دكتور أحمد المعيقلي',
        'Dr. Ahmed Al-Muaiqly',
        'Ahmed Al-Muaiqly'
      ],
      description: seoDescription,
      disambiguatingDescription: 'باحث أكاديمي وعالم مصريات متخصص في الآثار المصرية القديمة والتاريخ المصري، وليس له علاقة بمجال الإنشاد أو التلاوة الدينية.',
      url: siteUrl,
      image: {
        '@type': 'ImageObject',
        '@id': `${siteUrl}/#image`,
        url: seoImage,
        caption: 'د. أحمد المعيقلي - باحث آثار ومستشار تاريخي'
      },
      jobTitle: ['باحث في الآثار المصرية القديمة', 'مستشار تاريخي', 'عالم مصريات'],
      hasOccupation: [
        {
          '@type': 'Occupation',
          name: 'Egyptologist',
          description: 'Specialist in ancient Egyptian history and archaeology.'
        },
        {
          '@type': 'Occupation',
          name: 'Historical Consultant'
        }
      ],
      knowsAbout: [
        'علم المصريات',
        'الآثار المصرية القديمة',
        'تاريخ مصر القديمة',
        'العمارة الجنائزية المصرية',
        'النقوش الهيروغليفية',
        'Egyptology',
        'Ancient Egyptian History',
        'Egyptian Archaeology',
        'Hieroglyphs'
      ],
      sameAs: [
        siteConfig.facebook,
        'https://www.wikidata.org/wiki/Q199268' // Egyptology Generic Reference to build semantic association
      ].filter(Boolean),
      mainEntityOfPage: {
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/#profilepage`
      },
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
      name: siteConfig.siteName,
      alternateName: 'Dr. Ahmed Al-Muaiqly Official Website',
      inLanguage: 'ar-EG',
      description: seoDescription,
      publisher: {
        '@id': `${siteUrl}/#person`
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteUrl}/search?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: seoTitle,
      description: seoDescription,
      inLanguage: 'ar-EG',
      isPartOf: {
        '@id': `${siteUrl}/#website`
      },
      about: {
        '@id': `${siteUrl}/#person`
      },
      primaryImageOfPage: {
        '@id': `${siteUrl}/#image`
      }
    }
  ]
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="ar" dir="rtl">
      <body>
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
        />
        
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
