"use client";
import { useState } from "react";
import SaherdHearoSection from "@/app/components/SaherdHearoSection";
import RootLayout from "@/app/layout";
import Image from "next/image";
import tefal from "../../public/images/Tefal_logo.svg";
import chery from "../../public/images/Chery_logo.svg.png";
import jmc from "../../public/images/JMC_Motor_logo.png";
import ariston from "../../public/images/Ariston-logo.png";
import lg from "../../public/images/LG_logo_(2014).svg.png";
import westpoint from "../../public/images/westpoint-logo-png-transparent.png";
import rowenta from "../../public/images/Rowenta_logo.svg.png";
import caltexlLogo from "../../public/images/Castrol_logo_2023.svg.png";
import karry from "../../public/images/karrylogo.png";

// Product images
import tefalProducts from "../../public/images/products/tefal_products.png";
import tefalProducts2 from "../../public/images/products/tefal-2.webp";
import cheryProducts from "../../public/images/products/chery_products.png";
import jmcProducts from "../../public/images/products/jmc_products.png";
import jmcProducts2 from "../../public/images/products/jmc-products.webp";
import jmcProducts3 from "../../public/images/products/jmc-truck.webp";
import aristonProducts from "../../public/images/products/ariston_products.png";
import lgProducts from "../../public/images/products/lg_products.png";
import lgProducts2 from "../../public/images/products/lg-3.webp";
import lgProducts3 from "../../public/images/products/lg-4.webp";
import lgProducts4 from "../../public/images/products/lg-5.webp";
import westpointProducts from "../../public/images/products/westpoint_products.png";
import westpointProducts2 from "../../public/images/products/westpoint-heater.webp";
import rowentaProducts from "../../public/images/products/rowenta_products.png";
import castrolProducts from "../../public/images/products/castrol_products.png";
 
import karryProducts from "../../public/images/products/karry-1.webp";
import karryProducts2 from "../../public/images/products/karry-2.webp";


interface Company {
    name: string;
    logo: any;
    products: any[];
    description: string;
}

const Agents = () => {
    const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const companies: Company[] = [
        {
            name: "Tefal",
            logo: tefal,
            products: [tefalProducts,tefalProducts2],
            description: "أدوات المطبخ الفرنسية الرائدة عالمياً",
        },
        {
            name: "Chery",
            logo: chery,
            products: [cheryProducts],
            description: "سيارات صينية بتقنية متقدمة",
        },
        {
            name: "JMC",
            logo: jmc,
            products: [jmcProducts,jmcProducts2,jmcProducts3],
            description: "شاحنات ومركبات تجارية قوية",
        },
        {
            name: "Karry",
            logo: karry,
            products: [karryProducts,karryProducts2],
            description: "شاحنات ومركبات تجارية قوية",
        },
        {
            name: "Ariston",
            logo: ariston,
            products: [aristonProducts],
            description: "أنظمة التدفئة والمياه الإيطالية",
        },
        {
            name: "LG",
            logo: lg,
            products: [lgProducts,lgProducts2,lgProducts3,lgProducts4],
            description: "أجهزة منزلية وإلكترونيات متطورة",
        },
        {
            name: "Westpoint",
            logo: westpoint,
            products: [westpointProducts,westpointProducts2],
            description: "أجهزة المطبخ العملية والموثوقة",
        },
        {
            name: "Rowenta",
            logo: rowenta,
            products: [rowentaProducts],
            description: "أجهزة العناية بالمنزل الألمانية",
        },
        {
            name: "Castrol",
            logo: caltexlLogo,
            products: [castrolProducts],
            description: "زيوت المحركات الرائدة عالمياً",
        },
    ];

    const openModal = (company: Company) => {
        setSelectedCompany(company);
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = "auto";
        setTimeout(() => setSelectedCompany(null), 300);
    };

    return (
        <RootLayout>
            <div dir="rtl">
                <div className="mt-20">
                    <SaherdHearoSection title="الوكالات" />
                </div>

                <div className="w-[90%] lg:w-[80%] mx-auto space-y-8 py-8">
                    <h2 className="text-primary text-center font-bold font-beiruti text-2xl md:text-3xl text-shadow-lg">
                        جسور الجودة نحو المستقبل
                    </h2>
                    <p className="text-black font-semibold font-beiruti text-base md:text-xl text-center px-4">
                        بصفتنا وكيلاً حصرياً لأبرز الأسماء العالمية، نفخر في مجموعة شماخ بدورنا الريادي في نقل أفضل الخبرات والمنتجات الدولية إلى السوق المحلي. إن اختيارنا للشركاء يعتمد على الجودة والابتكار، سعياً منا لتعزيز تنافسية الاقتصاد اليمني وتقديم تجربة استثنائية للعميل ترتقي لمستوى المعايير العالمية
                    </p>

                    {/* Interactive Company Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 py-8">
                        {companies.map((company, index) => (
                            <div
                                key={company.name}
                                className="company-card group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
                                onClick={() => openModal(company)}
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                                }}
                            >
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500 z-10"></div>

                                {/* Card content */}
                                <div className="relative z-20 p-6 md:p-8 flex flex-col items-center justify-center min-h-[180px] md:min-h-[220px]">
                                    <div className="relative w-full h-24 md:h-32 mb-4 transform group-hover:scale-110 transition-transform duration-500">
                                        <Image
                                            src={company.logo}
                                            alt={company.name}
                                            fill
                                            className="object-contain filter group-hover:brightness-110 transition-all duration-500"
                                        />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold font-beiruti text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                                        {company.name}
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-600 text-center font-beiruti opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {company.description}
                                    </p>
                                </div>

                                {/* Animated border */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-all duration-500"></div>

                                {/* Click indicator */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-xs text-primary font-beiruti font-semibold">اضغط للمزيد</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal */}
                {isModalOpen && selectedCompany && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={closeModal}
                        style={{
                            animation: "fadeIn 0.3s ease-out",
                        }}
                    >
                        <div
                            className="relative bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                animation: "scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                            }}
                        >
                            {/* Close button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 left-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-primary hover:text-white rounded-full shadow-lg transition-all duration-300 group"
                                aria-label="Close"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>

                            {/* Modal header */}
                            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center border-b border-gray-200">
                                <div className="relative w-32 h-32 mx-auto mb-4">
                                    <Image
                                        src={selectedCompany.logo}
                                        alt={selectedCompany.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold font-beiruti text-gray-800 mb-2">
                                    {selectedCompany.name}
                                </h2>
                                <p className="text-lg text-gray-600 font-beiruti">
                                    {selectedCompany.description}
                                </p>
                            </div>

                            {/* Product gallery */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold font-beiruti text-gray-800 mb-6 text-center">
                                    منتجاتنا
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {selectedCompany.products.map((product, idx) => (
                                        <div
                                            key={idx}
                                            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                                            style={{
                                                animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`,
                                            }}
                                        >
                                            <div className="relative w-full h-64 md:h-96 bg-gradient-to-br from-gray-50 to-gray-100">
                                                <Image
                                                    src={product}
                                                    alt={`${selectedCompany.name} product ${idx + 1}`}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .company-card {
                    transform-origin: center;
                }

                .company-card:hover {
                    transform: translateY(-8px);
                }
            `}</style>
        </RootLayout>
    );
};

export default Agents;