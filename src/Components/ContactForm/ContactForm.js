import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [err, setErr] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subject, setSubject] = useState("");
  const form = useRef();

  // Custom debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  // Debounce the sendEmail function with a delay of 2 seconds (adjust as needed)
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email || !name || !message) {
      setErr(true);
      console.error("Please fill all the fields !");
      return;
    }

    if(subject !== ""){
      console.warn("UNUSUAL ACTIVITY DETECTED, please try again later..");
      console.error("UNUSUAL ACTIVITY DETECTED, please try again later..");
      setErr(true);
      return;

    }
    setErr(false);
    if (!isSubmitting) {
      setIsSubmitting(true);
      debouncedSendEmail();
    }
  };
  
  const sendEmail = () => {
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
    )
    .finally(() => {
      setEmail("");
      setName("");
      setMessage("");
      setIsSubmitting(false);
    });
  };
  const debouncedSendEmail = debounce(sendEmail, 2000);
  
  
  // const sendEmail = (e) => {
    //   e.preventDefault();
    //   if(!email || !name || !message) {
  //     setErr(true)
  //     console.error("Please Fill all the fields !")
  //     return
  //   };
  //   setErr(false)

  //   emailjs
  //     .sendForm(
  //       "service_6i0dr4d",
  //       "template_82jl46j",
  //       form.current,
  //       "jtWv7VqitHp320Q0l"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         console.log("Form data:", form.current);
  //         console.log("message sent");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //     setEmail("")
  //     setName("")
  //     setMessage("")
  // };

  return (
    <div className="contact-form">
      <form ref={form} onSubmit={handleFormSubmit}>
        {err && <p style={{color:"red"}}>Please fill all the fields correctly ! </p>}
        <label>Name</label>
        <input type="text" name="user_name" className="userName" value={name} onChange={(e) => {
          setName(e.target.value)
        }}/>
        <label>Email</label>
        <input type="email" name="user_email" value={email}  onChange={(e) => {
          setEmail(e.target.value)
        }}/>

        <label style={{display: "none", "visibility":"hidden"}}>Subject</label>
        <textarea style={{display: "none", "visibility":"hidden"}} name="subject" value={subject}  onChange={(e) => {
          setSubject(e.target.value)
        }}/>
        <label>Message</label>
        <textarea name="message" value={message}  onChange={(e) => {
          setMessage(e.target.value)
        }}/>
        <input className="formsub_btn" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
