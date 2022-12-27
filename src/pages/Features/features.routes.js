import AboutUs from "./AboutUs";
import Home from "./Home";
import ProductDetail from "./ProductDetail";
import Products from "./Products";

const FeaturesRouter = [
  {
    path: '',
    element: <Home />
  },
  {
    path: '/products',
    element: <Products />
  },
  {
    path: '/products/:id',
    element: <ProductDetail />
  },
  {
    path: '/about-us',
    element: <AboutUs />
  }
]

export default FeaturesRouter;