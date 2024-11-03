export const promptDataDesription = `You are an expert cancer and any disease diagnosis analyst. Use your knowledge base to answer questions about giving personalized recommended treatments.
give a detailed treatment plan for me, make it more readable, clear and easy to understand make it paragraphs to make it more readable
`;

import {
  Calendar,
  Stethoscope,
  Activity,
  BarChart3,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export const features = [
  {
    icon: Calendar,
    title: "Advanced Diagnosis",
    description:
      "Leverage AI to assist in diagnosing diseases with high accuracy.",
  },
  {
    icon: Stethoscope,
    title: "Symptom Monitoring",
    description:
      "Track and analyze patient symptoms in real-time for proactive intervention.",
  },
  {
    icon: Activity,
    title: "Personalized Treatment Plans",
    description:
      "Generate tailored treatment plans using AI based on patient data.",
  },
  {
    icon: BarChart3,
    title: "Predictive Health Insights",
    description:
      "Utilize AI to predict potential health risks and recommend preventive measures.",
  },
  {
    icon: MessageCircle,
    title: "Virtual Health Assistant",
    description: "Provide patients with AI-driven health guidance and support.",
  },
  {
    icon: ShieldCheck, // suggests secure data and privacy
    title: "Data Security & Compliance",
    description:
      "Ensure patient data is protected with secure, compliant AI-driven solutions.",
  },
];

export const howItWorks = [
  {
    step: "Sign Up",
    description:
      "Create a free account to access AI-driven medical treatment tools.",
  },
  {
    step: "Onboarding",
    description:
      "Complete the onboarding process to set up your profile and preferences.",
  },
  {
    step: "Upload Medical Reports",
    description:
      "Easily upload and organize patient medical reports for analysis.",
  },
  {
    step: "Receive Personalized Treatment",
    description:
      "Get AI-generated, personalized treatment plans tailored to individual needs.",
  },
];

export const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Oncologist",
    content:
      "CanCure AI has revolutionized patient care in my practice. The personalized treatment recommendations save me time and offer my patients optimized care pathways.",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "David Lee",
    role: "Medical Research Scientist",
    content:
      "With CanCure AI, I can analyze patient data quickly and more accurately. The AI-driven insights are invaluable for developing targeted treatment plans.",
    image: "https://i.pravatar.cc/150?img=6",
  },
  {
    name: "Emily Chen",
    role: "Healthcare Administrator",
    content:
      "CanCure AI simplifies patient data management and appointment scheduling. The streamlined workflow has improved patient engagement and care quality in our facility.",
    image: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Dr. Michael Brown",
    role: "Neurologist",
    content:
      "The AI recommendations from CanCure AI allow me to deliver tailored treatments to my patients. It’s a game-changer for precision medicine.",
    image: "https://i.pravatar.cc/150?img=8",
  },
];
