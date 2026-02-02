"use client"
import { PhoneCall, Send, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
const Contact = ()=>{
    return (
        <div dir="rtl" className="h-full w-full space-y-8 py-16 bg-linear-to-b from-blue-50 via-blue-50 to-white">
          <motion.div className='relative flex flex-col gap-5 justify-center items-center'>
                  <h2 className="text-6xl font-bold text-center text-primary font-beiruti ">اتصل بنا</h2>
            <p className="text-black text-2xl font-beiruti text-center max-w-2xl mx-auto">تواصل معنا في مجموعة الشماخ، رضاكم هو أولويتنا. فريقنا متاح دائماً لتقديم الدعم الفني والاستشارات التجارية. تواصل معنا عبر الموقع، أو بشكل أسرع عبر النقر على زر الواتساب.</p>
        <motion.div    animate={{ y: [0, -15, 0], scale: [1, 1.02, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-5  right-[70%] md:right-[40%] flex justify-center items-center bg-accent/20 p-2 rounded-full">
                    <PhoneCall className=" text-primary" size={30} strokeWidth={2.5}/>
        </motion.div>
        <motion.div    animate={{ y: [0, -7, 0], scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute top-5 right-48 md:right-[60%] flex justify-center items-center bg-accent/20 p-2 rounded-full">
                    <Send className=" text-primary" size={30} strokeWidth={2.5}/>
        </motion.div>
        <motion.div    animate={{ y: [0, -9, 0], scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-10 right-36 md:right-[40%] flex justify-center items-center bg-accent/20 p-2 rounded-full">
                    <MapPin className=" text-primary" size={30} strokeWidth={2.5}/>
        </motion.div>
            </motion.div>
            <motion.div
  
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='butn mt-4 text-center'
          >
            <a href="contact-us" className="relative inline-flex items-center justify-center px-5 py-2.5 text-base font-medium tracking-tighter text-white bg-transparent shadow rounded-md group">
              <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-primary rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-primary rounded-md opacity-0 group-hover:opacity-100 "></span>
              <span className="relative font-bold text-accent font-beiruti transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">اترك لنا رسالة</span>
            </a>
          </motion.div>
        </div>
    )
};
export default Contact 