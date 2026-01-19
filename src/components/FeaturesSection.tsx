import { motion } from "framer-motion";
import { 
  Map, 
  Cloud, 
  Utensils, 
  Hotel, 
  Train, 
  Shield,
  Sparkles,
  Calculator
} from "lucide-react";

const features = [
  {
    icon: Map,
    title: "Smart Trip Planning",
    description: "AI-powered itinerary builder with drag-and-drop functionality and multi-city stops.",
    gradient: "from-turquoise to-turquoise-glow",
  },
  {
    icon: Cloud,
    title: "Weather Forecasts",
    description: "Real-time weather updates and 7-day forecasts for every destination.",
    gradient: "from-purple to-purple-glow",
  },
  {
    icon: Utensils,
    title: "Food & Dining",
    description: "Discover local cuisine, street food gems, and fine dining options.",
    gradient: "from-gold to-gold-glow",
  },
  {
    icon: Hotel,
    title: "Hotel Suggestions",
    description: "From budget-friendly to luxury stays, find the perfect accommodation.",
    gradient: "from-turquoise to-purple",
  },
  {
    icon: Train,
    title: "Transport Options",
    description: "Compare trains, flights, and car rentals with real-time pricing.",
    gradient: "from-purple to-gold",
  },
  {
    icon: Calculator,
    title: "Budget Tracking",
    description: "Real-time expense tracking and cost breakdowns for your entire trip.",
    gradient: "from-gold to-turquoise",
  },
  {
    icon: Shield,
    title: "Travel Safety",
    description: "Local customs, safety tips, and essential travel advisories.",
    gradient: "from-turquoise to-purple-glow",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description: "Personalized suggestions based on your preferences and travel style.",
    gradient: "from-gold to-purple",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-cosmic-radial opacity-5 blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Everything You Need to{" "}
            <span className="gradient-text-gold">Travel Smart</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make your travel planning effortless 
            and your adventures unforgettable.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 group cursor-pointer"
              >
                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg`}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-display font-bold mb-2 group-hover:gradient-text transition-all">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <motion.div
                  className="h-0.5 bg-gradient-cosmic mt-4 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
