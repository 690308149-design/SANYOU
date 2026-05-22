import React from 'react';
import { useTranslation } from '@/i18n';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Cloud, Zap, ShieldCheck, Globe2, Cpu, BarChart3 } from 'lucide-react';

const HomePage = () => {
  const { t, lang } = useTranslation();

  const products = [
    {
      title: t('product_card_itom_title'),
      desc: t('product_card_itom_desc'),
      icon: Monitor,
      link: `/${lang}/products`,
    },
    {
      title: t('product_card_ops_title'),
      desc: t('product_card_ops_desc'),
      icon: Cloud,
      link: `/${lang}/services`,
    },
    {
      title: t('product_card_ai_title'),
      desc: t('product_card_ai_desc'),
      icon: Zap,
      link: `/${lang}/services`,
    },
    {
      title: t('product_card_tech_title'),
      desc: t('product_card_tech_desc'),
      icon: ShieldCheck,
      link: `/${lang}/services`,
    },
  ];

  const advantages = [
    {
      title: t('advantage_1_title'),
      desc: t('advantage_1_desc'),
      icon: Globe2,
    },
    {
      title: t('advantage_2_title'),
      desc: t('advantage_2_desc'),
      icon: Cpu,
    },
    {
      title: t('advantage_3_title'),
      desc: t('advantage_3_desc'),
      icon: BarChart3,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_fffa3267-c6d8-4fae-a5cf-5e5fe5784efa.jpg" 
            alt="Enterprise IT Infrastructure" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 text-center animate-fade-in">
          <h1 
            className="text-4xl md:text-7xl font-bold text-primary mb-8 tracking-tighter leading-tight"
            dangerouslySetInnerHTML={{ __html: t('hero_title') }}
          />
          <p className="text-lg md:text-xl text-primary/60 max-w-2xl mx-auto mb-12 leading-relaxed font-sans">
            {t('hero_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="h-12 px-8 rounded-none font-mono tracking-wide">
              <Link to={`/${lang}/products`}>
                {t('hero_btn_solutions')}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-none border-primary text-primary hover:bg-primary/5 font-mono tracking-wide">
              <Link to={`/${lang}/contact`}>
                {t('hero_btn_contact')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Symbol Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
                {t('symbol_title')}
              </h2>
              <p className="text-lg text-primary/70 leading-relaxed font-sans">
                {t('symbol_text')}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 h-48">
              <div className="relative flex items-center justify-center border border-primary/10 overflow-hidden group">
                <img 
                  src="https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_9599f1ad-2306-44dc-922b-9c3566f59404.jpg" 
                  alt="China" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-primary/40" />
                <span className="relative z-10 text-white text-4xl font-mono font-bold tracking-tighter">CHN</span>
              </div>
              <div className="relative flex items-center justify-center border border-accent/10 overflow-hidden group">
                <img 
                  src="https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_3e9f706a-d8eb-43cf-9cc1-597704b8555b.jpg" 
                  alt="Japan" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-accent/40" />
                <span className="relative z-10 text-white text-4xl font-mono font-bold tracking-tighter">JPN</span>
              </div>
              <div className="relative flex items-center justify-center border border-primary/10 overflow-hidden group">
                <img 
                  src="https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_30651429-ea54-42bd-b342-ce6ca2a9b306.jpg" 
                  alt="Korea" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-primary/40" />
                <span className="relative z-10 text-white text-4xl font-mono font-bold tracking-tighter">KOR</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Products & Services Grid */}
      <section className="py-32">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p, idx) => (
              <Card key={idx} className="group rounded-none border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white">
                <CardHeader className="pt-8 px-8">
                  <div className="w-12 h-12 flex items-center justify-center bg-muted text-primary group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <p.icon className="w-6 h-6" />
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-10">
                  <CardTitle className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                    {p.title}
                  </CardTitle>
                  <p className="text-sm text-primary/60 leading-relaxed font-sans mb-8 min-h-[4rem]">
                    {p.desc}
                  </p>
                  <Link to={p.link} className="inline-flex items-center gap-2 text-sm font-mono font-bold text-primary hover:text-accent transition-colors">
                    LEARN MORE <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Advantages Section */}
      <section className="py-32 border-t border-border bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-20 tracking-tight">
            {t('advantage_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {advantages.map((adv, idx) => (
              <div key={idx} className="flex flex-col items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                  <adv.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2 font-mono uppercase tracking-wider">
                    {adv.title}
                  </h3>
                  <p className="text-primary/60 font-sans">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
