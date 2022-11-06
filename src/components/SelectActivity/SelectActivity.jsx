import PropTypes from "prop-types";

export const SelectActivity = ({ handleChange, activitysArrey }) => {
  return (
    <div>
      <select onChange={handleChange} name="type" id="">
        {activitysArrey.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectActivity.propTypes = {
  handleChange: PropTypes.func.isRequired,
  activitysArrey: PropTypes.arrayOf(PropTypes.string),
};
