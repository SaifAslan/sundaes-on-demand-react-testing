import {
  render,
  screen,
  waitFor,
} from "../../../test-utils/testing-library-utils";
import Options from "../Options";

test("dispaly image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((elm) => elm.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("display image for each topings option for server", async () => {
  render(<Options optionType="toppings" />);
  let toppingsImages;
  await waitFor(async () => {
    toppingsImages = await screen.findAllByRole("img", {
      name: /topping$/i,
    });
    expect(toppingsImages).toHaveLength(3);
  });

  const altText = toppingsImages.map((item) => item.alt);
  expect(altText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
