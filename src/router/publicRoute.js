import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

export default publicRoutes;
