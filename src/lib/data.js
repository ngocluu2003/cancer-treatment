import {
  Calendar,
  Stethoscope,
  Activity,
  BarChart3,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export const navLinks = [
  {
    name: "bảng điều khiển",
    imageUrl: "/apps.svg",
    link: "/dashboard",
  },
  {
    name: "hồ sơ",
    imageUrl: "/records.svg",
    link: "/medical-records",
  },
  {
    name: "lịch khám",
    imageUrl: "/screening.svg",
    link: "/screening-schedules",
  },
  {
    name: "hồ sơ cá nhân",
    imageUrl: "/user.svg",
    link: "/profile",
  },
  { name: "Trang Chủ", imageUrl: "/home.svg", link: "/" },
];

export const features = [
  {
    icon: Calendar,
    title: "Chẩn Đoán Nâng Cao",
    description:
      "Sử dụng AI để hỗ trợ chẩn đoán bệnh với độ chính xác cao.",
  },
  {
    icon: Stethoscope,
    title: "Giám Sát Triệu Chứng",
    description:
      "Theo dõi và phân tích triệu chứng của bệnh nhân theo thời gian thực để can thiệp kịp thời.",
  },
  {
    icon: Activity,
    title: "Kế Hoạch Điều Trị Cá Nhân",
    description:
      "Tạo ra các kế hoạch điều trị tùy chỉnh sử dụng AI dựa trên dữ liệu bệnh nhân.",
  },
  {
    icon: BarChart3,
    title: "Thông Tin Sức Khỏe Dự Báo",
    description:
      "Sử dụng AI để dự đoán các rủi ro sức khỏe tiềm ẩn và đề xuất các biện pháp phòng ngừa.",
  },
  {
    icon: MessageCircle,
    title: "Trợ Lý Sức Khỏe Ảo",
    description: "Cung cấp hướng dẫn và hỗ trợ sức khỏe dựa trên AI cho bệnh nhân.",
  },
  {
    icon: ShieldCheck,
    title: "Bảo Mật Dữ Liệu & Tuân Thủ",
    description:
      "Đảm bảo dữ liệu bệnh nhân được bảo vệ với các giải pháp AI an toàn và tuân thủ.",
  },
];

export const howItWorks = [
  {
    step: "Đăng Ký",
    description:
      "Tạo tài khoản miễn phí để truy cập các công cụ điều trị y tế dựa trên AI.",
  },
  {
    step: "Hướng Dẫn",
    description:
      "Hoàn thành quy trình hướng dẫn để thiết lập hồ sơ và tùy chọn của bạn.",
  },
  {
    step: "Tải Lên Báo Cáo Y Tế",
    description:
      "Dễ dàng tải lên và tổ chức các báo cáo y tế của bệnh nhân để phân tích.",
  },
  {
    step: "Nhận Điều Trị Cá Nhân",
    description:
      "Nhận các kế hoạch điều trị cá nhân hóa được tạo ra bởi AI phù hợp với nhu cầu cá nhân.",
  },
];

export const testimonials = [
  {
    name: "Bác sĩ Sarah Johnson",
    role: "Bác sĩ Ung Bướu",
    content:
      "CanCure AI đã cách mạng hóa việc chăm sóc bệnh nhân trong thực hành của tôi. Các khuyến nghị điều trị cá nhân hóa giúp tôi tiết kiệm thời gian và cung cấp cho bệnh nhân các lộ trình chăm sóc tối ưu.",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "David Lee",
    role: "Nhà Khoa Học Nghiên Cứu Y Tế",
    content:
      "Với CanCure AI, tôi có thể phân tích dữ liệu bệnh nhân nhanh chóng và chính xác hơn. Các thông tin chi tiết dựa trên AI là vô giá cho việc phát triển các kế hoạch điều trị mục tiêu.",
    image: "https://i.pravatar.cc/150?img=6",
  },
  {
    name: "Emily Chen",
    role: "Quản Trị Viên Chăm Sóc Sức Khỏe",
    content:
      "CanCure AI đơn giản hóa việc quản lý dữ liệu bệnh nhân và lên lịch hẹn. Quy trình làm việc được tối ưu hóa đã cải thiện sự tham gia của bệnh nhân và chất lượng chăm sóc tại cơ sở của chúng tôi.",
    image: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Bác sĩ Michael Brown",
    role: "Bác sĩ Thần Kinh",
    content:
      "Các khuyến nghị từ CanCure AI cho phép tôi cung cấp các điều trị tùy chỉnh cho bệnh nhân của mình. Đây là một bước đột phá cho y học chính xác.",
    image: "https://i.pravatar.cc/150?img=8",
  },
];
