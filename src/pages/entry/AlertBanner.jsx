import React from "react";
import { Alert } from "react-bootstrap";

function AlertBanner({ message, variant }) {
  const alertMessage =
    message || "an unexpected error occured. please try again latter.";
  const alerVariant = variant || "danger";
  return (
    <div>
      <Alert variant={alerVariant} style={{ backgroundColor: "red" }}>
        {alertMessage}
      </Alert>
    </div>
  );
}

export default AlertBanner;
