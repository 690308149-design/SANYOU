import React from 'react';
import { useTranslation } from '@/i18n';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const { t, lang } = useTranslation();

  const offices = [
    {
      city: lang === 'ja' ? '大阪' : '大阪',
      address: t('contact_address_tokyo'),
      phone: t('contact_phone_tokyo'),
    },
    {
      city: lang === 'ja' ? '北京' : '北京',
      address: t('contact_address_beijing'),
      phone: t('contact_phone_beijing'),
    },
    {
      city: lang === 'ja' ? 'ソウル' : '首尔',
      address: t('contact_address_seoul'),
      phone: t('contact_phone_seoul'),
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary mb-6">
              {t('contact_title')}
            </h1>
            <p className="text-lg text-primary/60 font-sans">
              {t('contact_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="flex items-start gap-6 p-8 border border-accent bg-accent/5">
                <div className="w-12 h-12 bg-accent text-white flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-primary/40 mb-2">{t('contact_email_title')}</h3>
                  <p className="text-xl font-bold text-primary font-mono">{t('contact_email')}</p>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-sm font-mono font-bold uppercase tracking-[0.2em] text-primary border-b pb-4">{t('contact_network_title')}</h3>
                <div className="space-y-10">
                  {offices.map((office, idx) => (
                    <div key={idx} className="group">
                      <h4 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent" />
                        {office.city} {t('contact_office_label')}
                      </h4>
                      <div className="space-y-3 font-sans text-primary/70 pl-6">
                        <p className="text-sm">{office.address}</p>
                        <p className="text-sm flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 opacity-50" />
                          {office.phone}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative bg-primary h-[500px] lg:h-auto border border-border overflow-hidden">
               <img 
                 src="../images/product/03Map.png" 
                 alt="Global Network Map" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const GlobePin = ({ x, y, label }: { x: string; y: string; label: string }) => (
  <div className="absolute flex flex-col items-center gap-1" style={{ left: x, top: y }}>
    <div className="w-3 h-3 bg-accent animate-pulse" />
    <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-white/80 px-2 py-0.5">{label}</span>
  </div>
);

export default ContactPage;
