import { useState } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import {
  User,
  Mail,
  Phone,
  Globe,
  Plane,
  MapPin,
  Camera,
  Save,
  Lock,
  Download,
  Trash2,
  Bell,
  Eye,
  Mountain,
  Utensils,
  Palmtree,
  Compass,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Passionate traveler who loves exploring new cultures, trying local cuisines, and capturing beautiful moments. Always planning my next adventure! 🌍✈️",
    location: "New York, USA",
    website: "johntravels.com",
  });

  const [preferences, setPreferences] = useState({
    adventure: true,
    culture: true,
    food: true,
    relaxation: false,
  });

  const [privacy, setPrivacy] = useState({
    showTrips: true,
    notifications: true,
    marketing: false,
  });

  const stats = [
    { icon: Plane, value: "12", label: "Trips", color: "from-purple to-purple-glow" },
    { icon: Globe, value: "25", label: "Countries", color: "from-turquoise to-turquoise-glow" },
    { icon: MapPin, value: "45K", label: "Miles", color: "from-gold to-gold-glow" },
  ];

  const preferenceIcons = {
    adventure: Mountain,
    culture: Compass,
    food: Utensils,
    relaxation: Palmtree,
  };

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />

      <main className="relative z-10 pt-28 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              My <span className="gradient-text">Profile</span>
            </h1>
            <p className="text-muted-foreground">
              Manage your account settings and travel preferences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1"
            >
              <div className="glass-card-strong p-6 text-center">
                {/* Avatar */}
                <div className="relative inline-block mb-4">
                  <Avatar className="w-32 h-32 border-4 border-primary/30">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-gradient-cosmic text-white text-3xl font-display">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-gradient-cosmic flex items-center justify-center shadow-lg"
                  >
                    <Camera className="w-5 h-5 text-white" />
                  </motion.button>
                </div>

                <h2 className="text-2xl font-display font-bold mb-1">
                  {profile.firstName} {profile.lastName}
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  {profile.location}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={stat.label}
                        whileHover={{ scale: 1.05 }}
                        className="text-center"
                      >
                        <div className={`w-10 h-10 mx-auto rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-2`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-xl font-bold">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Main Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Personal Info */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-display font-bold flex items-center gap-2 mb-6">
                  <User className="w-5 h-5 text-primary" />
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input
                      value={profile.firstName}
                      onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                      className="bg-muted/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input
                      value={profile.lastName}
                      onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                      className="bg-muted/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        className="bg-muted/50 pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        value={profile.phone}
                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        className="bg-muted/50 pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="text-sm font-medium mb-2 block">Bio</label>
                  <Textarea
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    className="bg-muted/50 min-h-[100px]"
                    maxLength={250}
                  />
                  <div className="text-xs text-muted-foreground text-right mt-1">
                    {profile.bio.length}/250 characters
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-cosmic w-full flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </motion.button>
              </div>

              {/* Travel Preferences */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-display font-bold flex items-center gap-2 mb-6">
                  <Compass className="w-5 h-5 text-gold" />
                  Travel Preferences
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {Object.entries(preferences).map(([key, value]) => {
                    const Icon = preferenceIcons[key as keyof typeof preferenceIcons];
                    return (
                      <motion.button
                        key={key}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setPreferences({ ...preferences, [key]: !value })}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          value
                            ? "bg-primary/10 border-primary"
                            : "bg-muted/30 border-border hover:border-muted-foreground"
                        }`}
                      >
                        <Icon className={`w-6 h-6 mx-auto mb-2 ${value ? "text-primary" : "text-muted-foreground"}`} />
                        <div className={`text-sm font-medium capitalize ${value ? "text-primary" : "text-muted-foreground"}`}>
                          {key}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-golden w-full flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Save Preferences
                </motion.button>
              </div>

              {/* Privacy Settings */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-display font-bold flex items-center gap-2 mb-6">
                  <Eye className="w-5 h-5 text-purple" />
                  Privacy Settings
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                    <div>
                      <div className="font-medium">Allow others to see my trips</div>
                      <div className="text-sm text-muted-foreground">
                        Make your trips visible to other travelers
                      </div>
                    </div>
                    <Switch
                      checked={privacy.showTrips}
                      onCheckedChange={(checked) => setPrivacy({ ...privacy, showTrips: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                    <div>
                      <div className="font-medium">Receive notifications</div>
                      <div className="text-sm text-muted-foreground">
                        Get updates about your trips and recommendations
                      </div>
                    </div>
                    <Switch
                      checked={privacy.notifications}
                      onCheckedChange={(checked) => setPrivacy({ ...privacy, notifications: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                    <div>
                      <div className="font-medium">Receive marketing emails</div>
                      <div className="text-sm text-muted-foreground">
                        Stay updated with deals and travel inspiration
                      </div>
                    </div>
                    <Switch
                      checked={privacy.marketing}
                      onCheckedChange={(checked) => setPrivacy({ ...privacy, marketing: checked })}
                    />
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Select defaultValue="usa">
                    <SelectTrigger className="bg-muted/50">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usa">New York, USA</SelectItem>
                      <SelectItem value="uk">London, UK</SelectItem>
                      <SelectItem value="france">Paris, France</SelectItem>
                      <SelectItem value="japan">Tokyo, Japan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Account Actions */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-display font-bold flex items-center gap-2 mb-6">
                  <Lock className="w-5 h-5 text-turquoise" />
                  Account Actions
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-4 rounded-xl bg-gradient-cosmic text-white font-medium flex items-center justify-center gap-2"
                  >
                    <Lock className="w-4 h-4" />
                    Change Password
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-4 rounded-xl bg-gradient-golden text-cosmic-dark font-medium flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download My Data
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-4 rounded-xl border-2 border-destructive text-destructive hover:bg-destructive/10 font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete Account
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
