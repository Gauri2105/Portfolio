import type { Project } from "../types";

const base = import.meta.env.BASE_URL;

export const projectsData: Project[] = [
  {
    title: "School Bus Tracking System",
    category: "Enterprise Application",

    description:
      "A real-time GPS-based school transportation platform designed for schools, parents, drivers and administrators. The system provides live bus tracking, attendance monitoring, route management, notifications and role-based access across web and mobile applications.",

    technologies: [
      "Angular",
      "Ionic",
      "Node.js",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Capacitor",
    ],

    features: [
      "Real-time GPS bus tracking",
      "Student attendance management",
      "Parent notifications and alerts",
      "Role-based access control",
      "Route and vehicle management",
      "Cross-platform mobile application",
    ],

    screenshots: [
      `${base}projects/school-bus/1.png`,
      `${base}projects/school-bus/2.png`,
      `${base}projects/school-bus/3.png`,
      `${base}projects/school-bus/4.png`,
      `${base}projects/school-bus/5.png`,
      `${base}projects/school-bus/6.png`,
      `${base}projects/school-bus/7.png`,
    ],
  },

  {
    title: "Jozi Mix & Match",
    category: "Shopify E-Commerce Platform",

    description:
      "A Shopify-powered product bundling platform that enables customers to create custom product kits with dynamic pricing and inventory validation. The application helps merchants increase sales while maintaining accurate inventory synchronization.",

    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Shopify APIs"],

    features: [
      "Custom product bundle creation",
      "Dynamic pricing calculation",
      "Real-time inventory synchronization",
      "Shopify Admin API integration",
      "Product validation workflows",
      "Responsive customer experience",
    ],

    screenshots: [
      `${base}projects/jozi/1.png`,
      `${base}projects/jozi/2.png`,
      `${base}projects/jozi/3.png`,
      `${base}projects/jozi/4.png`,
      `${base}projects/jozi/5.png`,
    ],
  },

  {
    title: "Salon Management System",
    category: "Business Management Platform",

    description:
      "A mobile-first salon management platform designed to streamline appointment scheduling, customer management, staff operations, subscriptions and online payments through an intuitive interface.",

    technologies: ["Angular", "Ionic", "Node.js", "MySQL", "Razorpay"],

    features: [
      "Appointment booking system",
      "Staff scheduling management",
      "Service and pricing management",
      "Razorpay payment integration",
      "Subscription plans",
      "Customer management",
    ],

    screenshots: [
      `${base}projects/salon/1.png`,
      `${base}projects/salon/2.png`,
      `${base}projects/salon/3.png`,
      `${base}projects/salon/4.png`,
      `${base}projects/salon/5.png`,
    ],
  },

  {
    title: "PayWallet",
    category: "Financial Application",

    description:
      "A digital wallet platform that enables secure transactions, wallet management, rewards tracking and user authentication while providing a clean and responsive user experience.",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs",
    ],

    features: [
      "Wallet management",
      "Transaction history",
      "Secure authentication",
      "Rewards system",
      "User profile management",
      "Responsive dashboard",
    ],

    screenshots: [
      `${base}projects/paywallet/1.png`,
      `${base}projects/paywallet/2.png`,
      `${base}projects/paywallet/3.png`,
      `${base}projects/paywallet/4.png`,
      `${base}projects/paywallet/5.png`,
      `${base}projects/paywallet/6.png`,
    ],

    github: "https://github.com/Gauri2105/paywallet-app",
  },
];
