"use client"
import { motion } from "motion/react"
import { Metadata } from 'next';
import Image from 'next/image';

 

export default function ProductsPage() {
    return (
        <div dir="rtl">
            {/* Video Banner Section */}
            <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
                {/* Video */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/videos/Video1.mp4" type="video/mp4" />
                </video>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

                {/* Title */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-beiruti font-bold text-center px-4 drop-shadow-2xl">
                        الشركة العربية لصوامع الغلال
                    </h1>
                </div>
            </div>
                 <section className="px-6 md:px-16 lg:px-36 py-16 md:py-24 lg:py-32">
                    <p className="text-lg text-center md:text-2xl font-bold text-shadow-lg font-beiruti text-gray-700 leading-relaxed">الشركة العربية لصوامع الغلال ومطاحن الدقيق المحدودة هي إحدى الشركات الرائدة في مجال تخزين الحبوب وتصنيع الدقيق في الجمهورية اليمنية، وتعد جزءًا مهمًا من مجموعة شماخ التجارية والصناعية العريقة التي تأسست في اليمن منذ منتصف القرن العشرين وحققت حضورًا قويًا في عدة قطاعات صناعية واقتصادية.</p>
                    <p className="text-lg text-center md:text-2xl font-bold text-shadow-lg font-beiruti text-gray-700 leading-relaxed">تعمل الشركة في استقبال وتخزين الحبوب الأساسية مثل القمح ومن ثم معالجتها وطحنها إلى أنواع متعددة من الدقيق التي تلبي احتياجات الأسواق المحلية. تعتمد الشركة على مرافق صوامع حديثة وقدرات تخزينية متطورة جنبًا إلى جنب مع خطوط إنتاج حديثة لضمان جودة عالية ومستقرة في منتجاتها.</p>

                    <div className="space-y-16 md:space-y-24 lg:space-y-32 mt-5">
                        {/* Wheat Silos Sector */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid md:grid-cols-2 gap-8 items-center"
                        >
                            <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/images/صوامع1.webp" alt="الشركة العربية لصوامع الغلال" fill className="object-cover" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl text-neutral text-shadow-lg md:text-4xl font-beiruti font-bold text-secondary">رؤيتنا</h3>
                                <p className="text-lg md:text-xl font-beiruti text-gray-700 leading-relaxed">
                                    نسعى لأن نكون شريكًا استراتيجيًا رائدًا في قطاع الحبوب والدقيق في اليمن من خلال الاستدامة في سلسلة الإمداد الغذائي، وتعزيز الأمن الغذائي الوطني، وتقديم منتجات عالية الجودة بمواصفات تتوافق مع احتياجات المستهلكين.
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
                                <Image src="/images/صوامع2.webp" alt="معرض البيت الحديث" fill className="object-cover" />
                            </div>
                            <div className="md:order-1 space-y-4">
                                <h3 className="text-3xl md:text-4xl text-shadow-lg font-beiruti font-bold text-primary">رسالتنا</h3>
                                <p className="text-lg md:text-xl font-beiruti text-gray-700 leading-relaxed">توفير منتجات دقيق وحبوب عالية الجودة تلبي متطلبات السوق اليمني.

دعم الزراعة المحلية وتطوير القطاع الزراعي من خلال خدمات تخزين وتداول فعّالة.

تطبيق ممارسات تشغيل وإدارة متقدمة لضمان سلامة الغذاء وسهولة وصوله للمستهلك النهائي.</p>
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
                                <Image src="/images/صوامع3.webp" alt="شركة شماخ للدباغة والصناعات الجلدية" fill className="object-cover" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-4xl text-shadow-lg  font-beiruti font-bold text-accent">قيمنا</h3>
                                <p className="text-lg md:text-xl font-beiruti text-gray-700 leading-relaxed">
                                    الجودة: الالتزام بأعلى معايير الصناعة في تخزين الحبوب وإنتاج الدقيق.

الشفافية: العمل بمهنية ومصداقية مع شركائنا وعملائنا.

الاستدامة: الاستثمار في التقنيات الحديثة والتركيز على استمرارية الإمداد الغذائي.

المسؤولية المجتمعية: المساهمة في تعزيز الأمن الغذائي والاقتصاد الوطني.
                                </p>
                            </div>
                        </motion.div>

              
                    </div>
                </section>
        </div>
    );
}