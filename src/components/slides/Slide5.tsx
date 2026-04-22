import { motion } from 'motion/react';
import { Target, TrendingUp, Calendar, MessageSquare, Video, ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { ReactNode, Key } from 'react';

const STEPS = [
  { 
    icon: <TrendingUp size={24} />, 
    title: "Aumentar verba do tráfego",
    desc: "Acelerar captação e aproveitar custo por lead favorável.",
    color: "from-green-500/20 to-green-500/0",
    iconColor: "text-green-400"
  },
  { 
    icon: <Calendar size={24} />, 
    title: "Ativar follow day dia 30/04",
    desc: "Ação massiva de recaptura de leads antigos.",
    color: "from-[#00f2fe]/20 to-[#00f2fe]/0",
    iconColor: "text-[#00f2fe]"
  },
  { 
    icon: <MessageSquare size={24} />, 
    title: "Feedback Comercial",
    desc: "Alinhamento estrutural da equipe sobre os leads.",
    color: "from-purple-500/20 to-purple-500/0",
    iconColor: "text-purple-400"
  },
  { 
    icon: <Video size={24} />, 
    title: "Acessar Formação Nova Era",
    desc: "Consumir os conteúdos da área de membros de forma ativa.",
    color: "from-orange-500/20 to-orange-500/0",
    iconColor: "text-orange-400"
  },
  { 
    icon: <Play size={24} />, 
    title: "Treinamentos Semanais",
    desc: "Garantir a presença da equipe nas reuniões ao vivo.",
    color: "from-red-500/20 to-red-500/0",
    iconColor: "text-red-400"
  }
];

export default function Slide5() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-12 relative overflow-y-auto w-full h-full custom-scrollbar">
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00f2fe]/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center mb-8 md:mb-12 z-10 shrink-0"
      >
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#00f2fe]/10 flex items-center justify-center border border-[#00f2fe]/30 mb-4 shadow-[0_0_30px_rgba(0,242,254,0.2)]">
          <Target className="text-[#00f2fe] w-6 h-6 md:w-8 md:h-8" />
        </div>
        <h2 className="text-2xl md:text-5xl font-black tracking-tight text-white mb-2 md:mb-4">PRÓXIMOS PASSOS</h2>
        <p className="text-white/50 text-center text-sm md:text-base max-w-lg">Plano de ação focado em destravar gargalos, aumentar performance comercial e elevar o resultado geral da operação.</p>
      </motion.div>

      <div className="w-full max-w-4xl z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {STEPS.map((step, i) => (
          <StepCard 
            key={i} 
            step={step} 
            index={i} 
            isLarge={i < 2} 
          />
        ))}
        
        {/* Call to action card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-[#00f2fe] to-blue-600 rounded-xl p-6 flex flex-col justify-end relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          <div className="z-10 flex justify-between items-end">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 size={16} className="text-white" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Aprovação</span>
              </div>
              <h3 className="font-black text-xl text-white">Validar Plano</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <ArrowRight className="text-blue-600" size={20} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function StepCard({ step, index, isLarge }: { key?: Key, step: { title: string; desc: string; color: string; iconColor: string; icon: ReactNode }, index: number, isLarge: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`bg-[#131315] rounded-xl border border-white/5 p-6 relative overflow-hidden group hover:border-[#00f2fe]/30 transition-colors ${isLarge ? 'md:col-span-1 lg:col-span-2 lg:col-span-1' : ''}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
      
      <div className="relative z-10 h-full flex flex-col">
        <div className={`w-12 h-12 rounded-lg bg-black/50 flex items-center justify-center border border-white/10 mb-4 ${step.iconColor}`}>
          {step.icon}
        </div>
        <h3 className="font-bold text-lg text-white mb-2 leading-tight">{step.title}</h3>
        <p className="text-sm text-white/40 mt-auto">{step.desc}</p>
      </div>
    </motion.div>
  );
}
