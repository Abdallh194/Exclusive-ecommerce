import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const MainLayout = lazy(() => import("@layout/MainLayout"));
const UserProfile = lazy(() => import("@pages/auth/UserProfile"));
const LandingPage = lazy(() => import("@pages/LandingPage"));
const Login = lazy(() => import("@pages/auth/Login"));
const Cart = lazy(() => import("@pages/Cart/Cart"));
const CategoreisDetails = lazy(
  () => import("@pages/Categories/CategoreisDetails")
);
const WishList = lazy(() => import("@pages/Wishlist/WishList"));

import About from "@pages/About/About";
import Contact from "@pages/Contact/Contact";

import ProtectedRoute from "./ProtectedRoute";
import ErrorBoundary from "src/Error/ErrorBoundary";
import ProtectLogin from "./ProtectLogin";
import Loader from "@components/Loader/Loader";
import Checkout from "@pages/checkout/Checkout";

import PageNotFound from "src/Error/PageNotFound";
import Orders from "@pages/Orders/Orders";
import ProductDetails from "@pages/ProductDetails/ProductDetails";

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
        element: (
          <Suspense fallback={<Loader />}>
            <LandingPage />
          </Suspense>
        ),
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
        element: (
          <Suspense fallback={<Loader />}>
            <CategoreisDetails />
          </Suspense>
        ),
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
        path: "/Products/:prefix",
        element: (
          <Suspense fallback={<Loader />}>
            <ProductDetails />
          </Suspense>
        ),
      },

      {
        path: "/login",
        element: (
          <Suspense fallback={<Loader />}>
            <ProtectLogin>
              <Login />
            </ProtectLogin>
          </Suspense>
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
        path: "/user-profile/My-Orders",
        element: (
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Loader />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <Suspense fallback={<Loader />}>
            <WishList />
          </Suspense>
        ),
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
