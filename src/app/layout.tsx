
import { Beiruti } from 'next/font/google';
import './globals.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Metadata } from 'next';

const beiruti = Beiruti({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  variable: '--font-beiruti',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://test.shammakh.com'),
  title: {
    template: '%s | مجموعة شماخ للتجارة',
    default: 'مجموعة شماخ للتجارة - رواد الجودة والتميز في اليمن',
  },
  description: 'مجموعة شماخ للتجارة - مجموعة يمنية رائدة في قطاعات السيارات والإلكترونيات والمواد الغذائية والصناعات الجلدية وصوامع الغلال ومواد البناء والطاقة. وكيل حصري لشيري و JMC و LG في اليمن.',
  keywords: ['مجموعة شماخ', 'شماخ للتجارة', 'سيارات شيري اليمن', 'LG اليمن', 'مواد غذائية اليمن', 'ارز شماخ', 'صوامع الغلال', 'شماخ', 'Shammakh Group', 'Yemen'],
  authors: [{ name: 'مجموعة شماخ للتجارة' }],
  creator: 'مجموعة شماخ للتجارة',
  openGraph: {
    type: 'website',
    locale: 'ar_YE',
    url: 'https://test.shammakh.com',
    siteName: 'مجموعة شماخ للتجارة',
    title: 'مجموعة شماخ للتجارة - رواد الجودة والتميز في اليمن',
    description: 'مجموعة يمنية رائدة في قطاعات السيارات والإلكترونيات والمواد الغذائية والصناعات الجلدية وصوامع الغلال. وكيل حصري لشيري و JMC و LG في اليمن.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مجموعة شماخ للتجارة',
    description: 'مجموعة يمنية رائدة في قطاعات السيارات والإلكترونيات والمواد الغذائية والصناعات الجلدية وصوامع الغلال.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'مجموعة شماخ للتجارة',
              alternateName: 'Shammakh Trading Group',
              url: 'https://test.shammakh.com',
              description: 'مجموعة يمنية رائدة في قطاعات السيارات والإلكترونيات والمواد الغذائية والصناعات الجلدية وصوامع الغلال.',
              foundingCountry: 'YE',
              areaServed: 'YE',
              sameAs: [],
            }),
          }}
        />
      </head>
      <body
        className={`${beiruti.variable} ${beiruti.variable} antialiased bg-white!`}
        suppressHydrationWarning
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
