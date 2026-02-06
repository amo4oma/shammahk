"use client"
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { motion } from "motion/react"
import { CheckCircle } from "lucide-react";

export default function EmailSubscribtion() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Check if user has already subscribed
        const hasSubscribed = document.cookie.split('; ').find(row => row.startsWith('newsletter_subscribed='));

        if (!hasSubscribed) {
            const timeoutId = setTimeout(() => {
                setIsOpen(true);
            }, 5000);
            return () => clearTimeout(timeoutId);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Set cookie to remember subscription (expires in 1 year)
        const expiryDate = new Date();
        expiryDate.setFullYear(expiryDate.getFullYear() + 1);
        document.cookie = `newsletter_subscribed=true; expires=${expiryDate.toUTCString()}; path=/`;

        // Show success message
        setIsSubmitted(true);

        // Close modal after 3 seconds
        setTimeout(() => {
            setIsOpen(false);
        }, 3000);
    };

    return (
        <Modal isOpen={isOpen} onClose={() => { setIsOpen(false) }}>
            {!isSubmitted ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-4 font-beiruti items-center justify-center p-4"
                >
                    <h1 className="text-2xl text-primary font-bold">اشترك في النشرة البريدية</h1>
                    <p className="text-gray-600 text-center">اشترك في النشرة البريدية للحصول على آخر التحديثات</p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center justify-center w-full" dir="rtl">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="أدخل بريدك الإلكتروني"
                            className="border placeholder:text-accent border-primary focus:outline-none focus:border-primary text-primary rounded-lg px-4 py-2 w-full"
                            required
                        />
                        <button type="submit" className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors w-full">
                            اشترك
                        </button>
                    </form>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-4 font-beiruti items-center justify-center p-8"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                        <CheckCircle size={64} className="text-green-500" />
                    </motion.div>
                    <h2 className="text-2xl text-primary font-bold">شكراً لك!</h2>
                    <p className="text-gray-600 text-center">تم الاشتراك بنجاح في النشرة البريدية</p>
                    <p className="text-sm text-gray-500">سنرسل لك آخر التحديثات على: {email}</p>
                </motion.div>
            )}
        </Modal>
    );
}