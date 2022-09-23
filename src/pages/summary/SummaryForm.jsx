import React, { useState } from "react";
import { Button, Form, Popover, OverlayTrigger } from "react-bootstrap";

function SummaryForm() {
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>no icecream will actually be delivered</Popover.Body>
    </Popover>
  );
  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={checkBoxValue}
          onChange={(e) => {
            setCheckBoxValue(e.target.checked);
          }}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button type="primary" disabled={checkBoxValue}>
        Order
      </Button>
    </Form>
  );
}

export default SummaryForm;
