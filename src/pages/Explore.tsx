import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import {
  Search,
  Filter,
  MapPin,
  Star,
  Clock,
  DollarSign,
  Sun,
  Cloud,
  Snowflake,
  Umbrella,
  Grid3X3,
  List,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const allDestinations = [
  { id: 1, name: "Santorini", country: "Greece", region: "Europe", rating: 4.9, duration: "5-7 days", priceRange: "$1,500-2,500", weather: "Sunny", temp: "25°C", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&auto=format&fit=crop", description: "Stunning sunsets and white-washed buildings.", activities: ["Beach", "Culture", "Food"] },
  { id: 2, name: "Kyoto", country: "Japan", region: "Asia", rating: 4.8, duration: "4-6 days", priceRange: "$1,200-2,000", weather: "Cloudy", temp: "18°C", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop", description: "Ancient temples and beautiful gardens.", activities: ["Culture", "Nature", "Food"] },
  { id: 3, name: "Machu Picchu", country: "Peru", region: "South America", rating: 4.9, duration: "3-5 days", priceRange: "$800-1,500", weather: "Cloudy", temp: "15°C", image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&auto=format&fit=crop", description: "Ancient Incan citadel in the Andes.", activities: ["Adventure", "Culture", "Nature"] },
  { id: 4, name: "Maldives", country: "Maldives", region: "Asia", rating: 4.9, duration: "7-10 days", priceRange: "$2,500-5,000", weather: "Sunny", temp: "30°C", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&auto=format&fit=crop", description: "Crystal clear waters and overwater villas.", activities: ["Beach", "Relaxation", "Water Sports"] },
  { id: 5, name: "Banff", country: "Canada", region: "North America", rating: 4.7, duration: "5-7 days", priceRange: "$1,000-2,000", weather: "Snow", temp: "-5°C", image: "https://images.unsplash.com/photo-1502126829571-83573c996e28?w=600&auto=format&fit=crop", description: "Breathtaking mountain scenery.", activities: ["Adventure", "Nature", "Skiing"] },
  { id: 6, name: "Marrakech", country: "Morocco", region: "Africa", rating: 4.6, duration: "4-6 days", priceRange: "$600-1,200", weather: "Sunny", temp: "28°C", image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&auto=format&fit=crop", description: "Vibrant souks and stunning palaces.", activities: ["Culture", "Food", "Shopping"] },
  { id: 7, name: "Bali", country: "Indonesia", region: "Asia", rating: 4.8, duration: "7-10 days", priceRange: "$800-1,800", weather: "Sunny", temp: "29°C", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop", description: "Tropical paradise with temples and rice terraces.", activities: ["Beach", "Culture", "Relaxation"] },
  { id: 8, name: "Iceland", country: "Iceland", region: "Europe", rating: 4.8, duration: "5-8 days", priceRange: "$1,500-3,000", weather: "Rain", temp: "8°C", image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=600&auto=format&fit=crop", description: "Northern lights and dramatic landscapes.", activities: ["Adventure", "Nature", "Photography"] },
  { id: 9, name: "Dubai", country: "UAE", region: "Middle East", rating: 4.7, duration: "4-6 days", priceRange: "$1,200-2,500", weather: "Sunny", temp: "32°C", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop", description: "Futuristic architecture and luxury shopping.", activities: ["Shopping", "Luxury", "Adventure"] },
  { id: 10, name: "New Zealand", country: "New Zealand", region: "Oceania", rating: 4.9, duration: "10-14 days", priceRange: "$2,000-3,500", weather: "Cloudy", temp: "18°C", image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=600&auto=format&fit=crop", description: "Epic landscapes from mountains to beaches.", activities: ["Adventure", "Nature", "Film Locations"] },
  { id: 11, name: "Barcelona", country: "Spain", region: "Europe", rating: 4.7, duration: "4-6 days", priceRange: "$900-1,600", weather: "Sunny", temp: "22°C", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&auto=format&fit=crop", description: "Gaudí architecture and Mediterranean vibes.", activities: ["Culture", "Beach", "Food"] },
  { id: 12, name: "Rajasthan", country: "India", region: "Asia", rating: 4.6, duration: "7-10 days", priceRange: "$500-1,200", weather: "Sunny", temp: "30°C", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&auto=format&fit=crop", description: "Royal palaces and vibrant culture.", activities: ["Culture", "History", "Photography"] },
];

const weatherIcons: Record<string, React.ElementType> = {
  Sunny: Sun,
  Cloudy: Cloud,
  Snow: Snowflake,
  Rain: Umbrella,
};

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [regionFilter, setRegionFilter] = useState("all");
  const [activityFilter, setActivityFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredDestinations = allDestinations.filter((dest) => {
    const matchesSearch = 
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = regionFilter === "all" || dest.region === regionFilter;
    const matchesActivity = activityFilter === "all" || dest.activities.includes(activityFilter);
    return matchesSearch && matchesRegion && matchesActivity;
  });

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
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Explore <span className="gradient-text">Destinations</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Discover breathtaking places around the world. Filter by region, 
              activity, or search for your dream destination.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-4 mb-8"
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-muted/50 border-border"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-3">
                <Select value={regionFilter} onValueChange={setRegionFilter}>
                  <SelectTrigger className="w-40 bg-muted/50 border-border">
                    <SelectValue placeholder="Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="Europe">Europe</SelectItem>
                    <SelectItem value="Asia">Asia</SelectItem>
                    <SelectItem value="North America">North America</SelectItem>
                    <SelectItem value="South America">South America</SelectItem>
                    <SelectItem value="Africa">Africa</SelectItem>
                    <SelectItem value="Oceania">Oceania</SelectItem>
                    <SelectItem value="Middle East">Middle East</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={activityFilter} onValueChange={setActivityFilter}>
                  <SelectTrigger className="w-40 bg-muted/50 border-border">
                    <SelectValue placeholder="Activity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Activities</SelectItem>
                    <SelectItem value="Beach">Beach</SelectItem>
                    <SelectItem value="Adventure">Adventure</SelectItem>
                    <SelectItem value="Culture">Culture</SelectItem>
                    <SelectItem value="Nature">Nature</SelectItem>
                    <SelectItem value="Food">Food</SelectItem>
                    <SelectItem value="Relaxation">Relaxation</SelectItem>
                  </SelectContent>
                </Select>

                {/* View toggle */}
                <div className="flex items-center gap-1 p-1 rounded-lg bg-muted/50">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-sm text-muted-foreground"
          >
            Showing {filteredDestinations.length} destinations
          </motion.div>

          {/* Destinations Grid/List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={viewMode}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-4"
              }
            >
              {filteredDestinations.map((dest, index) => {
                const WeatherIcon = weatherIcons[dest.weather] || Sun;

                if (viewMode === "list") {
                  return (
                    <motion.div
                      key={dest.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 4 }}
                      className="glass-card flex items-center gap-4 p-4 cursor-pointer group"
                    >
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-24 h-24 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-display font-bold text-lg group-hover:gradient-text transition-all">
                          {dest.name}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                          <MapPin className="w-3.5 h-3.5" />
                          {dest.country}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-1">{dest.description}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="flex items-center gap-1">
                            <WeatherIcon className="w-4 h-4 text-gold" />
                            <span className="font-medium">{dest.temp}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{dest.weather}</span>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-gold fill-gold" />
                            <span className="font-medium">{dest.rating}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-gold">{dest.priceRange}</div>
                          <div className="text-xs text-muted-foreground">{dest.duration}</div>
                        </div>
                      </div>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={dest.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                    className="glass-card overflow-hidden cursor-pointer group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      
                      <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm">
                        <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                        <span className="text-sm font-semibold">{dest.rating}</span>
                      </div>

                      <div className="absolute top-3 left-3 weather-badge">
                        <WeatherIcon className="w-3.5 h-3.5" />
                        {dest.temp}
                      </div>
                      
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-sm">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="font-medium">{dest.country}</span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-xl font-display font-bold mb-2 group-hover:gradient-text transition-all">
                        {dest.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {dest.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {dest.activities.slice(0, 3).map((activity) => (
                          <span
                            key={activity}
                            className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{dest.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <DollarSign className="w-4 h-4 text-gold" />
                          <span className="font-semibold text-gold">{dest.priceRange}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filteredDestinations.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-xl font-display font-bold mb-2">No destinations found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters to find amazing places.
              </p>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Explore;
