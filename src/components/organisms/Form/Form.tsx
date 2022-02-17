import React, { FC, useRef } from 'react';
import emailjs from "emailjs-com";

const Form:FC = ():JSX.Element => {

  const sendEmail = (e:any):void => {
    e.preventDefault();
    console.log(e);

    emailjs.sendForm('service_pcayoyj', 'template_1iqqvaz', e.target, 'user_kdgSj2t9GywDNk9JMRvx6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  )
}

export default Form;
