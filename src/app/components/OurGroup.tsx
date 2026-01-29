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
import metal from "../../public/images/metal.jpg"
import metal2 from "../../public/images/metal2.jpg"
import general from "../../public/images/general-trad.jpg"
import tego9 from "../../public/images/tego9.webp"
import karry from "../../public/images/karry.png"
import JMC from "../../public/images/JMC.png"
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

    const metalTitle = useRef(null);
    const metalRef = useRef(null);
    const metalRef2 = useRef(null);
    const metalContainer = useRef(null);
    const metalP1 = useRef(null);
    const metalP2 = useRef(null);
    const metalP3 = useRef(null);
    const generalRef = useRef(null);
    const generalContainer = useRef(null);
    const generalP1 = useRef(null);
    const generalP2 = useRef(null);
    const generalP3 = useRef(null);
    const tego9Ref = useRef(null);
    const karryRef = useRef(null);
    const JMCref = useRef(null);
    const tego9P1 = useRef(null);
    const tego9P2 = useRef(null);
    const tego9P3 = useRef(null);
    const karryP1 = useRef(null);
    const karryP2 = useRef(null);
    const karryP3 = useRef(null);
    const JMCp1 = useRef(null);
    const JMCp2 = useRef(null);
    const JMCp3 = useRef(null);
    const generalTitle = useRef(null);
    const CarsContainer = useRef(null);
    const CarsTitle = useRef(null);
    const JMCrefP2 = useRef(null);
    const carsSection = useRef(null);

    useGSAP(() => {
        // Master timeline with single ScrollTrigger for all animations
        const masterTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".our-group",
                start: "top top",
                end: "+=8000", // Increased for more sections
                scrub: 1, // Smoother scrubbing with slight delay
                pin: true,
                anticipatePin: 1, // Prevents bounce/jump when pin starts/ends
                pinSpacing: true, // Ensures proper spacing after pinned section
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
            .set([generalP2.current, generalP3.current], { opacity: 0, position: 'absolute' })
            .set([metalP2.current, metalP3.current], { opacity: 0, position: 'absolute' })
            .set(metalRef2.current, { opacity: 0 })
            .set([JMCref.current, karryRef.current], { opacity: 0 })
            .set([JMCrefP2.current, karryP3.current], { opacity: 0, position: 'absolute' })
            .set([modernContainer.current, leatherContainer.current, generalContainer.current, metalContainer.current, CarsContainer.current], { opacity: 0 });

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
            .to([leatherRef5.current, leatherContainer.current], { opacity: 0, duration: 0.5 }, "+=0.5");

        // GENERAL CONTAINER ANIMATIONS (Food sector)
        masterTimeline
            .to(generalContainer.current, { opacity: 1, duration: 0.5 })
            .fromTo(generalRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .fromTo(generalP1.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "<")
            .to(generalP1.current, { opacity: 0, duration: 1 }, "+=1")
            .fromTo(generalP2.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .to(generalP2.current, { opacity: 0, duration: 1 }, "+=1")
            .fromTo(generalP3.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .to([generalP3.current, generalRef.current, generalContainer.current], { opacity: 0, duration: 0.5 }, "+=0.5");

        // METAL CONTAINER ANIMATIONS (Steel sector)
        masterTimeline
            .to(metalContainer.current, { opacity: 1, duration: 0.5 })
            .fromTo(metalRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .fromTo(metalP1.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "<")
            .to(metalP1.current, { opacity: 0, duration: 1 }, "+=1")
            .fromTo(metalRef2.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .fromTo(metalP2.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "<")
            .to(metalP2.current, { opacity: 0, duration: 1 }, "+=1")
            .fromTo(metalP3.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .to([metalP3.current, metalRef2.current, metalContainer.current], { opacity: 0, duration: 0.5 }, "+=0.5");

        // CARS CONTAINER ANIMATIONS (Automotive sector)
        masterTimeline
            .to(CarsContainer.current, { opacity: 1, duration: 0.5 })
            .fromTo(carsSection.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .fromTo(tego9Ref.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .fromTo(tego9P1.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "<")
            .to(tego9P1.current, { opacity: 0, duration: 1 }, "+=1")
            .fromTo(JMCrefP2.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .to(tego9Ref.current, { opacity: 0, duration: 1 }, "<")
            .fromTo(JMCref.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "<")
            .to(JMCrefP2.current, { opacity: 0, duration: 1 }, "+=1")
            .to(JMCref.current, { opacity: 0, duration: 1 }, "<")
            .fromTo(karryRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .fromTo(karryP3.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "<")
            // Final exit animation - fade out everything smoothly before unpin
            .to([karryP3.current, karryRef.current, CarsContainer.current, yellowLeafRef.current], {
                opacity: 0,
                duration: 1
            }, "+=0.5");

    }, []);
    return (
        <div className="our-group  transition-all ease-in-out  relative text-center md:px-24 px-4 py-24 h-screen" dir="rtl">
            <Image src={yellowLeaf} alt="yellowLeaf" className="w-[70%] rotate-90 absolute top-[0%] end-[-30%] object-contain" ref={yellowLeafRef} />
            <h1 className="text-5xl mb-20 md:text-7xl text-text-shadow-lg/30 font-extrabold text-primary font-beiruti leading-tight">مجموعتنا</h1>
            <div ref={wheatContainer} className="wheat-container absolute top-12 left-0 w-full pt-32 md:px-24 px-4">
                <h3 ref={title} className="text-2xl text-black md:text-4xl text-text-shadow-lg/30 font-extrabold text-secondary font-beiruti leading-tight mb-8">الشركه العربيه لصوامع الغلال</h3>
                <div className="md:grid md:grid-cols-2 gap-8 items-center md:h-96 h-[250px]">
                    <div className="relative h-full">
                        <Image ref={wheat1Ref} className="absolute rounded-3xl object-cover md:w-full w-full md:h-full h-full" src={wheat1} alt="wheat" />
                        <Image ref={wheat2Ref} className="absolute rounded-3xl object-cover md:w-full w-full md:h-full h-full" src={wheat2} alt="wheat" />
                        <Image ref={wheat3Ref} className="absolute rounded-3xl object-cover md:w-full w-full md:h-full h-full" src={wheat3} alt="wheat" />
                    </div>
                    <div className="flex justify-center items-center h-full relative md:w-3/4 w-full">
                        <p ref={wheatP1} className="md:text-4xl text-black text-2xl font-beiruti font-medium text-center">واحده من اهم انجازات مجموعه شماخ هي الشركه العربيه لصوامع الغلال ومطاحن الدقيق المحدوده</p>
                        <p ref={wheatP2} className="md:text-4xl text-black text-2xl font-beiruti font-medium text-center">تُعد الشركة جزءاً من التوسع الصناعي لمجموعة شماخ، التي بدأت نشاطها في اليمن منذ عام 1950</p>
                        <p ref={wheatP3} className="md:text-4xl text-black text-2xl font-beiruti font-medium text-center">تخصص الشركة في استيراد القمح وطحنه وتعبئته، وإنتاج مختلف أنواع الدقيق والمنتجات المشتقة من القمح للسوق اليمني.</p>

                    </div>
                </div>
            </div>
            <div ref={modernContainer} className="modern-home-container absolute top-12 left-0 w-full pt-32 md:px-24 px-4">
                <h3 ref={modernTitle} className="text-4xl text-black md:text-4xl text-text-shadow-lg/30 font-extrabold text-secondary font-beiruti leading-tight mb-8">معرض البيت الحديث</h3>
                <div className="md:grid md:grid-cols-2 gap-8 items-center md:h-96 h-[250px]">
                    <div className="relative h-full">
                        <Image ref={modernRef} className="absolute rounded-3xl object-cover md:w-full w-full md:h-full h-full" src={modern1} alt="wheat" />
                        <Image ref={modernRef2} className="absolute rounded-3xl object-cover md:w-full w-full md:h-full h-full" src={modern2} alt="wheat" />

                    </div>
                    <div className="flex justify-center items-center h-full relative md:w-3/4 w-full">
 
                        <p ref={modernP1} className="md:text-4xl text-black text-2xl font-beiruti font-medium text-center">تُعد شركة شماخ للدباغة والصناعات الجلدية المحدودة واحدة من الشركات الرائدة في مجال الصناعات الجلدية في اليمن.</p>
                        <p ref={modernP2} className="md:text-4xl text-black text-2xl font-beiruti font-medium text-center">تأسست الشركة بهدف تلبية احتياجات السوق المحلي من المنتجات الجلدية عالية الجودة، وتعتمد على أحدث التقنيات والمعدات في عمليات الدباغة والتشطيب.</p>


                    </div>
                </div>
            </div>
            <div ref={leatherContainer} className="leather-container absolute top-12 left-0 w-full pt-32 md:px-24 px-4">
                <h3 ref={leatherTitle} className="text-4xl text-black md:text-4xl text-text-shadow-lg/30 font-extrabold text-secondary font-beiruti leading-tight mb-8">شركة شماخ للدباغه والصناعات الجلديه</h3>
                <div className="md:grid md:grid-cols-2 gap-8 items-center md:h-96 h-[250px]">
                    <div className="relative h-full">
                        <Image ref={leatherRef} className="absolute rounded-3xl object-cover md:w-full w-full md:h-full h-full" src={leather1} alt="wheat" />
                        <Image ref={leatherRef3} className="absolute rounded-3xl object-cover md:w-full w-full md:h-full h-full" src={leather3} alt="wheat" />
                        <Image ref={leatherRef4} className="absolute rounded-3xl object-cover md:w-full w-full md:h-full h-full" src={leather4} alt="wheat" />
                        <Image ref={leatherRef5} className="absolute rounded-3xl object-cover md:w-full w-full md:h-full h-full" src={leather5} alt="wheat" />

                    </div>
                    <div className="flex justify-center items-center h-full  relative md:w-3/4 w-full">
                        <p ref={leatherP1} className="md:text-4xl text-black text-2xl font-beiruti font-medium text-center">تُعد شركة شماخ للدباغة والصناعات الجلدية المحدودة إحدى الركائز الصناعية لمجموعة "سالم محمد شماخ وشركاه" في اليمن، وهي من أوائل الشركات التي استثمرت في تحويل الموارد المحلية إلى منتجات صناعية.</p>
                        <p ref={leatherP2} className="md:text-4xl text-black text-2xl font-beiruti font-medium text-center">يقع المصنع في مدينة الحديدة (طريق جيزان، كيلو 25). تتخصص الشركة في دباغة جلود الأغنام والماعز والأبقار وتحويلها من جلود خام إلى جلود جاهزة للتصنيع أو التصدير (مثل جلود Pickled وWetblue).</p>
                        <p ref={leatherP3} className="md:text-4xl text-black text-2xl font-beiruti font-medium text-center">تعتمد الشركة بشكل كبير على التصدير، حيث تشكل الصادرات ما بين 85% إلى 90% من إجمالي إنتاجها، وتصل منتجاتها إلى أسواق دولية مثل إندونيسيا، سوريا، والسعودية.</p>

                    </div>
                </div>
            </div>
            <div ref={generalContainer} className="general-container absolute top-12 left-0 w-full pt-32 md:px-24 px-4">
                <h3 ref={generalTitle} className="text-4xl text-black md:text-4xl text-text-shadow-lg/30 font-extrabold text-secondary font-beiruti leading-tight mb-8">شركة شماخ للتجاره العامه  </h3>
                <div className="md:grid md:grid-cols-2 gap-8 items-center md:h-96 h-[250px]">
                    <div className="relative h-full">
                        <Image ref={generalRef} className="absolute rounded-3xl object-cover md:w-full w-full md:h-full h-full" src={general} alt="wheat" />

                    </div>
                    <div className="flex justify-center items-center h-full  relative md:w-3/4 w-full">
                        <p ref={generalP1} className="md:text-4xl text-black text-2xl font-beiruti font-medium text-center">القطاع الغذائي</p>
                        <p ref={generalP2} className="md:text-4xl text-black text-2xl font-beiruti font-medium text-center">العلامات الغذائية: الريادة في استيراد وتسويق أجود أنواع الأرز (مثل أرز الطائر، العلمين، وأبو تلفون)، والتي أصبحت أسماءً موثوقة في المطبخ اليمني.</p>
                        <p ref={generalP3} className="md:text-4xl text-black text-2xl font-beiruti font-medium text-center">البقوليات والحبوب: توفير أفضل أنواع البقوليات  المنقاة بعناية من مزارع عالمية لضمان القيمة الغذائية والمذاق الأصيل.

                            بالاضافه الى استيراد وتوزيع أجود أنواع معجون الطماطم (الصلصة) والمعلبات الغذائية التي تمتاز بالجودة الفائقة وفترات الصلاحية  الموثوقة.</p>

                    </div>
                </div>
            </div>
            <div ref={metalContainer} className="metal-container absolute top-12 left-0 w-full pt-32 md:px-24 px-4">
                <h3 ref={metalTitle} className="text-4xl text-black md:text-4xl text-text-shadow-lg/30 font-extrabold text-secondary font-beiruti leading-tight mb-8">شركة شماخ للتجاره العامه  </h3>
                <div className="md:grid md:grid-cols-2 gap-8 items-center md:h-96 h-[250px]">
                    <div className="relative h-full">
                        <Image ref={metalRef} className="absolute rounded-3xl object-cover md:w-full w-full md:h-full h-full" src={metal} alt="wheat" />
                        <Image ref={metalRef2} className="absolute rounded-3xl object-cover md:w-full w-full md:h-full h-full" src={metal2} alt="wheat" />

                    </div>
                    <div className="flex justify-center items-center h-full  relative md:w-3/4 w-full">
                        <p ref={metalP1} className="md:text-4xl text-black text-2xl font-beiruti font-medium text-center">قطاع الحديد والصلب</p>
                        <p ref={metalP2} className="md:text-4xl text-black text-2xl font-beiruti font-medium text-center">حديد التسليح: استيراد قضبان الحديد عالي المقاومة بمختلف القياسات من أرقى المصانع</p>
                        <p ref={metalP3} className="md:text-4xl text-black text-2xl font-beiruti font-medium text-center">توفير الحلول الإنشائية والمواد الخام للمشاريع الكبرى والمقاولين بأسعار تنافسية وسلاسل توريد مستمرة.</p>

                    </div>
                </div>
            </div>
            <div ref={CarsContainer} className="metal-container absolute top-12 left-0 w-full pt-32 md:px-24 px-4">
                <h3 ref={CarsTitle} className="text-4xl text-black md:text-4xl text-text-shadow-lg/30 font-extrabold text-secondary font-beiruti leading-tight mb-8">شركة شماخ للتجاره العامه  </h3>
                <div className="md:grid md:grid-cols-2 gap-8 items-center md:h-96 h-[250px]">
                    <div className="relative h-full">
                        <Image ref={tego9Ref} className="absolute rounded-3xl object-cover md:w-full w-full md:h-full h-full" src={tego9} alt="wheat" />
                        <Image ref={JMCref} className="absolute rounded-3xl object-cover md:w-full w-full md:h-full h-full" src={JMC} alt="wheat" />
                        <Image ref={karryRef} className="absolute rounded-3xl object-cover md:w-full w-full md:h-full h-full" src={karry} alt="wheat" />

                    </div>
                    <div className="flex justify-center items-center h-full  relative md:w-3/4 w-full">
                        <p ref={tego9P1} className="md:text-4xl text-black text-2xl font-beiruti font-medium text-center">في Chery نسعى لتقديم تجربة قيادة استثنائية تجمع بين التكنولوجيا الحديثة، والأداء العالي، والتصميم المبتكر. نعمل بشغف لنكون دائمًا الشريك الموثوق الذي يواكب تطلعات عملائنا، ويرتقي بتجربتهم في كل تفاصيل القيادة.</p>
                        <p ref={JMCrefP2} className="md:text-4xl text-black text-2xl font-beiruti font-medium text-center">نقدم لكم سيارات JMC العالميه ، سيارات عمليه وشاحنات ذو كفائه عاليه </p>
                        <p ref={karryP3} className="md:text-4xl text-black text-2xl font-beiruti font-medium text-center">سيارات كاري هي شركة صينية لتصنيع السيارات أسستها شيري في عام 2009 وهي متخصصة في إنتاج المركبات التجارية الخفيفة ومركبات نقل الركاب. وهي شركة تابعة لشركة شيري للمركبات التجارية (آنهوي) المحدودة ومقرها في مدينة ووهو بمقاطعة آنهوي في الصين</p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurGroup