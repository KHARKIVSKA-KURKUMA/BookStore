import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { GlobalStyle } from "./GlobalStyles";
import AuthorPage from "./pages/AuthorPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Layout from "./components/Layout/Layout";
import ClientPage from "./pages/ClientPage";
import OrdersPage from "./pages/OrdersPage";
import Restricted from "./components/Routes/Restricted";
import Private from "./components/Routes/Private";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCurrentUser } from "./store/auth/authThunks";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={import.meta.env.DEV ? "/" : "/BookStore/"}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/login"
              element={<Restricted component={SignInPage} to="/client" />}
            />
            <Route
              path="/register"
              element={<Restricted component={SignUpPage} to="/client" />}
            />
            <Route
              path="/author"
              element={<Private component={AuthorPage} to="/login" />}
            />
            <Route
              path="/client"
              element={<Private component={ClientPage} to="/login" />}
            />
            <Route
              path="/client/orders"
              element={<Private component={OrdersPage} to="/login" />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
