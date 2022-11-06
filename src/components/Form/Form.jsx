import PropTypes from "prop-types";

import { useState } from "react";
import { SelectActivity } from "../SelectActivity/SelectActivity";

export const Form = ({ activitysArrey }) => {
  const [activityType, setActivityType] = useState(activitysArrey[0]);
  const [participants, setParticipants] = useState(1);
  const [price, setPrice] = useState(0);
  const [accessibility, setAccessibility] = useState(0.05);

  const setData = (event) => {
    const { name, value } = event.target;
    console.log("name, value", name, value);
    switch (name) {
      case "type":
        setActivityType(value);
        break;
      case "participants":
        setParticipants(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "accessibility":
        setAccessibility(value);
        break;
      default:
        break;
    }
  };

  return (
    <form action="">
      <SelectActivity handleChange={setData} activitysArrey={activitysArrey} />
      <input
        onChange={setData}
        type="number"
        min={1}
        max={10}
        name="participants"
      />
      <select name="price" id="" onChange={setData}>
        <option value="0">Free</option>
        <option value="1">Cost</option>
      </select>
      <select name="accessibility" id="" onChange={setData}>
        <option value="0.05">Easy</option>
        <option value="0,5">Medium</option>
        <option value="1">Hard</option>
      </select>
    </form>
  );
};

Form.propTypes = {
  activitysArrey: PropTypes.arrayOf(PropTypes.string.isRequired),
};
