import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./slices";
import Home from "./pages/Home/Home";
import routes from "./Config/route";
import SignUpPage from "./pages/Home/SignUpPage";
import SigninPage from "./pages/Home/SigninPage";
import PropertyPage from "./pages/PropertyPage/PropertyPage";
import PropertyIndivPage from "./pages/PropertyPage/PropertyIndivPage";
import ContactUsForm from "./components/HomeComponents/ContactUsForm";
import WantToSell from "./components/HomeComponents/WantToSell";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: routes?.contactus,
    element: <ContactUsForm />,
  },

  {
    path: routes?.wantToSell,
    element: <WantToSell />,
  },

  {
    path: routes?.signin,
    element: <SigninPage />,
  },

  {
    path: routes?.signup,
    element: <SignUpPage />,
  },
  {
    path: routes?.properties,
    children: [
      { index: true, element: <PropertyPage /> },
      { path: routes?.properties_id, element: <PropertyIndivPage /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
