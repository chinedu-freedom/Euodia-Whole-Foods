import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import RootLayout from "./Layouts/RootLayout";
import DishDetail from "./Components/DishDetail/DishDetail";
import Cart from "./Components/Cart/Cart";
import Check from "./Components/Check/Check";
import CheckOut from "./Components/CheckOut/CheckOut";
import NotFound from "./Components/NotFound/NotFound";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import ForgotPassword from "./Auth/ResetPassword";
import ResetPassword from "./Auth/ForgotPassword";
import Otp from "./Auth/Otp";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Routes with NavBar/Footer */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="our-menu" element={<Menu />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="dish/:slug" element={<DishDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="check" element={<Check />} />
          <Route path="check-out" element={<CheckOut />} />
          <Route path="not-found" element={<NotFound />} />
        </Route>

        {/* Auth routes without RootLayout (no Nav/Footer) */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ResetPassword />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<Otp />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
