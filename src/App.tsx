import { motion } from 'motion/react';
import { MapPin, Instagram, Facebook, Globe, Calendar, Clock, Music, Mic, Coffee, MonitorPlay } from 'lucide-react';

import bandaImg from './assets/banda.jpg';
import gabrielImg from './assets/gabriel.jpg';
import santiagoImg from './assets/santiago.jpg';
import digitalChileImg from './assets/digital_chile.jpeg';
import logoEventoImg from './assets/logo_evento.png';
import logoIglesiaImg from './assets/logo_iglesia.jpeg';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const timelineData = [
  {
    time: "19:00",
    title: "Apertura",
    icon: <Music className="w-5 h-5 text-cyan-glow" />,
    details: [
      { type: "band", name: "Banda \"Una Adoración\"", photo: bandaImg },
      { type: "speaker", name: "1er Mensaje: Gabriel Cabrera", photo: gabrielImg }
    ]
  },
  {
    time: "20:00",
    title: "Intermedio & 2do Mensaje",
    icon: <Coffee className="w-5 h-5 text-violet-glow" />,
    details: [
      { type: "break", name: "Coffee Break / Networking", photo: null },
      { type: "speaker", name: "Santiago Tejera", photo: santiagoImg }
    ]
  },
  {
    time: "21:00",
    title: "Especial",
    icon: <MonitorPlay className="w-5 h-5 text-cyan-glow" />,
    details: [
      { type: "event", name: "Presentación Digital Chile", photo: digitalChileImg }
    ]
  },
  {
    time: "21:30",
    title: "Cierre",
    icon: <Clock className="w-5 h-5 text-violet-glow" />,
    details: [
      { type: "event", name: "Despedida y cierre del evento", photo: null }
    ]
  }
];

export default function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden font-sans text-white/90">
      
      {/* Background Ambience Layers (Dynamic Waves) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
        {/* Base global glow */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-900/10 blur-[120px] rounded-full" />
        
        {/* Flowing Ribbon 1 (Back) */}
        <svg className="absolute top-1/2 left-0 w-full h-[600px] -translate-y-1/2 opacity-50" preserveAspectRatio="none" viewBox="0 0 1440 600" fill="none">
           <path d="M0,300 C300,100 600,500 1440,200 L1440,600 L0,600 Z" fill="url(#grad1)" filter="blur(40px)" />
           <defs>
             <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
               <stop offset="0%" stopColor="#4c1d95" stopOpacity="0" />
               <stop offset="50%" stopColor="#7e22ce" stopOpacity="0.4" />
               <stop offset="100%" stopColor="#4c1d95" stopOpacity="0" />
             </linearGradient>
           </defs>
        </svg>

        {/* Flowing Ribbon 2 (Bright, Front) */}
        <svg className="absolute top-1/2 left-0 w-full h-[400px] -translate-y-[30%] opacity-70 mix-blend-screen" preserveAspectRatio="none" viewBox="0 0 1440 400" fill="none">
           <path d="M0,200 C400,400 800,0 1440,250 L1440,400 L0,400 Z" fill="none" stroke="url(#grad2)" strokeWidth="4" filter="blur(4px)" />
           <path d="M0,200 C400,400 800,0 1440,250" fill="none" stroke="url(#grad3)" strokeWidth="1" filter="blur(1px)" />
           <defs>
             <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="0">
               <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
               <stop offset="30%" stopColor="#d946ef" stopOpacity="0.8" />
               <stop offset="70%" stopColor="#a855f7" stopOpacity="0.8" />
               <stop offset="100%" stopColor="#3b0764" stopOpacity="0" />
             </linearGradient>
             <linearGradient id="grad3" x1="0" y1="0" x2="1" y2="0">
               <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
               <stop offset="30%" stopColor="#fdf4ff" stopOpacity="0.8" />
               <stop offset="70%" stopColor="#f0abfc" stopOpacity="0.8" />
               <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
             </linearGradient>
           </defs>
        </svg>

        {/* Hot spots / Flares */}
        <div className="absolute top-[60%] left-[20%] w-[10px] h-[10px] bg-white rounded-full shadow-[0_0_30px_10px_#d946ef] opacity-70" />
        <div className="absolute top-[45%] left-[65%] w-[8px] h-[8px] bg-white rounded-full shadow-[0_0_40px_15px_#a855f7] opacity-80" />
        <div className="absolute top-[50%] left-[85%] w-[6px] h-[6px] bg-cyan-100 rounded-full shadow-[0_0_30px_10px_#22d3ee] opacity-60" />

        {/* Floating Bokeh / Bubbles */}
        <div className="absolute top-[70%] left-[15%] w-24 h-24 rounded-full bg-fuchsia-600/5 border border-fuchsia-400/10 blur-[2px]" />
        <div className="absolute top-[55%] left-[35%] w-32 h-32 rounded-full bg-purple-600/5 border border-purple-400/10 blur-[4px]" />
        <div className="absolute top-[65%] left-[75%] w-16 h-16 rounded-full bg-fuchsia-500/5 border border-fuchsia-300/10 blur-[1px]" />
        <div className="absolute top-[75%] left-[55%] w-40 h-40 rounded-full bg-violet-600/5 border border-violet-400/10 blur-[6px]" />
        <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-cyan-500/5 border border-cyan-300/10 blur-[3px]" />
        
        <div className="absolute inset-0 bg-molecular opacity-5 mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-32">
        
        {/* HERO SECTION */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col items-center text-center space-y-8 relative z-10 pt-8"
        >
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-3 px-5 py-2 rounded-full border border-purple-500/30 bg-purple-900/20 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs md:text-sm font-medium tracking-[0.2em] text-white/90 uppercase font-display">
              Evento Especial
            </span>
          </motion.div>

          {/* Main Logo Image */}
          <div className="relative w-full max-w-3xl px-4 md:px-0 mx-auto">
             <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-600/10 to-transparent blur-3xl rounded-full scale-110 pointer-events-none" />
             <img 
               src={logoEventoImg} 
               alt="DOPAMINA Logo Central" 
               className="relative w-full h-auto drop-shadow-[0_0_40px_rgba(139,92,246,0.4)] mix-blend-screen scale-110 md:scale-100"
               style={{ WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 80%)' }}
             />
          </div>

          <div className="space-y-4 max-w-2xl mx-auto px-4 z-10 pt-4 md:pt-0">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-light tracking-wide text-white/90 drop-shadow-lg leading-snug">
              Deja de vivir por el próximo clic: <br className="hidden md:block" />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(217,70,239,0.3)]">
                Ven por el "high" que no se apaga.
              </span>
            </h1>
          </div>
        </motion.section>

        {/* CONCEPT SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative px-8 py-16 rounded-3xl border border-purple-500/20 overflow-hidden text-center backdrop-blur-xl bg-purple-900/10 shadow-[0_0_40px_rgba(139,92,246,0.1)]"
        >
          <div className="absolute -left-10 -top-10 text-purple-500/10">
             {/* Decorative abstract shape */}
             <svg width="200" height="200" viewBox="0 0 200 200" fill="currentColor"><circle cx="100" cy="100" r="100" strokeWidth="2" fill="none" stroke="currentColor" strokeDasharray="10 10"/></svg>
          </div>
          <div className="absolute -right-10 -bottom-10 text-cyan-500/10">
             <svg width="150" height="150" viewBox="0 0 200 200" fill="currentColor"><polygon points="100,0 200,200 0,200" strokeWidth="2" fill="none" stroke="currentColor" strokeDasharray="10 10"/></svg>
          </div>
          
          <h2 className="relative z-10 font-display text-2xl md:text-3xl font-medium leading-relaxed max-w-3xl mx-auto">
            "En un mundo de picos vacíos, Dios ofrece una Dopamina real. No más vacío, solo <span className="text-fuchsia-400 font-semibold drop-shadow-[0_0_10px_rgba(232,121,249,0.5)]">motivación duradera</span> que surge del esfuerzo y el propósito".
          </h2>
        </motion.section>

        {/* TIMELINE SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Cronograma</h2>
            <div className="w-16 h-1 mt-4 mx-auto bg-gradient-to-r from-violet-glow to-cyan-glow rounded-full" />
          </div>

          <div className="relative border-l border-white/20 ml-4 md:ml-[50%]">
            {timelineData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative pl-8 md:pl-0 mb-12 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:left-[-100%]' : 'md:pl-12 md:left-0'} w-full md:w-[100%]`}
              >
                {/* Timeline Dot */}
                <div className={`absolute top-0 left-[-5px] md:left-auto md:right-[-5px] w-3 h-3 rounded-full bg-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.8)] ${index % 2 === 0 ? 'md:left-auto md:right-[-6.5px]' : 'md:left-[-6.5px]'}`} />

                {/* Card */}
                <div className="group bg-purple-900/10 border border-purple-500/20 rounded-2xl p-6 backdrop-blur-md hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-1">
                  <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <div className="p-2 rounded-lg bg-white/10">
                      {item.icon}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">{item.time} - {item.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        {detail.photo && (
                          <img src={detail.photo} alt={detail.name} className="w-12 h-12 rounded-full object-cover border border-white/20" referrerPolicy="no-referrer" />
                        )}
                        <p className="text-white/80 font-medium">{detail.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* LOCATION & SOCIALS SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Map & Address */}
          <div className="space-y-6">
             <div className="flex items-center gap-4">
                <div className="p-3 bg-fuchsia-900/40 rounded-xl text-fuchsia-400 border border-fuchsia-500/30">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">Ubicación</h3>
                  <p className="text-white/70">Av. Gral Rivera 3167, Montevideo</p>
                </div>
             </div>
             
             <div className="rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d421.0033451795347!2d-56.14747945851917!3d-34.902797163462424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f811219b2a3ad%3A0x8a0e18306da320d5!2sVida%20Abundante%20Uruguay!5e0!3m2!1sen!2suy!4v1776723826381!5m2!1sen!2suy" 
                 width="100%" 
                 height="300" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Mapa de ubicación"
               />
             </div>
          </div>

          {/* Connect */}
          <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-display text-4xl font-bold">Conecta</h3>
            <p className="text-white/70 text-lg">
              Sigue el evento y entérate de todas las novedades en nuestras redes oficiales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a href="#" className="flex-1 flex flex-col items-center justify-center p-6 bg-purple-900/10 rounded-2xl border border-purple-500/20 hover:border-fuchsia-400 hover:shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all duration-300 group">
                <Instagram className="w-8 h-8 mb-3 text-white/70 group-hover:text-fuchsia-400 transition-colors drop-shadow-md" />
                <span className="text-sm font-medium">@vida_abundante_uruguay</span>
              </a>
              
              <a href="#" className="flex-1 flex flex-col items-center justify-center p-6 bg-purple-900/10 rounded-2xl border border-purple-500/20 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 group">
                <Facebook className="w-8 h-8 mb-3 text-white/70 group-hover:text-cyan-400 transition-colors drop-shadow-md" />
                <span className="text-sm font-medium">VidaUruguay</span>
              </a>
            </div>

            <a href="https://vidauruguay.com" target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-3 p-4 bg-purple-900/10 rounded-xl border border-purple-500/20 hover:bg-purple-900/30 transition-all duration-300">
               <Globe className="w-5 h-5 text-white/70" />
               <span className="font-semibold tracking-wide">vidauruguay.com</span>
            </a>
          </div>
        </motion.section>
        
        {/* FOOTER */}
        <footer className="pt-12 border-t border-purple-500/20 text-center text-white/40 text-sm flex flex-col items-center justify-center space-y-6">
          <div className="bg-white p-4 rounded-xl inline-block shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <img src={logoIglesiaImg} alt="Vida Abundante Uruguay" className="h-16 w-auto object-contain" />
          </div>
          <p>© {new Date().getFullYear()} DOPAMINA. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
}
