/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Mail, Instagram, Facebook, MessageCircle, Code, Server, Zap, Dot, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const copyEmail = () => {
    navigator.clipboard.writeText('bdwa94239@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleTheme = () => setIsDark(!isDark);

  const cardBase = `transition-all duration-500 rounded-[2rem] p-8 flex flex-col group border ${
    isDark 
      ? "bg-slate-900/40 backdrop-blur-xl border-blue-500/10 hover:border-blue-500/30 text-white" 
      : "bg-white/80 backdrop-blur-md border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl text-slate-800"
  }`;

  const textSecondary = isDark ? "text-slate-400" : "text-slate-600";
  const bgMain = isDark ? "bg-slate-950" : "bg-slate-50";

  return (
    <div className={`${bgMain} transition-colors duration-500 min-h-screen font-sans selection:bg-blue-500/30 p-6 md:p-12 lg:p-24 flex items-center justify-center relative overflow-hidden text-slate-100`}>
      
      {/* Background Decor */}
      <div className={`absolute top-0 left-0 w-full h-full pointer-events-none transition-opacity duration-1000 ${isDark ? 'opacity-20' : 'opacity-10'}`}>
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500 blur-[150px] rounded-full"></div>
      </div>

      {/* Theme Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className={`fixed top-8 right-8 z-50 p-4 rounded-2xl border backdrop-blur-xl transition-all shadow-lg ${
          isDark 
            ? "bg-slate-900/80 border-slate-800 text-yellow-400" 
            : "bg-white/80 border-slate-200 text-blue-600 shadow-blue-100"
        }`}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <Sun size={24} />
            </motion.div>
          ) : (
            <motion.div key="moon" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <Moon size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 max-w-7xl w-full h-auto md:h-[900px] relative z-10">
        
        {/* HERO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${cardBase} md:col-span-2 md:row-span-2 justify-center ${isDark ? 'bg-gradient-to-br from-slate-900/80 to-slate-800/40' : 'bg-gradient-to-br from-white to-blue-50/50'}`}
        >
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 w-fit border ${
            isDark ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-blue-100 text-blue-600 border-blue-200'
          }`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Projects
          </div>
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight ${isDark ? 'bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400' : 'text-slate-900'}`}>
            Abdulrazzaq <br /> Al-Ahmad
          </h1>
          <p className={`${textSecondary} text-lg md:text-xl leading-relaxed max-w-md`}>
            Software & IT Engineer bridging the gap between elegant design and robust technical infrastructure.
          </p>
        </motion.div>

        {/* SERVICES */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className={`${cardBase} md:col-span-2 md:row-span-1`}
        >
          <div className="flex justify-between items-start mb-4">
            <Code className="text-blue-500 w-8 h-8" />
            <ArrowUpRight className={`${isDark ? 'text-slate-600' : 'text-slate-300'} group-hover:text-blue-400 transition-colors`} />
          </div>
          <h3 className="text-xl font-bold mb-3">Core Services</h3>
          <motion.ul 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 }
              }
            }}
            className={`space-y-2 text-sm ${textSecondary}`}
          >
            {['Full-stack Dev', 'UI/UX Design', 'IT Infrastructure'].map(s => (
              <motion.li 
                key={s} 
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-default"
              >
                <Dot className="text-blue-500 w-4 h-4" /> {s}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>



        {/* SKILLS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`${cardBase} md:col-span-1 md:row-span-2`}
        >
          <div className="flex justify-between items-start mb-8">
            <Zap className="text-blue-500 w-8 h-8" />
            <span className={`text-[10px] font-mono p-1 border rounded ${isDark ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-400'}`}>EXPERTISE</span>
          </div>
          <h3 className="text-xl font-bold mb-6">Technologies</h3>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05 }
              }
            }}
            className="flex flex-wrap gap-2"
          >
            {[
              'React', 'Next.js', 'Node.js', 
              'Express', 'Tailwind', 'TypeScript', 
              'Firebase', 'PostgreSQL', 'Docker'
            ].map(tech => (
              <motion.span 
                key={tech} 
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ scale: 1.1, backgroundColor: isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)' }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-default ${
                  isDark ? 'bg-slate-800/30 border-white/5 text-white' : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
          <div className={`mt-auto pt-8 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
            <p className={`text-xs ${textSecondary} leading-tight`}>Constantly evolving with the latest stacks to deliver high-performance apps.</p>
          </div>
        </motion.div>

        {/* PORTFOLIO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`${cardBase} md:col-span-2 md:row-span-1 relative group overflow-hidden`}
        >
          <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full opacity-20 bg-blue-500`}></div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">Featured Projects</h3>
            <span className={`text-xs font-mono ${isDark ? 'text-blue-500/50' : 'text-blue-400'}`}>BUILDING...</span>
          </div>
          <div className={`flex-1 flex items-center justify-center border border-dashed rounded-2xl transition-colors ${
            isDark ? 'border-slate-800 bg-slate-900/20 group-hover:bg-slate-900/40' : 'border-slate-200 bg-slate-50 group-hover:bg-white'
          }`}>
            <p className={`${textSecondary} italic text-sm`}>Portfolio pipeline is currently being populated with innovative solutions.</p>
          </div>
        </motion.div>

        {/* CONTACT */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className={`${cardBase} md:col-span-1 md:row-span-2 justify-between`}
        >
          <div className="flex flex-col gap-3">
            {[
              { icon: Instagram, label: 'Instagram', link: 'https://www.instagram.com/a5w_5' },
              { icon: Facebook, label: 'Facebook', link: 'https://www.facebook.com/share/1Kay1ianCe/' }
            ].map((item, idx) => (
              <a key={idx} href={item.link} target="_blank" className={`flex items-center gap-3 text-sm transition-colors ${textSecondary} hover:text-blue-500`}>
                <item.icon size={18} /> {item.label}
              </a>
            ))}
            <button onClick={copyEmail} className={`flex items-center gap-3 text-sm transition-colors truncate ${textSecondary} hover:text-blue-500`}>
              <Mail size={18} /> {copied ? 'Copied Email!' : 'bdwa94239@gmail.com'}
            </button>
          </div>
          <a 
            href="https://wa.me/963936257805" 
            target="_blank" 
            className={`mt-6 flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-sm transition-all duration-300 border ${
              isDark 
                ? 'bg-green-500/10 hover:bg-green-500 text-green-500 hover:text-white border-green-500/20' 
                : 'bg-green-50 text-green-600 hover:bg-green-500 hover:text-white border-green-100'
            }`}
          >
            <MessageCircle size={18} /> WhatsApp
          </a>
        </motion.div>

      </div>
    </div>
  );
}




