import styled from "styled-components";
import BookItem from "../BookItem/BookItem";
import NoDataComponent from "../NoDataComponent/NoDataComponent";

const List = styled.div`
  margin-top: 20px;
  ul {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
  li {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    padding: 50px 20px 20px;
    border-radius: 10px;
    width: 365px;
  }
  .title {
    font-weight: 700;
    color: #3c5b6f;
  }
  .author {
    font-weight: 700;
  }
  .img {
    width: 140px;
    margin-right: 20px;
  }
  p {
    margin: 0;
    font-size: 18px;
  }
`;

const BookList = ({ books }) => {
  return (
    <List>
      <ul>
        {books.length !== 0 ? (
          books.map((book) => <BookItem key={book._id} book={book} />)
        ) : (
          <NoDataComponent />
        )}
      </ul>
    </List>
  );
};

export default BookList;
