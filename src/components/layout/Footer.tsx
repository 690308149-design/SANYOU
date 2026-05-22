import React from 'react';
import { useTranslation } from '@/i18n';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t, lang } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary/20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <Link to={`/${lang}`} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent flex items-center justify-center">
                <span className="text-white font-mono text-xl font-bold">S</span>
              </div>
              <span className="font-mono text-lg font-bold tracking-tight">SANYOU</span>
            </Link>
            <p className="text-sm text-primary-foreground/60 max-w-xs leading-relaxed">
              {t('hero_subtitle')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-sm font-bold mb-6 uppercase tracking-widest">{t('nav_products')}</h4>
            <ul className="flex flex-col gap-3 text-sm text-primary-foreground/60">
              <li><Link to={`/${lang}/products`} className="hover:text-accent transition-colors">Tri-Force ITOM</Link></li>
              <li><Link to={`/${lang}/products`} className="hover:text-accent transition-colors">AIObserver</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-mono text-sm font-bold mb-6 uppercase tracking-widest">{t('nav_contact')}</h4>
            <ul className="flex flex-col gap-3 text-sm text-primary-foreground/60">
              <li>info@sanyou-tech.com</li>
              <li>+81 3-1234-5678 (Tokyo)</li>
              <li>+86 10-1234 5678 (Beijing)</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono text-primary-foreground/40">
            {t('footer_copyright')}
          </p>
          <div className="flex gap-6 text-xs font-mono text-primary-foreground/40">
            <span className="hover:text-accent cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-accent cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
