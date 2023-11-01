import Main from "./components/Main";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import Courses from "./components/courses/Courses";

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
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
