import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX, FiChevronLeft } from 'react-icons/fi';

// واجهة لتعريف خصائص الروابط (ممارسة جيدة في TypeScript)
interface NavLink {
  href: string;
  text: string;
}

const Navbar = (): React.JSX.Element => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 1. تأثير جانبي لمنع تمرير الصفحة عند فتح قائمة الجوال (UX)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // دالة التنظيف لإعادة التمرير في حال تم إغلاق المكون
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // تأثير جانبي لمراقبة التمرير وتغيير خلفية الـ Navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // تعريف روابط التنقل باستخدام الترجمة
  const navLinks: NavLink[] = [
    { href: '#leadership', text: t('navbar.leadership') },
    { href: '#services', text: t('navbar.services') },
    { href: '#methodology', text: t('navbar.methodology') },
    { href: '#facilities', text: t('navbar.facilities') },
  ];

  // إعداد رابط الواتساب لزر "تواصل معنا"
  const HOSPITAL_WHATSAPP_NUMBER = "201201502444";
  const predefinedText = t('whatsapp.predefinedMessage');
  const encodedMessage = encodeURIComponent(predefinedText);
  const whatsappUrl = `https://wa.me/${HOSPITAL_WHATSAPP_NUMBER}?text=${encodedMessage}`;

  return (
    <>
      {/* شريط التنقل الرئيسي */}
      <nav
        className={`fixed top-16 md:top-9 w-full z-40 font-cairo transition-shadow duration-300 ease-in-out ${
          scrolled ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-md shadow-sm'
        }`}
      >
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a
            href="#hero"
            className="text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-teal-500 text-transparent bg-clip-text tracking-tight"
          >
            {t('common.appName')}
          </a>

          {/* 2. روابط سطح المكتب (تختفي على الجوال) */}
          <div className="hidden md:flex items-center gap-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-medium text-gray-700 hover:text-teal-600 pb-1 transition-colors duration-300
                  after:content-[''] after:absolute after:bottom-0 after:start-1/2 after:-translate-x-1/2 after:w-0 
                  after:h-0.5 after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.text}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2 px-5 rounded-lg text-sm font-bold
                transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-teal-300/40 transform hover:scale-105"
            >
              {t('common.contactUs')}
            </a>
          </div>

          {/* 3. عناصر التحكم في الجوال (تظهر فقط على الجوال) */}
          <div className="md:hidden flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2 px-4 rounded-lg text-xs font-bold shadow-sm"
            >
              {t('common.contactUs')}
            </a>
            <button onClick={() => setIsOpen(true)} aria-label="Toggle Menu">
              <FiMenu className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </nav>

      {/* 4. قائمة الجوال المنسدلة (تغطي الشاشة بالكامل) */}
      <div
        className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out md:hidden
                   ${isOpen ? 'translate-x-0' : (i18n.language === 'ar' ? 'translate-x-full' : '-translate-x-full')}`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <span className="font-bold text-lg text-teal-600">{t('common.appName')}</span>
          <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
            <FiX className="w-6 h-6 text-gray-800" />
          </button>
        </div>
        <div className="flex flex-col p-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex justify-between items-center w-full py-4 px-4 text-lg font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span>{link.text}</span>
              <FiChevronLeft className="text-gray-400 rtl:rotate-180" />
            </a>
          ))}
          <div className="pt-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 text-center bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg text-lg font-bold"
              onClick={() => setIsOpen(false)}
            >
              {t('common.contactUs')}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;