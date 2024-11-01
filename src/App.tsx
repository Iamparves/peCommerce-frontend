import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import "./App.css";
import Layout from "./components/shared/Layout";
import About from "./pages/About";
import Addresses from "./pages/Accounts/Addresses";
import Dashboard from "./pages/Accounts/Dashboard";
import Orders from "./pages/Accounts/Orders";
import Security from "./pages/Accounts/Security";
import Settings from "./pages/Accounts/Settings";
import Blog from "./pages/Blog";
import Brands from "./pages/Brands";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import OrderTracking from "./pages/OrderTracking";
import PageNotFound from "./pages/PageNotFound";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
import SingleBlog from "./pages/SingleBlog";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} index />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:productId" element={<ProductDetails />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="categories" element={<Categories />} />
          <Route path="about" element={<About />} />
          <Route path="brands" element={<Brands />} />
          <Route path="cart" element={<Cart />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:blogSlug" element={<SingleBlog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="order-tracking" element={<OrderTracking />} />
          <Route path="account" element={<MyAccount />}>
            <Route path="" element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="settings" element={<Settings />} />
            <Route path="security" element={<Security />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
