import styled from "styled-components";
import BookItem from "../BookItem/BookItem";
import { useState } from "react";
import BookForm from "../BookForm/BookForm";
import OrderForm from "../OrderForm/OrderForm";

const books = [
  {
    _id: "663f6923681c2e200135f9f0",
    author: "Chinua Achebe",
    lang: "en",
    pages: 209,
    title: "Things Fall Apart",
    link: "https://m.media-amazon.com/images/I/91NtvTU0xEL._AC_UF1000,1000_QL80_.jpg",
    owner: "663f622172dde3ac3d3aa626",
  },
];
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
  }
  .title {
    font-weight: 700;
  }
  img {
    width: 140px;
    margin-right: 20px;
  }
  p {
    margin: 0;
    font-size: 18px;
  }
`;

const BookList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenOrderForm, setIsOpenOrderForm] = useState(false);

  return (
    <List>
      <ul>
        {books.length !== 0 &&
          books.map((book) => (
            <>
              <BookItem
                key={book._id}
                book={book}
                onOpen={() => setIsOpen(true)}
                onOpenOrderForm={() => setIsOpenOrderForm(true)}
              />
              {isOpen && (
                <BookForm data={book} onClose={() => setIsOpen(false)} />
              )}
              {isOpenOrderForm && (
                <OrderForm
                  bookId={book._id}
                  onClose={() => setIsOpenOrderForm(false)}
                />
              )}
            </>
          ))}
      </ul>
    </List>
  );
};

export default BookList;
