import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      console.log("Name, Email, or Message is empty. Not sending email.");
      return;
    }

    emailjs
      .sendForm(
        "service_6i0dr4d",
        "template_82jl46j",
        form.current,
        "jtWv7VqitHp320Q0l"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Form data:", form.current);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="formsub_btn" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
