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
