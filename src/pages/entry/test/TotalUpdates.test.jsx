import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Options from "../Options";

test("update scoop subTotal when coops change", async () => {
  const user = userEvent.setup();
  render(<Options optionType="scoops" />);

  // starts out 0 dollars
  const subTotal = screen.getByText("Scoops total:", { exact: false });
  expect(subTotal).toHaveTextContent("0.00");
  //add vanilla scoop and check subtotal
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: /vanilla/i,
  });
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "1");

  expect(subTotal).toHaveTextContent("2.00");
  //add chocolate scoop and check subtotal

  const chocolateInput = await screen.findByRole("spinbutton", {
    name: /chocolate/i,
  });
  await user.clear(chocolateInput);
  await user.type(chocolateInput, "2");
  expect(subTotal).toHaveTextContent("6.00");
});
