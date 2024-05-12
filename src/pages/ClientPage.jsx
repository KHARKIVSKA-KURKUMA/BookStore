import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BookList from "../components/BookList/BookList";
import HeaderAuth from "../components/Header/HeaderAuth";
import { getUserRole } from "../store/auth/authSelectors";
import { getBooks } from "../store/books/booksSelector";
import { getBooksThunk } from "../store/books/booksThunks";

const ClientPage = () => {
  const role = useSelector(getUserRole);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const redirectPath = determineRedirectPath(role);
    if (redirectPath) {
      navigate(redirectPath);
    }
    dispatch(getBooksThunk());
  }, [role, navigate, dispatch]);
  const books = useSelector(getBooks);

  const determineRedirectPath = (role) => {
    switch (role) {
      case "author":
        return "/author";
      case "client":
        return null;
      default:
        return "/client";
    }
  };

  return (
    <div>
      <HeaderAuth />
      <BookList books={books} />
    </div>
  );
};

export default ClientPage;
