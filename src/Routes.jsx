import App from "./App";
import ContactPage from "./components/contact/ContactPage";
import HomePage from "./components/homepage/HomePage";
import UrlErrorPage from "./components/errorComponents/UrlErrorPage";
import Gallery from "./components/gallery/Gallery";

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: < UrlErrorPage/>,
        children: [
          { index: true, element: <HomePage /> },
          { path: "contact", element: <ContactPage /> },
          { path: "/", element: <HomePage /> },
          { path: "gallery", element: <Gallery /> },
        ],
      }
];

export default routes;
