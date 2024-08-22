import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_34oqhln",
        "template_6ec7zmd",
        formRef.current,
        "BIfHoWSfYq7cfnItU"
      )
      .then(
        (result) => {
          setSuccess(true);
          setError(false); // Reset error state
        },
        (error) => {
          setError(true);
          setSuccess(false); // Reset success state
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let’s work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail:</h2>
          <span>iasraful321@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address:</h2>
          <span>Dhaka, Bangladesh</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone:</h2>
          <span>+880 16422 97037</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        {success ? (
          <motion.div
            className="successMessage"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Thank you!</h2>
            <p>Your message has been sent successfully.</p>
          </motion.div>
        ) : (
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 1 }}
            animate={success ? { opacity: 0, y: -50 } : { opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
          >
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea rows={8} placeholder="Message" name="message" />
            <button>Submit</button>
            {error && <p className="error">Error: Could not send message.</p>}
          </motion.form>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
