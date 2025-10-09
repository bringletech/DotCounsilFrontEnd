import Layout from "./components/ui/Layout";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Employee from "./pages/Employee";
import CouponCode from "./pages/CouponCode";
import CourseList from "./pages/CourseList";
import EmailCampaign from "./pages/EmailCampaign";
import Sales from "./pages/Sales";
import Attendance from "./pages/Attendance";
import CreateCourse from "./pages/CreateCourse";
import Login from "./components/Login";
import AdminLogin from "./pages/AdminLogin";
import Analytics from "./pages/Analytics";
import ProtectedRoute from "./pages/ProtectedRoute";
import UsersTable from "./components/UsersTable";
import Add_Emp_Form from "./components/employee/Add_Emp_Form";
import UCRSales from "./pages/UCRSales";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/couponcode" element={<CouponCode />} />
            <Route path="/courselist" element={<CourseList />} />
            <Route path="/emailcampaign" element={<EmailCampaign />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/ucrsales" element={<UCRSales />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/createcourse" element={<CreateCourse />} />
            <Route path="/userstable" element={<UsersTable />} />
            <Route path="/add-employee" element={<Add_Emp_Form />} />
            <Route index element={<Navigate to="/dashboard" replace />} />
          </Route>
        </Route>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
