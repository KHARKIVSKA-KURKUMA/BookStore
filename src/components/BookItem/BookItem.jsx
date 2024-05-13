import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import BookForm from "../BookForm/BookForm";
import { useState } from "react";
import OrderForm from "../OrderForm/OrderForm";
import { useDispatch } from "react-redux";
import { deleteBooksThunk } from "../../store/books/booksThunks";

const ControlWrap = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  display: flex;
  gap: 15px;
`;

const BookItem = ({ book }) => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenOrderForm, setIsOpenOrderForm] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    const bookId = book._id;
    dispatch(deleteBooksThunk(bookId));
  };
  return (
    <>
      <li key={book._id}>
        {pathname === "/author" ? (
          <ControlWrap>
            <FaRegEdit size={30} onClick={() => setIsOpen(true)} />
            <MdDelete size={30} onClick={handleDelete} />
          </ControlWrap>
        ) : (
          <ControlWrap>
            <FaBasketShopping
              size={30}
              onClick={() => setIsOpenOrderForm(true)}
            />
          </ControlWrap>
        )}
        <img className="img" src={book.link} alt={book.title} />
        <div>
          <p className="author"> {book.author}</p>
          <p className="title">{book.title}</p>
          <p>Мова: {book.lang}</p>
          <p>Сторінки: {book.pages}</p>
        </div>
      </li>
      {isOpen && <BookForm data={book} onClose={() => setIsOpen(false)} />}
      {isOpenOrderForm && (
        <OrderForm
          bookId={book._id}
          onClose={() => setIsOpenOrderForm(false)}
        />
      )}
    </>
  );
};

export default BookItem;
