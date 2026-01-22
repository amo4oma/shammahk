"use client";
import { motion } from 'motion/react';
import { useRef } from 'react';
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
import leaf2 from "../../public/images/الشكل-الجمالي-1-2.png"
import Image from 'next/image';
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const animatedElementRef = useRef<HTMLDivElement>(null);
    const img1Ref = useRef();
    const img2Ref = useRef();
    const img3Ref = useRef();
    const img4Ref = useRef();
    const img5Ref = useRef();
    const leafRef = useRef()
    const img7Ref = useRef()
    const img8Ref = useRef()
    const img9Ref = useRef()
    const img10Ref = useRef()
    const img11Ref = useRef()
    const img12Ref = useRef()

    useGSAP(() => {
        // GSAP's built-in responsive solution using matchMedia
        let mm = gsap.matchMedia();

        // Desktop animations (min-width: 769px)
        mm.add("(min-width: 769px)", () => {
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
                .to(img1Ref.current, { opacity: 1, x: 50, scale: 1.1, duration: 1 }, "<")
                .fromTo(img1Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 300, y: 120, width: 150, duration: 10, ease: "power2.out" }, "<")
                .fromTo(img12Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 300, width: 150, duration: 10, ease: "power2.out" }, ">-5")
                .fromTo(img2Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 200, width: 150, duration: 10, ease: "power2.out" }, ">-5")
                .fromTo(img3Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 100, width: 150, duration: 10, ease: "power2.out" }, ">-5")
                .fromTo(img4Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 0, width: 150, duration: 10, ease: "power2.out" }, ">-5")
                .fromTo(img5Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 100, y: 120, width: 150, duration: 10, ease: "power2.out" }, ">-5")
                .fromTo(img7Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 200, y: 120, width: 150, duration: 10, ease: "power2.out" }, ">-5")
                .fromTo(img8Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 0, y: 120, width: 150, duration: 10, ease: "power2.out" }, ">-5")
                .fromTo(img10Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: -100, width: 150, duration: 10, ease: "power2.out" }, ">-5")
                .fromTo(img9Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: -150, y: 120, width: 150, duration: 10, ease: "power2.out" }, ">-5")
                .fromTo(img11Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: -200, width: 150, duration: 10, ease: "power2.out" }, ">-5");
        });

        // Mobile animations (max-width: 768px)
        mm.add("(max-width: 768px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=1500",
                    scrub: true,
                    pin: true // No pin on mobile
                },
            });

            tl.fromTo(animatedElementRef.current,{x:350}, { x: 0, duration: 5 })
                .to(leafRef.current, { opacity: 1, x: 20, rotation: 180, duration: 10 }, "<")
                .to(img1Ref.current, { opacity: 1, x: 20, scale: 1.1, duration: 1 }, "<")
                .fromTo(img1Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: -100, y: 100, width: 80, duration: 10, ease: "power2.out" }, "<")
                .fromTo(img12Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 30, width: 80, duration: 10, ease: "power2.out" }, ">-5")
                .fromTo(img2Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 20, width: 80, duration: 10, ease: "power2.out" }, ">-5")
                .fromTo(img3Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 10, width: 80, duration: 10, ease: "power2.out" }, ">-5")
                .fromTo(img4Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 0, width: 80, duration: 10, ease: "power2.out" }, ">-5")
                .fromTo(img5Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 10, y: 60, width: 80, duration: 10, ease: "power2.out" }, ">-5")
                .fromTo(img7Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 20, y: 60, width: 80, duration: 10, ease: "power2.out" }, ">-5")
                .fromTo(img8Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: 0, y: 60, width: 80, duration: 10, ease: "power2.out" }, ">-5")
                .fromTo(img10Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: -10, width: 80, duration: 10, ease: "power2.out" }, ">-5")
                .fromTo(img9Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: -20, y: 60, width: 80, duration: 10, ease: "power2.out" }, ">-5")
                .fromTo(img11Ref.current, { width: '80%', opacity: 0, x: -300 }, { opacity: 1, x: -30, width: 80, duration: 10, ease: "power2.out" }, ">-5");
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className=" h-screen md:grid md:grid-cols-2 grid-cols-1 bg-linear-to-t from-[#768E76]-200 to-[#768E76]" dir="rtl">
            <div ref={animatedElementRef} className="container title mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
                <motion.h1
                    id='title'
                    initial={{ opacity: 0, y: 0, x: -350 }}
                    animate={{ opacity: 1, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className=" text-5xl relative z-10 md:text-7xl text-text-shadow-lg/30 font-extrabold text-primary font-beiruti leading-tight"
                >
                    مجموعة شماخ للتجاره
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 0, x: -350 }}
                    animate={{ opacity: 1, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="desc mt-6 text-xl text-gray-600 max-w-2xl"
                >
                    رواد الجودة والتميز في مختلف القطاعات، من السيارات والإلكترونيات إلى المواد الغذائية والجلود.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 0, x: -350 }}
                    animate={{ opacity: 1, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className='butn'
                >
                    <button className="mt-10 px-8 py-4 bg-highlight text-white font-bold rounded-full hover:bg-yellow-600 transition-colors shadow-lg text-lg">
                        اكتشف المزيد
                    </button>
                </motion.div>
            </div>
            <Image ref={leafRef} className=" absolute opacity-0 z-50 left-[40%] top-20" src={leaf} alt="" />
            <div className="relative overflow-hidden flex justify-center items-center gap-1 z-20">
                <Image ref={img12Ref} className=" absolute opacity-0 w-100 z-40 " src={imgs11} alt="" />
                <Image ref={img9Ref} className='absolute opacity-0 w-100 z-40 ' src={imgs8} alt="" />
                <Image ref={img1Ref} className=" absolute opacity-0 w-100 z-40 " src={qaisar} alt="" />
                <Image ref={img2Ref} className=" absolute opacity-0 w-100 " src={imgs} alt="" />
                <Image ref={img3Ref} className=" absolute opacity-0 w-100 " src={imgs2} alt="" />
                <Image ref={img4Ref} className=" absolute opacity-0 w-100 " src={imgs3} alt="" />
                <Image ref={img5Ref} className=" absolute opacity-0 w-100 " src={imgs4} alt="" />

                <Image ref={img7Ref} className=" absolute opacity-0 w-100 " src={imgs6} alt="" />
                <Image ref={img8Ref} className=" absolute opacity-0 w-100 " src={imgs7} alt="" />

                <Image ref={img10Ref} className="absolute opacity-0  w-100 " src={imgs9} alt="" />
                <Image ref={img11Ref} className="absolute opacity-0  w-100 " src={imgs10} alt="" />

            </div>
        </div>
    );
};

export default Hero;
