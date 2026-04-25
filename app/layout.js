import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactRail from '@/components/ContactRail';
import { siteConfig } from '@/data/site';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ahmed-almuaiqly.vercel.app"),
  title: {
    default: "د. أحمد المعيقلي | عالم مصريات وباحث أكاديمي دولي",
    template: "%s | د. أحمد المعيقلي"
  },
  description:
    "الموقع الرسمي للدكتور أحمد المعيقلي، عالم مصريات وباحث أكاديمي متخصص في تاريخ مصر القديمة والحضارة المصرية، يقدم معرفة موثقة وأبحاثًا مختصرة وخدمات تعاون أكاديمي وثقافي.",
  keywords: [
    "د. أحمد المعيقلي",
    "أحمد المعيقلي",
    "عالم مصريات",
    "علم المصريات",
    "تاريخ مصر القديمة",
    "الحضارة المصرية القديمة",
    "باحث أكاديمي",
    "Egyptology",
    "Ancient Egypt",
    "Ahmed Al-Muaiqly"
  ],
  authors: [{ name: "د. أحمد المعيقلي" }],
  creator: "د. أحمد المعيقلي",
  publisher: "د. أحمد المعيقلي",
  alternates: {
    canonical: "/",
    languages: {
      "ar-EG": "/",
      "en": "/en"
    }
  },
  openGraph: {
    title: "د. أحمد المعيقلي | عالم مصريات وباحث أكاديمي",
    description:
      "موقع أكاديمي متخصص في علم المصريات وتاريخ مصر القديمة، يقدم قراءة موثقة للحضارة المصرية القديمة.",
    url: "/",
    siteName: "د. أحمد المعيقلي",
    locale: "ar_EG",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "د. أحمد المعيقلي | عالم مصريات وباحث أكاديمي",
    description:
      "موقع أكاديمي متخصص في علم المصريات وتاريخ مصر القديمة."
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050b14"
};


const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.titleAr,
  alternateName: siteConfig.titleEn,
  description: siteConfig.description,
  jobTitle: siteConfig.shortRole,
  url: siteConfig.siteUrl,
  image: `${siteConfig.siteUrl}${siteConfig.image}`,
  sameAs: [siteConfig.facebook],
  knowsAbout: ['Egyptology', 'علم المصريات', 'الحضارة المصرية القديمة', 'حماية التراث'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.addressLines.join('، '),
    addressCountry: 'EG'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    contactType: 'customer support'
  }
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
