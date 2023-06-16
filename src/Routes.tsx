import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const HomepageVOne = React.lazy(() => import("pages/HomepageVOne"));
const Cart = React.lazy(() => import("pages/Cart"));
const CategorieswithSidebar = React.lazy(
  () => import("pages/CategorieswithSidebar")
);
const ProductDetails = React.lazy(() => import("pages/ProductDetails"));
const HomepageVThree = React.lazy(() => import("pages/HomepageVThree"));
const Completed = React.lazy(() => import("pages/Completed"));
const ProductList = React.lazy(() => import("pages/ProductList"));
const HomepageVTwo = React.lazy(() => import("pages/HomepageVTwo"));
const Checkout = React.lazy(() => import("pages/Checkout"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/homepagevtwo" element={<HomepageVTwo />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/homepagevthree" element={<HomepageVThree />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route
            path="/categorieswithsidebar"
            element={<CategorieswithSidebar />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/homepagevone" element={<HomepageVOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
