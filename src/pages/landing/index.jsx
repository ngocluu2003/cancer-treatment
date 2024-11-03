import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/pages/landing/components/HowItWorks";
import Features from "@/pages/landing/components/Features";
import Description from "@/pages/landing/components/Description";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      <Description />
      <div className="mb-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-black dark:text-white md:text-4xl">
          Key Features
        </h2>
        <Features />
      </div>
      <div className="mb-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-black dark:text-white md:text-4xl">
          What Our Users Say
        </h2>
        <Testimonials />
      </div>
      <div className="mb-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-black dark:text-white md:text-4xl">
          How It Works
        </h2>
        <HowItWorks />
      </div>
      <div className="rounded-lg bg-green-200 p-6 text-center text-black dark:bg-green-400 dark:text-white sm:p-8 lg:p-10">
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
          Transform Patient Care with AI
        </h2>
        <p className="mb-6 text-lg sm:text-xl">
          Join countless healthcare professionals leveraging CanCure to enhance
          patient management and improve treatment outcomes.
        </p>

        <Link to={"/dashboard"}>
          <Button
            size="lg"
            variant="secondary"
            className="text-black dark:text-white"
          >
            Start For Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
