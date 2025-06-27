import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { FaPhoneAlt, FaClipboardList, FaHeart, FaHandsHelping } from 'react-icons/fa';

const Methodology = (): React.JSX.Element => {
  const { t } = useTranslation();

  return (
    <section
      id="methodology"
      className="py-24 bg-gradient-to-b from-[#f9fcfd] to-[#f1f7f8] font-cairo"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-14">
          <div className="lg:w-1/2 w-full text-start">
            <h2 className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-6 leading-tight">
              <Trans i18nKey="methodology.title">
                بخطوات واثقة تبدأ رحلتك نحو <span className="text-blue-700">الحرية</span>
              </Trans>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
              {t('methodology.description')}
            </p>
            <div className="space-y-6">
              <Step
                icon={<FaPhoneAlt className="text-teal-600 text-xl" />}
                title={t('methodology.step1Title')}
                description={t('methodology.step1Desc')}
              />
              <Step
                icon={<FaClipboardList className="text-blue-600 text-xl" />}
                title={t('methodology.step2Title')}
                description={t('methodology.step2Desc')}
              />
              <Step
                icon={<FaHeart className="text-pink-500 text-xl" />}
                title={t('methodology.step3Title')}
                description={t('methodology.step3Desc')}
              />
              <Step
                icon={<FaHandsHelping className="text-gray-600 text-xl" />}
                title={t('methodology.step4Title')}
                description={t('methodology.step4Desc')}
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-md w-full max-w-lg mx-auto">
              <div className="bg-white p-10 text-center">
                <div className="text-6xl mb-4">🕊️</div>
                <h3 className="text-xl font-bold text-teal-800 mb-2">
                  {t('methodology.visualCardTitle')}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t('methodology.visualCardDesc')}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Step = ({ icon, title, description }: StepProps) => {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 flex-shrink-0">
        {icon}
      </div>
      <div className="text-start">
        <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Methodology;