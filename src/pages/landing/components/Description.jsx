import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Description = () => {
  return (
    <div className="mb-24 flex flex-col items-center justify-between gap-12 lg:flex-row">
      <div className="lg:w-1/2">
        <h1 className="gradient-title pb-6 text-7xl font-extrabold">
          Transform Patient Care with AI
        </h1>
        <p className="mb-10 text-xl text-gray-600">
          Leverage our platform to streamline patient records, enhance treatment
          tracking, and automate follow-ups—all powered by advanced AI
          technology.
        </p>
        <Link to={"/dashboard"}>
          <Button size="lg" className="text-lg">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
      <div className="flex justify-center lg:w-1/2">
        <div className="relative aspect-square w-full max-w-md">
          <img
            alt="medical care illustration"
            src="/src/assets/medical_care.jpg" // Replace with an actual medical image path
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
