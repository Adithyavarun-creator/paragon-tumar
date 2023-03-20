import React from "react";
import "./ContactForm.css";
const ContactForm = () => {
  return (
    <div className="contactFormContainer">
      <div className="contactFormimagebg">
        <img
          src="https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHdyaXRlJTIwaGVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60"
          className="contactFormimage"
          alt="form"
        />
      </div>

      <form className="contactFormbox">
        <div>
          <h2 className="contactFormheading">Let's get in touch !</h2>
        </div>
        <div className="contactFormFields">
          <div>
            <label className="contactFormLabel" htmlFor="firstname">
              First name
            </label>
            <input
              className="contactFormInput"
              id="firstname"
              type="text"
              required
            />
          </div>
          <div>
            <label className="contactFormLabel" htmlFor="lastname">
              Last name
            </label>
            <input
              className="contactFormInput"
              id="lastname"
              type="text"
              required
            />
          </div>
          <div>
            <label className="contactFormLabel" htmlFor="emailaddress">
              Email address
            </label>
            <input
              className="contactFormInput"
              id="emailaddress"
              type="email"
              required
            />
          </div>
        </div>
        <div>
          <div>
            <label className="contactFormtextLabel" htmlFor="message">
              Message content
            </label>
            <textarea
              className="contactFormtextarea"
              id="message"
              type="text"
            />
          </div>
        </div>
        <div className="flexCenter">
          <button className="contactFormbutton">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

//https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2V0JTIwaW4lMjB0b3VjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60
