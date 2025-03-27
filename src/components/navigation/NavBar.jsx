
import { Link } from "react-router-dom";
import styles from "./navBar.module.css"

function NavBar(){

    return(
        <div className={styles.navBarContainer}>
            <Link className={styles.navLink} to="/">Home</Link>
            <Link className={styles.navLink} to="gallery">Gallery</Link>
            <Link className={styles.navLink} to="contact">Contact</Link>
        </div>
        
    )

}

export default NavBar;