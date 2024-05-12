import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";

const ControlWrap = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  display: flex;
  gap: 15px;
`;

const BookItem = ({ onOpen, book, onOpenOrderForm }) => {
  const { pathname } = useLocation();
  console.log("pathname :>> ", pathname);
  return (
    <li key={book._id}>
      {pathname === "/author" ? (
        <ControlWrap>
          <FaRegEdit size={30} onClick={onOpen} />
          <MdDelete size={30} />
        </ControlWrap>
      ) : (
        <ControlWrap>
          <FaBasketShopping size={30} onClick={onOpenOrderForm} />
        </ControlWrap>
      )}
      <img src={book.link} alt={book.title} />
      <div>
        <p className="title">{book.title}</p>
        <p>Мова: {book.lang}</p>
        <p>Сторінки: {book.pages}</p>
      </div>
    </li>
  );
};

export default BookItem;
