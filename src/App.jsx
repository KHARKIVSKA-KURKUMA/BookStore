import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { GlobalStyle } from "./GlobalStyles";
import AuthorPage from "./pages/AuthorPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Layout from "./components/Layout/Layout";
import ClientPage from "./pages/ClientPage";
import OrdersPage from "./pages/OrdersPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={import.meta.env.DEV ? "/" : "/BookStore/"}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/author" element={<AuthorPage />} />
            <Route path="/client" element={<ClientPage />} />
            <Route path="/client/orders" element={<OrdersPage />} />
            <Route path="/login" element={<SignInPage />} />
            <Route path="/register" element={<SignUpPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
