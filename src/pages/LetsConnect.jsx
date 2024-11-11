import React from "react";
import {assets} from "../assets/assets";
import Contact from "../components/Contact";


const LetsConnect = () => {
  return (
    <>
      <div>
        <img src={assets.letimage} />
      </div>
      <div>
        <span>
          For new customers interested in doing business with us or learning
          more, please fill out the form below. One of our sales representatives
          will be in touch as soon as possible!
        </span>
      </div>
      <div>
        <span>
          Current customers with specific questions or looking to connect with
          your sales rep, email: sales@optimum.media or call: 929-418-4190.
          Please provide us with the following details so that we can better
          assist you: contact name, business name, email, phone number, name of
          your sales rep, and your question.
        </span>
      </div>
      <Contact />
    </>
  );
};

export default LetsConnect;
