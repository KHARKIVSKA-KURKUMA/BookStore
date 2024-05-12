import styled from "styled-components";
import OrdersItem from "../OrdersItem/OrdersItem";
import { useState } from "react";
import OrderForm from "../OrderForm/OrderForm";

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 20px;
`;

const orders = [
  {
    _id: "6641194f37030a7bbede591e",
    name: "Addree",
    surname: "Surname",
    city: "Kharkiv",
    country: "Ukraine",
    bookId: "663f72101006fada121e0785",
    book: {
      author: "Gabriel García Márquez",
      title: "One Hundred Years of Solitude",
      link: "https://bookclub.ua/images/db/goods/60927_120913.jpg",
    },
  },
  {
    _id: "6641194f37030a7bbgede591e",
    name: "Addree",
    surname: "Surname",
    city: "Kharkiv",
    country: "Ukraine",
    bookId: "663f72101006fada121e0785",
    book: {
      author: "Gabriel García Márquez",
      title: "One Hundred Years of Solitude",
      link: "https://bookclub.ua/images/db/goods/60927_120913.jpg",
    },
  },
];

const OrdersList = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledUl>
      {orders.length !== 0 &&
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
        ))}
    </StyledUl>
  );
};

export default OrdersList;
