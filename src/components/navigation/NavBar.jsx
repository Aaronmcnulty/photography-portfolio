
import { Link } from "react-router-dom";
import styles from "./navBar.module.css"

function NavBar(){

    return(
        <>
            <Link className={styles.navLink} to="/">Home</Link>
            <Link className={styles.navLink} to="contact">Contact</Link>
        </>
        
    )

}

export default NavBar;