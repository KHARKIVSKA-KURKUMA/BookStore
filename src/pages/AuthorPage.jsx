import styled from "styled-components";
import HeaderAuth from "../components/Header/HeaderAuth";
import AddBook from "../components/AddBook/AddBook";
import BookList from "../components/BookList/BookList";
import { useState } from "react";
import BookForm from "../components/BookForm/BookForm";

const Wrap = styled.div``;

const AuthorPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrap>
      <HeaderAuth />
      <AddBook onOpen={() => setIsOpen(true)} />
      <BookList />
      {isOpen && <BookForm onClose={() => setIsOpen(false)} />}
    </Wrap>
  );
};

export default AuthorPage;
