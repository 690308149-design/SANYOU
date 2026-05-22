import React from 'react';
import { useTranslation } from '@/i18n';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Clock, Zap, Headphones } from 'lucide-react';

const ServicesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="relative bg-primary py-24 text-primary-foreground border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_9bdb5a10-e64e-45bf-88b3-c86a87df3627.jpg" 
            alt="IT Services" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">{t('nav_services')}</h1>
          <p className="text-lg text-primary-foreground/60 max-w-2xl font-sans">
            {t('service_header_subtitle')}
          </p>
        </div>
      </section>

      {/* Operations Service */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-accent">
                <Clock className="w-5 h-5" />
                <span className="font-mono font-bold tracking-widest uppercase text-sm">Service 01</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">{t('service_ops_title')}</h2>
              <p className="text-lg text-primary/60 leading-relaxed font-sans">{t('service_ops_desc')}</p>
              
              <div className="space-y-4 pt-4">
                <h4 className="font-bold text-primary uppercase text-xs tracking-widest border-b pb-2">{t('service_sla_options')}</h4>
                <div className="flex gap-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">{t('service_standard')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">{t('service_premium')}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted p-12 border border-border">
              <div className="space-y-6">
                {[
                  t('service_ops_item1'),
                  t('service_ops_item2'),
                  t('service_ops_item3'),
                  t('service_ops_item4')
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="text-sm text-primary/80 font-medium">{item}</span>
                    <Badge variant="outline" className="rounded-none font-mono text-[10px] text-accent border-accent/30">{t('service_active')}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Smart Service */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 bg-white p-12 border border-border shadow-sm">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: t('service_ai_stat1'), value: "99%" },
                  { label: t('service_ai_stat2'), value: "<10s" },
                  { label: t('service_ai_stat3'), value: "90%" },
                  { label: t('service_ai_stat4'), value: "45%" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-[10px] font-mono font-bold text-primary/40 uppercase tracking-widest">{stat.label}</p>
                    <p className="text-3xl font-bold text-primary font-mono">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 text-accent">
                <Zap className="w-5 h-5" />
                <span className="font-mono font-bold tracking-widest uppercase text-sm">Service 02</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">{t('service_ai_title')}</h2>
              <p className="text-lg text-primary/60 leading-relaxed font-sans">{t('service_ai_desc')}</p>
              <ul className="space-y-3 font-sans text-sm text-primary/70">
                <li className="flex gap-2"><span>•</span> {t('service_ai_feature1')}</li>
                <li className="flex gap-2"><span>•</span> {t('service_ai_feature2')}</li>
                <li className="flex gap-2"><span>•</span> {t('service_ai_feature3')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Support Service */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-accent mb-4">
              <Headphones className="w-5 h-5" />
              <span className="font-mono font-bold tracking-widest uppercase text-sm">Service 03</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">{t('service_tech_title')}</h2>
            <p className="text-primary/60 max-w-2xl mx-auto font-sans">{t('service_tech_desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { level_ja: "標準", level_zh: "标准", channels: t('service_pkg_standard_channels'), response: t('service_pkg_standard_response') },
              { level_ja: "アドバンス", level_zh: "高级", channels: t('service_pkg_advanced_channels'), response: t('service_pkg_advanced_response'), featured: true },
              { level_ja: "プレミアム", level_zh: "尊享", channels: t('service_pkg_exclusive_channels'), response: t('service_pkg_exclusive_response') }
            ].map((pkg, i) => (
              <div key={i} className={`p-8 border-2 ${pkg.featured ? 'border-accent bg-accent/5' : 'border-border'} flex flex-col gap-6`}>
                <h3 className="text-xl font-bold text-primary font-mono uppercase tracking-widest">{t('nav_home') === '首页' ? pkg.level_zh : pkg.level_ja}</h3>
                <div className="space-y-4 text-sm font-sans">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-primary/40 uppercase text-[10px] font-bold">{t('service_pkg_channels')}</span>
                    <span className="font-medium">{pkg.channels}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-primary/40 uppercase text-[10px] font-bold">{t('service_pkg_response')}</span>
                    <span className="font-medium">{pkg.response}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

};

export default ServicesPage;
