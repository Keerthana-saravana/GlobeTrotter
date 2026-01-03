import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import {
  Plus,
  Calendar,
  MapPin,
  Clock,
  DollarSign,
  Plane,
  Train,
  Car,
  Sun,
  Cloud,
  ChevronRight,
  Eye,
  Edit,
  Trash2,
  Share2,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const mockTrips = [
  {
    id: "1",
    name: "Paris Adventure",
    destinations: ["Paris", "Versailles", "Lyon"],
    startDate: "2026-01-15",
    endDate: "2026-01-22",
    budget: 2500,
    spent: 800,
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop",
    transport: "flight",
    weather: { condition: "Cloudy", temp: "8°C" },
  },
  {
    id: "2",
    name: "Tokyo Explorer",
    destinations: ["Tokyo", "Kyoto", "Osaka"],
    startDate: "2026-02-05",
    endDate: "2026-02-15",
    budget: 4000,
    spent: 0,
    status: "planning",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&auto=format&fit=crop",
    transport: "flight",
    weather: { condition: "Sunny", temp: "12°C" },
  },
  {
    id: "3",
    name: "European Summer",
    destinations: ["Barcelona", "Rome", "Athens"],
    startDate: "2025-07-10",
    endDate: "2025-07-25",
    budget: 5000,
    spent: 4850,
    status: "completed",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&auto=format&fit=crop",
    transport: "train",
    weather: { condition: "Sunny", temp: "28°C" },
  },
];

const transportIcons = {
  flight: Plane,
  train: Train,
  car: Car,
};

const Trips = () => {
  const [activeTab, setActiveTab] = useState<"all" | "upcoming" | "planning" | "completed">("all");
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const filteredTrips = mockTrips.filter(
    (trip) => activeTab === "all" || trip.status === activeTab
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-turquoise/20 text-turquoise border-turquoise/30";
      case "planning":
        return "bg-purple/20 text-purple border-purple/30";
      case "completed":
        return "bg-gold/20 text-gold border-gold/30";
      default:
        return "bg-muted text-muted-foreground";
    }
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
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
                My <span className="gradient-text">Trips</span>
              </h1>
              <p className="text-muted-foreground">
                Manage your adventures and plan new journeys.
              </p>
            </div>

            <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
              <DialogTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-cosmic flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Create New Trip
                </motion.button>
              </DialogTrigger>
              <DialogContent className="glass-card border-border">
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl">Create New Trip</DialogTitle>
                  <DialogDescription>
                    Start planning your next adventure.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Trip Name</label>
                    <Input placeholder="e.g., Summer in Europe" className="bg-muted/50" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Start Date</label>
                      <Input type="date" className="bg-muted/50" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">End Date</label>
                      <Input type="date" className="bg-muted/50" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Budget</label>
                    <Input type="number" placeholder="Enter your budget" className="bg-muted/50" />
                  </div>
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => setIsCreateOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button className="flex-1 btn-cosmic border-0">
                      Create Trip
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex gap-2 mb-8 overflow-x-auto pb-2"
          >
            {[
              { key: "all", label: "All Trips" },
              { key: "upcoming", label: "Upcoming" },
              { key: "planning", label: "Planning" },
              { key: "completed", label: "Completed" },
            ].map((tab) => (
              <motion.button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-2 rounded-xl font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.key
                    ? "bg-gradient-cosmic text-white"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted"
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Trips Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredTrips.map((trip, index) => {
                const TransportIcon = transportIcons[trip.transport as keyof typeof transportIcons] || Plane;
                const budgetProgress = (trip.spent / trip.budget) * 100;

                return (
                  <motion.div
                    key={trip.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="glass-card overflow-hidden group"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={trip.image}
                        alt={trip.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />

                      {/* Status badge */}
                      <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(trip.status)}`}>
                        {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
                      </div>

                      {/* Transport */}
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                        <TransportIcon className="w-4 h-4 text-primary" />
                      </div>

                      {/* Weather */}
                      <div className="absolute bottom-3 right-3 weather-badge">
                        {trip.weather.condition === "Sunny" ? (
                          <Sun className="w-3.5 h-3.5" />
                        ) : (
                          <Cloud className="w-3.5 h-3.5" />
                        )}
                        {trip.weather.temp}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-xl font-display font-bold mb-2 group-hover:gradient-text transition-all">
                        {trip.name}
                      </h3>

                      {/* Destinations */}
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                        <MapPin className="w-4 h-4 text-primary" />
                        {trip.destinations.join(" → ")}
                      </div>

                      {/* Dates */}
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4" />
                        {new Date(trip.startDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}{" "}
                        -{" "}
                        {new Date(trip.endDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>

                      {/* Budget Progress */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Budget</span>
                          <span className="font-semibold">
                            ${trip.spent.toLocaleString()} / ${trip.budget.toLocaleString()}
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-cosmic rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min(budgetProgress, 100)}%` }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                          />
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        <Link to={`/itinerary/${trip.id}`} className="flex-1">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-2 rounded-xl bg-gradient-cosmic text-white font-medium flex items-center justify-center gap-2"
                          >
                            <Eye className="w-4 h-4" />
                            View Itinerary
                          </motion.button>
                        </Link>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
                        >
                          <Share2 className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Create New Trip Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: filteredTrips.length * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setIsCreateOpen(true)}
                className="glass-card min-h-[400px] flex flex-col items-center justify-center cursor-pointer group border-2 border-dashed border-border hover:border-primary/50 transition-colors"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-cosmic flex items-center justify-center mb-4"
                >
                  <Plus className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-display font-bold mb-2 group-hover:gradient-text transition-all">
                  Create New Trip
                </h3>
                <p className="text-sm text-muted-foreground text-center max-w-xs">
                  Start planning your next adventure with our smart trip planner.
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {filteredTrips.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">✈️</div>
              <h3 className="text-xl font-display font-bold mb-2">No trips found</h3>
              <p className="text-muted-foreground mb-6">
                Start planning your next adventure!
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsCreateOpen(true)}
                className="btn-cosmic"
              >
                Create Your First Trip
              </motion.button>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Trips;
