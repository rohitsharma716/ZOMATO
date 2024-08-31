import React from "react";
import  ReactDOM  from 'react-dom/client';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body  from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contect from "./components/Contect";
import Profile from "./components/Profile";
import Instamart from "./components/instamart";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import  store  from "./utils/store";
import Cart from "./components/Cart";
//import { IMG_CDN_URL } from "./constant";


const BodyLayout = () => {
  return (
    <Provider store={store}>
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <BodyLayout/>,
    errorElement: <Error/>,
    children:[
    {
      path:'/',
      element: <Body/>
    },
    {
         path:'about',
         element:<About/>,
         children:[
          {
            path:'profile',
            element:<Profile/>
          },
         ],
    },
    {
      path: '/contect',
      element: <Contect/>
    },
    {
      path:"restaurant/:resId",
      element:<RestaurantMenu/>
    },
    {
      path:"/instamart",
      element:<Instamart/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
  ],
  },
  {
    path:"/about",
    element: <About/>,
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< RouterProvider  router={appRouter} />);
