import { useDispatch, useSelector } from "react-redux";
import HeaderAuth from "../components/Header/HeaderAuth";
import OrdersList from "../components/OrdersList/OrdersList";
import { getOrdersThunk } from "../store/orders/ordersThunk";
import { useEffect } from "react";
import { getOrders } from "../store/orders/ordersSelectors";

const OrdersPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrdersThunk());
  }, [dispatch]);
  const orders = useSelector(getOrders);
  return (
    <div>
      <HeaderAuth />
      <OrdersList orders={orders} />
    </div>
  );
};

export default OrdersPage;
