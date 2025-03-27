
import styles from "./contactPage.module.css"

function ContactPage(){

    return(
        <div className={styles.contactPageContainer}>

            <div className={styles.mainTitleContainer}>
                <h1 className={styles.mainTitle}>Contact</h1>
            </div>    

            <div className={styles.mainTextContainer}>
                <p className={styles.contactText}>contact details etc...</p>
            </div>
        </div>
    )
}

export default ContactPage