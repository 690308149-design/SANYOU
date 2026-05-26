import React from 'react';
import { useTranslation } from '@/i18n';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Layers, Server, Activity, FileText, Bell, Cloud, Repeat, Database, LayoutDashboard } from 'lucide-react';

const ProductsPage = () => {
  const { t, lang } = useTranslation();

  const itomModules = [
    {
      name_ja: 'インフラ監視',
      name_zh: '基础设施监控',
      name_en: 'Infrastructure Monitoring',
      desc_ja: 'サーバ、ネットワーク、ストレージ、データベースを統合監視。',
      desc_zh: '统一监控服务器、网络设备、存储、数据库。',
      desc_en: 'Unified monitoring for servers, networks, storage, and databases.',
      icon: Server,
      img: "../images/product/01Basic.png"
    },
    {
      name_ja: 'APM',
      name_zh: '应用性能监控',
      name_en: 'APM',
      desc_ja: 'トランザクション分析、エンドユーザー体験を可視化。',
      desc_zh: '事务分析、最终用户体验可视。',
      desc_en: 'Transaction analysis and end-user experience visualization.',
      icon: Activity,
      img: "../images/product/01APM.png"
    },
    {
      name_ja: 'ログ管理',
      name_zh: '日志管理',
      name_en: 'Log Management',
      desc_ja: '集中ログ収集、パターン認識、自動クラスタリング。',
      desc_zh: '集中日志采集、模式识别、自动聚类。',
      desc_en: 'Centralized log collection, pattern recognition, and auto-clustering.',
      icon: FileText,
      img: "../images/product/01Log.png"
    },
    {
      name_ja: 'アラート管理',
      name_zh: '告警管理',
      name_en: 'Alert Management',
      desc_ja: '相関分析、重複抑制、複数チャネル通知。',
      desc_zh: '关联分析、去重、多渠道通知。',
      desc_en: 'Correlation analysis, deduplication, and multi-channel notifications.',
      icon: Bell,
      img: "../images/product/01alert.png"
    },
    {
      name_ja: 'クラウド監視',
      name_zh: '云监控',
      name_en: 'Cloud Monitoring',
      desc_ja: 'AWS/Azure/Google等、マルチクラウドのメトリクス統合。',
      desc_zh: 'AWS/Azure/Google等，多云环境指标统一。',
      desc_en: 'Unified metrics for AWS/Azure/Google and other multi-cloud environments.',
      icon: Cloud,
      img: "../images/product/01Cloud.png"
    },
    {
      name_ja: '自動化',
      name_zh: '自动化',
      name_en: 'Automation',
      desc_ja: '障害発生時にスクリプト実行、サービス再起動を自動化。',
      desc_zh: '故障时自动执行脚本、重启服务。',
      desc_en: 'Automated script execution and service restart upon failures.',
      icon: Repeat,
      img: "../images/product/01Automation.png"
    },
    {
      name_ja: 'CMDB',
      name_zh: '配置管理',
      name_en: 'CMDB',
      desc_ja: '資産・構成アイテムの関係管理、ITIL連携。',
      desc_zh: '资产与配置项关系管理、ITIL对接。',
      desc_en: 'Asset and configuration item relationship management with ITIL integration.',
      icon: Database,
      img: "../images/product/01CMDB.png"
    },
    {
      name_ja: 'レポート',
      name_zh: '报表',
      name_en: 'Reporting',
      desc_ja: 'リアルタイムダッシュボード、週次/月次サマリー。',
      desc_zh: '实时仪表盘、周/月总结报告。',
      desc_en: 'Real-time dashboards with weekly/monthly summary reports.',
      icon: LayoutDashboard,
      img: "../images/product/01Report.png"
    },
  ];

  const aiModules = [
    {
      name_ja: '異常検知',
      name_zh: '异常检测',
      name_en: 'Anomaly Detection',
      desc_ja: '機械学習によるベースライン学習と閾値不要の検知。',
      desc_zh: '基于机器学习的基线学习和无阈值检测。',
      desc_en: 'Baseline learning and threshold-free detection powered by machine learning.',
      img: "../images/product/02Anomaly.png"
    },
    {
      name_ja: '根因分析 (RCA)',
      name_zh: '根因分析',
      name_en: 'Root Cause Analysis',
      desc_ja: 'トポロジー相関を使用して数秒で根本原因を特定。',
      desc_zh: '使用拓扑关联在几秒钟内识别根本原因。',
      desc_en: 'Pinpoint root causes within seconds using topology correlation.',
      img: "../images/product/02Analysis.png"
    },
    {
      name_ja: '容量予測',
      name_zh: '容量预测',
      name_en: 'Capacity Forecasting',
      desc_ja: 'リソース不足を予測し、スケーリングの推奨事項を提供。',
      desc_zh: '预测资源短缺并提供扩缩容建议。',
      desc_en: 'Forecast resource shortages and provide scaling recommendations.',
      img: "../images/product/02Capacity.png"
    },
    {
      name_ja: 'ログ分析',
      name_zh: '日志模式分析',
      name_en: 'Log Pattern Analysis',
      desc_ja: '大量のログデータからパターンを自動抽出。',
      desc_zh: '从海量日志数据中自动提取模式。',
      desc_en: 'Automatically extract patterns from massive log data.',
      img: "../images/product/02Log.png"
    },
    {
      name_ja: 'アラート抑制',
      name_zh: '智能告警抑制',
      name_en: 'Smart Alert Suppression',
      desc_ja: '相関関係によりアラートノイズを90%削減。',
      desc_zh: '通过关联将告警噪声减少 90%。',
      desc_en: 'Reduce alert noise by 90% through correlation.',
      img: "../images/product/02Alert.png"
    },
    {
      name_ja: 'AIアシスタント',
      name_zh: 'AI智能助手',
      name_en: 'AI Assistant',
      desc_ja: '運用サポートのための自然言語分析。',
      desc_zh: '用于运维支持的自然语言分析。',
      desc_en: 'Natural language analysis for operations support.',
      img: "../images/product/02AI.png"
    },
  ];

  const getName = (m: { name_ja: string; name_zh: string; name_en: string }) => {
    if (lang === 'zh') return m.name_zh;
    if (lang === 'en') return m.name_en;
    return m.name_ja;
  };

  const getDesc = (m: { desc_ja: string; desc_zh: string; desc_en: string }) => {
    if (lang === 'zh') return m.desc_zh;
    if (lang === 'en') return m.desc_en;
    return m.desc_ja;
  };

  const diffTitle = lang === 'zh' ? '差异化特性' : lang === 'en' ? 'Differentiators' : '差別化要因';
  const diffItems = [
    {
      title: lang === 'zh' ? '多语言 UI' : lang === 'en' ? 'Multi-language UI' : '多言語UI',
      desc: lang === 'zh' ? '支持日、中、韩、英，适配全球团队。' : lang === 'en' ? 'Supports Japanese, Chinese, Korean, and English for global teams.' : '日本語・中国語・韓国語・英語に対応し、グローバルチームに適合。'
    },
    {
      title: lang === 'zh' ? '时区优化' : lang === 'en' ? 'Timezone Optimization' : 'タイムゾーン最適化',
      desc: lang === 'zh' ? '针对泛亚地区的升级工作流进行了优化。' : lang === 'en' ? 'Optimized escalation workflows for the Pan-Asia region.' : '污アジア地域のエスカレーションワークフローを最適化。'
    },
    {
      title: lang === 'zh' ? '混合监控' : lang === 'en' ? 'Hybrid Monitoring' : 'ハイブリッド監視',
      desc: lang === 'zh' ? '统一监控本地、边缘和公有云视图。' : lang === 'en' ? 'Unified view of on-premises, edge, and public cloud.' : 'オンプレミス、エッジ、パブリッククラウドのビューを一元化。'
    }
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
                    src={m.img}
                    alt={getName(m)}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary text-white">
                      <m.icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-xl font-bold text-primary">
                      {getName(m)}
                    </CardTitle>
                  </div>
                  <p className="text-sm text-primary/60 leading-relaxed font-sans">
                    {getDesc(m)}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-16 p-8 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
              <img src="../images/product/01Basic.png" alt="Platform" className="w-full h-full object-cover" />
            </div>
            <h3 className="relative z-10 text-sm font-mono font-bold uppercase tracking-[0.2em] mb-8 border-b border-primary-foreground/20 pb-4">{diffTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {diffItems.map((item, i) => (
                <div key={i}>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-primary-foreground/60">{item.desc}</p>
                </div>
              ))}
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
                  <img src={m.img} alt={getName(m)} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-accent font-mono text-xl font-bold opacity-30">0{idx + 1}</div>
                    <h3 className="text-lg font-bold text-primary">
                      {getName(m)}
                    </h3>
                  </div>
                  <p className="text-sm text-primary/60 leading-relaxed font-sans">
                    {getDesc(m)}
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
