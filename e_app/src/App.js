import "./App.css";
import { CheckoutPage, HomePage } from "./pages/Pages";
import { BrowserRouter, useRoutes } from "react-router-dom";

function App() {
  const AppRoutes = () =>
    useRoutes([
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
    ]);
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
