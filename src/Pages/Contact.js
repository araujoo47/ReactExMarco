import React from "react";

import Header from "../Components/Header";
import Form from "../Components/Form";

import "../Styles/form.less";

const Contact = () => {
  return (
    <div>
      
      <Header title="Contact" />

      <div className="messageForm">
        <Form />
      </div>

    </div>
  );
};

export default Contact;