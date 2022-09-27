import React from "react";
import { Col, Form, Row } from "react-bootstrap";

function ScoopOptions({ name, imagePath, updateItemCount }) {
  function handleChange(event) {
    updateItemCount(name, event.target.value);
  }
  return (
    <Col xs={12} md={4} sm={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: "10px" }}
      >
        <Form.Label column xs="6" style={{ textAlign: "right" }}>
          {name}
        </Form.Label>
        <Col xs="5">
          <Form.Control
            onChange={handleChange}
            type="number"
            defaultValue={0}
          ></Form.Control>
        </Col>
      </Form.Group>
    </Col>
  );
}

export default ScoopOptions;
