import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteOrdersThunk } from "../../store/orders/ordersThunk";

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
  height: 250px;
  display: flex;
  align-items: center;
  position: relative;
  width: 400px;
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
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteOrdersThunk(order._id));
  };
  return (
    <StyledLi key={order._id}>
      <ControlWrap>
        <FaRegEdit onClick={onOpen} size={30} />
        <MdDelete onClick={handleDelete} size={30} />
      </ControlWrap>
      <OrderInfo>
        <img src={order.book.link} alt={order.book.title} />
        <div>
          <p>
            <strong>Ім'я:</strong> {order.name}
          </p>
          <p>
            <strong>Прізвище:</strong> {order.surname}
          </p>
          <p>
            <strong>Місто:</strong> {order.city}
          </p>
          <p>
            <strong>Країна:</strong> {order.country}
          </p>
          <p>
            <strong>Автор:</strong> {order.book.author}
          </p>
          <p>
            <strong>Назва:</strong> {order.book.title}
          </p>
        </div>
      </OrderInfo>
    </StyledLi>
  );
};

export default OrdersItem;
