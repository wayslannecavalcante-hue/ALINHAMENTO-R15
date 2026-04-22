import { motion } from 'motion/react';
import { Target, Users, Bot, Zap } from 'lucide-react';
import { ReactNode } from 'react';

export default function Slide1() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-12 bg-gradient-to-br from-[#0a0a0a] via-[#050505] to-[#020a0e] relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00f2fe]/5 rounded-full blur-[100px]" />
      
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 tracking-tighter z-10 mb-20 text-center"
      >
        R15 MULTIMARCAS <span className="text-[#00f2fe]">+</span> AEG MEDIA
      </motion.h1>

      <div className="relative w-full max-w-2xl aspect-square max-h-[500px] z-10 flex items-center justify-center">
        {/* Center Node */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="absolute z-20 w-40 h-40 border border-[#00f2fe]/30 bg-[#00f2fe]/5 rounded-xl rotate-45 flex items-center justify-center backdrop-blur-sm shadow-[0_0_50px_rgba(0,242,254,0.1)]"
        >
          <div className="-rotate-45 flex flex-col items-center gap-2">
            <Zap className="w-8 h-8 text-[#00f2fe]" />
            <span className="font-bold text-white tracking-widest text-lg">AEG</span>
            <span className="text-[10px] uppercase tracking-widest text-[#00f2fe]/70">Media</span>
          </div>
        </motion.div>

        {/* Orbiting Nodes */}
        <Node 
          delay={0.4} 
          icon={<Target />} 
          label="Assessoria de" 
          sublabel="Marketing" 
          position="-left-12 md:left-12 top-1/2 -translate-y-1/2" 
        />
        <Node 
          delay={0.5} 
          icon={<Users />} 
          label="Treinamento" 
          sublabel="Comercial" 
          position="-right-12 md:right-12 top-1/2 -translate-y-1/2" 
        />
        <Node 
          delay={0.6} 
          icon={<Bot />} 
          label="Agente de" 
          sublabel="Atendimento 24h" 
          position="bottom-8 md:bottom-12 left-1/2 -translate-x-1/2" 
        />
      </div>
    </div>
  );
}

function Node({ 
  delay, 
  icon, 
  label, 
  sublabel, 
  position 
}: { 
  delay: number, 
  icon: ReactNode, 
  label: string, 
  sublabel: string, 
  position: string 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", delay }}
      className={`absolute ${position} z-10`}
    >
      <div className="w-36 h-36 border border-white/10 bg-black/40 rounded-xl rotate-45 flex items-center justify-center backdrop-blur-md shadow-xl hover:border-[#00f2fe]/30 transition-colors duration-500">
        <div className="-rotate-45 flex flex-col items-center justify-center text-center gap-1.5 p-4">
          <div className="text-[#00f2fe]">{icon}</div>
          <span className="text-xs font-medium text-white/80 leading-tight">{label}<br/><span className="text-[#00f2fe]">{sublabel}</span></span>
        </div>
      </div>
    </motion.div>
  );
}
