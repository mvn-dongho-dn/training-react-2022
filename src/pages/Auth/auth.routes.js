import Login from "./Login";
import Register from "./Register";

const AuthRouter = [
  {
    path: '/auth/login',
    element: <Login />
  },
  {
    path: '/auth/register',
    element: <Register />
  }
]

export default AuthRouter;