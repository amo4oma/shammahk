
 
import Hero from './components/Hero';
 
import About from './components/About';
import Companies from './components/Companies';
import OurGroup from './components/OurGroup';
import MobileNav from './components/MobileNav';
export default function Home() {
  return (
    <div className="bg-white h-full overflow-hidden">
 
        <Hero /> 
        <About />
        <OurGroup />
        <Companies />
        <MobileNav />
   
    </div>
  );
}