import { useRef } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = (props) => {
  const feedbackInputRef = useRef();
  const emailInputRef = useRef();
  const nameInputRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();

    // form data validation and show error if invalid data

    const feedbackData = {
      email: emailInputRef.current.value,
      feedback: feedbackInputRef.current.value,
      name: nameInputRef.current.value,
    };
    props.onAddFeedback(feedbackData);
  };

  return (
    <section className={styles.contact}>
      <h1>Help us get better</h1>
      <form onSubmit={submitFormHandler} className={styles.form}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email Address</label>
            <input
              type="email"
              id="email"
              required
              placeholder="email address..."
              ref={emailInputRef}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="feedback">Your Feedback</label>
            <textarea required id="feedback" rows={5} ref={feedbackInputRef} />
          </div>
        </div>
        <div className={styles.actions}>
          <button>Submit</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
