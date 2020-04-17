import React from "react";

const TextMessage = ({ children, classname }) => {
  return (
    <div className={classname}>
      <p>{children}</p>
    </div>
  );
};

export default TextMessage;
