import PropTypes from "prop-types";
export default function Button({ onClick, children }) {
  return (
    <button onClick={onClick} data-testid="button">
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
