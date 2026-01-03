import { motion } from "framer-motion";
import { MapPin, Star, Clock, DollarSign } from "lucide-react";

interface DestinationCardProps {
  name: string;
  country: string;
  image: string;
  rating: number;
  duration: string;
  priceRange: string;
  description: string;
  delay?: number;
}

const DestinationCard = ({
  name,
  country,
  image,
  rating,
  duration,
  priceRange,
  description,
  delay = 0,
}: DestinationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group glass-card overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        
        {/* Rating badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm">
          <Star className="w-3.5 h-3.5 text-gold fill-gold" />
          <span className="text-sm font-semibold">{rating}</span>
        </div>
        
        {/* Location */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-sm">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="font-medium">{country}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-display font-bold mb-2 group-hover:gradient-text transition-all">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Meta info */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <DollarSign className="w-4 h-4 text-gold" />
            <span className="font-semibold text-gold">{priceRange}</span>
          </div>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-turquoise/10 via-transparent to-purple/10" />
      </div>
    </motion.div>
  );
};

export default DestinationCard;
