import { motion } from 'motion/react';
import { Users, XCircle, AlertCircle, BookOpen } from 'lucide-react';

const TRAININGS = [
  { theme: "Como aumentar sua conversão no Whatsapp", date: "12/02/2026" },
  { theme: "Estudo de Caso - AUTO X", date: "19/02/2026" },
  { theme: "Como gerir sua equipe comercial", date: "26/02/2026" },
  { theme: "Como utilizar inteligência artificial da forma certa...", date: "05/03/2026" },
  { theme: "Como fazer seu próprio Feirão e ter um pico...", date: "12/03/2026" },
  { theme: "Mentalidade de Vencedor", date: "19/03/2026" },
  { theme: "Alavancas do Crescimento: 30, 50, 80, carros/mês", date: "26/03/2026" },
  { theme: "Aumente a conversão de visitas > vendas: O Poder...", date: "02/04/2026" },
  { theme: "O Poder da Inteligência emocional...", date: "09/04/2026" },
  { theme: "Do caos à escala: o que separa quem vende...", date: "16/04/2026" },
];

const MEMBERS = [
  { name: "Cristiano Rocha", email: "crist1001@hotmail.com", status: "NUNCA ACESSOU", progress: 0 },
  { name: "Fernando Ramos", email: "fernandoramos832@gmail.com", status: "SEM AVANÇO", progress: 5 },
  { name: "Sarah Raquel", email: "sarahraquelolvr@gmail.com", status: "SEM AVANÇO", progress: 5 },
  { name: "Milenny Marina", email: "milennymarina2@gmail.com", status: "NUNCA ACESSOU", progress: 0 },
  { name: "Phelipe Fagundes", email: "phelipefagundes22@gmail.com", status: "NUNCA ACESSOU", progress: 0 },
  { name: "Jose Eduardo", email: "eduaddcamille11@gmail.com", status: "NUNCA ACESSOU", progress: 0 },
  { name: "Marcos Gonçalves", email: "marcos2808@gmail.com", status: "NUNCA ACESSOU", progress: 0 },
  { name: "Wilson Rodrigues", email: "wilsonrodriguesnunes0830@gmail.com", status: "NUNCA ACESSOU", progress: 0 },
  { name: "Alexandre", email: "alexandrevaz1996@gmail.com", status: "NUNCA ACESSOU", progress: 0 },
  { name: "Aderaldo Barbosa", email: "aderaldobarbosar15@gmail.com", status: "NUNCA ACESSOU", progress: 0 },
  { name: "Jhon Paulo", email: "jhonpaulooo80@gmail.com", status: "NUNCA ACESSOU", progress: 0 },
];

export default function Slide3() {
  return (
    <div className="flex-1 flex flex-col p-8 md:p-12 overflow-y-auto lg:overflow-hidden w-full h-full custom-scrollbar">
      <div className="flex items-center gap-4 mb-6 md:mb-8 shrink-0">
        <div className="w-12 h-12 rounded-lg bg-[#00f2fe]/10 flex items-center justify-center border border-[#00f2fe]/20 shrink-0">
          <Users className="text-[#00f2fe]" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-black tracking-tight text-white">TREINAMENTO COMERCIAL</h2>
          <p className="text-white/50 text-sm">Participação e Engajamento da Equipe</p>
        </div>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden">
        
        {/* Panel 1: Trainings */}
        <div className="bg-[#0f0f11] rounded-xl border border-white/5 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-white/5 bg-black/40">
            <h3 className="text-xs font-bold tracking-widest text-[#00f2fe]">TEMAS ABORDADOS & PARTICIPAÇÃO</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            <div className="space-y-2">
              {TRAININGS.map((t, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={i} 
                  className="flex items-center justify-between p-3 rounded bg-black/30 border border-white/5 group hover:border-red-500/30 transition-colors"
                >
                  <div className="flex flex-col">
                    <span className="text-sm text-white/80 font-medium group-hover:text-white line-clamp-1">{t.theme}</span>
                    <span className="text-[10px] text-white/40">{t.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-red-500 bg-red-500/10 px-2 py-1 rounded text-[10px] font-bold tracking-wider shrink-0">
                    <XCircle size={12} />
                    AUSENTE
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="p-4 bg-red-500/5 border-t border-red-500/10 flex items-start gap-3">
             <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={16} />
             <p className="text-xs text-red-200/70">Nenhum membro da equipe R15 participou dos treinamentos semanais ao vivo desde o início do projeto.</p>
          </div>
        </div>

        {/* Panel 2: Members Area */}
        <div className="bg-[#0f0f11] rounded-xl border border-white/5 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-white/5 bg-black/40">
            <h3 className="text-xs font-bold tracking-widest text-[#00f2fe]">AVANÇO NA ÁREA DE MEMBROS</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            <div className="space-y-4">
              {MEMBERS.map((m, i) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 + 0.2 }}
                  key={i} 
                  className="space-y-2"
                >
                  <div className="flex justify-between items-end">
                    <div>
                      <h4 className="text-sm font-semibold text-white/90">{m.name}</h4>
                      <p className="text-[10px] text-white/40">{m.email}</p>
                    </div>
                    <span className="text-xs font-bold text-white/30">{m.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-black rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${m.progress > 0 ? 'bg-yellow-500' : 'bg-red-500'}`} 
                      style={{ width: `${Math.max(m.progress, 2)}%` }}
                    />
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    {m.progress === 0 ? (
                      <span className="text-[9px] font-bold text-red-500/80 px-1.5 py-0.5 bg-red-500/10 rounded uppercase tracking-wider">{m.status}</span>
                    ) : (
                      <span className="text-[9px] font-bold text-yellow-500/80 px-1.5 py-0.5 bg-yellow-500/10 rounded uppercase tracking-wider">{m.status}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
