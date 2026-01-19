import { motion } from "framer-motion";
import { Plane, Globe, Compass, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-12 overflow-hidden">
      {/* Floating travel icons */}
      <motion.div
        className="absolute top-32 left-[10%] text-gold opacity-60"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Plane className="w-8 h-8" />
      </motion.div>
      
      <motion.div
        className="absolute top-48 right-[15%] text-turquoise opacity-50"
        animate={{ y: [0, -20, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Globe className="w-12 h-12" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-[20%] text-purple opacity-50"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Compass className="w-10 h-10" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-8"
        >
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-sm font-medium text-gold">Your Ultimate Travel Companion</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6"
        >
          <span className="text-foreground">Explore the</span>
          <br />
          <span className="gradient-text text-glow-turquoise">World with</span>
          <br />
          <span className="gradient-text-gold text-glow-gold">GlobeTrotter</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Plan your perfect journey with AI-powered recommendations, real-time weather updates, 
          and seamless trip management across 100+ breathtaking destinations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/dashboard">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-cosmic flex items-center gap-2 text-lg px-8 py-4"
            >
              Start Exploring
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
          
          <Link to="/explore">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-golden flex items-center gap-2 text-lg px-8 py-4"
            >
              <Globe className="w-5 h-5" />
              View Destinations
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "100+", label: "Destinations" },
            { value: "50K+", label: "Happy Travelers" },
            { value: "4.9", label: "User Rating" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative globe illustration */}
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-10 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="90" fill="none" stroke="url(#grad1)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="url(#grad1)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="url(#grad1)" strokeWidth="0.5" />
          <ellipse cx="100" cy="100" rx="90" ry="30" fill="none" stroke="url(#grad1)" strokeWidth="0.5" />
          <ellipse cx="100" cy="100" rx="90" ry="30" fill="none" stroke="url(#grad1)" strokeWidth="0.5" transform="rotate(60 100 100)" />
          <ellipse cx="100" cy="100" rx="90" ry="30" fill="none" stroke="url(#grad1)" strokeWidth="0.5" transform="rotate(120 100 100)" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(191, 100%, 50%)" />
              <stop offset="100%" stopColor="hsl(273, 100%, 50%)" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
