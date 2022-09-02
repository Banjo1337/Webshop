import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AdminCMS from "./pages/AdminCMS";
import BookDetails from "./pages/BookDetails";
import Books from "./pages/Books";
import Checkout from "./pages/Checkout";
import PageNotFound from "./pages/PageNotFound";
import ShoppingCart from "./pages/ShoppingCart";
import OrderConfirmation from "./pages/OrderConfirmation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Books />} />
        <Route path="book/:id" element={<BookDetails />} />
        <Route path="shoppingcart" element={<ShoppingCart />} />
        <Route path="admincms" element={<AdminCMS />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="orderconfirmation" element={<OrderConfirmation />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
