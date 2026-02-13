"use client";
import { useState } from 'react';
import { motion } from "motion/react"
import Image from 'next/image';
import logo from "../../public/images/logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
    // Here you would typically implement i18n logic
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 w-[80%] rounded-3xl mx-auto mt-3 backdrop-blur-md shadow-md fixed translate-x-1/9  top-0 z-50"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image width={150} src={logo} alt="logo" />
        </div>

        <nav className="hidden md:flex items-start gap-10 ltr:space-x-reverse font-beiruti">
          <a href="/" className="text-black text-xl font-semibold hover:text-primary transition-colors">الرئيسية</a>
          <a href="/about" className="text-black text-xl font-semibold hover:text-primary transition-colors">عن المجموعة</a>
          <a href="/products" className="text-black text-xl font-semibold hover:text-primary transition-colors">منتجاتنا</a>
          <div className="relative group">
            <a href="/#sectors" className="text-black text-xl font-semibold hover:text-primary transition-colors flex items-center gap-1">
              قطاعاتنا
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </a>
            <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <a href="/grain" className="block px-5 py-3 text-gray-700 font-beiruti font-semibold hover:bg-primary/10 hover:text-primary rounded-xl transition-colors">
                الشركة العربية لصوامع الغلال
              </a>
            </div>
          </div>
          <a href="/agencies" className="text-black text-xl font-semibold hover:text-primary transition-colors">وكالاتنا</a>

          <a href="/contact" className="text-black text-xl font-semibold hover:text-primary transition-colors">اتصل بنا</a>
        </nav>

        <div className="flex items-center">
          {/* <button 
            onClick={toggleLanguage}
            className="bg-primary text-white px-3 py-1 rounded-md text-sm font-medium"
          >
            {language === 'ar' ? 'EN' : 'AR'}
          </button> */}
          <div className="md:hidden ml-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden bg-white py-4"
        >
          <a href="/" className="block px-6 py-2 text-gray-600 hover:bg-gray-100">الرئيسية</a>
          <a href="/about" className="block px-6 py-2 text-gray-600 hover:bg-gray-100">عن المجموعة</a>
          <a href="/products" className="block px-6 py-2 text-gray-600 hover:bg-gray-100">منتجاتنا</a>
          <div>
            <button onClick={() => setIsSectorsOpen(!isSectorsOpen)} className="w-full flex items-center justify-between px-6 py-2 text-gray-600 hover:bg-gray-100">
              <span>قطاعاتنا</span>
              <svg className={`w-4 h-4 transition-transform ${isSectorsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {isSectorsOpen && (
              <div className="bg-gray-50">
                <a href="/grain" className="block px-10 py-2 text-gray-600 hover:bg-gray-100 hover:text-primary transition-colors">الشركة العربية لصوامع الغلال</a>
              </div>
            )}
          </div>
          <a href="/agencies" className="block px-6 py-2 text-gray-600 hover:bg-gray-100">شركاؤنا</a>

          <a href="/contact" className="block px-6 py-2 text-gray-600 hover:bg-gray-100">اتصل بنا</a>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;