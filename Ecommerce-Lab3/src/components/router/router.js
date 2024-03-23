import { Outlet, createBrowserRouter } from "react-router-dom"
import Home from "../../page/home/home";
import ProductDetails from '../../page/productDetails/productDetails'
import NavigationBar from "../navbar/navbar";
import RegisterForm from "../../page/register/register";
import NotFound from "../components/NotFound/NotFound";

function Layout() {
    return (
      <>
        <NavigationBar />
        <Outlet />
      </>
    );
  }

export const router = createBrowserRouter([
    {
        element: <Layout></Layout>,
        children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path:"/products/:productID",
              element: <ProductDetails/>
            },
            {
              path:"/register",
              element: <RegisterForm/>
            },
           {
              path: "*",
              element: <NotFound />,
            },
          ],
    }
])
