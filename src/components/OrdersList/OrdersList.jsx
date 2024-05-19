import styled from "styled-components";
import OrdersItem from "../OrdersItem/OrdersItem";
import { useState } from "react";
import OrderForm from "../OrderForm/OrderForm";
import NoDataComponent from "../NoDataComponent/NoDataComponent";

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;
`;

const OrdersList = ({ orders }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledUl>
      {orders.length !== 0 ? (
        orders.map((order) => (
          <>
            <OrdersItem
              key={order._id}
              order={order}
              onOpen={() => setIsOpen(true)}
            />
            {isOpen && (
              <OrderForm data={order} onClose={() => setIsOpen(false)} />
            )}
          </>
        ))
      ) : (
        <NoDataComponent />
      )}
    </StyledUl>
  );
};

export default OrdersList;
