import { motion } from 'motion/react';
import { Bot, Calendar, MessageSquare, Percent, TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ReactNode } from 'react';

const CHART_DATA = [
  { name: '10/3', leads: 5, visitas: 0 },
  { name: '12/3', leads: 8, visitas: 1 },
  { name: '14/3', leads: 12, visitas: 0 },
  { name: '16/3', leads: 25, visitas: 2 },
  { name: '18/3', leads: 42, visitas: 0 },
  { name: '20/3', leads: 15, visitas: 1 },
  { name: '22/3', leads: 10, visitas: 0 },
  { name: '24/3', leads: 18, visitas: 3 },
  { name: '26/3', leads: 22, visitas: 1 },
  { name: '28/3', leads: 15, visitas: 4 },
  { name: '02/4', leads: 2, visitas: 0 },
  { name: '06/4', leads: 8, visitas: 1 },
  { name: '14/4', leads: 35, visitas: 2 },
  { name: '16/4', leads: 44, visitas: 1 },
  { name: '18/4', leads: 15, visitas: 0 },
  { name: '21/4', leads: 3, visitas: 0 },
];

const TOP_CARS = [
  { name: "Chevrolet ONIX HATCH LT 1.0 2021", count: 2 },
  { name: "Chevrolet Onix", count: 2 },
  { name: "Chevrolet S10 Pick-Up LTZ 2.8 TDI 4x4...", count: 1 },
  { name: "Fiat Strada Working Celeb.1.4 2014", count: 1 },
  { name: "Hyundai HB20", count: 1 },
  { name: "Volkswagen Polo Highline 2019", count: 1 },
  { name: "Nivus Comfortline 2022", count: 1 },
];

export default function Slide4() {
  return (
    <div className="flex-1 flex flex-col p-8 md:p-12 overflow-y-auto w-full h-full custom-scrollbar">
      <div className="flex items-center gap-4 mb-6 shrink-0">
        <div className="w-12 h-12 rounded-lg bg-[#00f2fe]/10 flex items-center justify-center border border-[#00f2fe]/20 shrink-0">
          <Bot className="text-[#00f2fe]" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-black tracking-tight text-white">AGENTE DE ATENDIMENTO 24H</h2>
          <p className="text-white/50 text-sm">Visão Geral das Métricas no Período (22/04/2025 - 22/04/2026)</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard title="LEADS TOTAIS" value="466" icon={<MessageSquare size={16} />} delay={0.1} />
        <StatCard title="VISITAS TOTAIS" value="42" icon={<Calendar size={16} />} delay={0.2} />
        <StatCard title="SIMULAÇÕES" value="21" icon={<Percent size={16} />} delay={0.3} />
        <StatCard title="LEADS HOJE" value="1" icon={<TrendingUp size={16} />} delay={0.4} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2 bg-[#0f0f11] rounded-xl border border-white/5 p-4 h-[250px] flex flex-col"
        >
          <h3 className="text-[10px] uppercase font-bold text-white/50 mb-4 tracking-wider">Evolução de Leads</h3>
          <div className="flex-1 w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={CHART_DATA} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00f2fe" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00f2fe" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#ffffff20" fontSize={10} tickMargin={10} />
                <YAxis stroke="#ffffff20" fontSize={10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="leads" stroke="#00f2fe" strokeWidth={2} fillOpacity={1} fill="url(#colorLeads)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-[#0f0f11] rounded-xl border border-white/5 p-4 flex flex-col"
        >
          <h3 className="text-[10px] uppercase font-bold text-white/50 mb-4 tracking-wider">Horários Top (Visitas)</h3>
          <div className="flex flex-col gap-3 flex-1 justify-center">
            <TimeCard time="10:00" desc="14 agendamentos (33.3%)" rank="1º" color="text-yellow-400" bg="bg-yellow-400/10" />
            <TimeCard time="14:00" desc="6 agendamentos (14.3%)" rank="2º" color="text-gray-300" bg="bg-gray-300/10" />
            <TimeCard time="08:00" desc="5 agendamentos (11.9%)" rank="3º" color="text-orange-400" bg="bg-orange-400/10" />
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-[#0f0f11] rounded-xl border border-white/5 p-4 flex flex-col"
      >
        <h3 className="text-[10px] uppercase font-bold text-[#00f2fe] mb-4 tracking-wider">Veículos Mais Procurados (IA)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {TOP_CARS.map((car, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div className="flex justify-between text-xs">
                <span className="text-white/80 truncate pr-4">{car.name}</span>
                <span className="text-[#00f2fe] font-bold">{car.count}</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#00f2fe] rounded-full" 
                  style={{ width: `${(car.count / 2) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function StatCard({ title, value, icon, delay }: { title: string, value: string, icon: ReactNode, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="bg-[#0f0f11] rounded-xl border border-white/5 p-4 flex flex-col gap-2"
    >
      <div className="flex items-center gap-2 text-[#00f2fe] mb-1">
        {icon}
        <span className="text-[10px] font-bold tracking-widest">{title}</span>
      </div>
      <span className="text-3xl font-black text-white">{value}</span>
    </motion.div>
  );
}

function TimeCard({ time, desc, rank, color, bg }: { time: string, desc: string, rank: string, color: string, bg: string }) {
  return (
    <div className="flex items-center gap-3 bg-black/40 p-3 rounded-lg border border-white/5">
      <div className={`w-8 h-8 rounded-full ${bg} ${color} flex items-center justify-center font-bold text-xs shrink-0`}>
        {rank}
      </div>
      <div>
        <div className="font-bold text-white leading-tight">{time}</div>
        <div className="text-[10px] text-white/40">{desc}</div>
      </div>
    </div>
  );
}
