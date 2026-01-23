
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import Companies from './components/Companies';
import OurGroup from './components/OurGroup';
import MobileNav from './components/MobileNav';
export default function Home() {
  return (
    <div className="bg-white h-full overflow-hidden">
      <Header />
      <main>
        <Hero /> 
        <About />
        <OurGroup />
        <Companies />
        <MobileNav />
      </main>
      <Footer />
    </div>
  );
}