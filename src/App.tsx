import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import BookDetails from "./pages/BookDetails";
import Books from "./pages/Books";
import Checkout from "./pages/Checkout";
import PageNotFound from "./pages/PageNotFound";
import ShoppingCart from "./pages/ShoppingCart";
import OrderConfirmation from "./pages/OrderConfirmation";
import ErrorBoundary from "./components/ErrorBoundary";
const AdminCMS = lazy(() => import("./pages/AdminCMS"));
const AddBookAdmin = lazy(() => import("./components/Admin_Components/AddBookAdmin"));
const UpdateBookAdmin = lazy(() => import("./components/Admin_Components/UpdateBookAdmin"));

function App() {
  const location = useLocation();
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Books />} />
        <Route path='book/:id' element={<BookDetails />} />
        <Route path='shoppingcart' element={<ShoppingCart />} />
        <Route
          path='admincms'
          element={
            <Suspense>
              <AdminCMS />
            </Suspense>
          }
        >
          <Route
            path='addbookadmin'
            element={
              <ErrorBoundary key={location.pathname}>
                <AddBookAdmin />
              </ErrorBoundary>
            }
          />
          <Route
            path='updatebookadmin'
            element={
              <ErrorBoundary key={location.pathname}>
                <UpdateBookAdmin />
              </ErrorBoundary>
            }
          />
        </Route>
        <Route
          path='checkout'
          element={
            <ErrorBoundary key={location.pathname}>
              <Checkout />
            </ErrorBoundary>
          }
        />
        <Route path='orderconfirmation' element={<OrderConfirmation />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
