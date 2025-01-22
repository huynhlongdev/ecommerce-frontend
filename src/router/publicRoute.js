import ForgotPassword from "../views/Auth/ForgotPassword";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
import ResetPassword from "../views/Auth/ResetPassword";
const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
];

export default publicRoutes;
