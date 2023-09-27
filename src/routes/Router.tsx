import {
  BrowserRouter,
  Navigate,
  //   Outlet,
  Route,
  Routes,
  //   useNavigate,
} from "react-router-dom";
import OrderDetails from "../pages/OrderDetails";
import AppLayout from "../layouts/AppLayout";
import Order from "../pages/Order";
import Home from "../pages/Home";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="orders">
              {/* element={<OrderDetails />} */}
              <Route index element={<Order />} />
              <Route path=":orderId" element={<OrderDetails />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/orders/32457ABC" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
