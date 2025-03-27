
import styles from "../contactForm/contactForm.module.css"

function ContactForm(){

    return(
        <>
            <form className={styles.contactForm}>
                
                <fieldset>
                    <legend>Your Details</legend>
                    <label htmlFor="name" >Name: <span aria-label="required">*</span></label>
                    <input id="name" type="text" name="name" required />
                    <label htmlFor="email">Email: <span aria-label="required">*</span></label>
                    <input id="email" type="email" name="email" required/>
                </fieldset>
                <fieldset>
                    <label htmlFor="message">Message Body: <span aria-label="required">*</span></label>
                    <textarea id="message" type="text" rows="9" name="message" required></textarea>
                </fieldset>
                <section className={styles.submitButton}>
                    <p>
                        <button>
                            Submit
                        </button>
                    </p>
                </section>
                    
            </form>
        </>   
    )
}

export default ContactForm;