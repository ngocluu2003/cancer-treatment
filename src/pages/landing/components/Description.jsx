import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Description = () => {
  return (
    <div className="mb-24 flex flex-col items-center justify-between gap-12 lg:flex-row">
      <div className="lg:w-1/2">
        <h1 className="gradient-title pb-6 text-4xl font-extrabold text-gray-900 dark:text-gray-100 md:text-5xl lg:text-6xl">
          Chuyển Đổi Chăm Sóc Bệnh Nhân Với AI
        </h1>
        <p className="mb-10 text-lg text-gray-600 dark:text-gray-400 md:text-xl">
          Tận dụng nền tảng của chúng tôi để hợp lý hóa hồ sơ bệnh nhân, nâng cao theo dõi điều trị và tự động hóa các cuộc hẹn tái khám—tất cả đều được hỗ trợ bởi công nghệ AI tiên tiến.
        </p>
        <Link to={"/dashboard"}>
          <Button size="lg" className="text-lg">
            Bắt Đầu <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
      <div className="flex justify-center lg:w-1/2">
        <div className="relative aspect-square w-full max-w-md">
          <img
            alt="minh họa chăm sóc y tế"
            src="/medical-care.svg"
            className="rounded-lg object-cover" //
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
