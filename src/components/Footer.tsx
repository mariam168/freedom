import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = (): React.JSX.Element => {
  const { t } = useTranslation();

  return (
    <div 
      className="border-t px-4 bg-teal-700 text-white pt-6 pb-6 font-cairo border-white/20 mt-10 text-sm text-center md:text-start"
    >
      <div className="container mx-auto">
        <p>{t('footer.copyright')}</p>
      </div>
    </div>
  );
};

export default Footer;