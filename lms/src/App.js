import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login/Login";
import Courses from "./components/courses/Courses";
import InstructorDashboard from "./components/Dashboard/Instructor/Dashboard";
import AdminDashboard from "./components/Dashboard/Admin/Dashboard";
import AdminProfile from "./components/Dashboard/Admin/Profile";
import AdminMessage from "./components/Dashboard/Admin/Message";
import AdminCourses from "./components/Dashboard/Admin/Course";
import AdminReview from "./components/Dashboard/Admin/Review";
import AdminQuiz from "./components/Dashboard/Admin/Quiz";
import AdminSettings from "./components/Dashboard/Admin/Settings";
import InstructorProfile from "./components/Dashboard/Instructor/Profile";
import InstructorMessage from "./components/Dashboard/Instructor/Message";
import InstructorWishlist from "./components/Dashboard/Instructor/Wishlist";
import InstructorReview from "./components/Dashboard/Instructor/Review";
import InstructorMyQuiz from "./components/Dashboard/Instructor/MyQuiz";
import InstructorOrderHistory from "./components/Dashboard/Instructor/OrderHistory";
import InstructorCourse from "./components/Dashboard/Instructor/Course";
import InstructorAnnouncements from "./components/Dashboard/Instructor/Announcements";
import InstructorQuizAttempts from "./components/Dashboard/Instructor/QuizAttempts";
import InstructorAssignments from "./components/Dashboard/Instructor/Assignments";
import InstructorSettings from "./components/Dashboard/Instructor/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/dashboard" element={<InstructorDashboard />} />
        <Route
          path="/dashboard/instructor-profile"
          element={<InstructorProfile />}
        />
        <Route
          path="/dashboard/instructor-message"
          element={<InstructorMessage />}
        />
        <Route
          path="/dashboard/instructor-wishlist"
          element={<InstructorWishlist />}
        />
        <Route
          path="/dashboard/instructor-reviews"
          element={<InstructorReview />}
        />
        <Route
          path="/dashboard/instructor-my-quiz"
          element={<InstructorMyQuiz />}
        />
        <Route
          path="/dashboard/instructor-order-history"
          element={<InstructorOrderHistory />}
        />
        <Route
          path="/dashboard/instructor-course"
          element={<InstructorCourse />}
        />
        <Route
          path="/dashboard/instructor-announcements"
          element={<InstructorAnnouncements />}
        />
        <Route
          path="/dashboard/instructor-quiz-attempts"
          element={<InstructorQuizAttempts />}
        />
        <Route
          path="/dashboard/instructor-assignments"
          element={<InstructorAssignments />}
        />
        <Route
          path="/dashboard/instructor-settings"
          element={<InstructorSettings />}
        />
        <Route path="/dashboard/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/dashboard/admin-profile" element={<AdminProfile />} />
        <Route path="/dashboard/admin-message" element={<AdminMessage />} />
        <Route path="/dashboard/admin-courses" element={<AdminCourses />} />
        <Route path="/dashboard/admin-review" element={<AdminReview />} />
        <Route path="/dashboard/admin-quiz" element={<AdminQuiz />} />
        <Route path="/dashboard/admin-settings" element={<AdminSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
