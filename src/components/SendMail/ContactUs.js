import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";

export const ContactUs = (props1) => {
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    if (props1.sent[2] && !emailSent) {
      emailjs
        .send(
          "service_i5rqd9s",
          "template_bqevmxg",
          {
            mail_id: props1.sent[2],
            limit: props1.sent[1],
            stock_name: props1.sent[0]
          },
          "4SFi-hy1ZQPFXIMoN"
        )
        .then(
          (result) => {
            console.log(result.text);
            setEmailSent(true); // Mark email as sent
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }, [props1.sent, emailSent]);

  return <div></div>;
};
