import Account from ".";
import PrivateRoute from "../../core/guards/PrivateRoute";

const AccountRouter = [
  {
    path: '/account',
    element: <PrivateRoute><Account /></PrivateRoute>
  }
]

export default AccountRouter;