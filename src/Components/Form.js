import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState();
  const [subject, setMessageSubject] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (event) => {
      event.preventDefault();
      alert(`${subject} sent!`);
  }

  return (
    <form onSubmit={event => handleSubmit(event, subject)}>

      <div>
      Email:
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" type="email" name="email"/>
      </div>

      <div>
      Subject:
      <input value={subject} onChange={e => setMessageSubject(e.target.value)} placeholder="State your subject" type="text" name="subject"/>
      </div>

      <div>
      Message:
      <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Write your message" name="message"/>
      </div>

      <button type="submit">Send message</button>

    </form>
  );
};

export default Form;
