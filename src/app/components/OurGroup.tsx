"use client";
import Image from "next/image"
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import wheat1 from "../../public/images/صوامع1.jpg"
import wheat2 from "../../public/images/صوامع2.jpg"
import wheat3 from "../../public/images/صوامع3.jpg"
import modern1 from "../../public/images/modern2.jpg"
import modern2 from "../../public/images/البيت_الحديث.jpg"
import leather1 from "../../public/images/IMG_3632.png"
import leather3 from "../../public/images/leather3.jpeg"
import leather4 from "../../public/images/leather4.jpeg"
import leather5 from "../../public/images/leather5.jpeg"
import yellowLeaf from "../../public/images/الشكل-الجمالي-2.png"
const OurGroup = () => {
    gsap.registerPlugin(ScrollTrigger);
    const yellowLeafRef = useRef(null);
    const title = useRef(null);
    const wheat1Ref = useRef(null);
    const wheat2Ref = useRef(null);
    const wheat3Ref = useRef(null);
    const wheatContainer = useRef(null);
    const wheatP1 = useRef(null);
    const wheatP2 = useRef(null);
    const wheatP3 = useRef(null);

    const modernTitle = useRef(null);
    const modernRef = useRef(null);
    const modernRef2 = useRef(null);
    const modernContainer = useRef(null);
    const modernP1 = useRef(null);
    const modernP2 = useRef(null);
    const modernP3 = useRef(null);

    const leatherTitle = useRef(null);
    const leatherRef = useRef(null);
    const leatherRef3 = useRef(null);
    const leatherRef4 = useRef(null);
    const leatherRef5 = useRef(null);
    const leatherContainer = useRef(null);
    const leatherP1 = useRef(null);
    const leatherP2 = useRef(null);
    const leatherP3 = useRef(null);



    useGSAP(() => {
        // Master timeline with single ScrollTrigger for all animations
        const masterTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".our-group",
                start: "top top",
                end: "+=5000",
                scrub: 1.5,
                pin: true,
            }
        });

        // Set initial states for all elements
        masterTimeline
            .set(yellowLeafRef.current, { opacity: 0 })
            .set([wheat2Ref.current, wheat3Ref.current], { opacity: 0 })
            .set([wheatP2.current, wheatP3.current], { opacity: 0, position: 'absolute' })
            .set(modernRef2.current, { opacity: 0 })
            .set([modernP2.current, modernP3.current], { opacity: 0, position: 'absolute' })
            .set([leatherP2.current, leatherP3.current], { opacity: 0, position: 'absolute' })
            .set([modernContainer.current, leatherContainer.current], { opacity: 0 });

        // Title animation
        masterTimeline
            .fromTo(title.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });

        // WHEAT CONTAINER ANIMATIONS
        masterTimeline
            .fromTo(yellowLeafRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .fromTo(wheat1Ref.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .fromTo(wheatP1.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "<")
            .to(wheat1Ref.current, { opacity: 0, duration: 1 }, "+=1")
            .to(wheatP1.current, { opacity: 0, duration: 1 }, "<")
            .fromTo(wheat2Ref.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .fromTo(wheatP2.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "<")
            .to(wheat2Ref.current, { opacity: 0, duration: 1 }, "+=1")
            .to(wheatP2.current, { opacity: 0, duration: 1 }, "<")
            .fromTo(wheat3Ref.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .fromTo(wheatP3.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "<")
            .to([wheat3Ref.current, wheatP3.current], { opacity: 0, duration: 1 }, "+=1")
            .to(wheatContainer.current, { opacity: 0, duration: 0.5 })
 

        // MODERN CONTAINER ANIMATIONS
        masterTimeline
           
            .to(modernContainer.current, { opacity: 1, duration: 0.5 })
            .fromTo(modernRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .fromTo(modernP1.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "<")
            .to(modernRef.current, { opacity: 0, duration: 1 }, "+=1")
            .to(modernP1.current, { opacity: 0, duration: 1 }, "<")
            .fromTo(modernRef2.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .fromTo(modernP2.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "<")
            .to(modernRef2.current, { opacity: 0, duration: 1 }, "+=1")
            .to(modernP2.current, { opacity: 0, duration: 1 }, "<")
            .to(modernContainer.current, { opacity: 0, duration: 0.5 });

        // LEATHER CONTAINER ANIMATIONS
        masterTimeline
            .to(leatherContainer.current, { opacity: 1, duration: 0.5 })
            .fromTo(leatherRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .fromTo(leatherP1.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "<")
            .to(leatherP1.current, { opacity: 0, duration: 1 }, "+=1")
            .fromTo(leatherRef3.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .fromTo(leatherP2.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .to(leatherP2.current, { opacity: 0, duration: 1 }, "+=1")
            .fromTo(leatherRef4.current, { opacity: 0 }, { opacity: 1, duration: 1 })

            .fromTo(leatherP3.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .to(leatherP3.current, { opacity: 0, duration: 1 }, "+=1")
            .fromTo(leatherRef5.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .to(yellowLeafRef.current, { opacity: 0 })
            .to(leatherContainer.current, { opacity: 0, duration: 0.5 })
            
            

    }, []);
    return (
        <div className="our-group  transition-all ease-in-out  relative text-center md:px-24 px-4 py-24 h-screen" dir="rtl">
                <Image src={yellowLeaf} alt="yellowLeaf"  className="w-[70%] rotate-90 absolute top-[0%] end-[-30%] object-contain" ref={yellowLeafRef} />
            <h1 className="text-5xl mb-20 md:text-7xl text-text-shadow-lg/30 font-extrabold text-primary font-beiruti leading-tight">مجموعتنا</h1>
            <div ref={wheatContainer} className="wheat-container absolute top-12 left-0 w-full pt-32 md:px-24 px-4">
                <h3 ref={title} className="text-2xl md:text-4xl text-text-shadow-lg/30 font-extrabold text-secondary font-beiruti leading-tight mb-8">الشركه العربيه لصوامع الغلال</h3>
                <div className="md:grid md:grid-cols-2 gap-8 items-center h-[450px]">
                    <div className="relative h-full">
                        <Image ref={wheat1Ref} className="absolute rounded-3xl object-cover w-full h-full" src={wheat1} alt="wheat" />
                        <Image ref={wheat2Ref} className="absolute rounded-3xl object-cover w-full h-full" src={wheat2} alt="wheat" />
                        <Image ref={wheat3Ref} className="absolute rounded-3xl object-cover w-full h-full" src={wheat3} alt="wheat" />
                    </div>
                    <div className="flex justify-center items-center h-full relative w-3/4">
                        <p ref={wheatP1} className="text-4xl font-beiruti font-medium text-center">واحده من اهم انجازات مجموعه شماخ هي الشركه العربيه لصوامع الغلال ومطاحن الدقيق المحدوده</p>
                        <p ref={wheatP2} className="text-4xl font-beiruti font-medium text-center">تُعد الشركة جزءاً من التوسع الصناعي لمجموعة شماخ، التي بدأت نشاطها في اليمن منذ عام 1950</p>
                        <p ref={wheatP3} className="text-4xl font-beiruti font-medium text-center">تخصص الشركة في استيراد القمح وطحنه وتعبئته، وإنتاج مختلف أنواع الدقيق والمنتجات المشتقة من القمح للسوق اليمني.</p>

                    </div>
                </div>
            </div>
            <div ref={modernContainer} className="modern-home-container absolute top-12 left-0 w-full pt-32 md:px-24 px-4">
                <h3 ref={modernTitle} className="text-4xl md:text-4xl text-text-shadow-lg/30 font-extrabold text-secondary font-beiruti leading-tight mb-8">معرض البيت الحديث</h3>
                <div className="md:grid md:grid-cols-2 gap-8 items-center h-[450px]">
                    <div className="relative h-full">
                        <Image ref={modernRef} className="absolute rounded-3xl object-cover w-full h-full" src={modern1} alt="wheat" />
                        <Image ref={modernRef2} className="absolute rounded-3xl object-cover w-full h-full" src={modern2} alt="wheat" />

                    </div>
                    <div className="flex justify-center items-center h-full relative w-3/4">
                        <p ref={modernP1} className="text-4xl font-beiruti font-medium text-center">تُعد شركة شماخ للدباغة والصناعات الجلدية المحدودة واحدة من الشركات الرائدة في مجال الصناعات الجلدية في اليمن.</p>
                        <p ref={modernP2} className="text-4xl font-beiruti font-medium text-center">تأسست الشركة بهدف تلبية احتياجات السوق المحلي من المنتجات الجلدية عالية الجودة، وتعتمد على أحدث التقنيات والمعدات في عمليات الدباغة والتشطيب.</p>


                    </div>
                </div>
            </div>
            <div ref={leatherContainer} className="leather-container absolute top-12 left-0 w-full pt-32 md:px-24 px-4">
                <h3 ref={leatherTitle} className="text-4xl md:text-4xl text-text-shadow-lg/30 font-extrabold text-secondary font-beiruti leading-tight mb-8">شركة شماخ للدباغه والصناعات الجلديه</h3>
                <div className="md:grid md:grid-cols-2 gap-8 items-center h-[450px]">
                    <div className="relative h-full">
                        <Image ref={leatherRef} className="absolute rounded-3xl object-cover w-full h-full" src={leather1} alt="wheat" />
                        <Image ref={leatherRef3} className="absolute rounded-3xl object-cover w-full h-full" src={leather3} alt="wheat" />
                        <Image ref={leatherRef4} className="absolute rounded-3xl object-cover w-full h-full" src={leather4} alt="wheat" />
                        <Image ref={leatherRef5} className="absolute rounded-3xl object-cover w-full h-full" src={leather5} alt="wheat" />

                    </div>
                    <div className="flex justify-center items-center h-full  relative w-3/4">
                        <p ref={leatherP1} className="text-4xl font-beiruti font-medium text-center">تُعد شركة شماخ للدباغة والصناعات الجلدية المحدودة إحدى الركائز الصناعية لمجموعة "سالم محمد شماخ وشركاه" في اليمن، وهي من أوائل الشركات التي استثمرت في تحويل الموارد المحلية إلى منتجات صناعية.</p>
                        <p ref={leatherP2} className="text-4xl font-beiruti font-medium text-center">يقع المصنع في مدينة الحديدة (طريق جيزان، كيلو 25). تتخصص الشركة في دباغة جلود الأغنام والماعز والأبقار وتحويلها من جلود خام إلى جلود جاهزة للتصنيع أو التصدير (مثل جلود Pickled وWetblue).</p>
                        <p ref={leatherP3} className="text-4xl font-beiruti font-medium text-center">تعتمد الشركة بشكل كبير على التصدير، حيث تشكل الصادرات ما بين 85% إلى 90% من إجمالي إنتاجها، وتصل منتجاتها إلى أسواق دولية مثل إندونيسيا، سوريا، والسعودية.</p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurGroup