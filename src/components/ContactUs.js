import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com'
import './ContactUs.css'

export const ContactUs = (props1) => {
  const form = useRef();
  const [pr,setPr]=useState("")
  const sendEmail = (e) => {
     e.preventDefault();
    emailjs.sendForm('service_i5rqd9s', 'template_bqevmxg', form.current, 'Y1lAR7WJoilJOhm0F')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  // const formRef = useRef(null);

  useEffect(() => {
    console.log("Hello")
  }, []);
  // console.log(props1)
  return (


    <form ref={form} onSubmit={sendEmail}>
      <div className='dis-form'>
      <input type="email" name="mail_id" placeholder='email' defaultValue={props1.sent[2]}/>
      <textarea name="limit" placeholder='limit' defaultValue={props1.sent[1]}/>
      <input type="text" name="stock_name" placeholder='stock name' defaultValue={props1.sent[0]} />
      </div>  
      <input className='btn2' type="submit" value="Send" />
    </form>                                   
  );
};