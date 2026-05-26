import React, { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from '@/i18n';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Globe, Menu, X } from 'lucide-react';

const Header = () => {
  const { t, lang, setLanguage } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { lang: urlLang } = useParams<{ lang: string }>();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: t('nav_home'), path: `/${lang}` },
    { name: t('nav_products'), path: `/${lang}/products` },
    { name: t('nav_services'), path: `/${lang}/services` },
    { name: t('nav_about'), path: `/${lang}/about` },
    { name: t('nav_contact'), path: `/${lang}/contact` },
  ];

  const handleLanguageChange = (newLang: 'ja' | 'zh') => {
    if (newLang === lang) return;
    const newPath = location.pathname.replace(`/${lang}`, `/${newLang}`);
    setLanguage(newLang);
    navigate(newPath);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to={`/${lang}`} className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary flex items-center justify-center">
            <span className="text-white font-mono text-xl font-bold">S</span>
          </div>
          <span className="font-mono text-lg font-bold tracking-tight text-primary">SANYOU</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive(item.path) ? 'text-accent' : 'text-primary/70'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-2 px-3">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-mono">{lang === 'ja' ? 'JP' : 'CN'}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32">
              <DropdownMenuItem onClick={() => handleLanguageChange('ja')}>
                日本语 (JP)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('zh')}>
                中文 (CN)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="p-2">
                <Globe className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleLanguageChange('ja')}>日本语</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('zh')}>中文</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="p-2">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <div className="flex flex-col gap-8 mt-12">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl font-medium ${
                      isActive(item.path) ? 'text-accent' : 'text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
