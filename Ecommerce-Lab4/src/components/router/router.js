import { Outlet, createBrowserRouter } from "react-router-dom"
import Home from "../../page/home/home"
import ProductDetails from "../../page/productDetails/productDetails"
import NavigationBar from "../navbar/navbar"
import Register from "../../page/register/register"
import Profile from "../user/user"
import NotFound from "../pagenotfound/notfound";
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
              element: <Register/>
            },
            {
              path:"/user",
              element: <Profile/>         }
            ,{
              path:"*",
              element:<NotFound/>
            }
          ],
    }
])