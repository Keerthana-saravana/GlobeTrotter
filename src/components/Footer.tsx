import { motion } from "framer-motion";
import { Plane, Globe, Heart, Instagram, Twitter, Facebook, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    explore: [
      { label: "Destinations", to: "/explore" },
      { label: "Trending", to: "/explore" },
      { label: "Travel Guides", to: "/explore" },
      { label: "Adventures", to: "/explore" },
    ],
    company: [
      { label: "About Us", to: "/" },
      { label: "Careers", to: "/" },
      { label: "Press", to: "/" },
      { label: "Contact", to: "/" },
    ],
    support: [
      { label: "Help Center", to: "/" },
      { label: "Safety", to: "/" },
      { label: "Community", to: "/" },
      { label: "Accessibility", to: "/" },
    ],
  };

  return (
    <footer className="relative pt-24 pb-8 px-4 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-cosmic" />

      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card-strong p-8 md:p-12 rounded-3xl text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready for Your Next{" "}
            <span className="gradient-text">Adventure</span>?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of travelers who plan smarter and explore more with GlobeTrotter.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/dashboard">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-cosmic px-8 py-4"
              >
                Start Planning Free
              </motion.button>
            </Link>
            <Link to="/explore">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl border border-border hover:bg-muted transition-colors font-semibold"
              >
                Browse Destinations
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-cosmic flex items-center justify-center">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-display font-bold gradient-text">
                GlobeTrotter
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Your ultimate travel companion. Plan, explore, and experience 
              the world like never before.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Twitter, Facebook, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Icon className="w-4 h-4 text-muted-foreground" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold mb-4 capitalize">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2026 GlobeTrotter. Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>for travelers worldwide.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-foreground transition-colors">Terms</Link>
            <Link to="/" className="hover:text-foreground transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
