import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import DashboardLayout from "../components/layout/DashboardLayout";
import DashboardLedger from "../pages/dashboard/ledger/DashboardLedger";
import Inventory from "../pages/Inventory/Inventory";
import Error from "../components/errors/Error";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardOverview from "../pages/dashboard/overview/DashboardOverview";
import Profiles, {
  loader as profilesLoader,
} from "../pages/dashboard/profiles/Profiles";
import DashboardOrders from "../pages/dashboard/orders/DashboardOrders";
import ProfileDetail, {
  loader as profileLoader,
} from "../pages/dashboard/profileDetail/ProfileDetail";

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
        <Route index element={<Dashboard />} />
        <Route path="overview" element={<DashboardOverview />} />
        <Route path="ledgers" element={<DashboardLedger />} />
        <Route path="profiles" element={<Profiles />} loader={profilesLoader} />
        <Route
          path="/dashboard/profiles/:id"
          element={<ProfileDetail />}
          loader={profileLoader}
        />
        <Route path="orders" element={<DashboardOrders />} />
      </Route>
    </>
  )
);
