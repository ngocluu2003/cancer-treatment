import {
  IconAlertCircle,
  IconCircleDashedCheck,
  IconFolder,
  IconHourglassHigh,
  IconUserScan,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export const useMetricsData = (metrics) => {
  const navigate = useNavigate();
  return [
    {
      title: "Pending Specialist Consultations",
      subtitle: "View Pending",
      value: metrics.pendingScreenings,
      icon: IconHourglassHigh,
      onClick: () => navigate("/appointments/pending"),
    },
    {
      title: "Current Treatment Progress",
      subtitle: "Progress Overview",
      value: `${metrics.completedScreenings} of ${metrics.totalScreenings}`,
      icon: IconCircleDashedCheck,
      onClick: () => navigate("/treatment/progress"),
    },
    {
      title: "Total Patient Records",
      subtitle: "Access Records",
      value: metrics.totalFolders,
      icon: IconFolder,
      onClick: () => navigate("/folders"),
    },
    {
      title: "Overall Screenings Conducted",
      subtitle: "Total Screenings",
      value: metrics.totalScreenings,
      icon: IconUserScan,
      onClick: () => navigate("/screenings"),
    },
    {
      title: "Completed Screenings Summary",
      subtitle: "Review Completed",
      value: metrics.completedScreenings,
      icon: IconCircleDashedCheck,
      onClick: () => navigate("/screenings/completed"),
    },
    {
      title: "Pending Screenings for Review",
      subtitle: "Awaiting Review",
      value: metrics.pendingScreenings,
      icon: IconHourglassHigh,
      onClick: () => navigate("/screenings/pending"),
    },
    {
      title: "Overdue Screenings Needing Action",
      subtitle: "Action Required",
      value: metrics.overdueScreenings,
      icon: IconAlertCircle,
      onClick: () => navigate("/screenings/overdue"),
    },
    {
      title: "Upcoming Screenings Scheduled",
      subtitle: "Upcoming Appointments",
      value: metrics.upcomingScreenings,
      icon: IconHourglassHigh,
      onClick: () => navigate("/screenings/upcoming"),
    },
    {
      title: "Monitoring Tasks in Progress",
      subtitle: "Monitoring Tasks",
      value: metrics.monitoringTasks,
      icon: IconAlertCircle,
      onClick: () => navigate("/monitoring"),
    },
    {
      title: "Follow-up Appointments Required",
      subtitle: "Required Follow-ups",
      value: metrics.followUpsRequired,
      icon: IconAlertCircle,
      onClick: () => navigate("/appointments/follow-ups"),
    },
  ];
};
