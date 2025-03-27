import mainPic from "../../assets/pictures/mainPic.jpeg"
import styles from "./homePage.module.css"

function HomePage(){

    return(
        <div className={styles.homepageContainer}>
            
            <div className={styles.titleContainer}>
                <h1 className={styles.mainTitle}>It Is Home...</h1>
            </div>

            <div className={styles.textContainer}>
                <p className={styles.mainText}>Home Text</p>
            </div>

            
        </div>
    )

}

export default HomePage;