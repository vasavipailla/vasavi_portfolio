import React from "react";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const Contact = ({contact}) => {
    const form = useRef();
    const [formValues, setFormValues] = useState({
        username: "",
        email: "",
        message: "",
      });
    
     
 const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_pcp63hh', 'template_w8s9cck', form.current, 'BB4lUzr43t7jFVfi0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setFormValues({
        username: "",
        email: "",
        message: ""
      });
      

  };
    return (
        <div className="form p-5">
            <h2 className="contact-title p-5">Contact Me</h2>
            <form ref={form} onSubmit={(e) => sendEmail(e)}>
                <div className="form-group mb-3"> 
                    <label className="form-label"> Your Name: </label> 
                    <input className="form-control" name="username" value={formValues.username} onChange={(e) =>
            setFormValues({ ...formValues,username: e.target.value })} placeholder="name" required />
                  
                </div>
                <div className="form-group mb-3">
                    <label className="form-label"> Your Email: </label> 
                    <input className="form-control border-b-2 text-gray-700 w-70 bg-gray-100 h-10 px-2" name="email" value={formValues.email} placeholder="Email" onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })} required />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label"> Message: </label> 
                    <textarea className="form-control" name="message" value={formValues.message} onChange={(e) =>
            setFormValues({ ...formValues, message: e.target.value })} placeholder="Message" required />
                </div>
                <div className="button">
                    <button className="btw">Send Message</button>
                </div>
            </form>
        </div>
      );
    
}

export default Contact;