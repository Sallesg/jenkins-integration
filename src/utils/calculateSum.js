import PropTypes from "prop-types";
export function calculateSum(a, b) {
  return a + b;
}

calculateSum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};
