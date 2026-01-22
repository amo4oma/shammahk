import Image from "next/image"
import logo from "../../public/images/logo.png"
const Footer = () => {
  return (
    <footer className="border-b-2 pb-[60px] mb-5 bg-[#e6e6e6] w-[80%] mx-auto rounded-4xl border-white content flex justify-between gap-[40px] text-start flex-wrap py-6 md:px-14" dir="rtl">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          <div>
             <Image src={logo} alt="Logo" className="w-1/2 mb-4" />
            <h3 className="text-xl font-bold mb-4 font-beiruti">مجموعة شماخ للتجاره</h3>
            <p className="text-black font-beiruti text-xl">
             نلتزم بتقديم منتجات وخدمات عالية الجودة، وبناء شراكات مستدامة، والمساهمة في تطوير الاقتصاد الوطني بالابتكار والتميز.
            </p>
           
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">الرئيسية</a></li>
              <li><a href="#sectors" className="text-gray-400 hover:text-white">قطاعاتنا</a></li>
              <li><a href="#brands" className="text-gray-400 hover:text-white">شركاؤنا</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">عن المجموعة</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <p className="text-gray-400">info@shammachgroup.com</p>
            <p className="text-gray-400">+123 456 7890</p>
            <div className="flex justify-center md:justify-start space-x-4 rtl:space-x-reverse mt-4">
              <a href="#" className="text-gray-400 hover:text-white">FB</a>
              <a href="#" className="text-gray-400 hover:text-white">TW</a>
              <a href="#" className="text-gray-400 hover:text-white">IN</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} مجموعة شماخ للتجاره. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
