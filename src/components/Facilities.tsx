import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import bed1 from '../images/bed (1).jpeg';
import therapy from '../images/bed (2).jpeg';
import bed3 from '../images/bed (3).jpeg';
import bed4 from '../images/bed (4).jpeg';
import outdoor from '../images/outdoor (1).jpeg';
import outdoor2 from '../images/outdoor (2).jpeg';
import outdoor3 from '../images/outdoor (3).jpeg';
import entertainment from '../images/entertainment (1).jpeg';
import entertainment2 from '../images/entertainment (2).jpeg';
import entertainment3 from '../images/entertainment (3).jpeg';
type ImageItem = {
  src: string;
  alt: string;
  category: 'accommodation' | 'sports' | 'therapy' | 'outdoor';
};
type Category = {
  id: 'accommodation' | 'sports' | 'therapy' | 'outdoor';
  name: string;
};

const Facilities = (): React.JSX.Element => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<'all' | ImageItem['category']>('all');
  const allImages: ImageItem[] = [
    { src: bed1, alt: t('facilities.images.groupRoom'), category: 'accommodation' },
    { src: bed3, alt: t('facilities.images.doubleRoom'), category: 'accommodation' },
    { src: bed4, alt: t('facilities.images.singleRoom'), category: 'accommodation' },
    { src: entertainment, alt: t('facilities.images.gym'), category: 'sports' },
    { src: entertainment2, alt: t('facilities.images.sportsActivities'), category: 'sports' },
    { src: entertainment3, alt: t('facilities.images.pool'), category: 'sports' },
    { src: therapy, alt: t('facilities.images.groupTherapy'), category: 'therapy' },
    { src: outdoor, alt: t('facilities.images.garden'), category: 'outdoor' },
    { src: outdoor2, alt: t('facilities.images.building'), category: 'outdoor' },
    { src: outdoor3, alt: t('facilities.images.loungeArea'), category: 'outdoor' },
  ];
  const categories: Category[] = [
    { id: 'accommodation', name: t('facilities.categories.accommodation') },
    { id: 'sports', name: t('facilities.categories.sports') },
    { id: 'therapy', name: t('facilities.categories.therapy') },
    { id: 'outdoor', name: t('facilities.categories.outdoor') },
  ];
  const filteredImages =
    activeCategory === 'all'
      ? allImages
      : allImages.filter((img) => img.category === activeCategory);
  return (
    <section id="facilities" className="py-24 bg-[#f9fbfc] font-cairo">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-4">
            {t('facilities.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('facilities.description')}
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <FilterButton
            active={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
            label={t('facilities.filterAll')}
          />
          {categories.map((cat) => (
            <FilterButton
              key={cat.id}
              active={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              label={cat.name}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow hover:shadow-xl transition duration-500"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-500 flex items-end">
                <p className="text-white p-4 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-start">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
}
const FilterButton = ({ active, onClick, label }: FilterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-sm font-semibold transition duration-300 ${
        active
          ? 'bg-teal-600 text-white shadow-md'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      {label}
    </button>
  );
};

export default Facilities;