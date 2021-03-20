import React from "react";
import "./BurgerIngredient.css";
const BurgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "meat":
      ingredient = <div className="meat"></div>;
      break;
    case "salad":
      ingredient = <div className="salad"></div>;
      break;
    case "cheese":
      ingredient = <div className="cheese"></div>;
      break;
    case "chicken":
      ingredient=<div className="chicken"></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

export default BurgerIngredient;
