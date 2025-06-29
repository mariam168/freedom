import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import PhoneBar from './components/PhoneBar';
import HeroWithImage from './components/HeroWithImage';
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
    <div className="relative">
      <PhoneBar />
      <Navbar />
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