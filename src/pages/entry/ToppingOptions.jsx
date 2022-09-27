import React from "react";
import { Col } from "react-bootstrap";

function ToppingOptions({ name, imagePath, updateItemCount }) {
  return (
    <Col xs={12} md={4} sm={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        alt={`${name} topping`}
        src={`http://localhost:3030/${imagePath}`}
      />
    </Col>
  );
}

export default ToppingOptions;
