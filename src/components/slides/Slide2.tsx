import { motion } from 'motion/react';
import { TrendingUp, Target, TrendingDown, Activity, Users, MousePointer, Eye, MessageCircle } from 'lucide-react';
import { ReactNode } from 'react';

export default function Slide2() {
  return (
    <div className="flex-1 flex flex-col p-8 md:p-12 overflow-y-auto w-full h-full custom-scrollbar">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 rounded-lg bg-[#00f2fe]/10 flex items-center justify-center border border-[#00f2fe]/20">
          <TrendingUp className="text-[#00f2fe]" />
        </div>
        <div>
          <h2 className="text-2xl font-black tracking-tight text-white">ASSESSORIA DE MARKETING</h2>
          <p className="text-white/50 text-sm">Visão Geral de Performance</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Panel 1: META */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0f0f11] rounded-xl border border-white/5 p-6 flex flex-col gap-4 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Target size={100} />
          </div>
          <h3 className="text-[#00f2fe] text-xs font-bold tracking-widest mb-2 z-10">META DE TRÁFEGO</h3>
          
          <div className="flex flex-col gap-3 z-10">
            <MetricRow label="Investimento" value="R$ 6.675,00" />
            <MetricRow label="Meta de Leads (CPL R$15)" value="445" />
            <MetricRow label="Meta Ideal de Vendas (3%)" value="14" />
            <MetricRow label="CAC Ideal" value="R$ 500,00" />
            
            <div className="h-px w-full bg-white/10 my-1" />
            
            <MetricRow label="Ticket Médio" value="R$ 70.000,00" />
            <MetricRow label="Faturamento Estimado" value="R$ 980.000,00" highlight />
            <MetricRow label="Lucro (15%)" value="R$ 147.000,00" highlight />
            <MetricRow label="ROAS" value="146.82x" highlight color="text-green-400" />
          </div>
        </motion.div>

        {/* Panel 2: REALIZADO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#0f0f11] rounded-xl border border-[#00f2fe]/20 p-6 flex flex-col gap-4 relative overflow-hidden shadow-[0_0_30px_rgba(0,242,254,0.03)]"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Activity size={100} />
          </div>
          <h3 className="text-white text-xs font-bold tracking-widest mb-2 z-10">REALIZADO ATÉ O MOMENTO</h3>
          
          <div className="flex flex-col gap-3 z-10">
            <MetricRow label="Investimento Gasto" value="R$ 2.431,03" />
            <MetricRow label="Conversas Iniciadas" value="270" highlight color="text-green-400" />
            <MetricRow label="Custo por Conversa" value="R$ 9,00" highlight color="text-green-400" subtitle="Abaixo da meta de R$15" />
            <MetricRow label="Cliques no Link (CTR 1.77%)" value="1.776" />
            
            <div className="h-px w-full bg-white/10 my-1" />
            
            <div className="grid grid-cols-2 gap-4 mt-2">
               <MiniMetric icon={<Eye size={14}/>} label="Impressões" value="100.284" />
               <MiniMetric icon={<Users size={14}/>} label="Alcance" value="66.942" />
               <MiniMetric label="CPM Médio" value="R$ 24,24" />
               <MiniMetric label="CPC Médio" value="R$ 0,85" />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Footer Info Row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-auto bg-black/40 rounded-lg p-4 border border-white/5 flex items-center justify-between text-sm"
      >
        <div className="flex items-center gap-3">
          <MessageCircle className="text-[#00f2fe]/70" size={20} />
          <span className="text-white/70">Engajamento total da página (reações, cliques, mensagens)</span>
        </div>
        <span className="font-bold text-white text-lg">22.585</span>
      </motion.div>
    </div>
  );
}

function MetricRow({ label, value, highlight = false, color = "text-[#00f2fe]", subtitle }: { label: string, value: string, highlight?: boolean, color?: string, subtitle?: string }) {
  return (
    <div className="flex items-center justify-between group">
      <span className="text-white/60 text-sm font-medium">{label}</span>
      <div className="text-right">
        <span className={`text-sm ${highlight ? `font-bold ${color}` : 'font-semibold text-white'}`}>{value}</span>
        {subtitle && <p className="text-[10px] text-green-500/70">{subtitle}</p>}
      </div>
    </div>
  );
}

function MiniMetric({ icon, label, value }: { icon?: ReactNode, label: string, value: string }) {
  return (
    <div className="bg-black/30 rounded p-3 flex flex-col justify-center border border-white/5">
      <div className="flex items-center gap-1.5 text-white/50 text-[10px] uppercase font-bold tracking-wider mb-1">
        {icon}
        {label}
      </div>
      <span className="text-sm font-semibold text-white">{value}</span>
    </div>
  );
}
