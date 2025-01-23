import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../redux/actions/userAction";
import { clearAuthState } from "../../redux/slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.users);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Call API to login the user
    dispatch(loginUserAction(data));
  };

  // useEffect(() => {
  //   dispatch(clearAuthState())
  // }, [dispatch])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="new-email"
              className="w-full px-4 py-2 border rounded-md shadow-sm outline-none"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="new-password"
              className="w-full px-4 py-2 border rounded-md shadow-sm outline-none"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 2,
                  message: "Password must be at least 6 characters",
                },
                //   pattern: {
                //   value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/,
                //   message: "Password must include at least 1 uppercase letter, 1 number, and 1 special character",
                // },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <div>
          <p>
            <Link
              to="/forgot-password"
              className="block mt-2 text-black-600 hover:text-blue-800"
            >
              Forgot Password
            </Link>
          </p>
          <p className="mt-4 text-left text-sm text-gray-600">
            Don't have an account?
            <Link
              to="/register"
              className="pl-2 text-blue-600 hover:text-blue-800"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
