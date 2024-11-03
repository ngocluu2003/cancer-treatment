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
        <h2 className="mb-12 text-center text-3xl font-bold text-blue-600">
          Key Features
        </h2>
        <Features />
      </div>
      <div className="mb-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-blue-600">
          What Our Users Say
        </h2>
        <Testimonials />
      </div>
      <div className="mb-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-blue-600">
          How It Works
        </h2>
        <HowItWorks />
      </div>
      <div className="rounded-lg bg-blue-600 p-8 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">
          Ready to Simplify Your Scheduling?
        </h2>
        <p className="mb-6 text-xl">
          Join thousands of professionals who trust schedullr for efficient time
          management.
        </p>
        <Link to={"/dashboard"}>
          <Button size="lg" variant="secondary" className="text-blue-600">
            Start For Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
