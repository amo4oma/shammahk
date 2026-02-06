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
  title: 'مجموعة شماخ للتجاره',
  description: 'مجموعة شماخ للتجاره',
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