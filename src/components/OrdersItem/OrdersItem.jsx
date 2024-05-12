import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import styled from "styled-components";

const ControlWrap = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  display: flex;
  gap: 15px;
`;

const StyledLi = styled.li`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 30px 20px 20px;
  height: 200px;
  display: flex;
  align-items: center;
  position: relative;
`;

const OrderInfo = styled.div`
  font-size: 16px;
  display: flex;
  gap: 10px;
  align-items: center;
  img {
    width: 120px;
  }
`;

const OrdersItem = ({ order, onOpen }) => {
  return (
    <StyledLi key={order._id}>
      <ControlWrap>
        <FaRegEdit onClick={onOpen} size={30} />
        <MdDelete size={30} />
      </ControlWrap>
      <OrderInfo>
        <img src={order.book.link} alt={order.book.title} />
        <div>
          <p>
            <strong>Name:</strong> {order.name}
          </p>
          <p>
            <strong>Surname:</strong> {order.surname}
          </p>
          <p>
            <strong>City:</strong> {order.city}
          </p>
          <p>
            <strong>Country:</strong> {order.country}
          </p>
          <p>
            <strong>Book Author:</strong> {order.book.author}
          </p>
          <p>
            <strong>Book Title:</strong> {order.book.title}
          </p>
        </div>
      </OrderInfo>
    </StyledLi>
  );
};

export default OrdersItem;
