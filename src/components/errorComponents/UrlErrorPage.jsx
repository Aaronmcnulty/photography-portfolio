import styles from "./urlErrorPage.module.css"
import { Link } from "react-router-dom";

const UrlErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default UrlErrorPage;
