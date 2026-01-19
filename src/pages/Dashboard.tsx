import { useState } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import { 
  Plane, 
  Globe, 
  MapPin, 
  Cloud, 
  Sun, 
  TrendingUp,
  Calendar,
  Plus,
  ArrowRight,
  Thermometer,
  Droplets,
  Wind
} from "lucide-react";
import { Link } from "react-router-dom";

const upcomingTrips = [
  {
    id: 1,
    destination: "Paris, France",
    dates: "Jan 15 - Jan 22, 2026",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&auto=format&fit=crop",
    weather: { temp: "8°C", condition: "Cloudy" },
    daysUntil: 12,
  },
  {
    id: 2,
    destination: "Tokyo, Japan",
    dates: "Feb 5 - Feb 15, 2026",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&auto=format&fit=crop",
    weather: { temp: "12°C", condition: "Sunny" },
    daysUntil: 33,
  },
];

const trendingDestinations = [
  { name: "Bali", country: "Indonesia", trend: "+25%", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=300&auto=format&fit=crop" },
  { name: "Dubai", country: "UAE", trend: "+18%", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&auto=format&fit=crop" },
  { name: "Iceland", country: "Nordic", trend: "+32%", image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=300&auto=format&fit=crop" },
  { name: "Vietnam", country: "Asia", trend: "+22%", image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=300&auto=format&fit=crop" },
];

const weatherData = [
  { city: "New York", temp: 5, condition: "Snow", humidity: 78, wind: 15 },
  { city: "London", temp: 8, condition: "Rain", humidity: 85, wind: 12 },
  { city: "Sydney", temp: 28, condition: "Sunny", humidity: 45, wind: 8 },
  { city: "Tokyo", temp: 12, condition: "Cloudy", humidity: 62, wind: 10 },
];

const Dashboard = () => {
  const stats = [
    { icon: Plane, value: "12", label: "Trips Planned", color: "from-turquoise to-turquoise-glow" },
    { icon: Globe, value: "25", label: "Countries", color: "from-purple to-purple-glow" },
    { icon: MapPin, value: "45K", label: "Miles Traveled", color: "from-gold to-gold-glow" },
  ];

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      
      <main className="relative z-10 pt-28 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Welcome header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
              Welcome back, <span className="gradient-text">John</span> 👋
            </h1>
            <p className="text-muted-foreground">
              Ready for your next adventure? Let's plan something amazing.
            </p>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="stat-card"
                >
                  <div className={`w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-display font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Upcoming Trips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-display font-bold flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Upcoming Trips
                  </h2>
                  <Link to="/trips">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="text-sm text-primary flex items-center gap-1"
                    >
                      View All <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>

                {upcomingTrips.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingTrips.map((trip, index) => (
                      <motion.div
                        key={trip.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group"
                      >
                        <img
                          src={trip.image}
                          alt={trip.destination}
                          className="w-16 h-16 rounded-xl object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold group-hover:gradient-text transition-all">
                            {trip.destination}
                          </h3>
                          <p className="text-sm text-muted-foreground">{trip.dates}</p>
                        </div>
                        <div className="text-right">
                          <div className="weather-badge mb-1">
                            <Sun className="w-3.5 h-3.5" />
                            {trip.weather.temp}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            In {trip.daysUntil} days
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">No upcoming trips planned</p>
                    <Link to="/trips">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="btn-cosmic"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Plan Your First Trip
                      </motion.button>
                    </Link>
                  </div>
                )}

                <Link to="/trips">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full mt-4 py-3 rounded-xl border-2 border-dashed border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus className="w-5 h-5" />
                    Add New Trip
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Weather Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="glass-card p-6">
                <h2 className="text-xl font-display font-bold flex items-center gap-2 mb-6">
                  <Cloud className="w-5 h-5 text-primary" />
                  Weather Updates
                </h2>
                <div className="space-y-3">
                  {weatherData.map((weather, index) => (
                    <motion.div
                      key={weather.city}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div>
                        <div className="font-medium">{weather.city}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-2">
                          <span className="flex items-center gap-1">
                            <Droplets className="w-3 h-3" />
                            {weather.humidity}%
                          </span>
                          <span className="flex items-center gap-1">
                            <Wind className="w-3 h-3" />
                            {weather.wind}km/h
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 font-semibold">
                          <Thermometer className="w-4 h-4 text-gold" />
                          {weather.temp}°C
                        </div>
                        <div className="text-xs text-muted-foreground">{weather.condition}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Trending Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-display font-bold flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-gold" />
                  Trending Now
                </h2>
                <Link to="/explore">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="text-sm text-primary flex items-center gap-1"
                  >
                    Explore All <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {trendingDestinations.map((dest, index) => (
                  <motion.div
                    key={dest.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="relative overflow-hidden rounded-xl cursor-pointer group"
                  >
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <div className="font-semibold group-hover:gradient-text transition-all">
                        {dest.name}
                      </div>
                      <div className="text-xs text-muted-foreground">{dest.country}</div>
                    </div>
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs font-semibold">
                      {dest.trend}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
