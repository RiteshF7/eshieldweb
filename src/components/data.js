import {
  LockClosedIcon,
  MapPinIcon,
  PhoneIcon,
  BellAlertIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Advanced Device Control & Security",
  desc: "Take control of your EMI collections with our comprehensive device management system that ensures payment compliance while maintaining professional relationships with customers.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Smart Device Locking",
      desc: "Remotely manage device access based on payment status with our secure locking system.",
      icon: <LockClosedIcon />,
    },
    {
      title: "Real-time Location Tracking",
      desc: "Monitor device locations in real-time for enhanced asset protection and security.",
      icon: <MapPinIcon />,
    },
    {
      title: "Contact & Call Management",
      desc: "Access and manage device contacts and control call functionality based on payment status.",
      icon: <PhoneIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Intelligent Payment Reminders",
  desc: "Keep your customers informed and up-to-date with our multi-channel reminder system that ensures timely payments and reduces defaults.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Smart Notifications",
      desc: "Automated payment reminders through screen messages and audio alerts to ensure payment awareness.",
      icon: <BellAlertIcon />,
    },
    {
      title: "Data Protection",
      desc: "Secure data management capabilities with remote wipe options for maximum security.",
      icon: <ShieldCheckIcon />,
    },
    {
      title: "Payment Analytics",
      desc: "Track collection efficiency and payment patterns with detailed analytics and reporting.",
      icon: <CurrencyDollarIcon />,
    },
  ],
};

export {benefitOne, benefitTwo};