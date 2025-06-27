import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { FaUserMd, FaCertificate } from 'react-icons/fa';
import { HiShieldCheck } from 'react-icons/hi2';
const Leadership = (): React.JSX.Element => {
  const { t } = useTranslation();

  return (
    <section
      id="leadership"
      className="py-28 bg-gradient-to-br from-[#ecfdf5] to-[#e0f2f1] font-cairo"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-cyan-800 mb-6 leading-tight">
          {t('leadership.title')}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed">
          <Trans i18nKey="leadership.description">
            يقود مسيرتنا العلاجية اسم يترادف مع الثقة والخبرة،
            <span className="inline-block bg-teal-50 border border-teal-100 text-teal-700 font-semibold px-3 py-1.5 mx-1 rounded-lg shadow-sm italic">
              د. إيهاب الخراط
            </span>
            ويسانده فريق من نخبة الأطباء والأخصائيين الحاصلين على أرفع المؤهلات الدولية.
          </Trans>
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          <div
            className="bg-white p-10 rounded-3xl border border-transparent shadow-md hover:shadow-2xl hover:border-cyan-200 transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-tr from-cyan-100 to-teal-100 p-5 rounded-full shadow-md">
                <FaUserMd className="text-4xl text-cyan-700" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{t('leadership.card1Title')}</h3>
            <p className="text-gray-600 text-base leading-relaxed">{t('leadership.card1Desc')}</p>
          </div>
          <div
            className="bg-white p-10 rounded-3xl border border-transparent shadow-md hover:shadow-2xl hover:border-cyan-200 transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-tr from-cyan-100 to-teal-100 p-5 rounded-full shadow-md">
                <FaCertificate className="text-4xl text-cyan-700" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{t('leadership.card2Title')}</h3>
            <p className="text-gray-600 text-base leading-relaxed">{t('leadership.card2Desc')}</p>
          </div>
          <div
            className="bg-white p-10 rounded-3xl border border-transparent shadow-md hover:shadow-2xl hover:border-cyan-200 transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-tr from-cyan-100 to-teal-100 p-5 rounded-full shadow-md">
                <HiShieldCheck className="text-4xl text-cyan-700" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{t('leadership.card3Title')}</h3>
            <p className="text-gray-600 text-base leading-relaxed">{t('leadership.card3Desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;