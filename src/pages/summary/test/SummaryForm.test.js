import { render, screen } from "@testing-library/react";
import OrderSummary from "../OrderSummary";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

test("checkbox default un-selected", () => {
  render(<OrderSummary />);
  const checkBox = screen.getByRole("checkbox", {
    name: /I agree to Terms and Conditions/i,
  });
  const button = screen.getByRole("button", { name: "Order" });

  expect(button).toBeEnabled();
  expect(checkBox).not.toBeChecked();
});

test("check checkbox behavior", async () => {
  render(<OrderSummary />);
  const checkBox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  const button = screen.getByRole("button", { name: "Order" });
  await user.click(checkBox);
  expect(button).toBeDisabled();
  await user.click(checkBox);
  expect(button).toBeEnabled();
});

test("popover responds to hover", async () => {
  render(<OrderSummary />);
  const nullPopOver = screen.queryByText(
    /no icecream will actually be delivered/i
  );
  expect(nullPopOver).not.toBeInTheDocument();

  const termsAndConditions = screen.getByText(/Terms and Conditions/i);
  await user.hover(termsAndConditions);
  const PopOver = screen.queryByText(/no icecream will actually be delivered/i);
  expect(PopOver).toBeInTheDocument();

  await userEvent.unhover(termsAndConditions);
  const nullPopOverAgain = screen.queryByText(
    /no icecream will actually be delivered/i
  );
  expect(nullPopOverAgain).not.toBeInTheDocument();
});
