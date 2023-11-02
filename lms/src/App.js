import Main from "./components/Main";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/courses",
      element: <Courses />,
    },
    {
      path: "/dashboard",
      element: <InstructorDashboard />,
    },
    { path: "/dashboard/instructor-profile", element: <InstructorProfile /> },
    { path: "/dashboard/instructor-message", element: <InstructorMessage /> },
    { path: "/dashboard/instructor-wishlist", element: <InstructorWishlist /> },
    { path: "/dashboard/instructor-reviews", element: <InstructorReview /> },
    { path: "/dashboard/instructor-my-quiz", element: <InstructorMyQuiz /> },
    {
      path: "/dashboard/instructor-order-history",
      element: <InstructorOrderHistory />,
    },
    { path: "/dashboard/instructor-course", element: <InstructorCourse /> },
    {
      path: "/dashboard/admin-dashboard",
      element: <AdminDashboard />,
    },
    { path: "/dashboard/admin-profile", element: <AdminProfile /> },
    { path: "/dashboard/admin-message", element: <AdminMessage /> },
    { path: "/dashboard/admin-courses", element: <AdminCourses /> },
    { path: "/dashboard/admin-review", element: <AdminReview /> },
    { path: "/dashboard/admin-quiz", element: <AdminQuiz /> },
    { path: "/dashboard/admin-settings", element: <AdminSettings /> },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
