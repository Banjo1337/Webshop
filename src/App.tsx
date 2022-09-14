import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import AdminCMS from "./pages/AdminCMS";
import BookDetails from "./pages/BookDetails";
import Books from "./pages/Books";
import Checkout from "./pages/Checkout";
import PageNotFound from "./pages/PageNotFound";
import ShoppingCart from "./pages/ShoppingCart";
import OrderConfirmation from "./pages/OrderConfirmation";
import AddBookAdmin from "./components/Admin_Components/AddBookAdmin";
import UpdateBookAdmin from "./components/Admin_Components/UpdateBookAdmin";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const location = useLocation();
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Books />} />
        <Route path='book/:id' element={<BookDetails />} />
        <Route path='shoppingcart' element={<ShoppingCart />} />
        <Route path='admincms' element={<AdminCMS />}>
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
