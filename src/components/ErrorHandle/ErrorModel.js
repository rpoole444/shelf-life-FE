import React from "react";

const ErrorModal = (props) => {
  return (
    <section className="error-modal">
      <section className="error-modal-box">
        <h2 className="error-message">{props.message}</h2>
      </section>
    </section>
  );
};

export default ErrorModal;
