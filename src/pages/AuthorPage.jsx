import styled from "styled-components";
import HeaderAuth from "../components/Header/HeaderAuth";
import AddBook from "../components/AddBook/AddBook";
import BookList from "../components/BookList/BookList";
import { useEffect, useState } from "react";
import BookForm from "../components/BookForm/BookForm";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../store/books/booksSelector";
import { getUserId } from "../store/auth/authSelectors";
import { getPublishedBooksThunk } from "../store/books/booksThunks";

const Wrap = styled.div``;

const AuthorPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const authorId = useSelector(getUserId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPublishedBooksThunk(authorId));
  }, [dispatch, authorId]);
  const books = useSelector(getBooks);
  return (
    <Wrap>
      <HeaderAuth />
      <AddBook onOpen={() => setIsOpen(true)} />
      <BookList books={books} />
      {isOpen && <BookForm onClose={() => setIsOpen(false)} />}
    </Wrap>
  );
};

export default AuthorPage;
