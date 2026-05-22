import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from '@/i18n';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import ServicesPage from '@/pages/ServicesPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';

const LanguageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lang } = useParams<{ lang: string }>();
  const { setLanguage, lang: currentLang } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (lang === 'ja' || lang === 'zh') {
      if (lang !== currentLang) {
        setLanguage(lang as 'ja' | 'zh');
      }
    } else {
      // Default to ja if invalid lang or no lang
      const savedLang = localStorage.getItem('sanyou_lang') || 'ja';
      navigate(`/${savedLang}${location.pathname === '/' ? '' : location.pathname}`, { replace: true });
    }
  }, [lang, currentLang, setLanguage, navigate, location.pathname]);

  if (lang !== 'ja' && lang !== 'zh') return null;

  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/ja" replace />} />
      <Route path="/:lang" element={<LanguageWrapper><Layout /></LanguageWrapper>}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/ja" replace />} />
    </Routes>
  );
};

export const routes = [
  { path: '/', public: true },
  { path: '/ja', public: true },
  { path: '/zh', public: true },
  { path: '/ja/products', public: true },
  { path: '/zh/products', public: true },
  { path: '/ja/services', public: true },
  { path: '/zh/services', public: true },
  { path: '/ja/about', public: true },
  { path: '/zh/about', public: true },
  { path: '/ja/contact', public: true },
  { path: '/zh/contact', public: true },
];

export default AppRoutes;
