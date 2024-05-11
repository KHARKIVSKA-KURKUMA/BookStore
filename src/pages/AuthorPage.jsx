import styled from "styled-components";
import HeaderAuth from "../components/Header/HeaderAuth";
import AddBook from "../components/AddBook/AddBook";
import BookList from "../components/BookList/BookList";

const Wrap = styled.div``;

const AuthorPage = () => {
  return (
    <Wrap>
      <HeaderAuth />
      <AddBook />
      <BookList />
    </Wrap>
  );
};

export default AuthorPage;
