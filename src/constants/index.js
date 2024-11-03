import { apps, user, records, screening } from "../assets";

export const navLinks = [
  {
    name: "dashboard",
    imageUrl: apps,
    link: "/dashboard",
  },
  {
    name: "records",
    imageUrl: records,
    link: "/medical-records",
  },
  {
    name: "screenings",
    imageUrl: screening,
    link: "/screening-schedules",
  },
  {
    name: "profile",
    imageUrl: user,
    link: "/profile",
  },
];
