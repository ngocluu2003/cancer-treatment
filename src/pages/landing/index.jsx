import Testimonials from "@/pages/landing/components/Testimonials";
import HowItWorks from "@/pages/landing/components/HowItWorks";
import Features from "@/pages/landing/components/Features";
import Description from "@/pages/landing/components/Description";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="container mx-auto px-6 py-16">
      <Description />
      <div className="mb-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-black dark:text-white md:text-4xl">
          Tính Năng Chính
        </h2>
        <Features />
      </div>
      <div className="mb-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-black dark:text-white md:text-4xl">
          Người Dùng Nói Gì
        </h2>
        <Testimonials />
      </div>
      <div className="mb-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-black dark:text-white md:text-4xl">
          Cách Thức Hoạt Động
        </h2>
        <HowItWorks />
      </div>
      <div className="rounded-lg bg-green-200 p-6 text-center text-gray-800 dark:bg-green-300 dark:text-white sm:p-8 lg:p-10">
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
          Chuyển Đổi Chăm Sóc Bệnh Nhân với AI
        </h2>
        <p className="mb-6 text-lg text-gray-600 dark:text-white/90 sm:text-xl">
          Tham gia cùng vô số chuyên gia y tế sử dụng CanCure để nâng cao
          quản lý bệnh nhân và cải thiện kết quả điều trị.
        </p>

        <Link to={"/dashboard"}>
          <Button
            size="lg"
            variant="secondary"
            className="text-gray-800 dark:text-white/90"
          >
            Bắt Đầu Miễn Phí <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </main>
  );
}