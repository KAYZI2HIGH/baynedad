import {
  Briefcase,
  Brush,
  Building2,
  Gavel,
  Home,
  MapPin,
  PaintBucket,
  Search,
  Settings,
  ShieldCheck,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";

export const navLinks = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "listing",
    path: "/properties",
  },
  {
    title: "add property",
    path: "/addproperty",
},
  {
    title: "contact",
    path: "/contact",
  },
];

export const features1 = [
  {
    icon: <Home className="text-gray-500 size-5" />,
    title: "property",
  },
  {
    icon: <Settings className="text-gray-500 size-5" />,
    title: "management",
  },
  {
    icon: <Briefcase className="text-gray-500 size-5" />,
    title: "advisory",
  },
  {
    icon: <Wrench className="text-gray-500 size-5" />,
    title: "maintenance",
  },
  {
    icon: <Users className="text-gray-500 size-5" />,
    title: "tenant",
  },
  {
    icon: <PaintBucket className="text-gray-500 size-5" />,
    title: "cleaning",
  },
];

export const features2 = [
  {
    icon: (
      <MapPin
        size={30}
        color="#BC986B"
      />
    ),
    title: "various locations",
    description:
      "We have lots of properties in various locations available for purchase.",
  },
  {
    icon: (
      <Wallet
        size={30}
        color="#BC986B"
      />
    ),
    title: "low commission",
    description:
      "Opportunity to acquire a quality apartment for rent having to pay little or no commission.",
  },
  {
    icon: (
      <Search
        size={30}
        color="#BC986B"
      />
    ),
    title: "view apartments",
    description:
      "View apartment listings with photos, HD videos, virtual tours, 3D floor plans etc.",
  },
];

export const about = [
  {
    title: "about us",
    desc: "At Baynedad Property Managers, we specialize in house rentals services, property management, and facility maintenance. From buying and renting to cleaning and repairs, we’re dedicated to making property ownership stress-free and rewarding",
  },
  {
    title: "mission",
    desc: "Our mission is to deliver dependable property solutions that prioritize quality, innovation, and client satisfaction. We aim to make house rentals and property management simple, efficient, and rewarding for everyone we serve..",
  },
  {
    title: "goal",
    desc: "Our goal is to set a new standard in property management by offering exceptional services that enhance property value, foster client trust, and create lasting partnerships.",
  },
];

export const agents = [
  {
    profileImg: "/avatar.png",
    name: "dada kayode",
    position: "properties managers",
  },
  {
    profileImg: "/avatar.png",
    name: "dada kayode",
    position: "agents",
  },
  {
    profileImg: "/avatar.png",
    name: "dada kayode",
    position: "agents",
  },
];

export const services = [
  {
    title: "Legal Advice",
    description:
      "Professional legal guidance to ensure secure and transparent property transactions.",
    icon: <Gavel />, // Lucide icon for legal services
  },
  {
    title: "Building Maintenance",
    description: "Reliable upkeep of buildings and facilities.",
    icon: <Building2 />, // Lucide icon for building maintenance
  },
  {
    title: "Cleaning Services",
    description: "Professional office and home cleaning.",
    icon: <Brush />, // Lucide icon for cleaning services
  },
  {
    title: "Security Services",
    description: "Dependable physical security solutions.",
    icon: <ShieldCheck />, // Lucide icon for security
  },
  {
    title: "Property Sales",
    description: "Leasing and selling of properties.",
    icon: <MapPin />, // Lucide icon for location or properties
  },
  {
    title: "Duplex Homes",
    description: "Luxury duplex homes with modern designs.",
    icon: <Home />, // Lucide icon for duplex homes
  },
];
