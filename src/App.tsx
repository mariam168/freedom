// src/App.jsx

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import PhoneBar from './components/PhoneBar';
import HeroWithImage from './components/HeroWithImage'; // تأكدت من استخدام الاسم الصحيح
import Leadership from './components/Leadership';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Facilities from './components/Facilities';
import Footer from './components/Footer'; 
import WhatsAppWidget from './components/WhatsAppWidget';

function App(): React.JSX.Element {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.dir(i18n.language);
  }, [i18n, i18n.language]);

  return (
    // استخدام div خارجي مع relative هو أفضل ممارسة
    <div className="relative">
      <PhoneBar />
      <Navbar />

      {/* ✅ --- هذا هو الحل الجذري والنهائي للمشكلة --- ✅ */}
      {/* 
        نعطي مساحة علوية كافية (padding-top) للمحتوى الرئيسي.
        - 150px على الجوال (لأن PhoneBar + Navbar يأخذان حوالي 132px).
        - 120px على الحاسوب (لأن PhoneBar + Navbar يأخذان حوالي 104px).
        هذا يضمن أن قسم Hero يبدأ "بعد" الـ Navbar تمامًا، وليس تحته.
      */}
      <main className="pt-[150px] md:pt-[120px]">
        <HeroWithImage />
        <Leadership />
        <Services />
        <Methodology />
        <Facilities />
      </main>
      
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;