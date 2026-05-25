import React from 'react';
import { useTranslation } from '@/i18n';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Layers, Server, Activity, FileText, Bell, Cloud, Repeat, Database, LayoutDashboard } from 'lucide-react';

const ProductsPage = () => {
  const { t } = useTranslation();

  const itomModules = [
    { 
      name_ja: 'インフラ監視', 
      name_zh: '基础设施监控', 
      desc_ja: 'サーバ、ネットワーク、ストレージ、データベースを統合監視。', 
      desc_zh: '统一监控服务器、网络设备、存储、数据库。', 
      icon: Server,
      img: "../../public/images/product/01Basic.png"
    },
    { 
      name_ja: 'APM', 
      name_zh: '应用性能监控', 
      desc_ja: 'トランザクション分析、エンドユーザー体験を可視化。', 
      desc_zh: '事务分析、最终用户体验可视。', 
      icon: Activity,
      img: "../../public/images/product/01APM.png"
    },
    { 
      name_ja: 'ログ管理', 
      name_zh: '日志管理', 
      desc_ja: '集中ログ収集、パターン認識、自動クラスタリング。', 
      desc_zh: '集中日志采集、模式识别、自动聚类。', 
      icon: FileText,
      img: "../../public/images/product/01Log.png"
    },
    { 
      name_ja: 'アラート管理', 
      name_zh: '告警管理', 
      desc_ja: '相関分析、重複抑制、複数チャネル通知。', 
      desc_zh: '关联分析、去重、多渠道通知。', 
      icon: Bell,
      img: "../../public/images/product/01alert.png"
    },
    { 
      name_ja: 'クラウド監視', 
      name_zh: '云监控', 
      desc_ja: 'AWS/Azure/Google等、マルチクラウドのメトリクス統合。', 
      desc_zh: 'AWS/Azure/Google等，多云环境指标统一。', 
      icon: Cloud,
      img: "../../public/images/product/01Cloud.png"
    },
    { 
      name_ja: '自動化', 
      name_zh: '自动化', 
      desc_ja: '障害発生時にスクリプト実行、サービス再起動を自动化。', 
      desc_zh: '故障时自动执行脚本、重启服务。', 
      icon: Repeat,
      img: "../../public/images/product/01Automation.png"
    },
    { 
      name_ja: 'CMDB', 
      name_zh: '配置管理', 
      desc_ja: '資産・構成アイテムの関係管理、ITIL連携。', 
      desc_zh: '资产与配置项关系管理、ITIL对接。', 
      icon: Database,
      img: "../../public/images/product/01CMDB.png"
    },
    { 
      name_ja: 'レポート', 
      name_zh: '报表', 
      desc_ja: 'リアルタイムダッシュボード、週次/月次サマリー。', 
      desc_zh: '实时仪表盘、周/月总结报告。', 
      icon: LayoutDashboard,
      img: "../../public/images/product/01Report.png"
    },
  ];

  const aiModules = [
    { 
      name_ja: '異常検知', 
      name_zh: '异常检测', 
      desc_ja: '機械学習によるベースライン学習と閾値不要の検知。',
      desc_zh: '基于机器学习的基线学习和无阈值检测。',
      img: "../../public/images/product/02Anomaly.png"
    },
    { 
      name_ja: '根因分析 (RCA)', 
      name_zh: '根因分析', 
      desc_ja: 'トポロジー相関を使用して数秒で根本原因を特定。',
      desc_zh: '使用拓扑关联在几秒钟内识别根本原因。',
      img: "../../public/images/product/02Analysis.png"
    },
    { 
      name_ja: '容量予測', 
      name_zh: '容量预测', 
      desc_ja: 'リソース不足を予測し、スケーリングの推奨事項を提供。',
      desc_zh: '预测资源短缺并提供扩缩容建议。',
      img: "../../public/images/product/02Capacity.png"
    },
    { 
      name_ja: '日志分析', 
      name_zh: '日志模式分析', 
      desc_ja: '大量のログデータからパターンを自動抽出。',
      desc_zh: '从海量日志数据中自动提取模式。',
      img: "../../public/images/product/02Log.png"
    },
    { 
      name_ja: '告警抑制', 
      name_zh: '智能告警抑制', 
      desc_ja: '相関関係によりアラートノイズを90%削減。',
      desc_zh: '通过关联将告警噪声减少 90%。',
      img: "../../public/images/product/02Alert.png"
    },
    { 
      name_ja: 'AI助手', 
      name_zh: 'AI智能助手', 
      desc_ja: '運用サポートのための自然言語分析。',
      desc_zh: '用于运维支持的自然语言分析。',
      img: "../../public/images/product/02AI.png"
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Tri-Force ITOM Section */}
      <section className="py-24 bg-white border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="mb-16">
            <Badge className="bg-accent text-white rounded-none mb-4 font-mono tracking-widest uppercase">Platform 01</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tighter" dangerouslySetInnerHTML={{ __html: t('products_page_title_tri') }} />
            <p className="text-lg text-primary/60 max-w-3xl leading-relaxed">
              {t('products_subtitle_tri')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itomModules.map((m, idx) => (
              <Card key={idx} className="rounded-none border-border bg-white hover:border-accent transition-all duration-300 overflow-hidden flex flex-col">
                <div className="aspect-video w-full overflow-hidden transition-all duration-500">
                  <img 
                    src={idx === 0 ? "../../public/images/product/01Basic.png" : m.img} 
                    alt={t('nav_home') === '首页' ? m.name_zh : m.name_ja} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <CardHeader className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary text-white">
                      <m.icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-xl font-bold text-primary">
                      {t('nav_home') === '首页' ? m.name_zh : m.name_ja}
                    </CardTitle>
                  </div>
                  <p className="text-sm text-primary/60 leading-relaxed font-sans">
                    {t('nav_home') === '首页' ? m.desc_zh : m.desc_ja}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-16 p-8 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
              <img src="../../public/images/product/01Basic.png" alt="Platform" className="w-full h-full object-cover" />
            </div>
            <h3 className="relative z-10 text-sm font-mono font-bold uppercase tracking-[0.2em] mb-8 border-b border-primary-foreground/20 pb-4">{t('service_pkg_channels') === '渠道' ? '差异化特性' : '差別化要因'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h4 className="font-bold mb-2">{t('service_pkg_channels') === '渠道' ? '多语言 UI' : '多言語UI'}</h4>
                <p className="text-sm text-primary-foreground/60">{t('service_pkg_channels') === '渠道' ? '支持日、中、韩、英，适配全球团队。' : '日本語・中国語・韓国語・英語に対応し、グローバルチームに適合。'}</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">{t('service_pkg_channels') === '渠道' ? '时区优化' : 'タイムゾーン最適化'}</h4>
                <p className="text-sm text-primary-foreground/60">{t('service_pkg_channels') === '渠道' ? '针对泛亚地区的升级工作流进行了优化。' : '汎アジア地域の工スカレーションワークフローを最適化。'}</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">{t('service_pkg_channels') === '渠道' ? '混合监控' : 'ハイブリッド監視'}</h4>
                <p className="text-sm text-primary-foreground/60">{t('service_pkg_channels') === '渠道' ? '统一监控本地、边缘和公有云视图。' : 'オンプレミス、エッジ、パブリッククラウドのビューを一元化。'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIObserver Section */}
      <section className="py-24 bg-muted/10">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="mb-16">
            <Badge className="bg-primary text-white rounded-none mb-4 font-mono tracking-widest uppercase">Platform 02</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tighter" dangerouslySetInnerHTML={{ __html: t('products_page_title_aiobs') }} />
            <p className="text-lg text-primary/60 max-w-3xl leading-relaxed">
              {t('products_subtitle_aiobs')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiModules.map((m, idx) => (
              <div key={idx} className="flex flex-col border border-border bg-white hover:border-accent transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img src={m.img} alt={t('nav_home') === '首页' ? m.name_zh : m.name_ja} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-accent font-mono text-xl font-bold opacity-30">0{idx + 1}</div>
                    <h3 className="text-lg font-bold text-primary">
                      {t('nav_home') === '首页' ? m.name_zh : m.name_ja}
                    </h3>
                  </div>
                  <p className="text-sm text-primary/60 leading-relaxed font-sans">
                    {t('nav_home') === '首页' ? m.desc_zh : m.desc_ja}
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

export default ProductsPage;
