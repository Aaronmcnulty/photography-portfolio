import NavBar from "../navigation/NavBar";
import styles from "./header.module.css"
function Header(){

    return(
        <div className={styles.headerContainer}>
            <h3 className={styles.logo}>LOGO</h3>
            <NavBar />
        </div>
    )
}

export default Header;