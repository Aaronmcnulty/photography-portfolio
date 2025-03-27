import App from "./App";
import ErrorPage from "./components/errorComponents/UrlError";
import ContactPage from "./components/contact/ContactPage";
import HomePage from "./components/homepage/HomePage";

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "contact", element: <ContactPage /> },
          { path: "/", element: <HomePage /> },
        ],
      }
];

export default routes;
