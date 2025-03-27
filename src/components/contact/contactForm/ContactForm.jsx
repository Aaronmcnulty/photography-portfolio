
import styles from "../contactForm/contactForm.module.css"

function ContactForm(){

    return(
        <>
            <form className={styles.contactForm}>
                <section>
                    <label htmlFor="name">Name: </label>
                    <input type="text" />
                </section>
                <section>
                    <label htmlFor="email">Email: </label>
                    <input type="email" />
                </section>
                <section>
                    <label htmlFor="message">Message: </label>
                    <textarea type="text" rows="9"></textarea>
                </section>
                <section>
                    <button>
                        Submit
                    </button>
                </section>
            </form>
        </>   
    )
}

export default ContactForm;