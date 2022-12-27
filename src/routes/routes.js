import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AccountRouter from "../pages/Account/account.routes";
import AuthRouter from "../pages/Auth/auth.routes";
import FeaturesRouter from "../pages/Features/features.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [...FeaturesRouter, ...AuthRouter, ...AccountRouter],
  }
]);

export default router;