import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import DestinationCard from "./DestinationCard";

const destinations = [
  {
    name: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&auto=format&fit=crop",
    rating: 4.9,
    duration: "5-7 days",
    priceRange: "$1,500-2,500",
    description: "Stunning sunsets, white-washed buildings, and crystal-clear waters await you on this magical island.",
  },
  {
    name: "Kyoto",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop",
    rating: 4.8,
    duration: "4-6 days",
    priceRange: "$1,200-2,000",
    description: "Ancient temples, beautiful gardens, and traditional tea houses blend with modern city life.",
  },
  {
    name: "Machu Picchu",
    country: "Peru",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&auto=format&fit=crop",
    rating: 4.9,
    duration: "3-5 days",
    priceRange: "$800-1,500",
    description: "Explore the ancient Incan citadel set high in the Andes Mountains, a world wonder.",
  },
  {
    name: "Maldives",
    country: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop",
    rating: 4.9,
    duration: "7-10 days",
    priceRange: "$2,500-5,000",
    description: "Crystal clear waters, overwater villas, and pristine beaches for ultimate relaxation.",
  },
  {
    name: "Banff",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1502126829571-83573c996e28?w=800&auto=format&fit=crop",
    rating: 4.7,
    duration: "5-7 days",
    priceRange: "$1,000-2,000",
    description: "Breathtaking mountain scenery, turquoise lakes, and world-class outdoor adventures.",
  },
  {
    name: "Marrakech",
    country: "Morocco",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&auto=format&fit=crop",
    rating: 4.6,
    duration: "4-6 days",
    priceRange: "$600-1,200",
    description: "Vibrant souks, stunning palaces, and the magical atmosphere of the Red City.",
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Trending</span> Destinations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the most popular destinations loved by travelers worldwide. 
            From ancient wonders to tropical paradises.
          </p>
        </motion.div>

        {/* Destination grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.name}
              {...destination}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/explore">
            <motion.button
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-turquoise-glow transition-colors"
            >
              Explore All Destinations
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
