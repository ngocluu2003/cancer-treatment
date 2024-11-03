export const promptDataDesription = `You are an expert cancer and any disease diagnosis analyst. Use your knowledge base to answer questions about giving personalized recommended treatments.
give a detailed treatment plan for me, make it more readable, clear and easy to understand make it paragraphs to make it more readable
`;

import { Calendar, Clock, LinkIcon } from "lucide-react";

export const features = [
  {
    icon: Calendar,
    title: "Track Appointments",
    description: "Easily set up and customize patient appointments",
  },
  {
    icon: Clock,
    title: "Manage Availability",
    description: "Define your availability for patient consultations",
  },
  {
    icon: LinkIcon,
    title: "Share Patient Resources",
    description: "Provide patients with personalized links to access resources",
  },
];

export const howItWorks = [
  {
    step: "Sign Up",
    description: "Create your free medical treatment account",
  },
  {
    step: "Set Availability",
    description: "Specify your consultation hours for seamless scheduling",
  },
  {
    step: "Share Appointment Link",
    description: "Allow patients to schedule appointments easily",
  },
  {
    step: "Track Progress",
    description: "Monitor treatment plans and schedule follow-up appointments",
  },
];

export const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Primary Care Physician",
    content:
      "This platform has transformed the way I manage my patients' appointments and follow-ups. It's intuitive and saves hours every week!",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Nurse David Lee",
    role: "Registered Nurse",
    content:
      "As a nurse, this tool helps me stay organized with patient visits and documentation. Our patients appreciate how easy it is to schedule follow-ups.",
    image: "https://i.pravatar.cc/150?img=6",
  },
  {
    name: "Emily Chen",
    role: "Medical Administrator",
    content:
      "Managing patient appointments and records is so much easier now. It streamlined our processes and enhanced patient care.",
    image: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Dr. Michael Brown",
    role: "Cardiologist",
    content:
      "This tool has increased the efficiency of my practice. Patients can book appointments without hassle, and I can focus on care.",
    image: "https://i.pravatar.cc/150?img=8",
  },
];
