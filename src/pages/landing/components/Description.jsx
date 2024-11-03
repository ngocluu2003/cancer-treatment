import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Description = () => {
  return (
    <div className="mb-24 flex flex-col items-center justify-between gap-12 lg:flex-row">
      <div className="lg:w-1/2">
        <h1 className="gradient-title pb-6 text-4xl font-extrabold text-gray-900 dark:text-gray-100 md:text-5xl lg:text-6xl">
          Transform Patient Care with AI
        </h1>
        <p className="mb-10 text-lg text-gray-600 dark:text-gray-400 md:text-xl">
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
            src="/src/assets/medical-care.svg"
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
