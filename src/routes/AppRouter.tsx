import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const MainLayout = lazy(() => import("@layout/MainLayout"));
const UserProfile = lazy(() => import("@pages/auth/UserProfile"));
import LandingPage from "@pages/LandingPage";
import About from "@pages/About/About";
import Contact from "@pages/Contact/Contact";
import Login from "@pages/auth/Login";
import Cart from "@pages/Cart/Cart";
import WishList from "@pages/WishList";
import ProtectedRoute from "./ProtectedRoute";
import ErrorBoundary from "src/Error/ErrorBoundary";
import ProtectLogin from "./ProtectLogin";

import Loader from "@components/Loader/Loader";
import Checkout from "@pages/checkout/Checkout";
import Categories from "@pages/Categories/Categories";
import PageNotFound from "src/Error/PageNotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <ErrorBoundary>
          <MainLayout />
        </ErrorBoundary>
      </Suspense>
    ),
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/categories/:prefix",
        element: <Categories />,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: `Category ( ${params.prefix} ) not found`,
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "/login",
        element: (
          <ProtectLogin>
            <Login />
          </ProtectLogin>
        ),
      },
      {
        path: "/user-profile/checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/user-profile",
        element: (
          <Suspense fallback={<Loader />}>
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          </Suspense>
        ),
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default AppRouter;
