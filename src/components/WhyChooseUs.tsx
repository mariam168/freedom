import React from 'react';
import { FaUserMd, FaAward, FaStethoscope, FaShieldAlt } from 'react-icons/fa';

const WhyChooseUs = (): React.JSX.Element => {
  return (
    <section id="why-choose-us" className="py-24 bg-gradient-to-b from-[#f9fcfd] to-white font-cairo">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-6 leading-tight">
          خبرة استثنائية... <span className="text-blue-700">لرعاية تستحقها</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-16 leading-relaxed">
          نحن لا نقدم علاجًا فحسب، بل نقدم تحولًا شاملاً مبنيًا على أسس من الثقة والخبرة العالمية.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="text-5xl text-teal-600 mb-5">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    icon: <FaUserMd />,
    title: 'قيادة طبية مرجعية',
    description:
      'بقيادة الدكتور إيهاب الخراط، أحد أبرز رواد علاج الإدمان في المنطقة، وفريق من النخبة حاصل على اعتمادات دولية ومحلية من وزارة الصحة المصرية.',
  },
  {
    icon: <FaStethoscope />,
    title: 'منهجية علاجية متكاملة 360°',
    description:
      'نؤمن بأن التعافي الحقيقي يشمل الجسد والعقل والروح. خططنا العلاجية مُصممة خصيصًا لك، وتدمج بين العلاج النفسي والسلوكي والدوائي في بيئة داعمة.',
  },
  {
    icon: <FaAward />,
    title: 'بيئة شفاء لا مثيل لها',
    description:
      'من الإقامة الفندقية الفاخرة إلى المرافق الرياضية والترفيهية المتكاملة، نوفر لك واحة من الهدوء والراحة لتتمكن من التركيز كليًا على رحلة تعافيك.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'تخصص دقيق في كافة أنواع الإدمان',
    description:
      'سواء كنت تواجه تحديًا مع إدمان المواد أو الإدمان السلوكي الخفي، فإن خبرتنا العميقة تضمن لك الحصول على الدعم المتخصص الذي تحتاجه.',
  },
];

export default WhyChooseUs;
