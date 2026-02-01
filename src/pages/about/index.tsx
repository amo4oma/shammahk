"use client";
import RootLayout from '../../app/layout'
import SaherdHearoSection from '../../app/components/SaherdHearoSection'
import { motion } from 'motion/react';
import { Eye, Target, MessageSquare } from 'lucide-react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { WavyBackground } from '../../app/components/ui/wavy-background';
import w1 from "../../public/images/صوامع1.jpg"
import m1 from "../../public/images/modern2.jpg"
import ariston from "../../public/images/Ariston-logo.png";
import lg from "../../public/images/LG_logo_(2014).svg.png";
import westpoint from "../../public/images/westpoint-logo-png-transparent.png";
import tefal from "../../public/images/Tefal_logo.svg";
import general from "../../public/images/general-trad.jpg";
import IMG from "../../public/images/IMG_3632.png";
import metal from "../../public/images/metal.jpg";
import castrol from "../../public/images/caltex-oils.png"
import tegog from "../../public/images/tego9.webp";
import jmc from "../../public/images/JMC.png";
import karryLogo from "../../public/images/karrylogo.png";
import cherry from "../../public/images/Chery_logo.svg.png"
import JMCLogo from "../../public/images/JMC_Motor_logo.png"
import klass from "../../public/images/klass.webp"
import karry from "../../public/images/karry.png"
import castrolLogo from "../../public/images/Castrol_logo_2023.svg.png"

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const visionRef = useRef<HTMLDivElement>(null);
    const missionRef = useRef<HTMLDivElement>(null);
    const messageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sections = [visionRef.current, missionRef.current, messageRef.current];

        sections.forEach((section, index) => {
            if (section) {
                gsap.fromTo(
                    section,
                    {
                        opacity: 0,
                        y: 100,
                        scale: 0.9,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                            end: "top 30%",
                            scrub: 1,
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <RootLayout>
            <div dir='rtl' className="w-full h-full relative">
                <div className="relative h-full top-20 left-0 w-full z-10">
                    <SaherdHearoSection title="عن المجموعة" />
                </div>

                {/* Sticky Scroll Container */}
                <div ref={containerRef} className="relative">
                    <div className="flex flex-col lg:flex-row px-6 md:px-16 lg:px-36 pt-10 md:pt-16 lg:pt-20 gap-8 lg:gap-16">
                        {/* Sticky Left Side - Company Info (Desktop) / Top Section (Mobile) */}
                        <div className="w-full lg:w-1/2 lg:sticky lg:top-32 lg:self-start">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-beiruti font-bold text-primary mb-4 md:mb-6 lg:mb-8">
                                    من نحن
                                </h2>
                                <p className='text-black font-semibold text-shadow-lg text-base md:text-lg lg:text-xl font-beiruti leading-relaxed'>
                                    تأسست مجموعة الشماخ في الجمهورية اليمنية عام 1950م، ومنذ ذلك الحين وهي تشكل ركيزة أساسية في صرح الاقتصاد الوطني. على مدار أكثر من 70 عاماً، نجحت المجموعة في التحول من شركة تجارية طموحة إلى تكتل اقتصادي رائد يضم تحت لوائه عدة شركات متخصصة تلبي احتياجات السوق اليمني بأعلى معايير الجودة العالمية.
                                    <br /><br />
                                    لقد توجت مسيرتنا بنيل "وسام الصناعة من الدرجة الثانية" من القصر الجمهوري، وهو تكريم نعتز به ويعكس حجم مساهمتنا في النهضة الصناعية والتجارية للبلاد.
                                </p>
                            </motion.div>
                        </div>

                        {/* Scrolling Right Side - Sections */}
                        <div className="w-full lg:w-1/2 space-y-16 md:space-y-32 lg:space-y-96 pb-16 md:pb-24 lg:pb-32">
                            {/* Vision Section */}
                            <div ref={visionRef} className="text-black font-beiruti relative p-4 md:p-6 lg:p-8 opacity-0">
                                <motion.div
                                    animate={{ y: [0, -8, 0], scale: [1, 1.02, 1] }}
                                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-3xl bg-primary/20 absolute -top-2 -right-2 md:-top-3 md:-right-3 lg:-top-4 lg:-right-4 -z-10"
                                />
                                <div className="flex flex-col items-start gap-4 md:gap-5 lg:gap-6 bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-xl">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0, rotate: -15 }}
                                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
                                        viewport={{ once: true }}
                                    >
                                        <motion.div
                                            animate={{ y: [0, -5, 0], rotate: [0, 3, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                            className="bg-primary/30 p-3 md:p-4 lg:p-6 rounded-xl md:rounded-2xl"
                                        >
                                            <Eye size={32} className="text-primary md:hidden" strokeWidth={2.5} />
                                            <Eye size={40} className="text-primary hidden md:block lg:hidden" strokeWidth={2.5} />
                                            <Eye size={48} className="text-primary hidden lg:block" strokeWidth={2.5} />
                                        </motion.div>
                                    </motion.div>
                                    <div className="flex-1">
                                        <h3 className='text-3xl md:text-4xl lg:text-5xl font-beiruti font-bold text-primary mb-2 md:mb-3 lg:mb-4'>رؤيتنا</h3>
                                        <p className="text-base md:text-lg lg:text-xl font-beiruti font-semibold leading-relaxed text-gray-700">
                                            "أن نصنع بتاريخنا التجاري والاجتماعي وبإنجازاتنا السعادة للفرد والمجتمع ونحقق معهما الريادة والتميز أينما نكون وحيثما ينتظرنا الآخرون ..."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Mission Section */}
                            <div ref={missionRef} className="text-black font-beiruti relative p-4 md:p-6 lg:p-8 opacity-0">
                                <motion.div
                                    animate={{ y: [0, -10, 0], scale: [1, 1.03, 1] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-3xl bg-neutral/20 absolute -top-2 -left-2 md:-top-3 md:-left-3 lg:-top-4 lg:-left-4 -z-10"
                                />
                                <div className="flex flex-col items-start gap-4 md:gap-5 lg:gap-6 bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-xl">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0, rotate: 15 }}
                                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
                                        viewport={{ once: true }}
                                    >
                                        <motion.div
                                            animate={{ y: [0, -6, 0], rotate: [0, -3, 0] }}
                                            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                                            className="bg-neutral/30 p-3 md:p-4 lg:p-6 rounded-xl md:rounded-2xl"
                                        >
                                            <Target size={32} className="text-neutral md:hidden" strokeWidth={2.5} />
                                            <Target size={40} className="text-neutral hidden md:block lg:hidden" strokeWidth={2.5} />
                                            <Target size={48} className="text-neutral hidden lg:block" strokeWidth={2.5} />
                                        </motion.div>
                                    </motion.div>
                                    <div className="flex-1">
                                        <h3 className='text-3xl md:text-4xl lg:text-5xl font-beiruti font-bold text-neutral mb-2 md:mb-3 lg:mb-4'>مهمتنا</h3>
                                        <p className="text-base md:text-lg lg:text-xl font-beiruti font-semibold leading-relaxed text-gray-700">
                                            "تقديم منتجات وخدمات عالية الجودة تلبي احتياجات عملائنا وتساهم في تطوير الاقتصاد الوطني، مع الحفاظ على أعلى معايير النزاهة والمسؤولية الاجتماعية."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Message Section */}
                            <div ref={messageRef} className="text-black font-beiruti relative p-4 md:p-6 lg:p-8 opacity-0">
                                <motion.div
                                    animate={{ y: [0, -7, 0], scale: [1, 1.025, 1] }}
                                    transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-3xl bg-highlight/20 absolute -top-2 -right-2 md:-top-3 md:-right-3 lg:-top-4 lg:-right-4 -z-10"
                                />
                                <div className="flex flex-col items-start gap-4 md:gap-5 lg:gap-6 bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-xl">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0, rotate: -10 }}
                                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                        transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200 }}
                                        viewport={{ once: true }}
                                    >
                                        <motion.div
                                            animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                                            className="bg-highlight/30 p-3 md:p-4 lg:p-6 rounded-xl md:rounded-2xl"
                                        >
                                            <MessageSquare size={32} className="text-highlight md:hidden" strokeWidth={2.5} />
                                            <MessageSquare size={40} className="text-highlight hidden md:block lg:hidden" strokeWidth={2.5} />
                                            <MessageSquare size={48} className="text-highlight hidden lg:block" strokeWidth={2.5} />
                                        </motion.div>
                                    </motion.div>
                                    <div className="flex-1">
                                        <h3 className='text-3xl md:text-4xl lg:text-5xl font-beiruti font-bold text-highlight mb-2 md:mb-3 lg:mb-4'>رسالتنا</h3>
                                        <p className="text-base md:text-lg lg:text-xl font-beiruti font-semibold leading-relaxed text-gray-700">
                                            "مجموعة شماخ مجموعة إقتصادية عريقة مقرها الجمهورية اليمنية ولها إمتداد بعدد من بلدان العالم يتعدد نشاطها التجاري بين شركات ومؤسسات صناعية وتجارية وخدمية وسياحية تنشط في قطاعات ذات مردودية وقيمة مضافة للعميل وكافة الشركاء على أساس التكامل وضمان الجودة والتحديث المستمر مع تأكيد الريادة ودعم الثقة والتميز."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Our Sectors Section */}
                <section className="px-6 md:px-16 lg:px-36 py-16 md:py-24 lg:py-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className='text-4xl md:text-5xl lg:text-6xl font-beiruti font-bold text-primary mb-12 md:mb-16 lg:mb-20 text-center'
                    >
                        قطاعاتنا
                    </motion.h2>

                    <div className="space-y-16 md:space-y-24 lg:space-y-32">
                        {/* Wheat Silos Sector */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid md:grid-cols-2 gap-8 items-center"
                        >
                            <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                                <Image src={w1} alt="الشركة العربية لصوامع الغلال" fill className="object-cover" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl text-neutral text-shadow-lg md:text-4xl font-beiruti font-bold text-secondary">الشركة العربية لصوامع الغلال</h3>
                                <p className="text-lg md:text-xl font-beiruti text-gray-700 leading-relaxed">
                                    واحدة من أهم إنجازات مجموعة شماخ هي الشركة العربية لصوامع الغلال ومطاحن الدقيق المحدودة. تُعد الشركة جزءاً من التوسع الصناعي لمجموعة شماخ، التي بدأت نشاطها في اليمن منذ عام 1950. تتخصص الشركة في استيراد القمح وطحنه وتعبئته، وإنتاج مختلف أنواع الدقيق والمنتجات المشتقة من القمح للسوق اليمني.
                                </p>
                            </div>
                        </motion.div>

                        {/* Modern Home Sector */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid md:grid-cols-2 gap-8 items-center"
                        >
                            <div className="md:order-2 relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                                <Image src={m1} alt="معرض البيت الحديث" fill className="object-cover" />
                                <div className="absolute inset-0 flex justify-center items-center bg-primary/20 z-0">
                                    <div className="grid grid-cols-4 gap-3">
                                        <div className="bg-white/60 w-fit rounded-2xl p-3 flex justify-center items-center">
                                            <Image src={lg} width={200} height={200} alt="lg" />
                                        </div>
                                        <div className="bg-white/60 w-fit rounded-2xl p-3 flex justify-center items-center">
                                            <Image src={ariston} width={200} height={200} alt="ariston" />
                                        </div>
                                        <div className="bg-white/60 w-fit rounded-2xl p-3 flex justify-center items-center">
                                            <Image src={tefal} width={200} height={200} alt="tefal" />
                                        </div>
                                        <div className="bg-white/60 w-fit rounded-2xl p-3 flex justify-center items-center">
                                            <Image src={westpoint} width={200} height={200} alt="westpoint" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:order-1 space-y-4">
                                <h3 className="text-3xl md:text-4xl text-shadow-lg font-beiruti font-bold text-primary">معرض البيت الحديث</h3>
                                <p className="text-lg md:text-xl font-beiruti text-gray-700 leading-relaxed">
                                    تُعد شركة شماخ للدباغة والصناعات الجلدية المحدودة واحدة من الشركات الرائدة في مجال الصناعات الجلدية في اليمن. تأسست الشركة بهدف تلبية احتياجات السوق المحلي من المنتجات الجلدية عالية الجودة، وتعتمد على أحدث التقنيات والمعدات في عمليات الدباغة والتشطيب.
                                </p>
                            </div>
                        </motion.div>

                        {/* Leather Industry Sector */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid md:grid-cols-2 gap-8 items-center"
                        >
                            <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                                <Image src={IMG} alt="شركة شماخ للدباغة والصناعات الجلدية" fill className="object-cover" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-4xl text-shadow-lg  font-beiruti font-bold text-accent">شركة شماخ للدباغة والصناعات الجلدية</h3>
                                <p className="text-lg md:text-xl font-beiruti text-gray-700 leading-relaxed">
                                    تُعد شركة شماخ للدباغة والصناعات الجلدية المحدودة إحدى الركائز الصناعية لمجموعة "سالم محمد شماخ وشركاه" في اليمن. تتخصص الشركة في دباغة جلود الأغنام والماعز والأبقار وتحويلها من جلود خام إلى جلود جاهزة للتصنيع أو التصدير. تعتمد الشركة بشكل كبير على التصدير، حيث تشكل الصادرات ما بين 85% إلى 90% من إجمالي إنتاجها.
                                </p>
                            </div>
                        </motion.div>

                        {/* General Trading - Food Sector */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid md:grid-cols-2 gap-8 items-center"
                        >
                            <div className="md:order-2 relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                                <Image src={general} alt="شركة شماخ للتجارة العامة - القطاع الغذائي" fill className="object-cover" />
                            </div>
                            <div className="md:order-1 space-y-4">
                                <h3 className="text-3xl md:text-4xl text-shadow-lg font-beiruti font-bold text-primary">شركة شماخ للتجارة العامة</h3>
                                <h4 className="text-2xl md:text-3xl text-shadow-lg font-beiruti font-semibold text-primary">القطاع الغذائي</h4>
                                <p className="text-lg md:text-xl font-beiruti text-gray-700 leading-relaxed">
                                    الريادة في استيراد وتسويق أجود أنواع الأرز (مثل أرز الطائر، العلمين، وأبو تلفون)، والبقوليات والحبوب المنقاة بعناية من مزارع عالمية. بالإضافة إلى استيراد وتوزيع أجود أنواع معجون الطماطم والمعلبات الغذائية التي تمتاز بالجودة الفائقة.
                                </p>
                            </div>
                        </motion.div>

                        {/* Metal & Steel Sector */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid md:grid-cols-2 gap-8 items-center"
                        >
                            <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                                <Image src={metal} alt="قطاع الحديد والصلب" fill className="object-cover" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-4xl font-beiruti font-bold text-shadow-lg text-black">شركة شماخ للتجارة العامة</h3>
                                <h4 className="text-2xl md:text-3xl font-beiruti font-semibold text-primary">قطاع الحديد والصلب</h4>
                                <p className="text-lg md:text-xl font-beiruti text-gray-700 leading-relaxed">
                                    استيراد قضبان الحديد عالي المقاومة بمختلف القياسات من أرقى المصانع. توفير الحلول الإنشائية والمواد الخام للمشاريع الكبرى والمقاولين بأسعار تنافسية وسلاسل توريد مستمرة.
                                </p>
                            </div>
                        </motion.div>
                        {/* General Trading - Food Sector */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid md:grid-cols-2 gap-8 items-center"
                        >
                            <div className="md:order-2 relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                                <Image src={castrol} alt="شركة شماخ للتجارة العامة - القطاع الغذائي" fill className="object-cover" />
                            </div>
                            <div className="md:order-1 space-y-4">
                                <h3 className="text-3xl md:text-4xl text-shadow-lg font-beiruti font-bold text-primary">شركة شماخ للتجارة العامة</h3>
                                <h4 className="text-2xl md:text-3xl text-shadow-lg font-beiruti font-semibold text-primary">القطاع زيوت المحركات</h4>

                                <p className="text-lg md:text-xl font-beiruti text-gray-700 leading-relaxed">
                                    تعتبر زيوت المحركات من أهم المنتجات التي تقدمها شركة شماخ للتجارة العامة، حيث توفر الشركة مجموعة واسعة من زيوت المحركات عالية الجودة التي تلبي احتياجات مختلف أنواع السيارات والمعدات. تتميز هذه الزيوت بخصائصها الفريدة التي تضمن أداءً عاليًا وحماية للمحرك من التآكل والتلف.
                                </p>
                            </div>
                        </motion.div>
                        {/* Automotive Sector */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-linear-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12"
                        >
                            <h3 className="text-3xl md:text-4xl font-beiruti font-bold text-secondary mb-8 text-center text-black text-shadow-indigo-50">قطاع السيارات والشاحنات</h3>

                            <div className="grid md:grid-cols-3 gap-8">
                                {/* Chery */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl p-6 shadow-lg"
                                >
                                    <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                                        <Image src={tegog} alt="Chery" fill className="object-contain md:object-cover" />
                                    </div>
                                    <h4 className="text-2xl font-beiruti font-bold text-primary mb-3">Chery</h4>
                                    <p className="text-base font-beiruti text-gray-700">
                                        نسعى لتقديم تجربة قيادة استثنائية تجمع بين التكنولوجيا الحديثة، والأداء العالي، والتصميم المبتكر.
                                    </p>
                                </motion.div>

                                {/* JMC */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl p-6 shadow-lg"
                                >
                                    <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                                        <Image src={jmc} alt="JMC" fill className="object-contain md:object-cover" />
                                    </div>
                                    <h4 className="text-2xl font-beiruti font-bold text-primary mb-3">JMC</h4>
                                    <p className="text-base font-beiruti text-gray-700">
                                        نقدم لكم سيارات JMC العالمية، سيارات عملية وشاحنات ذو كفاءة عالية.
                                    </p>
                                </motion.div>

                                {/* Karry */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl p-6 shadow-lg"
                                >
                                    <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                                        <Image src={karry} alt="Karry" fill className="object-contain md:object-cover" />
                                    </div>
                                    <h4 className="text-2xl font-beiruti font-bold text-primary mb-3">Karry</h4>
                                    <p className="text-base font-beiruti text-gray-700">
                                        متخصصة في إنتاج المركبات التجارية الخفيفة ومركبات نقل الركاب بجودة عالية.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>
                  <section className="w-full relative ">
                <WavyBackground
                    className="w-full"
                    containerClassName="py-16 md:py-24 lg:py-32"
                    colors={["#a43a3a", "#d38d7c", "#e4b4a7", "#ffff", "#ffff"]}
                    waveWidth={50}
                    backgroundFill="#ffffff"
                    blur={10}
                    speed="slow"
                    waveOpacity={0.3}
                >
                  
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className='text-4xl md:text-5xl lg:text-6xl font-beiruti font-bold text-primary mb-12 md:mb-16 lg:mb-20 text-center'
                        >
                            وكالات مجموعة شماخ
                        </motion.h2>
                        <div className="relative w-full px-4 pb-8 overflow-hidden">
                            {/* Scattered floating products grid */}
                            <div className="relative flex flex-wrap justify-center items-center gap-3 max-w-5xl mx-auto">
                                {/* Row 1 - 3 products with varying sizes and animations */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0, rotate: -15 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    transition={{ duration: 0.6, delay: 1.0, type: "spring", stiffness: 200 }}
                                    className="relative w-20 h-20 md:w-48 md:h-48 -mt-2"
                                >
                                    <motion.div
                                        animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-full h-full"
                                    >
                                        <Image src={karryLogo} alt="قيصر" className="w-full h-full object-contain drop-shadow-xl" />
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0, rotate: 10 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 200 }}
                                    className="relative w-20 h-20 md:w-48 md:h-48 mt-4"
                                >
                                    <motion.div
                                        animate={{ y: [0, -6, 0], rotate: [0, -2, 0] }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                        className="w-full h-full"
                                    >
                                        <Image src={lg} alt="ارز شماخ" className="w-full h-full object-contain drop-shadow-xl" />
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0, rotate: -8 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    transition={{ duration: 0.6, delay: 1.4, type: "spring", stiffness: 200 }}
                                    className="relative w-20 h-20 md:w-48 md:h-48 -mt-1"
                                >
                                    <motion.div
                                        animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                                        className="w-full h-full"
                                    >
                                        <Image src={westpoint} alt="ارز البيت" className="w-full h-full object-contain drop-shadow-xl" />
                                    </motion.div>
                                </motion.div>

                                {/* Row 2 - Larger hero products */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.7, delay: 1.6, type: "spring", stiffness: 150 }}
                                    className="relative w-20 h-20 md:w-48 md:h-48 -ml-2"
                                >
                                    <motion.div
                                        animate={{ y: [0, -5, 0], scale: [1, 1.02, 1] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-full h-full"
                                    >
                                        <Image src={ariston} alt="الخريف" className="w-full h-full object-contain drop-shadow-2xl" />
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.7, delay: 1.8, type: "spring", stiffness: 150 }}
                                    className="relative w-20 h-20 md:w-48 md:h-48"
                                >
                                    <motion.div
                                        animate={{ y: [0, -7, 0], scale: [1, 1.03, 1] }}
                                        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                                        className="w-full h-full"
                                    >
                                        <Image src={tefal} alt="خيرات اليمن" className="w-full h-full object-contain drop-shadow-2xl" />
                                    </motion.div>
                                </motion.div>

                                {/* Row 3 - Mixed sizes */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0, x: -30 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 2.0, type: "spring", stiffness: 180 }}
                                    className="relative w-20 h-20 md:w-48 md:h-48"
                                >
                                    <motion.div
                                        animate={{ y: [0, -6, 0], rotate: [0, -3, 0] }}
                                        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                                        className="w-full h-full"
                                    >
                                        <Image src={JMCLogo} alt="ارز الفارس النبيل" className="w-full h-full object-contain drop-shadow-lg" />
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0, y: 30 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 2.2, type: "spring", stiffness: 180 }}
                                    className="relative w-20 h-20 md:w-48 md:h-48"
                                >
                                    <motion.div
                                        animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                                        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                                        className="w-full h-full"
                                    >
                                        <Image src={cherry} alt="بازلياء خضراء" className="w-full h-full object-contain drop-shadow-lg" />
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0, x: 30 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 2.4, type: "spring", stiffness: 180 }}
                                    className="relative w-20 h-20 md:w-48 md:h-48"
                                >
                                    <motion.div
                                        animate={{ y: [0, -5, 0], rotate: [0, -2, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                                        className="w-full h-full"
                                    >
                                        <Image src={klass} alt="العطية" className="w-full h-full object-contain drop-shadow-lg" />
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0, x: 30 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 2.4, type: "spring", stiffness: 180 }}
                                    className="relative w-20 h-20 md:w-48 md:h-48"
                                >
                                    <motion.div
                                        animate={{ y: [0, -5, 0], rotate: [0, -2, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                                        className="w-full h-full"
                                    >
                                        <Image src={castrolLogo} alt="العطية" className="w-full h-full object-contain drop-shadow-lg" />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                          </WavyBackground>
                    </section>
              
            </div>
        </RootLayout>
    );
};

export default About;
