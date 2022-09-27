import React, { useEffect, useState } from "react";
import axios from "axios";
import ScoopOptions from "./ScoopOptions";
import { Row } from "react-bootstrap";
import ToppingOptions from "./ToppingOptions";
import AlertBanner from "./AlertBanner";
import { pricePerItem } from "../../constants/Index";
import { useOrderDetails } from "../../constexts/OrderDetails";
function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, seterror] = useState(false);
  const [OrderDetails, updateItemCount] = useOrderDetails();

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => {
        setItems(res.data);
        seterror(false);
      })
      .catch((err) => {
        console.log({ err });
        seterror(true);
      });
  }, [optionType]);

  const ItemsComponent =
    optionType === "scoops" ? ScoopOptions : ToppingOptions;
  const title = optionType[0].toUpperCase() + optionType.slice(1);
  if (error) {
    return <AlertBanner />;
  }
  const optionItems = items.map((item) => (
    <ItemsComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, optionType)
      }
    />
  ));

  return (
    <>
      <h2>{title}</h2>
      <p>{pricePerItem[optionType]} each</p>
      <p>
        {title} total: {OrderDetails.totals[optionType]}$
      </p>
      <Row>{optionItems}</Row>
    </>
  );
}

export default Options;
