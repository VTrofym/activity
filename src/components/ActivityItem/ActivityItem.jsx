import React from "react";
import PropTypes from "prop-types";

export function ActivityItem({ activity }) {
  const { activity: activ, type, participants, price, link } = activity;
  return (
    <div className="App">
      <p>activity: {activ}</p>
      <p>type: {type}</p>
      <p>participants : {participants}</p>
      <p>price: {price}</p>
      <p>link: {link}</p>
    </div>
  );
}

ActivityItem.propTypes = {
  activity: PropTypes.shape({
    activity: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    participants: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};
