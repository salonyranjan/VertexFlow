import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [focused, setFocused] = useState(null);

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-black">
      {/* Background Ambient Neon Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            Establish <span className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">Contact</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 bg-emerald-900"></span>
            <p className="text-emerald-500/60 text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">
              // System Online: Ready for Transmission
            </p>
            <span className="h-[1px] w-8 bg-emerald-900"></span>
          </div>
        </motion.div>

        {/* The Cyber-Terminal Form */}
        <motion.form 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-10 md:p-16 rounded-[2rem] border border-emerald-500/10 bg-zinc-950/50 backdrop-blur-3xl shadow-[0_0_100px_-30px_rgba(16,185,129,0.1)] space-y-12"
        >
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Input Group: Name */}
            <div className="relative group">
              <label className={`block text-[10px] font-black uppercase tracking-[0.4em] mb-4 transition-all duration-500 ${focused === 'name' ? 'text-emerald-400 drop-shadow-[0_0_10px_#10b981]' : 'text-emerald-900'}`}>
                &lt;Name /&gt;
              </label>
              <input 
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                type="text" 
                placeholder="SALONY RANJAN"
                className="w-full bg-transparent border-b border-emerald-500/10 py-4 text-white placeholder:text-zinc-800 focus:outline-none transition-all duration-500 text-sm tracking-widest"
              />
              <div className={`absolute bottom-0 left-0 h-[1px] bg-emerald-500 shadow-[0_0_20px_#10b981] transition-all duration-700 ${focused === 'name' ? 'w-full' : 'w-0'}`} />
            </div>

            {/* Input Group: Email */}
            <div className="relative group">
              <label className={`block text-[10px] font-black uppercase tracking-[0.4em] mb-4 transition-all duration-500 ${focused === 'email' ? 'text-emerald-400 drop-shadow-[0_0_10px_#10b981]' : 'text-emerald-900'}`}>
                &lt;Email /&gt;
              </label>
              <input 
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                type="email" 
                placeholder="ENGINEER@VERTEXFLOW.DEV"
                className="w-full bg-transparent border-b border-emerald-500/10 py-4 text-white placeholder:text-zinc-800 focus:outline-none transition-all duration-500 text-sm tracking-widest"
              />
              <div className={`absolute bottom-0 left-0 h-[1px] bg-emerald-500 shadow-[0_0_20px_#10b981] transition-all duration-700 ${focused === 'email' ? 'w-full' : 'w-0'}`} />
            </div>
          </div>

          {/* Input Group: Payload */}
          <div className="relative group">
            <label className={`block text-[10px] font-black uppercase tracking-[0.4em] mb-4 transition-all duration-500 ${focused === 'message' ? 'text-emerald-400 drop-shadow-[0_0_10px_#10b981]' : 'text-emerald-900'}`}>
              &lt;Payload /&gt;
            </label>
            <textarea 
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused(null)}
              rows="4"
              placeholder="INITIALIZE MESSAGE BODY..."
              className="w-full bg-emerald-500/[0.02] border border-emerald-500/10 rounded-2xl p-8 text-white placeholder:text-zinc-800 focus:outline-none focus:border-emerald-500/40 transition-all duration-500 text-sm tracking-widest resize-none"
            />
          </div>

          {/* Execute Button with Neon Overdrive */}
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative group w-full py-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] transition-all duration-500 overflow-hidden flex items-center justify-center gap-6"
          >
            {/* Liquid Fill Effect */}
            <div className="absolute inset-0 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />
            
            <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.6em] text-emerald-500 group-hover:text-black transition-colors">
              Execute Post Data
            </span>
            
            <svg 
              className="relative z-10 w-5 h-5 text-emerald-500 group-hover:text-black transition-colors animate-bounce-x" 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>

            {/* Corner Geometric Lights */}
            <div className="absolute top-0 left-0 size-2 border-t-2 border-l-2 border-emerald-500/40 opacity-50" />
            <div className="absolute bottom-0 right-0 size-2 border-b-2 border-r-2 border-emerald-500/40 opacity-50" />
          </motion.button>

        </motion.form>

        {/* Status Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-[9px] font-black text-emerald-900 uppercase tracking-[0.4em]">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]"></div>
            Node: PATNA_S_01
          </div>
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981] animate-pulse"></div>
            Latency: 24MS
          </div>
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]"></div>
            Protocol: E2E_SECURE
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;