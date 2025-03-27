import mainPic from "../../assets/pictures/mainPic.jpeg"
import styles from "./homePage.module.css"

function HomePage(){

    return(
        <div className={styles.homepageContainer}>
            
            <div className={styles.homepageTitleContainter}>
                <h1 className={styles.homepageTitle}>It Is Home...</h1>
            </div>

            <div className={styles.homepageTextContainer}>
                <p className={styles.homepageText}>Home Text</p>
            </div>

            
        </div>
    )

}

export default HomePage;