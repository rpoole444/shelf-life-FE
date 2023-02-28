import React from "react";
import PropTypes from 'prop-types';
import "./ErrorModal.css";

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

ErrorModal.propTypes = {
  message: PropTypes.string
}
