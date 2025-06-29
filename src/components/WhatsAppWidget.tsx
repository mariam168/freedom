import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from 'react-icons/fa';
import { FiX, FiSend } from 'react-icons/fi';
const HOSPITAL_WHATSAPP_NUMBER = "201288590178";
const WhatsAppWidget = (): React.JSX.Element => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const handleSendMessage = () => {
    if (message.trim() === "") return;
    const predefinedText = t('whatsapp.predefinedMessage') + "\n";
    const encodedMessage = encodeURIComponent(predefinedText + message);
    const whatsappUrl = `https://wa.me/${HOSPITAL_WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setMessage("");
    setIsOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 start-6 z-[60] font-cairo">
      <div
        className={`
          absolute bottom-20 start-0 w-80 transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'}
        `}
      >
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-teal-500 to-green-500 text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold">{t('whatsapp.title')}</h3>
              <p className="text-xs opacity-90">{t('whatsapp.replyTime')}</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-full">
              <FiX size={20} />
            </button>
          </div>

          <div className="p-4 h-40 flex flex-col text-start">
            <div className="bg-gray-100 p-3 rounded-lg self-start max-w-[85%]">
              <p className="text-sm">{t('whatsapp.welcomeMessage')}</p>
            </div>
          </div>

          <div className="p-3 border-t flex items-center gap-2">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t('whatsapp.placeholder')}
              className="flex-grow bg-gray-100 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none h-10"
            />
            <button
              onClick={handleSendMessage}
              className="bg-teal-500 text-white p-2.5 rounded-full hover:bg-teal-600 transition-colors"
              aria-label={t('whatsapp.sendLabel')}
            >
              <FiSend size={20} />
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 text-white rounded-full p-4 shadow-xl hover:bg-green-600 transform hover:scale-110 transition-all duration-300 z-[70]"
        aria-label={t('whatsapp.openChatLabel')}
      >
        {isOpen ? <FiX size={28} /> : <FaWhatsapp size={28} />}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
