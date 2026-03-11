// data/mockData.js
// Mock data — will be replaced by API calls in the future

export const heroSlides = [
  {
    id: 1,
    title: 'Builders & Interior Designing',
    subtitle:
      'We deliver construction and interior solutions that translate modern ideas into durable, functional spaces.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80',
  },
  {
    id: 2,
    title: 'Industrial Approvals',
    subtitle:
      'Construction and consultancy services in Kerala with time-bound delivery and fixed budgets.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80',
  },
  {
    id: 3,
    title: 'Approvals & NOCs',
    subtitle:
      'Town Planning approvals, Pollution Control Board approvals, Fire & Rescue NOC and District Medical Office NOC.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80',
  },
];

export const servicesData = [
  {
    id: 'plan-estimate',
    icon: 'ClipboardList',
    title: 'Plan & Estimate',
    description: 'Plan and estimate services for residential, commercial and industrial projects.',
    benefits: [
      'Site study & feasibility',
      'Detailed estimates',
      'Drawings & approvals',
      'Time-bound delivery',
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  },
  {
    id: 'industrial-construction',
    icon: 'Factory',
    title: 'Commercial & Industrial Construction',
    description: 'Commercial and industrial building construction with turnkey delivery.',
    benefits: [
      'Factories & warehouses',
      'Commercial buildings',
      'Quality supervision',
      'Budget adherence',
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    id: 'town-planning',
    icon: 'Map',
    title: 'Town Planning Approval',
    description: 'Consultancy services and town planning approvals.',
    benefits: [
      'LSGD approvals',
      'Building permit processing',
      'Zoning compliance',
      'Fast-track clearances',
    ],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
  {
    id: 'fire-rescue',
    icon: 'ShieldCheck',
    title: 'Fire & Rescue NOC',
    description: 'Fire & Rescue NOC approvals and compliance support.',
    benefits: [
      'NOC application filing',
      'Fire safety audit',
      'System design approval',
      'Renewal assistance',
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
  },
  {
    id: 'pollution-control',
    icon: 'Leaf',
    title: 'Pollution Control Approval',
    description: 'Pollution Control Board approvals and industrial registration support.',
    benefits: [
      'KSPCB consent filing',
      'Environmental impact assessment',
      'Effluent treatment guidance',
      'Renewal management',
    ],
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
  },
  {
    id: 'interior-works',
    icon: 'Sofa',
    title: 'District Medical Office NOC',
    description: 'District Medical Office NOC assistance for industrial and commercial projects.',
    benefits: [
      'Documentation support',
      'Site inspections',
      'Compliance guidance',
      'Renewal assistance',
    ],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
  },
];

export const projectsData = [
  {
    id: 'proj-1',
    title: 'Modern Villa Perumbavoor',
    category: 'residential',
    location: 'Perumbavoor, Ernakulam',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80',
    ],
    description: 'Luxury 4BHK villa with contemporary design and premium finishes.',
  },
  {
    id: 'proj-2',
    title: 'Commercial Complex Aluva',
    category: 'commercial',
    location: 'Aluva, Ernakulam',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
    ],
    description: 'Five-storey commercial building with modern amenities.',
  },
  {
    id: 'proj-3',
    title: 'Residential Apartments',
    category: 'residential',
    location: 'Kalady, Ernakulam',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    description: 'Compact premium apartment complex with landscaped garden.',
  },
  {
    id: 'proj-4',
    title: 'Industrial Warehouse',
    category: 'commercial',
    location: 'Angamaly, Ernakulam',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    ],
    description: 'Pre-engineered 10,000 sqft warehouse for logistics company.',
  },
  {
    id: 'proj-5',
    title: 'Heritage Bungalow Renovation',
    category: 'residential',
    location: 'Muvattupuzha, Ernakulam',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
    ],
    description: 'Thoughtful renovation preserving original character with modern upgrades.',
  },
  {
    id: 'proj-6',
    title: 'Tech Park Office',
    category: 'commercial',
    location: 'Kakkanad, Ernakulam',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    ],
    description: 'Modern office interiors for an IT company in Kakkanad tech park.',
  },
];

export const testimonialsData = [
  {
    id: 'test-1',
    name: 'Rajesh Menon',
    role: 'Homeowner, Perumbavoor',
    review: 'Scholar Builders turned our dream home into reality. The quality of workmanship and attention to detail is outstanding. They completed the project on time and within budget.',
    rating: 5,
    avatar: 'RM',
  },
  {
    id: 'test-2',
    name: 'Priya Krishnan',
    role: 'Business Owner, Aluva',
    review: 'They handled all our factory approvals — KSPCB, Fire NOC, Building permit — seamlessly. Their expertise saved us months of hassle. Highly professional team.',
    rating: 5,
    avatar: 'PK',
  },
  {
    id: 'test-3',
    name: 'Suresh Thomas',
    role: 'Developer, Kakkanad',
    review: 'The commercial complex project was delivered with exceptional quality. Scholar Builders managed everything from planning to final approval. Truly a one-stop solution.',
    rating: 5,
    avatar: 'ST',
  },
  {
    id: 'test-4',
    name: 'Anitha Nair',
    role: 'Homeowner, Kalady',
    review: 'Our villa renovation exceeded expectations. The interior works team is incredibly talented. The design ideas they brought were fresh and perfectly matched our lifestyle.',
    rating: 4,
    avatar: 'AN',
  },
];
