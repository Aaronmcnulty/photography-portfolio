import App from "./App";
import ContactPage from "./components/contact/ContactPage";
import HomePage from "./components/homepage/HomePage";
import UrlErrorPage from "./components/errorComponents/UrlErrorPage";

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: < UrlErrorPage/>,
        children: [
          { index: true, element: <HomePage /> },
          { path: "contact", element: <ContactPage /> },
          { path: "/", element: <HomePage /> },
        ],
      }
];

export default routes;
