import { useState } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Clock,
  Sun,
  Cloud,
  Thermometer,
  Droplets,
  Wind,
  Utensils,
  Hotel,
  Camera,
  Coffee,
  Plane,
  ChevronLeft,
  Share2,
  Download,
  DollarSign,
  CalendarDays,
  Globe,
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const itineraryData = {
  id: "1",
  name: "Paris Adventure",
  destinations: ["Paris", "Versailles", "Lyon"],
  startDate: "2026-01-15",
  endDate: "2026-01-22",
  budget: { total: 2500, accommodation: 800, food: 400, activities: 600, transport: 500, misc: 200 },
  days: [
    {
      day: 1,
      date: "2026-01-15",
      title: "Arrival in Paris",
      weather: { condition: "Cloudy", temp: 8, humidity: 75, wind: 12 },
      activities: [
        { time: "14:00", type: "transport", title: "Arrive at CDG Airport", description: "Flight lands at Charles de Gaulle Airport", icon: Plane },
        { time: "16:00", type: "hotel", title: "Check-in at Hotel Le Marais", description: "Boutique hotel in the heart of Le Marais district", icon: Hotel },
        { time: "18:00", type: "food", title: "Welcome Dinner", description: "Traditional French cuisine at Café de Flore", icon: Utensils },
        { time: "20:00", type: "activity", title: "Evening Walk", description: "Stroll along the Seine River at sunset", icon: Camera },
      ],
    },
    {
      day: 2,
      date: "2026-01-16",
      title: "Iconic Landmarks",
      weather: { condition: "Sunny", temp: 10, humidity: 65, wind: 8 },
      activities: [
        { time: "08:00", type: "food", title: "French Breakfast", description: "Croissants and café au lait at local bakery", icon: Coffee },
        { time: "10:00", type: "activity", title: "Eiffel Tower Visit", description: "Skip-the-line tickets to the summit", icon: Camera },
        { time: "13:00", type: "food", title: "Lunch at Trocadéro", description: "Scenic views while dining", icon: Utensils },
        { time: "15:00", type: "activity", title: "Louvre Museum", description: "Explore the world's largest art museum", icon: Camera },
        { time: "19:00", type: "food", title: "Dinner in Montmartre", description: "Experience the artistic neighborhood", icon: Utensils },
      ],
    },
    {
      day: 3,
      date: "2026-01-17",
      title: "Day Trip to Versailles",
      weather: { condition: "Cloudy", temp: 7, humidity: 80, wind: 15 },
      activities: [
        { time: "09:00", type: "transport", title: "Train to Versailles", description: "RER C line to Versailles Château", icon: Plane },
        { time: "10:00", type: "activity", title: "Palace of Versailles", description: "Tour the opulent royal residence", icon: Camera },
        { time: "13:00", type: "food", title: "Lunch in Town", description: "Local French restaurant near the palace", icon: Utensils },
        { time: "14:30", type: "activity", title: "Palace Gardens", description: "Explore the magnificent gardens", icon: Camera },
        { time: "18:00", type: "transport", title: "Return to Paris", description: "Evening train back to the city", icon: Plane },
      ],
    },
    {
      day: 4,
      date: "2026-01-18",
      title: "Local Exploration",
      weather: { condition: "Sunny", temp: 11, humidity: 60, wind: 6 },
      activities: [
        { time: "09:00", type: "activity", title: "Notre-Dame Cathedral", description: "View the cathedral's ongoing restoration", icon: Camera },
        { time: "11:00", type: "activity", title: "Latin Quarter Walk", description: "Explore bookshops and cafés", icon: Camera },
        { time: "13:00", type: "food", title: "Street Food Tour", description: "Sample Parisian street food", icon: Utensils },
        { time: "16:00", type: "activity", title: "Musée d'Orsay", description: "Impressionist masterpieces", icon: Camera },
        { time: "20:00", type: "food", title: "Farewell Dinner", description: "Michelin-starred dining experience", icon: Utensils },
      ],
    },
  ],
  similarCities: [
    { name: "Rome", country: "Italy", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=200&auto=format&fit=crop" },
    { name: "Amsterdam", country: "Netherlands", image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=200&auto=format&fit=crop" },
    { name: "Barcelona", country: "Spain", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=200&auto=format&fit=crop" },
  ],
};

const Itinerary = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("timeline");

  const getActivityColor = (type: string) => {
    switch (type) {
      case "transport":
        return "from-turquoise to-turquoise-glow";
      case "hotel":
        return "from-purple to-purple-glow";
      case "food":
        return "from-gold to-gold-glow";
      case "activity":
        return "from-turquoise to-purple";
      default:
        return "from-muted to-muted";
    }
  };

  const getWeatherIcon = (condition: string) => {
    return condition === "Sunny" ? Sun : Cloud;
  };

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />

      <main className="relative z-10 pt-28 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              to="/trips"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Trips
            </Link>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
                  {itineraryData.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-primary" />
                    {itineraryData.destinations.join(" → ")}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(itineraryData.startDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    -{" "}
                    {new Date(itineraryData.endDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Export
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-cosmic flex items-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  Share Trip
                </motion.button>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="glass-card p-1 mb-6 w-full justify-start">
                  <TabsTrigger value="timeline" className="flex-1">Timeline</TabsTrigger>
                  <TabsTrigger value="calendar" className="flex-1">Calendar</TabsTrigger>
                  <TabsTrigger value="map" className="flex-1">Map</TabsTrigger>
                </TabsList>

                <TabsContent value="timeline" className="space-y-6">
                  {itineraryData.days.map((day, dayIndex) => {
                    const WeatherIcon = getWeatherIcon(day.weather.condition);
                    return (
                      <motion.div
                        key={day.day}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: dayIndex * 0.1 }}
                        className="glass-card p-6"
                      >
                        {/* Day Header */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-border">
                          <div>
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-xl bg-gradient-cosmic flex items-center justify-center font-display font-bold text-white">
                                {day.day}
                              </div>
                              <div>
                                <h3 className="text-xl font-display font-bold">{day.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                  {new Date(day.date).toLocaleDateString("en-US", {
                                    weekday: "long",
                                    month: "long",
                                    day: "numeric",
                                  })}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Weather Card */}
                          <div className="flex items-center gap-4 px-4 py-2 rounded-xl bg-muted/50">
                            <WeatherIcon className="w-8 h-8 text-gold" />
                            <div>
                              <div className="font-semibold">{day.weather.temp}°C</div>
                              <div className="text-xs text-muted-foreground">{day.weather.condition}</div>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Droplets className="w-3 h-3" />
                                {day.weather.humidity}%
                              </span>
                              <span className="flex items-center gap-1">
                                <Wind className="w-3 h-3" />
                                {day.weather.wind}km/h
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Timeline */}
                        <div className="relative pl-12">
                          <div className="timeline-line" />

                          {day.activities.map((activity, actIndex) => {
                            const Icon = activity.icon;
                            return (
                              <motion.div
                                key={actIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: dayIndex * 0.1 + actIndex * 0.05 }}
                                className="relative mb-6 last:mb-0"
                              >
                                <div className="timeline-dot" />

                                <div className="ml-6 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                                  <div className="flex items-start gap-4">
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${getActivityColor(activity.type)} flex items-center justify-center shrink-0`}>
                                      <Icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 mb-1">
                                        <span className="text-sm text-muted-foreground font-mono">
                                          {activity.time}
                                        </span>
                                        <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary capitalize">
                                          {activity.type}
                                        </span>
                                      </div>
                                      <h4 className="font-semibold mb-1">{activity.title}</h4>
                                      <p className="text-sm text-muted-foreground">
                                        {activity.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    );
                  })}
                </TabsContent>

                <TabsContent value="calendar">
                  <div className="glass-card p-6 text-center">
                    <CalendarDays className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-xl font-display font-bold mb-2">Calendar View</h3>
                    <p className="text-muted-foreground">
                      Calendar view coming soon! See your activities in a monthly calendar format.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="map">
                  <div className="glass-card p-6 text-center">
                    <Globe className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-xl font-display font-bold mb-2">Map View</h3>
                    <p className="text-muted-foreground">
                      Interactive map coming soon! Visualize your route and stops.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Budget Overview */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-display font-bold flex items-center gap-2 mb-4">
                  <DollarSign className="w-5 h-5 text-gold" />
                  Budget Plan
                </h3>

                <div className="space-y-3">
                  {Object.entries(itineraryData.budget).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <span className="capitalize text-sm text-muted-foreground">{key}</span>
                      <span className="font-semibold">${value.toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="text-xl font-bold gradient-text-gold">
                      ${itineraryData.budget.total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Similar Cities */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-display font-bold flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-primary" />
                  Similar Cities
                </h3>

                <div className="space-y-3">
                  {itineraryData.similarCities.map((city) => (
                    <motion.div
                      key={city.name}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted/50 cursor-pointer transition-colors"
                    >
                      <img
                        src={city.image}
                        alt={city.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <div className="font-medium">{city.name}</div>
                        <div className="text-xs text-muted-foreground">{city.country}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-display font-bold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  {[
                    { label: "View Budget Plan", icon: DollarSign },
                    { label: "Calendar View", icon: CalendarDays },
                    { label: "Share Itinerary", icon: Share2 },
                  ].map((link) => {
                    const Icon = link.icon;
                    return (
                      <motion.button
                        key={link.label}
                        whileHover={{ x: 4 }}
                        className="w-full flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors text-left"
                      >
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-sm">{link.label}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Itinerary;
