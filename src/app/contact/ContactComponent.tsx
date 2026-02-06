"use client"
import SaherdHearoSection from "@/app/components/SaherdHearoSection";
import RootLayout from "../../app/layout";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";


const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <div dir="rtl" className="mt-20">
                <SaherdHearoSection title="تواصل معنا" />

                {/* Contact Section */}
                <section className="px-6 md:px-16 lg:px-36 py-16 md:py-24 lg:py-32">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl"
                        >
                            <h2 className="text-3xl md:text-4xl font-beiruti font-bold text-primary mb-6">
                                أرسل لنا رسالة
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-lg font-beiruti font-semibold text-gray-700 mb-2">
                                        الاسم الكامل
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors font-beiruti"
                                        placeholder="أدخل اسمك الكامل"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-lg font-beiruti font-semibold text-gray-700 mb-2">
                                            البريد الإلكتروني
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors font-beiruti"
                                            placeholder="example@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-lg font-beiruti font-semibold text-gray-700 mb-2">
                                            رقم الهاتف
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors font-beiruti"
                                            placeholder="+967 XXX XXX XXX"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-lg font-beiruti font-semibold text-gray-700 mb-2">
                                        الموضوع
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors font-beiruti"
                                        placeholder="موضوع الرسالة"
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-beiruti font-semibold text-gray-700 mb-2">
                                        الرسالة
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors font-beiruti resize-none"
                                        placeholder="اكتب رسالتك هنا..."
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/90 text-white font-beiruti font-bold py-4 px-8 rounded-xl transition-all shadow-lg flex items-center justify-center gap-3 text-lg"
                                >
                                    <Send size={24} />
                                    إرسال الرسالة
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            {/* Map */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                                className="rounded-3xl overflow-hidden shadow-2xl h-64 md:h-80"
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.5891234567!2d44.2!3d15.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDIxJzAwLjAiTiA0NMKwMTInMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </motion.div>

                            {/* Contact Cards */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Address Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 shadow-lg"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/20 p-3 rounded-xl">
                                            <MapPin className="text-primary" size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-beiruti font-bold text-primary mb-2">
                                                العنوان
                                            </h3>
                                            <p className="text-gray-700 font-beiruti leading-relaxed">
                                                صنعاء، الجمهورية اليمنية
                                                <br />
                                                شارع الزبيري، مبنى شماخ
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Phone Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-linear-to-br from-accent/10 to-primary/10 rounded-2xl p-6 shadow-lg"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-accent/20 p-3 rounded-xl">
                                            <Phone className="text-accent" size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-beiruti font-bold text-accent mb-2">
                                                الهاتف
                                            </h3>
                                            <p className="text-gray-700 font-beiruti leading-relaxed">
                                                +967 1 234 567
                                                <br />
                                                +967 777 123 456
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Email Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-6 shadow-lg"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-accent/20 p-3 rounded-xl">
                                            <Mail className="text-accent" size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-beiruti font-bold text-accent mb-2">
                                                البريد الإلكتروني
                                            </h3>
                                            <p className="text-gray-700 font-beiruti leading-relaxed">
                                                info@shammakh.com
                                                <br />
                                                contact@shammakh.com
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Working Hours Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="bg-gradient-to-br from-highlight/10 to-accent/10 rounded-2xl p-6 shadow-lg"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-highlight/20 p-3 rounded-xl">
                                            <Clock className="text-highlight" size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-beiruti font-bold text-highlight mb-2">
                                                ساعات العمل
                                            </h3>
                                            <p className="text-gray-700 font-beiruti leading-relaxed">
                                                السبت - الخميس
                                                <br />
                                                8:00 صباحاً - 5:00 مساءً
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Offices Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="mt-16 md:mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-beiruti font-bold text-primary mb-12 text-center">
                            فروعنا
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Sana'a Office */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow"
                            >
                                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                    <MapPin className="text-primary" size={32} />
                                </div>
                                <h3 className="text-2xl font-beiruti font-bold text-primary mb-3">
                                    المكتب الرئيسي - صنعاء
                                </h3>
                                <p className="text-gray-700 font-beiruti mb-2">
                                    شارع الزبيري، مبنى شماخ
                                </p>
                                <p className="text-gray-600 font-beiruti">
                                    هاتف: +967 1 234 567
                                </p>
                            </motion.div>

                            {/* Aden Office */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow"
                            >
                                <div className="bg-neutral/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                    <MapPin className="text-neutral" size={32} />
                                </div>
                                <h3 className="text-2xl font-beiruti font-bold text-neutral mb-3">
                                    فرع عدن
                                </h3>
                                <p className="text-gray-700 font-beiruti mb-2">
                                    المعلا، شارع الميناء
                                </p>
                                <p className="text-gray-600 font-beiruti">
                                    هاتف: +967 2 345 678
                                </p>
                            </motion.div>

                            {/* Hodeidah Office */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow"
                            >
                                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                    <MapPin className="text-accent" size={32} />
                                </div>
                                <h3 className="text-2xl font-beiruti font-bold text-accent mb-3">
                                    فرع الحديدة
                                </h3>
                                <p className="text-gray-700 font-beiruti mb-2">
                                    طريق جيزان، كيلو 25
                                </p>
                                <p className="text-gray-600 font-beiruti">
                                    هاتف: +967 3 456 789
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
            </div>
        </>
    );
};

export default ContactUs;