"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import logo from "../../public/images/logo3.png";
import leafs from "../../public/images/الشكل-الجمالي-1-2.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const container = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const leafsRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 95%", // Start when top of container hits 80% of viewport
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                markers: false
            }
        });
        tl.from(leafsRef.current, {
            x: -220,
            opacity: 0,
            duration: 1,
            ease: "power.out"
        });
        tl.from(logoRef.current, {
            y: 120,
            opacity: 0,
            duration: 1,
            ease: "power1.out"
        })
            .from(textRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power1.out"
            }, "-=0.5"); // Overlap slightly

    }, { scope: container });

    return (
        <div ref={container} className="container mb-28 relative md:px-50 px-4 md:grid md:grid-cols-2 grid-cols-1 mx-auto  py-12" dir='rtl'>
            <Image ref={leafsRef} src={leafs} alt="logo" className='rotate-90 absolute bottom-40 -start-70 z-10' />
            <div ref={logoRef}>

                <Image src={logo} alt="logo" className='object-contain' width={500} height={500} />
            </div>

            <div ref={textRef}>
                <h2 className="text-5xl md:text-7xl font-extrabold text-primary font-beiruti leading-tight">عن المجموعه</h2>
                <p className="mt-6 text-2xl font-beiruti text-justify text-black max-w-2xl">
            تأسست الشركة الأم (سالم محمد شماخ وشركاه) على يد المرحوم الشيخ سالم محمد شماخ عام 1964م في اليمن.

وقد كانت بدايتها استيراد وبيع بالجملة والقطاعي عام 1950م في اليمن للسلع الغذائية كالأرز والسمن والقمح والدقيق والسكر والأقمشة الشعبية.
كانت البداية متواضعة بحكم القدرة المالية حينها.

وبعد عام بدأت الشركة في تصدير المنتجات اليومية المتوفرة في اليمن كالألبان وجلود الأغنام الخام...

وبعد انضمام الإخوة الأربعة إلى الشركة حصلت نهضة كبيرة في الشركة، وبدأت توسّع مجالات العمل إلى مواد جديدة،
كمواد البناء من أخشاب وحديد وإسمنت ومواد صحية والأجهزة المنزلية،
أيضًا توسّع نشاط التصدير ليصل إلى إيطاليا والهند وماليزيا والمملكة المتحدة...

بعد الثورة المباركة حصلت انتعاشة اقتصادية في اليمن، صادف حينها التواجد القوي للشركة، مما انعكس بصورة كبيرة على نشاطها...

واليوم تضم المجموعة عمالة تتجاوز 500 شخص وتُعتبر واحدة من أكبر عشر شركات في اليمن.
                </p>

            </div>
            <div>

            </div>
        </div>
    );
};

export default About;