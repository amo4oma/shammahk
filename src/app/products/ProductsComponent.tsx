"use client"
import { useState } from "react";
import SaherdHearoSection from "@/app/components/SaherdHearoSection";

import Image from "next/image";
import albait from "../../public/images/our-products/albait.webp"
import alarabia from "../../public/images/our-products/alarabia-logo.webp";
import { products, cars, electronics, energyAndBuildingMaterials } from "../data/data";
// Product images
import dageeg from "../../public/images/our-products/dageeg.webp"
import kharrefProduct from "../../public/images/our-products/khareef-product.webp";
import riceGroup from "../../public/images/our-products/rice-group.webp";
import qaisar from "../../public/images/our-products/qaisar-rice.webp";
import atiah from "../../public/images/our-products/ateiah-rice.webp"
import aboMoftah from "../../public/images/our-products/abo-moftah-rice.webp"
import redBewns from "../../public/images/our-products/red-beans.webp"
import whaitBeans from "../../public/images/our-products/white-beans.webp"
import bazalia from "../../public/images/our-products/bazalia.webp"
import fole from "../../public/images/our-products/fole.webp"
import sugar from "../../public/images/our-products/albait-rice.webp"
import salsha from "../../public/images/our-products/salsa.webp"
import mango from "../../public/images/our-products/mango-product.webp"
import masilah from "../../public/images/our-products/masilah-rice.webp"
import shammahkRice from "../../public/images/our-products/shammask-rice-pro.webp"
import corn from "../../public/images/our-products/corn.webp"
import tuna from "../../public/images/our-products/tuna.webp"


interface Product {
    name: string;
    logo: any;
    products: any[];
    description: string;
}

const Products = () => {
    const [selectedCompany, setSelectedCompany] = useState<Product | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { label: "المواد الغذائية" },
        { label: "السيارات والشاحنات" },
        { label: "الالكترونيات والادوات المنزليه" },
        { label: "الطاقة ومواد البناء" },
    ];

    const companies: Product[] = [
        {
            name: "الشركه العربيه لصوامع الغلال",
            logo: alarabia,
            products: [dageeg, kharrefProduct],
            description: "حبوب ومطاحن الدقيق",
        },
        {
            name: "منتجات البيت",
            logo: albait,
            products: [sugar, redBewns, whaitBeans, bazalia, salsha, mango, tuna, fole, corn],
            description: "مجموعة منتجات البيت الغذائيه",
        },
        {
            name: "منتحات الارز",
            logo: riceGroup,
            products: [qaisar, shammahkRice, aboMoftah, atiah, masilah],
            description: "مجموعه من الارز الفاخر",
        },

    ];

    const openModal = (product: Product) => {
        setSelectedCompany(product);
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = "auto";
        setTimeout(() => setSelectedCompany(null), 300);
    };

    // ── Shared card component ──────────────────────────────────────────────
    const ProductCard = ({
        src,
        alt,
        title,
        content,
        index,
    }: {
        src: string;
        alt: string;
        title: string;
        content: string;
        index: number;
    }) => (
        <div
            className="product-card group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-400 overflow-hidden flex flex-col"
            style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.07}s both` }}
        >
            {/* Image area — fixed square with padding so all images look uniform */}
            <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-6 transform group-hover:scale-105 transition-transform duration-400">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                </div>
                {/* Subtle gradient shine on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
            </div>

            {/* Text area */}
            <div className="flex flex-col items-center gap-1 px-4 py-4 text-center border-t border-gray-100">
                <h3 className="text-primary font-bold font-beiruti text-base md:text-lg leading-snug">
                    {title}
                </h3>
                {content && (
                    <p className="text-gray-500 font-beiruti text-sm md:text-base">
                        {content}
                    </p>
                )}
            </div>
        </div>
    );

    // ── Shared grid wrapper ────────────────────────────────────────────────
    const ProductGrid = ({ items }: { items: { id: number; image: string; title: string; content: string }[] }) => (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {items.map((item, index) => (
                <ProductCard
                    key={`${item.id}-${index}`}
                    src={item.image}
                    alt={item.title}
                    title={item.title}
                    content={item.content}
                    index={index}
                />
            ))}
        </div>
    );

    return (
        <>
            <div dir="rtl">
                <div className="mt-20">
                    <SaherdHearoSection title="المنتجات" />
                </div>

                <div className="w-[90%] lg:w-[80%] mx-auto space-y-8 py-8">
                    <h2 className="text-primary text-center font-bold font-beiruti text-2xl md:text-3xl text-shadow-lg">
                        منتجات المجموعه اعلى المعايير واجود المصادر
                    </h2>
                    <p className="text-black font-semibold font-beiruti text-base md:text-xl text-center px-4">
                        تعتبر مجموعة شماخ من الشركات الرائدة في مجال استيراد وتوزيع المواد الغذائية، السيارات، الالكترونيات والادوات المنزلية و كذالك حلول الطاقه الشمسيه ومواد البناء في اليمن، حيث تمتلك شبكة واسعة من الموردين الموثوقين من مختلف أنحاء العالم. وتتميز منتجات المجموعة بالجودة العالية والأسعار التنافسية، مما يجعلها الخيار المفضل للعديد من العملاء في السوق اليمني.
                    </p>

                    {/* Category Tabs */}
                    <div className="flex overflow-x-auto gap-2 md:gap-3 my-6 pb-2 snap-x snap-mandatory scrollbar-hide md:flex-wrap md:justify-center md:overflow-x-visible">
                        {tabs.map((tab, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                className={`shrink-0 snap-start px-5 py-2.5 rounded-full font-beiruti font-semibold text-sm md:text-base transition-all duration-300 border-2 ${activeTab === i
                                    ? "bg-primary text-white border-primary shadow-lg scale-105"
                                    : "bg-white text-primary border-primary/40 hover:border-primary hover:bg-primary/5"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    {activeTab === 0 && <ProductGrid items={products} />}
                    {activeTab === 1 && <ProductGrid items={cars} />}
                    {activeTab === 2 && <ProductGrid items={electronics} />}
                    {activeTab === 3 && <ProductGrid items={energyAndBuildingMaterials} />}

                    {/* Interactive Company Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 py-8">
                        {companies.map((product, index) => (
                            <div
                                key={product.name}
                                className="company-card group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
                                onClick={() => openModal(product)}
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
                                            src={product.logo}
                                            alt={product.name}
                                            fill
                                            className="object-contain filter group-hover:brightness-110 transition-all duration-500"
                                        />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold font-beiruti text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                                        {product.name}
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-600 text-center font-beiruti opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {product.description}
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
                        style={{ animation: "fadeIn 0.3s ease-out" }}
                    >
                        <div
                            className="relative bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                            style={{ animation: "scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
                        >
                            {/* Close button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 left-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-primary hover:text-white rounded-full shadow-lg transition-all duration-300"
                                aria-label="Close"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Modal header */}
                            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center border-b border-gray-200">
                                <div className="relative w-32 h-32 mx-auto mb-4">
                                    <Image src={selectedCompany.logo} alt={selectedCompany.name} fill className="object-contain" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold font-beiruti text-gray-800 mb-2">
                                    {selectedCompany.name}
                                </h2>
                                <p className="text-lg text-gray-600 font-beiruti">{selectedCompany.description}</p>
                            </div>

                            {/* Product gallery */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold font-beiruti text-gray-800 mb-6 text-center">منتجاتنا</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {selectedCompany.products.map((product, idx) => (
                                        <div
                                            key={idx}
                                            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                                            style={{ animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both` }}
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
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.9); }
                    to   { opacity: 1; transform: scale(1); }
                }
                .company-card { transform-origin: center; }
                .company-card:hover { transform: translateY(-6px); }
                .product-card { transform-origin: center; }
                .product-card:hover { transform: translateY(-4px); }
            `}</style>
        </>
    );
};

export default Products;