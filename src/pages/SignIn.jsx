import React from "react";
import Header from "./landing/components/Header";
import { SignIn as ClerkSignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import LoadingSpinner from "@/components/LoadingSpinner";

const MainPage = () => {
  const navigate = useNavigate();
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <LoadingSpinner />;
  }

  if (isLoaded && user) {
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-[#0D1117] dark:to-[#161C22]">
      <Header />

      {/* Phần Đăng Nhập */}
      <main className="flex items-center justify-center px-4 py-16 sm:px-8 md:px-16">
        <div className="grid w-full max-w-6xl grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Bên Trái: Mô Tả */}
          <div className="mx-auto flex flex-col justify-center space-y-6 text-center lg:max-w-lg lg:text-left">
            <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white">
              Chào Mừng Đến Với Nền Tảng Của Chúng Tôi
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Đăng nhập để truy cập bảng điều khiển cá nhân của bạn và các kế hoạch điều trị do AI hỗ trợ. Hành trình chăm sóc sức khỏe của bạn bắt đầu từ đây.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button
                onClick={() => navigate("/sign-up")}
                className="text-md inline-block font-semibold text-green-600 transition-all duration-300 hover:text-green-800 dark:text-green-400 dark:hover:text-green-600"
              >
                Chưa có tài khoản?{" "}
                <span className="hover:underline">Đăng ký ngay.</span>
              </button>
            </div>
          </div>

          {/* Bên Phải: Thành Phần Đăng Nhập */}
          <div className="flex items-center justify-center p-6">
            <ClerkSignIn
              appearance={{
                elements: {
                  footer: "hidden",
                },
              }}
              signUpForceRedirectUrl="/dashboard"
              signUpFallbackRedirectUrl="/dashboard"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-100 py-8 dark:bg-[#0D1117]">
        <div className="container mx-auto px-4 text-center text-black dark:text-white">
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
