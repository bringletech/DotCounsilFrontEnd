import { useState } from "react";
import Layout from "./components/ui/Layout";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Employee from "./pages/employee";
import CouponCode from "./pages/CouponCode";
import CourseList from "./pages/CourseList";
import EmailCampaign from "./pages/EmailCampaign";
import Sales from "./pages/Sales";
import Attendance from "./pages/Attendance";
import CreateCourse from "./pages/CreateCourse";
import Login from "./components/Login";
import AdminLogin from "./pages/AdminLogin";
import Analytics from "./pages/Analytics";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <BrowserRouter>
        {isAuthenticated && <Layout />}

        <div
          className={`${
            isAuthenticated
              ? "absolute w-[79%] bg-[#F6F6F6] text-black top-[80px] left-[21%] pr-13 pl-5 pt-5 h-[calc(100vh-80px)] pb-10 overflow-y-auto  [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              : ""
          }`}
        >
          <Routes>
            {/* Public Route (Login) */}
            <Route
              path="/login"
              element={<AdminLogin setIsAuthenticated={setIsAuthenticated} />}
            />

            {/* Protected Routes */}
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/employee"
              element={
                isAuthenticated ? (
                  <Employee />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/analytics"
              element={
                isAuthenticated ? (
                  <Analytics />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/couponcode"
              element={
                isAuthenticated ? (
                  <CouponCode />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/courselist"
              element={
                isAuthenticated ? (
                  <CourseList />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/emailcampaign"
              element={
                isAuthenticated ? (
                  <EmailCampaign />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/sales"
              element={
                isAuthenticated ? <Sales /> : <Navigate to="/login" replace />
              }
            />
            <Route
              path="/attendance"
              element={
                isAuthenticated ? (
                  <Attendance />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/createcourse"
              element={
                isAuthenticated ? (
                  <CreateCourse />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
