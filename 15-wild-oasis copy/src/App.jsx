/* eslint-disable react/prop-types */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Bookings from "./pages/Bookings";
import Dashboard from "./pages/Dashboard";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

/**
 * ReactQuery - tanstack npm
 *
 * step1 : install tanstack npm
 * step2: set default options ie., const queryClient = new QueryClient({})
 * step3: wrap around entire APP tree  ie., <QueryClientProvider client={queryClient}>
 * step4: install react query dev tools ie., npm i @tanstack/react-query-devtools@4
 * step5 : add below in app tree ie., <ReactQueryDevtools initialIsOpen={false}>
 *
 * note:
 * defaultOptions has many example is staletime
 *  -> staletime: amount of time data stays in cache before refetched again
 *
 *
 *
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replaceto="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
