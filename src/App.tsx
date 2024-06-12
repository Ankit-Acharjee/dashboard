import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Analytics from "./pages/Analytics";
import Documents from "./pages/Documents";
import Messages from "./pages/Messages";
import Wallet from "./pages/Wallet";
import Activity from "./pages/Activity";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/wallets" element={<Wallet />} />
        <Route path="/activities" element={<Activity />} />
        <Route path="/analytics" element={<Analytics />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
