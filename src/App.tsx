import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { I18nProvider } from '@/i18n';
import AppRoutes from '@/routes';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from '@/components/common/ScrollToTop';

const App: React.FC = () => {
  return (
    <I18nProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
        <Toaster position="top-center" />
      </BrowserRouter>
    </I18nProvider>
  );
};

export default App;
