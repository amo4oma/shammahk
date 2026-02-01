import Hero from './components/Hero';
import About from './components/About';
import Companies from './components/Companies';
import OurGroup from './components/OurGroup';
import MobileNav from './components/MobileNav';
import NewsSection from './components/NewsSection';
import Contact from './components/Contact';
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
   
    </div>
  );
}