import type { CleaningConfig } from "@/types";

export const cleaningConfig: CleaningConfig = {
  brand: {
    name: "Pristine Maid Co.",
    tagline: "Come Home to Fresh. We'll Handle the Rest.",
    licenseKey: "TX-HMS-2024-48712",
    insuranceCoverage: "$2,000,000",
    city: "Austin",
    state: "Texas",
  },

  contact: {
    phone: "+27 64 166 3906",
    email: "hello@pristinmaidco.com",
    dispatchAddress: "Long Ave, Randburg, 2194, South Africa",
    hours: "Mon–Sat: 7:00 AM – 8:00 PM | Sun: 9:00 AM – 5:00 PM",
  },

  serviceAreas: [
    { zipCode: "78701", neighborhood: "Downtown" },
    { zipCode: "78702", neighborhood: "East Austin" },
    { zipCode: "78703", neighborhood: "Tarrytown" },
    { zipCode: "78704", neighborhood: "South Lamar" },
    { zipCode: "78705", neighborhood: "West Campus" },
    { zipCode: "78717", neighborhood: "Avery Ranch" },
    { zipCode: "78726", neighborhood: "Spicewood at Balcones" },
    { zipCode: "78729", neighborhood: "Milwood" },
    { zipCode: "78731", neighborhood: "Northwest Hills" },
    { zipCode: "78741", neighborhood: "South Menchaca" },
    { zipCode: "78745", neighborhood: "Westgate" },
    { zipCode: "78748", neighborhood: "Circle C" },
    { zipCode: "78749", neighborhood: "Onion Creek" },
    { zipCode: "78750", neighborhood: "Great Hills" },
    { zipCode: "78757", neighborhood: "Allandale" },
    { zipCode: "78758", neighborhood: "Wooten" },
  ],

  bookingRates: {
    baseRates: [
      { bedrooms: 1, bathrooms: 1, price: 129 },
      { bedrooms: 1, bathrooms: 2, price: 159 },
      { bedrooms: 2, bathrooms: 1, price: 169 },
      { bedrooms: 2, bathrooms: 2, price: 199 },
      { bedrooms: 2, bathrooms: 3, price: 229 },
      { bedrooms: 3, bathrooms: 1, price: 209 },
      { bedrooms: 3, bathrooms: 2, price: 249 },
      { bedrooms: 3, bathrooms: 3, price: 289 },
      { bedrooms: 4, bathrooms: 2, price: 309 },
      { bedrooms: 4, bathrooms: 3, price: 349 },
      { bedrooms: 4, bathrooms: 4, price: 389 },
      { bedrooms: 5, bathrooms: 3, price: 399 },
      { bedrooms: 5, bathrooms: 4, price: 449 },
    ],
    frequencies: [
      {
        id: "one-time",
        label: "One-Time Clean",
        discount: 0,
        description: "Perfect for a fresh start or special occasion",
      },
      {
        id: "monthly",
        label: "Monthly",
        discount: 10,
        description: "Keep your home consistently fresh",
      },
      {
        id: "bi-weekly",
        label: "Bi-Weekly",
        discount: 15,
        description: "Our most popular plan for busy families",
      },
      {
        id: "weekly",
        label: "Weekly",
        discount: 20,
        description: "The ultimate hands-off lifestyle",
      },
    ],
    addOns: [
      {
        id: "oven-deep",
        name: "Oven Deep Clean",
        price: 45,
        icon: "Flame",
        description: "Interior deep scrub, rack soak, and degrease",
      },
      {
        id: "inside-fridge",
        name: "Inside Fridge",
        price: 35,
        icon: "Refrigerator",
        description: "Shelf removal, wipe-down, and organizer reset",
      },
      {
        id: "interior-windows",
        name: "Window Washing",
        price: 8,
        icon: "Sun",
        description: "Per window — streak-free interior glass",
      },
      {
        id: "balcony-patio",
        name: "Balcony / Patio",
        price: 40,
        icon: "TreePine",
        description: "Sweep, mop, and furniture wipe-down",
      },
      {
        id: "baseboards",
        name: "Baseboard Detailing",
        price: 30,
        icon: "Ruler",
        description: "Edge-to-edge baseboard scrub and polish",
      },
      {
        id: "cabinet-interiors",
        name: "Cabinet Interiors",
        price: 55,
        icon: "Package",
        description: "Full shelf wipe-down and reorganization",
      },
      {
        id: "laundry-fold",
        name: "Laundry & Fold",
        price: 25,
        icon: "Shirt",
        description: "One load washed, dried, and neatly folded",
      },
      {
        id: "garage-sweep",
        name: "Garage Sweep",
        price: 50,
        icon: "Warehouse",
        description: "Floor sweep, cobweb removal, and organize",
      },
    ],
  },

  staffDirectory: [
    {
      id: "staff-001",
      name: "Maria Gonzalez",
      title: "Lead Cleaning Specialist",
      profilePhoto: "/maria.jpeg",
      rating: 4.97,
      reviews: 342,
      specialty: "Deep Detailing",
      petFriendly: true,
      yearsExperience: 8,
      bio: "Maria leads our team with unmatched attention to detail. Certified in eco-friendly products and pet-safe sanitization.",
    },
    {
      id: "staff-002",
      name: "James Whitfield",
      title: "Commercial Clean Specialist",
      profilePhoto: "/james.jpeg",
      rating: 4.95,
      reviews: 218,
      specialty: "Office & Commercial",
      petFriendly: true,
      yearsExperience: 6,
      bio: "James keeps Austin's offices spotless. Trained in commercial-grade equipment and post-construction cleanup.",
    },
    {
      id: "staff-003",
      name: "Aisha Patel",
      title: "Move-In/Out Expert",
      profilePhoto: "/aisha.jpeg",
      rating: 4.98,
      reviews: 189,
      specialty: "Move-In/Out Cleans",
      petFriendly: true,
      yearsExperience: 5,
      bio: "Aisha transforms empty or neglected spaces into move-in-ready homes with meticulous, top-to-bottom care.",
    },
    {
      id: "staff-004",
      name: "Carlos Rivera",
      title: "Senior Residential Cleaner",
      profilePhoto: "/Carlos.jpeg",
      rating: 4.94,
      reviews: 267,
      specialty: "Eco-Friendly Green Clean",
      petFriendly: true,
      yearsExperience: 7,
      bio: "Carlos is passionate about non-toxic, sustainable cleaning methods that keep families and pets safe.",
    },
    {
      id: "staff-005",
      name: "Sarah Mitchell",
      title: "Quality Assurance Manager",
      profilePhoto: "/sarah.jpeg",
      rating: 4.99,
      reviews: 156,
      specialty: "Inspection & Standards",
      petFriendly: true,
      yearsExperience: 10,
      bio: "Sarah personally inspects every clean to ensure it meets our 200% Spotless Guarantee standard.",
    },
    {
      id: "staff-006",
      name: "David Kim",
      title: "Window & Detail Specialist",
      profilePhoto: "/david.jpeg",
      rating: 4.93,
      reviews: 134,
      specialty: "Window & Glass Care",
      petFriendly: false,
      yearsExperience: 4,
      bio: "David brings crystal-clear perfection to every pane, fixture, and surface he touches.",
    },
  ],

  promo: {
    enabled: true,
    discountPercent: 20,
    promoCode: "FIRST20",
    targetLink: "#quote-estimator",
    bannerText:
      "Take 20% Off Your First Recurring Clean — Use Code FIRST20 at Checkout",
  },

  services: [
    {
      id: "standard",
      name: "Standard Home Cleaning",
      shortDescription:
        "A thorough, room-by-room clean covering every surface, floor, and fixture in your home.",
      fullDescription:
        "Our signature service covers all living spaces with hospital-grade disinfectants and eco-friendly solutions. Perfect for maintaining a consistently fresh home.",
      icon: "Home",
      startingPrice: 129,
      popular: true,
      checklist: [
        { task: "All rooms dusted and surface-wiped", included: true },
        { task: "Floors vacuumed and mopped", included: true },
        { task: "Bathrooms sanitized (tub, toilet, sink, mirror)", included: true },
        { task: "Kitchen counters, sink, and stovetop cleaned", included: true },
        { task: "Beds made with fresh linens", included: true },
        { task: "Trash emptied and bins relined", included: true },
        { task: "Light switch plates and door handles disinfected", included: true },
        { task: "Windowsills and blind dusting", included: true },
        { task: "Pet hair removal from furniture", included: true },
        { task: "Entryway and hallways swept", included: true },
      ],
    },
    {
      id: "deep",
      name: "Deep Moving-In/Out Clean",
      shortDescription:
        "An intensive, top-to-bottom scrub designed for move transitions, post-renovation, or neglected spaces.",
      fullDescription:
        "We go beyond standard cleaning to tackle built-up grime, hidden dust, and forgotten corners. Ideal for getting your full security deposit back or welcoming new homeowners.",
      icon: "Layers",
      startingPrice: 249,
      checklist: [
        { task: "Everything in Standard Clean", included: true },
        { task: "Inside all cabinets and drawers wiped", included: true },
        { task: "Inside oven and range hood degreased", included: true },
        { task: "Inside fridge fully cleaned and shelved", included: true },
        { task: "Baseboards scrubbed and polished", included: true },
        { task: "Door frames and crown molding dusted", included: true },
        { task: "Light fixtures and ceiling fans wiped", included: true },
        { task: "Grout lines scrubbed in bathrooms", included: true },
        { task: "Garage or storage area swept", included: true },
        { task: "Wall spot-cleaning and scuff removal", included: true },
        { task: "Window tracks and sills detailed", included: true },
        { task: "Under-furniture deep vacuuming", included: true },
      ],
    },
    {
      id: "eco",
      name: "Eco-Friendly Green Clean",
      shortDescription:
        "Plant-based, non-toxic cleaning for families with children, pets, or chemical sensitivities.",
      fullDescription:
        "We use exclusively EPA Safer Choice certified, biodegradable products that eliminate 99.9% of bacteria without harsh chemicals. Safe for every member of your household.",
      icon: "Leaf",
      startingPrice: 149,
      checklist: [
        { task: "All surfaces cleaned with plant-based products", included: true },
        { task: "HEPA-filter vacuuming throughout", included: true },
        { task: "Pet-safe floor mopping with botanical solutions", included: true },
        { task: "Bathroom sanitization with non-toxic disinfectant", included: true },
        { task: "Kitchen cleaned with food-safe degreaser", included: true },
        { task: "Fragrance-free air freshening", included: true },
        { task: "Hypoallergenic dusting on all surfaces", included: true },
        { task: "Child-safe toy and play area sanitization", included: true },
        { task: "Window cleaning with vinegar-based solution", included: true },
        { task: "All products leave zero chemical residue", included: true },
      ],
    },
    {
      id: "commercial",
      name: "Office & Commercial Cleaning",
      shortDescription:
        "Professional after-hours cleaning for offices, co-working spaces, and retail locations.",
      fullDescription:
        "Keep your business environment pristine and professional. We work around your hours with minimal disruption, using commercial-grade equipment and protocols.",
      icon: "Building2",
      startingPrice: 199,
      checklist: [
        { task: "Reception and lobby deep-cleaned", included: true },
        { task: "All workstations dusted and wiped", included: true },
        { task: "Conference rooms sanitized and stocked", included: true },
        { task: "Break room and kitchenette cleaned", included: true },
        { task: "Restrooms fully sanitized and restocked", included: true },
        { task: "Floors vacuumed, mopped, or carpet-cleaned", included: true },
        { task: "Waste removal and recycling sorted", included: true },
        { task: "Glass doors and partitions streak-cleaned", included: true },
        { task: "High-touch points disinfected (handles, rails)", included: true },
        { task: "Air vents and HVAC returns dusted", included: true },
      ],
    },
  ],

  testimonials: [
    {
      id: "test-001",
      name: "Jennifer & Mark Thompson",
      location: "Westlake Hills",
      rating: 5,
      text: "We've tried five cleaning services in Austin. Pristine is the only one that actually delivers on their promise. Our house smells like a five-star hotel every single time.",
      highlight: "Five-star hotel smell",
      avatar: "/jennifer.jpeg",
    },
    {
      id: "test-002",
      name: "Dr. Rachel Nguyen",
      location: "Northwest Hills",
      rating: 5,
      text: "As a pediatrician, I'm obsessed with sanitization. Maria and her team use hospital-grade products that are completely safe for my toddler and two dogs. Absolutely flawless.",
      highlight: "Hospital-grade & toddler-safe",
      avatar: "/rachel.jpeg",
    },
    {
      id: "test-003",
      name: "The Patel Family",
      location: "Circle C",
      rating: 5,
      text: "We switched to bi-weekly service and our weekends are back. The kids think the 'cleaning fairies' visit. The consistency is remarkable — every visit is identical quality.",
      highlight: "Weekends are back",
      avatar: "/patel.jpeg",
    },
    {
      id: "test-004",
      name: "Brian Caldwell",
      location: "Downtown",
      rating: 5,
      text: "Hired them for a move-out clean on my condo. Got my full security deposit back — the landlord said it looked better than when I moved in. Worth every penny.",
      highlight: "Full security deposit back",
      avatar: "/brian.jpeg",
    },
    {
      id: "test-005",
      name: "Sarah & Tom Mitchell",
      location: "Tarrytown",
      rating: 5,
      text: "We have three dogs and two cats. Pristine is the only service that doesn't just tolerate pets — they genuinely love them. Carlos always brings treats for our crew.",
      highlight: "Genuinely pet-loving",
      avatar: "/sarah-m.jpeg",
    },
    {
      id: "test-006",
      name: "Oakridge Dental Office",
      location: "South Lamar",
      rating: 5,
      text: "Our dental office switched to Pristine for after-hours commercial cleaning. Patients constantly compliment how clean our space looks. Professional, reliable, and thorough.",
      highlight: "Patients compliment the clean",
      avatar: "/oakridge.jpeg",
    },
  ],

  faq: [
    {
      id: "faq-001",
      question: "How do I reschedule or cancel a booking?",
      answer:
        "You can reschedule or cancel up to 24 hours before your appointment at no charge through our online portal or by calling our support line. Cancellations within 24 hours incur a $49 fee to compensate our cleaning team.",
      category: "Booking",
    },
    {
      id: "faq-002",
      question: "What happens if I'm not home during the clean?",
      answer:
        "No problem! You can provide a door code, lockbox combination, or garage access code during booking. Our team is fully bonded, insured, and background-checked. Many of our clients leave a code and come home to a sparkling clean house.",
      category: "Access",
    },
    {
      id: "faq-003",
      question: "Are your cleaning products safe for pets?",
      answer:
        "Absolutely. Every product we use is EPA Safer Choice certified, non-toxic, and completely safe for dogs, cats, and other household pets. We can also use your preferred products if you have specific requirements.",
      category: "Pets",
    },
    {
      id: "faq-004",
      question: "Do I need to provide any supplies or equipment?",
      answer:
        "Nothing at all. Our team arrives with professional-grade equipment, HEPA vacuums, and a full suite of hospital-grade and eco-friendly cleaning products. Everything is included in your quoted price.",
      category: "Supplies",
    },
    {
      id: "faq-005",
      question: "What is the 200% Spotless Guarantee?",
      answer:
        "If you aren't completely satisfied, we return within 24 hours to re-clean the areas of concern — completely free. If you're still not happy after the re-clean, we refund your payment in full. No questions, no hassle.",
      category: "Guarantee",
    },
    {
      id: "faq-006",
      question: "How is my price calculated?",
      answer:
        "Your quote is based on your home's size (bedrooms and bathrooms), your chosen frequency (one-time, weekly, bi-weekly, or monthly), and any premium add-ons you select. Recurring plans receive up to 20% off the base rate. Get an instant estimate using our booking tool above.",
      category: "Pricing",
    },
    {
      id: "faq-007",
      question: "Are your cleaners background-checked and insured?",
      answer:
        "Yes — every team member passes an exhaustive multi-step background check, identity verification, and skills assessment. We carry $2,000,000 in liability insurance and are fully bonded. You'll also receive your cleaner's profile and rating before they arrive.",
      category: "Trust",
    },
    {
      id: "faq-008",
      question: "What zip codes do you serve?",
      answer:
        "We currently serve 16 neighborhoods across the Austin metro area, including Downtown, Westlake Hills, Circle C, Northwest Hills, Tarrytown, and more. Full coverage details are available in our service area section.",
      category: "Service Area",
    },
  ],

  credibilityStats: [
    {
      value: "Licensed & Insured",
      label: "TX License #2024-48712",
      icon: "ShieldCheck",
      tone: "brand",
    },
    {
      value: "$2M Coverage",
      label: "Full Liability & Bonding",
      icon: "BadgeDollarSign",
      tone: "amber",
    },
    {
      value: "12,400+",
      label: "Homes Cleaned",
      icon: "Home",
      tone: "green",
    },
    {
      value: "4.97",
      label: "Average Google Rating",
      icon: "Star",
      tone: "amber",
    },
  ],

  guaranteeePillars: [
    {
      id: "re-clean",
      icon: "RotateCcw",
      title: "Free Re-Clean in 24 Hours",
      description:
        "If you aren't completely satisfied, we return within 24 hours to re-clean the areas of concern — completely free.",
    },
    {
      id: "full-refund",
      icon: "BadgeCheck",
      title: "Full Refund if Still Unhappy",
      description:
        "If you're still not satisfied after the re-clean, we refund your payment in full. No questions, no hassle.",
    },
    {
      id: "zero-risk",
      icon: "Home",
      title: "Zero-Risk Booking",
      description:
        "Every booking is backed by our guarantee. You never pay for a clean that doesn't meet our 200% Spotless standard.",
    },
  ],

  teamBadges: [
    { id: "bg-check", icon: "ShieldCheck", label: "Background-Checked" },
    { id: "pet-safe", icon: "PawPrint", label: "Pet-Safe Products" },
    { id: "guarantee", icon: "Award", label: "200% Spotless Guarantee" },
    { id: "punctual", icon: "Clock", label: "Punctual & Reliable" },
  ],

  footerLinks: [
    { label: "Get Instant Quote", href: "#quote-estimator" },
    { label: "Our Services", href: "#services" },
    { label: "Meet the Team", href: "#team" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Careers — Join Our Team", href: "#" },
    { label: "Commercial Cleaning", href: "#services" },
  ],

  socials: [
    { id: "instagram", icon: "Instagram", label: "Instagram", href: "#" },
    { id: "facebook", icon: "Facebook", label: "Facebook", href: "#" },
  ],
};
