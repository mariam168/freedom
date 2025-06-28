import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaPills, FaBrain, FaHeartbeat, FaLaptop, FaMoneyBillAlt } from 'react-icons/fa';

const Services = (): React.JSX.Element => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 bg-white font-cairo">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<FaPills className="text-3xl text-teal-600" />}
            title={t('services.card1Title')}
            points={t('services.card1Points', { returnObjects: true }) as string[]}
          />
          <ServiceCard
            icon={<FaLaptop className="text-3xl text-blue-600" />}
            title={t('services.card2Title')}
            points={t('services.card2Points', { returnObjects: true }) as string[]}
          />
          <ServiceCard
            icon={<FaHeartbeat className="text-3xl text-pink-500" />}
            title={t('services.card3Title')}
            center
          />
          <ServiceCard
            icon={<FaBrain className="text-3xl text-indigo-600" />}
            title={t('services.card4Title')}
            center
          />
          <ServiceCard
            icon={<FaMoneyBillAlt className="text-3xl text-yellow-600" />}
            title={t('services.card5Title')}
            center
          />
        </div>
      </div>
    </section>
  );
};
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  points?: string[];
  center?: boolean;
}

const ServiceCard = ({ icon, title, points = [], center = false }: ServiceCardProps) => {
  const { t } = useTranslation();
  const isEmpty = points.length === 0;

  return (
    <div className="bg-[#fcfcfc] border border-gray-200 p-6 rounded-3xl shadow-md hover:shadow-lg transition duration-300 group h-full flex flex-col justify-between text-start">
      <div>
        <div className={`mb-4 flex ${center ? 'justify-center' : 'justify-start'} items-center gap-3`}>
          <div>{icon}</div>
          <h4 className="text-xl font-bold text-gray-800">{title}</h4>
        </div>
        {isEmpty ? (
          <p className="text-sm text-gray-500 text-center mt-6">
            {t('services.genericDesc')}
          </p>
        ) : (
          <ul className="text-sm text-gray-600 space-y-2 mt-3 ps-1">
            {points.map((point, idx) => (
              <li
                key={idx}
                className="leading-relaxed relative ps-6"
              >
                <span className="absolute start-0 top-1 text-teal-500 font-bold">✓</span>
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
      {isEmpty && <div className="h-10"></div>}
    </div>
  );
};

export default Services;