import Image from "next/image"
import logo from "../../public/images/logo.png"
import { Facebook, Twitter, Instagram } from "lucide-react" 
const Footer = () => {
  return (
    <footer className="border-b-2 pb-[20px] mb-5 bg-[#e6e6e6] w-[80%] mx-auto rounded-4xl border-white content flex justify-between gap-[40px] text-start flex-wrap py-6 md:px-14" dir="rtl">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center md:text-right">
          <div className="col-span-1 md:col-span-2">
             <Image src={logo} alt="Logo" className="w-1/2 mb-4" />
            <p className="text-black font-semibold font-beiruti text-xl">
            نلتزم بتقديم منتجات وخدمات عالية الجودة، وبناء شراكات مستدامة، والمساهمة في تطوير الاقتصاد الوطني بالابتكار والتميز.
            </p>
           
          </div>
          <div>
            <h3 className="text-xl text-black font-bold font-beiruti mb-4">الصفحات</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-primary">الرئيسية</a></li>
              <li><a href="#sectors" className="text-gray-400 hover:text-primary">قطاعاتنا</a></li>
              <li><a href="#brands" className="text-gray-400 hover:text-primary">شركاؤنا</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary">عن المجموعة</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-black font-bold font-beiruti mb-4">تواصل معنا</h3>
            <p className="text-gray-400">info@shammachgroup.com</p>
            <p className="text-gray-400">+123 456 7890</p>
   
          </div>
          <div>
            <h3 className="text-xl text-black font-bold font-beiruti mb-4">تابعنا</h3>
            <div className="flex justify-center md:justify-start space-x-4 rtl:space-x-reverse mt-4">
              <a target="_blank" href="https://www.facebook.com/shammakh.trading.co/?locale=ar_AR" className="text-gray-400 hover:text-white">
                <Facebook className="text-black hover:text-primary" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
              
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="text-black hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          <p className="text-black font-semibold font-beiruti text-xl">&copy; {new Date().getFullYear()} مجموعة شماخ للتجاره. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;