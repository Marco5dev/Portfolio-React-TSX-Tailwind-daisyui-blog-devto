import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NotFound from "./pages/notFound";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";

function App() {
  axios.defaults.withCredentials = true;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/Profile",
      element: <Profile />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
