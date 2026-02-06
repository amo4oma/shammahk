"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const hasAccepted = document.cookie.split('; ').find(row => row.startsWith('cookies_accepted='));

        if (!hasAccepted) {
            // Show banner after a short delay
            setTimeout(() => {
                setShowBanner(true);
            }, 1000);
        }
    }, []);

    const acceptCookies = () => {
        // Set cookie to remember acceptance (expires in 1 year)
        const expiryDate = new Date();
        expiryDate.setFullYear(expiryDate.getFullYear() + 1);
        document.cookie = `cookies_accepted=true; expires=${expiryDate.toUTCString()}; path=/`;

        setShowBanner(false);
    };

    const declineCookies = () => {
        // Set cookie to remember decline (expires in 30 days)
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 30);
        document.cookie = `cookies_accepted=false; expires=${expiryDate.toUTCString()}; path=/`;

        setShowBanner(false);
    };

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                >
                    <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200">
                        <div className="relative p-6 md:p-8">
                            {/* Close button */}
                            <button
                                onClick={declineCookies}
                                className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 transition-colors"
                                aria-label="Close"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6" dir="rtl">
                                {/* Icon */}
                                <div className="shrink-0">
                                    <div className="bg-primary/10 p-4 rounded-full">
                                        <Cookie className="text-primary" size={32} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 font-beiruti">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                                        نستخدم ملفات تعريف الارتباط
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تجربتك على موقعنا، وتخصيص المحتوى، وتحليل حركة المرور.
                                        من خلال الاستمرار في استخدام موقعنا، فإنك توافق على استخدامنا لملفات تعريف الارتباط.
                                    </p>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={acceptCookies}
                                        className="bg-primary hover:bg-primary/90 text-white font-beiruti font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg whitespace-nowrap"
                                    >
                                        قبول الكل
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={declineCookies}
                                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-beiruti font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
                                    >
                                        رفض
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
