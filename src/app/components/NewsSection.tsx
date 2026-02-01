"use client"
import NewsViewr from "./NewsViewr";
import data from "../data/data";
import { useState } from "react";
import imgs6 from "../../public/images/news-image.webp"
import { Eye } from "lucide-react";

const NewsSection = () => {
    const [selectedNews, setSelectedNews] = useState(data[0]);

    return (
        <div className="w-full min-h-screen px-6 md:px-20 py-16 bg-linear-to-br from-gray-50 via-white to-blue-50" dir="rtl">
            {/* Animated Title */}
            <div className="relative mb-12">
                <h2 className="text-5xl md:text-6xl font-bold text-center font-beiruti text-primary animate-fade-in-down">
                    آخر الأخبار
                </h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-linear-to-r from-transparent via-primary to-transparent animate-pulse"></div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
                {/* News List - Left Side */}
                <div className="lg:w-1/3 space-y-4">
                    {data.map((item, index) => (
                        <div
                            key={item.id}
                            className="group relative animate-fade-in-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Shining border effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-blue-400 to-primary rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500 animate-shine"></div>

                            {/* Card Content */}
                            <div onClick={() => setSelectedNews(item)} className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 ${selectedNews.id === item.id ? 'border-primary bg-gradient-to-br from-primary/10 to-blue-50' : 'border-transparent hover:border-primary/30'
                                }`}>
                                <div className="flex justify-between items-start gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-lg md:text-xl font-beiruti font-semibold text-gray-800 leading-relaxed group-hover:text-primary transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                                            {item.content}
                                        </p>
                                    </div>

                                    {/* View Button */}
                                    <button
                                        onClick={() => setSelectedNews(item)}
                                        className="flex-shrink-0 bg-gradient-to-br from-primary to-blue-600 text-white p-3 rounded-xl hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-md hover:shadow-xl group-hover:animate-bounce-subtle"
                                        aria-label="عرض التفاصيل"
                                    >
                                        <Eye size={20} strokeWidth={2.5} />
                                    </button>
                                </div>

                                {/* Selected Indicator */}
                                {selectedNews.id === item.id && (
                                    <div className="absolute top-3 left-3 w-3 h-3 bg-primary rounded-full animate-ping"></div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* News Viewer - Right Side */}
                <div className="lg:w-2/3 animate-fade-in-left">
                    <div className="relative group">
                        {/* Animated glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition duration-500 animate-pulse-slow"></div>

                        {/* Main viewer card */}
                        <div className="relative p-4 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50">
                            <NewsViewr
                                newsImage={selectedNews.image}
                                title={selectedNews.title}
                                content={selectedNews.content}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes fade-in-down {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in-left {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes shine {
                    0% {
                        background-position: -200% center;
                    }
                    100% {
                        background-position: 200% center;
                    }
                }

                @keyframes bounce-subtle {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-5px);
                    }
                }

                @keyframes pulse-slow {
                    0%, 100% {
                        opacity: 0.2;
                    }
                    50% {
                        opacity: 0.3;
                    }
                }

                .animate-fade-in-down {
                    animation: fade-in-down 0.8s ease-out;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out forwards;
                    opacity: 0;
                }

                .animate-fade-in-left {
                    animation: fade-in-left 0.8s ease-out;
                }

                .animate-shine {
                    background-size: 200% auto;
                    animation: shine 3s linear infinite;
                }

                .animate-bounce-subtle {
                    animation: bounce-subtle 2s ease-in-out infinite;
                }

                .animate-pulse-slow {
                    animation: pulse-slow 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default NewsSection;