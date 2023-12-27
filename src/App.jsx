//styles
import GlobalStyles from "./styles/GlobalStyles";

//router
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//Pages
import Dashboard from "./pages/Dashboard";
import News from "./pages/News";
import Rules from "./pages/Rules";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Trainings from "./pages/Trainings";
import PageNotFound from "./pages/PageNotFound";
import Training from "./pages/Training";
import Register from "./pages/Register";
import NewsDetailsPage from "./pages/NewsDetailsPage";
import CreateNewNewsPage from "./pages/CreateNewNewsPage";

//toastr
import { Toaster } from "react-hot-toast";

//redux
import { Provider } from "react-redux";
import store from "./store/store";

//react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//authorization
import ProtectedRoute from "./ui/ProtectedRoute";
import AdminProtectedRoute from "./ui/AdminProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 5,
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="login" />} />

              <Route
                path="dashboard"
                element={
                  <AdminProtectedRoute>
                    <Dashboard />
                  </AdminProtectedRoute>
                }
              />

              <Route
                path="users"
                element={
                  <AdminProtectedRoute>
                    <Users />
                  </AdminProtectedRoute>
                }
              />
              <Route
                path="users/:userId"
                element={
                  <AdminProtectedRoute>
                    <UserDetails />
                  </AdminProtectedRoute>
                }
              />
              <Route path="profile" element={<UserDetails />} />

              <Route path="news" element={<News />} />
              <Route path="news/:newsId" element={<NewsDetailsPage />} />
              <Route
                path="create/news"
                element={
                  <AdminProtectedRoute>
                    <CreateNewNewsPage />
                  </AdminProtectedRoute>
                }
              />

              <Route path="rules" element={<Rules />} />

              <Route path="trainings" element={<Trainings />} />
              <Route path="trainings/:trainingId" element={<Training />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Register />} />
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
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
