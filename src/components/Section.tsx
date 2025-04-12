import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Clock, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SectionProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  telegramLink: string;
  instagramLink: string;
  index: number;
  schedule: string;
  location: string;
  phone: string;
  theme: 'dark' | 'light';
}

export const Section = ({
  title,
  description,
  features,
  image,
  telegramLink,
  instagramLink,
  index,
  schedule,
  location,
  phone,
  theme,
}: SectionProps) => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="min-h-screen flex items-center justify-center p-8"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              {title}
            </h2>
            <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
          </motion.div>
          
          <ul className="space-y-4">
            {features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center gap-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
              >
                <span className="h-2 w-2 bg-blue-400 rounded-full" />
                {feature}
              </motion.li>
            ))}
          </ul>

          <div className={`space-y-4 ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'} rounded-2xl p-6 backdrop-blur-sm`}>
            <div className={`flex items-center gap-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              <Clock className="text-blue-400" size={20} />
              <span className="font-medium">{t('common.schedule')}:</span>
              <span>{schedule}</span>
            </div>
            <div className={`flex items-center gap-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              <MapPin className="text-blue-400" size={20} />
              <span className="font-medium">{t('common.location')}:</span>
              <span>{location}</span>
            </div>
            <div className={`flex items-center gap-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              <Phone className="text-blue-400" size={20} />
              <span className="font-medium">{t('common.phone')}:</span>
              <a href={`tel:${phone}`} className="hover:text-blue-400 transition-colors">{phone}</a>
            </div>
          </div>

          <div className="flex gap-4">
            <motion.a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              Telegram <ExternalLink size={16} />
            </motion.a>
            <motion.a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              Instagram <ExternalLink size={16} />
            </motion.a>
            <motion.a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full hover:from-green-600 hover:to-emerald-600 transition-colors"
            >
              {t('common.tryNow')} <ExternalLink size={16} />
            </motion.a>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl overflow-hidden shadow-2xl relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img
            src={image}
            alt={title}
            className="w-full h-[600px] object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};