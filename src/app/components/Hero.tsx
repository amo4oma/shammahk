"use client";
import { motion } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import qaisar from "../../public/images/qaisar.png"
import imgs from "../../public/images/ارز-شماخ.png"
import imgs2 from "../../public/images/ارز-البيت.png"
import imgs3 from "../../public/images/ارز-الفارس-النبيل.png"
import imgs4 from "../../public/images/بازلياء-خضراء.png"

import imgs6 from "../../public/images/العطية.png"
import imgs7 from "../../public/images/التونه.png"
import imgs8 from "../../public/images/الخريف-موكب-اب.png"
import imgs9 from "../../public/images/فاصوليا-بيضاء.png"
import imgs10 from "../../public/images/فاصوليا-حمراء.png"
import imgs11 from "../../public/images/خيرات-اليمن-موكب-اب.png"
import leaf from "../../public/images/الشكل-الجمالي-31.png"
import rice3 from "../../public/images/rice-3.webp"
import teaMilk from "../../public/images/tea-milk.webp"

import Image from 'next/image';
import mango from "../../public/images/mango.webp"
import pinable from "../../public/images/pinable.webp"
import leaf2 from "../../public/images/الشكل-الجمالي-1-2.png"


// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ProductsMarquee } from '@/components/ui/ProductsMarquee';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Only run on client side
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Debug: Log isMobile value after it updates
  useEffect(() => {
    console.log('isMobile:', isMobile);
  }, [isMobile]);

  const containerRef = useRef<HTMLDivElement>(null);
  const animatedElementRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);
  const img5Ref = useRef(null);
  const leafRef = useRef(null)
  const rice3Ref = useRef(null)
  const img7Ref = useRef(null)
  const img8Ref = useRef(null)
  const img9Ref = useRef(null)
  const img10Ref = useRef(null)
  const img11Ref = useRef(null)
  const img12Ref = useRef(null)
  const teaMilkRef = useRef(null);
  const mangoRef = useRef(null);
  const pinableRef = useRef(null);
  useGSAP(() => {
    // Only run GSAP animations on desktop (md and above)
    if (isMobile) return;

    console.log('Creating GSAP animation for desktop');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true
      },
    });

    tl.to(animatedElementRef.current, { x: 300, duration: 5 })
      .to(leafRef.current, { opacity: 1, x: 50, rotation: 450, duration: 10 }, "<")
      .fromTo(img9Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 100, y: -120, width: 150, zIndex: 999, duration: 10, ease: "power2.out" }, "<")
      .fromTo(img12Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: -50, y: -130, width: 160, zIndex: 999, duration: 10, ease: "power2.out" }, "<")

      .to(img1Ref.current, { opacity: 1, x: 50, scale: 1.1, duration: 1 }, "<")
      // Animate the off-screen images into view

      .fromTo(img1Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 300, width: 150, zIndex: 999, duration: 10, ease: "power2.out" }, "<")
      .fromTo(img2Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 200, width: 180, duration: 10, ease: "power2.out" }, ">-5")
      .fromTo(img3Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 100, width: 180, duration: 10, ease: "power2.out" }, ">-5")
      .fromTo(img4Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 0, width: 150, duration: 10, ease: "power2.out" }, ">-5")
      .fromTo(img5Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 100, y: 120, width: 150, duration: 10, ease: "power2.out" }, ">-5")
      .fromTo(img10Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 200, y: 120, width: 190, duration: 10, ease: "power2.out" }, ">-5")
      .fromTo(teaMilkRef.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 0, y: 120, width: 80, duration: 10, ease: "power2.out" }, ">-5")
      .fromTo(img7Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: -100, width: 150, duration: 10, ease: "power2.out" }, ">-5")
      .fromTo(mangoRef.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: -100, y: 120, width: 100, duration: 10, ease: "power2.out" }, ">-5")
      .fromTo(pinableRef.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: -200, y: 120, width: 100, duration: 10, ease: "power2.out" }, ">-5")
      .fromTo(rice3Ref.current, { width: '50%', opacity: 0, x: -300 }, { opacity: 1, x: -200, width: 70, duration: 10, ease: "power2.out" }, ">-5")
      .fromTo(img11Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 300, y: 120, width: 180, duration: 10, ease: "power2.out" }, ">-5")

  }, { scope: containerRef, dependencies: [isMobile] });



  return (
    <>
      {/* Desktop Layout */}
      <div ref={containerRef} className="hidden md:grid h-screen md:grid-cols-2 grid-cols-1 bg-linear-to-t from-[#768E76]-200 to-[#768E76]" dir="rtl">
        <div ref={animatedElementRef} className="container title mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
          <motion.h1
            key={`title-desktop`}
            id='title'
            initial={{ opacity: 0, y: 0, x: -350 }}
            animate={{ opacity: 1, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl relative z-10 text-shadow-lg font-extrabold text-primary font-beiruti leading-tight"
          >
            مجموعة شماخ للتجاره
          </motion.h1>
          <motion.p
            key={`desc-desktop`}
            initial={{ opacity: 0, y: 0, x: -350 }}
            animate={{ opacity: 1, y: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="desc mt-6 text-shadow-lg font-semibold font-beiruti text-2xl text-gray-600 max-w-2xl"
          >
            رواد الجودة والتميز في مختلف القطاعات، من السيارات والإلكترونيات إلى المواد الغذائية والجلود.
          </motion.p>
          <motion.div
            key={`button-desktop`}
            initial={{ opacity: 0, y: 0, x: -350 }}
            animate={{ opacity: 1, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='butn'
          >
            <a href="about" className="relative mt-5 inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-transparent shadow rounded-md group">
              <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-primary rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-primary rounded-md opacity-0 group-hover:opacity-100 "></span>
              <span className="relative font-bold text-accent font-beiruti transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">اكتشف المزيد</span>
            </a>
          </motion.div>
        </div>
        <Image ref={leafRef} className="absolute opacity-0 z-50 left-[40%] top-20" src={leaf} alt="" />
        <div className="relative overflow-hidden flex justify-center items-center gap-1 z-20">
          <Image ref={img12Ref} className="absolute opacity-0 w-100 z-40" src={imgs11} alt="" />
          <Image ref={img9Ref} className='absolute opacity-0 w-100 z-40' src={imgs8} alt="" />
          <Image ref={img1Ref} className="absolute opacity-0 w-100 z-40" src={qaisar} alt="" />
          <Image ref={img2Ref} className="absolute opacity-0 w-100" src={imgs} alt="" />
          <Image ref={img3Ref} className="absolute opacity-0 w-100" src={imgs2} alt="" />
          <Image ref={img4Ref} className="absolute opacity-0 w-100" src={imgs3} alt="" />
          <Image ref={img5Ref} className="absolute opacity-0 w-100" src={imgs4} alt="" />
          <Image ref={img7Ref} className="absolute opacity-0 w-100" src={imgs6} alt="" />
          <Image ref={img8Ref} className="absolute opacity-0 w-100" src={imgs7} alt="" />
          <Image ref={img10Ref} className="absolute opacity-0 w-100" src={imgs9} alt="" />
          <Image ref={img11Ref} className="absolute opacity-0 w-100" src={imgs10} alt="" />
          <Image ref={rice3Ref} className="absolute opacity-0 w-[50%]" src={rice3} alt="" />
          <Image ref={teaMilkRef} className="absolute opacity-0 w-[50%]" src={teaMilk} alt="" />
          <Image ref={mangoRef} className="absolute opacity-0 w-[50%]" src={mango} alt="" />
          <Image ref={pinableRef} className="absolute opacity-0 w-[50%]" src={pinable} alt="" />

        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden min-h-screen bg-linear-to-t from-[#768E76]-200 to-[#768E76]" dir="rtl">
        {/* Mobile Text Content */}
        <div className="container mx-auto px-4 pt-24 pb-6 flex flex-col items-center justify-center text-center">
          <motion.h1
            key={`title-mobile`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl relative z-10 font-extrabold text-primary font-beiruti leading-tight"
          >
            مجموعة شماخ للتجاره
          </motion.h1>
          <motion.p
            key={`desc-mobile`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-4 font-beiruti text-base sm:text-lg text-gray-600 max-w-md px-2"
          >
            رواد الجودة والتميز في مختلف القطاعات، من السيارات والإلكترونيات إلى المواد الغذائية والجلود.
          </motion.p>
          <motion.div
            key={`button-mobile`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='butn mt-4'
          >
            <a href="about" className="relative inline-flex items-center justify-center px-5 py-2.5 text-base font-medium tracking-tighter text-white bg-transparent shadow rounded-md group">
              <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-primary rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-primary rounded-md opacity-0 group-hover:opacity-100 "></span>
              <span className="relative font-bold text-accent font-beiruti transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">اكتشف المزيد</span>
            </a>
          </motion.div>
        </div>

        {/* Floating Products Showcase */}
        <div className="relative w-full px-4 pb-8 overflow-hidden">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/20 pointer-events-none z-10" />

          {/* Organized grid of floating products */}
          <div className="relative grid grid-cols-2 gap-4 max-w-sm mx-auto">
                       {/* Row 2 - Hero products (2 items centered) */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 1.6, type: "spring", stiffness: 150 }}
              className="col-span-1 flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -5, 0], scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-28 h-28"
              >
                <Image src={imgs8} alt="الخريف" className="w-full h-full object-contain drop-shadow-2xl" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 1.8, type: "spring", stiffness: 150 }}
              className="col-span-2 flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -7, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="w-28 h-28"
              >
                <Image src={imgs11} alt="خيرات اليمن" className="w-full h-full object-contain drop-shadow-2xl" />
              </motion.div>
            </motion.div>
            {/* Row 1 - Top row (3 items) */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 1.0, type: "spring", stiffness: 200 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-34 h-24"
              >
                <Image src={qaisar} alt="قيصر" className="w-full h-full object-contain drop-shadow-xl" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 200 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="w-24 h-24"
              >
                <Image src={imgs} alt="ارز شماخ" className="w-full h-full object-contain drop-shadow-xl" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 1.4, type: "spring", stiffness: 200 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="w-20 h-20"
              >
                <Image src={imgs2} alt="ارز البيت" className="w-full h-full object-contain drop-shadow-xl" />
              </motion.div>
            </motion.div>



            {/* Row 3 - Mixed sizes (3 items) */}
            <motion.div
              initial={{ opacity: 0, scale: 0, x: -30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 2.0, type: "spring", stiffness: 180 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="w-20 h-20"
              >
                <Image src={imgs3} alt="ارز الفارس النبيل" className="w-full h-full object-contain drop-shadow-lg" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.2, type: "spring", stiffness: 180 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="w-22 h-22"
              >
                <Image src={imgs4} alt="بازلياء خضراء" className="w-full h-full object-contain drop-shadow-lg" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 2.4, type: "spring", stiffness: 180 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -5, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="w-20 h-20"
              >
                <Image src={imgs6} alt="العطية" className="w-full h-full object-contain drop-shadow-lg" />
              </motion.div>
            </motion.div>

            {/* Row 4 - Bottom products (3 items) */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 2.6, type: "spring", stiffness: 200 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -7, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                className="w-20 h-20"
              >
                <Image src={imgs7} alt="التونه" className="w-full h-full object-contain drop-shadow-lg" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 2.8, type: "spring", stiffness: 200 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                className="w-20 h-20"
              >
                <Image src={imgs9} alt="فاصوليا بيضاء" className="w-full h-full object-contain drop-shadow-lg" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 3.0, type: "spring", stiffness: 200 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -9, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 2.9, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                className="w-20 h-20"
              >
                <Image src={imgs10} alt="فاصوليا حمراء" className="w-full h-full object-contain drop-shadow-lg" />
              </motion.div>
            </motion.div>

            {/* Row 5 - New Products (4 items - 2 rows of 2) */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 3.2, type: "spring", stiffness: 200 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -7, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="w-16 h-16"
              >
                <Image src={rice3} alt="أرز" className="w-full h-full object-contain drop-shadow-lg" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 12 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 3.4, type: "spring", stiffness: 200 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="w-16 h-16"
              >
                <Image src={teaMilk} alt="شاي بالحليب" className="w-full h-full object-contain drop-shadow-lg" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 3.6, type: "spring", stiffness: 200 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="w-18 h-18"
              >
                <Image src={mango} alt="مانجو" className="w-full h-full object-contain drop-shadow-lg" />
              </motion.div>
            </motion.div>

            {/* Row 6 - Last item centered */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 3.8, type: "spring", stiffness: 200 }}
              className="col-span-3 flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -7, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 3.0, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="w-18 h-18"
              >
                <Image src={pinable} alt="أناناس" className="w-full h-full object-contain drop-shadow-lg" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
