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
import Analytics from "../pages/dashboard/DashboardAnalytics";
import Suppliers from "../pages/dashboard/Suppliers";
import Products from "../pages/dashboard/Products";
import PrintLogs from "../pages/dashboard/PrintLogs";
import TermsOfService from "../pages/dashboard/TermsOfService";
import Warranty from "../pages/dashboard/Warranty";
import Documents from "../pages/dashboard/Documents";

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
        <Route path="analytics" element={<Analytics />} />
        <Route path="profiles" element={<Profiles />} loader={profilesLoader} />
        <Route
          path="/dashboard/profiles/:id"
          element={<ProfileDetail />}
          loader={profileLoader}
        >
          <Route index element={<Details />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="orders-history" element={<OrderHistory />} />
        </Route>
        <Route path="orders" element={<DashboardOrders />} />
        <Route path="ledger" element={<DashboardLedger />} />
        <Route path="suppliers" element={<Suppliers />} />
        <Route path="products" element={<Products />} />
        <Route path="print-logs" element={<PrintLogs />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="warranty" element={<Warranty />} />
        <Route path="documents" element={<Documents />} />
        {/* PROFILE DETAILS NESTED ROUTE */}
      </Route>
    </>
  )
);
