import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import { supportedLanguages, languageNames, type SupportedLanguage } from '../i18n/config';

export default function LanguageSwitcher({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;
  const textClass = variant === 'dark' ? 'text-white' : 'text-navy-700';
  const hoverClass = variant === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-50';

  const changeLanguage = (lang: SupportedLanguage) => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-colors ${textClass} ${hoverClass}`}
        aria-label="Select language"
        aria-expanded={open}
      >
        <Globe className="w-4 h-4" />
        <span className="uppercase">{currentLang}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50 animate-fade-in">
          {supportedLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-ocean-50 ${
                currentLang === lang ? 'text-ocean-600 font-semibold bg-ocean-50/50' : 'text-navy-700'
              }`}
            >
              {languageNames[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
