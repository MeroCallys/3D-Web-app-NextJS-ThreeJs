import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardLedger from "../pages/dashboard/DashboardLedger";
import Inventory from "../pages/Inventory/Inventory";
import Error from "../components/Error";
import DashboardOverview from "../pages/dashboard/DashboardOverview";
import Profiles, {
  loader as profilesLoader,
} from "../pages/dashboard/Profiles";
import DashboardOrders from "../pages/dashboard/DashboardOrders";
import ProfileDetail, {
  loader as profileLoader,
} from "../pages/dashboard/ProfileDetail";
import Details from "../pages/dashboard/Details";
import Pricing from "../pages/dashboard/Pricing";
import OrderHistory from "../pages/dashboard/OrderHistory";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} errorElement={<Error />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="inventory" element={<Inventory />} />
      </Route>
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardOverview />} />
        <Route path="ledgers" element={<DashboardLedger />} />
        <Route path="profiles" element={<Profiles />} loader={profilesLoader} />
        <Route
          path="/dashboard/profiles/:id"
          element={<ProfileDetail />}
          loader={profileLoader}
        >
          <Route index element={<Details />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="orders" element={<OrderHistory />} />
        </Route>
        <Route path="orders" element={<DashboardOrders />} />
      </Route>
    </>
  )
);
