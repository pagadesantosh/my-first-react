import React, { Children, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import RestraurantMenu from "./components/RestraurantMenu";
import Shimmer from "./components/Shimmer";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


//Chunking
//Code splitting
//Dynamic Bundling
//Lazy Loading
//On Demad Loading
//Dynamic Import

const InstaMart = lazy(() => import("./components/InstaMart"));

// Upon on demad loading  -> upon render -> suspend loading

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* <Body /> */}
      <Outlet />
      {/* All the Children loan into outlet */}
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
        children: [
          {
            path: "Profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Restraurant/:id",
        element: <RestraurantMenu />,
      },
      {
        path: "/InstaMart",
        element: (
          <Suspense fallback={ <Shimmer/>}>
             <InstaMart/>
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
