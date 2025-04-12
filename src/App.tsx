import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoadingScreen } from './components/LoadingScreen';
import { LanguageSelector } from './components/LanguageSelector';
import { ThemeToggle } from './components/ThemeToggle';
import { Section } from './components/Section';
import './i18n/i18n';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  if (loading) {
    return <LoadingScreen />;
  }

  const sections = [
    {
      title: t('tennis.title'),
      description: t('tennis.description'),
      features: t('tennis.features', { returnObjects: true }),
      image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80',
      telegramLink: 'https://t.me/Gotenniskidsbot',
      instagramLink: 'https://instagram.com/gotenniskids',
      schedule: t('tennis.schedule'),
      location: t('tennis.location'),
      phone: t('tennis.phone'),
    },
    {
      title: t('sports.title'),
      description: t('sports.description'),
      features: t('sports.features', { returnObjects: true }),
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
      telegramLink: 'https://t.me/gokidsclub',
      instagramLink: 'https://instagram.com/gokidsclub',
      schedule: t('sports.schedule'),
      location: t('sports.location'),
      phone: t('sports.phone'),
    },
    {
      title: t('learning.title'),
      description: t('learning.description'),
      features: t('learning.features', { returnObjects: true }),
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80',
      telegramLink: 'https://t.me/gokidsclub',
      instagramLink: 'https://instagram.com/gokidsclub',
      schedule: t('learning.schedule'),
      location: t('learning.location'),
      phone: t('learning.phone'),
    },
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 to-black text-white' : 'bg-gradient-to-br from-blue-50 to-white text-gray-900'}`}>
      <div className="fixed top-4 right-4 z-50 flex gap-4">
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <LanguageSelector />
      </div>
      {sections.map((section, index) => (
        <Section key={index} {...section} index={index} theme={theme} />
      ))}
    </div>
  );
}

export default App;