const plans = [
  {
    type: "Startup",
    pricePerYear: 60,
    dataStorage: "5GB",
    bandwidth: "50GB",
    emailAccounts: 50,
    database: 5,
    domainAddOn: 1,
    maxHourlyEmailSend: 100,
    isFreeDomain: true,
    isMostPopular: false,
    isGoodSpeed: false,
  },
  {
    type: "Basic",
    pricePerYear: 100,
    dataStorage: "20GB",
    bandwidth: "200GB",
    emailAccounts: 100,
    database: 20,
    domainAddOn: 2,
    maxHourlyEmailSend: 200,
    isFreeDomain: true,
    isMostPopular: true,
    isGoodSpeed: false,
  },
  {
    type: "Professional",
    pricePerYear: 150,
    dataStorage: "Unlimited",
    bandwidth: "Unlimited",
    emailAccounts: "Unlimited",
    database: "Unlimited",
    domainAddOn: "Unlimited",
    maxHourlyEmailSend: 300,
    isFreeDomain: true,
    isMostPopular: false,
    isGoodSpeed: false,
  },
];

const services = [
  {
    name: "Website Development",
    shortDesc:
      "Professional Website Design in Cambodia Dynamic, CMS, WordPress, E-commerce . . .",
    image: "/images/services/services-1.jpg",
    amountProjects: 1,
  },
  {
    name: "Mobile App Development",
    shortDesc:
      "Mobile Application Development App Store (IOS) and Play Store (Android) . . .",
    image: "/images/services/services-2.jpg",
    amountProjects: 1,
  },
  {
    name: "Software Development",
    shortDesc:
      "Cloud System, Dental Clinic Management System, POS Star Mart & Restaurant . . .",
    image: "/images/services/services-3.jpg",
    amountProjects: 1,
  },
  {
    name: "Domain Registration & Web Hosting",
    shortDesc:
      "Smooth web hosting and Domain Registration and using email . . .",
    image: "/images/services/services-4.jpg",
    amountProjects: 1,
  },
  {
    name: "Corporate Design",
    shortDesc:
      "Logo Design, Banner, Brochures, Business Card, Folder, Leaflet Design . . .",
    image: "/images/services/services-5.jpg",
    amountProjects: 1,
  },
];

const projects = [
  {
    name: "Learning for Success Institute (LSI)",
    image: "/images/projects/projects-1.jpg",
    websiteLink: null,
    facebookLink: null,
    instagramLink: null,
    telegramLink: null,
  },
  {
    name: "Woo Jeong Cambodia School",
    image: "/images/projects/projects-2.jpg",
    websiteLink: null,
    facebookLink: null,
    instagramLink: null,
    telegramLink: null,
  },
  {
    name: "AWS (CAMBODIA) LTD",
    image: "/images/projects/projects-3.jpg",
    websiteLink: null,
    facebookLink: null,
    instagramLink: null,
    telegramLink: null,
  },
  {
    name: "Asian Hire Co., Ltd",
    image: "/images/projects/projects-4.jpg",
    websiteLink: null,
    facebookLink: null,
    instagramLink: null,
    telegramLink: null,
  },
  {
    name: "Cam-edu Learning",
    image: "/images/projects/projects-5.jpg",
    websiteLink: null,
    facebookLink: null,
    instagramLink: null,
    telegramLink: null,
  },
];

export default { plans, services, projects };
