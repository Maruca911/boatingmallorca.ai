import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Anchor, Menu, X, ChevronDown } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

interface SubmenuItem {
  labelKey: string;
  path: string;
  premium?: boolean;
}

interface DropdownConfig {
  key: string;
  labelKey: string;
  items: SubmenuItem[];
}

const dropdowns: DropdownConfig[] = [
  {
    key: 'services',
    labelKey: 'nav.services',
    items: [
      { labelKey: 'nav.rentals', path: '/rentals-charters' },
      { labelKey: 'nav.tours', path: '/tours-excursions' },
      { labelKey: 'nav.mooring', path: '/mooring-maintenance' },
      { labelKey: 'nav.events', path: '/events-clubs' },
      { labelKey: 'nav.buyYacht', path: '/buy-yacht' },
      { labelKey: 'nav.sellYacht', path: '/sell-yacht' },
      { labelKey: 'nav.crewJobs', path: '/crew-jobs' },
      { labelKey: 'nav.ribClub', path: '/rib-club', premium: true },
    ],
  },
  {
    key: 'explore',
    labelKey: 'nav.explore',
    items: [
      { labelKey: 'nav.destinations', path: '/explore/destinations' },
      { labelKey: 'nav.marinas', path: '/explore/marinas' },
      { labelKey: 'nav.routes', path: '/explore/routes' },
      { labelKey: 'nav.guides', path: '/explore/guides' },
    ],
  },
  {
    key: 'directory',
    labelKey: 'nav.directory',
    items: [
      { labelKey: 'nav.brokers', path: '/directory/brokers' },
      { labelKey: 'nav.charterCompanies', path: '/directory/charter-companies' },
      { labelKey: 'nav.brands', path: '/directory/brands' },
      { labelKey: 'nav.marineServices', path: '/directory/marine-services' },
      { labelKey: 'nav.yachtClubs', path: '/directory/yacht-clubs' },
    ],
  },
];

export default function Header() {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const headerBg = scrolled || !isHome
    ? 'bg-white/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-navy-700' : 'text-white';
  const logoColor = scrolled || !isHome ? 'text-ocean-500' : 'text-white';
  const hoverBg = scrolled || !isHome ? 'hover:bg-ocean-50' : 'hover:bg-white/10';

  const isActivePath = (path: string) =>
    location.pathname === path || (path !== '/' && location.pathname.startsWith(path + '/'));

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <nav className="container-narrow flex items-center justify-between h-16 lg:h-20" aria-label="Main navigation">
        <Link to="/" className={`flex items-center gap-2 ${logoColor} transition-colors`}>
          <Anchor className="w-7 h-7 lg:w-8 lg:h-8" strokeWidth={2.5} />
          <span className="font-heading font-bold text-lg lg:text-xl">Boating Mallorca</span>
        </Link>

        <div className="hidden lg:flex items-center gap-0.5">
          <Link
            to="/"
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              location.pathname === '/'
                ? scrolled || !isHome ? 'text-ocean-600 bg-ocean-50' : 'text-white bg-white/20'
                : `${textColor} ${hoverBg}`
            }`}
          >
            {t('nav.home')}
          </Link>

          {dropdowns.map((dd) => (
            <div key={dd.key} className="relative group">
              <button
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${textColor} ${hoverBg}`}
              >
                {t(dd.labelKey)}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {dd.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 text-sm font-medium transition-colors first:rounded-t-lg last:rounded-b-lg hover:bg-ocean-50 ${
                      item.premium ? 'text-ocean-600 border-t border-gray-100' : 'text-navy-700'
                    } ${isActivePath(item.path) ? 'bg-ocean-50 text-ocean-600' : ''}`}
                  >
                    {t(item.labelKey)}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Link
            to="/faq"
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActivePath('/faq')
                ? scrolled || !isHome ? 'text-ocean-600 bg-ocean-50' : 'text-white bg-white/20'
                : `${textColor} ${hoverBg}`
            }`}
          >
            {t('nav.faq')}
          </Link>
          <Link
            to="/blog"
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActivePath('/blog')
                ? scrolled || !isHome ? 'text-ocean-600 bg-ocean-50' : 'text-white bg-white/20'
                : `${textColor} ${hoverBg}`
            }`}
          >
            {t('nav.blog')}
          </Link>

          <LanguageSwitcher variant={scrolled || !isHome ? 'light' : 'dark'} />

          <Link to="/get-matched" className="btn-primary ml-2 text-sm py-2">
            {t('nav.getMatched')}
          </Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <LanguageSwitcher variant={scrolled || !isHome ? 'light' : 'dark'} />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-2 rounded-lg ${textColor} transition-colors`}
            aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg animate-slide-down max-h-[80vh] overflow-y-auto">
          <div className="container-narrow py-4 flex flex-col gap-1">
            <Link
              to="/"
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/' ? 'text-ocean-600 bg-ocean-50' : 'text-navy-700 hover:bg-gray-50'
              }`}
            >
              {t('nav.home')}
            </Link>

            {dropdowns.map((dd) => (
              <div key={dd.key}>
                <button
                  onClick={() => setOpenDropdown(openDropdown === dd.key ? null : dd.key)}
                  className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between text-navy-700 hover:bg-gray-50"
                >
                  {t(dd.labelKey)}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === dd.key ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === dd.key && (
                  <div className="pl-4 flex flex-col gap-1">
                    {dd.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          isActivePath(item.path) ? 'text-ocean-600 bg-ocean-50' : 'text-navy-700 hover:bg-gray-50'
                        }`}
                      >
                        {t(item.labelKey)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/faq"
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActivePath('/faq') ? 'text-ocean-600 bg-ocean-50' : 'text-navy-700 hover:bg-gray-50'
              }`}
            >
              {t('nav.faq')}
            </Link>
            <Link
              to="/blog"
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActivePath('/blog') ? 'text-ocean-600 bg-ocean-50' : 'text-navy-700 hover:bg-gray-50'
              }`}
            >
              {t('nav.blog')}
            </Link>

            <Link to="/get-matched" className="btn-primary mt-2 text-sm">
              {t('nav.getMatched')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
