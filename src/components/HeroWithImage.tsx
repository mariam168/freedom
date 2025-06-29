import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaStar } from 'react-icons/fa';
import heroImage from '../images/hero.png';

const HOSPITAL_WHATSAPP_NUMBER = "201201502444";

const HeroWithImage = (): React.JSX.Element => {
  const { t, i18n } = useTranslation();
  const ArrowIcon = i18n.language === 'ar' ? FaArrowLeft : FaArrowRight;
  const predefinedText = t('whatsapp.predefinedMessage');
  const encodedMessage = encodeURIComponent(predefinedText);
  const whatsappUrl = `https://wa.me/${HOSPITAL_WHATSAPP_NUMBER}?text=${encodedMessage}`;

  return (
    <section
      id="hero"
      className="relative z-1 min-h-screen flex justify-center font-cairo bg-gradient-to-b from-[#f0f4f8] to-white overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto px-6 relative z-10 py-16 lg:py-0 flex items-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 text-center lg:text-start">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 py-1 px-4 rounded-full text-sm font-semibold mb-5 gap-2">
              <FaCheckCircle className="text-green-500" />
              {t('hero.trustedPartner')}
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-teal-500 leading-tight mb-6 drop-shadow-md">
              <Trans i18nKey="hero.title">
                الطريق إلى <span className="text-teal-600">الحرية</span> يبدأ بخطوة.
              </Trans>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              {t('hero.description')}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4 px-10 rounded-full text-lg font-bold
              transition-all mb-10 duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-teal-300/50 transform hover:scale-105"
            >
              <span>{t('hero.ctaButton')}</span>
              <ArrowIcon
                className="transition-transform duration-300 rtl:mr-3 ltr:ml-3 rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1"
              />
            </a>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl group">
              <img
                src={heroImage}
                alt={t('hero.imageAlt')}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 rounded-3xl"
              />
              <FaStar className="absolute top-4 start-4 text-yellow-400 animate-spin-slow text-xl opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithImage;