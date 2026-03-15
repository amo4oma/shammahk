import Hero from './components/Hero';
import About from './components/About';
import Companies from './components/Companies';
import OurGroup from './components/OurGroup';
import MobileNav from './components/MobileNav';
import NewsSection from './components/NewsSection';
import Contact from './components/Contact';
import { Metadata } from 'next';

import EmailSubscribtion from './components/EmailSubscribtion';
import CookieConsent from './components/CookieConsent';

export const metadata: Metadata = {
  title: 'الرئيسية',
  description: 'مجموعة شماخ للتجارة - مجموعة يمنية رائدة تضم قطاعات السيارات (شيري، JMC)، الإلكترونيات (LG، تيفال)، المواد الغذائية، صوامع الغلال والمطاحن، الصناعات الجلدية، والطاقة ومواد البناء.',
  openGraph: {
    title: 'مجموعة شماخ للتجارة - رواد الجودة والتميز في اليمن',
    description: 'مجموعة يمنية رائدة في قطاعات السيارات والإلكترونيات والمواد الغذائية والصناعات الجلدية وصوامع الغلال.',
    url: 'https://test.shammakh.com',
  },
};
export default function Home() {
  return (
    <div className="bg-white h-full overflow-hidden">

      <Hero />
      <About />
      <OurGroup />
      <Companies />
      <MobileNav />
      <NewsSection />
      <Contact />

      <EmailSubscribtion />
      <CookieConsent />

    </div>
  );
}