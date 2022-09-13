import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import AdminCMS from "./pages/AdminPages/AdminCMS";
import BookDetails from "./pages/BookDetails";
import Books from "./pages/Books";
import Checkout from "./pages/Checkout";
import PageNotFound from "./pages/PageNotFound";
import ShoppingCart from "./pages/ShoppingCart";
import OrderConfirmation from "./pages/OrderConfirmation";
import AddBookAdmin from "./pages/AdminPages/AddBookAdmin";
import UpdateBookAdmin from "./pages/AdminPages/UpdateBookAdmin";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const location = useLocation();
  return (
    <Routes>
      <Ront={<Books />} />
asd
          }
        />
        path='orderconfirmation' element={<OrderConfirmation />} />
      @@@@@
  );
}

export default App;
