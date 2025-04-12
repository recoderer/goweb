import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full p-2">
        <Languages className="text-white" size={20} />
        {['ru', 'uz', 'en'].map((lang) => (
          <button
            key={lang}
            onClick={() => i18n.changeLanguage(lang)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              i18n.language === lang
                ? 'bg-white text-black'
                : 'text-white hover:bg-white/20'
            }`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};