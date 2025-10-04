// side bar data
import {
  User,
  Settings,
  Mail,
  Ticket,
  ShoppingCart,
  Calendar,
} from "lucide-react";
import { AiFillDashboard } from "react-icons/ai";
import { FaList } from "react-icons/fa";
export const menuItems = [
  { icon: AiFillDashboard, label: "Dashboard", link: "/dashboard" },
  { icon: User, label: "Employees", link: "/employee" },
  { icon: FaList, label: "Course List", link: "/courselist" },
  { icon: User, label: "Users", link: "/userstable" },

  { icon: Settings, label: "Analytics", link: "/analytics" },
  // { icon: Ticket, label: "Coupon Code", link: "/couponcode" },
  // { icon: ShoppingCart, label: "Sales", link: "/sales" },
  // { icon: Calendar, label: "My Attendance", link: "/attendance" },
];

// export const dummyCourses = [
//   {
//     id: 1,
//     image: "./courseCardImg.png",
//     title: "React Basics",
//     description: "Learn React from scratch with hands-on examples.",
//     writer: "John Doe",
//     price: 50,
//     modules: 5,
//     videos: 20,
//     quizzes: 3,
//   },
//   {
//     id: 2,
//     image: "./courseCardImg.png",
//     title: "Advanced React",
//     description:
//       "Dive deep into hooks, context, and performance optimizations.",
//     writer: "Jane Smith",
//     price: 75,
//     modules: 8,
//     videos: 30,
//     quizzes: 5,
//   },
//   {
//     id: 3,
//     image: "./courseCardImg.png",
//     title: "Node.js & Express",
//     description:
//       "Build scalable backend applications using Node.js and Express.",
//     writer: "Alice Johnson",
//     price: 60,
//     modules: 6,
//     videos: 25,
//     quizzes: 4,
//   },
//   {
//     id: 4,
//     image: "./courseCardImg.png",
//     title: "MongoDB Essentials",
//     description: "Master MongoDB and integrate it with your applications.",
//     writer: "Bob Lee",
//     price: 40,
//     modules: 4,
//     videos: 15,
//     quizzes: 2,
//   },
// ];

// charts data
export const coursesData = [
  {
    name: "React Fundamental",

    data: [1200, 1500, 1700, 2000, 1800, 2200, 2500],
  },
  {
    name: "Adv. Java",

    data: [800, 1200, 1400, 1600, 1800, 2000, 2300],
  },
  {
    name: "UI/UX Design",

    data: [500, 900, 1300, 1500, 1700, 1900, 2100],
  },
];

export const RevenueData = [
  {
    name: "Revenue",

    data: [1200, 1500, 1700, 2000, 1800, 2200, 2500],
  },
  {
    name: "Projected",

    data: [800, 1200, 1400, 1600, 1800, 2000, 2300],
  },
  {
    name: "Enrollments",

    data: [500, 900, 1300, 1500, 1700, 1900, 2100],
  },
];

const colors = ["#1E40AF", "#30C93B", "#E2C044"];

export const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
  datasets: coursesData.map((c, idx) => ({
    label: c.name,
    data: c.data,
    backgroundColor: colors[idx],
    barThickness: 8,
    barPercentage: 1,
    categoryPercentage: 0.1,
    borderRadius: [6, 6, 6, 6],
    maxBarThickness: 21,
  })),
};

export const RevenueBarData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
  datasets: RevenueData.map((c, idx) => ({
    label: c.name,
    data: c.data,
    backgroundColor: colors[idx],
    barThickness: 8,
    barPercentage: 1,
    categoryPercentage: 0.1,
    borderRadius: [6, 6, 6, 6],
    maxBarThickness: 21,
  })),
};
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "70%",
  layout: {
    padding: {
      top: 20, // upar gap
      bottom: 10,
    },
  },
  plugins: {
    legend: {
      position: "top",
      labels: {
        boxWidth: 12, // 👈 color box width
        boxHeight: 12, // 👈 color box height

        padding: 8, // 👈 text aur box ke beech space
        font: {
          size: 12, // 👈 text
        },
      },
    },
  },
};

export const progressBarOptions = {
  ...options,
  indexAxis: "y",
  scales: {
    x: {
      min: 0,
      max: 3000, // max value set karni hai
      display: false, // x-axis ke numbers hide
    },
    y: {
      ticks: { font: { size: 14 }, padding: 50 }, // course names dikhe y-axis pe
      display: false,
      offset: true,
    },
  },
};

export const doughnutData = {
  labels: ["enrollment", "new users", "new employees"],
  datasets: [
    {
      data: [55, 25, 20],
      backgroundColor: ["#1E40AF", "#30C93B", "#E2C044"], // blue, green,yellow
    },
  ],
};

export const lineData = {
  labels: ["day 5", "day 10", "day 15", "day 20", "day 25"],
  datasets: [
    {
      label: "Sales",
      data: [10, 20, 15, 30, 25],
      borderColor: "rgb(59,130,246)", // blue-500
      backgroundColor: "rgba(59,130,246,0.4)",
      fill: true,
      borderWidth: 1.5, //sleek line
      pointRadius: 2, //small points
      tension: 0.4,
    },
  ],
};

const ProgColors = ["#1E40AF", "#30C93B", "#E2C044"];
const courses = ["React Fundamental", "Advanced Java", "UI/UX Design"];
const values = [2500, 2000, 1800];

export const progressBarData = {
  labels: ["React Fundamental", "Advanced Java", "UI/UX Design"], // y-axis pe ye dikhega
  datasets: courses.map((c, idx) => ({
    label: c,
    data: [values[idx]], // har ek course ki value
    backgroundColor: ProgColors[idx], // alag-alag color
    borderRadius: 6,
    maxBarThickness: 12, // mota bar
    categoryPercentage: 1.4,
    barPercentage: 0.8,
  })),
};

//analysis page conversion funnel progress bar data
const convColors = ["#1E40AF", "#30C93B", "#E2C044"];
const convAry = ["Leads", "Signup", "Enrollments"];
const convValues = [2500, 2000, 1800];

export const convProgressBarData = {
  labels: ["leads", "signup", "enrollments"], // y-axis pe ye dikhega
  datasets: convAry.map((c, idx) => ({
    label: c,
    data: [convValues[idx]], // har ek course ki value
    backgroundColor: convColors[idx], // alag-alag color
    borderRadius: 6,
    maxBarThickness: 12, // mota bar
    categoryPercentage: 1.4,
    barPercentage: 0.8,
  })),
};

//dash-card-data
import { FaUser } from "react-icons/fa";
import { VscVmActive } from "react-icons/vsc";
import { GiGraduateCap } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";

export const cardDetail = [
  {
    // digits:2000,
    title: "Total Users",
    icon: FaUser,
    iconClass: "w-6 h-6 text-blue-500",
  },
  {
    // digits:2000,
    title: "Total Employees",
    icon: VscVmActive,
    iconClass: "w-6 h-6 text-blue-500",
  },
  {
    // digits:2000,
    title: "Total Courses",
    icon: GiGraduateCap,
    iconClass: "w-6 h-6 text-blue-500",
  },
  {
    // digits:2000,
    title: "Revenue",
    icon: FaUserCircle,
    iconClass: "w-6 h-6 text-blue-500",
  },
];

export const AnalyticscardDetail = [
  {
    // digits:2000,
    title: "Total Revenue",
    icon: FaUser,
    iconClass: "w-6 h-6 text-blue-500",
  },
  {
    // digits:2000,
    title: "Total Enrollment",
    icon: VscVmActive,
    iconClass: "w-6 h-6 text-blue-500",
  },
  {
    // digits:2000,
    title: "Completion Rate",
    icon: GiGraduateCap,
    iconClass: "w-6 h-6 text-blue-500",
  },
  {
    // digits:2000,
    title: " Avg Revenue User",
    icon: FaUserCircle,
    iconClass: "w-6 h-6 text-blue-500",
  },
];
