import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import {
  IconAlertCircle,
  IconCircleDashedCheck,
  IconFolder,
  IconHourglassHigh,
  IconUserScan,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

// Dữ liệu metrics
export const useMetricsData = (metrics) => {
  const navigate = useNavigate();
  return [
    {
      title: "Tham Vấn Chuyên Gia Chờ Xử Lý",
      subtitle: "Xem các tham vấn chờ xử lý",
      value: metrics.pendingScreenings,
      icon: IconHourglassHigh,
      onClick: () => navigate("/appointments"),
    },
    {
      title: "Tiến Trình Điều Trị Hiện Tại",
      subtitle: "Tổng quan tiến trình điều trị",
      value: `${metrics.completedScreenings} trong tổng số ${metrics.totalScreenings}`,
      icon: IconCircleDashedCheck,
      onClick: () => navigate("/treatment-progress"),
    },
    {
      title: "Tổng Số Hồ Sơ Bệnh Nhân",
      subtitle: "Truy cập hồ sơ bệnh nhân",
      value: metrics.totalFolders,
      icon: IconFolder,
      onClick: () => navigate("/medical-records"),
    },
    {
      title: "Tổng Số Lượt Sàng Lọc Đã Thực Hiện",
      subtitle: "Tổng số lượt sàng lọc",
      value: metrics.totalScreenings,
      icon: IconUserScan,
      onClick: () => navigate("/screenings"),
    },
    {
      title: "Tổng Kết Lượt Sàng Lọc Hoàn Thành",
      subtitle: "Xem lại các lượt sàng lọc hoàn thành",
      value: metrics.completedScreenings,
      icon: IconCircleDashedCheck,
      onClick: () => navigate("/screenings"),
    },
    {
      title: "Sàng Lọc Chờ Xem Xét",
      subtitle: "Chờ xem xét",
      value: metrics.pendingScreenings,
      icon: IconHourglassHigh,
      onClick: () => navigate("/screenings"),
    },
    {
      title: "Sàng Lọc Quá Hạn Cần Hành Động",
      subtitle: "Cần hành động ngay",
      value: metrics.overdueScreenings,
      icon: IconAlertCircle,
      onClick: () => navigate("/screenings"),
    },
    {
      title: "Sàng Lọc Sắp Tới Được Lên Lịch",
      subtitle: "Các cuộc hẹn sắp tới",
      value: metrics.upcomingScreenings,
      icon: IconHourglassHigh,
      onClick: () => navigate("/screenings"),
    },
    {
      title: "Các Nhiệm Vụ Đang Giám Sát",
      subtitle: "Các nhiệm vụ giám sát",
      value: metrics.monitoringTasks,
      icon: IconAlertCircle,
      onClick: () => navigate("/monitoring"),
    },
    {
      title: "Các Cuộc Hẹn Theo Dõi Cần Thiết",
      subtitle: "Các cuộc hẹn theo dõi",
      value: metrics.followUpsRequired,
      icon: IconAlertCircle,
      onClick: () => navigate("/appointments"),
    },
  ];
};

// Cấu trúc dữ liệu prompt
export const promptDataStructure = ({ analysisResult }) => {
  const prompt = `Vai trò của bạn là phát triển một kế hoạch điều trị toàn diện dựa trên kết quả phân tích được cung cấp: ${analysisResult}. Kế hoạch điều trị cần bao gồm các cột sau:

  - To Do: Khởi tạo các nhiệm vụ thiết yếu đối với sự chăm sóc của bệnh nhân.
  - In Progress: Giám sát các nhiệm vụ đang tiến hành, đảm bảo tuân thủ các quy trình điều trị đã thiết lập.
  - Completed: Ghi chép các nhiệm vụ đã hoàn thành và không còn hoạt động.
  - Follow-Up: Đưa ra các nhiệm vụ cần thực hiện trong tương lai sau giai đoạn điều trị ban đầu.
  - Monitoring: Thực hiện quan sát và đánh giá liên tục quan trọng để bảo vệ an toàn của bệnh nhân và hiệu quả của kế hoạch điều trị.
  - Overdue: Xác định các nhiệm vụ đã quá hạn và cần được xử lý ngay lập tức.
  - Upcoming: Nêu bật các nhiệm vụ sắp tới để đảm bảo quản lý chủ động và liên tục trong chăm sóc.

  Mỗi nhiệm vụ phải bao gồm một mô tả chính xác liên quan đến quá trình điều trị của bệnh nhân, được phân loại chính xác theo trạng thái hiện tại của nó.

  Hãy đảm bảo rằng đầu ra tuân theo cấu trúc dưới đây để tích hợp dễ dàng vào giao diện người dùng. Chuỗi JSON phải hợp lệ và không có dấu ngoặc kép, chỉ là cấu trúc thuần túy dưới đây:

  {
    "columns": [
      { "id": "todo", "title": "To Do" },
      { "id": "doing", "title": "In Progress" },
      { "id": "done", "title": "Completed" },
      { "id": "followup", "title": "Follow-Up" },
      { "id": "monitoring", "title": "Monitoring" },
      { "id": "overdue", "title": "Overdue" },
      { "id": "upcoming", "title": "Upcoming" }
    ],
    "tasks": [
      { "id": "1", "columnId": "todo", "content": "Thực hiện đánh giá bệnh nhân toàn diện, bao gồm lịch sử và kiểm tra thể chất chi tiết." },
      { "id": "2", "columnId": "todo", "content": "Đặt các xét nghiệm cần thiết và chẩn đoán hình ảnh để hỗ trợ chẩn đoán chính xác." },
      { "id": "3", "columnId": "doing", "content": "Cung cấp các liệu pháp dược phẩm đã kê đơn trong khi theo dõi các phản ứng của bệnh nhân." },
      { "id": "4", "columnId": "doing", "content": "Tổ chức các buổi giáo dục cho bệnh nhân về các quy trình điều trị và kết quả dự kiến." },
      { "id": "5", "columnId": "done", "content": "Hoàn tất kế hoạch xuất viện, đảm bảo tất cả các cuộc hẹn theo dõi được lên lịch đầy đủ." },
      { "id": "6", "columnId": "followup", "content": "Lên lịch một buổi khám lại để đánh giá hiệu quả và điều chỉnh kế hoạch điều trị nếu cần." },
      { "id": "7", "columnId": "followup", "content": "Xem lại kết quả xét nghiệm chi tiết và điều chỉnh chế độ điều trị khi cần thiết." },
      { "id": "8", "columnId": "monitoring", "content": "Theo dõi liên tục dấu hiệu sinh tồn, ghi chép các sự thay đổi ngoài dự đoán." },
      { "id": "9", "columnId": "monitoring", "content": "Đánh giá và ghi chép các phản ứng phụ của thuốc, báo cáo nhanh chóng cho nhóm y tế." },
      { "id": "10", "columnId": "overdue", "content": "Đánh giá lại các xét nghiệm bị trễ cần được giải quyết ngay." },
      { "id": "11", "columnId": "overdue", "content": "Theo dõi các đơn thuốc đã quá hạn, đảm bảo sự tuân thủ của bệnh nhân." },
      { "id": "12", "columnId": "upcoming", "content": "Lên kế hoạch và lên lịch cuộc hẹn khám lại cho bệnh nhân để thảo luận về điều trị tiếp theo." },
      { "id": "13", "columnId": "upcoming", "content": "Chuẩn bị cho các xét nghiệm hình ảnh tiếp theo cần thiết cho các đánh giá chẩn đoán thêm." }
    ]
  }
  `;

  return prompt;
};

// Kiểm tra xem chuỗi có phải là JSON không
export function isJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (error) {
    return false;
  }
}

// Kết hợp các lớp CSS
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
