import styles from "./gallery.module.css"

function Gallery(){

    return(
        <div className={styles.galleryPageContainer}>
            <div className={styles.galleryHeader}>
                <h1>Gallery Title</h1>
            </div>
            
            <div className={styles.controlsContainer}>
            <label>Gallery:  </label>
                <select>
                    
                    <option>110mm</option>
                    <option>35mm</option>
                </select>
            </div>

            <div className={styles.gallery}>
                
            </div>

        </div>
    )
}

export default Gallery;