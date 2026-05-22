import React from 'react';
import { useTranslation } from '@/i18n';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full">
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
          <img src="https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_7ed21205-564b-466d-953a-d0b6625e4592.jpg" alt="Innovation" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary mb-12">
              {t('about_title')}
            </h1>
            <div className="space-y-8">
              <p className="text-2xl text-primary/80 leading-snug font-medium font-sans italic border-l-4 border-accent pl-8 py-2">
                "{t('about_slogan')}"
              </p>
              <p className="text-lg text-primary/60 leading-relaxed font-sans">
                {t('about_text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-sm font-mono font-bold uppercase tracking-[0.2em] text-accent">{t('about_heritage_title')}</h3>
              <p className="text-primary/70 leading-relaxed font-sans">
                {t('about_heritage_text')}
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-sm font-mono font-bold uppercase tracking-[0.2em] text-accent">{t('about_methodology_title')}</h3>
              <p className="text-primary/70 leading-relaxed font-sans">
                {t('about_methodology_text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: t('about_stat_founded'), value: "2021" },
              { label: t('about_stat_offices'), value: t('about_stat_offices_val') },
              { label: t('about_stat_engineers'), value: t('about_stat_engineers_val') },
              { label: t('about_stat_sla'), value: "99.99%" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 border border-border">
                <p className="text-[10px] font-mono font-bold text-primary/40 uppercase tracking-widest mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-primary font-mono">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
