import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhoneAlt, FaGlobe } from 'react-icons/fa';

const PhoneBar = () => {
  const { i18n } = useTranslation();

  const handleLangChange = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="fixed top-0 w-full z-[9999] bg-gradient-to-r from-blue-700 to-teal-600 text-white text-sm py-2 px-4 font-cairo flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
        <a
          href="tel:01288590178"
          className="flex items-center gap-2 hover:text-yellow-200 transition"
        >
          <FaPhoneAlt className="text-xs mt-[2px]" />
          <span className="font-semibold">01288590178</span>
        </a>
        <span className="hidden md:inline-block text-white/40">|</span>
        <a
          href="tel:01201502444"
          className="flex items-center gap-2 hover:text-yellow-200 transition"
        >
          <FaPhoneAlt className="text-xs mt-[2px]" />
          <span className="font-semibold">01201502444</span>
        </a>
      </div>
      <button
        onClick={handleLangChange}
        className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-md transition"
        aria-label="Change Language"
      >
        <FaGlobe className="text-xs" />
        <span className="font-bold">{i18n.language === 'ar' ? 'EN' : 'عربي'}</span>
      </button>
    </div>
  );
};

export default PhoneBar;