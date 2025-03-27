import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navBar.module.css"

function NavBar(){

    const [isHidden, setIsHidden] = useState(true)

    const handleMenuClick = () => {
        if(isHidden == true){
            setIsHidden(false)
        } else {
            setIsHidden(true)
        }
        console.log(isHidden)
    }

    return(
            <div className={styles.navBarContainer}>

               
                <div className={styles.menuToggle}>
                    <p onClick={handleMenuClick} >///</p>
                </div>
                {!isHidden &&  
                    <div className={styles.navLinksContainer}>
                        <Link className={styles.navLink} to="/">Home</Link>
                        <Link className={styles.navLink} to="gallery">Gallery</Link>
                        <Link className={styles.navLink} to="contact">Contact</Link>
                    </div>
                }
            </div>

    )

}

export default NavBar;